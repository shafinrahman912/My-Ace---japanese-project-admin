import React from "react";
import styles from "./ThirdTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
import { IoIosArrowDown } from "react-icons/io";
const ThirdTabTable = () => {
  return (
    <div className={styles.OrderManagementTableWrapper}>
      <div className={styles.tableInfoHeadingContainer}>
        <h4 className={styles.tableInfoHeading}>
          P未編集一覧
          <Oddtext />
        </h4>
        <div className="d-flex">
          <div className="me-auto">
            <p className={styles.tableInfoLink}>
              【 ページ内すべて選択｜すべて解除】
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
          {/* Edit acceptance date and time,	Customer number,	family name,	P	,studio	,plan	,Product order ID	,Product name	,Shooting date	,Design confirmation,	Email	 */}
          <tr className={styles.orderTr}>
            <th className={styles.orderCheckBox}></th>
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
              P<IoIosArrowDown />
              <Oddtext />
            </th>
            <th className={styles.studio}>
              スタジオ
              <Oddtext />
            </th>
            <th className={styles.plan}>
              プラン
              <Oddtext />
            </th>
            <th className={styles.orderId}>
              {/*   <th className={`${styles.orderId} d-flex  align-item-center`}> */}
              <div className="d-flex justify-content-center align-middle">
                <p>商品注文ID</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className={styles.orderIdInput}
                />
              </div>

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
            <th className={styles.email}>
              メール
              <Oddtext />
            </th>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.orderDate}>
              2022/05/15 01:30
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
            <td className={styles.studio}>
              1003
              <Oddtext />
            </td>
            <td className={styles.plan}>
              お宮参り
              <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220515A -wpM1-1</a>
              <Oddtext />
            </td>
            <td className={styles.productName}>
              USB
              <Oddtext />
            </td>
            <td className={styles.shootingDate}>
              2022/05/14
              <Oddtext />
            </td>
            <td className={styles.designConfirm}>
              <Oddtext />
            </td>
            <td className={styles.email}>
              決済完了
              <br />
              デザイン受付
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
            <td className={styles.studio}>
              1003
              <Oddtext />
            </td>
            <td className={styles.plan}>
              お宮参り
              <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220515A -wpM1-1</a>
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
              返答待ち
              <Oddtext />
            </td>
            <td className={styles.email}>
              決済完了
              <br />
              デザイン受付
              <Oddtext />
            </td>
          </tr>
        </table>
        <hr className={styles.TableUnderline} />
      </div>
    </div>
  );
};

export default ThirdTabTable;
