
import { INCREMENT, DECREMENT,RESET } from '../actions/actionTypes.js'; // actionNames

let counterInitialState = {a:0}


function CounterReducers (state=counterInitialState, actions) {

    switch(actions.type){

        case INCREMENT: 
                return {...state, a: state.a + actions.value}
        case DECREMENT:
                return {...state, a: state.a - actions.value};
        case RESET:
                return {...state, a: 0};
        default:
                return state;

    }
           
}



export default CounterReducers;


// actions 

// CouterRedcuer(state, incremnt)