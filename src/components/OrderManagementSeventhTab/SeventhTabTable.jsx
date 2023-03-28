import React from "react";
import styles from "./SeventhTab.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";

const SeventhTabTable = () => {
  return (
    <div className={styles.OrderManagementTableWrapper}>
      <div className={styles.tableInfoHeadingContainer}>
        <h4 className={styles.tableInfoHeading}>
          出荷済み一覧
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
            {/* order date,	Customer number,	family name,	Order ID,	Shipping address,	score,	P,	C,	Email,	Form output,	ship date,	Delivery information */}

            <th className={styles.orderDate}>
              注文日時
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
            <th className={styles.orderId}>
              注文ID
              <Oddtext />
            </th>
            <th className={styles.shippingAddress}>
              配送先
              <Oddtext />
            </th>
            <th className={styles.score}>
              点数
              <Oddtext />
            </th>
            <th className={styles.P}>
              P
              <Oddtext />
            </th>
            <th className={styles.C}>
              C
              <Oddtext />
            </th>
            <th className={styles.email}>
              メール
              <Oddtext />
            </th>
            <th className={styles.formOutput}>
              帳票出力
              <Oddtext />
            </th>
            <th className={styles.shipDate}>
              出荷日
              <Oddtext />
            </th>
            <th className={styles.deliveryInfo}>
              配送情報
              <Oddtext />
            </th>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.orderDate}>
              2022/5/15 01:30
              <Oddtext />
            </td>
            <td className={styles.customerNumber}>
              A0222 <Oddtext />
            </td>
            <td className={styles.familyName}>
              佐々木亜矢 <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220514A</a> <Oddtext />
            </td>
            <td className={styles.shippingAddress}>
              会員住所 <Oddtext />
            </td>
            <td className={styles.score}>
              3 <Oddtext />
            </td>
            <td className={styles.P}>
              Keisuke <Oddtext />
            </td>
            <td className={styles.C}>
              Chiaki <Oddtext />
            </td>
            <td className={styles.email}>
              <Oddtext />
            </td>
            <td className={styles.formOutput}>
              注文伝票 納品書 <Oddtext />
            </td>
            <td className={styles.shipDate}>
              2022/06/27 <Oddtext />
            </td>
            <td className={styles.deliveryInfo}>
              <div className="d-flex">
                <p className={styles.shippingLebel}>
                  配送方法 <Oddtext />
                </p>
                <p className={styles.shippingInfo}>
                  ヤマト運輸
                  <Oddtext />
                </p>
              </div>
              <div className="d-flex">
                <p className={styles.shippingLebel}>
                  伝票番号 <Oddtext />
                </p>
                <p className={styles.shippingInfo}>
                  4160-4256-7516
                  <Oddtext />
                </p>
              </div>
            </td>
          </tr>

          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>

            <td className={styles.orderDate}>
              2022/5/15 01:30 <Oddtext />
            </td>
            <td className={styles.customerNumber}>
              A0222 <Oddtext />
            </td>
            <td className={styles.familyName}>
              佐々木亜矢 <Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">A0222-220514A</a> <Oddtext />
            </td>
            <td className={styles.shippingAddress}>
              別送１ <Oddtext />
            </td>
            <td className={styles.score}>
              1 <Oddtext />
            </td>
            <td className={styles.P}>
              Keisuke <Oddtext />
            </td>
            <td className={styles.C}>
              Chiaki <Oddtext />
            </td>
            <td className={styles.email}>
              <Oddtext />
            </td>
            <td className={styles.formOutput}>
              注文伝票 納品書 <Oddtext />
            </td>
            <td className={styles.shipDate}>
              2022/06/10 <Oddtext />
            </td>
            <td className={styles.deliveryInfo}>
              <div className="d-flex">
                <p className={styles.shippingLebel}>
                  配送方法 <Oddtext />
                </p>
                <p className={styles.shippingInfo}>
                  ヤマト運輸
                  <Oddtext />
                </p>
              </div>
              <div className="d-flex">
                <p className={styles.shippingLebel}>
                  伝票番号 <Oddtext />
                </p>
                <p className={styles.shippingInfo}>
                  4160-4256-7585
                  <Oddtext />
                </p>
              </div>
            </td>
          </tr>
        </table>
        <hr className={styles.TableUnderline} />
      </div>
    </div>
  );
};

export default SeventhTabTable;
