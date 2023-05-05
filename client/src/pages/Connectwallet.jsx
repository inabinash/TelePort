import React,{useContext} from "react";
import Web3Context from "../context";
import { NavLink  ,useNavigate} from "react-router-dom";


const Connectwallet = () => {
  const navigate= useNavigate();
  const {connectWallet,checkIfWalletIsConnected,account} = useContext(Web3Context)
  const handleConnect = ()=>{
    connectWallet();
    checkIfWalletIsConnected();
    
    console.log("Account Length",account);
    navigate('/main')
  }
  return (
    <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <button onClick={handleConnect} className="bg-blue-500 
      text-white 
      px-4 py-2
      font-medium 
      rounded 
      hover:bg-blue-400
      flex
      items-center">ConnectWallet</button>
    </div>
  );
};

export default Connectwallet;
