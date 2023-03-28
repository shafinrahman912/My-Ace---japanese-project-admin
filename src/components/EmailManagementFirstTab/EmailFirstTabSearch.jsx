import React from "react";
import styles from "./EmailManagementFirstTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
import { IoIosSearch } from "react-icons/io";
const EmailFirstTabSearch = () => {
  return (
    <div className={styles.EmailManagementWrapper}>
      <h4 className={styles.searchInfoHeading}>
        受信ボックス
        <Oddtext />
      </h4>
      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>
          <IoIosSearch />
        </span>
        <input type="text" placeholder="メールを検索" />
      </div>
    </div>
  );
};

export default EmailFirstTabSearch;
