"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_typography_index_module_ts"],{

/***/ 33864:
/*!*******************************************************!*\
  !*** ./src/app/components/typography/en.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoTypographyEnComponent: () => (/* binding */ NzDemoTypographyEnComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/codebox/codebox.component */ 36448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);



class NzDemoTypographyEnComponent {
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
  static ɵfac = function NzDemoTypographyEnComponent_Factory(t) {
    return new (t || NzDemoTypographyEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDemoTypographyEnComponent,
    selectors: [["nz-demo-typography"]],
    viewQuery: function NzDemoTypographyEnComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_shared_components_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_0__.NzCodeBoxComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
      }
    },
    decls: 556,
    vars: 5,
    consts: [["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzXs", "24", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "rounded-10"], [1, "py-[20px]", "px-[25px]", "flex", "flex-wrap", "items-center", "justify-between"], [1, "mb-0", "inline-flex", "items-center", "max-sm:pb-[5px]", "overflow-hidden", "whitespace-nowrap", "text-ellipsis", "text-[20px]", "font-semibold", "text-dark", "dark:text-white/[.87]"], [1, "flex", "flex-wrap", "gap-x-[10px]", "gap-y-[10px]", "p-[25px]", "pt-0"], [1, "text-center"], [1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "block", "text-dark", "dark:text-white/[.87]", "mt-[5px]"], [1, "bg-secondary", "hover:bg-secondary-hbr", "border-solid", "border-1", "border-secondary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-success", "hover:bg-success-hbr", "border-solid", "border-1", "border-success", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-info", "hover:bg-info-hbr", "border-solid", "border-1", "border-info", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-warning", "hover:bg-warning-hbr", "border-solid", "border-1", "border-warning", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-danger", "hover:bg-danger-hbr", "border-solid", "border-1", "border-danger", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-dark", "hover:bg-dark-hbr", "border-solid", "border-1", "border-dark", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-theme-gray", "hover:bg-gray-hbr", "border-solid", "border-1", "border-theme-gray", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-light", "hover:bg-light-hbr", "border-solid", "border-1", "border-light", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-light-extra", "hover:bg-light-hbr-extra", "border-solid", "border-1", "border-light-extra", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-primary", "bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-secondary", "bg-secondary-hbr", "border-solid", "border-1", "border-secondary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-success", "bg-success-hbr", "border-solid", "border-1", "border-success", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-info", "bg-info-hbr", "border-solid", "border-1", "border-info", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-warning", "bg-warning-hbr", "border-solid", "border-1", "border-warning", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-danger", "bg-danger-hbr", "border-solid", "border-1", "border-danger", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-dark", "bg-dark-hbr", "border-solid", "border-1", "border-dark", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "hover:bg-theme-gray", "bg-gray-hbr", "border-solid", "border-1", "border-theme-gray", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-primary/10", "hover:bg-primary-hbr", "border-none", "text-primary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-secondary/10", "hover:bg-secondary-hbr", "border-none", "text-secondary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-success/10", "hover:bg-success-hbr", "border-none", "text-success", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-info/10", "hover:bg-info-hbr", "border-none", "text-info", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-warning/10", "hover:bg-warning-hbr", "border-none", "text-warning", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-danger/10", "hover:bg-danger-hbr", "border-none", "text-danger", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-dark/10", "hover:bg-dark-hbr", "border-none", "text-dark", "dark:text-white[.87]", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-theme-gray/10", "dark:bg-white30", "hover:bg-gray-hbr", "dark:hover:bg-white10", "border-none", "text-theme-gray", "dark:text-white/60", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-active/10", "hover:bg-success-hbr", "border-none", "text-active", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-deactivated/10", "hover:bg-warning-hbr", "border-none", "text-deactivated", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-blocked/10", "hover:bg-danger-hbr", "border-none", "text-blocked", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-complete/10", "hover:bg-success-hbr", "border-none", "text-complete", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-early", "border-none", "text-white", "dark:text-white[.87]", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-warning", "border-none", "text-white", "dark:text-white[.87]", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-progress", "border-none", "text-white", "dark:text-white[.87]", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-complete", "border-none", "text-white", "dark:text-white[.87]", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-google/10", "border-solid", "border-1", "border-google", "text-google", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-google-plus/10", "border-solid", "border-1", "border-google-plus", "text-google-plus", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-facebook/10", "border-solid", "border-1", "border-facebook", "text-facebook", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-twitter/10", "border-solid", "border-1", "border-twitter", "text-twitter", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-dribbble/10", "border-solid", "border-1", "border-dribbble", "text-dribbble", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-linkedin/10", "border-solid", "border-1", "border-linkedin", "text-linkedin", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-instagram/10", "border-solid", "border-1", "border-instagram", "text-instagram", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-github/10", "border-solid", "border-1", "border-github", "text-github", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-medium/10", "border-solid", "border-1", "border-medium", "text-medium", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-youtube/10", "border-solid", "border-1", "border-youtube", "text-youtube", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-whatsapp/10", "border-solid", "border-1", "border-whatsapp", "text-whatsapp", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-google", "border-solid", "border-1", "border-google", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-google-plus", "border-solid", "border-1", "border-google-plus", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-facebook", "border-solid", "border-1", "border-facebook", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-twitter", "border-solid", "border-1", "border-twitter", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-dribbble", "border-solid", "border-1", "border-dribbble", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-linkedin", "border-solid", "border-1", "border-linkedin", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-instagram", "border-solid", "border-1", "border-instagram", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-github", "border-solid", "border-1", "border-github", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-medium", "border-solid", "border-1", "border-medium", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-whatsapp", "border-solid", "border-1", "border-whatsapp", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-youtube", "border-solid", "border-1", "border-youtube", "text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn", "capitalize"], [1, "bg-transparent", "hover:bg-primary-hbr", "border-1", "border-style", "border-primary", "text-primary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-secondary-hbr", "border-1", "border-style", "border-secondary", "text-secondary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-success-hbr", "border-1", "border-style", "border-success", "text-success", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-info-hbr", "border-1", "border-style", "border-info", "text-info", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-warning-hbr", "border-1", "border-style", "border-warning", "text-warning", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-danger-hbr", "border-1", "border-style", "border-danger", "text-danger", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-dark-hbr", "border-1", "border-style", "border-dark", "text-dark", "dark:texd-white/[.87]", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-gray-hbr", "border-1", "border-style", "border-theme-gray", "text-theme-gray", "dark:text-white/60", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], [1, "flex", "flex-wrap", "gap-x-[10px]", "gap-y-[10px]", "p-[25px]", "pt-0", "pb-0"], ["nz-row", "", 1, "w-full", 3, "nzGutter"], ["nz-col", "", "nzXl", "5", "nzSm", "12", 1, "mb-[25px]"], [1, "bg-gradient-to-r", "from-primary", "flex", "items-center", "justify-between", "rounded-[10px]", "py-[35px]", "px-[20px]", "text-white", "dark:text-white/[.87]", "h-[100px]"], [1, "me-0", "fs-15"], [1, "bg-gradient-to-r", "from-primary", "to-secondary", "flex", "items-center", "justify-between", "rounded-[10px]", "py-[35px]", "px-[20px]", "text-white", "dark:text-white/[.87]", "h-[100px]", "gap-[30px]"], [1, "text-[15px]"], [1, "bg-gradient-to-r", "from-primary", "via-secondary", "to-primary", "flex", "items-center", "justify-between", "rounded-[10px]", "py-[35px]", "px-[20px]", "text-white", "dark:text-white/[.87]", "h-[100px]", "gap-[30px]"], [1, "flex", "items-center", "justify-between", "h-[48px]", "px-[20px]", "border-1", "border-solid", "dark:border-white/10", "rounded-[4px]", "gap-[15px]"], [1, "text-[15px]", "text-theme-gray", "dark:text-white/60"], [1, "text-[14px]", "text-dark", "dark:text-white/[.87]", "font-medium"], [1, "flex", "items-center", "justify-between", "h-[48px]", "px-[20px]", "border-1", "border-solid", "border-normal", "dark:border-white/10", "rounded-[4px]", "gap-[15px]"], [1, "flex", "items-center", "justify-between", "h-[48px]", "px-[20px]", "border-1", "border-solid", "border-deep", "dark:border-white/10", "rounded-[4px]", "gap-[15px]"], [1, "flex", "items-center", "justify-between", "h-[48px]", "px-[20px]", "bg-regularBG", "dark:bg-white/10", "rounded-[4px]", "gap-[15px]"], [1, "flex", "items-center", "justify-between", "h-[48px]", "px-[20px]", "bg-normalBG", "dark:bg-white/10", "rounded-[4px]gap-[15px]"], [1, "flex", "items-center", "justify-between", "h-[48px]", "px-[20px]", "bg-deepBG", "dark:bg-white/10", "rounded-[4px]", "gap-[15px]"], [1, "flex", "flex-wrap", "gap-y-[15px]", "p-[25px]", "pt-0"], [1, "flex", "flex-wrap", "items-center", "gap-x-[10px]", "max-md:gap-y-[40px]", "gap-y-[20px]", "w-full"], [1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[32px]", "shadow-btn"], ["raised", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[38px]", "shadow-btn"], ["raised", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", "shadow-btn"], ["raised", "", 1, "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[50px]", "shadow-btn"], [1, "bg-transparent", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-primary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[32px]"], [1, "bg-transparent", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-primary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[38px]"], [1, "bg-transparent", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-primary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]"], [1, "bg-transparent", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-primary", "hover:text-white", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[50px]"], [1, "bg-primary/10", "text-primary", "border-none", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[32px]"], [1, "bg-primary/10", "text-primary", "border-none", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[38px]"], [1, "bg-primary/10", "text-primary", "border-none", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]"], [1, "bg-primary/10", "text-primary", "border-none", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[50px]"], ["nz-col", "", "nzXs", "24", 1, "max-xl:mb-[25px]"], ["nz-row", ""], ["nz-col", "", "nzXl", "6", "nzSm", "12", "nzXs", "24"], [1, "text-dark", "dark:text-white/[.87]", "text-[30px]", "font-semibold", "leading-[38px]", "mb-[20px]"], [1, "text-primary"], [1, "text-secondary"], [1, "text-info"], [1, "text-dark", "dark:text-white/[.87]", "text-[24px]", "font-semibold", "leading-[30px]", "mb-[20px]"], [1, "text-dark", "dark:text-white/[.87]", "text-[22px]", "font-semibold", "leading-[27px]", "mb-[20px]"], [1, "text-dark", "dark:text-white/[.87]", "text-[20px]", "font-semibold", "leading-[24px]", "mb-[20px]"], [1, "text-dark", "dark:text-white/[.87]", "text-[18px]", "font-semibold", "leading-[22px]", "mb-[20px]"], ["nz-col", "", "nzXs", "24"], [1, "text-dark", "dark:text-white/[.87]", "text-[16px]", "font-semibold", "leading-[20px]", "mb-[20px]"]],
    template: function NzDemoTypographyEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Theme Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Secondary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "#5840FF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6)(18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "#01B81A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6)(23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "#00AAFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6)(28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "#FA8B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6)(33, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "#ff4d4f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6)(38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "#0A0A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6)(43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Gray ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "#404040");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6)(48, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "#747474");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6)(53, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Extra Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "#A0A0A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1)(58, "div", 2)(59, "div", 3)(60, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Hover Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 5)(63, "div", 6)(64, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "#6726A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 6)(69, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Secondary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "#3520C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 6)(74, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "#0D811D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 6)(79, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "#0787C7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 6)(84, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "#D9790A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 6)(89, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "#CB0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 6)(94, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "#272525");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 6)(99, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Gray ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "#585858");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 1)(104, "div", 2)(105, "div", 3)(106, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Transparent Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 5)(109, "div", 6)(110, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 6)(115, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Secondary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "#5840FF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 6)(120, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "#01B81A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 6)(125, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "#00AAFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 6)(130, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "#FA8B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 6)(135, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "#ff4d4f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 6)(140, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "#0A0A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 6)(145, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " Gray ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "#404040");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 6)(150, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "#01B81A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 6)(155, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " Deactivated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "#fa8b0c");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 6)(160, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " Blocked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "#ff0f0f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 6)(165, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "#01B81A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 6)(170, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " Pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "#fa8b0c");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 6)(175, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " Early ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "#01b81a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 6)(180, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " Late ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "#fa8b0c");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 6)(185, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " Progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "#ff4d4f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 6)(190, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, " Complete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "#01b81a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 1)(195, "div", 2)(196, "div", 3)(197, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " Social Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 5)(200, "div", 6)(201, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "#f14336");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 6)(206, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, " Google Plus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "#f06548");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 6)(211, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "#1976d2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 6)(216, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "#03a9f4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 6)(221, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, " Dribble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "#c2185b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 6)(226, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, " Linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "#007ab9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 6)(231, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " Instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "#d1208f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 6)(236, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, " github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "#090e30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 6)(241, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "#66cdaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 6)(246, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, " youtube ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "#c4302b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 6)(251, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, " whatsapp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "#25D366");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 5)(256, "div", 6)(257, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "#f14336");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 6)(262, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, " Google Plus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "#f06548");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 6)(267, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "#1976d2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 6)(272, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "#03a9f4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 6)(277, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, " Dribble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "#c2185b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 6)(282, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, " Linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "#007ab9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 6)(287, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " Instagram ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "#d1208f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 6)(292, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, " github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "#090e30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "div", 6)(297, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, " medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "#66cdaa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 6)(302, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, " whatsapp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "#25D366");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 6)(307, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, " youtube ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "#c4302b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 1)(312, "div", 2)(313, "div", 3)(314, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, " Border Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 5)(317, "div", 6)(318, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 6)(323, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, " Secondary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "#5840FF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 6)(328, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, " Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "#01B81A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 6)(333, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "#00AAFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 6)(338, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, " Warning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "#FA8B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 6)(343, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, " Danger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "#ff4d4f");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 6)(348, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "#0A0A0A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div", 6)(353, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, " Gray ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "#404040");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 1)(358, "div", 2)(359, "div", 3)(360, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, " Gradient Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 72)(363, "div", 73)(364, "div", 74)(365, "div", 75)(366, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 74)(369, "div", 77)(370, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "#5840FF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 74)(375, "div", 79)(376, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "#5840FF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "#8231D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 1)(383, "div", 2)(384, "div", 3)(385, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, " Border Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 5)(388, "div", 73)(389, "div", 74)(390, "div", 80)(391, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Border color 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "#F1F2F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 74)(396, "div", 83)(397, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Border color 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "#E3E6EF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 74)(402, "div", 84)(403, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Border color 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "#C6D0DC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 1)(408, "div", 2)(409, "div", 3)(410, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, " Background Gray Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 5)(413, "div", 73)(414, "div", 74)(415, "div", 85)(416, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "BG color 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "#F8F9FB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 74)(421, "div", 86)(422, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "BG color 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "#F4F5F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 74)(427, "div", 87)(428, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "BG color 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "span", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "#EFF0F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 1)(433, "div", 2)(434, "div", 3)(435, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, " Button Sizes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 88)(438, "div", 89)(439, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, " Extra Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, " Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, " Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, " Large button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 89)(448, "button", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, " Extra Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, " Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, " Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, " Large button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 89)(457, "button", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, " Extra Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, " Small ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, " Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "button", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, " Large button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 1)(466, "div", 2)(467, "div", 3)(468, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, " Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "div", 88)(471, "div", 0)(472, "div", 102)(473, "div", 103)(474, "div", 104)(475, "h1", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, " h1. Default Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 104)(478, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Font Size - 30px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "div", 104)(481, "p", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Font weight - 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div", 104)(484, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Line Height - 38px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 102)(487, "div", 103)(488, "div", 104)(489, "h1", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, " h2. Default Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "div", 104)(492, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "Font Size - 24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "div", 104)(495, "p", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Font weight - 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "div", 104)(498, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Line Height - 30px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "div", 102)(501, "div", 103)(502, "div", 104)(503, "h1", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, " h3. Default Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "div", 104)(506, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Font Size - 22px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "div", 104)(509, "p", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "Font weight - 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "div", 104)(512, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "Line Height - 27px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 102)(515, "div", 103)(516, "div", 104)(517, "h1", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, " h4. Default Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "div", 104)(520, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](521, "Font Size - 20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "div", 104)(523, "p", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Font weight - 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 104)(526, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Line Height - 24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "div", 102)(529, "div", 103)(530, "div", 104)(531, "h1", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, " h5. Default Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "div", 104)(534, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "Font Size - 18px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "div", 104)(537, "p", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Font weight - 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "div", 104)(540, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](541, "Line Height - 22px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "div", 113)(543, "div", 103)(544, "div", 104)(545, "h1", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](546, " h6. Default Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "div", 104)(548, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](549, "Font Size - 16px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "div", 104)(551, "p", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](552, "Font weight - 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "div", 104)(554, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](555, "Line Height - 20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](363);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 25);
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78522:
/*!*******************************************************!*\
  !*** ./src/app/components/typography/index.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoTypographyModule: () => (/* binding */ NzDemoTypographyModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 45278);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en.component */ 33864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/typography */ 48818);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57868);









class NzDemoTypographyModule {
  static ɵfac = function NzDemoTypographyModule_Factory(t) {
    return new (t || NzDemoTypographyModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: NzDemoTypographyModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_2__.NzDemoTypographyEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzDemoTypographyModule, {
    declarations: [_en_component__WEBPACK_IMPORTED_MODULE_2__.NzDemoTypographyEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_5__.NzTypographyModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__.NzDividerModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_7__.NzSliderModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 45278:
/*!*************************************************!*\
  !*** ./src/app/components/typography/module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/typography */ 48818);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ 67091);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/slider */ 57868);



const moduleList = [ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_0__.NzTypographyModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__.NzDividerModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_2__.NzSliderModule];

/***/ })

}]);
//# sourceMappingURL=src_app_components_typography_index_module_ts.js.map