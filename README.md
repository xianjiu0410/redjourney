# 云上长征 · 红色之旅

3D 沉浸式红色数字文旅平台 · 单页 Web 应用 · 无需构建

## 一、文件结构

```
redjourney/
├── index.html        # 页面入口（结构 + 界面元素）
├── css/
│   └── style.css     # 样式（老地图配色）
├── js/
│   ├── map-data.js   # 中国地理数据（35 省 / 国界 / 十段线）
│   ├── kb-data.js    # AI 导游知识库（1606 条问答）
│   ├── app.js        # 地图渲染与交互（Albers 投影 / 路线 / 节点）
│   └── ai.js         # AI 导游模块（检索匹配 / 大模型接入）
└── README.md         # 本文件
```

## 二、如何部署（任选一种）

### 方式 1：本地直接打开（最简单）
双击 `index.html` 即可（因使用脚本文件加载，无需服务器）。

### 方式 2：免费静态托管（推荐，随时可访问）
1. **Netlify Drop**：打开 app.netlify.com/drop，把整个 `redjourney` 文件夹拖进去 → 秒出网址
2. **Vercel**：vercel.com → New Project → 上传文件夹
3. **surge.sh**：`npm i -g surge && surge ./ 你的域名.surge.sh`
4. **腾讯云/阿里云 OSS**：上传文件夹，开启静态网站托管

### 方式 3：GitHub Pages（挂到自己的域名，长期使用）
1. 登录 GitHub → New repository（如 `redjourney`，公开）
2. 上传本文件夹全部文件（Add file → Upload files）
3. 仓库 Settings → Pages → Source 选 `main` 分支 → Save
4. 几分钟后访问 `https://你的用户名.github.io/redjourney/`

### 方式 4：学校服务器 / 任何虚拟主机
把文件夹内容上传到网站根目录即可（纯静态，无需 Node/PHP/数据库）。

## 三、修改指南

| 想改什么 | 改哪个文件 |
|---|---|
| 知识库问答（增删条目、改答案） | `js/kb-data.js` |
| 节点内容（史实详情文字） | `js/app.js`（顶部 `NODES` 数组） |
| 地图配色 / 界面颜色 | `css/style.css` + `js/app.js`（绘制色值） |
| 地理数据（省界等） | `js/map-data.js` |
| 大模型接入配置 | 页面内 ⚙ 设置（运行时可填，存本机） |

## 四、功能清单

- 老地图风格中国地图（Albers 等积圆锥投影，含十段线与南海诸岛插图框）
- 长征路线朱红叙事 + 方向箭头 + 流光动效
- 8 处节点"背景 → 经过 → 意义"三段式史实详情（附来源）
- AI 红色导游：1606 条本地知识库 + 可接入大模型（RAG）
- 响应式：电脑端与手机端自适应

---
*青岛城市学院 · CMIT 参赛作品*
