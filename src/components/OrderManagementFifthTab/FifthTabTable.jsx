import React from "react";
import styles from "./FifthTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
import { IoIosArrowDown } from "react-icons/io";

const FifthTabTable = () => {
  return (
    <div className={styles.OrderManagementTableWrapper}>
      <div className={styles.tableInfoHeadingContainer}>
        <h4 className={styles.tableInfoHeading}>
          発注済み一覧
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

            <th className={styles.acceptanceDate}>
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
            <th className={styles.orderDate}>
              発注日
              <div className="d-flex">
                <input type="text" className={styles.orderInputText} />
                <input type="date" className={styles.orderInputDate} />
              </div>
              <Oddtext />
            </th>
            <th className={styles.Author}>
              発注者
              <Oddtext />
            </th>
            <th className={styles.Contractor}>
              発注業者
              <IoIosArrowDown />
              <Oddtext />
            </th>
            <th className={styles.productId}>
              商品注文ID
              <Oddtext />
            </th>
            <th className={styles.orderId}>
              注文ID
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
            <th className={styles.formOutput}>
              帳票出力
              <IoIosArrowDown />
              <Oddtext />
            </th>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.acceptanceDate}>
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
            <td className={styles.orderDate}>
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
            <td className={styles.productId}>
              <a href="">A0222-220515A -wpM1-1</a>
              <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220515A</a>
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
            <td className={styles.formOutput}>
              注文伝票 納品書
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.acceptanceDate}>
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
            <td className={styles.orderDate}>
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
            <td className={styles.productId}>
              <a href="">A0222-220515A -da3-1</a>
              <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220515A</a>
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
            <td className={styles.formOutput}>
              注文伝票 納品書
              <Oddtext />
            </td>
          </tr>
        </table>
        <hr className={styles.TableUnderline} />
      </div>
    </div>
  );
};

export default FifthTabTable;
