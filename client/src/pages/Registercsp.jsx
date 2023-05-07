import React from "react";
import Web3Context from "../context";
import { useContext ,useState} from "react";

import { createCSP } from "../context/useContract/writeContract";
import { getAllCSP } from "../context/useContract/readContract";
const Registercsp= ()=>{
  const {Contract,account} = useContext(Web3Context);
  
  const [Id,setId]=useState(0);
  const [Name,setName]=useState("");

  const handleView= ()=>{
    getAllCSP(Contract).then((data)=>{
      console.log(data);
    })
  }
    const handleRegister=async ()=>{
      const obj=await createCSP(Contract,account.currentAccount,Name,Id);
      console.log(obj);
      const data=await getAllCSP(Contract);
      console.log(data);

    }

    return(
        <div className="flex justify-center items-center h-screen w-[100vw]">
 <div
            className="w-2/4 h-2/3 drop-shadow rounded-lg flex flex-col justify-evenly items-center"
            
        >
        <div className="text-xl text-white font-bold">
              Register Company
        </div>
        <form className="w-full h-1/2 flex flex-col justify-evenly items-center">
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="wallet"
                  className="w-2/4 p-2 text-white text-left"
                >
                Company Wallet Address
                </label>
                <input
                  name="wallet"
                  placeholder="Enter Mobile No"
                  type="text"
                  className="w-2/4 p-2 rounded-md"
                  value={account.currentAccount}
                  readOnly
                  
                />
                <label
                  htmlFor="wallet"
                  className="w-2/4 p-2 text-white text-left"
                >
                Company Name
                </label>
                <input
                  name="CompanyName"
                  placeholder="Enter Company Name"
                  type="text"
                  className="w-2/4 p-2 rounded-md"
                  onChange={(e)=>setName(e.target.value)}
                  value={Name}
                  
                />
              </div>
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="CompanyId"
                  className="w-2/4 p-2 text-white text-left"
                >
                 Company ID
                </label>
                <input
                  name="CompanyId"
                  placeholder="Enter Company ID"
                  type="number"
                  className="w-2/4 p-2 rounded-md"
                  onChange={(e)=>setId(e.target.value)}
                  value={Id}
                />
              </div>
            </form>
            <button
              className="w-1/3 h-12 flex justify-center items-center font-semibold rounded-md"
              onClick={handleRegister}
              
            >
              Register 
            </button>
            <button onClick={handleView}>View</button>
          </div>
        </div>
       
        
            
        
    )
}

export default Registercsp;