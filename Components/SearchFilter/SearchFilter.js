//  TODO  之後再拆出來
// 因為這邊的資料會根據選到的 tab 有所不同
import style from './SearchFilter.module.scss';
// 實際上決定要 render 的畫面
import categorySettingConfig from '../Config/categorySettingConfig';
import MultipleCheckbox from '../MultipleCheckbox/MultipleCheckbox';

const SearchFilter = (props) => {
  const { activeCategoryTab } = props;
  const data = categorySettingConfig[activeCategoryTab];
  const { classList, otherFilter } = data;
  const { serviceInfo, activitySchedule, assignDate } = otherFilter;
  // 只要知道 tab 是哪一種類型就可以了
  return (
    <div className={style.searchFilterWrapper}>
      <p className={style.searchTotalSummary}>
        共有<span>105</span>筆搜尋結果
      </p>
      {/* 一個大分類的區塊 */}
      <div className={style.filterBlock}>
        <p>排序方式</p>
        {/* options */}
        <select name="" id="">
          <option value="">相關結果優先</option>
          <option value="">最新結果優先</option>
        </select>
      </div>
      {/* 針對 serviceInfo */}
      {serviceInfo && (
        <div className={style.filterBlock}>
          <p>{serviceInfo.title}</p>
          <ul>
            {serviceInfo.columnList.map((item, key) => {
              return (
                <li>
                  {/*  NOTE  這邊最好抽成一個元件 */}
                  <input
                    type="checkbox"
                    value={item.columnKey}
                    checked={true}
                    // onChange={}
                    id={item.columnKey}
                  />
                  <label htmlFor={item.columnKey}>{item.columnName}</label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* FIXME 針對其他兩個類別 */}
      {activitySchedule && (
        <div className={style.filterBlock}>
          <p>{activitySchedule.title}</p>
          <ul>
            {activitySchedule.columnList.map((item, key) => {
              return (
                <li>
                  {/*  NOTE  這邊最好抽成一個元件 */}
                  <input
                    type="checkbox"
                    value={item.columnKey}
                    checked={true}
                    // onChange={}
                    id={item.columnKey}
                  />
                  <label htmlFor={item.columnKey}>{item.columnName}</label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* DateRange */}
      {assignDate && (
        <div className={style.filterBlock}>
          <p>{assignDate.title}</p>
          {/*  FIXME  這邊要放入 DatePicker 的元件 */}
          {/* https://react-day-picker.js.org/docs/getting-started */}
        </div>
      )}
      <div className={style.filterBlock}>
        <p>主題類別</p>
        <MultipleCheckbox
          // 但這樣的寫法其實不太好
          checkboxListData={classList}
          // 要有一個取的 value 的
        />
      </div>
    </div>
  );
};

export default SearchFilter;
