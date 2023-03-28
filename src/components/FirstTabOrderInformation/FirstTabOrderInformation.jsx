import React from "react";
import styles from "./FirstTabOrderInformation.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Oddtext from "../OrderManagementFirst/Oddtext";
import Buttons from "../OrderManagementFirst/Buttons";
import OrderInfoHeading from "./OrderInfoHeading";
import OrderInfoFirstTable from "./OrderInfoFirstTable";
import StaffTable from "./StaffTable";
import RemarksColumn from "./RemarksColumn";
import ShippingInformation from "./ShippingInformation";
import EmailForm from "./EmailForm";

const FirstTabOrderInformation = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.firstTabOrderInfo}>
          <Buttons option={1} />
          <OrderInfoHeading />
          <OrderInfoFirstTable />
          <StaffTable />
          <RemarksColumn />
          <ShippingInformation />
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default FirstTabOrderInformation;
