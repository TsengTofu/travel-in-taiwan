import Image from 'next/image';
import style from './SwitchPicBox.module.scss';
const SwitchPicBox = (props) => {
  const { picSrc } = props;
  return(
    <div className={style.switchPicBoxWrapper}>
      <Image src={picSrc} width="850" height="430" alt="" />
    </div>
  );
};

export default SwitchPicBox;