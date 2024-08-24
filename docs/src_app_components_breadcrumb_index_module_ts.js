"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_breadcrumb_index_module_ts"],{

/***/ 74972:
/*!************************************************!*\
  !*** ./src/app/components/breadcrumb/basic.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoBreadcrumbBasicComponent: () => (/* binding */ NzDemoBreadcrumbBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);


class NzDemoBreadcrumbBasicComponent {
  static ɵfac = function NzDemoBreadcrumbBasicComponent_Factory(t) {
    return new (t || NzDemoBreadcrumbBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoBreadcrumbBasicComponent,
    selectors: [["nz-demo-breadcrumb-basic"]],
    decls: 8,
    vars: 0,
    consts: [[1, "flex", "items-center", "modify-breadcrumb"], [1, "text-[14px]", "font-normal", "dark:text-white/[.87]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "text-[14px]", "font-normal", "dark:text-white/[.60]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "text-[14px]", "font-normal"], [1, "text-[14px]", "font-normal", "dark:text-white/[.30]", "[&>.ant-breadcrumb-separator]:text-light-extra"]],
    template: function NzDemoBreadcrumbBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb", 0)(1, "nz-breadcrumb-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-breadcrumb-item", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Application List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-breadcrumb-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " An Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbItemComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 12433:
/*!***************************************************!*\
  !*** ./src/app/components/breadcrumb/dropdown.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoBreadcrumbDropdownComponent: () => (/* binding */ NzDemoBreadcrumbDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7505);




class NzDemoBreadcrumbDropdownComponent {
  static ɵfac = function NzDemoBreadcrumbDropdownComponent_Factory(t) {
    return new (t || NzDemoBreadcrumbDropdownComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoBreadcrumbDropdownComponent,
    selectors: [["nz-demo-breadcrumb-dropdown"]],
    decls: 20,
    vars: 1,
    consts: [[1, "flex", "items-center", "max-xl:flex-wrap", "modify-breadcrumb"], [1, "text-[14px]", "font-normal", "dark:text-white/[.87]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "text-[14px]", "font-normal", "dark:text-white/[.60]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "text-[14px]", "font-normal", "dark:text-white/[.60]", "[&>.ant-breadcrumb-separator]:text-light-extra", 3, "nzOverlay"], ["href", ""], [1, "text-[14px]", "font-normal", "dark:text-white/[.30]", "[&>.ant-breadcrumb-separator]:text-light-extra"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", "", 1, "block", "bg-white", "dark:bg-[#1b1e2b]", "shadow-regular", "dark:shadow-[0_5px_30px_rgba(1,4,19,.60)]", "rounded-4", "capitalize"], ["nz-menu-item", "", 1, "flex", "items-center", "text-theme-gray", "dark:text-white/60", "hover:bg-primary/10", "hover:text-primary", "dark:hover:bg-white/10", "px-3", "py-1.5", "text-sm", "dark:hover:text-white/[.87]"]],
    template: function NzDemoBreadcrumbDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb", 0)(1, "nz-breadcrumb-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ant Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-breadcrumb-item", 2)(4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-breadcrumb-item", 3)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "An Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-breadcrumb-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-dropdown-menu", null, 6)(13, "ul", 7)(14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOverlay", _r0);
      }
    },
    dependencies: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbItemComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__.NzMenuItemComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__.NzDropdownMenuComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 51916:
/*!*******************************************************!*\
  !*** ./src/app/components/breadcrumb/en.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoBreadcrumbEnComponent: () => (/* binding */ NzDemoBreadcrumbEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 74972);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ 12433);
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./separator */ 10413);
/* harmony import */ var _with_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-icon */ 29138);






class NzDemoBreadcrumbEnComponent {
  static ɵfac = function NzDemoBreadcrumbEnComponent_Factory(t) {
    return new (t || NzDemoBreadcrumbEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzDemoBreadcrumbEnComponent,
    selectors: [["nz-demo-breadcrumb"]],
    decls: 29,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoBreadcrumbEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-demo-breadcrumb-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "With Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-demo-breadcrumb-with-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Breadcrumbs with drop down menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "nz-demo-breadcrumb-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Configuring the Separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "nz-demo-breadcrumb-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoBreadcrumbBasicComponent, _dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDemoBreadcrumbDropdownComponent, _separator__WEBPACK_IMPORTED_MODULE_2__.NzDemoBreadcrumbSeparatorComponent, _with_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoBreadcrumbWithIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55379:
/*!*******************************************************!*\
  !*** ./src/app/components/breadcrumb/index.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoBreadcrumbModule: () => (/* binding */ NzDemoBreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 63393);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 74972);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown */ 12433);
/* harmony import */ var _separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./separator */ 10413);
/* harmony import */ var _with_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-icon */ 29138);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 51916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7505);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);













class NzDemoBreadcrumbModule {
  static ɵfac = function NzDemoBreadcrumbModule_Factory(t) {
    return new (t || NzDemoBreadcrumbModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NzDemoBreadcrumbModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoBreadcrumbEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoBreadcrumbModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoBreadcrumbBasicComponent, _dropdown__WEBPACK_IMPORTED_MODULE_3__.NzDemoBreadcrumbDropdownComponent, _separator__WEBPACK_IMPORTED_MODULE_4__.NzDemoBreadcrumbSeparatorComponent, _with_icon__WEBPACK_IMPORTED_MODULE_5__.NzDemoBreadcrumbWithIconComponent, _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoBreadcrumbEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__.NzDropDownModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 63393:
/*!*************************************************!*\
  !*** ./src/app/components/breadcrumb/module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7505);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);



const moduleList = [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_0__.NzBreadCrumbModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__.NzDropDownModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];

/***/ }),

/***/ 10413:
/*!****************************************************!*\
  !*** ./src/app/components/breadcrumb/separator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoBreadcrumbSeparatorComponent: () => (/* binding */ NzDemoBreadcrumbSeparatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);



function NzDemoBreadcrumbSeparatorComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }
}
class NzDemoBreadcrumbSeparatorComponent {
  static ɵfac = function NzDemoBreadcrumbSeparatorComponent_Factory(t) {
    return new (t || NzDemoBreadcrumbSeparatorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoBreadcrumbSeparatorComponent,
    selectors: [["nz-demo-breadcrumb-separator"]],
    decls: 23,
    vars: 1,
    consts: [[1, "text-white/[.87]"], ["nzSeparator", ">", 1, "flex", "items-center", "modify-breadcrumb"], [1, "text-[14px]", "font-normal", "dark:text-white/[.87]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "text-[14px]", "font-normal", "dark:text-white/[.60]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "text-[14px]", "font-normal", "dark:text-white/[.30]", "[&>.ant-breadcrumb-separator]:text-light-extra"], [1, "flex", "items-center", "modify-breadcrumb", 3, "nzSeparator"], ["iconTemplate", ""], ["nz-icon", "", "nzType", "arrow-right"]],
    template: function NzDemoBreadcrumbSeparatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "String");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-breadcrumb", 1)(3, "nz-breadcrumb-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-breadcrumb-item", 3)(6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Application List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-breadcrumb-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " An Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-breadcrumb", 5)(14, "nz-breadcrumb-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-breadcrumb-item", 3)(17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Application List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-breadcrumb-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " An Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NzDemoBreadcrumbSeparatorComponent_ng_template_21_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSeparator", _r0);
      }
    },
    dependencies: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbItemComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective],
    styles: ["h4[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  font-size: 14px;\n  line-height: 1;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9icmVhZGNydW1iL3NlcGFyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGFBQUE7QUFBUjs7QUFHTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGg0OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgaDQge1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 29138:
/*!****************************************************!*\
  !*** ./src/app/components/breadcrumb/with-icon.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoBreadcrumbWithIconComponent: () => (/* binding */ NzDemoBreadcrumbWithIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);



class NzDemoBreadcrumbWithIconComponent {
  static ɵfac = function NzDemoBreadcrumbWithIconComponent_Factory(t) {
    return new (t || NzDemoBreadcrumbWithIconComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoBreadcrumbWithIconComponent,
    selectors: [["nz-demo-breadcrumb-with-icon"]],
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "items-center", "modify-breadcrumb"], [1, "text-[14px]", "font-normal", "dark:text-white/[.87]", "[&>.ant-breadcrumb-separator]:text-light-extra", "inline-flex", "items-center", "[&>span]:inline-flex", "[&>span]:items-center"], ["nz-icon", "", "nzType", "home"], [1, "text-[14px]", "font-normal", "dark:text-white/[.60]", "[&>.ant-breadcrumb-separator]:text-light-extra", "inline-flex", "items-center", "[&>span]:inline-flex", "[&>span]:items-center", "[&>span>a]:inline-flex", "[&>span>a]:items-center"], ["nz-icon", "", "nzType", "user"], [1, "text-[14px]", "font-normal", "dark:text-white/[.30]", "[&>.ant-breadcrumb-separator]:text-light-extra"]],
    template: function NzDemoBreadcrumbWithIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb", 0)(1, "nz-breadcrumb-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-breadcrumb-item", 3)(4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Application List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-breadcrumb-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.NzBreadCrumbItemComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconDirective],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_breadcrumb_index_module_ts.js.map