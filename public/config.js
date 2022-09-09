// 配置
window.Config = {

  // 站点名
  SiteName: 'Yiktt的服务监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
  ApiDomain: 'uptime-status.qikaile.workers.dev',
  //ApiDomain: 'proxy.eas1.cn/https://api.uptimerobot.com',
  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm792539942-b4e68fe2a8ddcc692d0cd155',
    'm792540060-6779c1cde71fb7c146ff747d',
    'm792540118-a8ee603dc7eed45e653ba5be',
    /*
    'm786322663-402cd609baf66832d847ef63',
    'm786322674-0773b2c046e85a9cd3344aa8',
    'm786322754-8bd9c8c0e7f6bc59ddc376e7',
    'm786322758-45dc64ec941e47673f2f5bd1',
    'm786336367-8105e54df5e10b1654fe5df7',
    'm786336382-19b8bc68931082ae50ad13fd',
    'm786344761-38ac7c80cfba3bff6b4ee9b0',
    'm786442374-d8ecbfbf82ad151ba3cf94f6',
    'm787511928-e4ce8aad127e7c28d714985b',
    'm788502517-d91440d32f8ab5200e337433',
    */
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Home',
      url: '#'
    },
    {
        text: 'Blog',
      url: 'https://1e1.top/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yiktt/uptime-status'
    }
  ]
};
