
import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import Child from '../Child';

export default function useCallbackTest() {
    const [count, setCount] = useState(10)
    // 缓存一个置零的函数
    const cacheSetCount = useCallback(() => setCount(0),[setCount]);
    useEffect(() => {
        console.log('use effect..')
    },[])

    useLayoutEffect(() => {
        console.log('use layout effect')
    })
    return (
        <div>
            use callback page
            <span>{count}</span>
            <Child onSetCount={() => setCount(0)} />
        </div>
    )
}