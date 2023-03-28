import React from "react";
import styles from "./FifthTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Buttons from "../OrderManagementFirst/Buttons";
import FifthTabTable from "./FifthTabTable";
import FifthTabForm from "./FifthTabForm";

const OrderManagementFifthTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.OrderFifthTab}>
          <Buttons option={5} />
          <FifthTabTable />
          <FifthTabForm />
        </div>
      </div>
    </div>
  );
};

export default OrderManagementFifthTab;
