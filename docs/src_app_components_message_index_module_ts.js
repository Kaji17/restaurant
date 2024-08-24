"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_message_index_module_ts"],{

/***/ 46818:
/*!*********************************************!*\
  !*** ./src/app/components/message/close.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageCloseComponent: () => (/* binding */ NzDemoMessageCloseComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 39877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);






class NzDemoMessageCloseComponent {
  message;
  constructor(message) {
    this.message = message;
  }
  startShowMessages() {
    this.message.loading('Action in progress', {
      nzDuration: 2500
    }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.concatMap)(() => this.message.success('Loading finished', {
      nzDuration: 2500
    }).onClose), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.concatMap)(() => this.message.info('Loading finished is finished', {
      nzDuration: 2500
    }).onClose)).subscribe(() => {
      console.log('All completed!');
    });
  }
  static ɵfac = function NzDemoMessageCloseComponent_Factory(t) {
    return new (t || NzDemoMessageCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDemoMessageCloseComponent,
    selectors: [["nz-demo-message-close"]],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "hover:bg-gray-hbr", "border-solid", "border-1", "dark:bg-transparent", "border-normal", "dark:border-white/10", "text-light", "dark:text-white/60", "dark:focus:text-white/60", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"]],
    template: function NzDemoMessageCloseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzDemoMessageCloseComponent_Template_button_click_0_listener() {
          return ctx.startShowMessages();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Display a sequence of messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "default");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 14417:
/*!************************************************!*\
  !*** ./src/app/components/message/duration.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageDurationComponent: () => (/* binding */ NzDemoMessageDurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoMessageDurationComponent {
  message;
  createBasicMessage() {
    this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
      nzDuration: 10000
    });
  }
  constructor(message) {
    this.message = message;
  }
  static ɵfac = function NzDemoMessageDurationComponent_Factory(t) {
    return new (t || NzDemoMessageDurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMessageDurationComponent,
    selectors: [["nz-demo-message-duration"]],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "hover:bg-gray-hbr", "border-solid", "border-1", "dark:bg-transparent", "border-normal", "dark:border-white/10", "text-light", "dark:text-white/60", "dark:focus:text-white/60", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"]],
    template: function NzDemoMessageDurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMessageDurationComponent_Template_button_click_0_listener() {
          return ctx.createBasicMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Customized display duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "default");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 47045:
/*!****************************************************!*\
  !*** ./src/app/components/message/en.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageEnComponent: () => (/* binding */ NzDemoMessageEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close */ 46818);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration */ 14417);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info */ 40849);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ 29150);
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other */ 78004);







class NzDemoMessageEnComponent {
  static ɵfac = function NzDemoMessageEnComponent_Factory(t) {
    return new (t || NzDemoMessageEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NzDemoMessageEnComponent,
    selectors: [["nz-demo-message"]],
    decls: 36,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", "nzXl", "12", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]"]],
    template: function NzDemoMessageEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Normal prompt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "nz-demo-message-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Other types of message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "nz-demo-message-other");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Customize duration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "nz-demo-message-duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Message of loading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "nz-demo-message-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Customize duration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "nz-demo-message-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, _close__WEBPACK_IMPORTED_MODULE_0__.NzDemoMessageCloseComponent, _duration__WEBPACK_IMPORTED_MODULE_1__.NzDemoMessageDurationComponent, _info__WEBPACK_IMPORTED_MODULE_2__.NzDemoMessageInfoComponent, _loading__WEBPACK_IMPORTED_MODULE_3__.NzDemoMessageLoadingComponent, _other__WEBPACK_IMPORTED_MODULE_4__.NzDemoMessageOtherComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5421:
/*!****************************************************!*\
  !*** ./src/app/components/message/index.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageModule: () => (/* binding */ NzDemoMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 37110);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./close */ 46818);
/* harmony import */ var _duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration */ 14417);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info */ 40849);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ 29150);
/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other */ 78004);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en.component */ 47045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);














class NzDemoMessageModule {
  static ɵfac = function NzDemoMessageModule_Factory(t) {
    return new (t || NzDemoMessageModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: NzDemoMessageModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoMessageEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](NzDemoMessageModule, {
    declarations: [_close__WEBPACK_IMPORTED_MODULE_2__.NzDemoMessageCloseComponent, _duration__WEBPACK_IMPORTED_MODULE_3__.NzDemoMessageDurationComponent, _info__WEBPACK_IMPORTED_MODULE_4__.NzDemoMessageInfoComponent, _loading__WEBPACK_IMPORTED_MODULE_5__.NzDemoMessageLoadingComponent, _other__WEBPACK_IMPORTED_MODULE_6__.NzDemoMessageOtherComponent, _en_component__WEBPACK_IMPORTED_MODULE_7__.NzDemoMessageEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 40849:
/*!********************************************!*\
  !*** ./src/app/components/message/info.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageInfoComponent: () => (/* binding */ NzDemoMessageInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoMessageInfoComponent {
  message;
  constructor(message) {
    this.message = message;
  }
  createBasicMessage() {
    this.message.info('This is a normal message');
  }
  static ɵfac = function NzDemoMessageInfoComponent_Factory(t) {
    return new (t || NzDemoMessageInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMessageInfoComponent,
    selectors: [["nz-demo-message-info"]],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "bg-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"]],
    template: function NzDemoMessageInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMessageInfoComponent_Template_button_click_0_listener() {
          return ctx.createBasicMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Display normal message");
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

/***/ 29150:
/*!***********************************************!*\
  !*** ./src/app/components/message/loading.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageLoadingComponent: () => (/* binding */ NzDemoMessageLoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoMessageLoadingComponent {
  message;
  constructor(message) {
    this.message = message;
  }
  createBasicMessage() {
    const id = this.message.loading('Action in progress..', {
      nzDuration: 0
    }).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 2500);
  }
  static ɵfac = function NzDemoMessageLoadingComponent_Factory(t) {
    return new (t || NzDemoMessageLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMessageLoadingComponent,
    selectors: [["nz-demo-message-loading"]],
    decls: 2,
    vars: 1,
    consts: [["nz-button", "", 1, "hover:bg-gray-hbr", "border-solid", "border-1", "dark:bg-transparent", "border-normal", "dark:border-white/10", "text-light", "dark:text-white/60", "dark:focus:text-white/60", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "nzType", "click"]],
    template: function NzDemoMessageLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMessageLoadingComponent_Template_button_click_0_listener() {
          return ctx.createBasicMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Display a loading indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "default");
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 37110:
/*!**********************************************!*\
  !*** ./src/app/components/message/module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);



const moduleList = [ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_0__.NzMessageModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule];

/***/ }),

/***/ 78004:
/*!*********************************************!*\
  !*** ./src/app/components/message/other.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoMessageOtherComponent: () => (/* binding */ NzDemoMessageOtherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);





class NzDemoMessageOtherComponent {
  message;
  createMessage(type) {
    this.message.create(type, `This is a message of ${type}`);
  }
  constructor(message) {
    this.message = message;
  }
  static ɵfac = function NzDemoMessageOtherComponent_Factory(t) {
    return new (t || NzDemoMessageOtherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__.NzMessageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoMessageOtherComponent,
    selectors: [["nz-demo-message-other"]],
    decls: 6,
    vars: 0,
    consts: [["nz-button", "", 1, "bg-success", "hover:bg-success-hbr", "hover:border-success-hbr", "border-solid", "border-1", "border-success", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-button", "", 1, "bg-danger", "hover:bg-danger-hbr", "hover:border-danger-hbr", "border-solid", "border-1", "border-danger", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-button", "", 1, "bg-warning", "hover:bg-warning-hbr", "hover:border-warning-hbr", "border-solid", "border-1", "border-warning", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"]],
    template: function NzDemoMessageOtherComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMessageOtherComponent_Template_button_click_0_listener() {
          return ctx.createMessage("success");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMessageOtherComponent_Template_button_click_2_listener() {
          return ctx.createMessage("error");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoMessageOtherComponent_Template_button_click_4_listener() {
          return ctx.createMessage("warning");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
    styles: ["[nz-button][_ngcontent-%COMP%] {\n  margin-inline-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlL290aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNNO0VBQ0Usc0JBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgW256LWJ1dHRvbl0ge1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_message_index_module_ts.js.map