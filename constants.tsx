
import { SectionType, Performance, Participant, Prize } from './types';

export const SECTIONS = [
  { id: SectionType.COVER, label: '首页' },
  { id: SectionType.SIGN_IN, label: '签到留念' },
  { id: SectionType.WARM_UP, label: '暖场入场' },
  { id: SectionType.OPENING, label: '开场启动' },
  { id: SectionType.SPEECH, label: '领导致辞' },
  { id: SectionType.PERFORMANCE, label: '节目表演' }, // Swapped
  { id: SectionType.AWARDS, label: '表彰典礼' },    // Swapped
  { id: SectionType.GAMES, label: '互动游戏' },
  { id: SectionType.LUCKY_DRAW, label: '幸运抽奖' },
  { id: SectionType.CLOSING, label: '收场展望' },
  { id: SectionType.BANQUET, label: '晚宴交流' },
];

export const PERFORMANCES: Performance[] = [
  {
    id: 'p1',
    type: '合唱',
    title: '《海芋恋》智朴改编版',
    performers: ['刘倩', '李翔'],
    cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80&w=1000',
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'p2',
    type: '舞蹈',
    title: '《八方来财》',
    performers: ['黄炎', '尤迪', '刘倩'],
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000',
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 'p3',
    type: '其他',
    title: '军体拳',
    performers: ['关磊'],
    cover: 'https://images.unsplash.com/photo-1552072092-7f9b5563dbaf?auto=format&fit=crop&q=80&w=1000',
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    id: 'p4',
    type: '合唱',
    title: '《最炫民族风》奋斗版',
    performers: ['黄雨乐', '陈勇'],
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1000',
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 'p5',
    type: '合唱',
    title: '《梨花又开放》',
    performers: ['陈朦', '袁颖'],
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
    musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  }
];

export const PARTICIPANTS: Participant[] = [
  { id: '1', name: '沈红丹' }, { id: '2', name: '关磊' },
  { id: '3', name: '黄雨乐' }, { id: '4', name: '尤迪' },
  { id: '5', name: '陈勇' }, { id: '6', name: '陈朦' },
  { id: '7', name: '孙斌' }, { id: '8', name: '李翔' },
  { id: '9', name: '徐航' }, { id: '10', name: '董秋辰' },
  { id: '11', name: '袁颖' }, { id: '12', name: '许佳敏' },
  { id: '13', name: '黄炎' }, { id: '14', name: '朱一飞' },
  { id: '15', name: '叶嘉宾' }, { id: '16', name: '陈明' },
  { id: '17', name: '刘倩' } // Added
];

export const AWARDS_DATA = [
  { title: "优秀团队奖", dept: "市场销售部", rep: "李翔" },
  { title: "优秀个人奖", items: [
      { name: "陈勇", dept: "技术研发部" },
      { name: "尤迪", dept: "数据战略部" },
      { name: "关磊", dept: "总经办" }
    ] 
  },
  { title: "卓越奖", dept: "市场拓展部", rep: "袁颖" },
  { title: "星启奖", dept: "综合办公室", rep: "黄雨乐" },
  { title: "奥斯卡最佳演员奖", dept: "董事长", rep: "朱一飞" }
];

export const PRIZES: Prize[] = [
  { id: 1, name: "智朴龙马精神特等奖 (MacBook Pro M4)", tier: "特等奖" },
  { id: 2, name: "数智巅峰一等奖 (iPhone 17 Pro Max)", tier: "一等奖" },
  { id: 3, name: "跃马扬鞭二等奖 (iPad Pro)", tier: "二等奖" },
  { id: 4, name: "马到成功三等奖 (Herman Miller 办公椅)", tier: "三等奖" },
  ...Array.from({ length: 36 }).map((_, i) => ({
    id: i + 5,
    name: `新春如意奖 (智能生活礼包 ${i + 1})`,
    tier: "幸运奖"
  }))
];
