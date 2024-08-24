"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_components_components_module_ts"],{

/***/ 64350:
/*!*********************************************************!*\
  !*** ./src/app/components/components-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsRoutingModule: () => (/* binding */ ComponentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



const DEMO_COMPONENT_ROUTES = [{
  'path': 'components/alert',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-alert_mjs"), __webpack_require__.e("src_app_components_alert_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./alert/index.module */ 38387)).then(m => m.NzDemoAlertModule)
}, {
  'path': 'components/auto-complete',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_auto-complete_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auto-complete/index.module */ 13797)).then(m => m.NzDemoAutoCompleteModule)
}, {
  'path': 'components/avatar',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_avatar_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./avatar/index.module */ 89365)).then(m => m.NzDemoAvatarModule)
}, {
  'path': 'components/badge',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_badge_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./badge/index.module */ 60711)).then(m => m.NzDemoBadgeModule)
}, {
  'path': 'components/breadcrumb',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_breadcrumb_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./breadcrumb/index.module */ 55379)).then(m => m.NzDemoBreadcrumbModule)
}, {
  'path': 'components/button',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_button_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./button/index.module */ 97307)).then(m => m.NzDemoButtonModule)
}, {
  'path': 'components/calendar',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-date-picker_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-calendar_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-alert_mjs"), __webpack_require__.e("src_app_components_calendar_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/index.module */ 70616)).then(m => m.NzDemoCalendarModule)
}, {
  'path': 'components/card',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-card_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-skeleton_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-tabs_mjs"), __webpack_require__.e("src_app_components_card_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card/index.module */ 34955)).then(m => m.NzDemoCardModule)
}, {
  'path': 'components/carousel',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_carousel_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./carousel/index.module */ 31561)).then(m => m.NzDemoCarouselModule)
}, {
  'path': 'components/cascader',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-modal_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-cascader_mjs"), __webpack_require__.e("src_app_components_cascader_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cascader/index.module */ 91778)).then(m => m.NzDemoCascaderModule)
}, {
  'path': 'components/checkbox',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-checkbox_mjs"), __webpack_require__.e("src_app_components_checkbox_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./checkbox/index.module */ 32471)).then(m => m.NzDemoCheckboxModule)
}, {
  'path': 'components/collapse',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-collapse_mjs"), __webpack_require__.e("src_app_components_collapse_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./collapse/index.module */ 64562)).then(m => m.NzDemoCollapseModule)
}, {
  'path': 'components/comment',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs"), __webpack_require__.e("src_app_components_comment_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comment/index.module */ 36099)).then(m => m.NzDemoCommentModule)
}, {
  'path': 'components/date-picker',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-date-picker_mjs"), __webpack_require__.e("src_app_components_date-picker_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./date-picker/index.module */ 15414)).then(m => m.NzDemoDatePickerModule)
}, {
  'path': 'components/drawer',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-date-picker_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs"), __webpack_require__.e("src_app_components_drawer_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./drawer/index.module */ 68409)).then(m => m.NzDemoDrawerModule)
}, {
  'path': 'components/dropdown',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_dropdown_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dropdown/index.module */ 15690)).then(m => m.NzDemoDropdownModule)
}, {
  'path': 'components/empty',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-checkbox_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-pagination_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-table_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-cascader_mjs"), __webpack_require__.e("src_app_components_empty_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./empty/index.module */ 56299)).then(m => m.NzDemoEmptyModule)
}, {
  'path': 'components/form',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-date-picker_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-checkbox_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-input-number_mjs"), __webpack_require__.e("src_app_components_form_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./form/index.module */ 23103)).then(m => m.NzDemoFormModule)
}, {
  'path': 'components/grid',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-slider_mjs"), __webpack_require__.e("src_app_components_grid_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./grid/index.module */ 65404)).then(m => m.NzDemoGridModule)
}, {
  'path': 'components/input',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-date-picker_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-cascader_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-input-number_mjs"), __webpack_require__.e("src_app_components_input_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./input/index.module */ 24550)).then(m => m.NzDemoInputModule)
}, {
  'path': 'components/list',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-card_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-skeleton_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-pagination_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-typography_mjs"), __webpack_require__.e("src_app_components_list_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list/index.module */ 49824)).then(m => m.NzDemoListModule)
}, {
  'path': 'components/menu',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_menu_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu/index.module */ 76121)).then(m => m.NzDemoMenuModule)
}, {
  'path': 'components/message',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_message_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./message/index.module */ 5421)).then(m => m.NzDemoMessageModule)
}, {
  'path': 'components/modal',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-modal_mjs"), __webpack_require__.e("src_app_components_modal_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/index.module */ 30550)).then(m => m.NzDemoModalModule)
}, {
  'path': 'components/notification',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-notification_mjs"), __webpack_require__.e("src_app_components_notification_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notification/index.module */ 91322)).then(m => m.NzDemoNotificationModule)
}, {
  'path': 'components/radio',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("src_app_components_radio_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./radio/index.module */ 60174)).then(m => m.NzDemoRadioModule)
}, {
  'path': 'components/progress',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-progress_mjs"), __webpack_require__.e("src_app_components_progress_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./progress/index.module */ 90459)).then(m => m.NzDemoProgressModule)
}, {
  'path': 'components/rate',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-rate_mjs"), __webpack_require__.e("src_app_components_rate_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rate/index.module */ 47043)).then(m => m.NzDemoRateModule)
}, {
  'path': 'components/skeleton',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-skeleton_mjs"), __webpack_require__.e("src_app_components_skeleton_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./skeleton/index.module */ 23205)).then(m => m.NzDemoSkeletonModule)
}, {
  'path': 'components/typography',
  'loadChildren': () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs"), __webpack_require__.e("default-src_app_components_demo-components-share_demo-components-share_module_ts"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-typography_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-slider_mjs"), __webpack_require__.e("src_app_components_typography_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./typography/index.module */ 78522)).then(m => m.NzDemoTypographyModule)
}];
const routes = [...DEMO_COMPONENT_ROUTES];
class ComponentsRoutingModule {
  static ɵfac = function ComponentsRoutingModule_Factory(t) {
    return new (t || ComponentsRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ComponentsRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 10822:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsModule: () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components-routing.module */ 64350);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 44309);
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/affix */ 52287);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 44336);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ 52456);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/popover */ 64163);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.component */ 90605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
















const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.LeftOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__.RightOutline];
class ComponentsModule {
  static ɵfac = function ComponentsModule_Factory(t) {
    return new (t || ComponentsModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ComponentsModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule.forRoot(icons), ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzGridModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__.NzAffixModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__.NzMenuModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__.NzI18nModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageModule, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__.NzPopoverModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__.NzBadgeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, {
    declarations: [_components_component__WEBPACK_IMPORTED_MODULE_1__.ComponentsComponent],
    imports: [_components_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsRoutingModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzGridModule, ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__.NzAffixModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__.NzMenuModule, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__.NzI18nModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageModule, ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_11__.NzPopoverModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__.NzBadgeModule]
  });
})();

/***/ }),

/***/ 83972:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 54524:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 97777);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 83972);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 89378);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => duration$, config);
}

/***/ }),

/***/ 52287:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-affix.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzAffixComponent: () => (/* binding */ NzAffixComponent),
/* harmony export */   NzAffixModule: () => (/* binding */ NzAffixModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 31523);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 54524);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 45118);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ 73274);
/* harmony import */ var ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/cdk/resize-observer */ 45386);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["fixedEl"];
const _c1 = ["*"];
var AffixRespondEvents;
(function (AffixRespondEvents) {
  AffixRespondEvents["resize"] = "resize";
  AffixRespondEvents["scroll"] = "scroll";
  AffixRespondEvents["touchstart"] = "touchstart";
  AffixRespondEvents["touchmove"] = "touchmove";
  AffixRespondEvents["touchend"] = "touchend";
  AffixRespondEvents["pageshow"] = "pageshow";
  AffixRespondEvents["load"] = "LOAD";
})(AffixRespondEvents || (AffixRespondEvents = {}));

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function isTargetWindow(target) {
  return typeof window !== 'undefined' && target === window;
}
function getTargetRect(target) {
  return !isTargetWindow(target) ? target.getBoundingClientRect() : {
    top: 0,
    left: 0,
    bottom: 0
  };
}
const NZ_CONFIG_MODULE_NAME = 'affix';
const NZ_AFFIX_CLS_PREFIX = 'ant-affix';
const NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
class NzAffixComponent {
  get target() {
    const el = this.nzTarget;
    return (typeof el === 'string' ? this.document.querySelector(el) : el) || window;
  }
  constructor(el, doc, nzConfigService, scrollSrv, ngZone, platform, renderer, nzResizeObserver, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.ngZone = ngZone;
    this.platform = platform;
    this.renderer = renderer;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dir = 'ltr';
    this.positionChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
    this.offsetChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    // The wrapper would stay at the original position as a placeholder.
    this.placeholderNode = el.nativeElement;
    this.document = doc;
  }
  ngOnInit() {
    this.directionality.change?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.registerListeners();
      this.updatePosition({});
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzOffsetBottom,
      nzOffsetTop,
      nzTarget
    } = changes;
    if (nzOffsetBottom || nzOffsetTop) {
      this.offsetChanged$.next();
    }
    if (nzTarget) {
      this.registerListeners();
    }
  }
  ngAfterViewInit() {
    this.registerListeners();
  }
  ngOnDestroy() {
    this.removeListeners();
  }
  registerListeners() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeListeners();
    const el = this.target === window ? this.document.body : this.target;
    this.positionChangeSubscription = this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(...Object.keys(AffixRespondEvents).map(evName => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.target, evName)), this.offsetChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => ({}))), this.nzResizeObserver.observe(el)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.throttleTime)(NZ_AFFIX_DEFAULT_SCROLL_TIME, undefined, {
      trailing: true
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(e => this.updatePosition(e)));
    this.timeout = setTimeout(() => this.updatePosition({}));
  }
  removeListeners() {
    clearTimeout(this.timeout);
    this.positionChangeSubscription.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  getOffset(element, target) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = getTargetRect(target);
    const scrollTop = this.scrollSrv.getScroll(target, true);
    const scrollLeft = this.scrollSrv.getScroll(target, false);
    const docElem = this.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;
    return {
      top: elemRect.top - targetRect.top + scrollTop - clientTop,
      left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height
    };
  }
  setAffixStyle(e, affixStyle) {
    const originalAffixStyle = this.affixStyle;
    const isWindow = this.target === window;
    if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.shallowEqual)(originalAffixStyle, affixStyle)) {
      return;
    }
    const fixed = !!affixStyle;
    const wrapEl = this.fixedEl.nativeElement;
    this.renderer.setStyle(wrapEl, 'cssText', (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.getStyleAsText)(affixStyle));
    this.affixStyle = affixStyle;
    if (fixed) {
      wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
    } else {
      wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
    }
    this.updateRtlClass();
    if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
      this.nzChange.emit(fixed);
    }
  }
  setPlaceholderStyle(placeholderStyle) {
    const originalPlaceholderStyle = this.placeholderStyle;
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.shallowEqual)(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, 'cssText', (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.getStyleAsText)(placeholderStyle));
    this.placeholderStyle = placeholderStyle;
  }
  syncPlaceholderStyle(e) {
    if (!this.affixStyle) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, 'cssText', '');
    this.placeholderStyle = undefined;
    const styleObj = {
      width: this.placeholderNode.offsetWidth,
      height: this.fixedEl.nativeElement.offsetHeight
    };
    this.setAffixStyle(e, {
      ...this.affixStyle,
      ...styleObj
    });
    this.setPlaceholderStyle(styleObj);
  }
  updatePosition(e) {
    if (!this.platform.isBrowser) {
      return;
    }
    const targetNode = this.target;
    let offsetTop = this.nzOffsetTop;
    const scrollTop = this.scrollSrv.getScroll(targetNode, true);
    const elemOffset = this.getOffset(this.placeholderNode, targetNode);
    const fixedNode = this.fixedEl.nativeElement;
    const elemSize = {
      width: fixedNode.offsetWidth,
      height: fixedNode.offsetHeight
    };
    const offsetMode = {
      top: false,
      bottom: false
    };
    // Default to `offsetTop=0`.
    if (typeof offsetTop !== 'number' && typeof this.nzOffsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === 'number';
      offsetMode.bottom = typeof this.nzOffsetBottom === 'number';
    }
    const targetRect = getTargetRect(targetNode);
    const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
    if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
      const width = elemOffset.width;
      const top = targetRect.top + offsetTop;
      this.setAffixStyle(e, {
        position: 'fixed',
        top,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemSize.height
      });
    } else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
      const targetBottomOffset = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
      const width = elemOffset.width;
      this.setAffixStyle(e, {
        position: 'fixed',
        bottom: targetBottomOffset + this.nzOffsetBottom,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemOffset.height
      });
    } else {
      if (e.type === AffixRespondEvents.resize && this.affixStyle && this.affixStyle.position === 'fixed' && this.placeholderNode.offsetWidth) {
        this.setAffixStyle(e, {
          ...this.affixStyle,
          width: this.placeholderNode.offsetWidth
        });
      } else {
        this.setAffixStyle(e);
      }
      this.setPlaceholderStyle();
    }
    if (e.type === 'resize') {
      this.syncPlaceholderStyle(e);
    }
  }
  updateRtlClass() {
    const wrapEl = this.fixedEl.nativeElement;
    if (this.dir === 'rtl') {
      if (wrapEl.classList.contains(NZ_AFFIX_CLS_PREFIX)) {
        wrapEl.classList.add(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      } else {
        wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      }
    } else {
      wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
    }
  }
  static #_ = this.ɵfac = function NzAffixComponent_Factory(t) {
    return new (t || NzAffixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__.NzScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_14__.NzResizeObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzAffixComponent,
    selectors: [["nz-affix"]],
    viewQuery: function NzAffixComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fixedEl = _t.first);
      }
    },
    inputs: {
      nzTarget: "nzTarget",
      nzOffsetTop: "nzOffsetTop",
      nzOffsetBottom: "nzOffsetBottom"
    },
    outputs: {
      nzChange: "nzChange"
    },
    exportAs: ["nzAffix"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c1,
    decls: 3,
    vars: 0,
    consts: [["fixedEl", ""]],
    template: function NzAffixComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputNumber)(undefined)], NzAffixComponent.prototype, "nzOffsetTop", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__.WithConfig)(), (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__.InputNumber)(undefined)], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAffixComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-affix',
      exportAs: 'nzAffix',
      template: `
    <div #fixedEl>
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
      }]
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__.NzConfigService
    }, {
      type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__.NzScrollService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: ng_zorro_antd_cdk_resize_observer__WEBPACK_IMPORTED_MODULE_14__.NzResizeObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    fixedEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fixedEl', {
        static: true
      }]
    }],
    nzTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOffsetTop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzOffsetBottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    nzChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAffixModule {
  static #_ = this.ɵfac = function NzAffixModule_Factory(t) {
    return new (t || NzAffixModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzAffixModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.PlatformModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzAffixModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NzAffixComponent],
      exports: [NzAffixComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.PlatformModule]
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

/***/ 64163:
/*!***********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popover.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzPopoverComponent: () => (/* binding */ NzPopoverComponent),
/* harmony export */   NzPopoverDirective: () => (/* binding */ NzPopoverDirective),
/* harmony export */   NzPopoverModule: () => (/* binding */ NzPopoverModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 251);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 28931);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 91636);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 86424);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 24565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 72698);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 26672);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 60506);




















function NzPopoverComponent_ng_template_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzPopoverComponent_ng_template_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzContent);
  }
}
function NzPopoverComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzPopoverComponent_ng_template_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-popover-rtl", ctx_r1.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzContent);
  }
}
const NZ_CONFIG_MODULE_NAME = 'popover';
class NzPopoverDirective extends ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.NzTooltipBaseDirective {
  getProxyPropertyMap() {
    return {
      nzPopoverBackdrop: ['nzBackdrop', () => this.nzPopoverBackdrop],
      ...super.getProxyPropertyMap()
    };
  }
  constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
    super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.trigger = 'hover';
    this.placement = 'top';
    this.nzPopoverBackdrop = false;
    // eslint-disable-next-line @angular-eslint/no-output-rename
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.componentRef = this.hostView.createComponent(NzPopoverComponent);
  }
  static #_ = this.ɵfac = function NzPopoverDirective_Factory(t) {
    return new (t || NzPopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationDirective, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NzPopoverDirective,
    selectors: [["", "nz-popover", ""]],
    hostVars: 2,
    hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-popover-open", ctx.visible);
      }
    },
    inputs: {
      arrowPointAtCenter: ["nzPopoverArrowPointAtCenter", "arrowPointAtCenter"],
      title: ["nzPopoverTitle", "title"],
      content: ["nzPopoverContent", "content"],
      directiveTitle: ["nz-popover", "directiveTitle"],
      trigger: ["nzPopoverTrigger", "trigger"],
      placement: ["nzPopoverPlacement", "placement"],
      origin: ["nzPopoverOrigin", "origin"],
      visible: ["nzPopoverVisible", "visible"],
      mouseEnterDelay: ["nzPopoverMouseEnterDelay", "mouseEnterDelay"],
      mouseLeaveDelay: ["nzPopoverMouseLeaveDelay", "mouseLeaveDelay"],
      overlayClassName: ["nzPopoverOverlayClassName", "overlayClassName"],
      overlayStyle: ["nzPopoverOverlayStyle", "overlayStyle"],
      nzPopoverBackdrop: "nzPopoverBackdrop"
    },
    outputs: {
      visibleChange: "nzPopoverVisibleChange"
    },
    exportAs: ["nzPopover"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.InputBoolean)()], NzPopoverDirective.prototype, "arrowPointAtCenter", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.WithConfig)()], NzPopoverDirective.prototype, "nzPopoverBackdrop", void 0);
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPopoverDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[nz-popover]',
      exportAs: 'nzPopover',
      host: {
        '[class.ant-popover-open]': 'visible'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__.NzConfigService
    }];
  }, {
    arrowPointAtCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverArrowPointAtCenter']
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverTitle']
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverContent']
    }],
    directiveTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nz-popover']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverTrigger']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverPlacement']
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverOrigin']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverVisible']
    }],
    mouseEnterDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverMouseEnterDelay']
    }],
    mouseLeaveDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverMouseLeaveDelay']
    }],
    overlayClassName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverOverlayClassName']
    }],
    overlayStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['nzPopoverOverlayStyle']
    }],
    nzPopoverBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['nzPopoverVisibleChange']
    }]
  });
})();
class NzPopoverComponent extends ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.NzToolTipComponent {
  constructor(cdr, directionality, noAnimation) {
    super(cdr, directionality, noAnimation);
    this._prefix = 'ant-popover';
  }
  get hasBackdrop() {
    return this.nzTrigger === 'click' ? this.nzBackdrop : false;
  }
  isEmpty() {
    return (0,ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.isTooltipEmpty)(this.nzTitle) && (0,ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.isTooltipEmpty)(this.nzContent);
  }
  static #_ = this.ɵfac = function NzPopoverComponent_Factory(t) {
    return new (t || NzPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationDirective, 9));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NzPopoverComponent,
    selectors: [["nz-popover"]],
    exportAs: ["nzPopoverComponent"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 6,
    consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-arrow-content"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]],
    template: function NzPopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzPopoverComponent_ng_template_0_Template, 9, 9, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
          return ctx.onClickOutside($event);
        })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() {
          return ctx.hide();
        })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) {
          return ctx.onPositionChange($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.CdkConnectedOverlay, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzStringTemplateOutletDirective, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__.NzConnectedOverlayDirective, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationDirective],
    encapsulation: 2,
    data: {
      animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__.zoomBigMotion]
    },
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPopoverComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'nz-popover',
      exportAs: 'nzPopoverComponent',
      animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__.zoomBigMotion],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      preserveWhitespaces: false,
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow">
            <span class="ant-popover-arrow-content"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="nzTitle">
                <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPopoverModule {
  static #_ = this.ɵfac = function NzPopoverModule_Factory(t) {
    return new (t || NzPopoverModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NzPopoverModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzOutletModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.NzToolTipModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzPopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [NzPopoverDirective, NzPopoverComponent],
      declarations: [NzPopoverDirective, NzPopoverComponent],
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__.NzOutletModule, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__.NzOverlayModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_2__.NzNoAnimationModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_1__.NzToolTipModule]
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
//# sourceMappingURL=src_app_components_components_module_ts.js.map