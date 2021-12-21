//  NOTE  這個是給輸入關鍵字做檢驗的部分，也就是首頁 
const taiwanCityConfig = [
  {
    inputKeywords: ['臺北市', '台北市', '台北', '臺北'],
    outputValue: 'Taipei',
  },
  {
    inputKeywords: ['新北市', '新北'],
    outputValue: 'NewTaipei',
  },
  {
    inputKeywords: ['桃園市', '桃園'],
    outputValue: 'Taoyuan',
  },
  {
    inputKeywords: ['臺中市', '臺中', '台中市', '台中'],
    outputValue: 'Taichung',
  },
  {
    inputKeywords: ['臺南市', '臺南', '台南', '台南市'],
    outputValue: 'Tainan',
  },
  {
    inputKeywords: ['高雄市', '高雄'],
    outputValue: 'Kaohsiung',
  },
  {
    inputKeywords: ['基隆市', '基隆'],
    outputValue: 'Keelung',
  },
  {
    inputKeywords: ['新竹市', '新竹'],
    outputValue: 'Hsinchu',
  },
  {
    inputKeywords: ['新竹縣'],
    outputValue: 'HsinchuCounty',
  },
  {
    inputKeywords: ['苗栗縣', '苗栗'],
    outputValue: 'MiaoliCounty',
  },
  {
    inputKeywords: ['彰化縣', '彰化'],
    outputValue: 'ChanghuaCounty',
  },
  {
    inputKeywords: ['南投縣', '南投'],
    outputValue: 'NantouCounty',
  },
  {
    inputKeywords: ['雲林縣', '雲林'],
    outputValue: 'YunlinCounty',
  },
  {
    inputKeywords: ['嘉義縣'],
    outputValue: 'ChiayiCounty',
  },
  {
    inputKeywords: ['嘉義市', '嘉義'],
    outputValue: 'Chiayi',
  },
  {
    inputKeywords: ['屏東縣', '屏東'],
    outputValue: 'PingtungCounty',
  },
  {
    inputKeywords: ['宜蘭縣', '宜蘭'],
    outputValue: 'YilanCounty',
  },
  {
    inputKeywords: ['花蓮縣', '花蓮'],
    outputValue: 'HualienCounty',
  },
  {
    inputKeywords: ['臺東縣', '臺東', '台東', '台東縣'],
    outputValue: 'TaitungCounty',
  },
  {
    inputKeywords: ['金門縣', '金門'],
    outputValue: 'KinmenCounty',
  },
  {
    inputKeywords: ['澎湖縣', '澎湖'],
    outputValue: 'PenghuCounty',
  },
  {
    inputKeywords: ['連江縣'],
    outputValue: 'LienchiangCounty',
  },
];

export default taiwanCityConfig; 