import Image from 'next/image';
import menuListConfig from './Config/menuListConfig';
import style from './MenuList.module.scss';

const MenuList = (props) => {
  const { categoryStr } = props;
  const categoryDetail = menuListConfig[categoryStr];
  const { category } = categoryDetail;
  return (
    <>
      {/*  TODO  思考一下改變 svg 的顏色的方式 */}
      {category.map((item) => {
        return (
          <li className={item.list ? style.mainCategory : style.viceCategory}>
            {item.list ? (
              // 這個是北台灣那一系列的
              <div className={style.title}>
                <Image src={item.icon_src} width="60" height="60" />
                <p>{item.title}</p>
              </div>
            ) : (
              <button type="button">
                <Image src={item.icon_src} width="60" height="60" />
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
