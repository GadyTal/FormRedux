import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { PortalDesignEntity } from "../../../Store/portalDesignStore";
import { deletePortalDesignEntity, RootState, savePortalDesignEntity, updatePortalDesignEntity } from "../../../Store/store";

interface PortalDesignFormContainerProps extends PropsFromRedux {
  renderProp: (initState: Record<string, any>, onSubmit: (data: any) => Promise<string>, localEditEntity: (data?: PortalDesignEntity) => void
  ) => JSX.Element;
}

const PortalDesignFormContainer: React.FC<PortalDesignFormContainerProps> = (props) => {
  const { renderProp, savePortalDesignEntity, updatePortalDesignEntity, currentEditEntity = {} } = props;

  const onSubmit = (data: PortalDesignEntity = { name: "Pd", id: "1" }) => {
    return new Promise<string>((res, rej) => {
      setTimeout(() => {
        if (currentEditEntity) {
          savePortalDesignEntity(data)
          res('finish');
        } else {
          rej('no edit entity')
        }
      }, 3000)
    })
  };

  const localEditEntity = (data: PortalDesignEntity = { name: "Pd", id: "1" }) => {
    updatePortalDesignEntity(data);
  }

  return renderProp(currentEditEntity, onSubmit, localEditEntity)
};

const connector = connect((state: RootState) => ({
  currentEditEntity: state.portalDesign.form.current
}), {
  savePortalDesignEntity, deletePortalDesignEntity, updatePortalDesignEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PortalDesignFormContainer);
