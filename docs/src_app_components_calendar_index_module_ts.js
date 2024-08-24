"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_calendar_index_module_ts"],{

/***/ 37835:
/*!**********************************************!*\
  !*** ./src/app/components/calendar/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCalendarBasicComponent: () => (/* binding */ NzDemoCalendarBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 62207);



class NzDemoCalendarBasicComponent {
  date = new Date(2012, 11, 21);
  mode = 'month';
  panelChange(change) {
    console.log(change.date, change.mode);
  }
  static ɵfac = function NzDemoCalendarBasicComponent_Factory(t) {
    return new (t || NzDemoCalendarBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCalendarBasicComponent,
    selectors: [["nz-demo-calendar-basic"]],
    decls: 1,
    vars: 2,
    consts: [[3, "ngModel", "nzMode", "ngModelChange", "nzModeChange", "nzPanelChange"]],
    template: function NzDemoCalendarBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCalendarBasicComponent_Template_nz_calendar_ngModelChange_0_listener($event) {
          return ctx.date = $event;
        })("nzModeChange", function NzDemoCalendarBasicComponent_Template_nz_calendar_nzModeChange_0_listener($event) {
          return ctx.mode = $event;
        })("nzPanelChange", function NzDemoCalendarBasicComponent_Template_nz_calendar_nzPanelChange_0_listener($event) {
          return ctx.panelChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("nzMode", ctx.mode);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__.NzCalendarComponent],
    styles: ["\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9iYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSSxzQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgLyogc3JjYXNzZXRzc2Nzc2VsZW1lbnRjYWxlbmRhci5zY3NzICovXG5cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 93768:
/*!*****************************************************!*\
  !*** ./src/app/components/calendar/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCalendarEnComponent: () => (/* binding */ NzDemoCalendarEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 37835);
/* harmony import */ var _notice_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-calendar */ 67586);




class NzDemoCalendarEnComponent {
  static ɵfac = function NzDemoCalendarEnComponent_Factory(t) {
    return new (t || NzDemoCalendarEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzDemoCalendarEnComponent,
    selectors: [["nz-demo-calendar"]],
    decls: 15,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "border-b-1", "border-normal", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoCalendarEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "nz-demo-calendar-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "nz-demo-calendar-notice-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoCalendarBasicComponent, _notice_calendar__WEBPACK_IMPORTED_MODULE_1__.NzDemoCalendarNoticeCalendarComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 70616:
/*!*****************************************************!*\
  !*** ./src/app/components/calendar/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCalendarModule: () => (/* binding */ NzDemoCalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 59059);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 37835);
/* harmony import */ var _notice_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-calendar */ 67586);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en.component */ 93768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 62207);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/alert */ 73267);











class NzDemoCalendarModule {
  static ɵfac = function NzDemoCalendarModule_Factory(t) {
    return new (t || NzDemoCalendarModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: NzDemoCalendarModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_4__.NzDemoCalendarEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NzDemoCalendarModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoCalendarBasicComponent, _notice_calendar__WEBPACK_IMPORTED_MODULE_3__.NzDemoCalendarNoticeCalendarComponent, _en_component__WEBPACK_IMPORTED_MODULE_4__.NzDemoCalendarEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_7__.NzCalendarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_9__.NzAlertModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 59059:
/*!***********************************************!*\
  !*** ./src/app/components/calendar/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 62207);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/alert */ 73267);



const moduleList = [ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_0__.NzCalendarModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_1__.NzBadgeModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__.NzAlertModule];

/***/ }),

/***/ 67586:
/*!********************************************************!*\
  !*** ./src/app/components/calendar/notice-calendar.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCalendarNoticeCalendarComponent: () => (/* binding */ NzDemoCalendarNoticeCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 62207);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);




function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", item_r7.type)("nzText", item_r7.content);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_li_1_Template, 2, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listDataMap.eight);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", item_r9.type)("nzText", item_r9.content);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_li_1_Template, 2, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.listDataMap.ten);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", item_r11.type)("nzText", item_r11.content);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_li_1_Template, 2, 2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.listDataMap.eleven);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoCalendarNoticeCalendarComponent_ul_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", date_r2.getDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 11);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Backlog number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const monthData_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](monthData_r14);
  }
}
function NzDemoCalendarNoticeCalendarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ng_container_2_div_1_Template, 5, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const month_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getMonthData(month_r12));
  }
}
class NzDemoCalendarNoticeCalendarComponent {
  listDataMap = {
    eight: [{
      type: 'warning',
      content: 'This is warning event.'
    }, {
      type: 'success',
      content: 'This is usual event.'
    }],
    ten: [{
      type: 'warning',
      content: 'This is warning event.'
    }, {
      type: 'success',
      content: 'This is usual event.'
    }, {
      type: 'error',
      content: 'This is error event.'
    }],
    eleven: [{
      type: 'warning',
      content: 'This is warning event'
    }, {
      type: 'success',
      content: 'This is very long usual event........'
    }, {
      type: 'error',
      content: 'This is error event 1.'
    }, {
      type: 'error',
      content: 'This is error event 2.'
    }, {
      type: 'error',
      content: 'This is error event 3.'
    }, {
      type: 'error',
      content: 'This is error event 4.'
    }]
  };
  getMonthData(date) {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
  static ɵfac = function NzDemoCalendarNoticeCalendarComponent_Factory(t) {
    return new (t || NzDemoCalendarNoticeCalendarComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCalendarNoticeCalendarComponent,
    selectors: [["nz-demo-calendar-notice-calendar"]],
    decls: 3,
    vars: 0,
    consts: [["class", "events", 4, "nzDateCell"], [4, "nzMonthCell"], [1, "events"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf"], [3, "nzStatus", "nzText"], ["class", "notes-month", 4, "ngIf"], [1, "notes-month"]],
    template: function NzDemoCalendarNoticeCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCalendarNoticeCalendarComponent_ul_1_Template, 5, 4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCalendarNoticeCalendarComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__.NzCalendarComponent, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__.NzDateCellDirective, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_2__.NzMonthCellDirective, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__.NzBadgeComponent],
    styles: [".events[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.events[_ngcontent-%COMP%]   .ant-badge-status[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n\n.notes-month[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 28px;\n}\n\n.notes-month[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jYWxlbmRhci9ub3RpY2UtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQVI7O0FBR007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUdNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQVI7O0FBR007RUFDRSxlQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5ldmVudHMge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIC5ldmVudHMgLmFudC1iYWRnZS1zdGF0dXMge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgLm5vdGVzLW1vbnRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG5cbiAgICAgIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_calendar_index_module_ts.js.map