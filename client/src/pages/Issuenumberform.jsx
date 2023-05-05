import React,{useState,useContext} from "react";
import Web3Context from "../context";
import { createMobileNo } from "../context/useContract/writeContract";

const Issuenumberform= ()=>{
   const {Contract,account} = useContext(Web3Context);
   const [Number,setNumber]=useState(0);
   const [Name,setName]=useState("");
   

   const handleIssue= async ()=>{
      const data =new FormData();
      console.log(data);
   }
  const random=()=>{
    const num=Math.random()*1000;
    console.log("Randomly genrated number is",num);
    setNumber(num);
  }
    return(
        <div className="flex justify-center items-center h-screen w-[100vw]">
 <div
            className="w-2/4 h-1/2 drop-shadow rounded-lg flex flex-col justify-evenly items-center"
            
        >
        <div className="text-xl text-white font-bold">
              Issue New Number
        </div>
        <form className="w-full h-1/2 flex flex-col justify-evenly items-center">
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="wallet"
                  className="w-2/4 p-2 text-white text-left"
                >
                  Customer Wallet Address
                </label>
                <input
                  name="wallet"
                  placeholder="Enter Seller Wallet ID"
                  type="text"
                  className="w-2/4 p-2 rounded-md"
                  readOnly
                  
                />
              </div>
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="Number"
                  className="w-2/4 p-2 text-white text-left"
                >
                 Mobile Number
                </label>
                <input
                  name="seller"
                  placeholder="Mobile No"
                  type="number"
                  className="w-2/4 p-2 rounded-md"
                  value={Number}
                  readOnly
                  
                />
              </div>
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="seller"
                  className="w-2/4 p-2 text-white text-left"
                >
                 Company Name
                </label>
                <input
                  name="seller"
                  placeholder="Enter Company Name"
                  type="text"
                  className="w-2/4 p-2 rounded-md"
                  onChange={(e)=>setName(e.target.value)}
                  value={Name}

                  
                />
              </div>

            </form>
            <button
              className="w-1/3 h-12 flex justify-center items-center font-semibold rounded-md"
              onClick={handleIssue}
              
            >
              Issue
            </button>
          </div>
        </div>
       
        
            
        
    )
}

export default Issuenumberform ;