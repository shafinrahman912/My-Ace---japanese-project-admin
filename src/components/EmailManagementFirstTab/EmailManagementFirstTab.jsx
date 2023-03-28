import React from "react";
import styles from "./EmailManagementFirstTab.module.css";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import EmailManagementButtons from "./EmailManagementButtons";
import Oddtext from "../OrderManagementFirst/Oddtext";
import EmailFirstTabSearch from "./EmailFirstTabSearch";
import EmailFirstTabTable from "./EmailFirstTabTable";
const EmailManagementFirstTab = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideMenu />
        <div className={styles.EmailManagementFirstTab}>
          <EmailManagementButtons option={1} />
          <EmailFirstTabSearch />
          <EmailFirstTabTable />
        </div>
      </div>
    </div>
  );
};

export default EmailManagementFirstTab;
