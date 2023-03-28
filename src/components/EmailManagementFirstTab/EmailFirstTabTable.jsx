import React from "react";
import styles from "./EmailManagementFirstTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const EmailFirstTabTable = () => {
  return (
    <div className={styles.EmailManagementWrapper}>
      <table className={styles.EmailTable}>
        <tr className={styles.emailTr}>
          <th className={styles.emailId}>
            <Oddtext />
          </th>
          <th className={styles.subject}>
            件名 <Oddtext />
          </th>
          <th className={styles.Text}>
            本文 <Oddtext />
          </th>
          <th className={styles.receiptDate}>
            受信日時 <Oddtext />
          </th>
        </tr>
      </table>
      <div className={styles.tableBorder}>
        <table className={styles.EmailTable}>
          <tr className={styles.emailTr}>
            <td className={styles.emailId}>
              ace@acestudio.jp <Oddtext />
            </td>
            <td className={styles.subject}>
              お問合せ内容確認 <Oddtext />
            </td>
            <td className={styles.Text}>
              <Oddtext />
            </td>
            <td className={styles.receiptDate}>
              2022/12/20 17:00 <Oddtext />
            </td>
          </tr>
          <tr className={styles.emailTr}>
            <td className={styles.emailId}>
              ace@acestudio.jp <Oddtext />
            </td>
            <td className={styles.subject}>
              デザイン受付のお知らせ <Oddtext />
            </td>
            <td className={styles.Text}>
              <Oddtext />
            </td>
            <td className={styles.receiptDate}>
              2022/12/20 17:00 <Oddtext />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EmailFirstTabTable;
