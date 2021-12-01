import style from './Icon.module.scss';

const Icon = (props) => {
  const { hoverTheme } = props;
  return (
    <div className={style.iconWrapper} hoverTheme={hoverTheme}>
      {props.children}
    </div>
  );
};

export default Icon;