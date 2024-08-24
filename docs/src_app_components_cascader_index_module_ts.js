"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_cascader_index_module_ts"],{

/***/ 5996:
/*!**********************************************!*\
  !*** ./src/app/components/cascader/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderBasicComponent: () => (/* binding */ NzDemoCascaderBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);



const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }]
  }]
}];
const otherOptions = [{
  value: 'fujian',
  label: 'Fujian',
  children: [{
    value: 'xiamen',
    label: 'Xiamen',
    children: [{
      value: 'Kulangsu',
      label: 'Kulangsu',
      isLeaf: true
    }]
  }]
}, {
  value: 'guangxi',
  label: 'Guangxi',
  children: [{
    value: 'guilin',
    label: 'Guilin',
    children: [{
      value: 'Lijiang',
      label: 'Li Jiang River',
      isLeaf: true
    }]
  }]
}];
class NzDemoCascaderBasicComponent {
  nzOptions = null;
  values = null;
  ngOnInit() {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }
  changeNzOptions() {
    if (this.nzOptions === options) {
      this.nzOptions = otherOptions;
    } else {
      this.nzOptions = options;
    }
  }
  onChanges(values) {
    console.log(values, this.values);
  }
  static ɵfac = function NzDemoCascaderBasicComponent_Factory(t) {
    return new (t || NzDemoCascaderBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCascaderBasicComponent,
    selectors: [["nz-demo-cascader-basic"]],
    decls: 4,
    vars: 2,
    consts: [[3, "nzOptions", "ngModel", "ngModelChange"], ["href", "javascript:;", 1, "change-options", 3, "click"]],
    template: function NzDemoCascaderBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderBasicComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.values = $event;
        })("ngModelChange", function NzDemoCascaderBasicComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.onChanges($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderBasicComponent_Template_a_click_2_listener() {
          return ctx.changeNzOptions();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Change Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__.NzCascaderComponent],
    styles: ["[_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector {\n\n    height: 44px;\n\n    border-radius: 4px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n    text-transform: capitalize\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n\n    height: 44px;\n\n    padding-left: 20px;\n\n    padding-right: 20px\n}\n\n[_nghost-%COMP%]     .ant-select-single .ant-select-selector .ant-select-selection-placeholder {\n\n    display: flex;\n\n    align-items: center\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-select-dropdown .ant-cascader-menu) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n:is(.dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::bg-deep   .ant-select-dropdown[_ngcontent-%COMP%]   .ant-cascader-menu-item)[_ngcontent-%COMP%] {\n\n    color: rgb(255 255 255 / .87)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlci9iYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBLHNCQUFBOztJQUFBLHlEQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUEsb0NBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsYUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtc2VsZWN0Om5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9ye1xuICAgICAgICBAYXBwbHkgaC1bNDRweF0gcHgtWzIwcHhdIGJvcmRlci1ub3JtYWwgZGFyazpiZy13aGl0ZS8xMCBkYXJrOmJvcmRlci13aGl0ZS8xMCByb3VuZGVkLTQgY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXNlbGVjdC1zaW5nbGU6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3IgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaC1pbnB1dHtcbiAgICAgICAgQGFwcGx5IGgtWzQ0cHhdIHB4LVsyMHB4XTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXNlbGVjdC1zaW5nbGUgLmFudC1zZWxlY3Qtc2VsZWN0b3IgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLXBsYWNlaG9sZGVye1xuICAgICAgICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXI7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3QtZHJvcGRvd24gLmFudC1jYXNjYWRlci1tZW51e1xuICAgICAgICBAYXBwbHkgZGFyazpib3JkZXItd2hpdGUvMTA7XG4gICAgICB9XG4gICAgICA6aG9zdCA6OmJnLWRlZXAgLmFudC1zZWxlY3QtZHJvcGRvd24gLmFudC1jYXNjYWRlci1tZW51LWl0ZW17XG4gICAgICAgIEBhcHBseSBkYXJrOnRleHQtd2hpdGUvWy44N107XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50305:
/*!******************************************************!*\
  !*** ./src/app/components/cascader/custom-render.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderCustomRenderComponent: () => (/* binding */ NzDemoCascaderCustomRenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);




function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const label_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", label_r5, " / ");
  }
}
function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_2_Template_a_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const label_r5 = ctx_r12.$implicit;
      const i_r6 = ctx_r12.index;
      const selectedOptions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedOptions;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.handleAreaClick($event, label_r5, selectedOptions_r3[i_r6]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const label_r5 = ctx_r15.$implicit;
    const i_r6 = ctx_r15.index;
    const selectedOptions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedOptions;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", label_r5, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selectedOptions_r3[i_r6].code, " ");
  }
}
function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_1_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_2_Template, 5, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const isLast_r7 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r7);
  }
}
function NzDemoCascaderCustomRenderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 2);
  }
  if (rf & 2) {
    const labels_r2 = ctx.labels;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", labels_r2);
  }
}
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      code: 752100,
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    code: '315000',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      code: 453400,
      isLeaf: true
    }]
  }]
}];
class NzDemoCascaderCustomRenderComponent {
  nzOptions = options;
  values = null;
  onChanges(values) {
    console.log(values, this.values);
  }
  handleAreaClick(e, label, option) {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicked "', label, '"', option);
  }
  static ɵfac = function NzDemoCascaderCustomRenderComponent_Factory(t) {
    return new (t || NzDemoCascaderCustomRenderComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCascaderCustomRenderComponent,
    selectors: [["nz-demo-cascader-custom-render"]],
    decls: 3,
    vars: 3,
    consts: [[3, "nzLabelRender", "nzOptions", "ngModel", "ngModelChange"], ["renderTpl", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["href", "javascript:;", 3, "click"]],
    template: function NzDemoCascaderCustomRenderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderCustomRenderComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.values = $event;
        })("ngModelChange", function NzDemoCascaderCustomRenderComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.onChanges($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCascaderCustomRenderComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabelRender", _r0)("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__.NzCascaderComponent],
    styles: ["[_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector {\n\n    height: 44px;\n\n    border-radius: 4px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n    text-transform: capitalize\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n\n    height: 44px;\n\n    padding-left: 20px;\n\n    padding-right: 20px\n}\n\n[_nghost-%COMP%]     .ant-select-single .ant-select-selector .ant-select-selection-placeholder {\n\n    display: flex;\n\n    align-items: center\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlci9jdXN0b20tcmVuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVROztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQSxvQ0FBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxhQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXNlbGVjdDpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvcntcbiAgICAgICAgQGFwcGx5IGgtWzQ0cHhdIHB4LVsyMHB4XSBib3JkZXItbm9ybWFsIGRhcms6Ymctd2hpdGUvMTAgZGFyazpib3JkZXItd2hpdGUvMTAgcm91bmRlZC00IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXR7XG4gICAgICAgIEBhcHBseSBoLVs0NHB4XSBweC1bMjBweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Qtc2luZ2xlIC5hbnQtc2VsZWN0LXNlbGVjdG9yIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1wbGFjZWhvbGRlcntcbiAgICAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 37970:
/*!*************************************************!*\
  !*** ./src/app/components/cascader/disabled.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderDisabledComponent: () => (/* binding */ NzDemoCascaderDisabledComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);



const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }]
  }]
}];
class NzDemoCascaderDisabledComponent {
  nzOptions = options;
  values = null;
  onChanges(values) {
    console.log(values, this.values);
  }
  static ɵfac = function NzDemoCascaderDisabledComponent_Factory(t) {
    return new (t || NzDemoCascaderDisabledComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCascaderDisabledComponent,
    selectors: [["nz-demo-cascader-disabled"]],
    decls: 1,
    vars: 2,
    consts: [[3, "nzOptions", "ngModel", "ngModelChange"]],
    template: function NzDemoCascaderDisabledComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderDisabledComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.values = $event;
        })("ngModelChange", function NzDemoCascaderDisabledComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.onChanges($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__.NzCascaderComponent],
    styles: ["[_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector {\n\n    height: 44px;\n\n    border-radius: 4px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n    text-transform: capitalize\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n\n    height: 44px;\n\n    padding-left: 20px;\n\n    padding-right: 20px\n}\n\n[_nghost-%COMP%]     .ant-select-single .ant-select-selector .ant-select-selection-placeholder {\n\n    display: flex;\n\n    align-items: center\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlci9kaXNhYmxlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBLHNCQUFBOztJQUFBLHlEQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUEsb0NBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsYUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Q6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3J7XG4gICAgICAgIEBhcHBseSBoLVs0NHB4XSBweC1bMjBweF0gYm9yZGVyLW5vcm1hbCBkYXJrOmJnLXdoaXRlLzEwIGRhcms6Ym9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtNCBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtc2VsZWN0LXNpbmdsZTpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvciAuYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLWlucHV0e1xuICAgICAgICBAYXBwbHkgaC1bNDRweF0gcHgtWzIwcHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtc2VsZWN0LXNpbmdsZSAuYW50LXNlbGVjdC1zZWxlY3RvciAuYW50LXNlbGVjdC1zZWxlY3Rpb24tcGxhY2Vob2xkZXJ7XG4gICAgICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1570:
/*!*****************************************************!*\
  !*** ./src/app/components/cascader/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderEnComponent: () => (/* binding */ NzDemoCascaderEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 5996);
/* harmony import */ var _custom_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-render */ 50305);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disabled */ 37970);
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hover */ 87646);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy */ 90185);







class NzDemoCascaderEnComponent {
  static ɵfac = function NzDemoCascaderEnComponent_Factory(t) {
    return new (t || NzDemoCascaderEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NzDemoCascaderEnComponent,
    selectors: [["nz-demo-cascader"]],
    decls: 36,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "h-full"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoCascaderEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "nz-demo-cascader-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Disabled option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "nz-demo-cascader-disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "nz-demo-cascader-hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Custom render");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "nz-demo-cascader-custom-render");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Load Options Lazily");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "nz-demo-cascader-lazy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoCascaderBasicComponent, _custom_render__WEBPACK_IMPORTED_MODULE_1__.NzDemoCascaderCustomRenderComponent, _disabled__WEBPACK_IMPORTED_MODULE_2__.NzDemoCascaderDisabledComponent, _hover__WEBPACK_IMPORTED_MODULE_3__.NzDemoCascaderHoverComponent, _lazy__WEBPACK_IMPORTED_MODULE_4__.NzDemoCascaderLazyComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87646:
/*!**********************************************!*\
  !*** ./src/app/components/cascader/hover.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderHoverComponent: () => (/* binding */ NzDemoCascaderHoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);



const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }]
  }]
}];
class NzDemoCascaderHoverComponent {
  nzOptions = options;
  values = null;
  onChanges(values) {
    console.log(values, this.values);
  }
  static ɵfac = function NzDemoCascaderHoverComponent_Factory(t) {
    return new (t || NzDemoCascaderHoverComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCascaderHoverComponent,
    selectors: [["nz-demo-cascader-hover"]],
    decls: 1,
    vars: 3,
    consts: [[3, "nzExpandTrigger", "nzOptions", "ngModel", "ngModelChange"]],
    template: function NzDemoCascaderHoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderHoverComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.values = $event;
        })("ngModelChange", function NzDemoCascaderHoverComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.onChanges($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandTrigger", "hover")("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__.NzCascaderComponent],
    styles: ["[_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector {\n\n    height: 44px;\n\n    border-radius: 4px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n    text-transform: capitalize\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n\n    height: 44px;\n\n    padding-left: 20px;\n\n    padding-right: 20px\n}\n\n[_nghost-%COMP%]     .ant-select-single .ant-select-selector .ant-select-selection-placeholder {\n\n    display: flex;\n\n    align-items: center\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlci9ob3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBLHNCQUFBOztJQUFBLHlEQUFBOztJQUFBLGtCQUFBOztJQUFBLG1CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUEsb0NBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsYUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Q6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3J7XG4gICAgICAgIEBhcHBseSBoLVs0NHB4XSBweC1bMjBweF0gYm9yZGVyLW5vcm1hbCBkYXJrOmJnLXdoaXRlLzEwIGRhcms6Ym9yZGVyLXdoaXRlLzEwIHJvdW5kZWQtNCBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtc2VsZWN0LXNpbmdsZTpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvciAuYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLWlucHV0e1xuICAgICAgICBAYXBwbHkgaC1bNDRweF0gcHgtWzIwcHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtc2VsZWN0LXNpbmdsZSAuYW50LXNlbGVjdC1zZWxlY3RvciAuYW50LXNlbGVjdC1zZWxlY3Rpb24tcGxhY2Vob2xkZXJ7XG4gICAgICAgIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlcjtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 91778:
/*!*****************************************************!*\
  !*** ./src/app/components/cascader/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderModule: () => (/* binding */ NzDemoCascaderModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 44802);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 5996);
/* harmony import */ var _custom_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-render */ 50305);
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disabled */ 37970);
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hover */ 87646);
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy */ 90185);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 99404);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);














class NzDemoCascaderModule {
  static ɵfac = function NzDemoCascaderModule_Factory(t) {
    return new (t || NzDemoCascaderModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: NzDemoCascaderModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoCascaderEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NzDemoCascaderModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoCascaderBasicComponent, _custom_render__WEBPACK_IMPORTED_MODULE_3__.NzDemoCascaderCustomRenderComponent, _disabled__WEBPACK_IMPORTED_MODULE_4__.NzDemoCascaderDisabledComponent, _hover__WEBPACK_IMPORTED_MODULE_5__.NzDemoCascaderHoverComponent, _lazy__WEBPACK_IMPORTED_MODULE_6__.NzDemoCascaderLazyComponent, _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoCascaderEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_10__.NzCascaderModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 90185:
/*!*********************************************!*\
  !*** ./src/app/components/cascader/lazy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCascaderLazyComponent: () => (/* binding */ NzDemoCascaderLazyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);



const provinces = [{
  value: 'zhejiang',
  label: 'Zhejiang'
}, {
  value: 'jiangsu',
  label: 'Jiangsu'
}];
const cities = {
  zhejiang: [{
    value: 'hangzhou',
    label: 'Hangzhou'
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }],
  jiangsu: [{
    value: 'nanjing',
    label: 'Nanjing'
  }]
};
const scenicspots = {
  hangzhou: [{
    value: 'xihu',
    label: 'West Lake',
    isLeaf: true
  }],
  nanjing: [{
    value: 'zhonghuamen',
    label: 'Zhong Hua Men',
    isLeaf: true
  }]
};
class NzDemoCascaderLazyComponent {
  values = null;
  onChanges(values) {
    console.log(values);
  }
  /** load data async execute by `nzLoadData` method */
  loadData(node, index) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (index < 0) {
          // if index less than 0 it is root node
          node.children = provinces;
        } else if (index === 0) {
          node.children = cities[node.value];
        } else {
          node.children = scenicspots[node.value];
        }
        resolve();
      }, 1000);
    });
  }
  static ɵfac = function NzDemoCascaderLazyComponent_Factory(t) {
    return new (t || NzDemoCascaderLazyComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCascaderLazyComponent,
    selectors: [["nz-demo-cascader-lazy"]],
    decls: 1,
    vars: 2,
    consts: [[3, "ngModel", "nzLoadData", "ngModelChange"]],
    template: function NzDemoCascaderLazyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderLazyComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.values = $event;
        })("ngModelChange", function NzDemoCascaderLazyComponent_Template_nz_cascader_ngModelChange_0_listener($event) {
          return ctx.onChanges($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.values)("nzLoadData", ctx.loadData);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__.NzCascaderComponent],
    styles: ["[_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector {\n\n    height: 44px;\n\n    border-radius: 4px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(227 230 239 / var(--tw-border-opacity));\n\n    padding-left: 20px;\n\n    padding-right: 20px;\n\n    text-transform: capitalize\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-select:not(.ant-select-customize-input) .ant-select-selector) {\n\n    border-color: rgb(255 255 255 / 0.1);\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n\n    height: 44px;\n\n    padding-left: 20px;\n\n    padding-right: 20px\n}\n\n[_nghost-%COMP%]     .ant-select-single .ant-select-selector .ant-select-selection-placeholder {\n\n    display: flex;\n\n    align-items: center\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYXNjYWRlci9sYXp5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVROztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUEsc0JBQUE7O0lBQUEseURBQUE7O0lBQUEsa0JBQUE7O0lBQUEsbUJBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQSxvQ0FBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxhQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXNlbGVjdDpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvcntcbiAgICAgICAgQGFwcGx5IGgtWzQ0cHhdIHB4LVsyMHB4XSBib3JkZXItbm9ybWFsIGRhcms6Ymctd2hpdGUvMTAgZGFyazpib3JkZXItd2hpdGUvMTAgcm91bmRlZC00IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXR7XG4gICAgICAgIEBhcHBseSBoLVs0NHB4XSBweC1bMjBweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1zZWxlY3Qtc2luZ2xlIC5hbnQtc2VsZWN0LXNlbGVjdG9yIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1wbGFjZWhvbGRlcntcbiAgICAgICAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 44802:
/*!***********************************************!*\
  !*** ./src/app/components/cascader/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 66624);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ 99404);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);



const moduleList = [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_0__.NzCascaderModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__.NzModalModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule];

/***/ })

}]);
//# sourceMappingURL=src_app_components_cascader_index_module_ts.js.map