import React from "react";
import styles from "./SalesManagementFourthTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SalesButtons from "../SalesManagementFirstTab/SalesButtons";
import SalesAnalysis from "./SalesAnalysis";
import ProductAnalysis from "./ProductAnalysis";

const SalesManagementFourthTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.SalesManagementFourth}>
          <SalesButtons option={4} />
          <SalesAnalysis />
          <ProductAnalysis />
        </div>
      </div>
    </div>
  );
};

export default SalesManagementFourthTab;
