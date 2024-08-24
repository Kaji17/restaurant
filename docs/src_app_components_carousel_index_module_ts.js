"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_carousel_index_module_ts"],{

/***/ 19369:
/*!*************************************************!*\
  !*** ./src/app/components/carousel/autoplay.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCarouselAutoplayComponent: () => (/* binding */ NzDemoCarouselAutoplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 46212);



function NzDemoCarouselAutoplayComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r1);
  }
}
class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
  static ɵfac = function NzDemoCarouselAutoplayComponent_Factory(t) {
    return new (t || NzDemoCarouselAutoplayComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCarouselAutoplayComponent,
    selectors: [["nz-demo-carousel-autoplay"]],
    decls: 2,
    vars: 1,
    consts: [["nzAutoPlay", ""], ["nz-carousel-content", "", "class", "text-center h-[160px] leading-[160px] bg-[#747474] dark:bg-white/10 text-white overflow-hidden rounded-4", 4, "ngFor", "ngForOf"], ["nz-carousel-content", "", 1, "text-center", "h-[160px]", "leading-[160px]", "bg-[#747474]", "dark:bg-white/10", "text-white", "overflow-hidden", "rounded-4"], [1, "text-white", "dark:text-white/[.87]", "mb-0"]],
    template: function NzDemoCarouselAutoplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCarouselAutoplayComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__.NzCarouselComponent, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__.NzCarouselContentDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59793:
/*!**********************************************!*\
  !*** ./src/app/components/carousel/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCarouselBasicComponent: () => (/* binding */ NzDemoCarouselBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 46212);



function NzDemoCarouselBasicComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r1);
  }
}
class NzDemoCarouselBasicComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  static ɵfac = function NzDemoCarouselBasicComponent_Factory(t) {
    return new (t || NzDemoCarouselBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCarouselBasicComponent,
    selectors: [["nz-demo-carousel-basic"]],
    decls: 2,
    vars: 2,
    consts: [[3, "nzEffect"], ["nz-carousel-content", "", "class", "text-center h-[200px] leading-[160px] bg-[#747474] dark:bg-white/10 text-white overflow-hidden rounded-4", 4, "ngFor", "ngForOf"], ["nz-carousel-content", "", 1, "text-center", "h-[200px]", "leading-[160px]", "bg-[#747474]", "dark:bg-white/10", "text-white", "overflow-hidden", "rounded-4"], [1, "text-white", "dark:text-white/[.87]", "mb-0"]],
    template: function NzDemoCarouselBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCarouselBasicComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEffect", ctx.effect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__.NzCarouselComponent, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__.NzCarouselContentDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 69959:
/*!*****************************************************!*\
  !*** ./src/app/components/carousel/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCarouselEnComponent: () => (/* binding */ NzDemoCarouselEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _autoplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autoplay */ 19369);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 59793);
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fade */ 19864);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position */ 76735);






class NzDemoCarouselEnComponent {
  static ɵfac = function NzDemoCarouselEnComponent_Factory(t) {
    return new (t || NzDemoCarouselEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzDemoCarouselEnComponent,
    selectors: [["nz-demo-carousel"]],
    decls: 29,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "h-full"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoCarouselEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-demo-carousel-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-demo-carousel-position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "nz-demo-carousel-autoplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Fade in");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "nz-demo-carousel-fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _autoplay__WEBPACK_IMPORTED_MODULE_0__.NzDemoCarouselAutoplayComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCarouselBasicComponent, _fade__WEBPACK_IMPORTED_MODULE_2__.NzDemoCarouselFadeComponent, _position__WEBPACK_IMPORTED_MODULE_3__.NzDemoCarouselPositionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 19864:
/*!*********************************************!*\
  !*** ./src/app/components/carousel/fade.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCarouselFadeComponent: () => (/* binding */ NzDemoCarouselFadeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 46212);



function NzDemoCarouselFadeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r1);
  }
}
class NzDemoCarouselFadeComponent {
  array = [1, 2, 3, 4];
  static ɵfac = function NzDemoCarouselFadeComponent_Factory(t) {
    return new (t || NzDemoCarouselFadeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCarouselFadeComponent,
    selectors: [["nz-demo-carousel-fade"]],
    decls: 2,
    vars: 2,
    consts: [[3, "nzEffect"], ["nz-carousel-content", "", "class", "text-center h-[160px] leading-[160px] bg-[#747474] dark:bg-white/10 text-white overflow-hidden rounded-4", 4, "ngFor", "ngForOf"], ["nz-carousel-content", "", 1, "text-center", "h-[160px]", "leading-[160px]", "bg-[#747474]", "dark:bg-white/10", "text-white", "overflow-hidden", "rounded-4"], [1, "text-white", "dark:text-white/[.87]", "mb-0"]],
    template: function NzDemoCarouselFadeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCarouselFadeComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEffect", "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__.NzCarouselComponent, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__.NzCarouselContentDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 31561:
/*!*****************************************************!*\
  !*** ./src/app/components/carousel/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCarouselModule: () => (/* binding */ NzDemoCarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 18186);
/* harmony import */ var _autoplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoplay */ 19369);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 59793);
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fade */ 19864);
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./position */ 76735);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 69959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 46212);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);












class NzDemoCarouselModule {
  static ɵfac = function NzDemoCarouselModule_Factory(t) {
    return new (t || NzDemoCarouselModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NzDemoCarouselModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoCarouselEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoCarouselModule, {
    declarations: [_autoplay__WEBPACK_IMPORTED_MODULE_2__.NzDemoCarouselAutoplayComponent, _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoCarouselBasicComponent, _fade__WEBPACK_IMPORTED_MODULE_4__.NzDemoCarouselFadeComponent, _position__WEBPACK_IMPORTED_MODULE_5__.NzDemoCarouselPositionComponent, _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoCarouselEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_9__.NzCarouselModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 18186:
/*!***********************************************!*\
  !*** ./src/app/components/carousel/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 46212);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);


const moduleList = [ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_0__.NzCarouselModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__.NzRadioModule];

/***/ }),

/***/ 76735:
/*!*************************************************!*\
  !*** ./src/app/components/carousel/position.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCarouselPositionComponent: () => (/* binding */ NzDemoCarouselPositionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/carousel */ 46212);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);





function NzDemoCarouselPositionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r1);
  }
}
class NzDemoCarouselPositionComponent {
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
  static ɵfac = function NzDemoCarouselPositionComponent_Factory(t) {
    return new (t || NzDemoCarouselPositionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCarouselPositionComponent,
    selectors: [["nz-demo-carousel-position"]],
    decls: 11,
    vars: 3,
    consts: [[1, "mb-[15px]", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "bottom", 1, "px-[20px]", "py-[5px]", "h-auto", "ltr:rounded-l-6", "rtl:rounded-r-6"], ["nz-radio-button", "", "nzValue", "top", 1, "px-[20px]", "py-[5px]", "h-auto"], ["nz-radio-button", "", "nzValue", "left", 1, "px-[20px]", "py-[5px]", "h-auto"], ["nz-radio-button", "", "nzValue", "right", 1, "px-[20px]", "py-[5px]", "h-auto", "ltr:rounded-r-6", "rtl:rounded-l-6", "rtl:before:hidden"], [3, "nzDotPosition"], ["class", "text-center h-[160px] leading-[160px] bg-[#747474] dark:bg-white/10 text-white overflow-hidden rounded-4", "nz-carousel-content", "", 4, "ngFor", "ngForOf"], ["nz-carousel-content", "", 1, "text-center", "h-[160px]", "leading-[160px]", "bg-[#747474]", "dark:bg-white/10", "text-white", "overflow-hidden", "rounded-4"], [1, "text-white", "dark:text-white/[.87]", "mb-0"]],
    template: function NzDemoCarouselPositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCarouselPositionComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.dotPosition = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzDemoCarouselPositionComponent_div_10_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dotPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDotPosition", ctx.dotPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_3__.NzCarouselComponent, ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_3__.NzCarouselContentDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__.NzRadioGroupComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     nz-radio-group label) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1);\n\n    color: rgb(255 255 255 / .87)\n}\n\n:is(.dark   [_nghost-%COMP%]     nz-radio-group label.ant-radio-button-wrapper-checked) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTs7SUFBQSxvQ0FBQTs7SUFBQSx3Q0FBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLHNCQUFBOztJQUFBLHdEQUFBOztJQUFBLGtCQUFBOztJQUFBLHdEQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCA6Om5nLWRlZXAgbnotcmFkaW8tZ3JvdXAgbGFiZWx7XG4gICAgICBAYXBwbHkgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8xMCBkYXJrOnRleHQtd2hpdGUvWy44N107XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCBuei1yYWRpby1ncm91cCBsYWJlbC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZHtcbiAgICAgIEBhcHBseSBkYXJrOmJnLXByaW1hcnkgZGFyazpib3JkZXItcHJpbWFyeSBkYXJrOnRleHQtd2hpdGU7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 46212:
/*!************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-carousel.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NZ_CAROUSEL_CUSTOM_STRATEGIES: () => (/* binding */ NZ_CAROUSEL_CUSTOM_STRATEGIES),
/* harmony export */   NzCarouselBaseStrategy: () => (/* binding */ NzCarouselBaseStrategy),
/* harmony export */   NzCarouselComponent: () => (/* binding */ NzCarouselComponent),
/* harmony export */   NzCarouselContentDirective: () => (/* binding */ NzCarouselContentDirective),
/* harmony export */   NzCarouselFlipStrategy: () => (/* binding */ NzCarouselFlipStrategy),
/* harmony export */   NzCarouselModule: () => (/* binding */ NzCarouselModule),
/* harmony export */   NzCarouselOpacityStrategy: () => (/* binding */ NzCarouselOpacityStrategy),
/* harmony export */   NzCarouselTransformNoLoopStrategy: () => (/* binding */ NzCarouselTransformNoLoopStrategy),
/* harmony export */   NzCarouselTransformStrategy: () => (/* binding */ NzCarouselTransformStrategy)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 30554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 89378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 45118);

















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["slickList"];
const _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) {}
const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r7 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onLiClick(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("slick-active", i_r7 === ctx_r5.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.nzDotRender || _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, i_r7));
  }
}
function NzCarouselComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCarouselComponent_ul_6_li_1_Template, 2, 6, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("slick-dots-top", ctx_r2.nzDotPosition === "top")("slick-dots-bottom", ctx_r2.nzDotPosition === "bottom")("slick-dots-left", ctx_r2.nzDotPosition === "left")("slick-dots-right", ctx_r2.nzDotPosition === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.carouselContents);
  }
}
function NzCarouselComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r11 + 1);
  }
}
const _c3 = ["*"];
class NzCarouselContentDirective {
  set isActive(value) {
    this._active = value;
    if (this.isActive) {
      this.renderer.addClass(this.el, 'slick-active');
    } else {
      this.renderer.removeClass(this.el, 'slick-active');
    }
  }
  get isActive() {
    return this._active;
  }
  constructor(elementRef, renderer) {
    this.renderer = renderer;
    this._active = false;
    this.el = elementRef.nativeElement;
  }
  static #_ = this.ɵfac = function NzCarouselContentDirective_Factory(t) {
    return new (t || NzCarouselContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzCarouselContentDirective,
    selectors: [["", "nz-carousel-content", ""]],
    hostAttrs: [1, "slick-slide"],
    exportAs: ["nzCarouselContent"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCarouselContentDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nz-carousel-content]',
      exportAs: 'nzCarouselContent',
      host: {
        class: 'slick-slide'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCarouselBaseStrategy {
  get maxIndex() {
    return this.length - 1;
  }
  get firstEl() {
    return this.contents[0].el;
  }
  get lastEl() {
    return this.contents[this.maxIndex].el;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.platform = platform;
    this.options = options;
    this.carouselComponent = carouselComponent;
  }
  /**
   * Initialize dragging sequences.
   *
   * @param contents
   */
  withCarouselContents(contents) {
    const carousel = this.carouselComponent;
    this.slickListEl = carousel.slickListEl;
    this.slickTrackEl = carousel.slickTrackEl;
    this.contents = contents?.toArray() || [];
    this.length = this.contents.length;
    if (this.platform.isBrowser) {
      const rect = carousel.el.getBoundingClientRect();
      this.unitWidth = rect.width;
      this.unitHeight = rect.height;
    } else {
      // Since we cannot call getBoundingClientRect in server, we just hide all items except for the first one.
      contents?.forEach((content, index) => {
        if (index === 0) {
          this.renderer.setStyle(content.el, 'width', '100%');
        } else {
          this.renderer.setStyle(content.el, 'display', 'none');
        }
      });
    }
  }
  /**
   * When user drag the carousel component.
   *
   * @optional
   */
  dragging(_vector) {}
  /**
   * Destroy a scroll strategy.
   */
  dispose() {}
  getFromToInBoundary(f, t) {
    const length = this.maxIndex + 1;
    return {
      from: (f + length) % length,
      to: (t + length) % length
    };
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCarouselOpacityStrategy extends NzCarouselBaseStrategy {
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    if (this.contents) {
      this.slickTrackEl.style.width = `${this.length * this.unitWidth}px`;
      this.contents.forEach((content, i) => {
        this.renderer.setStyle(content.el, 'opacity', this.carouselComponent.activeIndex === i ? '1' : '0');
        this.renderer.setStyle(content.el, 'position', 'relative');
        this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, 'left', `${-this.unitWidth * i}px`);
        this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
      });
    }
  }
  switch(_f, _t) {
    const {
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.contents.forEach((content, i) => {
      this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
    });
    setTimeout(() => {
      complete$.next();
      complete$.complete();
    }, this.carouselComponent.nzTransitionSpeed);
    return complete$;
  }
  dispose() {
    this.contents.forEach(content => {
      this.renderer.setStyle(content.el, 'transition', null);
      this.renderer.setStyle(content.el, 'opacity', null);
      this.renderer.setStyle(content.el, 'width', null);
      this.renderer.setStyle(content.el, 'left', null);
    });
    super.dispose();
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
  get vertical() {
    return this.carouselComponent.vertical;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    super(carouselComponent, cdr, renderer, platform, options);
    this.isDragging = false;
    this.isTransitioning = false;
  }
  dispose() {
    super.dispose();
    this.renderer.setStyle(this.slickTrackEl, 'transform', null);
  }
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    const carousel = this.carouselComponent;
    const activeIndex = carousel.activeIndex;
    // We only do when we are in browser.
    if (this.platform.isBrowser && this.contents.length) {
      this.renderer.setStyle(this.slickListEl, 'height', `${this.unitHeight}px`);
      if (this.vertical) {
        this.renderer.setStyle(this.slickTrackEl, 'width', `${this.unitWidth}px`);
        this.renderer.setStyle(this.slickTrackEl, 'height', `${this.length * this.unitHeight}px`);
        this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
      } else {
        this.renderer.setStyle(this.slickTrackEl, 'height', `${this.unitHeight}px`);
        this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * this.unitWidth}px`);
        this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
      }
      this.contents.forEach(content => {
        this.renderer.setStyle(content.el, 'position', 'relative');
        this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, 'height', `${this.unitHeight}px`);
      });
    }
  }
  switch(_f, _t) {
    const {
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.renderer.setStyle(this.slickTrackEl, 'transition', `transform ${this.carouselComponent.nzTransitionSpeed}ms ease`);
    if (this.vertical) {
      this.verticalTransform(_f, _t);
    } else {
      this.horizontalTransform(_f, _t);
    }
    this.isTransitioning = true;
    this.isDragging = false;
    // TODO@hullis: use transitionEnd event instead of setTimeout
    setTimeout(() => {
      this.renderer.setStyle(this.slickTrackEl, 'transition', null);
      this.contents.forEach(content => {
        this.renderer.setStyle(content.el, this.vertical ? 'top' : 'left', null);
      });
      if (this.vertical) {
        this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0)`);
      } else {
        this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0)`);
      }
      this.isTransitioning = false;
      complete$.next();
      complete$.complete();
    }, this.carouselComponent.nzTransitionSpeed);
    return complete$.asObservable();
  }
  dragging(_vector) {
    if (this.isTransitioning) {
      return;
    }
    const activeIndex = this.carouselComponent.activeIndex;
    if (this.carouselComponent.vertical) {
      if (!this.isDragging && this.length > 2) {
        if (activeIndex === this.maxIndex) {
          this.prepareVerticalContext(true);
        } else if (activeIndex === 0) {
          this.prepareVerticalContext(false);
        }
      }
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight + _vector.x}px, 0)`);
    } else {
      if (!this.isDragging && this.length > 2) {
        if (activeIndex === this.maxIndex) {
          this.prepareHorizontalContext(true);
        } else if (activeIndex === 0) {
          this.prepareHorizontalContext(false);
        }
      }
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth + _vector.x}px, 0, 0)`);
    }
    this.isDragging = true;
  }
  verticalTransform(_f, _t) {
    const {
      from: f,
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const needToAdjust = this.length > 2 && _t !== t;
    if (needToAdjust) {
      this.prepareVerticalContext(t < f);
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-_t * this.unitHeight}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0`);
    }
  }
  horizontalTransform(_f, _t) {
    const {
      from: f,
      to: t
    } = this.getFromToInBoundary(_f, _t);
    const needToAdjust = this.length > 2 && _t !== t;
    if (needToAdjust) {
      this.prepareHorizontalContext(t < f);
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-_t * this.unitWidth}px, 0, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0`);
    }
  }
  prepareVerticalContext(lastToFirst) {
    if (lastToFirst) {
      this.renderer.setStyle(this.firstEl, 'top', `${this.length * this.unitHeight}px`);
      this.renderer.setStyle(this.lastEl, 'top', null);
    } else {
      this.renderer.setStyle(this.firstEl, 'top', null);
      this.renderer.setStyle(this.lastEl, 'top', `${-this.unitHeight * this.length}px`);
    }
  }
  prepareHorizontalContext(lastToFirst) {
    if (lastToFirst) {
      this.renderer.setStyle(this.firstEl, 'left', `${this.length * this.unitWidth}px`);
      this.renderer.setStyle(this.lastEl, 'left', null);
    } else {
      this.renderer.setStyle(this.firstEl, 'left', null);
      this.renderer.setStyle(this.lastEl, 'left', `${-this.unitWidth * this.length}px`);
    }
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CAROUSEL_CUSTOM_STRATEGIES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('nz-carousel-custom-strategies');
const NZ_CONFIG_MODULE_NAME = 'carousel';
class NzCarouselComponent {
  set nzDotPosition(value) {
    this._dotPosition = value;
    if (value === 'left' || value === 'right') {
      this.vertical = true;
    } else {
      this.vertical = false;
    }
  }
  get nzDotPosition() {
    return this._dotPosition;
  }
  constructor(elementRef, nzConfigService, ngZone, renderer, cdr, platform, resizeService, nzDragService, directionality, customStrategies) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.platform = platform;
    this.resizeService = resizeService;
    this.nzDragService = nzDragService;
    this.directionality = directionality;
    this.customStrategies = customStrategies;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzEffect = 'scrollx';
    this.nzEnableSwipe = true;
    this.nzDots = true;
    this.nzAutoPlay = false;
    this.nzAutoPlaySpeed = 3000;
    this.nzTransitionSpeed = 500;
    this.nzLoop = true;
    /**
     * this property is passed directly to an NzCarouselBaseStrategy
     */
    this.nzStrategyOptions = undefined;
    this._dotPosition = 'bottom';
    this.nzBeforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeIndex = 0;
    this.vertical = false;
    this.transitionInProgress = null;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.gestureRect = null;
    this.pointerDelta = null;
    this.isTransiting = false;
    this.isDragging = false;
    this.onLiClick = index => {
      if (this.dir === 'rtl') {
        this.goTo(this.carouselContents.length - 1 - index);
      } else {
        this.goTo(index);
      }
    };
    /**
     * Drag carousel.
     */
    this.pointerDown = event => {
      if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
        this.clearScheduledTransition();
        this.gestureRect = this.slickListEl.getBoundingClientRect();
        this.nzDragService.requestDraggingSequence(event).subscribe(delta => {
          this.pointerDelta = delta;
          this.isDragging = true;
          this.strategy?.dragging(this.pointerDelta);
        }, () => {}, () => {
          if (this.nzEnableSwipe && this.isDragging) {
            const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
            // Switch to another slide if delta is bigger than third of the width.
            if (Math.abs(xDelta) > this.gestureRect.width / 3 && (this.nzLoop || xDelta <= 0 && this.activeIndex + 1 < this.carouselContents.length || xDelta > 0 && this.activeIndex > 0)) {
              this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
            } else {
              this.goTo(this.activeIndex);
            }
            this.gestureRect = null;
            this.pointerDelta = null;
          }
          this.isDragging = false;
        });
      }
    };
    this.nzDotPosition = 'bottom';
    this.el = elementRef.nativeElement;
  }
  ngOnInit() {
    this.slickListEl = this.slickList.nativeElement;
    this.slickTrackEl = this.slickTrack.nativeElement;
    this.dir = this.directionality.value;
    this.directionality.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.markContentActive(this.activeIndex);
      this.cdr.detectChanges();
    });
    this.ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.slickListEl, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(event => {
        const {
          keyCode
        } = event;
        if (keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.RIGHT_ARROW) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.LEFT_ARROW) {
            this.pre();
          } else {
            this.next();
          }
          this.cdr.markForCheck();
        });
      });
    });
  }
  ngAfterContentInit() {
    this.markContentActive(0);
  }
  ngAfterViewInit() {
    this.carouselContents.changes.subscribe(() => {
      this.markContentActive(0);
      this.layout();
    });
    this.resizeService.subscribe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.layout();
    });
    this.switchStrategy();
    this.markContentActive(0);
    this.layout();
    // If embedded in an entry component, it may do initial render at an inappropriate time.
    // ngZone.onStable won't do this trick
    // TODO: need to change this.
    Promise.resolve().then(() => {
      this.layout();
    });
  }
  ngOnChanges(changes) {
    const {
      nzEffect,
      nzDotPosition
    } = changes;
    if (nzEffect && !nzEffect.isFirstChange()) {
      this.switchStrategy();
      this.markContentActive(0);
      this.layout();
    }
    if (nzDotPosition && !nzDotPosition.isFirstChange()) {
      this.switchStrategy();
      this.markContentActive(0);
      this.layout();
    }
    if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
      this.clearScheduledTransition();
    } else {
      this.scheduleNextTransition();
    }
  }
  ngOnDestroy() {
    this.clearScheduledTransition();
    if (this.strategy) {
      this.strategy.dispose();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  next() {
    this.goTo(this.activeIndex + 1);
  }
  pre() {
    this.goTo(this.activeIndex - 1);
  }
  goTo(index) {
    if (this.carouselContents && this.carouselContents.length && !this.isTransiting && (this.nzLoop || index >= 0 && index < this.carouselContents.length)) {
      const length = this.carouselContents.length;
      const from = this.activeIndex;
      const to = (index + length) % length;
      this.isTransiting = true;
      this.nzBeforeChange.emit({
        from,
        to
      });
      this.strategy.switch(this.activeIndex, index).subscribe(() => {
        this.scheduleNextTransition();
        this.nzAfterChange.emit(to);
        this.isTransiting = false;
      });
      this.markContentActive(to);
      this.cdr.markForCheck();
    }
  }
  switchStrategy() {
    if (this.strategy) {
      this.strategy.dispose();
    }
    // Load custom strategies first.
    const customStrategy = this.customStrategies ? this.customStrategies.find(s => s.name === this.nzEffect) : null;
    if (customStrategy) {
      this.strategy = new customStrategy.strategy(this, this.cdr, this.renderer, this.platform);
      return;
    }
    this.strategy = this.nzEffect === 'scrollx' ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer, this.platform) : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer, this.platform);
  }
  scheduleNextTransition() {
    this.clearScheduledTransition();
    if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
      this.transitionInProgress = setTimeout(() => {
        this.goTo(this.activeIndex + 1);
      }, this.nzAutoPlaySpeed);
    }
  }
  clearScheduledTransition() {
    if (this.transitionInProgress) {
      clearTimeout(this.transitionInProgress);
      this.transitionInProgress = null;
    }
  }
  markContentActive(index) {
    this.activeIndex = index;
    if (this.carouselContents) {
      this.carouselContents.forEach((slide, i) => {
        if (this.dir === 'rtl') {
          slide.isActive = index === this.carouselContents.length - 1 - i;
        } else {
          slide.isActive = index === i;
        }
      });
    }
    this.cdr.markForCheck();
  }
  layout() {
    if (this.strategy) {
      this.strategy.withCarouselContents(this.carouselContents);
    }
  }
  static #_ = this.ɵfac = function NzCarouselComponent_Factory(t) {
    return new (t || NzCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_7__.NzResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_7__.NzDragService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NZ_CAROUSEL_CUSTOM_STRATEGIES, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzCarouselComponent,
    selectors: [["nz-carousel"]],
    contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzCarouselContentDirective, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselContents = _t);
      }
    },
    viewQuery: function NzCarouselComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slickTrack = _t.first);
      }
    },
    hostAttrs: [1, "ant-carousel"],
    hostVars: 4,
    hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-carousel-vertical", ctx.vertical)("ant-carousel-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzDotRender: "nzDotRender",
      nzEffect: "nzEffect",
      nzEnableSwipe: "nzEnableSwipe",
      nzDots: "nzDots",
      nzAutoPlay: "nzAutoPlay",
      nzAutoPlaySpeed: "nzAutoPlaySpeed",
      nzTransitionSpeed: "nzTransitionSpeed",
      nzLoop: "nzLoop",
      nzStrategyOptions: "nzStrategyOptions",
      nzDotPosition: "nzDotPosition"
    },
    outputs: {
      nzBeforeChange: "nzBeforeChange",
      nzAfterChange: "nzAfterChange"
    },
    exportAs: ["nzCarousel"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 3,
    consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NzCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) {
          return ctx.pointerDown($event);
        })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) {
          return ctx.pointerDown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzCarouselComponent_ul_6_Template, 2, 9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("slick-vertical", ctx.nzDotPosition === "left" || ctx.nzDotPosition === "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzDots);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)()], NzCarouselComponent.prototype, "nzEffect", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzCarouselComponent.prototype, "nzDots", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputNumber)()], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputNumber)()], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)()], NzCarouselComponent.prototype, "nzLoop", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.WithConfig)()], NzCarouselComponent.prototype, "nzDotPosition", null);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-carousel',
      exportAs: 'nzCarousel',
      preserveWhitespaces: false,
      template: `
    <div
      class="slick-initialized slick-slider"
      [class.slick-vertical]="nzDotPosition === 'left' || nzDotPosition === 'right'"
    >
      <div
        #slickList
        class="slick-list"
        tabindex="-1"
        (mousedown)="pointerDown($event)"
        (touchstart)="pointerDown($event)"
      >
        <!-- Render carousel items. -->
        <div class="slick-track" #slickTrack>
          <ng-content></ng-content>
        </div>
      </div>
      <!-- Render dots. -->
      <ul
        class="slick-dots"
        *ngIf="nzDots"
        [class.slick-dots-top]="nzDotPosition === 'top'"
        [class.slick-dots-bottom]="nzDotPosition === 'bottom'"
        [class.slick-dots-left]="nzDotPosition === 'left'"
        [class.slick-dots-right]="nzDotPosition === 'right'"
      >
        <li
          *ngFor="let content of carouselContents; let i = index"
          [class.slick-active]="i === activeIndex"
          (click)="onLiClick(i)"
        >
          <ng-template
            [ngTemplateOutlet]="nzDotRender || renderDotTemplate"
            [ngTemplateOutletContext]="{ $implicit: i }"
          ></ng-template>
        </li>
      </ul>
    </div>

    <ng-template #renderDotTemplate let-index>
      <button>{{ index + 1 }}</button>
    </ng-template>
  `,
      host: {
        class: 'ant-carousel',
        '[class.ant-carousel-vertical]': 'vertical',
        '[class.ant-carousel-rtl]': `dir ==='rtl'`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_7__.NzResizeService
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_7__.NzDragService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
      }]
    }];
  }, {
    carouselContents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzCarouselContentDirective]
    }],
    slickList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['slickList', {
        static: true
      }]
    }],
    slickTrack: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['slickTrack', {
        static: true
      }]
    }],
    nzDotRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEffect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzEnableSwipe: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDots: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAutoPlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAutoPlaySpeed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTransitionSpeed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLoop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzStrategyOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDotPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBeforeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzAfterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCarouselModule {
  static #_ = this.ɵfac = function NzCarouselModule_Factory(t) {
    return new (t || NzCarouselModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzCarouselModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.PlatformModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzCarouselComponent, NzCarouselContentDirective],
      exports: [NzCarouselComponent, NzCarouselContentDirective],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.PlatformModule]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * this strategy is very much like NzCarouselTransformStrategy, but it doesn't loop between the first and the last one
 */
class NzCarouselTransformNoLoopStrategy extends NzCarouselBaseStrategy {
  get vertical() {
    return this.carouselComponent.vertical;
  }
  constructor(carouselComponent, cdr, renderer, platform, options) {
    super(carouselComponent, cdr, renderer, platform, options);
    this.isTransitioning = false;
  }
  dispose() {
    this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    super.dispose();
  }
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    const carousel = this.carouselComponent;
    const activeIndex = carousel.activeIndex;
    if (this.platform.isBrowser && this.contents.length) {
      this.renderer.setStyle(this.slickListEl, 'height', `${this.unitHeight}px`);
      if (this.platform.isBrowser && this.contents.length) {
        this.renderer.setStyle(this.slickListEl, 'height', `${this.unitHeight}px`);
        if (this.vertical) {
          this.renderer.setStyle(this.slickTrackEl, 'width', `${this.unitWidth}px`);
          this.renderer.setStyle(this.slickTrackEl, 'height', `${this.length * this.unitHeight}px`);
          this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
        } else {
          this.renderer.setStyle(this.slickTrackEl, 'height', `${this.unitHeight}px`);
          this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * this.unitWidth}px`);
          this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
        }
        this.contents.forEach(content => {
          this.renderer.setStyle(content.el, 'position', 'relative');
          this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
          this.renderer.setStyle(content.el, 'height', `${this.unitHeight}px`);
        });
      }
    }
  }
  switch(_f, _t) {
    const to = (_t + this.length) % this.length;
    const transitionSpeed = this.carouselComponent.nzTransitionSpeed;
    const complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.renderer.setStyle(this.slickTrackEl, 'transition', `transform ${transitionSpeed}ms ease`);
    if (this.vertical) {
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-to * this.unitHeight}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-to * this.unitWidth}px, 0, 0)`);
    }
    this.isTransitioning = true;
    setTimeout(() => {
      // this strategy don't need to do a following adjust
      this.isTransitioning = false;
      complete$.next();
      complete$.complete();
    }, transitionSpeed);
    return complete$.asObservable();
  }
  dragging(vector) {
    if (this.isTransitioning) {
      return;
    }
    const activeIndex = this.carouselComponent.activeIndex;
    if (this.vertical) {
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight + vector.x}px, 0)`);
    } else {
      this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth + vector.x}px, 0, 0)`);
    }
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCarouselFlipStrategy extends NzCarouselBaseStrategy {
  withCarouselContents(contents) {
    super.withCarouselContents(contents);
    if (this.contents) {
      this.renderer.setStyle(this.slickListEl, 'width', `${this.unitWidth}px`);
      this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * this.unitWidth}px`);
      this.contents.forEach((content, i) => {
        const cur = this.carouselComponent.activeIndex === i;
        this.renderer.setStyle(content.el, 'transform', cur ? 'rotateY(0deg)' : 'rotateY(180deg)');
        this.renderer.setStyle(content.el, 'position', 'relative');
        this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
        this.renderer.setStyle(content.el, 'left', `${-this.unitWidth * i}px`);
        this.renderer.setStyle(content.el, 'transform-style', 'preserve-3d');
        this.renderer.setStyle(content.el, 'backface-visibility', 'hidden');
      });
      const {
        carouselComponent
      } = this;
      carouselComponent.ngZone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(carouselComponent.nzTransitionSpeed).subscribe(() => {
          this.contents.forEach(c => this.renderer.setStyle(c.el, 'transition', ['transform 500ms ease 0s']));
        });
      });
    }
  }
  switch(rawF, rawT) {
    const {
      from,
      to
    } = this.getFromToInBoundary(rawF, rawT);
    const complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    const speed = this.carouselComponent.nzTransitionSpeed;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(speed).subscribe(() => {
      complete$.next();
      complete$.complete();
    });
    if (rawF === rawT) {
      return complete$;
    }
    this.contents.forEach((content, i) => {
      if (i === from) {
        this.renderer.setStyle(content.el, 'transform', 'rotateY(180deg)');
      } else if (i === to) {
        this.renderer.setStyle(content.el, 'transform', 'rotateY(0deg)');
      }
    });
    return complete$.asObservable();
  }
  dispose() {
    this.contents.forEach(content => {
      this.renderer.setStyle(content.el, 'transition', null);
      this.renderer.setStyle(content.el, 'transform', null);
      this.renderer.setStyle(content.el, 'width', null);
      this.renderer.setStyle(content.el, 'left', null);
      this.renderer.setStyle(content.el, 'transform-style', null);
      this.renderer.setStyle(content.el, 'backface-visibility', null);
    });
    super.dispose();
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_carousel_index_module_ts.js.map