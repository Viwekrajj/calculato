import { denOfProjectsActionTypes } from "./actionTypes/denOfProjectsActionTypes";
import {reset,setNumbers,sum} from "./reducerActions/denOfProjectsReducerActoins";




//  testing code for reduceraction 
describe("action-types",()=>{
  it('should create a action to reset the value',()=>{
    
     const expectedAction ={
      type:denOfProjectsActionTypes.RESET,
      
    }
    expect(reset()).toEqual(expectedAction)
  })
})

describe("action-types",()=>{
  it('should create a action to select the operation',()=>{
    
    const data = true 
     const expectedAction ={
      type:denOfProjectsActionTypes.SUM,
      data:data
      
      
    }
    expect(sum(data)).toEqual(expectedAction)
  })
})

describe("action-types",()=>{
  it('should create a action to select the input numbers',()=>{
    
    const data = true 
     const expectedAction ={
      type:denOfProjectsActionTypes.SET_NUMBERS,
      data:data
      
      
    }
    expect(setNumbers(data)).toEqual(expectedAction)
  })
})





