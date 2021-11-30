// Header 的下拉選單還沒有處理
import { useState } from 'react';
import Image from 'next/image';
// Component
import MenuList from '../MenuList/MenuList';
import style from './Header.module.scss';
const Header = (props) => {
  // 控制的 state
  const [isOpenNav, setIsOpenNav] = useState(true);
  const [targetCategory, setTargetCategory] = useState(null);
  // 打開選單的控制項
  const onOpenNav = (category) => {
    setIsOpenNav(true);
    setTargetCategory(category);
  };

  return (
    <>
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
          <li
            onMouseOver={() => {onOpenNav('ScenicSpot')}}
            className={targetCategory === 'ScenicSpot' ? style.active : ''}
          >
            <p>找景點</p>
            <span>ATTRACTION</span>
          </li>
          <li
            onMouseOver={() => {onOpenNav('Restaurant')}}
            className={targetCategory === 'Restaurant' ? style.active : ''}
          >
            <p>找美食</p>
            <span>DELICACY</span>
          </li>
          <li
            onMouseOver={() => {onOpenNav('Activity')}}
            className={targetCategory === 'Activity' ? style.active : ''}
          >
            <p>找活動</p>
            <span>ACTIVITY</span>
          </li>
        </ul>
        <ul className={style.controlPanel}>
          <li className={style.favoriteButton}></li>
          <li className={style.infoButton}></li>
        </ul>
      </div>
    </div>
    <div className={isOpenNav === true ? style.menuListWrapper + ' ' + style.activeMenu : style.menuListWrapper}>
      {isOpenNav && targetCategory &&
        <ul
          onMouseLeave={()=> {setIsOpenNav(false), setTargetCategory(null)}}
        >
        <MenuList categoryStr={targetCategory} />
      </ul>}
    </div>
    </>
  );
};

export default Header;
