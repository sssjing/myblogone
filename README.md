# My Blog One

个人技术博客，基于 VuePress 2 + vuepress-theme-hope 构建的静态站点。

在线访问：https://sssjing.github.io/myblogone/

## 技术栈

- **静态站点生成器**：VuePress 2.0.0-beta.61
- **主题**：vuepress-theme-hope
- **前端框架**：Vue.js 3
- **部署**：GitHub Pages

## 功能特性

- 文章分类与标签系统
- 全文搜索（Ctrl+K）
- 深色/浅色模式切换
- 侧边栏导航
- 代码语法高亮
- Mermaid 图表渲染
- 数学公式（KaTeX）
- 图片灯箱（PhotoSwipe）
- 幻灯片演示（Reveal.js）
- 思维导图（Markmap）
- SEO 优化（sitemap、Open Graph、Schema.org）
- 响应式设计

## 内容目录

| 分类 | 内容 |
|------|------|
| **AI Agent** | Agent 基础概念、ReAct 模式、Function Calling、记忆与规划、框架对比、面经 |
| **Java** | Java 基础、JVM 虚拟机、NIO 与 Netty、Spring Security |
| **Rust** | Rust 入门教程（20 章）、Rustlings、Rust 算法、Tauri 项目 |
| **算法** | 动态规划、搜索与图论（BFS/DFS/Dijkstra）、数据结构（Hash/STL/Trie/并查集/堆） |
| **读书笔记** | MySQL 必知必会、学透 Spring、网络是怎样连接的 |
| **其他** | C++ 学习笔记、Linux 命令、Markdown 指南、剑指 Offer、面试题 |

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/sssjing/myblogone.git
cd myblogone

# 直接用浏览器打开 index.html 即可预览
# 或使用任意静态文件服务器
npx serve .
python -m http.server 8080
```

## 部署方式

本项目使用 GitHub Pages 自动部署。

### 手动部署步骤

1. 将构建产物（本目录所有文件）推送到 GitHub 仓库的 `main` 分支
2. 在 GitHub 仓库 Settings → Pages 中，Source 选择 `Deploy from a branch`，Branch 选择 `main`，目录选择 `/ (root)`
3. 保存后等待几分钟即可访问

```bash
# 推送更新
git add .
git commit -m "your commit message"
git push origin main
```

### 从源码构建

如果你有 VuePress 源码项目：

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 构建产物在 docs/.vuepress/dist/ 目录
```

## 项目结构

```
.
├── index.html                  # 首页
├── intro.html                  # 介绍页
├── 404.html                    # 404 页面
├── sitemap.xml                 # SEO 站点地图
├── robots.txt                  # 爬虫配置
├── search-pro.worker.js        # 全文搜索 Worker
├── assets/                     # 编译后的 JS/CSS 资源
├── posts/                      # 文章页面
│   ├── ai-agent/               # AI Agent 知识体系
│   ├── Java/                   # Java 相关
│   ├── rust/                   # Rust 相关
│   ├── 算法基础/               # 算法与数据结构
│   ├── 读书笔记/               # 读书笔记
│   └── ...
├── category/                   # 分类页面
├── tag/                        # 标签页面
├── timeline/                   # 时间线页面
└── star/                       # 收藏页面
```

## 作者

**杨景** - [GitHub](https://github.com/sssjing)

## 许可

本博客内容仅供学习交流使用。
