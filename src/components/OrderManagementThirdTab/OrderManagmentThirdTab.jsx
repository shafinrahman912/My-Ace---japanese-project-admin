import React from "react";
import styles from "./ThirdTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Buttons from "../OrderManagementFirst/Buttons";
import ThirdTabTable from "./ThirdTabTable";
import ThirdTabForm from "./ThirdTabForm";

const OrderManagmentThirdTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.OrderThirdTab}>
          <Buttons option={3} />
          <ThirdTabTable />
          <ThirdTabForm />
        </div>
      </div>
    </div>
  );
};

export default OrderManagmentThirdTab;
