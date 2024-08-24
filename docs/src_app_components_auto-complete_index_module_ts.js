"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_auto-complete_index_module_ts"],{

/***/ 39885:
/*!***************************************************!*\
  !*** ./src/app/components/auto-complete/basic.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteBasicComponent: () => (/* binding */ NzDemoAutoCompleteBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);




class NzDemoAutoCompleteBasicComponent {
  inputValue;
  options = [];
  onInput(value) {
    this.options = value ? [value, value + value, value + value + value] : [];
  }
  static ɵfac = function NzDemoAutoCompleteBasicComponent_Factory(t) {
    return new (t || NzDemoAutoCompleteBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAutoCompleteBasicComponent,
    selectors: [["nz-demo-auto-complete-basic"]],
    decls: 4,
    vars: 3,
    consts: [[1, "inline-flex"], ["placeholder", "input here", "nz-input", "", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[5px]", "min-h-[37px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", "capitalize", 3, "ngModel", "nzAutocomplete", "ngModelChange", "input"], ["nzBackfill", "", 3, "nzDataSource"], ["auto", ""]],
    template: function NzDemoAutoCompleteBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoAutoCompleteBasicComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.inputValue = $event;
        })("input", function NzDemoAutoCompleteBasicComponent_Template_input_input_1_listener($event) {
          return ctx.onInput($event.target == null ? null : $event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-autocomplete", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue)("nzAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.options);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_2__.NzAutocompleteComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_2__.NzAutocompleteTriggerDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__.NzInputDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 30336:
/*!**************************************************************!*\
  !*** ./src/app/components/auto-complete/certain-category.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteCertainCategoryComponent: () => (/* binding */ NzDemoAutoCompleteCertainCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);







function NzDemoAutoCompleteCertainCategoryComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
  }
}
function NzDemoAutoCompleteCertainCategoryComponent_nz_auto_optgroup_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u66F4\u591A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", group_r4.title, " ");
  }
}
function NzDemoAutoCompleteCertainCategoryComponent_nz_auto_optgroup_7_nz_auto_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-auto-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r9.title)("nzValue", option_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r9.count, " \u4EBA \u5173\u6CE8");
  }
}
function NzDemoAutoCompleteCertainCategoryComponent_nz_auto_optgroup_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-auto-optgroup", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoAutoCompleteCertainCategoryComponent_nz_auto_optgroup_7_ng_template_1_Template, 4, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoAutoCompleteCertainCategoryComponent_nz_auto_optgroup_7_nz_auto_option_3_Template, 4, 4, "nz-auto-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r4.children);
  }
}
class NzDemoAutoCompleteCertainCategoryComponent {
  inputValue;
  optionGroups;
  constructor() {}
  onChange(value) {
    console.log(value);
  }
  ngOnInit() {
    setTimeout(() => {
      this.optionGroups = [{
        title: '话题',
        children: [{
          title: 'AntDesign',
          count: 10000
        }, {
          title: 'AntDesign UI',
          count: 10600
        }]
      }, {
        title: '问题',
        children: [{
          title: 'AntDesign UI 有多好',
          count: 60100
        }, {
          title: 'AntDesign 是啥',
          count: 30010
        }]
      }, {
        title: '文章',
        children: [{
          title: 'AntDesign 是一个设计语言',
          count: 100000
        }]
      }];
    }, 1000);
  }
  static ɵfac = function NzDemoAutoCompleteCertainCategoryComponent_Factory(t) {
    return new (t || NzDemoAutoCompleteCertainCategoryComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAutoCompleteCertainCategoryComponent,
    selectors: [["nz-demo-auto-complete-certain-category"]],
    decls: 8,
    vars: 4,
    consts: [[1, "flex"], ["nzSize", "large", 1, "w-full", "rounded-10", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[5px]", "min-h-[37px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", "capitalize", 3, "nzSuffix"], ["placeholder", "input here", "nz-input", "", 1, "capitalize", "bg-transparent", "shadow-none", "outline-none", "border-none", 3, "ngModel", "nzAutocomplete", "ngModelChange"], ["suffixIcon", ""], ["auto", ""], [3, "nzLabel", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel"], ["groupTitle", ""], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["href", "https://www.google.com/search?q=ng+zorro", "target", "_blank", 1, "more-link"], [3, "nzLabel", "nzValue"], [1, "certain-search-item-count"]],
    template: function NzDemoAutoCompleteCertainCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-input-group", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoAutoCompleteCertainCategoryComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.inputValue = $event;
        })("ngModelChange", function NzDemoAutoCompleteCertainCategoryComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoAutoCompleteCertainCategoryComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoAutoCompleteCertainCategoryComponent_nz_auto_optgroup_7_Template, 4, 2, "nz-auto-optgroup", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue)("nzAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionGroups);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteOptionComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteTriggerDirective, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteOptgroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective],
    styles: [".certain-search-item-count {\n  position: absolute;\n  color: #999;\n  right: 16px;\n}\n\n.more-link {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2NlcnRhaW4tY2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQVI7O0FBR007RUFDRSxZQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5jZXJ0YWluLXNlYXJjaC1pdGVtLWNvdW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tb3JlLWxpbmsge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 42477:
/*!****************************************************!*\
  !*** ./src/app/components/auto-complete/custom.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteCustomComponent: () => (/* binding */ NzDemoAutoCompleteCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);





function NzDemoAutoCompleteCustomComponent_nz_auto_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-auto-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2);
  }
}
class NzDemoAutoCompleteCustomComponent {
  inputValue;
  options = [];
  onInput(value) {
    this.options = value ? [value, value + value, value + value + value] : [];
  }
  static ɵfac = function NzDemoAutoCompleteCustomComponent_Factory(t) {
    return new (t || NzDemoAutoCompleteCustomComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAutoCompleteCustomComponent,
    selectors: [["nz-demo-auto-complete-custom"]],
    decls: 5,
    vars: 3,
    consts: [[1, "inline-flex"], ["placeholder", "input here", "nz-input", "", "row", "4", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[5px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", "capitalize", 3, "ngModel", "nzAutocomplete", "ngModelChange", "input"], ["auto", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]],
    template: function NzDemoAutoCompleteCustomComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoAutoCompleteCustomComponent_Template_textarea_ngModelChange_1_listener($event) {
          return ctx.inputValue = $event;
        })("input", function NzDemoAutoCompleteCustomComponent_Template_textarea_input_1_listener($event) {
          return ctx.onInput($event.target == null ? null : $event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-autocomplete", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoAutoCompleteCustomComponent_nz_auto_option_4_Template, 2, 2, "nz-auto-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue)("nzAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteOptionComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteTriggerDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 19310:
/*!**********************************************************!*\
  !*** ./src/app/components/auto-complete/en.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteEnComponent: () => (/* binding */ NzDemoAutoCompleteEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 39885);
/* harmony import */ var _certain_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certain-category */ 30336);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom */ 42477);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ 12676);
/* harmony import */ var _uncertain_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uncertain-category */ 65445);







class NzDemoAutoCompleteEnComponent {
  static ɵfac = function NzDemoAutoCompleteEnComponent_Factory(t) {
    return new (t || NzDemoAutoCompleteEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NzDemoAutoCompleteEnComponent,
    selectors: [["nz-demo-auto-complete"]],
    decls: 36,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoAutoCompleteEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "nz-demo-auto-complete-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Customized");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "nz-demo-auto-complete-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Customize Input Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "nz-demo-auto-complete-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Lookup-Patterns - Uncertain Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "nz-demo-auto-complete-uncertain-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Lookup-Patterns - Certain Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "nz-demo-auto-complete-certain-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoAutoCompleteBasicComponent, _certain_category__WEBPACK_IMPORTED_MODULE_1__.NzDemoAutoCompleteCertainCategoryComponent, _custom__WEBPACK_IMPORTED_MODULE_2__.NzDemoAutoCompleteCustomComponent, _options__WEBPACK_IMPORTED_MODULE_3__.NzDemoAutoCompleteOptionsComponent, _uncertain_category__WEBPACK_IMPORTED_MODULE_4__.NzDemoAutoCompleteUncertainCategoryComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 13797:
/*!**********************************************************!*\
  !*** ./src/app/components/auto-complete/index.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteModule: () => (/* binding */ NzDemoAutoCompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 14263);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 39885);
/* harmony import */ var _certain_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certain-category */ 30336);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom */ 42477);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ 12676);
/* harmony import */ var _uncertain_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uncertain-category */ 65445);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ 19310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);















class NzDemoAutoCompleteModule {
  static ɵfac = function NzDemoAutoCompleteModule_Factory(t) {
    return new (t || NzDemoAutoCompleteModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: NzDemoAutoCompleteModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoAutoCompleteEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NzDemoAutoCompleteModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoAutoCompleteBasicComponent, _certain_category__WEBPACK_IMPORTED_MODULE_3__.NzDemoAutoCompleteCertainCategoryComponent, _custom__WEBPACK_IMPORTED_MODULE_4__.NzDemoAutoCompleteCustomComponent, _options__WEBPACK_IMPORTED_MODULE_5__.NzDemoAutoCompleteOptionsComponent, _uncertain_category__WEBPACK_IMPORTED_MODULE_6__.NzDemoAutoCompleteUncertainCategoryComponent, _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoAutoCompleteEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_10__.NzAutocompleteModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 14263:
/*!****************************************************!*\
  !*** ./src/app/components/auto-complete/module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);




const moduleList = [ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_0__.NzAutocompleteModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__.NzInputModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconModule];

/***/ }),

/***/ 12676:
/*!*****************************************************!*\
  !*** ./src/app/components/auto-complete/options.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteOptionsComponent: () => (/* binding */ NzDemoAutoCompleteOptionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);





function NzDemoAutoCompleteOptionsComponent_nz_auto_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-auto-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2);
  }
}
class NzDemoAutoCompleteOptionsComponent {
  inputValue;
  options = [];
  onInput(e) {
    const value = e.target.value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
  }
  static ɵfac = function NzDemoAutoCompleteOptionsComponent_Factory(t) {
    return new (t || NzDemoAutoCompleteOptionsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAutoCompleteOptionsComponent,
    selectors: [["nz-demo-auto-complete-options"]],
    decls: 5,
    vars: 3,
    consts: [[1, "inline-flex"], ["placeholder", "input here", "nz-input", "", 1, "w-full", "rounded-4", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[5px]", "min-h-[37px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", "capitalize", 3, "ngModel", "nzAutocomplete", "ngModelChange", "input"], ["auto", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]],
    template: function NzDemoAutoCompleteOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoAutoCompleteOptionsComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.inputValue = $event;
        })("input", function NzDemoAutoCompleteOptionsComponent_Template_input_input_1_listener($event) {
          return ctx.onInput($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-autocomplete", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoAutoCompleteOptionsComponent_nz_auto_option_4_Template, 2, 2, "nz-auto-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue)("nzAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteOptionComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteTriggerDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 65445:
/*!****************************************************************!*\
  !*** ./src/app/components/auto-complete/uncertain-category.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoAutoCompleteUncertainCategoryComponent: () => (/* binding */ NzDemoAutoCompleteUncertainCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/auto-complete */ 91451);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);









function NzDemoAutoCompleteUncertainCategoryComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NzDemoAutoCompleteUncertainCategoryComponent_nz_auto_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-auto-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", option_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Found ", option_r4.value, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://s.taobao.com/search?q=" + option_r4.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r4.count, " results");
  }
}
class NzDemoAutoCompleteUncertainCategoryComponent {
  inputValue;
  options = [];
  onChange(e) {
    const value = e.target.value;
    this.options = new Array(this.getRandomInt(5, 15)).join('.').split('.').map((_item, idx) => ({
      value,
      category: `${value}${idx}`,
      count: this.getRandomInt(200, 100)
    }));
  }
  getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static ɵfac = function NzDemoAutoCompleteUncertainCategoryComponent_Factory(t) {
    return new (t || NzDemoAutoCompleteUncertainCategoryComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoAutoCompleteUncertainCategoryComponent,
    selectors: [["nz-demo-auto-complete-uncertain-category"]],
    decls: 8,
    vars: 4,
    consts: [[1, "flex"], ["nzSearch", "", "nzSize", "large", 3, "nzAddOnAfter"], ["placeholder", "input here", "nz-input", "", 1, "w-full", "ltr:rounded-l-10", "rtl:rounded-r-10", "border-normal", "border-1", "text-[15px]", "dark:bg-white/10", "dark:border-white/10", "px-[20px]", "py-[5px]", "min-h-[37px]", "outline-none", "placeholder:text-[#A0A0A0]", "text-theme-gray", "dark:text-white/60", "capitalize", "ltr:[&+span]:rounded-r-10", "rtl:[&+span]:rounded-l-10", 3, "ngModel", "nzAutocomplete", "ngModelChange", "input"], ["suffixIconButton", ""], ["auto", ""], ["class", "global-search-item", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "nzSearch", "", 1, "h-[37px]", "inline-flex", "items-center", "justify-center", "ltr:rounded-r-10", "rtl:rounded-l-10"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "global-search-item", 3, "nzValue"], ["target", "_blank", "rel", "noopener noreferrer", 1, "global-search-item-desc", 3, "href"], [1, "global-search-item-count"]],
    template: function NzDemoAutoCompleteUncertainCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-input-group", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoAutoCompleteUncertainCategoryComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.inputValue = $event;
        })("input", function NzDemoAutoCompleteUncertainCategoryComponent_Template_input_input_2_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoAutoCompleteUncertainCategoryComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoAutoCompleteUncertainCategoryComponent_nz_auto_option_7_Template, 6, 5, "nz-auto-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue)("nzAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteOptionComponent, ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__.NzAutocompleteTriggerDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective],
    styles: [".global-search-item {\n  display: flex;\n}\n\n.global-search-item-desc {\n  flex: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.global-search-item-count {\n  flex: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL3VuY2VydGFpbi1jYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGFBQUE7QUFBUjs7QUFHTTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBR007RUFDRSxVQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5nbG9iYWwtc2VhcmNoLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAuZ2xvYmFsLXNlYXJjaC1pdGVtLWRlc2Mge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmdsb2JhbC1zZWFyY2gtaXRlbS1jb3VudCB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 91451:
/*!*****************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-auto-complete.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NZ_AUTOCOMPLETE_VALUE_ACCESSOR: () => (/* binding */ NZ_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   NzAutocompleteComponent: () => (/* binding */ NzAutocompleteComponent),
/* harmony export */   NzAutocompleteModule: () => (/* binding */ NzAutocompleteModule),
/* harmony export */   NzAutocompleteOptgroupComponent: () => (/* binding */ NzAutocompleteOptgroupComponent),
/* harmony export */   NzAutocompleteOptionComponent: () => (/* binding */ NzAutocompleteOptionComponent),
/* harmony export */   NzAutocompleteTriggerDirective: () => (/* binding */ NzAutocompleteTriggerDirective),
/* harmony export */   NzOptionSelectionChange: () => (/* binding */ NzOptionSelectionChange),
/* harmony export */   getNzAutocompleteMissingPanelError: () => (/* binding */ getNzAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 72698);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 86424);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 26672);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 53558);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 77592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 30554);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/portal */ 83517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 251);























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
  }
}
const _c0 = [[["nz-auto-option"]]];
const _c1 = ["nz-auto-option"];
const _c2 = ["*"];
const _c3 = ["panel"];
const _c4 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) {}
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-auto-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", option_r9)("nzLabel", option_r9 && option_r9.label ? option_r9.label : option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9 && option_r9.label ? option_r9.label : option_r9, " ");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 3, "nz-auto-option", 7);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.nzDataSource);
  }
}
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@slideMotion.done", function NzAutocompleteComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onAnimationEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-hidden", !ctx_r0.showPanel)("ant-select-dropdown-rtl", ctx_r0.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@slideMotion", undefined)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzDataSource ? _r5 : _r3);
  }
}
class NzAutocompleteOptgroupComponent {
  constructor() {}
  static #_ = this.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) {
    return new (t || NzAutocompleteOptgroupComponent)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzAutocompleteOptgroupComponent,
    selectors: [["nz-auto-optgroup"]],
    inputs: {
      nzLabel: "nzLabel"
    },
    exportAs: ["nzAutoOptgroup"],
    ngContentSelectors: _c1,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-select-item", "ant-select-item-group"], [4, "nzStringTemplateOutlet"]],
    template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
      }
    },
    dependencies: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAutocompleteOptgroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-auto-optgroup',
      exportAs: 'nzAutoOptgroup',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="ant-select-item ant-select-item-group">
      <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
    </div>
    <ng-content select="nz-auto-option"></ng-content>
  `
    }]
  }], function () {
    return [];
  }, {
    nzLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NzOptionSelectionChange {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
}
class NzAutocompleteOptionComponent {
  constructor(ngZone, changeDetectorRef, element, nzAutocompleteOptgroupComponent) {
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.element = element;
    this.nzAutocompleteOptgroupComponent = nzAutocompleteOptgroupComponent;
    this.nzDisabled = false;
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.active = false;
    this.selected = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.element.nativeElement, 'mouseenter').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(() => this.mouseEntered.observers.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
        this.ngZone.run(() => this.mouseEntered.emit(this));
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.element.nativeElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(event => event.preventDefault());
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  select(emit = true) {
    this.selected = true;
    this.changeDetectorRef.markForCheck();
    if (emit) {
      this.emitSelectionChangeEvent();
    }
  }
  deselect() {
    this.selected = false;
    this.changeDetectorRef.markForCheck();
    this.emitSelectionChangeEvent();
  }
  /** Git display label */
  getLabel() {
    return this.nzLabel || this.nzValue.toString();
  }
  /** Set active (only styles) */
  setActiveStyles() {
    if (!this.active) {
      this.active = true;
      this.changeDetectorRef.markForCheck();
    }
  }
  /** Unset active (only styles) */
  setInactiveStyles() {
    if (this.active) {
      this.active = false;
      this.changeDetectorRef.markForCheck();
    }
  }
  scrollIntoViewIfNeeded() {
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.scrollIntoView)(this.element.nativeElement);
  }
  selectViaInteraction() {
    if (!this.nzDisabled) {
      this.selected = !this.selected;
      if (this.selected) {
        this.setActiveStyles();
      } else {
        this.setInactiveStyles();
      }
      this.emitSelectionChangeEvent(true);
      this.changeDetectorRef.markForCheck();
    }
  }
  emitSelectionChangeEvent(isUserInput = false) {
    this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
  }
  static #_ = this.ɵfac = function NzAutocompleteOptionComponent_Factory(t) {
    return new (t || NzAutocompleteOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzAutocompleteOptgroupComponent, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzAutocompleteOptionComponent,
    selectors: [["nz-auto-option"]],
    hostAttrs: ["role", "menuitem", 1, "ant-select-item", "ant-select-item-option"],
    hostVars: 10,
    hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() {
          return ctx.selectViaInteraction();
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item-option-grouped", ctx.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected", ctx.selected)("ant-select-item-option-active", ctx.active)("ant-select-item-option-disabled", ctx.nzDisabled);
      }
    },
    inputs: {
      nzValue: "nzValue",
      nzLabel: "nzLabel",
      nzDisabled: "nzDisabled"
    },
    outputs: {
      selectionChange: "selectionChange",
      mouseEntered: "mouseEntered"
    },
    exportAs: ["nzAutoOption"],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-select-item-option-content"]],
    template: function NzAutocompleteOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAutocompleteOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-auto-option',
      exportAs: 'nzAutoOption',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <div class="ant-select-item-option-content">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        role: 'menuitem',
        class: 'ant-select-item ant-select-item-option',
        '[class.ant-select-item-option-grouped]': 'nzAutocompleteOptgroupComponent',
        '[class.ant-select-item-option-selected]': 'selected',
        '[class.ant-select-item-option-active]': 'active',
        '[class.ant-select-item-option-disabled]': 'nzDisabled',
        '[attr.aria-selected]': 'selected.toString()',
        '[attr.aria-disabled]': 'nzDisabled.toString()',
        '(click)': 'selectViaInteraction()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NzAutocompleteOptgroupComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    mouseEntered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NzAutocompleteTriggerDirective),
  multi: true
};
function getNzAutocompleteMissingPanelError() {
  return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' + 'Make sure that the id passed to the `nzAutocomplete` is correct and that ' + "you're attempting to open it after the ngAfterContentInit hook.");
}
class NzAutocompleteTriggerDirective {
  /** Current active option */
  get activeOption() {
    if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
      return this.nzAutocomplete.activeItem;
    } else {
      return null;
    }
  }
  constructor(ngZone, elementRef, overlay, viewContainerRef, nzInputGroupWhitSuffixOrPrefixDirective, document) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.nzInputGroupWhitSuffixOrPrefixDirective = nzInputGroupWhitSuffixOrPrefixDirective;
    this.document = document;
    this.onChange = () => {};
    this.onTouched = () => {};
    this.panelOpen = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.overlayRef = null;
    this.portal = null;
    this.previousValue = null;
  }
  ngAfterViewInit() {
    if (this.nzAutocomplete) {
      this.nzAutocomplete.animationStateChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(event => {
        if (event.toState === 'void') {
          if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
          }
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyPanel();
  }
  writeValue(value) {
    this.ngZone.runOutsideAngular(() => Promise.resolve(null).then(() => this.setTriggerValue(value)));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    const element = this.elementRef.nativeElement;
    element.disabled = isDisabled;
    this.closePanel();
  }
  openPanel() {
    this.previousValue = this.elementRef.nativeElement.value;
    this.attachOverlay();
    this.updateStatus();
  }
  closePanel() {
    if (this.panelOpen) {
      this.nzAutocomplete.isOpen = this.panelOpen = false;
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayOutsideClickSubscription.unsubscribe();
        this.optionsChangeSubscription.unsubscribe();
        this.portal = null;
      }
    }
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.DOWN_ARROW;
    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ESCAPE) {
      event.preventDefault();
    }
    if (this.panelOpen && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ESCAPE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.TAB)) {
      // Reset value when tab / ESC close
      if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
        this.setTriggerValue(this.previousValue);
      }
      this.closePanel();
    } else if (this.panelOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ENTER) {
      if (this.nzAutocomplete.showPanel) {
        event.preventDefault();
        if (this.activeOption) {
          this.activeOption.selectViaInteraction();
        } else {
          this.closePanel();
        }
      }
    } else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
      event.stopPropagation();
      event.preventDefault();
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.UP_ARROW) {
        this.nzAutocomplete.setPreviousItemActive();
      } else {
        this.nzAutocomplete.setNextItemActive();
      }
      if (this.activeOption) {
        this.activeOption.scrollIntoViewIfNeeded();
      }
      this.doBackfill();
    }
  }
  handleInput(event) {
    const target = event.target;
    const document = this.document;
    let value = target.value;
    if (target.type === 'number') {
      value = value === '' ? null : parseFloat(value);
    }
    if (this.previousValue !== value) {
      this.previousValue = value;
      this.onChange(value);
      if (this.canOpen() && document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }
  handleFocus() {
    if (this.canOpen()) {
      this.openPanel();
    }
  }
  handleBlur() {
    this.onTouched();
  }
  /**
   * Subscription data source changes event
   */
  subscribeOptionsChange() {
    const optionChanges = this.nzAutocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.positionStrategy.reapplyLastPosition()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(0));
    return optionChanges.subscribe(() => {
      this.resetActiveItem();
      if (this.panelOpen) {
        this.overlayRef.updatePosition();
      }
    });
  }
  /**
   * Subscription option changes event and set the value
   */
  subscribeSelectionChange() {
    return this.nzAutocomplete.selectionChange.subscribe(option => {
      this.setValueAndClose(option);
    });
  }
  subscribeOverlayOutsideClick() {
    return this.overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => !this.elementRef.nativeElement.contains(e.target))).subscribe(() => {
      this.closePanel();
    });
  }
  attachOverlay() {
    if (!this.nzAutocomplete) {
      throw getNzAutocompleteMissingPanelError();
    }
    if (!this.portal && this.nzAutocomplete.template) {
      this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
    }
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.selectionChangeSubscription = this.subscribeSelectionChange();
      this.optionsChangeSubscription = this.subscribeOptionsChange();
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
      this.overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
        this.closePanel();
      });
    }
    this.nzAutocomplete.isOpen = this.panelOpen = true;
  }
  updateStatus() {
    if (this.overlayRef) {
      this.overlayRef.updateSize({
        width: this.nzAutocomplete.nzWidth || this.getHostWidth()
      });
    }
    this.nzAutocomplete.setVisibility();
    this.resetActiveItem();
    if (this.activeOption) {
      this.activeOption.scrollIntoViewIfNeeded();
    }
  }
  destroyPanel() {
    if (this.overlayRef) {
      this.closePanel();
    }
  }
  getOverlayConfig() {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayConfig({
      positionStrategy: this.getOverlayPosition(),
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      // default host element width
      width: this.nzAutocomplete.nzWidth || this.getHostWidth()
    });
  }
  getConnectedElement() {
    return this.nzInputGroupWhitSuffixOrPrefixDirective ? this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef : this.elementRef;
  }
  getHostWidth() {
    return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  getOverlayPosition() {
    const positions = [new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.ConnectionPositionPair({
      originX: 'start',
      originY: 'bottom'
    }, {
      overlayX: 'start',
      overlayY: 'top'
    }), new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.ConnectionPositionPair({
      originX: 'start',
      originY: 'top'
    }, {
      overlayX: 'start',
      overlayY: 'bottom'
    })];
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPositions(positions).withTransformOriginOn('.ant-select-dropdown');
    return this.positionStrategy;
  }
  resetActiveItem() {
    const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
    this.nzAutocomplete.clearSelectedOptions(null, true);
    if (index !== -1) {
      this.nzAutocomplete.setActiveItem(index);
      this.nzAutocomplete.activeItem.select(false);
    } else {
      this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
    }
  }
  setValueAndClose(option) {
    const value = option.nzValue;
    this.setTriggerValue(option.getLabel());
    this.onChange(value);
    this.elementRef.nativeElement.focus();
    this.closePanel();
  }
  setTriggerValue(value) {
    const option = this.nzAutocomplete.getOption(value);
    const displayValue = option ? option.getLabel() : value;
    this.elementRef.nativeElement.value = displayValue != null ? displayValue : '';
    if (!this.nzAutocomplete.nzBackfill) {
      this.previousValue = displayValue;
    }
  }
  doBackfill() {
    if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
      this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
    }
  }
  canOpen() {
    const element = this.elementRef.nativeElement;
    return !element.readOnly && !element.disabled;
  }
  static #_ = this.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) {
    return new (t || NzAutocompleteTriggerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputGroupWhitSuffixOrPrefixDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzAutocompleteTriggerDirective,
    selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]],
    hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"],
    hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() {
          return ctx.handleFocus();
        })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() {
          return ctx.handleBlur();
        })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) {
          return ctx.handleKeydown($event);
        });
      }
    },
    inputs: {
      nzAutocomplete: "nzAutocomplete"
    },
    exportAs: ["nzAutocompleteTrigger"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAutocompleteTriggerDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
      exportAs: 'nzAutocompleteTrigger',
      providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
      host: {
        autocomplete: 'off',
        'aria-autocomplete': 'list',
        '(focusin)': 'handleFocus()',
        '(blur)': 'handleBlur()',
        '(input)': 'handleInput($event)',
        '(keydown)': 'handleKeydown($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputGroupWhitSuffixOrPrefixDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT]
      }]
    }];
  }, {
    nzAutocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NzAutocompleteComponent {
  /**
   * Options accessor, its source may be content or dataSource
   */
  get options() {
    // first dataSource
    if (this.nzDataSource) {
      return this.fromDataSourceOptions;
    } else {
      return this.fromContentOptions;
    }
  }
  constructor(changeDetectorRef, ngZone, directionality, noAnimation) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngZone = ngZone;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzOverlayClassName = '';
    this.nzOverlayStyle = {};
    this.nzDefaultActiveFirstOption = true;
    this.nzBackfill = false;
    this.compareWith = (o1, o2) => o1 === o2;
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.showPanel = true;
    this.isOpen = false;
    this.activeItem = null;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.animationStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activeItemIndex = -1;
    this.selectionChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription.EMPTY;
    this.optionMouseEnterSubscription = rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription.EMPTY;
    this.dataSourceChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_16__.Subscription.EMPTY;
    /** Options changes listener */
    this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.defer)(() => {
      if (this.options) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(...this.options.map(option => option.selectionChange));
      }
      return this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(() => this.optionSelectionChanges));
    });
    this.optionMouseEnter = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.defer)(() => {
      if (this.options) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(...this.options.map(option => option.mouseEntered));
      }
      return this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(() => this.optionMouseEnter));
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.changeDetectorRef.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  onAnimationEvent(event) {
    this.animationStateChange.emit(event);
  }
  ngAfterContentInit() {
    if (!this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngAfterViewInit() {
    if (this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngOnDestroy() {
    this.dataSourceChangeSubscription.unsubscribe();
    this.selectionChangeSubscription.unsubscribe();
    this.optionMouseEnterSubscription.unsubscribe();
    // Caretaker note: we have to set these subscriptions to `null` since these will be closed subscriptions, but they
    // still keep references to destinations (which are `SafeSubscriber`s). Destinations keep referencing `next` functions,
    // which we pass, for instance, to `this.optionSelectionChanges.subscribe(...)`.
    this.dataSourceChangeSubscription = this.selectionChangeSubscription = this.optionMouseEnterSubscription = null;
    this.destroy$.next();
    this.destroy$.complete();
  }
  setVisibility() {
    this.showPanel = !!this.options.length;
    this.changeDetectorRef.markForCheck();
  }
  setActiveItem(index) {
    const activeItem = this.options.get(index);
    if (activeItem && !activeItem.active) {
      this.activeItem = activeItem;
      this.activeItemIndex = index;
      this.clearSelectedOptions(this.activeItem);
      this.activeItem.setActiveStyles();
    } else {
      this.activeItem = null;
      this.activeItemIndex = -1;
      this.clearSelectedOptions();
    }
    this.changeDetectorRef.markForCheck();
  }
  setNextItemActive() {
    const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
    this.setActiveItem(nextIndex);
  }
  setPreviousItemActive() {
    const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
    this.setActiveItem(previousIndex);
  }
  getOptionIndex(value) {
    return this.options.reduce((result, current, index) => result === -1 ? this.compareWith(value, current.nzValue) ? index : -1 : result, -1);
  }
  getOption(value) {
    return this.options.find(item => this.compareWith(value, item.nzValue)) || null;
  }
  optionsInit() {
    this.setVisibility();
    this.subscribeOptionChanges();
    const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
    // async
    this.dataSourceChangeSubscription = changes.subscribe(e => {
      if (!e.dirty && this.isOpen) {
        setTimeout(() => this.setVisibility());
      }
      this.subscribeOptionChanges();
    });
  }
  /**
   * Clear the status of options
   */
  clearSelectedOptions(skip, deselect = false) {
    this.options.forEach(option => {
      if (option !== skip) {
        if (deselect) {
          option.deselect();
        }
        option.setInactiveStyles();
      }
    });
  }
  subscribeOptionChanges() {
    this.selectionChangeSubscription.unsubscribe();
    this.selectionChangeSubscription = this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event.isUserInput)).subscribe(event => {
      event.source.select();
      event.source.setActiveStyles();
      this.activeItem = event.source;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event.source, true);
      this.selectionChange.emit(event.source);
    });
    this.optionMouseEnterSubscription.unsubscribe();
    this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe(event => {
      event.setActiveStyles();
      this.activeItem = event;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event);
    });
  }
  static #_ = this.ɵfac = function NzAutocompleteComponent_Factory(t) {
    return new (t || NzAutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_22__.NzNoAnimationDirective, 9));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzAutocompleteComponent,
    selectors: [["nz-autocomplete"]],
    contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzAutocompleteOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fromContentOptions = _t);
      }
    },
    viewQuery: function NzAutocompleteComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzAutocompleteOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fromDataSourceOptions = _t);
      }
    },
    inputs: {
      nzWidth: "nzWidth",
      nzOverlayClassName: "nzOverlayClassName",
      nzOverlayStyle: "nzOverlayStyle",
      nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption",
      nzBackfill: "nzBackfill",
      compareWith: "compareWith",
      nzDataSource: "nzDataSource"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["nzAutocomplete"],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    consts: [[1, "ant-select-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "ngClass", "ngStyle", "nzNoAnimation"], ["panel", ""], [2, "max-height", "256px", "overflow-y", "auto", "overflow-anchor", "none"], [2, "display", "flex", "flex-direction", "column"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]],
    template: function NzAutocompleteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzAutocompleteComponent_ng_template_0_Template, 9, 10, "ng-template");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_22__.NzNoAnimationDirective, NzAutocompleteOptionComponent],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_23__.slideMotion]
    },
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAutocompleteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-autocomplete',
      exportAs: 'nzAutocomplete',
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: `
    <ng-template>
      <div
        #panel
        class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-select-dropdown-hidden]="!showPanel"
        [class.ant-select-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
      >
        <div style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
          <div style="display: flex; flex-direction: column;">
            <ng-template *ngTemplateOutlet="nzDataSource ? optionsTemplate : contentTemplate"></ng-template>
          </div>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ng-content></ng-content>
      </ng-template>
      <ng-template #optionsTemplate>
        <nz-auto-option
          *ngFor="let option of nzDataSource!"
          [nzValue]="option"
          [nzLabel]="option && $any(option).label ? $any(option).label : $any(option)"
        >
          {{ option && $any(option).label ? $any(option).label : $any(option) }}
        </nz-auto-option>
      </ng-template>
    </ng-template>
  `,
      animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_23__.slideMotion]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_22__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOverlayClassName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOverlayStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDefaultActiveFirstOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBackfill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fromContentOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzAutocompleteOptionComponent, {
        descendants: true
      }]
    }],
    fromDataSourceOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [NzAutocompleteOptionComponent]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: false
      }]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel', {
        static: false
      }]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        static: false
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAutocompleteModule {
  static #_ = this.ɵfac = function NzAutocompleteModule_Factory(t) {
    return new (t || NzAutocompleteModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzAutocompleteModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzOutletModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_22__.NzNoAnimationModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
      exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_1__.NzOutletModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_22__.NzNoAnimationModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputModule]
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
//# sourceMappingURL=src_app_components_auto-complete_index_module_ts.js.map