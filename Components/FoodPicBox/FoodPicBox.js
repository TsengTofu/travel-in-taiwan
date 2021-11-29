//  TODO  最好思考一下不同 Box 的元件用在哪 
import Image from 'next/image';
import style from './FoodPicBox.module.scss';
const FoodPicBox = (props) => {
  const { foodData } = props;
  return (
      <div
        style={{
          backgroundImage: `url(${foodData.pic_src})`,
        }}
        className={style.foodPicBox}
      >
        <div className={style.textBlock}>
          <h5>{foodData.pic_title}</h5>
          <p>{foodData.pic_description}</p>
        </div>
      </div>
  );
};

export default FoodPicBox;