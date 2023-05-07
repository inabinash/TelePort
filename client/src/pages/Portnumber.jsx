import React ,{useContext,useState} from "react";
import Web3Context from "../context";
import { transferMobileNo } from "../context/useContract/writeContract";
import { getCSPByAddress,getCSPIdFromName,getCSPByID ,getMobileNoDetails} from "../context/useContract/readContract";

const Portnumber= ()=>{
    const {Contract,account}=useContext(Web3Context);
    const [Old,setOld]=useState("");
    const [Name,setName]=useState("");
    const [Number,setNumber]=useState(0);
    const [TokenId,setTokenId]=useState(0);
    //const [NewAddress,setNewAddress]=useState("");
    const handlePort=()=>{
       // find the csp address from csp name 
       // token id from mobile no
        
        //console.log(_tokenId);
      //  const promise1=getCSPIdFromName(Contract,Name);
      //   promise1.then((_cspId)=>{
      //     const promise2=getCSPByID(Contract,_cspId);
      //     promise2.then((_csp)=>{
      //       const _cspAddress=_csp.CSPAddress;
      //       const promise= getMobileNoDetails(Contract,Number);
      //         promise.then((_mobile)=>{
      //         const _tokenId=_mobile.tokenId;
      //         const promise3=transferMobileNo(Contract,account.currentAccount,Name,Number,_cspAddress,_tokenId);
      //         promise3.then(()=>{
      //           alert("Mobile Number Ported Successfully");
      //         })
      //   })
      //     })
      //   })

      // getCSPIdFromName(Contract,Name).then((_cspId)=>{
      //   getCSPByID(Contract,_cspId).then((_csp)=>{
      //     const _cspAddress=_csp.CSPAddress;
      //      getMobileNoDetails(Contract,Number).then((_mobile)=>{
      //       const _tokenId=_mobile.tokenId;
      //       transferMobileNo(Contract,account.currentAccount,Name,Number,_cspAddress,_tokenId).then(()=>{
      //         alert("Mobile Number Ported Successfully");
      //       })
      //     })
      //   })
      // })

      transferMobileNo(Contract,account.currentAccount,Old,Number,Name,TokenId).then((res)=>{
        console.log(res);
      })
      
      

        
    }
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
                  value={account.currentAccount}
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
                  onChange={(e)=>{setNumber(e.target.value)}}
                  value={Number}                 
                />
                <label
                  htmlFor="wallet"
                  className="w-2/4 p-2 text-white text-left"
                >
                Token Id
                </label>
                <input
                  name="token Id"
                  placeholder="Enter Mobile No"
                  type="number"
                  className="w-2/4 p-2 rounded-md"
                  onChange={(e)=>{setTokenId(e.target.value)}}
                  value={TokenId}                 
                />
              </div>
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="seller"
                  className="w-2/4 p-2 text-white text-left"
                >
                  Company From Port
                </label>
                <input
                  name="seller"
                  placeholder="Enter Company Name"
                  type="text"
                  className="w-2/4 p-2 rounded-md"   
                  onChange={(e)=>{setOld(e.target.value)}}
                  value={Old}

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
                  onChange={(e)=>{setName(e.target.value)}}
                  value={Name}

                />
              </div>
            </form>
            <button
              className="w-1/3 h-12 flex justify-center items-center font-semibold rounded-md"
              onClick={handlePort}
              
            >
              Port Number
            </button>
          </div>
        </div>
       
        
            
        
    )
}

export default Portnumber ;