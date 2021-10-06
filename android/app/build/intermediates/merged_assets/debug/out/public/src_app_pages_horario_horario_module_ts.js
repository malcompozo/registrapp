(self["webpackChunkregistrApp"] = self["webpackChunkregistrApp"] || []).push([["src_app_pages_horario_horario_module_ts"],{

/***/ 2830:
/*!*********************************************************!*\
  !*** ./src/app/pages/horario/horario-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioPageRoutingModule": () => (/* binding */ HorarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _horario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horario.page */ 879);




const routes = [
    {
        path: '',
        component: _horario_page__WEBPACK_IMPORTED_MODULE_0__.HorarioPage
    }
];
let HorarioPageRoutingModule = class HorarioPageRoutingModule {
};
HorarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HorarioPageRoutingModule);



/***/ }),

/***/ 8612:
/*!*************************************************!*\
  !*** ./src/app/pages/horario/horario.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioPageModule": () => (/* binding */ HorarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _horario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horario-routing.module */ 2830);
/* harmony import */ var _horario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horario.page */ 879);







let HorarioPageModule = class HorarioPageModule {
};
HorarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _horario_routing_module__WEBPACK_IMPORTED_MODULE_0__.HorarioPageRoutingModule
        ],
        declarations: [_horario_page__WEBPACK_IMPORTED_MODULE_1__.HorarioPage]
    })
], HorarioPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_horario_horario_module_ts.js.map