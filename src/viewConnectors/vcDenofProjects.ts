import {num,res,oper} from "../reducerActions/denOfProjectsReducerActoins";

// export const mapStateToProps = (state: any) => {
//   return { dopState: state.denOfProjectsReducerState };
// };

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

    num: (val:any) => { dispatch(num(val)) },
    oper: (value:any) => { dispatch(oper(value)) },
    res: () => { dispatch(res()) },

  }
};
