import Image from 'next/image';
import style from './Searchbar.module.scss';
const Searchbar = (props) => {
  return (
    <>
      <div className={style.searchbarWrapper}>
        {/* 這邊之後要拆出來變成單獨的 icon.js */}
        <div className={style.inputWrapper}>
          <div className={style.searchIcon}>
            <Image
              width="30"
              height="30"
              alt="搜尋按鈕的 icon"
              src="/images/icons/search_icon.svg"
            />
          </div>
          <input type="text" placeholder="想去哪裡？" />
        </div>
        <button className={style.searchButton} type="button">
          GO
        </button>
      </div>
    </>
  );
};

export default Searchbar;

// 用那個很像台灣的樣式？
// 需要評估一下要用什麼套件寫
