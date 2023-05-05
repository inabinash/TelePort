import React from "react";

const Portnumber= ()=>{
    return(
        <div className="flex justify-center items-center h-screen w-[100vw]">
 <div
            className="w-2/4 h-2/3 drop-shadow rounded-lg flex flex-col justify-evenly items-center"
            
        >
        <div className="text-xl text-white font-bold">
              Port Number
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
                  placeholder="Wallet Address"
                  type="text"
                  className="w-2/4 p-2 rounded-md"
                  readOnly
                  
                />
                <label
                  htmlFor="wallet"
                  className="w-2/4 p-2 text-white text-left"
                >
                Mobile Number
                </label>
                <input
                  name="MobileNo"
                  placeholder="Enter Mobile No"
                  type="text"
                  className="w-2/4 p-2 rounded-md"
                  
                  
                />
              </div>
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="seller"
                  className="w-2/4 p-2 text-white text-left"
                >
                 Company To Port
                </label>
                <input
                  name="seller"
                  placeholder="Enter Company Name"
                  type="text"
                  className="w-2/4 p-2 rounded-md"   
                />
              </div>
            </form>
            <button
              className="w-1/3 h-12 flex justify-center items-center font-semibold rounded-md"
               
              
            >
              Port Number
            </button>
          </div>
        </div>
       
        
            
        
    )
}

export default Portnumber ;