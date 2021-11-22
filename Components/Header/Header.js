import Image from 'next/image';
import style from './Header.module.scss';
const Header = (props) => {
  return (
    <div className={style.headerWrapper}>
      <Image
        src="/images/logo.svg"
        alt="台灣觀光指南 Logo"
        width="160"
        height="98"
      />
      <ul className={style.navWrapper}>
        <li>
          <div className={style.activeDot}></div>
          <p>找景點</p>
          <span>ATTRACTION</span>
        </li>
        <li>
          <div className={style.activeDot}></div>
          <p>找美食</p>
          <span>DELICACY</span>
        </li>
        <li>
          <div className={style.activeDot}></div>
          <p>找活動</p>
          <span>ACTIVITY</span>
        </li>
        <li>
          <div className={style.activeDot}></div>
          <p>探索更多</p>
          <span>MORE</span>
        </li>
      </ul>
      {/* 最右邊的區塊 */}
      <ul>
        {/* 這邊之後要換 icon */}
        <li>收藏</li>
        <li>資訊欄位</li>
      </ul>
    </div>
  );
};

export default Header;
