import React, { memo, useRef } from 'react'

function Child(props) {
   console.log('render Child');
   const random = useRef(Math.random());
    return (
        <div>
            <span>child page...</span>
            <p>{random.current}</p>
            <button onClick={props.onSetCount} >点我 Count ++ </button>
        </div>
    )
}
export default memo(Child);