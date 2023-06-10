import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Web3Context from "../context";

const Mainpage = () => {
  const navigate = useNavigate();
  const { account } = React.useContext(Web3Context);

  const handleCSP = () => {
    navigate("/csp");
  };

  const handleCustomer = () => {
    navigate("/user");
  };

  return (
    <>
      <Navbar walletAddress="Abinash" />
      <div className="w-full h-screen bg-new-secondary flex justify-center items-center">
        <div className="left w-1/2 ml-32">
          <div className="flex flex-col justify-start items-start">
            <div className="title font-bold text-4xl text-black">
              On-Chain Warranties for Products
            </div>
            <div className="info mt-5">
              Free up your cupboard spaces and store your warranties in the
              digital world in the form of NFTs having proper ownership proof
              over it. Now the warranty is not a piece of paper but a form of
              token. Start issuing warranties for your products by registering
              below.
            </div>
            <div className="buttons w-full mt-8 flex justify-start items-center">
              <button
                className="bg-blue-500 w-36 text-white p-2 text-center rounded-2xl mr-4"
                onClick={handleCSP}
              >
                Login as CSP
              </button>
              <button
                className="bg-blue-500 w-36 text-white p-2 text-center rounded-2xl"
                onClick={handleCustomer}
              >
                Customer
              </button>
            </div>
          </div>
        </div>
        <div className="right w-1/2 h-full flex justify-center items-center">
          <img
            className="w-96"
            src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1659277815/NFTDocket_Hero_mqqvsn.png"
          />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
