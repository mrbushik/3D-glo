/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_textForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/textForm */ \"./modules/textForm.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 march 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_textForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.sendForm)([{\n    formId: 'form1',\n    someElem: [{\n        type: 'block',\n        id: 'total',\n    }]\n}, {\n    formId: 'form2',\n    someElem: [{\n        type: 'block',\n        id: 'total',\n    }]\n}, {\n    formId: 'form3',\n    someElem: [{\n        type: 'block',\n        id: 'total',\n    }]\n}]);\n// sendForm({\n//     formId: 'form2',\n//     someElem: [{\n//         type: 'block',\n//         id: 'total',\n//     }]\n// });\n// sendForm({\n//     formId: 'form3',\n//     someElem: [{\n//         type: 'block',\n//         id: 'total',\n//     }]\n// });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\nconst calc = (price = 100) => {\n    const calcBlock = document.querySelector('.calc-block');\n    const calcType = document.querySelector('.calc-type');\n    const calcSquare = document.querySelector('.calc-square');\n    const calcCount = document.querySelector('.calc-count');\n    const calcDay = document.querySelector('.calc-day');\n    const total = document.getElementById('total');\n    const calcTypeOne = calcType.querySelector('option');\n    total.style.opacity = 0;\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n        const calcSquareValue = calcSquare.value;\n\n        let totalValue = 0;\n        let calcCountValue = 1;\n        let calcDayValue = 1;\n\n        //расчет по дням\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2;\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5;\n\n        }\n        //расчет по комнатам\n        if (calcCount.value > 1) {\n            calcCountValue += +calcCount.value / 10;\n        }\n        if (calcSquare.value && calcSquare.value) {\n            totalValue = price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue;\n            totalValue = Math.round(totalValue)\n        } else {\n            totalValue = 0;\n        }\n        total.textContent = totalValue;\n    };\n    calcBlock.addEventListener('input', (e) => {\n        // countCalc();\n        if (e.target === calcType || e.target === calcSquare ||\n            e.target === calcCount || e.target === calcDay) {\n            countCalc();\n            (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 1000,\n                timing(x, timeFraction) {\n                    return timeFraction;\n                },\n                draw(progress) {\n\n                    total.style.opacity = progress;\n\n                }\n\n            });\n        }\n    });\n    calcTypeOne.addEventListener('click', () => {\n        calcSquare.value = '';\n        calcCount.value = '';\n        calcDay.value = '';\n        total.textContent = 0;\n    });\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = function ({\n    timing,\n    draw,\n    duration\n}) {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) {\n            timeFraction = 1;\n        }\n\n        // вычисление текущего состояния анимации\n        let progress = timing(1, timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n};\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu');\n    const menu = document.querySelector('menu');\n    const closeBtn = menu.querySelector('.close-btn');\n    const menuItems = menu.querySelectorAll('ul>li>a');\n    const header = document.querySelector('header');\n    menu.style.opacity = 0;\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu');\n    };\n\n    header.addEventListener('click', (e) => {\n        if (e.target.closest('.menu')) {\n            handleMenu();\n            menu.style.opacity = 1;\n        }\n    });\n\n\n    menu.addEventListener('click', (e) => {\n        if (e.target.classList == 'close-btn') {\n            e.preventDefault();\n            handleMenu();\n            menu.style.opacity = 0;\n\n        }\n        menuItems.forEach((menuItem) => {\n            if (e.target === menuItem) {\n\n\n                handleMenu();\n            } else if (e.target.classList === 'close-btn') {\n                handleMenu();\n            }\n        });\n\n    });\n\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\nconst modal = () => {\n    const buttons = document.querySelectorAll('.popup-btn');\n    const modal = document.querySelector('.popup');\n    const closeBtn = modal.querySelector('.popup-close');\n    const content = modal.querySelector('.popup-content');\n    const menu = document.querySelector('.menu');\n\n\n    buttons.forEach(btn => {\n        if (document.documentElement.offsetWidth > 768) {\n            btn.addEventListener('click', () => {\n                (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 500,\n                    timing(x, timeFraction) {\n                        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);\n                    },\n                    draw(progress) {\n                        modal.style.display = 'block';\n                        content.style.top = progress * 25 + '%';\n                    }\n                });\n\n            });\n        } else if (document.documentElement.offsetWidth < 768) {\n            btn.addEventListener('click', () => {\n                modal.style.display = 'block';\n            })\n\n        }\n\n    });\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            modal.style.display = 'none';\n        }\n    });\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n \n const sendForm = ({\n     formId,\n     someElem = []\n }) => {\n     const nameInput = document.getElementById(formId + '-name');\n     const phoneInput = document.getElementById(formId + '-phone');\n     const form = document.getElementById(formId);\n\n     const statusBlock = document.createElement('div');\n     statusBlock.className = 'statusBlock';\n     statusBlock.style.color = 'white';\n\n     const loadText = 'загрузка...';\n     const errorText = 'Ошибка...';\n     const successText = 'Спасибо, наш менеджер с вами свяжется';\n     const deleteStatusBlock = () => {\n         statusBlock.textContent = '';\n     };\n\n     const validate = (list) => {\n         nameInput.value.trim();\n         let success = true;\n         list.forEach((input) => {\n             //   if (!input.classList.contains('success')) {\n             if (input.value.trim() === '') {\n                 success = false;\n                 //проверка на буквы в имени\n\n             } else if (nameInput.value.length < 2) {\n                 success = false;\n\n                 //проверка на количество цифр в номере\n             } else if (phoneInput.value.length < 4 || phoneInput.value.length > 16) {\n                 success = false;\n             }\n         });\n         return success;\n     };\n\n     const sendData = (data) => {\n         return fetch(' https://jsonplaceholder.typicode.com/posts', {\n             method: 'POST',\n             body: JSON.stringify(data),\n             headers: {\n                 'Content-Type': 'application/json'\n             }\n         }).then(res => res.json());\n     };\n\n     const submitForm = () => {\n\n         statusBlock.textContent = loadText;\n         form.append(statusBlock);\n         const formDate = new FormData(form);\n         const formBody = {};\n         const formElements = form.querySelectorAll('input');\n\n         formDate.forEach((val, key) => {\n             formBody[key] = val;\n         });\n         someElem.forEach((elem) => {\n             const element = document.getElementById(elem.id);\n             if (element.textContent === '0') {\n\n             } else {\n                 if (elem.type === 'block') {\n                     formBody[elem.id] = element.textContent;\n                 } else if (elem.type === 'input') {\n                     formBody[elem.id] = element.value;\n                 }\n             }\n\n         });\n\n         if (validate(formElements)) {\n             sendData(formBody)\n                 .then(data => {\n                     statusBlock.textContent = successText;\n                     setTimeout(deleteStatusBlock, 3000);\n                     formElements.forEach(input => {\n                         input.value = '';\n                     });\n                 })\n                 .catch(error => {\n                     statusBlock.textContent = errorText;\n                 });\n         } else {\n             statusBlock.textContent = errorText;\n             setTimeout(deleteStatusBlock, 3000);\n             alert('заполните все формы');\n\n         }\n     };\n     try {\n         if (!form) {\n             throw new Error('добавьте элемент');\n         }\n         form.addEventListener('submit', (e) => {\n             e.preventDefault();\n             submitForm();\n\n         });\n     } catch (error) {\n         console.log(error.message);\n     }\n };\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content');\n    const slides = document.querySelectorAll('.portfolio-item');\n    const dotsList = document.querySelector('.portfolio-dots');\n    const sliderItem = document.querySelectorAll('.portfolio-item');\n\n    let currentSlide = 0;\n    let interval;\n    const timeInterval = 2000;\n    let quantityDots = sliderItem.length;\n    let dots = [];\n\n    //создание dots\n    const createDots = () => {\n        while (quantityDots) {\n            let dotsElem = document.createElement('li');\n            dotsElem.classList.add('dot');\n            dotsList.append(dotsElem);\n            dots.push(dotsElem);\n            quantityDots--;\n\n        }\n        dots[0].classList.add('dot-active');\n    };\n\n\n    const pervSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass);\n    };\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass);\n    };\n\n\n    const autoSlide = () => {\n        pervSlide(slides, currentSlide, 'portfolio-item-active');\n        pervSlide(dots, currentSlide, 'dot-active');\n        currentSlide++;\n\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    };\n\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault();\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return;\n        }\n        pervSlide(slides, currentSlide, 'portfolio-item-active');\n        pervSlide(dots, currentSlide, 'dot-active');\n\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++;\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--;\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index;\n                }\n            });\n        }\n        if (currentSlide >= slides.length) {\n            currentSlide = 0;\n        }\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1;\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(dots, currentSlide, 'dot-active');\n    });\n\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide();\n        }\n    }, true);\n\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval);\n        }\n    }, true);\n\n    createDots();\n    startSlide(timeInterval);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header');\n    const tabContent = document.querySelectorAll('.service-tab');\n    const tabs = document.querySelectorAll('.service-header-tab');\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab');\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove('active');\n                    tabContent[index].classList.add('d-none');\n                }\n            });\n        }\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/textForm.js":
/*!*****************************!*\
  !*** ./modules/textForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst textForm = () => {\n    const mainName = document.getElementById('form1-name');\n    const mainEmail = document.getElementById('form1-email');\n    const mainNumber = document.getElementById('form1-phone');\n    const calcInput = document.querySelectorAll('.calc-item');\n    const questionFormName = document.getElementById('form2-name');\n    const questionFormEmail = document.getElementById('form2-email');\n    const questionFormNumber = document.getElementById('form2-phone');\n    const questionFormMassage = document.getElementById('form2-message');\n    const modalName = document.getElementById('form3-name');\n    const modalPhone = document.getElementById('form3-phone');\n    const modalEmail = document.getElementById('form3-email');\n\n    //Первая форма\n\n    mainName.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s]/, '').trimLeft();\n    });\n    mainEmail.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\w\\-\\@\\.\\!\\~\\*\\']/gi, '');\n    });\n    mainNumber.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\d\\-\\(\\)\\+]/, '');\n    });\n    // калькулятор\n    calcInput[1].addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\d]/, '');\n    });\n    calcInput[2].addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\d]/, '');\n    });\n    calcInput[3].addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\d]/, '');\n    });\n    // форма с оставшимися вопросами\n    questionFormName.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\а-яА-Я\\s]/, '').trimLeft();\n    });\n    questionFormEmail.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\w\\-\\@\\.\\!\\~\\*\\']/gi, '');\n    });\n    questionFormNumber.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\d\\-\\(\\)\\+]/, '');\n    });\n    questionFormMassage.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\а-яА-Я]/, '');\n    });\n    //модалка\n    modalName.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\s]/, '').trimLeft();\n    });\n    modalPhone.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\d\\-\\(\\)\\+]/, '');\n    });\n    modalEmail.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/[^\\w\\-\\@\\.\\!\\~\\*\\']/gi, '');\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textForm);\n\n//# sourceURL=webpack:///./modules/textForm.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    let idInterval;\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n\n    const zeroFormat = function (x) {\n        if (x < 10) {\n            x = '0' + x;\n        }\n        return x;\n    };\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n        let timeRemaining = (dateStop - dateNow) / 1000;\n        let hours = Math.floor((timeRemaining / 60 / 60));\n        let minutes = Math.floor((timeRemaining / 60) % 60);\n        let seconds = Math.floor(timeRemaining % 60);\n        return {\n            hours,\n            minutes,\n            seconds,\n            timeRemaining,\n        };\n    };\n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n        timerHours.textContent = getTime.hours;\n        timerMinutes.textContent = getTime.minutes;\n        timerSeconds.textContent = getTime.seconds;\n        if (getTime.timeRemaining < 0) {\n            timerHours.textContent = '00';\n            timerHours.style.color = 'red';\n            timerMinutes.textContent = '00';\n            timerMinutes.style.color = 'red';\n            timerSeconds.textContent = '00';\n            timerSeconds.style.color = 'red';\n\n\n        } else if (getTime.timeRemaining > 0) {\n            timerHours.textContent = zeroFormat(getTime.hours);\n            timerMinutes.textContent = zeroFormat(getTime.minutes);\n            timerSeconds.textContent = zeroFormat(getTime.seconds);\n        }\n\n\n    };\n    const interval = () => {\n        let intervalId;\n        let getTime = getTimeRemaining();\n        updateClock();\n        if (getTime.timeRemaining > 0) {\n            intervalId = setInterval(updateClock, 1000);\n\n        } else {\n            clearInterval(intervalId);\n        }\n    };\n    interval();\n\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;