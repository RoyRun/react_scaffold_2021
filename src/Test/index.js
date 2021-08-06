import React, { useReducer } from 'react'

function Test() {
    function reducer(state, action) {
        switch(action.type) {
            case 'add': 
               return state+1;
            case 'reduce':
                return state-1;
            default:
                break;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            {count}
            <button onClick={() => dispatch({ type: 'add' })} >点我 Count ++ </button>
            <button onClick={() => dispatch({ type: 'reduce' })} >点我 Count -- </button>

        </div>
    )
}
export default Test;