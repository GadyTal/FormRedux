import React from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import UiStateContextProvider from "../../Context/UiStateCtx/UiStateCtx";
import { RootState } from "../../Store/store";
import { CurrentOpen, EntityType, OpenComponentFn } from "../../Types/types";
import PagerComponent from "../Common/PagerComponent";
import { FormContainer } from "../FormContainer";
import RuleFormContainer from "./RuleFormContainer";
import { ruleFormMachine } from "./RuleStateMachine";
import { setUiState, setActivePageId } from "../../Store/ruleStore";

export const RuleFormPager: React.FC<
  { openFn: OpenComponentFn; close: () => void } & PropsFromRedux
> = ({ openFn, close, setUiState, setActivePageId, initialPage }) => {
  const entityStateMachineOptions = {
    actions: {
      closeModal: () => {
        close();
      },
    },
    services: {
      apiCall: () => {
        return Promise.resolve("success");
      },
    },
  };

  const handleUiStateSave = (uiState: Record<string, Record<string, any>>) => {
    setUiState(uiState);
  };

  return (
    <PagerComponent
      initialPage={initialPage}
      entityStateMachine={ruleFormMachine}
      entityStateMachineOptions={entityStateMachineOptions}
      renderProps={(changePage, currentPage, activePageId) => {
        return (
          <RuleFormContainer
            renderProp={(initState, onSubmit, editEntity) => {
              const c = useSelector(
                (state: RootState) => state.Rule.form.uiState
              );
              return (
                <UiStateContextProvider
                  uiState={c}
                  onUiStateSave={handleUiStateSave}
                  id={activePageId}
                  renderProp={(setUiState) => {
                    return (
                      <FormContainer
                        schema={(currentPage.context as any).schemaValidation}
                        initialState={initState}
                        formName={"Rule Form Container"}
                        onSubmit={(data) => {
                          changePage("SUBMIT");
                        }}
                        renderProps={(
                          validation,
                          formState,
                          errors,
                          setFormState
                        ) => {
                          const CurrentComponent = (currentPage.context as any)
                            .Component;
                          return (
                            <CurrentComponent
                              errors={errors}
                              state={formState}
                              setFormState={setFormState}
                              changePage={(dest: string) => {
                                changePage(dest);
                                setUiState();
                                setActivePageId(activePageId);
                              }}
                              openFn={(current: CurrentOpen) => {
                                openFn(current);
                                editEntity(formState);
                                setUiState();
                                setActivePageId(activePageId);
                              }}
                            />
                          );
                        }}
                      />
                    );
                  }}
                />
              );
            }}
          />
        );
      }}
    />
  );
};

const connector = connect(
  (state: RootState) => ({
    initialPage: state.Rule.form.activePageId,
  }),
  {
    setUiState,
    setActivePageId,
  }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(RuleFormPager);
