import {setNumbers,sum,reset} from "../reducerActions/denOfProjectsReducerActoins";

export const mapStateToProps = (state: any) => {
  return { dopState: state.denOfProjectsReducerState };
};

export function mapDispatchToProps(dispatch: any) {
  return {

    onInputChange: (e: any) => {
      dispatch(setNumbers(e.target));
    },

    onSum: (e:any)=>{
      dispatch(sum(e.target));
    },
    onReset: ()=>{
      dispatch(reset());
    }
  };
}
