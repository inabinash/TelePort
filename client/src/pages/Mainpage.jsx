import React from "react";
import Navbar from "../components/Navbar";
import { NavLink  ,useNavigate} from "react-router-dom";
import Web3Context from "../context";
const Mainpage = () => {
  const navigate= useNavigate();
  const {account}=React.useContext(Web3Context);
  const handleCSP=()=>{
      navigate('/csp');
  }
  const handleCostumer=()=>{
    navigate('/user');
  }
    return (
    <>
    <Navbar walletAddress="Abinash"/>
    <div>
    <br></br>
    <button className="bg-blue-500 
      text-white 
      px-4 py-2
      font-medium 
      rounded 
      hover:bg-blue-400
      flex
      justify-center
      items-center" onClick={handleCSP}>Login as CSP</button>
      <br/>
      <button className="bg-blue-500 
      text-white 
      px-4 py-2
      font-medium 
      rounded 
      hover:bg-blue-400
      flex
      justify-center
      items-center" onClick={handleCostumer}>Costumer</button>
      </div>
    </>
    

    )
}

export default Mainpage;