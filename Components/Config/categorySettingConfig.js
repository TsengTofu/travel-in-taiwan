const categorySettingConfig = {
  scenicSpot: {
    classList: [
      {
        showText: '自然風景',
        value: '自然風景', //  NOTE  實際要搜索的值，因為有些 class 的設定不一樣
      },
      {
        showText: '觀光工廠',
        value: '觀光工廠',
      },
      {
        showText: '文化古蹟',
        value: '文化古蹟',
      },
      {
        showText: '溫泉風呂',
        value: '溫泉風呂',
      },
    ],
    // 最後還是決定先用 object
    otherFilter: {
      serviceInfo: {
        title: '服務資訊', // 小灰字標題
        columnList: [
          {
            columnKey: 'parkingLot', // 帶入搜索的 key 值
            columnName: '停車場', // checkbox 要顯示的文字
          },
          {
            columnKey: 'ticketInfo',
            columnName: '購票資訊',
          },
        ],
      },
    },
  },
  restaurant: {
    classList: [
      {
        showText: '飽餐一頓',
        value: '中式料理',
      },
      {
        showText: '甜食冰品',
        value: '甜點冰品',
      },
      {
        showText: '在地美味',
        value: '地方特產',
      },
      {
        showText: '特色伴手禮',
        value: '伴手禮',
      },
    ],
    otherFilter: {
      serviceInfo: {
        title: '服務資訊', // 小灰字標題
        columnList: [
          {
            columnKey: 'parkingLot', // 帶入搜索的 key 值
            columnName: '停車場', // checkbox 要顯示的文字
          }
        ],
      },
    },
  },
  activity: {
    classList: [
      {
        showText: '年度活動',
        value: '年度活動',
      },
      {
        showText: '單車之旅',
        value: '自行車活動',
      },
      {
        showText: '親近山海',
        value: '遊憩活動',
      },
      {
        showText: '節日節慶',
        value: '節慶活動',
      },
    ],
    otherFilter: {
      activitySchedule: {
        title: '活動檔期', // 小灰字標題
        columnList: [
          {
            columnKey: 'date_incoming', // 帶入搜索的 key 值
            columnName: '即將開始', // checkbox 要顯示的文字
          },
          {
            columnKey: 'date_ing',
            columnName: '進行中',
          },
        ],
      },
      assignDate: {
        title: '指定時段',
        type: 'datepicker', //  NOTE  這個比較不一樣
      },
    },
  },
};

export default categorySettingConfig;
