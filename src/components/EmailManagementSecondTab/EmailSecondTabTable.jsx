import React from "react";
import styles from "./EmailManagementSecondTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const EmailSecondTabTable = () => {
  return (
    <div className={styles.EmailManagementWrapper}>
      <table className={styles.EmailTable}>
        <tr className={styles.emailTr}>
          <th className={styles.familyName}>
            氏名 <Oddtext />
          </th>
          <th className={styles.customerNumber}>
            顧客番号 <Oddtext />
          </th>
          <th className={styles.address}>
            アドレス <Oddtext />
          </th>
          <th className={styles.templateNo}>
            テンプレNo <Oddtext />
          </th>
          <th className={styles.subject}>
            件名 <Oddtext />
          </th>
          <th className={styles.sentDate}>
            送信日時 <Oddtext />
          </th>
        </tr>
      </table>
      <div className={styles.tableBorder}>
        <table className={styles.EmailTable}>
          <tr className={styles.emailTr}>
            <td className={styles.familyName}>
              鳥飼花子 <Oddtext />
            </td>
            <td className={styles.customerNumber}>
              A1234 <Oddtext />
            </td>
            <td className={styles.address}>
              ace@acestudio.jp <Oddtext />
            </td>
            <td className={styles.templateNo}>
              T01 <Oddtext />
            </td>
            <td className={styles.subject}>
              お問合せ内容確認 <Oddtext />
            </td>
            <td className={styles.sentDate}>
              2022/12/20 17:00 <Oddtext />
            </td>
          </tr>
          <tr className={styles.emailTr}>
            <td className={styles.familyName}>
              愛宕太郎 <Oddtext />
            </td>
            <td className={styles.customerNumber}>
              B5678 <Oddtext />
            </td>
            <td className={styles.address}>
              ace2@acestudio.jp <Oddtext />
            </td>
            <td className={styles.templateNo}>
              D01 <Oddtext />
            </td>
            <td className={styles.subject}>
              デザイン受付のお知らせ <Oddtext />
            </td>
            <td className={styles.sentDate}>
              2022/12/19 17:00 <Oddtext />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EmailSecondTabTable;
