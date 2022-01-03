//  TODO  這邊的資料還沒有設定
import style from './BreadCrumbs.module.scss';
const BreadCrumbs = (props) => {
  return (
    // 這邊可以先寫死，之後帶入資料再回頭處理
    //  TODO  麵包屑會如何讀取資料 
    <div className={style.breadCrumbsWrapper}>
      首頁／搜尋結果
    </div>
  );
};

export default BreadCrumbs;