import Image from 'next/image';
import style from './ExploreBox.module.scss';
// SEO 優化、商業角度

const ExploreBox = (props) => {
  // 設定 config，應該要從外面傳進去做 mapping，這個是單一的 Box
  const { explorePicData } = props;
  const { pic_src, pic_description } = explorePicData;
  return (
    <div className={style.exploreBox}>
      {/* 圖片的 source 可以用 mapping index 的方式處理？ */}
      {/*  TODO  網址這邊要改成 */}
      <div className={style.exploreBoxPicWrapper}>
        <div
          style={{
            backgroundImage: `url(${pic_src})`,
          }}
          className={style.exploreBoxPic}
        ></div>
      </div>
      <p>{pic_description}</p>
    </div>
  );
};

export default ExploreBox;
