# Byte-FE 团队

> 经过很多折腾, Github 才是比较接近永恒的知识仓库

## 创建文章流程

1. 在 [issues](https://github.com/byte-fe/blog/issues) 创建新 issue

2. 如果期望文章在 http://fe.bytedance.io/ 同步发布, 添加 `blog` label

3. 建议除 `blog` 标签之外, 增加更多的 label 用以描述和分类

## 开发 & 部署流程

1. clone 项目: `git clone git@github.com:byte-fe/blog.git`

2. 本地开发: `yarn run dev`

3. 部署: `git push master`

> master 更新 => CI 触发 => build => deploy
>
> 大约 20s 内线上完成部署更新

## FORK 流程

1. fork
2. 修改 `src/config/blog.js`
3. 配置 CI

## TODO

* Use preact as a React alternative once parcel support alias.
