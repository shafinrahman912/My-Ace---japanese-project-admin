import React from "react";
import styles from "./SeventhTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Buttons from "../OrderManagementFirst/Buttons";
import SeventhTabTable from "./SeventhTabTable";
import SeventhTabForm from "./SeventhTabForm";

const OrderManagementSeventhTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.OrderSeventhTab}>
          <Buttons option={7} />
          <SeventhTabTable />
          <SeventhTabForm />
        </div>
      </div>
    </div>
  );
};

export default OrderManagementSeventhTab;
