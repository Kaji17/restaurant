"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_collapse_index_module_ts"],{

/***/ 23311:
/*!**************************************************!*\
  !*** ./src/app/components/collapse/accordion.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseAccordionComponent: () => (/* binding */ NzDemoCollapseAccordionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);



function NzDemoCollapseAccordionComponent_nz_collapse_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.collapsePanelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");
  }
}
class NzDemoCollapseAccordionComponent {
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
  panels = [{
    active: true,
    name: 'This is panel header 1',
    childPanel: [{
      active: false,
      name: 'This is panel header 1-1'
    }]
  }, {
    active: false,
    name: 'This is panel header 2'
  }, {
    active: false,
    name: 'This is panel header 3'
  }];
  static ɵfac = function NzDemoCollapseAccordionComponent_Factory(t) {
    return new (t || NzDemoCollapseAccordionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCollapseAccordionComponent,
    selectors: [["nz-demo-collapse-accordion"]],
    decls: 2,
    vars: 2,
    consts: [["nzAccordion", "", 1, "bg-transparent", 3, "nzBordered"], [3, "class", "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"]],
    template: function NzDemoCollapseAccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseAccordionComponent_nz_collapse_panel_1_Template, 3, 6, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapseComponent],
    styles: ["[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n\n    font-size: 15px;\n\n    line-height: 24px;\n\n    font-weight: 400;\n\n    color: rgb(10 10 10 / .85)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child {\n\n    border-bottom-width: 1px;\n\n    border-style: solid;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-collapse-content > .ant-collapse-content-box {\n\n    padding-left: 1.5rem !important;\n\n    padding-right: 1.5rem !important;\n\n    padding-top: 1.25rem !important;\n\n    padding-bottom: 30px !important\n}\n\n[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n\n    font-size: 9px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07O0lBQUEsZUFBQTs7SUFBQSxpQkFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsd0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLCtCQUFBOztJQUFBLGdDQUFBOztJQUFBLCtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsY0FBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVye1xuICAgICAgQGFwcGx5IHRleHQtMTUgZm9udC1ub3JtYWwgdGV4dC1kYXJrL1suODVdIGRhcms6dGV4dC13aGl0ZS9bLjg3XTtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UtYm9yZGVybGVzcyA+IC5hbnQtY29sbGFwc2UtaXRlbTpsYXN0LWNoaWxke1xuICAgICAgQGFwcGx5IGJvcmRlci1iLTEgYm9yZGVyLXJlZ3VsYXIgZGFyazpib3JkZXItd2hpdGUvMTAgYm9yZGVyLXNvbGlkO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZS1jb250ZW50ID4gLmFudC1jb2xsYXBzZS1jb250ZW50LWJveHtcbiAgICAgIEBhcHBseSBweC02IHB0LTUgcGItWzMwcHhdICN7IWltcG9ydGFudH07XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlID4gLmFudC1jb2xsYXBzZS1pdGVtID4gLmFudC1jb2xsYXBzZS1oZWFkZXIgLmFudC1jb2xsYXBzZS1hcnJvd3tcbiAgICAgIEBhcHBseSB0ZXh0LVs5cHhdIHRleHQtbGlnaHQgZGFyazp0ZXh0LXdoaXRlLzYwO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40269:
/*!**********************************************!*\
  !*** ./src/app/components/collapse/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseBasicComponent: () => (/* binding */ NzDemoCollapseBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);



function NzDemoCollapseBasicComponent_nz_collapse_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.collapsePanelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzDisabled", panel_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");
  }
}
class NzDemoCollapseBasicComponent {
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
  panels = [{
    active: true,
    name: 'This is panel header 1',
    disabled: false
  }, {
    active: false,
    disabled: false,
    name: 'This is panel header 2'
  }, {
    active: false,
    disabled: true,
    name: 'This is panel header 3'
  }];
  static ɵfac = function NzDemoCollapseBasicComponent_Factory(t) {
    return new (t || NzDemoCollapseBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCollapseBasicComponent,
    selectors: [["nz-demo-collapse-basic"]],
    decls: 2,
    vars: 2,
    consts: [[1, "bg-transparent", 3, "nzBordered"], [3, "class", "nzHeader", "nzActive", "nzDisabled", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"]],
    template: function NzDemoCollapseBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseBasicComponent_nz_collapse_panel_1_Template, 3, 7, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapseComponent],
    styles: ["[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n\n    font-size: 15px;\n\n    line-height: 24px;\n\n    font-weight: 400;\n\n    color: rgb(10 10 10 / .85)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child {\n\n    border-bottom-width: 1px;\n\n    border-style: solid;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-collapse-content > .ant-collapse-content-box {\n\n    padding-left: 1.5rem !important;\n\n    padding-right: 1.5rem !important;\n\n    padding-top: 1.25rem !important;\n\n    padding-bottom: 30px !important\n}\n\n[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n\n    font-size: 9px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-collapse .ant-collapse-item-disabled {\n\n    opacity: .7\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS9iYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSzs7SUFBQSxlQUFBOztJQUFBLGlCQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSx3QkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsK0JBQUE7O0lBQUEsZ0NBQUE7O0lBQUEsK0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxjQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHRDs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVye1xuICAgICBAYXBwbHkgdGV4dC0xNSBmb250LW5vcm1hbCB0ZXh0LWRhcmsvWy44NV0gZGFyazp0ZXh0LXdoaXRlL1suODddO1xuICAgfVxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UtYm9yZGVybGVzcyA+IC5hbnQtY29sbGFwc2UtaXRlbTpsYXN0LWNoaWxke1xuICAgICBAYXBwbHkgYm9yZGVyLWItMSBib3JkZXItcmVndWxhciBkYXJrOmJvcmRlci13aGl0ZS8xMCBib3JkZXItc29saWQ7XG4gICB9XG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZS1jb250ZW50ID4gLmFudC1jb2xsYXBzZS1jb250ZW50LWJveHtcbiAgICAgQGFwcGx5IHB4LTYgcHQtNSBwYi1bMzBweF0gI3shaW1wb3J0YW50fTtcbiAgIH1cbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlID4gLmFudC1jb2xsYXBzZS1pdGVtID4gLmFudC1jb2xsYXBzZS1oZWFkZXIgLmFudC1jb2xsYXBzZS1hcnJvd3tcbiAgICAgQGFwcGx5IHRleHQtWzlweF0gdGV4dC1saWdodCBkYXJrOnRleHQtd2hpdGUvNjA7XG4gICB9XG4gICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZSAuYW50LWNvbGxhcHNlLWl0ZW0tZGlzYWJsZWR7XG4gICAgQGFwcGx5IG9wYWNpdHktWy43XVxuICAgfVxuICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 87536:
/*!***************************************************!*\
  !*** ./src/app/components/collapse/borderless.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseBorderlessComponent: () => (/* binding */ NzDemoCollapseBorderlessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);



function NzDemoCollapseBorderlessComponent_nz_collapse_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.collapsePanelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
  }
}
class NzDemoCollapseBorderlessComponent {
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px]';
  panels = [{
    active: true,
    disabled: false,
    name: 'This is panel header 1',
    childPannel: [{
      active: false,
      disabled: true,
      name: 'This is panel header 1-1'
    }]
  }, {
    active: false,
    disabled: true,
    name: 'This is panel header 2'
  }, {
    active: false,
    disabled: false,
    name: 'This is panel header 3'
  }];
  static ɵfac = function NzDemoCollapseBorderlessComponent_Factory(t) {
    return new (t || NzDemoCollapseBorderlessComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCollapseBorderlessComponent,
    selectors: [["nz-demo-collapse-borderless"]],
    decls: 2,
    vars: 2,
    consts: [[1, "bg-transparent", 3, "nzBordered"], [3, "class", "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"]],
    template: function NzDemoCollapseBorderlessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseBorderlessComponent_nz_collapse_panel_1_Template, 3, 6, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapseComponent],
    styles: ["[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n\n    font-size: 15px;\n\n    line-height: 24px;\n\n    font-weight: 400;\n\n    color: rgb(10 10 10 / .85)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-collapse-content > .ant-collapse-content-box {\n\n    padding-left: 1.5rem !important;\n\n    padding-right: 1.5rem !important;\n\n    padding-top: 1.25rem !important;\n\n    padding-bottom: 30px !important\n}\n\n[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n\n    font-size: 9px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item {\n\n    border-bottom-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS9ib3JkZXJsZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLCtCQUFBOztJQUFBLGdDQUFBOztJQUFBLCtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsY0FBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsd0JBQUE7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlID4gLmFudC1jb2xsYXBzZS1pdGVtID4gLmFudC1jb2xsYXBzZS1oZWFkZXJ7XG4gICAgQGFwcGx5IHRleHQtMTUgZm9udC1ub3JtYWwgdGV4dC1kYXJrL1suODVdIGRhcms6dGV4dC13aGl0ZS9bLjg3XTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZS1jb250ZW50ID4gLmFudC1jb2xsYXBzZS1jb250ZW50LWJveHtcbiAgICBAYXBwbHkgcHgtNiBwdC01IHBiLVszMHB4XSAjeyFpbXBvcnRhbnR9O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlID4gLmFudC1jb2xsYXBzZS1pdGVtID4gLmFudC1jb2xsYXBzZS1oZWFkZXIgLmFudC1jb2xsYXBzZS1hcnJvd3tcbiAgICBAYXBwbHkgdGV4dC1bOXB4XSB0ZXh0LWxpZ2h0IGRhcms6dGV4dC13aGl0ZS82MDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZS1ib3JkZXJsZXNzID4gLmFudC1jb2xsYXBzZS1pdGVte1xuICAgIEBhcHBseSBib3JkZXItYiBib3JkZXItcmVndWxhciBkYXJrOmJvcmRlci13aGl0ZS8xMDtcbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37460:
/*!***********************************************!*\
  !*** ./src/app/components/collapse/custom.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseCustomComponent: () => (/* binding */ NzDemoCollapseCustomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);




function NzDemoCollapseCustomComponent_nz_collapse_panel_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
  }
  if (rf & 2) {
    const active_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", active_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRotate", _r3.nzActive ? 90 : -90);
  }
}
function NzDemoCollapseCustomComponent_nz_collapse_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2, 3)(2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoCollapseCustomComponent_nz_collapse_panel_1_ng_template_4_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const isFirst_r2 = ctx.first;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("ngStyle", panel_r1.customStyle)("nzExpandedIcon", !isFirst_r2 && (panel_r1.icon || _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " content");
  }
}
class NzDemoCollapseCustomComponent {
  panels = [{
    active: true,
    disabled: false,
    name: 'This is panel header 1',
    customStyle: {
      background: '#f7f7f7',
      'border-radius': '4px',
      'margin-bottom': '24px',
      border: '0px'
    }
  }, {
    active: false,
    disabled: true,
    name: 'This is panel header 2',
    icon: 'double-right',
    customStyle: {
      background: '#f7f7f7',
      'border-radius': '4px',
      'margin-bottom': '24px',
      border: '0px'
    }
  }, {
    active: false,
    disabled: false,
    name: 'This is panel header 3',
    customStyle: {
      background: '#f7f7f7',
      'border-radius': '4px',
      'margin-bottom': '24px',
      border: '0px'
    }
  }];
  static ɵfac = function NzDemoCollapseCustomComponent_Factory(t) {
    return new (t || NzDemoCollapseCustomComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCollapseCustomComponent,
    selectors: [["nz-demo-collapse-custom"]],
    decls: 2,
    vars: 2,
    consts: [[3, "nzBordered"], ["class", "bg-regularBG dark:bg-white/10", 3, "nzHeader", "nzActive", "ngStyle", "nzExpandedIcon", 4, "ngFor", "ngForOf"], [1, "bg-regularBG", "dark:bg-white/10", 3, "nzHeader", "nzActive", "ngStyle", "nzExpandedIcon"], ["p", ""], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"], ["expandedIcon", ""], ["nz-icon", "", "nzType", "caret-right", 1, "ant-collapse-arrow", 3, "nzRotate"]],
    template: function NzDemoCollapseCustomComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseCustomComponent_nz_collapse_panel_1_Template, 6, 5, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapseComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconDirective],
    styles: ["[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n\n    font-size: 15px;\n\n    line-height: 24px;\n\n    font-weight: 400;\n\n    color: rgb(10 10 10 / .85)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-collapse-content > .ant-collapse-content-box {\n\n    padding-left: 1.5rem !important;\n\n    padding-right: 1.5rem !important;\n\n    padding-top: 1.25rem !important;\n\n    padding-bottom: 30px !important\n}\n\n[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n\n    font-size: 9px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-collapse-borderless {\n\n    background-color: transparent\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS9jdXN0b20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07O0lBQUEsZUFBQTs7SUFBQSxpQkFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsK0JBQUE7O0lBQUEsZ0NBQUE7O0lBQUEsK0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxjQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UgPiAuYW50LWNvbGxhcHNlLWl0ZW0gPiAuYW50LWNvbGxhcHNlLWhlYWRlcntcbiAgICAgIEBhcHBseSB0ZXh0LTE1IGZvbnQtbm9ybWFsIHRleHQtZGFyay9bLjg1XSBkYXJrOnRleHQtd2hpdGUvWy44N107XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlLWNvbnRlbnQgPiAuYW50LWNvbGxhcHNlLWNvbnRlbnQtYm94e1xuICAgICAgQGFwcGx5IHB4LTYgcHQtNSBwYi1bMzBweF0gI3shaW1wb3J0YW50fTtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UgPiAuYW50LWNvbGxhcHNlLWl0ZW0gPiAuYW50LWNvbGxhcHNlLWhlYWRlciAuYW50LWNvbGxhcHNlLWFycm93e1xuICAgICAgQGFwcGx5IHRleHQtWzlweF0gdGV4dC1saWdodCBkYXJrOnRleHQtd2hpdGUvNjA7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlLWJvcmRlcmxlc3N7XG4gICAgICBAYXBwbHkgYmctdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 64129:
/*!*****************************************************!*\
  !*** ./src/app/components/collapse/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseEnComponent: () => (/* binding */ NzDemoCollapseEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ 23311);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ 40269);
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./borderless */ 87536);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom */ 37460);
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mix */ 83968);
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noarrow */ 11368);








class NzDemoCollapseEnComponent {
  static ɵfac = function NzDemoCollapseEnComponent_Factory(t) {
    return new (t || NzDemoCollapseEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NzDemoCollapseEnComponent,
    selectors: [["nz-demo-collapse"]],
    decls: 39,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoCollapseEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "nz-demo-collapse-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Nested panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "nz-demo-collapse-mix");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "No Arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "nz-demo-collapse-noarrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "div", 3)(23, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "nz-demo-collapse-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 2)(28, "div", 3)(29, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Borderless");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "nz-demo-collapse-borderless");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 2)(34, "div", 3)(35, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Custom Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "nz-demo-collapse-custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, _accordion__WEBPACK_IMPORTED_MODULE_0__.NzDemoCollapseAccordionComponent, _basic__WEBPACK_IMPORTED_MODULE_1__.NzDemoCollapseBasicComponent, _borderless__WEBPACK_IMPORTED_MODULE_2__.NzDemoCollapseBorderlessComponent, _custom__WEBPACK_IMPORTED_MODULE_3__.NzDemoCollapseCustomComponent, _mix__WEBPACK_IMPORTED_MODULE_4__.NzDemoCollapseMixComponent, _noarrow__WEBPACK_IMPORTED_MODULE_5__.NzDemoCollapseNoarrowComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 64562:
/*!*****************************************************!*\
  !*** ./src/app/components/collapse/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseModule: () => (/* binding */ NzDemoCollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 8112);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ 23311);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 40269);
/* harmony import */ var _borderless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./borderless */ 87536);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom */ 37460);
/* harmony import */ var _mix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mix */ 83968);
/* harmony import */ var _noarrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./noarrow */ 11368);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 64129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);














class NzDemoCollapseModule {
  static ɵfac = function NzDemoCollapseModule_Factory(t) {
    return new (t || NzDemoCollapseModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: NzDemoCollapseModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoCollapseEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoCollapseModule, {
    declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__.NzDemoCollapseAccordionComponent, _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoCollapseBasicComponent, _borderless__WEBPACK_IMPORTED_MODULE_4__.NzDemoCollapseBorderlessComponent, _custom__WEBPACK_IMPORTED_MODULE_5__.NzDemoCollapseCustomComponent, _mix__WEBPACK_IMPORTED_MODULE_6__.NzDemoCollapseMixComponent, _noarrow__WEBPACK_IMPORTED_MODULE_7__.NzDemoCollapseNoarrowComponent, _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoCollapseEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__.NzCollapseModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 83968:
/*!********************************************!*\
  !*** ./src/app/components/collapse/mix.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseMixComponent: () => (/* binding */ NzDemoCollapseMixComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);



function NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_nz_collapse_panel_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const childPanel_r4 = ctx.$implicit;
    const panel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.collapsePanelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", childPanel_r4.name)("nzActive", childPanel_r4.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", panel_r1.name, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");
  }
}
function NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "nz-collapse", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_nz_collapse_panel_2_Template, 3, 6, "nz-collapse-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const panel_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", panel_r1.childPanel);
  }
}
function NzDemoCollapseMixComponent_nz_collapse_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoCollapseMixComponent_nz_collapse_panel_1_div_3_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.collapsePanelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](panel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", panel_r1.childPanel && panel_r1.childPanel.length > 0);
  }
}
class NzDemoCollapseMixComponent {
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
  panels = [{
    active: true,
    disabled: false,
    name: 'This is panel header 1',
    childPanel: [{
      active: true,
      name: 'This is panel header 1-1'
    }, {
      active: false,
      name: 'This is panel header 1-2'
    }]
  }, {
    active: false,
    disabled: true,
    name: 'This is panel header 2'
  }, {
    active: false,
    disabled: false,
    name: 'This is panel header 3'
  }];
  static ɵfac = function NzDemoCollapseMixComponent_Factory(t) {
    return new (t || NzDemoCollapseMixComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCollapseMixComponent,
    selectors: [["nz-demo-collapse-mix"]],
    decls: 2,
    vars: 2,
    consts: [[1, "bg-transparent", 3, "nzBordered"], [3, "class", "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"], [4, "ngIf"], [1, "bg-transparent", "mt-[20px]", 3, "nzBordered"]],
    template: function NzDemoCollapseMixComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseMixComponent_nz_collapse_panel_1_Template, 4, 7, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapseComponent],
    styles: ["[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n\n    font-size: 15px;\n\n    line-height: 24px;\n\n    font-weight: 400;\n\n    color: rgb(10 10 10 / .85)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child {\n\n    border-bottom-width: 1px;\n\n    border-style: solid;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-collapse-content > .ant-collapse-content-box {\n\n    padding-left: 1.5rem !important;\n\n    padding-right: 1.5rem !important;\n\n    padding-top: 1.25rem !important;\n\n    padding-bottom: 30px !important\n}\n\n[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n\n    font-size: 9px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS9taXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7O0lBQUEsZUFBQTs7SUFBQSxpQkFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsd0JBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLCtCQUFBOztJQUFBLGdDQUFBOztJQUFBLCtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsY0FBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UgPiAuYW50LWNvbGxhcHNlLWl0ZW0gPiAuYW50LWNvbGxhcHNlLWhlYWRlcntcbiAgICBAYXBwbHkgdGV4dC0xNSBmb250LW5vcm1hbCB0ZXh0LWRhcmsvWy44NV0gZGFyazp0ZXh0LXdoaXRlL1suODddO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlLWJvcmRlcmxlc3MgPiAuYW50LWNvbGxhcHNlLWl0ZW06bGFzdC1jaGlsZHtcbiAgICBAYXBwbHkgYm9yZGVyLWItMSBib3JkZXItcmVndWxhciBkYXJrOmJvcmRlci13aGl0ZS8xMCBib3JkZXItc29saWQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UtY29udGVudCA+IC5hbnQtY29sbGFwc2UtY29udGVudC1ib3h7XG4gICAgQGFwcGx5IHB4LTYgcHQtNSBwYi1bMzBweF0gI3shaW1wb3J0YW50fTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZSA+IC5hbnQtY29sbGFwc2UtaXRlbSA+IC5hbnQtY29sbGFwc2UtaGVhZGVyIC5hbnQtY29sbGFwc2UtYXJyb3d7XG4gICAgQGFwcGx5IHRleHQtWzlweF0gdGV4dC1saWdodCBkYXJrOnRleHQtd2hpdGUvNjA7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8112:
/*!***********************************************!*\
  !*** ./src/app/components/collapse/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);


const moduleList = [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_0__.NzCollapseModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule];

/***/ }),

/***/ 11368:
/*!************************************************!*\
  !*** ./src/app/components/collapse/noarrow.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCollapseNoarrowComponent: () => (/* binding */ NzDemoCollapseNoarrowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 49861);



function NzDemoCollapseNoarrowComponent_nz_collapse_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const panel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.collapsePanelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", panel_r1.name)("nzActive", panel_r1.active)("nzDisabled", panel_r1.disabled)("nzShowArrow", panel_r1.arrow);
  }
}
class NzDemoCollapseNoarrowComponent {
  collapsePanelClass = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
  panels = [{
    active: true,
    name: 'This is panel header 1',
    arrow: true
  }, {
    active: false,
    arrow: false,
    name: 'This is panel header 2'
  }];
  static ɵfac = function NzDemoCollapseNoarrowComponent_Factory(t) {
    return new (t || NzDemoCollapseNoarrowComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCollapseNoarrowComponent,
    selectors: [["nz-demo-collapse-noarrow"]],
    decls: 2,
    vars: 2,
    consts: [[1, "bg-transparent", 3, "nzBordered"], [3, "class", "nzHeader", "nzActive", "nzDisabled", "nzShowArrow", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled", "nzShowArrow"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"]],
    template: function NzDemoCollapseNoarrowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCollapseNoarrowComponent_nz_collapse_panel_1_Template, 3, 7, "nz-collapse-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzBordered", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_2__.NzCollapseComponent],
    styles: ["[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header {\n\n    font-size: 15px;\n\n    line-height: 24px;\n\n    font-weight: 400;\n\n    color: rgb(10 10 10 / .85)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child {\n\n    border-bottom-width: 1px;\n\n    border-style: solid;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse-borderless > .ant-collapse-item:last-child) {\n\n    border-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-collapse-content > .ant-collapse-content-box {\n\n    padding-left: 1.5rem !important;\n\n    padding-right: 1.5rem !important;\n\n    padding-top: 1.25rem !important;\n\n    padding-bottom: 30px !important\n}\n\n[_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {\n\n    font-size: 9px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2xsYXBzZS9ub2Fycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztJQUFBLGVBQUE7O0lBQUEsaUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLHdCQUFBOztJQUFBLG1CQUFBOztJQUFBLHNCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSwrQkFBQTs7SUFBQSxnQ0FBQTs7SUFBQSwrQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGNBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlID4gLmFudC1jb2xsYXBzZS1pdGVtID4gLmFudC1jb2xsYXBzZS1oZWFkZXJ7XG4gICAgQGFwcGx5IHRleHQtMTUgZm9udC1ub3JtYWwgdGV4dC1kYXJrL1suODVdIGRhcms6dGV4dC13aGl0ZS9bLjg3XTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb2xsYXBzZS1ib3JkZXJsZXNzID4gLmFudC1jb2xsYXBzZS1pdGVtOmxhc3QtY2hpbGR7XG4gICAgQGFwcGx5IGJvcmRlci1iLTEgYm9yZGVyLXJlZ3VsYXIgZGFyazpib3JkZXItd2hpdGUvMTAgYm9yZGVyLXNvbGlkO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbGxhcHNlLWNvbnRlbnQgPiAuYW50LWNvbGxhcHNlLWNvbnRlbnQtYm94e1xuICAgIEBhcHBseSBweC02IHB0LTUgcGItWzMwcHhdICN7IWltcG9ydGFudH07XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UgPiAuYW50LWNvbGxhcHNlLWl0ZW0gPiAuYW50LWNvbGxhcHNlLWhlYWRlciAuYW50LWNvbGxhcHNlLWFycm93e1xuICAgIEBhcHBseSB0ZXh0LVs5cHhdIHRleHQtbGlnaHQgZGFyazp0ZXh0LXdoaXRlLzYwO1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_collapse_index_module_ts.js.map