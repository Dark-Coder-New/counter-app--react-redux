// getState() - returns the current state of the store 
// dispatch(action) - dispatches an action to the store. This is the only way to trigger a state change. 
// dispatch() => not directly used in React => useDispatch() hook instead
//getSate => not directly used in React => useSelector() hook instead

import React from "react"; 
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "./actions/CounterActionCreator";

const App = () => {
     const counter =   useSelector(state => state.a)
     const dispatch = useDispatch();

     return(
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>dispatch(increment(100))}> increment</button>
        <button onClick={()=>dispatch(decrement(50))}> decrement</button>
        <button onClick={()=>dispatch(reset())}> reset</button>
      </div>
     )
     
}

export default App;