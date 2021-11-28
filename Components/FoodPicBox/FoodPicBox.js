//  TODO  最好思考一下不同 Box 的元件用在哪 
import Image from 'next/image';
import style from './FoodPicBox.module.scss';
const FoodPicBox = (props) => {
  const { foodData } = props;
  return (
    <div className={style.foodPicBoxWrapper}>
      {/*  TODO  先隨便放一張 */}
      <div
        style={{
          backgroundImage: `url(${foodData.pic_src})`,
        }}
        className={style.foodPicBox}
      ></div>
    </div>
  );
};

export default FoodPicBox;