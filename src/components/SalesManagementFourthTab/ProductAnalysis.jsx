import React from "react";
import styles from "./SalesManagementFourthTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
const ProductAnalysis = () => {
  return (
    <div className={styles.productAnalysisForm}>
      <div className={styles.productAnalysisFormWrapper}>
        <div className="d-flex justify-content-between">
          <p className={styles.productAnalysisFormHeading}>
            商品分析
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
              アイテムコード
              <Oddtext />
            </label>
            <div className="d-flex">
              <select className={styles.selectText}>
                <option value="スマホ"></option>
                <option value="スマホ"></option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductAnalysis;
