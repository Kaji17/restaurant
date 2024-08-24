"use strict";
(self["webpackChunkhexadash"] = self["webpackChunkhexadash"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 15000:
/*!********************************!*\
  !*** ./src/app/core/config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configurable: () => (/* binding */ Configurable)
/* harmony export */ });
/* harmony import */ var _assets_config_developpement_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/config/developpement.json */ 21670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class Configurable {
  API_ENDPOINT;
  constructor() {
    this.API_ENDPOINT = _assets_config_developpement_json__WEBPACK_IMPORTED_MODULE_0__;
  }
  get(key) {
    return this.API_ENDPOINT[key];
  }
  getApi(key) {
    let a = _assets_config_developpement_json__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS;
    return `${_assets_config_developpement_json__WEBPACK_IMPORTED_MODULE_0__["HOST_API-DEV"]}${a[key]}`;
  }
  static ɵfac = function Configurable_Factory(t) {
    return new (t || Configurable)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: Configurable,
    factory: Configurable.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 23829:
/*!***********************************************!*\
  !*** ./src/app/menu/carte/carte.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarteComponent: () => (/* binding */ CarteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class CarteComponent {
  static ɵfac = function CarteComponent_Factory(t) {
    return new (t || CarteComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CarteComponent,
    selectors: [["app-carte"]],
    decls: 2,
    vars: 0,
    template: function CarteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "carte works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 97908:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuRoutingModule: () => (/* binding */ MenuRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _carte_carte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carte/carte.component */ 23829);
/* harmony import */ var _plat_plat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plat/plat.component */ 55231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: 'carte',
  component: _carte_carte_component__WEBPACK_IMPORTED_MODULE_0__.CarteComponent,
  data: {
    title: 'Gestion Cartes'
  }
}, {
  path: 'plat',
  component: _plat_plat_component__WEBPACK_IMPORTED_MODULE_1__.PlatComponent,
  data: {
    title: 'Gestion Plats'
  }
}];
class MenuRoutingModule {
  static ɵfac = function MenuRoutingModule_Factory(t) {
    return new (t || MenuRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MenuRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MenuRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 30321:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuModule: () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 97908);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 83500);
/* harmony import */ var _carte_carte_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carte/carte.component */ 23829);
/* harmony import */ var _plat_plat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plat/plat.component */ 55231);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/modal */ 99404);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 17792);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fullcalendar/angular */ 66514);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 90362);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-svg-icon */ 21291);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 10050);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5796);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 62207);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 9831);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 64040);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 52286);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 7505);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ 92870);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/message */ 97554);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 33433);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/progress */ 22094);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ 62476);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/rate */ 26439);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 54609);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 37716);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tag */ 54673);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 356);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 80881);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/upload */ 15843);
/* harmony import */ var ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-om-perfect-scrollbar */ 30797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 61699);







































const antdModule = [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule, ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__.NzRateModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__.NzProgressModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__.NzTimelineModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__.NzCalendarModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectModule, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__.NzUploadModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_24__.NzPaginationModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__.NzDatePickerModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_27__.NzMessageModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_28__.NzSkeletonModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__.EditorModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_30__.AngularSvgIconModule.forRoot(), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__.PerfectScrollbarModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_33__.FullCalendarModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_34__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_34__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule];
class MenuModule {
  static ɵfac = function MenuModule_Factory(t) {
    return new (t || MenuModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({
    type: MenuModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuRoutingModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalModule, antdModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](MenuModule, {
    declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _carte_carte_component__WEBPACK_IMPORTED_MODULE_2__.CarteComponent, _plat_plat_component__WEBPACK_IMPORTED_MODULE_3__.PlatComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuRoutingModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule, ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__.NzRateModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__.NzProgressModule, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownModule, ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__.NzTimelineModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabsModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule, ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__.NzCalendarModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectModule, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__.NzUploadModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule, ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_24__.NzPaginationModule, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__.NzDatePickerModule, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxModule, ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_27__.NzMessageModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_28__.NzSkeletonModule, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__.EditorModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_30__.AngularSvgIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, ngx_om_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_32__.PerfectScrollbarModule, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_33__.FullCalendarModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_34__.NzIconModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_34__.NzIconModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 83500:
/*!*********************************************!*\
  !*** ./src/app/menu/menu/menu.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class MenuComponent {
  static ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 2,
    vars: 0,
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 55231:
/*!*********************************************!*\
  !*** ./src/app/menu/plat/plat.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlatComponent: () => (/* binding */ PlatComponent)
/* harmony export */ });
/* harmony import */ var _shared_interfaces_page_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/interfaces/page.type */ 57191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 99404);
/* harmony import */ var src_app_shared_services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/dish.service */ 90293);
/* harmony import */ var _shared_services_utilis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/utilis.service */ 20349);
/* harmony import */ var _shared_services_notification_push_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/notification-push.service */ 43459);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 48619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 60479);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 45920);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 38138);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 27253);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 71498);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/select */ 66677);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 27852);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/icon */ 84740);


















function PlatComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 26)(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 27)(10, "div", 28)(11, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PlatComponent_tr_40_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const dish_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.onDeleteDish(dish_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const dish_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dish_r4.disheid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dish_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dish_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dish_r4.dishecategory.name);
  }
}
function PlatComponent_ng_template_41_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 40);
  }
  if (rf & 2) {
    const categorieDish_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", categorieDish_r8)("nzLabel", categorieDish_r8.name);
  }
}
function PlatComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 33)(1, "nz-form-item")(2, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-form-item")(5, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-form-item")(8, "nz-form-control")(9, "nz-form-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cat\u00E9gorie de plat:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nz-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PlatComponent_ng_template_41_Template_nz_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.dishcategory = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PlatComponent_ng_template_41_nz_option_12_Template, 1, 2, "nz-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-form-item")(14, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.formCreateDish);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.dishcategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.categorieDishs);
  }
}
class PlatComponent {
  modalService;
  dishService;
  utilisService;
  notificationPushService;
  formBuilder;
  value;
  statusFilter = '';
  nameSearchValue = '';
  dishs = [];
  categorieDishs = [];
  filteredDish = [];
  pageable = new _shared_interfaces_page_type__WEBPACK_IMPORTED_MODULE_0__.Page();
  formCreateDish;
  constructor(modalService, dishService, utilisService, notificationPushService, formBuilder) {
    this.modalService = modalService;
    this.dishService = dishService;
    this.utilisService = utilisService;
    this.notificationPushService = notificationPushService;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.getAllCategorieDish();
    this.getAllDish(this.pageable);
    this.buildCreatDishForm();
  }
  buildCreatDishForm() {
    this.formCreateDish = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      dishecategoryid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      description: ['']
    });
  }
  getAllCategorieDish() {
    this.dishService.gettAllCategorieDish().subscribe({
      next: data => {
        this.utilisService.response(data, d => {
          this.categorieDishs = d.body.content;
          console.log("[*] Liste des categories plats {}", this.categorieDishs);
        });
      }
    });
  }
  /**
   * Récuperation de la liste des plats et ajout dans une liste
   * @param pageable
   */
  getAllDish(pageable) {
    this.dishService.gettAllDish(pageable).subscribe({
      next: data => {
        this.utilisService.response(data, d => {
          this.dishs = d.body.content;
          this.filteredDish = d.body.content;
          console.log("[*] Liste des plats : {}", this.filteredDish);
        });
      },
      error: error => {
        this.utilisService.response(error, d => {});
      }
    });
  }
  addDish(newDishContent) {
    const modal = this.modalService.create({
      nzTitle: 'Ajouter un nouveau plat',
      nzContent: newDishContent,
      nzFooter: [{
        label: 'Créer plat',
        type: 'primary',
        onClick: () => this.modalService.confirm({
          nzTitle: 'Are you sure you want to create this project?',
          nzOnOk: () => this.handleAddNewDish()
        })
      }],
      nzWidth: 620
    });
  }
  handleAddNewDish() {
    let res = this.formCreateDish.value;
    res.dishecategoryid = this.formCreateDish.value.dishecategoryid.dishecategoryid;
    console.log("Content form {}", res);
    this.dishService.addDish(res).subscribe({
      next: data => {
        this.utilisService.response(data, d => {
          console.log("Ajout de plat success : {}", data.body);
          this.notificationPushService.showNotification("success", "Création de plat", "Le plat a été ajouté avec sucès");
          this.getAllDish(new _shared_interfaces_page_type__WEBPACK_IMPORTED_MODULE_0__.Page());
          this.buildCreatDishForm();
        });
      },
      error: error => {
        this.utilisService.response(error, d => {
          this.notificationPushService.showNotification("error", "Erreur de l'ajout de plat", d.error);
        });
      }
    });
    this.modalService.closeAll();
  }
  searchById() {
    if (this.value) {
      this.filteredDish = this.dishs.filter(dish => dish.disheid == this.value);
    } else {
      this.filteredDish = this.dishs;
    }
  }
  filterByName() {
    this.filteredDish = this.applyFilters();
  }
  filterByStatus() {
    this.filteredDish = this.applyFilters();
  }
  applyFilters() {
    return this.dishs.filter(dish => dish.name.toLowerCase().includes(this.nameSearchValue.toLowerCase()));
  }
  onDeleteDish(dish) {
    this.dishService.deleteDish(dish.disheid).subscribe({
      next: data => {
        this.utilisService.response(data, d => {
          console.log("Suppression plat: {} success", dish.name);
          this.getAllDish(new _shared_interfaces_page_type__WEBPACK_IMPORTED_MODULE_0__.Page());
          this.notificationPushService.showNotification("info", "Suppression de plat", `Le plat "${dish.name}" a été supprimé avec sucès`);
        });
      },
      error: error => {
        this.utilisService.response(error, d => {
          this.notificationPushService.showNotification("error", "Erreur de Suppression de plat", d.error);
        });
      }
    });
  }
  static ɵfac = function PlatComponent_Factory(t) {
    return new (t || PlatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_dish_service__WEBPACK_IMPORTED_MODULE_1__.DishService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_utilis_service__WEBPACK_IMPORTED_MODULE_2__.UtilisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_notification_push_service__WEBPACK_IMPORTED_MODULE_3__.NotificationPushService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PlatComponent,
    selectors: [["app-plat"]],
    decls: 43,
    vars: 6,
    consts: [[1, "container"], [1, "flex", "items-center", "justify-start", "mb-5"], [1, "text-dark", "dark:text-white/[.87]", "text-[20px]", "font-semibold", "mb-0", "xxs:text-[16px]", "me-1"], [1, ""], ["nz-button", "", 1, "ms-4", "shadow-btn", "capitalize", "bg-primary", "hover:bg-primary-hbr", "border-solid", "border-1", "border-primary", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[4px]", "px-[20px]", "h-[44px]", 3, "click"], ["nz-icon", "", "nzType", "plus"], [1, "bg-white", "dark:bg-white/10", "m-0", "p-0", "text-theme-gray", "dark:text-white/60", "text-[15px]", "rounded-10", "relative", "mb-[25px]"], [1, "py-[16px]", "px-[25px]", "text-dark", "dark:text-white/[.87]", "font-medium", "text-[17px]", "border-regular", "dark:border-white/10", "border-b"], [1, "mb-0", "text-lg", "font-medium", "text-dark", "dark:text-white/[.87]"], [1, "p-[25px]"], [1, "flex", "items-center", "justify-center", "w-full", "mt-5", "mb-[25px]", "max-md:flex-col", "max-md:justify-center", "gap-[15px]"], [1, "inline-flex", "items-center", "flex-wrap", "w-full", "gap-[20px]", "max-md:justify-center"], [1, "inline-flex", "items-center"], [1, "ltr:mr-2", "rtl:ml-2", "dark:text-white/60"], ["nz-input", "", "placeholder", "Search with Id", 1, "h-10", "px-[20px]", "text-body", "dark:text-white/60", "bg-white", "dark:bg-white/10", "border-normal", "border-1", "dark:border-white/10", "rounded-[6px]", 3, "ngModel", "ngModelChange"], [1, "ssm:min-w-[280px]"], [1, "h-10", "inline-flex", "items-center", "text-body", "dark:text-white/60", "bg-white", "dark:bg-white/10", "border-normal", "border-1", "dark:border-white/10", "rounded-[6px]", "px-[20px]"], ["nz-icon", "", "nzType", "search", 1, "text-light", "dark:text-white/[.87]", "text-[18px]"], ["type", "text", "nz-input", "", "placeholder", "Search name", 1, "bg-transparent", "border-none", "text-[15px]", "shadow-none", "text-dark", "dark:text-white/[.87]", "flex", "items-center", 3, "ngModel", "ngModelChange"], [1, "w-full", "overflow-x-auto"], [1, "max-h-[650px]", 3, "nzData", "nzFrontPagination", "nzShowPagination"], ["basicTable", ""], [1, "bg-regularBG", "dark:bg-[#323440]", "px-[20px]", "py-[16px]", "text-start", "text-dark", "dark:text-white/[.87]", "text-[15px]", "font-medium", "border-none", "before:hidden", "rounded-s-[10px]", "capitalize"], [1, "bg-regularBG", "dark:bg-[#323440]", "px-[20px]", "py-[16px]", "text-start", "text-dark", "dark:text-white/[.87]", "text-[15px]", "font-medium", "border-none", "before:hidden", "capitalize"], ["class", "group", 4, "ngFor", "ngForOf"], ["newDishContent", ""], [1, "group"], [1, "ltr:pr-[20px]", "rtl:pl-[20px]", "text-dark", "dark:text-white/[.87]", "text-[15px]", "py-4", "before:hidden", "border-none", "group-hover:bg-transparent"], [1, "container", "flex", "justify-around"], ["nz-button", "", 1, "ant-btn", "bg-warning", "hover:bg-light-hbr", "border-solid", "border-1", "border-light", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[40px]", "px-[20px]", "h-[44px]", "shadow-btn", "[&>span]:inline-flex", "ant-btn-icon-only"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "text-[14px]"], ["nz-button", "", 1, "ant-btn", "bg-danger", "hover:bg-light-hbr", "border-solid", "border-1", "border-light", "text-white", "dark:text-white/[.87]", "text-[14px]", "font-semibold", "leading-[22px]", "inline-flex", "items-center", "justify-center", "rounded-[40px]", "px-[20px]", "h-[44px]", "shadow-btn", "[&>span]:inline-flex", "ant-btn-icon-only", 3, "click"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "text-[14px]"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], ["type", "text", "nz-input", "", "placeholder", "Nom du plat", "name", "first", "formControlName", "name", 1, "h-[50px]", "border-normal", "dark:border-white/10", "px-[20px]", "placeholder-shown:text-light-extra", "dark:placeholder-shown:text-white/60", "rounded-[5px]", "dark:bg-white/10", "dark:text-white/60"], ["type", "number", "nz-input", "", "placeholder", "Prix", "name", "first", "formControlName", "amount", 1, "h-[50px]", "border-normal", "dark:border-white/10", "px-[20px]", "placeholder-shown:text-light-extra", "dark:placeholder-shown:text-white/60", "rounded-[5px]", "dark:bg-white/10", "dark:text-white/60"], [1, "text-[15px]", "font-semibold", "text-dark", "dark:text-white/[.87]", "capitalize", "mb-[10px]"], ["name", "first", "formControlName", "dishecategoryid", 1, "min-w-[260px]", "capitalize", "[&>nz-select-top-control]:border-normal", "dark:[&>nz-select-top-control]:border-white/10", "[&>nz-select-top-control]:bg-white", "[&>nz-select-top-control]:dark:bg-white/10", "[&>nz-select-top-control]:shadow-none", "[&>nz-select-top-control]:text-dark", "[&>nz-select-top-control]:dark:text-white/60", "[&>nz-select-top-control]:h-[50px]", "[&>nz-select-top-control]:flex", "[&>nz-select-top-control]:items-center", "[&>nz-select-top-control]:rounded-[5px]", "[&>nz-select-top-control]:px-[20px]", "[&>.ant-select-arrow]:text-theme-gray", "dark:[&>.ant-select-arrow]:text-white/60", "placeholder-shown:text-light-extra", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "placeholder", "Description du plat ", "name", "first ", "formControlName", "description", 1, "h-[118px]", "border-normal", "dark:border-white/10", "px-[20px]", "placeholder-shown:text-light-extra", "dark:placeholder-shown:text-white/60", "rounded-[5px]", "py-[15px]", "dark:bg-white/10", "dark:text-white/60"], [3, "nzValue", "nzLabel"]],
    template: function PlatComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Gestion des Plats");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PlatComponent_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](42);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addDish(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Nouveau plat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "List des plats");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PlatComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.value = $event;
        })("ngModelChange", function PlatComponent_Template_input_ngModelChange_19_listener() {
          return ctx.searchById();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15)(21, "nz-input-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PlatComponent_Template_input_ngModelChange_23_listener($event) {
          return ctx.nameSearchValue = $event;
        })("ngModelChange", function PlatComponent_Template_input_ngModelChange_23_listener() {
          return ctx.filterByName();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 19)(25, "nz-table", 20, 21)(27, "thead")(28, "tr")(29, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Categorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, PlatComponent_tr_40_Template, 15, 4, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, PlatComponent_ng_template_41_Template, 16, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.nameSearchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", ctx.filteredDish)("nzFrontPagination", true)("nzShowPagination", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredDish);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__.NzSelectComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__.NzIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57191:
/*!************************************************!*\
  !*** ./src/app/shared/interfaces/page.type.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
class Page {
  pagination = true;
  size = 10;
  page = 0;
}

/***/ }),

/***/ 90293:
/*!*************************************************!*\
  !*** ./src/app/shared/services/dish.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DishService: () => (/* binding */ DishService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/config */ 15000);



class DishService {
  http;
  configService;
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
  }
  /**
   * Ajouter un plat
   * @param dishDto
   * @param images
   * @returns
   */
  addDish(dishDto, images) {
    let form = new FormData();
    if (images) {
      images.map(el => {
        form.append("images", el);
      });
    }
    form.append("dishdto", JSON.stringify(dishDto));
    return this.http.post(this.configService.getApi('DISH_ADD'), form, {
      observe: 'response'
    });
  }
  gettAllDish(obj) {
    return this.http.get(this.configService.getApi("DISH_GET"), {
      observe: "response",
      params: obj
    });
  }
  gettAllCategorieDish() {
    return this.http.get(this.configService.getApi("CATEGORI_DISH_GET"), {
      observe: "response"
    });
  }
  deleteDish(dishid) {
    return this.http.delete(this.configService.getApi("DISH_DELETE") + dishid, {
      observe: "response"
    });
  }
  static ɵfac = function DishService_Factory(t) {
    return new (t || DishService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_config__WEBPACK_IMPORTED_MODULE_0__.Configurable));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DishService,
    factory: DishService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 43459:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/notification-push.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPushService: () => (/* binding */ NotificationPushService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/notification */ 71094);


class NotificationPushService {
  notification;
  constructor(notification) {
    this.notification = notification;
  }
  // Notification alerte
  showNotification(type, title, message) {
    this.notification.create(type, title, message);
  }
  static ɵfac = function NotificationPushService_Factory(t) {
    return new (t || NotificationPushService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_1__.NzNotificationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationPushService,
    factory: NotificationPushService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 20349:
/*!***************************************************!*\
  !*** ./src/app/shared/services/utilis.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtilisService: () => (/* binding */ UtilisService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class UtilisService {
  messageError = '';
  getMess() {
    return this.messageError;
  }
  constructor() {}
  // RECUPERATION DU STATUT DE LA REQUETTE
  response(data, cb) {
    let statuscode = data.statusCodeValue;
    switch (statuscode) {
      case 200:
        {
          if (cb) {
            cb(data.body);
          }
          break;
        }
      case 201:
        {
          if (cb) {
            cb(data.body);
          }
          break;
        }
      case 401:
        {
          if (cb) {
            cb(data);
          } else {
            this.messageError = 'Unauthorized';
          }
          break;
        }
      case 403:
        {
          if (cb) {
            cb(data);
          } else {
            this.messageError = 'Forbidden';
          }
          break;
        }
      case 404:
        {
          if (cb) {
            cb(data);
          } else {
            this.messageError = 'Not Found';
          }
          break;
        }
      default:
        {
          if (cb) {
            cb(data);
          } else {
            this.messageError = 'Serveur Innacessible';
          }
          break;
        }
    }
  }
  static ɵfac = function UtilisService_Factory(t) {
    return new (t || UtilisService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UtilisService,
    factory: UtilisService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 21670:
/*!**********************************************!*\
  !*** ./src/assets/config/developpement.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"HOST_API-DEV":"https://restaurant-yvh6.onrender.com","HOST:API":"https://restaurant-yvh6.onrender.com","API_ENDPOINTS":{"comment":"------------ OPERATIONS DISH ---------------","DISH_PUT":"/api/v1/restaurant/dishe/update-dishe/","DISH_ADD":"/api/v1/restaurant/dishe/add-dishe","DISH_GET":"/api/v1/restaurant/dishe/get-dishe","DISH_DELETE":"/api/v1/restaurant/dishe/delete-dishe/","CATEGORI_DISH_GET":"/api/v1/restaurant/categorie-dish/get-categorydish"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map