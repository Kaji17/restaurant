"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_form_index_module_ts"],{

/***/ 77380:
/*!*************************************************!*\
  !*** ./src/app/components/form/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoFormEnComponent: () => (/* binding */ NzDemoFormEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-login */ 5687);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normal-login */ 1483);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ 20061);





class NzDemoFormEnComponent {
  static ɵfac = function NzDemoFormEnComponent_Factory(t) {
    return new (t || NzDemoFormEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NzDemoFormEnComponent,
    selectors: [["nz-demo-form"]],
    decls: 21,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzXl", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoFormEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Inline Login Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "nz-demo-form-horizontal-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Login Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "nz-demo-form-normal-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "div", 3)(17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "nz-demo-form-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, _horizontal_login__WEBPACK_IMPORTED_MODULE_0__.NzDemoFormHorizontalLoginComponent, _normal_login__WEBPACK_IMPORTED_MODULE_1__.NzDemoFormNormalLoginComponent, _register__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormRegisterComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5687:
/*!*****************************************************!*\
  !*** ./src/app/components/form/horizontal-login.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoFormHorizontalLoginComponent: () => (/* binding */ NzDemoFormHorizontalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);









class NzDemoFormHorizontalLoginComponent {
  fb;
  validateForm;
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      remember: [true]
    });
  }
  static ɵfac = function NzDemoFormHorizontalLoginComponent_Factory(t) {
    return new (t || NzDemoFormHorizontalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDemoFormHorizontalLoginComponent,
    selectors: [["nz-demo-form-horizontal-login"]],
    decls: 13,
    vars: 3,
    consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user", 1, "before:hidden", "w-full", "rounded-4", "border-normal", "border-1", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "flex", "items-center", "gap-[10px]"], ["formControlName", "userName", "nz-input", "", "placeholder", "Username", 1, "placeholder:text-[#A0A0A0]", "text-[15px]", "text-theme-gray", "bg-transparent", "dark:text-white/60", "focus:bg-transparent"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock", 1, "before:hidden", "w-full", "rounded-4", "border-normal", "border-1", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "flex", "items-center", "gap-[10px]"], ["formControlName", "password", "nz-input", "", "type", "password", "placeholder", "Password", 1, "placeholder:text-[#A0A0A0]", "text-[15px]", "text-theme-gray", "bg-transparent", "dark:text-white/60"], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "duration-300", 3, "disabled"]],
    template: function NzDemoFormHorizontalLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormHorizontalLoginComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item")(2, "nz-form-control", 1)(3, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item")(6, "nz-form-control", 4)(7, "nz-input-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-control")(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLayout", "inline")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.validateForm.valid);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent],
    styles: ["[_nghost-%COMP%]     nz-input-group .ant-input-prefix .anticon {\n    --tw-text-opacity: 1;\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n:is(.dark   [_nghost-%COMP%]     nz-input-group .ant-input-prefix .anticon) {\n    color: rgb(255 255 255 / .87)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL2hvcml6b250YWwtbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07SUFBQSxvQkFBQTtJQUFBO0FBQUE7QUFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCA6Om5nLWRlZXAgbnotaW5wdXQtZ3JvdXAgLmFudC1pbnB1dC1wcmVmaXggLmFudGljb257XG4gICAgICBAYXBwbHkgdGV4dC1kYXJrIGRhcms6dGV4dC13aGl0ZS9bLjg3XTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 23103:
/*!*************************************************!*\
  !*** ./src/app/components/form/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoFormModule: () => (/* binding */ NzDemoFormModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 41319);
/* harmony import */ var _horizontal_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-login */ 5687);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ 60028);
/* harmony import */ var _normal_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normal-login */ 1483);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register */ 20061);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 77380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 202);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 43814);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);




















class NzDemoFormModule {
  static ɵfac = function NzDemoFormModule_Factory(t) {
    return new (t || NzDemoFormModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NzDemoFormModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoFormModule, {
    declarations: [_horizontal_login__WEBPACK_IMPORTED_MODULE_2__.NzDemoFormHorizontalLoginComponent, _layout__WEBPACK_IMPORTED_MODULE_3__.NzDemoFormLayoutComponent, _normal_login__WEBPACK_IMPORTED_MODULE_4__.NzDemoFormNormalLoginComponent, _register__WEBPACK_IMPORTED_MODULE_5__.NzDemoFormRegisterComponent, _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoFormEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_16__.NzTimePickerModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__.NzInputNumberModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 60028:
/*!*******************************************!*\
  !*** ./src/app/components/form/layout.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoFormLayoutComponent: () => (/* binding */ NzDemoFormLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);










class NzDemoFormLayoutComponent {
  fb;
  validateForm;
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  get isHorizontal() {
    return this.validateForm.controls.formLayout?.value === 'horizontal';
  }
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      fieldA: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      filedB: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
    });
  }
  static ɵfac = function NzDemoFormLayoutComponent_Factory(t) {
    return new (t || NzDemoFormLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDemoFormLayoutComponent,
    selectors: [["nz-demo-form-layout"]],
    decls: 26,
    vars: 13,
    consts: [["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [3, "nzSpan"], ["formControlName", "formLayout"], ["nz-radio-button", "", 3, "nzValue"], ["nzErrorTip", "Please input your username!", 3, "nzSpan"], ["nz-input", "", "formControlName", "fieldA", "placeholder", "input placeholder"], ["nzErrorTip", "Please input your Password!", 3, "nzSpan"], ["nz-input", "", "formControlName", "filedB", "placeholder", "input placeholder"], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary"]],
    template: function NzDemoFormLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormLayoutComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Form Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control", 1)(5, "nz-radio-group", 2)(6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-item")(13, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Field A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item")(18, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Field B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-item")(23, "nz-form-control", 8)(24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLayout", (tmp_0_0 = ctx.validateForm.get("formLayout")) == null ? null : tmp_0_0.value)("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", "inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 4 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", ctx.isHorizontal ? 14 : null)("nzOffset", ctx.isHorizontal ? 4 : null);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioGroupComponent],
    styles: ["[nz-form][_ngcontent-%COMP%]:not(.ant-form-inline):not(.ant-form-vertical) {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL2xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGdCQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIFtuei1mb3JtXTpub3QoLmFudC1mb3JtLWlubGluZSk6bm90KC5hbnQtZm9ybS12ZXJ0aWNhbCkge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 41319:
/*!*******************************************!*\
  !*** ./src/app/components/form/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ 202);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 43814);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);










const moduleList = [ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_0__.NzFormModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__.NzDatePickerModule, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_7__.NzTimePickerModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_8__.NzInputNumberModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__.NzCheckboxModule];

/***/ }),

/***/ 1483:
/*!*************************************************!*\
  !*** ./src/app/components/form/normal-login.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoFormNormalLoginComponent: () => (/* binding */ NzDemoFormNormalLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);










class NzDemoFormNormalLoginComponent {
  fb;
  validateForm;
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
      remember: [true]
    });
  }
  static ɵfac = function NzDemoFormNormalLoginComponent_Factory(t) {
    return new (t || NzDemoFormNormalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDemoFormNormalLoginComponent,
    selectors: [["nz-demo-form-normal-login"]],
    decls: 22,
    vars: 2,
    consts: [["nz-row", "", "nzGutter", "25", 1, "justify-center"], ["nz-col", "", "nzSm", "14", "nzXs", "24"], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user", 1, "before:hidden", "rounded-4", "border-normal", "border-1", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "inline-flex", "items-center", "gap-[10px]"], ["type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "Username", 1, "placeholder:text-[#A0A0A0]", "text-[15px]", "text-theme-gray", "bg-transparent", "dark:text-white/60", "focus:bg-transparent"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock", 1, "before:hidden", "rounded-4", "border-normal", "border-1", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "inline-flex", "items-center", "gap-[10px]"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password", 1, "placeholder:text-[#A0A0A0]", "text-[15px]", "text-theme-gray", "bg-transparent", "dark:text-white/60", "focus:bg-transparent"], [1, "flex", "items-center", "justify-between", "flex-wrap", "gap-3", "mb-[20px]"], ["nz-checkbox", "", "formControlName", "remember"], [1, "text-dark", "dark:text-white/[.87]"], [1, "text-dark", "dark:text-white/[.87]", "hover:text-primary", "dark:hover:text-primary"], [1, "flex", "items-center", "justify-center", "gap-[20px]", "flex-col"], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "w-full", "flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "duration-300", 3, "nzType"], [1, "block", "text-dark", "dark:text-white/[.87]", "hover:text-primary", "dark:hover:text-primary", "capitalize"]],
    template: function NzDemoFormNormalLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NzDemoFormNormalLoginComponent_Template_form_ngSubmit_2_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item")(4, "nz-form-control", 3)(5, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-item")(8, "nz-form-control", 6)(9, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "label", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Forgot password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " register now! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "primary");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputGroupComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_8__.NzCheckboxComponent],
    styles: ["[_nghost-%COMP%]     nz-input-group .ant-input-prefix .anticon {\n    --tw-text-opacity: 1;\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n:is(.dark   [_nghost-%COMP%]     nz-input-group .ant-input-prefix .anticon) {\n    color: rgb(255 255 255 / .87)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL25vcm1hbC1sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtJQUFBLG9CQUFBO0lBQUE7QUFBQTtBQUFBO0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCBuei1pbnB1dC1ncm91cCAuYW50LWlucHV0LXByZWZpeCAuYW50aWNvbntcbiAgICAgIEBhcHBseSB0ZXh0LWRhcmsgZGFyazp0ZXh0LXdoaXRlL1suODddO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20061:
/*!*********************************************!*\
  !*** ./src/app/components/form/register.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoFormRegisterComponent: () => (/* binding */ NzDemoFormRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);














function NzDemoFormRegisterComponent_ng_template_16_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function NzDemoFormRegisterComponent_ng_template_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Two passwords that you enter is inconsistent! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function NzDemoFormRegisterComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoFormRegisterComponent_ng_template_16_ng_container_0_Template, 2, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoFormRegisterComponent_ng_template_16_ng_container_1_Template, 2, 0, "ng-container", 35);
  }
  if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r4.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r4.hasError("confirm"));
  }
}
function NzDemoFormRegisterComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 37)(2, "nz-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class NzDemoFormRegisterComponent {
  fb;
  validateForm;
  inputClass = 'w-full rounded-4 border-normal border-1 text-[15px] dark:bg-white/10 dark:border-white/10 px-[20px] py-[12px] min-h-[50px] outline-none placeholder:text-[#A0A0A0] text-theme-gray dark:text-white/60';
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  updateConfirmValidator() {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  confirmationValidator = control => {
    if (!control.value) {
      return {
        required: true
      };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {
        confirm: true,
        error: true
      };
    }
    return {};
  };
  getCaptcha(e) {
    e.preventDefault();
  }
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, this.confirmationValidator]],
      nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      website: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      agree: [false]
    });
  }
  static ɵfac = function NzDemoFormRegisterComponent_Factory(t) {
    return new (t || NzDemoFormRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoFormRegisterComponent,
    selectors: [["nz-demo-form-register"]],
    decls: 59,
    vars: 57,
    consts: [["nz-form", "", 1, "max-w-[600px]", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "email", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid E-mail!", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "password", "nzRequired", "", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "password", "id", "password", "formControlName", "password", 3, "ngModelChange"], ["nzFor", "checkPassword", "nzRequired", "", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], ["nz-input", "", "type", "password", "formControlName", "checkPassword", "id", "checkPassword"], ["errorTpl", ""], ["nzFor", "nickname", "nzRequired", "", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], ["nz-icon", "", "nz-tooltip", "", "nzTooltipTitle", "What do you want other to call you", "nzType", "question-circle", "nzTheme", "outline"], ["nzErrorTip", "Please input your nickname!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "nickname", "formControlName", "nickname"], ["nzFor", "phoneNumber", "nzRequired", "", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your phone number!", 3, "nzSm", "nzXs", "nzValidateStatus"], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "'phoneNumber'", "nz-input", "", 1, "w-full", "rounded-e-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"], ["nzFor", "website", "nzRequired", "", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input website!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "website", "formControlName", "website", "placeholder", "website"], ["nzFor", "captcha", "nzRequired", "", 1, "flex", "items-center", "font-medium", "dark:text-white/60", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input the captcha you got!", "nzExtra", "We must make sure that your are a human.", 3, "nzSm", "nzXs"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nz-input", "", "formControlName", "captcha", "id", "captcha"], ["nz-button", "", 1, "bg-normal", "dark:bg-white/30", "border-solid", "border-1", "border-normal", "dark:border-white/10", "text-dark", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "w-full", "flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[50px]", "duration-300", 3, "click"], ["nz-row", "", 1, "mb-[20px]"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "agree"], [1, "text-theme-gray", "dark:text-white/60"], [1, "text-primary"], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "w-full", "flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "duration-300"], [4, "ngIf"], ["formControlName", "phoneNumberPrefix", 1, "phone-select", "text-dark", "dark:text-white/[.87]", "w-[70px]"], ["nzLabel", "+86", "nzValue", "+86"], ["nzLabel", "+87", "nzValue", "+87"]],
    template: function NzDemoFormRegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NzDemoFormRegisterComponent_Template_form_ngSubmit_0_listener() {
          return ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-item")(2, "nz-form-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item")(7, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 5)(10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoFormRegisterComponent_Template_input_ngModelChange_10_listener() {
          return ctx.updateConfirmValidator();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item")(12, "nz-form-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NzDemoFormRegisterComponent_ng_template_16_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-item")(19, "nz-form-label", 11)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nickname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-control", 16)(29, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NzDemoFormRegisterComponent_ng_template_30_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-item")(34, "nz-form-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-form-item")(39, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Captcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-form-control", 24)(42, "div", 25)(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26)(46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoFormRegisterComponent_Template_button_click_46_listener($event) {
          return ctx.getCaptcha($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Get captcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nz-form-item", 29)(49, "nz-form-control", 30)(50, "label", 31)(51, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "I have read the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nz-form-item", 29)(56, "nz-form-control", 30)(57, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzErrorTip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzValidateStatus", ctx.validateForm.controls["phoneNumber"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnBefore", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__.NzTooltipDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__.NzFormControlComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_12__.NzCheckboxComponent],
    styles: ["[_nghost-%COMP%]     nz-select nz-select-top-control {\n\n    border-style: none !important;\n\n    --tw-shadow: 0 0 #0000 !important;\n\n    --tw-shadow-colored: 0 0 #0000 !important;\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important\n}\n\n[_nghost-%COMP%]     .ant-form-item-extra {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-form-item-extra) {\n\n    color: rgb(255 255 255 / .87)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL3JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBLDZCQUFBOztJQUFBLGlDQUFBOztJQUFBLHlDQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIG56LXNlbGVjdCBuei1zZWxlY3QtdG9wLWNvbnRyb2wge1xuICAgICAgQGFwcGx5IGJvcmRlci1ub25lIHNoYWRvdy1ub25lICN7IWltcG9ydGFudH07XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWZvcm0taXRlbS1leHRyYXtcbiAgICAgIEBhcHBseSB0ZXh0LWRhcmsgZGFyazp0ZXh0LXdoaXRlL1suODddO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_form_index_module_ts.js.map