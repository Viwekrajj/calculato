import { denOfProjectsActionTypes } from "../actionTypes/denOfProjectsActionTypes";


export const var1=(val:any)=>{
  return {
      type:denOfProjectsActionTypes.VAR1,
      payload:val
      
  }
}
export const var2=(val:any)=>{
  return {
      type:denOfProjectsActionTypes.VAR2,
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

