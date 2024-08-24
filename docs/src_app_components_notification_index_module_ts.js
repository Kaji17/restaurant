"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_notification_index_module_ts"],{

/***/ 69793:
/*!**************************************************!*\
  !*** ./src/app/components/notification/basic.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationBasicComponent: () => (/* binding */ NzDemoNotificationBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoNotificationBasicComponent {
  notification;
  constructor(notification) {
    this.notification = notification;
  }
  createBasicNotification() {
    this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.').onClick.subscribe(() => {
      console.log('notification clicked!');
    });
  }
  static ɵfac = function NzDemoNotificationBasicComponent_Factory(t) {
    return new (t || NzDemoNotificationBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoNotificationBasicComponent,
    selectors: [["nz-demo-notification-basic"]],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"]],
    template: function NzDemoNotificationBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationBasicComponent_Template_button_click_0_listener() {
          return ctx.createBasicNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open the notification box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77589:
/*!********************************************************!*\
  !*** ./src/app/components/notification/custom-icon.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationCustomIconComponent: () => (/* binding */ NzDemoNotificationCustomIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);






function NzDemoNotificationCustomIconComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Notification Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This is the content of the notification. This is the content of the notification. This is the content of the notification. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class NzDemoNotificationCustomIconComponent {
  notification;
  constructor(notification) {
    this.notification = notification;
  }
  createBasicNotification(template) {
    this.notification.template(template);
  }
  static ɵfac = function NzDemoNotificationCustomIconComponent_Factory(t) {
    return new (t || NzDemoNotificationCustomIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoNotificationCustomIconComponent,
    selectors: [["nz-demo-notification-custom-icon"]],
    decls: 4,
    vars: 1,
    consts: [["template", ""], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-with-icon"], [1, "ant-notification-notice-icon"], ["nz-icon", "", "nzType", "smile", 2, "color", "rgb(16, 142, 233)"], [1, "ant-notification-notice-message"], [1, "ant-notification-notice-description"]],
    template: function NzDemoNotificationCustomIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoNotificationCustomIconComponent_ng_template_0_Template, 8, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationCustomIconComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.createBasicNotification(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Open the notification box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 12167:
/*!*****************************************************!*\
  !*** ./src/app/components/notification/duration.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationDurationComponent: () => (/* binding */ NzDemoNotificationDurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoNotificationDurationComponent {
  notification;
  createBasicNotification() {
    this.notification.blank('Notification Title', 'I will never close automatically. I will be close automatically. I will never close automatically.', {
      nzDuration: 0
    });
  }
  constructor(notification) {
    this.notification = notification;
  }
  static ɵfac = function NzDemoNotificationDurationComponent_Factory(t) {
    return new (t || NzDemoNotificationDurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoNotificationDurationComponent,
    selectors: [["nz-demo-notification-duration"]],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"]],
    template: function NzDemoNotificationDurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationDurationComponent_Template_button_click_0_listener() {
          return ctx.createBasicNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Open the notification box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 55776:
/*!*********************************************************!*\
  !*** ./src/app/components/notification/en.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationEnComponent: () => (/* binding */ NzDemoNotificationEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 69793);
/* harmony import */ var _custom_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-icon */ 77589);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duration */ 12167);
/* harmony import */ var _with_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-btn */ 20509);
/* harmony import */ var _with_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./with-icon */ 36936);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placement */ 75191);








class NzDemoNotificationEnComponent {
  static ɵfac = function NzDemoNotificationEnComponent_Factory(t) {
    return new (t || NzDemoNotificationEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NzDemoNotificationEnComponent,
    selectors: [["nz-demo-notification"]],
    decls: 43,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzXl", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoNotificationEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "nz-demo-notification-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Duration after which the notification box is closed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "nz-demo-notification-duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Notification with icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "nz-demo-notification-with-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Custom close button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "nz-demo-notification-with-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Customized Icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "nz-demo-notification-custom-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 1)(37, "div", 2)(38, "div", 3)(39, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Placement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "nz-demo-notification-placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoNotificationBasicComponent, _custom_icon__WEBPACK_IMPORTED_MODULE_1__.NzDemoNotificationCustomIconComponent, _duration__WEBPACK_IMPORTED_MODULE_2__.NzDemoNotificationDurationComponent, _with_btn__WEBPACK_IMPORTED_MODULE_3__.NzDemoNotificationWithBtnComponent, _with_icon__WEBPACK_IMPORTED_MODULE_4__.NzDemoNotificationWithIconComponent, _placement__WEBPACK_IMPORTED_MODULE_5__.NzDemoNotificationPlacementComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 91322:
/*!*********************************************************!*\
  !*** ./src/app/components/notification/index.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationModule: () => (/* binding */ NzDemoNotificationModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 47945);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 69793);
/* harmony import */ var _custom_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-icon */ 77589);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration */ 12167);
/* harmony import */ var _with_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./with-btn */ 20509);
/* harmony import */ var _with_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./with-icon */ 36936);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ 55776);
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./placement */ 75191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);


















class NzDemoNotificationModule {
  static ɵfac = function NzDemoNotificationModule_Factory(t) {
    return new (t || NzDemoNotificationModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: NzDemoNotificationModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoNotificationEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](NzDemoNotificationModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoNotificationBasicComponent, _custom_icon__WEBPACK_IMPORTED_MODULE_3__.NzDemoNotificationCustomIconComponent, _duration__WEBPACK_IMPORTED_MODULE_4__.NzDemoNotificationDurationComponent, _with_btn__WEBPACK_IMPORTED_MODULE_5__.NzDemoNotificationWithBtnComponent, _with_icon__WEBPACK_IMPORTED_MODULE_6__.NzDemoNotificationWithIconComponent, _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoNotificationEnComponent, _placement__WEBPACK_IMPORTED_MODULE_8__.NzDemoNotificationPlacementComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_11__.NzNotificationModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__.NzDividerModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 47945:
/*!***************************************************!*\
  !*** ./src/app/components/notification/module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);






const moduleList = [ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_0__.NzNotificationModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_4__.NzTagModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__.NzDividerModule];

/***/ }),

/***/ 75191:
/*!******************************************************!*\
  !*** ./src/app/components/notification/placement.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationPlacementComponent: () => (/* binding */ NzDemoNotificationPlacementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);







class NzDemoNotificationPlacementComponent {
  notification;
  placement = 'topRight';
  createBasicNotification(position) {
    this.notification.blank('Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.', {
      nzPlacement: position
    });
  }
  constructor(notification) {
    this.notification = notification;
  }
  static ɵfac = function NzDemoNotificationPlacementComponent_Factory(t) {
    return new (t || NzDemoNotificationPlacementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoNotificationPlacementComponent,
    selectors: [["nz-demo-notification-placement"]],
    decls: 20,
    vars: 0,
    consts: [["nz-button", "", "nzType", "primary", 1, "bg-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-icon", "", "nzType", "border-top", "nzTheme", "outline"], ["nz-icon", "", "nzType", "border-bottom", "nzTheme", "outline"], ["nz-icon", "", "nzType", "radius-upleft"], ["nz-icon", "", "nzType", "radius-upright"], ["nz-icon", "", "nzType", "radius-bottomleft"], ["nz-icon", "", "nzType", "radius-bottomright"]],
    template: function NzDemoNotificationPlacementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationPlacementComponent_Template_button_click_0_listener() {
          return ctx.createBasicNotification("top");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationPlacementComponent_Template_button_click_3_listener() {
          return ctx.createBasicNotification("bottom");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationPlacementComponent_Template_button_click_7_listener() {
          return ctx.createBasicNotification("topLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " topLeft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationPlacementComponent_Template_button_click_10_listener() {
          return ctx.createBasicNotification("topRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " topRight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationPlacementComponent_Template_button_click_14_listener() {
          return ctx.createBasicNotification("bottomLeft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " bottomLeft ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationPlacementComponent_Template_button_click_17_listener() {
          return ctx.createBasicNotification("bottomRight");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " bottomRight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__.NzDividerComponent],
    styles: ["button[_ngcontent-%COMP%] {\n  margin-inline-end: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vcGxhY2VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0Usc0JBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDFlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 20509:
/*!*****************************************************!*\
  !*** ./src/app/components/notification/with-btn.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationWithBtnComponent: () => (/* binding */ NzDemoNotificationWithBtnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





function NzDemoNotificationWithBtnComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Notification Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A function will be be called after the notification is closed (automatically after the \"duration\" time of manually). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5)(7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationWithBtnComponent_ng_template_0_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const notification_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](notification_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
}
class NzDemoNotificationWithBtnComponent {
  notification;
  constructor(notification) {
    this.notification = notification;
  }
  createBasicNotification(template) {
    this.notification.template(template);
  }
  static ɵfac = function NzDemoNotificationWithBtnComponent_Factory(t) {
    return new (t || NzDemoNotificationWithBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoNotificationWithBtnComponent,
    selectors: [["nz-demo-notification-with-btn"]],
    decls: 4,
    vars: 1,
    consts: [["template", ""], ["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-message"], [1, "ant-notification-notice-description"], [1, "ant-notification-notice-btn"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"]],
    template: function NzDemoNotificationWithBtnComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoNotificationWithBtnComponent_ng_template_0_Template, 10, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationWithBtnComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.createBasicNotification(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Open the notification box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36936:
/*!******************************************************!*\
  !*** ./src/app/components/notification/with-icon.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoNotificationWithIconComponent: () => (/* binding */ NzDemoNotificationWithIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoNotificationWithIconComponent {
  notification;
  createNotification(type) {
    this.notification.create(type, 'Notification Title', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.');
  }
  constructor(notification) {
    this.notification = notification;
  }
  static ɵfac = function NzDemoNotificationWithIconComponent_Factory(t) {
    return new (t || NzDemoNotificationWithIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoNotificationWithIconComponent,
    selectors: [["nz-demo-notification-with-icon"]],
    decls: 8,
    vars: 0,
    consts: [["nz-button", "", 1, "bg-success", "hover:bg-success-hbr", "hover:border-success-hbr", "border-solid", "border-1", "border-success", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-button", "", 1, "bg-info", "hover:bg-info-hbr", "hover:border-info-hbr", "border-solid", "border-1", "border-info", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-button", "", 1, "bg-warning", "hover:bg-warning-hbr", "hover:border-warning-hbr", "border-solid", "border-1", "border-warning", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-button", "", 1, "bg-danger", "hover:bg-danger-hbr", "hover:border-danger-hbr", "border-solid", "border-1", "border-danger", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"]],
    template: function NzDemoNotificationWithIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationWithIconComponent_Template_button_click_0_listener() {
          return ctx.createNotification("success");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationWithIconComponent_Template_button_click_2_listener() {
          return ctx.createNotification("info");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationWithIconComponent_Template_button_click_4_listener() {
          return ctx.createNotification("warning");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoNotificationWithIconComponent_Template_button_click_6_listener() {
          return ctx.createNotification("error");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    styles: ["button[_ngcontent-%COMP%] {\n  margin-inline-end: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vd2l0aC1pY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0Usc0JBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDFlbTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

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



/***/ })

}]);
//# sourceMappingURL=src_app_components_notification_index_module_ts.js.map