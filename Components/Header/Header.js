// Header 的下拉選單還沒有處理
import { useState } from 'react';
import Image from 'next/image';
// Component
import MenuList from './MenuList/MenuList';
import style from './Header.module.scss';
const Header = (props) => {
  // 控制的 state
  const [isOpenNav, setIsOpenNav] = useState(true);
  // 打開選單的控制項
  const onOpenNav = (category) => {
    console.log('onClickShowNav', category);
    setIsOpenNav(true);
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
          <li onMouseOver={() => {onOpenNav('ScenicSpot')}} onMouseOut={()=> {setIsOpenNav(false)}}>
            <p>找景點</p>
            <span>ATTRACTION</span>
          </li>
          <li onMouseOver={() => {onOpenNav('Restaurant')}} onMouseOut={()=> {setIsOpenNav(false)}}>
            <p>找美食</p>
            <span>DELICACY</span>
          </li>
          <li onMouseOver={() => {onOpenNav('Activity')}} onMouseOut={()=> {setIsOpenNav(false)}}>
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
    {/*  TODO  這邊需要再思考一下怎麼弄會比較符合 UI 設計稿想要的  */}
    {/* MenuList 長在這邊下面 */}
    {isOpenNav && <div className={style.menuListWrapper}>
      {/* 這邊下面要傳資料進去 */}
      <MenuList />
    </div>}
    </>
  );
};

export default Header;
