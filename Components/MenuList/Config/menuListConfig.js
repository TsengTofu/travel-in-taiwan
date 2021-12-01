//  NOTE  看情形決定整理架構
import North from '../../../public/images/icons/menu/north_icon.svg';
import Central from '../../../public/images/icons/menu/central_icon.svg';
import South from '../../../public/images/icons/menu/south_icon.svg';
import East from '../../../public/images/icons/menu/east_icon.svg';
import Meal from '../../../public/images/icons/menu/meal_icon.svg';
import IceCream from '../../../public/images/icons/menu/ice_cream_icon.svg'; 
import Snack from '../../../public/images/icons/menu/snack_icon.svg';
import Souvenir from '../../../public/images/icons/menu/souvenir_icon.svg';
import Activity from '../../../public/images/icons/menu/activity_icon.svg';
import Bicycle from '../../../public/images/icons/menu/bicycle_icon.svg';
import OutDoor from '../../../public/images/icons/menu/outdoor_icon.svg';
import Celebration from '../../../public/images/icons/menu/celebration_icon.svg';

const menuListConfig = {
  ScenicSpot: {
    category: [
      {
        title: '北台灣',
        icon_src: <North />,
        list: [
          '台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣',
        ],
      },
      {
        title: '中台灣',
        icon_src: <Central />,
        list: [
          '台中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣',
        ],
      },
      {
        title: '南台灣',
        icon_src: <South />,
        list: [
          '高雄市', '台南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣',
        ],
      },
      {
        title: '東台灣',
        icon_src: <East />,
        list: [
          '花蓮縣', '台東縣',
        ],
      },
    ],

  },
  Restaurant: {
    category: [
      {
        title: '飽餐一頓',
        icon_src: <Meal />,
      },
      {
        title: '甜食冰品',
        icon_src: <IceCream />,
      },
      {
        title: '在地美味',
        icon_src: <Snack />,
      },
      {
        title: '特色伴手禮',
        icon_src: <Souvenir />,
      },
    ],
  },
  Activity: {
    category: [
      {
        title: '年度活動',
        icon_src: <Activity />,
      },
      {
        title: '單車之旅',
        icon_src: <Bicycle />,
      },
      {
        title: '親近山海',
        icon_src: <OutDoor />,
      },
      {
        title: '節日慶典',
        icon_src: <Celebration />,
      },
    ],
  },
};

export default menuListConfig;