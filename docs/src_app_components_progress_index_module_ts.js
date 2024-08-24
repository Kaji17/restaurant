"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_progress_index_module_ts"],{

/***/ 92278:
/*!*******************************************************!*\
  !*** ./src/app/components/progress/circle-dynamic.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressCircleDynamicComponent: () => (/* binding */ NzDemoProgressCircleDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);






class NzDemoProgressCircleDynamicComponent {
  percent = 0;
  increase() {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }
  decline() {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
  static ɵfac = function NzDemoProgressCircleDynamicComponent_Factory(t) {
    return new (t || NzDemoProgressCircleDynamicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressCircleDynamicComponent,
    selectors: [["nz-demo-progress-circle-dynamic"]],
    decls: 6,
    vars: 1,
    consts: [["nzType", "circle", 3, "nzPercent"], ["nz-button", "", 1, "flex", "items-center", "justify-center", "dark:bg-white/10", "dark:border-white/10", "dark:text-white/[.87]", 3, "click"], ["nz-icon", "", "nzType", "minus"], ["nz-icon", "", "nzType", "plus"]],
    template: function NzDemoProgressCircleDynamicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-button-group")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressCircleDynamicComponent_Template_button_click_2_listener() {
          return ctx.decline();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressCircleDynamicComponent_Template_button_click_4_listener() {
          return ctx.increase();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.percent);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective],
    styles: ["nz-progress[_ngcontent-%COMP%] {\n    margin-right: auto;\n    margin-inline-end: 8px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9jaXJjbGUtZHluYW1pYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtJQUFBLGtCQUFBO0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgbnotcHJvZ3Jlc3Mge1xuICAgICAgICBAYXBwbHkgbXItYXV0byBtZS1bOHB4XTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 79157:
/*!****************************************************!*\
  !*** ./src/app/components/progress/circle-mini.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressCircleMiniComponent: () => (/* binding */ NzDemoProgressCircleMiniComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressCircleMiniComponent {
  static ɵfac = function NzDemoProgressCircleMiniComponent_Factory(t) {
    return new (t || NzDemoProgressCircleMiniComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressCircleMiniComponent,
    selectors: [["nz-demo-progress-circle-mini"]],
    decls: 3,
    vars: 6,
    consts: [["nzType", "circle", 3, "nzPercent", "nzWidth"], ["nzType", "circle", "nzStatus", "exception", 3, "nzPercent", "nzWidth"]],
    template: function NzDemoProgressCircleMiniComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75)("nzWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70)("nzWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzWidth", 80);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    styles: ["nz-progress[_ngcontent-%COMP%] {\n    margin-right: auto;\n    margin-inline-end: 8px;\n    margin-bottom: 8px;\n    display: inline-block\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9jaXJjbGUtbWluaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtJQUFBLGtCQUFBO0lBQUEsc0JBQUE7SUFBQSxrQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXByb2dyZXNzIHtcbiAgICAgICAgQGFwcGx5IG1yLWF1dG8gbWUtWzhweF0gbWItWzhweF0gaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 39222:
/*!***********************************************!*\
  !*** ./src/app/components/progress/circle.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressCircleComponent: () => (/* binding */ NzDemoProgressCircleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressCircleComponent {
  static ɵfac = function NzDemoProgressCircleComponent_Factory(t) {
    return new (t || NzDemoProgressCircleComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressCircleComponent,
    selectors: [["nz-demo-progress-circle"]],
    decls: 3,
    vars: 3,
    consts: [["nzType", "circle", 1, "text-primary", 3, "nzPercent"], ["nzType", "circle", "nzStatus", "exception", 1, "text-danger", 3, "nzPercent"], ["nzType", "circle", 1, "text-success", 3, "nzPercent"]],
    template: function NzDemoProgressCircleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    styles: ["nz-progress[_ngcontent-%COMP%] {\n\n    margin-right: auto;\n\n    margin-inline-end: 8px;\n\n    margin-bottom: 8px;\n\n    display: inline-block\n}\n\n[_nghost-%COMP%]     nz-progress .ant-progress {\n\n    color: currentColor\n}\n\n[_nghost-%COMP%]     nz-progress .ant-progress-bg {\n\n    background-color: currentColor\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7O0lBQUEsa0JBQUE7O0lBQUEsc0JBQUE7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIG56LXByb2dyZXNzIHtcbiAgICAgICAgQGFwcGx5IG1yLWF1dG8gbWUtWzhweF0gbWItWzhweF0gaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIG56LXByb2dyZXNzIC5hbnQtcHJvZ3Jlc3N7XG4gICAgICAgIEBhcHBseSB0ZXh0LWN1cnJlbnQ7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgbnotcHJvZ3Jlc3MgLmFudC1wcm9ncmVzcy1iZ3tcbiAgICAgICAgQGFwcGx5IGJnLWN1cnJlbnQ7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 65871:
/*!**************************************************!*\
  !*** ./src/app/components/progress/dashboard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressDashboardComponent: () => (/* binding */ NzDemoProgressDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressDashboardComponent {
  static ɵfac = function NzDemoProgressDashboardComponent_Factory(t) {
    return new (t || NzDemoProgressDashboardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressDashboardComponent,
    selectors: [["nz-demo-progress-dashboard"]],
    decls: 1,
    vars: 1,
    consts: [["nzType", "dashboard", 3, "nzPercent"]],
    template: function NzDemoProgressDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 82227:
/*!************************************************!*\
  !*** ./src/app/components/progress/dynamic.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressDynamicComponent: () => (/* binding */ NzDemoProgressDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);






class NzDemoProgressDynamicComponent {
  percent = 0;
  increase() {
    this.percent = this.percent + 10;
    if (this.percent > 100) {
      this.percent = 100;
    }
  }
  decline() {
    this.percent = this.percent - 10;
    if (this.percent < 0) {
      this.percent = 0;
    }
  }
  static ɵfac = function NzDemoProgressDynamicComponent_Factory(t) {
    return new (t || NzDemoProgressDynamicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressDynamicComponent,
    selectors: [["nz-demo-progress-dynamic"]],
    decls: 6,
    vars: 1,
    consts: [[3, "nzPercent"], ["nz-button", "", 3, "click"], ["nz-icon", "", "nzType", "minus"], ["nz-icon", "", "nzType", "plus"]],
    template: function NzDemoProgressDynamicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-button-group")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressDynamicComponent_Template_button_click_2_listener() {
          return ctx.decline();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoProgressDynamicComponent_Template_button_click_4_listener() {
          return ctx.increase();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx.percent);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55292:
/*!*****************************************************!*\
  !*** ./src/app/components/progress/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressEnComponent: () => (/* binding */ NzDemoProgressEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 36448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _circle_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-dynamic */ 92278);
/* harmony import */ var _circle_mini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle-mini */ 79157);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle */ 39222);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format */ 94888);
/* harmony import */ var _line_mini__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-mini */ 64924);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line */ 37146);









class NzDemoProgressEnComponent {
  expanded = false;
  codeBoxes;
  goLink(link) {
    if (window) {
      window.location.hash = link;
    }
  }
  expandAllCode() {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => {
      code.nzExpanded = this.expanded;
      code.expandCode(this.expanded);
      code.check();
    });
  }
  static ɵfac = function NzDemoProgressEnComponent_Factory(t) {
    return new (t || NzDemoProgressEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: NzDemoProgressEnComponent,
    selectors: [["nz-demo-progress"]],
    viewQuery: function NzDemoProgressEnComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
      }
    },
    decls: 43,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "h-full"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoProgressEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Progress bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "nz-demo-progress-line");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Circular progress bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "nz-demo-progress-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Mini size progress bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "nz-demo-progress-line-mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Mini size circular progress bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "nz-demo-progress-circle-mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Dynamic circular progress bar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "nz-demo-progress-circle-dynamic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 1)(37, "div", 2)(38, "div", 3)(39, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Custom text format ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "nz-demo-progress-format");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, _circle_dynamic__WEBPACK_IMPORTED_MODULE_1__.NzDemoProgressCircleDynamicComponent, _circle_mini__WEBPACK_IMPORTED_MODULE_2__.NzDemoProgressCircleMiniComponent, _circle__WEBPACK_IMPORTED_MODULE_3__.NzDemoProgressCircleComponent, _format__WEBPACK_IMPORTED_MODULE_4__.NzDemoProgressFormatComponent, _line_mini__WEBPACK_IMPORTED_MODULE_5__.NzDemoProgressLineMiniComponent, _line__WEBPACK_IMPORTED_MODULE_6__.NzDemoProgressLineComponent],
    styles: ["[_nghost-%COMP%]     .ant-progress-bg {\n    height: 8px;\n    border-radius: 100px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9lbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRU07SUFBQSxXQUFBO0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCAuYW50LXByb2dyZXNzLWJne1xuICAgICAgQGFwcGx5IGgtWzhweF0gcm91bmRlZC1bMTAwcHhdO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94888:
/*!***********************************************!*\
  !*** ./src/app/components/progress/format.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressFormatComponent: () => (/* binding */ NzDemoProgressFormatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressFormatComponent {
  formatOne = percent => `${percent} Days`;
  formatTwo = () => `Done`;
  static ɵfac = function NzDemoProgressFormatComponent_Factory(t) {
    return new (t || NzDemoProgressFormatComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressFormatComponent,
    selectors: [["nz-demo-progress-format"]],
    decls: 2,
    vars: 4,
    consts: [["nzType", "circle", 3, "nzPercent", "nzFormat"]],
    template: function NzDemoProgressFormatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 75)("nzFormat", ctx.formatOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzFormat", ctx.formatTwo);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    styles: ["nz-progress[_ngcontent-%COMP%] {\n    margin-right: auto;\n    margin-inline-end: 8px;\n    margin-bottom: 8px;\n    display: inline-block\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7SUFBQSxrQkFBQTtJQUFBLHNCQUFBO0lBQUEsa0JBQUE7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBuei1wcm9ncmVzcyB7XG4gICAgICAgIEBhcHBseSBtci1hdXRvIG1lLVs4cHhdIG1iLVs4cHhdIGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 76081:
/*!*************************************************!*\
  !*** ./src/app/components/progress/gradient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressGradientComponent: () => (/* binding */ NzDemoProgressGradientComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


const _c0 = function () {
  return {
    "0%": "#108ee9",
    "100%": "#87d068"
  };
};
const _c1 = function () {
  return {
    "0%": "#108ee9",
    "50%": "#2db7f5",
    "100%": "#87d068"
  };
};
class NzDemoProgressGradientComponent {
  static ɵfac = function NzDemoProgressGradientComponent_Factory(t) {
    return new (t || NzDemoProgressGradientComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressGradientComponent,
    selectors: [["nz-demo-progress-gradient"]],
    decls: 4,
    vars: 12,
    consts: [[3, "nzPercent", "nzStrokeColor"], ["nzStatus", "active", 3, "nzPercent", "nzStrokeColor"], ["nzType", "circle", 3, "nzPercent", "nzStrokeColor"], ["nzType", "dashboard", 3, "nzPercent", "nzStrokeColor"]],
    template: function NzDemoProgressGradientComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2)(3, "nz-progress", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 99.9)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 99.9)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 90)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    styles: [".ant-progress {\n    margin-right: auto;\n    margin-inline-end: 8px;\n    margin-bottom: 8px;\n    display: inline-block\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9ncmFkaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtJQUFBLGtCQUFBO0lBQUEsc0JBQUE7SUFBQSxrQkFBQTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5hbnQtcHJvZ3Jlc3Mge1xuICAgICAgICBAYXBwbHkgbXItYXV0byBtZS1bOHB4XSBtYi1bOHB4XSBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 90459:
/*!*****************************************************!*\
  !*** ./src/app/components/progress/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressModule: () => (/* binding */ NzDemoProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 75917);
/* harmony import */ var _circle_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle-dynamic */ 92278);
/* harmony import */ var _circle_mini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle-mini */ 79157);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circle */ 39222);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard */ 65871);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic */ 82227);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format */ 94888);
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gradient */ 76081);
/* harmony import */ var _line_mini__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line-mini */ 64924);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line */ 37146);
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./round */ 98630);
/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./segment */ 38709);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step */ 9197);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./en.component */ 55292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);





















class NzDemoProgressModule {
  static ɵfac = function NzDemoProgressModule_Factory(t) {
    return new (t || NzDemoProgressModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: NzDemoProgressModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoProgressEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](NzDemoProgressModule, {
    declarations: [_circle_dynamic__WEBPACK_IMPORTED_MODULE_2__.NzDemoProgressCircleDynamicComponent, _circle_mini__WEBPACK_IMPORTED_MODULE_3__.NzDemoProgressCircleMiniComponent, _circle__WEBPACK_IMPORTED_MODULE_4__.NzDemoProgressCircleComponent, _dashboard__WEBPACK_IMPORTED_MODULE_5__.NzDemoProgressDashboardComponent, _dynamic__WEBPACK_IMPORTED_MODULE_6__.NzDemoProgressDynamicComponent, _format__WEBPACK_IMPORTED_MODULE_7__.NzDemoProgressFormatComponent, _gradient__WEBPACK_IMPORTED_MODULE_8__.NzDemoProgressGradientComponent, _line_mini__WEBPACK_IMPORTED_MODULE_9__.NzDemoProgressLineMiniComponent, _line__WEBPACK_IMPORTED_MODULE_10__.NzDemoProgressLineComponent, _round__WEBPACK_IMPORTED_MODULE_11__.NzDemoProgressRoundComponent, _segment__WEBPACK_IMPORTED_MODULE_12__.NzDemoProgressSegmentComponent, _step__WEBPACK_IMPORTED_MODULE_13__.NzDemoProgressStepComponent, _en_component__WEBPACK_IMPORTED_MODULE_14__.NzDemoProgressEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__.NzProgressModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
  });
})();

/***/ }),

/***/ 64924:
/*!**************************************************!*\
  !*** ./src/app/components/progress/line-mini.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressLineMiniComponent: () => (/* binding */ NzDemoProgressLineMiniComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressLineMiniComponent {
  static ɵfac = function NzDemoProgressLineMiniComponent_Factory(t) {
    return new (t || NzDemoProgressLineMiniComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressLineMiniComponent,
    selectors: [["nz-demo-progress-line-mini"]],
    decls: 6,
    vars: 6,
    consts: [[2, "width", "170px"], ["nzSize", "small", 1, "text-primary", 3, "nzPercent"], ["nzSize", "small", "nzStatus", "active", 1, "text-primary", 3, "nzPercent"], ["nzSize", "small", "nzStatus", "exception", 1, "text-danger", 3, "nzPercent"], ["nzSize", "small", 1, "text-success", 3, "nzPercent"], ["nzSize", "small", 1, "text-primary", 3, "nzPercent", "nzShowInfo"]],
    template: function NzDemoProgressLineMiniComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-progress", 1)(2, "nz-progress", 2)(3, "nz-progress", 3)(4, "nz-progress", 4)(5, "nz-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50)("nzShowInfo", false);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    styles: ["[_nghost-%COMP%]     nz-progress .ant-progress {\n\n    color: currentColor\n}\n\n[_nghost-%COMP%]     nz-progress .ant-progress-bg {\n\n    background-color: currentColor\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9saW5lLW1pbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUs7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICA6aG9zdCA6Om5nLWRlZXAgbnotcHJvZ3Jlc3MgLmFudC1wcm9ncmVzc3tcbiAgICAgQGFwcGx5IHRleHQtY3VycmVudDtcbiAgIH1cbiAgIDpob3N0IDo6bmctZGVlcCBuei1wcm9ncmVzcyAuYW50LXByb2dyZXNzLWJne1xuICAgICBAYXBwbHkgYmctY3VycmVudDtcbiAgIH1cbiAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 37146:
/*!*********************************************!*\
  !*** ./src/app/components/progress/line.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressLineComponent: () => (/* binding */ NzDemoProgressLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressLineComponent {
  static ɵfac = function NzDemoProgressLineComponent_Factory(t) {
    return new (t || NzDemoProgressLineComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressLineComponent,
    selectors: [["nz-demo-progress-line"]],
    decls: 5,
    vars: 6,
    consts: [[1, "mb-[15px]", "flex", "items-center", "text-primary", 3, "nzPercent"], ["nzStatus", "active", 1, "mb-[15px]", "flex", "items-center", "text-primary", 3, "nzPercent"], ["nzStatus", "exception", 1, "mb-[15px]", "flex", "items-center", "text-danger", 3, "nzPercent"], [1, "mb-[15px]", "flex", "items-center", "text-success", 3, "nzPercent"], [1, "text-primary", 3, "nzPercent", "nzShowInfo"]],
    template: function NzDemoProgressLineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2)(3, "nz-progress", 3)(4, "nz-progress", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50)("nzShowInfo", false);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    styles: ["[_nghost-%COMP%]     nz-progress .ant-progress {\n\n    color: currentColor\n}\n\n[_nghost-%COMP%]     nz-progress .ant-progress-bg {\n\n    background-color: currentColor\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9ncmVzcy9saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVNOztJQUFBO0FBQUE7O0FBR0E7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IDo6bmctZGVlcCBuei1wcm9ncmVzcyAuYW50LXByb2dyZXNze1xuICAgICAgQGFwcGx5IHRleHQtY3VycmVudDtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIG56LXByb2dyZXNzIC5hbnQtcHJvZ3Jlc3MtYmd7XG4gICAgICBAYXBwbHkgYmctY3VycmVudDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 75917:
/*!***********************************************!*\
  !*** ./src/app/components/progress/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);



const moduleList = [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_0__.NzProgressModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];

/***/ }),

/***/ 98630:
/*!**********************************************!*\
  !*** ./src/app/components/progress/round.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressRoundComponent: () => (/* binding */ NzDemoProgressRoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressRoundComponent {
  static ɵfac = function NzDemoProgressRoundComponent_Factory(t) {
    return new (t || NzDemoProgressRoundComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressRoundComponent,
    selectors: [["nz-demo-progress-round"]],
    decls: 3,
    vars: 0,
    consts: [["nzStrokeLinecap", "round", "nzPercent", "75"], ["nzStrokeLinecap", "round", "nzType", "circle", "nzPercent", "75"], ["nzStrokeLinecap", "square", "nzType", "dashboard", "nzPercent", "75"]],
    template: function NzDemoProgressRoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38709:
/*!************************************************!*\
  !*** ./src/app/components/progress/segment.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressSegmentComponent: () => (/* binding */ NzDemoProgressSegmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);



class NzDemoProgressSegmentComponent {
  static ɵfac = function NzDemoProgressSegmentComponent_Factory(t) {
    return new (t || NzDemoProgressSegmentComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressSegmentComponent,
    selectors: [["nz-demo-progress-segment"]],
    decls: 3,
    vars: 6,
    consts: [["nz-tooltip", "", "nzTooltipTitle", "3 done / 3 in progress / 4 to do", 3, "nzPercent", "nzSuccessPercent"], ["nz-tooltip", "", "nzTooltipTitle", "3 done / 3 in progress / 4 to do", "nzType", "circle", 3, "nzPercent", "nzSuccessPercent"], ["nz-tooltip", "", "nzTooltipTitle", "3 done / 3 in progress / 4 to do", "nzType", "dashboard", 3, "nzPercent", "nzSuccessPercent"]],
    template: function NzDemoProgressSegmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 1)(2, "nz-progress", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 60)("nzSuccessPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 60)("nzSuccessPercent", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 60)("nzSuccessPercent", 30);
      }
    },
    dependencies: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.NzTooltipDirective, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_2__.NzProgressComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9197:
/*!*********************************************!*\
  !*** ./src/app/components/progress/step.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoProgressStepComponent: () => (/* binding */ NzDemoProgressStepComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);


class NzDemoProgressStepComponent {
  static ɵfac = function NzDemoProgressStepComponent_Factory(t) {
    return new (t || NzDemoProgressStepComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoProgressStepComponent,
    selectors: [["nz-demo-progress-step"]],
    decls: 3,
    vars: 6,
    consts: [["nzStrokeColor", "#1890ff", 3, "nzPercent", "nzSteps"], ["nzStrokeColor", "#1890ff", "nzSize", "small", 3, "nzPercent", "nzSteps"]],
    template: function NzDemoProgressStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-progress", 0)(1, "nz-progress", 0)(2, "nz-progress", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 50)("nzSteps", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 30)("nzSteps", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", 100)("nzSteps", 5);
      }
    },
    dependencies: [ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_1__.NzProgressComponent],
    encapsulation: 2
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_progress_index_module_ts.js.map