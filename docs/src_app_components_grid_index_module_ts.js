"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_grid_index_module_ts"],{

/***/ 64158:
/*!******************************************!*\
  !*** ./src/app/components/grid/basic.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridBasicComponent: () => (/* binding */ NzDemoGridBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);


class NzDemoGridBasicComponent {
  static ɵfac = function NzDemoGridBasicComponent_Factory(t) {
    return new (t || NzDemoGridBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoGridBasicComponent,
    selectors: [["nz-demo-grid-basic"]],
    decls: 21,
    vars: 0,
    consts: [["nz-row", "", 1, "mb-[25px]"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "8"], ["nz-col", "", "nzSpan", "6"]],
    template: function NzDemoGridBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0)(6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "col-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "col-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "col-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0)(13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective],
    styles: ["[_nghost-%COMP%]     .ant-row > div:not(.gutter-row), .ant-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(.gutter-row) {\n\n    height: 50px;\n\n    background-color: rgb(130 49 211 / 0.8);\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1), [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1) {\n\n    height: 50px;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)), :is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkL2Jhc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBLFlBQUE7O0lBQUEsdUNBQUE7O0lBQUEsa0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7O0lBQUEsWUFBQTs7SUFBQSxrQkFBQTs7SUFBQSx3REFBQTs7SUFBQSxrQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOzs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcm93PmRpdjpub3QoLmd1dHRlci1yb3cpLCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KXtcbiAgICAgIEBhcHBseSBiZy1wcmltYXJ5LzgwIGgtWzUwcHhdIGxlYWRpbmctWzUwcHhdIHRleHQtY2VudGVyIHRleHQtZGFyaztcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcm93PmRpdjpub3QoLmd1dHRlci1yb3cpOm50aC1jaGlsZCgybiArIDEpLFxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KTpudGgtY2hpbGQoMm4gKyAxKXtcbiAgICAgIEBhcHBseSBiZy1wcmltYXJ5IGRhcms6YmctcHJpbWFyeSBoLVs1MHB4XSBsZWFkaW5nLVs1MHB4XSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84668:
/*!*************************************************!*\
  !*** ./src/app/components/grid/en.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridEnComponent: () => (/* binding */ NzDemoGridEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 64158);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flex */ 41827);
/* harmony import */ var _gutter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gutter */ 44182);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offset */ 34932);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort */ 44793);







class NzDemoGridEnComponent {
  static ɵfac = function NzDemoGridEnComponent_Factory(t) {
    return new (t || NzDemoGridEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NzDemoGridEnComponent,
    selectors: [["nz-demo-grid"]],
    decls: 36,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoGridEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Basic Grid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "nz-demo-grid-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Grid Gutter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "nz-demo-grid-gutter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Column offset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "nz-demo-grid-offset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Grid sort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "nz-demo-grid-sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Layout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "nz-demo-grid-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoGridBasicComponent, _flex__WEBPACK_IMPORTED_MODULE_1__.NzDemoGridFlexComponent, _gutter__WEBPACK_IMPORTED_MODULE_2__.NzDemoGridGutterComponent, _offset__WEBPACK_IMPORTED_MODULE_3__.NzDemoGridOffsetComponent, _sort__WEBPACK_IMPORTED_MODULE_4__.NzDemoGridSortComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 41827:
/*!*****************************************!*\
  !*** ./src/app/components/grid/flex.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridFlexComponent: () => (/* binding */ NzDemoGridFlexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);



class NzDemoGridFlexComponent {
  static ɵfac = function NzDemoGridFlexComponent_Factory(t) {
    return new (t || NzDemoGridFlexComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoGridFlexComponent,
    selectors: [["nz-demo-grid-flex"]],
    decls: 52,
    vars: 0,
    consts: [["nzOrientation", "left", "nzText", "sub-element align left"], ["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzSpan", "4"], ["nzOrientation", "left", "nzText", "sub-element align center"], ["nz-row", "", "nzJustify", "center"], ["nzOrientation", "left", "nzText", "sub-element align right"], ["nz-row", "", "nzJustify", "end"], ["nzOrientation", "left", "nzText", "sub-element monospaced arrangement"], ["nz-row", "", "nzJustify", "space-between"], ["nzOrientation", "left", "nzText", "sub-element align full"], ["nz-row", "", "nzJustify", "space-around"]],
    template: function NzDemoGridFlexComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6)(23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p")(32, "nz-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8)(34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nz-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10)(44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__.NzDividerComponent],
    styles: ["[_nghost-%COMP%]     .ant-row > div:not(.gutter-row), .ant-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(.gutter-row) {\n\n    height: 50px;\n\n    background-color: rgb(130 49 211 / 0.8);\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1), [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1) {\n\n    height: 50px;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)), :is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity))\n}\n\n[_nghost-%COMP%]     .ant-divider-inner-text {\n\n    text-transform: capitalize;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-divider-inner-text) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-divider-horizontal:after, [_nghost-%COMP%]     .ant-divider-horizontal:before {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-divider-horizontal):after, :is(.dark   [_nghost-%COMP%]     .ant-divider-horizontal):before {\n\n    border-color: rgb(255 255 255 / .12)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkL2ZsZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7O0lBQUEsWUFBQTs7SUFBQSx1Q0FBQTs7SUFBQSxrQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlBOzs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBLHdEQUFBOztJQUFBLGtCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7OztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsMEJBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUlBOzs7SUFBQSxzQkFBQTs7SUFBQTtBQUFBOztBQUFBOzs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIDpob3N0IDo6bmctZGVlcCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KSwgLmFudC1yb3c+ZGl2Om5vdCguZ3V0dGVyLXJvdyl7XG4gICAgQGFwcGx5IGJnLXByaW1hcnkvODAgaC1bNTBweF0gbGVhZGluZy1bNTBweF0gdGV4dC1jZW50ZXIgdGV4dC1kYXJrO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KTpudGgtY2hpbGQoMm4gKyAxKSxcbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcm93PmRpdjpub3QoLmd1dHRlci1yb3cpOm50aC1jaGlsZCgybiArIDEpe1xuICAgIEBhcHBseSBiZy1wcmltYXJ5IGRhcms6YmctcHJpbWFyeSBoLVs1MHB4XSBsZWFkaW5nLVs1MHB4XSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWRpdmlkZXItaW5uZXItdGV4dHtcbiAgICBAYXBwbHkgdGV4dC1kYXJrIGRhcms6dGV4dC13aGl0ZS9bLjg3XSBjYXBpdGFsaXplO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWRpdmlkZXItaG9yaXpvbnRhbDphZnRlcixcbiAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtZGl2aWRlci1ob3Jpem9udGFsOmJlZm9yZXtcbiAgICBAYXBwbHkgYm9yZGVyLXJlZ3VsYXIgZGFyazpib3JkZXItd2hpdGUvWy4xMl07XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 44182:
/*!*******************************************!*\
  !*** ./src/app/components/grid/gutter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridGutterComponent: () => (/* binding */ NzDemoGridGutterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);



const _c0 = function () {
  return {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32
  };
};
const _c1 = function () {
  return [16, 24];
};
class NzDemoGridGutterComponent {
  static ɵfac = function NzDemoGridGutterComponent_Factory(t) {
    return new (t || NzDemoGridGutterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoGridGutterComponent,
    selectors: [["nz-demo-grid-gutter"]],
    decls: 54,
    vars: 21,
    consts: [["nzOrientation", "left", "nzText", "Horizontal"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 1, "gutter-row", 3, "nzSpan"], [1, "inner-box"], ["nzOrientation", "left", "nzText", "Responsive"], ["nzOrientation", "left", "nzText", "Vertical"]],
    template: function NzDemoGridGutterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-divider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2)(20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2)(26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nz-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2)(34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2)(37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2)(40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2)(43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2)(46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2)(49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2)(52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__.NzDividerComponent],
    styles: [".inner-box[_ngcontent-%COMP%] {\n\n    height: 50px;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n[_ngcontent-%COMP%]:is(.dark   .inner-box)[_ngcontent-%COMP%] {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity))\n}\n\n[_nghost-%COMP%]     .ant-divider-inner-text {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-divider-inner-text) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-divider-horizontal:after, [_nghost-%COMP%]     .ant-divider-horizontal:before {\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(241 242 246 / var(--tw-border-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-divider-horizontal):after, :is(.dark   [_nghost-%COMP%]     .ant-divider-horizontal):before {\n\n    border-color: rgb(255 255 255 / .12)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkL2d1dHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBLHdEQUFBOztJQUFBLGtCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFHRjs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBSUE7OztJQUFBLHNCQUFBOztJQUFBO0FBQUE7O0FBQUE7OztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuaW5uZXItYm94IHtcbiAgICAgICAgQGFwcGx5IGJnLXByaW1hcnkgZGFyazpiZy1wcmltYXJ5IGgtWzUwcHhdIGxlYWRpbmctWzUwcHhdIHRleHQtY2VudGVyIHRleHQtd2hpdGU7XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWRpdmlkZXItaW5uZXItdGV4dHtcbiAgICAgIEBhcHBseSB0ZXh0LWRhcmsgZGFyazp0ZXh0LXdoaXRlL1suODddO1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1kaXZpZGVyLWhvcml6b250YWw6YWZ0ZXIsXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtZGl2aWRlci1ob3Jpem9udGFsOmJlZm9yZXtcbiAgICAgIEBhcHBseSBib3JkZXItcmVndWxhciBkYXJrOmJvcmRlci13aGl0ZS9bLjEyXTtcbiAgICB9XG5cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 65404:
/*!*************************************************!*\
  !*** ./src/app/components/grid/index.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridModule: () => (/* binding */ NzDemoGridModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 34977);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 64158);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flex */ 41827);
/* harmony import */ var _gutter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gutter */ 44182);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offset */ 34932);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort */ 44793);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ 84668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57868);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);














class NzDemoGridModule {
  static ɵfac = function NzDemoGridModule_Factory(t) {
    return new (t || NzDemoGridModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: NzDemoGridModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoGridEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NzDemoGridModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoGridBasicComponent, _flex__WEBPACK_IMPORTED_MODULE_3__.NzDemoGridFlexComponent, _gutter__WEBPACK_IMPORTED_MODULE_4__.NzDemoGridGutterComponent, _offset__WEBPACK_IMPORTED_MODULE_5__.NzDemoGridOffsetComponent, _sort__WEBPACK_IMPORTED_MODULE_6__.NzDemoGridSortComponent, _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoGridEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzGridModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_11__.NzSliderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 34977:
/*!*******************************************!*\
  !*** ./src/app/components/grid/module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57868);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);



const moduleList = [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__.NzGridModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__.NzSliderModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__.NzDividerModule];

/***/ }),

/***/ 34932:
/*!*******************************************!*\
  !*** ./src/app/components/grid/offset.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridOffsetComponent: () => (/* binding */ NzDemoGridOffsetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);


class NzDemoGridOffsetComponent {
  static ɵfac = function NzDemoGridOffsetComponent_Factory(t) {
    return new (t || NzDemoGridOffsetComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoGridOffsetComponent,
    selectors: [["nz-demo-grid-offset"]],
    decls: 13,
    vars: 0,
    consts: [["nz-row", "", 1, "mb-[25px]"], ["nz-col", "", "nzSpan", "8"], ["nz-col", "", "nzSpan", "8", "nzOffset", "8"], ["nz-col", "", "nzSpan", "6", "nzOffset", "6"], ["nz-col", "", "nzSpan", "12", "nzOffset", "6"]],
    template: function NzDemoGridOffsetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " col-8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " col-8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " col-6 col-offset-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " col-6 col-offset-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0)(11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " col-12 col-offset-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective],
    styles: ["[_nghost-%COMP%]     .ant-row > div:not(.gutter-row), .ant-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(.gutter-row) {\n\n    height: 50px;\n\n    background-color: rgb(130 49 211 / 0.8);\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1), [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1) {\n\n    height: 50px;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)), :is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkL29mZnNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSzs7SUFBQSxZQUFBOztJQUFBLHVDQUFBOztJQUFBLGtCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBSUE7OztJQUFBLFlBQUE7O0lBQUEsa0JBQUE7O0lBQUEsd0RBQUE7O0lBQUEsa0JBQUE7O0lBQUEsaUJBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcm93PmRpdjpub3QoLmd1dHRlci1yb3cpLCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KXtcbiAgICAgQGFwcGx5IGJnLXByaW1hcnkvODAgaC1bNTBweF0gbGVhZGluZy1bNTBweF0gdGV4dC1jZW50ZXIgdGV4dC1kYXJrO1xuICAgfVxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcm93PmRpdjpub3QoLmd1dHRlci1yb3cpOm50aC1jaGlsZCgybiArIDEpLFxuICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtcm93PmRpdjpub3QoLmd1dHRlci1yb3cpOm50aC1jaGlsZCgybiArIDEpe1xuICAgICBAYXBwbHkgYmctcHJpbWFyeSBkYXJrOmJnLXByaW1hcnkgaC1bNTBweF0gbGVhZGluZy1bNTBweF0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZTtcbiAgIH1cbiAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 44793:
/*!*****************************************!*\
  !*** ./src/app/components/grid/sort.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoGridSortComponent: () => (/* binding */ NzDemoGridSortComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);


class NzDemoGridSortComponent {
  static ɵfac = function NzDemoGridSortComponent_Factory(t) {
    return new (t || NzDemoGridSortComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoGridSortComponent,
    selectors: [["nz-demo-grid-sort"]],
    decls: 5,
    vars: 4,
    consts: [["nz-row", ""], ["nz-col", "", 3, "nzSpan", "nzPush"], ["nz-col", "", 3, "nzSpan", "nzPull"]],
    template: function NzDemoGridSortComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " col-18 col-push-6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " col-6 col-pull-18 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 18)("nzPush", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6)("nzPull", 18);
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__.NzRowDirective],
    styles: ["[_nghost-%COMP%]     .ant-row > div:not(.gutter-row), .ant-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(.gutter-row) {\n\n    height: 50px;\n\n    background-color: rgb(130 49 211 / 0.8);\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(10 10 10 / var(--tw-text-opacity))\n}\n\n[_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1), [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1) {\n\n    height: 50px;\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity));\n\n    text-align: center;\n\n    line-height: 50px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)), :is(.dark   [_nghost-%COMP%]     .ant-row > div:not(.gutter-row):nth-child(2n+1)) {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(130 49 211 / var(--tw-bg-opacity))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ncmlkL3NvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUs7O0lBQUEsWUFBQTs7SUFBQSx1Q0FBQTs7SUFBQSxrQkFBQTs7SUFBQSxpQkFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUlBOzs7SUFBQSxZQUFBOztJQUFBLGtCQUFBOztJQUFBLHdEQUFBOztJQUFBLGtCQUFBOztJQUFBLGlCQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7OztJQUFBLGtCQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KSwgLmFudC1yb3c+ZGl2Om5vdCguZ3V0dGVyLXJvdyl7XG4gICAgIEBhcHBseSBiZy1wcmltYXJ5LzgwIGgtWzUwcHhdIGxlYWRpbmctWzUwcHhdIHRleHQtY2VudGVyIHRleHQtZGFyaztcbiAgIH1cbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KTpudGgtY2hpbGQoMm4gKyAxKSxcbiAgIDpob3N0IDo6bmctZGVlcCAuYW50LXJvdz5kaXY6bm90KC5ndXR0ZXItcm93KTpudGgtY2hpbGQoMm4gKyAxKXtcbiAgICAgQGFwcGx5IGJnLXByaW1hcnkgZGFyazpiZy1wcmltYXJ5IGgtWzUwcHhdIGxlYWRpbmctWzUwcHhdIHRleHQtY2VudGVyIHRleHQtd2hpdGU7XG4gICB9XG4gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_grid_index_module_ts.js.map