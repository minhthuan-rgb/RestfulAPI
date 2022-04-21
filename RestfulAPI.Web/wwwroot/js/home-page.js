/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_client */ "./src/scripts/utilities/_client.ts");
/* eslint-disable eqeqeq */

/* eslint-disable func-names */

/* eslint-disable no-console */

/* eslint-disable no-param-reassign */

/* eslint-disable no-undef */

/* eslint-disable import/extensions */

/* eslint-disable import/no-unresolved */


var renderGrid = function () {
  var modal = document.querySelector('#formModal');
  var closeBtns = document.querySelectorAll('.modal .btn-close');
  var newFolder = document.querySelector('#newFolder');
  var newFile = document.querySelector('#newFile');
  var client = new _utilities_client__WEBPACK_IMPORTED_MODULE_0__["default"]();
  client.getAllItem();
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      modal.style.display = 'none';
    };
  });

  newFolder.onclick = function () {
    client.openModal(false, true, null);
  };

  newFile.onclick = function () {
    client.openModal(true, true, null);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* eslint-disable import/extensions */

/* eslint-disable import/no-unresolved */


Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/scripts/utilities/_base.model.ts":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/_base.model.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Base =
/** @class */
function () {
  function Base(id, name, createdAt, createdBy, modifiedAt, modifiedBy) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.modifiedAt = modifiedAt;
    this.modifiedBy = modifiedBy;
  }

  return Base;
}();

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./src/scripts/utilities/_client.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_client.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_file.model */ "./src/scripts/utilities/_file.model.ts");
/* harmony import */ var _folder_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_folder.model */ "./src/scripts/utilities/_folder.model.ts");
/* harmony import */ var _http_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_http.client */ "./src/scripts/utilities/_http.client.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/* eslint-disable no-shadow */

/* eslint-disable no-constant-condition */

/* eslint-disable no-restricted-globals */

/* eslint-disable no-underscore-dangle */

/* eslint-disable no-console */

/* eslint-disable no-prototype-builtins */

/* eslint-disable import/no-unresolved */

/* eslint-disable no-undef */

/* eslint-disable no-alert */

/* eslint-disable no-loop-func */

/* eslint-disable no-plusplus */






var Client =
/** @class */
function () {
  function Client() {
    var _this = this;

    this.isEdit = true;
    this.isFile = true;

    this.getAllItem = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              document.querySelector('#itemList').innerHTML = '';
              _a = this;
              return [4
              /*yield*/
              , this.httpClient.getAllItemsFromAPI()];

            case 1:
              _a.itemList = _b.sent();
              this.renderItemList();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.renderItemList = function () {
      // const html = items.map ((item) => `html`).join('');
      var html = '';

      _this.itemList.forEach(function (item) {
        var iconClass = item.hasOwnProperty('extension') ? 'fa-file-excel' : 'fa-folder-open';
        var recentHint = item.modifiedAt === 'A few seconds ago' ? '<i class="fab fa-yelp"></i>' : '';
        html += "<tr>\n                <td><i class=\"fas " + iconClass + "\"></i></td>\n                <td>" + recentHint + item.name + "</td>\n                <td>" + item.modifiedAt + "</td>\n                <td>" + item.modifiedBy + "</td>\n                <td>\n                  <button class=\"btn btn-edit\">Edit</button>\n                  <button class=\"btn btn-delete\">Delete</button>\n                </td>\n                <td></td>\n              </tr>";
      });

      document.querySelector('#itemList').innerHTML = html;
      var deleteBtns = document.querySelectorAll('.btn-delete');
      var editBtns = document.querySelectorAll('.btn-edit');

      var _loop_1 = function (i) {
        deleteBtns[i].addEventListener('click', function () {
          _this.deleteItem(_this.itemList[i].id, _this.itemList[i].hasOwnProperty('extension'));
        });
        editBtns[i].addEventListener('click', function () {
          _this.openModal(_this.itemList[i].hasOwnProperty('extension'), false, _this.itemList[i]);
        });
      };

      for (var i = 0; i < deleteBtns.length; i++) {
        _loop_1(i);
      }
    };

    this.openModal = function (isFile, isNew, item) {
      var _a, _b;

      var htmlBodyLastChild = '';

      if (!isFile) {
        _this.item = new _folder_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.isFile = false;

        if (isNew) {
          _this.isEdit = false;
          _this.item.id = 0;
          _this.item.name = 'Test Folder';
          _this.item.createdAt = 'A few seconds ago';
          _this.item.createdBy = document.querySelector('#username').textContent;
          _this.item.modifiedAt = 'Nerver';
          _this.item.modifiedBy = 'None';
        } else {
          _this.isEdit = true;
          _this.item = item;
          _this.item.modifiedBy = document.querySelector('#username').textContent;
          _this.item.ModifiedAt = 'A few seconds ago';
        }

        htmlBodyLastChild = "<div class=\"form-group\">\n                            <p>Sub Folders</p>";
        _this.folderList = _this.itemList.filter(function (item) {
          return !item.hasOwnProperty('extension') && item.id !== _this.item.id;
        });

        if (_this.folderList.length > 0) {
          htmlBodyLastChild += "<select id=\"subFolders\" name=\"subFolders\" class=\"form-control\">\n                                <option selected value=\"none\">None</option>";

          _this.folderList.forEach(function (item) {
            htmlBodyLastChild += "<option value=\"" + item.id + "\" " + (_this.item.subFolderId !== 0 ? _this.item.subFolderId === item.id ? 'selected' : '' : '') + ">" + item.name + "</option>";
          });

          htmlBodyLastChild += "</select>";
        } else {
          htmlBodyLastChild += "<p>None</p>";
        }

        htmlBodyLastChild += "</div>\n                          </div>";
      } else {
        _this.isFile = true;
        _this.item = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"]();

        if (isNew) {
          _this.isEdit = false;
          _this.item.id = 0;
          _this.item.createdAt = 'A few seconds ago';
          _this.item.createdBy = document.querySelector('#username').textContent;
          _this.item.modifiedAt = 'Never';
          _this.item.modifiedBy = 'None';
          _a = _this.splitFileName('TestFile.xlsx'), _this.item.name = _a[0], _this.item.extension = _a[1];
        } else {
          _this.isEdit = true;
          _this.item = item;
          _this.item.modifiedBy = document.querySelector('#username').textContent;
          _this.item.modifiedAt = 'A few seconds ago';
          _b = _this.splitFileName(_this.item.name), _this.item.name = _b[0], _this.item.extension = _b[1];
        }

        htmlBodyLastChild = "<div class=\"form-group\">\n                            <label for=\"extension\">Extension</label>\n                            <input\n                              class=\"form-control\"\n                              id=\"extension\"\n                              type=\"text\"\n                              name=\"Extension\"\n                              value=\"" + _this.item.extension + "\"\n                            />\n                          </div>";
      }

      _this.renderModal(htmlBodyLastChild); // Show Modal


      document.querySelector('#formModal').setAttribute('style', 'display: block;');
    };

    this.renderModal = function (htmlBodyLastChild) {
      // Header config
      var headerText = (_this.isEdit ? 'Update' : 'Add New') + " " + (_this.isFile ? 'File' : 'Folder') + " " + (_this.isEdit ? _this.item.id : '');
      document.querySelector('#modalHeader').textContent = headerText; // Body config

      var htmlBody = "<div class=\"form-group\">\n                      <label for=\"itemId\">ID</label>\n                      <input\n                        class=\"form-control\"\n                        id=\"itemId\"\n                        type=\"number\"\n                        name=\"ID\"\n                        disabled\n                        value=\"" + _this.item.id + "\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"name\">Name</label>\n                      <input\n                        class=\"form-control\"\n                        id=\"name\"\n                        type=\"text\"\n                        name=\"Name\"\n                        value=\"" + _this.item.name + "\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                    <label for=\"modifiedAt\">Modified At</label>\n                    <input\n                      class=\"form-control\"\n                      id=\"modifiedAt\"\n                      type=\"text\"\n                      name=\"ModifiedAt\"\n                      disabled\n                      value=\"" + _this.item.modifiedAt + "\"\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"modifiedBy\">Modified By</label>\n                    <input\n                      class=\"form-control\"\n                      id=\"modifiedBy\"\n                      type=\"text\"\n                      name=\"ModifiedBy\"\n                      disabled\n                      value=\"" + _this.item.modifiedBy + "\"\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"createdAt\">Created At</label>\n                    <input\n                      class=\"form-control\"\n                      id=\"createdAt\"\n                      type=\"text\"\n                      name=\"CreateAt\"\n                      disabled\n                      value=\"" + _this.item.createdAt + "\"\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"\" for=\"createdBy\">Created By</label>\n                    <input\n                      class=\"form-control\"\n                      id=\"createdBy\"\n                      type=\"text\"\n                      name=\"CreateBy\"\n                      disabled\n                      value=\"" + _this.item.createdBy + "\"\n                    />\n                  </div>";
      htmlBody += htmlBodyLastChild;
      document.querySelector('#modalForm').innerHTML = htmlBody;
      if (!_this.isEdit) document.querySelector('#modalForm .form-group:first-child').setAttribute('style', 'display: none;'); // Footer config

      var btnConfirm = document.querySelector('#modalFooter #btnConfirm');
      btnConfirm.textContent = _this.isEdit ? 'Save' : 'Add';

      btnConfirm.onclick = function () {
        btnConfirm.setAttribute('style', 'cursor: not-allowed;');

        _this.confirmModal();
      };
    };

    this.confirmModal = function () {
      var itemId = document.querySelector('#itemId');
      var name = document.querySelector('#name');
      var createdAt = document.querySelector('#createdAt');
      var createdBy = document.querySelector('#createdBy');
      var modifiedAt = document.querySelector('#modifiedAt');
      var modifiedBy = document.querySelector('#modifiedBy');
      _this.item.id = +itemId.value;
      _this.item.name = name.value;
      _this.item.createdAt = createdAt.value;
      _this.item.createdBy = createdBy.value;
      _this.item.modifiedAt = modifiedAt.value;
      _this.item.modifiedBy = modifiedBy.value;

      if (_this.isFile) {
        var extension = document.querySelector('#extension');
        _this.item.extension = extension.value;
        _this.item.name = _this.item.name + "." + _this.item.extension;
      } else {
        if (_this.folderList.length > 0) {
          var subFolders = Array.from(document.querySelector('#subFolders').children);
          subFolders.forEach(function (subFolder) {
            if (subFolder.selected === true) {
              if (subFolder.value === 'none') _this.item.subFolderId = 0;else _this.item.subFolderId = +subFolder.value;
            }
          });
        } else _this.item.subFolderId = 0;
      }

      if (_this.isEdit) _this.updateItem();else _this.addItem();
    };

    this.hideModal = function () {
      _this.getAllItem();

      document.querySelector('#formModal').setAttribute('style', 'display: none;');

      _this.reloadModalBtn();
    };

    this.reloadModalBtn = function () {
      document.querySelector('#modalFooter #btnConfirm').setAttribute('style', 'cursor: pointer;');
    };

    this.addItem = function () {
      _this.httpClient.addItemToAPI(_this.item).then(function (message) {
        _this.hideModal();

        alert(message);
      }).catch(function (error) {
        _this.reloadModalBtn();

        alert(error);
      });
    };

    this.updateItem = function () {
      _this.httpClient.updateItemToAPI(_this.item).then(function (message) {
        _this.hideModal();

        alert(message);
      }).catch(function (error) {
        _this.reloadModalBtn();

        alert(error);
      });
    };

    this.deleteItem = function (id, isFile) {
      if (confirm('Are you sure to delete this item?')) {
        _this.httpClient.removeItemToAPI(id, isFile).then(function (message) {
          alert(message);
        }).catch(function (error) {
          alert(error);
        });

        _this.getAllItem();
      }
    }; // function to test async/ await


    this.getFolderItems = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, ex_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 2,, 3]);

              _a = this;
              return [4
              /*yield*/
              , this.httpClient.getFolderItems(this.item.id)];

            case 1:
              _a.folderList = _b.sent();
              console.log(this.folderList);
              return [3
              /*break*/
              , 3];

            case 2:
              ex_1 = _b.sent();
              alert(ex_1);
              return [3
              /*break*/
              , 3];

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.httpClient = new _http_client__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.httpClient.initialItemList();
  }

  Client.prototype.splitFileName = function (fullName) {
    return [fullName.slice(0, fullName.lastIndexOf('.')), fullName.slice(fullName.lastIndexOf('.') + 1)];
  };

  return Client;
}();

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ "./src/scripts/utilities/_file.model.ts":
/*!**********************************************!*\
  !*** ./src/scripts/utilities/_file.model.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base.model */ "./src/scripts/utilities/_base.model.ts");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/* eslint-disable import/no-unresolved */




var CFile =
/** @class */
function (_super) {
  __extends(CFile, _super);

  function CFile(id, name, createdAt, createdBy, modifiedAt, modifiedBy, extension) {
    if (id === void 0) {
      id = 0;
    }

    if (name === void 0) {
      name = '';
    }

    if (createdAt === void 0) {
      createdAt = '';
    }

    if (createdBy === void 0) {
      createdBy = '';
    }

    if (modifiedAt === void 0) {
      modifiedAt = '';
    }

    if (modifiedBy === void 0) {
      modifiedBy = '';
    }

    if (extension === void 0) {
      extension = '';
    }

    var _this = _super.call(this, id, name, createdAt, createdBy, modifiedAt, modifiedBy) || this;

    _this.extension = extension;
    return _this;
  }

  return CFile;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CFile);

/***/ }),

/***/ "./src/scripts/utilities/_folder.model.ts":
/*!************************************************!*\
  !*** ./src/scripts/utilities/_folder.model.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_base.model */ "./src/scripts/utilities/_base.model.ts");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/* eslint-disable import/no-unresolved */




var Folder =
/** @class */
function (_super) {
  __extends(Folder, _super);

  function Folder(id, name, createdAt, createdBy, modifiedAt, modifiedBy, subFolderId) {
    if (id === void 0) {
      id = 0;
    }

    if (name === void 0) {
      name = '';
    }

    if (createdAt === void 0) {
      createdAt = '';
    }

    if (createdBy === void 0) {
      createdBy = '';
    }

    if (modifiedAt === void 0) {
      modifiedAt = '';
    }

    if (modifiedBy === void 0) {
      modifiedBy = '';
    }

    if (subFolderId === void 0) {
      subFolderId = 0;
    }

    var _this = _super.call(this, id, name, createdAt, createdBy, modifiedAt, modifiedBy) || this;

    _this.subFolderId = subFolderId;
    return _this;
  }

  return Folder;
}(_base_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Folder);

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ready = function (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/scripts/utilities/_http.client.ts":
/*!***********************************************!*\
  !*** ./src/scripts/utilities/_http.client.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_file.model */ "./src/scripts/utilities/_file.model.ts");
/* harmony import */ var _folder_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_folder.model */ "./src/scripts/utilities/_folder.model.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/* eslint-disable no-console */

/* eslint-disable no-shadow */

/* eslint-disable no-else-return */

/* eslint-disable no-throw-literal */

/* eslint-disable no-prototype-builtins */

/* eslint-disable no-param-reassign */

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable no-undef */

/* eslint-disable import/no-unresolved */





var HttpClient =
/** @class */
function () {
  // #region Old
  function HttpClient() {
    var _this = this;

    this.getAllItems = function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          if (result) resolve(Array.from(result));else reject('No Data');
        }, 1000);
      });
    };

    this.getItemById = function (id) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          var foundItem = result.find(function (item) {
            return item.id === id;
          });
          if (foundItem) resolve(foundItem);else reject('Item Not Found');
        }, 1000);
      });
    };

    this.addItem = function (addItem) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          if (result.find(function (item) {
            return item.name === addItem.name;
          })) reject('Item Already Exists!');else {
            addItem.id = result.length + 1;
            result.push(addItem);
            sessionStorage.setItem('data', JSON.stringify(result));
            resolve('Successfully Added!');
          }
        }, 1000);
      });
    };

    this.updateItem = function (upItem) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          var foundItem = result.find(function (item) {
            return item.id === upItem.id;
          });

          if (foundItem) {
            var index = result.indexOf(foundItem);
            result[index].name = upItem.name;
            result[index].createdAt = upItem.createdAt;
            result[index].createdBy = upItem.createdBy;
            result[index].modifiedAt = upItem.modifiedAt;
            result[index].modifiedBy = upItem.modifiedBy;
            if (upItem.hasOwnProperty('extension')) result[index].extension = upItem.extension;else result[index].subFolders = upItem.subFolders;
            sessionStorage.setItem('data', JSON.stringify(result));
            resolve('Successfully Updated!');
          } else reject('Item Not Found!');
        }, 1000);
      });
    };

    this.removeItem = function (id) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var result = JSON.parse(sessionStorage.getItem('data'));
          var foundItem = result.find(function (item) {
            return item.id === id;
          });

          if (foundItem) {
            result.splice(result.indexOf(foundItem), 1);
            sessionStorage.setItem('data', JSON.stringify(result));
            resolve('Successfully Deleted!');
          } else reject('Item Not Found!');
        }, 1000);
      });
    };

    this.initialItemList = function () {
      var data = [];
      var item1 = new _folder_model__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'CAS', 'April 08', 'Minh Thuan', 'April 30', 'Megan Bowen');
      var item2 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](2, 'CoasterAndBargeLoading.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      var item3 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'RevenueByServices.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      var item4 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](4, 'RevenueByServices2016.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      var item5 = new _file_model__WEBPACK_IMPORTED_MODULE_0__["default"](5, 'RevenueByServices2017.xlsx', 'April 08', 'Minh Thuan', 'A few seconds ago', 'Administrator', 'xlsx');
      data.push(item1);
      data.push(item2);
      data.push(item3);
      data.push(item4);
      data.push(item5);
      sessionStorage.setItem('data', JSON.stringify(data));
    };

    this.getFolderItems = function (id) {
      return __awaiter(_this, void 0, void 0, function () {
        var mockDelay, result, folderItems;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              mockDelay = function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return [2
                    /*return*/
                    , new Promise(function (resolve) {
                      return setTimeout(function () {
                        return resolve('Delay');
                      }, 1000);
                    })];
                  });
                });
              };

              return [4
              /*yield*/
              , mockDelay()];

            case 1:
              _a.sent();

              result = JSON.parse(sessionStorage.getItem('data'));
              folderItems = result.filter(function (item) {
                return !item.hasOwnProperty('extension') && item.id !== id;
              });
              folderItems = folderItems.filter(function (folder) {
                return !(folder.subFolderId === id);
              });
              if (folderItems) return [2
              /*return*/
              , folderItems];else throw 'No Folder Item Found.';
              return [2
              /*return*/
              ];
          }
        });
      });
    }; // #endregion
    // #region New


    this.BASE_URL = 'https://localhost:44302/';

    this.getAllFolders = function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , fetch(this.BASE_URL + "api/API/get-all-folders").then(function (res) {
                    return res.json();
                  }).then(function (res) {
                    return Array.from(res);
                  })];

                case 1:
                  result = _a.sent();
                  if (result) resolve(result);else reject('No Data');
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, 1000);
      });
    };

    this.getAllFiles = function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , fetch(this.BASE_URL + "api/API/get-all-files").then(function (res) {
                    return res.json();
                  }).then(function (res) {
                    return Array.from(res);
                  })];

                case 1:
                  result = _a.sent();
                  if (result) resolve(result);else reject('No Data');
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, 1000);
      });
    };

    this.getAllItemsFromAPI = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var itemList, mockDelay;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              itemList = [];
              this.getAllFolders().then(function (data) {
                data.forEach(function (d) {
                  return itemList.push(d);
                });
              });
              this.getAllFiles().then(function (data) {
                data.forEach(function (d) {
                  return itemList.push(d);
                });
              });

              mockDelay = function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return [2
                    /*return*/
                    , new Promise(function (resolve) {
                      return setTimeout(function () {
                        return resolve('Delay');
                      }, 3500);
                    })];
                  });
                });
              };

              return [4
              /*yield*/
              , mockDelay()];

            case 1:
              _a.sent();

              if (itemList) return [2
              /*return*/
              , itemList];else throw 'No Item Found';
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    this.addItemToAPI = function (addItem) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , fetch("" + this.BASE_URL + (addItem.hasOwnProperty('extension') ? 'api/API/create-file' : 'api/API/create-folder'), {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(addItem)
                  }).then(function (res) {
                    return res.json();
                  }).then(function (res) {
                    return res;
                  })];

                case 1:
                  result = _a.sent();
                  if (result === true) resolve('Successfully Added!');else reject('Unsuccessfully Add!');
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, 1000);
      });
    };

    this.updateItemToAPI = function (upItem) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , fetch("" + this.BASE_URL + (upItem.hasOwnProperty('extension') ? 'api/API/update-file' : 'api/API/update-folder'), {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(upItem)
                  }).then(function (res) {
                    return res.json();
                  }).then(function (res) {
                    return res;
                  })];

                case 1:
                  result = _a.sent();
                  if (result === true) resolve('Successfully Updated!');else reject('Unsuccessfully Update');
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, 1000);
      });
    };

    this.removeItemToAPI = function (id, isFile) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , fetch("" + this.BASE_URL + (isFile ? 'api/API/delete-file' : 'api/API/delete-folder'), {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(id)
                  }).then(function (res) {
                    return res.json();
                  }).then(function (res) {
                    return res;
                  })];

                case 1:
                  result = _a.sent();
                  if (result === true) resolve('Successfully Deleled!');else reject('Unsuccessfully Delete!');
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }, 500);
      });
    };

    this.initialItemList();
  }

  return HttpClient;
}();

/* harmony default export */ __webpack_exports__["default"] = (HttpClient);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map