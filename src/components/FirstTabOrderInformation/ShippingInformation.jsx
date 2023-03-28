import React from "react";
import styles from "./FirstTabOrderInformation.module.css";
import Oddtext from "../OrderManagementFirst/Oddtext";
const ShippingInformation = () => {
  return (
    <div className={styles.shippingInfoWrapper}>
      <h5 className={styles.shippingInfoHeading}>
        お届け先情報
        <Oddtext />
      </h5>
      {/* --------------box 1 --------------- */}
      <div className={styles.addressBox}>
        {/* addressbox heading */}
        <h4 className={styles.addressBoxHeading}>
          会員住所
          <Oddtext />
        </h4>
        <hr className={styles.addressBoxUnderline} />
        <table className={styles.addressBoxTableOne}>
          <tr className={styles.TableOneTr}>
            <td className={`${styles.name} ${styles.lebel}`}>
              お名前
              <Oddtext />
            </td>
            <td className={`${styles.nameData} ${styles.data}`}>
              佐々木亜矢
              <Oddtext />
            </td>
            <td className={`${styles.postCode} ${styles.lebel}`}>
              郵便番号
              <Oddtext />
            </td>
            <td className={`${styles.postcodeData} ${styles.data}`}>
              810-0054
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.furigana} ${styles.lebel}`}>
              ふりがな
              <Oddtext />
            </td>
            <td className={`${styles.furiganaData} ${styles.data}`}>
              ささきあや
              <Oddtext />
            </td>
            <td className={`${styles.prefectures} ${styles.lebel}`}>
              都道府県
              <Oddtext />
            </td>
            <td className={`${styles.prefecturesData} ${styles.data}`}>
              福岡県
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.mobile} ${styles.lebel}`}>
              携帯電話
              <Oddtext />
            </td>
            <td className={`${styles.mobileData} ${styles.data}`}>
              092-406-2645
              <Oddtext />
            </td>
            <td className={`${styles.municipalities} ${styles.lebel}`}>
              市区町村以下
              <Oddtext />
            </td>
            <td className={`${styles.municipalitiesData} ${styles.data}`}>
              福岡市中央区今川2丁目1-17
              <Oddtext />
            </td>
          </tr>

          <tr className={`${styles.TableOneTr} ${styles.blankBorder} `}>
            <td className={`${styles.lebel} ${styles.blankBorder} `}></td>
            <td className={`${styles.data} ${styles.blankBorder} `}></td>
            <td className={`${styles.apartmentName} ${styles.lebel}`}>
              マンション名
              <Oddtext />
            </td>
            <td className={`${styles.apartmentNameData} ${styles.data}`}></td>
          </tr>
        </table>

        {/* ---------------------------------table 2---------------------------- */}
        {/* addressbox heading */}
        <h4 className={styles.addressBoxHeading}>
          配送情報
          <Oddtext />
        </h4>
        <hr className={styles.addressBoxUnderline} />
        <table className={styles.addressBoxTableOne}>
          <tr className={styles.TableOneTr}>
            <td className={`${styles.name} ${styles.lebel}`}>
              配送方法
              <Oddtext />
            </td>
            <td className={`${styles.nameData} ${styles.data}`}>
              <Oddtext />
            </td>
            <td className={`${styles.postCode} ${styles.lebel}`}>
              <Oddtext />
            </td>
            <td className={`${styles.postcodeData} ${styles.data}`}>
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.furigana} ${styles.lebel}`}>
              伝票番号
              <Oddtext />
            </td>
            <td className={`${styles.furiganaData} ${styles.data}`}>
              <Oddtext />
            </td>
            <td className={`${styles.prefectures} ${styles.lebel}`}>
              発送日
              <Oddtext />
            </td>
            <td className={`${styles.prefecturesData} ${styles.data}`}>
              <Oddtext />
            </td>
          </tr>
        </table>
        <table className={styles.addressBoxTableTwo}></table>
      </div>
      {/* --------------box 1 end --------------- */}

      {/* --------------box 2 --------------- */}
      <div className={styles.addressBox}>
        {/* addressbox heading */}
        <h4 className={styles.addressBoxHeading}>
          別送住所１
          <Oddtext />
        </h4>
        <hr className={styles.addressBoxUnderline} />
        <table className={styles.addressBoxTableOne}>
          <tr className={styles.TableOneTr}>
            <td className={`${styles.name} ${styles.lebel}`}>
              お名前
              <Oddtext />
            </td>
            <td className={`${styles.nameData} ${styles.data}`}>
              佐々木亜矢
              <Oddtext />
            </td>
            <td className={`${styles.postCode} ${styles.lebel}`}>
              郵便番号
              <Oddtext />
            </td>
            <td className={`${styles.postcodeData} ${styles.data}`}>
              810-0054
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.furigana} ${styles.lebel}`}>
              ふりがな
              <Oddtext />
            </td>
            <td className={`${styles.furiganaData} ${styles.data}`}>
              ささきあや
              <Oddtext />
            </td>
            <td className={`${styles.prefectures} ${styles.lebel}`}>
              都道府県
              <Oddtext />
            </td>
            <td className={`${styles.prefecturesData} ${styles.data}`}>
              福岡県
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.mobile} ${styles.lebel}`}>
              携帯電話
              <Oddtext />
            </td>
            <td className={`${styles.mobileData} ${styles.data}`}>
              092-406-2645
              <Oddtext />
            </td>
            <td className={`${styles.municipalities} ${styles.lebel}`}>
              市区町村以下
              <Oddtext />
            </td>
            <td className={`${styles.municipalitiesData} ${styles.data}`}>
              福岡市中央区今川2丁目1-17
              <Oddtext />
            </td>
          </tr>

          <tr className={`${styles.TableOneTr} ${styles.blankBorder} `}>
            <td className={`${styles.lebel} ${styles.blankBorder} `}></td>
            <td className={`${styles.data} ${styles.blankBorder} `}></td>
            <td className={`${styles.apartmentName} ${styles.lebel}`}>
              マンション名
              <Oddtext />
            </td>
            <td className={`${styles.apartmentNameData} ${styles.data}`}></td>
          </tr>
        </table>

        {/* ---------------------------------table 2---------------------------- */}
        {/* addressbox heading */}
        <h4 className={styles.addressBoxHeading}>
          配送情報
          <Oddtext />
        </h4>
        <hr className={styles.addressBoxUnderline} />
        <table className={styles.addressBoxTableOne}>
          <tr className={styles.TableOneTr}>
            <td className={`${styles.name} ${styles.lebel}`}>
              配送方法
              <Oddtext />
            </td>
            <td className={`${styles.nameData} ${styles.data}`}>
              <Oddtext />
            </td>
            <td className={`${styles.postCode} ${styles.lebel}`}>
              <Oddtext />
            </td>
            <td className={`${styles.postcodeData} ${styles.data}`}>
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.furigana} ${styles.lebel}`}>
              伝票番号
              <Oddtext />
            </td>
            <td className={`${styles.furiganaData} ${styles.data}`}>
              <Oddtext />
            </td>
            <td className={`${styles.prefectures} ${styles.lebel}`}>
              発送日
              <Oddtext />
            </td>
            <td className={`${styles.prefecturesData} ${styles.data}`}>
              <Oddtext />
            </td>
          </tr>
        </table>
        <table className={styles.addressBoxTableTwo}></table>
      </div>
      {/* --------------box 2 end --------------- */}
      {/* --------------box 3 --------------- */}
      <div className={styles.addressBox}>
        {/* addressbox heading */}
        <h4 className={styles.addressBoxHeading}>
          別送住所２
          <Oddtext />
        </h4>
        <hr className={styles.addressBoxUnderline} />
        <table className={styles.addressBoxTableOne}>
          <tr className={styles.TableOneTr}>
            <td className={`${styles.name} ${styles.lebel}`}>
              お名前
              <Oddtext />
            </td>
            <td className={`${styles.nameData} ${styles.data}`}>
              佐々木亜矢
              <Oddtext />
            </td>
            <td className={`${styles.postCode} ${styles.lebel}`}>
              郵便番号
              <Oddtext />
            </td>
            <td className={`${styles.postcodeData} ${styles.data}`}>
              810-0054
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.furigana} ${styles.lebel}`}>
              ふりがな
              <Oddtext />
            </td>
            <td className={`${styles.furiganaData} ${styles.data}`}>
              ささきあや
              <Oddtext />
            </td>
            <td className={`${styles.prefectures} ${styles.lebel}`}>
              都道府県
              <Oddtext />
            </td>
            <td className={`${styles.prefecturesData} ${styles.data}`}>
              福岡県
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.mobile} ${styles.lebel}`}>
              携帯電話
              <Oddtext />
            </td>
            <td className={`${styles.mobileData} ${styles.data}`}>
              092-406-2645
              <Oddtext />
            </td>
            <td className={`${styles.municipalities} ${styles.lebel}`}>
              市区町村以下
              <Oddtext />
            </td>
            <td className={`${styles.municipalitiesData} ${styles.data}`}>
              福岡市中央区今川2丁目1-17
              <Oddtext />
            </td>
          </tr>

          <tr className={`${styles.TableOneTr} ${styles.blankBorder} `}>
            <td className={`${styles.lebel} ${styles.blankBorder} `}></td>
            <td className={`${styles.data} ${styles.blankBorder} `}></td>
            <td className={`${styles.apartmentName} ${styles.lebel}`}>
              マンション名
              <Oddtext />
            </td>
            <td className={`${styles.apartmentNameData} ${styles.data}`}></td>
          </tr>
        </table>

        {/* ---------------------------------table 2---------------------------- */}
        {/* addressbox heading */}
        <h4 className={styles.addressBoxHeading}>
          配送情報
          <Oddtext />
        </h4>
        <hr className={styles.addressBoxUnderline} />
        <table className={styles.addressBoxTableOne}>
          <tr className={styles.TableOneTr}>
            <td className={`${styles.name} ${styles.lebel}`}>
              配送方法
              <Oddtext />
            </td>
            <td className={`${styles.nameData} ${styles.data}`}>
              <Oddtext />
            </td>
            <td className={`${styles.postCode} ${styles.lebel}`}>
              <Oddtext />
            </td>
            <td className={`${styles.postcodeData} ${styles.data}`}>
              <Oddtext />
            </td>
          </tr>

          <tr className={styles.TableOneTr}>
            <td className={`${styles.furigana} ${styles.lebel}`}>
              伝票番号
              <Oddtext />
            </td>
            <td className={`${styles.furiganaData} ${styles.data}`}>
              <Oddtext />
            </td>
            <td className={`${styles.prefectures} ${styles.lebel}`}>
              発送日
              <Oddtext />
            </td>
            <td className={`${styles.prefecturesData} ${styles.data}`}>
              <Oddtext />
            </td>
          </tr>
        </table>
        <table className={styles.addressBoxTableTwo}></table>
      </div>
      {/* --------------box 3 end --------------- */}
    </div>
  );
};

export default ShippingInformation;
