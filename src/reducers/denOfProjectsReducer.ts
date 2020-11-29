import { Reducer } from "redux";
import { denOfProjectsActionTypes } from "../actionTypes/denOfProjectsActionTypes";
import { denOfProjectsDTO } from "../DTOs/denOfProjectsDTO";

const initialState: denOfProjectsDTO = {
  
  number1: 0,
  number2: 0,
  result: 0,
};

const denOfProjectsReducer: Reducer<denOfProjectsDTO> = (
  state = initialState,
  action
) => {
  const newState = { ...state };
  switch (action.type) {
   

    case denOfProjectsActionTypes.SET_NUMBERS: {
      if (action.data.id === "firstNumber") {
        newState.number1 = Number(action.data.value);
      } else {
        newState.number2 = Number(action.data.value);
      }
      
      return newState;
    }

    case denOfProjectsActionTypes.SUM: {
      if (action.data.id==="sum" && (newState.number1 && newState.number2)) {
        newState.result = newState.number1 + newState.number2;
      }
      else if (action.data.id==="sub" && (newState.number1 && newState.number2)) {
        newState.result = newState.number1 - newState.number2;
      }
      else if (action.data.id==="mult" && (newState.number1 && newState.number2)) {
        newState.result = newState.number1 * newState.number2;
      }
      else if (action.data.id==="div" && (newState.number1 && newState.number2)) {
        newState.result = newState.number1 / newState.number2;
      }
      return newState;
    }
    case denOfProjectsActionTypes.RESET: {
      
      
      return {
        number1:0,
        number2:0,
        result:0
      };
    }

    default: {
      return newState;
    }
  }
};

export default denOfProjectsReducer;
