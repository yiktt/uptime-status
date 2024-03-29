// 配置
window.Config = {

  // 显示标题
  SiteName: '韭菜的站点监控',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm792540060-6779c1cde71fb7c146ff747d',
    'm792540118-a8ee603dc7eed45e653ba5be',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: false,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: '#'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yiktt/uptime-status'
    },
  ],
};
