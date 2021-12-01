import Arrow from '../../public/images/icons/arrow_icon.svg';
import style from './Button.module.scss';
const Button = (props) => {
  const { buttonStr } = props;
  return (
    <div className={style.buttonWrapper}>
      <button type="button">
        {buttonStr} <Arrow />
      </button>
    </div>
  );
};

export default Button;
