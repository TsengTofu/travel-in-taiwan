// 這個是輪播元件
// 可能還是要引入 bootstrap5 的輪播
// 圖片之後要縮圖，到 tinyPng 縮圖
import Image from 'next/image';
import style from './Carousel.module.scss';

const Carousel = (props) => {
  return (
    <>
      <div className={style.carouselWrapper}>
        <p>我是輪播元件</p>
        {/* 這邊先做假的底圖 */}
        <Image
          src="/images/index_banners/banner_01.jpg"
          width="600"
          height="400"
        />
      </div>
    </>
  );
};

export default Carousel;
