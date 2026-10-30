# 个人主页

纯静态单页站点：HTML + CSS + 原生 JS，托管在 GitHub Pages。

访问地址：https://liyu-tong.github.io/

## 结构

```
index.html          页面结构（封面 / 关于我 / 项目 / 技能 / 联系）
assets/style.css    样式（沿用软爪选粮的暖色体系）
assets/main.js      滚动进场、导航高亮、平滑滚动
```

## 改内容

打开 `index.html`，搜索注释 `需要替换` 就能定位所有待改的地方：

| 位置 | 内容 |
| --- | --- |
| 封面 `<h1>` | 姓名 |
| 封面 `.tagline` | 一句话定位 |
| 封面 `.lead` | 个人介绍 |
| 封面 `.hero-meta` | 地点 / 身份 / 标签 |
| 关于我 `.about-text` | 详细自我介绍 |
| 联系区 | 邮箱 |

## 换封面照片

封面 `<img>` 的 `src` 直接换 URL，或把照片放进 `assets/` 后写相对路径，例如：

```html
<img src="assets/cover.jpg" alt="封面照片">
```

建议宽度 900px 以上、横向构图。

## 本地预览

直接双击 `index.html` 用浏览器打开即可，不需要装任何东西。

## 更新到线上

```bash
python ../scripts/publish_github.py -t <GitHub token> -r liyu-tong.github.io -d .
```

（脚本在猫粮项目的 `scripts/` 目录下；`-d .` 表示提交当前目录）
