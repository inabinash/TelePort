import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Web3Context from "../context";
import { FaChevronRight } from "react-icons/fa";
import styles from './Mainpage.module.css';

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
      <div className={styles.mainpageContainer}> {/* Use the CSS module class */}
        <div className={styles.mainpageLeft}> {/* Use the CSS module class */}
          <div className={styles.mainpageText}> {/* Use the CSS module class */}
            <h1>
              On-Chain Warranties for Products
            </h1>
            <p>
              Free up your cupboard spaces and store your warranties in the
              digital world in the form of NFTs having proper ownership proof
              over it. Now the warranty is not a piece of paper but a form of
              token. Start issuing warranties for your products by registering
              below.
            </p>
            </div>
            <div className={styles.mainpageButtons}>
              <button className={styles.btn1}
                onClick={handleCSP}
              >
                Login as CSP <FaChevronRight className={styles.i}/>
              </button>
              <button className={styles.btn2}
                onClick={handleCustomer}
              >
                Customer <FaChevronRight className={styles.i} />
              </button>
            </div>
          </div>
          <div className={styles.mainpageRight}>
          <img
            src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1659277815/NFTDocket_Hero_mqqvsn.png"
          />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
