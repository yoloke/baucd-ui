import {
  init_runtime_dom_esm_bundler,
  runtime_dom_esm_bundler_exports
} from "./chunk-LEAP7STF.js";
import "./chunk-KNISUAPR.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toCommonJS,
  init_define_DEMOBLOCK_LOCALES,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-C36HVA5E.js";

// node_modules/baucd-ui/dist/baucd-ui.umd.min.js
var require_baucd_ui_umd_min = __commonJS({
  "node_modules/baucd-ui/dist/baucd-ui.umd.min.js"(exports, module) {
    init_define_DEMOBLOCK_LOCALES();
    init_define_EXTERNAL_LINK_ICON_LOCALES();
    init_define_MZ_ZOOM_OPTIONS();
    (function(e, t) {
      typeof exports === "object" && typeof module === "object" ? module.exports = t((init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports))) : typeof define === "function" && define.amd ? define([], t) : typeof exports === "object" ? exports["baucd-ui"] = t((init_runtime_dom_esm_bundler(), __toCommonJS(runtime_dom_esm_bundler_exports))) : e["baucd-ui"] = t(e["Vue"]);
    })(typeof self !== "undefined" ? self : exports, function(e) {
      return function() {
        "use strict";
        var t = { 744: function(e2, t2) {
          t2.Z = (e3, t3) => {
            const o2 = e3.__vccOpts || e3;
            for (const [a2, l2] of t3)
              o2[a2] = l2;
            return o2;
          };
        }, 203: function(t2) {
          t2.exports = e;
        } }, o = {};
        function a(e2) {
          var l2 = o[e2];
          if (l2 !== void 0)
            return l2.exports;
          var n = o[e2] = { exports: {} };
          return t[e2](n, n.exports, a), n.exports;
        }
        !function() {
          a.d = function(e2, t2) {
            for (var o2 in t2)
              a.o(t2, o2) && !a.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
          };
        }(), function() {
          a.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          };
        }(), function() {
          a.r = function(e2) {
            typeof Symbol !== "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          };
        }(), function() {
          a.p = "";
        }();
        var l = {};
        return function() {
          if (a.r(l), a.d(l, { default: function() {
            return Pt;
          } }), typeof window !== "undefined") {
            var e2 = window.document.currentScript, t2 = e2 && e2.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
            t2 && (a.p = t2[1]);
          }
          var o2 = a(203);
          const n = ["disabled"], r = { key: 1, class: "content" };
          function i(e3, t3, a2, l2, i2, c2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("button", { class: (0, o2.normalizeClass)(["ba-button", [`ba-button-${a2.type}`, { "is-plain": a2.plain, "is-round": a2.round, "is-circle": a2.circle, "is-disabled": a2.disabled, loading: a2.loading }]]), onClick: t3[0] || (t3[0] = (...e4) => c2.handleClick && c2.handleClick(...e4)), disabled: a2.disabled }, [a2.icon || a2.loading ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: (0, o2.normalizeClass)([`ba-icon-${a2.icon}`, `ba-icon-${a2.loading}`, { "icon-rigeht": a2.right, "icon-loading": a2.loading }]) }, null, 2)) : (0, o2.createCommentVNode)("", true), e3.$slots.default ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", r, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])) : (0, o2.createCommentVNode)("", true)], 10, n);
          }
          var c = { name: "BaButton", props: { type: { type: String, default: "default" }, plain: { type: Boolean, default: false }, round: { type: Boolean, default: false }, circle: { type: Boolean, default: false }, icon: { type: String, default: "" }, disabled: { type: Boolean, default: false }, right: { type: Boolean, default: false }, loading: { type: String, default: "" } }, emits: ["click"], methods: { handleClick(e3) {
            this.$emit("click", e3);
          } } }, s = a(744);
          const d = (0, s.Z)(c, [["render", i], ["__scopeId", "data-v-5a645b42"]]);
          var u = d;
          const p = { class: "ba-button-group" };
          function m(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", p, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)]);
          }
          var f = { name: "BaButtonGroup" };
          const h = (0, s.Z)(f, [["render", m], ["__scopeId", "data-v-2ffb1de8"]]);
          var g = h;
          function v(e3, t3, a2, l2, n2, r2) {
            return a2.icon ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: (0, o2.normalizeClass)(`ba-icon-${a2.icon}`) }, null, 2)) : (0, o2.createCommentVNode)("", true);
          }
          var b = { name: "BaIcon", props: { icon: { type: String, default: "" } } };
          const k = (0, s.Z)(b, [["render", v], ["__scopeId", "data-v-9f25eada"]]);
          var y = k;
          const B = { class: "demo-icon-list" }, C = { class: "demo-svg-icon" };
          function w(e3, t3, a2, l2, n2, r2) {
            const i2 = (0, o2.resolveComponent)("ba-icon");
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", null, [(0, o2.createElementVNode)("ul", B, [((0, o2.openBlock)(true), (0, o2.createElementBlock)(o2.Fragment, null, (0, o2.renderList)(n2.iconList, (e4, t4) => ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { class: "icon-item", key: t4 }, [(0, o2.createElementVNode)("span", C, [(0, o2.createVNode)(i2, { icon: e4 }, null, 8, ["icon"]), (0, o2.createElementVNode)("span", null, (0, o2.toDisplayString)(e4), 1)])]))), 128))])]);
          }
          var V = { name: "IconList", data() {
            return { iconList: ["activity", "airplay", "alert-circle", "alert-octagon", "alert-triangle", "align-center", "align-justify", "align-left", "align-right", "anchor", "aperture", "archive", "arrow-down", "arrow-down-circle", "arrow-down-left", "arrow-down-right", "arrow-left", "arrow-left-circle", "arrow-right", "arrow-right-circle", "arrow-up", "arrow-up-circle", "arrow-up-left", "arrow-up-right", "at-sign", "award", "bar-chart", "bar-chart-2", "battery", "battery-charging", "bell", "bell-off", "bluetooth", "bold", "book", "book-open", "bookmark", "box", "briefcase", "calendar", "camera", "camera-off", "cast", "check", "check-circle", "check-square", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard", "clock", "cloud", "cloud-drizzle", "cloud-lightning", "cloud-off", "cloud-rain", "cloud-snow", "code", "codepen", "codesandbox", "coffee", "columns", "command", "compass", "copy", "corner-down-left", "corner-down-right", "corner-left-down", "corner-left-up", "corner-right-down", "corner-right-up", "corner-up-left", "corner-up-right", "cpu", "credit-card", "crop", "crosshair", "database", "delete", "disc", "dollar-sign", "download", "download-cloud", "droplet", "edit", "edit-2", "edit-3", "external-link", "eye", "eye-off", "facebook", "fast-forward", "feather", "figma", "file", "file-minus", "file-plus", "file-text", "film", "filter", "flag", "folder", "folder-minus", "folder-plus", "framer", "frown", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid", "hard-drive", "hash", "headphones", "heart", "help-circle", "hexagon", "home", "image", "inbox", "info", "instagram", "italic", "key", "layers", "layout", "life-buoy", "link", "link-2", "linkedin", "list", "loader", "lock", "log-in", "log-out", "mail", "map", "map-pin", "maximize", "maximize-2", "meh", "menu", "message-circle", "message-square", "mic", "mic-off", "minimize", "minimize-2", "minus", "minus-circle", "minus-square", "monitor", "moon", "more-horizontal", "more-vertical", "mouse-pointer", "move", "music", "navigation", "navigation-2", "octagon", "package", "paperclip", "pause", "pause-circle", "pen-tool", "percent", "phone", "phone-call", "phone-forwarded", "phone-incoming", "phone-missed", "phone-off", "phone-outgoing", "pie-chart", "play", "play-circle", "plus", "plus-circle", "plus-square", "pocket", "power", "printer", "radio", "refresh-ccw", "refresh-cw", "repeat", "rewind", "rotate-ccw", "rotate-cw", "rss", "save", "scissors", "search", "send", "server", "settings", "share", "share-2", "shield", "shield-off", "shopping-bag", "shopping-cart", "shuffle", "sidebar", "skip-back", "skip-forward", "slack", "slash", "sliders", "smartphone", "smile", "speaker", "square", "star", "stop-circle", "sun", "sunrise", "sunset", "tablet", "tag", "target", "terminal", "thermometer", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "tool", "trash", "trash-2", "trello", "trending-down", "trending-up", "triangle", "truck", "tv", "twitch", "twitter", "type", "umbrella", "underline", "unlock", "upload", "upload-cloud", "user", "user-check", "user-minus", "user-plus", "user-x", "users", "video", "video-off", "voicemail", "volume", "volume-1", "volume-2", "volume-x", "watch", "wifi", "wifi-off", "wind", "x", "x-circle", "x-octagon", "x-square", "youtube", "zap", "zap-off", "zoom-in", "zoom-out"] };
          } };
          const N = (0, s.Z)(V, [["render", w]]);
          var S = N;
          const x = (e3) => ((0, o2.pushScopeId)("data-v-38cb78e3"), e3 = e3(), (0, o2.popScopeId)(), e3), E = { class: "ba-dialog_header" }, I = { class: "ba-dialog_title" }, _ = x(() => (0, o2.createElementVNode)("i", { class: "ba-icon-close" }, null, -1)), $ = [_], D = { class: "ba-dialog_body" }, z = x(() => (0, o2.createElementVNode)("span", null, "\u5185\u5BB9", -1)), P = { class: "ba-dialog_footer" };
          function L(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createBlock)(o2.Transition, { name: "dialog-fade" }, { default: (0, o2.withCtx)(() => [(0, o2.withDirectives)((0, o2.createElementVNode)("div", { class: "ba-dialog_wrapper", onClick: t3[1] || (t3[1] = (0, o2.withModifiers)((...e4) => r2.handleClose && r2.handleClose(...e4), ["self"])) }, [(0, o2.createElementVNode)("div", { class: "ba-dialog", style: (0, o2.normalizeStyle)({ width: a2.width, marginTop: a2.top }) }, [(0, o2.createElementVNode)("div", E, [(0, o2.renderSlot)(e3.$slots, "title", {}, () => [(0, o2.createElementVNode)("span", I, (0, o2.toDisplayString)(a2.title), 1)], true), (0, o2.createElementVNode)("button", { class: "ba-dialog_headerbtn", onClick: t3[0] || (t3[0] = (...e4) => r2.handleClose && r2.handleClose(...e4)) }, $)]), (0, o2.createElementVNode)("div", D, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [z], true)]), (0, o2.createElementVNode)("div", P, [e3.$slots.footer ? (0, o2.renderSlot)(e3.$slots, "footer", { key: 0 }, void 0, true) : (0, o2.createCommentVNode)("", true)])], 4)], 512), [[o2.vShow, a2.modelValue]])]), _: 3 });
          }
          var H = { name: "BaDialog", props: { title: { type: String, default: "\u6807\u9898" }, width: { type: String, default: "30%" }, top: { type: String, default: "15vh" }, modelValue: { type: Boolean, default: false } }, methods: { handleClose() {
            this.$emit("update:modelValue", false);
          } } };
          const Z = (0, s.Z)(H, [["render", L], ["__scopeId", "data-v-38cb78e3"]]);
          var G = Z;
          const T = ["placeholder", "type", "name", "value", "disabled"], M = { key: 0, class: "ba-input_suffix" };
          function R(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: (0, o2.normalizeClass)(["ba-input", { "ba-input_suffix": r2.showSuffix }]) }, [(0, o2.createElementVNode)("input", { class: (0, o2.normalizeClass)(["ba-input_inner", { "is-disabled": a2.disabled }]), placeholder: a2.placeholder, type: a2.showPassword ? n2.passwordVisible ? "text" : "password" : a2.type, name: a2.name, value: a2.modelValue, onInput: t3[0] || (t3[0] = (...e4) => r2.handleInput && r2.handleInput(...e4)), disabled: a2.disabled }, null, 42, T), r2.showSuffix ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", M, [a2.clearable && a2.modelValue ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: "ba-icon-x-circle", onClick: t3[1] || (t3[1] = (...e4) => r2.clear && r2.clear(...e4)) })) : (0, o2.createCommentVNode)("", true), a2.showPassword && a2.type == "password" ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 1, class: (0, o2.normalizeClass)(n2.passwordVisible ? "ba-icon-eye" : "ba-icon-eye-off"), onClick: t3[2] || (t3[2] = (...e4) => r2.handlePassword && r2.handlePassword(...e4)) }, null, 2)) : (0, o2.createCommentVNode)("", true)])) : (0, o2.createCommentVNode)("", true)], 2);
          }
          var j = { name: "BaInput", components: {}, props: { placeholder: { type: String, default: "\u8BF7\u8F93\u5165\u5185\u5BB9" }, type: { type: String, default: "text" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false }, modelValue: { type: String, default: "\u8BF7\u8F93\u5165\u5185\u5BB9" }, clearable: { type: Boolean, default: false }, showPassword: { type: Boolean, default: false } }, data() {
            return { passwordVisible: false };
          }, methods: { handleInput(e3) {
            this.$emit("update:modelValue", e3.target.value);
          }, clear() {
            this.$emit("update:modelValue", "");
          }, handlePassword() {
            this.passwordVisible = !this.passwordVisible;
          } }, computed: { showSuffix() {
            return this.clearable || this.showPassword;
          } } };
          const q = (0, s.Z)(j, [["render", R], ["__scopeId", "data-v-5787545e"]]);
          var A = q;
          const F = (e3) => ((0, o2.pushScopeId)("data-v-f304458a"), e3 = e3(), (0, o2.popScopeId)(), e3), O = { class: "ba-radio_input" }, U = F(() => (0, o2.createElementVNode)("span", { class: "ba-radio_inner" }, null, -1)), Y = ["value", "name", "disabled"], W = { class: "ba-radio_label" };
          function J(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("label", { class: (0, o2.normalizeClass)(["ba-radio", { "is-checked": a2.label == r2.model, "is-disabled": a2.disabled }]) }, [(0, o2.createElementVNode)("span", O, [U, (0, o2.withDirectives)((0, o2.createElementVNode)("input", { type: "radio", class: "ba-radio_original", value: a2.label, name: a2.name, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.model = e4), disabled: a2.disabled == 1 && "disabled" }, null, 8, Y), [[o2.vModelRadio, r2.model]])]), (0, o2.createElementVNode)("span", W, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [(0, o2.createTextVNode)((0, o2.toDisplayString)(a2.label), 1)], true)])], 2);
          }
          var K = { name: "BaRadio", props: { label: { type: [String, Number, Boolean], default: "" }, modelValue: { type: [String, Number, Boolean], default: "" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, methods: {}, computed: { model: { get() {
            return this.isGroup ? this.RadioGroup.modelValue : this.modelValue;
          }, set(e3) {
            this.isGroup ? this.RadioGroup.$emit("update:modelValue", e3) : this.$emit("update:modelValue", e3);
          } }, isGroup() {
            return !!this.RadioGroup;
          } }, inject: { RadioGroup: { default: "" } } };
          const Q = (0, s.Z)(K, [["render", J], ["__scopeId", "data-v-f304458a"]]);
          var X = Q;
          const ee = { class: "ba-radio-group" };
          function te(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", ee, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var oe = { name: "BaRadioGroup", provide() {
            return { RadioGroup: this };
          }, props: { modelValue: null } };
          const ae = (0, s.Z)(oe, [["render", te]]);
          var le = ae;
          const ne = (e3) => ((0, o2.pushScopeId)("data-v-fd6b6142"), e3 = e3(), (0, o2.popScopeId)(), e3), re = { class: "ba-switch_core", ref: "core" }, ie = ne(() => (0, o2.createElementVNode)("span", { class: "ba-switch_button" }, null, -1)), ce = [ie], se = ["name"];
          function de(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: (0, o2.normalizeClass)(["ba-switch", { "is-checked": a2.modelValue, "is-disabled": a2.disabled }]), onClick: t3[0] || (t3[0] = (...e4) => r2.handleClick && r2.handleClick(...e4)) }, [(0, o2.createElementVNode)("span", re, ce, 512), (0, o2.createElementVNode)("input", { type: "checkbox", class: "ba-switch_input", name: a2.name, ref: "input" }, null, 8, se)], 2);
          }
          var ue = { name: "BaSwitch", props: { modelValue: { type: Boolean, default: false }, activeColor: { type: String, default: "" }, inactiveColor: { type: String, default: "" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, methods: { handleClick() {
            this.$emit("update:modelValue", !this.modelValue);
          } }, mounted() {
            if (this.activeColor || this.inactiveColor) {
              var e3 = this.modelValue ? this.activeColor : this.inactiveColor;
              this.$refs.core.style.borderColor = e3, this.$refs.core.style.backgroundColor = e3;
            }
            this.$refs.input.checked = this.modelValue;
          }, watch: { modelValue(e3) {
            if (this.activeColor || this.inactiveColor) {
              var t3 = e3 ? this.activeColor : this.inactiveColor;
              this.$refs.core.style.borderColor = t3, this.$refs.core.style.backgroundColor = t3;
            }
            this.$refs.input.checked = this.modelValue;
          } } };
          const pe = (0, s.Z)(ue, [["render", de], ["__scopeId", "data-v-fd6b6142"]]);
          var me = pe;
          const fe = (e3) => ((0, o2.pushScopeId)("data-v-b38e2816"), e3 = e3(), (0, o2.popScopeId)(), e3), he = { class: "ba-checkbox_input" }, ge = fe(() => (0, o2.createElementVNode)("span", { class: "ba-checkbox_inner" }, null, -1)), ve = ["name", "value", "disabled"], be = { class: "ba-checkbox_label" };
          function ke(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("label", { class: (0, o2.normalizeClass)(["ba-checkbox", { "is-checked": r2.isChecked, "is-disabled": a2.disabled }]) }, [(0, o2.createElementVNode)("span", he, [ge, (0, o2.withDirectives)((0, o2.createElementVNode)("input", { type: "checkbox", class: "ba-checkbox_original", name: a2.name, value: a2.label, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.model = e4), disabled: a2.disabled == 1 && "disabled" }, null, 8, ve), [[o2.vModelCheckbox, r2.model]])]), (0, o2.createElementVNode)("span", be, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [(0, o2.createTextVNode)((0, o2.toDisplayString)(a2.label), 1)], true)])], 2);
          }
          var ye = { name: "BaCheckbox", inject: { CheckboxGroup: { default: "" } }, props: { modelValue: { type: Boolean, default: false }, label: { type: String, default: "" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, computed: { model: { get() {
            return this.isGroup ? this.CheckboxGroup.modelValue : this.modelValue;
          }, set(e3) {
            this.isGroup ? this.CheckboxGroup.$emit("update:modelValue", e3) : this.$emit("update:modelValue", e3);
          } }, isGroup() {
            return !!this.CheckboxGroup;
          }, isChecked() {
            return this.isGroup ? this.model.includes(this.label) : this.model;
          } } };
          const Be = (0, s.Z)(ye, [["render", ke], ["__scopeId", "data-v-b38e2816"]]);
          var Ce = Be;
          const we = { class: "ba-checkbox-group" };
          function Ve(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", we, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var Ne = { name: "BaCheckboxGroup", provide() {
            return { CheckboxGroup: this };
          }, props: { modelValue: { type: Array } } };
          const Se = (0, s.Z)(Ne, [["render", Ve]]);
          var xe = Se;
          const Ee = { class: "ba-form" };
          function Ie(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Ee, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var _e = { name: "BaForm", provide() {
            return { Form: this };
          }, props: { model: { type: Object, required: true }, labelWidth: { type: String, default: "80px" } } };
          const $e = (0, s.Z)(_e, [["render", Ie]]);
          var De = $e;
          const ze = { class: "ba-form-item" }, Pe = { class: "ba-form-item_content" };
          function Le(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", ze, [(0, o2.createElementVNode)("label", { style: (0, o2.normalizeStyle)(r2.labelStyle), class: "ba-form-item_label" }, (0, o2.toDisplayString)(a2.label), 5), (0, o2.createElementVNode)("div", Pe, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])]);
          }
          var He = { name: "BaFormItem", props: { label: { type: String, default: "" } }, inject: { Form: { default: "" } }, computed: { labelStyle() {
            return { width: this.Form.labelWidth };
          } } };
          const Ze = (0, s.Z)(He, [["render", Le], ["__scopeId", "data-v-16c9fc31"]]);
          var Ge = Ze;
          const Te = (e3) => ((0, o2.pushScopeId)("data-v-036765b1"), e3 = e3(), (0, o2.popScopeId)(), e3), Me = { class: "ba-pagination" }, Re = Te(() => (0, o2.createElementVNode)("i", { class: "dotted1 ba-icon-more-horizontal" }, null, -1)), je = [Re], qe = ["onClick"], Ae = Te(() => (0, o2.createElementVNode)("i", { class: "dotted2 ba-icon-more-horizontal" }, null, -1)), Fe = [Ae];
          function Oe(e3, t3, a2, l2, n2, r2) {
            const i2 = (0, o2.resolveComponent)("ba-button");
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Me, [(0, o2.createVNode)(i2, { class: (0, o2.normalizeClass)(["ba-button", a2.pageNo == 1 ? "disabled" : ""]), onClick: t3[0] || (t3[0] = (e4) => r2.getPageNo(a2.pageNo - 1)), icon: "chevron-left" }, null, 8, ["class"]), (0, o2.createElementVNode)("ul", null, [r2.startAndEnd.start > 1 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 0, onClick: t3[1] || (t3[1] = (t4) => e3.$emit("getPageNo", 1)) }, "1")) : (0, o2.createCommentVNode)("", true), r2.startAndEnd.start > 2 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 1, onClick: t3[2] || (t3[2] = (t4) => e3.$emit("getPageNo", a2.pageNo - r2.pageDotted)) }, je)) : (0, o2.createCommentVNode)("", true), ((0, o2.openBlock)(true), (0, o2.createElementBlock)(o2.Fragment, null, (0, o2.renderList)(r2.startAndEnd.end, (e4) => (0, o2.withDirectives)(((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: e4, class: (0, o2.normalizeClass)({ active: a2.pageNo == e4 }), onClick: (t4) => r2.getPageNo(e4) }, (0, o2.toDisplayString)(e4), 11, qe)), [[o2.vShow, e4 >= r2.startAndEnd.start]])), 128)), r2.startAndEnd.end < r2.totalPage - 2 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 2, onClick: t3[3] || (t3[3] = (t4) => e3.$emit("getPageNo", a2.pageNo + r2.pageDotted)) }, Fe)) : (0, o2.createCommentVNode)("", true), r2.startAndEnd.end < r2.totalPage ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 3, onClick: t3[4] || (t3[4] = (e4) => r2.getPageNo(r2.totalPage)) }, (0, o2.toDisplayString)(r2.totalPage), 1)) : (0, o2.createCommentVNode)("", true)]), (0, o2.createVNode)(i2, { class: (0, o2.normalizeClass)(["ba-button", a2.pageNo == r2.totalPage ? "disabled" : ""]), icon: "chevron-right", onClick: t3[5] || (t3[5] = (e4) => r2.getPageNo(a2.pageNo + 1)) }, null, 8, ["class"])]);
          }
          var Ue = { name: "BaPagination", props: { pageNo: { type: Number, default: 1 }, pageSize: { type: Number, default: 10 }, total: { type: Number, default: 100 }, continues: { type: Number, default: 5 } }, computed: { totalPage() {
            return Math.ceil(this.total / this.pageSize);
          }, startAndEnd() {
            let e3 = 0, t3 = 0;
            const { totalPage: o3, continues: a2, pageNo: l2 } = this;
            return o3 < a2 ? (e3 = 1, t3 = o3) : (e3 = l2 - parseInt(a2 / 2), t3 = l2 + parseInt(a2 / 2), e3 < 1 && (e3 = 1, t3 = a2), t3 > o3 && (t3 = o3, e3 = o3 - a2 + 1)), t3 = parseInt(t3), e3 = parseInt(e3), { start: e3, end: t3 };
          }, pageDotted() {
            return parseInt(this.continues / 2 + 1);
          } }, methods: { getPageNo(e3) {
            this.$emit("getPageNo", e3);
          } } };
          const Ye = (0, s.Z)(Ue, [["render", Oe], ["__scopeId", "data-v-036765b1"]]);
          var We = Ye;
          const Je = { class: "inner" };
          function Ke(e3, t3, a2, l2, n2, r2) {
            const i2 = (0, o2.resolveComponent)("CarDot"), c2 = (0, o2.resolveComponent)("CarDirector");
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: "carousel", onMouseenter: t3[0] || (t3[0] = (...e4) => l2.mouseEnter && l2.mouseEnter(...e4)), onMouseleave: t3[1] || (t3[1] = (...e4) => l2.mouseLeave && l2.mouseLeave(...e4)) }, [(0, o2.createElementVNode)("div", Je, [(0, o2.createVNode)(i2, { hasDot: a2.hasDot, itemLen: e3.itemLen, currentIndex: e3.currentIndex, dotBgColor: a2.dotBgColor, onDotClick: l2.dotClick, trigger: a2.trigger }, null, 8, ["hasDot", "itemLen", "currentIndex", "dotBgColor", "onDotClick", "trigger"]), a2.hasDirector ? ((0, o2.openBlock)(), (0, o2.createBlock)(c2, { key: 0, dir: "prev", onDirClick: l2.dirClick }, null, 8, ["onDirClick"])) : (0, o2.createCommentVNode)("", true), a2.hasDirector ? ((0, o2.openBlock)(), (0, o2.createBlock)(c2, { key: 1, dir: "next", onDirClick: l2.dirClick }, null, 8, ["onDirClick"])) : (0, o2.createCommentVNode)("", true), (0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])], 32);
          }
          const Qe = { key: 0, class: "dot-wrapper" }, Xe = { class: "dot-item" }, et = ["onClick", "onMouseenter"];
          function tt(e3, t3, a2, l2, n2, r2) {
            return a2.hasDot ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("div", Qe, [(0, o2.createElementVNode)("ul", Xe, [((0, o2.openBlock)(true), (0, o2.createElementBlock)(o2.Fragment, null, (0, o2.renderList)(a2.itemLen, (e4) => ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: e4, class: "dot-lk", onClick: (t4) => l2.dotClick(e4 - 1), onMouseenter: (t4) => l2.dotHover(e4 - 1) }, [(0, o2.createElementVNode)("a", { style: (0, o2.normalizeStyle)({ backgroundColor: e4 - 1 === a2.currentIndex ? a2.dotBgColor : "#b5b7ba" }) }, null, 4)], 40, et))), 128))])])) : (0, o2.createCommentVNode)("", true);
          }
          var ot = { name: "CarDot", props: { itemLen: Number, currentIndex: Number, hasDot: { type: Boolean, default: true }, dotBgColor: { type: String, default: "#fff" }, trigger: { type: String, default: "hover" } }, setup(e3, t3) {
            const o3 = (o4) => {
              console.log(e3.trigger), e3.trigger == "click" && t3.emit("dotClick", o4);
            }, a2 = (o4) => {
              e3.trigger == "hover" && t3.emit("dotClick", o4);
            };
            return { dotClick: o3, dotHover: a2 };
          } };
          const at = (0, s.Z)(ot, [["render", tt], ["__scopeId", "data-v-9ca2fe16"]]);
          var lt = at;
          function nt(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createBlock)(o2.Transition, null, { default: (0, o2.withCtx)(() => [a2.dir === "next" ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("div", { key: 0, class: "director dir-next ba-icon-chevron-right", onClick: t3[0] || (t3[0] = (e4) => l2.dirClick(a2.dir)) })) : a2.dir === "prev" ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("div", { key: 1, class: "director dir-prev ba-icon-chevron-left", onClick: t3[1] || (t3[1] = (e4) => l2.dirClick(a2.dir)) })) : (0, o2.createCommentVNode)("", true)]), _: 1 });
          }
          var rt = { name: "Director", props: { dir: String }, setup(e3, t3) {
            const o3 = (e4) => {
              console.log(e4), t3.emit("dirClick", e4);
            };
            return { dirClick: o3 };
          } };
          const it = (0, s.Z)(rt, [["render", nt], ["__scopeId", "data-v-c7efd51a"]]);
          var ct = it, st = { name: "BaCarousel", components: { CarDot: lt, CarDirector: ct }, props: { autoplay: { type: Boolean, default: true }, duration: { type: Number, default: 3e3 }, initial: { type: Number, default: 0 }, hasDot: { type: Boolean, default: true }, hasDirector: { type: Boolean, default: true }, dotBgColor: String, trigger: { type: String, default: "hover" } }, setup(e3) {
            const t3 = (0, o2.getCurrentInstance)(), a2 = (0, o2.reactive)({ currentIndex: e3.initial, itemLen: 0 });
            let l2 = null;
            const n2 = () => {
              e3.autoplay && (l2 = setInterval(() => {
                r2("next");
              }, e3.duration));
            }, r2 = (e4) => {
              switch (e4) {
                case "next":
                  a2.currentIndex += 1, a2.currentIndex === a2.itemLen && (a2.currentIndex = 0);
                  break;
                case "prev":
                  a2.currentIndex -= 1, a2.currentIndex === -1 && (a2.currentIndex = a2.itemLen - 1);
                  break;
                default:
                  break;
              }
            }, i2 = (e4) => {
              a2.currentIndex = e4;
            }, c2 = (e4) => {
              r2(e4);
            }, s2 = () => {
              u2();
            }, d2 = () => {
              n2();
            };
            function u2() {
              clearInterval(l2), l2 = null;
            }
            return (0, o2.onMounted)(() => {
              a2.itemLen = t3.slots.default()[0].children.length, n2();
            }), (0, o2.onBeforeUnmount)(() => {
              u2();
            }), __spreadProps(__spreadValues({}, (0, o2.toRefs)(a2)), { dotClick: i2, dirClick: c2, mouseEnter: s2, mouseLeave: d2 });
          } };
          const dt = (0, s.Z)(st, [["render", Ke], ["__scopeId", "data-v-62f8df52"]]);
          var ut = dt;
          const pt = { key: 0, class: "ba-car-item" };
          function mt(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createBlock)(o2.Transition, null, { default: (0, o2.withCtx)(() => [e3.selfIndex === e3.currentIndex ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("div", pt, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])) : (0, o2.createCommentVNode)("", true)]), _: 3 });
          }
          var ft = { name: "BaCarItem", setup() {
            const e3 = (0, o2.getCurrentInstance)(), t3 = (0, o2.reactive)({ selfIndex: e3.vnode.key, currentIndex: e3.parent.ctx.currentIndex });
            return (0, o2.watch)(() => e3.parent.ctx.currentIndex, (e4) => {
              t3.currentIndex = e4;
            }), __spreadValues({}, (0, o2.toRefs)(t3));
          } };
          const ht = (0, s.Z)(ft, [["render", mt], ["__scopeId", "data-v-8b2859e4"]]);
          var gt = ht;
          const vt = { class: "selector" };
          function bt(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", vt);
          }
          var kt = { name: "BaSelector" };
          const yt = (0, s.Z)(kt, [["render", bt], ["__scopeId", "data-v-7d8ef644"]]);
          var Bt = yt;
          const Ct = { class: "ba-message" };
          function wt(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createBlock)(o2.Transition, { name: "slideY-fade", onAfterLeave: l2.afterLeave, appear: "" }, { default: (0, o2.withCtx)(() => [(0, o2.withDirectives)((0, o2.createElementVNode)("div", Ct, [(0, o2.createElementVNode)("span", null, [(0, o2.createElementVNode)("i", { class: (0, o2.normalizeClass)(l2.icon[a2.type]) }, null, 2), (0, o2.createTextVNode)((0, o2.toDisplayString)(a2.content), 1)])], 512), [[o2.vShow, l2.isShow]])]), _: 1 }, 8, ["onAfterLeave"]);
          }
          var Vt = { name: "BaMessage", props: { content: [String, Number, Boolean], type: String, duration: { type: Number, default: 1.5 } }, setup(e3) {
            const { duration: t3 } = e3, a2 = (0, o2.getCurrentInstance)(), l2 = (0, o2.ref)(true);
            function n2() {
              l2.value = false;
            }
            t3 > 0 && setTimeout(n2, 1e3 * t3);
            const r2 = () => {
              var _a;
              (_a = a2.vnode.el.parentElement) == null ? void 0 : _a.removeChild(a2.vnode.el);
            }, i2 = { info: "x-icon-info info", error: "x-icon-x-circle error", success: "x-icon-check-circle success", warning: "x-icon-alert-triangle warning", loading: "x-icon-loader loading" };
            return { icon: i2, isShow: l2, close: n2, afterLeave: r2 };
          } };
          const Nt = (0, s.Z)(Vt, [["render", wt], ["__scopeId", "data-v-2e3c098d"]]);
          var St = Nt;
          function xt(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: "ba-scroll", style: (0, o2.normalizeStyle)({ height: `${l2.viewHeight}px` }), onMouseenter: t3[2] || (t3[2] = (...e4) => l2.mouseover && l2.mouseover(...e4)), onMouseleave: t3[3] || (t3[3] = (...e4) => l2.mouseout && l2.mouseout(...e4)) }, [(0, o2.createElementVNode)("div", { class: "ba-scroll-content", style: (0, o2.normalizeStyle)({ paddingRight: `${a2.size}px` }), onScroll: t3[0] || (t3[0] = (...e4) => l2.viewScroll && l2.viewScroll(...e4)) }, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)], 36), (0, o2.createVNode)(o2.Transition, { name: "fade" }, { default: (0, o2.withCtx)(() => [(0, o2.withDirectives)((0, o2.createElementVNode)("div", { class: "ba-scroll-bar", style: (0, o2.normalizeStyle)({ width: `${a2.size}px` }), onMousedown: t3[1] || (t3[1] = (e4) => l2.thumbDrag(e4)) }, [(0, o2.createElementVNode)("div", { class: "ba-scroll-thumb", ref: "thumb", style: (0, o2.normalizeStyle)({ height: `${l2.BarHeight}px`, top: `${l2.BarTop}px`, borderRadius: `${a2.size}px` }) }, null, 4)], 36), [[o2.vShow, !a2.alwaysVisible || l2.isShow]])]), _: 1 })], 36);
          }
          var Et = { name: "BaScroll", props: { height: Number, to: Number, alwaysVisible: { type: Boolean, default: true }, size: { type: Number, default: 6 } }, emits: ["onScroll", "update:to"], setup(e3, { emit: t3 }) {
            const a2 = (0, o2.getCurrentInstance)(), l2 = (0, o2.ref)(30), n2 = (0, o2.ref)(0), r2 = (0, o2.ref)(null), { to: i2, height: c2 } = (0, o2.toRefs)(e3), s2 = (0, o2.ref)(0), d2 = (0, o2.ref)(false), u2 = () => {
              const e4 = a2.vnode.el, o3 = e4.children[0], l3 = o3.scrollTop / (o3.scrollHeight - o3.offsetHeight);
              n2.value = l3 * (o3.offsetHeight - r2.value.offsetHeight), t3("onScroll", l3), t3("update:to", o3.scrollTop);
            };
            let p2;
            i2 && (0, o2.watch)(i2, (e4) => {
              const t4 = a2.vnode.el, o3 = t4.children[0];
              o3.scrollTop = e4;
            }), c2 && (0, o2.watchEffect)(() => {
              s2.value = c2.value;
            }), (0, o2.onMounted)(() => {
              const e4 = a2.vnode.el;
              if (i2) {
                const t4 = e4.children[0];
                t4.scrollTop = i2.value;
              }
              c2 || (s2.value = e4.parentNode.offsetHeight, window.addEventListener("resize", () => {
                s2.value = e4.parentNode.offsetHeight;
              })), p2 = new MutationObserver(() => {
                l2.value = e4.offsetHeight * e4.offsetHeight / e4.children[0].scrollHeight, l2.value <= 30 && (l2.value = 30), e4.children[0].scrollHeight <= e4.offsetHeight && (l2.value = 0);
              }), p2.observe(e4, { childList: true, attributes: true, characterData: true, subtree: true });
            }), (0, o2.onUnmounted)(() => {
              p2.disconnect();
            });
            let m2 = false, f2 = false;
            const h2 = () => {
              f2 = true, d2.value = true;
            }, g2 = () => {
              f2 = false, m2 || (d2.value = false);
            }, v2 = (e4) => {
              e4.preventDefault();
              const t4 = a2.vnode.el, o3 = t4.children[0], l3 = e4.clientY - n2.value, i3 = e4.target;
              if (i3.className === "ba-scroll-bar") {
                const t5 = e4.clientY - i3.getBoundingClientRect().top;
                o3.scrollTop = o3.scrollHeight * (t5 / i3.offsetHeight) - i3.offsetHeight / 2;
              } else {
                const e5 = (e6) => {
                  m2 = true;
                  const t5 = (e6.clientY - l3) / (o3.offsetHeight - r2.value.offsetHeight), a3 = (o3.scrollHeight - o3.offsetHeight) * t5;
                  o3.scrollTop = a3;
                };
                document.addEventListener("mousemove", e5), document.addEventListener("mouseup", () => {
                  m2 = false, f2 || (d2.value = false), document.removeEventListener("mousemove", e5);
                });
              }
            };
            return { BarHeight: l2, BarTop: n2, viewScroll: u2, thumb: r2, viewHeight: s2, thumbDrag: v2, isShow: d2, mouseover: h2, mouseout: g2 };
          } };
          const It = (0, s.Z)(Et, [["render", xt], ["__scopeId", "data-v-c37d90f2"]]);
          var _t = It;
          const $t = [u, g, y, S, G, A, Ce, X, le, me, xe, De, Ge, We, Bt, ut, gt, St, _t], Dt = function(e3) {
            $t.forEach((t3) => {
              e3.component(t3.name, t3);
            });
          };
          typeof window !== "undefined" && window.Vue && Dt(window.Vue);
          var zt = { install: Dt }, Pt = zt;
        }(), l;
      }();
    });
  }
});

// dep:baucd-ui
init_define_DEMOBLOCK_LOCALES();
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var baucd_ui_default = require_baucd_ui_umd_min();
export {
  baucd_ui_default as default
};
//# sourceMappingURL=baucd-ui.js.map
