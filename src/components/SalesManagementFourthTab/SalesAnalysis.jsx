import React from "react";
import styles from "./SalesManagementFourthTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const SalesAnalysis = () => {
  return (
    <div className={styles.SalesAnalysisForm}>
      <h5 className={styles.SalesAnalysisFormTitle}>
        時間：（現在の日時）
        <Oddtext />
      </h5>
      <div className={styles.SalesAnalysisFormWrapper}>
        <div className="d-flex justify-content-between">
          <p className={styles.SalesAnalysisFormHeading}>
            売上分析
            <Oddtext />
          </p>
          <button className={styles.analysisBtn}>
            分析 <Oddtext />
          </button>
        </div>

        <form action="" className={styles.analysisForm}>
          {/* ----------01--------- */}
          <div className="d-flex mb-4">
            <label htmlFor="" className={styles.analysisFormLabel}>
              日付 <Oddtext />
            </label>
            <div className="d-flex">
              <input
                type="text"
                className={styles.InputText}
                placeholder="20220401"
              />
              <input type="date" className={styles.InputDate} />
            </div>
            <h4 className={styles.textSign}>
              ~ <Oddtext />
            </h4>
            <div className="d-flex">
              <input type="text" className={styles.InputText} />
              <input type="date" className={styles.InputDate} />
            </div>
          </div>

          {/* ----------02--------- */}
          <div className="d-flex mb-4">
            <label htmlFor="" className={styles.analysisFormLabel}>
              アイテム名 <Oddtext />
            </label>
            <div className="d-flex">
              <select className={styles.selectText}>
                <option value="全体">全体</option>
                <option value="全体">全体</option>
              </select>
            </div>
          </div>
          {/* ----------03--------- */}
          <div className="d-flex mb-4">
            <label htmlFor="" className={styles.analysisFormLabel}>
              注文形態 <Oddtext />
            </label>
            <div className="d-flex">
              <select className={styles.selectText}>
                <option value="スマホ">スマホ</option>
                <option value="スマホ">スマホ</option>
              </select>
            </div>
          </div>

          {/* ----------04--------- */}
          <div className="d-flex mb-4">
            <label htmlFor="" className={styles.analysisFormLabel}>
              お支払い種別 <Oddtext />
            </label>
            <div className="d-flex">
              <select className={styles.selectText}>
                <option value="全体">全体</option>
                <option value="全体">全体</option>
              </select>
            </div>
          </div>

          {/* ----------05--------- */}
          <div className="d-flex mb-4">
            <label htmlFor="" className={styles.analysisFormLabel}>
              購入場所 <Oddtext />
            </label>
            <div className="d-flex">
              <select className={styles.selectText}>
                <option value="My ace">My ace</option>
                <option value="My ace">My ace</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalesAnalysis;
