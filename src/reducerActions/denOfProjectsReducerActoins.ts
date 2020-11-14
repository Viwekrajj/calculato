import { denOfProjectsActionTypes } from "../actionTypes/denOfProjectsActionTypes";


export const num=(val:any)=>{
  return {
      type:denOfProjectsActionTypes.NUM,
      payload:val
      
  }
}
export const oper=(val:any)=>{
  return {
      type:denOfProjectsActionTypes.OPER,
      payload:val
      
  }
}
export const res=()=>{
  return {
      type:denOfProjectsActionTypes.RES
      
      
  }
}

