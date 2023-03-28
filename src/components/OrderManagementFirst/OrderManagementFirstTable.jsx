import React from "react";
import styles from "./OrderManagement.module.css";
import Oddtext from "./Oddtext";
const OrderManagementFirstTable = () => {
  return (
    <div className={styles.OrderManagementTableWrapper}>
      <div className={styles.tableInfoHeadingContainer}>
        <h4 className={styles.tableInfoHeading}>決済完了一覧<Oddtext /></h4>
        <div className="d-flex">
          <div className="me-auto">
            <p className={styles.tableInfoLink}>ページ内全て選択｜すべて解除<Oddtext /></p>
          </div>
          <div className={styles.orderQty}>
            <label className="me-2">表示件数<Oddtext /></label>
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
            <th className={styles.orderDate}>注文日時<Oddtext /></th>
            <th className={styles.orderId}>注文ID<Oddtext /></th>
            <th className={styles.customerNumber}>顧客番号<Oddtext /></th>
            <th className={styles.familyName}>氏名<Oddtext /></th>
            <th className={styles.P}>P<Oddtext /></th>
            <th className={styles.C}>C<Oddtext /></th>
            <th className={styles.studio}>スタジオ<Oddtext /></th>
            <th className={styles.plan}>プラン<Oddtext /></th>
            <th className={styles.score}>点数<Oddtext /></th>
            <th className={styles.shootingDate}>撮影日<Oddtext /></th>
            <th className={styles.paymentMethod}>支払い方法<Oddtext /></th>
            <th className={styles.orderAmount}>注文金額<Oddtext /></th>
            <th className={styles.email}>メール<Oddtext /></th>
            <th className={styles.formOutput}>帳票出力<Oddtext /></th>
          </tr>


          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>
            <td className={styles.orderDate}>2022/05/15 01:30<Oddtext /></td>
            <td className={styles.orderId}><a href="">A0222-220515A<Oddtext /></a> </td>
            <td className={styles.customerNumber}>A0222<Oddtext /></td>
            <td className={styles.familyName}>佐々木亜矢<Oddtext /></td>
            <td className={styles.P}>Keisuke<Oddtext /></td>
            <td className={styles.C}>Chiaki<Oddtext /></td>
            <td className={styles.studio}>1003<Oddtext /></td>
            <td className={styles.plan}>お宮参り<Oddtext /></td>
            <td className={styles.score}>3/5<Oddtext /></td>
            <td className={styles.shootingDate}>2022/05/14<Oddtext /></td>
            <td className={styles.paymentMethod}>クレジット 決済<Oddtext /></td>
            <td className={styles.orderAmount}>66,000<Oddtext /></td>
            <td className={styles.email}>決済完了<Oddtext /></td>
            <td className={styles.formOutput}></td>
          </tr>


          <tr className={styles.orderTr}>
            <td className={styles.orderCheckBox}>
              <input type="checkbox" />
            </td>
            <td className={styles.orderDate}>
              2022/05/14 20:17<Oddtext />
            </td>
            <td className={styles.orderId}>
              <a href="">05678-220516A<Oddtext /></a>
            </td>
            <td className={styles.customerNumber}>
              05678<Oddtext />
            </td>
            <td className={styles.familyName}>
              鎌田沙耶香<Oddtext />
            </td>
            <td className={styles.P}>
              Seira<Oddtext />
            </td>
            <td className={styles.C}>
              Rin<Oddtext />
            </td>
            <td className={styles.studio}>
              鳥飼<Oddtext />
            </td>
            <td className={styles.plan}>
              七五三<Oddtext />
            </td>
            <td className={styles.score}>
              3<Oddtext />
            </td>
            <td className={styles.shootingDate}>
              2022/05/16<Oddtext />
            </td>
            <td className={styles.paymentMethod}>
              クレジット 決済<Oddtext />
            </td>
            <td className={styles.orderAmount}>
              46,200<Oddtext />
            </td>
            <td className={styles.email}>
              決済完了<Oddtext />
            </td>
            <td className={styles.formOutput}>
            </td>
          </tr>

        </table>
        <hr className={styles.TableUnderline} />




      </div>




    </div>
  );
};

export default OrderManagementFirstTable;
