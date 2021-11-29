//  NOTE  這是首頁
// bootstrap 研究一下修改變數
import { useState } from 'react';
import Image from 'next/image';
import CarouselBanner from '../Components/CarouselBanner/CarouselBanner';
import Searchbar from '../Components/Searchbar/Searchbar';
import ExploreBox from '../Components/ExploreBox/ExploreBox';
import SwitchPicBox from '../Components/SwitchPicBox/SwitchPicBox';
import FoodPicBox from '../Components/FoodPicBox/FoodPicBox';
//  TODO  測試
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
//  NOTE  到這裡 Swiper 結束

import BasicLayout from '../Components/Layout/BasicLayout/BasicLayout';
//  FIXME  Config 先寫在這邊
import explorePicConfig from '../Components/ExploreBox/Config/explorePicConfig';
import participatePicConfig from '../Components/SwitchPicBox/Config/participatePicConfig';
import foodPicConfig from '../Components/FoodPicBox/Config/foodPicConfig';

// Style
import style from '../styles/PageStyles/index.module.scss';
export default function Home() {
  // State
  const [isFocusSearchBox, setIsFocusSearchBox] = useState(false);
  // 已選擇要搜索的關鍵字
  const [checkedList, setCheckedList] = useState([]);
  // 使用者自己 key 的關鍵字
  const [searchTextStr, setSearchTextStr] = useState('');
  // 要傳入給 participate 的圖片資源，須先設定一個 config
  const [showPicSrc, setShowPicSrc] = useState(
    participatePicConfig.default.pic_src
  );

  // 觸發打開 Searchbox 的元件
  const onOpenSearchBox = () => {
    console.log('有觸發我 - onOpenSearchBox');
    setIsFocusSearchBox(true);
  };
  const onCloseSearchBox = () => {
    console.log('有觸發我 - onCloseSearchBox');
    setIsFocusSearchBox(false);
  };

  // Participate 區塊用到的
  const onClickEvent = (eventName) => {
    console.log(eventName, 'eventName');
    setShowPicSrc(participatePicConfig[eventName].pic_src);
  };

  // Enjoy 區塊

  return (
    <div className={style.indexWrapper}>
      <section className={style.bannerBlock}>
        <CarouselBanner />
        <div className={style.searchBlock}>
          <Searchbar
            // 傳入對應的 function，這先保留，不確定會不會用到
            checkedList={checkedList}
            isFocusSearchBox={isFocusSearchBox}
            searchTextStr={searchTextStr}
            onFocus={onOpenSearchBox}
            onBlur={onCloseSearchBox}
            setCheckedList={setCheckedList}
            setSearchTextStr={setSearchTextStr}
          />
        </div>
      </section>
      {/* Explore 區塊 */}
      <section className={style.exploreBlock}>
        {/* 文字的部分，先不包成元件，共用 className 即可 */}
        {/*  NOTE  如果我要做動態的話，再考慮包成元件 */}
        <div className={style.exploreHeading}>
          <p className={style.category}>Explore</p>
          <h4 className={style.mainTitle}>探索台灣每個角落</h4>
          <p className={style.description}>
            台灣擁有高山峽谷及四面環海地理特性，因此擁有各種自然景致等待人們發現，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文的深度旅行，都可以在台灣這片土地上踏尋不同的風采。
          </p>
          {/* Button */}
          {/* TODO  這邊需要回頭修正  */}
          <button
            type="button"
            // className={style.exploreButton}
            className="btn btn-primary"
          >
            探索更多景色
            {/* 這裡要加上一個 icon */}
            <Image
              src="/images/icons/arrow_icon.svg"
              width="72"
              height="24"
              alt=""
            />
          </button>
        </div>
        {/*  FIXME  這邊是單單只有圖片的部分 */}
        <div className={style.explorePicContainer}>
          {explorePicConfig.map((exploreItem) => {
            return <ExploreBox explorePicData={exploreItem} />;
          })}
        </div>
      </section>
      {/* Participate 區塊 */}
      <section className={style.participateBlock}>
        {/* 圖片 */}
        <div className={style.picContainer}>
          {/*  TODO  拆成元件好了 */}
          <SwitchPicBox picSrc={showPicSrc} />
        </div>
        <div className={style.participateHeading}>
          <p className={style.category}>Participate</p>
          <h4 className={style.mainTitle}>體驗當地風情人文</h4>
          <p className={style.description}>
            台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。
          </p>
          {/* ButtonList */}
          <ul className={style.buttonList}>
            {/*  FIXME  之前寫的 dot 可以拿出來用 */}
            {/*  TODO  可以改成 config 的處理方式，再用 map 轉出來 */}
            <li onMouseOver={() => onClickEvent('yearEvent')}>
              <p>一年一度精采盛事</p>
            </li>
            <li onMouseOver={() => onClickEvent('bikeEvent')}>
              <p>追逐自由單車旅程</p>
            </li>
            <li onMouseOver={() => onClickEvent('outdoorEvent')}>
              <p>親自踏上山海之旅</p>
            </li>
            <li onMouseOver={() => onClickEvent('cultureEvent')}>
              <p>體驗台灣文化慶典</p>
            </li>
          </ul>
        </div>
      </section>
      {/* Enjoy 區塊 */}
      <section className={style.enjoyBlock}>
        <div className={style.enjoyHeading}>
          <p className={style.category}>Enjoy</p>
          <h4 className={style.mainTitle}>享受在地獨特風味</h4>
          <p className={style.description}>
            充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。
          </p>
          {/* TODO  這邊需要回頭修正  */}
          <button
            type="button"
            // className={style.exploreButton}
            className="btn btn-primary"
          >
            享用更多美食
            {/* 這裡要加上一個 icon */}
            <Image
              src="/images/icons/arrow_icon.svg"
              width="72"
              height="24"
              alt=""
            />
          </button>
        </div>
        {/* 下方輪播的部分 */}
        <div className={style.foodPicContainer}>
          {/*  FIXME  breakpoints swiper 參數後續來研究 */}
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            loop={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {foodPicConfig.map((foodItem) => {
              return (
                <SwiperSlide>
                  <FoodPicBox foodData={foodItem} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* Subscribe 區塊 */}
      <section className={style.subscribeBlock}>
        <div className={style.leftSpotPic}>
          <Image src="/images/index_subscribe/subscribe.jpeg" width="562" height="300" alt="" />
        </div>
        {/* 右半邊 */}
        <div className={style.subscribeHeading}>
          <p className={style.category}>Subscribe</p>
          <h4 className={style.mainTitle}>每個月來場放鬆旅行</h4>
          <p className={style.description}>
            如果您願意收到每月旅遊資訊，一起感受台灣旅行的美好。
          </p>
          {/* Input 區塊 */}
          {/*  TODO  這邊需要放 useState 的 value  */}
          <div className={style.emailInput}>
            <input type="text" placeholder="youremail@example.com" />
            {/* 設定 enter 也可以送出 */}
            <button type="button" className={style.confirmButton}>
              {/* 這裡要補放上 icon */}
            </button>
          </div>
        </div>
      </section>

      {/*  TODO  測試的寫法，可以透過 HTML 傳遞 status 去控制樣式 */}
      <div className={style.wrapper} status={isFocusSearchBox ? 'open' : ''}>
        測試 HTML 跟 CSS 的變數關係
      </div>
      {/* 這段之後要刪除 */}
    </div>
  );
}

// console.log(Home, Layout);
Home.Layout = BasicLayout;
export async function getServerSideProps(req) {
  return {
    props: { hello: 'xxx' },
  };
}

//  TODO  抓資料先在這裡
// 決定一下要用那一種取資料的方式
