# dsh-plugin-reasoning-seat

DSH Web GUI 客户端插件：把 composer 里的「模型座位」替换成一张带**推理等级滑杆**的弹层卡片。
触发器显示 `模型名 + 1017 药丸角标 + 当前推理档位 + chevron`；点开后向上弹出卡片，第一行「模型」
可下钻到按 provider 分组的模型列表，第二块「推理等级」是分档滑杆（`off / low / high / max`），
带动态星屑、白色圆角方块拇指、拖拽/点击/键盘操作。

动效（对齐参考视频）：

- **分档配色**：Off 无填充；Low 蓝色渐变；High 紫色渐变；Max 紫→品红→粉渐变，切换时颜色 300ms 过渡；
- **星屑**：填充区 14 颗粒子（点 + 十字）以不同周期/相位闪烁漂浮（`--dsh-rs-twinkle`，`prefers-reduced-motion` 下静止）；
- **档位圆点**：未填充轨道上按档位位置显示小圆点（Off 时可见全部），被填充自然遮住；
- **拇指**：白色圆角方块（`border-radius:9px` + `corner-shape:superellipse(1.5)`），hover/拖拽时放大 1.22 倍并溢出轨道（同参考视频）；
- **轨道辉光**跟随当前档位色（蓝/紫/品红），宽度与颜色都带缓动。

实现完全复用平台能力，不引入任何依赖：

- 以 **priority -100** 注册到既有单槽 `conversation.input.model`，遮蔽内置模型座位；
- 内置 `@deepseek-ai/dsh-client-ui-model-selection` **保持启用**：本插件通过它的
  `ctx.modelDirectories` 会话级目录读取模型/推理元数据并提交选择，`/model` 命令照常可用；
- 不声明子槽 `conversation.input.model.label`（避免与内置声明冲突），1017 角标按官方插件同款
  条件（provider 为 `deepseek-account` / `deepseek-official`、`model.id === "deepseek-flash"`、
  `model.name === "DeepSeek-V4.1-Flash"`）自行内联渲染；
- 浏览器 bundle 是**手写 CJS factory**（`window.__ModuleLoader__.load({ id, factory })`），
  只 `require("react")` / `require("react-dom")`，无打包器、无外部 CSS 文件；
- 样式内联注入 `<style data-plugin-css="dsh-plugin-reasoning-seat/ReasoningSeat.css">`。

## 安装

插件目录即本包目录（含 `package.json`、`cordis.patch.yml`、`lib/`）。使用 DSH CLI 安装到某个 profile：

```powershell
dsh plugin --profile <profile> add "<插件目录绝对路径>"
```

CLI 会把本地目录链接/复制进 profile，并因为 `package.json` 声明了 `dsh.bundle.patch` 而自动登记
`cordis.patch.yml`（插入 Loader 行 `ui-reasoning-seat`，`name: dsh-plugin-reasoning-seat`），
Web 端再按 `dsh.client` 声明发现并加载 `lib/client.js`。

无需 `npm install`：本包没有运行时依赖（`react` / `react-dom` 由平台基座提供）。

安装后重启或热重载该 profile，刷新 Web GUI：composer 右下角原来的模型位应变成
`DeepSeek-V4.1-Flash 1017 Max ⌃` 形式的触发器。

## 卸载

CLI 卸载：

```powershell
dsh plugin --profile <profile> remove dsh-plugin-reasoning-seat
```

或只在 profile 的 `cordis.patch.yml` 中禁用 Loader 行（id 为 `ui-reasoning-seat`）：

```yaml
- id: ui-reasoning-seat
  disabled: true
```

禁用后本插件不再注册座位，内置模型座位（含 `/model` 命令）自动恢复显示；内置插件不受影响。

## 交付文件

| 文件 | 作用 |
|---|---|
| `package.json` | 包名 `dsh-plugin-reasoning-seat`；`dsh.bundle.patch` 指向 patch；`dsh.client` 声明 web bundle 与注入顺序 |
| `cordis.patch.yml` | 插入 Loader 行 `ui-reasoning-seat`，让客户端模块系统扫描到本包 |
| `lib/index.js` | Node 半侧空 `apply()`（UI-only 插件） |
| `lib/client.js` | 手写浏览器 bundle：CSS 注入、`ReasoningSeat`、portal 弹层、滑杆、模型列表、`apply` / `inject` |
| `README.md` | 本文件 |
| `../STATUS.md` | 实现自检与集成测试关注点（不在插件包内，按任务要求放在 `plugins/` 下） |

## 已知限制

- 视觉跟随宿主主题：注入可选的 `theme` 服务，在 `<html>` 上同步 `data-dsh-rs-theme="light|dark"`；
  深色为参考设计，浅色主题另有一套浅色卡片/触发器配色（`theme` 服务不存在时回退深色）。
- 弹层是 `createPortal` + `position: fixed` 的轻量实现：无焦点陷阱，Tab 可离开卡片（Escape 会关闭并还原焦点）。
- 推理档位只呈现 `model.reasoning.efforts`；没有「provider default」独立档位——未显式选择时按
  `reasoning.defaultEffort` 定位拇指，两者都缺省时显示第一档并在 UI 上标注为默认。
- 座位在 `available === false`（已寻址 subagent 会话）时渲染为禁用态，不提供切换。
- 本插件假设内置 `@deepseek-ai/dsh-client-ui-model-selection` 仍然启用（它提供 `modelDirectories`
  服务）。若在 profile 中禁用该内置插件，本插件会因缺少服务而无法注册。
