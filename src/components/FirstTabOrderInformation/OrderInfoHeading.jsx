import React from "react";
import styles from "./FirstTabOrderInformation.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const OrderInfoHeading = () => {
  return (
    <div className={styles.OrderInfoHeadingWrapper}>
      <div className="d-flex justify-content-between">
        <h4 className={styles.orderInfoHeading}>
          発注済み一覧
          <Oddtext />
        </h4>
        <button className={styles.EditBtn}>編集</button>
      </div>
      <hr className={styles.headingUnderline} />
    </div>
  );
};

export default OrderInfoHeading;
