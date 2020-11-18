import {var1,var2,res,oper} from "../reducerActions/denOfProjectsReducerActoins";



export const mapStateToProps = (state:any) => {
  return {

    num1:state.num1,
    num2:state.num2,
    result:state.result,
    op:state.op,
    dopState: state.denOfProjectsReducerState

  }
}





export function mapDispatchToProps  (dispatch:any)  {
  return {

    var1: (val1:any) => { dispatch(var1(val1)) },
    var2: (val2:any) => { dispatch(var2(val2)) },
    oper: (value:any) => { dispatch(oper(value)) },
    res: () => { dispatch(res()) },

  }
};