// store the state varaible: 
import { createStore } from 'redux';
import CounterReducers from './reducers/CounterReducers.js';


const store =  createStore(CounterReducers); // store the state variable


export default store;



// store => keeping the state updates and also reducer functions(state, action)










// conreateContext()  // create a context object -global state