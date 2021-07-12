
export const FormStateModelManagerRuleForm: React.FC<React.PropsWithChildren<{open: Function}>> = (props) => {
  const {children, open} = props;

  // const c = useContext(FormState)

  
  // const ruleFormUpdaterFn = (propertyToUpdate, state, responseModel) => {
  //   switch(propertyToUpdate) {
  //     case "certificateId": 
  //     state.certificateId = responseModel.id;
  //     case "applicationGroupId": 
  //     state.applicationGroupId = responseModel.applicationGroupId.push(responseModel.id);
  //     default:
  //       return state;
  //     }
      
  //     return {
  //       ....state
  //     }
  //   }
    
  // c.registerUpdaterFunction(ruleFormUpdaterFn)

  // useEffect(() => {
  //   c.desregisterUpdateFunction(); // deregister, clear
  // }, [])

  // return children(open)
  return null;
}