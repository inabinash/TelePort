import React,{useState,useContext} from "react";
import Web3Context from "../context";
import { createMobileNo } from "../context/useContract/writeContract";
import client from "../utils/ipfs";
const Issuenumberform= ()=>{
   const {Contract,account} = useContext(Web3Context);
   const [Number,setNumber]=useState(0);
   const [Name,setName]=useState("");
   const[coverImageURI,setCoverImageURI] = useState("")
   const[Coverimage,setCoverImage] = useState("")
   const [show, setshow] = useState('')
    //const [pic,setPic]=useState()
    const showPhoto = async(e) => {
        //console.log(e.target.files[0]);
        setCoverImage(e.target.files[0]);
        setshow(URL.createObjectURL(e.target.files[0]));
       
    }
    const UploadImage = async (e) => {
      e.preventDefault();
      const num=parseInt(Math.random()*1000);
      setNumber(num);
     
        const data = new FormData();
        data.append('file', Coverimage);
        data.append('upload_preset', 'mystiq');
        data.append('cloud_name', 'doybtqm8h');
        await fetch('https://api.cloudinary.com/v1_1/doybtqm8h/image/upload', {
          method: 'post',
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            const res = data.url
            setCoverImageURI(res);
            alert("Image Uploaded");
            handleData(res)
           
          
          })
          .catch((err) => console.log(err));
      };

      const handleData = async (res) => {
     
        const obj = {
        
          name:"NFT Warranty",
          description:"This a NFT Warranty and Proof of Ownership of the following product",
          image: res,
          attributes: [
            {
                "display_type": "date", 
                "trait_type": "expiry", 
                "value":"Infinity"

            },
            {
                "trait_type":"Mobile No",
                "value":Number
            }
          ],
        };
    
        const result = await client.add(JSON.stringify(obj));
        const str = 'ipfs://';
        const finalResult = str.concat(String(result.path));
        // console.log(result)
      //  console.log(finalResult);
      alert('NFT Data added'); //tokenURI=finalResult 
      console.log("Mobile Number value in Issuing :",Number)
      await createMobileNo(Contract,account.currentAccount,Number,Name,finalResult,account.currentAccount);
      alert('NFT created')
      
      
        
  };
   
  
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
                  value={account.currentAccount}
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
              <div className="w-full flex flex-col justify-evenly items-center">
                <label
                  htmlFor="image"
                  className="w-2/4 p-2 text-white text-left"
                >
                 User Image
                </label>
                <img src={show} alt="" className="w-60 h-auto max-h-60" id="show" />
                <input
                placeholder="Upload Image"
                type="file"
                accept="image/*"
                className="w-2/3 p-2 m-4 block text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                onChange={showPhoto}
              />
              </div>
            </form>
            <button
              className="w-1/3 h-12 flex justify-center items-center font-semibold rounded-md"
              onClick={UploadImage}
              
            >
              Issue
            </button>
          </div>
        </div>
       
        
            
        
    )
}

export default Issuenumberform ;