import Image from 'next/image';
import Icon from '../Icon/Icon';
// Icon Source
//  FIXME  這邊是否可以封裝 
import Facebook from '../../public/images/icons/social/facebook.svg';
import Instagram from '../../public/images/icons/social/instagram.svg';
import Youtube from '../../public/images/icons/social/youtube.svg';
import style from './Footer.module.scss';
const Footer = (props) => {
  return (
    <div className={style.footerWrapper}>
      {/* 左邊的社群媒體 */}
      <ul className={style.socialMediaContainer}>
        <li>Follow Us</li>
        <li>
          <Icon hovertheme="secondary">
            <Facebook/>
          </Icon>
        </li>
        <li>
          <Icon hovertheme="secondary">
            <Instagram/>
          </Icon>
        </li>
        <li>
          <Icon hovertheme="secondary">
            <Youtube/>
          </Icon>
        </li>
      </ul>
      <p>Copyright © 2021 TRAVEL. All rights reserved. Design by Lola , Front Developed by Tofu Tseng.</p>
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
