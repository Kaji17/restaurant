"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_drawer_index_module_ts"],{

/***/ 73525:
/*!**************************************************!*\
  !*** ./src/app/components/drawer/basic-right.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerBasicRightComponent: () => (/* binding */ NzDemoDrawerBasicRightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoDrawerBasicRightComponent {
  visible = false;
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  static ɵfac = function NzDemoDrawerBasicRightComponent_Factory(t) {
    return new (t || NzDemoDrawerBasicRightComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoDrawerBasicRightComponent,
    selectors: [["nz-demo-drawer-basic-right"]],
    decls: 9,
    vars: 2,
    consts: [["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nzPlacement", "right", "nzTitle", "Basic Drawer", 3, "nzClosable", "nzVisible", "nzOnClose"]],
    template: function NzDemoDrawerBasicRightComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerBasicRightComponent_Template_button_click_0_listener() {
          return ctx.open();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerBasicRightComponent_Template_nz_drawer_nzOnClose_2_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.visible);
      }
    },
    dependencies: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 97909:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/en.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerEnComponent: () => (/* binding */ NzDemoDrawerEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic_right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-right */ 73525);
/* harmony import */ var _from_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-drawer */ 2381);
/* harmony import */ var _multi_level_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-level-drawer */ 33045);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placement */ 49321);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ 36627);
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile */ 45130);








class NzDemoDrawerEnComponent {
  static ɵfac = function NzDemoDrawerEnComponent_Factory(t) {
    return new (t || NzDemoDrawerEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NzDemoDrawerEnComponent,
    selectors: [["nz-demo-drawer"]],
    decls: 39,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzXl", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoDrawerEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "nz-demo-drawer-basic-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Edit item in drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "nz-demo-drawer-from-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Multi-level drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "nz-demo-drawer-multi-level-drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "div", 3)(23, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Custom Placement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "nz-demo-drawer-placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 2)(28, "div", 3)(29, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Preview drawer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "nz-demo-drawer-user-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 2)(34, "div", 3)(35, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Drawer's service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "nz-demo-drawer-service");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, _basic_right__WEBPACK_IMPORTED_MODULE_0__.NzDemoDrawerBasicRightComponent, _from_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDemoDrawerFromDrawerComponent, _multi_level_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDemoDrawerMultiLevelDrawerComponent, _placement__WEBPACK_IMPORTED_MODULE_3__.NzDemoDrawerPlacementComponent, _service__WEBPACK_IMPORTED_MODULE_4__.NzDemoDrawerServiceComponent, _user_profile__WEBPACK_IMPORTED_MODULE_5__.NzDemoDrawerUserProfileComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2381:
/*!**************************************************!*\
  !*** ./src/app/components/drawer/from-drawer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerFromDrawerComponent: () => (/* binding */ NzDemoDrawerFromDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);











const _c0 = function () {
  return {
    minRows: 4,
    maxRows: 4
  };
};
function NzDemoDrawerFromDrawerComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4)(1, "div", 5)(2, "div", 6)(3, "nz-form-item")(4, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "nz-form-item")(10, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-input-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "nz-form-item")(18, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6)(23, "nz-form-item")(24, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nz-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6)(30, "nz-form-item")(31, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Approver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nz-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6)(36, "nz-form-item")(37, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "DateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nz-range-picker", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5)(42, "div", 15)(43, "nz-form-item")(44, "nz-form-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.selectClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.selectClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.selectClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
  }
}
function NzDemoDrawerFromDrawerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerFromDrawerComponent_ng_template_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerFromDrawerComponent_ng_template_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    overflow: "auto"
  };
};
class NzDemoDrawerFromDrawerComponent {
  visible = false;
  selectClass = 'capitalize [&>nz-select-top-control]:border-normal dark:[&>nz-select-top-control]:border-white/10 [&>nz-select-top-control]:bg-white [&>nz-select-top-control]:dark:bg-white/10 [&>nz-select-top-control]:shadow-none [&>nz-select-top-control]:text-dark [&>nz-select-top-control]:dark:text-white/60 [&>nz-select-top-control]:h-[46px] [&>nz-select-top-control]:flex [&>nz-select-top-control]:items-center [&>nz-select-top-control]:rounded-[4px] [&>nz-select-top-control]:px-[20px] [&>.ant-select-arrow]:text-theme-gray dark:[&>.ant-select-arrow]:text-white/60';
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  static ɵfac = function NzDemoDrawerFromDrawerComponent_Factory(t) {
    return new (t || NzDemoDrawerFromDrawerComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoDrawerFromDrawerComponent,
    selectors: [["nz-demo-drawer-from-drawer"]],
    decls: 6,
    vars: 6,
    consts: [["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nzTitle", "Create", 3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzFooter", "nzOnClose"], ["nz-form", "", 4, "nzDrawerContent"], ["footerTpl", ""], ["nz-form", ""], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12"], [1, "flex", "items-center", "font-medium", "dark:text-white/60"], ["nz-input", "", "placeholder", "please enter user name", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"], ["nzAddOnBefore", "http://", "nzAddOnAfter", ".com"], ["type", "text", "nz-input", "", "placeholder", "please enter url", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"], ["nzPlaceHolder", "Please select an owner"], ["nzPlaceHolder", "Please choose the type"], ["nzPlaceHolder", "Please choose the approver"], [1, "inline-flex", "items-center", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[8px]", "h-[46px]", "outline-none", "placeholder:text-light", "placeholder:font-normal", "text-theme-gray", "dark:text-white/60", "w-full", "mb-[15px]"], ["nz-col", "", "nzSpan", "24"], ["nz-input", "", "placeholder", "please enter url description", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", 3, "nzAutosize"], [2, "float", "right"], ["nz-button", "", 1, "me-[8px]", "dark:bg-transparent", "border-regular", "dark:border-white/10", "dark:text-white/[.87]", "rounded-4", "py-[4px]", "px-[15px]", 3, "click"], ["nz-button", "", 1, "bg-primary", "border-primary", "hover:bg-primary-hbr", "text-white", "rounded-4", "py-[4px]", "px-[15px]", 3, "click"]],
    template: function NzDemoDrawerFromDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerFromDrawerComponent_Template_button_click_0_listener() {
          return ctx.open();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerFromDrawerComponent_Template_nz_drawer_nzOnClose_2_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoDrawerFromDrawerComponent_form_3_Template, 48, 15, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoDrawerFromDrawerComponent_ng_template_4_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("nzMaskClosable", false)("nzWidth", 720)("nzVisible", ctx.visible)("nzFooter", _r1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDrawerContentDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzAutosizeDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_9__.NzRangePickerComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent],
    styles: ["[_nghost-%COMP%]     .basic-select .ant-select-selector {\n\n    display: flex;\n\n    height: 50px;\n\n    align-items: center;\n\n    border-radius: 4px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    padding-left: 20px;\n\n    padding-right: 20px\n}\n\n:is(.dark   [_nghost-%COMP%]     .basic-select .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1);\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n:is(.dark   [_nghost-%COMP%]     .basic-select .ant-select-selector:hover) {\n\n    color: rgb(255 255 255 / 1)\n}\n\n[_nghost-%COMP%]     .basic-select.ant-select-multiple .ant-select-selection-item {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .basic-select.ant-select-multiple .ant-select-selection-item) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-upload {\n\n    width: 100%\n}\n\n:is(.dark   [_nghost-%COMP%]     .basic-select .ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1);\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n:is(.dark   [_nghost-%COMP%]     .basic-select .ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector:hover) {\n\n    color: rgb(255 255 255 / 1)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXIvZnJvbS1kcmF3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07O0lBQUEsYUFBQTs7SUFBQSxZQUFBOztJQUFBLG1CQUFBOztJQUFBLGtCQUFBOztJQUFBLHNCQUFBOztJQUFBLHlEQUFBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUEsb0NBQUE7O0lBQUEsd0NBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdFOztJQUFBLHNCQUFBOztJQUFBLHlEQUFBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUEsb0NBQUE7O0lBQUE7QUFBQTs7QUFHRjs7SUFBQTtBQUFBOztBQUdBOztJQUFBLG9DQUFBOztJQUFBLHdDQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCAuYmFzaWMtc2VsZWN0IC5hbnQtc2VsZWN0LXNlbGVjdG9ye1xuICAgICAgQGFwcGx5IGgtWzUwcHhdIHJvdW5kZWQtNCBib3JkZXItbm9ybWFsIHB4LVsyMHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBkYXJrOmJnLXdoaXRlLzEwIGRhcms6Ym9yZGVyLXdoaXRlLzEwIGRhcms6dGV4dC13aGl0ZS82MCBkYXJrOmhvdmVyOnRleHQtd2hpdGUvMTAwO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmJhc2ljLXNlbGVjdC5hbnQtc2VsZWN0LW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVte1xuICAgICAgICBAYXBwbHkgYmctd2hpdGUgZGFyazpiZy13aGl0ZS8xMCBib3JkZXItbm9ybWFsIGRhcms6Ym9yZGVyLXdoaXRlLzEwO1xuICAgICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXVwbG9hZCB7XG4gICAgICBAYXBwbHkgdy1mdWxsO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmJhc2ljLXNlbGVjdCAuYW50LXNlbGVjdC1tdWx0aXBsZS5hbnQtc2VsZWN0LWRpc2FibGVkLmFudC1zZWxlY3Q6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3J7XG4gICAgICBAYXBwbHkgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8xMCBkYXJrOnRleHQtd2hpdGUvNjAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlLzEwMDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 68409:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/index.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerModule: () => (/* binding */ NzDemoDrawerModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 9961);
/* harmony import */ var _basic_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-right */ 73525);
/* harmony import */ var _from_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-drawer */ 2381);
/* harmony import */ var _multi_level_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multi-level-drawer */ 33045);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placement */ 49321);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ 36627);
/* harmony import */ var _user_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile */ 45130);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 97909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 88663);























class NzDemoDrawerModule {
  static ɵfac = function NzDemoDrawerModule_Factory(t) {
    return new (t || NzDemoDrawerModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: NzDemoDrawerModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoDrawerEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoDrawerModule, {
    declarations: [_basic_right__WEBPACK_IMPORTED_MODULE_2__.NzDemoDrawerBasicRightComponent, _from_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDemoDrawerFromDrawerComponent, _multi_level_drawer__WEBPACK_IMPORTED_MODULE_4__.NzDemoDrawerMultiLevelDrawerComponent, _placement__WEBPACK_IMPORTED_MODULE_5__.NzDemoDrawerPlacementComponent, _service__WEBPACK_IMPORTED_MODULE_6__.NzDemoDrawerServiceComponent, _service__WEBPACK_IMPORTED_MODULE_6__.NzDrawerCustomComponent, _user_profile__WEBPACK_IMPORTED_MODULE_7__.NzDemoDrawerUserProfileComponent, _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoDrawerEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_11__.NzDrawerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_17__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__.NzRadioModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__.NzDescriptionsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 9961:
/*!*********************************************!*\
  !*** ./src/app/components/drawer/module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 88663);











const moduleList = [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_0__.NzDrawerModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__.NzFormModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_4__.NzDatePickerModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__.NzDividerModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_10__.NzDescriptionsModule];

/***/ }),

/***/ 33045:
/*!*********************************************************!*\
  !*** ./src/app/components/drawer/multi-level-drawer.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerMultiLevelDrawerComponent: () => (/* binding */ NzDemoDrawerMultiLevelDrawerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);











function NzDemoDrawerMultiLevelDrawerComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5)(1, "div", 6)(2, "div", 7)(3, "nz-form-item")(4, "nz-form-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "nz-form-item")(11, "nz-form-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-control")(14, "nz-tag", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "potato");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-tag", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "eggplant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-tag", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerMultiLevelDrawerComponent_form_3_Template_nz_tag_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openChildren());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function NzDemoDrawerMultiLevelDrawerComponent_nz_list_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-item", 14);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzContent", item_r6);
  }
}
function NzDemoDrawerMultiLevelDrawerComponent_nz_list_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoDrawerMultiLevelDrawerComponent_nz_list_5_ng_template_1_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx_r1.vegetables)("nzRenderItem", _r4);
  }
}
class NzDemoDrawerMultiLevelDrawerComponent {
  visible = false;
  childrenVisible = false;
  vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  openChildren() {
    this.childrenVisible = true;
  }
  closeChildren() {
    this.childrenVisible = false;
  }
  static ɵfac = function NzDemoDrawerMultiLevelDrawerComponent_Factory(t) {
    return new (t || NzDemoDrawerMultiLevelDrawerComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoDrawerMultiLevelDrawerComponent,
    selectors: [["nz-demo-drawer-multi-level-drawer"]],
    decls: 6,
    vars: 6,
    consts: [["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nzTitle", "Cookbook", 3, "nzClosable", "nzOffsetX", "nzWidth", "nzVisible", "nzOnClose"], ["nz-form", "", 4, "nzDrawerContent"], ["nzTitle", "Food", 3, "nzClosable", "nzVisible", "nzOnClose"], [3, "nzDataSource", "nzRenderItem", 4, "nzDrawerContent"], ["nz-form", ""], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "flex", "items-center", "font-medium", "dark:text-white/60"], ["nz-input", "", "placeholder", "please enter cookbook name", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"], [1, "inline-flex", "items-center", "bg-white", "dark:bg-white/10", "dark:border-white/10", "dark:text-white/60", "text-dark"], [1, "inline-flex", "items-center", "bg-white", "dark:bg-white/10", "dark:border-white/10", "dark:text-white/60", "text-dark", 3, "click"], [3, "nzDataSource", "nzRenderItem"], ["item", ""], [1, "text-dark", "dark:text-white/[.87]", "border-regular", "dark:border-white/10", "capitalize", 3, "nzContent"]],
    template: function NzDemoDrawerMultiLevelDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerMultiLevelDrawerComponent_Template_button_click_0_listener() {
          return ctx.open();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Cookbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerMultiLevelDrawerComponent_Template_nz_drawer_nzOnClose_2_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoDrawerMultiLevelDrawerComponent_form_3_Template, 20, 0, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-drawer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerMultiLevelDrawerComponent_Template_nz_drawer_nzOnClose_4_listener() {
          return ctx.closeChildren();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoDrawerMultiLevelDrawerComponent_nz_list_5_Template, 3, 2, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzOffsetX", ctx.childrenVisible ? 180 : 0)("nzWidth", 320)("nzVisible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.childrenVisible);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDrawerContentDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_9__.NzTagComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListItemComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49321:
/*!************************************************!*\
  !*** ./src/app/components/drawer/placement.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerPlacementComponent: () => (/* binding */ NzDemoDrawerPlacementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);







function NzDemoDrawerPlacementComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Some contents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Some contents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some contents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class NzDemoDrawerPlacementComponent {
  visible = false;
  placement = 'left';
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  static ɵfac = function NzDemoDrawerPlacementComponent_Factory(t) {
    return new (t || NzDemoDrawerPlacementComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoDrawerPlacementComponent,
    selectors: [["nz-demo-drawer-placement"]],
    decls: 13,
    vars: 4,
    consts: [[3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "top", 1, "text-dark", "dark:text-white/[.87]", "capitalize"], ["nz-radio", "", "nzValue", "right", 1, "text-dark", "dark:text-white/[.87]", "capitalize"], ["nz-radio", "", "nzValue", "bottom", 1, "text-dark", "dark:text-white/[.87]", "capitalize"], ["nz-radio", "", "nzValue", "left", 1, "text-dark", "dark:text-white/[.87]", "capitalize"], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nzTitle", "Basic Drawer", 3, "nzClosable", "nzVisible", "nzPlacement", "nzOnClose"], [4, "nzDrawerContent"], [1, "text-theme-gray", "dark:text-white/60"]],
    template: function NzDemoDrawerPlacementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDrawerPlacementComponent_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.placement = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerPlacementComponent_Template_button_click_9_listener() {
          return ctx.open();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-drawer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerPlacementComponent_Template_nz_drawer_nzOnClose_11_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NzDemoDrawerPlacementComponent_ng_container_12_Template, 7, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.placement);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.visible)("nzPlacement", ctx.placement);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__.NzRadioGroupComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     .ant-radio-inner) {\n\n    border-color: rgb(255 255 255 / 0.3);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-checked .ant-radio-inner) {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(130 49 211 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-radio-input:focus + .ant-radio-inner) {\n\n    --tw-shadow: 0 0 #0000;\n\n    --tw-shadow-colored: 0 0 #0000;\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXIvcGxhY2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVLOztJQUFBLG9DQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxzQkFBQTs7SUFBQSw4QkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1pbm5lcntcbiAgICAgQGFwcGx5IGRhcms6Ymctd2hpdGUvMTAgZGFyazpib3JkZXItd2hpdGUvMzA7XG4gICB9XG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1yYWRpby1jaGVja2VkIC5hbnQtcmFkaW8taW5uZXJ7XG4gICAgIEBhcHBseSBkYXJrOmJvcmRlci1wcmltYXJ5O1xuICAgfVxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcmFkaW8taW5wdXQ6Zm9jdXMgKyAuYW50LXJhZGlvLWlubmVye1xuICAgICBAYXBwbHkgZGFyazpzaGFkb3ctbm9uZTtcbiAgIH1cbiAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 36627:
/*!**********************************************!*\
  !*** ./src/app/components/drawer/service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerServiceComponent: () => (/* binding */ NzDemoDrawerServiceComponent),
/* harmony export */   NzDrawerCustomComponent: () => (/* binding */ NzDrawerCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);










const _c0 = ["drawerTemplate"];
function NzDemoDrawerServiceComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerServiceComponent_ng_template_0_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const drawerRef_r3 = restoredCtx.drawerRef;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](drawerRef_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("value: ", data_r2 == null ? null : data_r2.value, "");
  }
}
class NzDemoDrawerServiceComponent {
  drawerService;
  drawerTemplate;
  value = 'ng';
  constructor(drawerService) {
    this.drawerService = drawerService;
  }
  openTemplate() {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: this.drawerTemplate,
      nzContentParams: {
        value: this.value
      }
    });
    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });
    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }
  openComponent() {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Component',
      nzFooter: 'Footer',
      nzExtra: 'Extra',
      nzContent: NzDrawerCustomComponent,
      nzContentParams: {
        value: this.value
      }
    });
    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });
    drawerRef.afterClose.subscribe(data => {
      console.log(data);
      if (typeof data === 'string') {
        this.value = data;
      }
    });
  }
  static ɵfac = function NzDemoDrawerServiceComponent_Factory(t) {
    return new (t || NzDemoDrawerServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoDrawerServiceComponent,
    selectors: [["nz-demo-drawer-service"]],
    viewQuery: function NzDemoDrawerServiceComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawerTemplate = _t.first);
      }
    },
    decls: 10,
    vars: 1,
    consts: [["drawerTemplate", ""], ["nz-form", ""], ["nz-input", "", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", 3, "ngModel", "ngModelChange"], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], [1, "text-theme-gray", "dark:text-white/60"], ["nz-button", "", 1, "bg-danger", "hover:bg-primary-hbr", "border-solid", "border-1", "border-danger", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"]],
    template: function NzDemoDrawerServiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoDrawerServiceComponent_ng_template_0_Template, 6, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "nz-form-item")(4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDrawerServiceComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.value = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerServiceComponent_Template_button_click_5_listener() {
          return ctx.openTemplate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Use Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerServiceComponent_Template_button_click_8_listener() {
          return ctx.openComponent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Use Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective],
    encapsulation: 2
  });
}
class NzDrawerCustomComponent {
  drawerRef;
  value = '';
  constructor(drawerRef) {
    this.drawerRef = drawerRef;
  }
  close() {
    this.drawerRef.close(this.value);
  }
  static ɵfac = function NzDrawerCustomComponent_Factory(t) {
    return new (t || NzDrawerCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDrawerCustomComponent,
    selectors: [["nz-drawer-custom-component"]],
    inputs: {
      value: "value"
    },
    decls: 5,
    vars: 1,
    consts: [["nz-input", "", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"]],
    template: function NzDrawerCustomComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDrawerCustomComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.value = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDrawerCustomComponent_Template_button_click_3_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__.NzDividerComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 45130:
/*!***************************************************!*\
  !*** ./src/app/components/drawer/user-profile.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoDrawerUserProfileComponent: () => (/* binding */ NzDemoDrawerUserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 37672);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 88663);





function NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function NzDemoDrawerUserProfileComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_1_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-list-item-meta", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoDrawerUserProfileComponent_ng_template_1_ng_template_4_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r6);
  }
}
function NzDemoDrawerUserProfileComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-descriptions", 11)(4, "nz-descriptions-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-descriptions-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "AntDesign@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-descriptions-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HangZhou");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-descriptions-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "China\uD83C\uDDE8\uD83C\uDDF3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-descriptions-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "February 2,1900");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-descriptions-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-descriptions-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Make things as simple as possible but no simpler. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-descriptions", 19)(20, "nz-descriptions-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Programmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-descriptions-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Coding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-descriptions-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "AFX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-descriptions-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-descriptions-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-descriptions", 25)(32, "nz-descriptions-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "AntDesign@example.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-descriptions-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+86 181 0000 0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-descriptions-item", 28)(37, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "github.com/NG-ZORRO/ng-zorro-antd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 2);
  }
}
class NzDemoDrawerUserProfileComponent {
  data = [{
    name: 'Lily'
  }, {
    name: 'Lily'
  }];
  visible = false;
  open() {
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  static ɵfac = function NzDemoDrawerUserProfileComponent_Factory(t) {
    return new (t || NzDemoDrawerUserProfileComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoDrawerUserProfileComponent,
    selectors: [["nz-demo-drawer-user-profile"]],
    decls: 5,
    vars: 6,
    consts: [[3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzVisible", "nzWidth", "nzClosable", "nzOnClose"], [4, "nzDrawerContent"], [3, "nzActions"], ["viewAction", ""], ["nzAvatar", "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png", "nzDescription", "Progresser AFX", 3, "nzTitle"], ["nzTitle", ""], [3, "click"], ["href", "https://ng.ant.design"], [1, "mb-[25px]", "text-theme-gray", "dark:text-white/60"], ["nzTitle", "Personal", 3, "nzColumn"], ["nzTitle", "Full Name", 3, "nzSpan"], ["nzTitle", "Account", 3, "nzSpan"], ["nzTitle", "City", 3, "nzSpan"], ["nzTitle", "Country", 3, "nzSpan"], ["nzTitle", "Birthday", 3, "nzSpan"], ["nzTitle", "Website", 3, "nzSpan"], ["nzTitle", "Message", 3, "nzSpan"], ["nzTitle", "Company", 3, "nzColumn"], ["nzTitle", "Position", 3, "nzSpan"], ["nzTitle", "Responsibilities", 3, "nzSpan"], ["nzTitle", "Department", 3, "nzSpan"], ["nzTitle", "Supervisor", 3, "nzSpan"], ["nzTitle", "Skills", 3, "nzSpan"], ["nzTitle", "Contacts", 3, "nzColumn"], ["nzTitle", "Email", 3, "nzSpan"], ["nzTitle", "Phone Number", 3, "nzSpan"], ["nzTitle", "Github", 3, "nzSpan"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd", "target", "_blank"]],
    template: function NzDemoDrawerUserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoDrawerUserProfileComponent_ng_template_1_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function NzDemoDrawerUserProfileComponent_Template_nz_drawer_nzOnClose_3_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoDrawerUserProfileComponent_ng_container_4_Template, 39, 18, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.data)("nzRenderItem", _r0)("nzItemLayout", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.visible)("nzWidth", 640)("nzClosable", false);
      }
    },
    dependencies: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerContentDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__.NzListItemMetaComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__.NzDividerComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_4__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_4__.NzDescriptionsItemComponent],
    styles: ["[_nghost-%COMP%]     .ant-list-item-meta-avatar {\n\n    margin-right: auto;\n\n    margin-inline-end: 10px\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-list-item-meta-title > a) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-list-item-action > li {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-list-item-action > li) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-list-split .ant-list-item {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-list-split .ant-list-item) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-list-item-meta-description {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-list-item-meta-description) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXIvdXNlci1wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0U7O0lBQUE7QUFBQTs7QUFHRjs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdFOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWxpc3QtaXRlbS1tZXRhLWF2YXRhcntcbiAgICAgIEBhcHBseSBtci1hdXRvIG1lLVsxMHB4XTtcbiAgICB9XG4gICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlID4gYXtcbiAgICAgICAgQGFwcGx5IGRhcms6dGV4dC13aGl0ZS9bLjg3XTtcbiAgICAgfVxuICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1saXN0LWl0ZW0tYWN0aW9uID4gbGl7XG4gICAgICBAYXBwbHkgdGV4dC1saWdodCBkYXJrOnRleHQtd2hpdGUvNjA7XG4gICAgIH1cbiAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGlzdC1zcGxpdCAuYW50LWxpc3QtaXRlbXtcbiAgICAgIEBhcHBseSBib3JkZXItcmVndWxhciBkYXJrOmJvcmRlci13aGl0ZS8xMDtcbiAgICAgfVxuICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvbntcbiAgICAgICAgQGFwcGx5IHRleHQtbGlnaHQgZGFyazp0ZXh0LXdoaXRlLzYwO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 88663:
/*!****************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-descriptions.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDescriptionsComponent: () => (/* binding */ NzDescriptionsComponent),
/* harmony export */   NzDescriptionsItemComponent: () => (/* binding */ NzDescriptionsItemComponent),
/* harmony export */   NzDescriptionsModule: () => (/* binding */ NzDescriptionsModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 26672);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 75043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 52815);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ 82384);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 45118);


















function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
function NzDescriptionsComponent_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzTitle);
  }
}
function NzDescriptionsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_div_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzTitle);
  }
}
function NzDescriptionsComponent_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nzExtra);
  }
}
function NzDescriptionsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzExtra);
  }
}
function NzDescriptionsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_div_0_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzExtra);
  }
}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.title, " ");
  }
}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template(rf, ctx) {}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r11.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-descriptions-item-no-colon", !ctx_r13.nzColon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r11.content);
  }
}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.title, " ");
  }
}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_4_Template(rf, ctx) {}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_4_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r11.span * 2 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r11.content);
  }
}
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 5, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.nzBordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.nzBordered);
  }
}
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r8);
  }
}
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.itemMatrix);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r30.title, " ");
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12)(2, "div", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r30.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-descriptions-item-no-colon", !ctx_r28.nzColon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r30.title);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_4_Template(rf, ctx) {}
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 12)(2, "div", 13)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_4_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r34.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r34.content);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 5, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r26);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.itemMatrix);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r42.title, " ");
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r42.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r42.title);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) {}
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", item_r46.span);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r46.content);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r38);
  }
}
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.itemMatrix);
  }
}
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.nzBordered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.nzBordered);
  }
}
class NzDescriptionsItemComponent {
  constructor() {
    this.nzSpan = 1;
    this.nzTitle = '';
    this.inputChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnChanges() {
    this.inputChange$.next();
  }
  ngOnDestroy() {
    this.inputChange$.complete();
  }
  static #_ = this.ɵfac = function NzDescriptionsItemComponent_Factory(t) {
    return new (t || NzDescriptionsItemComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDescriptionsItemComponent,
    selectors: [["nz-descriptions-item"]],
    viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      nzSpan: "nzSpan",
      nzTitle: "nzTitle"
    },
    exportAs: ["nzDescriptionsItem"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzDescriptionsItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__.InputNumber)()], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDescriptionsItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-descriptions-item',
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
      exportAs: 'nzDescriptionsItem',
      preserveWhitespaces: false
    }]
  }], null, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    nzSpan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const NZ_CONFIG_MODULE_NAME = 'descriptions';
const defaultColumnMap = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
class NzDescriptionsComponent {
  constructor(nzConfigService, cdr, breakpointService, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBordered = false;
    this.nzLayout = 'horizontal';
    this.nzColumn = defaultColumnMap;
    this.nzSize = 'default';
    this.nzTitle = '';
    this.nzColon = true;
    this.itemMatrix = [];
    this.realColumn = 3;
    this.dir = 'ltr';
    this.breakpoint = ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzBreakpointEnum.md;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    if (changes.nzColumn) {
      this.prepareMatrix();
    }
  }
  ngAfterContentInit() {
    const contentChange$ = this.items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this.items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(contentChange$, contentChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.items.map(i => i.inputChange$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.auditTime)(16)))), this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.gridResponsiveMap).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(bp => this.breakpoint = bp))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.prepareMatrix();
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Prepare the render matrix according to description items' spans.
   */
  prepareMatrix() {
    if (!this.items) {
      return;
    }
    let currentRow = [];
    let width = 0;
    const column = this.realColumn = this.getColumn();
    const items = this.items.toArray();
    const length = items.length;
    const matrix = [];
    const flushRow = () => {
      matrix.push(currentRow);
      currentRow = [];
      width = 0;
    };
    for (let i = 0; i < length; i++) {
      const item = items[i];
      const {
        nzTitle: title,
        content,
        nzSpan: span
      } = item;
      width += span;
      // If the last item make the row's length exceeds `nzColumn`, the last
      // item should take all the space left. This logic is implemented in the template.
      // Warn user about that.
      if (width >= column) {
        if (width > column) {
          (0,ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_11__.warn)(`"nzColumn" is ${column} but we have row length ${width}`);
        }
        currentRow.push({
          title,
          content,
          span: column - (width - span)
        });
        flushRow();
      } else if (i === length - 1) {
        currentRow.push({
          title,
          content,
          span: column - (width - span)
        });
        flushRow();
      } else {
        currentRow.push({
          title,
          content,
          span
        });
      }
    }
    this.itemMatrix = matrix;
  }
  getColumn() {
    if (typeof this.nzColumn !== 'number') {
      return this.nzColumn[this.breakpoint];
    }
    return this.nzColumn;
  }
  static #_ = this.ɵfac = function NzDescriptionsComponent_Factory(t) {
    return new (t || NzDescriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzBreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDescriptionsComponent,
    selectors: [["nz-descriptions"]],
    contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzDescriptionsItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
      }
    },
    hostAttrs: [1, "ant-descriptions"],
    hostVars: 8,
    hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small")("ant-descriptions-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzBordered: "nzBordered",
      nzLayout: "nzLayout",
      nzColumn: "nzColumn",
      nzSize: "nzSize",
      nzTitle: "nzTitle",
      nzExtra: "nzExtra",
      nzColon: "nzColon"
    },
    exportAs: ["nzDescriptions"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 6,
    vars: 3,
    consts: [["class", "ant-descriptions-header", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-header"], ["class", "ant-descriptions-title", 4, "ngIf"], ["class", "ant-descriptions-extra", 4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], [1, "ant-descriptions-extra"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-container"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]],
    template: function NzDescriptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDescriptionsComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "table")(3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzTitle || ctx.nzExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzLayout === "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzLayout === "vertical");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgTemplateOutlet, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__.InputBoolean)(), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzDescriptionsComponent.prototype, "nzBordered", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzDescriptionsComponent.prototype, "nzColumn", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)()], NzDescriptionsComponent.prototype, "nzSize", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__.InputBoolean)()], NzDescriptionsComponent.prototype, "nzColon", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDescriptionsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'nz-descriptions',
      exportAs: 'nzDescriptions',
      preserveWhitespaces: false,
      template: `
    <div *ngIf="nzTitle || nzExtra" class="ant-descriptions-header">
      <div *ngIf="nzTitle" class="ant-descriptions-title">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div *ngIf="nzExtra" class="ant-descriptions-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div class="ant-descriptions-view">
      <table>
        <tbody>
          <ng-container *ngIf="nzLayout === 'horizontal'">
            <tr class="ant-descriptions-row" *ngFor="let row of itemMatrix; let i = index">
              <ng-container *ngFor="let item of row; let isLast = last">
                <!-- Horizontal & NOT Bordered -->
                <ng-container *ngIf="!nzBordered">
                  <td class="ant-descriptions-item" [colSpan]="item.span">
                    <div class="ant-descriptions-item-container">
                      <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                        <ng-container *nzStringTemplateOutlet="item.title">
                          {{ item.title }}
                        </ng-container>
                      </span>
                      <span class="ant-descriptions-item-content">
                        <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                      </span>
                    </div>
                  </td>
                </ng-container>
                <!-- Horizontal & Bordered -->
                <ng-container *ngIf="nzBordered">
                  <td class="ant-descriptions-item-label">
                    <ng-container *nzStringTemplateOutlet="item.title">
                      {{ item.title }}
                    </ng-container>
                  </td>
                  <td class="ant-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                    <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                  </td>
                </ng-container>
              </ng-container>
            </tr>
          </ng-container>

          <ng-container *ngIf="nzLayout === 'vertical'">
            <!-- Vertical & NOT Bordered -->
            <ng-container *ngIf="!nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                      </div>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                        </span>
                      </div>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
            <!-- Vertical & Bordered -->
            <ng-container *ngIf="nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-label" [colSpan]="item.span">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-content" [colSpan]="item.span">
                      <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
      host: {
        class: 'ant-descriptions',
        '[class.ant-descriptions-bordered]': 'nzBordered',
        '[class.ant-descriptions-middle]': 'nzSize === "middle"',
        '[class.ant-descriptions-small]': 'nzSize === "small"',
        '[class.ant-descriptions-rtl]': 'dir === "rtl"'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_4__.NzBreakpointService
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzDescriptionsItemComponent]
    }],
    nzBordered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLayout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzColumn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzExtra: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzColon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDescriptionsModule {
  static #_ = this.ɵfac = function NzDescriptionsModule_Factory(t) {
    return new (t || NzDescriptionsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzDescriptionsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__.NzOutletModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.PlatformModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDescriptionsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__.NzOutletModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.PlatformModule],
      declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
      exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 54673:
/*!*******************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzTagComponent: () => (/* binding */ NzTagComponent),
/* harmony export */   NzTagModule: () => (/* binding */ NzTagModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/color */ 83289);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);














function NzTagComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = ["*"];
class NzTagComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.isPresetColor = false;
    this.nzMode = 'default';
    this.nzChecked = false;
    this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  updateCheckedStatus() {
    if (this.nzMode === 'checkable') {
      this.nzChecked = !this.nzChecked;
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }
  closeTag(e) {
    this.nzOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  clearPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    // /(ant-tag-(?:pink|red|...))/g
    const regexp = new RegExp(`(ant-tag-(?:${[...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.presetColors, ...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.statusColors].join('|')}))`, 'g');
    const classname = hostElement.classList.toString();
    const matches = [];
    let match = regexp.exec(classname);
    while (match !== null) {
      matches.push(match[1]);
      match = regexp.exec(classname);
    }
    hostElement.classList.remove(...matches);
  }
  setPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    this.clearPresetColor();
    if (!this.nzColor) {
      this.isPresetColor = false;
    } else {
      this.isPresetColor = (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isPresetColor)(this.nzColor) || (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isStatusColor)(this.nzColor);
    }
    if (this.isPresetColor) {
      hostElement.classList.add(`ant-tag-${this.nzColor}`);
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.setPresetColor();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function NzTagComponent_Factory(t) {
    return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzTagComponent,
    selectors: [["nz-tag"]],
    hostAttrs: [1, "ant-tag"],
    hostVars: 10,
    hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() {
          return ctx.updateCheckedStatus();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzMode: "nzMode",
      nzColor: "nzColor",
      nzChecked: "nzChecked"
    },
    outputs: {
      nzOnClose: "nzOnClose",
      nzCheckedChange: "nzCheckedChange"
    },
    exportAs: ["nzTag"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]],
    template: function NzTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTagComponent_span_1_Template, 1, 0, "span", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()], NzTagComponent.prototype, "nzChecked", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-tag',
      exportAs: 'nzTag',
      preserveWhitespaces: false,
      template: `
    <ng-content></ng-content>
    <span
      nz-icon
      nzType="close"
      class="ant-tag-close-icon"
      *ngIf="nzMode === 'closeable'"
      tabindex="-1"
      (click)="closeTag($event)"
    ></span>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ant-tag',
        '[style.background-color]': `isPresetColor ? '' : nzColor`,
        '[class.ant-tag-has-color]': `nzColor && !isPresetColor`,
        '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
        '[class.ant-tag-checkable-checked]': `nzChecked`,
        '[class.ant-tag-rtl]': `dir === 'rtl'`,
        '(click)': 'updateCheckedStatus()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzChecked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOnClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzCheckedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTagModule {
  static #_ = this.ɵfac = function NzTagModule_Factory(t) {
    return new (t || NzTagModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzTagModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule],
      declarations: [NzTagComponent],
      exports: [NzTagComponent]
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
//# sourceMappingURL=src_app_components_drawer_index_module_ts.js.map