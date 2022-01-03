import Image from 'next/image';
import MenuList from '../MenuList/MenuList';
import style from './Header.module.scss';
const Header = (props) => {
  return (
    <>
    <div className={style.headerWrapper}>
      <div className={`container-lg ${style.headerContainer}`}>
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
            <div className={style.navItem}>
              <p>找景點</p>
              <span>ATTRACTION</span>
            </div>
            <div>
              <ul>
                <MenuList categoryStr="ScenicSpot" />
              </ul>
            </div>
          </li>
          <li>
            <div className={style.navItem}>
              <p>找美食</p>
              <span>DELICACY</span>
            </div>
            <div><ul>
              <MenuList categoryStr="Restaurant" />
            </ul></div>
          </li>
          <li>
            <div className={style.navItem}>
              <p>找活動</p>
              <span>ACTIVITY</span>
            </div>
            <div><ul>
              <MenuList categoryStr="Activity" />
            </ul></div>
          </li>
        </ul>
        <ul className={style.controlPanel}>
          <li className={style.favoriteButton}></li>
          <li className={style.infoButton}></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Header;
