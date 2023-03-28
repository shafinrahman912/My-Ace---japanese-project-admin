import React from "react";
import styles from "./FirstTabOrderInformation.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
const StaffTable = () => {
  return (
    <div className={styles.OrderManagementTableWrapper}>
      <div className="d-flex justify-content-between">
        <h5 className={styles.tableInfoHeading}>
          スタッフ管理
          <Oddtext />
        </h5>

        <div className={styles.orderQty}>
          <label className="me-2">
            表示
            <Oddtext />
          </label>
          <select className={styles.qty}>
            <option value="10">アイテム順</option>
            <option value="20">アイテム順</option>
            <option value="30">アイテム順</option>
          </select>
        </div>
      </div>
      <div className={styles.tableData}>
        <table className={styles.staffTable}>
          <tr className={styles.staffTr}>
            <th className={styles.paymentDate}>
              決済日時
              <Oddtext />
            </th>
            <th className={styles.staffOrderId}>
              商品注文ID
              <Oddtext />
            </th>
            <th className={styles.productName}>
              商品名
              <Oddtext />
            </th>
            <th className={styles.shippingAddress}>
              配送先
              <Oddtext />
            </th>
            <th className={styles.status}>
              ステータス <Oddtext />
            </th>
            <th className={styles.editAccept}>
              編集受付 日時 <Oddtext />
            </th>
            {/* 1 */}

            <th className={styles.notOrdered} colSpan="2">
              P未発注
              <Oddtext />
              <th className={styles.createdDate}>
                作成日 <Oddtext />
              </th>
              <th className={styles.author}>
                作成者
                <Oddtext />
              </th>
            </th>
            {/* 2 */}

            <th className={styles.ordered} colSpan="2">
              発注済み
              <Oddtext />
              <th className={styles.orderDate}>
                <Oddtext />
                発注日
              </th>
              <th className={styles.orderer}>
                <Oddtext />
                発注者
              </th>
            </th>

            {/* 3 */}

            <th
              className={`${styles.inspected} ${styles.dualspan}`}
              colSpan="2"
            >
              検品済み
              <Oddtext />
              <th className={styles.inspectionDate}>
                <Oddtext />
                検品日
              </th>
              <th className={styles.inspector}>
                <Oddtext />
                検品者
              </th>
            </th>
            {/* 4 */}

            <th className={styles.shipped} colSpan="2">
              出荷済み
              <Oddtext />
              <th className={styles.packingDate}>
                <Oddtext />
                梱包日
              </th>
              <th className={styles.packer}>
                <Oddtext />
                梱包者
              </th>
            </th>
          </tr>

          {/* 2nd row */}
          <tr className={styles.staffTr}>
            <td className={styles.paymentDate}>
              2022/05/15 01:30
              <Oddtext />
            </td>
            <td className={styles.staffOrderId}>
              A0222-220515A -usb-1
              <Oddtext />
            </td>
            <td className={styles.productName}>
              USB
              <Oddtext />
            </td>
            <td className={styles.shippingAddress}>
              会員住所
              <Oddtext />
            </td>
            <td className={styles.status}>
              P未編集 <Oddtext />
            </td>
            <td className={styles.editAccept}>
              <Oddtext />
            </td>
            {/* 1 */}

            <td className={styles.createdDate}></td>
            <td className={styles.autdor}></td>

            {/* 2 */}

            <td className={styles.orderDate}></td>
            <td className={styles.orderer}></td>

            {/* 3 */}

            <td className={styles.inspectionDate}></td>
            <td className={styles.inspector}></td>

            {/* 4 */}

            <td className={styles.packingDate}></td>
            <td className={styles.packer}></td>
          </tr>
          {/* 2nd row */}
          <tr className={styles.staffTr}>
            <td className={styles.paymentDate}>
              2022/05/15 01:30
              <Oddtext />
            </td>
            <td className={styles.staffOrderId}>
              A0222-220515A -wpM1-1
              <Oddtext />
            </td>
            <td className={styles.productName}>
              木製プレート マット正方形S
              <Oddtext />
            </td>
            <td className={styles.shippingAddress}>
              会員住所
              <Oddtext />
            </td>
            <td className={styles.status}>
              P未編集 <Oddtext />
            </td>
            <td className={styles.editAccept}>
              2022/10/30 10:30 <Oddtext />
            </td>
            {/* 1 */}

            <td className={styles.createdDate}></td>
            <td className={styles.autdor}></td>

            {/* 2 */}

            <td className={styles.orderDate}></td>
            <td className={styles.orderer}></td>

            {/* 3 */}

            <td className={styles.inspectionDate}></td>
            <td className={styles.inspector}></td>

            {/* 4 */}

            <td className={styles.packingDate}></td>
            <td className={styles.packer}></td>
          </tr>
        </table>
        <hr className={styles.staffTableUnderline} />
      </div>
    </div>
  );
};

export default StaffTable;
{
  /* <th colSpan="2">
  <tr>
    <th className={styles.ordered} colSpan="2">
      発注済み
      <Oddtext />
    </th>
  </tr>
  <tr>
    <th className={styles.orderDate}>発注日</th>
    <th className={styles.orderer}>発注者</th>
  </tr>
</th>; */
}
