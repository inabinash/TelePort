import React ,{useContext} from 'react'
import Web3Context from '../context';
const Navbar = (props) => {
   const {account}=useContext(Web3Context);
   console.log(account);
  return (
        <div className='h-16  bg-blue-500 flex justify-between items-center'>
         <div className='mx-2'>
            <h1>
            Teleport
            </h1>
         </div>

         <div className='my-2 mx-2'>
         <button className="bg-blue-400 
      text-white 
      font-medium 
      rounded 
      px-4 py-2

      hover:bg-blue-400
      flex
      ">Hey,{' '}
      {`${String(account.currentAccount).slice(0, 9)}...${String(
        account.currentAccount
      ).slice(String(account.currentAccount).length - 9)}`}</button>
         </div>
        </div>
      
  )
}

export default Navbar
