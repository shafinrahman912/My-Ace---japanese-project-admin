import React from "react";
import styles from "./EmailManagementSecondTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import EmailManagementButtons from "../EmailManagementFirstTab/EmailManagementButtons";
import Oddtext from "../OrderManagementFirst/Oddtext";
import EmailSecondTabSearch from "./EmailSecondTabSearch";
import EmailSecondTabTable from "./EmailSecondTabTable";
const EmailManagementSecondTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.EmailManagementSecondTab}>
          <EmailManagementButtons option={2} />
          <EmailSecondTabSearch />
          <EmailSecondTabTable />
        </div>
      </div>
    </div>
  );
};

export default EmailManagementSecondTab;
