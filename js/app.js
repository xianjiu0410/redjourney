
'use strict';
/* ================= 长征重大事件节点 ================= */
var NODES = [
  { name: '瑞金', lng: 116.03, lat: 25.88, date: '1934年10月', title: '于都河畔 · 出发',
    text: '中共中央、中革军委率领中央红军主力 8.6 万余人，从江西瑞金、于都等地出发，踏上战略转移的漫漫征途。二万五千里长征由此开始。',
    paras: [
      '背景：1933年9月，蒋介石调集百万重兵对中央革命根据地发动第五次"围剿"。由于"左"倾教条主义的错误领导，第五次反"围剿"失利，中央苏区由鼎盛时的几十个县锐减到三四个县。1934年10月初，国民党军推进到根据地腹地，并部署了以瑞金为中心的"铁桶计划"，企图一举消灭红军。面对生死存亡的严峻考验，中共中央决定实行战略转移。',
      '经过：10月10日晚，中革军委发布命令，中央红军主力 5 个军团及中央、军委机关和直属部队共 8.6 万余人开始行动，10月16日各部在于都河以北集结完毕。10月17日至20日晚，红军分别从于都县城东门等 10 个渡口渡过于都河，踏上了漫漫征途——这就是著名的二万五千里长征的起点。',
      '军民情深：于都河宽 600 多米。为帮助红军渡河，沿岸群众倾尽家中木材，捐出门板、床板甚至老人的寿棺，汇集 800 多条大小船只，在约 30 公里河段架起 5 座浮桥。为防空袭，浮桥每天傍晚架设、凌晨拆除隐蔽。周恩来感慨："于都人民真好，苏区人民真亲。"'
    ],
    source: '综合自求是网、学习强国、中国军网、国家文物局等公开史料' },
  { name: '湘江', lng: 111.07, lat: 25.93, date: '1934年11月', title: '血战湘江 · 突破封锁',
    text: '中央红军苦战五昼夜，突破国民党军第四道封锁线。此役后红军由出发时的 8.6 万余人锐减至 3 万余人，"三年不饮湘江水，十年不食湘江鱼"。',
    paras: [
      '背景：1934年11月下旬，连续突破三道封锁线的中央红军抵达广西全州、兴安一线的湘江边。蒋介石集中 30 万大军构筑第四道封锁线，企图将红军"包围全歼于湘江东岸地域"。',
      '经过：11月25日，中革军委发出抢渡湘江的紧急命令。百余米宽的江面上没有一座桥，当地百姓把自家的船和门板借给红军搭建浮桥。11月27日至12月1日，新圩、脚山铺、光华铺三大阻击战先后打响，红军将士以血肉之躯掩护中央纵队渡江。朱德在作战令中写道："我们不为胜利者，即为战败者。"12月1日17时，中央领导机关和红军大部渡过湘江。',
      '代价与意义：此役是长征以来最壮烈的一战。中央红军由出发时的 8.6 万余人锐减至 3 万余人，担任后卫的红五军团第三十四师几乎全部牺牲，师长陈树湘受伤被俘后断肠明志、壮烈牺牲，年仅 29 岁。当地从此流传"三年不饮湘江水，十年不食湘江鱼"。湘江战役宣告了"左"倾教条主义军事路线的破产，为遵义会议的召开奠定了重要基础。'
    ],
    source: '综合自求是网、人民网、中国军网、《中国共产党历史》等公开史料' },
  { name: '遵义', lng: 106.92, lat: 27.70, date: '1935年1月', title: '遵义会议 · 伟大转折',
    text: '遵义会议召开，事实上确立了毛泽东同志在党中央和红军的领导地位，在最危急关头挽救了党、挽救了红军、挽救了中国革命，是党的历史上生死攸关的转折点。',
    paras: [
      '召开：1935年1月15日至17日，中共中央政治局在贵州遵义召开扩大会议（史称遵义会议）。出席会议的有毛泽东、张闻天、周恩来、朱德、陈云、博古等政治局委员和候补委员，红军总部和各军团负责人刘伯承、聂荣臻、彭德怀等，中央秘书长邓小平；李德及翻译伍修权列席会议。',
      '内容：会议集中解决当时具有决定意义的军事和组织问题。张闻天作反对"左"倾军事错误的报告，毛泽东作长篇发言，王稼祥、周恩来、朱德等多数同志支持毛泽东的意见。会议委托张闻天起草《中央关于反对敌人五次"围剿"的总结的决议》，增选毛泽东为中央政治局常委，取消长征前成立的"三人团"。',
      '意义：遵义会议是党的历史上一个生死攸关的转折点。会议事实上确立了毛泽东在党中央和红军的领导地位，开始确立以毛泽东为主要代表的马克思主义正确路线在党中央的领导地位，开始形成以毛泽东为核心的第一代中央领导集体，开启了党独立自主解决中国革命实际问题的新阶段，在最危急关头挽救了党、挽救了红军、挽救了中国革命。'
    ],
    source: '综合自中央党史和文献研究院、求是网、学习强国等公开史料' },
  { name: '泸定桥', lng: 102.23, lat: 29.91, date: '1935年5月', title: '飞夺泸定桥',
    text: '红 4 团 22 名勇士冒着枪林弹雨攀踏十三根铁索，一举夺下泸定桥，为红军北上打开通道，创造了长征中的经典战例。',
    paras: [
      '背景：1935年5月，红军强渡金沙江、通过大凉山彝族地区后抵达大渡河畔，蒋介石企图让红军成为"石达第二"。5月25日，红一团在安顺场强渡大渡河成功，但全军难以迅速从这里渡河，中革军委决定夺取上游的泸定桥。',
      '经过：红四团临危受命，冒着大雨沿崎岖山路一昼夜奔袭 240 里，于5月29日6时占领泸定桥西桥头。此时桥板已被敌军抽去，只剩 13 根寒光闪闪的铁索横悬于大渡河上。当日下午 4 时总攻开始，22 名勇士组成的突击队在连长廖大珠率领下攀踏铁索向对岸冲去，三连跟进铺板，一连负责掩护。敌人放火焚烧桥头木板，勇士们冲入火海夺下桥头，为红军北上打开了生命通道。',
      '精神：战斗中魏小三、刘大贵等战士中弹坠入急流，刘金山、李友林等抓着滚烫的铁链爬向对岸。"大渡桥横铁索寒"，飞夺泸定桥成为长征中的经典战例，展现了红军将士不怕牺牲、压倒一切困难的英雄气概。'
    ],
    source: '综合自求是网、光明日报、中国军网等公开史料' },
  { name: '夹金山', lng: 102.85, lat: 30.80, date: '1935年6月', title: '翻越雪山',
    text: '红军翻越长征途中第一座大雪山——夹金山。空气稀薄、积雪没膝，红军将士靠"革命理想高于天"的信念相互搀扶翻越天险。',
    paras: [
      '经过：1935年6月，中央红军抵达四川宝兴县，横亘在面前的是长征途中第一座大雪山——夹金山。夹金山海拔 4000 多米，山顶终年白雪皑皑、空气稀薄，当地称它"连鸟儿也飞不过的神山"。',
      '艰险：红军将士大多身着单衣、脚穿草鞋。当地百姓送来棕皮做成的蓑衣，战士们把棉絮、烂布条塞进鞋里御寒。山上零下几十度、高寒缺氧，许多战士坐下休息就再没能站起来，长眠在茫茫雪山之中。',
      '完成：6月中旬，中央红军主力全部翻越夹金山，创造了人类历史上的壮举。"更喜岷山千里雪，三军过后尽开颜"——毛泽东后来在《七律·长征》中写下了这段征程，"革命理想高于天"正是这支队伍翻越天险的力量之源。'
    ],
    source: '综合自光明日报、求是网、中国军网等公开史料' },
  { name: '草地', lng: 102.96, lat: 33.58, date: '1935年8月', title: '七日草地',
    text: '红军踏入松潘草地，沼泽遍布、气候无常。将士们忍饥挨饿、七天七夜走出水草地，用意志战胜了死亡泥潭。',
    paras: [
      '背景：1935年8月，经松潘北上的交通要道已被国民党胡宗南部控制，穿越凶险难行的松潘草地成为红军北上的唯一选择。松潘草地是一块茫茫沼泽地，荒无人烟，到处是泥潭，散发着有毒的气体，水质污浊。',
      '七天七夜：红军过草地面临"行走难、吃饭难、御寒难、宿营难"。草地天气变幻无常，许多战士陷入泥沼被吞噬。部队携带的干粮两三天就吃完了，之后只能挖野菜、剥树皮、煮皮带充饥。经过七天七夜的艰苦跋涉，红军终于走出了这片"死亡陷阱"。',
      '信念：1975年，画家沈尧伊根据中央红军穿越松潘草地的壮举创作了油画《革命理想高于天》。过草地是长征中最为艰难的历程之一，红军将士以超越人类生存极限的意志，诠释了理想信念的磅礴力量。'
    ],
    source: '综合自光明日报、求是网等公开史料' },
  { name: '吴起镇', lng: 108.18, lat: 36.93, date: '1935年10月', title: '到达陕北',
    text: '中央红军到达陕北吴起镇，与陕北红军胜利会师，历时一年、行程二万五千里的中央红军长征宣告结束。',
    paras: [
      '背景：1935年9月，张国焘拒绝执行中央北上方针、企图分裂党和红军。中共中央率红一、红三军和军委纵队迅速北上，突破天险腊子口（9月17日），攻克哈达铺，突破渭河封锁线。',
      '到达：10月7日，红军翻越六盘山，毛泽东写下"不到长城非好汉"的豪迈诗句。10月19日，中央红军抵达陕北吴起镇（今陕西吴旗县），与陕北红军胜利会师。至此，中央红军主力纵横 11 个省、行程二万五千里的长征胜利结束。',
      '扎根：11月21日至24日，红军取得直罗镇战役的胜利，为党中央和红军扎根西北、把领导中国革命的大本营放在陕北奠定了基础。从此，陕北成为中国革命的落脚点和出发点。'
    ],
    source: '综合自国际在线、中国网、巴中市人民政府等公开史料' },
  { name: '会宁', lng: 105.05, lat: 35.70, date: '1936年10月', title: '三军大会师',
    text: '红一、红二、红四方面军在甘肃会宁地区会师，长征胜利结束。长征的胜利，打开了中国革命的新局面。',
    paras: [
      '会师：1936年10月9日，红一方面军与红四方面军在甘肃古城会宁胜利会师；10月22日，红二方面军在宁夏将台堡同红一方面军会师。至此，红一、红二、红四三大主力红军全部会合，历时两年的长征胜利结束。',
      '意义：三大主力会师，宣告了国民党反动派消灭中国共产党和红军图谋的彻底破产，打开了中国革命的新局面。长征是一次理想信念的伟大远征、一次检验真理的伟大远征、一次唤醒民众的伟大远征、一次开创新局的伟大远征。',
      '数字：中央红军长征途中翻越 40 余座高山险峰，渡过数十条江河，进行了大小战斗 600 余场，平均每 300 米就有一名红军战士牺牲。这支队伍用双脚丈量了二万五千里的漫漫征途，书写了人类历史上的英雄史诗。'
    ],
    source: '综合自求是网、光明日报、中国军网等公开史料' }
];

/* ================= 地理数据（省界 / 国界 / 十段线） ================= */

/* ================= 投影（Albers 等积圆锥 · 中国标准） ================= */
var DEG = Math.PI / 180;
var NN = (Math.sin(25 * DEG) + Math.sin(47 * DEG)) / 2;
var CC = Math.cos(25 * DEG) * Math.cos(25 * DEG) + 2 * NN * Math.sin(25 * DEG);
function albers(lng, lat) {
  var rho = Math.sqrt(CC - 2 * NN * Math.sin(lat * DEG)) / NN;
  var theta = NN * (lng * DEG - 105 * DEG);
  return { x: rho * Math.sin(theta), y: -rho * Math.cos(theta) };
}

/* ================= 画布与视野 ================= */
var canvas = document.getElementById('map');
var ctx = canvas.getContext('2d');
var W = 0, H = 0, CX = 0, CY = 0, DPR = 1;
var MAIN_CX = 0, MAIN_CY = 0, BASE_S = 1;
var scaleS = 1, offX = 0, offY = 0;
var tScale = 1, tOffX = 0, tOffY = 0;
var selected = -1, hoverIdx = -1;
var wallT0 = Date.now();

var MAIN_LAT_MIN = 17.8;  // 主图只画此纬度以北（低纬岛礁进插图框）
function ringMaxLat(r) { var m = -90; for (var i = 0; i < r.length; i++) if (r[i][1] > m) m = r[i][1]; return m; }
function isMainRing(pv, r) { return pv.name !== '南海诸岛' && ringMaxLat(r) >= MAIN_LAT_MIN; }

function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = canvas.width = Math.floor(window.innerWidth * DPR);
  H = canvas.height = Math.floor(window.innerHeight * DPR);
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  CX = W * 0.485;
  CY = H * 0.52;
  fitMain();
}
function fitMain() {
  var minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
  MAP.provinces.forEach(function (pv) {
    pv.rings.forEach(function (r) {
      if (!isMainRing(pv, r)) return;
      r.forEach(function (pt) {
        var p = albers(pt[0], pt[1]);
        if (p.x < minx) minx = p.x; if (p.x > maxx) maxx = p.x;
        if (p.y < miny) miny = p.y; if (p.y > maxy) maxy = p.y;
      });
    });
  });
  MAIN_CX = (minx + maxx) / 2;
  MAIN_CY = (miny + maxy) / 2;
  var k = (W < H) ? 0.95 : 0.9; /* 竖屏更激进放大 */
  BASE_S = Math.min(W * k / (maxx - minx), H * k / (maxy - miny));
  /* 关键：把实际缩放同步为适配值（否则开屏地图会被压成 1 像素尺度） */
  scaleS = BASE_S; tScale = BASE_S;
  offX = 0; offY = 0; tOffX = 0; tOffY = 0;
}
function toScreen(ax, ay) {
  return { x: CX + (ax - MAIN_CX) * scaleS + offX, y: CY - (ay - MAIN_CY) * scaleS + offY };
}
function nodeScreen(n) {
  var p = albers(n.lng, n.lat);
  return toScreen(p.x, p.y);
}

/* 省标注候选（面积前 18，排除南海诸岛） */
var LABELS = MAP.provinces
  .filter(function (p) { return p.name !== '南海诸岛' && p.name !== '香港特别行政区' && p.name !== '澳门特别行政区'; })
  .sort(function (a, b) { return b.span - a.span; })
  .slice(0, 18);

/* ================= 动画工具 ================= */

/* 星尘 */
var stars = [];
(function () {
  for (var i = 0; i < 150; i++) {
    stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + 0.3, tw: Math.random() * 2 + 0.5 });
  }
})();

/* ================= 绘制 ================= */
function drawBackground(t) {
  var g = ctx.createRadialGradient(CX, CY * 0.92, 0, CX, CY, Math.max(W, H) * 0.78);
  g.addColorStop(0, '#efe4cc');
  g.addColorStop(0.55, '#e4d6b8');
  g.addColorStop(1, '#d8c8a4');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  var sa = 1;
  for (var i = 0; i < stars.length; i++) {
    var s = stars[i];
    var a = (0.1 + 0.28 * Math.abs(Math.sin(t * 0.0005 * s.tw + i))) * sa;
    ctx.fillStyle = 'rgba(140,115,80,' + a.toFixed(3) + ')';
    ctx.beginPath();
    ctx.arc(s.x * W, s.y * H, s.r * DPR, 0, Math.PI * 2);
    ctx.fill();
  }
}


function drawFrame() {
  /* 仿古图廓：双线边框 */
  var m1 = 14 * DPR, m2 = 22 * DPR;
  ctx.strokeStyle = 'rgba(96,78,50,0.75)';
  ctx.lineWidth = 2.2 * DPR;
  ctx.strokeRect(m1, m1, W - 2 * m1, H - 2 * m1);
  ctx.strokeStyle = 'rgba(107,90,62,0.3)';
  ctx.lineWidth = 1 * DPR;
  ctx.strokeRect(m2, m2, W - 2 * m2, H - 2 * m2);
  /* 四角角饰 */
  var c = 34 * DPR;
  ctx.strokeStyle = 'rgba(140,35,24,0.5)';
  ctx.lineWidth = 2 * DPR;
  [[m1, m1, 1, 1], [W - m1, m1, -1, 1], [m1, H - m1, 1, -1], [W - m1, H - m1, -1, -1]].forEach(function (a) {
    ctx.beginPath();
    ctx.moveTo(a[0] + a[2] * c, a[1]);
    ctx.lineTo(a[0], a[1]);
    ctx.lineTo(a[0], a[1] + a[3] * c);
    ctx.stroke();
  });
}
function drawAgeSpots() {
  /* 做旧斑纹：淡褐色晕染 */
  var spots = [[0.12, 0.18, 120], [0.85, 0.1, 90], [0.75, 0.82, 140], [0.16, 0.78, 100], [0.5, 0.4, 160], [0.92, 0.55, 80]];
  for (var i = 0; i < spots.length; i++) {
    var s = spots[i];
    var g = ctx.createRadialGradient(s[0] * W, s[1] * H, 0, s[0] * W, s[1] * H, s[2] * DPR);
    g.addColorStop(0, 'rgba(150,120,80,0.055)');
    g.addColorStop(1, 'rgba(150,120,80,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(s[0] * W, s[1] * H, s[2] * DPR, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawVignette() {
  var g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.42, W / 2, H / 2, Math.max(W, H) * 0.74);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(90,72,48,0.22)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
}

var PROV_PAL = [
  ['#e0cca3', '#c8ac7c'], ['#d9c398', '#bfa170'],
  ['#e6d4ad', '#ccb184'], ['#d5c091', '#b99e6e']
];

function provincePath(pv, mainOnly) {
  var started = false;
  pv.rings.forEach(function (r) {
    if (mainOnly && !isMainRing(pv, r)) return;
    if (!mainOnly && pv.name !== '海南省' && pv.name !== '南海诸岛' && pv.name !== '台湾省') return;
    for (var j = 0; j < r.length; j++) {
      var ap = albers(r[j][0], r[j][1]);
      var p = (mainOnly ? toScreen(ap.x, ap.y) : insetProject(ap.x, ap.y));
      if (j === 0) { ctx.moveTo(p.x, p.y); started = true; }
      else ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
  });
  return started;
}

function drawProvinces(t) {
  /* 陆地辉光（所有省合并为单次绘制，避免多层大模糊开销） */
  ctx.save();
  ctx.shadowColor = 'rgba(120,90,50,0.35)';
  ctx.shadowBlur = 24 * DPR;
  ctx.beginPath();
  MAP.provinces.forEach(function (pv) { provincePath(pv, true); });
  ctx.fillStyle = 'rgba(170,140,95,0.5)';
  ctx.fill('evenodd');
  ctx.restore();

  /* 省面渐变填充 */
  MAP.provinces.forEach(function (pv, idx) {
    ctx.beginPath();
    if (!provincePath(pv, true)) return;
    var ax = albers(pv.cx, pv.cy);
    var c = toScreen(ax.x, ax.y);
    var pal = PROV_PAL[idx % PROV_PAL.length];
    var r = 60 * DPR * Math.max(1, scaleS / BASE_S);
    var g = ctx.createLinearGradient(c.x - r, c.y - r, c.x + r, c.y + r);
    g.addColorStop(0, pal[0]);
    g.addColorStop(1, pal[1]);
    ctx.fillStyle = g;
    ctx.fill('evenodd');
    ctx.lineWidth = 1 * DPR;
    ctx.strokeStyle = 'rgba(96,78,50,0.75)';
    ctx.stroke();
  });

  /* 国界 / 海岸亮线 */
  ctx.save();
  ctx.shadowColor = 'rgba(74,59,38,0.45)';
  ctx.shadowBlur = 8 * DPR;
  ctx.beginPath();
  MAP.border.forEach(function (r) {
    var first = true;
    for (var j = 0; j < r.length; j++) {
      if (r[j][1] < MAIN_LAT_MIN) continue;
      var ap = albers(r[j][0], r[j][1]);
      var p = toScreen(ap.x, ap.y);
      if (first) { ctx.moveTo(p.x, p.y); first = false; }
      else ctx.lineTo(p.x, p.y);
    }
  });
  ctx.lineWidth = 2.3 * DPR;
  ctx.strokeStyle = 'rgba(58,44,26,0.95)';
  ctx.stroke();
  ctx.restore();

  /* 省名标注 */
  var la = 0.55;
  if (scaleS > BASE_S * 0.7) {
    ctx.font = (11 * DPR) + 'px "PingFang SC","Microsoft YaHei",sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    LABELS.forEach(function (pv) {
      var ap = albers(pv.cx, pv.cy);
      var p = toScreen(ap.x, ap.y);
      if (p.x < -40 || p.x > W + 40 || p.y < -40 || p.y > H + 40) return;
      ctx.fillStyle = 'rgba(74,59,38,' + la.toFixed(3) + ')';
      ctx.fillText(pv.label, p.x, p.y);
    });
    ctx.textBaseline = 'alphabetic';
  }
  ctx.globalAlpha = 1;
}

/* 路线 */
function qCtrl(a, b) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.22 };
}
function qPoint(a, c, b, u) {
  var v = 1 - u;
  return { x: v * v * a.x + 2 * v * u * c.x + u * u * b.x, y: v * v * a.y + 2 * v * u * c.y + u * u * b.y };
}
function drawRoute(t) {
  for (var i = 0; i < NODES.length - 1; i++) {
    var p = 1;
    var a = nodeScreen(NODES[i]), b = nodeScreen(NODES[i + 1]);
    var c = qCtrl(a, b);

    ctx.save();
    ctx.shadowColor = 'rgba(140,35,24,0.5)';
    ctx.shadowBlur = 12 * DPR;
    var grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
    grad.addColorStop(0, 'rgba(165,42,26,0.2)');
    grad.addColorStop(0.55, 'rgba(165,42,26,0.95)');
    grad.addColorStop(1, 'rgba(140,35,24,0.95)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 3.4 * DPR;
    ctx.beginPath();
    var STEPS = 36, last = Math.floor(STEPS * p);
    for (var s = 0; s <= last; s++) {
      var q = qPoint(a, c, b, (s / STEPS) * p);
      if (s === 0) ctx.moveTo(q.x, q.y);
      else ctx.lineTo(q.x, q.y);
    }
    ctx.stroke();
    ctx.restore();

    if (p >= 1) {
      /* 行进方向箭头 */
      var ua = qPoint(a, c, b, 0.6), ub = qPoint(a, c, b, 0.645);
      var ang = Math.atan2(ub.y - ua.y, ub.x - ua.x);
      ctx.save();
      ctx.translate(ua.x, ua.y);
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.moveTo(10 * DPR, 0);
      ctx.lineTo(-5 * DPR, -6 * DPR);
      ctx.lineTo(-5 * DPR, 6 * DPR);
      ctx.closePath();
      ctx.fillStyle = 'rgba(140,35,24,0.92)';
      ctx.fill();
      ctx.restore();
      for (var k = 0; k < 3; k++) {
        var u = (t * 0.00013 + k / 3 + i * 0.11) % 1;
        var fp = qPoint(a, c, b, u);
        var tp = qPoint(a, c, b, Math.max(0, u - 0.045));
        var tg = ctx.createLinearGradient(tp.x, tp.y, fp.x, fp.y);
        tg.addColorStop(0, 'rgba(140,35,24,0)');
        tg.addColorStop(1, 'rgba(165,42,26,0.9)');
        ctx.strokeStyle = tg;
        ctx.lineWidth = 3.2 * DPR;
        ctx.beginPath();
        ctx.moveTo(tp.x, tp.y);
        ctx.lineTo(fp.x, fp.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(fp.x, fp.y, 2.6 * DPR, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165,42,26,0.95)';
        ctx.fill();
      }
    }
  }
}

/* 节点 */
function drawNodes(t) {
  for (var i = 0; i < NODES.length; i++) {
    var p = nodeScreen(NODES[i]);
    var ep = 1, pop = 1;
    var isSel = (i === selected);
    var isHover = (i === hoverIdx);
    var breathe = 1 + 0.12 * Math.sin(t * 0.003 + i * 1.4);
    var baseR = (isSel ? 30 : isHover ? 24 : 17) * DPR * breathe;

    /* 光晕 */
    var gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, baseR * pop);
    gr.addColorStop(0, isSel ? 'rgba(165,42,26,0.55)' : 'rgba(165,42,26,0.3)');
    gr.addColorStop(1, 'rgba(165,42,26,0)');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(p.x, p.y, baseR * pop, 0, Math.PI * 2);
    ctx.fill();

    /* 徽章 */
    var br = (isSel ? 11.5 : 10) * DPR * pop;
    var bg = ctx.createLinearGradient(p.x - br, p.y - br, p.x + br, p.y + br);
    bg.addColorStop(0, '#b0342a');
    bg.addColorStop(1, '#8c2318');
    ctx.beginPath();
    ctx.arc(p.x, p.y, br, 0, Math.PI * 2);
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.lineWidth = 1.4 * DPR;
    ctx.strokeStyle = isSel ? '#f5ead6' : 'rgba(245,234,214,0.9)';
    ctx.stroke();

    /* 序号 */
    ctx.font = 'bold ' + (10.5 * DPR) + 'px "PingFang SC","Microsoft YaHei",sans-serif';
    ctx.fillStyle = '#f7eeda';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(i + 1), p.x, p.y + 0.5 * DPR);

    /* 名称标签 */
    if (ep >= 1) {
      var name = NODES[i].name;
      ctx.font = ((isSel ? 'bold ' : '') + 12.5 * DPR) + 'px "PingFang SC","Microsoft YaHei",sans-serif';
      var tw = ctx.measureText(name).width;
      var lx = p.x + br + 6 * DPR, ly = p.y;
      ctx.fillStyle = isSel ? 'rgba(140,35,24,0.88)' : 'rgba(60,46,28,0.75)';
      var pad = 5 * DPR;
      var rr = 5 * DPR;
      ctx.beginPath();
      ctx.moveTo(lx + rr, ly - 10 * DPR);
      ctx.arcTo(lx + tw + pad * 2, ly - 10 * DPR, lx + tw + pad * 2, ly + 10 * DPR, rr);
      ctx.arcTo(lx + tw + pad * 2, ly + 10 * DPR, lx, ly + 10 * DPR, rr);
      ctx.arcTo(lx, ly + 10 * DPR, lx, ly - 10 * DPR, rr);
      ctx.arcTo(lx, ly - 10 * DPR, lx + tw + pad * 2, ly - 10 * DPR, rr);
      ctx.closePath();
      ctx.fill();
      ctx.textAlign = 'left';
      ctx.fillStyle = isSel ? '#fdf3e0' : '#f7eeda';
      ctx.fillText(name, lx + pad, ly + 0.5 * DPR);
    }
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';
  }
}

/* ================= 插图框（南海诸岛） ================= */
var INSET = { x: 0, y: 0, w: 0, h: 0, s: 1, cx: 0, cy: 0 };
function layoutInset() {
  var isMobile = W < H;
  INSET.w = (isMobile ? W * 0.30 : Math.min(W * 0.19, 300 * DPR));
  INSET.h = INSET.w * 1.32;
  INSET.x = W - INSET.w - 26 * DPR;
  INSET.y = (isMobile ? 108 * DPR : H - INSET.h - 26 * DPR);
  var bl = albers(105.5, 2), br2 = albers(122.5, 2), tl = albers(105.5, 23.5), tr = albers(122.5, 23.5);
  var minx = Math.min(bl.x, tl.x), maxx = Math.max(br2.x, tr.x);
  var miny = Math.min(bl.y, br2.y), maxy = Math.max(tl.y, tr.y);
  INSET.cx = (minx + maxx) / 2;
  INSET.cy = (miny + maxy) / 2;
  INSET.s = Math.min((INSET.w - 18 * DPR) / (maxx - minx), (INSET.h - 18 * DPR) / (maxy - miny));
}
function insetProject(ax, ay) {
  return {
    x: INSET.x + INSET.w / 2 + (ax - INSET.cx) * INSET.s,
    y: INSET.y + INSET.h / 2 - (ay - INSET.cy) * INSET.s
  };
}
function drawInset(t) {
  ctx.save();
  var rr = 10 * DPR;
  ctx.beginPath();
  ctx.moveTo(INSET.x + rr, INSET.y);
  ctx.arcTo(INSET.x + INSET.w, INSET.y, INSET.x + INSET.w, INSET.y + INSET.h, rr);
  ctx.arcTo(INSET.x + INSET.w, INSET.y + INSET.h, INSET.x, INSET.y + INSET.h, rr);
  ctx.arcTo(INSET.x, INSET.y + INSET.h, INSET.x, INSET.y, rr);
  ctx.arcTo(INSET.x, INSET.y, INSET.x + INSET.w, INSET.y, rr);
  ctx.closePath();
  var bg = ctx.createLinearGradient(INSET.x, INSET.y, INSET.x, INSET.y + INSET.h);
  bg.addColorStop(0, '#efe4cc');
  bg.addColorStop(1, '#e4d6b8');
  ctx.fillStyle = bg;
  ctx.fill();
  ctx.clip();

  /* 省面（海南 / 台湾 / 诸岛） */
  MAP.provinces.forEach(function (pv, idx) {
    if (pv.name !== '海南省' && pv.name !== '南海诸岛' && pv.name !== '台湾省') return;
    ctx.beginPath();
    if (!provincePath(pv, false)) return;
    if (pv.name === '南海诸岛') {
      ctx.fillStyle = 'rgba(165,42,26,0.85)';
    } else {
      ctx.fillStyle = PROV_PAL[idx % PROV_PAL.length][0];
    }
    ctx.fill('evenodd');
    ctx.lineWidth = 1 * DPR;
    ctx.strokeStyle = 'rgba(107,90,62,0.5)';
    ctx.stroke();
  });

  /* 十段线 */
  ctx.save();
  ctx.shadowColor = 'rgba(165,42,26,0.5)';
  ctx.shadowBlur = 6 * DPR;
  ctx.beginPath();
  MAP.nine.forEach(function (ln) {
    for (var j = 0; j < ln.length; j++) {
      var ap = albers(ln[j][0], ln[j][1]);
      var p = insetProject(ap.x, ap.y);
      if (j === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
  });
  ctx.lineWidth = 1.8 * DPR;
  ctx.strokeStyle = '#a52a1a';
  ctx.stroke();
  ctx.restore();

  /* 框内标注 */
  ctx.font = (10 * DPR) + 'px "PingFang SC","Microsoft YaHei",sans-serif';
  ctx.fillStyle = 'rgba(74,59,38,0.95)';
  ctx.textAlign = 'left';
  ctx.fillText('南海诸岛', INSET.x + 10 * DPR, INSET.y + INSET.h - 10 * DPR);
  ctx.restore();

  /* 外框 */
  ctx.beginPath();
  ctx.moveTo(INSET.x + rr, INSET.y);
  ctx.arcTo(INSET.x + INSET.w, INSET.y, INSET.x + INSET.w, INSET.y + INSET.h, rr);
  ctx.arcTo(INSET.x + INSET.w, INSET.y + INSET.h, INSET.x, INSET.y + INSET.h, rr);
  ctx.arcTo(INSET.x, INSET.y + INSET.h, INSET.x, INSET.y, rr);
  ctx.arcTo(INSET.x, INSET.y, INSET.x + INSET.w, INSET.y, rr);
  ctx.closePath();
  ctx.lineWidth = 1.2 * DPR;
  ctx.strokeStyle = 'rgba(107,90,62,0.6)';
  ctx.stroke();
  ctx.globalAlpha = 1;
}

/* ================= 主循环 ================= */
function frame(now) {
  var t = Date.now() - wallT0;
  drawBackground(t);
  drawAgeSpots();
  drawVignette();
  drawFrame();

  if (Math.abs(tScale - scaleS) > 0.01 || Math.abs(tOffX - offX) > 0.2 || Math.abs(tOffY - offY) > 0.2) {
    scaleS += (tScale - scaleS) * 0.12;
    offX += (tOffX - offX) * 0.12;
    offY += (tOffY - offY) * 0.12;
  }

  drawProvinces(t);
  drawRoute(t);
  drawNodes(t);
  drawInset(t);
  requestAnimationFrame(frame);
}

/* ================= 交互 ================= */
var dragging = false, moved = false, lastX = 0, lastY = 0;

function hitNode(mx, my) {
  for (var i = 0; i < NODES.length; i++) {
    var p = nodeScreen(NODES[i]);
    if (Math.hypot(p.x - mx, p.y - my) < 24 * DPR) return i;
  }
  return -1;
}
canvas.addEventListener('pointerdown', function (e) {
  dragging = true; moved = false;
  lastX = e.clientX; lastY = e.clientY;
});
canvas.addEventListener('pointermove', function (e) {
  if (dragging) {
    var dx = (e.clientX - lastX) * DPR, dy = (e.clientY - lastY) * DPR;
    if (Math.abs(dx) + Math.abs(dy) > 3 * DPR) moved = true;
    offX += dx; offY += dy;
    tOffX = offX; tOffY = offY;
    lastX = e.clientX; lastY = e.clientY;
  } else {
    hoverIdx = hitNode(e.clientX * DPR, e.clientY * DPR);
    canvas.style.cursor = hoverIdx >= 0 ? 'pointer' : 'grab';
  }
});
canvas.addEventListener('pointerup', function (e) {
  dragging = false;
  if (!moved) {
    var i = hitNode(e.clientX * DPR, e.clientY * DPR);
    if (i >= 0) selectNode(i);
  }
});
canvas.addEventListener('wheel', function (e) {
  e.preventDefault();
  var mx = e.clientX * DPR, my = e.clientY * DPR;
  var ratio = e.deltaY < 0 ? 1.12 : 0.89;
  var ns = Math.max(BASE_S * 0.6, Math.min(BASE_S * 6, scaleS * ratio));
  var f = ns / scaleS;
  offX = (mx - CX) - ((mx - CX) - offX) * f;
  offY = (my - CY) - ((my - CY) - offY) * f;
  scaleS = ns;
  tScale = ns; tOffX = offX; tOffY = offY;
}, { passive: false });

/* 导航与卡片 */
var navEl = document.getElementById('nav');
NODES.forEach(function (n, i) {
  var b = document.createElement('button');
  b.innerHTML = '<b>' + (i + 1) + '</b>' + n.name;
  b.addEventListener('click', function () { selectNode(i); });
  navEl.appendChild(b);
});

/* 上一处 / 下一处：按长征行军顺序翻阅全部史实 */
document.getElementById('prevBtn').addEventListener('click', function () {
  selectNode((selected + NODES.length - 1) % NODES.length);
});
document.getElementById('nextBtn').addEventListener('click', function () {
  selectNode((selected + 1) % NODES.length);
});

function selectNode(i, focus) {
  selected = i;
  var n = NODES[i];
  if (focus !== false) {
    var p = albers(n.lng, n.lat);
    var s = Math.max(scaleS, BASE_S * 1.3);
    scaleS = s; tScale = s;
    tOffX = -(p.x - MAIN_CX) * s;
    tOffY = (p.y - MAIN_CY) * s - H * 0.06;
  }
  document.getElementById('cDate').textContent = n.date;
  document.getElementById('cTitle').textContent = n.title;
  document.getElementById('cBody').textContent = n.text;
  var d = document.getElementById('cDetail');
  var html = '<h3>史实详情</h3>';
  n.paras.forEach(function (p2) { html += '<p>' + p2 + '</p>'; });
  html += '<div class="src">资料来源：' + n.source + '</div>';
  d.innerHTML = html;
  document.getElementById('card').scrollTop = 0;
  document.getElementById('card').classList.add('show');
  var btns = navEl.querySelectorAll('button');
  for (var k = 0; k < btns.length; k++) btns[k].classList.toggle('active', k === i);
}
document.getElementById('cardClose').addEventListener('click', function () {
  selected = -1;
  document.getElementById('card').classList.remove('show');
  var btns = navEl.querySelectorAll('button');
  for (var k = 0; k < btns.length; k++) btns[k].classList.remove('active');
});

resize();
window.addEventListener('resize', function () { resize(); layoutInset(); });
layoutInset();
selectNode(0, false); /* 开屏预载第一处史实详情 */
if (window.innerWidth < 760) {
  /* 竖屏手机：开屏不弹卡片，把整屏留给地图；点击节点再展开 */
  document.getElementById('card').classList.remove('show');
  var navBtns0 = navEl.querySelectorAll('button');
  for (var bi = 0; bi < navBtns0.length; bi++) navBtns0[bi].classList.remove('active');
  selected = -1;
}
requestAnimationFrame(frame);
