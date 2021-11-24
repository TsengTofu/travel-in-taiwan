//  NOTE  這是首頁
import Carousel from '../Components/Carousel/Carousel';
import Searchbar from '../Components/Searchbar/Searchbar';
import ExploreBox from '../Components/ExploreBox/ExploreBox';
import BasicLayout from '../Components/Layout/BasicLayout/BasicLayout';
// Config 先寫在這邊
import explorePicConfig from '../Components/ExploreBox/Config/explorePicConfig';
// Style
import style from '../styles/PageStyles/index.module.scss';
export default function Home() {
  return (
    <div className={style.indexWrapper}>
      <section className={style.bannerBlock}>
        <Carousel />
        <Searchbar />
      </section>
      {/* Explore 區塊 */}
      <section className={style.exploreBlock}>
        {/* 文字的部分，先不包成元件，共用 className 即可 */}
        {/*  NOTE  如果我要做動態的話，再考慮包成元件 */}
        <div className={style.leftInfo}>
          {/* 標題部分 */}
          <div className={style.heading}>
            <p className={style.category}>Explore</p>
            <h4 className={style.mainTitle}>探索台灣每個角落</h4>
            <p className={style.description}>
              台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。
            </p>
          </div>
          {/* 下方選單 */}
          {/* 不確定還有沒有要繼續做 */}
          <ul className={style.exploreList}>
            <li></li>
          </ul>
        </div>
        {/*  FIXME  這邊是單單只有圖片的部分 */}
        <div className={style.explorePicContainer}>
          {explorePicConfig.map((exploreItem) => {
            return <ExploreBox explorePicData={exploreItem} />;
          })}
        </div>
      </section>
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
