import style from './Icon.module.scss';

const Icon = (props) => {
  const { hovertheme } = props;
  return (
    <div className={style.iconWrapper} hovertheme={hovertheme}>
      {props.children}
    </div>
  );
};

export default Icon;