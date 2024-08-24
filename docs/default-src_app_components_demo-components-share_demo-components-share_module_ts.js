"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["default-src_app_components_demo-components-share_demo-components-share_module_ts"],{

/***/ 65273:
/*!**********************************************************************************!*\
  !*** ./src/app/components/demo-components-share/demo-components-share.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoComponentsShareModule: () => (/* binding */ DemoComponentsShareModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 50275);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/affix */ 52287);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 61201);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quicklink */ 89624);
/* harmony import */ var _shared_components_codebox_codebox_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.module */ 78039);
/* harmony import */ var _shared_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/highlight/highlight.module */ 68597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);













class DemoComponentsShareModule {
  static ɵfac = function DemoComponentsShareModule_Factory(t) {
    return new (t || DemoComponentsShareModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: DemoComponentsShareModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _shared_components_codebox_codebox_module__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxModule, _shared_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.NzHighlightModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzGridModule,
    // third libs
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_components_codebox_codebox_module__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxModule, _shared_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.NzHighlightModule, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzGridModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule,
    // third libs
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollingModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DemoComponentsShareModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _shared_components_codebox_codebox_module__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxModule, _shared_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.NzHighlightModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzGridModule,
    // third libs
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_components_codebox_codebox_module__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxModule, _shared_components_highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.NzHighlightModule, ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__.NzAnchorModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_8__.NzAffixModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzGridModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__.NzToolTipModule,
    // third libs
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollingModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__.QuicklinkModule]
  });
})();

/***/ }),

/***/ 36448:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/codebox/codebox.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzCodeBoxComponent: () => (/* binding */ NzCodeBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _codebox_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codebox.service */ 53561);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);
/* harmony import */ var _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highlight/highlight.component */ 36948);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);











function NzCodeBoxComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r0.simulateIFrame && ctx_r0.nzIframeHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("simulate-iframe", ctx_r0.simulateIFrame)("browser-mockup", ctx_r0.simulateIFrame)("with-url", ctx_r0.simulateIFrame);
  }
}
function NzCodeBoxComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "iframe", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.iframe, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"])("height", ctx_r1.nzIframeHeight);
  }
}
function NzCodeBoxComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_i_14_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.copyGenerateCommand(ctx_r5.nzGenerateCommand));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tooltip-open", ctx_r2.commandCopied);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", ctx_r2.language === "zh" ? "\u590D\u5236\u751F\u6210\u4EE3\u7801\u547D\u4EE4" : "Copy Generate Command")("nzType", ctx_r2.commandCopied ? "check" : "code");
  }
}
function NzCodeBoxComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22)(2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", ctx_r3.nzExpanded)("code-expand-icon-hide", !ctx_r3.nzExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", !ctx_r3.nzExpanded)("code-expand-icon-hide", ctx_r3.nzExpanded);
  }
}
function NzCodeBoxComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 24)(2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", ctx_r4.nzExpanded)("code-expand-icon-hide", !ctx_r4.nzExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", !ctx_r4.nzExpanded)("code-expand-icon-hide", ctx_r4.nzExpanded);
  }
}
const _c0 = [[["", "intro", ""]], [["", "code", ""]], [["", "demo", ""]]];
const _c1 = function (a0) {
  return {
    expand: a0
  };
};
const _c2 = function (a0) {
  return {
    "highlight-wrapper-expand": a0
  };
};
const _c3 = ["[intro]", "[code]", "[demo]"];
// import { stackBlitzConfiguration } from './stack-blitz';
class NzCodeBoxComponent {
  dom;
  sanitizer;
  cdr;
  codeBoxService;
  platform;
  highlightCode;
  copied = false;
  commandCopied = false;
  showIframe;
  simulateIFrame;
  iframe;
  language = 'en';
  theme = 'default';
  destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  codeLoaded = false;
  openStackBlitzLoading = false;
  copyLoading = false;
  nzTitle;
  nzExpanded = false;
  nzHref;
  nzLink;
  nzId;
  nzIframeHeight = 360;
  nzComponentName = '';
  nzSelector = '';
  nzGenerateCommand = '';
  set nzIframeSource(value) {
    this.showIframe = value !== 'null';
    this.simulateIFrame = value !== 'null';
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
  navigateToFragment() {
    if (this.platform.isBrowser) {
      window.location.hash = this.nzLink;
    }
  }
  copyCode() {
    setTimeout(() => {
      this.copyLoading = !this.codeLoaded;
      this.check();
    }, 120);
    this.getDemoCode().subscribe(data => {
      this.copyLoading = false;
      this.check();
      this.copy(data.rawCode).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
          this.check();
        }, 1000);
      });
    });
  }
  copyGenerateCommand(command) {
    this.copy(command).then(() => {
      this.commandCopied = true;
      setTimeout(() => {
        this.commandCopied = false;
        this.check();
      }, 1000);
    });
  }
  copy(value) {
    const promise = new Promise(resolve => {
      // @ts-ignore
      let copyTextArea = null;
      try {
        copyTextArea = this.dom.createElement('textarea');
        copyTextArea.style.height = '0px';
        copyTextArea.style.opacity = '0';
        copyTextArea.style.width = '0px';
        this.dom.body.appendChild(copyTextArea);
        copyTextArea.value = value;
        copyTextArea.select();
        this.dom.execCommand('copy');
        resolve(value);
      } finally {
        if (copyTextArea && copyTextArea.parentNode) {
          copyTextArea.parentNode.removeChild(copyTextArea);
        }
      }
    });
    return promise;
  }
  expandCode(expanded) {
    this.nzExpanded = expanded;
    if (expanded) {
      this.getDemoCode().subscribe();
    }
  }
  // openOnStackBlitz(): void {
  //   setTimeout(() => {
  //     this.openStackBlitzLoading = !this.codeLoaded;
  //     this.check();
  //   }, 120);
  //   this.getDemoCode().subscribe(data => {
  //     this.openStackBlitzLoading = false;
  //     this.check();
  //     sdk.openProject(stackBlitzConfiguration(this.nzComponentName, data.rawCode, this.nzSelector, VERSION.full));
  //   });
  // }
  check() {
    this.cdr.markForCheck();
  }
  // tslint:disable-next-line:no-any
  constructor(dom, sanitizer, cdr, codeBoxService, platform) {
    this.dom = dom;
    this.sanitizer = sanitizer;
    this.cdr = cdr;
    this.codeBoxService = codeBoxService;
    this.platform = platform;
  }
  ngOnInit() {
    this.codeBoxService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(data => {
      this.theme = data;
      this.check();
    });
    this.codeBoxService.language$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(data => {
      this.language = data;
      this.check();
    });
  }
  getDemoCode() {
    return this.codeBoxService.getCode(this.nzId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
      if (data) {
        this.highlightCode = data.highlightCode;
        this.codeLoaded = true;
        this.check();
      }
    }));
  }
  ngOnDestroy() {
    this.destroy$.next('some string value');
    this.destroy$.complete();
  }
  static ɵfac = function NzCodeBoxComponent_Factory(t) {
    return new (t || NzCodeBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_codebox_service__WEBPACK_IMPORTED_MODULE_0__.CodeBoxService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzCodeBoxComponent,
    selectors: [["nz-code-box"]],
    inputs: {
      nzTitle: "nzTitle",
      nzExpanded: "nzExpanded",
      nzHref: "nzHref",
      nzLink: "nzLink",
      nzId: "nzId",
      nzIframeHeight: "nzIframeHeight",
      nzComponentName: "nzComponentName",
      nzSelector: "nzSelector",
      nzGenerateCommand: "nzGenerateCommand",
      nzIframeSource: "nzIframeSource"
    },
    ngContentSelectors: _c3,
    decls: 23,
    vars: 21,
    consts: [[1, "code-box", 3, "ngClass"], [1, "code-box-demo"], [3, "simulate-iframe", "browser-mockup", "with-url", "height", 4, "ngIf"], ["class", "browser-mockup with-url", 4, "ngIf"], [1, "code-box-meta", "markdown"], [1, "code-box-title"], [3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], [1, "code-box-description"], [1, "code-box-actions"], ["nz-tooltip", "", "nz-icon", "", 1, "code-box-code-copy", 3, "nzTooltipTitle", "nzType", "click"], ["nz-tooltip", "", "nz-icon", "", "class", "code-box-code-copy", 3, "nzTooltipTitle", "nzType", "ant-tooltip-open", "click", 4, "ngIf"], ["nz-tooltip", "", 1, "code-expand-icon", 3, "nzTooltipTitle", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "highlight-wrapper", 3, "ngClass"], [1, "highlight"], [3, "nzCode", "nzLanguage"], [1, "browser-mockup", "with-url"], ["title", "demo", 3, "src", "height"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"]],
    template: function NzCodeBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzCodeBoxComponent_div_2_Template, 2, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzCodeBoxComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_a_click_6_listener() {
          return ctx.navigateToFragment();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_i_click_13_listener() {
          return ctx.copyCode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NzCodeBoxComponent_i_14_Template, 1, 4, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_span_click_15_listener() {
          return ctx.expandCode(!ctx.nzExpanded);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NzCodeBoxComponent_ng_container_17_Template, 3, 8, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NzCodeBoxComponent_ng_container_18_Template, 3, 8, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 17)(20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](21, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "nz-highlight", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c1, ctx.nzExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.nzId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showIframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showIframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.nzTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx.nzHref, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tooltip-open", ctx.copied);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", !ctx.copyLoading ? ctx.language === "zh" ? "\u590D\u5236\u4EE3\u7801" : "Copy Code" : ctx.language === "zh" ? "\u52A0\u8F7D\u4E2D..." : "Loading...")("nzType", ctx.copied ? "check" : "snippets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzGenerateCommand);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", ctx.nzExpanded ? ctx.language === "zh" ? "\u6536\u8D77\u4EE3\u7801" : "Hide Code" : ctx.language === "zh" ? "\u663E\u793A\u4EE3\u7801" : "Show Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c2, ctx.nzExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzCode", ctx.codeLoaded ? ctx.highlightCode : ctx.language === "zh" ? "\u52A0\u8F7D\u4E2D" : "Loading...")("nzLanguage", "typescript");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault, _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_1__.NzHighlightComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__.NzTooltipDirective],
    styles: [".simulate-iframe {\n  transform: translateX(0px);\n  display: block;\n}\n.simulate-iframe > * {\n  display: block;\n  height: 100%;\n  overflow: auto;\n  transform: translateX(0px);\n}\n.simulate-iframe > * > * {\n  overflow: auto;\n  height: 100%;\n}\nnz-code-box {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29kZWJveC9jb2RlYm94LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBREY7QUFEQTtFQUlJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBQUo7QUFQQTtFQVNNLGNBQUE7RUFDQSxZQUFBO0FBQ047QUFJQTtFQUNFLGNBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc2ltdWxhdGUtaWZyYW1lIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICA+ICoge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICA+ICoge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbm56LWNvZGUtYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 78039:
/*!*************************************************************!*\
  !*** ./src/app/shared/components/codebox/codebox.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzCodeBoxModule: () => (/* binding */ NzCodeBoxModule)
/* harmony export */ });
/* harmony import */ var _codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codebox.component */ 36448);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highlight/highlight.module */ 68597);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);






class NzCodeBoxModule {
  static ɵfac = function NzCodeBoxModule_Factory(t) {
    return new (t || NzCodeBoxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NzCodeBoxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.NzHighlightModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__.NzToolTipModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCodeBoxModule, {
    declarations: [_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_1__.NzHighlightModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__.NzToolTipModule],
    exports: [_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent]
  });
})();

/***/ }),

/***/ 53561:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/codebox/codebox.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBoxService: () => (/* binding */ CodeBoxService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);




class CodeBoxService {
  http;
  codeMap = new Map();
  language$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
  theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
  constructor(http) {
    this.http = http;
  }
  getCode(componentId) {
    if (this.codeMap.has(componentId)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.codeMap.get(componentId));
    } else {
      const path = componentId.startsWith('components-') ? componentId.split('components-')[1] : componentId;
      return this.http.get(`./assets/codes/${path}.json`, {
        responseType: "json"
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.codeMap.set(componentId, data);
      }));
    }
  }
  static ɵfac = function CodeBoxService_Factory(t) {
    return new (t || CodeBoxService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CodeBoxService,
    factory: CodeBoxService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 36948:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/highlight/highlight.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzHighlightComponent: () => (/* binding */ NzHighlightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 36480);


const _c0 = ["code"];
class NzHighlightComponent {
  sanitizer;
  code;
  codeElement;
  nzLanguage;
  get nzCode() {
    return this.code || '';
  }
  set nzCode(value) {
    this.code = this.sanitizer.bypassSecurityTrustHtml(value);
  }
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  ngOnInit() {}
  static ɵfac = function NzHighlightComponent_Factory(t) {
    return new (t || NzHighlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzHighlightComponent,
    selectors: [["nz-highlight"]],
    viewQuery: function NzHighlightComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeElement = _t.first);
      }
    },
    inputs: {
      nzLanguage: "nzLanguage",
      nzCode: "nzCode"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "language-angular"], [3, "innerHTML"]],
    template: function NzHighlightComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 68597:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/highlight/highlight.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzHighlightModule: () => (/* binding */ NzHighlightModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _highlight_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.component */ 36948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class NzHighlightModule {
  static ɵfac = function NzHighlightModule_Factory(t) {
    return new (t || NzHighlightModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NzHighlightModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzHighlightModule, {
    declarations: [_highlight_component__WEBPACK_IMPORTED_MODULE_0__.NzHighlightComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_highlight_component__WEBPACK_IMPORTED_MODULE_0__.NzHighlightComponent]
  });
})();

/***/ }),

/***/ 61201:
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-anchor.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzAnchorComponent: () => (/* binding */ NzAnchorComponent),
/* harmony export */   NzAnchorLinkComponent: () => (/* binding */ NzAnchorLinkComponent),
/* harmony export */   NzAnchorModule: () => (/* binding */ NzAnchorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 54524);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 45118);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ 52287);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);

















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["ink"];
function NzAnchorComponent_nz_affix_0_ng_template_1_Template(rf, ctx) {}
function NzAnchorComponent_nz_affix_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-affix", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzAnchorComponent_nz_affix_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", ctx_r0.nzOffsetTop)("nzTarget", ctx_r0.container);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
  }
}
const _c1 = function (a0) {
  return {
    "ant-anchor-fixed": a0
  };
};
function NzAnchorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.wrapperStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !ctx_r2.nzAffix && !ctx_r2.nzShowInkInFixed));
  }
}
const _c2 = ["*"];
const _c3 = ["nzTemplate"];
const _c4 = ["linkTitle"];
function NzAnchorLinkComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.titleStr);
  }
}
function getOffsetTop(element, container) {
  if (!element || !element.getClientRects().length) {
    return 0;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      const documentElement = element.ownerDocument.documentElement;
      return rect.top - documentElement.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }
  return rect.top;
}
const NZ_CONFIG_MODULE_NAME = 'anchor';
const sharpMatcherRegx = /#([^#]+)$/;
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({
  passive: true
});
class NzAnchorComponent {
  constructor(doc, nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
    this.doc = doc;
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.cdr = cdr;
    this.platform = platform;
    this.zone = zone;
    this.renderer = renderer;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzAffix = true;
    this.nzShowInkInFixed = false;
    this.nzBounds = 5;
    this.nzOffsetTop = undefined;
    this.nzTargetOffset = undefined;
    this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.nzScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.visible = false;
    this.wrapperStyle = {
      'max-height': '100vh'
    };
    this.links = [];
    this.animating = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.handleScrollTimeoutID = -1;
  }
  registerLink(link) {
    this.links.push(link);
  }
  unregisterLink(link) {
    this.links.splice(this.links.indexOf(link), 1);
  }
  getContainer() {
    return this.container || window;
  }
  ngAfterViewInit() {
    this.registerScrollEvent();
  }
  ngOnDestroy() {
    clearTimeout(this.handleScrollTimeoutID);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  registerScrollEvent() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.destroy$.next(true);
    this.zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.getContainer(), 'scroll', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.throttleTime)(50), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => this.handleScroll());
    });
    // Browser would maintain the scrolling position when refreshing.
    // So we have to delay calculation in avoid of getting a incorrect result.
    this.handleScrollTimeoutID = setTimeout(() => this.handleScroll());
  }
  handleScroll() {
    if (typeof document === 'undefined' || this.animating) {
      return;
    }
    const sections = [];
    const offsetTop = this.nzTargetOffset ? this.nzTargetOffset : this.nzOffsetTop || 0;
    const scope = offsetTop + this.nzBounds;
    this.links.forEach(comp => {
      const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
      if (!sharpLinkMatch) {
        return;
      }
      const target = this.doc.getElementById(sharpLinkMatch[1]);
      if (target) {
        const top = getOffsetTop(target, this.getContainer());
        if (top < scope) {
          sections.push({
            top,
            comp
          });
        }
      }
    });
    this.visible = !!sections.length;
    if (!this.visible) {
      this.clearActive();
      this.cdr.detectChanges();
    } else {
      const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
      this.handleActive(maxSection.comp);
    }
    this.setVisible();
  }
  clearActive() {
    this.links.forEach(i => {
      i.unsetActive();
    });
  }
  setActive(comp) {
    const originalActiveLink = this.activeLink;
    const targetComp = this.nzCurrentAnchor && this.links.find(n => n.nzHref === this.nzCurrentAnchor) || comp;
    if (!targetComp) return;
    targetComp.setActive();
    const linkNode = targetComp.getLinkTitleElement();
    this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
    this.activeLink = (comp || targetComp).nzHref;
    if (originalActiveLink !== this.activeLink) {
      this.nzChange.emit(this.activeLink);
    }
  }
  handleActive(comp) {
    this.clearActive();
    this.setActive(comp);
    this.visible = true;
    this.setVisible();
    this.nzScroll.emit(comp);
  }
  setVisible() {
    const visible = this.visible;
    const visibleClassname = 'visible';
    if (this.ink) {
      if (visible) {
        this.renderer.addClass(this.ink.nativeElement, visibleClassname);
      } else {
        this.renderer.removeClass(this.ink.nativeElement, visibleClassname);
      }
    }
  }
  handleScrollTo(linkComp) {
    const el = this.doc.querySelector(linkComp.nzHref);
    if (!el) {
      return;
    }
    this.animating = true;
    const containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
    const elOffsetTop = getOffsetTop(el, this.getContainer());
    let targetScrollTop = containerScrollTop + elOffsetTop;
    targetScrollTop -= this.nzTargetOffset !== undefined ? this.nzTargetOffset : this.nzOffsetTop || 0;
    this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, {
      callback: () => {
        this.animating = false;
        this.handleActive(linkComp);
      }
    });
    this.nzClick.emit(linkComp.nzHref);
  }
  ngOnChanges(changes) {
    const {
      nzOffsetTop,
      nzContainer,
      nzCurrentAnchor
    } = changes;
    if (nzOffsetTop) {
      this.wrapperStyle = {
        'max-height': `calc(100vh - ${this.nzOffsetTop}px)`
      };
    }
    if (nzContainer) {
      const container = this.nzContainer;
      this.container = typeof container === 'string' ? this.doc.querySelector(container) : container;
      this.registerScrollEvent();
    }
    if (nzCurrentAnchor) {
      this.setActive();
    }
  }
  static #_ = this.ɵfac = function NzAnchorComponent_Factory(t) {
    return new (t || NzAnchorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_8__.NzScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzAnchorComponent,
    selectors: [["nz-anchor"]],
    viewQuery: function NzAnchorComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ink = _t.first);
      }
    },
    inputs: {
      nzAffix: "nzAffix",
      nzShowInkInFixed: "nzShowInkInFixed",
      nzBounds: "nzBounds",
      nzOffsetTop: "nzOffsetTop",
      nzTargetOffset: "nzTargetOffset",
      nzContainer: "nzContainer",
      nzCurrentAnchor: "nzCurrentAnchor"
    },
    outputs: {
      nzClick: "nzClick",
      nzChange: "nzChange",
      nzScroll: "nzScroll"
    },
    exportAs: ["nzAnchor"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c2,
    decls: 3,
    vars: 2,
    consts: [[3, "nzOffsetTop", "nzTarget", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "nzOffsetTop", "nzTarget"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"], ["ink", ""]],
    template: function NzAnchorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzAnchorComponent_nz_affix_0_Template, 2, 3, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzAnchorComponent_ng_template_1_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAffix)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzAnchorComponent.prototype, "nzAffix", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputBoolean)()], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputNumber)()], NzAnchorComponent.prototype, "nzBounds", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputNumber)(undefined), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__.WithConfig)()], NzAnchorComponent.prototype, "nzOffsetTop", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.InputNumber)(undefined), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__.WithConfig)()], NzAnchorComponent.prototype, "nzTargetOffset", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAnchorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-anchor',
      exportAs: 'nzAnchor',
      preserveWhitespaces: false,
      template: `
    <nz-affix *ngIf="nzAffix; else content" [nzOffsetTop]="nzOffsetTop" [nzTarget]="container">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </nz-affix>
    <ng-template #content>
      <div class="ant-anchor-wrapper" [ngStyle]="wrapperStyle">
        <div class="ant-anchor" [ngClass]="{ 'ant-anchor-fixed': !nzAffix && !nzShowInkInFixed }">
          <div class="ant-anchor-ink">
            <div class="ant-anchor-ink-ball" #ink></div>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__.NzConfigService
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_8__.NzScrollService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    ink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ink', {
        static: false
      }]
    }],
    nzAffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzShowInkInFixed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzBounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOffsetTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTargetOffset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzCurrentAnchor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    nzScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NzAnchorLinkComponent {
  set nzTitle(value) {
    if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      this.titleStr = null;
      this.titleTpl = value;
    } else {
      this.titleStr = value;
    }
  }
  constructor(elementRef, anchorComp, platform, renderer) {
    this.elementRef = elementRef;
    this.anchorComp = anchorComp;
    this.platform = platform;
    this.renderer = renderer;
    this.nzHref = '#';
    this.titleStr = '';
  }
  ngOnInit() {
    this.anchorComp.registerLink(this);
  }
  getLinkTitleElement() {
    return this.linkTitle.nativeElement;
  }
  setActive() {
    this.renderer.addClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
  }
  unsetActive() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
  }
  goToClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.platform.isBrowser) {
      this.anchorComp.handleScrollTo(this);
    }
  }
  ngOnDestroy() {
    this.anchorComp.unregisterLink(this);
  }
  static #_ = this.ɵfac = function NzAnchorLinkComponent_Factory(t) {
    return new (t || NzAnchorLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzAnchorComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzAnchorLinkComponent,
    selectors: [["nz-link"]],
    contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTemplate = _t.first);
      }
    },
    viewQuery: function NzAnchorLinkComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkTitle = _t.first);
      }
    },
    hostAttrs: [1, "ant-anchor-link"],
    inputs: {
      nzHref: "nzHref",
      nzTarget: "nzTarget",
      nzTitle: "nzTitle"
    },
    exportAs: ["nzLink"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 5,
    consts: [[1, "ant-anchor-link-title", 3, "href", "title", "target", "click"], ["linkTitle", ""], [4, "ngIf", "ngIfElse"]],
    template: function NzAnchorLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) {
          return ctx.goToClick($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzAnchorLinkComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.nzHref, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx.titleStr)("target", ctx.nzTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleStr)("ngIfElse", ctx.titleTpl || ctx.nzTemplate);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAnchorLinkComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-link',
      exportAs: 'nzLink',
      preserveWhitespaces: false,
      template: `
    <a
      #linkTitle
      class="ant-anchor-link-title"
      [href]="nzHref"
      [title]="titleStr"
      [target]="nzTarget"
      (click)="goToClick($event)"
    >
      <span *ngIf="titleStr; else titleTpl || nzTemplate">{{ titleStr }}</span>
    </a>
    <ng-content></ng-content>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-anchor-link'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NzAnchorComponent
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    nzHref: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['nzTemplate', {
        static: false
      }]
    }],
    linkTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['linkTitle']
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAnchorModule {
  static #_ = this.ɵfac = function NzAnchorModule_Factory(t) {
    return new (t || NzAnchorModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzAnchorModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.PlatformModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAnchorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzAnchorComponent, NzAnchorLinkComponent],
      exports: [NzAnchorComponent, NzAnchorLinkComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__.NzAffixModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.PlatformModule]
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

/***/ 89624:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-quicklink/fesm2022/ngx-quicklink.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuicklinkDirective: () => (/* binding */ LinkDirective),
/* harmony export */   QuicklinkModule: () => (/* binding */ QuicklinkModule),
/* harmony export */   QuicklinkStrategy: () => (/* binding */ QuicklinkStrategy),
/* harmony export */   quicklinkProviders: () => (/* binding */ quicklinkProviders)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 16290);






// Using a global registry so we can keep it populated across lazy-loaded
// modules with different parent injectors which create instance of the registry.
const globalRegistry = [];
class PrefetchRegistry {
  constructor(router) {
    this.router = router;
    this.trees = globalRegistry;
  }
  add(tree) {
    this.trees.push(tree);
  }
  shouldPrefetch(url) {
    const tree = this.router.parseUrl(url);
    return this.trees.some(containsTree.bind(null, tree));
  }
  static #_ = this.ɵfac = function PrefetchRegistry_Factory(t) {
    return new (t || PrefetchRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PrefetchRegistry,
    factory: PrefetchRegistry.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrefetchRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }, null);
})();
function containsQueryParams(container, containee) {
  // TODO: This does not handle array params correctly.
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every(key => containee[key] === container[key]);
}
function containsTree(containee, container) {
  return containsQueryParams(container.queryParams, containee.queryParams) && containsSegmentGroup(container.root, containee.root, containee.root.segments);
}
function containsSegmentGroup(container, containee, containeePaths) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!containee.hasChildren()) return true;
    for (const c in containee.children) {
      if (!container.children[c]) break;
      if (containsSegmentGroup(container.children[c], containee.children[c], containee.children[c].segments)) return true;
    }
    return false;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!container.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET]) return false;
    return containsSegmentGroup(container.children[_angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET], containee, next);
  }
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path || a.path.startsWith(':') || bs[i].path.startsWith(':'));
}
const requestIdleCallback = typeof window !== 'undefined' ? window.requestIdleCallback || function (cb) {
  const start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
} : () => {};
const observerSupported = () => typeof window !== 'undefined' ? !!window.IntersectionObserver : false;
const LinkHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LinkHandler');
class ObservableLinkHandler {
  constructor(loader, registry, ngZone) {
    this.loader = loader;
    this.registry = registry;
    this.ngZone = ngZone;
    this.elementLink = new Map();
    this.observer = observerSupported() ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!this.observer) {
          return;
        }
        if (entry.isIntersecting) {
          const link = entry.target;
          const routerLink = this.elementLink.get(link);
          if (!routerLink || !routerLink.urlTree) return;
          this.registry.add(routerLink.urlTree);
          this.observer.unobserve(link);
          requestIdleCallback(() => {
            this.loader.preload().subscribe(() => void 0);
          });
        }
      });
    }) : null;
  }
  register(el) {
    this.elementLink.set(el.element, el);
    this.ngZone.runOutsideAngular(() => {
      if (!this.observer) {
        return;
      }
      this.observer.observe(el.element);
    });
  }
  // First call to unregister will not hit this.
  unregister(el) {
    if (!this.observer) {
      return;
    }
    if (this.elementLink.has(el.element)) {
      this.observer.unobserve(el.element);
      this.elementLink.delete(el.element);
    }
  }
  supported() {
    return observerSupported();
  }
  static #_ = this.ɵfac = function ObservableLinkHandler_Factory(t) {
    return new (t || ObservableLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ObservableLinkHandler,
    factory: ObservableLinkHandler.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservableLinkHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader
    }, {
      type: PrefetchRegistry
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class PreloadLinkHandler {
  constructor(loader, registry) {
    this.loader = loader;
    this.registry = registry;
  }
  register(el) {
    this.registry.add(el.urlTree);
    requestIdleCallback(() => this.loader.preload().subscribe(() => void 0));
  }
  unregister(_) {}
  supported() {
    return true;
  }
  static #_ = this.ɵfac = function PreloadLinkHandler_Factory(t) {
    return new (t || PreloadLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PreloadLinkHandler,
    factory: PreloadLinkHandler.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreloadLinkHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterPreloader
    }, {
      type: PrefetchRegistry
    }];
  }, null);
})();
class LinkDirective {
  constructor(linkHandlers, el, link, linkWithHref) {
    this.linkHandlers = linkHandlers;
    this.el = el;
    this.linkHandler = this.linkHandlers.filter(h => h.supported()).shift();
    this.rl = link || linkWithHref;
    if (this.element && this.element.setAttribute) {
      this.element.setAttribute('ngx-ql', '');
    }
  }
  ngOnChanges(c) {
    if (c['routerLink'] && this.linkHandler) {
      this.linkHandler.unregister(this);
      this.linkHandler.register(this);
    }
  }
  ngOnDestroy() {
    if (!this.linkHandler) {
      return;
    }
    this.linkHandler.unregister(this);
  }
  get element() {
    return this.el.nativeElement;
  }
  get urlTree() {
    return this.rl.urlTree;
  }
  static #_ = this.ɵfac = function LinkDirective_Factory(t) {
    return new (t || LinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LinkHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: LinkDirective,
    selectors: [["", "routerLink", ""]],
    inputs: {
      routerLink: "routerLink"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[routerLink]',
      standalone: true
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LinkHandler]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    routerLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class QuicklinkStrategy {
  constructor(registry, router) {
    this.registry = registry;
    this.router = router;
    this.loading = new Set();
  }
  preload(route, load) {
    if (this.loading.has(route)) {
      // Don't preload the same route twice
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    const conn = typeof navigator !== 'undefined' ? navigator.connection : undefined;
    if (conn) {
      // Don't preload if the user is on 2G. or if Save-Data is enabled..
      if ((conn.effectiveType || '').includes('2g') || conn.saveData) return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    // Prevent from preloading
    if (route.data && route.data['preload'] === false) {
      return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
    }
    const fullPath = findPath(this.router.config, route);
    if (this.registry.shouldPrefetch(fullPath)) {
      this.loading.add(route);
      return load();
    }
    return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
  }
  static #_ = this.ɵfac = function QuicklinkStrategy_Factory(t) {
    return new (t || QuicklinkStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: QuicklinkStrategy,
    factory: QuicklinkStrategy.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuicklinkStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: PrefetchRegistry
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
    }];
  }, null);
})();
const findPath = (config, route) => {
  config = config.slice();
  const parent = new Map();
  const visited = new Set();
  while (config.length) {
    const el = config.shift();
    if (!el) {
      continue;
    }
    visited.add(el);
    if (el === route) break;
    let children = el.children || [];
    const current = el._loadedRoutes || [];
    for (const route of current) {
      if (route && route.children) {
        children = children.concat(route.children);
      }
      children.forEach(r => {
        if (visited.has(r)) return;
        parent.set(r, el);
        config.push(r);
      });
    }
  }
  let path = '';
  let current = route;
  while (current) {
    if (isPrimaryRoute(current)) {
      path = `/${current.path}${path}`;
    } else {
      path = `/(${current.outlet}:${current.path}${path})`;
    }
    current = parent.get(current);
  }
  return path.replace(/\/\//, '/');
};
function isPrimaryRoute(route) {
  return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_OUTLET || !route.outlet;
}
const quicklinkProviders = [{
  provide: LinkHandler,
  useClass: ObservableLinkHandler,
  multi: true
}, {
  provide: LinkHandler,
  useClass: PreloadLinkHandler,
  multi: true
}, PrefetchRegistry, QuicklinkStrategy];
class QuicklinkModule {
  static #_ = this.ɵfac = function QuicklinkModule_Factory(t) {
    return new (t || QuicklinkModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: QuicklinkModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: quicklinkProviders
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuicklinkModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [LinkDirective],
      exports: [LinkDirective],
      providers: quicklinkProviders
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-quicklink
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_components_demo-components-share_demo-components-share_module_ts.js.map