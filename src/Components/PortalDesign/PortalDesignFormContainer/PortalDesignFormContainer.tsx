import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { deleteEntity, PortalDesignEntity, saveEntity, updateEntity } from "../../../Store/portalDesignStore";
import { RootState } from "../../../Store/store";

interface PortalDesignFormContainerProps extends PropsFromRedux {
  renderProp: (initState: Record<string, any>, onSubmit: (data: any) => Promise<PortalDesignEntity>, localEditEntity: (data?: PortalDesignEntity) => void
  ) => JSX.Element;
}

const PortalDesignFormContainer: React.FC<PortalDesignFormContainerProps> = (props) => {
  const { renderProp, saveEntity, updateEntity, currentEditEntity = {} } = props;

  const onSubmit = (data: PortalDesignEntity = { name: "Pd", id: "1" }) => {
    return new Promise<PortalDesignEntity>((res, rej) => {
      setTimeout(() => {
        if (currentEditEntity) {
          saveEntity(data)
          res(data);
        } else {
          rej('no edit entity')
        }
      }, 3000)
    })
  };

  const localEditEntity = (data: PortalDesignEntity = { name: "Pd", id: "1" }) => {
    updateEntity(data);
  }

  return renderProp(currentEditEntity, onSubmit, localEditEntity)
};

const connector = connect((state: RootState) => ({
  currentEditEntity: state.PortalDesign.form.current
}), {
  deleteEntity, saveEntity, updateEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PortalDesignFormContainer);
