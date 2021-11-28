import Image from 'next/image';
import style from './Header.module.scss';
const Header = (props) => {
  return (
    <div className={style.headerWrapper}>
      <div className={style.headerContainer}>
        <div className={style.logo}>
          <Image
            src="/images/logo.svg"
            alt="台灣觀光指南 Logo"
            width="160"
            height="98"
          />
        </div>
        <ul className={style.navWrapper}>
          <li>
            <p>找景點</p>
            <span>ATTRACTION</span>
          </li>
          <li>
            <p>找美食</p>
            <span>DELICACY</span>
          </li>
          <li>
            <p>找活動</p>
            <span>ACTIVITY</span>
          </li>
        </ul>
        <ul className={style.controlPanel}>
          {/* 這邊之後要換 icon */}
          {/* svg 還要切換成填滿或非填滿 */}
          <li className={style.favoriteButton}></li>
          <li className={style.infoButton}></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
