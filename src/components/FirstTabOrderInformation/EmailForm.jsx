import React from "react";
import styles from "./FirstTabOrderInformation.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const EmailForm = () => {
  return (
    <div className={styles.emailFormWrapper}>
      <h5 className={styles.emailFormHeading}>
        メール・帳票
        <Oddtext />
      </h5>
      <div className="d-flex">
        {/* -----------------------table 01------------------ */}
        <div className={styles.common}>
          <table className={styles.EmailFormTableOne}>
            <tr className={styles.EmailTr}>
              <th className={styles.emailType}>
                メール種別
                <Oddtext />
              </th>
              <th className={styles.sendState}>
                送信状態
                <Oddtext />
              </th>
              <th className={styles.sendDate}>
                送信日時
                <Oddtext />
              </th>
            </tr>

            <tr className={styles.EmailTr}>
              <td className={styles.emailType}>
                決済完了
                <Oddtext />
              </td>
              <td className={styles.sendState}>
                自動配信
                <Oddtext />
              </td>
              <td className={styles.sendDate}>
                <div className="d-flex">
                  2022/05/15 01:30
                  <Oddtext />
                  <button className={styles.emailBtn}>
                    再送信
                    <Oddtext />
                  </button>
                </div>
              </td>
            </tr>
          </table>
          <hr className={styles.EmailUnderLine} />
        </div>
        {/* -----------------------table 02 ------------------ */}

        <div className={styles.common}>
          <table className={styles.EmailFormTableTwo}>
            <tr className={styles.EmailTr}>
              <th className={styles.formName}>
                帳票名
                <Oddtext />
              </th>
              <th className={styles.outputDate}>
                出力日時
                <Oddtext />
              </th>
            </tr>

            <tr className={styles.EmailTr}>
              <td className={styles.formName}>
                注文伝票
                <Oddtext />
              </td>

              <td className={styles.outputDate}>
                <div className="d-flex justify-content-end">
                  <button className={styles.formBtn}>
                    PDF出力 <Oddtext />
                  </button>{" "}
                </div>
              </td>
            </tr>
            <tr className={styles.EmailTr}>
              <td className={styles.formName}>
                納品書
                <Oddtext />
              </td>

              <td className={styles.outputDate}>
                <div className="d-flex justify-content-end">
                  <button className={styles.formBtn}>
                    PDF出力 <Oddtext />
                  </button>
                </div>
              </td>
            </tr>
          </table>
          <hr className={styles.EmailUnderLineTwo} />
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
