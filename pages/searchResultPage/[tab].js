//  TODO  搜尋結果頁面的切換
import { useRouter } from 'next/router';
import BasicLayout from '../../Components/Layout/BasicLayout/BasicLayout';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import taiwanCityListConfig from '../../server/config/taiwanCityListConfig';
import style from '../../styles/PageStyles/searchResultTab.module.scss';
//  TODO  icon 的部分，之後都要回頭整理
import SearchIcon from '../../public/images/icons/search_icon.svg';
import { useState } from 'react';

// 這邊的資料流有點混亂
const SearchResultTab = (props) => {
  // 這邊的 props 不知道會怎傳遞
  const router = useRouter();
  console.log(router.query, 'router.query');
  // 參考網址：
  // http://localhost:3000/searchResultPage/activity?hello=xxxx&text=tretretret
  // 現在點選到的 Tab
  const { tab } = router.query; // 這段在 terminal 裡面看不到

  // 處理多選選單的問題
  const [selectCityList, setSelectCityList] = useState([]);
  //  TODO  之後要拆成元件
  const [isOpen, setIsOpen] = useState(false);  
  // 選擇的城市
  const onSelectCity = (city) => {
    console.log('onSelectCity', city);
    // 如果沒有在原本的清單裡面才 push
    // 如果有則是要刪除掉
    const temp = [...selectCityList];
    if (selectCityList.indexOf(city) === -1) {
      temp.push(city);
      setSelectCityList(temp);
    } else {
      temp.splice(temp.indexOf(city), 1);
      setSelectCityList(temp);
    }
  };

  // 展開選單
  const onToggleCityList = () => {
    setIsOpen(!isOpen);
  };

  return (
    // bootstrap 要思考一下怎麼寫比較好
    <div className={`container-lg ${style.searchResultTabWrapper}`}>
      {/* 上半部搜索的部分 */}
      <section className={style.topSearchSummary}>
        <BreadCrumbs />
        <div className={style.searchBlock}>
          <p>你目前正在搜索</p>
          <div className={style.searchDetailContainer}>
            {/* input 輸入關鍵字的地方 */}
            <div className={style.inputBlock}>
              <input type="text" placeholder="請輸入關鍵字" />
            </div>
            {/* 選擇城市的 optionList */}
            {/*  FIXME  這邊是不是應該要拆開成元件  */}
            <div className={style.selectCityBlock} status={isOpen ? 'open' : ''}>
              <div className={style.showWrapper}>
                <div className={style.showChoice} status={isOpen ? 'open' : ''}>
                  <div className={style.tagList}>
                    <ul>
                      {/* 預設是顯示文字 */}
                      {taiwanCityListConfig.map((item, index) => {
                        if (selectCityList.indexOf(item.value) !== -1) {
                          //  TODO  這邊應該是要拆成元件
                          return (
                            <li
                              key={`city_${index}`}
                              className={style.selectCityLabel}
                            >
                              <p>{item.keyword}</p>
                              {/*  TODO  onClick function */}
                              <div
                                className={style.cancelIcon}
                                onClick={() => onSelectCity(item.value)}
                              ></div>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                    {/*  FIXME  這邊要先做假的，在 tagList 裡面要寫判斷 */}
                    {selectCityList.length === 0 ? <p>選擇縣市</p> : null}
                  </div>
                  <div
                    className={style.toggleArrow}
                    // 這邊要寫事件
                    onClick={onToggleCityList}
                    status={isOpen ? 'open' : ''}
                  ></div>
                </div>
                {/*  TODO  這邊之後要改成用 map 處理 */}
              </div>
              {isOpen && <div className={style.selectContainer}>
                <ul>
                  {taiwanCityListConfig.map((city, index) => {
                    const { value } = city;
                    return (
                      // 這邊抽成元件好了？
                      <li
                        key={`city_${index}`}
                        onClick={() => onSelectCity(value)}
                        status={
                          selectCityList.indexOf(value) !== -1 ? 'active' : ''
                        }
                      >
                        <p>{city.keyword}</p>
                        {/* 看之後要不要抽成 icon.js */}
                        <div className={style.icon}></div>
                      </li>
                    );
                  })}
                </ul>
              </div>}
            </div>
            {/* 搜尋按鈕 */}
            <button type="button" className={style.searchButton}>
              <SearchIcon />
              搜尋
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultTab;
SearchResultTab.Layout = BasicLayout;
