export class Prefecture {
  cd = '';
  name = '';
}

export class Aria {
  aria = '';
  prefectures: Prefecture[] = [];
}

export const PREFECTURES: Aria[] = [
  { aria: '北海道',
    prefectures: [
      { cd: '01', name: '北海道' }
    ]
  },
  {
    aria: '東北',
    prefectures: [
      { cd: '02', name: '青森県' },
      { cd: '03', name: '岩手県' },
      { cd: '04', name: '宮城県' },
      { cd: '05', name: '秋田県' },
      { cd: '06', name: '山形県' },
      { cd: '07', name: '福島県' },
    ]
  },
  {
    aria: '関東',
    prefectures: [
      { cd: '08', name: '茨城県' },
      { cd: '09', name: '栃木県' },
      { cd: '10', name: '群馬県' },
      { cd: '11', name: '埼玉県' },
      { cd: '12', name: '千葉県' },
      { cd: '13', name: '東京都' },
      { cd: '14', name: '神奈川県' },
    ]
  },
  {
    aria: '中部',
    prefectures: [
      { cd: '15', name: '新潟県' },
      { cd: '16', name: '富山県' },
      { cd: '17', name: '石川県' },
      { cd: '18', name: '福井県' },
      { cd: '19', name: '山梨県' },
      { cd: '20', name: '長野県' },
      { cd: '21', name: '岐阜県' },
      { cd: '22', name: '静岡県' },
      { cd: '23', name: '愛知県' },
    ]
  },
  {
    aria: '近畿',
    prefectures: [
      { cd: '24', name: '三重県' },
      { cd: '25', name: '滋賀県' },
      { cd: '26', name: '京都府' },
      { cd: '27', name: '大阪府' },
      { cd: '28', name: '兵庫県' },
      { cd: '29', name: '奈良県' },
      { cd: '30', name: '和歌山県' },
    ]
  },
  {
    aria: '中国',
    prefectures: [
      { cd: '31', name: '鳥取県' },
      { cd: '32', name: '島根県' },
      { cd: '33', name: '岡山県' },
      { cd: '34', name: '広島県' },
      { cd: '35', name: '山口県' },
    ]
  },
  {
    aria: '四国',
    prefectures: [
      { cd: '36', name: '徳島県' },
      { cd: '37', name: '香川県' },
      { cd: '38', name: '愛媛県' },
      { cd: '39', name: '高知県' },
    ]
  },
  {
    aria: '九州',
    prefectures: [
      { cd: '40', name: '福岡県' },
      { cd: '41', name: '佐賀県' },
      { cd: '42', name: '長崎県' },
      { cd: '43', name: '熊本県' },
      { cd: '44', name: '大分県' },
      { cd: '45', name: '宮崎県' },
      { cd: '46', name: '鹿児島県' },
      { cd: '47', name: '沖縄県' },
    ]
  }
];
