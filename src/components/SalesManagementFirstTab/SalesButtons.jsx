import React from "react";
import styles from "./SalesManagementFirstTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
const SalesButtons = ({ option }) => {
  console.log(option);
  return (
    <div className={styles.SalesManagementButtonWrapper}>
      <div className="d-flex">
        {/* <h1 className={styles.abcd}>shafin rahman<Oddtext /></h1> */}
        <button
          className={
            option === 1
              ? `${styles.SalesManagementCommonButton} ${styles.bg}`
              : `${styles.SalesManagementCommonButton}`
          }
        >
          当日売上 <Oddtext />
        </button>

        <button
          className={
            option === 2
              ? `${styles.SalesManagementCommonButton} ${styles.bg}`
              : `${styles.SalesManagementCommonButton}`
          }
        >
          今月売上 <Oddtext />
        </button>

        <button
          className={
            option === 3
              ? `${styles.SalesManagementCommonButton} ${styles.bg}`
              : `${styles.SalesManagementCommonButton}`
          }
        >
          目標推移 <Oddtext />
        </button>

        <button
          className={
            option === 4
              ? `${styles.SalesManagementCommonButton} ${styles.bg}`
              : `${styles.SalesManagementCommonButton}`
          }
        >
          分析 <Oddtext />
        </button>
      </div>
      <hr className={styles.SalesManagementButtonUnderline} />
    </div>
  );
};

export default SalesButtons;
