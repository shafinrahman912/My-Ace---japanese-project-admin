import React from "react";
import Buttons from "./Buttons";
import OrderManagementFirstTable from "./OrderManagementFirstTable";
import styles from "./OrderManagement.module.css";
import Oddtext from "./Oddtext";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import OrderManagementForm from "./OrderManagementForm";
const OrderManagementFirst = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.ordermanagement}>
          <Buttons option={1} />
          <OrderManagementFirstTable />
          <OrderManagementForm />
        </div>
      </div>
    </div>
  );
};

export default OrderManagementFirst;
