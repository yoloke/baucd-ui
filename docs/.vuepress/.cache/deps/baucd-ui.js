import {
  init_runtime_dom_esm_bundler,
  runtime_dom_esm_bundler_exports
} from "./chunk-PVB3FAIT.js";
import "./chunk-H6X6R6QU.js";
import {
  __commonJS,
  __toCommonJS,
  init_define_DEMOBLOCK_LOCALES,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-2LB3RAV7.js";

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
            return lt;
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
          const d = (0, s.Z)(c, [["render", i], ["__scopeId", "data-v-b9f7f70a"]]);
          var u = d;
          const p = { class: "ba-button-group" };
          function m(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", p, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)]);
          }
          var h = { name: "BaButtonGroup" };
          const f = (0, s.Z)(h, [["render", m], ["__scopeId", "data-v-d235c932"]]);
          var b = f;
          function g(e3, t3, a2, l2, n2, r2) {
            return a2.icon ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: (0, o2.normalizeClass)(`ba-icon-${a2.icon}`) }, null, 2)) : (0, o2.createCommentVNode)("", true);
          }
          var v = { name: "BaIcon", props: { icon: { type: String, default: "" } } };
          const k = (0, s.Z)(v, [["render", g], ["__scopeId", "data-v-9f25eada"]]);
          var y = k;
          const w = { class: "demo-icon-list" }, B = { class: "demo-svg-icon" };
          function V(e3, t3, a2, l2, n2, r2) {
            const i2 = (0, o2.resolveComponent)("ba-icon");
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", null, [(0, o2.createElementVNode)("ul", w, [((0, o2.openBlock)(true), (0, o2.createElementBlock)(o2.Fragment, null, (0, o2.renderList)(n2.iconList, (e4, t4) => ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { class: "icon-item", key: t4 }, [(0, o2.createElementVNode)("span", B, [(0, o2.createVNode)(i2, { icon: e4 }, null, 8, ["icon"]), (0, o2.createElementVNode)("span", null, (0, o2.toDisplayString)(e4), 1)])]))), 128))])]);
          }
          var C = { name: "IconList", data() {
            return { iconList: ["activity", "airplay", "alert-circle", "alert-octagon", "alert-triangle", "align-center", "align-justify", "align-left", "align-right", "anchor", "aperture", "archive", "arrow-down", "arrow-down-circle", "arrow-down-left", "arrow-down-right", "arrow-left", "arrow-left-circle", "arrow-right", "arrow-right-circle", "arrow-up", "arrow-up-circle", "arrow-up-left", "arrow-up-right", "at-sign", "award", "bar-chart", "bar-chart-2", "battery", "battery-charging", "bell", "bell-off", "bluetooth", "bold", "book", "book-open", "bookmark", "box", "briefcase", "calendar", "camera", "camera-off", "cast", "check", "check-circle", "check-square", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard", "clock", "cloud", "cloud-drizzle", "cloud-lightning", "cloud-off", "cloud-rain", "cloud-snow", "code", "codepen", "codesandbox", "coffee", "columns", "command", "compass", "copy", "corner-down-left", "corner-down-right", "corner-left-down", "corner-left-up", "corner-right-down", "corner-right-up", "corner-up-left", "corner-up-right", "cpu", "credit-card", "crop", "crosshair", "database", "delete", "disc", "dollar-sign", "download", "download-cloud", "droplet", "edit", "edit-2", "edit-3", "external-link", "eye", "eye-off", "facebook", "fast-forward", "feather", "figma", "file", "file-minus", "file-plus", "file-text", "film", "filter", "flag", "folder", "folder-minus", "folder-plus", "framer", "frown", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid", "hard-drive", "hash", "headphones", "heart", "help-circle", "hexagon", "home", "image", "inbox", "info", "instagram", "italic", "key", "layers", "layout", "life-buoy", "link", "link-2", "linkedin", "list", "loader", "lock", "log-in", "log-out", "mail", "map", "map-pin", "maximize", "maximize-2", "meh", "menu", "message-circle", "message-square", "mic", "mic-off", "minimize", "minimize-2", "minus", "minus-circle", "minus-square", "monitor", "moon", "more-horizontal", "more-vertical", "mouse-pointer", "move", "music", "navigation", "navigation-2", "octagon", "package", "paperclip", "pause", "pause-circle", "pen-tool", "percent", "phone", "phone-call", "phone-forwarded", "phone-incoming", "phone-missed", "phone-off", "phone-outgoing", "pie-chart", "play", "play-circle", "plus", "plus-circle", "plus-square", "pocket", "power", "printer", "radio", "refresh-ccw", "refresh-cw", "repeat", "rewind", "rotate-ccw", "rotate-cw", "rss", "save", "scissors", "search", "send", "server", "settings", "share", "share-2", "shield", "shield-off", "shopping-bag", "shopping-cart", "shuffle", "sidebar", "skip-back", "skip-forward", "slack", "slash", "sliders", "smartphone", "smile", "speaker", "square", "star", "stop-circle", "sun", "sunrise", "sunset", "tablet", "tag", "target", "terminal", "thermometer", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "tool", "trash", "trash-2", "trello", "trending-down", "trending-up", "triangle", "truck", "tv", "twitch", "twitter", "type", "umbrella", "underline", "unlock", "upload", "upload-cloud", "user", "user-check", "user-minus", "user-plus", "user-x", "users", "video", "video-off", "voicemail", "volume", "volume-1", "volume-2", "volume-x", "watch", "wifi", "wifi-off", "wind", "x", "x-circle", "x-octagon", "x-square", "youtube", "zap", "zap-off", "zoom-in", "zoom-out"] };
          } };
          const N = (0, s.Z)(C, [["render", V]]);
          var S = N;
          const E = (e3) => ((0, o2.pushScopeId)("data-v-38cb78e3"), e3 = e3(), (0, o2.popScopeId)(), e3), x = { class: "ba-dialog_header" }, _ = { class: "ba-dialog_title" }, $ = E(() => (0, o2.createElementVNode)("i", { class: "ba-icon-close" }, null, -1)), I = [$], z = { class: "ba-dialog_body" }, P = E(() => (0, o2.createElementVNode)("span", null, "\u5185\u5BB9", -1)), G = { class: "ba-dialog_footer" };
          function Z(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createBlock)(o2.Transition, { name: "dialog-fade" }, { default: (0, o2.withCtx)(() => [(0, o2.withDirectives)((0, o2.createElementVNode)("div", { class: "ba-dialog_wrapper", onClick: t3[1] || (t3[1] = (0, o2.withModifiers)((...e4) => r2.handleClose && r2.handleClose(...e4), ["self"])) }, [(0, o2.createElementVNode)("div", { class: "ba-dialog", style: (0, o2.normalizeStyle)({ width: a2.width, marginTop: a2.top }) }, [(0, o2.createElementVNode)("div", x, [(0, o2.renderSlot)(e3.$slots, "title", {}, () => [(0, o2.createElementVNode)("span", _, (0, o2.toDisplayString)(a2.title), 1)], true), (0, o2.createElementVNode)("button", { class: "ba-dialog_headerbtn", onClick: t3[0] || (t3[0] = (...e4) => r2.handleClose && r2.handleClose(...e4)) }, I)]), (0, o2.createElementVNode)("div", z, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [P], true)]), (0, o2.createElementVNode)("div", G, [e3.$slots.footer ? (0, o2.renderSlot)(e3.$slots, "footer", { key: 0 }, void 0, true) : (0, o2.createCommentVNode)("", true)])], 4)], 512), [[o2.vShow, a2.modelValue]])]), _: 3 });
          }
          var D = { name: "BaDialog", props: { title: { type: String, default: "\u6807\u9898" }, width: { type: String, default: "30%" }, top: { type: String, default: "15vh" }, modelValue: { type: Boolean, default: false } }, methods: { handleClose() {
            this.$emit("update:modelValue", false);
          } } };
          const j = (0, s.Z)(D, [["render", Z], ["__scopeId", "data-v-38cb78e3"]]);
          var q = j;
          const A = ["placeholder", "type", "name", "value", "disabled"], R = { key: 0, class: "ba-input_suffix" };
          function F(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: (0, o2.normalizeClass)(["ba-input", { "ba-input_suffix": r2.showSuffix }]) }, [(0, o2.createElementVNode)("input", { class: (0, o2.normalizeClass)(["ba-input_inner", { "is-disabled": a2.disabled }]), placeholder: a2.placeholder, type: a2.showPassword ? n2.passwordVisible ? "text" : "password" : a2.type, name: a2.name, value: a2.modelValue, onInput: t3[0] || (t3[0] = (...e4) => r2.handleInput && r2.handleInput(...e4)), disabled: a2.disabled }, null, 42, A), r2.showSuffix ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", R, [a2.clearable && a2.modelValue ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: "ba-icon-x-circle", onClick: t3[1] || (t3[1] = (...e4) => r2.clear && r2.clear(...e4)) })) : (0, o2.createCommentVNode)("", true), a2.showPassword && a2.type == "password" ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 1, class: (0, o2.normalizeClass)(n2.passwordVisible ? "ba-icon-eye" : "ba-icon-eye-off"), onClick: t3[2] || (t3[2] = (...e4) => r2.handlePassword && r2.handlePassword(...e4)) }, null, 2)) : (0, o2.createCommentVNode)("", true)])) : (0, o2.createCommentVNode)("", true)], 2);
          }
          var O = { name: "BaInput", components: {}, props: { placeholder: { type: String, default: "\u8BF7\u8F93\u5165\u5185\u5BB9" }, type: { type: String, default: "text" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false }, modelValue: { type: String, default: "\u8BF7\u8F93\u5165\u5185\u5BB9" }, clearable: { type: Boolean, default: false }, showPassword: { type: Boolean, default: false } }, data() {
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
          const M = (0, s.Z)(O, [["render", F], ["__scopeId", "data-v-5787545e"]]);
          var T = M;
          const L = (e3) => ((0, o2.pushScopeId)("data-v-5a4e1f16"), e3 = e3(), (0, o2.popScopeId)(), e3), U = { class: "ba-checkbox_input" }, W = L(() => (0, o2.createElementVNode)("span", { class: "ba-checkbox_inner" }, null, -1)), H = ["name", "value"], J = { class: "ba-checkbox_label" };
          function K(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("label", { class: (0, o2.normalizeClass)(["ba-checkbox", { "is-checked": r2.isChecked }]) }, [(0, o2.createElementVNode)("span", U, [W, (0, o2.withDirectives)((0, o2.createElementVNode)("input", { type: "checkbox", class: "ba-checkbox_original", name: a2.name, value: a2.label, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.model = e4) }, null, 8, H), [[o2.vModelCheckbox, r2.model]])]), (0, o2.createElementVNode)("span", J, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [(0, o2.createTextVNode)((0, o2.toDisplayString)(a2.label), 1)], true)])], 2);
          }
          var Q = { name: "BaCheckbox", inject: { CheckboxGroup: { default: "" } }, props: { modelValue: { type: Boolean, default: false }, label: { type: String, default: "" }, name: { type: String, default: "" } }, computed: { model: { get() {
            return this.isGroup ? this.CheckboxGroup.modelValue : this.modelValue;
          }, set(e3) {
            this.isGroup ? this.CheckboxGroup.$emit("update:modelValue", e3) : this.$emit("update:modelValue", e3);
          } }, isGroup() {
            return !!this.CheckboxGroup;
          }, isChecked() {
            return this.isGroup ? this.model.includes(this.label) : this.model;
          } } };
          const X = (0, s.Z)(Q, [["render", K], ["__scopeId", "data-v-5a4e1f16"]]);
          var Y = X;
          const ee = (e3) => ((0, o2.pushScopeId)("data-v-05f60c62"), e3 = e3(), (0, o2.popScopeId)(), e3), te = { class: "ba-radio_input" }, oe = ee(() => (0, o2.createElementVNode)("span", { class: "ba-radio_inner" }, null, -1)), ae = ["value", "name"], le = { class: "ba-radio_label" };
          function ne(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("label", { class: (0, o2.normalizeClass)(["ba-radio", { "is-checked": a2.label == r2.model }]) }, [(0, o2.createElementVNode)("span", te, [oe, (0, o2.withDirectives)((0, o2.createElementVNode)("input", { type: "radio", class: "ba-radio_original", value: a2.label, name: a2.name, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.model = e4) }, null, 8, ae), [[o2.vModelRadio, r2.model]])]), (0, o2.createElementVNode)("span", le, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [(0, o2.createTextVNode)((0, o2.toDisplayString)(a2.label), 1)], true)])], 2);
          }
          var re = { name: "BaRadio", props: { label: { type: [String, Number, Boolean], default: "" }, modelValue: { type: [String, Number, Boolean], default: "" }, name: { type: String, default: "" } }, methods: {}, computed: { model: { get() {
            return this.isGroup ? this.RadioGroup.modelValue : this.modelValue;
          }, set(e3) {
            this.isGroup ? this.RadioGroup.$emit("update:modelValue", e3) : this.$emit("update:modelValue", e3);
          } }, isGroup() {
            return !!this.RadioGroup;
          } }, inject: { RadioGroup: { default: "" } } };
          const ie = (0, s.Z)(re, [["render", ne], ["__scopeId", "data-v-05f60c62"]]);
          var ce = ie;
          const se = { class: "ba-radio-group" };
          function de(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", se, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var ue = { name: "BaRadioGroup", provide() {
            return { RadioGroup: this };
          }, props: { modelValue: null } };
          const pe = (0, s.Z)(ue, [["render", de]]);
          var me = pe;
          const he = (e3) => ((0, o2.pushScopeId)("data-v-fd6b6142"), e3 = e3(), (0, o2.popScopeId)(), e3), fe = { class: "ba-switch_core", ref: "core" }, be = he(() => (0, o2.createElementVNode)("span", { class: "ba-switch_button" }, null, -1)), ge = [be], ve = ["name"];
          function ke(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: (0, o2.normalizeClass)(["ba-switch", { "is-checked": a2.modelValue, "is-disabled": a2.disabled }]), onClick: t3[0] || (t3[0] = (...e4) => r2.handleClick && r2.handleClick(...e4)) }, [(0, o2.createElementVNode)("span", fe, ge, 512), (0, o2.createElementVNode)("input", { type: "checkbox", class: "ba-switch_input", name: a2.name, ref: "input" }, null, 8, ve)], 2);
          }
          var ye = { name: "BaSwitch", props: { modelValue: { type: Boolean, default: false }, activeColor: { type: String, default: "" }, inactiveColor: { type: String, default: "" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, methods: { handleClick() {
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
          const we = (0, s.Z)(ye, [["render", ke], ["__scopeId", "data-v-fd6b6142"]]);
          var Be = we;
          const Ve = { class: "ba-checkbox-group" };
          function Ce(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Ve, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var Ne = { name: "BaCheckboxGroup", provide() {
            return { CheckboxGroup: this };
          }, props: { modelValue: { type: Array } } };
          const Se = (0, s.Z)(Ne, [["render", Ce]]);
          var Ee = Se;
          const xe = { class: "ba-form" };
          function _e(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", xe, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var $e = { name: "BaForm", provide() {
            return { Form: this };
          }, props: { model: { type: Object, required: true }, labelWidth: { type: String, default: "80px" } } };
          const Ie = (0, s.Z)($e, [["render", _e]]);
          var ze = Ie;
          const Pe = { class: "ba-form-item" }, Ge = { class: "ba-form-item_content" };
          function Ze(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Pe, [(0, o2.createElementVNode)("label", { style: (0, o2.normalizeStyle)(r2.labelStyle), class: "ba-form-item_label" }, (0, o2.toDisplayString)(a2.label), 5), (0, o2.createElementVNode)("div", Ge, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])]);
          }
          var De = { name: "BaFormItem", props: { label: { type: String, default: "" } }, inject: { Form: { default: "" } }, computed: { labelStyle() {
            return { width: this.Form.labelWidth };
          } } };
          const je = (0, s.Z)(De, [["render", Ze], ["__scopeId", "data-v-16c9fc31"]]);
          var qe = je;
          const Ae = (e3) => ((0, o2.pushScopeId)("data-v-036765b1"), e3 = e3(), (0, o2.popScopeId)(), e3), Re = { class: "ba-pagination" }, Fe = Ae(() => (0, o2.createElementVNode)("i", { class: "dotted1 ba-icon-more-horizontal" }, null, -1)), Oe = [Fe], Me = ["onClick"], Te = Ae(() => (0, o2.createElementVNode)("i", { class: "dotted2 ba-icon-more-horizontal" }, null, -1)), Le = [Te];
          function Ue(e3, t3, a2, l2, n2, r2) {
            const i2 = (0, o2.resolveComponent)("ba-button");
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Re, [(0, o2.createVNode)(i2, { class: (0, o2.normalizeClass)(["ba-button", a2.pageNo == 1 ? "disabled" : ""]), onClick: t3[0] || (t3[0] = (e4) => r2.getPageNo(a2.pageNo - 1)), icon: "chevron-left" }, null, 8, ["class"]), (0, o2.createElementVNode)("ul", null, [r2.startAndEnd.start > 1 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 0, onClick: t3[1] || (t3[1] = (t4) => e3.$emit("getPageNo", 1)) }, "1")) : (0, o2.createCommentVNode)("", true), r2.startAndEnd.start > 2 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 1, onClick: t3[2] || (t3[2] = (t4) => e3.$emit("getPageNo", a2.pageNo - r2.pageDotted)) }, Oe)) : (0, o2.createCommentVNode)("", true), ((0, o2.openBlock)(true), (0, o2.createElementBlock)(o2.Fragment, null, (0, o2.renderList)(r2.startAndEnd.end, (e4) => (0, o2.withDirectives)(((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: e4, class: (0, o2.normalizeClass)({ active: a2.pageNo == e4 }), onClick: (t4) => r2.getPageNo(e4) }, (0, o2.toDisplayString)(e4), 11, Me)), [[o2.vShow, e4 >= r2.startAndEnd.start]])), 128)), r2.startAndEnd.end < r2.totalPage - 2 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 2, onClick: t3[3] || (t3[3] = (t4) => e3.$emit("getPageNo", a2.pageNo + r2.pageDotted)) }, Le)) : (0, o2.createCommentVNode)("", true), r2.startAndEnd.end < r2.totalPage ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 3, onClick: t3[4] || (t3[4] = (e4) => r2.getPageNo(r2.totalPage)) }, (0, o2.toDisplayString)(r2.totalPage), 1)) : (0, o2.createCommentVNode)("", true)]), (0, o2.createVNode)(i2, { class: (0, o2.normalizeClass)(["ba-button", a2.pageNo == r2.totalPage ? "disabled" : ""]), icon: "chevron-right", onClick: t3[5] || (t3[5] = (e4) => r2.getPageNo(a2.pageNo + 1)) }, null, 8, ["class"])]);
          }
          var We = { name: "BaPagination", props: { pageNo: { type: Number, default: 1 }, pageSize: { type: Number, default: 10 }, total: { type: Number, default: 100 }, continues: { type: Number, default: 5 } }, computed: { totalPage() {
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
          const He = (0, s.Z)(We, [["render", Ue], ["__scopeId", "data-v-036765b1"]]);
          var Je = He;
          const Ke = { class: "selector" };
          function Qe(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Ke);
          }
          var Xe = { name: "BaSelector" };
          const Ye = (0, s.Z)(Xe, [["render", Qe], ["__scopeId", "data-v-7d8ef644"]]);
          var et = Ye;
          const tt = [u, b, y, S, q, T, Y, ce, me, Be, Ee, ze, qe, Je, et], ot = function(e3) {
            tt.forEach((t3) => {
              e3.component(t3.name, t3);
            });
          };
          typeof window !== "undefined" && window.Vue && ot(window.Vue);
          var at = { install: ot }, lt = at;
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
