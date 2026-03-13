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
## [2026-03-13 14:16] [Bugfix]
- **Change**: 迁移地图到 MapLibre 兼容链路并统一活动类型规范化，修复轨迹渲染与步行被误标为跑步的问题
- **Risk Analysis**: 主要风险在于地图 SDK 从 Mapbox 运行时切到 MapLibre 后，部分旧样式或控件兼容性可能还有边角问题；另外活动类型规范化会影响依赖旧 type 值的展示逻辑，但已通过单测和浏览器点击单条记录验证核心路径。
- **Risk Level**: S2（中级: 局部功能异常、可绕过但影响效率）
- **Changed Files**:
- `imported.json`
- `package.json`
- `pnpm-lock.yaml`
- `src/components/ActivityList/index.tsx`
- `src/components/RunMap/index.tsx`
- `src/utils/const.ts`
- `src/utils/utils.ts`
- `src/utils/activity.test.ts`
- `src/utils/activity.ts`
- `src/utils/map.test.ts`
- `src/utils/map.ts`
----------------------------------------
## [2026-03-13 14:38] [Bugfix]
- **Change**: 新增活动展示规则：将指定步行覆盖为清晨跑步、隐藏剩余步行，并放大地图高度与默认开启底图显示
- **Risk Analysis**: 主要风险在于展示层过滤步行后，年度汇总和总量会显著下降，这是预期但会改变历史统计口径；另外地图默认高度翻倍会影响小屏滚动体验，不过已通过本地页面预览确认主页面可正常展示。
- **Risk Level**: S2（中级: 局部功能异常、可绕过但影响效率）
- **Changed Files**:
- `src/data/activities.ts`
- `src/hooks/useActivities.ts`
- `src/components/ActivityList/index.tsx`
- `src/utils/activity.ts`
- `src/utils/activity.test.ts`
- `src/utils/const.ts`
- `docs/AI_CHANGELOG.md`
----------------------------------------
## [2026-03-13 14:42] [Bugfix]
- **Change**: 将地图高度从双倍恢复为默认尺寸
- **Risk Analysis**: 风险较低，仅影响页面布局高度；地图加载、轨迹渲染和活动过滤逻辑未改动，但小屏与大屏的可视区域会回到原始水平。
- **Risk Level**: S3（低级: 轻微行为偏差或日志/可观测性影响）
- **Changed Files**:
- `src/utils/const.ts`
- `docs/AI_CHANGELOG.md`
----------------------------------------
