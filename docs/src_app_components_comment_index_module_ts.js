"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_comment_index_module_ts"],{

/***/ 87797:
/*!*********************************************!*\
  !*** ./src/app/components/comment/basic.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCommentBasicComponent: () => (/* binding */ NzDemoCommentBasicComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 59881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/comment */ 82855);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);







class NzDemoCommentBasicComponent {
  likes = 0;
  dislikes = 0;
  time = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), new Date());
  like() {
    this.likes = 1;
    this.dislikes = 0;
  }
  dislike() {
    this.likes = 0;
    this.dislikes = 1;
  }
  static ɵfac = function NzDemoCommentBasicComponent_Factory(t) {
    return new (t || NzDemoCommentBasicComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDemoCommentBasicComponent,
    selectors: [["nz-demo-comment-basic"]],
    decls: 15,
    vars: 5,
    consts: [["nzAuthor", "Han Solo", 3, "nzDatetime"], ["nz-comment-avatar", "", "nzIcon", "user", "nzSrc", "//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"], ["nz-tooltip", "", "nzTooltipTitle", "Like", "nz-icon", "", "nzType", "like", 3, "nzTheme", "click"], [1, "count", "like"], ["nz-tooltip", "", "nzTooltipTitle", "Dislike", "nz-icon", "", "nzType", "dislike", 3, "nzTheme", "click"], [1, "count", "dislike"]],
    template: function NzDemoCommentBasicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-comment", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-comment-content")(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-comment-action")(6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzDemoCommentBasicComponent_Template_i_click_6_listener() {
          return ctx.like();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-comment-action")(10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzDemoCommentBasicComponent_Template_i_click_10_listener() {
          return ctx.dislike();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-comment-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDatetime", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTheme", ctx.likes > 0 ? "twotone" : "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.likes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTheme", ctx.dislikes > 0 ? "twotone" : "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dislikes);
      }
    },
    dependencies: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_2__.NzTooltipDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentAvatarDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentContentDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentActionComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__.NzAvatarComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]],
    styles: ["[_nghost-%COMP%]     .ant-comment-content-author-name {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(64 64 64 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-name) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-comment-content-author-time {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-time) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions > li > span {\n\n    display: flex;\n\n    align-items: center;\n\n    gap: 8px;\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(160 160 160 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions > li > span) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li {\n\n    position: relative;\n\n    margin-inline-end: 8px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child)::after {\n\n    position: absolute;\n\n    top: 50%;\n\n    height: 12px;\n\n    width: 1px;\n\n    --tw-translate-y: -50%;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(227 230 239 / var(--tw-bg-opacity));\n\n    --tw-content: \"\";\n\n    content: var(--tw-content)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions li:not(:last-child))::after {\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"ltr\"], [dir=\"ltr\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    inset-inline-end: 0px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"rtl\"], [dir=\"rtl\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    left: -9px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2Jhc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVROztJQUFBLGVBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGVBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGFBQUE7O0lBQUEsbUJBQUE7O0lBQUEsUUFBQTs7SUFBQSxlQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxrQkFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGtCQUFBOztJQUFBLFFBQUE7O0lBQUEsWUFBQTs7SUFBQSxVQUFBOztJQUFBLHNCQUFBOztJQUFBLCtMQUFBOztJQUFBLGtCQUFBOztJQUFBLHlEQUFBOztJQUFBLGdCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbW1lbnQtY29udGVudC1hdXRob3ItbmFtZXtcbiAgICAgICAgQGFwcGx5IHRleHQtdGhlbWUtZ3JheSBkYXJrOnRleHQtd2hpdGUvWy44N10gdGV4dC1bMTJweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yLXRpbWV7XG4gICAgICAgIEBhcHBseSB0ZXh0LWxpZ2h0IGRhcms6dGV4dC13aGl0ZS82MCB0ZXh0LVsxMnB4XTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbW1lbnQtYWN0aW9ucyA+IGxpID4gc3BhbntcbiAgICAgICAgQGFwcGx5IHRleHQtbGlnaHQtZXh0cmEgZGFyazp0ZXh0LXdoaXRlLzYwIHRleHQtWzEycHhdIGZsZXggaXRlbXMtY2VudGVyIGdhcC1bOHB4XTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbW1lbnQtYWN0aW9ucyBsaXtcbiAgICAgICAgQGFwcGx5IHJlbGF0aXZlIG1lLVs4cHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29tbWVudC1hY3Rpb25zIGxpOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVye1xuICAgICAgICBAYXBwbHkgYWJzb2x1dGUgdG9wLVs1MCVdIGx0cjplbmQtMCBydGw6bGVmdC1bLTlweF0gaC1bMTJweF0gdy1bMXB4XSBiZy1ub3JtYWwgZGFyazpiZy13aGl0ZS8xMCAtdHJhbnNsYXRlLXktMS8yIGNvbnRlbnQtWycnXTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 17093:
/*!**********************************************!*\
  !*** ./src/app/components/comment/editor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCommentEditorComponent: () => (/* binding */ NzDemoCommentEditorComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 59881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/comment */ 82855);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);













function NzDemoCommentEditorComponent_nz_list_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-comment-content")(3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", item_r3.author)("nzDatetime", item_r3.displayTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r3.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.content);
  }
}
function NzDemoCommentEditorComponent_nz_list_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCommentEditorComponent_nz_list_0_ng_template_1_Template, 5, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx_r0.data)("nzRenderItem", _r1)("nzItemLayout", "horizontal");
  }
}
class NzDemoCommentEditorComponent {
  // tslint:disable-next-line:no-any
  data = [];
  submitting = false;
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';
  handleSubmit() {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
      this.submitting = false;
      this.data = [...this.data, {
        ...this.user,
        content,
        datetime: new Date(),
        displayTime: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), new Date())
      }].map(e => {
        return {
          ...e,
          displayTime: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), e.datetime)
        };
      });
    }, 800);
  }
  static ɵfac = function NzDemoCommentEditorComponent_Factory(t) {
    return new (t || NzDemoCommentEditorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCommentEditorComponent,
    selectors: [["nz-demo-comment-editor"]],
    decls: 9,
    vars: 5,
    consts: [[3, "nzDataSource", "nzRenderItem", "nzItemLayout", 4, "ngIf"], ["nz-comment-avatar", "", "nzIcon", "user", 3, "nzSrc"], ["nz-input", "", "rows", "4", 1, "resize-none", "min-h-[170px]", "rounded-6", "hover:border-primary", "bg-transparent", "border-regular", "dark:border-white/10", "text-dark", "dark:text-white/[.87]", 3, "ngModel", "ngModelChange"], ["nz-button", "", 1, "text-[14px]", "bg-primary", "border-1", "border-primary", "hover:bg-primary-hbr", "hover:border-primary-hbr", "text-white", "dark:text-white/[.87]", "inline-flex", "items-center", "justify-center", "rounded-4", "px-[20px]", "h-[44px]", "font-semibold", "shadow-dark", 3, "nzLoading", "disabled", "click"], [3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzAuthor", "nzDatetime"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"]],
    template: function NzDemoCommentEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoCommentEditorComponent_nz_list_0_Template, 3, 3, "nz-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-comment-content")(4, "nz-form-item")(5, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCommentEditorComponent_Template_textarea_ngModelChange_5_listener($event) {
          return ctx.inputValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item")(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCommentEditorComponent_Template_button_click_7_listener() {
          return ctx.handleSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", ctx.user.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.submitting)("disabled", !ctx.inputValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__.NzCommentComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__.NzCommentAvatarDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_5__.NzCommentContentDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_6__.NzListComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective],
    styles: ["[_nghost-%COMP%]     .ant-comment-content-author-name {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(64 64 64 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-name) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-comment-content-author-time {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-time) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions > li > span {\n\n    display: flex;\n\n    align-items: center;\n\n    gap: 8px;\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(160 160 160 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions > li > span) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li {\n\n    position: relative;\n\n    margin-inline-end: 8px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child)::after {\n\n    position: absolute;\n\n    top: 50%;\n\n    height: 12px;\n\n    width: 1px;\n\n    --tw-translate-y: -50%;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(10 10 10 / var(--tw-bg-opacity));\n\n    --tw-content: \"\";\n\n    content: var(--tw-content)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions li:not(:last-child))::after {\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"ltr\"], [dir=\"ltr\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    inset-inline-end: 0px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"rtl\"], [dir=\"rtl\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    left: -9px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2VkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTs7SUFBQSxlQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxlQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxhQUFBOztJQUFBLG1CQUFBOztJQUFBLFFBQUE7O0lBQUEsZUFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxrQkFBQTs7SUFBQSxRQUFBOztJQUFBLFlBQUE7O0lBQUEsVUFBQTs7SUFBQSxzQkFBQTs7SUFBQSwrTEFBQTs7SUFBQSxrQkFBQTs7SUFBQSxzREFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yLW5hbWV7XG4gICAgICAgIEBhcHBseSB0ZXh0LXRoZW1lLWdyYXkgZGFyazp0ZXh0LXdoaXRlL1suODddIHRleHQtWzEycHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29tbWVudC1jb250ZW50LWF1dGhvci10aW1le1xuICAgICAgICBAYXBwbHkgdGV4dC1saWdodCBkYXJrOnRleHQtd2hpdGUvNjAgdGV4dC1bMTJweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWFjdGlvbnMgPiBsaSA+IHNwYW57XG4gICAgICAgIEBhcHBseSB0ZXh0LWxpZ2h0LWV4dHJhIGRhcms6dGV4dC13aGl0ZS82MCB0ZXh0LVsxMnB4XSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzhweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWFjdGlvbnMgbGl7XG4gICAgICAgIEBhcHBseSByZWxhdGl2ZSBtZS1bOHB4XTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbW1lbnQtYWN0aW9ucyBsaTpub3QoOmxhc3QtY2hpbGQpOjphZnRlcntcbiAgICAgICAgQGFwcGx5IGFic29sdXRlIHRvcC1bNTAlXSBsdHI6ZW5kLTAgcnRsOmxlZnQtWy05cHhdIGgtWzEycHhdIHctWzFweF0gYmctZGFyayBkYXJrOmJnLXdoaXRlLzEwIC10cmFuc2xhdGUteS0xLzIgY29udGVudC1bJyddO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 11338:
/*!****************************************************!*\
  !*** ./src/app/components/comment/en.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCommentEnComponent: () => (/* binding */ NzDemoCommentEnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ 87797);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ 17093);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ 80297);
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nested */ 31207);






class NzDemoCommentEnComponent {
  static ɵfac = function NzDemoCommentEnComponent_Factory(t) {
    return new (t || NzDemoCommentEnComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzDemoCommentEnComponent,
    selectors: [["nz-demo-comment"]],
    decls: 29,
    vars: 0,
    consts: [["nz-row", "", "nzGutter", "25"], ["nz-col", "", "nzXs", "24", 1, "mb-[25px]"], [1, "bg-white", "dark:bg-white/10", "mb-[25px]", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative"], [1, "px-[25px]", "py-[15px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "flex", "flex-wrap", "items-center", "justify-between", "max-sm:flex-col", "max-sm:h-auto", "max-sm:mb-[15px]", "border-b", "border-[#F1F2F6]", "dark:border-white/10"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]", "capitalize"], [1, "p-[25px]", "pt-0"], [1, "p-[25px]"]],
    template: function NzDemoCommentEnComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Basic Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "nz-demo-comment-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 3)(11, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Usage With List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-demo-comment-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Nested comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "nz-demo-comment-nested");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1)(23, "div", 2)(24, "div", 3)(25, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Reply editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "nz-demo-comment-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, _basic__WEBPACK_IMPORTED_MODULE_0__.NzDemoCommentBasicComponent, _editor__WEBPACK_IMPORTED_MODULE_1__.NzDemoCommentEditorComponent, _list__WEBPACK_IMPORTED_MODULE_2__.NzDemoCommentListComponent, _nested__WEBPACK_IMPORTED_MODULE_3__.NzDemoCommentNestedComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 36099:
/*!****************************************************!*\
  !*** ./src/app/components/comment/index.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCommentModule: () => (/* binding */ NzDemoCommentModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-components-share/demo-components-share.module */ 65273);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module */ 73453);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic */ 87797);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ 17093);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ 80297);
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested */ 31207);
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.component */ 11338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/comment */ 82855);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);

















class NzDemoCommentModule {
  static ɵfac = function NzDemoCommentModule_Factory(t) {
    return new (t || NzDemoCommentModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NzDemoCommentModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, _module__WEBPACK_IMPORTED_MODULE_1__.moduleList, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
      path: 'en',
      component: _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoCommentEnComponent
    }])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NzDemoCommentModule, {
    declarations: [_basic__WEBPACK_IMPORTED_MODULE_2__.NzDemoCommentBasicComponent, _editor__WEBPACK_IMPORTED_MODULE_3__.NzDemoCommentEditorComponent, _list__WEBPACK_IMPORTED_MODULE_4__.NzDemoCommentListComponent, _nested__WEBPACK_IMPORTED_MODULE_5__.NzDemoCommentNestedComponent, _en_component__WEBPACK_IMPORTED_MODULE_6__.NzDemoCommentEnComponent],
    imports: [_demo_components_share_demo_components_share_module__WEBPACK_IMPORTED_MODULE_0__.DemoComponentsShareModule, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__.NzCommentModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__.NzFormModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_13__.NzAvatarModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 80297:
/*!********************************************!*\
  !*** ./src/app/components/comment/list.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCommentListComponent: () => (/* binding */ NzDemoCommentListComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 59881);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 65822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/comment */ 82855);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);





function NzDemoCommentListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-comment-content")(3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-comment-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reply to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", item_r2.author)("nzDatetime", item_r2.datetime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r2.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.content);
  }
}
class NzDemoCommentListComponent {
  data = [{
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: 'We supply a series of design principles, practical patterns and high quality design resources' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    datetime: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), 1))
  }, {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: 'We supply a series of design principles, practical patterns and high quality design resources' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    datetime: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), 2))
  }];
  static ɵfac = function NzDemoCommentListComponent_Factory(t) {
    return new (t || NzDemoCommentListComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCommentListComponent,
    selectors: [["nz-demo-comment-list"]],
    decls: 5,
    vars: 3,
    consts: [[1, "text-[15px]", "font-normal", "text-light-extra", "dark:text-white/60", "border-b", "border-regular", "dark:border-white/10", "py-[10px]"], [3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [3, "nzAuthor", "nzDatetime"], ["nz-comment-avatar", "", "nzIcon", "user", 3, "nzSrc"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"]],
    template: function NzDemoCommentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2 replies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoCommentListComponent_ng_template_3_Template, 7, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.data)("nzRenderItem", _r0)("nzItemLayout", "horizontal");
      }
    },
    dependencies: [ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentAvatarDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentContentDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_3__.NzCommentActionComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__.NzAvatarComponent],
    styles: ["[_nghost-%COMP%]     .ant-comment-content-author-name {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(64 64 64 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-name) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-comment-content-author-time {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-time) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions > li > span {\n\n    display: flex;\n\n    align-items: center;\n\n    gap: 8px;\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(160 160 160 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions > li > span) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li {\n\n    position: relative;\n\n    margin-inline-end: 8px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child)::after {\n\n    position: absolute;\n\n    top: 50%;\n\n    height: 12px;\n\n    width: 1px;\n\n    --tw-translate-y: -50%;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(10 10 10 / var(--tw-bg-opacity));\n\n    --tw-content: \"\";\n\n    content: var(--tw-content)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions li:not(:last-child))::after {\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"ltr\"], [dir=\"ltr\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    inset-inline-end: 0px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"rtl\"], [dir=\"rtl\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    left: -9px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7O0lBQUEsZUFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsZUFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsYUFBQTs7SUFBQSxtQkFBQTs7SUFBQSxRQUFBOztJQUFBLGVBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUdBOztJQUFBLGtCQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsa0JBQUE7O0lBQUEsUUFBQTs7SUFBQSxZQUFBOztJQUFBLFVBQUE7O0lBQUEsc0JBQUE7O0lBQUEsK0xBQUE7O0lBQUEsa0JBQUE7O0lBQUEsc0RBQUE7O0lBQUEsZ0JBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29tbWVudC1jb250ZW50LWF1dGhvci1uYW1le1xuICAgICAgICBAYXBwbHkgdGV4dC10aGVtZS1ncmF5IGRhcms6dGV4dC13aGl0ZS9bLjg3XSB0ZXh0LVsxMnB4XTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbW1lbnQtY29udGVudC1hdXRob3ItdGltZXtcbiAgICAgICAgQGFwcGx5IHRleHQtbGlnaHQgZGFyazp0ZXh0LXdoaXRlLzYwIHRleHQtWzEycHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29tbWVudC1hY3Rpb25zID4gbGkgPiBzcGFue1xuICAgICAgICBAYXBwbHkgdGV4dC1saWdodC1leHRyYSBkYXJrOnRleHQtd2hpdGUvNjAgdGV4dC1bMTJweF0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLVs4cHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29tbWVudC1hY3Rpb25zIGxpe1xuICAgICAgICBAYXBwbHkgcmVsYXRpdmUgbWUtWzhweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWFjdGlvbnMgbGk6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXJ7XG4gICAgICAgIEBhcHBseSBhYnNvbHV0ZSB0b3AtWzUwJV0gbHRyOmVuZC0wIHJ0bDpsZWZ0LVstOXB4XSBoLVsxMnB4XSB3LVsxcHhdIGJnLWRhcmsgZGFyazpiZy13aGl0ZS8xMCAtdHJhbnNsYXRlLXktMS8yIGNvbnRlbnQtWycnXTtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 73453:
/*!**********************************************!*\
  !*** ./src/app/components/comment/module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleList: () => (/* binding */ moduleList)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/comment */ 82855);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);







const moduleList = [ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_0__.NzCommentModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__.NzIconModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__.NzListModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputModule];

/***/ }),

/***/ 31207:
/*!**********************************************!*\
  !*** ./src/app/components/comment/nested.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDemoCommentNestedComponent: () => (/* binding */ NzDemoCommentNestedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/comment */ 82855);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);




function NzDemoCommentNestedComponent_ng_template_2_ng_container_7_ng_template_1_ng_template_0_Template(rf, ctx) {}
const _c0 = function (a0) {
  return {
    comment: a0
  };
};
function NzDemoCommentNestedComponent_ng_template_2_ng_container_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoCommentNestedComponent_ng_template_2_ng_container_7_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, child_r6));
  }
}
function NzDemoCommentNestedComponent_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCommentNestedComponent_ng_template_2_ng_container_7_ng_template_1_Template, 1, 4, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const comment_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().comment;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", comment_r3.children);
  }
}
function NzDemoCommentNestedComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-comment-content")(3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-comment-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reply to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoCommentNestedComponent_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comment_r3 = ctx.comment;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", comment_r3.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", comment_r3.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r3.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", comment_r3.children && comment_r3.children.length);
  }
}
function NzDemoCommentNestedComponent_ng_template_4_Template(rf, ctx) {}
class NzDemoCommentNestedComponent {
  data = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: 'We supply a series of design principles, practical patterns and high quality design resources' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [{
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: 'We supply a series of design principles, practical patterns and high quality design resources' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      children: [{
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'We supply a series of design principles, practical patterns and high quality design resources' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      }, {
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'We supply a series of design principles, practical patterns and high quality design resources' + '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      }]
    }]
  };
  static ɵfac = function NzDemoCommentNestedComponent_Factory(t) {
    return new (t || NzDemoCommentNestedComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzDemoCommentNestedComponent,
    selectors: [["nz-demo-comment-nested"]],
    decls: 5,
    vars: 4,
    consts: [[1, "text-[15px]", "font-normal", "text-light-extra", "dark:text-white/60", "border-b", "border-regular", "dark:border-white/10", "py-[10px]", "capitalize"], ["commentTemplateRef", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzAuthor"], ["nz-comment-avatar", "", "nzIcon", "user", 3, "nzSrc"], [1, "text-[15px]", "font-normal", "text-light", "dark:text-white/60"], [4, "ngIf"], ["ngFor", "", 3, "ngForOf"]],
    template: function NzDemoCommentNestedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reply to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCommentNestedComponent_ng_template_2_Template, 8, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoCommentNestedComponent_ng_template_4_Template, 0, 0, "ng-template", 2);
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.data));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__.NzCommentComponent, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__.NzCommentAvatarDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__.NzCommentContentDirective, ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_2__.NzCommentActionComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_3__.NzAvatarComponent],
    styles: ["[_nghost-%COMP%]     .ant-comment-content-author-name {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(64 64 64 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-name) {\n\n    color: rgb(255 255 255 / .87)\n}\n\n[_nghost-%COMP%]     .ant-comment-content-author-time {\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(116 116 116 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-content-author-time) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions > li > span {\n\n    display: flex;\n\n    align-items: center;\n\n    gap: 8px;\n\n    font-size: 12px;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(160 160 160 / var(--tw-text-opacity))\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions > li > span) {\n\n    color: rgb(255 255 255 / 0.6)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li {\n\n    position: relative;\n\n    margin-inline-end: 8px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child)::after {\n\n    position: absolute;\n\n    top: 50%;\n\n    height: 12px;\n\n    width: 1px;\n\n    --tw-translate-y: -50%;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(10 10 10 / var(--tw-bg-opacity));\n\n    --tw-content: \"\";\n\n    content: var(--tw-content)\n}\n\n:is(.dark   [_nghost-%COMP%]     .ant-comment-actions li:not(:last-child))::after {\n\n    background-color: rgb(255 255 255 / 0.1)\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"ltr\"], [dir=\"ltr\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    inset-inline-end: 0px\n}\n\n[_nghost-%COMP%]     .ant-comment-actions li:not(:last-child):where([dir=\"rtl\"], [dir=\"rtl\"][_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]::after {\n\n    left: -9px\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L25lc3RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTs7SUFBQSxlQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxlQUFBOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxhQUFBOztJQUFBLG1CQUFBOztJQUFBLFFBQUE7O0lBQUEsZUFBQTs7SUFBQSxvQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBR0E7O0lBQUEsa0JBQUE7O0lBQUE7QUFBQTs7QUFHQTs7SUFBQSxrQkFBQTs7SUFBQSxRQUFBOztJQUFBLFlBQUE7O0lBQUEsVUFBQTs7SUFBQSxzQkFBQTs7SUFBQSwrTEFBQTs7SUFBQSxrQkFBQTs7SUFBQSxzREFBQTs7SUFBQSxnQkFBQTs7SUFBQTtBQUFBOztBQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTs7QUFBQTs7SUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yLW5hbWV7XG4gICAgICAgIEBhcHBseSB0ZXh0LXRoZW1lLWdyYXkgZGFyazp0ZXh0LXdoaXRlL1suODddIHRleHQtWzEycHhdO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtY29tbWVudC1jb250ZW50LWF1dGhvci10aW1le1xuICAgICAgICBAYXBwbHkgdGV4dC1saWdodCBkYXJrOnRleHQtd2hpdGUvNjAgdGV4dC1bMTJweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWFjdGlvbnMgPiBsaSA+IHNwYW57XG4gICAgICAgIEBhcHBseSB0ZXh0LWxpZ2h0LWV4dHJhIGRhcms6dGV4dC13aGl0ZS82MCB0ZXh0LVsxMnB4XSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtWzhweF07XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1jb21tZW50LWFjdGlvbnMgbGl7XG4gICAgICAgIEBhcHBseSByZWxhdGl2ZSBtZS1bOHB4XTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWNvbW1lbnQtYWN0aW9ucyBsaTpub3QoOmxhc3QtY2hpbGQpOjphZnRlcntcbiAgICAgICAgQGFwcGx5IGFic29sdXRlIHRvcC1bNTAlXSBsdHI6ZW5kLTAgcnRsOmxlZnQtWy05cHhdIGgtWzEycHhdIHctWzFweF0gYmctZGFyayBkYXJrOmJnLXdoaXRlLzEwIC10cmFuc2xhdGUteS0xLzIgY29udGVudC1bJyddO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 66891:
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ 16065);

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ 7800:
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 47120);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 67265);


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ 53611:
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 47120);
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ 68862);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ 7800);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 67265);
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ 86181);





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result;

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;

    // Check for cases of one full calendar month
    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ 59881:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ 80373);
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ 7800);
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ 53611);
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ 7480);
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ 75888);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ 47120);
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ 66891);
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ 16065);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ 76010);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 67265);










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }
  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);
  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }
  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }
  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }
  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft);

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ 82855:
/*!***********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-comment.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzCommentActionComponent: () => (/* binding */ NzCommentActionComponent),
/* harmony export */   NzCommentActionHostDirective: () => (/* binding */ NzCommentActionHostDirective),
/* harmony export */   NzCommentAvatarDirective: () => (/* binding */ NzCommentAvatarDirective),
/* harmony export */   NzCommentComponent: () => (/* binding */ NzCommentComponent),
/* harmony export */   NzCommentContentDirective: () => (/* binding */ NzCommentContentDirective),
/* harmony export */   NzCommentModule: () => (/* binding */ NzCommentModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 26672);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 83517);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 20274);












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzCommentActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c0 = ["*"];
function NzCommentComponent_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzAuthor);
  }
}
function NzCommentComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzAuthor);
  }
}
function NzCommentComponent_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nzDatetime);
  }
}
function NzCommentComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCommentComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzDatetime);
  }
}
function NzCommentComponent_ul_8_li_1_ng_template_2_Template(rf, ctx) {}
function NzCommentComponent_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzCommentComponent_ul_8_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const action_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCommentActionHost", action_r6.content);
  }
}
function NzCommentComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzCommentComponent_ul_8_li_1_Template, 3, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.actions);
  }
}
const _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
const _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
class NzCommentAvatarDirective {
  static #_ = this.ɵfac = function NzCommentAvatarDirective_Factory(t) {
    return new (t || NzCommentAvatarDirective)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzCommentAvatarDirective,
    selectors: [["nz-avatar", "nz-comment-avatar", ""]],
    exportAs: ["nzCommentAvatar"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentAvatarDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-avatar[nz-comment-avatar]',
      exportAs: 'nzCommentAvatar'
    }]
  }], null, null);
})();
class NzCommentContentDirective {
  static #_ = this.ɵfac = function NzCommentContentDirective_Factory(t) {
    return new (t || NzCommentContentDirective)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzCommentContentDirective,
    selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]],
    hostAttrs: [1, "ant-comment-content-detail"],
    exportAs: ["nzCommentContent"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentContentDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'nz-comment-content, [nz-comment-content]',
      exportAs: 'nzCommentContent',
      host: {
        class: 'ant-comment-content-detail'
      }
    }]
  }], null, null);
})();
class NzCommentActionHostDirective extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef) {
    super(componentFactoryResolver, viewContainerRef);
  }
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    this.attach(this.nzCommentActionHost);
  }
  static #_ = this.ɵfac = function NzCommentActionHostDirective_Factory(t) {
    return new (t || NzCommentActionHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzCommentActionHostDirective,
    selectors: [["", "nzCommentActionHost", ""]],
    inputs: {
      nzCommentActionHost: "nzCommentActionHost"
    },
    exportAs: ["nzCommentActionHost"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentActionHostDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nzCommentActionHost]',
      exportAs: 'nzCommentActionHost'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    nzCommentActionHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NzCommentActionComponent {
  get content() {
    return this.contentPortal;
  }
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
    this.contentPortal = null;
  }
  ngOnInit() {
    this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(this.implicitContent, this.viewContainerRef);
  }
  static #_ = this.ɵfac = function NzCommentActionComponent_Factory(t) {
    return new (t || NzCommentActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzCommentActionComponent,
    selectors: [["nz-comment-action"]],
    viewQuery: function NzCommentActionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.implicitContent = _t.first);
      }
    },
    exportAs: ["nzCommentAction"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzCommentActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentActionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-comment-action',
      exportAs: 'nzCommentAction',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: '<ng-template><ng-content></ng-content></ng-template>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }]
  });
})();
class NzCommentComponent {
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.dir = 'ltr';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function NzCommentComponent_Factory(t) {
    return new (t || NzCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzCommentComponent,
    selectors: [["nz-comment"]],
    contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzCommentActionComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.actions = _t);
      }
    },
    hostVars: 4,
    hostBindings: function NzCommentComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzAuthor: "nzAuthor",
      nzDatetime: "nzDatetime"
    },
    exportAs: ["nzComment"],
    ngContentSelectors: _c2,
    decls: 11,
    vars: 3,
    consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-content-author-time", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [3, "nzCommentActionHost"]],
    template: function NzCommentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzCommentComponent_span_5_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzCommentComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzCommentComponent_ul_8_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAuthor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzDatetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actions == null ? null : ctx.actions.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__.NzStringTemplateOutletDirective, NzCommentActionHostDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-comment',
      exportAs: 'nzComment',
      template: `
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <ng-content select="nz-avatar[nz-comment-avatar]"></ng-content>
      </div>
      <div class="ant-comment-content">
        <div class="ant-comment-content-author">
          <span *ngIf="nzAuthor" class="ant-comment-content-author-name">
            <ng-container *nzStringTemplateOutlet="nzAuthor">{{ nzAuthor }}</ng-container>
          </span>
          <span *ngIf="nzDatetime" class="ant-comment-content-author-time">
            <ng-container *nzStringTemplateOutlet="nzDatetime">{{ nzDatetime }}</ng-container>
          </span>
        </div>
        <ng-content select="nz-comment-content"></ng-content>
        <ul class="ant-comment-actions" *ngIf="actions?.length">
          <li *ngFor="let action of actions">
            <span><ng-template [nzCommentActionHost]="action.content"></ng-template></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ant-comment-nested">
      <ng-content></ng-content>
    </div>
  `,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        '[class.ant-comment]': `true`,
        '[class.ant-comment-rtl]': `dir === "rtl"`
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    nzAuthor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzDatetime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    actions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NzCommentActionComponent]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
class NzCommentModule {
  static #_ = this.ɵfac = function NzCommentModule_Factory(t) {
    return new (t || NzCommentModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzCommentModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__.NzOutletModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzCommentModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__.NzOutletModule],
      exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
      declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
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
//# sourceMappingURL=src_app_components_comment_index_module_ts.js.map