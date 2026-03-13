# AI Change Log

## 2026-03-13

Change:
合并 upstream `running_page_main` 的新功能与修复，并保留晚青在工作流、站点元数据与展示常量上的定制意图。

Risk Analysis:
主要回归风险在于上游前端结构与本地配置的兼容边界，尤其是地图提供方切换、首页交互状态、GitHub Actions 工作流参数，以及依赖升级后在真实安装环境中的构建行为。

Risk Level:
S2-中

Changed Files:
.github/workflows/run_data_sync.yml, src/utils/const.ts, src/pages/index.tsx, src/static/site-metadata.ts, src/components/RunMap/index.tsx, package.json, pnpm-lock.yaml
