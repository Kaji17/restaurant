"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 8809:
/*!***********************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/activeUser.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveUserComponent: () => (/* binding */ ActiveUserComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_pages_table_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/pages/table-data.json */ 15816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);




function ActiveUserComponent_div_16_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15)(1, "td", 16)(2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 22)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/sellers/", product_r3.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.revenue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate2"]("inline text-[13px] px-[11.85px] py-[4.5px] font-medium capitalize rounded-[15px] bg-", product_r3.statusColor, "/10 text-", product_r3.statusColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.status);
  }
}
function ActiveUserComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "nz-table", 9)(3, "thead")(4, "tr")(5, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SELLER NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "COMPANY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "PRODUCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "REVENUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ActiveUserComponent_div_16_tr_16_Template, 16, 11, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r0.sellingTab !== tab_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx_r0.seller[tab_r1.key])("nzFrontPagination", false)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.seller[tab_r1.key]);
  }
}
class ActiveUserComponent {
  //Table Data
  seller;
  tabData;
  constructor() {
    this.seller = _assets_data_pages_table_data_json__WEBPACK_IMPORTED_MODULE_0__.activeUserData;
    this.tabData = [{
      key: 'today',
      label: 'Today'
    }, {
      key: 'week',
      label: 'Week'
    }, {
      key: 'month',
      label: 'Month'
    }];
  }
  //Dropdown Data
  // appItems = items.appItems;
  //Tab
  sellingTab = 'today';
  handleClick(tab) {
    this.sellingTab = tab;
  }
  static ɵfac = function ActiveUserComponent_Factory(t) {
    return new (t || ActiveUserComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ActiveUserComponent,
    selectors: [["nz-activeUser"]],
    decls: 17,
    vars: 7,
    consts: [[1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]"], [1, "mb-0", "inline-flex", "items-center", "py-[16px]", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[18px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "py-[16px]", "flex", "items-center", "gap-[15px]"], [1, "flex", "items-center", "mb-0"], ["type", "button", 3, "click"], [1, "px-[25px]", "pt-0", "pb-[25px]"], [3, "hidden", 4, "ngFor", "ngForOf"], [1, "overflow-x-auto", "w-full"], [1, "text-sm", "rounded-", "[5px]", 3, "nzData", "nzFrontPagination", "nzShowPagination"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-start", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden", "rounded-s-[4px]"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-end", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden", "rounded-e-[4px]"], [1, "bg-white", "dark:bg-[#1b1d2a]"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [1, "ps-0", "pe-4", "py-2.5", "text-start", "last:text-end", "text-dark", "dark:text-white/[.87]", "group-hover:bg-transparent", "text-15", "font-medium", "border-none", "before:hidden", "rounded-s-[4px]"], [1, "flex", "items-center"], [1, "me-2.5", "w-[34px]", "h-[34px]"], [1, "min-w-[34px]", "h-[34px]", "rounded-4", 3, "src", "alt"], [1, "font-medium", "capitalize", "text-dark", "dark:text-white/[.87]", "text-15"], [1, "px-4", "py-2.5", "font-normal", "last:text-end", "capitalize", "text-[14px]", "text-dark", "dark:text-white/[.87]", "border-none", "group-hover:bg-transparent"], [1, "ps-4", "pe-4", "py-2.5", "font-normal", "last:text-end", "capitalize", "text-[14px]", "text-dark", "dark:text-white/[.87]", "border-none", "group-hover:bg-transparent", "rounded-e-[4px]"]],
    template: function ActiveUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Active User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4)(6, "li")(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActiveUserComponent_Template_button_click_7_listener() {
          return ctx.handleClick("today");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActiveUserComponent_Template_button_click_10_listener() {
          return ctx.handleClick("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActiveUserComponent_Template_button_click_13_listener() {
          return ctx.handleClick("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ActiveUserComponent_div_16_Template, 17, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "today" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "week" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "month" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTrDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 67991:
/*!*************************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/moneyEarning.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoneyEarningComponent: () => (/* binding */ MoneyEarningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);




const _c0 = ["chart"];
function MoneyEarningComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("xaxis", ctx_r0.chartOptions.xaxis)("yaxis", ctx_r0.chartOptions.yaxis)("dataLabels", ctx_r0.chartOptions.dataLabels)("grid", ctx_r0.chartOptions.grid)("stroke", ctx_r0.chartOptions.stroke)("title", ctx_r0.chartOptions.title)("plotOptions", ctx_r0.chartOptions.plotOptions)("legend", ctx_r0.chartOptions.legend)("tooltip", ctx_r0.chartOptions.tooltip)("states", ctx_r0.chartOptions.states)("colors", ctx_r0.chartOptions.colors)("fill", ctx_r0.chartOptions.fill);
  }
}
function MoneyEarningComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r1.chartOptions2.series)("chart", ctx_r1.chartOptions2.chart)("xaxis", ctx_r1.chartOptions2.xaxis)("yaxis", ctx_r1.chartOptions.yaxis)("dataLabels", ctx_r1.chartOptions.dataLabels)("grid", ctx_r1.chartOptions.grid)("stroke", ctx_r1.chartOptions.stroke)("title", ctx_r1.chartOptions.title)("plotOptions", ctx_r1.chartOptions.plotOptions)("legend", ctx_r1.chartOptions.legend)("tooltip", ctx_r1.chartOptions.tooltip)("states", ctx_r1.chartOptions.states)("colors", ctx_r1.chartOptions2.colors)("fill", ctx_r1.chartOptions.fill);
  }
}
function MoneyEarningComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r2.chartOptions3.series)("chart", ctx_r2.chartOptions3.chart)("xaxis", ctx_r2.chartOptions3.xaxis)("yaxis", ctx_r2.chartOptions.yaxis)("dataLabels", ctx_r2.chartOptions.dataLabels)("grid", ctx_r2.chartOptions.grid)("stroke", ctx_r2.chartOptions.stroke)("title", ctx_r2.chartOptions.title)("plotOptions", ctx_r2.chartOptions.plotOptions)("legend", ctx_r2.chartOptions.legend)("tooltip", ctx_r2.chartOptions.tooltip)("states", ctx_r2.chartOptions.states)("colors", ctx_r2.chartOptions3.colors)("fill", ctx_r2.chartOptions.fill);
  }
}
class MoneyEarningComponent {
  //Tabs
  sellingTab = 'today';
  handleClick(tab) {
    this.sellingTab = tab;
  }
  //Chart Data
  chart;
  chartOptions;
  chartOptions2;
  chartOptions3;
  constructor() {
    this.chartOptions = {
      series: [{
        name: "Total Revenue",
        data: [0, 30, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58]
      }],
      colors: ["#8231D3"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0
        }
      },
      chart: {
        id: "chartLine",
        width: '100%',
        height: 350,
        type: "area",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 3,
        dashArray: 0
      },
      grid: {
        borderColor: '#485e9029',
        strokeDashArray: 5,
        padding: {
          top: 0,
          right: 0,
          bottom: 0
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
          borderRadius: 2
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        x: {
          show: true,
          format: 'dd MMM',
          formatter: undefined
        },
        y: {
          formatter: undefined,
          title: {
            formatter: seriesName => seriesName
          }
        },
        marker: {
          show: true
        },
        style: {
          fontSize: '12px',
          fontFamily: '"Jost", sans-serif'
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({
              length: 12
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        categories: ['2(h)', '4(h)', '6(h)', '8(h)', '10(h)', '12(h)', '14(h)', '16(h)', '18(h)', '20(h)', '22(h)', '24(h)'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: val => {
            return val + "K";
          },
          style: {
            colors: ['#747474'],
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
    this.chartOptions2 = {
      series: [{
        name: "Total Revenue",
        data: [25, 30, 35, 20, 25, 40, 35],
        color: "#7811FF"
      }],
      chart: {
        id: "chartLine2",
        width: '100%',
        height: 350,
        type: "area",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({
              length: 7
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
      // Rest of the chart options...
    };

    this.chartOptions3 = {
      series: [{
        name: "Total Revenue",
        data: [20, 36, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58],
        color: "#7811FF"
      }],
      chart: {
        id: "chartLine3",
        width: '100%',
        height: 350,
        type: "area",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({
              length: 12
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        categories: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
      // Rest of the chart options...
    };
  }

  static ɵfac = function MoneyEarningComponent_Factory(t) {
    return new (t || MoneyEarningComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MoneyEarningComponent,
    selectors: [["nz-moneyEarning"]],
    viewQuery: function MoneyEarningComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    decls: 19,
    vars: 9,
    consts: [[1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]"], [1, "mb-0", "inline-flex", "items-center", "py-[16px]", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[18px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "py-[16px]"], [1, "flex", "items-center", "mb-0"], ["type", "button", 3, "click"], [1, "p-[25px]", "pt-0"], [4, "ngIf"], ["id", "chartLine", "dir", "ltr"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "grid", "stroke", "title", "plotOptions", "legend", "tooltip", "states", "colors", "fill"], ["id", "chartLine2", "dir", "ltr"], ["id", "chartLine3", "dir", "ltr"]],
    template: function MoneyEarningComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Monthly Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4)(6, "li")(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoneyEarningComponent_Template_button_click_7_listener() {
          return ctx.handleClick("today");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoneyEarningComponent_Template_button_click_10_listener() {
          return ctx.handleClick("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoneyEarningComponent_Template_button_click_13_listener() {
          return ctx.handleClick("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MoneyEarningComponent_div_16_Template, 3, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MoneyEarningComponent_div_17_Template, 3, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MoneyEarningComponent_div_18_Template, 3, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sellingTab === "today" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sellingTab === "week" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sellingTab === "month" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellingTab === "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellingTab === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellingTab === "month");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     .apexcharts-text.apexcharts-yaxis-label) {\n    fill: rgb(255 255 255 / .60) !important\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFpbmVyL2Rhc2hib2FyZC9kZW1vVGhyZWUvbW9uZXlFYXJuaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgOmhvc3QgOjpuZy1kZWVwIC5hcGV4Y2hhcnRzLXRleHQuYXBleGNoYXJ0cy15YXhpcy1sYWJlbCB7XG4gICAgQGFwcGx5IGRhcms6ZmlsbC13aGl0ZS9bLjYwXSAjeyFpbXBvcnRhbnR9O1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 20340:
/*!*********************************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/overviewListVertical.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewListVerticalComponent: () => (/* binding */ OverviewListVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ 21291);




function OverviewListVerticalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div")(7, "h4", 6)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flex justify-between gap-[25px] text-", item_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("", ctx_r0.rounded, " flex items-center justify-center w-[70px] h-[70px] bg-", item_r1.type, "", ctx_r0.bgColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("w-[34px] h-[34px] [&>svg]:w-full [&>svg]:h-full ", ctx_r0.textColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/svg/unicons-line/", item_r1.icon, ".svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mt-[6px] text-", item_r1.statusColor, " inline-flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/svg/unicons-line/", item_r1.trend, ".svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
  }
}
class OverviewListVerticalComponent {
  http;
  overviewListVertical;
  rounded;
  bgColor;
  textColor;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get('assets/data/pages/demo-three/overviewListVertical.json').subscribe(data => {
      this.overviewListVertical = data.overviewListVertical;
    });
  }
  static ɵfac = function OverviewListVerticalComponent_Factory(t) {
    return new (t || OverviewListVerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OverviewListVerticalComponent,
    selectors: [["nz-OverviewListVertical"]],
    inputs: {
      rounded: "rounded",
      bgColor: "bgColor",
      textColor: "textColor"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "flex", "items-center", "flex-wrap", "justify-between", "rounded-10", "bg-[white]", "dark:bg-white/10", "overflow-hidden"], ["class", "mb-0 flex-[0_0_auto] relative after:absolute after:w-[1px] after:h-[70px] after:right-[-60px] after:top-1/2 after:transform after:-translate-y-1/2 after:z-10 after:bg-rgb(40, 43, 55) dark:after:bg-white/10", 4, "ngFor", "ngForOf"], [1, "mb-0", "flex-[0_0_auto]", "relative", "after:absolute", "after:w-[1px]", "after:h-[70px]", "after:right-[-60px]", "after:top-1/2", "after:transform", "after:-translate-y-1/2", "after:z-10", "after:bg-rgb(40,", "43,", "55)", "dark:after:bg-white/10"], [1, "flex", "p-[25px]"], [3, "src"], [1, "flex", "gap-[25px]"], [1, "text-[30px]", "leading-[1.2]", "font-semibold", "mb-0", "text-dark", "dark:text-white/[.87]"], [1, "text-[16px]", "text-light", "dark:text-white/60"], [1, "[&>svg]:w-[20px]", "[&>svg]:h-[18px]", "text-current", 3, "src"], [1, "font-medium", "text-[14px]"]],
    template: function OverviewListVerticalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OverviewListVerticalComponent_div_1_Template, 16, 19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.overviewListVertical);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 82978:
/*!*************************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/profitGrowth.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfitGrowthComponent: () => (/* binding */ ProfitGrowthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ 21291);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);




const _c0 = ["chart"];
class ProfitGrowthComponent {
  //Tabs
  sellingTab = 'today';
  handleClick(tab) {
    this.sellingTab = tab;
  }
  //Chart Data
  chart;
  chartOptions;
  constructor() {
    this.chartOptions = {
      series: [{
        name: "Orders",
        data: [35, 55, 25, 60, 42, 80, 35],
        color: "#7811FF"
      }, {
        name: "Sales",
        data: [10, 30, 8, 30, 22, 38, 45],
        color: "#00AAFF"
      }],
      chart: {
        width: "100%",
        height: 350,
        type: "bar",
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 30,
        colors: ['transparent']
      },
      grid: {
        borderColor: '#485e9029',
        strokeDashArray: 5,
        padding: {
          top: 0,
          right: 0,
          bottom: 0
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 2
        }
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '13px',
        fontFamily: '"Jost", sans-serif',
        fontWeight: 400,
        labels: {
          colors: '#747474'
        },
        markers: {
          width: 8,
          height: 8,
          radius: 20,
          offsetX: -4,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 20
        }
      },
      states: {},
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        x: {
          show: true,
          format: 'dd MMM',
          formatter: undefined
        },
        y: {
          formatter: undefined,
          title: {
            formatter: seriesName => seriesName
          }
        },
        z: {
          formatter: undefined,
          title: 'Size: '
        },
        marker: {
          show: true
        },
        fixed: {
          enabled: false,
          position: 'topLeft',
          offsetY: 0
        },
        style: {
          fontSize: '12px',
          fontFamily: '"Jost", sans-serif'
        }
      },
      xaxis: {
        crosshairs: {
          show: false
        },
        labels: {
          style: {
            colors: Array.from({
              length: 12
            }, () => '#747474'),
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: val => {
            return val + "K";
          },
          style: {
            colors: ['#747474'],
            fontSize: '14px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };
  }
  static ɵfac = function ProfitGrowthComponent_Factory(t) {
    return new (t || ProfitGrowthComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfitGrowthComponent,
    selectors: [["nz-profitGrowth"]],
    viewQuery: function ProfitGrowthComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    decls: 15,
    vars: 12,
    consts: [[1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]"], [1, "mb-0", "inline-flex", "items-center", "py-[19px]", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[18px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "py-[16px]"], [1, "flex", "items-center", "justify-center", "max-ssm:flex-col", "max-ssm:gap-y-[15px]"], [1, "relative", "flex", "items-center", "mx-3"], [1, "inline-block", "text-dark", "dark:text-white/[.87]", "me-1", "ms-2.5", "text-[18px]", "font-semibold"], [1, "flex", "items-center", "text-sm", "font-medium", "text-success"], ["src", "assets/images/svg/unicons-line/arrow-up.svg", 1, "w-[20px]", "h-[20px]", "[&>svg]:w-full", "[&>svg]:h-full"], [1, "p-[25px]", "pt-0"], ["dir", "ltr", 1, "hexadash-chart-container"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "grid", "stroke", "title", "plotOptions", "legend", "tooltip", "states"]],
    template: function ProfitGrowthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Profit Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "$8,550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "svg-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 25% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "apx-chart", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title)("plotOptions", ctx.chartOptions.plotOptions)("legend", ctx.chartOptions.legend)("tooltip", ctx.chartOptions.tooltip)("states", ctx.chartOptions.states);
      }
    },
    dependencies: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Dir, angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent],
    styles: [":is(.dark   [_nghost-%COMP%]     .apexcharts-legend .apexcharts-legend-series .apexcharts-legend-text) {\n\n    color: rgb(255 255 255 / .60) !important\n}\n\n:is(.dark   [_nghost-%COMP%]     .apexcharts-text.apexcharts-yaxis-label) {\n\n    fill: rgb(255 255 255 / .60) !important\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFpbmVyL2Rhc2hib2FyZC9kZW1vVGhyZWUvcHJvZml0R3Jvd3RoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLmFwZXhjaGFydHMtbGVnZW5kIC5hcGV4Y2hhcnRzLWxlZ2VuZC1zZXJpZXMgLmFwZXhjaGFydHMtbGVnZW5kLXRleHR7XG4gICAgICBAYXBwbHkgZGFyazp0ZXh0LXdoaXRlL1suNjBdICN7IWltcG9ydGFudH07XG4gICAgfVxuICAgIDpob3N0IDo6bmctZGVlcCAuYXBleGNoYXJ0cy10ZXh0LmFwZXhjaGFydHMteWF4aXMtbGFiZWwge1xuICAgICAgQGFwcGx5IGRhcms6ZmlsbC13aGl0ZS9bLjYwXSAjeyFpbXBvcnRhbnR9O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2747:
/*!************************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/recentDeals.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentDealsComponent: () => (/* binding */ RecentDealsComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_pages_table_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/pages/table-data.json */ 15816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);




function RecentDealsComponent_div_16_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 13)(1, "td", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/electronics/", product_r3.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.price);
  }
}
function RecentDealsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "nz-table", 8)(2, "thead")(3, "tr")(4, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PRODUCT NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "PRICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RecentDealsComponent_div_16_tr_9_Template, 9, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r0.sellingTab !== tab_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx_r0.newProduct[tab_r1.key])("nzFrontPagination", false)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.newProduct[tab_r1.key]);
  }
}
class RecentDealsComponent {
  //Table Data
  newProduct;
  tabData;
  constructor() {
    this.newProduct = _assets_data_pages_table_data_json__WEBPACK_IMPORTED_MODULE_0__.recentDeal;
    this.tabData = [{
      key: 'today',
      label: 'Today'
    }, {
      key: 'week',
      label: 'Week'
    }, {
      key: 'month',
      label: 'Month'
    }];
  }
  //Dropdown Data
  // appItems = items.appItems;
  //Tab
  sellingTab = 'today';
  handleClick(tab) {
    this.sellingTab = tab;
  }
  static ɵfac = function RecentDealsComponent_Factory(t) {
    return new (t || RecentDealsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RecentDealsComponent,
    selectors: [["nz-recentDeals"]],
    decls: 17,
    vars: 7,
    consts: [[1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]"], [1, "mb-0", "inline-flex", "items-center", "py-[16px]", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[18px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "py-[16px]", "flex", "items-center", "gap-[15px]"], [1, "flex", "items-center", "mb-0"], ["type", "button", 3, "click"], [1, "px-[25px]", "pt-0", "pb-[42px]"], [3, "hidden", 4, "ngFor", "ngForOf"], [1, "text-sm", "rounded-[5px]", 3, "nzData", "nzFrontPagination", "nzShowPagination"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-start", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden", "rounded-s-[4px]"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-end", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden", "rounded-e-[4px]"], [1, "bg-white", "dark:bg-[#1b1d2a]"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [1, "ps-0", "pe-4", "py-2.5", "text-start", "last:text-end", "text-dark", "dark:text-white/[.87]", "group-hover:bg-transparent", "text-15", "font-medium", "border-none", "before:hidden", "rounded-s-[4px]"], [1, "flex", "items-center"], [1, "me-2.5", "w-[34px]", "h-[34px]"], [1, "min-w-[34px]", "h-[34px]", "rounded-4", 3, "src", "alt"], [1, "font-medium", "capitalize", "text-dark", "dark:text-white/[.87]", "text-15"], [1, "ps-4", "pe-4", "py-2.5", "font-medium", "last:text-end", "capitalize", "text-[14px]", "text-dark", "dark:text-white/[.87]", "border-none", "group-hover:bg-transparent", "rounded-e-[4px]"]],
    template: function RecentDealsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Recent Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4)(6, "li")(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecentDealsComponent_Template_button_click_7_listener() {
          return ctx.handleClick("today");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecentDealsComponent_Template_button_click_10_listener() {
          return ctx.handleClick("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecentDealsComponent_Template_button_click_13_listener() {
          return ctx.handleClick("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RecentDealsComponent_div_16_Template, 10, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "today" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "week" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "month" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTrDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 67208:
/*!**************************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/salesOverview.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOverviewComponent: () => (/* binding */ SalesOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 57854);




const _c0 = ["chart"];
function SalesOverviewComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r0.chartOptions.series)("chart", ctx_r0.chartOptions.chart)("labels", ctx_r0.chartOptions.labels)("responsive", ctx_r0.chartOptions.responsive)("plotOptions", ctx_r0.chartOptions.plotOptions)("legend", ctx_r0.chartOptions.legend)("colors", ctx_r0.chartOptions.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chartOptions.series[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.chartOptions.labels[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chartOptions.series[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.chartOptions.labels[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.chartOptions.series[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.chartOptions.labels[2], " ");
  }
}
function SalesOverviewComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r1.chartOptions2.series)("chart", ctx_r1.chartOptions.chart)("labels", ctx_r1.chartOptions2.labels)("responsive", ctx_r1.chartOptions.responsive)("plotOptions", ctx_r1.chartOptions.plotOptions)("legend", ctx_r1.chartOptions.legend)("colors", ctx_r1.chartOptions.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.chartOptions2.series[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.chartOptions2.labels[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.chartOptions2.series[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.chartOptions2.labels[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.chartOptions2.series[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.chartOptions2.labels[2], " ");
  }
}
function SalesOverviewComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "apx-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "strong", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11)(10, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r2.chartOptions3.series)("chart", ctx_r2.chartOptions.chart)("labels", ctx_r2.chartOptions3.labels)("responsive", ctx_r2.chartOptions.responsive)("plotOptions", ctx_r2.chartOptions.plotOptions)("legend", ctx_r2.chartOptions.legend)("colors", ctx_r2.chartOptions.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.chartOptions3.series[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.chartOptions3.labels[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.chartOptions3.series[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.chartOptions3.labels[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.chartOptions3.series[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.chartOptions3.labels[2], " ");
  }
}
class SalesOverviewComponent {
  //Tabs
  componentId;
  sellingTab = 'today';
  handleClick(tab) {
    this.sellingTab = tab;
    const storageKey = `sellingTab_${this.componentId}`; // Use a unique key for each component
    localStorage.setItem(storageKey, tab);
  }
  ngOnInit() {
    const storageKey = `sellingTab_${this.componentId}`; // Use the same unique key as in handleClick
    const storedTab = localStorage.getItem(storageKey);
    if (storedTab) {
      this.sellingTab = storedTab;
    }
  }
  //Chart Data
  chart;
  chartOptions;
  chartOptions2;
  chartOptions3;
  constructor() {
    const todaySales = [47, 34, 19]; // Replace with actual sales data for today
    const weekSales = [50, 60, 30]; // Replace with actual sales data for the week
    const monthSales = [80, 70, 50];
    const todayLabels = ["Shirts", "Pants", "Footwears"]; // Replace with labels for today
    const weekLabels = ["Tops", "Bottoms", "Shoes"]; // Replace with labels for the week
    const monthLabels = ["T-Shirts", "Jeans", "Sneakers"];
    this.chartOptions = {
      series: todaySales,
      labels: todayLabels,
      colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
      chart: {
        type: "donut",
        group: 'social',
        width: '100%',
        height: 300
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '15px',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 500,
        labels: {
          colors: 'text-theme-dark dark:text-white/60'
        },
        markers: {
          width: 7,
          height: 7,
          radius: 20,
          offsetX: -4
        },
        itemMargin: {
          horizontal: 10,
          vertical: 10
        },
        onItemClick: {
          toggleDataSeries: true
        },
        onItemHover: {
          highlightDataSeries: true
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            minAngleToShowLabel: undefined
          },
          donut: {
            size: '60%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Jost, sans-serif',
                color: '#404040',
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: '30px',
                fontFamily: 'Jost, sans-serif',
                color: "black",
                fontWeight: "bold",
                offsetY: 10,
                formatter: function (val) {
                  return +val + "K";
                }
              },
              total: {
                show: true,
                label: 'Total',
                color: '#404040',
                fontFamily: 'Jost, sans-serif',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                }
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 1399,
        options: {
          chart: {
            width: "100%"
          }
        }
      }]
    };
    this.chartOptions2 = {
      series: weekSales,
      labels: weekLabels
    };
    this.chartOptions3 = {
      series: monthSales,
      labels: monthLabels
    };
  }
  static ɵfac = function SalesOverviewComponent_Factory(t) {
    return new (t || SalesOverviewComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SalesOverviewComponent,
    selectors: [["nz-salesOverview"]],
    viewQuery: function SalesOverviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    inputs: {
      componentId: "componentId"
    },
    decls: 19,
    vars: 9,
    consts: [[1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-dark", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b-1", "border-regular", "dark:border-white/10"], [1, "mb-0", "inline-flex", "items-center", "py-[16px]", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[18px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "py-[16px]"], [1, "flex", "items-center", "mb-0"], ["type", "button", 3, "click"], [1, "p-[25px]", "pt-[20px]"], [4, "ngIf"], ["dir", "ltr", 1, "hexadash-chart-container"], [3, "series", "chart", "labels", "responsive", "plotOptions", "legend", "colors"], [1, "flex", "justify-between", "items-center", "px-[15px]", "min-h-[76px]", "bg-regularBG", "dark:bg-white/10", "rounded-[8px]", "mb-0", "mt-[15px]"], [1, "text-center", "py-[5px]", "px-[15px]"], [1, "font-semibold", "text-[18px]", "text-dark", "dark:text-white/[.87]", "inline-flex"], [1, "text-[15px]", "font-normal", "leading-[1.6666666667]", "text-theme-gray", "dark:text-white/60", "mb-0", "flex", "items-center"], [1, "font-semibold", "text-[18px]", "text-dark", "dark:text-white/[.87]"]],
    template: function SalesOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sales Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4)(6, "li")(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesOverviewComponent_Template_button_click_7_listener() {
          return ctx.handleClick("today");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesOverviewComponent_Template_button_click_10_listener() {
          return ctx.handleClick("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesOverviewComponent_Template_button_click_13_listener() {
          return ctx.handleClick("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SalesOverviewComponent_div_16_Template, 19, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SalesOverviewComponent_div_17_Template, 19, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SalesOverviewComponent_div_18_Template, 19, 13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sellingTab === "today" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sellingTab === "week" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sellingTab === "month" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellingTab === "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellingTab === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sellingTab === "month");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Dir, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent],
    styles: ["[_nghost-%COMP%]     .apexcharts-text.apexcharts-datalabel-label {\n\n    fill: #404040 !important\n}\n\n:is(.dark   [_nghost-%COMP%]     .apexcharts-text.apexcharts-datalabel-label) {\n\n    fill: rgb(255 255 255 / .60) !important\n}\n\n[_nghost-%COMP%]     .apexcharts-text.apexcharts-datalabel-value {\n\n    fill: #0A0A0A\n}\n\n:is(.dark   [_nghost-%COMP%]     .apexcharts-text.apexcharts-datalabel-value) {\n\n    fill: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .apexcharts-slices .apexcharts-series * {\n\n    stroke: #ffffff !important\n}\n\n:is(.dark   [_nghost-%COMP%]     .apexcharts-slices .apexcharts-series *) {\n\n    stroke: #1b1c29 !important\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFpbmVyL2Rhc2hib2FyZC9kZW1vVGhyZWUvc2FsZXNPdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgOmhvc3QgOjpuZy1kZWVwIC5hcGV4Y2hhcnRzLXRleHQuYXBleGNoYXJ0cy1kYXRhbGFiZWwtbGFiZWx7XG4gICAgQGFwcGx5IGZpbGwtdGhlbWUtZ3JheSBkYXJrOmZpbGwtd2hpdGUvWy42MF0gI3shaW1wb3J0YW50fTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmFwZXhjaGFydHMtdGV4dC5hcGV4Y2hhcnRzLWRhdGFsYWJlbC12YWx1ZXtcbiAgICBAYXBwbHkgZmlsbC1kYXJrIGRhcms6ZmlsbC13aGl0ZS9bLjg3XTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmFwZXhjaGFydHMtc2xpY2VzIC5hcGV4Y2hhcnRzLXNlcmllcyAqe1xuICAgIEBhcHBseSBzdHJva2Utd2hpdGUgZGFyazpzdHJva2UtWyMxYjFjMjldICN7IWltcG9ydGFudH07XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66681:
/*!***********************************************************************!*\
  !*** ./src/app/container/dashboard/demoThree/topProduct.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopProductComponent: () => (/* binding */ TopProductComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_pages_table_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/data/pages/table-data.json */ 15816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);




function TopProductComponent_div_16_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 16)(1, "td", 17)(2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/images/electronics/", product_r3.img, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.deals);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.amount);
  }
}
function TopProductComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 8)(2, "nz-table", 9)(3, "thead")(4, "tr", 10)(5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PRODUCTS NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\tDEALS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TopProductComponent_div_16_tr_12_Template, 11, 5, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx_r0.sellingTab !== tab_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx_r0.products[tab_r1.key])("nzFrontPagination", false)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.products[tab_r1.key]);
  }
}
class TopProductComponent {
  products;
  tabData;
  constructor() {
    this.products = _assets_data_pages_table_data_json__WEBPACK_IMPORTED_MODULE_0__.topProduct;
    this.tabData = [{
      key: 'today',
      label: 'Today'
    }, {
      key: 'week',
      label: 'Week'
    }, {
      key: 'month',
      label: 'Month'
    }];
  }
  sellingTab = 'today';
  handleClick(tab) {
    this.sellingTab = tab;
  }
  static ɵfac = function TopProductComponent_Factory(t) {
    return new (t || TopProductComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TopProductComponent,
    selectors: [["nz-topProduct"]],
    decls: 17,
    vars: 7,
    consts: [[1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]"], [1, "mb-0", "inline-flex", "items-center", "py-[16px]", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[18px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "py-[16px]", "flex", "items-center", "flex-wrap", "gap-[15px]"], [1, "flex", "items-center", "mb-0"], ["type", "button", 3, "click"], [1, "px-[25px]", "pt-0", "pb-[42px]"], [3, "hidden", 4, "ngFor", "ngForOf"], [1, "overflow-x-auto", "w-full"], [1, "text-sm", "rounded-[5px]", 3, "nzData", "nzFrontPagination", "nzShowPagination"], [1, "whitespace-nowrap"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-start", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden", "rounded-s-[4px]"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden"], [1, "bg-[#fafafa]", "dark:bg-[#323440]", "px-4", "py-2.5", "text-end", "text-light", "dark:text-white/[.87]", "text-[12px]", "font-medium", "border-none", "before:hidden", "rounded-e-[4px]"], [1, "bg-white", "dark:bg-[#1b1d2a]"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [1, "ps-0", "pe-4", "py-2.5", "text-start", "last:text-end", "text-dark", "dark:text-white/[.87]", "group-hover:bg-transparent", "text-15", "font-medium", "border-none", "before:hidden", "rounded-s-[4px]"], [1, "flex", "items-center"], [1, "me-2.5", "w-[34px]", "h-[34px]"], [1, "min-w-[34px]", "h-[34px]", "rounded-4", 3, "src", "alt"], [1, "font-medium", "capitalize", "text-dark", "dark:text-white/[.87]", "text-15"], [1, "px-4", "py-2.5", "font-normal", "last:text-end", "capitalize", "text-[14px]", "text-dark", "dark:text-white/[.87]", "border-none", "group-hover:bg-transparent"]],
    template: function TopProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Top Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "ul", 4)(6, "li")(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopProductComponent_Template_button_click_7_listener() {
          return ctx.handleClick("today");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopProductComponent_Template_button_click_10_listener() {
          return ctx.handleClick("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopProductComponent_Template_button_click_13_listener() {
          return ctx.handleClick("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TopProductComponent_div_16_Template, 13, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "today" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 hover:text-primary text-13");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "week" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sellingTab === "month" ? "inline-flex items-center bg-primary/10 dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md" : "inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary text-13 font-medium rounded-md");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_3__.NzTrDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 98802:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-three/demo-three.component */ 57250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_0__.DemoThreeComponent,
  data: {
    title: 'Dashboard'
  }
}];
class DashboardRoutingModule {
  static ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 75667:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @fullcalendar/angular */ 66514);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular-svg-icon */ 21291);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 62207);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ 9831);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7505);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 95273);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/modal */ 99404);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/rate */ 26439);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/space */ 51932);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 37716);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 356);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-om-perfect-scrollbar */ 30797);
/* harmony import */ var _container_dashboard_demoThree_activeUser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/dashboard/demoThree/activeUser.component */ 8809);
/* harmony import */ var _container_dashboard_demoThree_moneyEarning_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/dashboard/demoThree/moneyEarning.component */ 67991);
/* harmony import */ var _container_dashboard_demoThree_overviewListVertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/dashboard/demoThree/overviewListVertical.component */ 20340);
/* harmony import */ var _container_dashboard_demoThree_profitGrowth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/dashboard/demoThree/profitGrowth.component */ 82978);
/* harmony import */ var _container_dashboard_demoThree_recentDeals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/dashboard/demoThree/recentDeals.component */ 2747);
/* harmony import */ var _container_dashboard_demoThree_salesOverview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../container/dashboard/demoThree/salesOverview.component */ 67208);
/* harmony import */ var _container_dashboard_demoThree_topProduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container/dashboard/demoThree/topProduct.component */ 66681);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 10108);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-routing.module */ 98802);
/* harmony import */ var _demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo-three/demo-three.component */ 57250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ 61699);















































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
  suppressScrollX: true
};
const antdModule = [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__.NzAvatarModule, ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_15__.NzRateModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_16__.NzBadgeModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__.NzProgressModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__.NzDropDownModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_21__.NzTimelineModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_25__.NzCalendarModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_26__.NzToolTipModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__.NzCheckboxModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_28__.NzBreadCrumbModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_29__.NzGridModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_30__.NzSkeletonModule, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_31__.NzSpaceModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__.NzFormModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__.NzSelectModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_35__.NzDatePickerModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__.NzModalModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__.NzInputModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_38__.AngularSvgIconModule.forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_39__.NgChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_40__.NgApexchartsModule, ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__.PerfectScrollbarModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_42__.FullCalendarModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_43__.NzMessageModule];
class DashboardModule {
  static ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({
    providers: [_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_7__.ThemeConstantService, _angular_common__WEBPACK_IMPORTED_MODULE_45__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_45__.DecimalPipe, {
      provide: ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__.PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__.DashboardRoutingModule, antdModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_10__.DemoThreeComponent, _container_dashboard_demoThree_moneyEarning_component__WEBPACK_IMPORTED_MODULE_1__.MoneyEarningComponent, _container_dashboard_demoThree_profitGrowth_component__WEBPACK_IMPORTED_MODULE_3__.ProfitGrowthComponent, _container_dashboard_demoThree_overviewListVertical_component__WEBPACK_IMPORTED_MODULE_2__.OverviewListVerticalComponent, _container_dashboard_demoThree_salesOverview_component__WEBPACK_IMPORTED_MODULE_5__.SalesOverviewComponent, _container_dashboard_demoThree_topProduct_component__WEBPACK_IMPORTED_MODULE_6__.TopProductComponent, _container_dashboard_demoThree_recentDeals_component__WEBPACK_IMPORTED_MODULE_4__.RecentDealsComponent, _container_dashboard_demoThree_activeUser_component__WEBPACK_IMPORTED_MODULE_0__.ActiveUserComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__.DashboardRoutingModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_14__.NzAvatarModule, ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_15__.NzRateModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_16__.NzBadgeModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_17__.NzProgressModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_20__.NzDropDownModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_21__.NzTimelineModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_23__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_24__.NzListModule, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_25__.NzCalendarModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_26__.NzToolTipModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__.NzCheckboxModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_28__.NzBreadCrumbModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_29__.NzGridModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_30__.NzSkeletonModule, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_31__.NzSpaceModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__.NzFormModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__.NzSelectModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_35__.NzDatePickerModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_36__.NzModalModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_37__.NzInputModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_38__.AngularSvgIconModule, ng2_charts__WEBPACK_IMPORTED_MODULE_39__.NgChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_40__.NgApexchartsModule, ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_41__.PerfectScrollbarModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_42__.FullCalendarModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_43__.NzMessageModule]
  });
})();

/***/ }),

/***/ 57250:
/*!**************************************************************!*\
  !*** ./src/app/dashboard/demo-three/demo-three.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoThreeComponent: () => (/* binding */ DemoThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 75043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 53317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/theme-constant.service */ 10108);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 54677);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var _container_dashboard_demoThree_moneyEarning_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../container/dashboard/demoThree/moneyEarning.component */ 67991);
/* harmony import */ var _container_dashboard_demoThree_profitGrowth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../container/dashboard/demoThree/profitGrowth.component */ 82978);
/* harmony import */ var _container_dashboard_demoThree_overviewListVertical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../container/dashboard/demoThree/overviewListVertical.component */ 20340);
/* harmony import */ var _container_dashboard_demoThree_salesOverview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../container/dashboard/demoThree/salesOverview.component */ 67208);
/* harmony import */ var _container_dashboard_demoThree_topProduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../container/dashboard/demoThree/topProduct.component */ 66681);
/* harmony import */ var _container_dashboard_demoThree_recentDeals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../container/dashboard/demoThree/recentDeals.component */ 2747);
/* harmony import */ var _container_dashboard_demoThree_activeUser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../container/dashboard/demoThree/activeUser.component */ 8809);


















function DemoThreeComponent_div_0_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const breadcrumbs_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](breadcrumbs_r14[breadcrumbs_r14.length - 1].label);
  }
}
function DemoThreeComponent_div_0_nz_breadcrumb_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-breadcrumb-item")(1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", breadcrumb_r15.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", breadcrumb_r15.label, " ");
  }
}
function DemoThreeComponent_div_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 16);
  }
}
function DemoThreeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DemoThreeComponent_div_0_h4_1_Template, 2, 1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "nz-breadcrumb", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DemoThreeComponent_div_0_nz_breadcrumb_item_5_Template, 3, 2, "nz-breadcrumb-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DemoThreeComponent_div_0_ng_template_7_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r0.breadcrumbs$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSeparator", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ctx_r0.breadcrumbs$));
  }
}
const _c0 = function () {
  return {
    rows: 4
  };
};
function DemoThreeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-skeleton", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzAvatar", true)("nzShape", ctx_r2.circle)("nzActive", true)("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
  }
}
function DemoThreeComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-moneyEarning");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function DemoThreeComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-profitGrowth");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function DemoThreeComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-OverviewListVertical", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("textColor", ctx_r5.textColor)("rounded", ctx_r5.rounded)("bgColor", ctx_r5.bgColor);
  }
}
function DemoThreeComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-salesOverview", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("componentId", "component1");
  }
}
function DemoThreeComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-topProduct");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function DemoThreeComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-recentDeals");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function DemoThreeComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "nz-activeUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
class DemoThreeComponent {
  router;
  activatedRoute;
  themeService;
  isLoading = true;
  showContent = false;
  textColor = 'text-white';
  rounded = 'rounded-full';
  bgColor = '';
  breadcrumbs$;
  contentHeaderDisplay;
  isFoldedTop;
  isFolded;
  isExpand;
  isSideNavDark;
  selectedHeaderColor;
  constructor(router, activatedRoute, themeService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.themeService = themeService;
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(() => {
      let child = this.activatedRoute.firstChild;
      while (child) {
        if (child.firstChild) {
          child = child.firstChild;
        } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
          return child.snapshot.data['headerDisplay'];
        } else {
          return null;
        }
      }
      return null;
    })).subscribe(data => {
      this.contentHeaderDisplay = data;
    });
  }
  ngOnInit() {
    // Simulate loading time
    this.loadData();
    this.breadcrumbs$ = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.startWith)(new _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd(0, '/', '/')), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(data => this.buildBreadCrumb(this.activatedRoute.root)));
    this.themeService.isMenuTopChanges.subscribe(isFoldedTop => this.isFoldedTop = isFoldedTop);
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
    this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    function removePreloader() {
      const preloader = document.getElementById('loaderOverlay');
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }
    window.addEventListener('load', removePreloader);
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
  buildBreadCrumb(route, url = '', breadcrumbs = []) {
    let label = '',
      path = '/',
      display = null;
    if (route.routeConfig) {
      if (route.routeConfig.data) {
        label = route.routeConfig.data['title'];
        path += route.routeConfig.path;
      }
    } else {
      label = 'Dashboard';
      path += 'dashboard';
    }
    const nextUrl = path && path !== '/dashboard' ? `${url}${path}` : url;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
  static ɵfac = function DemoThreeComponent_Factory(t) {
    return new (t || DemoThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DemoThreeComponent,
    selectors: [["app-demo-three"]],
    decls: 18,
    vars: 16,
    consts: [["class", "flex flex-wrap items-center justify-between leading-[1.8571428571] mb-[23px] gap-y-[15px] gap-x-[30px] max-sm:flex-col", 4, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["loadingSkeleton", ""], ["nz-col", "", "nzXs", "24", "nzXXl", "14", 1, "mb-[25px]"], [4, "ngIf", "ngIfElse"], ["nz-col", "", "nzXs", "24", "nzXXl", "10", 1, "mb-[25px]"], ["nz-col", "", "nzXs", "24", 1, "mb-[25px]"], ["nz-col", "", "nzXs", "24", "nzXXl", "8", 1, "mb-[25px]"], [1, "flex", "flex-wrap", "items-center", "justify-between", "leading-[1.8571428571]", "mb-[23px]", "gap-y-[15px]", "gap-x-[30px]", "max-sm:flex-col"], ["class", "text-dark dark:text-white/[.87] text-[20px] font-semibold capitalize", 4, "ngIf"], [1, "flex", "items-center", "modify-breadcrumb", 3, "nzSeparator"], ["nz-icon", "", "nzType", "home", 1, "me-[5px]"], [4, "ngFor", "ngForOf"], ["iconTemplate", ""], [1, "text-dark", "dark:text-white/[.87]", "text-[20px]", "font-semibold", "capitalize"], [1, "text-[14px]", "font-normal", "capitalize", 3, "routerLink"], [1, "inline-flex", "bg-light-extra", "relative", "-top-0.5", "w-1", "h-1", "rounded-full"], [1, "bg-white", "dark:bg-white/10", "rounded-6", "p-[30px]", "pt-[15px]", 3, "nzAvatar", "nzShape", "nzActive", "nzParagraph"], [3, "textColor", "rounded", "bgColor"], [3, "componentId"]],
    template: function DemoThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, DemoThreeComponent_div_0_Template, 9, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DemoThreeComponent_ng_template_2_Template, 1, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DemoThreeComponent_ng_container_5_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DemoThreeComponent_ng_container_7_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, DemoThreeComponent_ng_container_9_Template, 2, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, DemoThreeComponent_ng_container_11_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, DemoThreeComponent_ng_container_13_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, DemoThreeComponent_ng_container_15_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, DemoThreeComponent_ng_container_17_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.contentHeaderDisplay !== "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showContent)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_17__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_17__.NzBreadCrumbItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzRowDirective, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_19__.NzSkeletonComponent, _container_dashboard_demoThree_moneyEarning_component__WEBPACK_IMPORTED_MODULE_1__.MoneyEarningComponent, _container_dashboard_demoThree_profitGrowth_component__WEBPACK_IMPORTED_MODULE_2__.ProfitGrowthComponent, _container_dashboard_demoThree_overviewListVertical_component__WEBPACK_IMPORTED_MODULE_3__.OverviewListVerticalComponent, _container_dashboard_demoThree_salesOverview_component__WEBPACK_IMPORTED_MODULE_4__.SalesOverviewComponent, _container_dashboard_demoThree_topProduct_component__WEBPACK_IMPORTED_MODULE_5__.TopProductComponent, _container_dashboard_demoThree_recentDeals_component__WEBPACK_IMPORTED_MODULE_6__.RecentDealsComponent, _container_dashboard_demoThree_activeUser_component__WEBPACK_IMPORTED_MODULE_7__.ActiveUserComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 51932:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-space.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzSpaceComponent: () => (/* binding */ NzSpaceComponent),
/* harmony export */   NzSpaceItemDirective: () => (/* binding */ NzSpaceItemDirective),
/* harmony export */   NzSpaceModule: () => (/* binding */ NzSpaceModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzSpaceComponent_ng_template_1_span_2_ng_template_1_Template(rf, ctx) {}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
function NzSpaceComponent_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSpaceComponent_ng_template_1_span_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const last_r2 = ctx_r6.last;
    const index_r3 = ctx_r6.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-bottom", ctx_r4.nzDirection === "vertical" ? last_r2 ? null : ctx_r4.spaceSize : null, "px")("margin-right", ctx_r4.nzDirection === "horizontal" ? last_r2 ? null : ctx_r4.spaceSize : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.nzSplit)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, index_r3));
  }
}
function NzSpaceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSpaceComponent_ng_template_1_span_2_Template, 2, 8, "span", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-bottom", ctx_r0.nzDirection === "vertical" ? last_r2 ? null : ctx_r0.spaceSize : null, "px")("margin-right", ctx_r0.nzDirection === "horizontal" ? last_r2 ? null : ctx_r0.spaceSize : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.nzSplit && !last_r2);
  }
}
const _c1 = ["*"];
class NzSpaceItemDirective {
  constructor() {}
  static #_ = this.ɵfac = function NzSpaceItemDirective_Factory(t) {
    return new (t || NzSpaceItemDirective)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzSpaceItemDirective,
    selectors: [["", "nzSpaceItem", ""]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpaceItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nzSpaceItem]'
    }]
  }], function () {
    return [];
  }, null);
})();
const NZ_CONFIG_MODULE_NAME = 'space';
const SPACE_SIZE = {
  small: 8,
  middle: 16,
  large: 24
};
class NzSpaceComponent {
  constructor(nzConfigService, cdr) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzDirection = 'horizontal';
    this.nzSplit = null;
    this.nzWrap = false;
    this.nzSize = 'small';
    this.spaceSize = SPACE_SIZE.small;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  updateSpaceItems() {
    const numberSize = typeof this.nzSize === 'string' ? SPACE_SIZE[this.nzSize] : this.nzSize;
    this.spaceSize = numberSize / (this.nzSplit ? 2 : 1);
    this.cdr.markForCheck();
  }
  ngOnChanges() {
    this.updateSpaceItems();
    this.mergedAlign = this.nzAlign === undefined && this.nzDirection === 'horizontal' ? 'center' : this.nzAlign;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngAfterContentInit() {
    this.updateSpaceItems();
    this.items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  static #_ = this.ɵfac = function NzSpaceComponent_Factory(t) {
    return new (t || NzSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzSpaceComponent,
    selectors: [["nz-space"], ["", "nz-space", ""]],
    contentQueries: function NzSpaceComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzSpaceItemDirective, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
      }
    },
    hostAttrs: [1, "ant-space"],
    hostVars: 14,
    hostBindings: function NzSpaceComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-wrap", ctx.nzWrap ? "wrap" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-space-horizontal", ctx.nzDirection === "horizontal")("ant-space-vertical", ctx.nzDirection === "vertical")("ant-space-align-start", ctx.mergedAlign === "start")("ant-space-align-end", ctx.mergedAlign === "end")("ant-space-align-center", ctx.mergedAlign === "center")("ant-space-align-baseline", ctx.mergedAlign === "baseline");
      }
    },
    inputs: {
      nzDirection: "nzDirection",
      nzAlign: "nzAlign",
      nzSplit: "nzSplit",
      nzWrap: "nzWrap",
      nzSize: "nzSize"
    },
    exportAs: ["NzSpace"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 1,
    consts: [["ngFor", "", 3, "ngForOf"], [1, "ant-space-item"], [3, "ngTemplateOutlet"], ["class", "ant-space-split", 3, "margin-bottom", "margin-right", 4, "ngIf"], [1, "ant-space-split"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NzSpaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSpaceComponent_ng_template_1_Template, 3, 6, "ng-template", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__.InputBoolean)()], NzSpaceComponent.prototype, "nzWrap", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)()], NzSpaceComponent.prototype, "nzSize", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpaceComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-space, [nz-space]',
      exportAs: 'NzSpace',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <ng-content></ng-content>
    <ng-template ngFor let-item let-last="last" let-index="index" [ngForOf]="items">
      <div
        class="ant-space-item"
        [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-container [ngTemplateOutlet]="item"></ng-container>
      </div>
      <span
        *ngIf="nzSplit && !last"
        class="ant-space-split"
        [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-template [ngTemplateOutlet]="nzSplit" [ngTemplateOutletContext]="{ $implicit: index }"></ng-template>
      </span>
    </ng-template>
  `,
      host: {
        class: 'ant-space',
        '[class.ant-space-horizontal]': 'nzDirection === "horizontal"',
        '[class.ant-space-vertical]': 'nzDirection === "vertical"',
        '[class.ant-space-align-start]': 'mergedAlign === "start"',
        '[class.ant-space-align-end]': 'mergedAlign === "end"',
        '[class.ant-space-align-center]': 'mergedAlign === "center"',
        '[class.ant-space-align-baseline]': 'mergedAlign === "baseline"',
        '[style.flex-wrap]': 'nzWrap ? "wrap" : null'
      }
    }]
  }], function () {
    return [{
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    nzDirection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzAlign: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSplit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzWrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzSpaceItemDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSpaceModule {
  static #_ = this.ɵfac = function NzSpaceModule_Factory(t) {
    return new (t || NzSpaceModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzSpaceModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSpaceModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzSpaceComponent, NzSpaceItemDirective],
      exports: [NzSpaceComponent, NzSpaceItemDirective],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
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



/***/ }),

/***/ 15816:
/*!***********************************************!*\
  !*** ./src/assets/data/pages/table-data.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"salesLocation":{"today":[["United states","90","$536"],["United kingdom","70","$573"],["Canada","70","$457"],["Japan","30","$524"],["Bangladesh","50","$354"],["India","60","$654"]],"week":[["Japan","90","$336"],["United kingdom","70","$873"],["Canada","70","$557"],["Japan","30","$525"],["Bangladesh","50","$352"],["Pakistan","60","$658"]],"month":[["Russia","90","$534"],["Germany","70","$573"],["Canada","70","$487"],["Japan","30","$514"],["Bangladesh","50","$394"],["Vutan","60","$354"]],"year":[["Japan","90","$336"],["United kingdom","70","$873"],["Canada","70","$557"],["Japan","30","$525"],["Bangladesh","50","$352"],["Pakistan","60","$658"]]},"topSaleProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$280","sold":"126","revenue":"$38,536"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"week":[{"key":"1","img":"1.png","name":"Samsung Note 10 256GB","price":"$450","sold":"300","revenue":"$43060"},{"key":"2","img":"2.png","name":"Full Sleeve Shirt","price":"$49","sold":"300","revenue":"$3178"},{"key":"3","img":"3.png","name":"Nike Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Bata Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy Premio 256GB","price":"$670","sold":"126","revenue":"$40,988"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$39","sold":"180","revenue":"$20,573"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$89","sold":"581","revenue":"$170,758"},{"key":"4","img":"5.png","name":"Marco Shoes","price":"$32","sold":"451","revenue":"$258,105"},{"key":"5","img":"4.png","name":"15\\" MackBook Pro","price":"$950","sold":"745","revenue":"$745,154"}]},"browserState":{"today":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"}],"week":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"12025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"8.5%","cte":"12025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"12025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"0.5%","cte":"12025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"1.5%","cte":"12025","goalRate":"90%"}],"month":[{"key":"1","img":"chrome.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"13025","goalRate":"90%"},{"key":"2","img":"firefox.png","name":"Google Chrome","session":"92,345","bounceRate":"7.5%","cte":"13025","goalRate":"90%"},{"key":"3","img":"internet-explorer.png","name":"Google Chrome","session":"92,345","bounceRate":"2.5%","cte":"14025","goalRate":"90%"},{"key":"4","img":"opera.png","name":"Google Chrome","session":"92,345","bounceRate":"4.5%","cte":"16025","goalRate":"90%"},{"key":"5","img":"safari.png","name":"Google Chrome","session":"92,345","bounceRate":"5.5%","cte":"11025","goalRate":"90%"}]},"revenueGenerated":{"today":[{"key":"1","icon":"google","name":"Google","visitors":"23,397","pageView":"17,201","revenue":"$5,536","trend":"90","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"23,397","pageView":"14,201","revenue":"$5,536","trend":"57","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"78","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,397","pageView":"13,201","revenue":"$5,536","trend":"96","type":"info"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"23,397","pageView":"16,201","revenue":"$5,536","trend":"21","type":"warning"}],"week":[{"key":"1","icon":"google","name":"Google","visitors":"26,397","pageView":"53,465","revenue":"$4,617","trend":"70","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"22,454","pageView":"83,734","revenue":"$4,328","trend":"53","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"29,364","pageView":"74,345","revenue":"$6,438","trend":"86","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"24,565","pageView":"24,572","revenue":"$4,257","trend":"98","type":"info"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"16,637","pageView":"30,234","revenue":"$8,559","trend":"20","type":"warning"}],"month":[{"key":"1","icon":"google","name":"Google","visitors":"29,575","pageView":"11,317","revenue":"$8,472","trend":"60","type":"primary"},{"key":"2","icon":"facebook","name":"Facebook","visitors":"11,159","pageView":"10,470","revenue":"$6,538","trend":"54","type":"info"},{"key":"3","icon":"twitter","name":"Twitter","visitors":"21,341","pageView":"22,010","revenue":"$6,017","trend":"71","type":"success"},{"key":"4","icon":"linkedin","name":"Linkedin","visitors":"23,258","pageView":"11,184","revenue":"$6,368","trend":"92","type":"info"},{"key":"5","icon":"instagram","name":"Instagram","visitors":"22,249","pageView":"10,151","revenue":"$5,536","trend":"20","type":"warning"}]},"trafficChannel":[{"icon":"facebook","name":"Facebook","user":"3,397","session":"123","bounce":"2,584","duration":"00:01:05"},{"icon":"twitter","name":"Twitter","user":"2,397","session":"433","bounce":"2,024","duration":"00:02:35"},{"icon":"instagram","name":"Instagram","user":"6,397","session":"234","bounce":"2,404","duration":"00:01:65"},{"icon":"youtube","name":"Youtube","user":"1,397","session":"678","bounce":"2,681","duration":"00:04:05"}],"newProduct":{"today":[{"key":"1","img":"6.png","name":"UV Protected Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Black Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Women Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Mackbook Pro","price":"$38,536"}],"week":[{"key":"1","img":"6.png","name":"New Model Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Smart Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"Men Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Toshiba Pro","price":"$38,536"}],"month":[{"key":"1","img":"6.png","name":"Computer Light Sunglass","price":"$38,536"},{"key":"2","img":"7.png","name":"Large Headphone","price":"$38,536"},{"key":"3","img":"8.png","name":"Nike Shoes","price":"$38,536"},{"key":"4","img":"9.png","name":"High Quality Bag","price":"$38,536"},{"key":"5","img":"4.png","name":"15`` Lenovo Pro","price":"$38,536"}]},"bestSeller":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"On Process"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"week":[{"key":"1","img":"10.png","name":"Richard Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Pending"},{"key":"2","img":"11.png","name":"Jhon Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"David Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Pending"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}],"month":[{"key":"1","img":"10.png","name":"Michel Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"On Process"},{"key":"2","img":"11.png","name":"Christopher Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done"},{"key":"3","img":"12.png","name":"Joseph White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending"},{"key":"4","img":"13.png","name":"Richard Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done"}]},"activeUserData":{"today":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done","statusColor":"success"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done","statusColor":"success"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending","statusColor":"warning"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done","statusColor":"success"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done","statusColor":"success"}],"week":[{"key":"1","img":"10.png","name":"Theme Jhone","company":"Daraz","product":"Cool watch","revenue":"$28,336","status":"Done","statusColor":"success"},{"key":"2","img":"11.png","name":"Elon Mask","company":"Picaboo","product":"Tea Cup","revenue":"$22","status":"Pending","statusColor":"warning"},{"key":"3","img":"12.png","name":"Shamim Ahmed","company":"Yahoo","product":"Rocking Chair","revenue":"$1,007","status":"Pending","statusColor":"warning"},{"key":"4","img":"13.png","name":"Tanjim Hasan","company":"Sovware","product":"DSLR Camera","revenue":"$1,354","status":"Done","statusColor":"success"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done","statusColor":"success"}],"month":[{"key":"1","img":"10.png","name":"Robert Clinton","company":"Samsung","product":"Smart Phone","revenue":"$38,536","status":"Done","statusColor":"success"},{"key":"2","img":"11.png","name":"Michael Johnson  ","company":"Asus","product":"Laptop","revenue":"$20,573","status":"Done","statusColor":"success"},{"key":"3","img":"12.png","name":"Daniel White","company":"Google","product":"Watch","revenue":"$17,457","status":"Pending","statusColor":"warning"},{"key":"4","img":"13.png","name":"Chris Barin ","company":"Apple","product":"Computer","revenue":"$15,354","status":"Done","statusColor":"success"},{"key":"5","img":"14.png","name":"Daniel Pink","company":"Panasonic","product":"Sunglass","revenue":"$12,354","status":"Done","statusColor":"success"}]},"topProduct":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","deals":"$60","amount":"454"},{"key":"3","img":"3.png","name":"Marco Shoes","deals":"$80","amount":"7898"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","deals":"$480","amount":"21"},{"key":"5","img":"4.png","name":"Microlab Headphone","deals":"$10","amount":"56446"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"week":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","deals":"$280","amount":"126"},{"key":"3","img":"3.png","name":"Marco Shoes","deals":"$280","amount":"126"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","deals":"$280","amount":"126"},{"key":"5","img":"4.png","name":"Microlab Headphone","deals":"$280","amount":"126"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","deals":"$280","amount":"126"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","deals":"$60","amount":"454"},{"key":"3","img":"3.png","name":"Marco Shoes","deals":"$80","amount":"7898"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","deals":"$480","amount":"21"},{"key":"5","img":"4.png","name":"Microlab Headphone","deals":"$10","amount":"56446"},{"key":"6","img":"7.png","name":"Women Bag","deals":"$100","amount":"11046"}]},"recentDeal":{"today":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$180"},{"key":"2","img":"2.png","name":"Half Sleeve Shirt","price":"$380"},{"key":"3","img":"3.png","name":"Marco Shoes","price":"$580"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","price":"$880"},{"key":"5","img":"4.png","name":"Microlab Headphone","price":"$150"},{"key":"6","img":"7.png","name":"Women Bag","price":"$850"}],"week":[{"key":"1","img":"1.png","name":"Marco Shoes","price":"$380"},{"key":"2","img":"2.png","name":"Apple Mobile Phone","price":"$200"},{"key":"3","img":"3.png","name":"Microlab Headphone","price":"$100"},{"key":"4","img":"5.png","name":"Women Bag","price":"$480"},{"key":"5","img":"4.png","name":"Apple Mobile Phone","price":"$256"},{"key":"6","img":"7.png","name":"Women Bag","price":"$850"}],"month":[{"key":"1","img":"1.png","name":"Samsung Galaxy S8 256GB","price":"$250"},{"key":"2","img":"2.png","name":"Marco Shoes","price":"$380"},{"key":"3","img":"3.png","name":"Microlab Headphone","price":"$180"},{"key":"4","img":"5.png","name":"Apple Mobile Phone","price":"$285"},{"key":"5","img":"4.png","name":"Microlab Headphone","price":"$287"},{"key":"6","img":"7.png","name":"Women Bag","price":"$295"}]},"memberProgressData":{"today":[{"id":1,"title":"Robert Clinton","workOn":"ReactJs, HTML","userImg":"1.png","salary":"108,536","status":"75","progress":"primary"},{"id":2,"title":"Michael Johnson","workOn":"Laravel, Angular","userImg":"2.png","salary":"1038,536","status":"65","progress":"info"},{"id":3,"title":"Daniel White","workOn":"Python,MySQL","userImg":"3.png","salary":"11,536","status":"95","progress":"success"},{"id":4,"title":"Chris Barin","workOn":"Wordpress","userImg":"4.png","salary":"11,536","status":"65","progress":"secondary"},{"id":5,"title":"Daniel Pink","workOn":"Photoshop","userImg":"5.png","salary":"11,236","status":"50","progress":"warning"},{"id":6,"title":"Shane Pollard","workOn":"Illustrator","userImg":"1.png","salary":"10536","status":"55","progress":"warning"}],"week":[{"id":7,"title":"John Smith","workOn":"Vue.js, CSS","userImg":"2.png","salary":"95,236","status":"85","progress":"info"},{"id":8,"title":"Sarah Johnson","workOn":"Node.js, MongoDB","userImg":"3.png","salary":"120,536","status":"90","progress":"success"},{"id":9,"title":"Emily Brown","workOn":"Java, Spring","userImg":"4.png","salary":"89,536","status":"70","progress":"primary"}],"month":[{"id":10,"title":"Jason Lee","workOn":"Ruby on Rails","userImg":"5.png","salary":"88,536","status":"80","progress":"warning"},{"id":11,"title":"Karen Wilson","workOn":"C#, .NET","userImg":"5.png","salary":"100,536","status":"75","progress":"secondary"},{"id":12,"title":"Alex Turner","workOn":"Swift, iOS","userImg":"4.png","salary":"105,536","status":"95","progress":"info"}]},"resentSeller":{"all":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"pending":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}],"done":[{"id":"1","title":"Robert Clinton","company":"Samsung","device":"Smart Phone","userImg":"10.png","price":"38,536","status":"done"},{"id":"2","title":"Michael Johnson","company":"Samsung","device":"Smart Phone","userImg":"11.png","price":"38,536","status":"done"},{"id":"3","title":"Daniel White","company":"Samsung","device":"Smart Phone","userImg":"12.png","price":"38,536","status":"pending"},{"id":"4","title":"Chris Barin","company":"Samsung","device":"Smart Phone","userImg":"13.png","price":"38,536","status":"done"}]},"campaignData":{"today":[{"id":1,"title":"Microsoft Company","amount":"1045,520","percent":90,"icon":"microsoft","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":2,"title":"WordPress","amount":"2000,520","percent":80,"icon":"wordpress","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":3,"title":"Adidas Brand","amount":"1520,950","percent":50,"icon":"adidas","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":4,"title":"Slack","amount":"7045,154","percent":60,"icon":"slack","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":5,"title":"Adobe CC","amount":"1252,220","percent":60,"icon":"adobe","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"}],"week":[{"id":6,"title":"WordPress","amount":"2000,520","percent":90,"icon":"wordpress","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":7,"title":"Microsoft Company","amount":"1045,520","percent":80,"icon":"microsoft","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":8,"title":"Slack","amount":"7045,154","percent":60,"icon":"slack","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":9,"title":"Adidas Brand","amount":"1520,950","percent":50,"icon":"adidas","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":10,"title":"Adobe CC","amount":"1252,220","percent":60,"icon":"adobe","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"}],"month":[{"id":11,"title":"Slack","amount":"7045,154","percent":80,"icon":"slack","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":12,"title":"Adobe CC","amount":"1252,220","percent":70,"icon":"adobe","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":13,"title":"WordPress","amount":"2000,520","percent":60,"icon":"wordpress","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":14,"title":"Microsoft Company","amount":"1045,520","percent":80,"icon":"microsoft","className":"ltr:pr-4 rtl:pl-4 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"},{"id":15,"title":"Adidas Brand","amount":"1520,950","percent":50,"icon":"adidas","className":"ltr:pr-0 rtl:pl-0 text-light dark:text-white60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4"}]},"upcomingEvent":{"today":[{"id":1,"type":"primary","title":"Planning for new dashboard wireframe and prototype design","date":"19","month":"Mar","time":"08:30 AM"},{"id":2,"type":"secondary","title":"International Web Conference 2021","date":"19","month":"Mar","time":"09:30 AM"},{"id":3,"type":"info","title":"Dribble Designer Meetup","date":"19","month":"Mar","time":"10:30 AM"},{"id":4,"type":"warning","title":"Dribble Designer Meetup","date":"19","month":"Mar","time":"11:30 AM"}],"week":[{"id":1,"type":"primary","title":"Planning for new dashboard wireframe and prototype design","date":"12","month":"Sep","time":"08:30 AM"},{"id":2,"type":"info","title":"International Web Conference 2021","date":"16","month":"Sep","time":"09:30 AM"},{"id":3,"type":"secondary","title":"Dribble Designer Meetup","date":"15","month":"Sep","time":"10:30 AM"},{"id":4,"type":"warning","title":"Dribble Designer Meetup","date":"13","month":"Sep","time":"11:30 AM"}],"month":[{"id":1,"type":"primary","title":"Planning for new dashboard wireframe and prototype design","date":"24","month":"Apr","time":"08:30 AM"},{"id":2,"type":"secondary","title":"International Web Conference 2021","date":"24","month":"Apr","time":"09:30 AM"},{"id":3,"type":"info","title":"Dribble Designer Meetup","date":"24","month":"Apr","time":"10:30 AM"},{"id":4,"type":"warning","title":"Dribble Designer Meetup","date":"28","month":"Apr","time":"11:30 AM"}]},"trafficData":[{"id":1,"channel":"facebook","traffic":"38,536","sessions":90,"bounce":"2,584","startDate":"2023-07-12T08:00:00","duration":80,"statusType":"facebook"},{"id":2,"channel":"instagram","traffic":"28,536","sessions":70,"bounce":"2,584","startDate":"2023-07-12T08:00:00","duration":500,"statusType":"instagram"},{"id":3,"channel":"whatsapp","traffic":"18,536","sessions":60,"bounce":"2,584","startDate":"2023-07-12T08:00:00","duration":387,"statusType":"whatsapp"},{"id":4,"channel":"twitter","traffic":"15,536","sessions":55,"bounce":"2,584","startDate":"2023-07-12T08:00:00","duration":350,"statusType":"twitter"},{"id":5,"channel":"youtube","traffic":"10,536","sessions":50,"bounce":"2,584","startDate":"2023-07-12T08:00:00","duration":5600,"statusType":"youtube"},{"id":6,"channel":"linkedin","traffic":"9,536","sessions":45,"bounce":"2,584","startDate":"2023-07-12T08:00:00","duration":1200,"statusType":"linkedin"}]}');

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map