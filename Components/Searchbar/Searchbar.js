import Image from 'next/image';
import style from './Searchbar.module.scss';
const Searchbar = (props) => {
  const { onFocus, onBlur, isFocusSearchBox, setCheckedList, checkedList, searchTextStr, setSearchTextStr, onClickSearchButton, isErrorMessage, setIsErrorMessage } = props;
  // 控制選擇的項目
  const onCheckedCategory = (category) => {
    const tempCheckedCategory = [...checkedList];    
    const categoryIndex = checkedList.indexOf(category);
    if(categoryIndex !== -1){
      tempCheckedCategory.splice(categoryIndex, 1);
    } else{
      tempCheckedCategory.push(category);
    }
    setCheckedList(tempCheckedCategory);
  };

  const onChangeInput = (textString) => {
    console.log('設定要搜索的關鍵字', textString);
    setIsErrorMessage(false);
    setSearchTextStr(textString);
  };

  // 從多選改成單選

  return (
    <>
      {/* 但這個寫法真的醜到爆誒 */}
      <div
        className={isFocusSearchBox ? style.searchbarWrapper + ' ' + style.active : style.searchbarWrapper}
        onMouseLeave={onBlur}
      >
        {/*  TODO  拆出來變成單獨的 icon.js */}
        <div className={style.inputWrapper} status={isErrorMessage ? 'error' : ''}>
          {isErrorMessage ? (
            <input
              type="text"
              placeholder="請填入搜尋內容"
              value={searchTextStr}
              onKeyUp={onFocus}
              onFocus={onFocus}
              onChange={(e)=> {onChangeInput(e.target.value)}}
            />
          ) : (
            <input
              type="text"
              placeholder="想去哪裡？"
              value={searchTextStr}
              onKeyUp={onFocus}
              onFocus={onFocus}
              onChange={(e)=> {onChangeInput(e.target.value)}}
              />
            )
          }
          {/* next/image 是不是不能直接改 svg 的顏色 */}
          {/* 研究一下要怎麼使用 */}
          <button className={style.searchIcon} onClick={onClickSearchButton}>
            {isErrorMessage ? (
              <Image
                width="30"
                height="30"
                alt="搜尋按鈕的 icon"
                src="/images/icons/warning_icon.svg"
              />
              ) : (
                <Image
                  width="30"
                  height="30"
                  alt="搜尋按鈕的 icon"
                  src="/images/icons/search_icon.svg"
                />
              )
            }
            
          </button>
        </div>
        {/*  FIXME  隱藏起來的區塊，這邊的版面還沒好 */}
        <div className={style.toggleSearchBox}>
          {isFocusSearchBox ? <div className={style.line}></div> : <div className={style.fakeSpace}></div>}
          <div className={style.toggleSearchbarWrapper}>
            <span>想搜尋的類別</span>
            <ul className={style.categoryList}>
              <li>
                <input
                  type="checkbox"
                  value="景點"
                  id="spot"
                  checked={checkedList.includes('景點')}
                  // 這沒有其他的控制方式嗎？
                  onChange={(e)=>{onCheckedCategory(e.target.value)}}
                />
                <label htmlFor="spot">景點</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="美食"
                  checked={checkedList.includes('美食')}
                  id="food"
                  onChange={(e)=>{onCheckedCategory(e.target.value)}}
                />
                <label htmlFor="food">美食</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="活動"
                  checked={checkedList.includes('活動')}
                  id="activity"
                  onChange={(e)=>{onCheckedCategory(e.target.value)}}
                />
                <label htmlFor="activity">活動</label>
              </li>
            </ul>
            <span>熱門關鍵字</span>
            <ul className={style.hotKeyWordList}>
              <li>澎湖花火節</li>
              <li>親子露營</li>
              <li>北投溫泉旅館</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;

// 用那個很像台灣的樣式？
// 需要評估一下要用什麼套件寫
