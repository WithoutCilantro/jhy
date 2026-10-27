# 高级网页设计 · 整合作品集

这是由桌面上的 `高级网页设计` 与 `web-workspace` 两个课程文件夹合并后的静态站点。

## 已整合内容

- HTML 基础练习：`1.html`、`2.html`、`3.html`
- CSS 选择器、层叠继承、盒模型与布局练习
- 图文卡片、课堂综合布局练习
- JavaScript 数据类型、数组与数 7 游戏
- Booking 移动端底部导航复刻
- 课程 PDF、PPT、XLS/XLSX 与思维导图资料

## 本地预览

直接打开 `index.html`，或在当前目录启动任意静态文件服务器。

## Netlify 发布

站点的发布目录已经统一下沉到本文件夹根目录。

- 若是 Git 自动部署：Build command 留空，Publish directory 填 `.`
- 若是手动部署：把本文件夹整体拖入 Netlify Deploy 页面，或上传生成的 ZIP
- 入口文件：`index.html`
- 404 页面：`404.html`

不要再只发布某个子文件夹，否则课程页面与图片资源会再次分离，点击卡片时会出现 404。
