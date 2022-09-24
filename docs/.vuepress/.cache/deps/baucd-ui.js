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
            return Xe;
          } }), typeof window !== "undefined") {
            var e2 = window.document.currentScript, t2 = e2 && e2.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
            t2 && (a.p = t2[1]);
          }
          var o2 = a(203);
          const n = ["disabled"], r = { key: 1 };
          function s(e3, t3, a2, l2, s2, d2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("button", { class: (0, o2.normalizeClass)(["ba-button", [`ba-button-${a2.type}`, { "is-plain": a2.plain, "is-round": a2.round, "is-circle": a2.circle, "is-disabled": a2.disabled }]]), onClick: t3[0] || (t3[0] = (...e4) => d2.handleClick && d2.handleClick(...e4)), disabled: a2.disabled }, [a2.icon ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: (0, o2.normalizeClass)(`ba-icon-${a2.icon}`) }, null, 2)) : (0, o2.createCommentVNode)("", true), e3.$slots.default ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", r, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])) : (0, o2.createCommentVNode)("", true)], 10, n);
          }
          var d = { name: "BaButton", props: { type: { type: String, default: "default" }, plain: { type: Boolean, default: false }, round: { type: Boolean, default: false }, circle: { type: Boolean, default: false }, icon: { type: String, default: "" }, disabled: { type: Boolean, default: false } }, emits: ["click"], methods: { handleClick(e3) {
            this.$emit("click", e3);
          } } }, c = a(744);
          const i = (0, c.Z)(d, [["render", s], ["__scopeId", "data-v-c8424910"]]);
          var u = i;
          const p = (e3) => ((0, o2.pushScopeId)("data-v-38cb78e3"), e3 = e3(), (0, o2.popScopeId)(), e3), m = { class: "ba-dialog_header" }, f = { class: "ba-dialog_title" }, h = p(() => (0, o2.createElementVNode)("i", { class: "ba-icon-close" }, null, -1)), b = [h], v = { class: "ba-dialog_body" }, k = p(() => (0, o2.createElementVNode)("span", null, "\u5185\u5BB9", -1)), y = { class: "ba-dialog_footer" };
          function V(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createBlock)(o2.Transition, { name: "dialog-fade" }, { default: (0, o2.withCtx)(() => [(0, o2.withDirectives)((0, o2.createElementVNode)("div", { class: "ba-dialog_wrapper", onClick: t3[1] || (t3[1] = (0, o2.withModifiers)((...e4) => r2.handleClose && r2.handleClose(...e4), ["self"])) }, [(0, o2.createElementVNode)("div", { class: "ba-dialog", style: (0, o2.normalizeStyle)({ width: a2.width, marginTop: a2.top }) }, [(0, o2.createElementVNode)("div", m, [(0, o2.renderSlot)(e3.$slots, "title", {}, () => [(0, o2.createElementVNode)("span", f, (0, o2.toDisplayString)(a2.title), 1)], true), (0, o2.createElementVNode)("button", { class: "ba-dialog_headerbtn", onClick: t3[0] || (t3[0] = (...e4) => r2.handleClose && r2.handleClose(...e4)) }, b)]), (0, o2.createElementVNode)("div", v, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [k], true)]), (0, o2.createElementVNode)("div", y, [e3.$slots.footer ? (0, o2.renderSlot)(e3.$slots, "footer", { key: 0 }, void 0, true) : (0, o2.createCommentVNode)("", true)])], 4)], 512), [[o2.vShow, a2.modelValue]])]), _: 3 });
          }
          var g = { name: "BaDialog", props: { title: { type: String, default: "\u6807\u9898" }, width: { type: String, default: "30%" }, top: { type: String, default: "15vh" }, modelValue: { type: Boolean, default: false } }, methods: { handleClose() {
            this.$emit("update:modelValue", false);
          } } };
          const B = (0, c.Z)(g, [["render", V], ["__scopeId", "data-v-38cb78e3"]]);
          var C = B;
          const E = ["placeholder", "type", "name", "value", "disabled"], S = { key: 0, class: "ba-input_suffix" };
          function N(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: (0, o2.normalizeClass)(["ba-input", { "ba-input_suffix": r2.showSuffix }]) }, [(0, o2.createElementVNode)("input", { class: (0, o2.normalizeClass)(["ba-input_inner", { "is-disabled": a2.disabled }]), placeholder: a2.placeholder, type: a2.showPassword ? n2.passwordVisible ? "text" : "password" : a2.type, name: a2.name, value: a2.modelValue, onInput: t3[0] || (t3[0] = (...e4) => r2.handleInput && r2.handleInput(...e4)), disabled: a2.disabled }, null, 42, E), r2.showSuffix ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("span", S, [a2.clearable && a2.modelValue ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 0, class: "ba-icon-cancel", onClick: t3[1] || (t3[1] = (...e4) => r2.clear && r2.clear(...e4)) })) : (0, o2.createCommentVNode)("", true), a2.showPassword && a2.type == "password" ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("i", { key: 1, class: (0, o2.normalizeClass)(n2.passwordVisible ? "ba-icon-eye" : "ba-icon-eye-off"), onClick: t3[2] || (t3[2] = (...e4) => r2.handlePassword && r2.handlePassword(...e4)) }, null, 2)) : (0, o2.createCommentVNode)("", true)])) : (0, o2.createCommentVNode)("", true)], 2);
          }
          var w = { name: "BaInput", components: {}, props: { placeholder: { type: String, default: "\u8BF7\u8F93\u5165\u5185\u5BB9" }, type: { type: String, default: "text" }, name: { type: String, default: "" }, disabled: { type: Boolean, default: false }, modelValue: { type: String, default: "\u8BF7\u8F93\u5165\u5185\u5BB9" }, clearable: { type: Boolean, default: false }, showPassword: { type: Boolean, default: false } }, data() {
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
          const _ = (0, c.Z)(w, [["render", N], ["__scopeId", "data-v-bcbd6a88"]]);
          var x = _;
          const $ = (e3) => ((0, o2.pushScopeId)("data-v-5a4e1f16"), e3 = e3(), (0, o2.popScopeId)(), e3), I = { class: "ba-checkbox_input" }, P = $(() => (0, o2.createElementVNode)("span", { class: "ba-checkbox_inner" }, null, -1)), G = ["name", "value"], z = { class: "ba-checkbox_label" };
          function Z(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("label", { class: (0, o2.normalizeClass)(["ba-checkbox", { "is-checked": r2.isChecked }]) }, [(0, o2.createElementVNode)("span", I, [P, (0, o2.withDirectives)((0, o2.createElementVNode)("input", { type: "checkbox", class: "ba-checkbox_original", name: a2.name, value: a2.label, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.model = e4) }, null, 8, G), [[o2.vModelCheckbox, r2.model]])]), (0, o2.createElementVNode)("span", z, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [(0, o2.createTextVNode)((0, o2.toDisplayString)(a2.label), 1)], true)])], 2);
          }
          var j = { name: "BaCheckbox", inject: { CheckboxGroup: { default: "" } }, props: { modelValue: { type: Boolean, default: false }, label: { type: String, default: "" }, name: { type: String, default: "" } }, computed: { model: { get() {
            return this.isGroup ? this.CheckboxGroup.modelValue : this.modelValue;
          }, set(e3) {
            this.isGroup ? this.CheckboxGroup.$emit("update:modelValue", e3) : this.$emit("update:modelValue", e3);
          } }, isGroup() {
            return !!this.CheckboxGroup;
          }, isChecked() {
            return this.isGroup ? this.model.includes(this.label) : this.model;
          } } };
          const D = (0, c.Z)(j, [["render", Z], ["__scopeId", "data-v-5a4e1f16"]]);
          var A = D;
          const R = (e3) => ((0, o2.pushScopeId)("data-v-05f60c62"), e3 = e3(), (0, o2.popScopeId)(), e3), O = { class: "ba-radio_input" }, F = R(() => (0, o2.createElementVNode)("span", { class: "ba-radio_inner" }, null, -1)), M = ["value", "name"], T = { class: "ba-radio_label" };
          function q(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("label", { class: (0, o2.normalizeClass)(["ba-radio", { "is-checked": a2.label == r2.model }]) }, [(0, o2.createElementVNode)("span", O, [F, (0, o2.withDirectives)((0, o2.createElementVNode)("input", { type: "radio", class: "ba-radio_original", value: a2.label, name: a2.name, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => r2.model = e4) }, null, 8, M), [[o2.vModelRadio, r2.model]])]), (0, o2.createElementVNode)("span", T, [(0, o2.renderSlot)(e3.$slots, "default", {}, () => [(0, o2.createTextVNode)((0, o2.toDisplayString)(a2.label), 1)], true)])], 2);
          }
          var U = { name: "BaRadio", props: { label: { type: [String, Number, Boolean], default: "" }, modelValue: { type: [String, Number, Boolean], default: "" }, name: { type: String, default: "" } }, methods: {}, computed: { model: { get() {
            return this.isGroup ? this.RadioGroup.modelValue : this.modelValue;
          }, set(e3) {
            this.isGroup ? this.RadioGroup.$emit("update:modelValue", e3) : this.$emit("update:modelValue", e3);
          } }, isGroup() {
            return !!this.RadioGroup;
          } }, inject: { RadioGroup: { default: "" } } };
          const W = (0, c.Z)(U, [["render", q], ["__scopeId", "data-v-05f60c62"]]);
          var L = W;
          const H = { class: "ba-radio-group" };
          function J(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", H, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var K = { name: "BaRadioGroup", provide() {
            return { RadioGroup: this };
          }, props: { modelValue: null } };
          const Q = (0, c.Z)(K, [["render", J]]);
          var X = Q;
          const Y = (e3) => ((0, o2.pushScopeId)("data-v-549c5edc"), e3 = e3(), (0, o2.popScopeId)(), e3), ee = { class: "ba-switch_core", ref: "core" }, te = Y(() => (0, o2.createElementVNode)("span", { class: "ba-switch_button" }, null, -1)), oe = [te], ae = ["name"];
          function le(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", { class: (0, o2.normalizeClass)(["ba-switch", { "is-checked": a2.modelValue }]), onClick: t3[0] || (t3[0] = (...e4) => r2.handleClick && r2.handleClick(...e4)) }, [(0, o2.createElementVNode)("span", ee, oe, 512), (0, o2.createElementVNode)("input", { type: "checkbox", class: "ba-switch_input", name: a2.name, ref: "input" }, null, 8, ae)], 2);
          }
          var ne = { name: "BaSwitch", props: { modelValue: { type: Boolean, default: false }, activeColor: { type: String, default: "" }, inactiveColor: { type: String, default: "" }, name: { type: String, default: "" } }, methods: { handleClick() {
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
          const re = (0, c.Z)(ne, [["render", le], ["__scopeId", "data-v-549c5edc"]]);
          var se = re;
          const de = { class: "ba-checkbox-group" };
          function ce(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", de, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var ie = { name: "BaCheckboxGroup", provide() {
            return { CheckboxGroup: this };
          }, props: { modelValue: { type: Array } } };
          const ue = (0, c.Z)(ie, [["render", ce]]);
          var pe = ue;
          const me = { class: "ba-form" };
          function fe(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", me, [(0, o2.renderSlot)(e3.$slots, "default")]);
          }
          var he = { name: "BaForm", provide() {
            return { Form: this };
          }, props: { model: { type: Object, required: true }, labelWidth: { type: String, default: "80px" } } };
          const be = (0, c.Z)(he, [["render", fe]]);
          var ve = be;
          const ke = { class: "ba-form-item" }, ye = { class: "ba-form-item_content" };
          function Ve(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", ke, [(0, o2.createElementVNode)("label", { style: (0, o2.normalizeStyle)(r2.labelStyle), class: "ba-form-item_label" }, (0, o2.toDisplayString)(a2.label), 5), (0, o2.createElementVNode)("div", ye, [(0, o2.renderSlot)(e3.$slots, "default", {}, void 0, true)])]);
          }
          var ge = { name: "BaFormItem", props: { label: { type: String, default: "" } }, inject: { Form: { default: "" } }, computed: { labelStyle() {
            return { width: this.Form.labelWidth };
          } } };
          const Be = (0, c.Z)(ge, [["render", Ve], ["__scopeId", "data-v-16c9fc31"]]);
          var Ce = Be;
          const Ee = (e3) => ((0, o2.pushScopeId)("data-v-767b9fcd"), e3 = e3(), (0, o2.popScopeId)(), e3), Se = { class: "fr page" }, Ne = { class: "sui-pagination clearfix" }, we = Ee(() => (0, o2.createElementVNode)("a", null, "\xAB\u4E0A\u4E00\u9875", -1)), _e = [we], xe = Ee(() => (0, o2.createElementVNode)("a", null, "1", -1)), $e = [xe], Ie = { key: 1, class: "dotted" }, Pe = Ee(() => (0, o2.createElementVNode)("span", null, "...", -1)), Ge = [Pe], ze = ["onClick"], Ze = { key: 2, class: "dotted" }, je = Ee(() => (0, o2.createElementVNode)("span", null, "...", -1)), De = [je], Ae = Ee(() => (0, o2.createElementVNode)("a", { href: "#" }, "\u4E0B\u4E00\u9875\xBB", -1)), Re = [Ae];
          function Oe(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", Se, [(0, o2.createElementVNode)("div", Ne, [(0, o2.createElementVNode)("ul", null, [(0, o2.createElementVNode)("li", { class: (0, o2.normalizeClass)(["prev", a2.pageNo == 1 ? "disabled" : ""]), onClick: t3[0] || (t3[0] = (t4) => e3.$emit("getPageNo", a2.pageNo - 1)) }, _e, 2), r2.startAndEnd.start > 1 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 0, onClick: t3[1] || (t3[1] = (t4) => e3.$emit("getPageNo", 1)) }, $e)) : (0, o2.createCommentVNode)("", true), r2.startAndEnd.start > 2 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", Ie, Ge)) : (0, o2.createCommentVNode)("", true), ((0, o2.openBlock)(true), (0, o2.createElementBlock)(o2.Fragment, null, (0, o2.renderList)(r2.startAndEnd.end, (t4) => (0, o2.withDirectives)(((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: t4, class: (0, o2.normalizeClass)({ active: a2.pageNo == t4 }), onClick: (o3) => e3.$emit("getPageNo", t4) }, [(0, o2.createElementVNode)("a", null, (0, o2.toDisplayString)(t4), 1)], 10, ze)), [[o2.vShow, t4 >= r2.startAndEnd.start]])), 128)), r2.startAndEnd.end < r2.totalPage - 1 ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", Ze, De)) : (0, o2.createCommentVNode)("", true), r2.startAndEnd.end < r2.totalPage ? ((0, o2.openBlock)(), (0, o2.createElementBlock)("li", { key: 3, onClick: t3[2] || (t3[2] = (t4) => e3.$emit("getPageNo", r2.totalPage)) }, [(0, o2.createElementVNode)("a", null, (0, o2.toDisplayString)(r2.totalPage), 1)])) : (0, o2.createCommentVNode)("", true), (0, o2.createElementVNode)("li", { class: "next", onClick: t3[3] || (t3[3] = (t4) => e3.$emit("getPageNo", a2.pageNo + 1)) }, Re)]), (0, o2.createElementVNode)("div", null, [(0, o2.createElementVNode)("span", null, "\u5171" + (0, o2.toDisplayString)(a2.total) + "\u4E2A\u5546\u54C1\xA0", 1)])])]);
          }
          var Fe = { props: ["pageNo", "pageSize", "total", "continues"], name: "Pagination", computed: { totalPage() {
            return Math.ceil(this.total / this.pageSize);
          }, startAndEnd() {
            let e3 = 0, t3 = 0;
            const { totalPage: o3, continues: a2, pageNo: l2 } = this;
            return o3 < a2 ? (e3 = 1, t3 = o3) : (e3 = l2 - parseInt(a2 / 2), t3 = l2 + parseInt(a2 / 2), e3 < 1 && (e3 = 1, t3 = a2), t3 > o3 && (t3 = o3, e3 = o3 - a2 + 1)), { start: e3, end: t3 };
          } } };
          const Me = (0, c.Z)(Fe, [["render", Oe], ["__scopeId", "data-v-767b9fcd"]]);
          var Te = Me;
          const qe = { class: "selector" };
          function Ue(e3, t3, a2, l2, n2, r2) {
            return (0, o2.openBlock)(), (0, o2.createElementBlock)("div", qe);
          }
          var We = { name: "BaSelector" };
          const Le = (0, c.Z)(We, [["render", Ue], ["__scopeId", "data-v-7d8ef644"]]);
          var He = Le;
          const Je = [u, C, x, A, L, X, se, pe, ve, Ce, Te, He], Ke = function(e3) {
            Je.forEach((t3) => {
              e3.component(t3.name, t3);
            });
          };
          typeof window !== "undefined" && window.Vue && Ke(window.Vue);
          var Qe = { install: Ke }, Xe = Qe;
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
