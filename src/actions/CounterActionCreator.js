
// action creators:  why do we need them?
// action is an object

import { INCREMENT, DECREMENT, RESET } from './actionTypes.js';


export const  increment = (value) => {
      return {
          type:  INCREMENT,
          value: value
      }
}

export const  decrement = (value) => {
        return {
            type:  DECREMENT,
            value: value

        }
}


export const  reset = () => {
        return {
            type:  RESET
        }
}



// action = {
//      type: INCREMENT,
//      calue:  10
// }