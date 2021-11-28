// 圖片之後要縮圖，到 tinyPng 縮圖
//  TODO  看能不能改成傳參數，有不同的形式，樣式從外面控制 
import Image from 'next/image';
import style from './CarouselBanner.module.scss';
import { Carousel } from 'react-bootstrap';
import carouselPicConfig from './Config/carouselPicConfig';

const CarouselBanner = (props) => {
  return (
    <>
      <div className={style.carouselWrapper}>       
        <Carousel>
          {
            carouselPicConfig.map((item)=>{
              return (
              <Carousel.Item>
                <div style={{ backgroundImage: `url(${item.pic_src})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '700px' }}></div>
                <Carousel.Caption>
                  <h3>{item.pic_description}</h3>
                  <p>...</p>
                </Carousel.Caption>
              </Carousel.Item>
              );
            })
          }
          
        </Carousel>
      </div>
    </>
  );
};

export default CarouselBanner;
