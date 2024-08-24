"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_radio_index_module_ts"],{

/***/ 34713:
/*!*******************************************!*\
  !*** ./src/app/components/radio/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioBasicComponent: () => (/* binding */ NzDemoRadioBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);



class NzDemoRadioBasicComponent {
  static ɵfac = function NzDemoRadioBasicComponent_Factory(t) {
    return new (t || NzDemoRadioBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioBasicComponent,
    selectors: [["nz-demo-radio-basic"]],
    decls: 2,
    vars: 0,
    consts: [["nz-radio", "", "ngModel", "", 1, "text-dark", "dark:text-white/[.87]"]],
    template: function NzDemoRadioBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     .ant-radio-inner) {\n\n    border-color: rgb(255 255 255 / 0.3);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-checked .ant-radio-inner) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-input:focus + .ant-radio-inner) {\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9iYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTs7SUFBQSxvQ0FBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLHNCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUEsOEJBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWlubmVye1xuICAgICAgQGFwcGx5IGRhcms6Ymctd2hpdGUvMTAgZGFyazpib3JkZXItd2hpdGUvMzA7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWNoZWNrZWQgLmFudC1yYWRpby1pbm5lcntcbiAgICAgIEBhcHBseSBkYXJrOmJvcmRlci1wcmltYXJ5O1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1pbnB1dDpmb2N1cyArIC5hbnQtcmFkaW8taW5uZXJ7XG4gICAgICBAYXBwbHkgZGFyazpzaGFkb3ctbm9uZTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 58784:
/*!*********************************************!*\
  !*** ./src/app/components/radio/disable.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioDisableComponent: () => (/* binding */ NzDemoRadioDisableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);






class NzDemoRadioDisableComponent {
  disabled = true;
  static ɵfac = function NzDemoRadioDisableComponent_Factory(t) {
    return new (t || NzDemoRadioDisableComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioDisableComponent,
    selectors: [["nz-demo-radio-disable"]],
    decls: 10,
    vars: 3,
    consts: [["nz-radio", "", 1, "[&>span]:dark:text-white/[.87]", "opacity-[.40]", 3, "nzDisabled"], ["nz-radio", "", 1, "[&>span]:dark:text-white/[.87]", "opacity-[.40]", 3, "nzDisabled", "ngModel"], ["nz-button", "", "nzType", "primary", 3, "click"]],
    template: function NzDemoRadioDisableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoRadioDisableComponent_Template_button_click_8_listener() {
          return ctx.disabled = !ctx.disabled;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Toggle disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disabled)("ngModel", true);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective],
    styles: [":is(.dark   [_nghost-%COMP%]     .ant-radio-inner) {\n\n    border-color: rgb(255 255 255 / 0.3);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-checked .ant-radio-inner) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-input:focus + .ant-radio-inner) {\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9kaXNhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBLG9DQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxzQkFBQTs7SUFBQSw4QkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8taW5uZXJ7XG4gICAgICBAYXBwbHkgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8zMDtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8tY2hlY2tlZCAuYW50LXJhZGlvLWlubmVye1xuICAgICAgQGFwcGx5IGRhcms6Ym9yZGVyLXByaW1hcnk7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWlucHV0OmZvY3VzICsgLmFudC1yYWRpby1pbm5lcntcbiAgICAgIEBhcHBseSBkYXJrOnNoYWRvdy1ub25lO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 25494:
/*!**************************************************!*\
  !*** ./src/app/components/radio/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioEnComponent: () => (/* binding */ NzDemoRadioEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 34713);
/* harmony import */ var _disable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disable */ 58784);
/* harmony import */ var _radiobutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radiobutton */ 58609);
/* harmony import */ var _radiogroup_more__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radiogroup-more */ 32032);
/* harmony import */ var _radiogroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radiogroup */ 21863);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./size */ 18354);








class NzDemoRadioEnComponent {
  static ɵfac = function NzDemoRadioEnComponent_Factory(t) {
    return new (t || NzDemoRadioEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NzDemoRadioEnComponent,
    selectors: [["nz-demo-radio"]],
    decls: 39,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "mb-[25px]"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"]],
    template: function NzDemoRadioEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "nz-demo-radio-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Radio Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "nz-demo-radio-disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Vertical Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "nz-demo-radio-radiogroup-more");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 6)(21, "div", 3)(22, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Radio size");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "nz-demo-radio-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 1)(27, "div", 2)(28, "div", 3)(29, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Radio style");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "nz-demo-radio-radiobutton");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 6)(34, "div", 3)(35, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Horizontal Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "nz-demo-radio-radiogroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoRadioBasicComponent, _disable__WEBPACK_IMPORTED_MODULE_1__.NzDemoRadioDisableComponent, _radiobutton__WEBPACK_IMPORTED_MODULE_2__.NzDemoRadioRadiobuttonComponent, _radiogroup_more__WEBPACK_IMPORTED_MODULE_3__.NzDemoRadioRadiogroupMoreComponent, _radiogroup__WEBPACK_IMPORTED_MODULE_4__.NzDemoRadioRadiogroupComponent, _size__WEBPACK_IMPORTED_MODULE_5__.NzDemoRadioSizeComponent],
    styles: ["[_nghost-%COMP%]     .ant-radio.ant-radio-checked .ant-radio-inner {\n    border-width: 4px\n}\n[_nghost-%COMP%]     .ant-radio.ant-radio-checked .ant-radio-inner::after {\n    content: var(--tw-content);\n    display: none\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9lbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07SUFBQTtBQUFBO0FBQUE7SUFBQSwwQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby5hbnQtcmFkaW8tY2hlY2tlZCAuYW50LXJhZGlvLWlubmVyIHtcbiAgICAgIEBhcHBseSBib3JkZXItNCBhZnRlcjpoaWRkZW47XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 60174:
/*!**************************************************!*\
  !*** ./src/app/components/radio/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioModule: () => (/* binding */ NzDemoRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 29053);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 34713);
/* harmony import */ var _disable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disable */ 58784);
/* harmony import */ var _radiobutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radiobutton */ 58609);
/* harmony import */ var _radiogroup_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radiogroup-more */ 32032);
/* harmony import */ var _radiogroup_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radiogroup-options */ 43567);
/* harmony import */ var _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radiogroup-with-name */ 36198);
/* harmony import */ var _radiogroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radiogroup */ 21863);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size */ 18354);
/* harmony import */ var _solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solid */ 84192);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./en.component */ 25494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);


















class NzDemoRadioModule {
  static ɵfac = function NzDemoRadioModule_Factory(t) {
    return new (t || NzDemoRadioModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: NzDemoRadioModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoRadioEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](NzDemoRadioModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoRadioBasicComponent, _disable__WEBPACK_IMPORTED_MODULE_3__.NzDemoRadioDisableComponent, _radiobutton__WEBPACK_IMPORTED_MODULE_4__.NzDemoRadioRadiobuttonComponent, _radiogroup_more__WEBPACK_IMPORTED_MODULE_5__.NzDemoRadioRadiogroupMoreComponent, _radiogroup_options__WEBPACK_IMPORTED_MODULE_6__.NzDemoRadioRadiogroupOptionsComponent, _radiogroup_with_name__WEBPACK_IMPORTED_MODULE_7__.NzDemoRadioRadiogroupWithNameComponent, _radiogroup__WEBPACK_IMPORTED_MODULE_8__.NzDemoRadioRadiogroupComponent, _size__WEBPACK_IMPORTED_MODULE_9__.NzDemoRadioSizeComponent, _solid__WEBPACK_IMPORTED_MODULE_10__.NzDemoRadioSolidComponent, _en_component__WEBPACK_IMPORTED_MODULE_11__.NzDemoRadioEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 29053:
/*!********************************************!*\
  !*** ./src/app/components/radio/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);



const moduleList = [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_0__.NzRadioModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputModule];

/***/ }),

/***/ 58609:
/*!*************************************************!*\
  !*** ./src/app/components/radio/radiobutton.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioRadiobuttonComponent: () => (/* binding */ NzDemoRadioRadiobuttonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);



class NzDemoRadioRadiobuttonComponent {
  radioValue = 'A';
  static ɵfac = function NzDemoRadioRadiobuttonComponent_Factory(t) {
    return new (t || NzDemoRadioRadiobuttonComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioRadiobuttonComponent,
    selectors: [["nz-demo-radio-radiobutton"]],
    decls: 31,
    vars: 3,
    consts: [[3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A", 1, "px-[25px]", "py-[11px]", "h-auto", "ltr:rounded-l-6", "rtl:rounded-r-6"], ["nz-radio-button", "", "nzValue", "B", 1, "px-[25px]", "py-[11px]", "h-auto"], ["nz-radio-button", "", "nzValue", "C", 1, "px-[25px]", "py-[11px]", "h-auto"], ["nz-radio-button", "", "nzValue", "D", 1, "px-[25px]", "py-[11px]", "h-auto", "ltr:rounded-r-6", "rtl:rounded-l-6", "rtl:before:hidden"], ["nz-radio-button", "", "nzValue", "B", "nzDisabled", "", 1, "px-[25px]", "py-[11px]", "h-auto"], ["nz-radio-button", "", "nzValue", "A", "nzDisabled", "", 1, "px-[25px]", "py-[11px]", "h-auto", "ltr:rounded-l-6", "rtl:rounded-r-6"], ["nz-radio-button", "", "nzValue", "C", "nzDisabled", "", 1, "px-[25px]", "py-[11px]", "h-auto"], ["nz-radio-button", "", "nzValue", "D", "nzDisabled", "", 1, "px-[25px]", "py-[11px]", "h-auto", "ltr:rounded-r-6", "rtl:rounded-l-6", "rtl:before:hidden"]],
    template: function NzDemoRadioRadiobuttonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiobuttonComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiobuttonComponent_Template_nz_radio_group_ngModelChange_11_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiobuttonComponent_Template_nz_radio_group_ngModelChange_22_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioGroupComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     nz-radio-group label) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1);\n\n    color: rgb(255 255 255 / .87)\n}\n\n:is(.dark   [_nghost-%COMP%]     nz-radio-group label.ant-radio-button-wrapper-checked) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not([class*=\" ant-radio-button-wrapper-disabled\"]).ant-radio-button-wrapper:first-child {\n\n    --tw-border-opacity: 1;\n\n    border-right-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n\n    padding-left: 25.25px;\n\n    padding-right: 25.25px;\n\n    line-height: 1.6;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(64 64 64 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-button-wrapper) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper:not(:first-child)::before {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(241 242 246 / var(--tw-bg-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-button-wrapper:not(:first-child))::before {\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper.ant-radio-button-wrapper-disabled {\n\n    opacity: 0.4\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9yYWRpb2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTs7SUFBQSxvQ0FBQTs7SUFBQSx3Q0FBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLHNCQUFBOztJQUFBLHdEQUFBOztJQUFBLGtCQUFBOztJQUFBLHdEQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsa0JBQUE7O0lBQUEsd0RBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLHNCQUFBOztJQUFBO0FBQUE7O0FBR0U7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsa0JBQUE7O0lBQUEseURBQUE7O0lBQUEscUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHRjs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIG56LXJhZGlvLWdyb3VwIGxhYmVse1xuICAgICAgQGFwcGx5IGRhcms6Ymctd2hpdGUvMTAgZGFyazpib3JkZXItd2hpdGUvMTAgZGFyazp0ZXh0LXdoaXRlL1suODddO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgbnotcmFkaW8tZ3JvdXAgbGFiZWwuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWR7XG4gICAgICBAYXBwbHkgZGFyazpiZy1wcmltYXJ5IGRhcms6Ym9yZGVyLXByaW1hcnkgZGFyazp0ZXh0LXdoaXRlO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOm5vdCguYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkKXtcbiAgICAgIEBhcHBseSBiZy1wcmltYXJ5IHRleHQtd2hpdGU7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQ6bm90KC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWQpOmZpcnN0LWNoaWxke1xuICAgICAgQGFwcGx5IGJvcmRlci1wcmltYXJ5O1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOm5vdChbY2xhc3MqPVwiIGFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZFwiXSkuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyOmZpcnN0LWNoaWxkIHtcbiAgICAgIEBhcHBseSBib3JkZXItci1wcmltYXJ5O1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1idXR0b24td3JhcHBlciB7XG4gICAgICAgIEBhcHBseSBsZWFkaW5nLVsxLjZdIHB4LVsyNS4yNXB4XSBib3JkZXItWyNmMWYyZjZdIGRhcms6Ym9yZGVyLXdoaXRlLzEwIGJnLXdoaXRlIHRleHQtdGhlbWUtZ3JheTtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXI6bm90KDpmaXJzdC1jaGlsZCk6OmJlZm9yZSB7XG4gICAgICAgIEBhcHBseSBiZy1bI2YxZjJmNl0gZGFyazpiZy13aGl0ZS8xMDtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXIuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkIHtcbiAgICAgIEBhcHBseSBvcGFjaXR5LVswLjRdO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 32032:
/*!*****************************************************!*\
  !*** ./src/app/components/radio/radiogroup-more.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioRadiogroupMoreComponent: () => (/* binding */ NzDemoRadioRadiogroupMoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);





function NzDemoRadioRadiogroupMoreComponent_input_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 6);
  }
}
class NzDemoRadioRadiogroupMoreComponent {
  radioValue = 'A';
  style = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };
  static ɵfac = function NzDemoRadioRadiogroupMoreComponent_Factory(t) {
    return new (t || NzDemoRadioRadiogroupMoreComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioRadiogroupMoreComponent,
    selectors: [["nz-demo-radio-radiogroup-more"]],
    decls: 10,
    vars: 6,
    consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "A", 1, "dark:text-white/[.87]", 3, "ngStyle"], ["nz-radio", "", "nzValue", "B", 1, "dark:text-white/[.87]", 3, "ngStyle"], ["nz-radio", "", "nzValue", "C", 1, "dark:text-white/[.87]", 3, "ngStyle"], ["nz-radio", "", "nzValue", "M", 1, "dark:text-white/[.87]", 3, "ngStyle"], ["type", "text", "nz-input", "", 4, "ngIf"], ["type", "text", "nz-input", ""]],
    template: function NzDemoRadioRadiogroupMoreComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupMoreComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Option A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Option B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " More... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoRadioRadiogroupMoreComponent_input_9_Template, 1, 0, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.radioValue === "M");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__.NzRadioGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective],
    styles: ["[nz-radio][_ngcontent-%COMP%] {\n  display: block;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-left: 10px;\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-inner) {\n  border-color: rgb(255 255 255 / 0.3);\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-checked .ant-radio-inner) {\n  --tw-border-opacity: 1;\n  border-color: rgb(130 49 211 / var(--tw-border-opacity));\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-input:focus + .ant-radio-inner) {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-input) {\n  border-color: rgb(255 255 255 / 0.3);\n  background-color: rgb(255 255 255 / 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9yYWRpb2dyb3VwLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxjQUFBO0FBQVI7O0FBRU07RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFFUTtFQUFBLG9DQUFBO0VBQUE7QUFBQTs7QUFHQTtFQUFBLHNCQUFBO0VBQUE7QUFBQTs7QUFHQTtFQUFBLHNCQUFBO0VBQUEsOEJBQUE7RUFBQTtBQUFBOztBQUdBO0VBQUEsb0NBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBbbnotcmFkaW9dIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1pbm5lcntcbiAgICAgICAgQGFwcGx5IGRhcms6Ymctd2hpdGUvMTAgZGFyazpib3JkZXItd2hpdGUvMzA7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1jaGVja2VkIC5hbnQtcmFkaW8taW5uZXJ7XG4gICAgICAgIEBhcHBseSBkYXJrOmJvcmRlci1wcmltYXJ5O1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8taW5wdXQ6Zm9jdXMgKyAuYW50LXJhZGlvLWlubmVye1xuICAgICAgICBAYXBwbHkgZGFyazpzaGFkb3ctbm9uZTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWlucHV0e1xuICAgICAgICBAYXBwbHkgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8zMDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 43567:
/*!********************************************************!*\
  !*** ./src/app/components/radio/radiogroup-options.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioRadiogroupOptionsComponent: () => (/* binding */ NzDemoRadioRadiogroupOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);




function NzDemoRadioRadiogroupOptionsComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r3.label);
  }
}
function NzDemoRadioRadiogroupOptionsComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r4.label);
  }
}
function NzDemoRadioRadiogroupOptionsComponent_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r5.label);
  }
}
class NzDemoRadioRadiogroupOptionsComponent {
  radioValue = 'Apple';
  options = [{
    label: 'Apple',
    value: 'Apple'
  }, {
    label: 'Pear',
    value: 'Pear'
  }, {
    label: 'Orange',
    value: 'Orange'
  }];
  static ɵfac = function NzDemoRadioRadiogroupOptionsComponent_Factory(t) {
    return new (t || NzDemoRadioRadiogroupOptionsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioRadiogroupOptionsComponent,
    selectors: [["nz-demo-radio-radiogroup-options"]],
    decls: 6,
    vars: 6,
    consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio", "", 3, "nzValue"]],
    template: function NzDemoRadioRadiogroupOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupOptionsComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoRadioRadiogroupOptionsComponent_label_1_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupOptionsComponent_Template_nz_radio_group_ngModelChange_2_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoRadioRadiogroupOptionsComponent_label_3_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupOptionsComponent_Template_nz_radio_group_ngModelChange_4_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoRadioRadiogroupOptionsComponent_label_5_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__.NzRadioGroupComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36198:
/*!**********************************************************!*\
  !*** ./src/app/components/radio/radiogroup-with-name.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioRadiogroupWithNameComponent: () => (/* binding */ NzDemoRadioRadiogroupWithNameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);



class NzDemoRadioRadiogroupWithNameComponent {
  radioValue = 'A';
  static ɵfac = function NzDemoRadioRadiogroupWithNameComponent_Factory(t) {
    return new (t || NzDemoRadioRadiogroupWithNameComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioRadiogroupWithNameComponent,
    selectors: [["nz-demo-radio-radiogroup-with-name"]],
    decls: 9,
    vars: 1,
    consts: [["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "A"], ["nz-radio", "", "nzValue", "B"], ["nz-radio", "", "nzValue", "C"], ["nz-radio", "", "nzValue", "D"]],
    template: function NzDemoRadioRadiogroupWithNameComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupWithNameComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioGroupComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 21863:
/*!************************************************!*\
  !*** ./src/app/components/radio/radiogroup.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioRadiogroupComponent: () => (/* binding */ NzDemoRadioRadiogroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);



class NzDemoRadioRadiogroupComponent {
  radioValue = 'A';
  static ɵfac = function NzDemoRadioRadiogroupComponent_Factory(t) {
    return new (t || NzDemoRadioRadiogroupComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioRadiogroupComponent,
    selectors: [["nz-demo-radio-radiogroup"]],
    decls: 9,
    vars: 1,
    consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "A", 1, "dark:text-white/[.87]"], ["nz-radio", "", "nzValue", "B", 1, "dark:text-white/[.87]"], ["nz-radio", "", "nzValue", "C", 1, "dark:text-white/[.87]"], ["nz-radio", "", "nzValue", "D", 1, "dark:text-white/[.87]"]],
    template: function NzDemoRadioRadiogroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioRadiogroupComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioGroupComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     .ant-radio-inner) {\n\n    border-color: rgb(255 255 255 / 0.3);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-checked .ant-radio-inner) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-input:focus + .ant-radio-inner) {\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9yYWRpb2dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBLG9DQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxzQkFBQTs7SUFBQSw4QkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8taW5uZXJ7XG4gICAgICBAYXBwbHkgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8zMDtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8tY2hlY2tlZCAuYW50LXJhZGlvLWlubmVye1xuICAgICAgQGFwcGx5IGRhcms6Ym9yZGVyLXByaW1hcnk7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWlucHV0OmZvY3VzICsgLmFudC1yYWRpby1pbm5lcntcbiAgICAgIEBhcHBseSBkYXJrOnNoYWRvdy1ub25lO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 18354:
/*!******************************************!*\
  !*** ./src/app/components/radio/size.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioSizeComponent: () => (/* binding */ NzDemoRadioSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);



class NzDemoRadioSizeComponent {
  radioValue = 'A';
  static ɵfac = function NzDemoRadioSizeComponent_Factory(t) {
    return new (t || NzDemoRadioSizeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioSizeComponent,
    selectors: [["nz-demo-radio-size"]],
    decls: 31,
    vars: 3,
    consts: [["nzSize", "large", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A", 1, "px-[25px]", "py-[15px]", "h-auto", "ltr:rounded-l-6", "rtl:rounded-r-6"], ["nz-radio-button", "", "nzValue", "B", 1, "px-[25px]", "py-[15px]", "h-auto"], ["nz-radio-button", "", "nzValue", "C", 1, "px-[25px]", "py-[15px]", "h-auto"], ["nz-radio-button", "", "nzValue", "D", 1, "px-[25px]", "py-[15px]", "h-auto", "ltr:rounded-r-6", "rtl:rounded-l-6", "rtl:before:hidden"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A", 1, "px-[25px]", "py-[11px]", "h-auto", "ltr:rounded-l-6", "rtl:rounded-r-6"], ["nz-radio-button", "", "nzValue", "B", 1, "px-[25px]", "py-[11px]", "h-auto"], ["nz-radio-button", "", "nzValue", "C", 1, "px-[25px]", "py-[11px]", "h-auto"], ["nz-radio-button", "", "nzValue", "D", 1, "px-[25px]", "py-[11px]", "h-auto", "ltr:rounded-r-6", "rtl:rounded-l-6", "rtl:before:hidden"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A", 1, "px-[25px]", "py-[5px]", "h-auto", "ltr:rounded-l-6", "rtl:rounded-r-6"], ["nz-radio-button", "", "nzValue", "B", 1, "px-[25px]", "py-[5px]", "h-auto"], ["nz-radio-button", "", "nzValue", "C", 1, "px-[25px]", "py-[5px]", "h-auto"], ["nz-radio-button", "", "nzValue", "D", 1, "px-[25px]", "py-[5px]", "h-auto", "ltr:rounded-r-6", "rtl:rounded-l-6", "rtl:before:hidden"]],
    template: function NzDemoRadioSizeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSizeComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br")(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSizeComponent_Template_nz_radio_group_ngModelChange_11_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br")(21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-radio-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSizeComponent_Template_nz_radio_group_ngModelChange_22_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioGroupComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     nz-radio-group label) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1);\n\n    color: rgb(255 255 255 / .87)\n}\n\n:is(.dark   [_nghost-%COMP%]     nz-radio-group label.ant-radio-button-wrapper-checked) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not([class*=\" ant-radio-button-wrapper-disabled\"]).ant-radio-button-wrapper:first-child {\n\n    --tw-border-opacity: 1;\n\n    border-right-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n\n    padding-left: 25.25px;\n\n    padding-right: 25.25px;\n\n    line-height: 1.6;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(64 64 64 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-button-wrapper) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper:not(:first-child)::before {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(241 242 246 / var(--tw-bg-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-button-wrapper:not(:first-child))::before {\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yYWRpby9zaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBLG9DQUFBOztJQUFBLHdDQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUEsd0RBQUE7O0lBQUEsa0JBQUE7O0lBQUEsd0RBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxrQkFBQTs7SUFBQSx3REFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLHNCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFHRTs7SUFBQSxzQkFBQTs7SUFBQSx5REFBQTs7SUFBQSxrQkFBQTs7SUFBQSx5REFBQTs7SUFBQSxxQkFBQTs7SUFBQSxzQkFBQTs7SUFBQSxnQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdGOztJQUFBLHNCQUFBOztJQUFBLDhCQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCA6Om5nLWRlZXAgbnotcmFkaW8tZ3JvdXAgbGFiZWx7XG4gICAgICBAYXBwbHkgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8xMCBkYXJrOnRleHQtd2hpdGUvWy44N107XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCBuei1yYWRpby1ncm91cCBsYWJlbC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZHtcbiAgICAgIEBhcHBseSBkYXJrOmJnLXByaW1hcnkgZGFyazpib3JkZXItcHJpbWFyeSBkYXJrOnRleHQtd2hpdGU7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQ6bm90KC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWQpe1xuICAgICAgQGFwcGx5IGJnLXByaW1hcnkgdGV4dC13aGl0ZTtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZDpub3QoLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZCk6Zmlyc3QtY2hpbGR7XG4gICAgICBAYXBwbHkgYm9yZGVyLXByaW1hcnk7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQ6bm90KFtjbGFzcyo9XCIgYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXCJdKS5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgQGFwcGx5IGJvcmRlci1yLXByaW1hcnk7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgQGFwcGx5IGxlYWRpbmctWzEuNl0gcHgtWzI1LjI1cHhdIGJvcmRlci1bI2YxZjJmNl0gZGFyazpib3JkZXItd2hpdGUvMTAgYmctd2hpdGUgdGV4dC10aGVtZS1ncmF5O1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1idXR0b24td3JhcHBlcjpub3QoOmZpcnN0LWNoaWxkKTo6YmVmb3JlIHtcbiAgICAgICAgQGFwcGx5IGJnLVsjZjFmMmY2XSBkYXJrOmJnLXdoaXRlLzEwO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOm5vdCguYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkKTpmb2N1cy13aXRoaW57XG4gICAgICBAYXBwbHkgc2hhZG93LW5vbmU7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 84192:
/*!*******************************************!*\
  !*** ./src/app/components/radio/solid.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoRadioSolidComponent: () => (/* binding */ NzDemoRadioSolidComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);



class NzDemoRadioSolidComponent {
  radioValue = 'A';
  static ɵfac = function NzDemoRadioSolidComponent_Factory(t) {
    return new (t || NzDemoRadioSolidComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoRadioSolidComponent,
    selectors: [["nz-demo-radio-solid"]],
    decls: 9,
    vars: 1,
    consts: [["nzButtonStyle", "solid", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "A"], ["nz-radio-button", "", "nzValue", "B"], ["nz-radio-button", "", "nzValue", "C"], ["nz-radio-button", "", "nzValue", "D"]],
    template: function NzDemoRadioSolidComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoRadioSolidComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.radioValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hangzhou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shanghai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beijing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chengdu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__.NzRadioGroupComponent],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_radio_index_module_ts.js.map