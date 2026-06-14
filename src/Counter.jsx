import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);
    const handleLike = ()=>{
        setCount (count +1)
    }  
    const handleUnlike = ()=>{
        setCount (count -1)
    }

    return(
        <>
        

        <div>Count: {count}</div>
        <button onClick={count ?handleUnlike:handleLike} className="button bg-blue-400 text-white p-4 rounded-2xl" >like</button>


        </>
    )
}