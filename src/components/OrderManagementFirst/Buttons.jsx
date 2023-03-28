import React from "react";
import styles from "./OrderManagement.module.css";
import Oddtext from "./Oddtext";
const Buttons = ({ option }) => {
  console.log(option);
  return (
    <div className={styles.OrderManagementButtonWrapper}>
      <div className="d-flex">
        {/* <h1 className={styles.abcd}>shafin rahman<Oddtext /></h1> */}
        <button className={option === 1 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>決済完了（　） <Oddtext /></button>

        <button className={option === 2 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>入金待ち（　） <Oddtext /></button>

        <button className={option === 3 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>P未編集（　） <Oddtext /></button>

        <button className={option === 4 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>P未発注（　） <Oddtext /></button>

        <button className={option === 5 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>発注済み（　） <Oddtext /></button>

        <button className={option === 6 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>検品済み（　） <Oddtext /></button>

        <button className={option === 7 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>出荷済み（　） <Oddtext /></button>

        <button className={option === 8 ? `${styles.OrderManagementCommonButton} ${styles.bg}` : `${styles.OrderManagementCommonButton}`}>注文検索 <Oddtext /></button>
      </div>
      <hr className={styles.OrderManagementButtonUnderline} />
    </div>

  );
};

export default Buttons;
