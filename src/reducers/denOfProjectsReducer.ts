import {  Reducer } from "redux";
import { denOfProjectsActionTypes } from "../actionTypes/denOfProjectsActionTypes";
import { denOfProjectsDTO } from "../DTOs/denOfProjectsDTO";


const initialState:denOfProjectsDTO ={
  num1:"",
  num2:"",
  result:"",
  op:""
};

const denOfProjectsReducer: Reducer = (
  state = initialState,action
) => {
  
  console.log(state)
  switch(action.type)
    {
        case denOfProjectsActionTypes.NUM:{
            if(state.num1==="")
            return{...state,num1:state.num1+action.payload}
            else
            return{...state,num2:state.num2+action.payload}
        }
         
         case denOfProjectsActionTypes.OPER:console.log(action.payload)
             return{
              ...state,op:action.payload
              
            
        }
       
        case denOfProjectsActionTypes.RES:return{
            ...state,op:state.op,result:eval(state.num1 +state.op+state.num2)

        }
        default:return state
    }
};

export default denOfProjectsReducer;
