"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_menu_index_module_ts"],{

/***/ 8467:
/*!*************************************************!*\
  !*** ./src/app/components/menu/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMenuEnComponent: () => (/* binding */ NzDemoMenuEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal */ 52599);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sider-current */ 66327);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical */ 111);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placement */ 37780);






class NzDemoMenuEnComponent {
  static ɵfac = function NzDemoMenuEnComponent_Factory(t) {
    return new (t || NzDemoMenuEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzDemoMenuEnComponent,
    selectors: [["nz-demo-menu"]],
    decls: 29,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoMenuEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Top Navigation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-demo-menu-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Placement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-demo-menu-horizontal-position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Open current submenu only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "nz-demo-menu-sider-current");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Vertical menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "nz-demo-menu-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _horizontal__WEBPACK_IMPORTED_MODULE_0__.NzDemoMenuHorizontalComponent, _sider_current__WEBPACK_IMPORTED_MODULE_1__.NzDemoMenuSiderCurrentComponent, _vertical__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuVerticalComponent, _placement__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuHorizontalPositionComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52599:
/*!***********************************************!*\
  !*** ./src/app/components/menu/horizontal.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMenuHorizontalComponent: () => (/* binding */ NzDemoMenuHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);




class NzDemoMenuHorizontalComponent {
  static ɵfac = function NzDemoMenuHorizontalComponent_Factory(t) {
    return new (t || NzDemoMenuHorizontalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMenuHorizontalComponent,
    selectors: [["nz-demo-menu-horizontal"]],
    decls: 36,
    vars: 0,
    consts: [["nz-menu", "", "nzMode", "horizontal"], ["nz-menu-item", "", "nzSelected", ""], ["nz-icon", "", "nzType", "mail"], ["nz-menu-item", "", "nzDisabled", ""], ["nz-icon", "", "nzType", "appstore"], ["nz-submenu", "", "nzTitle", "Navigation Three - Submenu", "nzIcon", "setting"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Sub Menu"], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "Disabled Sub Menu"], ["href", "https://ng.ant.design", "target", "_blank", "rel", "noopener noreferrer"]],
    template: function NzDemoMenuHorizontalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Navigation One ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Navigation Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5)(8, "ul")(9, "li", 6)(10, "ul")(11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "ul")(17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10)(28, "ul")(29, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 7)(34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Navigation Four - Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"]],
    styles: ["[_nghost-%COMP%]     .ant-menu {\n\n    background-color: transparent\n}\n\n[_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-item, [_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu {\n\n    display: inline-flex;\n\n    align-items: center;\n\n    gap: 8px\n}\n\n[_nghost-%COMP%]     .ant-menu-item, [_nghost-%COMP%]     .ant-menu-submenu-title {\n\n    display: flex;\n\n    align-items: center\n}\n\n[_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-item-disabled, [_nghost-%COMP%]     .ant-menu-submenu-disabled {\n\n    opacity: .8 !important\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled) {\n\n    color: rgb(255 255 255 / .87) !important\n}\n\n[_nghost-%COMP%]     .ant-menu-submenu .ant-menu-submenu-title .anticon {\n\n    color: currentColor\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07O0lBQUE7QUFBQTs7QUFJQTs7O0lBQUEsb0JBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7O0lBQUEsYUFBQTs7SUFBQTtBQUFBOztBQU9BOzs7OztJQUFBO0FBQUE7O0FBQUE7Ozs7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudXtcbiAgICAgIEBhcHBseSBiZy10cmFuc3BhcmVudDtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1ob3Jpem9udGFsID4gLmFudC1tZW51LWl0ZW0sXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1ob3Jpem9udGFsID4gLmFudC1tZW51LXN1Ym1lbnV7XG4gICAgICBAYXBwbHkgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC1bOHB4XTtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLFxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudS10aXRsZXtcbiAgICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLWRpc2FibGVkID4gLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUsXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVkID4gLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUsXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLWRpc2FibGVkLFxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZHtcbiAgICAgIEBhcHBseSBvcGFjaXR5LVsuOF0gZGFyazp0ZXh0LXdoaXRlL1suODddICN7IWltcG9ydGFudH07XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudSAuYW50LW1lbnUtc3VibWVudS10aXRsZSAuYW50aWNvbntcbiAgICAgIEBhcHBseSB0ZXh0LWN1cnJlbnQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 76121:
/*!*************************************************!*\
  !*** ./src/app/components/menu/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMenuModule: () => (/* binding */ NzDemoMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 71608);
/* harmony import */ var _horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal */ 52599);
/* harmony import */ var _sider_current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sider-current */ 66327);
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical */ 111);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.component */ 8467);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placement */ 37780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
















class NzDemoMenuModule {
  static ɵfac = function NzDemoMenuModule_Factory(t) {
    return new (t || NzDemoMenuModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NzDemoMenuModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoMenuModule, {
    declarations: [_horizontal__WEBPACK_IMPORTED_MODULE_2__.NzDemoMenuHorizontalComponent, _sider_current__WEBPACK_IMPORTED_MODULE_3__.NzDemoMenuSiderCurrentComponent, _vertical__WEBPACK_IMPORTED_MODULE_4__.NzDemoMenuVerticalComponent, _en_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoMenuEnComponent, _placement__WEBPACK_IMPORTED_MODULE_6__.NzDemoMenuHorizontalPositionComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__.NzMenuModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzToolTipModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__.NzSwitchModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_13__.NzDividerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 71608:
/*!*******************************************!*\
  !*** ./src/app/components/menu/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);






const moduleList = [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_0__.NzMenuModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__.NzToolTipModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__.NzSwitchModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule];

/***/ }),

/***/ 37780:
/*!**********************************************!*\
  !*** ./src/app/components/menu/placement.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMenuHorizontalPositionComponent: () => (/* binding */ NzDemoMenuHorizontalPositionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);



class NzDemoMenuHorizontalPositionComponent {
  static ɵfac = function NzDemoMenuHorizontalPositionComponent_Factory(t) {
    return new (t || NzDemoMenuHorizontalPositionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMenuHorizontalPositionComponent,
    selectors: [["nz-demo-menu-horizontal-position"]],
    decls: 157,
    vars: 0,
    consts: [["nz-menu", "", "nzMode", "horizontal"], ["nz-submenu", "", "nzPlacement", "bottomLeft", "nzTitle", "bottomLeft"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Sub Menu"], ["nz-menu-item", "", "nzDisabled", ""], ["nz-submenu", "", "nzDisabled", "", "nzTitle", "Disabled Sub Menu"], ["nz-submenu", "", "nzPlacement", "bottomCenter", "nzTitle", "bottomCenter"], ["nz-submenu", "", "nzPlacement", "bottomRight", "nzTitle", "bottomRight"], ["nz-submenu", "", "nzPlacement", "topLeft", "nzTitle", "topLeft"], ["nz-submenu", "", "nzPlacement", "topCenter", "nzTitle", "topCenter"], ["nz-submenu", "", "nzPlacement", "topRight", "nzTitle", "topRight"]],
    template: function NzDemoMenuHorizontalPositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5)(16, "ul")(17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8)(28, "ul")(29, "li", 2)(30, "ul")(31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 4)(36, "ul")(37, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 5)(42, "ul")(43, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 7)(48, "ul")(49, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 9)(54, "ul")(55, "li", 2)(56, "ul")(57, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 4)(62, "ul")(63, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 5)(68, "ul")(69, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 7)(74, "ul")(75, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 10)(80, "ul")(81, "li", 2)(82, "ul")(83, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 4)(88, "ul")(89, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 5)(94, "ul")(95, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 7)(100, "ul")(101, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 11)(106, "ul")(107, "li", 2)(108, "ul")(109, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 4)(114, "ul")(115, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 5)(120, "ul")(121, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li", 7)(126, "ul")(127, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 12)(132, "ul")(133, "li", 2)(134, "ul")(135, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 4)(140, "ul")(141, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 5)(146, "ul")(147, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 7)(152, "ul")(153, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"]],
    styles: ["[_nghost-%COMP%]     .ant-menu {\n\n    background-color: transparent\n}\n\n[_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-item, [_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu {\n\n    display: inline-flex;\n\n    align-items: center;\n\n    gap: 8px\n}\n\n[_nghost-%COMP%]     .ant-menu-item, [_nghost-%COMP%]     .ant-menu-submenu-title {\n\n    display: flex;\n\n    align-items: center\n}\n\n[_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-item-disabled, [_nghost-%COMP%]     .ant-menu-submenu-disabled {\n\n    opacity: .8 !important\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled) {\n\n    color: rgb(255 255 255 / .87) !important\n}\n\n[_nghost-%COMP%]     .ant-menu-submenu .ant-menu-submenu-title .anticon {\n\n    color: currentColor\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L3BsYWNlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSzs7SUFBQTtBQUFBOztBQUlBOzs7SUFBQSxvQkFBQTs7SUFBQSxtQkFBQTs7SUFBQTtBQUFBOztBQUlBOzs7SUFBQSxhQUFBOztJQUFBO0FBQUE7O0FBT0E7Ozs7O0lBQUE7QUFBQTs7QUFBQTs7Ozs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnV7XG4gICAgIEBhcHBseSBiZy10cmFuc3BhcmVudDtcbiAgIH1cbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaG9yaXpvbnRhbCA+IC5hbnQtbWVudS1pdGVtLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1ob3Jpem9udGFsID4gLmFudC1tZW51LXN1Ym1lbnV7XG4gICAgIEBhcHBseSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLVs4cHhdO1xuICAgfVxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWJtZW51LXRpdGxle1xuICAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XG4gICB9XG5cbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaXRlbS1kaXNhYmxlZCA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVkID4gLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUsXG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LWl0ZW0tZGlzYWJsZWQsXG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LXN1Ym1lbnUtZGlzYWJsZWR7XG4gICAgIEBhcHBseSBvcGFjaXR5LVsuOF0gZGFyazp0ZXh0LXdoaXRlL1suODddICN7IWltcG9ydGFudH07XG4gICB9XG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LXN1Ym1lbnUgLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUgLmFudGljb257XG4gICAgIEBhcHBseSB0ZXh0LWN1cnJlbnQ7XG4gICB9XG4gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66327:
/*!**************************************************!*\
  !*** ./src/app/components/menu/sider-current.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMenuSiderCurrentComponent: () => (/* binding */ NzDemoMenuSiderCurrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);



class NzDemoMenuSiderCurrentComponent {
  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };
  openHandler(value) {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
  static ɵfac = function NzDemoMenuSiderCurrentComponent_Factory(t) {
    return new (t || NzDemoMenuSiderCurrentComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMenuSiderCurrentComponent,
    selectors: [["nz-demo-menu-sider-current"]],
    decls: 35,
    vars: 3,
    consts: [["nz-menu", "", "nzMode", "inline", 2, "width", "240px"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail", 3, "nzOpen", "nzOpenChange"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore", 3, "nzOpen", "nzOpenChange"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting", 3, "nzOpen", "nzOpenChange"]],
    template: function NzDemoMenuSiderCurrentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_1_listener($event) {
          return ctx.openMap.sub1 = $event;
        })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_1_listener() {
          return ctx.openHandler("sub1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_15_listener($event) {
          return ctx.openMap.sub2 = $event;
        })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_15_listener() {
          return ctx.openHandler("sub2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul")(17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_27_listener($event) {
          return ctx.openMap.sub3 = $event;
        })("nzOpenChange", function NzDemoMenuSiderCurrentComponent_Template_li_nzOpenChange_27_listener() {
          return ctx.openHandler("sub3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul")(29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOpen", ctx.openMap.sub1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOpen", ctx.openMap.sub2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOpen", ctx.openMap.sub3);
      }
    },
    dependencies: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"]],
    styles: ["[_nghost-%COMP%]     .ant-menu {\n\n    background-color: transparent\n}\n\n[_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-item, [_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu {\n\n    display: inline-flex;\n\n    align-items: center;\n\n    gap: 8px\n}\n\n[_nghost-%COMP%]     .ant-menu-item, [_nghost-%COMP%]     .ant-menu-submenu-title {\n\n    display: flex;\n\n    align-items: center\n}\n\n[_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-item-disabled, [_nghost-%COMP%]     .ant-menu-submenu-disabled {\n\n    opacity: .8 !important\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled) {\n\n    color: rgb(255 255 255 / .87) !important\n}\n\n[_nghost-%COMP%]     .ant-menu-submenu .ant-menu-submenu-title .anticon {\n\n    color: currentColor\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L3NpZGVyLWN1cnJlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUs7O0lBQUE7QUFBQTs7QUFJQTs7O0lBQUEsb0JBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFJQTs7O0lBQUEsYUFBQTs7SUFBQTtBQUFBOztBQU9BOzs7OztJQUFBO0FBQUE7O0FBQUE7Ozs7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51e1xuICAgICBAYXBwbHkgYmctdHJhbnNwYXJlbnQ7XG4gICB9XG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LWhvcml6b250YWwgPiAuYW50LW1lbnUtaXRlbSxcbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaG9yaXpvbnRhbCA+IC5hbnQtbWVudS1zdWJtZW51e1xuICAgICBAYXBwbHkgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC1bOHB4XTtcbiAgIH1cbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaXRlbSxcbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudS10aXRsZXtcbiAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyO1xuICAgfVxuXG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LWl0ZW0tZGlzYWJsZWQgPiAuYW50LW1lbnUtc3VibWVudS10aXRsZSxcbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZCA+IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLWRpc2FibGVkLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVke1xuICAgICBAYXBwbHkgb3BhY2l0eS1bLjhdIGRhcms6dGV4dC13aGl0ZS9bLjg3XSAjeyFpbXBvcnRhbnR9O1xuICAgfVxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWJtZW51IC5hbnQtbWVudS1zdWJtZW51LXRpdGxlIC5hbnRpY29ue1xuICAgICBAYXBwbHkgdGV4dC1jdXJyZW50O1xuICAgfVxuICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 111:
/*!*********************************************!*\
  !*** ./src/app/components/menu/vertical.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMenuVerticalComponent: () => (/* binding */ NzDemoMenuVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);



class NzDemoMenuVerticalComponent {
  change(value) {
    console.log(value);
  }
  static ɵfac = function NzDemoMenuVerticalComponent_Factory(t) {
    return new (t || NzDemoMenuVerticalComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMenuVerticalComponent,
    selectors: [["nz-demo-menu-vertical"]],
    decls: 35,
    vars: 1,
    consts: [["nz-menu", "", 3, "nzMode"], ["nz-submenu", "", "nzTitle", "Navigation One", "nzIcon", "mail"], ["nz-menu-group", "", "nzTitle", "Item 1"], ["nz-menu-item", ""], ["nz-menu-group", "", "nzTitle", "Item 2"], ["nz-submenu", "", "nzTitle", "Navigation Two", "nzIcon", "appstore", 3, "nzOpenChange"], ["nz-submenu", "", "nzTitle", "Submenu"], ["nz-submenu", "", "nzTitle", "Navigation Three", "nzIcon", "setting"]],
    template: function NzDemoMenuVerticalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "ul")(3, "li", 2)(4, "ul")(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4)(10, "ul")(11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOpenChange", function NzDemoMenuVerticalComponent_Template_li_nzOpenChange_15_listener($event) {
          return ctx.change($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul")(17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Option 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Option 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 6)(22, "ul")(23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7)(28, "ul")(29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Option 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", "vertical");
      }
    },
    dependencies: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuItemComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_1__.NzMenuGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"]],
    styles: ["[nz-menu][_ngcontent-%COMP%] {\n  width: 240px;\n}\n\n[_nghost-%COMP%]     .ant-menu {\n  background-color: transparent;\n}\n\n[_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-item, [_nghost-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n[_nghost-%COMP%]     .ant-menu-item, [_nghost-%COMP%]     .ant-menu-submenu-title {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title, [_nghost-%COMP%]     .ant-menu-item-disabled, [_nghost-%COMP%]     .ant-menu-submenu-disabled {\n  opacity: .8 !important;\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled > .ant-menu-submenu-title), :is(.dark   [_nghost-%COMP%]     .ant-menu-item-disabled), :is(.dark   [_nghost-%COMP%]     .ant-menu-submenu-disabled) {\n  color: rgb(255 255 255 / .87) !important;\n}\n\n[_nghost-%COMP%]     .ant-menu-submenu .ant-menu-submenu-title .anticon {\n  color: currentColor;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsWUFBQTtBQUFOOztBQUdNO0VBQUE7QUFBQTs7QUFJQTs7RUFBQSxvQkFBQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFJQTs7RUFBQSxhQUFBO0VBQUE7QUFBQTs7QUFPQTs7OztFQUFBO0FBQUE7O0FBQUE7Ozs7RUFBQTtBQUFBOztBQUdBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIFtuei1tZW51XSB7XG4gICAgICB3aWR0aDogMjQwcHg7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnV7XG4gICAgICBAYXBwbHkgYmctdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaG9yaXpvbnRhbCA+IC5hbnQtbWVudS1pdGVtLFxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaG9yaXpvbnRhbCA+IC5hbnQtbWVudS1zdWJtZW51e1xuICAgICAgQGFwcGx5IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzhweF07XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtaXRlbSxcbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LXN1Ym1lbnUtdGl0bGV7XG4gICAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XG4gICAgfVxuXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLWRpc2FibGVkID4gLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUsXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVkID4gLmFudC1tZW51LXN1Ym1lbnUtdGl0bGUsXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1pdGVtLWRpc2FibGVkLFxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZHtcbiAgICAgIEBhcHBseSBvcGFjaXR5LVsuOF0gZGFyazp0ZXh0LXdoaXRlL1suODddICN7IWltcG9ydGFudH07XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtc3VibWVudSAuYW50LW1lbnUtc3VibWVudS10aXRsZSAuYW50aWNvbntcbiAgICAgIEBhcHBseSB0ZXh0LWN1cnJlbnQ7XG4gICAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_menu_index_module_ts.js.map