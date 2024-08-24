"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_input_index_module_ts"],{

/***/ 92651:
/*!*******************************************!*\
  !*** ./src/app/components/input/basic.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoInputBasicComponent: () => (/* binding */ NzDemoInputBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);



class NzDemoInputBasicComponent {
  value;
  static ɵfac = function NzDemoInputBasicComponent_Factory(t) {
    return new (t || NzDemoInputBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoInputBasicComponent,
    selectors: [["nz-demo-input-basic"]],
    decls: 4,
    vars: 3,
    consts: [["nz-input", "", "placeholder", "Basic usage", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "Basic usage", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", 3, "ngModel", "disabled", "ngModelChange"]],
    template: function NzDemoInputBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputBasicComponent_Template_input_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputBasicComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.value = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", true);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52440:
/*!**************************************************!*\
  !*** ./src/app/components/input/en.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoInputEnComponent: () => (/* binding */ NzDemoInputEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 92651);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./size */ 55595);
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea */ 2700);





class NzDemoInputEnComponent {
  static ɵfac = function NzDemoInputEnComponent_Factory(t) {
    return new (t || NzDemoInputEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NzDemoInputEnComponent,
    selectors: [["nz-demo-input"]],
    decls: 22,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzXl", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoInputEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "nz-demo-input-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Three sizes of Input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "nz-demo-input-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Textarea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "nz-demo-input-textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoInputBasicComponent, _size__WEBPACK_IMPORTED_MODULE_1__.NzDemoInputSizeComponent, _textarea__WEBPACK_IMPORTED_MODULE_2__.NzDemoInputTextareaComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 24550:
/*!**************************************************!*\
  !*** ./src/app/components/input/index.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoInputModule: () => (/* binding */ NzDemoInputModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 2270);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 92651);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size */ 55595);
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea */ 2700);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en.component */ 52440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 43814);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);


















class NzDemoInputModule {
  static ɵfac = function NzDemoInputModule_Factory(t) {
    return new (t || NzDemoInputModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: NzDemoInputModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoInputEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NzDemoInputModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoInputBasicComponent, _size__WEBPACK_IMPORTED_MODULE_3__.NzDemoInputSizeComponent, _textarea__WEBPACK_IMPORTED_MODULE_4__.NzDemoInputTextareaComponent, _en_component__WEBPACK_IMPORTED_MODULE_5__.NzDemoInputEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectModule, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_11__.NzCascaderModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_12__.NzInputNumberModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__.NzDatePickerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzToolTipModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 2270:
/*!********************************************!*\
  !*** ./src/app/components/input/module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 43814);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 28849);









const moduleList = [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectModule, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__.NzCascaderModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_4__.NzInputNumberModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__.NzDatePickerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__.NzToolTipModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonModule];

/***/ }),

/***/ 55595:
/*!******************************************!*\
  !*** ./src/app/components/input/size.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoInputSizeComponent: () => (/* binding */ NzDemoInputSizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);


class NzDemoInputSizeComponent {
  static ɵfac = function NzDemoInputSizeComponent_Factory(t) {
    return new (t || NzDemoInputSizeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoInputSizeComponent,
    selectors: [["nz-demo-input-size"]],
    decls: 4,
    vars: 0,
    consts: [[1, "example-input"], ["nz-input", "", "placeholder", "large size", "nzSize", "large", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"], ["nz-input", "", "placeholder", "default size", "nzSize", "default", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[46px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"], ["nz-input", "", "placeholder", "small size", "nzSize", "small", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "h-[30px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60"]],
    template: function NzDemoInputSizeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1)(2, "input", 2)(3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputDirective],
    styles: [".example-input[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: 0 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9zaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5leGFtcGxlLWlucHV0IC5hbnQtaW5wdXQge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCA4cHggOHB4IDA7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2700:
/*!**********************************************!*\
  !*** ./src/app/components/input/textarea.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoInputTextareaComponent: () => (/* binding */ NzDemoInputTextareaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);



class NzDemoInputTextareaComponent {
  inputValue;
  static ɵfac = function NzDemoInputTextareaComponent_Factory(t) {
    return new (t || NzDemoInputTextareaComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoInputTextareaComponent,
    selectors: [["nz-demo-input-textarea"]],
    decls: 1,
    vars: 1,
    consts: [["rows", "4", "nz-input", "", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[12px]", "min-h-[50px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", 3, "ngModel", "ngModelChange"]],
    template: function NzDemoInputTextareaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoInputTextareaComponent_Template_textarea_ngModelChange_0_listener($event) {
          return ctx.inputValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputDirective],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_input_index_module_ts.js.map