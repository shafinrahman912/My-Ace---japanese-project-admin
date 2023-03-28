import React from "react";
import styles from "./SalesManagementFirstTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import SalesButtons from "./SalesButtons";
import SalesStatusTable from "./SalesStatusTable";
import SalesDisplayTable from "./SalesDisplayTable";

const SalesManagementFirstTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.SalesManagementFirstTab}>
          <SalesButtons option={1} />
          <SalesStatusTable />
          <SalesDisplayTable />
        </div>
      </div>
    </div>
  );
};

export default SalesManagementFirstTab;
