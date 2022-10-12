import Carousel from "./src/Carousel";

/* istanbul ignore next */
Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel);
};

export default Carousel;
