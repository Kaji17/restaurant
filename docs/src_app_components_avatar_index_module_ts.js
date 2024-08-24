"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_avatar_index_module_ts"],{

/***/ 58774:
/*!********************************************!*\
  !*** ./src/app/components/avatar/badge.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAvatarBadgeComponent: () => (/* binding */ NzDemoAvatarBadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);



class NzDemoAvatarBadgeComponent {
  static ɵfac = function NzDemoAvatarBadgeComponent_Factory(t) {
    return new (t || NzDemoAvatarBadgeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAvatarBadgeComponent,
    selectors: [["nz-demo-avatar-badge"]],
    decls: 4,
    vars: 3,
    consts: [[1, "ltr:mr-[24px]", "rtl:ml-[24px]", 3, "nzCount"], ["nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10", 3, "nzShape"], ["nzDot", ""]],
    template: function NzDemoAvatarBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-badge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-badge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCount", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShape", "square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShape", "square");
      }
    },
    dependencies: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__.NzAvatarComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__.NzBadgeComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 72976:
/*!********************************************!*\
  !*** ./src/app/components/avatar/basic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAvatarBasicComponent: () => (/* binding */ NzDemoAvatarBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);


class NzDemoAvatarBasicComponent {
  static ɵfac = function NzDemoAvatarBasicComponent_Factory(t) {
    return new (t || NzDemoAvatarBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAvatarBasicComponent,
    selectors: [["nz-demo-avatar-basic"]],
    decls: 10,
    vars: 12,
    consts: [["nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10", 3, "nzSize"], ["nzSize", "large", "nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], ["nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], ["nzSize", "small", "nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], [1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10", 3, "nzShape", "nzSize", "nzIcon"], [1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10", 3, "nzShape", "nzIcon"]],
    template: function NzDemoAvatarBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 0)(2, "nz-avatar", 1)(3, "nz-avatar", 2)(4, "nz-avatar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-avatar", 4)(7, "nz-avatar", 4)(8, "nz-avatar", 5)(9, "nz-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShape", "square")("nzSize", 64)("nzIcon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShape", "square")("nzSize", "large")("nzIcon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShape", "square")("nzIcon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShape", "square")("nzSize", "small")("nzIcon", "user");
      }
    },
    dependencies: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__.NzAvatarComponent],
    styles: ["nz-avatar[_ngcontent-%COMP%] {\n    margin-inline-end: 16px;\n    margin-top: 16px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdmF0YXIvYmFzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7SUFBQSx1QkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LWF2YXRhciB7XG4gICAgICAgIEBhcHBseSBtZS1bMTZweF0gbXQtWzE2cHhdO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 26007:
/*!**********************************************!*\
  !*** ./src/app/components/avatar/dynamic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAvatarDynamicComponent: () => (/* binding */ NzDemoAvatarDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);






const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
const userList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
class NzDemoAvatarDynamicComponent {
  text = userList[3];
  color = colorList[3];
  change() {
    let idx = userList.indexOf(this.text);
    ++idx;
    if (idx === userList.length) {
      idx = 0;
    }
    this.text = userList[idx];
    this.color = colorList[idx];
  }
  static ɵfac = function NzDemoAvatarDynamicComponent_Factory(t) {
    return new (t || NzDemoAvatarDynamicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAvatarDynamicComponent,
    selectors: [["nz-demo-avatar-dynamic"]],
    decls: 4,
    vars: 5,
    consts: [["nzSize", "large", 1, "align-middle", 3, "ngStyle", "nzText"], ["nz-button", "", 1, "align-middle", "ms-[16px]", 3, "nzType", "click"]],
    template: function NzDemoAvatarDynamicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoAvatarDynamicComponent_Template_button_click_1_listener() {
          return ctx.change();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.color))("nzText", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "dashed");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_2__.NzAvatarComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 19048:
/*!***************************************************!*\
  !*** ./src/app/components/avatar/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAvatarEnComponent: () => (/* binding */ NzDemoAvatarEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge */ 58774);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 72976);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic */ 26007);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ 84196);






class NzDemoAvatarEnComponent {
  static ɵfac = function NzDemoAvatarEnComponent_Factory(t) {
    return new (t || NzDemoAvatarEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzDemoAvatarEnComponent,
    selectors: [["nz-demo-avatar"]],
    decls: 27,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "mb-[25px]"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"]],
    template: function NzDemoAvatarEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-demo-avatar-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "div", 3)(10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "With Badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "nz-demo-avatar-badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "div", 3)(17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "nz-demo-avatar-type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6)(22, "div", 3)(23, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Autoset Font Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "nz-demo-avatar-dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _badge__WEBPACK_IMPORTED_MODULE_0__.NzDemoAvatarBadgeComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoAvatarBasicComponent, _dynamic__WEBPACK_IMPORTED_MODULE_2__.NzDemoAvatarDynamicComponent, _type__WEBPACK_IMPORTED_MODULE_3__.NzDemoAvatarTypeComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 89365:
/*!***************************************************!*\
  !*** ./src/app/components/avatar/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAvatarModule: () => (/* binding */ NzDemoAvatarModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 10621);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge */ 58774);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 72976);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic */ 26007);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type */ 84196);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 19048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);














class NzDemoAvatarModule {
  static ɵfac = function NzDemoAvatarModule_Factory(t) {
    return new (t || NzDemoAvatarModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NzDemoAvatarModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoAvatarEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoAvatarModule, {
    declarations: [_badge__WEBPACK_IMPORTED_MODULE_2__.NzDemoAvatarBadgeComponent, _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoAvatarBasicComponent, _dynamic__WEBPACK_IMPORTED_MODULE_4__.NzDemoAvatarDynamicComponent, _type__WEBPACK_IMPORTED_MODULE_5__.NzDemoAvatarTypeComponent, _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoAvatarEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__.NzAvatarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__.NzBadgeModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 10621:
/*!*********************************************!*\
  !*** ./src/app/components/avatar/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 26575);




const moduleList = [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__.NzAvatarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_2__.NzBadgeModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule];

/***/ }),

/***/ 84196:
/*!*******************************************!*\
  !*** ./src/app/components/avatar/type.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAvatarTypeComponent: () => (/* binding */ NzDemoAvatarTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);


class NzDemoAvatarTypeComponent {
  static ɵfac = function NzDemoAvatarTypeComponent_Factory(t) {
    return new (t || NzDemoAvatarTypeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAvatarTypeComponent,
    selectors: [["nz-demo-avatar-type"]],
    decls: 6,
    vars: 0,
    consts: [["nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], ["nzText", "U", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], ["nzText", "USER", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], ["nzIcon", "user", "nzSrc", "//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10"], ["nzText", "U", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10", 2, "color", "#f56a00", "background-color", "#fde3cf"], ["nzIcon", "user", 1, "inline-flex", "items-center", "justify-center", "bg-[#e3e6ee]", "dark:bg-white/10", 2, "background-color", "#87d068"]],
    template: function NzDemoAvatarTypeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-avatar", 0)(1, "nz-avatar", 1)(2, "nz-avatar", 2)(3, "nz-avatar", 3)(4, "nz-avatar", 4)(5, "nz-avatar", 5);
      }
    },
    dependencies: [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_1__.NzAvatarComponent],
    styles: ["nz-avatar[_ngcontent-%COMP%] {\n    margin-inline-end: 16px;\n    margin-top: 16px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdmF0YXIvdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtJQUFBLHVCQUFBO0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotYXZhdGFyIHtcbiAgICAgICAgQGFwcGx5IG1lLVsxNnB4XSBtdC1bMTZweF07XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_avatar_index_module_ts.js.map