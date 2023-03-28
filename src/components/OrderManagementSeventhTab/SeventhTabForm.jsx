import React from "react";
import styles from "./SeventhTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const SeventhTabForm = () => {
  return (
    <div className={styles.OrderManagementFormContainer}>
      <div className={styles.OrderManagementFormOne}>
        <form action="">
          <div className={`${styles.OrderManagementFormControl} d-flex`}>
            <label htmlFor="" className={styles.OrderManagementFormLabel}>
              ステータスを更新
            </label>
            <select className={styles.OrderManagementFormOption}>
              <option value="P未編集">P未編集</option>
            </select>
            <button className={styles.updateStatusBtn}>更新</button>
          </div>

          <div className={`${styles.OrderManagementFormControl} d-flex`}>
            <label htmlFor="" className={styles.OrderManagementFormLabel}>
              メールを送信
            </label>
            <select className={styles.OrderManagementFormOption}>
              <option value="選択">選択</option>
            </select>
            <button className={styles.EditBtn}>編集</button>
            <button className={styles.SendBtn}>送信</button>
          </div>

          <div className={`${styles.OrderManagementFormControl} d-flex `}>
            <label htmlFor="" className={styles.OrderManagementFormLabel}>
              帳票を出力
            </label>
            <select className={styles.OrderManagementFormOption}>
              <option value="選択">選択</option>
            </select>
            <button className={styles.OutputBtn}>PDF出力</button>
          </div>

          <div className={`${styles.OrderManagementFormControl} d-flex `}>
            <label htmlFor="" className={styles.OrderManagementFormLabel}>
              選択した注文を
            </label>

            <button className={styles.StatusBtn}>ステータス完了</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeventhTabForm;
