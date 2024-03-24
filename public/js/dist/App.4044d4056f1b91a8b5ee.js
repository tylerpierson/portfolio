/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ContactPage/ContactPage */ "./src/pages/ContactPage/ContactPage.js");
/* harmony import */ var _pages_ProjectsPage_ProjectsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ProjectsPage/ProjectsPage */ "./src/pages/ProjectsPage/ProjectsPage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






function App() {
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [newUser, setNewUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    body: ''
  });

  //createUsers
  const createUser = async () => {
    const body = _objectSpread({}, newUser);
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const createdUser = await response.json();
      const usersCopy = [createdUser, ...users];
      setUsers(usersCopy);
      setNewUser({
        name: '',
        email: '',
        body: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].App
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(_pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      createUser: createUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/projects",
    element: /*#__PURE__*/React.createElement(_pages_ProjectsPage_ProjectsPage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }))));
}

/***/ }),

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/Button/Button.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Button() {
  return /*#__PURE__*/React.createElement("div", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].btnContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].btnAnimation
  }), /*#__PURE__*/React.createElement("button", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button
  }, "Click me"));
}

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NavBar() {
  return /*#__PURE__*/React.createElement("nav", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Nav
  }, /*#__PURE__*/React.createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image,
    src: "https://i.imgur.com/gcCq6UY.png"
  }), /*#__PURE__*/React.createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ul
  }, /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItemContainer
  }, /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemTop,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Home")), /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemBottom,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Home"))), /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItemContainer
  }, /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemTop,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "About Me")), /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemBottom,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "About Me"))), /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItemContainer
  }, /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemTop,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Projects")), /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemBottom,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Projects"))), /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItemContainer
  }, /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemTop,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Contact")), /*#__PURE__*/React.createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navItemBottom,
    href: "#"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].listItem
  }, "Contact")))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/index.module.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactPage.module.scss */ "./src/pages/ContactPage/ContactPage.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("h1", null, "Contact Page"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/React.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].bgDesign
  }));
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].HomePage
  }, /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].introContainer
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Design Portfolio"), /*#__PURE__*/React.createElement("h1", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].heading
  }, "Hello! ", /*#__PURE__*/React.createElement("span", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "I'm"), " a", /*#__PURE__*/React.createElement("br", null), "web designer ", /*#__PURE__*/React.createElement("span", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanPlus
  }, "+"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "developer")), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].paragraph
  }, "Crafting great web design or development involves a harmonious fusion of creativity, functionality, and user experience. It's about more than just aesthetics; it's about creating an immersive digital environment that captivates users while effortlessly guiding them toward their goals."), /*#__PURE__*/React.createElement("img", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image,
    src: "https://i.imgur.com/CAtnkHR.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Bio
  }, /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contentContainer
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Who I am"), /*#__PURE__*/React.createElement("h1", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Software", /*#__PURE__*/React.createElement("br", null), "Engineer")), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleDescription
  }, "My role is as dynamic as the code I craft. I'm not just a coder; I'm an architect, a problem-solver, and an innovator.  ")), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].imgBannerContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].imgBanner,
    src: "https://i.imgur.com/zACT24f.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerMain
  }, /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerLeft
  }, /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Design"), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "Design in web development is the art of harmoniously blending aesthetics and functionality to create immersive digital experiences that captivate and engage users.")), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Development"), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "The intricate process of architecting and implementing innovative solutions, leveraging cutting-edge technologies to build robust, scalable, and user-centric digital platforms that empower and enrich the online experience.")), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSMContainer
  }, /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "I provide comprehensive web development services, crafting tailored solutions that seamlessly integrate design, branding, and marketing strategies to elevate online presence and drive meaningful engagement."))), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerRight
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Creative Solutions"), /*#__PURE__*/React.createElement("h2", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceHeader
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Branding"), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "Branding in web development is the strategic cultivation of a cohesive digital identity, encompassing visual elements, messaging, and user experience, to establish a distinctive and memorable presence that resonates with audiences and fosters trust and loyalty.")), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Marketing"), /*#__PURE__*/React.createElement("p", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "Marketing in web development involves leveraging various digital channels and strategies to effectively promote products, services, or ideas, with the aim of reaching and engaging target audiences, driving traffic, and ultimately achieving business objectives, all while delivering compelling and relevant content tailored to user needs and preferences.")))), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectBannerContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectBanner
  }, "My Projects"))));
}

/***/ }),

/***/ "./src/pages/ProjectsPage/ProjectsPage.js":
/*!************************************************!*\
  !*** ./src/pages/ProjectsPage/ProjectsPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsPage)
/* harmony export */ });
/* harmony import */ var _ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsPage.module.scss */ "./src/pages/ProjectsPage/ProjectsPage.module.scss");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ProjectsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("h1", null, "This is the ProjectPage"), /*#__PURE__*/React.createElement("div", {
    className: _ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].bgDesign
  }));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IMqMrT2eGOGeFiLbCAGg {
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 7vmin;
  color: var(--heading-color);
  text-shadow: 1px 1px 2px black;
}

input {
  width: 25vw;
  height: 3.5rem;
  border-radius: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  padding: 1rem;
  color: var(--input-color);
}

input:focus {
  outline: none;
  box-shadow: 0 0 1rem var(--btn-color);
}

label {
  font-size: 2.3rem;
  padding: 1rem;
}

button {
  background-color: var(--btn-color);
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

button:hover {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,gBAAA;EACA,2BAAA;EACA,8BAAA;AACJ;;AAEA;EACI,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;AACJ;;AAEA;EACI,kCAAA;EACA,4BAAA;EACA,gCAAA;AACJ;;AAEA;EACI,eAAA;AACJ","sourcesContent":[".App {\n    width: 100%;\n    height: 100%;\n}\n\nh1 {\n    font-size: 7vmin;\n    color: var(--heading-color);\n    text-shadow: 1px 1px 2px black;\n}\n\ninput {\n    width: 25vw;\n    height: 3.5rem;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    font-size: 2rem;\n    padding: 1rem;\n    color: var(--input-color);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: 0 0 1rem var(--btn-color);\n}\n\nlabel {\n    font-size: 2.3rem;\n    padding: 1rem;\n}\n\nbutton {\n    background-color: var(--btn-color);\n    border-top-left-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n}\n\nbutton:hover {\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.YmYKfusPOyIbyY4W_Qw5 {
  margin: 1rem;
  height: 4rem;
  width: 10vw;
  border: none;
  position: relative;
  overflow: hidden;
}

.b_aG7bzo5aM2mIR7O3BA {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 2rem;
  color: white;
}

.du_jimamrCqrJeA6IThG {
  position: absolute;
  background-color: var(--btn-animation);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: transform 0.5s ease;
}

.YmYKfusPOyIbyY4W_Qw5:hover .du_jimamrCqrJeA6IThG {
  transform: translateX(100%);
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/Button/Button.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;AACJ;;AAEA;EACI,kBAAA;EACA,sCAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,+BAAA;AACJ;;AAEA;EACI,2BAAA;EACA,eAAA;AACJ","sourcesContent":[".btnContainer {\n    margin: 1rem;\n    height: 4rem;\n    width: 10vw;\n    border: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.button {\n    width: 100%;\n    height: 100%;\n    border: none;\n    font-size: 2rem;\n    color: white;\n}\n\n.btnAnimation {\n    position: absolute;\n    background-color: var(--btn-animation);\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    transition: transform 0.5s ease;\n}\n\n.btnContainer:hover .btnAnimation {\n    transform: translateX(100%);\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btnContainer": `YmYKfusPOyIbyY4W_Qw5`,
	"button": `b_aG7bzo5aM2mIR7O3BA`,
	"btnAnimation": `du_jimamrCqrJeA6IThG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.SLZXaJInmBusSKJAiC7A {
  width: 100%;
  height: 10vh;
  display: flex;
}
.SLZXaJInmBusSKJAiC7A .Ycc7rx7800IPJaI2UyOo {
  width: 10vw;
  margin-left: 2rem;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ {
  height: 100%;
  width: 7vw;
  margin-left: 1rem;
  position: relative;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .Pz11EiSX3_AGfrJf0fNN, .SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .m1LCCj_QuSJwZkEwY670 {
  list-style-type: none;
  text-decoration: none;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .Pz11EiSX3_AGfrJf0fNN {
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ .m1LCCj_QuSJwZkEwY670 {
  top: 50%;
  transform: translateY(50%);
  opacity: 0;
  transition: 0.5s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ:hover {
  cursor: pointer;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ:hover .Pz11EiSX3_AGfrJf0fNN {
  transform: translateY(-150%);
  opacity: 0;
  transition: 0.5s ease;
}
.SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ .d5W5tH4_HJzaNgJisxUZ:hover .m1LCCj_QuSJwZkEwY670 {
  transform: translateY(-50%);
  opacity: 1;
  transition: 0.5s ease;
  color: var(--btn-color);
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
  .SLZXaJInmBusSKJAiC7A {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;AACJ;AACI;EACI,WAAA;EACA,iBAAA;AACR;AAEI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAAR;AAEQ;EACI,YAAA;EACA,UAAA;EACA,iBAAA;EACA,kBAAA;AAAZ;AAEY;EACI,qBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,+BAAA;AAAhB;AAGY;EACI,QAAA;EACA,2BAAA;EACA,qBAAA;AADhB;AAIY;EACI,QAAA;EACA,0BAAA;EACA,UAAA;EACA,qBAAA;AAFhB;AAKY;EACI,eAAA;AAHhB;AAKgB;EACI,4BAAA;EACA,UAAA;EACA,qBAAA;AAHpB;AAMgB;EACI,2BAAA;EACA,UAAA;EACA,qBAAA;EACA,uBAAA;AAJpB;;AAWA,oEAAA;AACA;EACI;IACI,aAAA;EARN;AACF","sourcesContent":[".Nav {\n    width: 100%;\n    height: 10vh;\n    display: flex;\n\n    .image {\n        width: 10vw;\n        margin-left: 2rem;\n    }\n\n    .ul {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n\n        .listItemContainer {\n            height: 100%;\n            width: 7vw;\n            margin-left: 1rem;\n            position: relative;\n\n            .navItemTop, .navItemBottom {\n                list-style-type: none;\n                text-decoration: none;\n                color: white;\n                position: absolute;\n                width: 100%;\n                text-align: center;\n                transition: transform 0.3s ease;\n            }\n\n            .navItemTop {\n                top: 50%;\n                transform: translateY(-50%);\n                transition: .5s ease;\n            }\n\n            .navItemBottom {\n                top: 50%;\n                transform: translateY(50%);\n                opacity: 0;\n                transition: .5s ease;\n            }\n\n            &:hover {\n                cursor: pointer;\n\n                .navItemTop {\n                    transform: translateY(-150%);\n                    opacity: 0;\n                    transition: .5s ease;\n                }\n\n                .navItemBottom {\n                    transform: translateY(-50%);\n                    opacity: 1;\n                    transition: .5s ease;\n                    color: var(--btn-color);\n                }\n            }\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 600px) {\n    .Nav {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Nav": `SLZXaJInmBusSKJAiC7A`,
	"image": `Ycc7rx7800IPJaI2UyOo`,
	"ul": `VhefOyE6KqL2INmTvax_`,
	"listItemContainer": `d5W5tH4_HJzaNgJisxUZ`,
	"navItemTop": `Pz11EiSX3_AGfrJf0fNN`,
	"navItemBottom": `m1LCCj_QuSJwZkEwY670`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --heading-color: rgb(100, 237, 207);
  --bg-color: black;
  --btn-color: rgb(100, 237, 207);
  --btn-animation: rgba(171, 188, 219, 0.3);
  --input-color: rgb(8, 36, 87);
  --nav-border: rgba(171, 188, 219, 0.3);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

body {
  background-color: var(--bg-color);
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,iBAAA;EACA,+BAAA;EACA,yCAAA;EACA,6BAAA;EACA,sCAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,mJAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AACJ;;AAEA;EACI,iCAAA;AACJ","sourcesContent":[":root {\n    --heading-color: rgb(100, 237, 207);\n    --bg-color: black;\n    --btn-color: rgb(100, 237, 207);\n    --btn-animation: rgba(171, 188, 219, 0.3);\n    --input-color: rgb(8, 36, 87);\n    --nav-border: rgba(171, 188, 219, 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 400;\n    letter-spacing: .2rem;\n    text-transform: uppercase;\n}\n\nbody {\n    background-color: var(--bg-color);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.c0lRD6kedzAgDIWTmXWt {
  height: 130px;
  background-color: red;
  width: 1px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ContactPage/ContactPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,qBAAA;EACA,UAAA;AACJ","sourcesContent":[".bgDesign {\n    height: 130px;\n    background-color: red;\n    width: 1px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bgDesign": `c0lRD6kedzAgDIWTmXWt`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.luBJirBC3AbIwQNsEypk {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn {
  width: 100%;
  height: 100%;
  position: relative;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .h2c6G6zXieb9PEgg9YMz {
  margin: 8rem 0;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW {
  color: white;
  font-size: 11rem;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW .gyGLoW6CuXeiMZ56G4RC, .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW .IzT_Oh31NN5s_F70j18X {
  font-size: 11rem;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW .gyGLoW6CuXeiMZ56G4RC {
  font-weight: 100;
  color: var(--heading-color);
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW .IzT_Oh31NN5s_F70j18X {
  color: black;
  font-size: 13rem;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .CC_x9kGqk0rMd_y5t0Ne {
  color: grey;
  margin-top: 5rem;
  width: 50vw;
}
.luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .OANrHW02gzoqyv5UHhmL {
  background-color: black;
  width: 30vw;
  position: absolute;
  top: 4rem;
  right: 10rem;
  z-index: -1;
  transform: rotate(7deg);
}
.luBJirBC3AbIwQNsEypk .h2c6G6zXieb9PEgg9YMz {
  color: white;
  font-size: 1.5rem;
}
.luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F {
  height: 60vh;
  width: 75%;
  margin: 0 auto;
  padding: 10rem 0 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .SFzQUleyXLDlii7aEUlZ {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .SFzQUleyXLDlii7aEUlZ .qIs7e7_Y_JM_bcw9U8L1 {
  font-size: 8.5rem;
  font-weight: 600;
  color: white;
}
.luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .CszEE0vYQoG0SlZGgu6m {
  color: grey;
  padding-left: 3rem;
  height: 60vh;
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 1s ease;
}
.luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .CszEE0vYQoG0SlZGgu6m:hover {
  color: var(--heading-color);
  transition: 1s ease;
}
.luBJirBC3AbIwQNsEypk .qV6gkvx305OJeH7486zo {
  background-color: var(--heading-color);
  height: 60vh;
  position: relative;
  overflow: hidden;
}
.luBJirBC3AbIwQNsEypk .qV6gkvx305OJeH7486zo .YGev3COECzKodgZWwelb {
  width: 100vw;
  position: absolute;
  transition: 0.8s ease;
}
.luBJirBC3AbIwQNsEypk .qV6gkvx305OJeH7486zo .YGev3COECzKodgZWwelb:hover {
  transition: 0.8s ease;
  opacity: 0.9;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS {
  width: 75%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .pm4owp_jiUPI0AQ5lpux {
  font-size: 8.5rem;
  font-weight: 600;
  color: white;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L .Nf1wYnmcdcOixED537yh {
  width: 90%;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L .Nf1wYnmcdcOixED537yh .h2c6G6zXieb9PEgg9YMz {
  text-align: left;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .G_5kqBdkwt8o4xv_rRpT {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .PCCy3NZpXL2GjrWEhDul {
  width: 90%;
  height: 25vh;
  background-color: #303030;
  margin-bottom: 3rem;
  padding: 3.5rem;
  border-radius: 0.5rem;
  transition: 0.4s ease;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .PCCy3NZpXL2GjrWEhDul .sJc8qJur0rxEvfnLqrpE {
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1rem;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .PCCy3NZpXL2GjrWEhDul .QU527y1gYusA6K_RnBE0 {
  font-size: 1rem;
  color: darkgrey;
}
.luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .PCCy3NZpXL2GjrWEhDul:hover .sJc8qJur0rxEvfnLqrpE {
  transform: scale(1.05);
  color: var(--heading-color);
  transition: 0.4s ease;
}
.luBJirBC3AbIwQNsEypk .mEO0Dl5CIYIkzD394caj {
  background-color: black;
  padding: 5rem 0;
  overflow: hidden; /* Ensure the banner stays within its container */
}
.luBJirBC3AbIwQNsEypk .mEO0Dl5CIYIkzD394caj .TdR_D6KPZ0Hjn_3R33mg {
  font-size: 20rem;
  font-weight: 800;
  animation: Tp22a9mn2RU26vUN2coQ 10s linear infinite; /* Adjust the duration and timing function as needed */
}
@keyframes Tp22a9mn2RU26vUN2coQ {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
  .luBJirBC3AbIwQNsEypk {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    border: 1px solid red;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn {
    width: 100%;
    border: 1px solid green;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .h2c6G6zXieb9PEgg9YMz {
    font-size: 1.4rem;
    color: white;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW {
    width: 100%;
    font-size: 3.5rem;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW .gyGLoW6CuXeiMZ56G4RC {
    font-size: 3.5rem;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .HXb4If_3xaEW4b91vFuW .IzT_Oh31NN5s_F70j18X {
    font-size: 3.5rem;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .CC_x9kGqk0rMd_y5t0Ne {
    width: 100%;
  }
  .luBJirBC3AbIwQNsEypk .dDBktqHefpOPtro_D3nn .OANrHW02gzoqyv5UHhmL {
    top: 0;
    right: 0;
    transform: rotate(0);
    width: 25rem;
  }
  .luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F {
    padding: 0;
    width: 100vw;
    height: 10rem;
  }
  .luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .SFzQUleyXLDlii7aEUlZ {
    height: auto;
  }
  .luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .SFzQUleyXLDlii7aEUlZ .h2c6G6zXieb9PEgg9YMz {
    font-size: 1rem;
  }
  .luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .SFzQUleyXLDlii7aEUlZ .qIs7e7_Y_JM_bcw9U8L1 {
    font-size: 1rem;
  }
  .luBJirBC3AbIwQNsEypk .beJSPvPImQI8jxDHLb_F .CszEE0vYQoG0SlZGgu6m {
    height: auto;
    font-size: 1rem;
  }
  .luBJirBC3AbIwQNsEypk .qV6gkvx305OJeH7486zo {
    background-color: transparent;
    width: 100%;
    height: 15rem;
  }
  .luBJirBC3AbIwQNsEypk .qV6gkvx305OJeH7486zo .YGev3COECzKodgZWwelb {
    width: 100%;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L .PCCy3NZpXL2GjrWEhDul {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L .PCCy3NZpXL2GjrWEhDul .sJc8qJur0rxEvfnLqrpE {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L .PCCy3NZpXL2GjrWEhDul .QU527y1gYusA6K_RnBE0 {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .y3q9pTjEFUujyR8Zxc8L .Nf1wYnmcdcOixED537yh {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .G_5kqBdkwt8o4xv_rRpT {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .GeFQKPm7WsqVbd0zYErS .G_5kqBdkwt8o4xv_rRpT .pm4owp_jiUPI0AQ5lpux {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .mEO0Dl5CIYIkzD394caj {
    display: none;
  }
  .luBJirBC3AbIwQNsEypk .mEO0Dl5CIYIkzD394caj .TdR_D6KPZ0Hjn_3R33mg {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,YAAA;EACA,cAAA;AACJ;AAAI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAER;AADQ;EACI,cAAA;AAGZ;AADQ;EACI,YAAA;EACA,gBAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAFY;EACI,gBAAA;EACA,2BAAA;AAIhB;AAFY;EACI,YAAA;EACA,gBAAA;AAIhB;AAAQ;EACI,WAAA;EACA,gBAAA;EACA,WAAA;AAEZ;AACQ;EACI,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;AACZ;AAGI;EACI,YAAA;EACA,iBAAA;AADR;AAII;EACI,YAAA;EACA,UAAA;EACA,cAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAFR;AAGQ;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,uBAAA;AADZ;AAEY;EACI,iBAAA;EACA,gBAAA;EACA,YAAA;AAAhB;AAGQ;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;AADZ;AAEY;EACI,2BAAA;EACA,mBAAA;AAAhB;AAII;EACI,sCAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAFR;AAGQ;EACI,YAAA;EACA,kBAAA;EACA,qBAAA;AADZ;AAEY;EACI,qBAAA;EACA,YAAA;AAAhB;AAII;EACI,UAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAFR;AAGQ;EACI,iBAAA;EACA,gBAAA;EACA,YAAA;AADZ;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AADZ;AAEY;EACI,UAAA;AAAhB;AACgB;EACI,gBAAA;AACpB;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AADZ;AAGQ;EACI,UAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AADZ;AAEY;EACI,iBAAA;EACA,YAAA;EACA,mBAAA;AAAhB;AAEY;EACI,eAAA;EACA,eAAA;AAAhB;AAEY;EACI,sBAAA;EACA,2BAAA;EACA,qBAAA;AAAhB;AAII;EACI,uBAAA;EACA,eAAA;EACA,gBAAA,EAAA,iDAAA;AAFR;AAGQ;EACI,gBAAA;EACA,gBAAA;EACA,mDAAA,EAAA,sDAAA;AADZ;AAKI;EACI;IACI,2BAAA;EAHV;EAMM;IACI,4BAAA;EAJV;AACF;;AAQA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,WAAA;IACA,SAAA;IACA,qBAAA;EALN;EAMM;IACI,WAAA;IACA,uBAAA;EAJV;EAKU;IACI,iBAAA;IACA,YAAA;EAHd;EAKU;IACI,WAAA;IACA,iBAAA;EAHd;EAIc;IACI,iBAAA;EAFlB;EAIc;IACI,iBAAA;EAFlB;EAKU;IACI,WAAA;EAHd;EAKU;IACI,MAAA;IACA,QAAA;IACA,oBAAA;IACA,YAAA;EAHd;EAMM;IACI,UAAA;IACA,YAAA;IACA,aAAA;EAJV;EAKU;IACI,YAAA;EAHd;EAIc;IACI,eAAA;EAFlB;EAIc;IACI,eAAA;EAFlB;EAKU;IACI,YAAA;IACA,eAAA;EAHd;EAMM;IACI,6BAAA;IACA,WAAA;IACA,aAAA;EAJV;EAKU;IACI,WAAA;EAHd;EAMM;IACI,aAAA;EAJV;EAKU;IACI,aAAA;EAHd;EAIc;IACI,aAAA;EAFlB;EAGkB;IACI,aAAA;EADtB;EAGkB;IACI,aAAA;EADtB;EAIc;IACI,aAAA;EAFlB;EAKU;IACI,aAAA;EAHd;EAIc;IACI,aAAA;EAFlB;EAMM;IACI,aAAA;EAJV;EAKU;IACI,aAAA;EAHd;AACF","sourcesContent":[".HomePage {\n    width: 80%;\n    height: 100%;\n    margin: 0 auto;\n    .introContainer {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        .headingSM {\n            margin: 8rem 0;\n        }\n        .heading {\n            color: white;\n            font-size: 11rem;\n            .spanText, .spanPlus {\n                font-size: 11rem;\n            }\n            .spanText {\n                font-weight: 100;\n                color: var(--heading-color);\n            }\n            .spanPlus {\n                color: black;\n                font-size: 13rem;\n            }\n        }\n        \n        .paragraph {\n            color: grey;\n            margin-top: 5rem;\n            width: 50vw;\n        }\n        \n        .image {\n            background-color: black;\n            width: 30vw;\n            position: absolute;\n            top: 4rem;\n            right: 10rem;\n            z-index: -1;\n            transform: rotate(7deg);\n        }\n    }\n    \n    .headingSM {\n        color: white;\n        font-size: 1.5rem;\n    }\n    \n    .Bio {\n        height: 60vh;\n        width: 75%;\n        margin: 0 auto;\n        padding: 10rem 0 20rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        .contentContainer {\n            height: 60vh;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-end;\n            align-items: flex-start;\n            .title {\n                font-size: 8.5rem;\n                font-weight: 600;\n                color: white;\n            }\n        }\n        .titleDescription {\n            color: grey;\n            padding-left: 3rem;\n            height: 60vh;\n            font-size: 5rem;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-end;\n            align-items: flex-start;\n            transition: 1s ease;\n            &:hover {\n                color: var(--heading-color);\n                transition: 1s ease;\n            }\n        }\n    }\n    .imgBannerContainer {\n        background-color: var(--heading-color);\n        height: 60vh;\n        position: relative;\n        overflow: hidden;\n        .imgBanner {\n            width: 100vw;\n            position: absolute;\n            transition: .8s ease;\n            &:hover {\n                transition: .8s ease;\n                opacity: .9;\n            }\n        }\n    }\n    .serviceContainerMain {\n        width: 75%;\n        margin: 0 auto;\n        padding: 5rem 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        .serviceHeader {\n            font-size: 8.5rem;\n            font-weight: 600;\n            color: white;\n        }\n        .serviceContainerLeft {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            width: 50%;\n            .headingSMContainer {\n                width: 90%;\n                .headingSM {\n                    text-align: left;\n                }\n            }\n        }\n        .serviceContainerRight {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            width: 50%;\n        }\n        .serviceCard {\n            width: 90%;\n            height: 25vh;\n            background-color: #303030;\n            margin-bottom: 3rem;\n            padding: 3.5rem;\n            border-radius: .5rem;\n            transition: .4s ease;\n            .serviceTitle {\n                font-size: 1.8rem;\n                color: white;\n                margin-bottom: 1rem;\n            }\n            .serviceDescription {\n                font-size: 1rem;\n                color: darkgrey;\n            }\n            &:hover .serviceTitle {\n                transform: scale(1.05);\n                color: var(--heading-color);\n                transition: .4s ease;\n            }\n        }\n    }\n    .projectBannerContainer {\n        background-color: black;\n        padding: 5rem 0;\n        overflow: hidden; /* Ensure the banner stays within its container */\n        .projectBanner {\n            font-size: 20rem;\n            font-weight: 800;\n            animation: slideAcross 10s linear infinite; /* Adjust the duration and timing function as needed */\n        }\n    }\n    \n    @keyframes slideAcross {\n        from {\n            transform: translateX(100%);\n        }\n      \n        to {\n            transform: translateX(-100%);\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 600px) {\n    .HomePage {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin: 0;\n        border: 1px solid red;\n        .introContainer {\n            width: 100%;\n            border: 1px solid green;\n            .headingSM {\n                font-size: 1.4rem;\n                color: white;\n            }\n            .heading {\n                width: 100%;\n                font-size: 3.5rem;\n                .spanText {\n                    font-size: 3.5rem;\n                }\n                .spanPlus {\n                    font-size: 3.5rem;\n                }\n            }\n            .paragraph {\n                width: 100%;\n            }\n            .image {\n                top: 0;\n                right: 0;\n                transform: rotate(0);\n                width: 25rem;\n            }\n        }\n        .Bio {\n            padding: 0;\n            width: 100vw;\n            height: 10rem;\n            .contentContainer {\n                height: auto;\n                .headingSM {\n                    font-size: 1rem;\n                }\n                .title {\n                    font-size: 1rem;\n                }\n            }\n            .titleDescription {\n                height: auto;\n                font-size: 1rem; \n            }\n        }\n        .imgBannerContainer {\n            background-color: transparent;\n            width: 100%;\n            height: 15rem;\n            .imgBanner {\n                width: 100%;\n            }\n        }\n        .serviceContainerMain {\n            display: none;\n            .serviceContainerLeft {\n                display: none;\n                .serviceCard {\n                    display: none;\n                    .serviceTitle {\n                        display: none;\n                    }\n                    .serviceDescription {\n                        display: none;\n                    }\n                }\n                .headingSMContainer {\n                    display: none;\n                }\n            }\n            .serviceContainerRight {\n                display: none;\n                .serviceHeader {\n                    display: none;\n                }\n            }\n        }\n        .projectBannerContainer {\n            display: none;\n            .projectBanner {\n                display: none;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"introContainer": `dDBktqHefpOPtro_D3nn`,
	"headingSM": `h2c6G6zXieb9PEgg9YMz`,
	"heading": `HXb4If_3xaEW4b91vFuW`,
	"spanText": `gyGLoW6CuXeiMZ56G4RC`,
	"spanPlus": `IzT_Oh31NN5s_F70j18X`,
	"paragraph": `CC_x9kGqk0rMd_y5t0Ne`,
	"image": `OANrHW02gzoqyv5UHhmL`,
	"Bio": `beJSPvPImQI8jxDHLb_F`,
	"contentContainer": `SFzQUleyXLDlii7aEUlZ`,
	"title": `qIs7e7_Y_JM_bcw9U8L1`,
	"titleDescription": `CszEE0vYQoG0SlZGgu6m`,
	"imgBannerContainer": `qV6gkvx305OJeH7486zo`,
	"imgBanner": `YGev3COECzKodgZWwelb`,
	"serviceContainerMain": `GeFQKPm7WsqVbd0zYErS`,
	"serviceHeader": `pm4owp_jiUPI0AQ5lpux`,
	"serviceContainerLeft": `y3q9pTjEFUujyR8Zxc8L`,
	"headingSMContainer": `Nf1wYnmcdcOixED537yh`,
	"serviceContainerRight": `G_5kqBdkwt8o4xv_rRpT`,
	"serviceCard": `PCCy3NZpXL2GjrWEhDul`,
	"serviceTitle": `sJc8qJur0rxEvfnLqrpE`,
	"serviceDescription": `QU527y1gYusA6K_RnBE0`,
	"projectBannerContainer": `mEO0Dl5CIYIkzD394caj`,
	"projectBanner": `TdR_D6KPZ0Hjn_3R33mg`,
	"slideAcross": `Tp22a9mn2RU26vUN2coQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectsPage/ProjectsPage.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectsPage/ProjectsPage.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rhxom9sHi_A4uYQ4sspq {
  height: 130px;
  background-color: red;
  width: 120px;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProjectsPage/ProjectsPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,qBAAA;EACA,YAAA;AACJ","sourcesContent":[".bgDesign {\n    height: 130px;\n    background-color: red;\n    width: 120px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bgDesign": `rhxom9sHi_A4uYQ4sspq`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Button.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.module.scss":
/*!*******************************!*\
  !*** ./src/index.module.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ContactPage/ContactPage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ContactPage/ContactPage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ContactPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ContactPage/ContactPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProjectsPage/ProjectsPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/ProjectsPage/ProjectsPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProjectsPage/ProjectsPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-354ecd"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.9083b1cfb624c0c940a0d43cc8806de3.js.map