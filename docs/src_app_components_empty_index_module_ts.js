"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_empty_index_module_ts"],{

/***/ 36474:
/*!*******************************************!*\
  !*** ./src/app/components/empty/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoEmptyBasicComponent: () => (/* binding */ NzDemoEmptyBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);


class NzDemoEmptyBasicComponent {
  static ɵfac = function NzDemoEmptyBasicComponent_Factory(t) {
    return new (t || NzDemoEmptyBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoEmptyBasicComponent,
    selectors: [["nz-demo-empty-basic"]],
    decls: 1,
    vars: 0,
    template: function NzDemoEmptyBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty");
      }
    },
    dependencies: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 95238:
/*!***********************************************!*\
  !*** ./src/app/components/empty/customize.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoEmptyCustomizeComponent: () => (/* binding */ NzDemoEmptyCustomizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





function NzDemoEmptyCustomizeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customize ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function NzDemoEmptyCustomizeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoEmptyCustomizeComponent_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class NzDemoEmptyCustomizeComponent {
  onClick() {
    console.log('clicked');
  }
  static ɵfac = function NzDemoEmptyCustomizeComponent_Factory(t) {
    return new (t || NzDemoEmptyCustomizeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoEmptyCustomizeComponent,
    selectors: [["nz-demo-empty-customize"]],
    decls: 5,
    vars: 2,
    consts: [["nzNotFoundImage", "https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg", 3, "nzNotFoundContent", "nzNotFoundFooter"], ["contentTpl", ""], ["footerTpl", ""], [1, "text-[15px]", "font-normal", "text-theme-gray", "dark:text-white/60", "capitalize"], ["href", "#API", 1, "text-primary", "hover:opacity-5"], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"]],
    template: function NzDemoEmptyCustomizeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-empty", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoEmptyCustomizeComponent_ng_template_1_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoEmptyCustomizeComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNotFoundContent", _r0)("nzNotFoundFooter", _r2);
      }
    },
    dependencies: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    styles: ["[_nghost-%COMP%]     .ant-empty .ant-empty-image {\n    display: inline-block\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lbXB0eS9jdXN0b21pemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtZW1wdHkgLmFudC1lbXB0eS1pbWFnZSB7XG4gICAgICBAYXBwbHkgaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4524:
/*!**************************************************!*\
  !*** ./src/app/components/empty/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoEmptyEnComponent: () => (/* binding */ NzDemoEmptyEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 36474);
/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customize */ 95238);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple */ 24503);





class NzDemoEmptyEnComponent {
  static ɵfac = function NzDemoEmptyEnComponent_Factory(t) {
    return new (t || NzDemoEmptyEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NzDemoEmptyEnComponent,
    selectors: [["nz-demo-empty"]],
    decls: 22,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzXl", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "h-full"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoEmptyEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "nz-demo-empty-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "nz-demo-empty-customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Chose image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "nz-demo-empty-simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoEmptyBasicComponent, _customize__WEBPACK_IMPORTED_MODULE_1__.NzDemoEmptyCustomizeComponent, _simple__WEBPACK_IMPORTED_MODULE_2__.NzDemoEmptySimpleComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 56299:
/*!**************************************************!*\
  !*** ./src/app/components/empty/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoEmptyModule: () => (/* binding */ NzDemoEmptyModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 64636);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 36474);
/* harmony import */ var _customize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize */ 95238);
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple */ 24503);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.component */ 4524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 13094);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 63479);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);




















class NzDemoEmptyModule {
  static ɵfac = function NzDemoEmptyModule_Factory(t) {
    return new (t || NzDemoEmptyModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: NzDemoEmptyModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoEmptyEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NzDemoEmptyModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoEmptyBasicComponent, _customize__WEBPACK_IMPORTED_MODULE_3__.NzDemoEmptyCustomizeComponent, _simple__WEBPACK_IMPORTED_MODULE_4__.NzDemoEmptySimpleComponent, _en_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoEmptyEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_8__.NzEmptyModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_10__.NzSwitchModule, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_11__.NzCascaderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_13__.NzTreeSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableModule, ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_16__.NzTransferModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 64636:
/*!********************************************!*\
  !*** ./src/app/components/empty/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 13094);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/transfer */ 63479);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);











const moduleList = [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_0__.NzEmptyModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchModule, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__.NzCascaderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__.NzDividerModule, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_5__.NzTreeSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzSelectModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableModule, ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_8__.NzTransferModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__.NzListModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonModule];

/***/ }),

/***/ 24503:
/*!********************************************!*\
  !*** ./src/app/components/empty/simple.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoEmptySimpleComponent: () => (/* binding */ NzDemoEmptySimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);


class NzDemoEmptySimpleComponent {
  static ɵfac = function NzDemoEmptySimpleComponent_Factory(t) {
    return new (t || NzDemoEmptySimpleComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoEmptySimpleComponent,
    selectors: [["nz-demo-empty-simple"]],
    decls: 1,
    vars: 0,
    consts: [["nzNotFoundImage", "simple"]],
    template: function NzDemoEmptySimpleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 0);
      }
    },
    dependencies: [ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_1__.NzEmptyComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2783:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-tree.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzTreeBase: () => (/* binding */ NzTreeBase),
/* harmony export */   NzTreeBaseService: () => (/* binding */ NzTreeBaseService),
/* harmony export */   NzTreeHigherOrderServiceToken: () => (/* binding */ NzTreeHigherOrderServiceToken),
/* harmony export */   NzTreeNode: () => (/* binding */ NzTreeNode),
/* harmony export */   flattenTreeData: () => (/* binding */ flattenTreeData),
/* harmony export */   getKey: () => (/* binding */ getKey),
/* harmony export */   getPosition: () => (/* binding */ getPosition),
/* harmony export */   isCheckDisabled: () => (/* binding */ isCheckDisabled),
/* harmony export */   isInArray: () => (/* binding */ isInArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);




/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNode {
  get treeService() {
    return this.service || this.parentNode && this.parentNode.treeService;
  }
  /**
   * Init nzTreeNode
   *
   * @param option: user's input
   * @param parent
   * @param service: base nzTreeService
   */
  constructor(option, parent = null, service = null) {
    this._title = '';
    this.level = 0;
    // Parent Node
    this.parentNode = null;
    this._icon = '';
    this._children = [];
    this._isLeaf = false;
    this._isChecked = false;
    this._isSelectable = false;
    this._isDisabled = false;
    this._isDisableCheckbox = false;
    this._isExpanded = false;
    this._isHalfChecked = false;
    this._isSelected = false;
    this._isLoading = false;
    this.canHide = false;
    this.isMatched = false;
    this.service = null;
    if (option instanceof NzTreeNode) {
      return option;
    }
    this.service = service || null;
    this.origin = option;
    this.key = option.key;
    this.parentNode = parent;
    this._title = option.title || '---';
    this._icon = option.icon || '';
    this._isLeaf = option.isLeaf || false;
    this._children = [];
    // option params
    this._isChecked = option.checked || false;
    this._isSelectable = option.disabled || option.selectable !== false;
    this._isDisabled = option.disabled || false;
    this._isDisableCheckbox = option.disableCheckbox || false;
    this._isExpanded = option.isLeaf ? false : option.expanded || false;
    this._isHalfChecked = false;
    this._isSelected = !option.disabled && option.selected || false;
    this._isLoading = false;
    this.isMatched = false;
    /**
     * parent's checked status will affect children while initializing
     */
    if (parent) {
      this.level = parent.level + 1;
    } else {
      this.level = 0;
    }
    if (typeof option.children !== 'undefined' && option.children !== null) {
      option.children.forEach(nodeOptions => {
        const s = this.treeService;
        if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
          nodeOptions.checked = option.checked;
        }
        this._children.push(new NzTreeNode(nodeOptions, this));
      });
    }
  }
  /**
   * auto generate
   * get
   * set
   */
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this.update();
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
    this.update();
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
    this.update();
  }
  get isLeaf() {
    return this._isLeaf;
  }
  set isLeaf(value) {
    this._isLeaf = value;
    this.update();
  }
  get isChecked() {
    return this._isChecked;
  }
  set isChecked(value) {
    this._isChecked = value;
    this.origin.checked = value;
    this.afterValueChange('isChecked');
  }
  get isHalfChecked() {
    return this._isHalfChecked;
  }
  set isHalfChecked(value) {
    this._isHalfChecked = value;
    this.afterValueChange('isHalfChecked');
  }
  get isSelectable() {
    return this._isSelectable;
  }
  set isSelectable(value) {
    this._isSelectable = value;
    this.update();
  }
  get isDisabled() {
    return this._isDisabled;
  }
  set isDisabled(value) {
    this._isDisabled = value;
    this.update();
  }
  get isDisableCheckbox() {
    return this._isDisableCheckbox;
  }
  set isDisableCheckbox(value) {
    this._isDisableCheckbox = value;
    this.update();
  }
  get isExpanded() {
    return this._isExpanded;
  }
  set isExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange('isExpanded');
    this.afterValueChange('reRender');
  }
  get isSelected() {
    return this._isSelected;
  }
  set isSelected(value) {
    this._isSelected = value;
    this.origin.selected = value;
    this.afterValueChange('isSelected');
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    this._isLoading = value;
    this.update();
  }
  setSyncChecked(checked = false, halfChecked = false) {
    this.setChecked(checked, halfChecked);
    if (this.treeService && !this.treeService.isCheckStrictly) {
      this.treeService.conduct(this);
    }
  }
  setChecked(checked = false, halfChecked = false) {
    this.origin.checked = checked;
    this.isChecked = checked;
    this.isHalfChecked = halfChecked;
  }
  setExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange('isExpanded');
  }
  getParentNode() {
    return this.parentNode;
  }
  getChildren() {
    return this.children;
  }
  /**
   * Support appending child nodes by position. Leaf node cannot be appended.
   */
  addChildren(children, childPos = -1) {
    if (!this.isLeaf) {
      children.forEach(node => {
        const refreshLevel = n => {
          n.getChildren().forEach(c => {
            c.level = c.getParentNode().level + 1;
            // flush origin
            c.origin.level = c.level;
            refreshLevel(c);
          });
        };
        let child = node;
        if (child instanceof NzTreeNode) {
          child.parentNode = this;
        } else {
          child = new NzTreeNode(node, this);
        }
        child.level = this.level + 1;
        child.origin.level = child.level;
        refreshLevel(child);
        try {
          childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
          // flush origin
        } catch (e) {}
      });
      this.origin.children = this.getChildren().map(v => v.origin);
      // remove loading state
      this.isLoading = false;
    }
    this.afterValueChange('addChildren');
    this.afterValueChange('reRender');
  }
  clearChildren() {
    // refresh checked state
    this.afterValueChange('clearChildren');
    this.children = [];
    this.origin.children = [];
    this.afterValueChange('reRender');
  }
  remove() {
    const parentNode = this.getParentNode();
    if (parentNode) {
      parentNode.children = parentNode.getChildren().filter(v => v.key !== this.key);
      parentNode.origin.children = parentNode.origin.children.filter(v => v.key !== this.key);
      this.afterValueChange('remove');
      this.afterValueChange('reRender');
    }
  }
  afterValueChange(key) {
    if (this.treeService) {
      switch (key) {
        case 'isChecked':
          this.treeService.setCheckedNodeList(this);
          break;
        case 'isHalfChecked':
          this.treeService.setHalfCheckedNodeList(this);
          break;
        case 'isExpanded':
          this.treeService.setExpandedNodeList(this);
          break;
        case 'isSelected':
          this.treeService.setNodeActive(this);
          break;
        case 'clearChildren':
          this.treeService.afterRemove(this.getChildren());
          break;
        case 'remove':
          this.treeService.afterRemove([this]);
          break;
        case 'reRender':
          this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map(v => v.key));
          break;
      }
    }
    this.update();
  }
  update() {
    if (this.component) {
      this.component.markForCheck();
    }
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isCheckDisabled(node) {
  const {
    isDisabled,
    isDisableCheckbox
  } = node;
  return !!(isDisabled || isDisableCheckbox);
}
function isInArray(needle, haystack) {
  return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
function getPosition(level, index) {
  return `${level}-${index}`;
}
function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 *
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */
function flattenTreeData(treeNodeList = [], expandedKeys = []) {
  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  const flattenList = [];
  function dig(list, parent = null) {
    return list.map((treeNode, index) => {
      const pos = getPosition(parent ? parent.pos : '0', index);
      const mergedKey = getKey(treeNode.key, pos);
      treeNode.isStart = [...(parent ? parent.isStart : []), index === 0];
      treeNode.isEnd = [...(parent ? parent.isEnd : []), index === list.length - 1];
      // Add FlattenDataNode into list
      // TODO: only need data here.
      const flattenNode = {
        parent,
        pos,
        children: [],
        data: treeNode,
        isStart: [...(parent ? parent.isStart : []), index === 0],
        isEnd: [...(parent ? parent.isEnd : []), index === list.length - 1]
      };
      flattenList.push(flattenNode);
      // Loop treeNode children
      if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeBaseService {
  constructor() {
    this.DRAG_SIDE_RANGE = 0.25;
    this.DRAG_MIN_GAP = 2;
    this.isCheckStrictly = false;
    this.isMultiple = false;
    this.rootNodes = [];
    this.flattenNodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.selectedNodeList = [];
    this.expandedNodeList = [];
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    this.matchedNodeList = [];
  }
  /**
   * reset tree nodes will clear default node list
   */
  initTree(nzNodes) {
    this.rootNodes = nzNodes;
    this.expandedNodeList = [];
    this.selectedNodeList = [];
    this.halfCheckedNodeList = [];
    this.checkedNodeList = [];
    this.matchedNodeList = [];
  }
  flattenTreeData(nzNodes, expandedKeys = []) {
    this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map(item => item.data));
  }
  getSelectedNode() {
    return this.selectedNode;
  }
  /**
   * get some list
   */
  getSelectedNodeList() {
    return this.conductNodeState('select');
  }
  /**
   * return checked nodes
   */
  getCheckedNodeList() {
    return this.conductNodeState('check');
  }
  getHalfCheckedNodeList() {
    return this.conductNodeState('halfCheck');
  }
  /**
   * return expanded nodes
   */
  getExpandedNodeList() {
    return this.conductNodeState('expand');
  }
  /**
   * return search matched nodes
   */
  getMatchedNodeList() {
    return this.conductNodeState('match');
  }
  isArrayOfNzTreeNode(value) {
    return value.every(item => item instanceof NzTreeNode);
  }
  /**
   * set drag node
   */
  setSelectedNode(node) {
    this.selectedNode = node;
  }
  /**
   * set node selected status
   */
  setNodeActive(node) {
    if (!this.isMultiple && node.isSelected) {
      this.selectedNodeList.forEach(n => {
        if (node.key !== n.key) {
          // reset other nodes
          n.isSelected = false;
        }
      });
      // single mode: remove pre node
      this.selectedNodeList = [];
    }
    this.setSelectedNodeList(node, this.isMultiple);
  }
  /**
   * add or remove node to selectedNodeList
   */
  setSelectedNodeList(node, isMultiple = false) {
    const index = this.getIndexOfArray(this.selectedNodeList, node.key);
    if (isMultiple) {
      if (node.isSelected && index === -1) {
        this.selectedNodeList.push(node);
      }
    } else {
      if (node.isSelected && index === -1) {
        this.selectedNodeList = [node];
      }
    }
    if (!node.isSelected) {
      this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
    }
  }
  /**
   * merge checked nodes
   */
  setHalfCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
    if (node.isHalfChecked && index === -1) {
      this.halfCheckedNodeList.push(node);
    } else if (!node.isHalfChecked && index > -1) {
      this.halfCheckedNodeList = this.halfCheckedNodeList.filter(n => node.key !== n.key);
    }
  }
  setCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.checkedNodeList, node.key);
    if (node.isChecked && index === -1) {
      this.checkedNodeList.push(node);
    } else if (!node.isChecked && index > -1) {
      this.checkedNodeList = this.checkedNodeList.filter(n => node.key !== n.key);
    }
  }
  /**
   * conduct checked/selected/expanded keys
   */
  conductNodeState(type = 'check') {
    let resultNodesList = [];
    switch (type) {
      case 'select':
        resultNodesList = this.selectedNodeList;
        break;
      case 'expand':
        resultNodesList = this.expandedNodeList;
        break;
      case 'match':
        resultNodesList = this.matchedNodeList;
        break;
      case 'check':
        resultNodesList = this.checkedNodeList;
        const isIgnore = node => {
          const parentNode = node.getParentNode();
          if (parentNode) {
            if (this.checkedNodeList.findIndex(n => n.key === parentNode.key) > -1) {
              return true;
            } else {
              return isIgnore(parentNode);
            }
          }
          return false;
        };
        // merge checked
        if (!this.isCheckStrictly) {
          resultNodesList = this.checkedNodeList.filter(n => !isIgnore(n));
        }
        break;
      case 'halfCheck':
        if (!this.isCheckStrictly) {
          resultNodesList = this.halfCheckedNodeList;
        }
        break;
    }
    return resultNodesList;
  }
  /**
   * set expanded nodes
   */
  setExpandedNodeList(node) {
    if (node.isLeaf) {
      return;
    }
    const index = this.getIndexOfArray(this.expandedNodeList, node.key);
    if (node.isExpanded && index === -1) {
      this.expandedNodeList.push(node);
    } else if (!node.isExpanded && index > -1) {
      this.expandedNodeList.splice(index, 1);
    }
  }
  setMatchedNodeList(node) {
    const index = this.getIndexOfArray(this.matchedNodeList, node.key);
    if (node.isMatched && index === -1) {
      this.matchedNodeList.push(node);
    } else if (!node.isMatched && index > -1) {
      this.matchedNodeList.splice(index, 1);
    }
  }
  /**
   * check state
   *
   * @param isCheckStrictly
   */
  refreshCheckState(isCheckStrictly = false) {
    if (isCheckStrictly) {
      return;
    }
    this.checkedNodeList.forEach(node => {
      this.conduct(node, isCheckStrictly);
    });
  }
  // reset other node checked state based current node
  conduct(node, isCheckStrictly = false) {
    const isChecked = node.isChecked;
    if (node && !isCheckStrictly) {
      this.conductUp(node);
      this.conductDown(node, isChecked);
    }
  }
  /**
   * 1、children half checked
   * 2、children all checked, parent checked
   * 3、no children checked
   */
  conductUp(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      if (!isCheckDisabled(parentNode)) {
        if (parentNode.children.every(child => isCheckDisabled(child) || !child.isHalfChecked && child.isChecked)) {
          parentNode.isChecked = true;
          parentNode.isHalfChecked = false;
        } else if (parentNode.children.some(child => child.isHalfChecked || child.isChecked)) {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = true;
        } else {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = false;
        }
      }
      this.setCheckedNodeList(parentNode);
      this.setHalfCheckedNodeList(parentNode);
      this.conductUp(parentNode);
    }
  }
  /**
   * reset child check state
   */
  conductDown(node, value) {
    if (!isCheckDisabled(node)) {
      node.isChecked = value;
      node.isHalfChecked = false;
      this.setCheckedNodeList(node);
      this.setHalfCheckedNodeList(node);
      node.children.forEach(n => {
        this.conductDown(n, value);
      });
    }
  }
  /**
   * flush after delete node
   */
  afterRemove(nodes) {
    // to reset selectedNodeList & expandedNodeList
    const loopNode = node => {
      // remove selected node
      this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
      // remove expanded node
      this.expandedNodeList = this.expandedNodeList.filter(n => n.key !== node.key);
      // remove checked node
      this.checkedNodeList = this.checkedNodeList.filter(n => n.key !== node.key);
      if (node.children) {
        node.children.forEach(child => {
          loopNode(child);
        });
      }
    };
    nodes.forEach(n => {
      loopNode(n);
    });
    this.refreshCheckState(this.isCheckStrictly);
  }
  /**
   * drag event
   */
  refreshDragNode(node) {
    if (node.children.length === 0) {
      // until root
      this.conductUp(node);
    } else {
      node.children.forEach(child => {
        this.refreshDragNode(child);
      });
    }
  }
  // reset node level
  resetNodeLevel(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      node.level = parentNode.level + 1;
    } else {
      node.level = 0;
    }
    for (const child of node.children) {
      this.resetNodeLevel(child);
    }
  }
  calcDropPosition(event) {
    const {
      clientY
    } = event;
    // to fix firefox undefined
    const {
      top,
      bottom,
      height
    } = event.target.getBoundingClientRect();
    const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
    if (clientY <= top + des) {
      return -1;
    } else if (clientY >= bottom - des) {
      return 1;
    }
    return 0;
  }
  /**
   * drop
   * 0: inner -1: pre 1: next
   */
  dropAndApply(targetNode, dragPos = -1) {
    if (!targetNode || dragPos > 1) {
      return;
    }
    const treeService = targetNode.treeService;
    const targetParent = targetNode.getParentNode();
    const isSelectedRootNode = this.selectedNode.getParentNode();
    // remove the dragNode
    if (isSelectedRootNode) {
      isSelectedRootNode.children = isSelectedRootNode.children.filter(n => n.key !== this.selectedNode.key);
    } else {
      this.rootNodes = this.rootNodes.filter(n => n.key !== this.selectedNode.key);
    }
    switch (dragPos) {
      case 0:
        targetNode.addChildren([this.selectedNode]);
        this.resetNodeLevel(targetNode);
        break;
      case -1:
      case 1:
        const tIndex = dragPos === 1 ? 1 : 0;
        if (targetParent) {
          targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
          const parentNode = this.selectedNode.getParentNode();
          if (parentNode) {
            this.resetNodeLevel(parentNode);
          }
        } else {
          const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
          // Insert root node.
          this.rootNodes.splice(targetIndex, 0, this.selectedNode);
          this.rootNodes[targetIndex].parentNode = null;
          this.resetNodeLevel(this.rootNodes[targetIndex]);
        }
        break;
    }
    // flush all nodes
    this.rootNodes.forEach(child => {
      if (!child.treeService) {
        child.service = treeService;
      }
      this.refreshDragNode(child);
    });
  }
  /**
   * emit Structure
   * eventName
   * node
   * event: MouseEvent / DragEvent
   * dragNode
   */
  formatEvent(eventName, node, event) {
    const emitStructure = {
      eventName,
      node,
      event
    };
    switch (eventName) {
      case 'dragstart':
      case 'dragenter':
      case 'dragover':
      case 'dragleave':
      case 'drop':
      case 'dragend':
        Object.assign(emitStructure, {
          dragNode: this.getSelectedNode()
        });
        break;
      case 'click':
      case 'dblclick':
        Object.assign(emitStructure, {
          selectedKeys: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          nodes: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.selectedNodeList.map(n => n.key)
        });
        break;
      case 'check':
        const checkedNodeList = this.getCheckedNodeList();
        Object.assign(emitStructure, {
          checkedKeys: checkedNodeList
        });
        Object.assign(emitStructure, {
          nodes: checkedNodeList
        });
        Object.assign(emitStructure, {
          keys: checkedNodeList.map(n => n.key)
        });
        break;
      case 'search':
        Object.assign(emitStructure, {
          matchedKeys: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          nodes: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          keys: this.getMatchedNodeList().map(n => n.key)
        });
        break;
      case 'expand':
        Object.assign(emitStructure, {
          nodes: this.expandedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.expandedNodeList.map(n => n.key)
        });
        break;
    }
    return emitStructure;
  }
  /**
   * New functions for flatten nodes
   */
  getIndexOfArray(list, key) {
    return list.findIndex(v => v.key === key);
  }
  /**
   * Render by nzCheckedKeys
   * When keys equals null, just render with checkStrictly
   *
   * @param keys
   * @param checkStrictly
   */
  conductCheck(keys, checkStrictly) {
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    const calc = nodes => {
      nodes.forEach(node => {
        if (keys === null) {
          // render tree if no default checked keys found
          node.isChecked = !!node.origin.checked;
        } else {
          if (isInArray(node.key, keys || [])) {
            node.isChecked = true;
            node.isHalfChecked = false;
          } else {
            node.isChecked = false;
            node.isHalfChecked = false;
          }
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
    this.refreshCheckState(checkStrictly);
  }
  conductExpandedKeys(keys = []) {
    const expandedKeySet = new Set(keys === true ? [] : keys);
    this.expandedNodeList = [];
    const calc = nodes => {
      nodes.forEach(node => {
        node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
        if (node.isExpanded) {
          this.setExpandedNodeList(node);
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
  }
  conductSelectedKeys(keys, isMulti) {
    this.selectedNodeList.forEach(node => node.isSelected = false);
    this.selectedNodeList = [];
    const calc = nodes => nodes.every(node => {
      if (isInArray(node.key, keys)) {
        node.isSelected = true;
        this.setSelectedNodeList(node);
        if (!isMulti) {
          // if not support multi select
          return false;
        }
      } else {
        node.isSelected = false;
      }
      if (node.children.length > 0) {
        // Recursion
        return calc(node.children);
      }
      return true;
    });
    calc(this.rootNodes);
  }
  /**
   * Expand parent nodes by child node
   *
   * @param node
   */
  expandNodeAllParentBySearch(node) {
    const calc = n => {
      if (n) {
        n.canHide = false;
        n.setExpanded(true);
        this.setExpandedNodeList(n);
        if (n.getParentNode()) {
          return calc(n.getParentNode());
        }
      }
    };
    calc(node.getParentNode());
  }
  static #_ = this.ɵfac = function NzTreeBaseService_Factory(t) {
    return new (t || NzTreeBaseService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NzTreeBaseService,
    factory: NzTreeBaseService.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeBaseService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NzTreeHigherOrderServiceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('NzTreeHigherOrder');

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeBase {
  constructor(nzTreeService) {
    this.nzTreeService = nzTreeService;
  }
  /**
   * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
   */
  coerceTreeNodes(value) {
    let nodes = [];
    if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
      // has not been new NzTreeNode
      nodes = value.map(item => new NzTreeNode(item, null, this.nzTreeService));
    } else {
      nodes = value.map(item => {
        item.service = this.nzTreeService;
        return item;
      });
    }
    return nodes;
  }
  /**
   * Get all nodes({@link NzTreeNode})
   */
  getTreeNodes() {
    return this.nzTreeService.rootNodes;
  }
  /**
   * Get {@link NzTreeNode} with key
   */
  getTreeNodeByKey(key) {
    // flat tree nodes
    const nodes = [];
    const getNode = node => {
      nodes.push(node);
      node.getChildren().forEach(n => {
        getNode(n);
      });
    };
    this.getTreeNodes().forEach(n => {
      getNode(n);
    });
    return nodes.find(n => n.key === key) || null;
  }
  /**
   * Get checked nodes(merged)
   */
  getCheckedNodeList() {
    return this.nzTreeService.getCheckedNodeList();
  }
  /**
   * Get selected nodes
   */
  getSelectedNodeList() {
    return this.nzTreeService.getSelectedNodeList();
  }
  /**
   * Get half checked nodes
   */
  getHalfCheckedNodeList() {
    return this.nzTreeService.getHalfCheckedNodeList();
  }
  /**
   * Get expanded nodes
   */
  getExpandedNodeList() {
    return this.nzTreeService.getExpandedNodeList();
  }
  /**
   * Get matched nodes(if nzSearchValue is not null)
   */
  getMatchedNodeList() {
    return this.nzTreeService.getMatchedNodeList();
  }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 63479:
/*!************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-transfer.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzTransferComponent: () => (/* binding */ NzTransferComponent),
/* harmony export */   NzTransferListComponent: () => (/* binding */ NzTransferListComponent),
/* harmony export */   NzTransferModule: () => (/* binding */ NzTransferModule),
/* harmony export */   NzTransferSearchComponent: () => (/* binding */ NzTransferSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 12235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 58989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 44336);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/form */ 40375);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);



























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTransferSearchComponent_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "ant-input-disabled": a0
  };
};
const _c2 = ["headerCheckbox"];
const _c3 = ["checkboxes"];
function NzTransferListComponent_ng_template_0_ul_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
  }
}
function NzTransferListComponent_ng_template_0_ul_0_li_1_ng_template_4_Template(rf, ctx) {}
const _c4 = function (a0) {
  return {
    "ant-transfer-list-content-item-disabled": a0
  };
};
const _c5 = function (a0) {
  return {
    $implicit: a0
  };
};
function NzTransferListComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTransferListComponent_ng_template_0_ul_0_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onItemSelect(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzTransferListComponent_ng_template_0_ul_0_li_1_Template_label_nzCheckedChange_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onItemSelect(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTransferListComponent_ng_template_0_ul_0_li_1_ng_container_3_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTransferListComponent_ng_template_0_ul_0_li_1_ng_template_4_Template, 0, 0, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx_r9.disabled || item_r10.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", item_r10.checked)("nzDisabled", ctx_r9.disabled || item_r10.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.render)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, item_r10));
  }
}
function NzTransferListComponent_ng_template_0_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTransferListComponent_ng_template_0_ul_0_li_1_Template, 6, 11, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.validData)("ngForTrackBy", ctx_r7.trackByHide);
  }
}
function NzTransferListComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzComponentName", "transfer")("specificContent", ctx_r8.notFoundContent);
  }
}
function NzTransferListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTransferListComponent_ng_template_0_ul_0_Template, 2, 2, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTransferListComponent_ng_template_0_div_1_Template, 2, 2, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stat.shownCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stat.shownCount === 0);
  }
}
function NzTransferListComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzTransferListComponent_label_3_Template_label_nzCheckedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onItemSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r2.stat.checkAll)("nzIndeterminate", ctx_r2.stat.checkHalf)("nzDisabled", ctx_r2.stat.shownCount === 0 || ctx_r2.disabled);
  }
}
function NzTransferListComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.titleText);
  }
}
function NzTransferListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChanged", function NzTransferListComponent_div_9_Template_span_valueChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.handleFilter($event));
    })("valueClear", function NzTransferListComponent_div_9_Template_span_valueClear_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.handleClear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r4.searchPlaceholder)("disabled", ctx_r4.disabled)("value", ctx_r4.filter);
  }
}
function NzTransferListComponent_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c6 = function (a0, a1, a2, a3, a4, a5) {
  return {
    $implicit: a0,
    direction: a1,
    disabled: a2,
    onItemSelectAll: a3,
    onItemSelect: a4,
    stat: a5
  };
};
function NzTransferListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTransferListComponent_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.renderList)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](2, _c6, ctx_r5.validData, ctx_r5.direction, ctx_r5.disabled, ctx_r5.onItemSelectAll, ctx_r5.onItemSelect, ctx_r5.stat));
  }
}
function NzTransferListComponent_div_11_ng_template_1_Template(rf, ctx) {}
function NzTransferListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTransferListComponent_div_11_ng_template_1_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.footer)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r6.direction));
  }
}
const _c7 = function (a0) {
  return {
    "ant-transfer__nodata": a0
  };
};
function NzTransferComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nzOperations[1]);
  }
}
function NzTransferComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzOperations[0]);
  }
}
function NzTransferComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTransferComponent_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.moveToLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTransferComponent_div_1_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTransferComponent_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.moveToRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTransferComponent_div_1_span_6_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.nzDisabled || !ctx_r0.leftActive)("nzType", "primary")("nzSize", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzOperations[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.nzDisabled || !ctx_r0.rightActive)("nzType", "primary")("nzSize", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzOperations[0]);
  }
}
function NzTransferComponent_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.nzOperations[0]);
  }
}
function NzTransferComponent_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.nzOperations[1]);
  }
}
function NzTransferComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTransferComponent_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.moveToRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTransferComponent_div_2_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTransferComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.moveToLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTransferComponent_div_2_span_6_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.nzDisabled || !ctx_r1.rightActive)("nzType", "primary")("nzSize", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzOperations[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.nzDisabled || !ctx_r1.leftActive)("nzType", "primary")("nzSize", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzOperations[1]);
  }
}
class NzTransferSearchComponent {
  // endregion
  constructor(cdr) {
    this.cdr = cdr;
    this.disabled = false;
    this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.valueClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  _handle() {
    this.valueChanged.emit(this.value);
  }
  _clear() {
    if (this.disabled) {
      return;
    }
    this.value = '';
    this.valueClear.emit();
  }
  ngOnChanges() {
    this.cdr.detectChanges();
  }
  static #_ = this.ɵfac = function NzTransferSearchComponent_Factory(t) {
    return new (t || NzTransferSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTransferSearchComponent,
    selectors: [["", "nz-transfer-search", ""]],
    inputs: {
      placeholder: "placeholder",
      value: "value",
      disabled: "disabled"
    },
    outputs: {
      valueChanged: "valueChanged",
      valueClear: "valueClear"
    },
    exportAs: ["nzTransferSearch"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    attrs: _c0,
    decls: 4,
    vars: 7,
    consts: [[1, "ant-input-prefix"], ["nz-icon", "", "nzType", "search"], [1, "ant-input", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-input-suffix", 3, "click", 4, "ngIf"], [1, "ant-input-suffix", 3, "click"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-input-clear-icon"]],
    template: function NzTransferSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.value = $event;
        })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener() {
          return ctx._handle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTransferSearchComponent_span_3_Template, 2, 0, "span", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTransferSearchComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[nz-transfer-search]',
      exportAs: 'nzTransferSearch',
      preserveWhitespaces: false,
      template: `
    <span class="ant-input-prefix">
      <span nz-icon nzType="search"></span>
    </span>
    <input
      [(ngModel)]="value"
      (ngModelChange)="_handle()"
      [disabled]="disabled"
      [placeholder]="placeholder"
      class="ant-input"
      [ngClass]="{ 'ant-input-disabled': disabled }"
    />
    <span *ngIf="value && value.length > 0" class="ant-input-suffix" (click)="_clear()">
      <span nz-icon nzType="close-circle" class="ant-input-clear-icon"></span>
    </span>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    valueClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTransferListComponent {
  get validData() {
    return this.dataSource.filter(w => !w.hide);
  }
  trackByHide(_index, item) {
    // The `validData` is a getter which returns new array each time the property is read.
    // This may lead to unexpected re-renders, tho the array hasn't been updated.
    return item.hide;
  }
  updateCheckStatus() {
    const validCount = this.dataSource.filter(w => !w.disabled).length;
    this.stat.checkCount = this.dataSource.filter(w => w.checked && !w.disabled).length;
    this.stat.shownCount = this.validData.length;
    this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
    this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    // Note: this is done explicitly since the internal `nzChecked` value may not be updated in edge cases.
    // Consider the following flow:
    // 1) the initial value of `stat.checkAll` is `false`
    // 2) the user filters items
    // 3) the user clicks "Select All" checkbox
    // 4) the `NzCheckboxComponent` sets `nzChecked` to `true` internally
    // 5) the user clicks "Move to right"
    // 6) items are moved and the `updateCheckStatus` is invoked
    // 7) the `stat.checkAll` value has never been updated in this flow, it's always been `false`
    // 8) the `nzChecked` is still `true` and the checkbox is not unchecked
    // This is because Angular checks bindings and it checked that `[nzChecked]="stat.checkAll"` has
    // never been updated, so Angular did not set new `nzChecked` value on the checkbox.
    this.headerCheckbox && (this.headerCheckbox.nzChecked = this.stat.checkAll);
  }
  // #endregion
  // #region search
  handleFilter(value) {
    this.filter = value;
    this.dataSource.forEach(item => {
      item.hide = value.length > 0 && !this.matchFilter(value, item);
    });
    this.stat.shownCount = this.validData.length;
    this.filterChange.emit({
      direction: this.direction,
      value
    });
  }
  handleClear() {
    this.handleFilter('');
  }
  matchFilter(text, item) {
    if (this.filterOption) {
      return this.filterOption(text, item);
    }
    return item.title.includes(text);
  }
  // #endregion
  constructor(ngZone, cdr) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    // #region fields
    this.direction = 'left';
    this.titleText = '';
    this.showSelectAll = true;
    this.dataSource = [];
    this.itemUnit = '';
    this.itemsUnit = '';
    this.filter = '';
    this.disabled = false;
    this.renderList = null;
    this.render = null;
    this.footer = null;
    // events
    this.handleSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.handleSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stat = {
      checkAll: false,
      checkHalf: false,
      checkCount: 0,
      shownCount: 0
    };
    this.onItemSelect = item => {
      if (this.disabled || item.disabled) {
        return;
      }
      item.checked = !item.checked;
      this.updateCheckStatus();
      this.handleSelect.emit(item);
    };
    this.onItemSelectAll = status => {
      this.dataSource.forEach(item => {
        if (!item.disabled && !item.hide) {
          item.checked = status;
        }
      });
      this.updateCheckStatus();
      this.handleSelectAll.emit(status);
    };
  }
  markForCheck() {
    this.updateCheckStatus();
    this.cdr.markForCheck();
  }
  ngAfterViewInit() {
    this.checkboxes.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.checkboxes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => {
      const checkboxes = this.checkboxes.toArray();
      // Caretaker note: we explicitly should call `subscribe()` within the root zone.
      // `runOutsideAngular(() => fromEvent(...))` will just create an observable within the root zone,
      // but `addEventListener` is called when the `fromEvent` is subscribed.
      return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(subscriber => this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...checkboxes.map(checkbox => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(checkbox.nativeElement, 'click'))).subscribe(subscriber)));
    })).subscribe(event => {
      event.stopPropagation();
    });
  }
  static #_ = this.ɵfac = function NzTransferListComponent_Factory(t) {
    return new (t || NzTransferListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTransferListComponent,
    selectors: [["nz-transfer-list"]],
    viewQuery: function NzTransferListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCheckbox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
      }
    },
    hostAttrs: [1, "ant-transfer-list"],
    hostVars: 2,
    hostBindings: function NzTransferListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-transfer-list-with-footer", !!ctx.footer);
      }
    },
    inputs: {
      direction: "direction",
      titleText: "titleText",
      showSelectAll: "showSelectAll",
      dataSource: "dataSource",
      itemUnit: "itemUnit",
      itemsUnit: "itemsUnit",
      filter: "filter",
      disabled: "disabled",
      showSearch: "showSearch",
      searchPlaceholder: "searchPlaceholder",
      notFoundContent: "notFoundContent",
      filterOption: "filterOption",
      renderList: "renderList",
      render: "render",
      footer: "footer"
    },
    outputs: {
      handleSelectAll: "handleSelectAll",
      handleSelect: "handleSelect",
      filterChange: "filterChange"
    },
    exportAs: ["nzTransferList"],
    decls: 12,
    vars: 14,
    consts: [["defaultRenderList", ""], [1, "ant-transfer-list-header"], ["class", "ant-transfer-list-checkbox", "nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange", 4, "ngIf"], [1, "ant-transfer-list-header-selected"], ["class", "ant-transfer-list-header-title", 4, "ngIf"], [3, "ngClass"], ["class", "ant-transfer-list-body-search-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ant-transfer-list-footer", 4, "ngIf"], ["class", "ant-transfer-list-content", 4, "ngIf"], ["class", "ant-transfer-list-body-not-found", 4, "ngIf"], [1, "ant-transfer-list-content"], ["class", "ant-transfer-list-content-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-transfer-list-content-item", 3, "ngClass", "click"], ["nz-checkbox", "", 3, "nzChecked", "nzDisabled", "nzCheckedChange"], ["checkboxes", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["renderContainer", ""], [1, "ant-transfer-list-body-not-found"], [3, "nzComponentName", "specificContent"], ["nz-checkbox", "", 1, "ant-transfer-list-checkbox", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange"], ["headerCheckbox", ""], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body-search-wrapper"], ["nz-transfer-search", "", 1, "ant-input-affix-wrapper", "ant-transfer-list-search", 3, "placeholder", "disabled", "value", "valueChanged", "valueClear"], [1, "ant-transfer-list-body-customize-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-footer"]],
    template: function NzTransferListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTransferListComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTransferListComponent_label_3_Template, 2, 3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzTransferListComponent_span_7_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzTransferListComponent_div_9_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzTransferListComponent_ng_container_10_Template, 3, 9, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzTransferListComponent_div_11_Template, 2, 4, "div", 8);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.validData.length > 1 ? ctx.itemsUnit : ctx.itemUnit, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c7, ctx.stat.shownCount === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.renderList)("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmbedEmptyComponent, NzTransferSearchComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTransferListComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-transfer-list',
      exportAs: 'nzTransferList',
      preserveWhitespaces: false,
      template: `
    <ng-template #defaultRenderList>
      <ul *ngIf="stat.shownCount > 0" class="ant-transfer-list-content">
        <li
          *ngFor="let item of validData; trackBy: trackByHide"
          (click)="onItemSelect(item)"
          class="ant-transfer-list-content-item"
          [ngClass]="{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }"
        >
          <label
            #checkboxes
            nz-checkbox
            [nzChecked]="item.checked"
            (nzCheckedChange)="onItemSelect(item)"
            [nzDisabled]="disabled || item.disabled"
          >
            <ng-container *ngIf="!render; else renderContainer">{{ item.title }}</ng-container>
            <ng-template
              #renderContainer
              [ngTemplateOutlet]="render"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-template>
          </label>
        </li>
      </ul>
      <div *ngIf="stat.shownCount === 0" class="ant-transfer-list-body-not-found">
        <nz-embed-empty [nzComponentName]="'transfer'" [specificContent]="notFoundContent"></nz-embed-empty>
      </div>
    </ng-template>
    <div class="ant-transfer-list-header">
      <label
        *ngIf="showSelectAll"
        class="ant-transfer-list-checkbox"
        nz-checkbox
        #headerCheckbox
        [nzChecked]="stat.checkAll"
        (nzCheckedChange)="onItemSelectAll($event)"
        [nzIndeterminate]="stat.checkHalf"
        [nzDisabled]="stat.shownCount === 0 || disabled"
      ></label>
      <span class="ant-transfer-list-header-selected">
        <span>
          {{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }}
          {{ validData.length > 1 ? itemsUnit : itemUnit }}
        </span>
      </span>
      <span *ngIf="titleText" class="ant-transfer-list-header-title">{{ titleText }}</span>
    </div>
    <div
      class="{{ showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body' }}"
      [ngClass]="{ 'ant-transfer__nodata': stat.shownCount === 0 }"
    >
      <div *ngIf="showSearch" class="ant-transfer-list-body-search-wrapper">
        <span
          nz-transfer-search
          class="ant-input-affix-wrapper ant-transfer-list-search"
          (valueChanged)="handleFilter($event)"
          (valueClear)="handleClear()"
          [placeholder]="searchPlaceholder"
          [disabled]="disabled"
          [value]="filter"
        ></span>
      </div>
      <ng-container *ngIf="renderList; else defaultRenderList">
        <div class="ant-transfer-list-body-customize-wrapper">
          <ng-container
            *ngTemplateOutlet="
              renderList;
              context: {
                $implicit: validData,
                direction: direction,
                disabled: disabled,
                onItemSelectAll: onItemSelectAll,
                onItemSelect: onItemSelect,
                stat: stat
              }
            "
          ></ng-container>
        </div>
      </ng-container>
    </div>
    <div *ngIf="footer" class="ant-transfer-list-footer">
      <ng-template [ngTemplateOutlet]="footer" [ngTemplateOutletContext]="{ $implicit: direction }"></ng-template>
    </div>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-transfer-list',
        '[class.ant-transfer-list-with-footer]': '!!footer'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    titleText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSelectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemsUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    renderList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    render: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    handleSelectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    handleSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    filterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    headerCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['headerCheckbox', {
        read: ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxComponent
      }]
    }],
    checkboxes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ['checkboxes', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();
class NzTransferComponent {
  splitDataSource() {
    this.leftDataSource = [];
    this.rightDataSource = [];
    this.nzDataSource.forEach(record => {
      if (record.direction === 'right') {
        record.direction = 'right';
        this.rightDataSource.push(record);
      } else {
        record.direction = 'left';
        this.leftDataSource.push(record);
      }
    });
  }
  getCheckedData(direction) {
    return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(w => w.checked);
  }
  handleSelect(direction, checked, item) {
    const list = this.getCheckedData(direction);
    this.updateOperationStatus(direction, list.length);
    this.nzSelectChange.emit({
      direction,
      checked,
      list,
      item
    });
  }
  handleFilterChange(ret) {
    this.nzSearchChange.emit(ret);
  }
  updateOperationStatus(direction, count) {
    this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(w => !w.disabled).length : count) > 0;
  }
  moveTo(direction) {
    const oppositeDirection = direction === 'left' ? 'right' : 'left';
    this.updateOperationStatus(oppositeDirection, 0);
    const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
    const moveList = datasource.filter(item => item.checked === true && !item.disabled);
    this.nzCanMove({
      direction,
      list: moveList
    }).subscribe(newMoveList => this.truthMoveTo(direction, newMoveList.filter(i => !!i)), () => moveList.forEach(i => i.checked = false));
  }
  truthMoveTo(direction, list) {
    const oppositeDirection = direction === 'left' ? 'right' : 'left';
    const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
    const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
    for (const item of list) {
      item.checked = false;
      item.hide = false;
      item.direction = direction;
      datasource.splice(datasource.indexOf(item), 1);
    }
    targetDatasource.splice(0, 0, ...list);
    this.updateOperationStatus(oppositeDirection);
    this.nzChange.emit({
      from: oppositeDirection,
      to: direction,
      list
    });
    this.markForCheckAllList();
  }
  // #endregion
  constructor(cdr, i18n, elementRef, renderer, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.leftFilter = '';
    this.rightFilter = '';
    this.dir = 'ltr';
    // status
    this.prefixCls = 'ant-transfer';
    this.statusCls = {};
    this.hasFeedback = false;
    // #region fields
    this.nzDisabled = false;
    this.nzDataSource = [];
    this.nzTitles = ['', ''];
    this.nzOperations = [];
    this.nzListStyle = {};
    this.nzShowSelectAll = true;
    this.nzCanMove = arg => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(arg.list);
    this.nzRenderList = null;
    this.nzRender = null;
    this.nzFooter = null;
    this.nzShowSearch = false;
    this.nzTargetKeys = [];
    this.nzSelectedKeys = [];
    this.nzStatus = '';
    // events
    this.nzChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // #endregion
    // #region process data
    // left
    this.leftDataSource = [];
    // right
    this.rightDataSource = [];
    this.handleLeftSelectAll = checked => this.handleSelect('left', checked);
    this.handleRightSelectAll = checked => this.handleSelect('right', checked);
    this.handleLeftSelect = item => this.handleSelect('left', !!item.checked, item);
    this.handleRightSelect = item => this.handleSelect('right', !!item.checked, item);
    // #endregion
    // #region operation
    this.leftActive = false;
    this.rightActive = false;
    this.moveToLeft = () => this.moveTo('left');
    this.moveToRight = () => this.moveTo('right');
  }
  markForCheckAllList() {
    if (!this.lists) {
      return;
    }
    this.lists.forEach(i => i.markForCheck());
  }
  handleNzTargetKeys() {
    const keys = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.toArray)(this.nzTargetKeys);
    const hasOwnKey = e => e.hasOwnProperty('key');
    this.leftDataSource.forEach(e => {
      if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
        e.checked = true;
      }
    });
    this.moveToRight();
  }
  handleNzSelectedKeys() {
    const keys = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.toArray)(this.nzSelectedKeys);
    this.nzDataSource.forEach(e => {
      if (keys.indexOf(e.key) !== -1) {
        e.checked = true;
      }
    });
    const term = ld => ld.disabled === false && ld.checked === true;
    this.rightActive = this.leftDataSource.some(term);
    this.leftActive = this.rightDataSource.some(term);
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.withLatestFrom)(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? '' : status,
      hasFeedback
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.unsubscribe$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.i18n.localeChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.unsubscribe$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData('Transfer');
      this.markForCheckAllList();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.unsubscribe$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    const {
      nzStatus,
      nzDataSource,
      nzTargetKeys,
      nzSelectedKeys
    } = changes;
    if (nzDataSource) {
      this.splitDataSource();
      this.updateOperationStatus('left');
      this.updateOperationStatus('right');
      this.cdr.detectChanges();
      this.markForCheckAllList();
    }
    if (nzTargetKeys) {
      this.handleNzTargetKeys();
    }
    if (nzSelectedKeys) {
      this.handleNzSelectedKeys();
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    // set inner status
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    // render status if nzStatus is set
    this.statusCls = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.getStatusClassNames)(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach(status => {
      if (this.statusCls[status]) {
        this.renderer.addClass(this.elementRef.nativeElement, status);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status);
      }
    });
  }
  static #_ = this.ɵfac = function NzTransferComponent_Factory(t) {
    return new (t || NzTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__.NzI18nService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_21__.NzFormStatusService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_21__.NzFormNoStatusService, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTransferComponent,
    selectors: [["nz-transfer"]],
    viewQuery: function NzTransferComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTransferListComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lists = _t);
      }
    },
    hostAttrs: [1, "ant-transfer"],
    hostVars: 6,
    hostBindings: function NzTransferComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-transfer-rtl", ctx.dir === "rtl")("ant-transfer-disabled", ctx.nzDisabled)("ant-transfer-customize-list", ctx.nzRenderList);
      }
    },
    inputs: {
      nzDisabled: "nzDisabled",
      nzDataSource: "nzDataSource",
      nzTitles: "nzTitles",
      nzOperations: "nzOperations",
      nzListStyle: "nzListStyle",
      nzShowSelectAll: "nzShowSelectAll",
      nzItemUnit: "nzItemUnit",
      nzItemsUnit: "nzItemsUnit",
      nzCanMove: "nzCanMove",
      nzRenderList: "nzRenderList",
      nzRender: "nzRender",
      nzFooter: "nzFooter",
      nzShowSearch: "nzShowSearch",
      nzFilterOption: "nzFilterOption",
      nzSearchPlaceholder: "nzSearchPlaceholder",
      nzNotFoundContent: "nzNotFoundContent",
      nzTargetKeys: "nzTargetKeys",
      nzSelectedKeys: "nzSelectedKeys",
      nzStatus: "nzStatus"
    },
    outputs: {
      nzChange: "nzChange",
      nzSearchChange: "nzSearchChange",
      nzSelectChange: "nzSelectChange"
    },
    exportAs: ["nzTransfer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 4,
    vars: 32,
    consts: [["data-direction", "left", "direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], ["class", "ant-transfer-operation", 4, "ngIf"], ["data-direction", "right", "direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", "type", "button", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"]],
    template: function NzTransferComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-transfer-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) {
          return ctx.handleFilterChange($event);
        })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) {
          return ctx.handleLeftSelect($event);
        })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) {
          return ctx.handleLeftSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTransferComponent_div_1_Template, 7, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTransferComponent_div_2_Template, 7, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-transfer-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_3_listener($event) {
          return ctx.handleFilterChange($event);
        })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_3_listener($event) {
          return ctx.handleRightSelect($event);
        })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_3_listener($event) {
          return ctx.handleRightSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dir !== "rtl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dir === "rtl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, NzTransferListComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.InputBoolean)()], NzTransferComponent.prototype, "nzDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.InputBoolean)()], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_14__.InputBoolean)()], NzTransferComponent.prototype, "nzShowSearch", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTransferComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-transfer',
      exportAs: 'nzTransfer',
      preserveWhitespaces: false,
      template: `
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="left"
      direction="left"
      [titleText]="nzTitles[0]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="leftDataSource"
      [filter]="leftFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[0]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleLeftSelect($event)"
      (handleSelectAll)="handleLeftSelectAll($event)"
    ></nz-transfer-list>
    <div *ngIf="dir !== 'rtl'" class="ant-transfer-operation">
      <button
        nz-button
        type="button"
        (click)="moveToLeft()"
        [disabled]="nzDisabled || !leftActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="left"></span>
        <span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
      <button
        nz-button
        type="button"
        (click)="moveToRight()"
        [disabled]="nzDisabled || !rightActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="right"></span>
        <span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
    </div>
    <div *ngIf="dir === 'rtl'" class="ant-transfer-operation">
      <button
        nz-button
        type="button"
        (click)="moveToRight()"
        [disabled]="nzDisabled || !rightActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="left"></span>
        <span *ngIf="nzOperations[0]">{{ nzOperations[0] }}</span>
      </button>
      <button
        nz-button
        type="button"
        (click)="moveToLeft()"
        [disabled]="nzDisabled || !leftActive"
        [nzType]="'primary'"
        [nzSize]="'small'"
      >
        <span nz-icon nzType="right"></span>
        <span *ngIf="nzOperations[1]">{{ nzOperations[1] }}</span>
      </button>
    </div>
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="right"
      direction="right"
      [titleText]="nzTitles[1]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="rightDataSource"
      [filter]="rightFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[1]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleRightSelect($event)"
      (handleSelectAll)="handleRightSelectAll($event)"
    ></nz-transfer-list>
  `,
      host: {
        class: 'ant-transfer',
        '[class.ant-transfer-rtl]': `dir === 'rtl'`,
        '[class.ant-transfer-disabled]': `nzDisabled`,
        '[class.ant-transfer-customize-list]': `nzRenderList`
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__.NzI18nService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_21__.NzFormStatusService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_21__.NzFormNoStatusService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    lists: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [NzTransferListComponent]
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOperations: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzListStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSelectAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzItemUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzItemsUnit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCanMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzRenderList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzRender: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFooter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzFilterOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSearchPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNotFoundContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTargetKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSelectedKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzSearchChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzSelectChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTransferModule {
  static #_ = this.ɵfac = function NzTransferModule_Factory(t) {
    return new (t || NzTransferModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzTransferModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzInputModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__.NzI18nModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmptyModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTransferModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_22__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzInputModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__.NzI18nModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_11__.NzEmptyModule],
      declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
      exports: [NzTransferComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 13094:
/*!***************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-select.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzTreeSelectComponent: () => (/* binding */ NzTreeSelectComponent),
/* harmony export */   NzTreeSelectModule: () => (/* binding */ NzTreeSelectModule),
/* harmony export */   NzTreeSelectService: () => (/* binding */ NzTreeSelectService),
/* harmony export */   higherOrderServiceFactory: () => (/* binding */ higherOrderServiceFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 30554);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ 72698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 58989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 251);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 60506);
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ 4866);
/* harmony import */ var ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/tree */ 2783);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 93170);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 86424);
/* harmony import */ var ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/form */ 40375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tree */ 24193);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/empty */ 10431);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);


































/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["nzTreeTemplate"];
const _c1 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzComponentName", "tree-select")("specificContent", ctx_r8.nzNotFoundContent);
  }
}
const _c2 = function () {
  return [];
};
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "nz-tree", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onExpandedKeysChange($event));
    })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.nzTreeClick.emit($event));
    })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.updateSelectedNodes());
    })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.updateSelectedNodes());
    })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckBoxChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.nzTreeCheckBoxChange.emit($event));
    })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.setSearchValues($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTreeSelectComponent_ng_template_0_span_3_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r0.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r0.dropDownPosition === "top")("ant-tree-select-dropdown-rtl", ctx_r0.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideMotion", "enter")("ngClass", ctx_r0.dropdownClassName)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("dir", ctx_r0.dir)("ngStyle", ctx_r0.nzDropdownStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isNotFound)("nzData", ctx_r0.nzNodes)("nzMultiple", ctx_r0.nzMultiple)("nzSearchValue", ctx_r0.inputValue)("nzHideUnMatched", ctx_r0.nzHideUnMatched)("nzShowIcon", ctx_r0.nzShowIcon)("nzCheckable", ctx_r0.nzCheckable)("nzAsyncData", ctx_r0.nzAsyncData)("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzExpandAll", ctx_r0.nzDefaultExpandAll)("nzExpandedKeys", ctx_r0.expandedKeys)("nzCheckedKeys", ctx_r0.nzCheckable ? ctx_r0.value : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c2))("nzSelectedKeys", !ctx_r0.nzCheckable ? ctx_r0.value : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c2))("nzTreeTemplate", ctx_r0.treeTemplate)("nzCheckStrictly", ctx_r0.nzCheckStrictly)("nzVirtualItemSize", ctx_r0.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r0.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r0.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r0.nzVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzNodes.length === 0 || ctx_r0.isNotFound);
  }
}
function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const node_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.removeSelected(node_r18, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const node_r18 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", true)("disabled", node_r18.isDisabled || ctx_r16.nzDisabled)("label", ctx_r16.nzDisplayWith(node_r18));
  }
}
function NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentTemplateOutlet", ctx_r17.nzMaxTagPlaceholder)("contentTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 5, ctx_r17.selectedNodes, ctx_r17.nzMaxTagCount))("deletable", false)("disabled", false)("label", "+ " + (ctx_r17.selectedNodes.length - ctx_r17.nzMaxTagCount) + " ...");
  }
}
function NzTreeSelectComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template, 1, 3, "nz-select-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template, 2, 8, "nz-select-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 3, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount))("ngForTrackBy", ctx_r1.trackValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount);
  }
}
function NzTreeSelectComponent_nz_select_placeholder_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.placeHolderDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.nzPlaceHolder);
  }
}
function NzTreeSelectComponent_nz_select_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 19);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("label", ctx_r3.nzDisplayWith(ctx_r3.selectedNodes[0]));
  }
}
function NzTreeSelectComponent_nz_select_arrow_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow");
  }
}
function NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_nz_form_item_feedback_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-form-item-feedback-icon", 23);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r23.status);
  }
}
function NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_nz_form_item_feedback_icon_0_Template, 1, 1, "nz-form-item-feedback-icon", 22);
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.hasFeedback && !!ctx_r22.status);
  }
}
function NzTreeSelectComponent_nz_select_arrow_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-arrow", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showArrow", !ctx_r5.isMultiple)("feedbackIcon", _r21);
  }
}
function NzTreeSelectComponent_nz_select_clear_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzTreeSelectComponent_nz_select_clear_8_Template_nz_select_clear_clear_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.onClearSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class NzTreeSelectService extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeBaseService {
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵNzTreeSelectService_BaseFactory;
    return function NzTreeSelectService_Factory(t) {
      return (ɵNzTreeSelectService_BaseFactory || (ɵNzTreeSelectService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NzTreeSelectService)))(t || NzTreeSelectService);
    };
  }();
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NzTreeSelectService,
    factory: NzTreeSelectService.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTreeSelectService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
function higherOrderServiceFactory(injector) {
  return injector.get(NzTreeSelectService);
}
const NZ_CONFIG_MODULE_NAME = 'treeSelect';
const TREE_SELECT_DEFAULT_CLASS = 'ant-select-dropdown ant-select-tree-dropdown';
const listOfPositions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP.bottomLeft, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP.bottomRight, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP.topRight, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP.topLeft];
class NzTreeSelectComponent extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeBase {
  set nzExpandedKeys(value) {
    this.expandedKeys = value;
  }
  get nzExpandedKeys() {
    return this.expandedKeys;
  }
  get treeTemplate() {
    return this.nzTreeTemplate || this.nzTreeTemplateChild;
  }
  get placeHolderDisplay() {
    return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
  }
  get isMultiple() {
    return this.nzMultiple || this.nzCheckable;
  }
  constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, directionality, focusMonitor, noAnimation, nzFormStatusService, nzFormNoStatusService) {
    super(nzTreeService);
    this.nzConfigService = nzConfigService;
    this.renderer = renderer;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.focusMonitor = focusMonitor;
    this.noAnimation = noAnimation;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzId = null;
    this.nzAllowClear = true;
    this.nzShowExpand = true;
    this.nzShowLine = false;
    this.nzDropdownMatchSelectWidth = true;
    this.nzCheckable = false;
    this.nzHideUnMatched = false;
    this.nzShowIcon = false;
    this.nzShowSearch = false;
    this.nzDisabled = false;
    this.nzAsyncData = false;
    this.nzMultiple = false;
    this.nzDefaultExpandAll = false;
    this.nzCheckStrictly = false;
    this.nzVirtualItemSize = 28;
    this.nzVirtualMaxBufferPx = 500;
    this.nzVirtualMinBufferPx = 28;
    this.nzVirtualHeight = null;
    this.nzNodes = [];
    this.nzOpen = false;
    this.nzSize = 'default';
    this.nzPlaceHolder = '';
    this.nzDropdownStyle = null;
    this.nzBackdrop = false;
    this.nzStatus = '';
    this.nzPlacement = '';
    this.nzDisplayWith = node => node.title;
    this.nzMaxTagPlaceholder = null;
    this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzTreeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzTreeCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.prefixCls = 'ant-select';
    this.statusCls = {};
    this.status = '';
    this.hasFeedback = false;
    this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
    this.isComposing = false;
    this.isDestroy = true;
    this.isNotFound = false;
    this.focused = false;
    this.inputValue = '';
    this.dropDownPosition = 'bottom';
    this.selectedNodes = [];
    this.expandedKeys = [];
    this.value = [];
    this.dir = 'ltr';
    this.positions = [];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.isNzDisableFirstChange = true;
    this.onChange = _value => {};
    this.onTouched = () => {};
    this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-select');
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.withLatestFrom)(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? '' : status,
      hasFeedback
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.isDestroy = false;
    this.subscribeSelectionChange();
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.focusMonitor.monitor(this.elementRef, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(focusOrigin => {
      if (!focusOrigin) {
        this.focused = false;
        this.cdr.markForCheck();
        Promise.resolve().then(() => {
          this.onTouched();
        });
      } else {
        this.focused = true;
        this.cdr.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this.isDestroy = true;
    this.closeDropDown();
    this.destroy$.next();
    this.destroy$.complete();
  }
  isComposingChange(isComposing) {
    this.isComposing = isComposing;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.closeDropDown();
    this.isNzDisableFirstChange = false;
  }
  setStatusStyles(status, hasFeedback) {
    // set inner status
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    // render status if nzStatus is set
    this.statusCls = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.getStatusClassNames)(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach(status => {
      if (this.statusCls[status]) {
        this.renderer.addClass(this.elementRef.nativeElement, status);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status);
      }
    });
  }
  ngOnChanges(changes) {
    const {
      nzNodes,
      nzDropdownClassName,
      nzStatus,
      nzPlacement
    } = changes;
    if (nzNodes) {
      this.updateSelectedNodes(true);
    }
    if (nzDropdownClassName) {
      const className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
      this.dropdownClassName = className ? `${TREE_SELECT_DEFAULT_CLASS} ${className}` : TREE_SELECT_DEFAULT_CLASS;
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzPlacement && this.nzPlacement) {
      if (ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP[this.nzPlacement]) {
        this.positions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP[this.nzPlacement]];
      }
    }
  }
  writeValue(value) {
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.isNotNil)(value)) {
      if (this.isMultiple && Array.isArray(value)) {
        this.value = value;
      } else {
        this.value = [value];
      }
      this.updateSelectedNodes(true);
    } else {
      this.value = [];
      this.selectedNodes.forEach(node => {
        this.removeSelected(node, false);
      });
      this.selectedNodes = [];
    }
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onKeydown(event) {
    if (this.nzDisabled) {
      return;
    }
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ESCAPE:
        /**
         * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
         */
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.TAB:
        this.closeDropDown();
        break;
      default:
        if (!this.nzOpen) {
          this.openDropdown();
        }
    }
  }
  trigger() {
    if (this.nzDisabled || !this.nzDisabled && this.nzOpen) {
      this.closeDropDown();
    } else {
      this.openDropdown();
    }
  }
  openDropdown() {
    if (!this.nzDisabled) {
      this.nzOpen = true;
      this.nzOpenChange.emit(this.nzOpen);
      this.updateCdkConnectedOverlayStatus();
      if (this.nzShowSearch || this.isMultiple) {
        this.focusOnInput();
      }
    }
  }
  closeDropDown() {
    this.onTouched();
    this.nzOpen = false;
    this.inputValue = '';
    this.isNotFound = false;
    this.nzOpenChange.emit(this.nzOpen);
    this.cdr.markForCheck();
  }
  onKeyDownInput(e) {
    const keyCode = e.keyCode;
    const eventTarget = e.target;
    if (this.isMultiple && !eventTarget.value && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.BACKSPACE) {
      e.preventDefault();
      if (this.selectedNodes.length) {
        const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
        if (removeNode && !removeNode.isDisabled) {
          this.removeSelected(removeNode);
        }
      }
    }
  }
  onExpandedKeysChange(value) {
    this.nzExpandChange.emit(value);
    this.expandedKeys = [...value.keys];
  }
  setInputValue(value) {
    if (!this.isComposing) {
      this.inputValue = value;
      this.updatePosition();
    }
  }
  removeSelected(node, emit = true) {
    node.isSelected = false;
    node.isChecked = false;
    if (this.nzCheckable) {
      this.nzTreeService.conduct(node, this.nzCheckStrictly);
    } else {
      this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
    }
    if (emit) {
      this.nzRemoved.emit(node);
    }
  }
  focusOnInput() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }
  subscribeSelectionChange() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.nzTreeClick.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(event => {
      const node = event.node;
      if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
        node.isChecked = !node.isChecked;
        node.isHalfChecked = false;
        if (!this.nzCheckStrictly) {
          this.nzTreeService.conduct(node);
        }
      }
      if (this.nzCheckable) {
        node.isSelected = false;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => {
      const node = event.node;
      return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
    })), this.nzCheckable ? this.nzTreeCheckBoxChange.asObservable() : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(), this.nzCleared, this.nzRemoved).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => {
      this.updateSelectedNodes();
      const value = this.selectedNodes.map(node => node.key);
      this.value = [...value];
      if (this.nzShowSearch || this.isMultiple) {
        this.inputValue = '';
        this.isNotFound = false;
      }
      if (this.isMultiple) {
        this.onChange(value);
        this.focusOnInput();
        this.updatePosition();
      } else {
        this.closeDropDown();
        this.onChange(value.length ? value[0] : null);
      }
    });
  }
  updateSelectedNodes(init = false) {
    if (init) {
      const nodes = this.coerceTreeNodes(this.nzNodes);
      this.nzTreeService.isMultiple = this.isMultiple;
      this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
      this.nzTreeService.initTree(nodes);
      if (this.nzCheckable) {
        this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
      } else {
        this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
      }
    }
    this.selectedNodes = [...(this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList())];
  }
  updatePosition() {
    (0,ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_14__.reqAnimFrame)(() => {
      this.cdkConnectedOverlay?.overlayRef?.updatePosition();
    });
  }
  onPositionChange(position) {
    this.dropDownPosition = position.connectionPair.originY;
  }
  onClearSelection() {
    this.selectedNodes.forEach(node => {
      this.removeSelected(node, false);
    });
    this.nzCleared.emit();
  }
  onClickOutside(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropDown();
    }
  }
  setSearchValues($event) {
    Promise.resolve().then(() => {
      this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
    });
  }
  updateCdkConnectedOverlayStatus() {
    if (!this.nzPlacement || !listOfPositions.includes(ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.POSITION_MAP[this.nzPlacement])) {
      this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
  }
  trackValue(_index, option) {
    return option.key;
  }
  static #_ = this.ɵfac = function NzTreeSelectComponent_Factory(t) {
    return new (t || NzTreeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzTreeSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__.NzNoAnimationDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormStatusService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormNoStatusService, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTreeSelectComponent,
    selectors: [["nz-tree-select"]],
    contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeTemplateChild = _t.first);
      }
    },
    viewQuery: function NzTreeSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectSearchComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.treeRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkOverlayOrigin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
      }
    },
    hostAttrs: [1, "ant-select"],
    hostVars: 24,
    hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTreeSelectComponent_click_HostBindingHandler() {
          return ctx.trigger();
        })("keydown", function NzTreeSelectComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.nzSize === "large")("ant-select-rtl", ctx.dir === "rtl")("ant-select-sm", ctx.nzSize === "small")("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused);
      }
    },
    inputs: {
      nzId: "nzId",
      nzAllowClear: "nzAllowClear",
      nzShowExpand: "nzShowExpand",
      nzShowLine: "nzShowLine",
      nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
      nzCheckable: "nzCheckable",
      nzHideUnMatched: "nzHideUnMatched",
      nzShowIcon: "nzShowIcon",
      nzShowSearch: "nzShowSearch",
      nzDisabled: "nzDisabled",
      nzAsyncData: "nzAsyncData",
      nzMultiple: "nzMultiple",
      nzDefaultExpandAll: "nzDefaultExpandAll",
      nzCheckStrictly: "nzCheckStrictly",
      nzVirtualItemSize: "nzVirtualItemSize",
      nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
      nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
      nzVirtualHeight: "nzVirtualHeight",
      nzExpandedIcon: "nzExpandedIcon",
      nzNotFoundContent: "nzNotFoundContent",
      nzNodes: "nzNodes",
      nzOpen: "nzOpen",
      nzSize: "nzSize",
      nzPlaceHolder: "nzPlaceHolder",
      nzDropdownStyle: "nzDropdownStyle",
      nzDropdownClassName: "nzDropdownClassName",
      nzBackdrop: "nzBackdrop",
      nzStatus: "nzStatus",
      nzPlacement: "nzPlacement",
      nzExpandedKeys: "nzExpandedKeys",
      nzDisplayWith: "nzDisplayWith",
      nzMaxTagCount: "nzMaxTagCount",
      nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
      nzTreeTemplate: "nzTreeTemplate"
    },
    outputs: {
      nzOpenChange: "nzOpenChange",
      nzCleared: "nzCleared",
      nzRemoved: "nzRemoved",
      nzExpandChange: "nzExpandChange",
      nzTreeClick: "nzTreeClick",
      nzTreeCheckBoxChange: "nzTreeCheckBoxChange"
    },
    exportAs: ["nzTreeSelect"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NzTreeSelectService, {
      provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeHigherOrderServiceToken,
      useFactory: higherOrderServiceFactory,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector]]
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzTreeSelectComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 9,
    vars: 20,
    consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "overlayOutsideClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [4, "ngIf"], [3, "nzId", "showInput", "value", "mirrorSync", "disabled", "focusTrigger", "keydown", "isComposingChange", "valueChange"], [3, "placeholder", "display", 4, "ngIf"], [3, "deletable", "disabled", "label", 4, "ngIf"], [3, "showArrow", "feedbackIcon", 4, "ngIf"], [3, "clear", 4, "ngIf"], [3, "ngClass", "nzNoAnimation", "dir", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [3, "deletable", "disabled", "label", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label", 4, "ngIf"], [3, "deletable", "disabled", "label", "delete"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label"], [3, "placeholder"], [3, "deletable", "disabled", "label"], [3, "showArrow", "feedbackIcon"], ["feedbackIconTpl", ""], [3, "status", 4, "ngIf"], [3, "status"], [3, "clear"]],
    template: function NzTreeSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTreeSelectComponent_ng_template_0_Template, 4, 36, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function NzTreeSelectComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
          return ctx.onClickOutside($event);
        })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() {
          return ctx.closeDropDown();
        })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) {
          return ctx.onPositionChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTreeSelectComponent_ng_container_2_Template, 4, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzTreeSelectComponent_Template_nz_select_search_keydown_3_listener($event) {
          return ctx.onKeyDownInput($event);
        })("isComposingChange", function NzTreeSelectComponent_Template_nz_select_search_isComposingChange_3_listener($event) {
          return ctx.isComposing = $event;
        })("valueChange", function NzTreeSelectComponent_Template_nz_select_search_valueChange_3_listener($event) {
          return ctx.setInputValue($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzTreeSelectComponent_nz_select_placeholder_4_Template, 1, 3, "nz-select-placeholder", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTreeSelectComponent_nz_select_item_5_Template, 1, 3, "nz-select-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTreeSelectComponent_nz_select_arrow_6_Template, 1, 0, "nz-select-arrow", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzTreeSelectComponent_nz_select_arrow_7_Template, 3, 2, "nz-select-arrow", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzTreeSelectComponent_nz_select_clear_8_Template, 1, 0, "nz-select-clear", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayPositions", ctx.nzPlacement ? ctx.positions : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2))("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", ctx.nzId)("showInput", ctx.nzShowSearch)("value", ctx.inputValue)("mirrorSync", ctx.isMultiple)("disabled", ctx.nzDisabled)("focusTrigger", ctx.nzOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzPlaceHolder && ctx.selectedNodes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMultiple && ctx.selectedNodes.length === 1 && !ctx.isComposing && ctx.inputValue === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMultiple || ctx.hasFeedback && !!ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length);
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgStyle, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectArrowComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectClearComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectItemComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectPlaceholderComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectSearchComponent, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_24__.NzTreeComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__.NzEmbedEmptyComponent, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.NzConnectedOverlayDirective, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__.NzNoAnimationDirective, ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormItemFeedbackIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.SlicePipe],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_26__.slideMotion]
    }
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputBoolean)()], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTreeSelectComponent.prototype, "nzSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.WithConfig)()], NzTreeSelectComponent.prototype, "nzBackdrop", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTreeSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tree-select',
      exportAs: 'nzTreeSelect',
      animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_26__.slideMotion],
      template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayPositions]="nzPlacement ? positions : []"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-tree-dropdown'"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeDropDown()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [@slideMotion]="'enter'"
        [ngClass]="dropdownClassName"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [class.ant-tree-select-dropdown-rtl]="dir === 'rtl'"
        [dir]="dir"
        [ngStyle]="nzDropdownStyle"
      >
        <nz-tree
          #treeRef
          [hidden]="isNotFound"
          nzNoAnimation
          nzSelectMode
          nzBlockNode
          [nzData]="nzNodes"
          [nzMultiple]="nzMultiple"
          [nzSearchValue]="inputValue"
          [nzHideUnMatched]="nzHideUnMatched"
          [nzShowIcon]="nzShowIcon"
          [nzCheckable]="nzCheckable"
          [nzAsyncData]="nzAsyncData"
          [nzShowExpand]="nzShowExpand"
          [nzShowLine]="nzShowLine"
          [nzExpandedIcon]="nzExpandedIcon"
          [nzExpandAll]="nzDefaultExpandAll"
          [nzExpandedKeys]="expandedKeys"
          [nzCheckedKeys]="nzCheckable ? value : []"
          [nzSelectedKeys]="!nzCheckable ? value : []"
          [nzTreeTemplate]="treeTemplate"
          [nzCheckStrictly]="nzCheckStrictly"
          [nzVirtualItemSize]="nzVirtualItemSize"
          [nzVirtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [nzVirtualMinBufferPx]="nzVirtualMinBufferPx"
          [nzVirtualHeight]="nzVirtualHeight"
          (nzExpandChange)="onExpandedKeysChange($event)"
          (nzClick)="nzTreeClick.emit($event)"
          (nzCheckedKeysChange)="updateSelectedNodes()"
          (nzSelectedKeysChange)="updateSelectedNodes()"
          (nzCheckBoxChange)="nzTreeCheckBoxChange.emit($event)"
          (nzSearchValueChange)="setSearchValues($event)"
        ></nz-tree>
        <span *ngIf="nzNodes.length === 0 || isNotFound" class="ant-select-not-found">
          <nz-embed-empty [nzComponentName]="'tree-select'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
        </span>
      </div>
    </ng-template>

    <div cdkOverlayOrigin class="ant-select-selector">
      <ng-container *ngIf="isMultiple">
        <nz-select-item
          *ngFor="let node of selectedNodes | slice: 0:nzMaxTagCount; trackBy: trackValue"
          [deletable]="true"
          [disabled]="node.isDisabled || nzDisabled"
          [label]="nzDisplayWith(node)"
          (delete)="removeSelected(node, true)"
        ></nz-select-item>

        <nz-select-item
          *ngIf="selectedNodes.length > nzMaxTagCount"
          [contentTemplateOutlet]="nzMaxTagPlaceholder"
          [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
          [deletable]="false"
          [disabled]="false"
          [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
        ></nz-select-item>
      </ng-container>

      <nz-select-search
        [nzId]="nzId"
        [showInput]="nzShowSearch"
        (keydown)="onKeyDownInput($event)"
        (isComposingChange)="isComposing = $event"
        (valueChange)="setInputValue($event)"
        [value]="inputValue"
        [mirrorSync]="isMultiple"
        [disabled]="nzDisabled"
        [focusTrigger]="nzOpen"
      ></nz-select-search>

      <nz-select-placeholder
        *ngIf="nzPlaceHolder && selectedNodes.length === 0"
        [placeholder]="nzPlaceHolder"
        [style.display]="placeHolderDisplay"
      ></nz-select-placeholder>

      <nz-select-item
        *ngIf="!isMultiple && selectedNodes.length === 1 && !isComposing && inputValue === ''"
        [deletable]="false"
        [disabled]="false"
        [label]="nzDisplayWith(selectedNodes[0])"
      ></nz-select-item>

      <nz-select-arrow *ngIf="!isMultiple"></nz-select-arrow>
      <nz-select-arrow
        *ngIf="!isMultiple || (hasFeedback && !!status)"
        [showArrow]="!isMultiple"
        [feedbackIcon]="feedbackIconTpl"
      >
        <ng-template #feedbackIconTpl>
          <nz-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></nz-form-item-feedback-icon>
        </ng-template>
      </nz-select-arrow>
      <nz-select-clear
        *ngIf="nzAllowClear && !nzDisabled && selectedNodes.length"
        (clear)="onClearSelection()"
      ></nz-select-clear>
    </div>
  `,
      providers: [NzTreeSelectService, {
        provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_1__.NzTreeHigherOrderServiceToken,
        useFactory: higherOrderServiceFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector]]
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzTreeSelectComponent),
        multi: true
      }],
      host: {
        class: 'ant-select',
        '[class.ant-select-in-form-item]': '!!nzFormStatusService',
        '[class.ant-select-lg]': 'nzSize==="large"',
        '[class.ant-select-rtl]': 'dir==="rtl"',
        '[class.ant-select-sm]': 'nzSize==="small"',
        '[class.ant-select-disabled]': 'nzDisabled',
        '[class.ant-select-single]': '!isMultiple',
        '[class.ant-select-show-arrow]': '!isMultiple',
        '[class.ant-select-show-search]': '!isMultiple',
        '[class.ant-select-multiple]': 'isMultiple',
        '[class.ant-select-allow-clear]': 'nzAllowClear',
        '[class.ant-select-open]': 'nzOpen',
        '[class.ant-select-focused]': 'nzOpen || focused',
        '(click)': 'trigger()',
        '(keydown)': 'onKeydown($event)'
      }
    }]
  }], function () {
    return [{
      type: NzTreeSelectService
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_15__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormStatusService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormNoStatusService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAllowClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCheckable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzHideUnMatched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAsyncData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMultiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDefaultExpandAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCheckStrictly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualMaxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualMinBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzVirtualHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExpandedIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNotFoundContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzNodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPlaceHolder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDropdownClassName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExpandedKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisplayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMaxTagCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzMaxTagPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOpenChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzCleared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzRemoved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzExpandChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzTreeClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzTreeCheckBoxChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzSelectSearchComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectSearchComponent, {
        static: false
      }]
    }],
    treeRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['treeRef', {
        static: false
      }]
    }],
    cdkOverlayOrigin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, {
        static: true
      }]
    }],
    cdkConnectedOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, {
        static: false
      }]
    }],
    nzTreeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTreeTemplateChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['nzTreeTemplate', {
        static: true
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeSelectModule {
  static #_ = this.ɵfac = function NzTreeSelectModule_Factory(t) {
    return new (t || NzTreeSelectModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzTreeSelectModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectModule, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_24__.NzTreeModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__.NzEmptyModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__.NzNoAnimationModule, ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormPatchModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTreeSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectModule, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_24__.NzTreeModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__.NzEmptyModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_2__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__.NzNoAnimationModule, ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_19__.NzFormPatchModule],
      declarations: [NzTreeSelectComponent],
      exports: [NzTreeSelectComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 24193:
/*!********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzTreeComponent: () => (/* binding */ NzTreeComponent),
/* harmony export */   NzTreeIndentComponent: () => (/* binding */ NzTreeIndentComponent),
/* harmony export */   NzTreeModule: () => (/* binding */ NzTreeModule),
/* harmony export */   NzTreeNode: () => (/* reexport safe */ ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeNode),
/* harmony export */   NzTreeNodeBuiltinCheckboxComponent: () => (/* binding */ NzTreeNodeBuiltinCheckboxComponent),
/* harmony export */   NzTreeNodeBuiltinComponent: () => (/* binding */ NzTreeNodeBuiltinComponent),
/* harmony export */   NzTreeNodeSwitcherComponent: () => (/* binding */ NzTreeNodeSwitcherComponent),
/* harmony export */   NzTreeNodeTitleComponent: () => (/* binding */ NzTreeNodeTitleComponent),
/* harmony export */   NzTreeService: () => (/* binding */ NzTreeService),
/* harmony export */   NzTreeServiceFactory: () => (/* binding */ NzTreeServiceFactory)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/highlight */ 67369);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 86424);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 26672);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/core/tree */ 2783);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 251);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);




























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzTreeIndentComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tree-indent-unit", !ctx_r0.nzSelectMode)("ant-select-tree-indent-unit", ctx_r0.nzSelectMode)("ant-select-tree-indent-unit-start", ctx_r0.nzSelectMode && ctx_r0.nzIsStart[i_r2])("ant-tree-indent-unit-start", !ctx_r0.nzSelectMode && ctx_r0.nzIsStart[i_r2])("ant-select-tree-indent-unit-end", ctx_r0.nzSelectMode && ctx_r0.nzIsEnd[i_r2])("ant-tree-indent-unit-end", !ctx_r0.nzSelectMode && ctx_r0.nzIsEnd[i_r2]);
  }
}
const _c0 = ["builtin", ""];
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-switcher-icon", ctx_r5.nzSelectMode)("ant-tree-switcher-icon", !ctx_r5.nzSelectMode);
  }
}
const _c1 = function (a0, a1) {
  return {
    $implicit: a0,
    origin: a1
  };
};
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzExpandedIcon)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r4.context, ctx_r4.context.origin));
  }
}
function NzTreeNodeSwitcherComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading)("ngIfElse", _r2);
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r8.isSwitcherOpen ? "minus-square" : "plus-square");
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_1_Template, 1, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_2_Template, 1, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.isShowLineIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.isShowLineIcon);
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzExpandedIcon)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, ctx_r6.context, ctx_r6.context.origin));
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading)("ngIfElse", _r2);
  }
}
function NzTreeNodeSwitcherComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpin", true);
  }
}
function NzTreeNodeTitleComponent_ng_template_0_Template(rf, ctx) {}
function NzTreeNodeTitleComponent_ng_container_1_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r4.icon);
  }
}
function NzTreeNodeTitleComponent_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzTreeNodeTitleComponent_ng_container_1_span_1_span_2_Template, 1, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tree-icon__open", ctx_r3.isSwitcherOpen)("ant-tree-icon__close", ctx_r3.isSwitcherClose)("ant-tree-icon_loading", ctx_r3.isLoading)("ant-select-tree-iconEle", ctx_r3.selectMode)("ant-tree-iconEle", !ctx_r3.selectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-iconEle", ctx_r3.selectMode)("ant-select-tree-icon__customize", ctx_r3.selectMode)("ant-tree-iconEle", !ctx_r3.selectMode)("ant-tree-icon__customize", !ctx_r3.selectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.icon);
  }
}
function NzTreeNodeTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeTitleComponent_ng_container_1_span_1_Template, 3, 19, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "nzHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.icon && ctx_r1.showIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](3, 2, ctx_r1.title, ctx_r1.matchedValue, "i", "font-highlight"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function NzTreeNodeTitleComponent_nz_tree_drop_indicator_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-tree-drop-indicator", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dropPosition", ctx_r2.dragPosition)("level", ctx_r2.context.level);
  }
}
function NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tree-node-switcher", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template_nz_tree_node_switcher_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.clickExpand($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzSelectMode", ctx_r0.nzSelectMode)("context", ctx_r0.nzTreeNode)("isLeaf", ctx_r0.isLeaf)("isExpanded", ctx_r0.isExpanded)("isLoading", ctx_r0.isLoading);
  }
}
function NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tree-node-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template_nz_tree_node_checkbox_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.clickCheckBox($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSelectMode", ctx_r1.nzSelectMode)("isChecked", ctx_r1.isChecked)("isHalfChecked", ctx_r1.isHalfChecked)("isDisabled", ctx_r1.isDisabled)("isDisableCheckbox", ctx_r1.isDisableCheckbox);
  }
}
const _c2 = ["nzTreeTemplate"];
function NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_ng_template_1_Template(rf, ctx) {}
const _c3 = function (a0) {
  return {
    $implicit: a0
  };
};
function NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, node_r5));
  }
}
function NzTreeComponent_cdk_virtual_scroll_viewport_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.nzVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-list-holder-inner", ctx_r0.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r0.nzSelectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemSize", ctx_r0.nzVirtualItemSize)("minBufferPx", ctx_r0.nzVirtualMinBufferPx)("maxBufferPx", ctx_r0.nzVirtualMaxBufferPx);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.nzFlattenNodes)("cdkVirtualForTrackBy", ctx_r0.trackByFlattenNode);
  }
}
function NzTreeComponent_div_7_ng_container_1_ng_template_1_Template(rf, ctx) {}
function NzTreeComponent_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeComponent_div_7_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const node_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, node_r8));
  }
}
function NzTreeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeComponent_div_7_ng_container_1_Template, 2, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-list-holder-inner", ctx_r1.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r1.nzSelectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@.disabled", ctx_r1.beforeInit || !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@treeCollapseMotion", ctx_r1.nzFlattenNodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.nzFlattenNodes)("ngForTrackBy", ctx_r1.trackByFlattenNode);
  }
}
function NzTreeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-tree-node", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzExpandChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.eventTriggerChanged($event));
    })("nzClick", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.eventTriggerChanged($event));
    })("nzDblClick", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzDblClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.eventTriggerChanged($event));
    })("nzContextMenu", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzContextMenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.eventTriggerChanged($event));
    })("nzCheckBoxChange", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzCheckBoxChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.eventTriggerChanged($event));
    })("nzOnDragStart", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.eventTriggerChanged($event));
    })("nzOnDragEnter", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragEnter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.eventTriggerChanged($event));
    })("nzOnDragOver", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragOver_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.eventTriggerChanged($event));
    })("nzOnDragLeave", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragLeave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.eventTriggerChanged($event));
    })("nzOnDragEnd", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.eventTriggerChanged($event));
    })("nzOnDrop", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDrop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.eventTriggerChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const treeNode_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", treeNode_r10.icon)("title", treeNode_r10.title)("isLoading", treeNode_r10.isLoading)("isSelected", treeNode_r10.isSelected)("isDisabled", treeNode_r10.isDisabled)("isMatched", treeNode_r10.isMatched)("isExpanded", treeNode_r10.isExpanded)("isLeaf", treeNode_r10.isLeaf)("isStart", treeNode_r10.isStart)("isEnd", treeNode_r10.isEnd)("isChecked", treeNode_r10.isChecked)("isHalfChecked", treeNode_r10.isHalfChecked)("isDisableCheckbox", treeNode_r10.isDisableCheckbox)("isSelectable", treeNode_r10.isSelectable)("canHide", treeNode_r10.canHide)("nzTreeNode", treeNode_r10)("nzSelectMode", ctx_r3.nzSelectMode)("nzShowLine", ctx_r3.nzShowLine)("nzExpandedIcon", ctx_r3.nzExpandedIcon)("nzDraggable", ctx_r3.nzDraggable)("nzCheckable", ctx_r3.nzCheckable)("nzShowExpand", ctx_r3.nzShowExpand)("nzAsyncData", ctx_r3.nzAsyncData)("nzSearchValue", ctx_r3.nzSearchValue)("nzHideUnMatched", ctx_r3.nzHideUnMatched)("nzBeforeDrop", ctx_r3.nzBeforeDrop)("nzShowIcon", ctx_r3.nzShowIcon)("nzTreeTemplate", ctx_r3.nzTreeTemplate || ctx_r3.nzTreeTemplateChild);
  }
}
class NzTreeDropIndicatorComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.level = 1;
    this.direction = 'ltr';
    this.style = {};
  }
  ngOnChanges(_changes) {
    this.renderIndicator(this.dropPosition, this.direction);
  }
  renderIndicator(dropPosition, direction = 'ltr') {
    const offset = 4;
    const startPosition = direction === 'ltr' ? 'left' : 'right';
    const endPosition = direction === 'ltr' ? 'right' : 'left';
    const style = {
      [startPosition]: `${offset}px`,
      [endPosition]: '0px'
    };
    switch (dropPosition) {
      case -1:
        style.top = `${-3}px`;
        break;
      case 1:
        style.bottom = `${-3}px`;
        break;
      case 0:
        // dropPosition === 0
        style.bottom = `${-3}px`;
        style[startPosition] = `${offset + 24}px`;
        break;
      default:
        style.display = 'none';
        break;
    }
    this.style = style;
    this.cdr.markForCheck();
  }
  static #_ = this.ɵfac = function NzTreeDropIndicatorComponent_Factory(t) {
    return new (t || NzTreeDropIndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeDropIndicatorComponent,
    selectors: [["nz-tree-drop-indicator"]],
    hostVars: 4,
    hostBindings: function NzTreeDropIndicatorComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tree-drop-indicator", true);
      }
    },
    inputs: {
      dropPosition: "dropPosition",
      level: "level",
      direction: "direction"
    },
    exportAs: ["NzTreeDropIndicator"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 0,
    vars: 0,
    template: function NzTreeDropIndicatorComponent_Template(rf, ctx) {},
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeDropIndicatorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree-drop-indicator',
      exportAs: 'NzTreeDropIndicator',
      template: ``,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        '[class.ant-tree-drop-indicator]': 'true',
        '[style]': 'style'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    dropPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeIndentComponent {
  constructor() {
    this.nzTreeLevel = 0;
    this.nzIsStart = [];
    this.nzIsEnd = [];
    this.nzSelectMode = false;
    this.listOfUnit = [];
  }
  ngOnChanges(changes) {
    const {
      nzTreeLevel
    } = changes;
    if (nzTreeLevel) {
      this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
    }
  }
  static #_ = this.ɵfac = function NzTreeIndentComponent_Factory(t) {
    return new (t || NzTreeIndentComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeIndentComponent,
    selectors: [["nz-tree-indent"]],
    hostVars: 5,
    hostBindings: function NzTreeIndentComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tree-indent", !ctx.nzSelectMode)("ant-select-tree-indent", ctx.nzSelectMode);
      }
    },
    inputs: {
      nzTreeLevel: "nzTreeLevel",
      nzIsStart: "nzIsStart",
      nzIsEnd: "nzIsEnd",
      nzSelectMode: "nzSelectMode"
    },
    exportAs: ["nzTreeIndent"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [[3, "ant-tree-indent-unit", "ant-select-tree-indent-unit", "ant-select-tree-indent-unit-start", "ant-tree-indent-unit-start", "ant-select-tree-indent-unit-end", "ant-tree-indent-unit-end", 4, "ngFor", "ngForOf"]],
    template: function NzTreeIndentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzTreeIndentComponent_span_0_Template, 1, 12, "span", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfUnit);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeIndentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree-indent',
      exportAs: 'nzTreeIndent',
      template: `
    <span
      [class.ant-tree-indent-unit]="!nzSelectMode"
      [class.ant-select-tree-indent-unit]="nzSelectMode"
      [class.ant-select-tree-indent-unit-start]="nzSelectMode && nzIsStart[i]"
      [class.ant-tree-indent-unit-start]="!nzSelectMode && nzIsStart[i]"
      [class.ant-select-tree-indent-unit-end]="nzSelectMode && nzIsEnd[i]"
      [class.ant-tree-indent-unit-end]="!nzSelectMode && nzIsEnd[i]"
      *ngFor="let _ of listOfUnit; let i = index"
    ></span>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        '[attr.aria-hidden]': 'true',
        '[class.ant-tree-indent]': '!nzSelectMode',
        '[class.ant-select-tree-indent]': 'nzSelectMode'
      }
    }]
  }], null, {
    nzTreeLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzIsStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzIsEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSelectMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeBuiltinCheckboxComponent {
  constructor() {
    this.nzSelectMode = false;
  }
  static #_ = this.ɵfac = function NzTreeNodeBuiltinCheckboxComponent_Factory(t) {
    return new (t || NzTreeNodeBuiltinCheckboxComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeNodeBuiltinCheckboxComponent,
    selectors: [["nz-tree-node-checkbox", "builtin", ""]],
    hostVars: 16,
    hostBindings: function NzTreeNodeBuiltinCheckboxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-checkbox", ctx.nzSelectMode)("ant-select-tree-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-checkbox-disabled", ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox))("ant-tree-checkbox", !ctx.nzSelectMode)("ant-tree-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-checkbox-disabled", !ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox));
      }
    },
    inputs: {
      nzSelectMode: "nzSelectMode",
      isChecked: "isChecked",
      isHalfChecked: "isHalfChecked",
      isDisabled: "isDisabled",
      isDisableCheckbox: "isDisableCheckbox"
    },
    attrs: _c0,
    decls: 1,
    vars: 4,
    template: function NzTreeNodeBuiltinCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-tree-checkbox-inner", !ctx.nzSelectMode)("ant-select-tree-checkbox-inner", ctx.nzSelectMode);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeNodeBuiltinCheckboxComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree-node-checkbox[builtin]',
      template: `
    <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        '[class.ant-select-tree-checkbox]': `nzSelectMode`,
        '[class.ant-select-tree-checkbox-checked]': `nzSelectMode && isChecked`,
        '[class.ant-select-tree-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
        '[class.ant-select-tree-checkbox-disabled]': `nzSelectMode && (isDisabled || isDisableCheckbox)`,
        '[class.ant-tree-checkbox]': `!nzSelectMode`,
        '[class.ant-tree-checkbox-checked]': `!nzSelectMode && isChecked`,
        '[class.ant-tree-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
        '[class.ant-tree-checkbox-disabled]': `!nzSelectMode && (isDisabled || isDisableCheckbox)`
      }
    }]
  }], null, {
    nzSelectMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isHalfChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isDisableCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeSwitcherComponent {
  constructor() {
    this.nzSelectMode = false;
  }
  get isShowLineIcon() {
    return !this.isLeaf && !!this.nzShowLine;
  }
  get isShowSwitchIcon() {
    return !this.isLeaf && !this.nzShowLine;
  }
  get isSwitcherOpen() {
    return !!this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  static #_ = this.ɵfac = function NzTreeNodeSwitcherComponent_Factory(t) {
    return new (t || NzTreeNodeSwitcherComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeNodeSwitcherComponent,
    selectors: [["nz-tree-node-switcher"]],
    hostVars: 16,
    hostBindings: function NzTreeNodeSwitcherComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-switcher", ctx.nzSelectMode)("ant-select-tree-switcher-noop", ctx.nzSelectMode && ctx.isLeaf)("ant-select-tree-switcher_open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-switcher_close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-switcher", !ctx.nzSelectMode)("ant-tree-switcher-noop", !ctx.nzSelectMode && ctx.isLeaf)("ant-tree-switcher_open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-switcher_close", !ctx.nzSelectMode && ctx.isSwitcherClose);
      }
    },
    inputs: {
      nzShowExpand: "nzShowExpand",
      nzShowLine: "nzShowLine",
      nzExpandedIcon: "nzExpandedIcon",
      nzSelectMode: "nzSelectMode",
      context: "context",
      isLeaf: "isLeaf",
      isLoading: "isLoading",
      isExpanded: "isExpanded"
    },
    decls: 4,
    vars: 2,
    consts: [[4, "ngIf"], ["loadingTemplate", ""], [4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"]],
    template: function NzTreeNodeSwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzTreeNodeSwitcherComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzTreeNodeSwitcherComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowSwitchIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzShowLine);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeNodeSwitcherComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree-node-switcher',
      template: `
    <ng-container *ngIf="isShowSwitchIcon">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <span
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></span>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="nzShowLine">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <span
            *ngIf="isShowLineIcon"
            nz-icon
            [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
            class="ant-tree-switcher-line-icon"
          ></span>
          <span *ngIf="!isShowLineIcon" nz-icon nzType="file" class="ant-tree-switcher-line-icon"></span>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate>
      <span nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></span>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        '[class.ant-select-tree-switcher]': 'nzSelectMode',
        '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
        '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
        '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
        '[class.ant-tree-switcher]': '!nzSelectMode',
        '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
        '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
        '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
      }
    }]
  }], null, {
    nzShowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzShowLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzExpandedIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSelectMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isLeaf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeTitleComponent {
  get canDraggable() {
    return this.draggable && !this.isDisabled ? true : null;
  }
  get matchedValue() {
    return this.isMatched ? this.searchValue : '';
  }
  get isSwitcherOpen() {
    return this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.treeTemplate = null;
    this.selectMode = false;
    // Drag indicator
    this.showIndicator = true;
  }
  ngOnChanges(changes) {
    const {
      showIndicator,
      dragPosition
    } = changes;
    if (showIndicator || dragPosition) {
      this.cdr.markForCheck();
    }
  }
  static #_ = this.ɵfac = function NzTreeNodeTitleComponent_Factory(t) {
    return new (t || NzTreeNodeTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeNodeTitleComponent,
    selectors: [["nz-tree-node-title"]],
    hostVars: 21,
    hostBindings: function NzTreeNodeTitleComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.title)("draggable", ctx.canDraggable)("aria-grabbed", ctx.canDraggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("draggable", ctx.canDraggable)("ant-select-tree-node-content-wrapper", ctx.selectMode)("ant-select-tree-node-content-wrapper-open", ctx.selectMode && ctx.isSwitcherOpen)("ant-select-tree-node-content-wrapper-close", ctx.selectMode && ctx.isSwitcherClose)("ant-select-tree-node-selected", ctx.selectMode && ctx.isSelected)("ant-tree-node-content-wrapper", !ctx.selectMode)("ant-tree-node-content-wrapper-open", !ctx.selectMode && ctx.isSwitcherOpen)("ant-tree-node-content-wrapper-close", !ctx.selectMode && ctx.isSwitcherClose)("ant-tree-node-selected", !ctx.selectMode && ctx.isSelected);
      }
    },
    inputs: {
      searchValue: "searchValue",
      treeTemplate: "treeTemplate",
      draggable: "draggable",
      showIcon: "showIcon",
      selectMode: "selectMode",
      context: "context",
      icon: "icon",
      title: "title",
      isLoading: "isLoading",
      isSelected: "isSelected",
      isDisabled: "isDisabled",
      isMatched: "isMatched",
      isExpanded: "isExpanded",
      isLeaf: "isLeaf",
      showIndicator: "showIndicator",
      dragPosition: "dragPosition"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 7,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "dropPosition", "level", 4, "ngIf"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ant-select-tree-iconEle", "ant-tree-iconEle", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "dropPosition", "level"]],
    template: function NzTreeNodeTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzTreeNodeTitleComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeTitleComponent_ng_container_1_Template, 4, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzTreeNodeTitleComponent_nz_tree_drop_indicator_2_Template, 1, 2, "nz-tree-drop-indicator", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, ctx.context, ctx.context.origin));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.treeTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showIndicator);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, NzTreeDropIndicatorComponent, ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_5__.NzHighlightPipe],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeNodeTitleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree-node-title',
      template: `
    <ng-template
      [ngTemplateOutlet]="treeTemplate"
      [ngTemplateOutletContext]="{ $implicit: context, origin: context.origin }"
    ></ng-template>
    <ng-container *ngIf="!treeTemplate">
      <span
        *ngIf="icon && showIcon"
        [class.ant-tree-icon__open]="isSwitcherOpen"
        [class.ant-tree-icon__close]="isSwitcherClose"
        [class.ant-tree-icon_loading]="isLoading"
        [class.ant-select-tree-iconEle]="selectMode"
        [class.ant-tree-iconEle]="!selectMode"
      >
        <span
          [class.ant-select-tree-iconEle]="selectMode"
          [class.ant-select-tree-icon__customize]="selectMode"
          [class.ant-tree-iconEle]="!selectMode"
          [class.ant-tree-icon__customize]="!selectMode"
        >
          <span nz-icon *ngIf="icon" [nzType]="icon"></span>
        </span>
      </span>
      <span class="ant-tree-title" [innerHTML]="title | nzHighlight: matchedValue:'i':'font-highlight'"></span>
    </ng-container>
    <nz-tree-drop-indicator
      *ngIf="showIndicator"
      [dropPosition]="dragPosition"
      [level]="context.level"
    ></nz-tree-drop-indicator>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        '[attr.title]': 'title',
        '[attr.draggable]': 'canDraggable',
        '[attr.aria-grabbed]': 'canDraggable',
        '[class.draggable]': 'canDraggable',
        '[class.ant-select-tree-node-content-wrapper]': `selectMode`,
        '[class.ant-select-tree-node-content-wrapper-open]': `selectMode && isSwitcherOpen`,
        '[class.ant-select-tree-node-content-wrapper-close]': `selectMode && isSwitcherClose`,
        '[class.ant-select-tree-node-selected]': `selectMode && isSelected`,
        '[class.ant-tree-node-content-wrapper]': `!selectMode`,
        '[class.ant-tree-node-content-wrapper-open]': `!selectMode && isSwitcherOpen`,
        '[class.ant-tree-node-content-wrapper-close]': `!selectMode && isSwitcherClose`,
        '[class.ant-tree-node-selected]': `!selectMode && isSelected`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    searchValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    treeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    selectMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    context: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isMatched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isLeaf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class NzTreeNodeBuiltinComponent {
  /**
   * default set
   */
  get displayStyle() {
    // to hide unmatched nodes
    return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
  }
  get isSwitcherOpen() {
    return this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  /**
   * collapse node
   *
   * @param event
   */
  clickExpand(event) {
    event.preventDefault();
    if (!this.isLoading && !this.isLeaf) {
      // set async state
      if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
        this.nzTreeNode.isLoading = true;
      }
      this.nzTreeNode.setExpanded(!this.isExpanded);
    }
    this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
    this.nzExpandChange.emit(eventNext);
  }
  clickSelect(event) {
    event.preventDefault();
    if (this.isSelectable && !this.isDisabled) {
      this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
    }
    this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
    this.nzClick.emit(eventNext);
  }
  dblClick(event) {
    event.preventDefault();
    const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
    this.nzDblClick.emit(eventNext);
  }
  contextMenu(event) {
    event.preventDefault();
    const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
    this.nzContextMenu.emit(eventNext);
  }
  /**
   * check node
   *
   * @param event
   */
  clickCheckBox(event) {
    event.preventDefault();
    // return if node is disabled
    if (this.isDisabled || this.isDisableCheckbox) {
      return;
    }
    this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
    this.nzTreeNode.isHalfChecked = false;
    this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
    this.nzCheckBoxChange.emit(eventNext);
  }
  clearDragClass() {
    const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over', 'drop-target'];
    dragClass.forEach(e => {
      this.renderer.removeClass(this.elementRef.nativeElement, e);
    });
  }
  /**
   * drag event
   *
   * @param e
   */
  handleDragStart(e) {
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', this.nzTreeNode.key);
    } catch (error) {
      // empty
    }
    this.nzTreeService.setSelectedNode(this.nzTreeNode);
    this.draggingKey = this.nzTreeNode.key;
    const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
    this.nzOnDragStart.emit(eventNext);
  }
  handleDragEnter(e) {
    e.preventDefault();
    // reset position
    this.showIndicator = this.nzTreeNode.key !== this.nzTreeService.getSelectedNode()?.key;
    this.renderIndicator(2);
    this.ngZone.run(() => {
      const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
      this.nzOnDragEnter.emit(eventNext);
    });
  }
  handleDragOver(e) {
    e.preventDefault();
    const dropPosition = this.nzTreeService.calcDropPosition(e);
    if (this.dragPos !== dropPosition) {
      this.clearDragClass();
      this.renderIndicator(dropPosition);
      // leaf node will pass
      if (!(this.dragPos === 0 && this.isLeaf)) {
        this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
        this.renderer.addClass(this.elementRef.nativeElement, 'drop-target');
      }
    }
    const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
    this.nzOnDragOver.emit(eventNext);
  }
  handleDragLeave(e) {
    e.preventDefault();
    this.renderIndicator(2);
    this.clearDragClass();
    const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
    this.nzOnDragLeave.emit(eventNext);
  }
  handleDragDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.ngZone.run(() => {
      this.showIndicator = false;
      this.clearDragClass();
      const node = this.nzTreeService.getSelectedNode();
      if (!node || node && node.key === this.nzTreeNode.key || this.dragPos === 0 && this.isLeaf) {
        return;
      }
      // pass if node is leafNo
      const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
      const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
      if (this.nzBeforeDrop) {
        this.nzBeforeDrop({
          dragNode: this.nzTreeService.getSelectedNode(),
          node: this.nzTreeNode,
          pos: this.dragPos
        }).subscribe(canDrop => {
          if (canDrop) {
            this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
          }
          this.nzOnDrop.emit(dropEvent);
          this.nzOnDragEnd.emit(dragEndEvent);
        });
      } else if (this.nzTreeNode) {
        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
        this.nzOnDrop.emit(dropEvent);
      }
    });
  }
  handleDragEnd(e) {
    e.preventDefault();
    this.ngZone.run(() => {
      // if user do not custom beforeDrop
      if (!this.nzBeforeDrop) {
        // clear dragging state
        this.draggingKey = null;
        const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
        this.nzOnDragEnd.emit(eventNext);
      } else {
        // clear dragging state
        this.draggingKey = null;
        this.markForCheck();
      }
    });
  }
  /**
   * Listening to dragging events.
   */
  handDragEvent() {
    this.ngZone.runOutsideAngular(() => {
      if (this.nzDraggable) {
        const nativeElement = this.elementRef.nativeElement;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nativeElement, 'dragstart').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(e => this.handleDragStart(e));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nativeElement, 'dragenter').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(e => this.handleDragEnter(e));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nativeElement, 'dragover').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(e => this.handleDragOver(e));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nativeElement, 'dragleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(e => this.handleDragLeave(e));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nativeElement, 'drop').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(e => this.handleDragDrop(e));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(nativeElement, 'dragend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(e => this.handleDragEnd(e));
      } else {
        this.destroy$.next(true);
        this.destroy$.complete();
      }
    });
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  constructor(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
    this.nzTreeService = nzTreeService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.noAnimation = noAnimation;
    /**
     * for global property
     */
    this.icon = '';
    this.title = '';
    this.isLoading = false;
    this.isSelected = false;
    this.isDisabled = false;
    this.isMatched = false;
    this.isStart = [];
    this.isEnd = [];
    this.nzHideUnMatched = false;
    this.nzNoAnimation = false;
    this.nzSelectMode = false;
    this.nzShowIcon = false;
    this.nzTreeTemplate = null;
    this.nzSearchValue = '';
    this.nzDraggable = false;
    this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * drag var
     */
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.dragPos = 2;
    this.dragPosClass = {
      0: 'drag-over',
      1: 'drag-over-gap-bottom',
      '-1': 'drag-over-gap-top'
    };
    this.draggingKey = null;
    this.showIndicator = false;
  }
  ngOnInit() {
    this.nzTreeNode.component = this;
    this.ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this.elementRef.nativeElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(event => {
        if (this.nzSelectMode) {
          event.preventDefault();
        }
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzDraggable
    } = changes;
    if (nzDraggable) {
      this.handDragEvent();
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  renderIndicator(dropPosition) {
    this.ngZone.run(() => {
      this.showIndicator = dropPosition !== 2;
      if (this.nzTreeNode.key === this.nzTreeService.getSelectedNode()?.key || dropPosition === 0 && this.isLeaf) {
        return;
      }
      this.dragPos = dropPosition;
      this.cdr.markForCheck();
    });
  }
  static #_ = this.ɵfac = function NzTreeNodeBuiltinComponent_Factory(t) {
    return new (t || NzTreeNodeBuiltinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationDirective, 9));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeNodeBuiltinComponent,
    selectors: [["nz-tree-node", "builtin", ""]],
    hostVars: 36,
    hostBindings: function NzTreeNodeBuiltinComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.displayStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-treenode", ctx.nzSelectMode)("ant-select-tree-treenode-disabled", ctx.nzSelectMode && ctx.isDisabled)("ant-select-tree-treenode-switcher-open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-treenode-switcher-close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-select-tree-treenode-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-treenode-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-treenode-selected", ctx.nzSelectMode && ctx.isSelected)("ant-select-tree-treenode-loading", ctx.nzSelectMode && ctx.isLoading)("ant-tree-treenode", !ctx.nzSelectMode)("ant-tree-treenode-disabled", !ctx.nzSelectMode && ctx.isDisabled)("ant-tree-treenode-switcher-open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-treenode-switcher-close", !ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-treenode-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-treenode-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-treenode-selected", !ctx.nzSelectMode && ctx.isSelected)("ant-tree-treenode-loading", !ctx.nzSelectMode && ctx.isLoading)("dragging", ctx.draggingKey === ctx.nzTreeNode.key);
      }
    },
    inputs: {
      icon: "icon",
      title: "title",
      isLoading: "isLoading",
      isSelected: "isSelected",
      isDisabled: "isDisabled",
      isMatched: "isMatched",
      isExpanded: "isExpanded",
      isLeaf: "isLeaf",
      isChecked: "isChecked",
      isHalfChecked: "isHalfChecked",
      isDisableCheckbox: "isDisableCheckbox",
      isSelectable: "isSelectable",
      canHide: "canHide",
      isStart: "isStart",
      isEnd: "isEnd",
      nzTreeNode: "nzTreeNode",
      nzShowLine: "nzShowLine",
      nzShowExpand: "nzShowExpand",
      nzCheckable: "nzCheckable",
      nzAsyncData: "nzAsyncData",
      nzHideUnMatched: "nzHideUnMatched",
      nzNoAnimation: "nzNoAnimation",
      nzSelectMode: "nzSelectMode",
      nzShowIcon: "nzShowIcon",
      nzExpandedIcon: "nzExpandedIcon",
      nzTreeTemplate: "nzTreeTemplate",
      nzBeforeDrop: "nzBeforeDrop",
      nzSearchValue: "nzSearchValue",
      nzDraggable: "nzDraggable"
    },
    outputs: {
      nzClick: "nzClick",
      nzDblClick: "nzDblClick",
      nzContextMenu: "nzContextMenu",
      nzCheckBoxChange: "nzCheckBoxChange",
      nzExpandChange: "nzExpandChange",
      nzOnDragStart: "nzOnDragStart",
      nzOnDragEnter: "nzOnDragEnter",
      nzOnDragOver: "nzOnDragOver",
      nzOnDragLeave: "nzOnDragLeave",
      nzOnDrop: "nzOnDrop",
      nzOnDragEnd: "nzOnDragEnd"
    },
    exportAs: ["nzTreeBuiltinNode"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    attrs: _c0,
    decls: 4,
    vars: 22,
    consts: [[3, "nzTreeLevel", "nzSelectMode", "nzIsStart", "nzIsEnd"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click", 4, "ngIf"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click", 4, "ngIf"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "searchValue", "treeTemplate", "draggable", "showIcon", "selectMode", "context", "showIndicator", "dragPosition", "dblclick", "click", "contextmenu"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click"]],
    template: function NzTreeNodeBuiltinComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-tree-indent", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template, 1, 8, "nz-tree-node-switcher", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template, 1, 5, "nz-tree-node-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-tree-node-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_dblclick_3_listener($event) {
          return ctx.dblClick($event);
        })("click", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_click_3_listener($event) {
          return ctx.clickSelect($event);
        })("contextmenu", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_contextmenu_3_listener($event) {
          return ctx.contextMenu($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTreeLevel", ctx.nzTreeNode.level)("nzSelectMode", ctx.nzSelectMode)("nzIsStart", ctx.isStart)("nzIsEnd", ctx.isEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzShowExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzCheckable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icon)("title", ctx.title)("isLoading", ctx.isLoading)("isSelected", ctx.isSelected)("isDisabled", ctx.isDisabled)("isMatched", ctx.isMatched)("isExpanded", ctx.isExpanded)("isLeaf", ctx.isLeaf)("searchValue", ctx.nzSearchValue)("treeTemplate", ctx.nzTreeTemplate)("draggable", ctx.nzDraggable)("showIcon", ctx.nzShowIcon)("selectMode", ctx.nzSelectMode)("context", ctx.nzTreeNode)("showIndicator", ctx.showIndicator)("dragPosition", ctx.dragPos);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzShowLine", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzShowExpand", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzCheckable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzAsyncData", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzHideUnMatched", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzNoAnimation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzSelectMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeNodeBuiltinComponent.prototype, "nzShowIcon", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeNodeBuiltinComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree-node[builtin]',
      exportAs: 'nzTreeBuiltinNode',
      template: `
    <nz-tree-indent
      [nzTreeLevel]="nzTreeNode.level"
      [nzSelectMode]="nzSelectMode"
      [nzIsStart]="isStart"
      [nzIsEnd]="isEnd"
    ></nz-tree-indent>
    <nz-tree-node-switcher
      *ngIf="nzShowExpand"
      [nzShowExpand]="nzShowExpand"
      [nzShowLine]="nzShowLine"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzSelectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [isLeaf]="isLeaf"
      [isExpanded]="isExpanded"
      [isLoading]="isLoading"
      (click)="clickExpand($event)"
    ></nz-tree-node-switcher>
    <nz-tree-node-checkbox
      builtin
      *ngIf="nzCheckable"
      (click)="clickCheckBox($event)"
      [nzSelectMode]="nzSelectMode"
      [isChecked]="isChecked"
      [isHalfChecked]="isHalfChecked"
      [isDisabled]="isDisabled"
      [isDisableCheckbox]="isDisableCheckbox"
    ></nz-tree-node-checkbox>
    <nz-tree-node-title
      [icon]="icon"
      [title]="title"
      [isLoading]="isLoading"
      [isSelected]="isSelected"
      [isDisabled]="isDisabled"
      [isMatched]="isMatched"
      [isExpanded]="isExpanded"
      [isLeaf]="isLeaf"
      [searchValue]="nzSearchValue"
      [treeTemplate]="nzTreeTemplate"
      [draggable]="nzDraggable"
      [showIcon]="nzShowIcon"
      [selectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [showIndicator]="showIndicator"
      [dragPosition]="dragPos"
      (dblclick)="dblClick($event)"
      (click)="clickSelect($event)"
      (contextmenu)="contextMenu($event)"
    ></nz-tree-node-title>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        '[class.ant-select-tree-treenode]': `nzSelectMode`,
        '[class.ant-select-tree-treenode-disabled]': `nzSelectMode && isDisabled`,
        '[class.ant-select-tree-treenode-switcher-open]': `nzSelectMode && isSwitcherOpen`,
        '[class.ant-select-tree-treenode-switcher-close]': `nzSelectMode && isSwitcherClose`,
        '[class.ant-select-tree-treenode-checkbox-checked]': `nzSelectMode && isChecked`,
        '[class.ant-select-tree-treenode-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
        '[class.ant-select-tree-treenode-selected]': `nzSelectMode && isSelected`,
        '[class.ant-select-tree-treenode-loading]': `nzSelectMode && isLoading`,
        '[class.ant-tree-treenode]': `!nzSelectMode`,
        '[class.ant-tree-treenode-disabled]': `!nzSelectMode && isDisabled`,
        '[class.ant-tree-treenode-switcher-open]': `!nzSelectMode && isSwitcherOpen`,
        '[class.ant-tree-treenode-switcher-close]': `!nzSelectMode && isSwitcherClose`,
        '[class.ant-tree-treenode-checkbox-checked]': `!nzSelectMode && isChecked`,
        '[class.ant-tree-treenode-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
        '[class.ant-tree-treenode-selected]': `!nzSelectMode && isSelected`,
        '[class.ant-tree-treenode-loading]': `!nzSelectMode && isLoading`,
        '[class.dragging]': `draggingKey === nzTreeNode.key`,
        '[style.display]': 'displayStyle'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isMatched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isLeaf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isHalfChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isDisableCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    canHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    isEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTreeNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzShowLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzShowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzCheckable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzAsyncData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzHideUnMatched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzNoAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSelectMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzShowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzExpandedIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTreeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzBeforeDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSearchValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzDraggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzCheckBoxChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzExpandChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeService extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService {
  constructor() {
    super();
  }
  static #_ = this.ɵfac = function NzTreeService_Factory(t) {
    return new (t || NzTreeService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NzTreeService,
    factory: NzTreeService.ɵfac
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [];
  }, null);
})();
function NzTreeServiceFactory(higherOrderService, treeService) {
  return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_MODULE_NAME = 'tree';
class NzTreeComponent extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBase {
  writeValue(value) {
    this.handleNzData(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Render all properties of nzTree
   *
   * @param changes: all changes from @Input
   */
  renderTreeProperties(changes) {
    let useDefaultExpandedKeys = false;
    let expandAll = false;
    const {
      nzData,
      nzExpandedKeys,
      nzSelectedKeys,
      nzCheckedKeys,
      nzCheckStrictly,
      nzExpandAll,
      nzMultiple,
      nzSearchValue
    } = changes;
    if (nzExpandAll) {
      useDefaultExpandedKeys = true;
      expandAll = this.nzExpandAll;
    }
    if (nzMultiple) {
      this.nzTreeService.isMultiple = this.nzMultiple;
    }
    if (nzCheckStrictly) {
      this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
    }
    if (nzData) {
      this.handleNzData(this.nzData);
    }
    if (nzCheckedKeys) {
      this.handleCheckedKeys(this.nzCheckedKeys);
    }
    if (nzCheckStrictly) {
      this.handleCheckedKeys(null);
    }
    if (nzExpandedKeys || nzExpandAll) {
      useDefaultExpandedKeys = true;
      this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
    }
    if (nzSelectedKeys) {
      this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
    }
    if (nzSearchValue) {
      if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
        useDefaultExpandedKeys = false;
        this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
        this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
      }
    }
    // flatten data
    const currentExpandedKeys = this.getExpandedNodeList().map(v => v.key);
    const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
    this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
  }
  trackByFlattenNode(_, node) {
    return node.key;
  }
  // Deal with properties
  /**
   * nzData
   *
   * @param value
   */
  handleNzData(value) {
    if (Array.isArray(value)) {
      const data = this.coerceTreeNodes(value);
      this.nzTreeService.initTree(data);
    }
  }
  handleFlattenNodes(data, expandKeys = []) {
    this.nzTreeService.flattenTreeData(data, expandKeys);
  }
  handleCheckedKeys(keys) {
    this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
  }
  handleExpandedKeys(keys = []) {
    this.nzTreeService.conductExpandedKeys(keys);
  }
  handleSelectedKeys(keys, isMulti) {
    this.nzTreeService.conductSelectedKeys(keys, isMulti);
  }
  handleSearchValue(value, searchFunc) {
    const dataList = (0,ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.flattenTreeData)(this.nzTreeService.rootNodes, true).map(v => v.data);
    const checkIfMatched = node => {
      if (searchFunc) {
        return searchFunc(node.origin);
      }
      return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
    };
    dataList.forEach(v => {
      v.isMatched = checkIfMatched(v);
      v.canHide = !v.isMatched;
      if (!v.isMatched) {
        v.setExpanded(false);
        this.nzTreeService.setExpandedNodeList(v);
      } else {
        // expand
        this.nzTreeService.expandNodeAllParentBySearch(v);
      }
      this.nzTreeService.setMatchedNodeList(v);
    });
  }
  /**
   * Handle emit event
   *
   * @param event
   * handle each event
   */
  eventTriggerChanged(event) {
    const node = event.node;
    switch (event.eventName) {
      case 'expand':
        this.renderTree();
        this.nzExpandChange.emit(event);
        break;
      case 'click':
        this.nzClick.emit(event);
        break;
      case 'dblclick':
        this.nzDblClick.emit(event);
        break;
      case 'contextmenu':
        this.nzContextMenu.emit(event);
        break;
      case 'check':
        // Render checked state with nodes' property `isChecked`
        this.nzTreeService.setCheckedNodeList(node);
        if (!this.nzCheckStrictly) {
          this.nzTreeService.conduct(node);
        }
        // Cause check method will rerender list, so we need recover it and next the new event to user
        const eventNext = this.nzTreeService.formatEvent('check', node, event.event);
        this.nzCheckBoxChange.emit(eventNext);
        break;
      case 'dragstart':
        // if node is expanded
        if (node.isExpanded) {
          node.setExpanded(!node.isExpanded);
          this.renderTree();
        }
        this.nzOnDragStart.emit(event);
        break;
      case 'dragenter':
        const selectedNode = this.nzTreeService.getSelectedNode();
        if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
          node.setExpanded(true);
          this.renderTree();
        }
        this.nzOnDragEnter.emit(event);
        break;
      case 'dragover':
        this.nzOnDragOver.emit(event);
        break;
      case 'dragleave':
        this.nzOnDragLeave.emit(event);
        break;
      case 'dragend':
        this.nzOnDragEnd.emit(event);
        break;
      case 'drop':
        this.renderTree();
        this.nzOnDrop.emit(event);
        break;
    }
  }
  /**
   * Click expand icon
   */
  renderTree() {
    this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map(v => v.key));
    this.cdr.markForCheck();
  }
  // Handle emit event end
  constructor(nzTreeService, nzConfigService, cdr, directionality, noAnimation) {
    super(nzTreeService);
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShowIcon = false;
    this.nzHideUnMatched = false;
    this.nzBlockNode = false;
    this.nzExpandAll = false;
    this.nzSelectMode = false;
    this.nzCheckStrictly = false;
    this.nzShowExpand = true;
    this.nzShowLine = false;
    this.nzCheckable = false;
    this.nzAsyncData = false;
    this.nzDraggable = false;
    this.nzMultiple = false;
    this.nzVirtualItemSize = 28;
    this.nzVirtualMaxBufferPx = 500;
    this.nzVirtualMinBufferPx = 28;
    this.nzVirtualHeight = null;
    this.nzData = [];
    this.nzExpandedKeys = [];
    this.nzSelectedKeys = [];
    this.nzCheckedKeys = [];
    this.nzSearchValue = '';
    this.nzFlattenNodes = [];
    this.beforeInit = true;
    this.dir = 'ltr';
    this.nzExpandedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzSelectedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzCheckedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzSearchValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.nzOnDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.HIDDEN_STYLE = {
      width: 0,
      height: 0,
      display: 'flex',
      overflow: 'hidden',
      opacity: 0,
      border: 0,
      padding: 0,
      margin: 0
    };
    this.HIDDEN_NODE_STYLE = {
      position: 'absolute',
      pointerEvents: 'none',
      visibility: 'hidden',
      height: 0,
      overflow: 'hidden'
    };
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.onChange = () => null;
    this.onTouched = () => null;
  }
  ngOnInit() {
    this.nzTreeService.flattenNodes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.nzFlattenNodes = !!this.nzVirtualHeight && this.nzHideUnMatched && this.nzSearchValue?.length > 0 ? data.filter(d => !d.canHide) : data;
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    this.renderTreeProperties(changes);
  }
  ngAfterViewInit() {
    this.beforeInit = false;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function NzTreeComponent_Factory(t) {
    return new (t || NzTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationDirective, 9));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzTreeComponent,
    selectors: [["nz-tree"]],
    contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c2, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzTreeTemplateChild = _t.first);
      }
    },
    viewQuery: function NzTreeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualScrollViewport, 5, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualScrollViewport);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
      }
    },
    hostVars: 20,
    hostBindings: function NzTreeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree", ctx.nzSelectMode)("ant-select-tree-show-line", ctx.nzSelectMode && ctx.nzShowLine)("ant-select-tree-icon-hide", ctx.nzSelectMode && !ctx.nzShowIcon)("ant-select-tree-block-node", ctx.nzSelectMode && ctx.nzBlockNode)("ant-tree", !ctx.nzSelectMode)("ant-tree-rtl", ctx.dir === "rtl")("ant-tree-show-line", !ctx.nzSelectMode && ctx.nzShowLine)("ant-tree-icon-hide", !ctx.nzSelectMode && !ctx.nzShowIcon)("ant-tree-block-node", !ctx.nzSelectMode && ctx.nzBlockNode)("draggable-tree", ctx.nzDraggable);
      }
    },
    inputs: {
      nzShowIcon: "nzShowIcon",
      nzHideUnMatched: "nzHideUnMatched",
      nzBlockNode: "nzBlockNode",
      nzExpandAll: "nzExpandAll",
      nzSelectMode: "nzSelectMode",
      nzCheckStrictly: "nzCheckStrictly",
      nzShowExpand: "nzShowExpand",
      nzShowLine: "nzShowLine",
      nzCheckable: "nzCheckable",
      nzAsyncData: "nzAsyncData",
      nzDraggable: "nzDraggable",
      nzMultiple: "nzMultiple",
      nzExpandedIcon: "nzExpandedIcon",
      nzVirtualItemSize: "nzVirtualItemSize",
      nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
      nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
      nzVirtualHeight: "nzVirtualHeight",
      nzTreeTemplate: "nzTreeTemplate",
      nzBeforeDrop: "nzBeforeDrop",
      nzData: "nzData",
      nzExpandedKeys: "nzExpandedKeys",
      nzSelectedKeys: "nzSelectedKeys",
      nzCheckedKeys: "nzCheckedKeys",
      nzSearchValue: "nzSearchValue",
      nzSearchFunc: "nzSearchFunc"
    },
    outputs: {
      nzExpandedKeysChange: "nzExpandedKeysChange",
      nzSelectedKeysChange: "nzSelectedKeysChange",
      nzCheckedKeysChange: "nzCheckedKeysChange",
      nzSearchValueChange: "nzSearchValueChange",
      nzClick: "nzClick",
      nzDblClick: "nzDblClick",
      nzContextMenu: "nzContextMenu",
      nzCheckBoxChange: "nzCheckBoxChange",
      nzExpandChange: "nzExpandChange",
      nzOnDragStart: "nzOnDragStart",
      nzOnDragEnter: "nzOnDragEnter",
      nzOnDragOver: "nzOnDragOver",
      nzOnDragLeave: "nzOnDragLeave",
      nzOnDrop: "nzOnDrop",
      nzOnDragEnd: "nzOnDragEnd"
    },
    exportAs: ["nzTree"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NzTreeService, {
      provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService,
      useFactory: NzTreeServiceFactory,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeHigherOrderServiceToken], NzTreeService]
    }, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NzTreeComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 10,
    vars: 6,
    consts: [[3, "ngStyle"], [1, "ant-tree-treenode", 3, "ngStyle"], [1, "ant-tree-indent"], [1, "ant-tree-indent-unit"], [1, "ant-tree-list", 2, "position", "relative"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "itemSize", "minBufferPx", "maxBufferPx", "height", 4, "ngIf"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "nzNoAnimation", 4, "ngIf"], ["nodeTemplate", ""], [3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoAnimation"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["builtin", "", 3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "isStart", "isEnd", "isChecked", "isHalfChecked", "isDisableCheckbox", "isSelectable", "canHide", "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzShowIcon", "nzTreeTemplate", "nzExpandChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDragEnd", "nzOnDrop"]],
    template: function NzTreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzTreeComponent_cdk_virtual_scroll_viewport_6_Template, 2, 11, "cdk-virtual-scroll-viewport", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NzTreeComponent_div_7_Template, 2, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NzTreeComponent_ng_template_8_Template, 1, 28, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.HIDDEN_STYLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.HIDDEN_NODE_STYLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-select-tree-list", ctx.nzSelectMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzVirtualHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzVirtualHeight);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationDirective, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualScrollViewport, NzTreeNodeBuiltinComponent],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_16__.treeCollapseMotion]
    },
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzTreeComponent.prototype, "nzShowIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzTreeComponent.prototype, "nzBlockNode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzExpandAll", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzSelectMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzShowExpand", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzShowLine", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzCheckable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzAsyncData", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzDraggable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzTreeComponent.prototype, "nzMultiple", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-tree',
      exportAs: 'nzTree',
      animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_16__.treeCollapseMotion],
      template: `
    <div>
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div class="ant-tree-treenode" [ngStyle]="HIDDEN_NODE_STYLE">
      <div class="ant-tree-indent">
        <div class="ant-tree-indent-unit"></div>
      </div>
    </div>
    <div class="ant-tree-list" [class.ant-select-tree-list]="nzSelectMode" style="position: relative">
      <cdk-virtual-scroll-viewport
        *ngIf="nzVirtualHeight"
        [class.ant-select-tree-list-holder-inner]="nzSelectMode"
        [class.ant-tree-list-holder-inner]="!nzSelectMode"
        [itemSize]="nzVirtualItemSize"
        [minBufferPx]="nzVirtualMinBufferPx"
        [maxBufferPx]="nzVirtualMaxBufferPx"
        [style.height]="nzVirtualHeight"
      >
        <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
          <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>

      <div
        *ngIf="!nzVirtualHeight"
        [class.ant-select-tree-list-holder-inner]="nzSelectMode"
        [class.ant-tree-list-holder-inner]="!nzSelectMode"
        [@.disabled]="beforeInit || !!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@treeCollapseMotion]="nzFlattenNodes.length"
      >
        <ng-container *ngFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
          <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
        </ng-container>
      </div>
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        builtin
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      ></nz-tree-node>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      providers: [NzTreeService, {
        provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService,
        useFactory: NzTreeServiceFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeHigherOrderServiceToken], NzTreeService]
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NzTreeComponent),
        multi: true
      }],
      host: {
        '[class.ant-select-tree]': `nzSelectMode`,
        '[class.ant-select-tree-show-line]': `nzSelectMode && nzShowLine`,
        '[class.ant-select-tree-icon-hide]': `nzSelectMode && !nzShowIcon`,
        '[class.ant-select-tree-block-node]': `nzSelectMode && nzBlockNode`,
        '[class.ant-tree]': `!nzSelectMode`,
        '[class.ant-tree-rtl]': `dir === 'rtl'`,
        '[class.ant-tree-show-line]': `!nzSelectMode && nzShowLine`,
        '[class.ant-tree-icon-hide]': `!nzSelectMode && !nzShowIcon`,
        '[class.ant-tree-block-node]': `!nzSelectMode && nzBlockNode`,
        '[class.draggable-tree]': `nzDraggable`
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_0__.NzTreeBaseService
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    nzShowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzHideUnMatched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzBlockNode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzExpandAll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSelectMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzCheckStrictly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzShowExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzShowLine: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzCheckable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzAsyncData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzDraggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzMultiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzExpandedIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzVirtualItemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzVirtualMaxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzVirtualMinBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzVirtualHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTreeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzBeforeDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzExpandedKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSelectedKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzCheckedKeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSearchValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSearchFunc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTreeTemplateChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: ['nzTreeTemplate', {
        static: true
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualScrollViewport, {
        read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.CdkVirtualScrollViewport
      }]
    }],
    nzExpandedKeysChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzSelectedKeysChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzCheckedKeysChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzSearchValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzContextMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzCheckBoxChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzExpandChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzOnDragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeModule {
  static #_ = this.ɵfac = function NzTreeModule_Factory(t) {
    return new (t || NzTreeModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NzTreeModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationModule, ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_5__.NzHighlightModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__.NzNoAnimationModule, ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_5__.NzHighlightModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule],
      declarations: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent, NzTreeDropIndicatorComponent],
      exports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_empty_index_module_ts.js.map