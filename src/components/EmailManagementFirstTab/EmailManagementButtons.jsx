import React from "react";
import styles from "./EmailManagementFirstTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
const EmailManagementButtons = ({ option }) => {
  console.log(option);
  return (
    <div className={styles.EmailManagementButtonWrapper}>
      <div className="d-flex">
        {/* <h1 className={styles.abcd}>shafin rahman<Oddtext /></h1> */}
        <button
          className={
            option === 1
              ? `${styles.EmailManagementCommonButton} ${styles.bg}`
              : `${styles.EmailManagementCommonButton}`
          }
        >
          受信ボックス（2） <Oddtext />
        </button>

        <button
          className={
            option === 2
              ? `${styles.EmailManagementCommonButton} ${styles.bg}`
              : `${styles.EmailManagementCommonButton}`
          }
        >
          送信履歴 <Oddtext />
        </button>
      </div>
      <hr className={styles.EmailManagementButtonUnderline} />
    </div>
  );
};

export default EmailManagementButtons;
