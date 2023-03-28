import React from "react";
import styles from "./FourthTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
import { IoIosArrowDown } from "react-icons/io";
const FourthTabTable = () => {
  return (
    <div className={styles.OrderManagementTableWrapper}>
      <div className={styles.tableInfoHeadingContainer}>
        <h4 className={styles.tableInfoHeading}>
          P未発注一覧
          <Oddtext />
        </h4>
        <div className="d-flex">
          <div className="me-auto">
            <p className={styles.tableInfoLink}>
              【 ページ内すべて選択 ｜ すべて解除】
              <Oddtext />
            </p>
          </div>
          <div className={styles.orderQty}>
            <label className="me-2">
              表示件数
              <Oddtext />
            </label>
            <select className={styles.qty}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.tableData}>
        <table className={styles.OrderFirstTable}>
          <tr className={styles.orderTr}>
            <th className={styles.orderCheckBox}></th>
            {/* Edit acceptance date and time,	Customer number,	family name,	P,	Created date,	Author	Contractor,	Product order ID,	Product ID,	Product name,	Shooting date,	Design confirmation */}

            <th className={styles.orderDate}>
              編集受付日時
              <Oddtext />
            </th>
            <th className={styles.customerNumber}>
              顧客番号
              <Oddtext />
            </th>
            <th className={styles.familyName}>
              氏名
              <Oddtext />
            </th>
            <th className={styles.P}>
              P<Oddtext />
            </th>
            <th className={styles.createdDate}>
              作成日
              <Oddtext />
            </th>
            <th className={styles.Author}>
              作成者
              <Oddtext />
            </th>
            <th className={styles.Contractor}>
              発注業者
              <IoIosArrowDown />
              <Oddtext />
            </th>
            <th className={styles.orderId}>
              商品注文ID
              <Oddtext />
            </th>
            <th className={styles.productId}>
              商品ID
              <Oddtext />
            </th>
            <th className={styles.productName}>
              商品名
              <Oddtext />
            </th>
            <th className={styles.shootingDate}>
              撮影日
              <Oddtext />
            </th>
            <th className={styles.designConfirm}>
              デザイン確認
              <Oddtext />
            </th>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.orderDate}>
              <Oddtext />
              2022/05/17 11:45
            </td>
            <td className={styles.customerNumber}>
              A0222
              <Oddtext />
            </td>
            <td className={styles.familyName}>
              佐々木亜矢
              <Oddtext />
            </td>
            <td className={styles.P}>
              Keisuke
              <Oddtext />
            </td>
            <td className={styles.createdDate}>
              2022/05/19
              <Oddtext />
            </td>
            <td className={styles.Autdor}>
              Keisuke
              <Oddtext />
            </td>
            <td className={styles.Contractor}>
              プロカラー
              <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220515A -wpM1-1</a>
              <Oddtext />
            </td>
            <td className={styles.productId}>
              wpM1
              <Oddtext />
            </td>
            <td className={styles.productName}>
              木製プレート マット正方形S
              <Oddtext />
            </td>
            <td className={styles.shootingDate}>
              2022/05/14
              <Oddtext />
            </td>
            <td className={styles.designConfirm}>
              デザイン確定
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.orderDate}>
              2022/05/17 12:00
              <Oddtext />
            </td>
            <td className={styles.customerNumber}>
              A0222
              <Oddtext />
            </td>
            <td className={styles.familyName}>
              佐々木亜矢
              <Oddtext />
            </td>
            <td className={styles.P}>
              Keisuke
              <Oddtext />
            </td>
            <td className={styles.createdDate}>
              2022/05/20
              <Oddtext />
            </td>
            <td className={styles.Autdor}>
              Keisuke
              <Oddtext />
            </td>
            <td className={styles.Contractor}>
              プロカラー
              <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220515A -wpM1-1</a>
              <Oddtext />
            </td>
            <td className={styles.productId}>
              da3
              <Oddtext />
            </td>
            <td className={styles.productName}>
              台紙
              <Oddtext />
            </td>
            <td className={styles.shootingDate}>
              2022/05/14
              <Oddtext />
            </td>
            <td className={styles.designConfirm}>
              デザイン確定
              <Oddtext />
            </td>
          </tr>
        </table>
        <hr className={styles.TableUnderline} />
      </div>
    </div>
  );
};

export default FourthTabTable;
