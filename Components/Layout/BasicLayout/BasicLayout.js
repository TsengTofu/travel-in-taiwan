import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import style from './BasicLayout.module.scss';

const BasicLayout = (props) => {
  return (
    <>
      <Header />
      <div className={style.container}>{props.children}</div>
      <Footer />
    </>
  );
};
export default BasicLayout;
