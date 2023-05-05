import React ,{useEffect,useContext}from 'react'

import Connectwallet from "./pages/Connectwallet";
import Issuenumberform from "./pages/Issuenumberform";
import Mainpage from "./pages/Mainpage";
import User from "./pages/User";
import Portnumber from "./pages/Portnumber";
import Registercsp from "./pages/Registercsp";
import Csp from "./pages/Csp";
import Viewusers from './pages/Viewusers';
import { Route, Routes } from "react-router-dom";
import Web3Context from './context';

export default function App() {
  // const { checkIfWalletIsConnected,Contract,account} = useContext(Web3Context);
  // window.ethereum&&window.ethereum.on('accountsChanged', function (accounts) {
  //   setTimeout(window.location.reload(true), 1000);
  // });
  // useEffect(()=>{
  //         checkIfWalletIsConnected()
  //         console.log(account)
  // },[account])
return (
  <div>
    <Routes>
      <Route path='/' element={<Connectwallet />} />
      <Route path='/issue' element={<Issuenumberform/>}/>
      <Route path='/main' element={<Mainpage />} />
      <Route path='/user' element={<User />}/>
      <Route path='/port' element={<Portnumber/>}/>
      <Route path='/register' element={<Registercsp/>}/>
      <Route path='/csp' element={<Csp/>}/>
      <Route path='/view' element={<Viewusers/>}/>
    </Routes>
  </div>
)
}
