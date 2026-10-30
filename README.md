# 个人主页

纯静态单页站点：HTML + CSS + 原生 JS，托管在 GitHub Pages。

访问地址：https://liyu-tong.github.io/

## 结构

```
index.html          首页：开场个人介绍 → 关于我 → 能力 → 项目入口按钮 → 联系
projects.html       项目页：两个项目的详细介绍（首页点「打开我的项目」进入）
assets/style.css    样式（奶油米白 + 赤陶橘 + 鼠尾草绿，衬线标题）
assets/main.js      滚动进场、导航高亮、平滑滚动
```

## 改内容

打开 `index.html`，搜索注释 `需要替换` 就能定位所有待改的地方：

| 位置 | 内容 |
| --- | --- |
| `index.html` → `.name` | 姓名 |
| `index.html` → `.eyebrow` | 学校 / 专业 / 年级 |
| `index.html` → `.lead` | 一句话自我介绍 |
| `index.html` → `.facts` | 城市 / 专业 / 方向 |
| `index.html` → `.prose` | 详细自我介绍 |
| `index.html` → 联系区 | 邮箱、电话 |
| `projects.html` | 两个项目的介绍与链接 |

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
