/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _AcmeDB = __webpack_require__(1);

	var _AcmeDB2 = _interopRequireDefault(_AcmeDB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var users = [{ name: 'Moe' }];

	var db = new _AcmeDB2.default({ users: users });

	console.log('db.users.length:', db.users.length);
	console.log('db.users[0].id:', db.users[0].id);

	db.addUser({ name: 'Larry' });

	console.log('db.showUsers():', db.showUsers());
	console.log('db.findById(2).name:', db.findById(2).name);

	db.addUser({ name: 'Curly' });
	db.removeUserById(1);

	console.log('db.users[0].name:', db.users[0].name); // Should be Larry

	db.editUser({ id: 2, name: 'Laary ' });

	console.log('db.showUsers():', db.showUsers());

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AcmeDB = function () {
		function AcmeDB(config) {
			_classCallCheck(this, AcmeDB);

			this.users = config.users.map(function (el, index) {
				el.id = index + 1;
				return el;
			});
		}

		_createClass(AcmeDB, [{
			key: 'addUser',
			value: function addUser(obj) {
				var newUser = obj;
				newUser.id = this.users.reduce(function (max, el) {
					return el.id > max ? el.id : max;
				}, 0) + 1;
				this.users.push(newUser);
			}
		}, {
			key: 'editUser',
			value: function editUser(obj) {
				for (var i = 0; i < this.users.length; i++) {
					if (this.users[i].id === obj.id) {
						this.users[i] = Object.assign({}, this.users[i], obj);
						break;
					}
				}
			}
		}, {
			key: 'findById',
			value: function findById(idToFind) {
				for (var i = 0; i < this.users.length; i++) {
					if (this.users[i].id === idToFind) {
						return this.users[i];
					}
				}
			}
		}, {
			key: 'removeUserById',
			value: function removeUserById(idToRemove) {
				for (var i = 0; i < this.users.length; i++) {
					if (this.users[i].id === idToRemove) {
						this.users = this.users.slice(i + 1, this.users.length);
						break;
					}
				}
			}
		}, {
			key: 'showUsers',
			value: function showUsers() {
				return this.users.map(function (el) {
					return el.name;
				}).join(' ');
			}
		}]);

		return AcmeDB;
	}();

	exports.default = AcmeDB;

/***/ }
/******/ ]);