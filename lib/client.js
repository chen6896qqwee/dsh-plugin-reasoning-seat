window.__ModuleLoader__.load({
  id: "dsh-plugin-reasoning-seat",
  factory: (require) => {
    "use strict";
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    // Platform modules only. No relative imports, no external CSS files, no
    // bundler: this file is a hand-written CJS factory bundle.
    var react = require("react");
    var reactDom = require("react-dom");

    //#region styles
    var PLUGIN_ID = "dsh-plugin-reasoning-seat";
    var CSS_TAG_ID = PLUGIN_ID + "/ReasoningSeat.css";
    var CSS = `
.dsh-rs-root{display:inline-flex;align-items:center;min-width:0;position:relative;vertical-align:middle}
.dsh-rs-trigger{display:flex;align-items:center;gap:6px;height:28px;min-width:0;max-width:min(360px,45cqw);padding:0 4px 0 8px;border:0;border-radius:8px;background:transparent;color:#EDEAF5;font-family:inherit;font-size:13px;font-weight:400;line-height:20px;white-space:nowrap;cursor:pointer;outline:none}
.dsh-rs-trigger:hover:not(:disabled){background:rgba(255,255,255,.06)}
.dsh-rs-trigger:focus-visible{box-shadow:0 0 0 2px rgba(167,139,250,.65)}
.dsh-rs-trigger:disabled{opacity:.55;cursor:default}
.dsh-rs-trigger-label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#EDEAF5}
.dsh-rs-trigger-effort{flex:none;color:#A78BFA}
.dsh-rs-trigger-chevron{flex:none;display:inline-flex;align-items:center;color:#9A93AA;transition:transform .12s ease}
.dsh-rs-trigger-chevron-open{transform:rotate(180deg)}
.dsh-rs-badge{flex:none;display:inline-flex;align-items:center;border-radius:999px;corner-shape:round;padding:1px 7px;background:rgba(129,91,247,.34);color:#D6C9FF;font-size:11.5px;font-weight:500;line-height:1.45;letter-spacing:.02em;box-shadow:inset 0 0 0 1px rgba(196,181,253,.18)}
.dsh-rs-spinner{flex:none;width:12px;height:12px;border-radius:50%;corner-shape:round;border:1.5px solid rgba(255,255,255,.22);border-top-color:#C4B5FD;animation:dsh-rs-spin .8s linear infinite}
@keyframes dsh-rs-spin{to{transform:rotate(360deg)}}
.dsh-rs-card{position:fixed;z-index:1200;box-sizing:border-box;width:360px;max-width:calc(100vw - 16px);padding:10px 12px 12px;border-radius:16px;border:1px solid rgba(196,181,253,.55);background:linear-gradient(160deg,#2B2836 0%,#211F29 100%);box-shadow:0 16px 48px rgba(0,0,0,.6),0 0 26px rgba(139,92,246,.2),inset 0 1px 0 rgba(255,255,255,.08);color:#EDEAF5;font-family:inherit;font-size:13px;outline:none}
.dsh-rs-card *,.dsh-rs-card *::before,.dsh-rs-card *::after{box-sizing:border-box}
.dsh-rs-pane{display:flex;flex-direction:column}
.dsh-rs-row{display:flex;align-items:center;gap:8px;width:100%;height:34px;padding:0 6px;border:0;border-radius:9px;background:transparent;color:inherit;font-family:inherit;font-size:13px;font-weight:400;line-height:20px;text-align:left;cursor:pointer}
.dsh-rs-row:hover{background:rgba(255,255,255,.05)}
.dsh-rs-row:focus-visible{outline:none;box-shadow:0 0 0 2px rgba(167,139,250,.6)}
.dsh-rs-row-label{flex:none;color:#B4AEC2}
.dsh-rs-row-value{display:flex;align-items:center;gap:4px;min-width:0;overflow:hidden;color:#F4F1FA;font-size:13.5px}
.dsh-rs-row-value>.dsh-rs-badge,.dsh-rs-trigger>.dsh-rs-badge{margin-left:-2px}
.dsh-rs-row-model-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsh-rs-row-chevron{flex:none;display:inline-flex;align-items:center;margin-left:auto;color:#8B8698}
.dsh-rs-effort{margin-top:12px;padding:9px 11px 11px;border-radius:14px;border:1px solid rgba(224,212,255,.9);background:linear-gradient(180deg,#322C42,#262230);box-shadow:0 0 16px rgba(139,92,246,.26)}
.dsh-rs-effort-head{display:flex;align-items:center;gap:8px}
.dsh-rs-effort-title{color:#C9C3D6;font-size:13px;font-weight:400;line-height:20px}
.dsh-rs-effort-value{margin-left:auto;color:#A78BFA;font-size:13px;font-weight:500;line-height:20px}
.dsh-rs-effort-chevron{flex:none;display:inline-flex;align-items:center;color:#8B8698}
.dsh-rs-effort-loading{padding:10px 2px 1px;color:#8B8698;font-size:12px;line-height:18px}
.dsh-rs-track{position:relative;margin-top:9px;height:30px;border-radius:15px;corner-shape:round;border:1px solid rgba(216,199,255,.85);background:#2A1B45;box-shadow:0 0 16px var(--dsh-rs-glow,rgba(168,85,247,.28));outline:none;cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;transition:box-shadow .3s ease,border-color .3s ease}
.dsh-rs-track:focus-visible{box-shadow:0 0 16px var(--dsh-rs-glow,rgba(168,85,247,.4)),0 0 0 2px rgba(216,199,255,.55)}
.dsh-rs-track-dragging{cursor:grabbing}
@property --dsh-rs-c1{syntax:'<color>';inherits:false;initial-value:#6D28D9}
@property --dsh-rs-c2{syntax:'<color>';inherits:false;initial-value:#C026D3}
@property --dsh-rs-c3{syntax:'<color>';inherits:false;initial-value:#E879F9}
.dsh-rs-fill{position:absolute;left:0;top:0;bottom:0;border-radius:15px;corner-shape:round;overflow:hidden;background:linear-gradient(90deg,var(--dsh-rs-c1) 0%,var(--dsh-rs-c2) 58%,var(--dsh-rs-c3) 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.25);transition:width .16s cubic-bezier(.22,.61,.36,1),opacity .2s ease,--dsh-rs-c1 .3s ease,--dsh-rs-c2 .3s ease,--dsh-rs-c3 .3s ease;pointer-events:none}
.dsh-rs-fill::after{content:"";position:absolute;inset:0;border-radius:15px;background:radial-gradient(120% 150% at 12% 25%,rgba(255,255,255,.18),rgba(255,255,255,0) 62%)}
.dsh-rs-fill[data-level="1"]{--dsh-rs-c1:#1D4ED8;--dsh-rs-c2:#3B82F6;--dsh-rs-c3:#7FB1FF}
.dsh-rs-fill[data-level="2"]{--dsh-rs-c1:#5B21B6;--dsh-rs-c2:#8B5CF6;--dsh-rs-c3:#C4A7FF}
.dsh-rs-fill[data-level="3"]{--dsh-rs-c1:#6D28D9;--dsh-rs-c2:#C026D3;--dsh-rs-c3:#E879F9}
.dsh-rs-track[data-level="0"]{--dsh-rs-glow:rgba(168,85,247,.16)}
.dsh-rs-track[data-level="1"]{--dsh-rs-glow:rgba(59,130,246,.45)}
.dsh-rs-track[data-level="2"]{--dsh-rs-glow:rgba(139,92,246,.45)}
.dsh-rs-track[data-level="3"]{--dsh-rs-glow:rgba(217,70,239,.42)}
.dsh-rs-dots{position:absolute;inset:0;pointer-events:none}
.dsh-rs-dot{position:absolute;top:50%;width:3px;height:3px;margin:-1.5px 0 0 -1.5px;border-radius:50%;corner-shape:round;background:rgba(255,255,255,.24)}
.dsh-rs-spark{position:absolute;display:block;border-radius:50%;corner-shape:round;background:#fff;opacity:.25;box-shadow:0 0 6px 1.5px rgba(255,255,255,.85);pointer-events:none;animation-name:dsh-rs-twinkle;animation-timing-function:ease-in-out;animation-iteration-count:infinite;transform:translate(-50%,-50%)}
.dsh-rs-spark-cross{width:7px;height:7px;border-radius:0;background:transparent;box-shadow:none}
.dsh-rs-spark-cross::before,.dsh-rs-spark-cross::after{content:"";position:absolute;left:50%;top:50%;background:#fff;border-radius:1px;box-shadow:0 0 5px 1.5px rgba(255,255,255,.9);transform:translate(-50%,-50%)}
.dsh-rs-spark-cross::before{width:7px;height:1.4px}
.dsh-rs-spark-cross::after{width:1.4px;height:7px}
@keyframes dsh-rs-twinkle{0%,100%{opacity:.12;transform:translate(-50%,-50%) scale(.7)}35%{opacity:1;transform:translate(calc(-50% + var(--dx,0px)),calc(-50% + var(--dy,0px))) scale(1.12)}65%{opacity:.5;transform:translate(calc(-50% + var(--dx2,1px)),calc(-50% + var(--dy2,-1px))) scale(.9)}}
@media (prefers-reduced-motion:reduce){.dsh-rs-spark{animation:none;opacity:.75}}
.dsh-rs-thumb{position:absolute;top:1px;width:26px;height:26px;border-radius:9px;corner-shape:superellipse(1.5);background:#fff;box-shadow:0 2px 6px rgba(8,2,20,.45),0 0 0 3px rgba(255,255,255,.1);transition:left .16s cubic-bezier(.22,.61,.36,1),transform .18s cubic-bezier(.22,.61,.36,1);pointer-events:none}
/* The reference thumb swells and spills over the track while hovered or dragged. */
.dsh-rs-track:hover:not([aria-disabled="true"]) .dsh-rs-thumb,.dsh-rs-track-dragging .dsh-rs-thumb{transform:scale(1.22)}
.dsh-rs-lv-0{color:#9A93AA}
.dsh-rs-lv-1{color:#8FB6FF}
.dsh-rs-lv-2{color:#C4B5FD}
.dsh-rs-lv-3{color:#E4B8FF}
.dsh-rs-lv-0,.dsh-rs-lv-1,.dsh-rs-lv-2,.dsh-rs-lv-3{transition:color .3s ease}
.dsh-rs-model-pane{display:flex;flex-direction:column;max-height:min(320px,60vh);overflow-y:auto;overscroll-behavior:contain;padding-right:2px}
.dsh-rs-model-pane::-webkit-scrollbar{width:6px}
.dsh-rs-model-pane::-webkit-scrollbar-thumb{background:rgba(196,181,253,.28);border-radius:3px}
.dsh-rs-back{display:flex;align-items:center;gap:4px;height:32px;padding:0 6px;border:0;border-radius:8px;background:transparent;color:#F4F1FA;font-family:inherit;font-size:13px;font-weight:400;text-align:left;cursor:pointer}
.dsh-rs-back:hover{background:rgba(255,255,255,.05)}
.dsh-rs-back:focus-visible{outline:none;box-shadow:0 0 0 2px rgba(167,139,250,.6)}
.dsh-rs-back-chevron{display:inline-flex;align-items:center;color:#8B8698}
.dsh-rs-group-title{padding:8px 6px 4px;color:#8B8698;font-size:11.5px;font-weight:500;line-height:16px;letter-spacing:.04em}
.dsh-rs-model{display:flex;align-items:center;gap:6px;width:100%;min-height:32px;padding:0 6px;border:0;border-radius:8px;background:transparent;color:#EDEAF5;font-family:inherit;font-size:13px;font-weight:400;line-height:20px;text-align:left;cursor:pointer}
.dsh-rs-model:hover{background:rgba(255,255,255,.05)}
.dsh-rs-model:focus-visible{outline:none;box-shadow:0 0 0 2px rgba(167,139,250,.6)}
.dsh-rs-model:disabled{opacity:.55;cursor:default}
.dsh-rs-model-selected{color:#F4F1FA}
.dsh-rs-model-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsh-rs-check{flex:none;display:inline-flex;align-items:center;margin-left:auto;color:#A78BFA}
.dsh-rs-status{padding:10px 6px;color:#8B8698;font-size:12px;line-height:18px}
.dsh-rs-failure{display:flex;flex-direction:column;gap:2px;padding:6px;border-radius:8px;color:#8B8698;font-size:12px;line-height:17px}
.dsh-rs-failure-name{color:#B4AEC2}
.dsh-rs-failure-message{color:#8B8698;word-break:break-word}
.dsh-rs-error{margin-top:8px;padding:6px 8px;border-radius:8px;background:rgba(248,113,113,.12);color:#FCA5A5;font-size:12px;line-height:17px;cursor:pointer;word-break:break-word}
/* Light-theme palette: the host applies a light token set, so hardcoded dark surfaces and light text would lose contrast (e.g. the 1017 badge turned into a blank purple block). The root attribute is kept in sync from the host theme service. */
:root[data-dsh-rs-theme="light"] .dsh-rs-trigger{color:#231F2E}
:root[data-dsh-rs-theme="light"] .dsh-rs-trigger:hover:not(:disabled){background:rgba(30,20,60,.05)}
:root[data-dsh-rs-theme="light"] .dsh-rs-trigger-label{color:#231F2E}
:root[data-dsh-rs-theme="light"] .dsh-rs-trigger-chevron{color:#8A8397}
:root[data-dsh-rs-theme="light"] .dsh-rs-badge{background:rgba(124,58,237,.14);color:#6D28D9;box-shadow:inset 0 0 0 1px rgba(124,58,237,.22)}
:root[data-dsh-rs-theme="light"] .dsh-rs-spinner{border-color:rgba(30,20,60,.18);border-top-color:#7C3AED}
:root[data-dsh-rs-theme="light"] .dsh-rs-card{background:linear-gradient(160deg,#FBFAFF 0%,#F1EDF9 100%);border-color:rgba(139,92,246,.45);box-shadow:0 18px 44px rgba(31,20,60,.18),0 0 22px rgba(139,92,246,.12),inset 0 1px 0 rgba(255,255,255,.7);color:#231F2E}
:root[data-dsh-rs-theme="light"] .dsh-rs-row:hover{background:rgba(30,20,60,.05)}
:root[data-dsh-rs-theme="light"] .dsh-rs-row-label{color:#5F5870}
:root[data-dsh-rs-theme="light"] .dsh-rs-row-value{color:#1B1727}
:root[data-dsh-rs-theme="light"] .dsh-rs-row-chevron{color:#8A8397}
:root[data-dsh-rs-theme="light"] .dsh-rs-effort{background:linear-gradient(180deg,#F7F3FF,#F0EAFB);border-color:rgba(139,92,246,.5);box-shadow:0 0 16px rgba(139,92,246,.16)}
:root[data-dsh-rs-theme="light"] .dsh-rs-effort-title{color:#4A4360}
:root[data-dsh-rs-theme="light"] .dsh-rs-effort-chevron{color:#8A8397}
:root[data-dsh-rs-theme="light"] .dsh-rs-effort-loading{color:#7A7387}
:root[data-dsh-rs-theme="light"] .dsh-rs-track{background:#E7DDFA;border-color:rgba(139,92,246,.55)}
:root[data-dsh-rs-theme="light"] .dsh-rs-dot{background:rgba(30,20,60,.18)}
:root[data-dsh-rs-theme="light"] .dsh-rs-lv-0{color:#8A8397}
:root[data-dsh-rs-theme="light"] .dsh-rs-lv-1{color:#2563EB}
:root[data-dsh-rs-theme="light"] .dsh-rs-lv-2{color:#7C3AED}
:root[data-dsh-rs-theme="light"] .dsh-rs-lv-3{color:#A21CAF}
:root[data-dsh-rs-theme="light"] .dsh-rs-back{color:#1B1727}
:root[data-dsh-rs-theme="light"] .dsh-rs-back:hover{background:rgba(30,20,60,.05)}
:root[data-dsh-rs-theme="light"] .dsh-rs-back-chevron{color:#8A8397}
:root[data-dsh-rs-theme="light"] .dsh-rs-group-title{color:#7A7387}
:root[data-dsh-rs-theme="light"] .dsh-rs-model{color:#231F2E}
:root[data-dsh-rs-theme="light"] .dsh-rs-model:hover{background:rgba(30,20,60,.05)}
:root[data-dsh-rs-theme="light"] .dsh-rs-model-selected{color:#1B1727}
:root[data-dsh-rs-theme="light"] .dsh-rs-check{color:#7C3AED}
:root[data-dsh-rs-theme="light"] .dsh-rs-status{color:#7A7387}
:root[data-dsh-rs-theme="light"] .dsh-rs-failure{color:#7A7387}
:root[data-dsh-rs-theme="light"] .dsh-rs-failure-name{color:#5F5870}
:root[data-dsh-rs-theme="light"] .dsh-rs-model-pane::-webkit-scrollbar-thumb{background:rgba(124,58,237,.25)}
:root[data-dsh-rs-theme="light"] .dsh-rs-error{background:rgba(220,38,38,.08);color:#B91C1C}
`;
    if (
      typeof document !== "undefined" &&
      document.querySelector("style[data-plugin-css=" + JSON.stringify(CSS_TAG_ID) + "]") === null
    ) {
      var cssTag = document.createElement("style");
      cssTag.dataset.plugin = PLUGIN_ID;
      cssTag.dataset.pluginCss = CSS_TAG_ID;
      cssTag.textContent = CSS;
      document.head.appendChild(cssTag);
    }
    //#endregion

    //#region constants + locale dictionaries
    var NS = "reasoning-seat";
    var BADGE_PROVIDERS = ["deepseek-account", "deepseek-official"];
    var BADGE_MODEL_ID = "deepseek-flash";
    var BADGE_MODEL_NAME = "DeepSeek-V4.1-Flash";
    var CHEVRON_DOWN = "M2.5 5 6.5 9 10.5 5";
    var CHEVRON_RIGHT = "M5 2.5 9 6.5 5 10.5";
    var CHEVRON_LEFT = "M8 2.5 4 6.5 8 10.5";
    var CHECK_MARK = "M2.5 7 5.6 10 11 3.6";
    /**
     * Twinkling particles inside the filled part of the slider, matching the
     * reference motion: [left %, top %, size px (or 0 for a cross), duration s,
     * phase s, drift px, cross?]. Positions are relative to the fill box, so
     * particles are naturally clipped away outside the current fill width.
     */
    var SPARK_LAYOUT = [
      [12, 34, 2.2, 3.4, 0.0, 2, false],
      [19, 63, 1.5, 4.1, 0.5, 2, false],
      [26, 27, 2.6, 3.1, 0.9, 3, false],
      [33, 55, 1.9, 3.8, 0.2, 2, false],
      [40, 74, 1.4, 4.4, 1.3, 2, false],
      [47, 32, 2.4, 3.3, 0.7, 3, false],
      [54, 61, 1.7, 4.2, 1.7, 2, false],
      [61, 41, 2.8, 3.6, 0.4, 3, false],
      [68, 69, 1.5, 3.9, 1.1, 2, false],
      [75, 33, 2.1, 3.2, 0.25, 2, false],
      [82, 57, 2.5, 4.0, 1.5, 3, false],
      [89, 45, 1.6, 4.5, 0.8, 2, false],
      [43, 44, 0, 3.5, 0.6, 3, true],
      [71, 52, 0, 4.3, 1.2, 2, true],
    ];

    var zh = {
      "trigger.loading": "加载模型中…",
      "trigger.fallback": "选择模型",
      "trigger.aria": "模型 {model}",
      "trigger.ariaEffort": "模型 {model}，推理等级 {effort}",
      "badge.label": "1017",
      "menu.model": "模型",
      "menu.reasoning": "推理等级",
      "menu.aria": "模型与推理等级",
      "status.loading": "加载模型中…",
      "status.empty": "暂无可用模型",
      "effort.providerDefault": "默认",
      "error.select": "选择失败：{message}",
      "group.account": "DeepSeek 账号",
    };
    var en = {
      "trigger.loading": "Loading models…",
      "trigger.fallback": "Select model",
      "trigger.aria": "Model {model}",
      "trigger.ariaEffort": "Model {model}, reasoning effort {effort}",
      "badge.label": "1017",
      "menu.model": "Model",
      "menu.reasoning": "Reasoning effort",
      "menu.aria": "Model and reasoning effort",
      "status.loading": "Loading models…",
      "status.empty": "No models available",
      "effort.providerDefault": "Default",
      "error.select": "Selection failed: {message}",
      "group.account": "DeepSeek Account",
    };
    //#endregion

    //#region helpers
    /** Localized `t` when the locale face supplied one, else the zh dictionary. */
    function makeTranslate(t) {
      if (typeof t === "function") return t;
      return function (key, params) {
        var template = Object.prototype.hasOwnProperty.call(zh, key) ? zh[key] : key;
        if (params === undefined || params === null) return template;
        return template.replace(/\{(\w+)\}/g, function (match, name) {
          return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match;
        });
      };
    }

    /** Flatten children and create one element without a JSX runtime. */
    function h(type, props) {
      var children = [];
      for (var i = 2; i < arguments.length; i += 1) {
        var child = arguments[i];
        if (child === null || child === undefined || child === false) continue;
        if (Array.isArray(child)) children.push.apply(children, child);
        else children.push(child);
      }
      return react.createElement.apply(react, [type, props || null].concat(children));
    }

    function svgIcon(path, size) {
      return h(
        "svg",
        {
          width: size,
          height: size,
          viewBox: "0 0 13 13",
          fill: "none",
          "aria-hidden": "true",
          focusable: "false",
        },
        h("path", {
          d: path,
          stroke: "currentColor",
          strokeWidth: 1.6,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        })
      );
    }

    function chevronDown() {
      return svgIcon(CHEVRON_DOWN, 13);
    }
    function chevronRight() {
      return svgIcon(CHEVRON_RIGHT, 13);
    }
    function chevronLeft() {
      return svgIcon(CHEVRON_LEFT, 13);
    }
    function checkMark() {
      return svgIcon(CHECK_MARK, 13);
    }

    /** Official 1017 release marker condition (mirrors the official label plugin). */
    function showsReleaseBadge(providerId, model) {
      return (
        (providerId === "deepseek-account" || providerId === "deepseek-official") &&
        model !== null &&
        model !== undefined &&
        model.id === BADGE_MODEL_ID &&
        model.name === BADGE_MODEL_NAME
      );
    }

    /** deepseek-account first, deepseek-official second, then catalog order. */
    function orderModelProviders(groups) {
      var rank = function (id) {
        if (id === "deepseek-account") return 0;
        if (id === "deepseek-official") return 1;
        return 2;
      };
      return groups.slice().sort(function (left, right) {
        return rank(left.id) - rank(right.id);
      });
    }

    function isPlainObject(value) {
      return typeof value === "object" && value !== null;
    }
    //#endregion

    //#region ReasoningSeat
    /**
     * Composer model seat: a trigger showing model name + 1017 badge + effort,
     * and a portal card with a model row plus the purple reasoning slider.
     * Props come from the slot: `locked` (owner) and the injected face
     * `{ available, directory, load, select }` plus the locale `t` seat.
     */
    function ReasoningSeat(props) {
      var t = makeTranslate(props.t);
      var locked = props.locked === true;
      var available = props.available !== false;
      var disabled = locked || !available;
      var directory = props.directory;
      var load = props.load;
      var select = props.select;

      var state = react.useSyncExternalStore(
        function (listener) {
          return directory.subscribe(listener);
        },
        function () {
          return directory.getSnapshot();
        },
        function () {
          return directory.getSnapshot();
        }
      );

      var openState = react.useState(false);
      var open = openState[0];
      var setOpen = openState[1];
      var paneState = react.useState("root");
      var pane = paneState[0];
      var setPane = paneState[1];
      var failureState = react.useState(null);
      var failure = failureState[0];
      var setFailure = failureState[1];
      var draggingState = react.useState(false);
      var dragging = draggingState[0];
      var setDragging = draggingState[1];
      var previewState = react.useState(null);
      var preview = previewState[0];
      var setPreview = previewState[1];
      var posState = react.useState(null);
      var pos = posState[0];
      var setPos = posState[1];
      var trackWidthState = react.useState(0);
      var trackWidth = trackWidthState[0];
      var setTrackWidth = trackWidthState[1];

      var triggerRef = react.useRef(null);
      var cardRef = react.useRef(null);
      var sliderRef = react.useRef(null);
      var previewRef = react.useRef(null);

      // ---- directory projection -------------------------------------------
      var groups = orderModelProviders(Array.isArray(state.groups) ? state.groups : []);
      var current = isPlainObject(state.current) ? state.current : null;
      var currentChoice = null;
      for (var gi = 0; gi < groups.length; gi += 1) {
        var group = groups[gi];
        var groupModels = Array.isArray(group.models) ? group.models : [];
        for (var mi = 0; mi < groupModels.length; mi += 1) {
          if (
            current !== null &&
            currentChoice === null &&
            group.id === current.provider &&
            groupModels[mi].id === current.model
          ) {
            currentChoice = { group: group, model: groupModels[mi] };
          }
        }
      }
      var reasoning = currentChoice !== null ? currentChoice.model.reasoning : undefined;
      var efforts = isPlainObject(reasoning) && Array.isArray(reasoning.efforts) ? reasoning.efforts : [];
      var hasReasoning = efforts.length > 0;
      var defaultEffortId =
        isPlainObject(reasoning) && reasoning.defaultEffort !== undefined ? reasoning.defaultEffort : undefined;
      var effectiveEffortId =
        current !== null && current.reasoningEffort !== undefined ? current.reasoningEffort : defaultEffortId;
      var activeIndex = -1;
      for (var ei = 0; ei < efforts.length; ei += 1) {
        if (efforts[ei] !== null && efforts[ei] !== undefined && efforts[ei].id === effectiveEffortId) {
          activeIndex = ei;
          break;
        }
      }
      if (activeIndex < 0 && efforts.length > 0) activeIndex = 0;
      var displayIndex =
        preview !== null && preview >= 0 && preview < efforts.length ? preview : activeIndex;
      var maxIndex = efforts.length > 0 ? efforts.length - 1 : 0;
      var displayPct = efforts.length <= 1 ? 0 : displayIndex / maxIndex;
      // Tone follows the reference video: blue at the low end, violet in the
      // middle, fuchsia at max; off (index 0) has no fill at all.
      var tone = 0;
      if (hasReasoning && efforts.length > 1 && displayIndex > 0) {
        var toneRatio = displayIndex / maxIndex;
        tone = toneRatio <= 0.5 ? 1 : toneRatio < 0.85 ? 2 : 3;
      }
      var levelClass = "dsh-rs-lv-" + tone;
      var effortLabel;
      if (hasReasoning && efforts[displayIndex] !== undefined) effortLabel = efforts[displayIndex].name;
      else if (typeof state.retainedEffort === "string" && state.retainedEffort.length > 0) {
        effortLabel = state.retainedEffort;
      } else effortLabel = t("effort.providerDefault");

      var usableTrack = trackWidth > 30 ? trackWidth - 30 : 0;
      var thumbLeft = 1 + displayPct * usableTrack;
      // Off renders no fill at all (the reference shows an empty track there).
      var fillWidth = displayIndex <= 0 ? 0 : 27 + displayPct * usableTrack;
      var levelDots = [];
      if (hasReasoning && efforts.length > 1) {
        for (var di = 1; di < efforts.length; di += 1) {
          levelDots.push(
            h("span", {
              key: "dot-" + di,
              className: "dsh-rs-dot",
              style: { left: (6 + (di / maxIndex) * 88).toFixed(2) + "%" },
            })
          );
        }
      }
      var sparks = [];
      if (hasReasoning && displayIndex > 0) {
        for (var si = 0; si < SPARK_LAYOUT.length; si += 1) {
          var spk = SPARK_LAYOUT[si];
          var isCross = spk[6] === true;
          var sparkSize = isCross ? 7 : spk[2];
          sparks.push(
            h("span", {
              key: "spark-" + si,
              className: "dsh-rs-spark" + (isCross ? " dsh-rs-spark-cross" : ""),
              style: {
                left: spk[0] + "%",
                top: spk[1] + "%",
                width: sparkSize + "px",
                height: sparkSize + "px",
                animationDuration: spk[3] + "s",
                animationDelay: "-" + spk[4] + "s",
                "--dx": (isCross ? 2 : 1) + "px",
                "--dy": "-1px",
                "--dx2": "-1px",
                "--dy2": "1px",
              },
            })
          );
        }
      }

      var busy = state.pending !== null && state.pending !== undefined;
      var directoryLoading = state.status === "loading" || state.status === "idle";
      var waiting = currentChoice === null && directoryLoading;
      var modelLabel = waiting
        ? t("trigger.loading")
        : currentChoice !== null
        ? currentChoice.model.name
        : t("trigger.fallback");
      var showTriggerEffort = hasReasoning && effortLabel !== undefined;
      var currentHasBadge =
        currentChoice !== null && showsReleaseBadge(currentChoice.group.id, currentChoice.model);

      var triggerAria;
      if (waiting) triggerAria = t("trigger.loading");
      else if (currentChoice === null) triggerAria = t("trigger.aria", { model: t("trigger.fallback") });
      else if (showTriggerEffort) triggerAria = t("trigger.ariaEffort", { model: modelLabel, effort: effortLabel });
      else triggerAria = t("trigger.aria", { model: modelLabel });
      var triggerTitle = showTriggerEffort ? modelLabel + " · " + effortLabel : modelLabel;

      // ---- callbacks ------------------------------------------------------
      function close(restoreFocus) {
        setOpen(false);
        setPane("root");
        setFailure(null);
        setPreview(null);
        previewRef.current = null;
        setDragging(false);
        if (restoreFocus && triggerRef.current !== null) {
          try {
            triggerRef.current.focus({ preventScroll: true });
          } catch (error) {
            triggerRef.current.focus();
          }
        }
      }

      function measure() {
        if (typeof window === "undefined") return;
        var trigger = triggerRef.current;
        if (trigger !== null) {
          var rect = trigger.getBoundingClientRect();
          var margin = 8;
          var cardWidth =
            cardRef.current !== null && cardRef.current.offsetWidth > 0 ? cardRef.current.offsetWidth : 360;
          var cardHeight = cardRef.current !== null ? cardRef.current.offsetHeight : 0;
          var left = rect.left;
          var maxLeft = window.innerWidth - cardWidth - margin;
          if (left > maxLeft) left = maxLeft;
          if (left < margin) left = margin;
          var bottom = window.innerHeight - rect.top + 10;
          var maxBottom = window.innerHeight - margin;
          if (bottom > maxBottom) bottom = maxBottom;
          if (bottom < margin) bottom = margin;
          if (cardHeight > 0 && window.innerHeight - bottom - cardHeight < margin) {
            bottom = Math.max(margin, window.innerHeight - margin - cardHeight);
          }
          setPos(function (previous) {
            if (previous !== null && previous.left === left && previous.bottom === bottom) return previous;
            return { left: left, bottom: bottom };
          });
        }
        var track = sliderRef.current;
        if (track !== null) {
          var width = track.offsetWidth;
          setTrackWidth(function (previous) {
            return previous === width ? previous : width;
          });
        }
      }

      function submit(selection) {
        if (typeof select !== "function") return;
        var result;
        try {
          result = select(selection);
        } catch (error) {
          setFailure(t("error.select", { message: String((error && error.message) || error) }));
          return;
        }
        if (result !== null && result !== undefined && typeof result.then === "function") {
          result
            .then(function (outcome) {
              if (outcome !== null && outcome !== undefined && outcome.ok === false) {
                var error = outcome.error;
                var message;
                if (isPlainObject(error)) {
                  message = error.message !== undefined ? String(error.message) : String(error.code);
                  if (error.code !== undefined && error.message !== undefined) {
                    message = String(error.code) + ": " + String(error.message);
                  }
                } else {
                  message = String(error);
                }
                setFailure(t("error.select", { message: message }));
              }
            })
            .catch(function (error) {
              setFailure(t("error.select", { message: String((error && error.message) || error) }));
            });
        }
      }

      function chooseEffort(effort) {
        if (disabled || current === null || !isPlainObject(effort)) return;
        if (effort.id === effectiveEffortId) return;
        submit({ provider: current.provider, model: current.model, reasoningEffort: effort.id });
      }

      function chooseModel(groupId, model) {
        if (disabled) return;
        var selection = { provider: groupId, model: model.id };
        if (isPlainObject(model.reasoning) && model.reasoning.defaultEffort !== undefined) {
          selection.reasoningEffort = model.reasoning.defaultEffort;
        }
        setPane("root");
        if (current !== null && current.provider === groupId && current.model === model.id) return;
        submit(selection);
      }

      function refresh() {
        if (typeof load === "function") load();
      }

      function onTriggerClick() {
        if (open) {
          close(false);
          return;
        }
        setPane("root");
        setFailure(null);
        setOpen(true);
        refresh();
      }

      function indexFromClientX(clientX) {
        var track = sliderRef.current;
        if (track === null || efforts.length === 0) return null;
        var rect = track.getBoundingClientRect();
        var usable = Math.max(1, rect.width - 30);
        var ratio = (clientX - rect.left - 1) / usable;
        if (ratio < 0) ratio = 0;
        if (ratio > 1) ratio = 1;
        if (efforts.length === 1) return 0;
        return Math.round(ratio * (efforts.length - 1));
      }

      function setPreviewIndex(index) {
        previewRef.current = index;
        setPreview(index);
      }

      function onTrackPointerDown(event) {
        if (disabled || current === null || efforts.length === 0) return;
        if (event.pointerType === "mouse" && event.button !== 0) return;
        var index = indexFromClientX(event.clientX);
        if (index === null) return;
        if (typeof event.preventDefault === "function") event.preventDefault();
        var track = sliderRef.current;
        if (track !== null) {
          try {
            track.setPointerCapture(event.pointerId);
          } catch (error) {
            /* pointer capture is optional */
          }
          try {
            track.focus({ preventScroll: true });
          } catch (error) {
            track.focus();
          }
        }
        setDragging(true);
        setPreviewIndex(index);
      }

      function onTrackPointerMove(event) {
        if (!dragging || disabled) return;
        var index = indexFromClientX(event.clientX);
        if (index !== null && index !== previewRef.current) setPreviewIndex(index);
      }

      function onTrackPointerUp(event) {
        if (!dragging) return;
        var index = previewRef.current;
        setDragging(false);
        setPreviewIndex(null);
        var track = sliderRef.current;
        if (track !== null) {
          try {
            track.releasePointerCapture(event.pointerId);
          } catch (error) {
            /* pointer capture is optional */
          }
        }
        if (index !== null && index >= 0 && index < efforts.length) chooseEffort(efforts[index]);
      }

      function onTrackPointerCancel() {
        setDragging(false);
        setPreviewIndex(null);
      }

      function onTrackKeyDown(event) {
        if (disabled || efforts.length === 0) return;
        var key = event.key;
        var next = activeIndex;
        if (key === "ArrowLeft" || key === "ArrowDown") next = Math.max(0, activeIndex - 1);
        else if (key === "ArrowRight" || key === "ArrowUp") next = Math.min(maxIndex, activeIndex + 1);
        else if (key === "Home") next = 0;
        else if (key === "End") next = maxIndex;
        else return;
        if (typeof event.preventDefault === "function") event.preventDefault();
        if (next === activeIndex) return;
        chooseEffort(efforts[next]);
      }

      // ---- effects --------------------------------------------------------
      react.useEffect(
        function () {
          if (!available) return;
          refresh();
        },
        [available, load]
      );

      react.useLayoutEffect(
        function () {
          if (!open) return;
          measure();
        },
        [open, pane, hasReasoning, efforts.length]
      );

      react.useEffect(
        function () {
          if (!open) return;
          var focusTarget = hasReasoning ? sliderRef.current : cardRef.current;
          if (focusTarget !== null && typeof focusTarget.focus === "function") {
            try {
              focusTarget.focus({ preventScroll: true });
            } catch (error) {
              focusTarget.focus();
            }
          }
        },
        [open, hasReasoning]
      );

      react.useEffect(
        function () {
          if (!open) return;
          function onResize() {
            measure();
          }
          function onScroll(event) {
            if (
              cardRef.current !== null &&
              event.target !== null &&
              event.target !== document &&
              cardRef.current.contains(event.target)
            ) {
              return;
            }
            measure();
          }
          window.addEventListener("resize", onResize);
          window.addEventListener("scroll", onScroll, true);
          return function () {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll, true);
          };
        },
        [open]
      );

      react.useEffect(
        function () {
          if (!open) return;
          function onMouseDown(event) {
            var target = event.target;
            if (target === null || target === undefined) return;
            if (cardRef.current !== null && cardRef.current.contains(target)) return;
            if (triggerRef.current !== null && triggerRef.current.contains(target)) return;
            close(false);
          }
          function onDocumentKeyDown(event) {
            if (event.key !== "Escape") return;
            if (typeof event.preventDefault === "function") event.preventDefault();
            if (typeof event.stopPropagation === "function") event.stopPropagation();
            close(true);
          }
          document.addEventListener("mousedown", onMouseDown);
          document.addEventListener("keydown", onDocumentKeyDown, true);
          return function () {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("keydown", onDocumentKeyDown, true);
          };
        },
        [open]
      );

      // ---- trigger --------------------------------------------------------
      var trigger = h(
        "button",
        {
          ref: triggerRef,
          type: "button",
          className: "dsh-rs-trigger",
          "data-dsh-reasoning-seat": "",
          "aria-label": triggerAria,
          "aria-haspopup": "dialog",
          "aria-expanded": open ? "true" : "false",
          "aria-busy": busy ? "true" : undefined,
          title: triggerTitle,
          disabled: disabled,
          onMouseDown: function (event) {
            if (typeof event.preventDefault === "function") event.preventDefault();
          },
          onClick: onTriggerClick,
        },
        h("span", { className: "dsh-rs-trigger-label" }, modelLabel),
        currentHasBadge ? h("span", { className: "dsh-rs-badge" }, t("badge.label")) : null,
        showTriggerEffort ? h("span", { className: "dsh-rs-trigger-effort " + levelClass }, effortLabel) : null,
        busy
          ? h("span", { className: "dsh-rs-spinner", "aria-hidden": "true" })
          : h(
              "span",
              {
                className: "dsh-rs-trigger-chevron" + (open ? " dsh-rs-trigger-chevron-open" : ""),
                "aria-hidden": "true",
              },
              chevronDown()
            )
      );

      // ---- root pane ------------------------------------------------------
      var modelRow = h(
        "button",
        {
          type: "button",
          className: "dsh-rs-row",
          "aria-label": t("menu.model") + ": " + modelLabel,
          onClick: function () {
            setPane("model");
          },
        },
        h("span", { className: "dsh-rs-row-label" }, t("menu.model")),
        h(
          "span",
          { className: "dsh-rs-row-value" },
          h("span", { className: "dsh-rs-row-model-name" }, modelLabel),
          currentHasBadge ? h("span", { className: "dsh-rs-badge" }, t("badge.label")) : null
        ),
        h("span", { className: "dsh-rs-row-chevron", "aria-hidden": "true" }, chevronRight())
      );

      var track = h(
        "div",
        {
          ref: sliderRef,
          className: "dsh-rs-track" + (dragging ? " dsh-rs-track-dragging" : ""),
          "data-level": String(tone),
          role: "slider",
          tabIndex: disabled ? -1 : 0,
          "aria-label": t("menu.reasoning"),
          "aria-valuemin": 0,
          "aria-valuemax": maxIndex,
          "aria-valuenow": displayIndex,
          "aria-valuetext": effortLabel,
          "aria-disabled": disabled ? "true" : undefined,
          onPointerDown: onTrackPointerDown,
          onPointerMove: onTrackPointerMove,
          onPointerUp: onTrackPointerUp,
          onPointerCancel: onTrackPointerCancel,
          onKeyDown: onTrackKeyDown,
        },
        h("div", { className: "dsh-rs-dots", "aria-hidden": "true" }, levelDots),
        h(
          "div",
          {
            className: "dsh-rs-fill",
            "data-level": String(tone),
            style: { width: fillWidth + "px" },
            "aria-hidden": "true",
          },
          sparks
        ),
        h("div", { className: "dsh-rs-thumb", style: { left: thumbLeft + "px" }, "aria-hidden": "true" })
      );

      var reasoningBlock = h(
        "div",
        { className: "dsh-rs-effort" },
        h(
          "div",
          { className: "dsh-rs-effort-head" },
          h("span", { className: "dsh-rs-effort-title" }, t("menu.reasoning")),
          h("span", { className: "dsh-rs-effort-value " + levelClass }, effortLabel),
          h("span", { className: "dsh-rs-effort-chevron", "aria-hidden": "true" }, chevronRight())
        ),
        track
      );

      var loadingBlock = h(
        "div",
        { className: "dsh-rs-effort" },
        h(
          "div",
          { className: "dsh-rs-effort-head" },
          h("span", { className: "dsh-rs-effort-title" }, t("menu.reasoning")),
          h("span", { className: "dsh-rs-effort-chevron", "aria-hidden": "true" }, chevronRight())
        ),
        h("div", { className: "dsh-rs-effort-loading" }, t("status.loading"))
      );

      var rootChildren = [modelRow];
      if (hasReasoning) rootChildren.push(reasoningBlock);
      else if (waiting) rootChildren.push(loadingBlock);

      var rootPane = h("div", { className: "dsh-rs-pane" }, rootChildren);

      // ---- model list pane ------------------------------------------------
      var modelPaneChildren = [
        h(
          "button",
          {
            type: "button",
            className: "dsh-rs-back",
            onClick: function () {
              setPane("root");
            },
          },
          h("span", { className: "dsh-rs-back-chevron", "aria-hidden": "true" }, chevronLeft()),
          h("span", { className: "dsh-rs-back-label" }, t("menu.model"))
        ),
      ];
      var failures = Array.isArray(state.failures) ? state.failures : [];
      if (groups.length === 0) {
        modelPaneChildren.push(
          h("div", { className: "dsh-rs-status" }, directoryLoading ? t("status.loading") : t("status.empty"))
        );
        if (state.status === "error" && typeof state.error === "string" && state.error.length > 0) {
          modelPaneChildren.push(h("div", { className: "dsh-rs-failure-message" }, state.error));
        }
      } else {
        for (var gj = 0; gj < groups.length; gj += 1) {
          var providerGroup = groups[gj];
          var providerName =
            providerGroup.id === "deepseek-account" ? t("group.account") : providerGroup.name || providerGroup.id;
          modelPaneChildren.push(
            h("div", { className: "dsh-rs-group-title", "aria-hidden": "true" }, providerName)
          );
          var providerModels = Array.isArray(providerGroup.models) ? providerGroup.models : [];
          for (var mj = 0; mj < providerModels.length; mj += 1) {
            var candidate = providerModels[mj];
            var selected =
              current !== null && current.provider === providerGroup.id && current.model === candidate.id;
            modelPaneChildren.push(
              h(
                "button",
                {
                  type: "button",
                  className: "dsh-rs-model" + (selected ? " dsh-rs-model-selected" : ""),
                  role: "menuitemradio",
                  "aria-checked": selected ? "true" : "false",
                  disabled: disabled,
                  onClick: function (groupId, model) {
                    return function () {
                      chooseModel(groupId, model);
                    };
                  }(providerGroup.id, candidate),
                },
                h("span", { className: "dsh-rs-model-name" }, candidate.name || candidate.id),
                showsReleaseBadge(providerGroup.id, candidate)
                  ? h("span", { className: "dsh-rs-badge" }, t("badge.label"))
                  : null,
                selected ? h("span", { className: "dsh-rs-check", "aria-hidden": "true" }, checkMark()) : null
              )
            );
          }
        }
      }
      for (var fi = 0; fi < failures.length; fi += 1) {
        var failureEntry = failures[fi];
        modelPaneChildren.push(
          h(
            "div",
            { className: "dsh-rs-failure" },
            h(
              "span",
              { className: "dsh-rs-failure-name" },
              failureEntry.id === "deepseek-account"
                ? t("group.account")
                : failureEntry.name || failureEntry.id || ""
            ),
            h("span", { className: "dsh-rs-failure-message" }, failureEntry.message || "")
          )
        );
      }
      var modelPane = h("div", { className: "dsh-rs-model-pane" }, modelPaneChildren);

      // ---- portal card ----------------------------------------------------
      var card = null;
      if (open && typeof document !== "undefined") {
        var cardChildren = [pane === "root" ? rootPane : modelPane];
        if (failure !== null) {
          cardChildren.push(
            h(
              "div",
              {
                className: "dsh-rs-error",
                role: "alert",
                onClick: function () {
                  setFailure(null);
                },
              },
              failure
            )
          );
        }
        card = reactDom.createPortal(
          h(
            "div",
            {
              ref: cardRef,
              className: "dsh-rs-card",
              role: "dialog",
              "aria-label": t("menu.aria"),
              "aria-modal": "false",
              tabIndex: -1,
              style:
                pos === null
                  ? { left: "0px", bottom: "0px", visibility: "hidden" }
                  : { left: pos.left + "px", bottom: pos.bottom + "px" },
              onClick: function () {
                if (failure !== null) setFailure(null);
              },
            },
            cardChildren
          ),
          document.body
        );
      }

      return h("span", { className: "dsh-rs-root" }, trigger, card);
    }
    //#endregion

    //#region plugin registration
    /**
     * Required services: the slot registry, dictionaries, the model directory
     * service, and the `remote` / `remote.session` faces that the built-in
     * ModelDirectoryResolver reads through (its own inject list contains them;
     * `directoryFor()` otherwise throws `cannot get property "remote.session"
     * without inject`).
     */
    const inject = ["slots", "locale", "modelDirectories", "sessions", "remote", "remote.session"];

    /**
     * Register the zh/en dictionaries and shadow the built-in composer model
     * seat at priority -100. The built-in seat keeps running (we must not
     * disable it: its `modelDirectories` service and `/model` command are the
     * data source), but `entriesOfSlot()[0]` is ours.
     *
     * The registration intentionally declares no `children`: the built-in seat
     * already declares `conversation.input.model.label`, and re-declaring it
     * would throw. We render the 1017 badge ourselves instead.
     */
    function apply(ctx) {
      ctx.effect(
        function () {
          return ctx.locale.register(NS, { zh: zh, en: en });
        },
        "dsh-plugin-reasoning-seat: dictionaries"
      );
      // Keep the palette in sync with the host theme. The reference design is dark,
      // so dark stays the fallback when the optional `theme` service is absent.
      ctx.effect(
        function () {
          if (typeof document === "undefined") return;
          var root = document.documentElement;
          function schemeOf(theme) {
            try {
              var snapshot = theme.getTheme();
              var scheme = snapshot && snapshot.active && snapshot.active.colorScheme;
              return scheme === "light" ? "light" : "dark";
            } catch (error) {
              return "dark";
            }
          }
          function setScheme(scheme) {
            root.setAttribute("data-dsh-rs-theme", scheme === "light" ? "light" : "dark");
          }
          var initial = "dark";
          try {
            if (typeof matchMedia === "function" && !matchMedia("(prefers-color-scheme: dark)").matches) initial = "light";
          } catch (error) {
            initial = "dark";
          }
          setScheme(initial);
          ctx.inject(["theme"], function (scope) {
            var sync = function () {
              setScheme(schemeOf(scope.theme));
            };
            sync();
            scope.on("theme/change", sync);
          });
          return function () {
            root.removeAttribute("data-dsh-rs-theme");
          };
        },
        "dsh-plugin-reasoning-seat: theme palette"
      );
      ctx.inject(["slots", "modelDirectories", "sessions", "remote", "remote.session"], function (scope) {
        const models = scope.modelDirectories;
        const sessions = scope.sessions;
        scope.slots.inject("conversation.input.model", function () {
          return scope.slots.register(
            {
              name: "conversation.input.model",
              locale: NS,
              priority: -100,
              inject: function (sessionId) {
                const directory = models.directoryFor(sessionId);
                const available = sessions.subagentAddress(sessionId) === undefined;
                return {
                  available: available,
                  directory: directory.store,
                  load: function () {
                    if (available) directory.load().catch(function () {});
                  },
                  select: function (selection) {
                    return available ? directory.select(selection) : Promise.resolve(undefined);
                  },
                };
              },
            },
            ReasoningSeat
          );
        });
      });
    }
    //#endregion

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  },
});
