import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Web3Context from "../context";
import { FaChevronRight } from "react-icons/fa";
import styles from "./Mainpage.module.css";

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
      <div className={styles.mainpageContainer}>
        {" "}
        {/* Use the CSS module class */}
        <div className={styles.mainpageLeft}>
          {" "}
          {/* Use the CSS module class */}
          <div className={styles.mainpageText}>
            {" "}
            {/* Use the CSS module class */}
            <h1>On Chain Telecom Services</h1>
            <p>
              On-chain telecom services leverage blockchain technology to
              transform telecommunications.Provides enhanced security,
              privacy, and resilience compared to traditional centralized
              systems. By eliminating the need for a single central authority,
              on-chain telecom services promotes decentralization and fair
              competition. Smart contracts enable programmability, allowing for
              innovative applications and user control over services.
              Have the potential to revolutionize connectivity and
              communication in a decentralized and efficient manner.
            </p>
          </div>
          <div className={styles.mainpageButtons}>
            <button className={styles.btn1} onClick={handleCSP}>
              Login as CSP <FaChevronRight className={styles.i} />
            </button>
            <button className={styles.btn2} onClick={handleCustomer}>
              Customer <FaChevronRight className={styles.i} />
            </button>
          </div>
        </div>
        <div className={styles.mainpageRight}>
          <img
            src="https://res.cloudinary.com/dsmiomcjv/image/upload/v1686378114/teleport_r1zls0.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
