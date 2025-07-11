const config = {
  //网页元数据
  metaData:{
    title: '🎉赵嘉的个人主页',
    description: '欢迎来到赵嘉的奇妙世界！',
    keywords: '赵嘉,赵嘉,个人主页,个人网站',
    icon: '/favicon.ico'   //网页图标，支持外链
  },

  avatar: "/img/avatar.jpg", // 头像
  welcometitle: "Hi, I'm Jia Zhao", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['QQ:2317710937','WX:zj2317710937','Phone:15613982332','E-mail:15613982332@163.com'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"video",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"世界很温柔《龙族》上杉绘梨衣",
        "preview":"https://file.uhsea.com/2503/c048d174eee7df15de79a6cdc5c47697LT.webm",
        "url":"https://file.uhsea.com/2503/320a926c4a3d6c7e0457823f7fd45e5dUC.webm"    //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"video",
      "datainfo":{
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Vue.js', 'Pandas', 'JavaScript', 'Flask', 'C/C++', 'Python', 'Linux', 'Docker', 'MySQL', 'Elasticsearch', 'Anaconda'],
    skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
  },

  //社交按钮
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://www.github.com/leleo886"},
    {icon:"mdi-email",link:"mailto:leleo886@foxmail.com"},
    {icon:"mdi-qqchat",link:"https://im.qq.com/"},
    {icon:"mdi-wechat",link:"https://wx.qq.com/"},
    {icon:"mdi-youtube",link:"https://www.youtube.com"},
    {icon:"mdi-facebook",link:"https://www.facebook.com"}
  ],

typeWriterStrings: [
  "等不到天黑 烟火不会太完美 回忆烧成灰 还是等不到结尾",
  "我遇见谁 会有怎样的对白 我等的人 她在多远的未来",
  "那些你很冒险的梦 我陪你去疯 折纸飞机 碰到雨天 终究会坠落",
  "漫天风雪我陪你颤抖 我们别回头",
  "别等到一千年以后 所有人都遗忘了我",
  "那时红色黄昏的沙漠 能有谁解开缠绕千年的寂寞",
  "问宿命是否 再多久 再持久 再永久",
  "我怀念的是无话不说 我怀念的是一起作梦 我怀念的是争吵以后 还是想要爱你的冲动",
  "我听见风来自地铁和人海 我排着队拿着爱的号码牌",
  "逆光而行的泪光 是我不愿熄灭的倔强 面对希望 逆着光 感觉爱存在的地方",
  "触电般不可思议像一个奇迹 划过我的生命里 你就是绿光 如此的唯一",
  "我爱上让我奋不顾身的一个人 我以为这就是我所追求的世界 然而横冲直撞被误解被骗 是否成人的世界背后 总有残缺",
  "原来人会变得温柔 是透彻的懂了 爱情是流动的 不由人的 何必激动着要理由",
  "世界有时候孤单的很需要另一个同类 爱收了又给 我们都不太完美",
  "我不难过 这不算什么 只是为什么眼泪会流 我也不懂",
  "圈圈圆圆圈圈 天天年年天天的我 深深看你的脸 生气的温柔 埋怨的温柔",
  "修炼爱情的悲欢 我们这些努力不简单 快乐炼成泪水 是一种勇敢",
  "小酒窝长睫毛 是你最美的记号 我放慢了步调 感觉像是喝醉了",
  "如果那天 把该说的话好好说 该体谅的不执著 如果那天我 不受情绪挑拨 你会怎么做",
  "我为你心跳 我为你祈祷 因为爱让我们能遇到 因为你开始燃烧 痛才慢慢治疗",
  "编号89757 从这一刻就是你给我的姓名 模仿人类的机器 真实的皮肤有温度 甚至能呼吸",
  "不潮不用花钱 请你不要到处叩叩 潮流需要抠抠 不小心就没抠抠",
  "我穿过一片雨林 雨林却离我而去 风裹着回忆 像你温柔的呼吸",
  "我也很想他 我们都一样 在他的身上曾找到翅膀 只是那时的他 是因为你他开始飞翔"
],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '5129637710'  //歌单id ---> music.163.com/#/playlist?id=2028178887
  },

  //壁纸数据 -----可以将壁纸文件上传到uhsea.com获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"海洋女孩","preview":"/img/wallpaper/static/海洋女孩/image-pre.webp","url":"/img/wallpaper/static/海洋女孩/image.png"},
      {"title":"书房夜晚","preview":"/img/wallpaper/static/书房夜晚/image-pre.webp","url":"/img/wallpaper/static/书房夜晚/image.png"},
      {"title":"安逸舒适","preview":"/img/wallpaper/static/安逸舒适/image-pre.webp","url":"/img/wallpaper/static/安逸舒适/image.png"},
      {"title":"jswcMaMj","preview":"https://file.uhsea.com/2503/76a4f03e8654d6e66bbbc7e8149c2fe33M.png","url":"https://file.uhsea.com/2503/5b8a20a5f2b269659911c9485d0d0c3f0F.png"},
      {"title":"pgtTqoqq","preview":"https://file.uhsea.com/2503/caeae6b4fc1aba41bff4ad4ec59d6d8aA5.png","url":"https://file.uhsea.com/2503/45aa0a5a31a0ae95f7cc660e3ab4148eUT.png"},
      {"title":"cvKMKhue","preview":"https://file.uhsea.com/2503/7a693bf725b501e0907ce40f18d2edc49P.png","url":"https://file.uhsea.com/2503/55e7191130d160a8e4421497308ffb67DT.png"},
      {"title":"XpxvQVoP","preview":"https://file.uhsea.com/2503/f4b6804c7189357d3252aa0f981b59c4EF.png","url":"https://file.uhsea.com/2503/66359907715d46e0a4523da0142a6f63EU.png"},
      {"title":"fVEEjEOA","preview":"https://file.uhsea.com/2503/ed0a4c0a43118ac4e2f39bab75ec19f4PI.png","url":"https://file.uhsea.com/2503/4adbf54af317a075c6b98483a552641f61.png"},
      {"title":"jgnIKMpd","preview":"https://file.uhsea.com/2503/5d4d35ed1c286afc930184231456edc9BR.png","url":"https://file.uhsea.com/2503/3bf8025d8ad7ccefcf7e72c9368a245cLL.png"},
      {"title":"mgqyySeh","preview":"https://file.uhsea.com/2503/38994dc4ef8659067537a3ea11af0927KB.png","url":"https://file.uhsea.com/2503/6e3b14778e879234826b9d5c793474ffOS.png"},
      {"title":"dSXZfZp","preview":"https://file.uhsea.com/2503/22c27ea8c1e44209a223a28026146115LS.png","url":"https://file.uhsea.com/2503/8d1203a01e7a5a639caf91ca6c9608acVL.png"},
      
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
      {"title":"DfNHPPcc","preview":"https://file.uhsea.com/2503/e3510f4d0286e37b828f74494230f0efM2.png","url":"https://file.uhsea.com/2503/97b50adb3d4cd6f1a4132f6d3e8c98483T.png"},
      {"title":"WIOlrGSy","preview":"https://file.uhsea.com/2503/99162abfe07e18cfe6182ca3458561ef3A.png","url":"https://file.uhsea.com/2503/609532b992163117db9b341dde87b78f3C.png"},
      {"title":"cZZwzhis","preview":"https://file.uhsea.com/2503/cf558fa1989c07726778c60be47b9928K8.png","url":"https://file.uhsea.com/2503/e27b91f1604f73d0444c807024ef7c9fI3.png"},
      {"title":"aANKZHPX","preview":"https://file.uhsea.com/2503/0aa1cb875c8c7c20afd1aa72530294350K.png","url":"https://file.uhsea.com/2503/b09b65e20e176cb0d22dbc319981b5b45L.png"},
    ],
    video:[
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
      {
        "title":"世界很温柔《龙族》上杉绘梨衣",
        "preview":"https://file.uhsea.com/2503/c048d174eee7df15de79a6cdc5c47697LT.webm",
        "url":"https://file.uhsea.com/2503/320a926c4a3d6c7e0457823f7fd45e5dUC.webm"
      },
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },

  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[
    {go:"🚀 前往",img:"/img/sunshine.jpg",title:"Bilibili",subtitle:"欢迎访问我的B站主页", text:"If you see this line, I've managed to get your attention.",url:"https://space.bilibili.com/518716431?spm_id_from=333.1007.0.0",show:false},
    {go:"🗂️ 前往",img:"/img/2.jpg",title:"学习通",subtitle:"好好学习，天天向上", text:"If you see this line, I've managed to get your attention.",url:"https://mooc2-ans.chaoxing.com/mooc2-ans/visit/interaction?moocDomain=https://mooc1-1.chaoxing.com/mooc-ans",show:false},
    {go:"📝 前往",img:"/img/3.jpg",title:"Deepseek",subtitle:"AI", text:"If you see this line, I've managed to get your attention.",url:"https://chat.deepseek.com/",show:false},
    {go:"👍 前往",img:"/img/4.jpg",title:"小红书",subtitle:"Red Book", text:"If you see this line, I've managed to get your attention.",url:"https://www.xiaohongshu.com/explore?m_source=itab",show:false},
    {go:"🗃 前往",img:"/img/5.jpg",title:"知乎",subtitle:"知乎", text:"If you see this line, I've managed to get your attention.",url:"https://www.zhihu.com/",show:false},
    {go:"🎨 前往",img:"/img/6.jpg",title:"微博",subtitle:"微博", text:"If you see this line, I've managed to get your attention.",url:"https://weibo.com/",show:false},
    {go:"💍 前往",img:"/img/7.jpg",title:"网易云音乐",subtitle:"欢迎访问我的网易云主页", text:"wangyiyun",url:"https://music.163.com/#/user/home?id=3441610956",show:false},
    {go:"🔍 前往",img:"/img/8.jpg",title:"CSDN",subtitle:"CSDN", text:"If you see this line, I've managed to get your attention.",url:"https://www.csdn.net/",show:false},
  ],
  
  statement: ["备案号：XXICP备123456789号","Copyright © 2025 Jia Zhao"],
}

export default config