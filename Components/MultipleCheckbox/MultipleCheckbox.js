import style from './MultipleCheckbox.module.scss';
const MultipleCheckbox = (props) => {
  const { checkboxListData } = props;
  // console.log(checkboxListData);
  return (
    <div className={style.multipleCheckboxWrapper}>
      {/* 這個是給多重選擇，但做成像是按鈕的形式 */}
      <ul className={style.categoryList}>
        {/*  NOTE  這邊可以用 map 抽換處理 */}
        {checkboxListData && checkboxListData.map((item) => {
          return (
            <li>
              <input
                type="checkbox"
                value={item.value}
                checked={true}
                // onChange={}
                id={item.value}
                />
              <label htmlFor="food">{item.showText}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MultipleCheckbox;