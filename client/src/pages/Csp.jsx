import React,{useContext} from "react";
import Web3Context from "../context";
import Navbar from "../components/Navbar";
import  {useNavigate} from "react-router-dom";
const Csp = () => {
  const navigate= useNavigate();
  const handleRegister=()=>{
        navigate('/register');
  }
  const handleView=()=>{
       navigate('/view');
  }
  return (
    <div>
      <Navbar/>
      <div>
        <button onClick={handleRegister} >Register CSP</button>
        <button onClick={handleView}>View Costumers</button>
      </div>
      
    </div>
  )
}
export default Csp;