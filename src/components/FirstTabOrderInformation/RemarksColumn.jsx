import React from "react";
import styles from "./FirstTabOrderInformation.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const RemarksColumn = () => {
  return (
    <div className={styles.remarksWrapper}>
      <div className="d-flex">
        <h5 className={styles.remarksHeading}>備考欄</h5>
        <div className={styles.remarksTextBox}>
          納品まで最大で２カ月かかる可能性あり。同梱３点
        </div>

        <table className={styles.remarksTable}>
          <tr className={styles.remarksTr}>
            <td className={styles.remarksTableText}>
              商品合計金額
              <Oddtext />
            </td>
            <td className={styles.remarksTableAmount}>
              ¥67,100
              <Oddtext />
            </td>
          </tr>
          <tr className={styles.remarksTr}>
            <td className={styles.remarksTableText}>
              値引・割引
              <Oddtext />
            </td>
            <td className={styles.remarksTableAmount}>
              -¥2,860
              <Oddtext />
            </td>
          </tr>
          <tr className={styles.remarksTr}>
            <td className={styles.remarksTableText}>
              送料
              <Oddtext />
            </td>
            <td className={styles.remarksTableAmount}>
              ¥1,760
              <Oddtext />
            </td>
          </tr>
          <tr className={styles.remarksTr}>
            <td className={styles.remarksTableText}>
              お支払い金額(税込)
              <Oddtext />
            </td>
            <td className={styles.remarksTableAmount}>
              ¥66,000
              <Oddtext />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RemarksColumn;
