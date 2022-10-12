import BaButtonGroup from "../button/src/button-group";

/* istanbul ignore next */
BaButtonGroup.install = function (Vue) {
  Vue.component(BaButtonGroup.name, BaButtonGroup);
};

export default BaButtonGroup;
