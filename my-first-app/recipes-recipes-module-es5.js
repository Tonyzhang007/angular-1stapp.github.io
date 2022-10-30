function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"], {
  /***/"./src/app/recipes/recipe-detail/recipe-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
    \******************************************************************/
  /*! exports provided: RecipeDetailComponent */
  /***/
  function srcAppRecipesRecipeDetailRecipeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function () {
      return RecipeDetailComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../recipe.service */"./src/app/recipes/recipe.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../shared/dropdown.directive */"./src/app/shared/dropdown.directive.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    function RecipeDetailComponent_li_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var ingredient_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ingredient_r1.name, " - ", ingredient_r1.amount, " ");
      }
    }
    var RecipeDetailComponent = /*#__PURE__*/function () {
      function RecipeDetailComponent(recipeService, route, router) {
        _classCallCheck(this, RecipeDetailComponent);
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
      }
      _createClass(RecipeDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
          });
        }
      }, {
        key: "onAddToShoppingList",
        value: function onAddToShoppingList() {
          this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
        }
      }, {
        key: "onEditRecipe",
        value: function onEditRecipe() {
          this.router.navigate(['edit'], {
            relativeTo: this.route
          });
          // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
        }
      }, {
        key: "onDeleteRecipe",
        value: function onDeleteRecipe() {
          this.recipeService.deleteRecipe(this.id);
          this.router.navigate(['/recipes']);
        }
      }]);
      return RecipeDetailComponent;
    }();
    RecipeDetailComponent.ɵfac = function RecipeDetailComponent_Factory(t) {
      return new (t || RecipeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };
    RecipeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeDetailComponent,
      selectors: [["app-recipe-detail"]],
      decls: 30,
      vars: 5,
      consts: [[1, "row"], [1, "col-xs-12"], [1, "img-responsive", 2, "max-height", "300px", 3, "src", "alt"], ["appDropdown", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], [2, "cursor", "pointer", 3, "click"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
      template: function RecipeDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Manage Recipe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_15_listener() {
            return ctx.onAddToShoppingList();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "To Shopping List");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_18_listener() {
            return ctx.onEditRecipe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit Recipe");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_21_listener() {
            return ctx.onDeleteRecipe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Delete Recipe");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RecipeDetailComponent_li_29_Template, 2, 2, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.recipe.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
        }
      },
      directives: [_shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-detail',
          templateUrl: './recipe-detail.component.html',
          styleUrls: ['./recipe-detail.component.css']
        }]
      }], function () {
        return [{
          type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipe-edit/recipe-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
    \**************************************************************/
  /*! exports provided: RecipeEditComponent */
  /***/
  function srcAppRecipesRecipeEditRecipeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function () {
      return RecipeEditComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../recipe.service */"./src/app/recipes/recipe.service.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    function RecipeEditComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeEditComponent_div_33_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
          var i_r3 = ctx.index;
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r4.onDeleteIngredient(i_r3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        var i_r3 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r3);
      }
    }
    var RecipeEditComponent = /*#__PURE__*/function () {
      function RecipeEditComponent(route, recipeService, router) {
        _classCallCheck(this, RecipeEditComponent);
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
      }
      _createClass(RecipeEditComponent, [{
        key: "ingredientsControls",
        get: function get() {
          return this.recipeForm.get('ingredients').controls;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.route.params.subscribe(function (params) {
            _this2.id = +params['id'];
            _this2.editMode = params['id'] != null;
            _this2.initForm();
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // const newRecipe = new Recipe(
          //   this.recipeForm.value['name'],
          //   this.recipeForm.value['description'],
          //   this.recipeForm.value['imagePath'],
          //   this.recipeForm.value['ingredients']);
          if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
          } else {
            this.recipeService.addRecipe(this.recipeForm.value);
          }
          this.onCancel();
        }
      }, {
        key: "onAddIngredient",
        value: function onAddIngredient() {
          this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }, {
        key: "onDeleteIngredient",
        value: function onDeleteIngredient(index) {
          this.recipeForm.get('ingredients').removeAt(index);
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var recipeName = '';
          var recipeImagePath = '';
          var recipeDescription = '';
          var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
          if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
              var _iterator = _createForOfIteratorHelper(recipe.ingredients),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var ingredient = _step.value;
                  recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                  }));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
          this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ingredients: recipeIngredients
          });
        }
      }]);
      return RecipeEditComponent;
    }();
    RecipeEditComponent.ɵfac = function RecipeEditComponent_Factory(t) {
      return new (t || RecipeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };
    RecipeEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeEditComponent,
      selectors: [["app-recipe-edit"]],
      decls: 39,
      vars: 4,
      consts: [[1, "row"], [1, "col-xs-12"], [3, "formGroup", "ngSubmit"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "imagePath"], ["type", "text", "id", "imagePath", "formControlName", "imagePath", 1, "form-control"], ["imagePath", ""], [1, "img-responsive", 3, "src"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "rows", "6", 1, "form-control"], ["formArrayName", "ingredients", 1, "col-xs-12"], ["class", "row", "style", "margin-top: 10px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "row", 2, "margin-top", "10px", 3, "formGroupName"], [1, "col-xs-8"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col-xs-2"], ["type", "number", "formControlName", "amount", 1, "form-control"]],
      template: function RecipeEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RecipeEditComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_7_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Image URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RecipeEditComponent_div_33_Template, 8, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_37_listener() {
            return ctx.onAddIngredient();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Add Ingredient");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.recipeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.recipeForm.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _r0.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingredientsControls);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-edit',
          templateUrl: './recipe-edit.component.html',
          styleUrls: ['./recipe-edit.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
    \**************************************************************************/
  /*! exports provided: RecipeItemComponent */
  /***/
  function srcAppRecipesRecipeListRecipeItemRecipeItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function () {
      return RecipeItemComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var _c0 = function _c0(a0) {
      return [a0];
    };
    var RecipeItemComponent = /*#__PURE__*/function () {
      function RecipeItemComponent() {
        _classCallCheck(this, RecipeItemComponent);
      }
      _createClass(RecipeItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return RecipeItemComponent;
    }();
    RecipeItemComponent.ɵfac = function RecipeItemComponent_Factory(t) {
      return new (t || RecipeItemComponent)();
    };
    RecipeItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeItemComponent,
      selectors: [["app-recipe-item"]],
      inputs: {
        recipe: "recipe",
        index: "index"
      },
      decls: 8,
      vars: 7,
      consts: [["routerLinkActive", "active", 1, "list-group-item", "clearfix", 2, "cursor", "pointer", 3, "routerLink"], [1, "pull-left"], [1, "list-group-item-heading"], [1, "list-group-item-text"], [1, "pull-right"], [1, "img-responsive", 2, "max-height", "50px", 3, "src", "alt"]],
      template: function RecipeItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.index));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-item',
          templateUrl: './recipe-item.component.html',
          styleUrls: ['./recipe-item.component.css']
        }]
      }], null, {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    /***/
  },

  /***/"./src/app/recipes/recipe-list/recipe-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
    \**************************************************************/
  /*! exports provided: RecipeListComponent */
  /***/
  function srcAppRecipesRecipeListRecipeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function () {
      return RecipeListComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../recipe.service */"./src/app/recipes/recipe.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */
    var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./recipe-item/recipe-item.component */"./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
    function RecipeListComponent_app_recipe_item_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipe-item", 4);
      }
      if (rf & 2) {
        var recipeEl_r1 = ctx.$implicit;
        var i_r2 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipeEl_r1)("index", i_r2);
      }
    }
    var RecipeListComponent = /*#__PURE__*/function () {
      function RecipeListComponent(recipeService, router, route) {
        _classCallCheck(this, RecipeListComponent);
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
      }
      _createClass(RecipeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;
          this.subscription = this.recipeService.recipesChanged.subscribe(function (recipes) {
            _this3.recipes = recipes;
          });
          this.recipes = this.recipeService.getRecipes();
        }
      }, {
        key: "onNewRecipe",
        value: function onNewRecipe() {
          this.router.navigate(['new'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);
      return RecipeListComponent;
    }();
    RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) {
      return new (t || RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };
    RecipeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeListComponent,
      selectors: [["app-recipe-list"]],
      decls: 8,
      vars: 1,
      consts: [[1, "row"], [1, "col-xs-12"], [1, "btn", "btn-success", 3, "click"], [3, "recipe", "index", 4, "ngFor", "ngForOf"], [3, "recipe", "index"]],
      template: function RecipeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeListComponent_Template_button_click_2_listener() {
            return ctx.onNewRecipe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Recipe");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipeListComponent_app_recipe_item_7_Template, 1, 2, "app-recipe-item", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-list',
          templateUrl: './recipe-list.component.html',
          styleUrls: ['./recipe-list.component.css']
        }]
      }], function () {
        return [{
          type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipe-start/recipe-start.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
    \****************************************************************/
  /*! exports provided: RecipeStartComponent */
  /***/
  function srcAppRecipesRecipeStartRecipeStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function () {
      return RecipeStartComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    var RecipeStartComponent = /*#__PURE__*/function () {
      function RecipeStartComponent() {
        _classCallCheck(this, RecipeStartComponent);
      }
      _createClass(RecipeStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return RecipeStartComponent;
    }();
    RecipeStartComponent.ɵfac = function RecipeStartComponent_Factory(t) {
      return new (t || RecipeStartComponent)();
    };
    RecipeStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeStartComponent,
      selectors: [["app-recipe-start"]],
      decls: 2,
      vars: 0,
      template: function RecipeStartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a Recipe!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-start',
          templateUrl: './recipe-start.component.html',
          styleUrls: ['./recipe-start.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipes-resolver.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/recipes/recipes-resolver.service.ts ***!
    \*****************************************************/
  /*! exports provided: RecipesResolverService */
  /***/
  function srcAppRecipesRecipesResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipesResolverService", function () {
      return RecipesResolverService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../shared/data-storage.service */"./src/app/shared/data-storage.service.ts");
    /* harmony import */
    var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./recipe.service */"./src/app/recipes/recipe.service.ts");
    var RecipesResolverService = /*#__PURE__*/function () {
      function RecipesResolverService(dataStorageService, recipesService) {
        _classCallCheck(this, RecipesResolverService);
        this.dataStorageService = dataStorageService;
        this.recipesService = recipesService;
      }
      _createClass(RecipesResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var recipes = this.recipesService.getRecipes();
          if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
          } else {
            return recipes;
          }
        }
      }]);
      return RecipesResolverService;
    }();
    RecipesResolverService.ɵfac = function RecipesResolverService_Factory(t) {
      return new (t || RecipesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]));
    };
    RecipesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecipesResolverService,
      factory: RecipesResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]
        }, {
          type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]
        }];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipes-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/recipes/recipes-routing.module.ts ***!
    \***************************************************/
  /*! exports provided: RecipesRoutingModule */
  /***/
  function srcAppRecipesRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipesRoutingModule", function () {
      return RecipesRoutingModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */
    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../auth/auth.guard */"./src/app/auth/auth.guard.ts");
    /* harmony import */
    var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./recipe-detail/recipe-detail.component */"./src/app/recipes/recipe-detail/recipe-detail.component.ts");
    /* harmony import */
    var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./recipe-edit/recipe-edit.component */"./src/app/recipes/recipe-edit/recipe-edit.component.ts");
    /* harmony import */
    var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./recipe-start/recipe-start.component */"./src/app/recipes/recipe-start/recipe-start.component.ts");
    /* harmony import */
    var _recipes_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./recipes-resolver.service */"./src/app/recipes/recipes-resolver.service.ts");
    /* harmony import */
    var _recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./recipes.component */"./src/app/recipes/recipes.component.ts");
    var routes = [{
      path: '',
      component: _recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: '',
        component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"]
      }, {
        path: 'new',
        component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__["RecipeEditComponent"]
      }, {
        path: ':id',
        component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailComponent"],
        resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_6__["RecipesResolverService"]]
      }, {
        path: ':id/edit',
        component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_4__["RecipeEditComponent"],
        resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_6__["RecipesResolverService"]]
      }]
    }];
    var RecipesRoutingModule = /*#__PURE__*/_createClass(function RecipesRoutingModule() {
      _classCallCheck(this, RecipesRoutingModule);
    });
    RecipesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RecipesRoutingModule
    });
    RecipesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RecipesRoutingModule_Factory(t) {
        return new (t || RecipesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecipesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipes.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/recipes/recipes.component.ts ***!
    \**********************************************/
  /*! exports provided: RecipesComponent */
  /***/
  function srcAppRecipesRecipesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipesComponent", function () {
      return RecipesComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./recipe-list/recipe-list.component */"./src/app/recipes/recipe-list/recipe-list.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    var RecipesComponent = /*#__PURE__*/function () {
      function RecipesComponent() {
        _classCallCheck(this, RecipesComponent);
      }
      _createClass(RecipesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return RecipesComponent;
    }();
    RecipesComponent.ɵfac = function RecipesComponent_Factory(t) {
      return new (t || RecipesComponent)();
    };
    RecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipesComponent,
      selectors: [["app-recipes"]],
      decls: 5,
      vars: 0,
      consts: [[1, "row"], [1, "col-md-5"], [1, "col-md-7"]],
      template: function RecipesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recipe-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__["RecipeListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipes',
          templateUrl: './recipes.component.html',
          styleUrls: ['./recipes.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    /***/
  },

  /***/"./src/app/recipes/recipes.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/recipes/recipes.module.ts ***!
    \*******************************************/
  /*! exports provided: RecipesModule */
  /***/
  function srcAppRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RecipesModule", function () {
      return RecipesModule;
    });
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */
    var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./recipe-detail/recipe-detail.component */"./src/app/recipes/recipe-detail/recipe-detail.component.ts");
    /* harmony import */
    var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./recipe-edit/recipe-edit.component */"./src/app/recipes/recipe-edit/recipe-edit.component.ts");
    /* harmony import */
    var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./recipe-list/recipe-item/recipe-item.component */"./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
    /* harmony import */
    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./recipe-list/recipe-list.component */"./src/app/recipes/recipe-list/recipe-list.component.ts");
    /* harmony import */
    var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./recipe-start/recipe-start.component */"./src/app/recipes/recipe-start/recipe-start.component.ts");
    /* harmony import */
    var _recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./recipes.component */"./src/app/recipes/recipes.component.ts");
    /* harmony import */
    var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./recipes-routing.module */"./src/app/recipes/recipes-routing.module.ts");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../shared/shared.module */"./src/app/shared/shared.module.ts");
    var RecipesModule = /*#__PURE__*/_createClass(function RecipesModule() {
      _classCallCheck(this, RecipesModule);
    });
    RecipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecipesModule
    });
    RecipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecipesModule_Factory(t) {
        return new (t || RecipesModule)();
      },
      imports: [[
      // BrowserModule,
      // FormsModule,
      // ReactiveFormsModule,
      // HttpClientModule,
      // AppRoutingModule
      _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_8__["RecipesRoutingModule"]]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecipesModule, {
        declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__["RecipeDetailComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"], _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"], _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__["RecipeEditComponent"]],
        imports: [
        // BrowserModule,
        // FormsModule,
        // ReactiveFormsModule,
        // HttpClientModule,
        // AppRoutingModule
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_8__["RecipesRoutingModule"]],
        exports: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__["RecipeDetailComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"], _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"], _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__["RecipeEditComponent"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__["RecipeDetailComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"], _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"], _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__["RecipeEditComponent"]],
          imports: [
          // BrowserModule,
          // FormsModule,
          // ReactiveFormsModule,
          // HttpClientModule,
          // AppRoutingModule
          _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_8__["RecipesRoutingModule"]],
          exports: [_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__["RecipeDetailComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipeItemComponent"], _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__["RecipeStartComponent"], _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__["RecipeEditComponent"]]
        }]
      }], null, null);
    })();

    /***/
  }
}]);
//# sourceMappingURL=recipes-recipes-module-es5.js.map