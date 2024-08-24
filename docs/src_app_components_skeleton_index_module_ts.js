"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_skeleton_index_module_ts"],{

/***/ 68160:
/*!***********************************************!*\
  !*** ./src/app/components/skeleton/active.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonActiveComponent: () => (/* binding */ NzDemoSkeletonActiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);


class NzDemoSkeletonActiveComponent {
  static ɵfac = function NzDemoSkeletonActiveComponent_Factory(t) {
    return new (t || NzDemoSkeletonActiveComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonActiveComponent,
    selectors: [["nz-demo-skeleton-active"]],
    decls: 1,
    vars: 1,
    consts: [[3, "nzActive"]],
    template: function NzDemoSkeletonActiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", true);
      }
    },
    dependencies: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 62719:
/*!**********************************************!*\
  !*** ./src/app/components/skeleton/basic.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonBasicComponent: () => (/* binding */ NzDemoSkeletonBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);


class NzDemoSkeletonBasicComponent {
  static ɵfac = function NzDemoSkeletonBasicComponent_Factory(t) {
    return new (t || NzDemoSkeletonBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonBasicComponent,
    selectors: [["nz-demo-skeleton-basic"]],
    decls: 1,
    vars: 0,
    template: function NzDemoSkeletonBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton");
      }
    },
    dependencies: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2418:
/*!*************************************************!*\
  !*** ./src/app/components/skeleton/children.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonChildrenComponent: () => (/* binding */ NzDemoSkeletonChildrenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoSkeletonChildrenComponent {
  loading = false;
  showSkeleton() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
  static ɵfac = function NzDemoSkeletonChildrenComponent_Factory(t) {
    return new (t || NzDemoSkeletonChildrenComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonChildrenComponent,
    selectors: [["nz-demo-skeleton-children"]],
    decls: 8,
    vars: 2,
    consts: [[1, "article"], [3, "nzLoading"], ["nz-button", "", 3, "disabled", "click"]],
    template: function NzDemoSkeletonChildrenComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nz-skeleton", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ant Design, a design language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSkeletonChildrenComponent_Template_button_click_6_listener() {
          return ctx.showSkeleton();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Show Skeleton ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
      }
    },
    dependencies: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    styles: [".article[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9za2VsZXRvbi9jaGlsZHJlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLG1CQUFBO0FBQVI7O0FBRU07RUFDRSxnQkFBQTtBQUNSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuYXJ0aWNsZSBoNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZSBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9717:
/*!************************************************!*\
  !*** ./src/app/components/skeleton/complex.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonComplexComponent: () => (/* binding */ NzDemoSkeletonComplexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);


const _c0 = function () {
  return {
    rows: 4
  };
};
class NzDemoSkeletonComplexComponent {
  static ɵfac = function NzDemoSkeletonComplexComponent_Factory(t) {
    return new (t || NzDemoSkeletonComplexComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonComplexComponent,
    selectors: [["nz-demo-skeleton-complex"]],
    decls: 1,
    vars: 3,
    consts: [[3, "nzAvatar", "nzParagraph"]],
    template: function NzDemoSkeletonComplexComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-skeleton", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", true)("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    },
    dependencies: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_1__.NzSkeletonComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 27449:
/*!************************************************!*\
  !*** ./src/app/components/skeleton/element.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonElementComponent: () => (/* binding */ NzDemoSkeletonElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);






class NzDemoSkeletonElementComponent {
  buttonActive = false;
  avatarActive = false;
  inputActive = false;
  buttonSize = 'default';
  avatarSize = 'default';
  inputSize = 'default';
  buttonShape = 'default';
  avatarShape = 'circle';
  static ɵfac = function NzDemoSkeletonElementComponent_Factory(t) {
    return new (t || NzDemoSkeletonElementComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonElementComponent,
    selectors: [["nz-demo-skeleton-element"]],
    decls: 65,
    vars: 19,
    consts: [["nz-row", "", "nzAlign", "middle", 3, "nzGutter"], ["nz-col", "", "nzSpan", "5"], [3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "9"], ["nz-radio-button", "", "nzValue", "default"], ["nz-radio-button", "", "nzValue", "large"], ["nz-radio-button", "", "nzValue", "small"], ["nz-radio-button", "", "nzValue", "circle"], ["nz-radio-button", "", "nzValue", "round"], ["nzType", "button", 3, "nzActive", "nzSize", "nzShape"], ["nz-radio-button", "", "nzValue", "square"], ["nzType", "avatar", 3, "nzActive", "nzSize", "nzShape"], ["nzType", "input", 2, "width", "300px", 3, "nzActive", "nzSize"]],
    template: function NzDemoSkeletonElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ButtonActive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_switch_ngModelChange_3_listener($event) {
          return ctx.buttonActive = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ButtonSize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_6_listener($event) {
          return ctx.buttonSize = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ButtonShape: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_15_listener($event) {
          return ctx.buttonShape = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Round");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br")(23, "nz-skeleton-element", 9)(24, "br")(25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0)(27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " AvatarActive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_switch_ngModelChange_29_listener($event) {
          return ctx.avatarActive = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " AvatarSize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_32_listener($event) {
          return ctx.avatarSize = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " AvatarShape: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_41_listener($event) {
          return ctx.avatarShape = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Square");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br")(47, "nz-skeleton-element", 11)(48, "br")(49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 0)(51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " InputActive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_switch_ngModelChange_53_listener($event) {
          return ctx.inputActive = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " InputSize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonElementComponent_Template_nz_radio_group_ngModelChange_56_listener($event) {
          return ctx.inputSize = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br")(64, "nz-skeleton-element", 12);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buttonActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buttonSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buttonShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", ctx.buttonActive)("nzSize", ctx.buttonSize)("nzShape", ctx.buttonShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.avatarShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", ctx.avatarActive)("nzSize", ctx.avatarSize)("nzShape", ctx.avatarShape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzActive", ctx.inputActive)("nzSize", ctx.inputSize);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__.NzSkeletonElementDirective, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__.NzSkeletonElementButtonComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__.NzSkeletonElementAvatarComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_3__.NzSkeletonElementInputComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_4__.NzSwitchComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioGroupComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 81332:
/*!*****************************************************!*\
  !*** ./src/app/components/skeleton/en.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonEnComponent: () => (/* binding */ NzDemoSkeletonEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 36448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active */ 68160);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 62719);
/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complex */ 9717);






class NzDemoSkeletonEnComponent {
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
  static ɵfac = function NzDemoSkeletonEnComponent_Factory(t) {
    return new (t || NzDemoSkeletonEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonEnComponent,
    selectors: [["nz-demo-skeleton"]],
    viewQuery: function NzDemoSkeletonEnComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
      }
    },
    decls: 22,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzLg", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "h-full"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"]],
    template: function NzDemoSkeletonEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-demo-skeleton-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Complex combination");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-demo-skeleton-complex");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Active Animation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "nz-demo-skeleton-active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _active__WEBPACK_IMPORTED_MODULE_1__.NzDemoSkeletonActiveComponent, _basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoSkeletonBasicComponent, _complex__WEBPACK_IMPORTED_MODULE_3__.NzDemoSkeletonComplexComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 23205:
/*!*****************************************************!*\
  !*** ./src/app/components/skeleton/index.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonModule: () => (/* binding */ NzDemoSkeletonModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 43775);
/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active */ 68160);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic */ 62719);
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./children */ 2418);
/* harmony import */ var _complex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complex */ 9717);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element */ 27449);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list */ 19306);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./en.component */ 81332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);


















class NzDemoSkeletonModule {
  static ɵfac = function NzDemoSkeletonModule_Factory(t) {
    return new (t || NzDemoSkeletonModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: NzDemoSkeletonModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoSkeletonEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoSkeletonModule, {
    declarations: [_active__WEBPACK_IMPORTED_MODULE_2__.NzDemoSkeletonActiveComponent, _basic__WEBPACK_IMPORTED_MODULE_3__.NzDemoSkeletonBasicComponent, _children__WEBPACK_IMPORTED_MODULE_4__.NzDemoSkeletonChildrenComponent, _complex__WEBPACK_IMPORTED_MODULE_5__.NzDemoSkeletonComplexComponent, _element__WEBPACK_IMPORTED_MODULE_6__.NzDemoSkeletonElementComponent, _list__WEBPACK_IMPORTED_MODULE_7__.NzDemoSkeletonListComponent, _en_component__WEBPACK_IMPORTED_MODULE_8__.NzDemoSkeletonEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_11__.NzSkeletonModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_12__.NzListModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 19306:
/*!*********************************************!*\
  !*** ./src/app/components/skeleton/list.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoSkeletonListComponent: () => (/* binding */ NzDemoSkeletonListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);







function NzDemoSkeletonListComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 156");
  }
}
function NzDemoSkeletonListComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 156");
  }
}
function NzDemoSkeletonListComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 2");
  }
}
function NzDemoSkeletonListComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
  }
}
function NzDemoSkeletonListComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
  }
}
const _c0 = function () {
  return [];
};
const _c1 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
function NzDemoSkeletonListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 3)(1, "nz-skeleton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSkeletonListComponent_ng_template_2_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSkeletonListComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoSkeletonListComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-list-item-meta", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoSkeletonListComponent_ng_template_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoSkeletonListComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzContent", ctx_r1.loading ? " " : item_r2.content)("nzActions", ctx_r1.loading ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c1, _r3, _r5, _r7))("nzExtra", ctx_r1.loading ? "" : _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r1.loading)("nzActive", true)("nzAvatar", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAvatar", item_r2.avatar)("nzTitle", _r9)("nzDescription", item_r2.description);
  }
}
class NzDemoSkeletonListComponent {
  loading = true;
  listData = new Array(3).fill({}).map((_i, index) => {
    return {
      href: 'http://ng.ant.design',
      title: `ant design part ${index}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources ' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  });
  static ɵfac = function NzDemoSkeletonListComponent_Factory(t) {
    return new (t || NzDemoSkeletonListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoSkeletonListComponent,
    selectors: [["nz-demo-skeleton-list"]],
    decls: 4,
    vars: 4,
    consts: [[3, "ngModel", "ngModelChange"], [3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzContent", "nzActions", "nzExtra"], [3, "nzLoading", "nzActive", "nzAvatar"], ["starAction", ""], ["likeAction", ""], ["msgAction", ""], [3, "nzAvatar", "nzTitle", "nzDescription"], ["nzTitle", ""], ["extra", ""], ["nz-icon", "", "nzType", "star-o", 2, "margin-right", "8px"], ["nz-icon", "", "nzType", "like-o", 2, "margin-right", "8px"], ["nz-icon", "", "nzType", "message", 2, "margin-right", "8px"], [3, "href"], ["width", "272", "alt", "logo", "src", "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"]],
    template: function NzDemoSkeletonListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-switch", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSkeletonListComponent_Template_nz_switch_ngModelChange_0_listener($event) {
          return ctx.loading = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSkeletonListComponent_ng_template_2_Template, 13, 14, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.listData)("nzRenderItem", _r0)("nzItemLayout", "vertical");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_2__.NzSkeletonComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_3__.NzListItemMetaComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_4__.NzSwitchComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]],
    encapsulation: 2
  });
}

/***/ }),

/***/ 43775:
/*!***********************************************!*\
  !*** ./src/app/components/skeleton/module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/switch */ 62913);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);






const moduleList = [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_0__.NzSkeletonModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_2__.NzSwitchModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__.NzRadioModule];

/***/ })

}]);
//# sourceMappingURL=src_app_components_skeleton_index_module_ts.js.map