import React from "react";
import styles from "./FourthTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Buttons from "../OrderManagementFirst/Buttons";
import FourthTabTable from "./FourthTabTable";
import FourthTabForm from "./FourthTabForm";

const OrderManagementFourthTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.OrderFourthTab}>
          <Buttons option={4} />
          <FourthTabTable />
          <FourthTabForm />
        </div>
      </div>
    </div>
  );
};

export default OrderManagementFourthTab;
