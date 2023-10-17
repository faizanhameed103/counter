import { useState,useEffect } from "react";
function Useeff(){
    let [count,setCounter]=useState(10)
    useEffect(()=>{
        console.log('Component Mounted')
        return function(){
            console.log('Unmount Counter')
        }
    },[])
    useEffect(()=>{
        console.log('component updated')
    },[count])

    function inc(){
        setCounter(count+1)
    }
    function dec(){
        setCounter(count-1)
    }
    return(
        <>
            <div>
                counter is {count}
            </div>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>dec</button>
        </>
    )
}
export default Useeff

