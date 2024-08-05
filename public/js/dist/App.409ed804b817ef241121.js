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
/* harmony import */ var _pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AboutPage/AboutPage */ "./src/pages/AboutPage/AboutPage.js");
/* harmony import */ var _pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/ContactPage/ContactPage */ "./src/pages/ContactPage/ContactPage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");






function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].App
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(_pages_AboutPage_AboutPage__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(_pages_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_3__["default"], null)
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
  }, /*#__PURE__*/React.createElement("h1", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Software", /*#__PURE__*/React.createElement("br", null), "Engineer")), /*#__PURE__*/React.createElement("p", {
    className: _Bio_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].titleDescription
  }, "My role is as dynamic as the code I craft. I'm not just a coder; I'm an architect, a problem-solver, and an innovator.  "));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bio);

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
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].title
  }, "Tyler"), /*#__PURE__*/React.createElement("h3", {
    className: _ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].subTitle
  }, "Pierson"), /*#__PURE__*/React.createElement("div", {
    className: _ImgBanner_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spritesheet
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
/* harmony import */ var _SpriteAnimation_SpriteAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpriteAnimation/SpriteAnimation */ "./src/components/SpriteAnimation/SpriteAnimation.js");
/* harmony import */ var _SpriteAnimation_SpriteAnimationMed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SpriteAnimation/SpriteAnimationMed */ "./src/components/SpriteAnimation/SpriteAnimationMed.js");
/* harmony import */ var _SpriteAnimation_SpriteAnimationSm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SpriteAnimation/SpriteAnimationSm */ "./src/components/SpriteAnimation/SpriteAnimationSm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function IntroContainer() {
  return /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].IntroContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mainContent
  }, /*#__PURE__*/React.createElement("h4", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "Tyler Pierson - Software Engineer"), /*#__PURE__*/React.createElement("h1", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].heading
  }, "Hello! ", /*#__PURE__*/React.createElement("span", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "I'm"), " a", /*#__PURE__*/React.createElement("br", null), "web ", /*#__PURE__*/React.createElement("span", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spanText
  }, "developer"))), /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteAnimation
  }, /*#__PURE__*/React.createElement(_SpriteAnimation_SpriteAnimation__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteAnimationMed
  }, /*#__PURE__*/React.createElement(_SpriteAnimation_SpriteAnimationMed__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/React.createElement("div", {
    className: _IntroContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].SpriteAnimationSm
  }, /*#__PURE__*/React.createElement(_SpriteAnimation_SpriteAnimationSm__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Nav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].image,
    src: "/img/tp-logo.png",
    alt: "Logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "About Me"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    to: "/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItemContainer,
    href: "/documents/resume.docx.pdf",
    download: "Tyler_Pierson_Resume.pdf"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Resume")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItemBottom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, "Resume")))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
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
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Home")), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/about"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "About Me")), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    to: "/contact"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Contact")), /*#__PURE__*/React.createElement("a", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Link,
    href: "/documents/resume.docx.pdf",
    download: "Tyler_Pierson_Resume.pdf"
  }, /*#__PURE__*/React.createElement("li", {
    className: _NavMobile_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].li
  }, "Resume")))));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



function Projects() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Projects
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mobileResponsive
  }, "Mobile Responsive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "/img/push-logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Push Project Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Year: 2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Category: Development, Project Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    target: "_blank",
    to: "https://www.pushmanage.pro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLink,
    src: "/img/link-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "ReactJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "AWS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "EC2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "Cloudfront")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].mobileResponsive
  }, "Mobile Responsive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "/img/todo-list.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Todo List Application"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Year: 2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Category: Task Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    target: "_blank",
    to: "https://d1240helpk124m.cloudfront.net"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLink,
    src: "/img/link-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "Django"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "Python"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "AWS S3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "Cloudfront")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "/img/goose-logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Goose Dev Hub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Year: 2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Category: Developer Tools, Social Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    target: "_blank",
    to: "https://goose.danwheeler.me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLink,
    src: "/img/link-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "ReactJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "ExpressJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "NodeJs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "DigitalOcean")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "/img/marvel-logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "MarvelVerse Comics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Year: 2023"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Category: eCommerce, Comics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    target: "_blank",
    to: "https://marvel.tylerpierson.me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLink,
    src: "/img/link-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "ReactJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "Nginx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "MongoDB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "NodeJS")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectCard
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLogo,
    src: "/img/blog-logo.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectDetails
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Liberty Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Year: 2023"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", null, "Category: Blog, Community"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    target: "_blank",
    to: "https://blog.tylerpierson.me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectLink,
    src: "/img/link-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "ReactJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "Javascript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "HTML5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _Projects_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].devTool
  }, "SCSS")))));
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
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].altServiceHeader
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerLeft
  }, /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Frontend"), /*#__PURE__*/React.createElement("ul", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "JavaScript"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "HTML/CSS"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "SCSS"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "TypeScript"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "React.js"))), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Backend"), /*#__PURE__*/React.createElement("ul", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Node.js"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Express.js"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Django"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Nuxt.js"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "MongoDB"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "MySQL"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Supabase"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Python"))), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSMContainer
  }, /*#__PURE__*/React.createElement("p", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headingSM
  }, "I provide comprehensive web development services, crafting tailored solutions that seamlessly integrate design, branding, and marketing strategies to elevate online presence and drive meaningful engagement."))), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceContainerRight
  }, /*#__PURE__*/React.createElement("h2", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceHeader
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Deployment Tools"), /*#__PURE__*/React.createElement("ul", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "AWS"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Cloudfront"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "EC2"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "S3"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "DigitalOcean"))), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceCard
  }, /*#__PURE__*/React.createElement("h4", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceTitle
  }, "Collaboration Tools"), /*#__PURE__*/React.createElement("ul", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceList
  }, /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Slack"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Discord"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "JIRA"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "Trello"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "GitHub"), /*#__PURE__*/React.createElement("li", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].serviceListItem
  }, "PUSH Project Management")))), /*#__PURE__*/React.createElement("div", {
    className: _ServiceContainer_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].spritesheet
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceContainer);

/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimation.js":
/*!***********************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimation.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpriteAnimation.module.scss */ "./src/components/SpriteAnimation/SpriteAnimation.module.scss");


function SpriteAnimation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spritesheet
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteAnimation);

/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationMed.js":
/*!**************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationMed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpriteAnimationMed.module.scss */ "./src/components/SpriteAnimation/SpriteAnimationMed.module.scss");


function SpriteAnimationMed() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spritesheet
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteAnimationMed);

/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationSm.js":
/*!*************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationSm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpriteAnimationSm.module.scss */ "./src/components/SpriteAnimation/SpriteAnimationSm.module.scss");


function SpriteAnimationSm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].spritesheet
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpriteAnimationSm);

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

/***/ "./src/pages/AboutPage/AboutPage.js":
/*!******************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* harmony import */ var _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutPage.module.scss */ "./src/pages/AboutPage/AboutPage.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");





function AboutPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].AboutPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].textContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].header
  }, "Who I am..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bioContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bio
  }, "Hello! I'm a dedicated ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].highlight
  }, "Web Developer"), " with several years of experience in crafting digital solutions that blend functionality and aesthetics. My journey into the world of technology began after serving five years as a Marine Corps infantryman stationed on the beautiful island of Oahu, Hawaii. This experience taught me the values of discipline, dedication, and excellence, which I carry into my work as a developer.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Eager to expand my knowledge, I earned a Bachelor of Science degree in Interdisciplinary Studies from the University of North Texas and a Master's degree in Education Administration and Human Development from Texas A&M University. Driven by a passion for continuous learning, I recently graduated as Valedictorian from General Assembly's rigorous software engineering course. This program allowed me to refine my skills and gain a deeper understanding of the science behind computer science.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Throughout my development career, I've worked on diverse projects, honing my abilities in both frontend and backend technologies. My expertise includes JavaScript, HTML/CSS, React.js, Node.js, Django, and various other tools and frameworks. At General Assembly, I aimed to not only enhance my technical skills but also to grasp the underlying principles that make great software.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "As a web developer, I strive to create user-centric digital experiences that are both innovative and reliable. I'm committed to growing as a developer and leveraging my background in education to inspire others to pursue their passion for technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    to: "/contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Contact Me Today!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].image,
    src: "/img/headshot.png"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

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
/* harmony import */ var _components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavMobile/NavMobile */ "./src/components/NavMobile/NavMobile.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ContactPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].FormContainer
  }, /*#__PURE__*/React.createElement("h1", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].header
  }, "Contact Me Today!"), /*#__PURE__*/React.createElement("form", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Form,
    action: "https://submit-form.com/9atYbBFL"
  }, /*#__PURE__*/React.createElement("label", {
    for: "name"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].input,
    type: "text",
    id: "name",
    name: "name",
    required: ""
  }), /*#__PURE__*/React.createElement("label", {
    for: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].input,
    type: "email",
    id: "email",
    name: "email",
    required: ""
  }), /*#__PURE__*/React.createElement("label", {
    for: "message"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].message,
    id: "message",
    name: "message",
    required: ""
  }), /*#__PURE__*/React.createElement("button", {
    className: _ContactPage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button,
    type: "submit"
  }, "Send")))));
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
/* harmony import */ var _components_SpriteAnimation_SpriteAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SpriteAnimation/SpriteAnimation */ "./src/components/SpriteAnimation/SpriteAnimation.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");










function HomePage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_components_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].HomePage
  }, /*#__PURE__*/React.createElement(_components_IntroContainer_IntroContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_components_Bio_Bio__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement(_components_ImgBanner_ImgBanner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_components_ServiceContainer_ServiceContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/React.createElement(_components_ProjectBanner_ProjectBanner__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
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
  overflow-x: hidden;
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
  border: none;
  width: 50%;
  height: 4rem;
  transition: 0.3s ease;
}
button:hover {
  cursor: pointer;
  background-color: rgba(120, 236, 211, 0.65);
  color: white;
  transition: 0.3s ease;
}

button:hover {
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,2BAAA;EACA,8BAAA;AACJ;;AAEA;EACI,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;AACJ;;AAEA;EACI,kCAAA;EACA,4BAAA;EACA,gCAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;AACJ;AAAI;EACI,eAAA;EACA,2CAAA;EACA,YAAA;EACA,qBAAA;AAER;;AAEA;EACI,eAAA;AACJ","sourcesContent":[".App {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n}\n\nh1 {\n    font-size: 7vmin;\n    color: var(--heading-color);\n    text-shadow: 1px 1px 2px black;\n}\n\ninput {\n    width: 25vw;\n    height: 3.5rem;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    font-size: 2rem;\n    padding: 1rem;\n    color: var(--input-color);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: 0 0 1rem var(--btn-color);\n}\n\nlabel {\n    font-size: 2.3rem;\n    padding: 1rem;\n}\n\nbutton {\n    background-color: var(--btn-color);\n    border-top-left-radius: 1rem;\n    border-bottom-right-radius: 1rem;\n    border: none;\n    width: 50%;\n    height: 4rem;\n    transition: .3s ease;\n    &:hover {\n        cursor: pointer;\n        background-color: rgba(120, 236, 211, 0.65);\n        color: white;\n        transition: .3s ease;\n    }\n}\n\nbutton:hover {\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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
  margin: 0rem;
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
  font-size: 12rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
}
.jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0 {
  color: grey;
  padding-left: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 4rem;
  transition: 1s ease;
}
.jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0:hover {
  color: var(--bg-color);
  transition: 1s ease;
}

@media (max-width: 1200px) {
  .jinRZ7_sItrL6xbGnzrK {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 .E2Pix40MW7mYfxJp4xsz {
    font-size: 9rem;
  }
  .jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0 {
    font-size: 2.5rem;
  }
}
@media (max-width: 800px) {
  .jinRZ7_sItrL6xbGnzrK {
    height: 40vh;
    padding: 0 0 1rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 {
    height: 100%;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 .E2Pix40MW7mYfxJp4xsz {
    font-size: 8rem;
  }
  .jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0 {
    font-size: 2rem;
  }
}
@media (max-width: 500px) {
  .jinRZ7_sItrL6xbGnzrK {
    height: 30vh;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 {
    text-align: center;
  }
  .jinRZ7_sItrL6xbGnzrK .RhflQIR1aiRzE7JYfRJ4 .E2Pix40MW7mYfxJp4xsz {
    display: none;
  }
  .jinRZ7_sItrL6xbGnzrK .WjVjMLdQXGGAB9HV83S0 {
    font-size: 2.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Bio/Bio.module.scss"],"names":[],"mappings":"AAAA,oEAAA;AACA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;EACA,sCAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AAAI;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,uBAAA;AAER;AADQ;EACI,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,yBAAA;AAGZ;AAAI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;AAER;AADQ;EACI,sBAAA;EACA,mBAAA;AAGZ;;AACA;EACI;IACI,YAAA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;EAEN;EADM;IACI,YAAA;IACA,uBAAA;IACA,mBAAA;EAGV;EAFU;IACI,eAAA;EAId;EADM;IACI,iBAAA;EAGV;AACF;AACA;EACI;IACI,YAAA;IACA,mBAAA;IACA,sBAAA;IACA,mBAAA;IACA,uBAAA;EACN;EAAM;IACI,YAAA;EAEV;EADU;IACI,eAAA;EAGd;EAAM;IACI,eAAA;EAEV;AACF;AAEA;EACI;IACI,YAAA;EAAN;EACM;IACI,kBAAA;EACV;EAAU;IACI,aAAA;EAEd;EACM;IACI,iBAAA;EACV;AACF","sourcesContent":["/* Small devices (portrait tablets and large phones, 600px and up) */\n.Bio {\n    height: 60vh;\n    width: 100%;\n    margin: 0rem;\n    padding: 3rem 0 10rem;\n    display: flex;\n    background-color: var(--heading-color);\n    justify-content: center;\n    align-items: center;\n    .contentContainer {\n        height: 60vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        align-items: flex-start;\n        .title {\n            font-size: 12rem;\n            font-weight: 600;\n            color: white;\n            text-transform: uppercase;\n        }\n    }\n    .titleDescription {\n        color: grey;\n        padding-left: 3rem;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        font-size: 4rem;\n        transition: 1s ease;\n        &:hover {\n            color: var(--bg-color);\n            transition: 1s ease;\n        }\n    }\n}\n@media (max-width: 1200px) {\n    .Bio {\n        height: 40vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        .contentContainer {\n            height: 100%;\n            justify-content: center;\n            align-items: center;\n            .title {\n                font-size: 9rem;\n            }\n        }\n        .titleDescription {\n            font-size: 2.5rem;\n        }\n    }\n}\n\n@media (max-width: 800px) {\n    .Bio {\n        height: 40vh;\n        padding: 0 0 1rem 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        .contentContainer {\n            height: 100%;\n            .title {\n                font-size: 8rem;\n            }\n        }\n        .titleDescription {\n            font-size: 2rem;\n        }\n    }\n}\n\n@media (max-width: 500px) {\n    .Bio {\n        height: 30vh;\n        .contentContainer {\n            text-align: center;\n            .title {\n                display: none;\n            }\n        }\n        .titleDescription {\n            font-size: 2.5rem;\n        }\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Bio": `jinRZ7_sItrL6xbGnzrK`,
	"contentContainer": `RhflQIR1aiRzE7JYfRJ4`,
	"title": `E2Pix40MW7mYfxJp4xsz`,
	"titleDescription": `WjVjMLdQXGGAB9HV83S0`
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../software_projects/class-website/public/img/cap-walking-spritesheet.png */ "../software_projects/class-website/public/img/cap-walking-spritesheet.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.G83ax1dzQtHeJMz2gPgQ {
  background-color: white;
  height: 60vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}
.G83ax1dzQtHeJMz2gPgQ .v8f0UU9yy81RrgIJteBq {
  position: absolute;
  right: 5rem;
  top: -5rem;
  font-size: 30rem;
}
.G83ax1dzQtHeJMz2gPgQ .aUU5lQ5l_IMO_4E0H7G2 {
  color: rgba(128, 128, 128, 0.734);
  position: absolute;
  right: 5rem;
  top: 17rem;
  font-size: 10rem;
  line-height: -5rem;
}
.G83ax1dzQtHeJMz2gPgQ .DD0XVNQoMp3iFzA7FfKx {
  width: 25rem;
  height: 27rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: 80rem 80rem;
  animation: PZWFnxk_zoUKRirDaXSL 1s steps(1) infinite, AdtXDnA2AZaSmv_eWJP5 10s linear infinite;
  position: absolute;
  top: 72%;
  transform: translateY(-50%);
}
@keyframes PZWFnxk_zoUKRirDaXSL {
  0% {
    background-position: -5rem -5rem;
  }
  25% {
    background-position: -45rem -5rem;
  }
  50% {
    background-position: -5rem -45rem;
  }
  75% {
    background-position: -45rem -5rem;
  }
  100% {
    background-position: -5rem -5rem;
  }
}
@keyframes AdtXDnA2AZaSmv_eWJP5 {
  0% {
    left: -20%;
  }
  100% {
    left: 100%;
  }
}

@media (max-width: 1000px) {
  .G83ax1dzQtHeJMz2gPgQ {
    height: 50vh;
  }
  .G83ax1dzQtHeJMz2gPgQ .v8f0UU9yy81RrgIJteBq {
    font-size: 25rem;
  }
  .G83ax1dzQtHeJMz2gPgQ .aUU5lQ5l_IMO_4E0H7G2 {
    right: 2rem;
    top: 7rem;
    font-size: 15rem;
  }
  .G83ax1dzQtHeJMz2gPgQ .DD0XVNQoMp3iFzA7FfKx {
    top: 52%;
  }
}
@media (max-width: 800px) {
  .G83ax1dzQtHeJMz2gPgQ {
    height: 45vh;
  }
  .G83ax1dzQtHeJMz2gPgQ .v8f0UU9yy81RrgIJteBq {
    right: 2rem;
    top: -2rem;
    font-size: 18rem;
  }
  .G83ax1dzQtHeJMz2gPgQ .aUU5lQ5l_IMO_4E0H7G2 {
    right: 2rem;
    top: 9rem;
    font-size: 10rem;
  }
  .G83ax1dzQtHeJMz2gPgQ .DD0XVNQoMp3iFzA7FfKx {
    top: 52%;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 500px) {
  .G83ax1dzQtHeJMz2gPgQ {
    height: 35vh;
  }
  .G83ax1dzQtHeJMz2gPgQ .v8f0UU9yy81RrgIJteBq {
    right: 2rem;
    top: -2rem;
    font-size: 12rem;
  }
  .G83ax1dzQtHeJMz2gPgQ .aUU5lQ5l_IMO_4E0H7G2 {
    right: 2rem;
    top: 6rem;
    font-size: 7rem;
  }
  .G83ax1dzQtHeJMz2gPgQ .DD0XVNQoMp3iFzA7FfKx {
    top: 52%;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ImgBanner/ImgBanner.module.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AAAI;EACI,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;AAER;AAAI;EACI,iCAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;AAER;AAAI;EACI,YAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,4BAAA;EACA,8FAAA;EACA,kBAAA;EACA,QAAA;EACA,2BAAA;AAER;AACI;EACI;IAAK,gCAAA;EAEX;EADM;IAAM,iCAAA;EAIZ;EAHM;IAAM,iCAAA;EAMZ;EALM;IAAM,iCAAA;EAQZ;EAPM;IAAO,gCAAA;EAUb;AACF;AARI;EACI;IAAK,UAAA;EAWX;EAVM;IAAO,UAAA;EAab;AACF;;AAVA;EACI;IACI,YAAA;EAaN;EAZM;IACI,gBAAA;EAcV;EAZM;IACI,WAAA;IACA,SAAA;IACA,gBAAA;EAcV;EAZM;IACI,QAAA;EAcV;AACF;AAVA;EACI;IACI,YAAA;EAYN;EAXM;IACI,WAAA;IACA,UAAA;IACA,gBAAA;EAaV;EAXM;IACI,WAAA;IACA,SAAA;IACA,gBAAA;EAaV;EAXM;IACI,QAAA;EAaV;AACF;AATA,oEAAA;AACA;EACI;IACI,YAAA;EAWN;EAVM;IACI,WAAA;IACA,UAAA;IACA,gBAAA;EAYV;EAVM;IACI,WAAA;IACA,SAAA;IACA,eAAA;EAYV;EAVM;IACI,QAAA;EAYV;AACF","sourcesContent":[".imgBannerContainer {\n    background-color: white;\n    height: 60vh;\n    width: 100%;\n    overflow-x: hidden;\n    position: relative;\n    .title {\n        position: absolute;\n        right: 5rem;\n        top: -5rem;\n        font-size: 30rem;\n    }\n    .subTitle {\n        color: rgba(128, 128, 128, 0.734);\n        position: absolute;\n        right: 5rem;\n        top: 17rem;\n        font-size: 10rem;\n        line-height: -5rem;\n    }\n    .spritesheet {\n        width: 25rem;\n        height: 27rem;\n        background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/cap-walking-spritesheet.png');\n        background-repeat: no-repeat;\n        background-size: 80rem 80rem;\n        animation: play 1s steps(1) infinite, slide 10s linear infinite;\n        position: absolute;\n        top: 72%;\n        transform: translateY(-50%);\n    }\n     \n    @keyframes play {\n        0% { background-position: -5rem -5rem; }\n        25% { background-position: -45rem -5rem; }\n        50% { background-position: -5rem -45rem; }\n        75% { background-position: -45rem -5rem; }\n        100% { background-position: -5rem -5rem; }\n    }\n\n    @keyframes slide {\n        0% { left: -20%; }\n        100% { left: 100%; }\n    }\n}\n\n@media (max-width: 1000px) {\n    .imgBannerContainer {\n        height: 50vh;\n        .title {\n            font-size: 25rem;\n        }\n        .subTitle {\n            right: 2rem;\n            top: 7rem;\n            font-size: 15rem;\n        }\n        .spritesheet {\n            top: 52%;\n        }\n    }\n}\n\n@media (max-width: 800px) {\n    .imgBannerContainer {\n        height: 45vh;\n        .title {\n            right: 2rem;\n            top: -2rem;\n            font-size: 18rem;\n        }\n        .subTitle {\n            right: 2rem;\n            top: 9rem;\n            font-size: 10rem;\n        }\n        .spritesheet {\n            top: 52%;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 500px) {\n    .imgBannerContainer {\n        height: 35vh;\n        .title {\n            right: 2rem;\n            top: -2rem;\n            font-size: 12rem;\n        }\n        .subTitle {\n            right: 2rem;\n            top: 6rem;\n            font-size: 7rem;\n        }\n        .spritesheet {\n            top: 52%;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imgBannerContainer": `G83ax1dzQtHeJMz2gPgQ`,
	"title": `v8f0UU9yy81RrgIJteBq`,
	"subTitle": `aUU5lQ5l_IMO_4E0H7G2`,
	"spritesheet": `DD0XVNQoMp3iFzA7FfKx`,
	"play": `PZWFnxk_zoUKRirDaXSL`,
	"slide": `AdtXDnA2AZaSmv_eWJP5`
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
  height: 100vh;
  width: 100%;
  position: relative;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
  width: 70%;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
  margin: 0 0 0 5rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
  color: white;
  font-size: 11rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
  font-size: 11rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa {
  font-weight: 100;
  color: var(--heading-color);
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
  color: black;
  font-size: 13rem;
}
.WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
  margin: 8rem 1rem;
  padding: 0.5rem;
}
.WXIspfxBzGyfPOvOt6Wd .kx5nScP14AcQB9rbiQQq {
  font-size: 3rem;
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

.lr2oKtT4bainQOVQRfG5 {
  position: relative;
}
.lr2oKtT4bainQOVQRfG5 ._R8T8mKkc72Vbeqn1GmU {
  display: none;
}
.lr2oKtT4bainQOVQRfG5 .w6CsT__JoJ2HavmmRZqW {
  display: none;
}

/* Medium devices (landscape tablets, 800px and up) */
@media only screen and (max-width: 1220px) {
  .WXIspfxBzGyfPOvOt6Wd {
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
    width: 100%;
    height: 100%;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    margin: 0 0 0 5rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
    font-size: 9rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 9rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 9rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
    margin: 2rem 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .kx5nScP14AcQB9rbiQQq {
    font-size: 2rem;
    width: 60vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .BI0GYOC1YbWy9DGIlJZK {
    width: 35vw;
    top: 4rem;
    right: 5rem;
  }
  .lr2oKtT4bainQOVQRfG5 {
    width: 100%;
    height: 100%;
  }
  .lr2oKtT4bainQOVQRfG5 .E7mE3HIiQ6hdtDlotDkx {
    display: none;
  }
  .lr2oKtT4bainQOVQRfG5 ._R8T8mKkc72Vbeqn1GmU {
    display: block;
  }
  .lr2oKtT4bainQOVQRfG5 .w6CsT__JoJ2HavmmRZqW {
    display: none;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 800px) {
  .WXIspfxBzGyfPOvOt6Wd {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
    margin-bottom: -15rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
    margin: 4rem 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    margin: 0 0 0 2rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
    font-size: 8rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 8rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 8rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    font-size: 1.5rem;
    width: 70vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .BI0GYOC1YbWy9DGIlJZK {
    width: 40vw;
    top: 2rem;
    right: 2rem;
  }
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  .WXIspfxBzGyfPOvOt6Wd {
    height: 100vh;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo {
    margin-bottom: -25rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .RVzjtWAadvbxIwf_Vy5a {
    margin: 2rem 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    margin: 0 0 0 1rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk {
    font-size: 6rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .OVONZ52MMoJ8r5yLzNJa, .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 6rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .gSKaLjsbfnd93wd98bJk .SkHD1m3e3CuLGPPqZYxV {
    font-size: 6rem;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .kx5nScP14AcQB9rbiQQq {
    font-size: 1rem;
    width: 80vw;
  }
  .WXIspfxBzGyfPOvOt6Wd .n4NBksae5XNvymP02uRo .BI0GYOC1YbWy9DGIlJZK {
    width: 50vw;
    top: 1rem;
    right: 1rem;
  }
  .lr2oKtT4bainQOVQRfG5 {
    width: 100%;
    height: 100%;
  }
  .lr2oKtT4bainQOVQRfG5 .E7mE3HIiQ6hdtDlotDkx {
    display: none;
  }
  .lr2oKtT4bainQOVQRfG5 ._R8T8mKkc72Vbeqn1GmU {
    display: block;
  }
  .lr2oKtT4bainQOVQRfG5 .w6CsT__JoJ2HavmmRZqW {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/IntroContainer/IntroContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,8BAAA;AACJ;AAAI;EACI,UAAA;AAER;AADQ;EACI,kBAAA;AAGZ;AADQ;EACI,YAAA;EACA,gBAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAFY;EACI,gBAAA;EACA,2BAAA;AAIhB;AAFY;EACI,YAAA;EACA,gBAAA;AAIhB;AADI;EACI,iBAAA;EACA,eAAA;AAGR;AACI;EACI,eAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;AACR;AAEI;EACI,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,WAAA;EACA,uBAAA;AAAR;;AAGA;EACI,kBAAA;AAAJ;AAEI;EACI,aAAA;AAAR;AAEI;EACI,aAAA;AAAR;;AAIA,qDAAA;AACA;EACI;IACI,YAAA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;EADN;EAEM;IACI,WAAA;IACA,YAAA;EAAV;EACU;IACI,kBAAA;EACd;EACU;IACI,eAAA;EACd;EAAc;IACI,eAAA;EAElB;EAAc;IACI,eAAA;EAElB;EACU;IACI,iBAAA;EACd;EAEM;IACI,eAAA;IACA,WAAA;EAAV;EAEM;IACI,WAAA;IACA,SAAA;IACA,WAAA;EAAV;EAGE;IACI,WAAA;IACA,YAAA;EADN;EAEM;IACI,aAAA;EAAV;EAEM;IACI,cAAA;EAAV;EAEM;IACI,aAAA;EAAV;AACF;AAIA,oEAAA;AACA;EACI;IACI,aAAA;IACA,sBAAA;IACA,aAAA;EAFN;EAGM;IACI,qBAAA;EADV;EAEU;IACI,iBAAA;EAAd;EAEU;IACI,kBAAA;EAAd;EAEU;IACI,eAAA;EAAd;EACc;IACI,eAAA;EAClB;EACc;IACI,eAAA;EAClB;EAEU;IACI,iBAAA;IACA,WAAA;EAAd;EAEU;IACI,WAAA;IACA,SAAA;IACA,WAAA;EAAd;AACF;AAKA,iDAAA;AACA;EACI;IACI,aAAA;EAHN;EAIM;IACI,qBAAA;EAFV;EAGU;IACI,iBAAA;EADd;EAGU;IACI,kBAAA;EADd;EAGU;IACI,eAAA;EADd;EAEc;IACI,eAAA;EAAlB;EAEc;IACI,eAAA;EAAlB;EAGU;IACI,eAAA;IACA,WAAA;EADd;EAGU;IACI,WAAA;IACA,SAAA;IACA,WAAA;EADd;EAKE;IACI,WAAA;IACA,YAAA;EAHN;EAIM;IACI,aAAA;EAFV;EAIM;IACI,cAAA;EAFV;EAIM;IACI,aAAA;EAFV;AACF","sourcesContent":[".IntroContainer {\n    height: 100vh;\n    width: 100%;\n    position: relative;\n    text-transform: uppercase;\n    display: flex;\n    justify-content: space-between;\n    .mainContent {\n        width: 70%;\n        .heading, .subHeading {\n            margin: 0 0 0 5rem;\n        }\n        .heading {\n            color: white;\n            font-size: 11rem;\n            .spanText, .spanPlus {\n                font-size: 11rem;\n            }\n            .spanText {\n                font-weight: 100;\n                color: var(--heading-color);\n            }\n            .spanPlus {\n                color: black;\n                font-size: 13rem;\n            }\n    }\n    .headingSM {\n        margin: 8rem 1rem;\n        padding: .5rem;\n    }\n    }\n    \n    .subHeading {\n        font-size: 3rem;\n        color: grey;\n        margin-top: 5rem;\n        width: 50vw;\n    }\n    \n    .image {\n        background-color: black;\n        width: 30vw;\n        position: absolute;\n        top: 4rem;\n        right: 10rem;\n        z-index: -1;\n        transform: rotate(7deg);\n    }\n}\n.SpriteContainer {\n    position: relative;\n    \n    .SpriteAnimationMed {\n        display: none;\n    }\n    .SpriteAnimationSm {\n        display: none;\n    }  \n}\n\n/* Medium devices (landscape tablets, 800px and up) */\n@media only screen and (max-width: 1220px) {\n    .IntroContainer {\n        height: 70vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        .mainContent {\n            width: 100%;\n            height: 100%;\n            .heading, .subHeading {\n                margin: 0 0 0 5rem;\n            }\n            .heading {\n                font-size: 9rem;\n                .spanText, .spanPlus {\n                    font-size: 9rem;\n                }\n                .spanPlus {\n                    font-size: 9rem;\n                }\n            }\n            .headingSM {\n                margin: 2rem 1rem;\n            }\n        }\n        .subHeading {\n            font-size: 2rem;\n            width: 60vw;\n        }\n        .image {\n            width: 35vw;\n            top: 4rem;\n            right: 5rem;\n        }\n    }\n    .SpriteContainer {\n        width: 100%;\n        height: 100%;\n        .SpriteAnimation {\n            display: none;\n        }\n        .SpriteAnimationMed {\n            display: block;\n        }\n        .SpriteAnimationSm {\n            display: none;\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 800px) {\n    .IntroContainer {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n        .mainContent {\n            margin-bottom: -15rem;\n            .headingSM {\n                margin: 4rem 1rem;\n            }\n            .heading, .subHeading {\n                margin: 0 0 0 2rem;\n            }\n            .heading {\n                font-size: 8rem;\n                .spanText, .spanPlus {\n                    font-size: 8rem;\n                }\n                .spanPlus {\n                    font-size: 8rem;\n                }\n            }\n            .subHeading {\n                font-size: 1.5rem;\n                width: 70vw;\n            }\n            .image {\n                width: 40vw;\n                top: 2rem;\n                right: 2rem;\n            }\n        }\n    }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 500px) {\n    .IntroContainer {\n        height: 100vh;\n        .mainContent {\n            margin-bottom: -25rem;\n            .headingSM {\n                margin: 2rem 1rem;\n            }\n            .heading, .subHeading {\n                margin: 0 0 0 1rem;\n            }\n            .heading {\n                font-size: 6rem;\n                .spanText, .spanPlus {\n                    font-size: 6rem;\n                }\n                .spanPlus {\n                    font-size: 6rem;\n                }\n            }\n            .subHeading {\n                font-size: 1rem;\n                width: 80vw;\n            }\n            .image {\n                width: 50vw;\n                top: 1rem;\n                right: 1rem;\n            }\n        }\n    }\n    .SpriteContainer {\n        width: 100%;\n        height: 100%;\n        .SpriteAnimation {\n            display: none;\n        }\n        .SpriteAnimationMed {\n            display: block;\n        }\n        .SpriteAnimationSm {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"IntroContainer": `WXIspfxBzGyfPOvOt6Wd`,
	"mainContent": `n4NBksae5XNvymP02uRo`,
	"heading": `gSKaLjsbfnd93wd98bJk`,
	"subHeading": `kx5nScP14AcQB9rbiQQq`,
	"spanText": `OVONZ52MMoJ8r5yLzNJa`,
	"spanPlus": `SkHD1m3e3CuLGPPqZYxV`,
	"headingSM": `RVzjtWAadvbxIwf_Vy5a`,
	"image": `BI0GYOC1YbWy9DGIlJZK`,
	"SpriteContainer": `lr2oKtT4bainQOVQRfG5`,
	"SpriteAnimationMed": `_R8T8mKkc72Vbeqn1GmU`,
	"SpriteAnimationSm": `w6CsT__JoJ2HavmmRZqW`,
	"SpriteAnimation": `E7mE3HIiQ6hdtDlotDkx`
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
    right: 3rem;
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
    right: 3rem;
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
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .vWBFW9dgoy2HsuBJ62zC {
    text-decoration: none;
    color: black;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4 {
    text-decoration: none;
    list-style-type: none;
    font-size: 4rem;
    transition: 0.3s ease;
  }
  .DvGKNPsuqDyxZDn7CWSQ .LAxFiZWZmQlaaqJAMk4J .c6nVZZUwtb5ZjSC5zOF4:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s ease;
    color: white;
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
}`, "",{"version":3,"sources":["webpack://./src/components/NavMobile/NavMobile.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA,oEAAA;AACA;EACI;IACI,cAAA;IACA,YAAA;IACA,iBAAA;IACA,aAAA;EACN;EAAM;IACI,aAAA;IACA,WAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,eAAA;IACA,SAAA;IACA,WAAA;EAEV;EAAU;IACI,qBAAA;IACA,eAAA;IACA,kBAAA;IACA,wBAAA;EAEd;EACU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EACd;EAEU;IACI,2CAAA;EAAd;EAGU;IACI,4CAAA;EADd;EAIU;IACI,WAAA;IACA,YAAA;IACA,wBAAA;EAFd;EAKU;IACI,6CAAA;EAHd;EAMU;IACI,4CAAA;EAJd;EAOU;IACI,WAAA;IACA,YAAA;IACA,yBAAA;EALd;EAQU;IACI,2CAAA;EANd;EASU;IACI,4CAAA;EAPd;EAYE;IACI,eAAA;IACA,cAAA;IACA,SAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,0CAAA;IACA,gBAAA;IACA,mCAAA;EAVN;EAaE;IACI,aAAA;EAXN;EAcE;IACI,WAAA;IACA,YAAA;IACA,MAAA;IACA,QAAA;IACA,iBAAA;IACA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;EAZN;EAaM;IACI,cAAA;IACA,qBAAA;EAXV;EAYU;IACI,qBAAA;IACA,YAAA;EAVd;EAYU;IACI,qBAAA;IACA,qBAAA;IACA,eAAA;IACA,qBAAA;EAVd;EAWc;IACI,eAAA;IACA,oCAAA;IACA,qBAAA;IACA,YAAA;EATlB;EAeE;IACI,WAAA;IACA,YAAA;EAbN;AACF;AAgBA;EACI;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAdN;EAiBE;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAfN;AACF;AAkBA;EACI;IACI,yBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAhBN;EAmBE;IACI,wBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAjBN;AACF;AAoBA;EACI;IACI,UAAA;EAlBN;EAqBE;IACI,UAAA;EAnBN;AACF;AAsBA;EACI;IACI,UAAA;EApBN;EAuBE;IACI,UAAA;EArBN;AACF;AAwBA;EACI;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAtBN;EAyBE;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAvBN;AACF;AA0BA;EACI;IACI,wBAAA;IACA,YAAA;IACA,YAAA;IACA,eAAA;EAxBN;EA2BE;IACI,yBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAzBN;AACF","sourcesContent":[".NavMobile {\n    display: none;\n}\n\n.NavContainer {\n    display: none;\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .NavMobile {\n        display: block;\n        color: white;\n        text-align: right;\n        padding: 2rem;\n        .NavBtn {\n            z-index: 2000;\n            width: 5rem;\n            height: 5rem;\n            border: none;\n            border-radius: 100%;\n            position: fixed;\n            top: 2rem;\n            right: 3rem;\n\n            span {\n                display: inline-block;\n                font-size: 3rem;\n                position: absolute;\n                transform-origin: center;\n            }\n\n            .NavBtnTop {\n                top: .3rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .rotateTop {\n                animation: rotateTop 5s forwards;\n            }\n\n            .revertTop {\n                animation: revertTop 5s backwards;\n            }\n\n            .NavBtnMid {\n                top: .9rem;\n                left: 2.4rem;\n                transform: rotate(90deg);\n            }\n\n            .fadeOut {\n                animation: fadeOut 1.5s forwards;\n            }\n\n            .fadeIn {\n                animation: fadeIn 5s backwards;\n            }\n            \n            .NavBtnBottom {\n                top: 1.3rem;\n                left: 1.8rem;\n                transform: rotate(-90deg);\n            }\n\n            .rotateBottom {\n                animation: rotateBottom 5s forwards;\n            }\n\n            .revertBottom {\n                animation: revertBottom 5s backwards;\n            }\n        }\n    }\n\n    .NavContainer {\n        position: fixed;\n        display: block;\n        top: 2rem;\n        right: 3rem;\n        width: 5rem;\n        height: 5rem;\n        border-radius: 100%;\n        border: none;\n        z-index: 1000;\n        background-color: rgba(100, 237, 207, .9);;\n        overflow: hidden;\n        transition: width 0.3s, height 0.3s; \n    }\n\n    .ul {\n        display: none;\n    }\n\n    .expandContainer {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        right: 0;\n        border-radius: 0%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        .ul {\n            display: block;\n            text-decoration: none;\n            .Link {\n                text-decoration: none;\n                color: black;\n            }\n            .li {\n                text-decoration: none;\n                list-style-type: none;\n                font-size: 4rem;\n                transition: .3s ease;\n                &:hover {\n                    cursor: pointer;\n                    background-color: rgba(0, 0, 0, .3);\n                    transition: .3s ease;\n                    color: white;\n                }\n            }\n        }\n    }\n\n    .collapseContainer {\n        width: 5rem;\n        height: 5rem;\n    }\n}\n\n@keyframes rotateTop {\n    from {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertTop {\n    from {\n        transform: rotate(-50deg);\n        top: -.2rem;\n        left: 1.8rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(90deg);\n        top: .3rem;\n        left: 2.4rem;\n        font-size: 3rem;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes rotateBottom {\n    from {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n  \n    to {\n        transform: rotate(45deg);\n        top: -.1rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n}\n\n@keyframes revertBottom {\n    from {\n        transform: rotate(45deg);\n        top: -.2rem;\n        left: 2.2rem;\n        font-size: 4rem;\n    }\n\n    to {\n        transform: rotate(-90deg);\n        top: 1.3rem;\n        left: 1.8rem;\n        font-size: 3rem;\n    }\n}\n"],"sourceRoot":""}]);
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
	"Link": `vWBFW9dgoy2HsuBJ62zC`,
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
  padding: 5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw {
  position: relative;
  height: 40rem;
  width: 45%;
  border: 0.3rem solid var(--heading-color);
  background-color: rgba(100, 237, 207, 0.075);
  margin-bottom: 2.5rem;
  padding: 2rem;
  border-radius: 3rem;
  transition: 0.3s ease;
  color: grey;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .Hp1hWJlJKd0p9JJXSHyv {
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
  text-align: center;
  background-color: var(--heading-color);
  color: grey;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  width: 18rem;
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
  text-align: center;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .LftQarex9ZU94M4Rp2R8 h4 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1rem;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .JBmT1y_4kLIh1wWu5dLQ {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2.7rem;
  filter: invert(0.5);
  transition: 0.3s ease;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .JBmT1y_4kLIh1wWu5dLQ:hover {
  transition: 0.3s ease;
  filter: invert(1);
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .ogICHb3Gi5NTwOdsSCrZ {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .ogICHb3Gi5NTwOdsSCrZ .eSB43wprQiO04oAAukMw {
  background-color: var(--heading-color);
  color: grey;
  padding: 0.5rem 1rem;
  border-radius: 30px;
}
.HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw:hover {
  transition: 0.3s ease;
  background-color: rgb(45, 51, 50);
  color: var(--heading-color);
}

@media (max-width: 1000px) {
  .HvU7kbcyjp3pvz6lM1wq {
    flex-direction: column;
    align-items: center;
  }
  .HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw {
    width: 90%;
  }
}
@media (max-width: 550px) {
  .HvU7kbcyjp3pvz6lM1wq .W7OGJxXSakrTBBtyDJWw .ogICHb3Gi5NTwOdsSCrZ {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/Projects/Projects.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,6BAAA;EACA,eAAA;AACJ;AAAI;EACI,kBAAA;EACA,aAAA;EACA,UAAA;EACA,yCAAA;EACA,4CAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AAER;AADQ;EACI,kBAAA;EACA,MAAA;EACA,UAAA;EACA,+BAAA;EACA,kBAAA;EACA,sCAAA;EACA,WAAA;EACA,oBAAA;EACA,mBAAA;EACA,YAAA;AAGZ;AADQ;EACI,WAAA;EACA,WAAA;EACA,uBAAA;EACA,yCAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAGZ;AAFY;EACI,UAAA;AAIhB;AADQ;EACI,kBAAA;AAGZ;AAFY;EACI,iBAAA;EACA,iBAAA;EACA,gBAAA;AAIhB;AADQ;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,qBAAA;AAGZ;AAFY;EACI,qBAAA;EACA,iBAAA;AAIhB;AADQ;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,gBAAA;AAGZ;AAFY;EACI,sCAAA;EACA,WAAA;EACA,oBAAA;EACA,mBAAA;AAIhB;AADQ;EACI,qBAAA;EACA,iCAAA;EACA,2BAAA;AAGZ;;AAEA;EACI;IACI,sBAAA;IACA,mBAAA;EACN;EAAM;IACI,UAAA;EAEV;AACF;AAEA;EAGY;IACI,aAAA;EAFd;AACF","sourcesContent":[".Projects {\n    padding: 5rem;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    .ProjectCard {\n        position: relative;\n        height: 40rem;\n        width: 45%;\n        border: .3rem solid var(--heading-color);\n        background-color: rgba(100, 237, 207, 0.075);\n        margin-bottom: 2.5rem;\n        padding: 2rem;\n        border-radius: 3rem;\n        transition: .3s ease;\n        color: grey;\n        .mobileResponsive {\n            position: absolute;\n            top: 0;\n            right: 50%;\n            transform: translate(50%, -50%);\n            text-align: center;\n            background-color: var(--heading-color);\n            color: grey;\n            padding: .5rem 1rem;\n            border-radius: 30px;\n            width: 18rem;\n        }\n        .imgContainer {\n            width: 100%;\n            height: 80%;\n            background-color: black;\n            border: .1rem solid var(--heading-color);\n            border-radius: 3rem;\n            overflow: hidden;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            .ProjectLogo {\n                width: 90%;\n            }\n        }\n        .ProjectDetails {\n            text-align: center;\n            h4 {\n                font-size: 1.3rem;\n                font-weight: bold;\n                margin-top: 1rem;\n            }\n        }\n        .ProjectLink {\n            position: absolute;\n            top: .5rem;\n            right: .5rem;\n            width: 2.7rem;\n            filter: invert(.5);\n            transition: .3s ease;\n            &:hover {\n                transition: .3s ease;\n                filter: invert(1);\n            }\n        }\n        .devContainer {\n            display: flex;\n            justify-content: space-evenly;\n            align-items: center;\n            margin-top: 1rem;\n            .devTool {\n                background-color: var(--heading-color);\n                color: grey;\n                padding: .5rem 1rem;\n                border-radius: 30px;\n            }\n        }\n        &:hover {\n            transition: .3s ease;\n            background-color: rgb(45, 51, 50);\n            color: var(--heading-color);\n        }\n    }\n}\n\n@media (max-width: 1000px) {\n    .Projects {\n        flex-direction: column;\n        align-items: center;\n        .ProjectCard {\n            width: 90%;\n        }\n    }\n}\n\n@media (max-width: 550px) {\n    .Projects {\n        .ProjectCard {\n            .devContainer {\n                display: none;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Projects": `HvU7kbcyjp3pvz6lM1wq`,
	"ProjectCard": `W7OGJxXSakrTBBtyDJWw`,
	"mobileResponsive": `Hp1hWJlJKd0p9JJXSHyv`,
	"imgContainer": `YPjXKbnPoV4MOlYZ2OJJ`,
	"ProjectLogo": `vJjKKPhkRkFiPoWZEcfn`,
	"ProjectDetails": `LftQarex9ZU94M4Rp2R8`,
	"ProjectLink": `JBmT1y_4kLIh1wWu5dLQ`,
	"devContainer": `ogICHb3Gi5NTwOdsSCrZ`,
	"devTool": `eSB43wprQiO04oAAukMw`
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../software_projects/class-website/public/img/hulk-sprite.png */ "../software_projects/class-website/public/img/hulk-sprite.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.MyYwvFOFpuKKEZrTTodI {
  width: 75%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.MyYwvFOFpuKKEZrTTodI .kNqOnLPofAbe3CMaovAW {
  display: none;
}
.MyYwvFOFpuKKEZrTTodI .Z3wofxnV_fQfGxSSpHeb {
  font-size: 8.5rem;
  font-weight: 600;
  color: var(--btn-color);
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
  padding: 1.5rem;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  transition: 0.4s ease;
}
.MyYwvFOFpuKKEZrTTodI .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
  margin: 1rem;
  font-size: 2rem;
  color: white;
}
.MyYwvFOFpuKKEZrTTodI .eUnsrkwmyuVmwL2KMfms .n0lXaaymao2zQbZIa8gs .Ma8eZdshCejEner2km_9 {
  list-style-type: none;
  font-size: 1.3rem;
  color: rgb(183, 183, 183);
  margin: 0 2rem;
  line-height: 2rem;
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
.MyYwvFOFpuKKEZrTTodI .l57oEo1s2ddd0CIEkE3N {
  width: 35.2rem;
  height: 35.2rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: 28160px 352px;
  background-position: 0rem 0rem;
  position: absolute;
  bottom: -1rem;
  right: -15rem;
  animation: JoL9nFGQIOW8Ow7UaPbE 15s steps(80) infinite;
}
@keyframes JoL9nFGQIOW8Ow7UaPbE {
  0% {
    background-position: 0rem 0rem;
  }
  100% {
    background-position: -2816rem 0rem;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1200px) {
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    font-size: 1.5rem;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    font-size: 1.5rem;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .Z3wofxnV_fQfGxSSpHeb {
    font-size: 6rem;
  }
}
@media (max-width: 1100px) {
  .MyYwvFOFpuKKEZrTTodI .l57oEo1s2ddd0CIEkE3N {
    right: -20rem;
  }
}
@media only screen and (max-width: 1000px) {
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    font-size: 1.5rem;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    font-size: 1.5rem;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .Z3wofxnV_fQfGxSSpHeb {
    font-size: 4rem;
  }
}
@media only screen and (max-width: 800px) {
  .MyYwvFOFpuKKEZrTTodI {
    display: flex;
    flex-direction: column;
  }
  .MyYwvFOFpuKKEZrTTodI .kNqOnLPofAbe3CMaovAW {
    display: block;
    font-size: 6rem;
    font-weight: 600;
    color: var(--btn-color);
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 {
    width: 100%;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    font-size: 1.5rem;
  }
  .MyYwvFOFpuKKEZrTTodI .KJsUmO9d56FsPcdH5zg3 .RFWAv2Jje79MsztfGqvb {
    display: none;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB {
    width: 100%;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .eUnsrkwmyuVmwL2KMfms .VVltheWFikP7_pdjmNcp {
    font-size: 1.5rem;
  }
  .MyYwvFOFpuKKEZrTTodI .HGrHWilZnmAKW9M17BfB .Z3wofxnV_fQfGxSSpHeb {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/ServiceContainer/ServiceContainer.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AACJ;AAAI;EACI,aAAA;AAER;AAAI;EACI,iBAAA;EACA,gBAAA;EACA,uBAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AADQ;EACI,UAAA;AAGZ;AAFY;EACI,gBAAA;AAIhB;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAER;AAAI;EACI,UAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;AAER;AADQ;EACI,YAAA;EACA,eAAA;EACA,YAAA;AAGZ;AAAY;EACI,qBAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;AAEhB;AACQ;EACI,cAAA;EACA,YAAA;EACA,eAAA;AACZ;AACQ;EACI,sBAAA;EACA,2BAAA;EACA,qBAAA;AACZ;AAEI;EACI,cAAA;EACA,eAAA;EACA,yDAAA;EACA,4BAAA;EACA,8BAAA;EACA,8BAAA;EACA,kBAAA;EACA,aAAA;EACA,aAAA;EACA,sDAAA;AAAR;AAGI;EACI;IAAK,8BAAA;EAAX;EACM;IAAO,kCAAA;EAEb;AACF;;AACA,oEAAA;AACA;EAIgB;IACI,iBAAA;EADlB;EAOc;IACI,iBAAA;EALlB;EAQU;IACI,eAAA;EANd;AACF;AAWA;EAEQ;IACI,aAAA;EAVV;AACF;AAcA;EAIgB;IACI,iBAAA;EAflB;EAqBc;IACI,iBAAA;EAnBlB;EAsBU;IACI,eAAA;EApBd;AACF;AAyBA;EACI;IACI,aAAA;IACA,sBAAA;EAvBN;EAwBM;IACI,cAAA;IACA,eAAA;IACA,gBAAA;IACA,uBAAA;EAtBV;EAwBM;IACI,WAAA;EAtBV;EAwBc;IACI,iBAAA;EAtBlB;EAyBU;IACI,aAAA;EAvBd;EA0BM;IACI,WAAA;EAxBV;EA0Bc;IACI,iBAAA;EAxBlB;EA2BU;IACI,aAAA;EAzBd;AACF","sourcesContent":[".serviceContainerMain {\n    width: 75%;\n    margin: 0 auto;\n    padding: 5rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    .altServiceHeader {\n        display: none;\n    }\n    .serviceHeader {\n        font-size: 8.5rem;\n        font-weight: 600;\n        color: var(--btn-color);\n    }\n    .serviceContainerLeft {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n        .headingSMContainer {\n            width: 90%;\n            .headingSM {\n                text-align: left;\n            }\n        }\n    }\n    .serviceContainerRight {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 50%;\n    }\n    .serviceCard {\n        width: 90%;\n        height: 35vh;\n        background-color: #303030;\n        padding: 1.5rem;\n        margin-bottom: 3rem;\n        border-radius: .5rem;\n        transition: .4s ease;\n        .serviceTitle {\n            margin: 1rem;\n            font-size: 2rem;\n            color: white;\n        }\n        .serviceList {\n            .serviceListItem {\n                list-style-type: none;\n                font-size: 1.3rem;\n                color: rgb(183, 183, 183);\n                margin: 0 2rem;\n                line-height: 2rem;\n            }\n        }\n        .serviceDescription {\n            font-size: 1vw;\n            margin: 1rem;\n            color: darkgrey;\n        }\n        &:hover .serviceTitle {\n            transform: scale(1.05);\n            color: var(--heading-color);\n            transition: .4s ease;\n        }\n    }\n    .spritesheet {\n        width: 35.2rem;\n        height: 35.2rem;\n        background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/hulk-sprite.png');\n        background-repeat: no-repeat;\n        background-size: 28160px 352px;\n        background-position: 0rem 0rem;\n        position: absolute;\n        bottom: -1rem;\n        right: -15rem;\n        animation: play 15s steps(80) infinite;\n    }\n     \n    @keyframes play {\n        0% { background-position: 0rem 0rem; }\n        100% { background-position: -2816rem 0rem; }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1200px) {\n    .serviceContainerMain {\n        .serviceContainerLeft {\n            .serviceCard {\n                .serviceTitle {\n                    font-size: 1.5rem;\n                }\n            } \n        }  \n        .serviceContainerRight {\n            .serviceCard {\n                .serviceTitle {\n                    font-size: 1.5rem;\n                }\n            }\n            .serviceHeader {\n                font-size: 6rem;\n            }\n        }\n    }\n}\n\n@media (max-width: 1100px) {\n    .serviceContainerMain {\n        .spritesheet {\n            right: -20rem;\n        }\n    }\n}\n\n@media only screen and (max-width: 1000px) {\n    .serviceContainerMain {\n        .serviceContainerLeft {\n            .serviceCard {\n                .serviceTitle {\n                    font-size: 1.5rem;\n                }\n            } \n        }  \n        .serviceContainerRight {\n            .serviceCard {\n                .serviceTitle {\n                    font-size: 1.5rem;\n                }\n            }\n            .serviceHeader {\n                font-size: 4rem;\n            }\n        }\n    }\n}\n\n@media only screen and (max-width: 800px) {\n    .serviceContainerMain {\n        display: flex;\n        flex-direction: column;\n        .altServiceHeader {\n            display: block;\n            font-size: 6rem;\n            font-weight: 600;\n            color: var(--btn-color);\n        }\n        .serviceContainerLeft {\n            width: 100%;\n            .serviceCard {\n                .serviceTitle {\n                    font-size: 1.5rem;\n                }\n            } \n            .headingSMContainer {\n                display: none;\n            }\n        }  \n        .serviceContainerRight {\n            width: 100%;\n            .serviceCard {\n                .serviceTitle {\n                    font-size: 1.5rem;\n                }\n            }\n            .serviceHeader {\n                display: none;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"serviceContainerMain": `MyYwvFOFpuKKEZrTTodI`,
	"altServiceHeader": `kNqOnLPofAbe3CMaovAW`,
	"serviceHeader": `Z3wofxnV_fQfGxSSpHeb`,
	"serviceContainerLeft": `KJsUmO9d56FsPcdH5zg3`,
	"headingSMContainer": `RFWAv2Jje79MsztfGqvb`,
	"headingSM": `lWOYZ4lKcfV6dlTkyVVg`,
	"serviceContainerRight": `HGrHWilZnmAKW9M17BfB`,
	"serviceCard": `eUnsrkwmyuVmwL2KMfms`,
	"serviceTitle": `VVltheWFikP7_pdjmNcp`,
	"serviceList": `n0lXaaymao2zQbZIa8gs`,
	"serviceListItem": `Ma8eZdshCejEner2km_9`,
	"serviceDescription": `YMBTswNNuhoziprZb9Dz`,
	"spritesheet": `l57oEo1s2ddd0CIEkE3N`,
	"play": `JoL9nFGQIOW8Ow7UaPbE`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimation.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimation.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/img/tyler-spritesheet.png */ "./public/img/tyler-spritesheet.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.BYTea12oqUEziEWvzniO {
  position: absolute;
  z-index: 1;
  right: 0rem;
  width: 65rem;
  height: 80rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  animation: uw8ss7Iscm1Hn8eZU0qa 8s steps(1) infinite;
}

@keyframes uw8ss7Iscm1Hn8eZU0qa {
  0% {
    background-position: -15rem 10rem;
  }
  10.75% {
    background-position: -95rem 10rem;
  }
  1.5% {
    background-position: -175rem 10rem;
  }
  2.25% {
    background-position: -255rem 10rem;
  }
  3% {
    background-position: -335rem 10rem;
  }
  3.75% {
    background-position: -415rem 10rem;
  }
  4.5% {
    background-position: -495rem 10rem;
  }
  5.25% {
    background-position: -575rem 10rem;
  }
  6% {
    background-position: -655rem 10rem;
  }
  6.75% {
    background-position: -735rem 10rem;
  }
  7.5% {
    background-position: -815rem 10rem;
  }
  8.25% {
    background-position: -895rem 10rem;
  }
  9.75% {
    background-position: -15rem -70rem;
  }
  10.5% {
    background-position: -95rem -70rem;
  }
  11.25% {
    background-position: -175rem -70rem;
  }
  12% {
    background-position: -255rem -70rem;
  }
  12.75% {
    background-position: -335rem -70rem;
  }
  13.5% {
    background-position: -415rem -70rem;
  }
  14.25% {
    background-position: -495rem -70rem;
  }
  15% {
    background-position: -575rem -70rem;
  }
  15.75% {
    background-position: -655rem -70rem;
  }
  16.5% {
    background-position: -735rem -70rem;
  }
  17.25% {
    background-position: -815rem -70rem;
  }
  18% {
    background-position: -895rem -70rem;
  }
  19.5% {
    background-position: -15rem -150rem;
  }
  20.25% {
    background-position: -95rem -150rem;
  }
  21% {
    background-position: -175rem -150rem;
  }
  21.75% {
    background-position: -255rem -150rem;
  }
  22.5% {
    background-position: -335rem -150rem;
  }
  23.25% {
    background-position: -415rem -150rem;
  }
  24% {
    background-position: -495rem -150rem;
  }
  24.75% {
    background-position: -575rem -150rem;
  }
  25.5% {
    background-position: -655rem -150rem;
  }
  26.25% {
    background-position: -735rem -150rem;
  }
  27% {
    background-position: -815rem -150rem;
  }
  27.75% {
    background-position: -895rem -150rem;
  }
  29.25% {
    background-position: -15rem -230rem;
  }
  30% {
    background-position: -95rem -230rem;
  }
  30.75% {
    background-position: -175rem -230rem;
  }
  31.5% {
    background-position: -255rem -230rem;
  }
  32.25% {
    background-position: -335rem -230rem;
  }
  33% {
    background-position: -415rem -230rem;
  }
  33.75% {
    background-position: -495rem -230rem;
  }
  34.5% {
    background-position: -575rem -230rem;
  }
  35.25% {
    background-position: -655rem -230rem;
  }
  36% {
    background-position: -735rem -230rem;
  }
  36.75% {
    background-position: -815rem -230rem;
  }
  37.5% {
    background-position: -895rem -230rem;
  }
  39% {
    background-position: -15rem -310rem;
  }
  39.75% {
    background-position: -95rem -310rem;
  }
  40.5% {
    background-position: -175rem -310rem;
  }
  41.25% {
    background-position: -255rem -310rem;
  }
  42% {
    background-position: -335rem -310rem;
  }
  42.75% {
    background-position: -415rem -310rem;
  }
  43.5% {
    background-position: -495rem -310rem;
  }
  44.25% {
    background-position: -575rem -310rem;
  }
  45% {
    background-position: -655rem -310rem;
  }
  45.75% {
    background-position: -735rem -310rem;
  }
  46.5% {
    background-position: -815rem -310rem;
  }
  47.25% {
    background-position: -895rem -310rem;
  }
  48.75% {
    background-position: -15rem -390rem;
  }
  49.5% {
    background-position: -95rem -390rem;
  }
  50.25% {
    background-position: -175rem -390rem;
  }
  51% {
    background-position: -255rem -390rem;
  }
  51.75% {
    background-position: -335rem -390rem;
  }
  52.5% {
    background-position: -415rem -390rem;
  }
  53.25% {
    background-position: -495rem -390rem;
  }
  54% {
    background-position: -575rem -390rem;
  }
  54.75% {
    background-position: -655rem -390rem;
  }
  55.5% {
    background-position: -735rem -390rem;
  }
  56.25% {
    background-position: -815rem -390rem;
  }
  57% {
    background-position: -895rem -390rem;
  }
  58.5% {
    background-position: -15rem -470rem;
  }
  59.25% {
    background-position: -95rem -470rem;
  }
  60% {
    background-position: -175rem -470rem;
  }
  60.75% {
    background-position: -255rem -470rem;
  }
  61.5% {
    background-position: -335rem -470rem;
  }
  62.25% {
    background-position: -415rem -470rem;
  }
  63% {
    background-position: -495rem -470rem;
  }
  63.75% {
    background-position: -575rem -470rem;
  }
  64.5% {
    background-position: -655rem -470rem;
  }
  65.25% {
    background-position: -735rem -470rem;
  }
  66% {
    background-position: -815rem -470rem;
  }
  66.75% {
    background-position: -895rem -470rem;
  }
  68.25% {
    background-position: -15rem -550rem;
  }
  69% {
    background-position: -95rem -550rem;
  }
  69.75% {
    background-position: -175rem -550rem;
  }
  70.5% {
    background-position: -255rem -550rem;
  }
  71.25% {
    background-position: -335rem -550rem;
  }
  72% {
    background-position: -415rem -550rem;
  }
  72.75% {
    background-position: -495rem -550rem;
  }
  73.5% {
    background-position: -575rem -550rem;
  }
  74.25% {
    background-position: -655rem -550rem;
  }
  75% {
    background-position: -735rem -550rem;
  }
  75.75% {
    background-position: -815rem -550rem;
  }
  76.5% {
    background-position: -895rem -550rem;
  }
  78% {
    background-position: -15rem -630rem;
  }
  78.75% {
    background-position: -95rem -630rem;
  }
  79.5% {
    background-position: -175rem -630rem;
  }
  80.25% {
    background-position: -255rem -630rem;
  }
  81% {
    background-position: -335rem -630rem;
  }
  81.75% {
    background-position: -415rem -630rem;
  }
  82.5% {
    background-position: -495rem -630rem;
  }
  83.25% {
    background-position: -575rem -630rem;
  }
  84% {
    background-position: -655rem -630rem;
  }
  84.75% {
    background-position: -735rem -630rem;
  }
  85.5% {
    background-position: -815rem -630rem;
  }
  86.25% {
    background-position: -895rem -630rem;
  }
  87.75% {
    background-position: -15rem -710rem;
  }
  88.5% {
    background-position: -95rem -710rem;
  }
  89.25% {
    background-position: -175rem -710rem;
  }
  90% {
    background-position: -255rem -710rem;
  }
  90.75% {
    background-position: -335rem -710rem;
  }
  91.5% {
    background-position: -415rem -710rem;
  }
  92.25% {
    background-position: -495rem -710rem;
  }
  93% {
    background-position: -575rem -710rem;
  }
  93.75% {
    background-position: -655rem -710rem;
  }
  94.5% {
    background-position: -735rem -710rem;
  }
  95.25% {
    background-position: -815rem -710rem;
  }
  96% {
    background-position: -895rem -710rem;
  }
  97.5% {
    background-position: -15rem -790rem;
  }
  98.25% {
    background-position: -95rem -790rem;
  }
  99% {
    background-position: -175rem -790rem;
  }
  99.75% {
    background-position: -255rem -790rem;
  }
  100% {
    background-position: -335rem -790rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SpriteAnimation/SpriteAnimation.module.scss"],"names":[],"mappings":"AAAA;EACG,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,oDAAA;AACH;;AAEA;EACG;IAAK,iCAAA;EAEN;EADC;IAAS,iCAAA;EAIV;EAHC;IAAO,kCAAA;EAMR;EALC;IAAQ,kCAAA;EAQT;EAPC;IAAK,kCAAA;EAUN;EATC;IAAQ,kCAAA;EAYT;EAXC;IAAO,kCAAA;EAcR;EAbC;IAAQ,kCAAA;EAgBT;EAfC;IAAK,kCAAA;EAkBN;EAjBC;IAAQ,kCAAA;EAoBT;EAnBC;IAAO,kCAAA;EAsBR;EArBC;IAAQ,kCAAA;EAwBT;EAvBC;IAAQ,kCAAA;EA0BT;EAzBC;IAAQ,kCAAA;EA4BT;EA3BC;IAAS,mCAAA;EA8BV;EA7BC;IAAM,mCAAA;EAgCP;EA/BC;IAAS,mCAAA;EAkCV;EAjCC;IAAQ,mCAAA;EAoCT;EAnCC;IAAS,mCAAA;EAsCV;EArCC;IAAM,mCAAA;EAwCP;EAvCC;IAAS,mCAAA;EA0CV;EAzCC;IAAQ,mCAAA;EA4CT;EA3CC;IAAS,mCAAA;EA8CV;EA7CC;IAAM,mCAAA;EAgDP;EA/CC;IAAQ,mCAAA;EAkDT;EAjDC;IAAS,mCAAA;EAoDV;EAnDC;IAAM,oCAAA;EAsDP;EArDC;IAAS,oCAAA;EAwDV;EAvDC;IAAQ,oCAAA;EA0DT;EAzDC;IAAS,oCAAA;EA4DV;EA3DC;IAAM,oCAAA;EA8DP;EA7DC;IAAS,oCAAA;EAgEV;EA/DC;IAAQ,oCAAA;EAkET;EAjEC;IAAS,oCAAA;EAoEV;EAnEC;IAAM,oCAAA;EAsEP;EArEC;IAAS,oCAAA;EAwEV;EAvEC;IAAS,mCAAA;EA0EV;EAzEC;IAAM,mCAAA;EA4EP;EA3EC;IAAS,oCAAA;EA8EV;EA7EC;IAAQ,oCAAA;EAgFT;EA/EC;IAAS,oCAAA;EAkFV;EAjFC;IAAM,oCAAA;EAoFP;EAnFC;IAAS,oCAAA;EAsFV;EArFC;IAAQ,oCAAA;EAwFT;EAvFC;IAAS,oCAAA;EA0FV;EAzFC;IAAM,oCAAA;EA4FP;EA3FC;IAAS,oCAAA;EA8FV;EA7FC;IAAQ,oCAAA;EAgGT;EA/FC;IAAM,mCAAA;EAkGP;EAjGC;IAAS,mCAAA;EAoGV;EAnGC;IAAQ,oCAAA;EAsGT;EArGC;IAAS,oCAAA;EAwGV;EAvGC;IAAM,oCAAA;EA0GP;EAzGC;IAAS,oCAAA;EA4GV;EA3GC;IAAQ,oCAAA;EA8GT;EA7GC;IAAS,oCAAA;EAgHV;EA/GC;IAAM,oCAAA;EAkHP;EAjHC;IAAS,oCAAA;EAoHV;EAnHC;IAAQ,oCAAA;EAsHT;EArHC;IAAS,oCAAA;EAwHV;EAvHC;IAAS,mCAAA;EA0HV;EAzHC;IAAQ,mCAAA;EA4HT;EA3HC;IAAS,oCAAA;EA8HV;EA7HC;IAAM,oCAAA;EAgIP;EA/HC;IAAS,oCAAA;EAkIV;EAjIC;IAAQ,oCAAA;EAoIT;EAnIC;IAAS,oCAAA;EAsIV;EArIC;IAAM,oCAAA;EAwIP;EAvIC;IAAS,oCAAA;EA0IV;EAzIC;IAAQ,oCAAA;EA4IT;EA3IC;IAAS,oCAAA;EA8IV;EA7IC;IAAM,oCAAA;EAgJP;EA/IC;IAAQ,mCAAA;EAkJT;EAjJC;IAAS,mCAAA;EAoJV;EAnJC;IAAM,oCAAA;EAsJP;EArJC;IAAS,oCAAA;EAwJV;EAvJC;IAAQ,oCAAA;EA0JT;EAzJC;IAAS,oCAAA;EA4JV;EA3JC;IAAM,oCAAA;EA8JP;EA7JC;IAAS,oCAAA;EAgKV;EA/JC;IAAQ,oCAAA;EAkKT;EAjKC;IAAS,oCAAA;EAoKV;EAnKC;IAAM,oCAAA;EAsKP;EArKC;IAAS,oCAAA;EAwKV;EAvKC;IAAS,mCAAA;EA0KV;EAzKC;IAAM,mCAAA;EA4KP;EA3KC;IAAS,oCAAA;EA8KV;EA7KC;IAAQ,oCAAA;EAgLT;EA/KC;IAAS,oCAAA;EAkLV;EAjLC;IAAM,oCAAA;EAoLP;EAnLC;IAAS,oCAAA;EAsLV;EArLC;IAAQ,oCAAA;EAwLT;EAvLC;IAAS,oCAAA;EA0LV;EAzLC;IAAM,oCAAA;EA4LP;EA3LC;IAAS,oCAAA;EA8LV;EA7LC;IAAQ,oCAAA;EAgMT;EA/LC;IAAM,mCAAA;EAkMP;EAjMC;IAAS,mCAAA;EAoMV;EAnMC;IAAQ,oCAAA;EAsMT;EArMC;IAAS,oCAAA;EAwMV;EAvMC;IAAM,oCAAA;EA0MP;EAzMC;IAAS,oCAAA;EA4MV;EA3MC;IAAQ,oCAAA;EA8MT;EA7MC;IAAS,oCAAA;EAgNV;EA/MC;IAAM,oCAAA;EAkNP;EAjNC;IAAS,oCAAA;EAoNV;EAnNC;IAAQ,oCAAA;EAsNT;EArNC;IAAS,oCAAA;EAwNV;EAvNC;IAAS,mCAAA;EA0NV;EAzNC;IAAQ,mCAAA;EA4NT;EA3NC;IAAS,oCAAA;EA8NV;EA7NC;IAAM,oCAAA;EAgOP;EA/NC;IAAS,oCAAA;EAkOV;EAjOC;IAAQ,oCAAA;EAoOT;EAnOC;IAAS,oCAAA;EAsOV;EArOC;IAAM,oCAAA;EAwOP;EAvOC;IAAS,oCAAA;EA0OV;EAzOC;IAAQ,oCAAA;EA4OT;EA3OC;IAAS,oCAAA;EA8OV;EA7OC;IAAM,oCAAA;EAgPP;EA/OC;IAAQ,mCAAA;EAkPT;EAjPC;IAAS,mCAAA;EAoPV;EAnPC;IAAM,oCAAA;EAsPP;EArPC;IAAS,oCAAA;EAwPV;EAvPC;IAAO,oCAAA;EA0PR;AACF","sourcesContent":[".spritesheet {\n   position: absolute; \n   z-index: 1;\n   right: 0rem;\n   width: 65rem;\n   height: 80rem;\n   background-image: url('/Users/tylerpierson/portfolio/public/img/tyler-spritesheet.png');\n   background-repeat: no-repeat;\n   animation: play 8s steps(1) infinite;\n}\n\n@keyframes play {\n   0% { background-position: -15rem 10rem; }\n   10.75% { background-position: -95rem 10rem; }\n   1.5% { background-position: -175rem 10rem; }\n   2.25% { background-position: -255rem 10rem; }\n   3% { background-position: -335rem 10rem; }\n   3.75% { background-position: -415rem 10rem; }\n   4.5% { background-position: -495rem 10rem; }\n   5.25% { background-position: -575rem 10rem; }\n   6% { background-position: -655rem 10rem; }\n   6.75% { background-position: -735rem 10rem; }\n   7.5% { background-position: -815rem 10rem; }\n   8.25% { background-position: -895rem 10rem; }\n   9.75% { background-position: -15rem -70rem; }\n   10.5% { background-position: -95rem -70rem; }\n   11.25% { background-position: -175rem -70rem; }\n   12% { background-position: -255rem -70rem; }\n   12.75% { background-position: -335rem -70rem; }\n   13.5% { background-position: -415rem -70rem; }\n   14.25% { background-position: -495rem -70rem; }\n   15% { background-position: -575rem -70rem; }\n   15.75% { background-position: -655rem -70rem; }\n   16.5% { background-position: -735rem -70rem; }\n   17.25% { background-position: -815rem -70rem; }\n   18% { background-position: -895rem -70rem; }\n   19.5% { background-position: -15rem -150rem; }\n   20.25% { background-position: -95rem -150rem; }\n   21% { background-position: -175rem -150rem; }\n   21.75% { background-position: -255rem -150rem; }\n   22.5% { background-position: -335rem -150rem; }\n   23.25% { background-position: -415rem -150rem; }\n   24% { background-position: -495rem -150rem; }\n   24.75% { background-position: -575rem -150rem; }\n   25.5% { background-position: -655rem -150rem; }\n   26.25% { background-position: -735rem -150rem; }\n   27% { background-position: -815rem -150rem; }\n   27.75% { background-position: -895rem -150rem; }\n   29.25% { background-position: -15rem -230rem; }\n   30% { background-position: -95rem -230rem; }\n   30.75% { background-position: -175rem -230rem; }\n   31.5% { background-position: -255rem -230rem; }\n   32.25% { background-position: -335rem -230rem; }\n   33% { background-position: -415rem -230rem; }\n   33.75% { background-position: -495rem -230rem; }\n   34.5% { background-position: -575rem -230rem; }\n   35.25% { background-position: -655rem -230rem; }\n   36% { background-position: -735rem -230rem; }\n   36.75% { background-position: -815rem -230rem; }\n   37.5% { background-position: -895rem -230rem; }\n   39% { background-position: -15rem -310rem; }\n   39.75% { background-position: -95rem -310rem; }\n   40.5% { background-position: -175rem -310rem; }\n   41.25% { background-position: -255rem -310rem; }\n   42% { background-position: -335rem -310rem; }\n   42.75% { background-position: -415rem -310rem; }\n   43.5% { background-position: -495rem -310rem; }\n   44.25% { background-position: -575rem -310rem; }\n   45% { background-position: -655rem -310rem; }\n   45.75% { background-position: -735rem -310rem; }\n   46.5% { background-position: -815rem -310rem; }\n   47.25% { background-position: -895rem -310rem; }\n   48.75% { background-position: -15rem -390rem; }\n   49.5% { background-position: -95rem -390rem; }\n   50.25% { background-position: -175rem -390rem; }\n   51% { background-position: -255rem -390rem; }\n   51.75% { background-position: -335rem -390rem; }\n   52.5% { background-position: -415rem -390rem; }\n   53.25% { background-position: -495rem -390rem; }\n   54% { background-position: -575rem -390rem; }\n   54.75% { background-position: -655rem -390rem; }\n   55.5% { background-position: -735rem -390rem; }\n   56.25% { background-position: -815rem -390rem; }\n   57% { background-position: -895rem -390rem; }\n   58.5% { background-position: -15rem -470rem; }\n   59.25% { background-position: -95rem -470rem; }\n   60% { background-position: -175rem -470rem; }\n   60.75% { background-position: -255rem -470rem; }\n   61.5% { background-position: -335rem -470rem; }\n   62.25% { background-position: -415rem -470rem; }\n   63% { background-position: -495rem -470rem; }\n   63.75% { background-position: -575rem -470rem; }\n   64.5% { background-position: -655rem -470rem; }\n   65.25% { background-position: -735rem -470rem; }\n   66% { background-position: -815rem -470rem; }\n   66.75% { background-position: -895rem -470rem; }\n   68.25% { background-position: -15rem -550rem; }\n   69% { background-position: -95rem -550rem; }\n   69.75% { background-position: -175rem -550rem; }\n   70.5% { background-position: -255rem -550rem; }\n   71.25% { background-position: -335rem -550rem; }\n   72% { background-position: -415rem -550rem; }\n   72.75% { background-position: -495rem -550rem; }\n   73.5% { background-position: -575rem -550rem; }\n   74.25% { background-position: -655rem -550rem; }\n   75% { background-position: -735rem -550rem; }\n   75.75% { background-position: -815rem -550rem; }\n   76.5% { background-position: -895rem -550rem; }\n   78% { background-position: -15rem -630rem; }\n   78.75% { background-position: -95rem -630rem; }\n   79.5% { background-position: -175rem -630rem; }\n   80.25% { background-position: -255rem -630rem; }\n   81% { background-position: -335rem -630rem; }\n   81.75% { background-position: -415rem -630rem; }\n   82.5% { background-position: -495rem -630rem; }\n   83.25% { background-position: -575rem -630rem; }\n   84% { background-position: -655rem -630rem; }\n   84.75% { background-position: -735rem -630rem; }\n   85.5% { background-position: -815rem -630rem; }\n   86.25% { background-position: -895rem -630rem; }\n   87.75% { background-position: -15rem -710rem; }\n   88.5% { background-position: -95rem -710rem; }\n   89.25% { background-position: -175rem -710rem; }\n   90% { background-position: -255rem -710rem; }\n   90.75% { background-position: -335rem -710rem; }\n   91.5% { background-position: -415rem -710rem; }\n   92.25% { background-position: -495rem -710rem; }\n   93% { background-position: -575rem -710rem; }\n   93.75% { background-position: -655rem -710rem; }\n   94.5% { background-position: -735rem -710rem; }\n   95.25% { background-position: -815rem -710rem; }\n   96% { background-position: -895rem -710rem; }\n   97.5% { background-position: -15rem -790rem; }\n   98.25% { background-position: -95rem -790rem; }\n   99% { background-position: -175rem -790rem; }\n   99.75% { background-position: -255rem -790rem; }\n   100% { background-position: -335rem -790rem; }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spritesheet": `BYTea12oqUEziEWvzniO`,
	"play": `uw8ss7Iscm1Hn8eZU0qa`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationMed.module.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationMed.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../software_projects/class-website/public/img/tyler-spritesheet-med.png */ "../software_projects/class-website/public/img/tyler-spritesheet-med.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.l116pAhUGRvidbja3Snr {
  position: absolute;
  z-index: 1;
  top: 10vh;
  right: 0rem;
  width: 48rem;
  height: 48rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  animation: DrKRsjH298rmCC_mdiMo 8s steps(1) infinite;
}

@keyframes DrKRsjH298rmCC_mdiMo {
  0% {
    background-position: 0rem 0rem;
  }
  10.75% {
    background-position: -48rem 0rem;
  }
  1.5% {
    background-position: -96rem 0rem;
  }
  2.25% {
    background-position: -144rem 0rem;
  }
  3% {
    background-position: -192rem 0rem;
  }
  3.75% {
    background-position: -240rem 0rem;
  }
  4.5% {
    background-position: -288rem 0rem;
  }
  5.25% {
    background-position: -336rem 0rem;
  }
  6% {
    background-position: -384rem 0rem;
  }
  6.75% {
    background-position: -432rem 0rem;
  }
  7.5% {
    background-position: -480rem 0rem;
  }
  8.25% {
    background-position: -528rem 0rem;
  }
  9.75% {
    background-position: 0rem -48rem;
  }
  10.5% {
    background-position: -48rem -48rem;
  }
  11.25% {
    background-position: -96rem -48rem;
  }
  12% {
    background-position: -144rem -48rem;
  }
  12.75% {
    background-position: -192rem -48rem;
  }
  13.5% {
    background-position: -240rem -48rem;
  }
  14.25% {
    background-position: -288rem -48rem;
  }
  15% {
    background-position: -336rem -48rem;
  }
  15.75% {
    background-position: -384rem -48rem;
  }
  16.5% {
    background-position: -432rem -48rem;
  }
  17.25% {
    background-position: -480rem -48rem;
  }
  18% {
    background-position: -528rem -48rem;
  }
  19.5% {
    background-position: 0rem -96rem;
  }
  20.25% {
    background-position: -48rem -96rem;
  }
  21% {
    background-position: -96rem -96rem;
  }
  21.75% {
    background-position: -144rem -96rem;
  }
  22.5% {
    background-position: -192rem -96rem;
  }
  23.25% {
    background-position: -240rem -96rem;
  }
  24% {
    background-position: -288rem -96rem;
  }
  24.75% {
    background-position: -336rem -96rem;
  }
  25.5% {
    background-position: -384rem -96rem;
  }
  26.25% {
    background-position: -432rem -96rem;
  }
  27% {
    background-position: -480rem -96rem;
  }
  27.75% {
    background-position: -528rem -96rem;
  }
  29.25% {
    background-position: 0rem -144rem;
  }
  30% {
    background-position: -48rem -144rem;
  }
  30.75% {
    background-position: -96rem -144rem;
  }
  31.5% {
    background-position: -144rem -144rem;
  }
  32.25% {
    background-position: -192rem -144rem;
  }
  33% {
    background-position: -240rem -144rem;
  }
  33.75% {
    background-position: -288rem -144rem;
  }
  34.5% {
    background-position: -336rem -144rem;
  }
  35.25% {
    background-position: -384rem -144rem;
  }
  36% {
    background-position: -432rem -144rem;
  }
  36.75% {
    background-position: -480rem -144rem;
  }
  37.5% {
    background-position: -528rem -144rem;
  }
  39% {
    background-position: 0rem -192rem;
  }
  39.75% {
    background-position: -48rem -192rem;
  }
  40.5% {
    background-position: -96rem -192rem;
  }
  41.25% {
    background-position: -144rem -192rem;
  }
  42% {
    background-position: -192rem -192rem;
  }
  42.75% {
    background-position: -240rem -192rem;
  }
  43.5% {
    background-position: -288rem -192rem;
  }
  44.25% {
    background-position: -336rem -192rem;
  }
  45% {
    background-position: -384rem -192rem;
  }
  45.75% {
    background-position: -432rem -192rem;
  }
  46.5% {
    background-position: -480rem -192rem;
  }
  47.25% {
    background-position: -528rem -192rem;
  }
  48.75% {
    background-position: 0rem -240rem;
  }
  49.5% {
    background-position: -48rem -240rem;
  }
  50.25% {
    background-position: -96rem -240rem;
  }
  51% {
    background-position: -144rem -240rem;
  }
  51.75% {
    background-position: -192rem -240rem;
  }
  52.5% {
    background-position: -240rem -240rem;
  }
  53.25% {
    background-position: -288rem -240rem;
  }
  54% {
    background-position: -336rem -240rem;
  }
  55.5% {
    background-position: -384rem -240rem;
  }
  54.75% {
    background-position: -432rem -240rem;
  }
  55.5% {
    background-position: -480rem -240rem;
  }
  56.25% {
    background-position: -528rem -240rem;
  }
  57% {
    background-position: 0rem -288rem;
  }
  57.75% {
    background-position: -48rem -288rem;
  }
  58.5% {
    background-position: -96rem -288rem;
  }
  59.25% {
    background-position: -144rem -288rem;
  }
  60% {
    background-position: -192rem -288rem;
  }
  60.75% {
    background-position: -240rem -288rem;
  }
  61.5% {
    background-position: -288rem -288rem;
  }
  62.25% {
    background-position: -336rem -288rem;
  }
  63% {
    background-position: -384rem -288rem;
  }
  63.75% {
    background-position: -432rem -288rem;
  }
  64.5% {
    background-position: -480rem -288rem;
  }
  65.25% {
    background-position: -528rem -288rem;
  }
  66% {
    background-position: 0rem -336rem;
  }
  66.75% {
    background-position: -48rem -336rem;
  }
  67.5% {
    background-position: -96rem -336rem;
  }
  68.25% {
    background-position: -144rem -336rem;
  }
  69% {
    background-position: -192rem -336rem;
  }
  69.75% {
    background-position: -240rem -336rem;
  }
  70.5% {
    background-position: -288rem -336rem;
  }
  71.25% {
    background-position: -336rem -336rem;
  }
  72% {
    background-position: -384rem -336rem;
  }
  72.75% {
    background-position: -432rem -336rem;
  }
  73.5% {
    background-position: -480rem -336rem;
  }
  74.25% {
    background-position: -528rem -336rem;
  }
  75% {
    background-position: 0rem -384rem;
  }
  75.75% {
    background-position: -48rem -384rem;
  }
  76.5% {
    background-position: -96rem -384rem;
  }
  77.25% {
    background-position: -144rem -384rem;
  }
  78% {
    background-position: -192rem -384rem;
  }
  78.75% {
    background-position: -240rem -384rem;
  }
  79.5% {
    background-position: -288rem -384rem;
  }
  80.25% {
    background-position: -336rem -384rem;
  }
  81% {
    background-position: -384rem -384rem;
  }
  81.75% {
    background-position: -432rem -384rem;
  }
  82.5% {
    background-position: -480rem -384rem;
  }
  83.25% {
    background-position: -528rem -384rem;
  }
  84% {
    background-position: 0rem -432rem;
  }
  84.75% {
    background-position: -48rem -432rem;
  }
  85.5% {
    background-position: -96rem -432rem;
  }
  86.25% {
    background-position: -144rem -432rem;
  }
  87% {
    background-position: -192rem -432rem;
  }
  87.75% {
    background-position: -240rem -432rem;
  }
  88.5% {
    background-position: -288rem -432rem;
  }
  89.25% {
    background-position: -336rem -432rem;
  }
  90% {
    background-position: -384rem -432rem;
  }
  90.75% {
    background-position: -432rem -432rem;
  }
  91.5% {
    background-position: -480rem -432rem;
  }
  92.25% {
    background-position: -528rem -432rem;
  }
  93.75% {
    background-position: 0rem -480rem;
  }
  94.5% {
    background-position: -48rem -480rem;
  }
  95.25% {
    background-position: -96rem -480rem;
  }
  96% {
    background-position: -144rem -480rem;
  }
  96.75% {
    background-position: -192rem -480rem;
  }
  97.5% {
    background-position: -240rem -480rem;
  }
  98.25% {
    background-position: -288rem -480rem;
  }
  99% {
    background-position: -336rem -480rem;
  }
  99.75% {
    background-position: -384rem -480rem;
  }
  100% {
    background-position: -432rem -480rem;
  }
}
@media (max-width: 800px) {
  .l116pAhUGRvidbja3Snr {
    top: 0;
    margin-bottom: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SpriteAnimation/SpriteAnimationMed.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,oDAAA;AACJ;;AAEC;EACG;IAAK,8BAAA;EAEP;EADE;IAAS,gCAAA;EAIX;EAHE;IAAO,gCAAA;EAMT;EALE;IAAQ,iCAAA;EAQV;EAPE;IAAK,iCAAA;EAUP;EATE;IAAQ,iCAAA;EAYV;EAXE;IAAO,iCAAA;EAcT;EAbE;IAAQ,iCAAA;EAgBV;EAfE;IAAK,iCAAA;EAkBP;EAjBE;IAAQ,iCAAA;EAoBV;EAnBE;IAAO,iCAAA;EAsBT;EArBE;IAAQ,iCAAA;EAwBV;EAvBE;IAAQ,gCAAA;EA0BV;EAzBE;IAAQ,kCAAA;EA4BV;EA3BE;IAAS,kCAAA;EA8BX;EA7BE;IAAM,mCAAA;EAgCR;EA/BE;IAAS,mCAAA;EAkCX;EAjCE;IAAQ,mCAAA;EAoCV;EAnCE;IAAS,mCAAA;EAsCX;EArCE;IAAM,mCAAA;EAwCR;EAvCE;IAAS,mCAAA;EA0CX;EAzCE;IAAQ,mCAAA;EA4CV;EA3CE;IAAS,mCAAA;EA8CX;EA7CE;IAAM,mCAAA;EAgDR;EA/CE;IAAQ,gCAAA;EAkDV;EAjDE;IAAS,kCAAA;EAoDX;EAnDE;IAAM,kCAAA;EAsDR;EArDE;IAAS,mCAAA;EAwDX;EAvDE;IAAQ,mCAAA;EA0DV;EAzDE;IAAS,mCAAA;EA4DX;EA3DE;IAAM,mCAAA;EA8DR;EA7DE;IAAS,mCAAA;EAgEX;EA/DE;IAAQ,mCAAA;EAkEV;EAjEE;IAAS,mCAAA;EAoEX;EAnEE;IAAM,mCAAA;EAsER;EArEE;IAAS,mCAAA;EAwEX;EAvEE;IAAS,iCAAA;EA0EX;EAzEE;IAAM,mCAAA;EA4ER;EA3EE;IAAS,mCAAA;EA8EX;EA7EE;IAAQ,oCAAA;EAgFV;EA/EE;IAAS,oCAAA;EAkFX;EAjFE;IAAM,oCAAA;EAoFR;EAnFE;IAAS,oCAAA;EAsFX;EArFE;IAAQ,oCAAA;EAwFV;EAvFE;IAAS,oCAAA;EA0FX;EAzFE;IAAM,oCAAA;EA4FR;EA3FE;IAAS,oCAAA;EA8FX;EA7FE;IAAQ,oCAAA;EAgGV;EA/FE;IAAM,iCAAA;EAkGR;EAjGE;IAAS,mCAAA;EAoGX;EAnGE;IAAQ,mCAAA;EAsGV;EArGE;IAAS,oCAAA;EAwGX;EAvGE;IAAM,oCAAA;EA0GR;EAzGE;IAAS,oCAAA;EA4GX;EA3GE;IAAQ,oCAAA;EA8GV;EA7GE;IAAS,oCAAA;EAgHX;EA/GE;IAAM,oCAAA;EAkHR;EAjHE;IAAS,oCAAA;EAoHX;EAnHE;IAAQ,oCAAA;EAsHV;EArHE;IAAS,oCAAA;EAwHX;EAvHE;IAAS,iCAAA;EA0HX;EAzHE;IAAQ,mCAAA;EA4HV;EA3HE;IAAS,mCAAA;EA8HX;EA7HE;IAAM,oCAAA;EAgIR;EA/HE;IAAS,oCAAA;EAkIX;EAjIE;IAAQ,oCAAA;EAoIV;EAnIE;IAAS,oCAAA;EAsIX;EArIE;IAAM,oCAAA;EAwIR;EAvIE;IAAQ,oCAAA;EA0IV;EAzIE;IAAS,oCAAA;EA4IX;EA3IE;IAAQ,oCAAA;EA8IV;EA7IE;IAAS,oCAAA;EAgJX;EA/IE;IAAM,iCAAA;EAkJR;EAjJE;IAAS,mCAAA;EAoJX;EAnJE;IAAQ,mCAAA;EAsJV;EArJE;IAAS,oCAAA;EAwJX;EAvJE;IAAM,oCAAA;EA0JR;EAzJE;IAAS,oCAAA;EA4JX;EA3JE;IAAQ,oCAAA;EA8JV;EA7JE;IAAS,oCAAA;EAgKX;EA/JE;IAAM,oCAAA;EAkKR;EAjKE;IAAS,oCAAA;EAoKX;EAnKE;IAAQ,oCAAA;EAsKV;EArKE;IAAS,oCAAA;EAwKX;EAvKE;IAAM,iCAAA;EA0KR;EAzKE;IAAS,mCAAA;EA4KX;EA3KE;IAAQ,mCAAA;EA8KV;EA7KE;IAAS,oCAAA;EAgLX;EA/KE;IAAM,oCAAA;EAkLR;EAjLE;IAAS,oCAAA;EAoLX;EAnLE;IAAQ,oCAAA;EAsLV;EArLE;IAAS,oCAAA;EAwLX;EAvLE;IAAM,oCAAA;EA0LR;EAzLE;IAAS,oCAAA;EA4LX;EA3LE;IAAQ,oCAAA;EA8LV;EA7LE;IAAS,oCAAA;EAgMX;EA/LE;IAAM,iCAAA;EAkMR;EAjME;IAAS,mCAAA;EAoMX;EAnME;IAAQ,mCAAA;EAsMV;EArME;IAAS,oCAAA;EAwMX;EAvME;IAAM,oCAAA;EA0MR;EAzME;IAAS,oCAAA;EA4MX;EA3ME;IAAQ,oCAAA;EA8MV;EA7ME;IAAS,oCAAA;EAgNX;EA/ME;IAAM,oCAAA;EAkNR;EAjNE;IAAS,oCAAA;EAoNX;EAnNE;IAAQ,oCAAA;EAsNV;EArNE;IAAS,oCAAA;EAwNX;EAvNE;IAAM,iCAAA;EA0NR;EAzNE;IAAS,mCAAA;EA4NX;EA3NE;IAAQ,mCAAA;EA8NV;EA7NE;IAAS,oCAAA;EAgOX;EA/NE;IAAM,oCAAA;EAkOR;EAjOE;IAAS,oCAAA;EAoOX;EAnOE;IAAQ,oCAAA;EAsOV;EArOE;IAAS,oCAAA;EAwOX;EAvOE;IAAM,oCAAA;EA0OR;EAzOE;IAAS,oCAAA;EA4OX;EA3OE;IAAQ,oCAAA;EA8OV;EA7OE;IAAS,oCAAA;EAgPX;EA/OE;IAAS,iCAAA;EAkPX;EAjPE;IAAQ,mCAAA;EAoPV;EAnPE;IAAS,mCAAA;EAsPX;EArPE;IAAM,oCAAA;EAwPR;EAvPE;IAAS,oCAAA;EA0PX;EAzPE;IAAQ,oCAAA;EA4PV;EA3PE;IAAS,oCAAA;EA8PX;EA7PE;IAAM,oCAAA;EAgQR;EA/PE;IAAS,oCAAA;EAkQX;EAjQE;IAAO,oCAAA;EAoQT;AACF;AAlQC;EACG;IACI,MAAA;IACA,mBAAA;EAoQN;AACF","sourcesContent":[".spritesheet {\n    position: absolute; \n    z-index: 1;\n    top: 10vh;\n    right: 0rem;\n    width: 48rem;\n    height: 48rem;\n    background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/tyler-spritesheet-med.png');\n    background-repeat: no-repeat;\n    animation: play 8s steps(1) infinite;\n }\n \n @keyframes play {\n    0% { background-position: 0rem 0rem; }\n    10.75% { background-position: -48rem 0rem; }\n    1.5% { background-position: -96rem 0rem; }\n    2.25% { background-position: -144rem 0rem; }\n    3% { background-position: -192rem 0rem; }\n    3.75% { background-position: -240rem 0rem; }\n    4.5% { background-position: -288rem 0rem; }\n    5.25% { background-position: -336rem 0rem; }\n    6% { background-position: -384rem 0rem; }\n    6.75% { background-position: -432rem 0rem; }\n    7.5% { background-position: -480rem 0rem; }\n    8.25% { background-position: -528rem 0rem; }\n    9.75% { background-position: 0rem -48rem; }\n    10.5% { background-position: -48rem -48rem; }\n    11.25% { background-position: -96rem -48rem; }\n    12% { background-position: -144rem -48rem; }\n    12.75% { background-position: -192rem -48rem; }\n    13.5% { background-position: -240rem -48rem; }\n    14.25% { background-position: -288rem -48rem; }\n    15% { background-position: -336rem -48rem; }\n    15.75% { background-position: -384rem -48rem; }\n    16.5% { background-position: -432rem -48rem; }\n    17.25% { background-position: -480rem -48rem; }\n    18% { background-position: -528rem -48rem; }\n    19.5% { background-position: 0rem -96rem; }\n    20.25% { background-position: -48rem -96rem; }\n    21% { background-position: -96rem -96rem; }\n    21.75% { background-position: -144rem -96rem; }\n    22.5% { background-position: -192rem -96rem; }\n    23.25% { background-position: -240rem -96rem; }\n    24% { background-position: -288rem -96rem; }\n    24.75% { background-position: -336rem -96rem; }\n    25.5% { background-position: -384rem -96rem; }\n    26.25% { background-position: -432rem -96rem; }\n    27% { background-position: -480rem -96rem; }\n    27.75% { background-position: -528rem -96rem; }\n    29.25% { background-position: 0rem -144rem; }\n    30% { background-position: -48rem -144rem; }\n    30.75% { background-position: -96rem -144rem; }\n    31.5% { background-position: -144rem -144rem; }\n    32.25% { background-position: -192rem -144rem; }\n    33% { background-position: -240rem -144rem; }\n    33.75% { background-position: -288rem -144rem; }\n    34.5% { background-position: -336rem -144rem; }\n    35.25% { background-position: -384rem -144rem; }\n    36% { background-position: -432rem -144rem; }\n    36.75% { background-position: -480rem -144rem; }\n    37.5% { background-position: -528rem -144rem; }\n    39% { background-position: 0rem -192rem; }\n    39.75% { background-position: -48rem -192rem; }\n    40.5% { background-position: -96rem -192rem; }\n    41.25% { background-position: -144rem -192rem; }\n    42% { background-position: -192rem -192rem; }\n    42.75% { background-position: -240rem -192rem; }\n    43.5% { background-position: -288rem -192rem; }\n    44.25% { background-position: -336rem -192rem; }\n    45% { background-position: -384rem -192rem; }\n    45.75% { background-position: -432rem -192rem; }\n    46.5% { background-position: -480rem -192rem; }\n    47.25% { background-position: -528rem -192rem; }\n    48.75% { background-position: 0rem -240rem; }\n    49.5% { background-position: -48rem -240rem; }\n    50.25% { background-position: -96rem -240rem; }\n    51% { background-position: -144rem -240rem; }\n    51.75% { background-position: -192rem -240rem; }\n    52.5% { background-position: -240rem -240rem; }\n    53.25% { background-position: -288rem -240rem; }\n    54% { background-position: -336rem -240rem; }\n    55.5% { background-position: -384rem -240rem; }\n    54.75% { background-position: -432rem -240rem; }\n    55.5% { background-position: -480rem -240rem; }\n    56.25% { background-position: -528rem -240rem; }\n    57% { background-position: 0rem -288rem; }\n    57.75% { background-position: -48rem -288rem; }\n    58.5% { background-position: -96rem -288rem; }\n    59.25% { background-position: -144rem -288rem; }\n    60% { background-position: -192rem -288rem; }\n    60.75% { background-position: -240rem -288rem; }\n    61.5% { background-position: -288rem -288rem; }\n    62.25% { background-position: -336rem -288rem; }\n    63% { background-position: -384rem -288rem; }\n    63.75% { background-position: -432rem -288rem; }\n    64.5% { background-position: -480rem -288rem; }\n    65.25% { background-position: -528rem -288rem; }\n    66% { background-position: 0rem -336rem; }\n    66.75% { background-position: -48rem -336rem; }\n    67.5% { background-position: -96rem -336rem; }\n    68.25% { background-position: -144rem -336rem; }\n    69% { background-position: -192rem -336rem; }\n    69.75% { background-position: -240rem -336rem; }\n    70.5% { background-position: -288rem -336rem; }\n    71.25% { background-position: -336rem -336rem; }\n    72% { background-position: -384rem -336rem; }\n    72.75% { background-position: -432rem -336rem; }\n    73.5% { background-position: -480rem -336rem; }\n    74.25% { background-position: -528rem -336rem; }\n    75% { background-position: 0rem -384rem; }\n    75.75% { background-position: -48rem -384rem; }\n    76.5% { background-position: -96rem -384rem; }\n    77.25% { background-position: -144rem -384rem; }\n    78% { background-position: -192rem -384rem; }\n    78.75% { background-position: -240rem -384rem; }\n    79.5% { background-position: -288rem -384rem; }\n    80.25% { background-position: -336rem -384rem; }\n    81% { background-position: -384rem -384rem; }\n    81.75% { background-position: -432rem -384rem; }\n    82.5% { background-position: -480rem -384rem; }\n    83.25% { background-position: -528rem -384rem; }\n    84% { background-position: 0rem -432rem; }\n    84.75% { background-position: -48rem -432rem; }\n    85.5% { background-position: -96rem -432rem; }\n    86.25% { background-position: -144rem -432rem; }\n    87% { background-position: -192rem -432rem; }\n    87.75% { background-position: -240rem -432rem; }\n    88.5% { background-position: -288rem -432rem; }\n    89.25% { background-position: -336rem -432rem; }\n    90% { background-position: -384rem -432rem; }\n    90.75% { background-position: -432rem -432rem; }\n    91.5% { background-position: -480rem -432rem; }\n    92.25% { background-position: -528rem -432rem; }\n    93.75% { background-position: 0rem -480rem; }\n    94.5% { background-position: -48rem -480rem; }\n    95.25% { background-position: -96rem -480rem; }\n    96% { background-position: -144rem -480rem; }\n    96.75% { background-position: -192rem -480rem; }\n    97.5% { background-position: -240rem -480rem; }\n    98.25% { background-position: -288rem -480rem; }\n    99% { background-position: -336rem -480rem; }\n    99.75% { background-position: -384rem -480rem; }\n    100% { background-position: -432rem -480rem; }\n }\n\n @media (max-width: 800px) {\n    .spritesheet {\n        top: 0;\n        margin-bottom: 1rem;\n    }\n }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spritesheet": `l116pAhUGRvidbja3Snr`,
	"play": `DrKRsjH298rmCC_mdiMo`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationSm.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationSm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../software_projects/class-website/public/img/tyler-spritesheet-sm.png */ "../software_projects/class-website/public/img/tyler-spritesheet-sm.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.WJowwgIyV0h_yR6wpxdL {
  position: absolute;
  z-index: 1;
  transform: translate(100%, 100%);
  width: 9.6rem;
  height: 9.6rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  animation: rNgdABCo2UqaV5BSoxXW 8s steps(1) infinite;
}

@keyframes rNgdABCo2UqaV5BSoxXW {
  0% {
    background-position: 0rem 0rem;
  }
  0.75% {
    background-position: -9.6rem 0rem;
  }
  1.5% {
    background-position: -19.2rem 0rem;
  }
  2.25% {
    background-position: -28.8rem 0rem;
  }
  3% {
    background-position: -38.4rem 0rem;
  }
  3.75% {
    background-position: -48rem 0rem;
  }
  4.5% {
    background-position: -57.6rem 0rem;
  }
  5.25% {
    background-position: -67.2rem 0rem;
  }
  6% {
    background-position: -76.8rem 0rem;
  }
  6.75% {
    background-position: -86.4rem 0rem;
  }
  7.5% {
    background-position: -96rem 0rem;
  }
  8.25% {
    background-position: -105.6rem 0rem;
  }
  9.75% {
    background-position: 0rem -9.6rem;
  }
  10.5% {
    background-position: -9.6rem -9.6rem;
  }
  11.25% {
    background-position: -19.2rem -9.6rem;
  }
  12% {
    background-position: -28.8rem -9.6rem;
  }
  12.75% {
    background-position: -38.4rem -9.6rem;
  }
  13.5% {
    background-position: -48rem -9.6rem;
  }
  14.25% {
    background-position: -57.6rem -9.6rem;
  }
  15% {
    background-position: -67.2rem -9.6rem;
  }
  15.75% {
    background-position: -76.8rem -9.6rem;
  }
  16.5% {
    background-position: -86.4rem -9.6rem;
  }
  17.25% {
    background-position: -96rem -9.6rem;
  }
  18% {
    background-position: -105.6rem -9.6rem;
  }
  19.5% {
    background-position: 0rem -19.2rem;
  }
  20.25% {
    background-position: -9.6rem -19.2rem;
  }
  21% {
    background-position: -19.2rem -19.2rem;
  }
  21.75% {
    background-position: -28.8rem -19.2rem;
  }
  22.5% {
    background-position: -38.4rem -19.2rem;
  }
  23.25% {
    background-position: -48rem -19.2rem;
  }
  24% {
    background-position: -57.6rem -19.2rem;
  }
  24.75% {
    background-position: -67.2rem -19.2rem;
  }
  25.5% {
    background-position: -76.8rem -19.2rem;
  }
  26.25% {
    background-position: -86.4rem -19.2rem;
  }
  27% {
    background-position: -96rem -19.2rem;
  }
  27.75% {
    background-position: -105.6rem -19.2rem;
  }
  29.25% {
    background-position: 0rem -28.8rem;
  }
  30% {
    background-position: -9.6rem -28.8rem;
  }
  30.75% {
    background-position: -19.2rem -28.8rem;
  }
  31.5% {
    background-position: -28.8rem -28.8rem;
  }
  32.25% {
    background-position: -38.4rem -28.8rem;
  }
  33% {
    background-position: -48rem -28.8rem;
  }
  33.75% {
    background-position: -57.6rem -28.8rem;
  }
  34.5% {
    background-position: -67.2rem -28.8rem;
  }
  35.25% {
    background-position: -76.8rem -28.8rem;
  }
  36% {
    background-position: -86.4rem -28.8rem;
  }
  36.75% {
    background-position: -96rem -28.8rem;
  }
  37.5% {
    background-position: -105.6rem -28.8rem;
  }
  39% {
    background-position: 0rem -38.4rem;
  }
  39.75% {
    background-position: -9.6rem -38.4rem;
  }
  40.5% {
    background-position: -19.2rem -38.4rem;
  }
  41.25% {
    background-position: -28.8rem -38.4rem;
  }
  42% {
    background-position: -38.4rem -38.4rem;
  }
  42.75% {
    background-position: -48rem -38.4rem;
  }
  43.5% {
    background-position: -57.6rem -38.4rem;
  }
  44.25% {
    background-position: -67.2rem -38.4rem;
  }
  45% {
    background-position: -76.8rem -38.4rem;
  }
  45.75% {
    background-position: -86.4rem -38.4rem;
  }
  46.5% {
    background-position: -96rem -38.4rem;
  }
  47.25% {
    background-position: -105.6rem -38.4rem;
  }
  48% {
    background-position: 0rem -48;
  }
  48.75% {
    background-position: -9.6rem -48rem;
  }
  49.5% {
    background-position: -19.2rem -48rem;
  }
  50.25% {
    background-position: -28.8rem -48rem;
  }
  51% {
    background-position: -38.4rem -48rem;
  }
  51.75% {
    background-position: -48rem -48rem;
  }
  52.5% {
    background-position: -57.6rem -48rem;
  }
  53.25% {
    background-position: -67.2rem -48rem;
  }
  54% {
    background-position: -76.8rem -48rem;
  }
  54.75% {
    background-position: -86.4rem -48rem;
  }
  55.5% {
    background-position: -96rem -48rem;
  }
  56.25% {
    background-position: -105.6rem -48rem;
  }
  57% {
    background-position: 0rem -57.6rem;
  }
  57.75% {
    background-position: -9.6rem -57.6rem;
  }
  58.5% {
    background-position: -19.2rem -57.6rem;
  }
  59.25% {
    background-position: -28.8rem -57.6rem;
  }
  59.75% {
    background-position: -38.4rem -57.6rem;
  }
  60.75% {
    background-position: -48rem -57.6rem;
  }
  61.5% {
    background-position: -57.6rem -57.6rem;
  }
  62.25% {
    background-position: -67.2rem -57.6rem;
  }
  63% {
    background-position: -76.8rem -57.6rem;
  }
  63.75% {
    background-position: -86.4rem -57.6rem;
  }
  64.5% {
    background-position: -96rem -57.6rem;
  }
  65.25% {
    background-position: -105.6rem -57.6rem;
  }
  66% {
    background-position: 0rem -67.2rem;
  }
  66.75% {
    background-position: -9.6rem -67.2rem;
  }
  67.5% {
    background-position: -19.2rem -67.2rem;
  }
  68.25% {
    background-position: -28.8rem -67.2rem;
  }
  69% {
    background-position: -38.4rem -67.2rem;
  }
  69.75% {
    background-position: -48rem -67.2rem;
  }
  70.5% {
    background-position: -57.6rem -67.2rem;
  }
  71.25% {
    background-position: -67.2rem -67.2rem;
  }
  72% {
    background-position: -76.8rem -67.2rem;
  }
  72.75% {
    background-position: -86.4rem -67.2rem;
  }
  73.5% {
    background-position: -96rem -67.2rem;
  }
  74.25% {
    background-position: -105.6rem -67.2rem;
  }
  75% {
    background-position: 0rem -76.8rem;
  }
  75.75% {
    background-position: -9.6rem -76.8rem;
  }
  76.5% {
    background-position: -19.2rem -76.8rem;
  }
  77.25% {
    background-position: -28.8rem -76.8rem;
  }
  78% {
    background-position: -38.4rem -76.8rem;
  }
  78.75% {
    background-position: -48rem -76.8rem;
  }
  79.5% {
    background-position: -57.6rem -76.8rem;
  }
  80.25% {
    background-position: -67.2rem -76.8rem;
  }
  81% {
    background-position: -76.8rem -76.8rem;
  }
  81.75% {
    background-position: -86.4rem -76.8rem;
  }
  82.5% {
    background-position: -96rem -76.8rem;
  }
  83.25% {
    background-position: -105.6rem -76.8rem;
  }
  84% {
    background-position: 0rem -86.4rem;
  }
  84.75% {
    background-position: -9.6rem -86.4rem;
  }
  85.5% {
    background-position: -19.2rem -86.4rem;
  }
  86.25% {
    background-position: -28.8rem -86.4rem;
  }
  87% {
    background-position: -38.4rem -86.4rem;
  }
  87.75% {
    background-position: -48rem -86.4rem;
  }
  88.5% {
    background-position: -57.6rem -86.4rem;
  }
  89.25% {
    background-position: -67.2rem -86.4rem;
  }
  90% {
    background-position: -76.8rem -86.4rem;
  }
  90.75% {
    background-position: -86.4rem -86.4rem;
  }
  91.5% {
    background-position: -96rem -86.4rem;
  }
  92.25% {
    background-position: -105.6rem -86.4rem;
  }
  93% {
    background-position: 0rem -96rem;
  }
  93.75% {
    background-position: -9.6rem -96rem;
  }
  94.5% {
    background-position: -19.2rem -96rem;
  }
  95.25% {
    background-position: -28.8rem -96rem;
  }
  96% {
    background-position: -38.4rem -96rem;
  }
  96.75% {
    background-position: -48rem -96rem;
  }
  97.5% {
    background-position: -57.6rem -96rem;
  }
  98.25% {
    background-position: -67.2rem -96rem;
  }
  99% {
    background-position: -76.8rem -96rem;
  }
  99.75% {
    background-position: -86.4rem -96rem;
  }
  100% {
    background-position: -96rem -96rem;
  }
}
@media (max-width: 800px) {
  .WJowwgIyV0h_yR6wpxdL {
    top: 0;
    margin-bottom: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/SpriteAnimation/SpriteAnimationSm.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,UAAA;EACA,gCAAA;EACA,aAAA;EACA,cAAA;EACA,yDAAA;EACA,4BAAA;EACA,oDAAA;AACJ;;AAEC;EACG;IAAK,8BAAA;EAEP;EADE;IAAQ,iCAAA;EAIV;EAHE;IAAO,kCAAA;EAMT;EALE;IAAQ,kCAAA;EAQV;EAPE;IAAK,kCAAA;EAUP;EATE;IAAQ,gCAAA;EAYV;EAXE;IAAO,kCAAA;EAcT;EAbE;IAAQ,kCAAA;EAgBV;EAfE;IAAK,kCAAA;EAkBP;EAjBE;IAAQ,kCAAA;EAoBV;EAnBE;IAAO,gCAAA;EAsBT;EArBE;IAAQ,mCAAA;EAwBV;EAvBE;IAAQ,iCAAA;EA0BV;EAzBE;IAAQ,oCAAA;EA4BV;EA3BE;IAAS,qCAAA;EA8BX;EA7BE;IAAM,qCAAA;EAgCR;EA/BE;IAAS,qCAAA;EAkCX;EAjCE;IAAQ,mCAAA;EAoCV;EAnCE;IAAS,qCAAA;EAsCX;EArCE;IAAM,qCAAA;EAwCR;EAvCE;IAAS,qCAAA;EA0CX;EAzCE;IAAQ,qCAAA;EA4CV;EA3CE;IAAS,mCAAA;EA8CX;EA7CE;IAAM,sCAAA;EAgDR;EA/CE;IAAQ,kCAAA;EAkDV;EAjDE;IAAS,qCAAA;EAoDX;EAnDE;IAAM,sCAAA;EAsDR;EArDE;IAAS,sCAAA;EAwDX;EAvDE;IAAQ,sCAAA;EA0DV;EAzDE;IAAS,oCAAA;EA4DX;EA3DE;IAAM,sCAAA;EA8DR;EA7DE;IAAS,sCAAA;EAgEX;EA/DE;IAAQ,sCAAA;EAkEV;EAjEE;IAAS,sCAAA;EAoEX;EAnEE;IAAM,oCAAA;EAsER;EArEE;IAAS,uCAAA;EAwEX;EAvEE;IAAS,kCAAA;EA0EX;EAzEE;IAAM,qCAAA;EA4ER;EA3EE;IAAS,sCAAA;EA8EX;EA7EE;IAAQ,sCAAA;EAgFV;EA/EE;IAAS,sCAAA;EAkFX;EAjFE;IAAM,oCAAA;EAoFR;EAnFE;IAAS,sCAAA;EAsFX;EArFE;IAAQ,sCAAA;EAwFV;EAvFE;IAAS,sCAAA;EA0FX;EAzFE;IAAM,sCAAA;EA4FR;EA3FE;IAAS,oCAAA;EA8FX;EA7FE;IAAQ,uCAAA;EAgGV;EA/FE;IAAM,kCAAA;EAkGR;EAjGE;IAAS,qCAAA;EAoGX;EAnGE;IAAQ,sCAAA;EAsGV;EArGE;IAAS,sCAAA;EAwGX;EAvGE;IAAM,sCAAA;EA0GR;EAzGE;IAAS,oCAAA;EA4GX;EA3GE;IAAQ,sCAAA;EA8GV;EA7GE;IAAS,sCAAA;EAgHX;EA/GE;IAAM,sCAAA;EAkHR;EAjHE;IAAS,sCAAA;EAoHX;EAnHE;IAAQ,oCAAA;EAsHV;EArHE;IAAS,uCAAA;EAwHX;EAvHE;IAAM,6BAAA;EA0HR;EAzHE;IAAS,mCAAA;EA4HX;EA3HE;IAAQ,oCAAA;EA8HV;EA7HE;IAAS,oCAAA;EAgIX;EA/HE;IAAM,oCAAA;EAkIR;EAjIE;IAAS,kCAAA;EAoIX;EAnIE;IAAQ,oCAAA;EAsIV;EArIE;IAAS,oCAAA;EAwIX;EAvIE;IAAM,oCAAA;EA0IR;EAzIE;IAAS,oCAAA;EA4IX;EA3IE;IAAQ,kCAAA;EA8IV;EA7IE;IAAS,qCAAA;EAgJX;EA/IE;IAAM,kCAAA;EAkJR;EAjJE;IAAS,qCAAA;EAoJX;EAnJE;IAAQ,sCAAA;EAsJV;EArJE;IAAS,sCAAA;EAwJX;EAvJE;IAAS,sCAAA;EA0JX;EAzJE;IAAS,oCAAA;EA4JX;EA3JE;IAAQ,sCAAA;EA8JV;EA7JE;IAAS,sCAAA;EAgKX;EA/JE;IAAM,sCAAA;EAkKR;EAjKE;IAAS,sCAAA;EAoKX;EAnKE;IAAQ,oCAAA;EAsKV;EArKE;IAAS,uCAAA;EAwKX;EAvKE;IAAM,kCAAA;EA0KR;EAzKE;IAAS,qCAAA;EA4KX;EA3KE;IAAQ,sCAAA;EA8KV;EA7KE;IAAS,sCAAA;EAgLX;EA/KE;IAAM,sCAAA;EAkLR;EAjLE;IAAS,oCAAA;EAoLX;EAnLE;IAAQ,sCAAA;EAsLV;EArLE;IAAS,sCAAA;EAwLX;EAvLE;IAAM,sCAAA;EA0LR;EAzLE;IAAS,sCAAA;EA4LX;EA3LE;IAAQ,oCAAA;EA8LV;EA7LE;IAAS,uCAAA;EAgMX;EA/LE;IAAM,kCAAA;EAkMR;EAjME;IAAS,qCAAA;EAoMX;EAnME;IAAQ,sCAAA;EAsMV;EArME;IAAS,sCAAA;EAwMX;EAvME;IAAM,sCAAA;EA0MR;EAzME;IAAS,oCAAA;EA4MX;EA3ME;IAAQ,sCAAA;EA8MV;EA7ME;IAAS,sCAAA;EAgNX;EA/ME;IAAM,sCAAA;EAkNR;EAjNE;IAAS,sCAAA;EAoNX;EAnNE;IAAQ,oCAAA;EAsNV;EArNE;IAAS,uCAAA;EAwNX;EAvNE;IAAM,kCAAA;EA0NR;EAzNE;IAAS,qCAAA;EA4NX;EA3NE;IAAQ,sCAAA;EA8NV;EA7NE;IAAS,sCAAA;EAgOX;EA/NE;IAAM,sCAAA;EAkOR;EAjOE;IAAS,oCAAA;EAoOX;EAnOE;IAAQ,sCAAA;EAsOV;EArOE;IAAS,sCAAA;EAwOX;EAvOE;IAAM,sCAAA;EA0OR;EAzOE;IAAS,sCAAA;EA4OX;EA3OE;IAAQ,oCAAA;EA8OV;EA7OE;IAAS,uCAAA;EAgPX;EA/OE;IAAM,gCAAA;EAkPR;EAjPE;IAAS,mCAAA;EAoPX;EAnPE;IAAQ,oCAAA;EAsPV;EArPE;IAAS,oCAAA;EAwPX;EAvPE;IAAM,oCAAA;EA0PR;EAzPE;IAAS,kCAAA;EA4PX;EA3PE;IAAQ,oCAAA;EA8PV;EA7PE;IAAS,oCAAA;EAgQX;EA/PE;IAAM,oCAAA;EAkQR;EAjQE;IAAS,oCAAA;EAoQX;EAnQE;IAAO,kCAAA;EAsQT;AACF;AApQC;EACG;IACI,MAAA;IACA,mBAAA;EAsQN;AACF","sourcesContent":[".spritesheet {\n    position: absolute; \n    z-index: 1;\n    transform: translate(100%, 100%);\n    width: 9.6rem;\n    height: 9.6rem;\n    background-image: url('/Users/tylerpierson/software_projects/class-website/public/img/tyler-spritesheet-sm.png');\n    background-repeat: no-repeat;\n    animation: play 8s steps(1) infinite;\n }\n \n @keyframes play {\n    0% { background-position: 0rem 0rem; }\n    0.75% { background-position: -9.6rem 0rem; }\n    1.5% { background-position: -19.2rem 0rem; }\n    2.25% { background-position: -28.8rem 0rem; }\n    3% { background-position: -38.4rem 0rem; }\n    3.75% { background-position: -48rem 0rem; }\n    4.5% { background-position: -57.6rem 0rem; }\n    5.25% { background-position: -67.2rem 0rem; }\n    6% { background-position: -76.8rem 0rem; }\n    6.75% { background-position: -86.4rem 0rem; }\n    7.5% { background-position: -96rem 0rem; }\n    8.25% { background-position: -105.6rem 0rem; }\n    9.75% { background-position: 0rem -9.6rem; }\n    10.5% { background-position: -9.6rem -9.6rem; }\n    11.25% { background-position: -19.2rem -9.6rem; }\n    12% { background-position: -28.8rem -9.6rem; }\n    12.75% { background-position: -38.4rem -9.6rem; }\n    13.5% { background-position: -48rem -9.6rem; }\n    14.25% { background-position: -57.6rem -9.6rem; }\n    15% { background-position: -67.2rem -9.6rem; }\n    15.75% { background-position: -76.8rem -9.6rem; }\n    16.5% { background-position: -86.4rem -9.6rem; }\n    17.25% { background-position: -96rem -9.6rem; }\n    18% { background-position: -105.6rem -9.6rem; }\n    19.5% { background-position: 0rem -19.2rem; }\n    20.25% { background-position: -9.6rem -19.2rem; }\n    21% { background-position: -19.2rem -19.2rem; } \n    21.75% { background-position: -28.8rem -19.2rem; }\n    22.5% { background-position: -38.4rem -19.2rem; }\n    23.25% { background-position: -48rem -19.2rem; }\n    24% { background-position: -57.6rem -19.2rem; }\n    24.75% { background-position: -67.2rem -19.2rem; }\n    25.5% { background-position: -76.8rem -19.2rem; }\n    26.25% { background-position: -86.4rem -19.2rem; }\n    27% { background-position: -96rem -19.2rem; }\n    27.75% { background-position: -105.6rem -19.2rem; }\n    29.25% { background-position: 0rem -28.8rem; }\n    30% { background-position: -9.6rem -28.8rem; }\n    30.75% { background-position: -19.2rem -28.8rem; }\n    31.5% { background-position: -28.8rem -28.8rem; }\n    32.25% { background-position: -38.4rem -28.8rem; }\n    33% { background-position: -48rem -28.8rem; }\n    33.75% { background-position: -57.6rem -28.8rem; }\n    34.5% { background-position: -67.2rem -28.8rem; }\n    35.25% { background-position: -76.8rem -28.8rem; }\n    36% { background-position: -86.4rem -28.8rem; }\n    36.75% { background-position: -96rem -28.8rem; }\n    37.5% { background-position: -105.6rem -28.8rem; }\n    39% { background-position: 0rem -38.4rem; }\n    39.75% { background-position: -9.6rem -38.4rem; }\n    40.5% { background-position: -19.2rem -38.4rem; }\n    41.25% { background-position: -28.8rem -38.4rem; }\n    42% { background-position: -38.4rem -38.4rem; }\n    42.75% { background-position: -48rem -38.4rem; }\n    43.5% { background-position: -57.6rem -38.4rem; }\n    44.25% { background-position: -67.2rem -38.4rem; }\n    45% { background-position: -76.8rem -38.4rem; }\n    45.75% { background-position: -86.4rem -38.4rem; }\n    46.5% { background-position: -96rem -38.4rem; }\n    47.25% { background-position: -105.6rem -38.4rem; }\n    48% { background-position: 0rem -48; }\n    48.75% { background-position: -9.6rem -48rem; }\n    49.5% { background-position: -19.2rem -48rem; }\n    50.25% { background-position: -28.8rem -48rem; }\n    51% { background-position: -38.4rem -48rem; }\n    51.75% { background-position: -48rem -48rem; }\n    52.5% { background-position: -57.6rem -48rem; }\n    53.25% { background-position: -67.2rem -48rem; }\n    54% { background-position: -76.8rem -48rem; }\n    54.75% { background-position: -86.4rem -48rem; }\n    55.5% { background-position: -96rem -48rem; }\n    56.25% { background-position: -105.6rem -48rem; }\n    57% { background-position: 0rem -57.6rem; }\n    57.75% { background-position: -9.6rem -57.6rem; }\n    58.5% { background-position: -19.2rem -57.6rem; }\n    59.25% { background-position: -28.8rem -57.6rem; }\n    59.75% { background-position: -38.4rem -57.6rem; }\n    60.75% { background-position: -48rem -57.6rem; }\n    61.5% { background-position: -57.6rem -57.6rem; }\n    62.25% { background-position: -67.2rem -57.6rem; }\n    63% { background-position: -76.8rem -57.6rem; }\n    63.75% { background-position: -86.4rem -57.6rem; }\n    64.5% { background-position: -96rem -57.6rem; }\n    65.25% { background-position: -105.6rem -57.6rem; }\n    66% { background-position: 0rem -67.2rem; }\n    66.75% { background-position: -9.6rem -67.2rem; }\n    67.5% { background-position: -19.2rem -67.2rem; }\n    68.25% { background-position: -28.8rem -67.2rem; }\n    69% { background-position: -38.4rem -67.2rem; }\n    69.75% { background-position: -48rem -67.2rem; }\n    70.5% { background-position: -57.6rem -67.2rem; }\n    71.25% { background-position: -67.2rem -67.2rem; }\n    72% { background-position: -76.8rem -67.2rem; }\n    72.75% { background-position: -86.4rem -67.2rem; }\n    73.5% { background-position: -96rem -67.2rem; }\n    74.25% { background-position: -105.6rem -67.2rem; }\n    75% { background-position: 0rem -76.8rem; }\n    75.75% { background-position: -9.6rem -76.8rem; }\n    76.5% { background-position: -19.2rem -76.8rem; }\n    77.25% { background-position: -28.8rem -76.8rem; }\n    78% { background-position: -38.4rem -76.8rem; }\n    78.75% { background-position: -48rem -76.8rem; }\n    79.5% { background-position: -57.6rem -76.8rem; }\n    80.25% { background-position: -67.2rem -76.8rem; }\n    81% { background-position: -76.8rem -76.8rem; }\n    81.75% { background-position: -86.4rem -76.8rem; }\n    82.5% { background-position: -96rem -76.8rem; }\n    83.25% { background-position: -105.6rem -76.8rem; }\n    84% { background-position: 0rem -86.4rem; }\n    84.75% { background-position: -9.6rem -86.4rem; }\n    85.5% { background-position: -19.2rem -86.4rem; }\n    86.25% { background-position: -28.8rem -86.4rem; }\n    87% { background-position: -38.4rem -86.4rem; }\n    87.75% { background-position: -48rem -86.4rem; }\n    88.5% { background-position: -57.6rem -86.4rem; }\n    89.25% { background-position: -67.2rem -86.4rem; }\n    90% { background-position: -76.8rem -86.4rem; }\n    90.75% { background-position: -86.4rem -86.4rem; }\n    91.5% { background-position: -96rem -86.4rem; }\n    92.25% { background-position: -105.6rem -86.4rem; }\n    93% { background-position: 0rem -96rem; }\n    93.75% { background-position: -9.6rem -96rem; }\n    94.5% { background-position: -19.2rem -96rem; }\n    95.25% { background-position: -28.8rem -96rem; }\n    96% { background-position: -38.4rem -96rem; }\n    96.75% { background-position: -48rem -96rem; }\n    97.5% { background-position: -57.6rem -96rem; }\n    98.25% { background-position: -67.2rem -96rem; }    \n    99% { background-position: -76.8rem -96rem; }\n    99.75% { background-position: -86.4rem -96rem; }\n    100% { background-position: -96rem -96rem; }\n }\n\n @media (max-width: 800px) {\n    .spritesheet {\n        top: 0;\n        margin-bottom: 1rem;\n    }\n }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spritesheet": `WJowwgIyV0h_yR6wpxdL`,
	"play": `rNgdABCo2UqaV5BSoxXW`
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
  --bg-color: aliceblue;
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
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;EACA,qBAAA;EACA,+BAAA;EACA,yCAAA;EACA,6BAAA;EACA,sCAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,mJAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AACJ;;AAEA;EACI,iCAAA;AACJ","sourcesContent":[":root {\n    --heading-color: rgb(100, 237, 207);\n    --bg-color: aliceblue;\n    --btn-color: rgb(100, 237, 207);\n    --btn-animation: rgba(171, 188, 219, 0.3);\n    --input-color: rgb(8, 36, 87);\n    --nav-border: rgba(171, 188, 219, 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-size: 10px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 400;\n    letter-spacing: .2rem;\n    text-transform: uppercase;\n}\n\nbody {\n    background-color: var(--bg-color);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.lkSfnDUQxn7c_fywXKpE {
  display: flex;
  justify-content: center;
  margin: 12vh 2rem 0;
  height: 88vh;
  width: 100%;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj {
  width: 50%;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .W7Ys6_Es2My6z5Xw1gg9 {
  color: rgb(75, 75, 75);
  background-color: rgba(100, 237, 207, 0.075);
  padding: 5rem;
  border-radius: 1rem;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .o7En6rTPDTw_64wL3siB {
  font-weight: bold;
  color: var(--heading-color);
  text-shadow: 0.5px 0.5px 1px black;
}
.lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .W7Ys6_Es2My6z5Xw1gg9, .lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj .o7En6rTPDTw_64wL3siB {
  width: 90%;
  line-height: 3rem;
  font-size: 1.3rem;
  margin: 3rem 0;
}
.lkSfnDUQxn7c_fywXKpE .uuoSQC2OKXxAZt1ssg_l {
  transform: rotate(10deg);
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .lkSfnDUQxn7c_fywXKpE {
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: visible;
    padding-bottom: 3rem;
    margin-top: 5vh;
  }
  .lkSfnDUQxn7c_fywXKpE .w0ja4CsHvALVP85RyPJj {
    width: 100%;
    z-index: 1;
  }
  .lkSfnDUQxn7c_fywXKpE .uuoSQC2OKXxAZt1ssg_l {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    opacity: 0.4;
    transform: rotate(0);
    border-bottom-left-radius: 50%;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/AboutPage/AboutPage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;AACJ;AAAI;EACI,UAAA;AAER;AADQ;EACI,sBAAA;EACA,4CAAA;EACA,aAAA;EACA,mBAAA;AAGZ;AADQ;EACI,iBAAA;EACA,2BAAA;EACA,kCAAA;AAGZ;AADQ;EACI,UAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;AAGZ;AAAI;EACI,wBAAA;AAER;;AAEA,oEAAA;AACA;EACI;IACI,sBAAA;IACA,mBAAA;IACA,YAAA;IACA,iBAAA;IACA,oBAAA;IACA,eAAA;EACN;EAAM;IACI,WAAA;IACA,UAAA;EAEV;EAAM;IACI,kBAAA;IACA,MAAA;IACA,QAAA;IACA,UAAA;IACA,YAAA;IACA,oBAAA;IACA,8BAAA;EAEV;AACF","sourcesContent":[".AboutPage {\n    display: flex;\n    justify-content: center;\n    margin: 12vh 2rem 0;\n    height: 88vh;\n    width: 100%;\n    .textContainer {\n        width: 50%;\n        .bio {\n            color: rgb(75, 75, 75);\n            background-color: rgba(100, 237, 207, 0.075);\n            padding: 5rem;\n            border-radius: 1rem;\n        }\n        .highlight {\n            font-weight: bold;\n            color: var(--heading-color);\n            text-shadow: .5px .5px 1px black;\n        }\n        .bio, .highlight {\n            width: 90%;\n            line-height: 3rem;\n            font-size: 1.3rem;\n            margin: 3rem 0;\n        }\n    }\n    .image {\n        transform: rotate(10deg);\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .AboutPage {\n        flex-direction: column;\n        align-items: center;\n        height: 100%;\n        overflow: visible;\n        padding-bottom: 3rem;\n        margin-top: 5vh;\n        .textContainer {\n            width: 100%;\n            z-index: 1;\n        }\n        .image {\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 80%;\n            opacity: .4;\n            transform: rotate(0);\n            border-bottom-left-radius: 50%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"AboutPage": `lkSfnDUQxn7c_fywXKpE`,
	"textContainer": `w0ja4CsHvALVP85RyPJj`,
	"bio": `W7Ys6_Es2My6z5Xw1gg9`,
	"highlight": `o7En6rTPDTw_64wL3siB`,
	"image": `uuoSQC2OKXxAZt1ssg_l`
};
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
___CSS_LOADER_EXPORT___.push([module.id, `.YLhl5O0tSVyQw_Ud6GeH {
  height: 88vh;
  width: 100%;
  margin-top: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb {
  background-color: rgb(45, 51, 50);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3rem;
  padding: 3rem;
  width: 40%;
  height: 90%;
}
.YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .kQIC4I2TlLl_ToATaqms {
  font-size: 3.4vw;
}
.YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv .im3q2K_NmtDJvH5Yd8Ha {
  margin-bottom: 2rem;
}
.YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv .fRyMHED_wOojI83LzmDp {
  border-radius: 1rem;
  height: 8rem;
  width: 25vw;
  margin-bottom: 3rem;
  padding: 1rem;
}
.YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv .fRyMHED_wOojI83LzmDp:focus {
  outline: none;
  box-shadow: 0 0 1rem var(--btn-color);
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1000px) {
  .YLhl5O0tSVyQw_Ud6GeH {
    margin-top: 5vh;
  }
  .YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb {
    width: 90vw;
  }
  .YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv {
    width: 100%;
  }
  .YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv .im3q2K_NmtDJvH5Yd8Ha {
    width: 80%;
  }
  .YLhl5O0tSVyQw_Ud6GeH .YSnwU9tSueWAfFZaXFGb .OZRoCQy7AvGXd7je1Siv .fRyMHED_wOojI83LzmDp {
    width: 80%;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/ContactPage/ContactPage.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AACJ;AAAI;EACI,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,UAAA;EACA,WAAA;AAER;AADQ;EACI,gBAAA;AAGZ;AADQ;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAGZ;AAFY;EACI,mBAAA;AAIhB;AAFY;EACI,mBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;AAIhB;AAHgB;EACI,aAAA;EACA,qCAAA;AAKpB;;AAEA,oEAAA;AACA;EACI;IACI,eAAA;EACN;EAAM;IACI,WAAA;EAEV;EADU;IACI,WAAA;EAGd;EAFc;IACI,UAAA;EAIlB;EAFc;IACI,UAAA;EAIlB;AACF","sourcesContent":[".ContactPage {\n    height: 88vh;\n    width: 100%;\n    margin-top: 12vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    .FormContainer {\n        background-color: rgb(45, 51, 50);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        border-radius: 3rem;\n        padding: 3rem;\n        width: 40%;\n        height: 90%;\n        .header {\n            font-size: 3.4vw;\n        }\n        .Form {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            .input {\n                margin-bottom: 2rem;\n            }\n            .message {\n                border-radius: 1rem;\n                height: 8rem;\n                width: 25vw;\n                margin-bottom: 3rem;\n                padding: 1rem;\n                &:focus {\n                    outline: none;\n                    box-shadow: 0 0 1rem var(--btn-color);\n                }\n            }\n        }\n    }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (max-width: 1000px) {\n    .ContactPage {\n        margin-top: 5vh;\n        .FormContainer {\n            width: 90vw;\n            .Form {\n                width: 100%;\n                .input {\n                    width: 80%;\n                }\n                .message {\n                    width: 80%;\n                }\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ContactPage": `YLhl5O0tSVyQw_Ud6GeH`,
	"FormContainer": `YSnwU9tSueWAfFZaXFGb`,
	"header": `kQIC4I2TlLl_ToATaqms`,
	"Form": `OZRoCQy7AvGXd7je1Siv`,
	"input": `im3q2K_NmtDJvH5Yd8Ha`,
	"message": `fRyMHED_wOojI83LzmDp`
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

/***/ "./src/components/SpriteAnimation/SpriteAnimation.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimation.module.scss ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SpriteAnimation.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimation.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationMed.module.scss":
/*!***********************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationMed.module.scss ***!
  \***********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SpriteAnimationMed.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationMed.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationMed_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SpriteAnimation/SpriteAnimationSm.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/SpriteAnimation/SpriteAnimationSm.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SpriteAnimationSm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SpriteAnimation/SpriteAnimationSm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SpriteAnimationSm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/pages/AboutPage/AboutPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/AboutPage/AboutPage.module.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AboutPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AboutPage/AboutPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AboutPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./public/img/tyler-spritesheet.png":
/*!******************************************!*\
  !*** ./public/img/tyler-spritesheet.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baff80dbdc01beba1387.png";

/***/ }),

/***/ "../software_projects/class-website/public/img/cap-walking-spritesheet.png":
/*!*********************************************************************************!*\
  !*** ../software_projects/class-website/public/img/cap-walking-spritesheet.png ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fccd3022acd7762640b.png";

/***/ }),

/***/ "../software_projects/class-website/public/img/hulk-sprite.png":
/*!*********************************************************************!*\
  !*** ../software_projects/class-website/public/img/hulk-sprite.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68f8113d10e82d8582a5.png";

/***/ }),

/***/ "../software_projects/class-website/public/img/tyler-spritesheet-med.png":
/*!*******************************************************************************!*\
  !*** ../software_projects/class-website/public/img/tyler-spritesheet-med.png ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3f712b5144ec7c58965.png";

/***/ }),

/***/ "../software_projects/class-website/public/img/tyler-spritesheet-sm.png":
/*!******************************************************************************!*\
  !*** ../software_projects/class-website/public/img/tyler-spritesheet-sm.png ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4031c99fef0abdcd87ad.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-13f77f"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.10b54e9a577bdc9fede652c9e0a98340.js.map