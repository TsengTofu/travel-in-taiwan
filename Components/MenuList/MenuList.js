import menuListConfig from './Config/menuListConfig';
import style from './MenuList.module.scss';

const MenuList = (props) => {
  const { categoryStr } = props;
  const categoryDetail = menuListConfig[categoryStr];
  const { category } = categoryDetail;
  return (
    <>
      {category.map((item) => {
        return (
          <li className={item.list ? style.mainCategory : style.viceCategory}>
            {item.list ? (
              <div className={style.title}>
                {item.icon_src}
                <p>{item.title}</p>
              </div>
            ) : (
              <button type="button">
                {item.icon_src}
                {item.title}
              </button>
            )}
            {item.list && <div className={style.listButton}>
              {item.list.map((element) => {
                  return <button type="button">{element}</button>;
              })}
            </div>}
          </li>
        );
      })}
    </>
  );
};

export default MenuList;
