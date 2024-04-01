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

/***/ "./src/components/Bio/Bio.js":
/*!***********************************!*\
  !*** ./src/components/Bio/Bio.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bio.module.scss */ "./src/components/Bio/Bio.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Bio() {
  return /*#__PURE__*/React.createElement("div", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Bio
  }, /*#__PURE__*/React.createElement("div", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].contentContainer
  }, /*#__PURE__*/React.createElement("h4", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Who I am"), /*#__PURE__*/React.createElement("h1", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Software", /*#__PURE__*/React.createElement("br", null), "Engineer")), /*#__PURE__*/React.createElement("p", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleDescription
  }, "My role is as dynamic as the code I craft. I'm not just a coder; I'm an architect, a problem-solver, and an innovator.  "));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bio);

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

/***/ "./src/components/ImgBanner/ImgBanner.js":
/*!***********************************************!*\
  !*** ./src/components/ImgBanner/ImgBanner.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgBanner.module.scss */ "./src/components/ImgBanner/ImgBanner.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ImgBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].imgBannerContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: _ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].imgBanner,
    src: "https://i.imgur.com/zACT24f.png"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImgBanner);

/***/ }),

/***/ "./src/components/IntroContainer/IntroContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/IntroContainer/IntroContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntroContainer.module.scss */ "./src/components/IntroContainer/IntroContainer.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function IntroContainer() {
  return /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].IntroContainer
  }, /*#__PURE__*/React.createElement("h4", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Tyler Pierson - Software Engineer"), /*#__PURE__*/React.createElement("h1", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].heading
  }, "Hello! ", /*#__PURE__*/React.createElement("span", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "I'm"), " a", /*#__PURE__*/React.createElement("br", null), "web designer ", /*#__PURE__*/React.createElement("span", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanPlus
  }, "+"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "developer")), /*#__PURE__*/React.createElement("p", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].paragraph
  }, "Crafting great web design or development involves a harmonious fusion of creativity, functionality, and user experience. It's about more than just aesthetics; it's about creating an immersive digital environment that captivates users while effortlessly guiding them toward their goals."), /*#__PURE__*/React.createElement("img", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image,
    src: "https://i.imgur.com/CAtnkHR.png"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroContainer);

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

/***/ "./src/components/NavMobile/NavMobile.js":
/*!***********************************************!*\
  !*** ./src/components/NavMobile/NavMobile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMobile.module.scss */ "./src/components/NavMobile/NavMobile.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function NavMobile() {
  const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [listShown, setListShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleClick = () => {
    setIsRotated(!isRotated);
    setListShown(!listShown);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavMobile
  }, /*#__PURE__*/React.createElement("button", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtn,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnTop, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rotateTop : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].revertTop)
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnMid, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fadeOut : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].fadeIn)
  }, "|"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavBtnBottom, " ").concat(isRotated ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].rotateBottom : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].revertBottom)
  }, "|")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NavContainer, " ").concat(listShown ? _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].expandContainer : _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].collapseContainer)
  }, /*#__PURE__*/React.createElement("ul", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Home"), /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "About Me"), /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Projects"), /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Contact Me"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMobile);

/***/ }),

/***/ "./src/components/ProjectBanner/ProjectBanner.js":
/*!*******************************************************!*\
  !*** ./src/components/ProjectBanner/ProjectBanner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectBanner.module.scss */ "./src/components/ProjectBanner/ProjectBanner.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProjectBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectBannerContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].projectBanner
  }, "My Projects"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectBanner);

/***/ }),

/***/ "./src/components/ProjectCard/ProjectCardOne.js":
/*!******************************************************!*\
  !*** ./src/components/ProjectCard/ProjectCardOne.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCard.module.scss */ "./src/components/ProjectCard/ProjectCard.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProjectCardOne() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCardContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCardInnerContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCard
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleImgContainer
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectTitle
  }, "Goose Dev Hub"), /*#__PURE__*/React.createElement("img", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectImg,
    src: "/img/goose.png",
    alt: "Goose Image"
  }), /*#__PURE__*/React.createElement("h4", null, "Year: 2024"), /*#__PURE__*/React.createElement("h4", null, "Category: Social Media Application")), /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].DescriptionContainer
  }, /*#__PURE__*/React.createElement("p", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectDescription
  }, "Welcome to Goose Dev Hub, the ultimate social platform meticulously crafted with the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, tailored exclusively for the web development community. Here, every line of code and every pixel on the screen is a testament to our commitment to empowering developers and employers alike. Behind the sleek and intuitive user interface lies a powerhouse of technology, driven by Node.js for lightning-fast performance and Express.js for seamless backend communication. With MongoDB as our database of choice, we've created a scalable and robust platform that can handle the diverse needs of developers and employers with ease. But Goose Dev Hub is more than just a showcase of technical prowess \u2013 it's a vibrant community where developers can showcase their projects, skills, and expertise, and employers can discover top talent to propel their businesses forward. Whether you're a seasoned developer looking for your next career opportunity or an employer seeking skilled candidates for your projects, Goose Dev Hub provides the perfect platform for connection and collaboration. Join us at Goose Dev Hub and unlock endless possibilities for professional growth and success. With our MERN stack-powered platform, you'll have everything you need to take your career to new heights or find the perfect candidate for your next project. Let's build the future of web development together \u2013 one connection at a time.")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCardOne);

/***/ }),

/***/ "./src/components/ProjectCard/ProjectCardThree.js":
/*!********************************************************!*\
  !*** ./src/components/ProjectCard/ProjectCardThree.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCard.module.scss */ "./src/components/ProjectCard/ProjectCard.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProjectCardThree() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCardContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCardInnerContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCard
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleImgContainer
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectTitle
  }, "Liberty Blogs"), /*#__PURE__*/React.createElement("img", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectImg,
    src: "/img/blog.png"
  }), /*#__PURE__*/React.createElement("h4", null, "Year: 2023"), /*#__PURE__*/React.createElement("h4", null, "Category: Blog")), /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].DescriptionContainer
  }, /*#__PURE__*/React.createElement("p", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectDescription
  }, "Driven by the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, Liberty Blogs is more than just a website \u2013 it's your personal canvas, waiting to be painted with the colors of your imagination. With React.js at the helm, your readers are greeted with a seamless and captivating interface, inviting them to delve into the depths of your thoughts and stories. Meanwhile, Node.js and Express.js ensure that your platform runs smoothly, allowing you to focus on what truly matters \u2013 your words. Liberty Blogs isn't just a platform \u2013 it's your digital haven, where you have the freedom to express yourself authentically and connect with readers who resonate with your message. Whether you're sharing personal anecdotes, discussing thought-provoking topics, or simply expressing your creativity, Liberty Blogs is your space to shine.")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCardThree);

/***/ }),

/***/ "./src/components/ProjectCard/ProjectCardTwo.js":
/*!******************************************************!*\
  !*** ./src/components/ProjectCard/ProjectCardTwo.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectCard.module.scss */ "./src/components/ProjectCard/ProjectCard.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProjectCardTwo() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCardContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCardInnerContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectCard
  }, /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleImgContainer
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectTitle
  }, "MarvelVerse Comics"), /*#__PURE__*/React.createElement("img", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectImg,
    src: "/img/marvel.jpg"
  }), /*#__PURE__*/React.createElement("h4", null, "Year: 2024"), /*#__PURE__*/React.createElement("h4", null, "Category: Ecommerce")), /*#__PURE__*/React.createElement("div", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].DescriptionContainer
  }, /*#__PURE__*/React.createElement("p", {
    className: _ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProjectDescription
  }, "Welcome to our Marvel Comics Emporium, where every purchase is a journey into the heart of the Marvel universe, meticulously crafted using the latest in web technology. Our online store isn't just a destination; it's a testament to the power of innovation and creativity, built from the ground up with a MERN (MongoDB, Express.js, React.js, Node.js) stack.")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCardTwo);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.module.scss */ "./src/components/Projects/Projects.module.scss");
/* harmony import */ var _ProjectCard_ProjectCardOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProjectCard/ProjectCardOne */ "./src/components/ProjectCard/ProjectCardOne.js");
/* harmony import */ var _ProjectCard_ProjectCardTwo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProjectCard/ProjectCardTwo */ "./src/components/ProjectCard/ProjectCardTwo.js");
/* harmony import */ var _ProjectCard_ProjectCardThree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProjectCard/ProjectCardThree */ "./src/components/ProjectCard/ProjectCardThree.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





function Projects() {
  const [showCardOne, setShowCardOne] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showCardTwo, setShowCardTwo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showCardThree, setShowCardThree] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const projectCardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleClickOutside(event) {
      if (projectCardRef.current && !projectCardRef.current.contains(event.target)) {
        setShowCardOne(false);
        setShowCardTwo(false);
        setShowCardThree(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [projectCardRef]);
  const toggleCardOne = () => {
    setShowCardOne(!showCardOne);
  };
  const toggleCardTwo = () => {
    setShowCardTwo(!showCardTwo);
  };
  const toggleCardThree = () => {
    setShowCardThree(!showCardThree);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Projects
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCardOne
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard,
    onClick: toggleCardOne,
    ref: projectCardRef
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "https://i.imgur.com/UIjyIMC.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/React.createElement("h5", null, "Goose Dev Hub"), /*#__PURE__*/React.createElement("h6", null, "Year: 2024"), /*#__PURE__*/React.createElement("h6", null, "Category: Tech, Social Media")))), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCardTwo
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard,
    onClick: toggleCardTwo,
    ref: projectCardRef
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "https://i.imgur.com/ndrcB38.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/React.createElement("h5", null, "MarvelVerse Comics"), /*#__PURE__*/React.createElement("h6", null, "Year: 2024"), /*#__PURE__*/React.createElement("h6", null, "Category: Ecommerce")))), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCardThree
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard,
    onClick: toggleCardThree,
    ref: projectCardRef
  }, /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "https://i.imgur.com/0yD52R2.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/React.createElement("h5", null, "Liberty Blogs"), /*#__PURE__*/React.createElement("h6", null, "Year: 2023"), /*#__PURE__*/React.createElement("h6", null, "Category: Social Media, Communication")))), showCardOne && /*#__PURE__*/React.createElement(_ProjectCard_ProjectCardOne__WEBPACK_IMPORTED_MODULE_2__["default"], null), showCardTwo && /*#__PURE__*/React.createElement(_ProjectCard_ProjectCardTwo__WEBPACK_IMPORTED_MODULE_3__["default"], null), showCardThree && /*#__PURE__*/React.createElement(_ProjectCard_ProjectCardThree__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/components/ServiceContainer/ServiceContainer.js":
/*!*************************************************************!*\
  !*** ./src/components/ServiceContainer/ServiceContainer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceContainer.module.scss */ "./src/components/ServiceContainer/ServiceContainer.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ServiceContainer() {
  return /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerMain
  }, /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerLeft
  }, /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Design"), /*#__PURE__*/React.createElement("p", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "Design in web development is the art of harmoniously blending aesthetics and functionality to create immersive digital experiences that captivate and engage users.")), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Development"), /*#__PURE__*/React.createElement("p", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "The intricate process of architecting and implementing innovative solutions, leveraging cutting-edge technologies to build robust, scalable, and user-centric digital platforms that empower and enrich the online experience.")), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSMContainer
  }, /*#__PURE__*/React.createElement("p", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "I provide comprehensive web development services, crafting tailored solutions that seamlessly integrate design, branding, and marketing strategies to elevate online presence and drive meaningful engagement."))), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerRight
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Creative Solutions"), /*#__PURE__*/React.createElement("h2", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceHeader
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Branding"), /*#__PURE__*/React.createElement("p", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "Branding in web development is the strategic cultivation of a cohesive digital identity, encompassing visual elements, messaging, and user experience, to establish a distinctive and memorable presence that resonates with audiences and fosters trust and loyalty.")), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Marketing"), /*#__PURE__*/React.createElement("p", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceDescription
  }, "Marketing in web development involves leveraging various digital channels and strategies to effectively promote products, services, or ideas, with the aim of reaching and engaging target audiences, driving traffic, and ultimately achieving business objectives, all while delivering compelling and relevant content tailored to user needs and preferences."))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceContainer);

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
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* harmony import */ var _components_IntroContainer_IntroContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IntroContainer/IntroContainer */ "./src/components/IntroContainer/IntroContainer.js");
/* harmony import */ var _components_Bio_Bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Bio/Bio */ "./src/components/Bio/Bio.js");
/* harmony import */ var _components_ImgBanner_ImgBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ImgBanner/ImgBanner */ "./src/components/ImgBanner/ImgBanner.js");
/* harmony import */ var _components_ServiceContainer_ServiceContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ServiceContainer/ServiceContainer */ "./src/components/ServiceContainer/ServiceContainer.js");
/* harmony import */ var _components_ProjectBanner_ProjectBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ProjectBanner/ProjectBanner */ "./src/components/ProjectBanner/ProjectBanner.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");









function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].HomePage
  }, /*#__PURE__*/React.createElement(_components_IntroContainer_IntroContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_components_Bio_Bio__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_components_ImgBanner_ImgBanner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_components_ServiceContainer_ServiceContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement(_components_ProjectBanner_ProjectBanner__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Bio/Bio.module.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Bio/Bio.module.scss ***!
  \***********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Small devices (portrait tablets and large phones, 600px and up) */
.jinRZ7_sItrL6xbGnzrK {
  height: 60vh;
  width: 100%;
  margin: 2rem auto;
  padding: 3rem 0 10rem;
  display: flex;
  background-color: var(--heading-color);
  justify-content: center;
  align-items: center;
}
.jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}
.jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 .E2Pix40MW7mYfxJp4xsz {
  font-size: 8.5vw;
  font-weight: 600;
  color: white;
}
.jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0 {
  color: grey;
  padding-left: 3rem;
  height: 60vh;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 1s ease;
}
.jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0:hover {
  color: var(--bg-color);
  transition: 1s ease;
}

@media only screen and (max-width: 1000px) {
  .jinRZ7_sItrL6xbGnzrK {
    padding: 0 2rem;
    width: 100vw;
    height: 15rem;
    background-color: rgb(100, 237, 207);
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 30%;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 .hWQyQnisQdASrmgTmX1X {
    font-size: 1.5rem;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 .E2Pix40MW7mYfxJp4xsz {
    font-size: 2rem;
  }
  .jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0 {
    display: flex;
    justify-content: center;
    width: 70%;
    height: 100%;
    font-size: 1.3rem;
  }
  .jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0:hover {
    color: black;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Bio/Bio.module.scss"],"names":[],"mappings":"AAAA,oEAAA;AACA;EACI,YAAA;EACA,WAAA;EACA,iBAAA;EACA,qBAAA;EACA,aAAA;EACA,sCAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AAAI;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,uBAAA;AAER;AADQ;EACI,gBAAA;EACA,gBAAA;EACA,YAAA;AAGZ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;AAER;AADQ;EACI,sBAAA;EACA,mBAAA;AAGZ;;AAEA;EACI;IACI,eAAA;IACA,YAAA;IACA,aAAA;IACA,oCAAA;EACN;EAAM;IACI,aAAA;IACA,uBAAA;IACA,YAAA;IACA,UAAA;EAEV;EADU;IACI,iBAAA;EAGd;EADU;IACI,eAAA;EAGd;EAAM;IACI,aAAA;IACA,uBAAA;IACA,UAAA;IACA,YAAA;IACA,iBAAA;EAEV;EADU;IACI,YAAA;EAGd;AACF","sourcesContent":["/* Small devices (portrait tablets and large phones, 600px and up) */\n.Bio {\n    height: 60vh;\n    width: 100%;\n    margin: 2rem auto;\n    padding: 3rem 0 10rem;\n    display: flex;\n    background-color: var(--heading-color);\n    justify-content: center;\n    align-items: center;\n    .contentContainer {\n        height: 60vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        align-items: flex-start;\n        .title {\n            font-size: 8.5vw;\n            font-weight: 600;\n            color: white;\n        }\n    }\n    .titleDescription {\n        color: grey;\n        padding-left: 3rem;\n        height: 60vh;\n        font-size: 3vw;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        align-items: flex-start;\n        transition: 1s ease;\n        &:hover {\n            color: var(--bg-color);\n            transition: 1s ease;\n        }\n    }\n}\n\n@media only screen and (max-width: 1000px) {\n    .Bio {\n        padding: 0 2rem;\n        width: 100vw;\n        height: 15rem;\n        background-color: rgb(100, 237, 207);\n        .contentContainer {\n            display: flex;\n            justify-content: center;\n            height: 100%;\n            width: 30%;\n            .headingSM {\n                font-size: 1.5rem;\n            }\n            .title {\n                font-size: 2rem;\n            }\n        }\n        .titleDescription {\n            display: flex;\n            justify-content: center;\n            width: 70%;\n            height: 100%;\n            font-size: 1.3rem; \n            &:hover {\n                color: black;\n            }\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Bio": `jinRZ7_sItrL6xbGnzrK`,
	"contentContainer": `RhflQIR1aiRzE7JYfRJ4`,
	"title": `E2Pix40MW7mYfxJp4xsz`,
	"titleDescription": `WjVjMLdQXGGAB9HV83S0`,
	"headingSM": `hWQyQnisQdASrmgTmX1X`
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ImgBanner/ImgBanner.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ImgBanner/ImgBanner.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.G83ax1dzQtHeJMz2gPgQ {
  background-color: var(--heading-color);
  height: 60vh;
  position: relative;
  overflow: hidden;
}
.G83ax1dzQtHeJMz2gPgQ .sh2bhPAdbXc_0YCjvC0U {
  width: 100vw;
  position: absolute;
  transition: 0.8s ease;
}
.G83ax1dzQtHeJMz2gPgQ .sh2bhPAdbXc_0YCjvC0U:hover {
  transition: 0.8s ease;
  opacity: 0.9;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .G83ax1dzQtHeJMz2gPgQ {
    background-color: transparent;
    width: 100%;
    height: 35vh;
  }
  .G83ax1dzQtHeJMz2gPgQ .sh2bhPAdbXc_0YCjvC0U {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ImgBanner/ImgBanner.module.scss"],"names":[],"mappings":"AAAA;EACI,sCAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AAAI;EACI,YAAA;EACA,kBAAA;EACA,qBAAA;AAER;AADQ;EACI,qBAAA;EACA,YAAA;AAGZ;;AAEA,oEAAA;AACA;EACI;IACI,6BAAA;IACA,WAAA;IACA,YAAA;EACN;EAAM;IACI,WAAA;EAEV;AACF","sourcesContent":[".imgBannerContainer {\n    background-color: var(--heading-color);\n    height: 60vh;\n    position: relative;\n    overflow: hidden;\n    .imgBanner {\n        width: 100vw;\n        position: absolute;\n        transition: .8s ease;\n        &:hover {\n            transition: .8s ease;\n            opacity: .9;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .imgBannerContainer {\n        background-color: transparent;\n        width: 100%;\n        height: 35vh;\n        .imgBanner {\n            width: 100%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imgBannerContainer": `G83ax1dzQtHeJMz2gPgQ`,
	"imgBanner": `sh2bhPAdbXc_0YCjvC0U`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/IntroContainer/IntroContainer.module.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/IntroContainer/IntroContainer.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.WXIspfxBzGyfPOvOt6Wd {
  height: 90vh;
  width: 100%;
  position: relative;
}
.WXIspfxBzGyfPOvOt6Wd .RVzjtWAadvbxIwf_Vy5a {
  margin: 8rem 0;
}
.WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk {
  color: white;
  font-size: 11rem;
}
.WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
  font-size: 11rem;
}
.WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa {
  font-weight: 100;
  color: var(--heading-color);
}
.WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
  color: black;
  font-size: 13rem;
}
.WXIspfxBzGyfPOvOt6Wd .aqMToluDVC_OVBdOM4nw {
  color: grey;
  margin-top: 5rem;
  width: 50vw;
}
.WXIspfxBzGyfPOvOt6Wd .BI0GYOC1YbWy9DGIlJZK {
  background-color: black;
  width: 30vw;
  position: absolute;
  top: 4rem;
  right: 10rem;
  z-index: -1;
  transform: rotate(7deg);
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .WXIspfxBzGyfPOvOt6Wd {
    height: 50vh;
    width: 100%;
    padding: 0 2rem;
    margin: 3rem 0;
  }
  .WXIspfxBzGyfPOvOt6Wd .RVzjtWAadvbxIwf_Vy5a {
    font-size: 1.4rem;
    color: white;
    margin: 2rem 0;
  }
  .WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk {
    width: 100%;
    font-size: 9.5vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa {
    font-size: 9.5vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 9.5vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .aqMToluDVC_OVBdOM4nw {
    display: none;
  }
  .WXIspfxBzGyfPOvOt6Wd .BI0GYOC1YbWy9DGIlJZK {
    top: 0;
    right: 0;
    transform: rotate(0);
    width: 25rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/IntroContainer/IntroContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,kBAAA;AACJ;AAAI;EACI,cAAA;AAER;AAAI;EACI,YAAA;EACA,gBAAA;AAER;AADQ;EACI,gBAAA;AAGZ;AADQ;EACI,gBAAA;EACA,2BAAA;AAGZ;AADQ;EACI,YAAA;EACA,gBAAA;AAGZ;AACI;EACI,WAAA;EACA,gBAAA;EACA,WAAA;AACR;AAEI;EACI,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;AAAR;;AAIA,oEAAA;AACA;EACI;IACI,YAAA;IACA,WAAA;IACA,eAAA;IACA,cAAA;EADN;EAEM;IACI,iBAAA;IACA,YAAA;IACA,cAAA;EAAV;EAEM;IACI,WAAA;IACA,gBAAA;EAAV;EACU;IACI,gBAAA;EACd;EACU;IACI,gBAAA;EACd;EAEM;IACI,aAAA;EAAV;EAEM;IACI,MAAA;IACA,QAAA;IACA,oBAAA;IACA,YAAA;EAAV;AACF","sourcesContent":[".IntroContainer {\n    height: 90vh;\n    width: 100%;\n    position: relative;\n    .headingSM {\n        margin: 8rem 0;\n    }\n    .heading {\n        color: white;\n        font-size: 11rem;\n        .spanText, .spanPlus {\n            font-size: 11rem;\n        }\n        .spanText {\n            font-weight: 100;\n            color: var(--heading-color);\n        }\n        .spanPlus {\n            color: black;\n            font-size: 13rem;\n        }\n    }\n    \n    .paragraph {\n        color: grey;\n        margin-top: 5rem;\n        width: 50vw;\n    }\n    \n    .image {\n        background-color: black;\n        width: 30vw;\n        position: absolute;\n        top: 4rem;\n        right: 10rem;\n        z-index: -1;\n        transform: rotate(7deg);\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .IntroContainer {\n        height: 50vh;\n        width: 100%;\n        padding: 0 2rem;\n        margin: 3rem 0; \n        .headingSM {\n            font-size: 1.4rem;\n            color: white;\n            margin: 2rem 0;\n        }\n        .heading {\n            width: 100%;\n            font-size: 9.5vw;\n            .spanText {\n                font-size: 9.5vw;\n            }\n            .spanPlus {\n                font-size: 9.5vw;\n            }\n        }\n        .paragraph {\n            display: none;\n        }\n        .image {\n            top: 0;\n            right: 0;\n            transform: rotate(0);\n            width: 25rem;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"IntroContainer": `WXIspfxBzGyfPOvOt6Wd`,
	"headingSM": `RVzjtWAadvbxIwf_Vy5a`,
	"heading": `gSKaLjsbfnd93wd98bJk`,
	"spanText": `OVONZ52MMoJ8r5yLzNJa`,
	"spanPlus": `SkHD1m3e3CuLGPPqZYxV`,
	"paragraph": `aqMToluDVC_OVBdOM4nw`,
	"image": `BI0GYOC1YbWy9DGIlJZK`
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
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
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
@media only screen and (max-width: 1000px) {
  .SLZXaJInmBusSKJAiC7A {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,MAAA;EACA,aAAA;EACA,oCAAA;AACJ;AAAI;EACI,WAAA;EACA,iBAAA;AAER;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AACR;AACQ;EACI,YAAA;EACA,UAAA;EACA,iBAAA;EACA,kBAAA;AACZ;AACY;EACI,qBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,+BAAA;AAChB;AAEY;EACI,QAAA;EACA,2BAAA;EACA,qBAAA;AAAhB;AAGY;EACI,QAAA;EACA,0BAAA;EACA,UAAA;EACA,qBAAA;AADhB;AAIY;EACI,eAAA;AAFhB;AAIgB;EACI,4BAAA;EACA,UAAA;EACA,qBAAA;AAFpB;AAKgB;EACI,2BAAA;EACA,UAAA;EACA,qBAAA;EACA,uBAAA;AAHpB;;AAUA,oEAAA;AACA;EACI;IACI,aAAA;EAPN;AACF","sourcesContent":[".Nav {\n    width: 100%;\n    height: 10vh;\n    display: flex;\n    position: fixed;\n    top: 0;\n    z-index: 1000;\n    background-color: rgba(0, 0, 0, .6);\n    .image {\n        width: 10vw;\n        margin-left: 2rem;\n    }\n\n    .ul {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n\n        .listItemContainer {\n            height: 100%;\n            width: 7vw;\n            margin-left: 1rem;\n            position: relative;\n\n            .navItemTop, .navItemBottom {\n                list-style-type: none;\n                text-decoration: none;\n                color: white;\n                position: absolute;\n                width: 100%;\n                text-align: center;\n                transition: transform 0.3s ease;\n            }\n\n            .navItemTop {\n                top: 50%;\n                transform: translateY(-50%);\n                transition: .5s ease;\n            }\n\n            .navItemBottom {\n                top: 50%;\n                transform: translateY(50%);\n                opacity: 0;\n                transition: .5s ease;\n            }\n\n            &:hover {\n                cursor: pointer;\n\n                .navItemTop {\n                    transform: translateY(-150%);\n                    opacity: 0;\n                    transition: .5s ease;\n                }\n\n                .navItemBottom {\n                    transform: translateY(-50%);\n                    opacity: 1;\n                    transition: .5s ease;\n                    color: var(--btn-color);\n                }\n            }\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .Nav {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.lksBUiCZFQPLTfIjYUCV {
  display: none;
}

.m7VesjHTKRTSgCNfxrfL {
  display: none;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .lksBUiCZFQPLTfIjYUCV {
    display: block;
    color: white;
    text-align: right;
    padding: 2rem;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe {
    z-index: 2000;
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 100%;
    position: fixed;
    top: 2rem;
    right: 2rem;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe span {
    display: inline-block;
    font-size: 3rem;
    position: absolute;
    transform-origin: center;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .QuSOlzfevnGJDhi4YX_s {
    top: 0.3rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .vB3kggoOlX1C1rRpsLQ6 {
    animation: vB3kggoOlX1C1rRpsLQ6 5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .y4DcVFf0ebzeeDOPzmPS {
    animation: y4DcVFf0ebzeeDOPzmPS 5s backwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .o7qGaQg2UJbI3R_ILi8I {
    top: 0.9rem;
    left: 2.4rem;
    transform: rotate(90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .YCnz0eud1qEAAv9Y49wW {
    animation: YCnz0eud1qEAAv9Y49wW 1.5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .dEYlGC3ncOzj03rbIaYz {
    animation: dEYlGC3ncOzj03rbIaYz 5s backwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .xPSKr2cPfMg2cmJaBcqF {
    top: 1.3rem;
    left: 1.8rem;
    transform: rotate(-90deg);
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .c1Fldc9kfZjKz92ggudg {
    animation: c1Fldc9kfZjKz92ggudg 5s forwards;
  }
  .lksBUiCZFQPLTfIjYUCV .mQtM4whzNm6xQg_5eBGe .siNp7y8LcjSI_4BB0YO2 {
    animation: siNp7y8LcjSI_4BB0YO2 5s backwards;
  }
  .m7VesjHTKRTSgCNfxrfL {
    position: fixed;
    display: block;
    top: 2rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    border: none;
    z-index: 1000;
    background-color: rgba(100, 237, 207, 0.9);
    overflow: hidden;
    transition: width 0.3s, height 0.3s;
  }
  .LAxFiZWZmQlaaqJAMk4J {
    display: none;
  }
  .DvGKNPsuqDyxZDn7CWSQ {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J {
    display: block;
    text-decoration: none;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4 {
    list-style-type: none;
    font-size: 4rem;
    transition: 0.3s ease;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s ease;
  }
  .okLjs1ihh9Oby_1MzKDZ {
    width: 5rem;
    height: 5rem;
  }
}
@keyframes vB3kggoOlX1C1rRpsLQ6 {
  from {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
}
@keyframes y4DcVFf0ebzeeDOPzmPS {
  from {
    transform: rotate(-50deg);
    top: -0.2rem;
    left: 1.8rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(90deg);
    top: 0.3rem;
    left: 2.4rem;
    font-size: 3rem;
  }
}
@keyframes YCnz0eud1qEAAv9Y49wW {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes dEYlGC3ncOzj03rbIaYz {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes c1Fldc9kfZjKz92ggudg {
  from {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
  to {
    transform: rotate(45deg);
    top: -0.1rem;
    left: 2.2rem;
    font-size: 4rem;
  }
}
@keyframes siNp7y8LcjSI_4BB0YO2 {
  from {
    transform: rotate(45deg);
    top: -0.2rem;
    left: 2.2rem;
    font-size: 4rem;
  }
  to {
    transform: rotate(-90deg);
    top: 1.3rem;
    left: 1.8rem;
    font-size: 3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavMobile/NavMobile.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA,oEAAA;AACA;EACI;IACI,cAAA;IACA,YAAA;IACA,iBAAA;IACA,aAAA;EACN;EAAM;IACI,aAAA;IACA,WAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,eAAA;IACA,SAAA;IACA,WAAA;EAEV;EAAU;IACI,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,wBAAA;EAEd;EACU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EACd;EAEU;IACI,2CAAA;EAAd;EAGU;IACI,4CAAA;EADd;EAIU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EAFd;EAKU;IACI,6CAAA;EAHd;EAMU;IACI,4CAAA;EAJd;EAOU;IACI,WAAA;IACA,YAAA;IACA,yBAAA;EALd;EAQU;IACI,2CAAA;EANd;EASU;IACI,4CAAA;EAPd;EAYE;IACI,eAAA;IACA,cAAA;IACA,SAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,0CAAA;IACA,gBAAA;IACA,mCAAA;EAVN;EAaE;IACI,aAAA;EAXN;EAcE;IACI,WAAA;IACA,YAAA;IACA,MAAA;IACA,QAAA;IACA,iBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAZN;EAaM;IACI,cAAA;IACA,qBAAA;EAXV;EAYU;IACI,qBAAA;IACA,eAAA;IACA,qBAAA;EAVd;EAWc;IACI,eAAA;IACA,oCAAA;IACA,qBAAA;EATlB;EAeE;IACI,WAAA;IACA,YAAA;EAbN;AACF;AAgBA;EACI;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAdN;EAiBE;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAfN;AACF;AAkBA;EACI;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAhBN;EAmBE;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAjBN;AACF;AAoBA;EACI;IACI,UAAA;EAlBN;EAqBE;IACI,UAAA;EAnBN;AACF;AAsBA;EACI;IACI,UAAA;EApBN;EAuBE;IACI,UAAA;EArBN;AACF;AAwBA;EACI;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAtBN;EAyBE;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAvBN;AACF;AA0BA;EACI;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAxBN;EA2BE;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAzBN;AACF","sourcesContent":[".NavMobile {\n    display: none;\n}\n\n.NavContainer {\n    display: none;\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .NavMobile {\n        display: block;\n        color: white;\n        text-align: right;\n        padding: 2rem;\n        .NavBtn {\n            z-index: 2000;\n            width: 5rem;\n            height: 5rem;\n            border: none;\n            border-radius: 100%;\n            position: fixed;\n            top: 2rem;\n            right: 2rem;\n\n            span {\n                display: inline-block;\n                font-size: 3rem;\n                position: absolute;\n                transform-origin: center;\n            }\n\n            .NavBtnTop {\n                top: .3rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .rotateTop {\n                animation: rotateTop 5s forwards;\n            }\n\n            .revertTop {\n                animation: revertTop 5s backwards;\n            }\n\n            .NavBtnMid {\n                top: .9rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .fadeOut {\n                animation: fadeOut 1.5s forwards;\n            }\n\n            .fadeIn {\n                animation: fadeIn 5s backwards;\n            }\n            \n            .NavBtnBottom {\n                top: 1.3rem;\n                left: 1.8rem;\n                transform: rotate(-90deg);\n            }\n\n            .rotateBottom {\n                animation: rotateBottom 5s forwards;\n            }\n\n            .revertBottom {\n                animation: revertBottom 5s backwards;\n            }\n        }\n    }\n\n    .NavContainer {\n        position: fixed;\n        display: block;\n        top: 2rem;\n        right: 2rem;\n        width: 5rem;\n        height: 5rem;\n        border-radius: 100%;\n        border: none;\n        z-index: 1000;\n        background-color: rgba(100, 237, 207, .9);;\n        overflow: hidden;\n        transition: width 0.3s, height 0.3s; \n    }\n\n    .ul {\n        display: none;\n    }\n\n    .expandContainer {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        right: 0;\n        border-radius: 0%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .ul {\n            display: block;\n            text-decoration: none;\n            .li {\n                list-style-type: none;\n                font-size: 4rem;\n                transition: .3s ease;\n                &:hover {\n                    cursor: pointer;\n                    background-color: rgba(0, 0, 0, .3);\n                    transition: .3s ease;\n                }\n            }\n        }\n    }\n\n    .collapseContainer {\n        width: 5rem;\n        height: 5rem;\n    }\n}\n\n@keyframes rotateTop {\n    from {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertTop {\n    from {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes rotateBottom {\n    from {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(45deg);\n        top: -.1rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertBottom {\n    from {\n        transform: rotate(45deg);\n        top: -.2rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NavMobile": `lksBUiCZFQPLTfIjYUCV`,
	"NavContainer": `m7VesjHTKRTSgCNfxrfL`,
	"NavBtn": `mQtM4whzNm6xQg_5eBGe`,
	"NavBtnTop": `QuSOlzfevnGJDhi4YX_s`,
	"rotateTop": `vB3kggoOlX1C1rRpsLQ6`,
	"revertTop": `y4DcVFf0ebzeeDOPzmPS`,
	"NavBtnMid": `o7qGaQg2UJbI3R_ILi8I`,
	"fadeOut": `YCnz0eud1qEAAv9Y49wW`,
	"fadeIn": `dEYlGC3ncOzj03rbIaYz`,
	"NavBtnBottom": `xPSKr2cPfMg2cmJaBcqF`,
	"rotateBottom": `c1Fldc9kfZjKz92ggudg`,
	"revertBottom": `siNp7y8LcjSI_4BB0YO2`,
	"ul": `LAxFiZWZmQlaaqJAMk4J`,
	"expandContainer": `DvGKNPsuqDyxZDn7CWSQ`,
	"li": `c6nVZZUwtb5ZjSC5zOF4`,
	"collapseContainer": `okLjs1ihh9Oby_1MzKDZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectBanner/ProjectBanner.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectBanner/ProjectBanner.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `._RlhkD0XPSDMMssJYXKX {
  background-color: black;
  width: 100%;
  padding: 5rem 0;
  overflow: hidden; /* Ensure the banner stays within its container */
}
._RlhkD0XPSDMMssJYXKX .SDsAEOfJWxWmImHC0SjW {
  font-size: 20rem;
  font-weight: 800;
  animation: WfZiLgV49hZQvFy0EQIc 10s linear infinite; /* Adjust the duration and timing function as needed */
}

@keyframes WfZiLgV49hZQvFy0EQIc {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  ._RlhkD0XPSDMMssJYXKX {
    height: 15vh;
    padding: 0;
  }
  ._RlhkD0XPSDMMssJYXKX .SDsAEOfJWxWmImHC0SjW {
    font-size: 14vw;
    margin: auto 0;
    height: 100%;
    width: 110%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ProjectBanner/ProjectBanner.module.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA,EAAA,iDAAA;AACJ;AAAI;EACI,gBAAA;EACA,gBAAA;EACA,mDAAA,EAAA,sDAAA;AAER;;AAEA;EACI;IACI,2BAAA;EACN;EAEE;IACI,4BAAA;EAAN;AACF;AAGA,oEAAA;AACA;EACI;IACI,YAAA;IACA,UAAA;EADN;EAEM;IACI,eAAA;IACA,cAAA;IACA,YAAA;IACA,WAAA;EAAV;AACF","sourcesContent":[".projectBannerContainer {\n    background-color: black;\n    width: 100%;\n    padding: 5rem 0;\n    overflow: hidden; /* Ensure the banner stays within its container */\n    .projectBanner {\n        font-size: 20rem;\n        font-weight: 800;\n        animation: slideAcross 10s linear infinite; /* Adjust the duration and timing function as needed */\n    }\n}\n\n@keyframes slideAcross {\n    from {\n        transform: translateX(100%);\n    }\n  \n    to {\n        transform: translateX(-100%);\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .projectBannerContainer {\n        height: 15vh;\n        padding: 0;\n        .projectBanner {\n            font-size: 14vw;\n            margin: auto 0;\n            height: 100%;\n            width: 110%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"projectBannerContainer": `_RlhkD0XPSDMMssJYXKX`,
	"projectBanner": `SDsAEOfJWxWmImHC0SjW`,
	"slideAcross": `WfZiLgV49hZQvFy0EQIc`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectCard/ProjectCard.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectCard/ProjectCard.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.m__y77JZW4Yvdlc4R0MQ {
  z-index: 500;
  position: absolute;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb {
  width: 90%;
  height: 80vh;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3rem solid var(--heading-color);
  background-color: rgba(45, 51, 50, 0.7);
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 {
  width: 90%;
  height: 70vh;
  display: flex;
  border-radius: 3rem;
  border: 0.3rem solid var(--heading-color);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  overflow: hidden;
  padding: 2rem;
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 .f24awNwZSrgRDaAvc5p0 {
  text-align: center;
  width: 50%;
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 .f24awNwZSrgRDaAvc5p0 .TsTLQMp3bGREunwBG4lW {
  max-width: 100%;
  max-height: 60rem;
  border-radius: 3rem;
  border: 0.1rem solid var(--heading-color);
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 .f24awNwZSrgRDaAvc5p0 .hTx5UikPpu2DFMrt7xgi {
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: bold;
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 .f24awNwZSrgRDaAvc5p0 h4 {
  font-size: 1.8rem;
  margin-top: 1rem;
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 .jROx3Ika_gIWiAM8ZpJH {
  width: 50%;
  margin-top: 2rem;
}
.m__y77JZW4Yvdlc4R0MQ .AfzNCN9BaCKFdMLmcmbb .sw3INglMKzbCUhnomKH9 .jROx3Ika_gIWiAM8ZpJH ._44jpuphRiajMWDJ6pvsb {
  margin: 0 2rem;
  font-size: 1.6rem;
  line-height: 4rem;
}`, "",{"version":3,"sources":["webpack://./src/components/ProjectCard/ProjectCard.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;AACJ;AAAI;EACI,UAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yCAAA;EACA,uCAAA;AAER;AADQ;EACI,UAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,yCAAA;EACA,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;AAGZ;AAFY;EACI,kBAAA;EACA,UAAA;AAIhB;AAHgB;EACI,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yCAAA;AAKpB;AAHgB;EACI,cAAA;EACA,iBAAA;EACA,iBAAA;AAKpB;AAHgB;EACI,iBAAA;EACA,gBAAA;AAKpB;AAFY;EACI,UAAA;EACA,gBAAA;AAIhB;AAHgB;EACI,cAAA;EACA,iBAAA;EACA,iBAAA;AAKpB","sourcesContent":[".ProjectCardContainer {\n    z-index: 500;\n    position: absolute;\n    width: 100%;\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .5);\n    .ProjectCardInnerContainer {\n        width: 90%;\n        height: 80vh;\n        border-radius: 3rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: .3rem solid var(--heading-color);\n        background-color: rgba(45, 51, 50, .7);\n        .ProjectCard {\n            width: 90%;\n            height: 70vh;\n            display: flex;\n            border-radius: 3rem;\n            border: .3rem solid var(--heading-color);\n            background-color: rgba(0, 0, 0, .6);\n            color: white;\n            overflow: hidden;\n            padding: 2rem;\n            .titleImgContainer {\n                text-align: center;\n                width: 50%;\n                .ProjectImg {\n                    max-width: 100%;\n                    max-height: 60rem;\n                    border-radius: 3rem;\n                    border: .1rem solid var(--heading-color);\n                }\n                .ProjectTitle {\n                    margin: 2rem 0;\n                    font-size: 2.5rem;\n                    font-weight: bold;\n                }\n                h4 {\n                    font-size: 1.8rem;\n                    margin-top: 1rem;\n                }\n            }\n            .DescriptionContainer {\n                width: 50%;\n                margin-top: 2rem;\n                .ProjectDescription {\n                    margin: 0 2rem;\n                    font-size: 1.6rem;\n                    line-height: 4rem;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProjectCardContainer": `m__y77JZW4Yvdlc4R0MQ`,
	"ProjectCardInnerContainer": `AfzNCN9BaCKFdMLmcmbb`,
	"ProjectCard": `sw3INglMKzbCUhnomKH9`,
	"titleImgContainer": `f24awNwZSrgRDaAvc5p0`,
	"ProjectImg": `TsTLQMp3bGREunwBG4lW`,
	"ProjectTitle": `hTx5UikPpu2DFMrt7xgi`,
	"DescriptionContainer": `jROx3Ika_gIWiAM8ZpJH`,
	"ProjectDescription": `_44jpuphRiajMWDJ6pvsb`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Projects/Projects.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Projects/Projects.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.HvU7kbcyjp3pvz6lM1wq {
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
  padding: 8rem 0;
}
.HvU7kbcyjp3pvz6lM1wq .I2vcVBmHRvi68FqUcaYn, .HvU7kbcyjp3pvz6lM1wq .g0VE9u_IgRURjjsnwHN5, .HvU7kbcyjp3pvz6lM1wq .AKEeLWgI7ruKOm3rHJ_9 {
  height: 100%;
}
.HvU7kbcyjp3pvz6lM1wq .g0VE9u_IgRURjjsnwHN5 {
  display: flex;
  align-items: flex-end;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw {
  height: 45rem;
  width: 40rem;
  border: 0.3rem solid var(--heading-color);
  background-color: rgb(45, 51, 50);
  padding: 2rem;
  border-radius: 3rem;
  transition: 0.3s ease;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .YPjXKbnPoV4MOlYZ2OJJ {
  width: 100%;
  height: 80%;
  background-color: black;
  border: 0.1rem solid var(--heading-color);
  border-radius: 3rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .YPjXKbnPoV4MOlYZ2OJJ .vJjKKPhkRkFiPoWZEcfn {
  width: 90%;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .LftQarex9ZU94M4Rp2R8 {
  color: var(--heading-color);
  text-align: center;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .LftQarex9ZU94M4Rp2R8 h5 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: 0.3s ease;
}`, "",{"version":3,"sources":["webpack://./src/components/Projects/Projects.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,eAAA;AACJ;AAAI;EACI,YAAA;AAER;AAAI;EACI,aAAA;EACA,qBAAA;AAER;AAAI;EACI,aAAA;EACA,YAAA;EACA,yCAAA;EACA,iCAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;AAER;AADQ;EACI,WAAA;EACA,WAAA;EACA,uBAAA;EACA,yCAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAGZ;AAFY;EACI,UAAA;AAIhB;AADQ;EACI,2BAAA;EACA,kBAAA;AAGZ;AAFY;EACI,iBAAA;EACA,iBAAA;EACA,gBAAA;AAIhB;AADQ;EACI,eAAA;EACA,qBAAA;EACA,qBAAA;AAGZ","sourcesContent":[".Projects {\n    width: 100%;\n    height: 90vh;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 8rem 0;\n    .ProjectCardOne, .ProjectCardTwo, .ProjectCardThree {\n        height: 100%;\n    }\n    .ProjectCardTwo {\n        display: flex;\n        align-items: flex-end;\n    }\n    .ProjectCard {\n        height: 45rem;\n        width: 40rem;\n        border: .3rem solid var(--heading-color);\n        background-color: rgb(45, 51, 50);\n        padding: 2rem;\n        border-radius: 3rem;\n        transition: .3s ease;\n        .imgContainer {\n            width: 100%;\n            height: 80%;\n            background-color: black;\n            border: .1rem solid var(--heading-color);\n            border-radius: 3rem;\n            overflow: hidden;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            .ProjectLogo {\n                width: 90%;\n            }\n        }\n        .ProjectDetails {\n            color: var(--heading-color);\n            text-align: center;\n            h5 {\n                font-size: 1.3rem;\n                font-weight: bold;\n                margin-top: 1rem;\n            }\n        }\n        &:hover {\n            cursor: pointer;\n            transform: scale(1.2);\n            transition: .3s ease;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Projects": `HvU7kbcyjp3pvz6lM1wq`,
	"ProjectCardOne": `I2vcVBmHRvi68FqUcaYn`,
	"ProjectCardTwo": `g0VE9u_IgRURjjsnwHN5`,
	"ProjectCardThree": `AKEeLWgI7ruKOm3rHJ_9`,
	"ProjectCard": `W7OGJxXSakrTBBtyDJWw`,
	"imgContainer": `YPjXKbnPoV4MOlYZ2OJJ`,
	"ProjectLogo": `vJjKKPhkRkFiPoWZEcfn`,
	"ProjectDetails": `LftQarex9ZU94M4Rp2R8`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ServiceContainer/ServiceContainer.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ServiceContainer/ServiceContainer.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.MyYwvFOFpuKKEZrTTodI {
  width: 75%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.MyYwvFOFpuKKEZrTTodI .Z3wofxnV_fQfGxSSpHeb {
  font-size: 8.5rem;
  font-weight: 600;
  color: white;
}
.MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .RFWAv2Jje79MsztfGqvb {
  width: 90%;
}
.MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .RFWAv2Jje79MsztfGqvb .lWOYZ4lKcfV6dlTkyVVg {
  text-align: left;
}
.MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.MyYwvFOFpuKKEZrTTodI .eUnsrkwmyuVmwL2KMfms {
  width: 90%;
  height: 35vh;
  background-color: #303030;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  transition: 0.4s ease;
}
.MyYwvFOFpuKKEZrTTodI .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
  margin: 1rem;
  font-size: 1.8rem;
  color: white;
}
.MyYwvFOFpuKKEZrTTodI .eUnsrkwmyuVmwL2KMfms .YMBTswNNuhoziprZb9Dz {
  font-size: 1vw;
  margin: 1rem;
  color: darkgrey;
}
.MyYwvFOFpuKKEZrTTodI .eUnsrkwmyuVmwL2KMfms:hover .VVltheWFikP7_pdjmNcp {
  transform: scale(1.05);
  color: var(--heading-color);
  transition: 0.4s ease;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .MyYwvFOFpuKKEZrTTodI {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .eUnsrkwmyuVmwL2KMfms {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .eUnsrkwmyuVmwL2KMfms .YMBTswNNuhoziprZb9Dz {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .RFWAv2Jje79MsztfGqvb {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .Z3wofxnV_fQfGxSSpHeb {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ServiceContainer/ServiceContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACJ;AAAI;EACI,iBAAA;EACA,gBAAA;EACA,YAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AADQ;EACI,UAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AAAI;EACI,UAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;AAER;AADQ;EACI,YAAA;EACA,iBAAA;EACA,YAAA;AAGZ;AADQ;EACI,cAAA;EACA,YAAA;EACA,eAAA;AAGZ;AADQ;EACI,sBAAA;EACA,2BAAA;EACA,qBAAA;AAGZ;;AAEA,oEAAA;AACA;EACI;IACI,aAAA;EACN;EAAM;IACI,aAAA;EAEV;EADU;IACI,aAAA;EAGd;EAFc;IACI,aAAA;EAIlB;EAFc;IACI,aAAA;EAIlB;EADU;IACI,aAAA;EAGd;EAAM;IACI,aAAA;EAEV;EADU;IACI,aAAA;EAGd;AACF","sourcesContent":[".serviceContainerMain {\n    width: 75%;\n    margin: 0 auto;\n    padding: 5rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    .serviceHeader {\n        font-size: 8.5rem;\n        font-weight: 600;\n        color: white;\n    }\n    .serviceContainerLeft {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n        .headingSMContainer {\n            width: 90%;\n            .headingSM {\n                text-align: left;\n            }\n        }\n    }\n    .serviceContainerRight {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n    }\n    .serviceCard {\n        width: 90%;\n        height: 35vh;\n        background-color: #303030;\n        margin-bottom: 3rem;\n        border-radius: .5rem;\n        transition: .4s ease;\n        .serviceTitle {\n            margin: 1rem;\n            font-size: 1.8rem;\n            color: white;\n        }\n        .serviceDescription {\n            font-size: 1vw;\n            margin: 1rem;\n            color: darkgrey;\n        }\n        &:hover .serviceTitle {\n            transform: scale(1.05);\n            color: var(--heading-color);\n            transition: .4s ease;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .serviceContainerMain {\n        display: none;\n        .serviceContainerLeft {\n            display: none;\n            .serviceCard {\n                display: none;\n                .serviceTitle {\n                    display: none;\n                }\n                .serviceDescription {\n                    display: none;\n                }\n            }\n            .headingSMContainer {\n                display: none;\n            }\n        }\n        .serviceContainerRight {\n            display: none;\n            .serviceHeader {\n                display: none;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"serviceContainerMain": `MyYwvFOFpuKKEZrTTodI`,
	"serviceHeader": `Z3wofxnV_fQfGxSSpHeb`,
	"serviceContainerLeft": `KJsUmO9d56FsPcdH5zg3`,
	"headingSMContainer": `RFWAv2Jje79MsztfGqvb`,
	"headingSM": `lWOYZ4lKcfV6dlTkyVVg`,
	"serviceContainerRight": `HGrHWilZnmAKW9M17BfB`,
	"serviceCard": `eUnsrkwmyuVmwL2KMfms`,
	"serviceTitle": `VVltheWFikP7_pdjmNcp`,
	"serviceDescription": `YMBTswNNuhoziprZb9Dz`
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
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.luBJirBC3AbIwQNsEypk .h2c6G6zXieb9PEgg9YMz {
  color: white;
  font-size: 1.5rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .luBJirBC3AbIwQNsEypk {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AACJ;AAAI;EACI,YAAA;EACA,iBAAA;AAER;;AAEA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,WAAA;IACA,SAAA;EACN;AACF","sourcesContent":[".HomePage {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;   \n    .headingSM {\n        color: white;\n        font-size: 1.5rem;\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .HomePage {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        margin: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"headingSM": `h2c6G6zXieb9PEgg9YMz`
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

/***/ "./src/components/Bio/Bio.module.scss":
/*!********************************************!*\
  !*** ./src/components/Bio/Bio.module.scss ***!
  \********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bio_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Bio.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Bio/Bio.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bio_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bio_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bio_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Bio_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/ImgBanner/ImgBanner.module.scss":
/*!********************************************************!*\
  !*** ./src/components/ImgBanner/ImgBanner.module.scss ***!
  \********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ImgBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ImgBanner/ImgBanner.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/IntroContainer/IntroContainer.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/IntroContainer/IntroContainer.module.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./IntroContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/IntroContainer/IntroContainer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/NavMobile/NavMobile.module.scss":
/*!********************************************************!*\
  !*** ./src/components/NavMobile/NavMobile.module.scss ***!
  \********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavMobile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavMobile/NavMobile.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProjectBanner/ProjectBanner.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/ProjectBanner/ProjectBanner.module.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectBanner.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectBanner/ProjectBanner.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectBanner_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProjectCard/ProjectCard.module.scss":
/*!************************************************************!*\
  !*** ./src/components/ProjectCard/ProjectCard.module.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProjectCard.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProjectCard/ProjectCard.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProjectCard_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Projects/Projects.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Projects/Projects.module.scss ***!
  \******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Projects.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Projects/Projects.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Projects_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ServiceContainer/ServiceContainer.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/ServiceContainer/ServiceContainer.module.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ServiceContainer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ServiceContainer/ServiceContainer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=App.ceb80dc921df2fb47b9f69c82bb180fc.js.map