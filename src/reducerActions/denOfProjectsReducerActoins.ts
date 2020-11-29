import { denOfProjectsActionTypes } from "../actionTypes/denOfProjectsActionTypes";

export function setNumbers(data: any) {
  return {
    type: denOfProjectsActionTypes.SET_NUMBERS,
    data: data,
  };
}

export function sum(data:any){
  return {
    type: denOfProjectsActionTypes.SUM,
    data:data
  }
}
export function reset(){
  return {
    type: denOfProjectsActionTypes.RESET,
    
  }
}
