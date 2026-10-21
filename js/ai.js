
'use strict';
/* ================================================================
   AI 红色导游模块
   - 本地智导：内置长征知识库 + 检索匹配（离线可用，演示稳定）
   - 大模型模式：任意 OpenAI 兼容 API（DeepSeek/智谱等），节点史实
     自动注入系统提示词（RAG 架构），Key 仅存本机浏览器
   ================================================================ */
(function () {
  /* ---------- 知识库（基于权威公开史料整理） ---------- */
  

  /* ---------- 检索匹配引擎（2-gram 重叠打分） ---------- */
  function grams(s) {
    s = String(s).replace(/[，。？！、"'':；（）\s\?]/g, '');
    var g = {};
    for (var i = 0; i < s.length - 1; i++) g[s.substr(i, 2)] = 1;
    return g;
  }
  function answerLocal(q) {
    var g = grams(q), best = null, bestScore = 0;
    KB.forEach(function (item) {
      var kg = grams(item.q);
      var hit = 0, n = 0;
      for (var k in g) { n++; if (kg[k]) hit++; }
      var score = hit / Math.max(3, n);
      if (item.q === q) score += 0.35; /* 精确命中优先 */
      if (item.node && q.indexOf(item.node) >= 0) score += 0.45;
      if (score > bestScore) { bestScore = score; best = item; }
    });
    if (best && bestScore >= 0.2) return { text: best.a, src: '本地知识库 ·《长征故事》《长征史料汇总》《红军长征》整理' };
    for (var i = 0; i < NODES.length; i++) {
      if (q.indexOf(NODES[i].name) >= 0) {
        return { text: NODES[i].text + ' ' + NODES[i].paras[0], src: NODES[i].source };
      }
    }
    return {
      text: '这个问题我还拿不准。你可以这样问我："长征是什么？""遵义会议为什么是转折点？""飞夺泸定桥的经过""湘江战役牺牲了多少人"……也可以点击下方的问题直接提问。',
      src: '提示'
    };
  }

  /* ---------- 大模型模式（OpenAI 兼容接口） ---------- */
  var cfg = { baseUrl: '', key: '', model: '' };
  try { cfg = JSON.parse(localStorage.getItem('cmit_ai_cfg')) || cfg; } catch (e) {}
  function askAPI(q) {
    var idx = (typeof selected === 'number' && selected >= 0) ? selected : 0;
    var node = NODES[idx];
    var sys = '你是"云上长征·红色之旅"数字文旅平台的 AI 红色导游。请基于以下权威史实资料回答用户问题：' +
      '严肃准确、条理清晰、不得戏说与发挥；如资料中没有答案，请如实说明并给出建议。' +
      '【当前景点】' + node.name + '——' + node.title + '（' + node.date + '）。' +
      '【史实资料】' + node.paras.join(' ') + '【资料来源】' + node.source;
    return fetch(cfg.baseUrl.replace(/\/+$/, '') + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + cfg.key },
      body: JSON.stringify({
        model: cfg.model,
        temperature: 0.5,
        messages: [{ role: 'system', content: sys }, { role: 'user', content: q }]
      })
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (d) {
      if (!d.choices || !d.choices[0]) throw new Error('bad response');
      return { text: d.choices[0].message.content, src: 'AI 大模型 · 已注入「' + node.name + '」史实上下文（RAG）' };
    });
  }

  /* ---------- 面板交互 ---------- */
  var panel = document.getElementById('aiPanel');
  var msgs = document.getElementById('aiMsgs');
  var chipsEl = document.getElementById('aiChips');
  var input = document.getElementById('aiText');

  function addMsg(role, text, src) {
    var div = document.createElement('div');
    div.className = 'ai-msg ' + role;
    var b = document.createElement('div');
    b.className = 'bubble';
    b.textContent = text;
    if (src && role === 'bot') {
      var s = document.createElement('span');
      s.className = 'src';
      s.textContent = '—— ' + src;
      b.appendChild(s);
    }
    div.appendChild(b);
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return b;
  }

  var CHIPS_COMMON = ['长征是什么？', '长征精神是什么？', '半条被子的故事？'];
  function chipsFor(i) {
    var n = NODES[i];
    var map = {
      '瑞金': ['长征为什么开始？', '红军多少人从于都河出发？'],
      '湘江': ['湘江战役为什么惨烈？', '陈树湘是谁？'],
      '遵义': ['遵义会议做了什么？', '四渡赤水为什么是得意之笔？'],
      '泸定桥': ['飞夺泸定桥的经过？', '强渡大渡河十七勇士？'],
      '夹金山': ['翻越夹金山有多难？', '军需处长的故事？'],
      '草地': ['过草地为什么危险？', '金色的鱼钩的故事？'],
      '吴起镇': ['长征什么时候结束？', '斯诺与《红星照耀中国》？'],
      '会宁': ['三大主力会师的意义？', '长征精神五大内涵？']
    };
    return (map[n && n.name] || []).concat(CHIPS_COMMON.slice(0, 1));
  }
  function renderChips() {
    chipsEl.innerHTML = '';
    chipsFor(typeof selected === 'number' && selected >= 0 ? selected : 0).forEach(function (q) {
      var s = document.createElement('span');
      s.textContent = q;
      s.addEventListener('click', function () { send(q); });
      chipsEl.appendChild(s);
    });
  }

  var thinking = false;
  function send(q) {
    q = (q || '').trim();
    if (!q || thinking) return;
    input.value = '';
    addMsg('user', q);
    var wait = addMsg('bot', '正在为您讲解…', '');
    thinking = true;
    var useAPI = !!(cfg.key && cfg.baseUrl && cfg.model);
    if (useAPI) {
      askAPI(q).then(function (r) {
        wait.remove();
        addMsg('bot', r.text, r.src);
      }).catch(function (e) {
        var local = answerLocal(q);
        wait.remove();
        addMsg('bot', '（大模型连接失败：' + e.message + '，已切换本地智导）\n' + local.text, local.src);
      }).then(function () { thinking = false; });
    } else {
      setTimeout(function () {
        var r = answerLocal(q);
        wait.remove();
        addMsg('bot', r.text, r.src);
        thinking = false;
      }, 380);
    }
  }

  /* 开关面板 */
  function openPanel() {
    panel.classList.add('show');
    renderChips();
  }
  document.getElementById('aiFab').addEventListener('click', openPanel);
  document.getElementById('aiOpen').addEventListener('click', openPanel);
  document.getElementById('aiClose').addEventListener('click', function () { panel.classList.remove('show'); });
  document.getElementById('aiSend').addEventListener('click', function () { send(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') send(input.value);
  });

  /* 设置 */
  var settings = document.getElementById('aiSettings');
  document.getElementById('aiGear').addEventListener('click', function () { settings.classList.toggle('show'); });
  function refreshMode() {
    document.getElementById('aiMode').textContent = (cfg.key && cfg.baseUrl && cfg.model) ? '大模型已接入' : '本地智导';
    document.getElementById('aiBaseUrl').value = cfg.baseUrl || '';
    document.getElementById('aiKey').value = cfg.key || '';
    document.getElementById('aiModel').value = cfg.model || '';
  }
  document.getElementById('aiSave').addEventListener('click', function () {
    cfg.baseUrl = document.getElementById('aiBaseUrl').value.trim();
    cfg.key = document.getElementById('aiKey').value.trim();
    cfg.model = document.getElementById('aiModel').value.trim();
    try { localStorage.setItem('cmit_ai_cfg', JSON.stringify(cfg)); } catch (e) {}
    refreshMode();
    settings.classList.remove('show');
    addMsg('bot', (cfg.key && cfg.baseUrl && cfg.model)
      ? '已接入大模型（' + cfg.model + '）。此后回答由 AI 生成，并注入当前景点史实作为依据。'
      : '配置不完整，将继续使用本地智导。', '设置');
  });
  document.getElementById('aiLocal').addEventListener('click', function () {
    cfg = { baseUrl: '', key: '', model: '' };
    try { localStorage.removeItem('cmit_ai_cfg'); } catch (e) {}
    refreshMode();
    settings.classList.remove('show');
    addMsg('bot', '已切换回本地智导模式（离线知识库）。', '设置');
  });
  refreshMode();

  /* 随选中节点刷新问题（轮询检测，兼容性最稳） */
  var lastSel = (typeof selected === 'number') ? selected : -1;
  setInterval(function () {
    var cur = (typeof selected === 'number') ? selected : -1;
    if (cur !== lastSel && cur >= 0) {
      lastSel = cur;
      renderChips();
      if (panel.classList.contains('show')) {
        var n = NODES[cur];
        addMsg('bot', '已切换到「' + n.name + '」（' + n.date + '·' + n.title + '）。关于这里，你可以问我背景、经过和意义，或点击下方问题。', '景点切换');
      }
    }
  }, 300);

  /* 开场白 */
  addMsg('bot', '你好，我是云上长征的 AI 红色导游 🫡 我熟悉长征全程的权威史实——从于都河出发到三军大会师。你可以直接输入问题，或点击下方的问题开始。', 'AI 红色导游');
  renderChips();
})();
