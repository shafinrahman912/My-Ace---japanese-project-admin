import React from "react";
import styles from "./SalesManagementFirstTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const SalesStatusTable = () => {
  return (
    <div className={styles.SalesStatus}>
      <h5 className={styles.SalesStatusTableTitle}>
        時間：（現在の日時）
        <Oddtext />
      </h5>
      <div className={styles.SalesStatusTablewrapper}>
        <p className={styles.SalesStatusTableHeading}>
          MyAce売上状況
          <Oddtext />
        </p>
        <table className={styles.SalesTable}>
          <tr className={styles.SalesTr}>
            <th className={styles.TableLabel}>
              店頭購入売上
              <Oddtext />
            </th>
            <td className={styles.TableValue}>
              ¥121,500 <Oddtext />
            </td>
          </tr>

          <tr className={styles.SalesTr}>
            <th className={styles.TableLabel}>
              Web売上 <Oddtext />
            </th>
            <td className={styles.TableValue}>
              ¥33,000 <Oddtext />
            </td>
          </tr>

          <tr className={styles.SalesTr}>
            <th className={styles.TableLabel}>
              当日総売上 <Oddtext />
            </th>
            <td className={styles.TableValue}>
              ¥33,000 <Oddtext />
            </td>
          </tr>

          <tr className={styles.SalesTr}>
            <th className={styles.TableLabel}>
              今月の総売上 <Oddtext />
            </th>
            <td className={styles.TableValue}>
              ¥564,760 <Oddtext />
            </td>
          </tr>

          <tr className={styles.SalesTr}>
            <th className={styles.TableLabel}>
              目標推移
              <Oddtext />
            </th>
            <td className={`${styles.TableValue} fw-normal`}>
              15.6％ <Oddtext />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SalesStatusTable;
