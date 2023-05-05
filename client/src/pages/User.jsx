import React from "react";
import { useNavigate } from "react-router-dom";
const User=() =>{
    const navigate=useNavigate();
    const handleIssue=()=>{
        navigate('/issue');
    }
    const handlePort=()=>{
        navigate('/port');
    }
    return(
<div className="flex justify-around items-center h-screen w-[100vw]">
<button className="bg-blue-500 px-2 py-2 flex justify-evenly items-center"onClick={handleIssue}>Issue New Number</button>

<button className="bg-blue-500 px-2 py-2 flex justify-evenly items-center"onClick={handlePort}>Port Number</button>
</div>  
    )
}

export default User;