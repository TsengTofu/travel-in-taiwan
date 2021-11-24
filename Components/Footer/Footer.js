import Image from 'next/image';
import style from './Footer.module.scss';
const Footer = (props) => {
  return (
    <div className={style.footerWrapper}>
      {/* 左邊的社群媒體 */}
      <ul className={style.socialMediaContainer}>
        <li>Follow Us</li>
        <li>
          {/* 要做一個封裝 image 的元件嗎？ */}
          Facebook
          {/* <Image width="" height="" alt="" scr="" /> */}
        </li>
        <li>
          Instagram
          {/* <Image width="" height="" alt="" scr="" /> */}
        </li>
        <li>
          Youtube
          {/* <Image width="" height="" alt="" scr="" /> */}
        </li>
      </ul>
      <p>Copyright © 2021 TRAVEL. All rights reserved.</p>
      {/* 語言切換 */}
      <ul className={style.languageOptionsWrapper}>
        <li>CH</li>
        <li>EN</li>
        <li>JA</li>
      </ul>
    </div>
  );
};

export default Footer;
