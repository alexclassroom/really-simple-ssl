(globalThis["webpackChunkreally_simple_ssl"] = globalThis["webpackChunkreally_simple_ssl"] || []).push([["src_Settings_Settings_js"],{

/***/ "./src/LetsEncrypt/letsEncryptData.js":
/*!********************************************!*\
  !*** ./src/LetsEncrypt/letsEncryptData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const useLetsEncryptData = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get) => ({
  actionIndex: false,
  progress: 0,
  maxIndex: 1,
  attemptCount: 0,
  maxAttempts: 1,
  refreshTests: false,
  actions: [],
  setAttemptCount: attemptCount => {
    set(state => ({
      attemptCount
    }));
  },
  setProgress: progress => {
    set(state => ({
      progress
    }));
  },
  setActions: actions => {
    let maxIndex = actions.length;
    set(state => ({
      actions,
      maxIndex
    }));
  },
  setRefreshTests: refreshTests => {
    set(state => ({
      refreshTests
    }));
  },
  setActionIndex: actionIndex => {
    set(state => ({
      actionIndex
    }));
  },
  setMaxAttempts: maxAttempts => {
    set(state => ({
      maxAttempts
    }));
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLetsEncryptData);

/***/ }),

/***/ "./src/Placeholder/Placeholder.js":
/*!****************************************!*\
  !*** ./src/Placeholder/Placeholder.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Error */ "./src/utils/Error.js");


const Placeholder = props => {
  let lines = props.lines;
  if (!lines) lines = 4;
  if (props.error) {
    lines = 0;
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-placeholder"
  }, props.error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_Error__WEBPACK_IMPORTED_MODULE_1__["default"], {
    error: props.error
  }), Array.from({
    length: lines
  }).map((item, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-placeholder-line",
    key: "placeholder-" + i
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placeholder);

/***/ }),

/***/ "./src/Settings/Help.js":
/*!******************************!*\
  !*** ./src/Settings/Help.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Icon */ "./src/utils/Icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Render a help notice in the sidebar
 */
const Help = props => {
  let notice = props.help;
  if (!notice.title) {
    notice.title = notice.text;
    notice.text = false;
  }
  let openStatus = props.noticesExpanded ? 'open' : '';
  //we can use notice.linked_field to create a visual link to the field.

  let target = notice.url && notice.url.indexOf("really-simple-ssl.com") !== -1 ? "_blank" : '_self';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, notice.title && notice.text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("details", {
    className: "rsssl-wizard-help-notice rsssl-" + notice.label.toLowerCase(),
    open: openStatus
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("summary", null, notice.title, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "chevron-down"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: notice.text
    }
  }), notice.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-help-more-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: target,
    href: notice.url
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("More info", "really-simple-ssl")))), notice.title && !notice.text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-wizard-help-notice rsssl-" + notice.label.toLowerCase()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, notice.title)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);

/***/ }),

/***/ "./src/Settings/License/LicenseData.js":
/*!*********************************************!*\
  !*** ./src/Settings/License/LicenseData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "./node_modules/zustand/esm/index.mjs");

const UseLicenseData = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get) => ({
  licenseStatus: rsssl_settings.licenseStatus,
  setLicenseStatus: licenseStatus => set(state => ({
    licenseStatus
  }))
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseLicenseData);

/***/ }),

/***/ "./src/Settings/Settings.js":
/*!**********************************!*\
  !*** ./src/Settings/Settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Placeholder/Placeholder */ "./src/Placeholder/Placeholder.js");
/* harmony import */ var _utils_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/lib */ "./src/utils/lib.js");
/* harmony import */ var _SettingsGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsGroup */ "./src/Settings/SettingsGroup.js");
/* harmony import */ var _Help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Help */ "./src/Settings/Help.js");
/* harmony import */ var _FieldsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldsData */ "./src/Settings/FieldsData.js");
/* harmony import */ var _Menu_MenuData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu/MenuData */ "./src/Menu/MenuData.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LetsEncrypt_letsEncryptData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LetsEncrypt/letsEncryptData */ "./src/LetsEncrypt/letsEncryptData.js");











/**
 * Renders the selected settings
 *
 */
const Settings = () => {
  const [noticesExpanded, setNoticesExpanded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    progress,
    fieldsLoaded,
    saveFields,
    fields,
    nextButtonDisabled
  } = (0,_FieldsData__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    subMenuLoaded,
    subMenu,
    selectedSubMenuItem,
    selectedMainMenuItem,
    nextMenuItem,
    previousMenuItem
  } = (0,_Menu_MenuData__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    setRefreshTests
  } = (0,_LetsEncrypt_letsEncryptData__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const toggleNotices = () => {
    setNoticesExpanded(!noticesExpanded);
  };
  const isTestsOnlyMenu = () => {
    const {
      menu_items: menuItems
    } = subMenu;
    for (const menuItem of menuItems) {
      if (menuItem.id === selectedSubMenuItem && menuItem.tests_only) {
        return true;
      }
    }
    return false;
  };
  const saveData = async isSaveAndContinueButton => {
    if (!isSaveAndContinueButton && isTestsOnlyMenu()) {
      setRefreshTests(true);
    } else {
      await saveFields(true, true);
    }
  };
  const {
    menu_items: menuItems
  } = subMenu;
  if (!subMenuLoaded || !fieldsLoaded || menuItems.length === 0) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cmplz-wizard-settings cmplz-column-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cmplz-grid-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cmplz-grid-item-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cmplz-settings-block-intro"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      lines: "3"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cmplz-grid-item-footer"
    }));
  }
  let selectedFields = fields.filter(field => field.menu_id === selectedSubMenuItem);
  let groups = [];
  for (const selectedField of selectedFields) {
    if (!(0,_utils_lib__WEBPACK_IMPORTED_MODULE_2__.in_array)(selectedField.group_id, groups)) {
      groups.push(selectedField.group_id);
    }
  }

  //convert progress notices to an array useful for the help blocks
  let notices = [];
  for (const notice of progress.notices) {
    let noticeIsLinkedToField = false;

    //notices that are linked to a field. Only in case of warnings.
    if (notice.show_with_options) {
      let noticeFields = selectedFields.filter(field => notice.show_with_options.includes(field.id));
      noticeIsLinkedToField = noticeFields.length > 0;
    }
    //notices that are linked to a menu id.
    if (noticeIsLinkedToField || notice.menu_id === selectedSubMenuItem) {
      let help = {};
      help.title = notice.output.title ? notice.output.title : false;
      help.label = notice.output.label;
      help.id = notice.id;
      help.text = notice.output.msg;
      help.url = notice.output.url;
      help.linked_field = notice.show_with_option;
      notices.push(help);
    }
  }

  //help items belonging to a field
  //if field is hidden, hide the notice as well
  for (const notice of selectedFields.filter(field => field.help && !field.conditionallyDisabled)) {
    let help = notice.help;
    //check if the notices array already includes this help item
    let existingNotices = notices.filter(noticeItem => noticeItem.id && noticeItem.id === help.id);
    if (existingNotices.length === 0) {
      // if (!help.id ) help['id'] = notice.id;
      notices.push(notice.help);
    }
  }
  let continueLink = nextButtonDisabled ? `#${selectedMainMenuItem}/${selectedSubMenuItem}` : `#${selectedMainMenuItem}/${nextMenuItem}`;
  // let btnSaveText = isTestsOnlyMenu() ? __('Refresh', 'really-simple-ssl') : __('Save', 'really-simple-ssl');
  let btnSaveText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Save', 'really-simple-ssl');
  for (const menuItem of menuItems) {
    if (menuItem.id === selectedSubMenuItem && menuItem.tests_only) {
      btnSaveText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Refresh', 'really-simple-ssl');
    }
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-wizard-settings"
  }, groups.map((group, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "settingsGroup-" + i,
    index: i,
    group: group,
    fields: selectedFields
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-grid-item-footer"
  }, selectedSubMenuItem !== menuItems[0].id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "button button-secondary",
    href: `#${selectedMainMenuItem}/${previousMenuItem}`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Previous', 'complianz-gdpr')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button-primary",
    onClick: e => saveData(false)
  }, btnSaveText), selectedSubMenuItem !== menuItems[menuItems.length - 1].id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    disabled: nextButtonDisabled,
    className: "button button-primary",
    href: continueLink,
    onClick: e => saveData(true)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Save and Continue', 'complianz-gdpr'))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-wizard-help"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-help-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-help-title rsssl-h4"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Notifications", "really-simple-ssl")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-help-control",
    onClick: () => toggleNotices()
  }, !noticesExpanded && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Expand all", "really-simple-ssl"), noticesExpanded && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Collapse all", "really-simple-ssl"))), notices.map((field, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Help__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "help-" + i,
    noticesExpanded: noticesExpanded,
    index: i,
    help: field,
    fieldId: field.id
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/Settings/SettingsGroup.js":
/*!***************************************!*\
  !*** ./src/Settings/SettingsGroup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Hyperlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Hyperlink */ "./src/utils/Hyperlink.js");
/* harmony import */ var _utils_getAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getAnchor */ "./src/utils/getAnchor.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/api */ "./src/utils/api.js");
/* harmony import */ var _Settings_FieldsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Settings/FieldsData */ "./src/Settings/FieldsData.js");
/* harmony import */ var _Menu_MenuData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu/MenuData */ "./src/Menu/MenuData.js");
/* harmony import */ var _License_LicenseData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./License/LicenseData */ "./src/Settings/License/LicenseData.js");










/**
 * Render a grouped block of settings
 */
const SettingsGroup = props => {
  const {
    fields
  } = (0,_Settings_FieldsData__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    licenseStatus
  } = (0,_License_LicenseData__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    selectedSubMenuItem,
    subMenu
  } = (0,_Menu_MenuData__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [Field, setField] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_TextField_TextField_js-node_modules_react-use_esm_u-a4cfad"), __webpack_require__.e("src_Settings_Field_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Field */ "./src/Settings/Field.js")).then(_ref => {
      let {
        default: Field
      } = _ref;
      setField(() => Field);
    });
  }, []);
  let upgrade = 'https://really-simple-ssl.com/pro/?mtm_campaign=fallback&mtm_source=free&mtm_content=upgrade';

  /*
  * On reset of LE, send this info to the back-end, and redirect to the first step.
  * reload to ensure that.
  */
  const handleLetsEncryptReset = e => {
    e.preventDefault();
    _utils_api__WEBPACK_IMPORTED_MODULE_4__.runLetsEncryptTest('reset').then(response => {
      window.location.href = window.location.href.replace(/#letsencrypt.*/, '&r=' + +new Date() + '#letsencrypt/le-system-status');
    });
  };
  let selectedFields = [];
  //get all fields with group_id props.group_id
  for (const selectedField of fields) {
    if (selectedField.group_id === props.group) {
      selectedFields.push(selectedField);
    }
  }
  let activeGroup;
  //first, set the selected menu item as activate group, so we have a default in case there are no groups
  for (const item of subMenu.menu_items) {
    if (item.id === selectedSubMenuItem) {
      activeGroup = item;
    } else if (item.menu_items) {
      activeGroup = item.menu_items.filter(menuItem => menuItem.id === selectedSubMenuItem)[0];
    }
    if (activeGroup) {
      break;
    }
  }

  //now check if we have actual groups
  for (const item of subMenu.menu_items) {
    if (item.id === selectedSubMenuItem && item.hasOwnProperty('groups')) {
      let currentGroup = item.groups.filter(group => group.id === props.group);
      if (currentGroup.length > 0) {
        activeGroup = currentGroup[0];
      }
    }
  }
  let status = 'invalid';
  if (!activeGroup) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  }
  let msg = activeGroup.premium_text ? activeGroup.premium_text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Learn more about %sPremium%s", "really-simple-ssl");
  if (rsssl_settings.pro_plugin_active) {
    if (licenseStatus === 'empty' || licenseStatus === 'deactivated') {
      msg = rsssl_settings.messageInactive;
    } else {
      msg = rsssl_settings.messageInvalid;
    }
  }
  let disabled = licenseStatus !== 'valid' && activeGroup.premium;
  //if a feature can only be used on networkwide or single site setups, pass that info here.
  let networkwide_error = !rsssl_settings.networkwide_active && activeGroup.networkwide_required;
  upgrade = activeGroup.upgrade ? activeGroup.upgrade : upgrade;
  let helplinkText = activeGroup.helpLink_text ? activeGroup.helpLink_text : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Instructions", "really-simple-ssl");
  let anchor = (0,_utils_getAnchor__WEBPACK_IMPORTED_MODULE_2__["default"])('main');
  let disabledClass = disabled || networkwide_error ? 'rsssl-disabled' : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-grid-item rsssl-" + activeGroup.id + ' ' + disabledClass
  }, activeGroup.title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-grid-item-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "rsssl-h4"
  }, activeGroup.title), activeGroup.helpLink && anchor !== 'letsencrypt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-grid-item-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: "_blank",
    className: "rsssl-helplink",
    text: helplinkText,
    url: activeGroup.helpLink
  })), anchor === 'letsencrypt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-grid-item-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "rsssl-helplink",
    onClick: e => handleLetsEncryptReset(e)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Reset Let's Encrypt", "really-simple-ssl")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-grid-item-content"
  }, activeGroup.intro && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-settings-block-intro"
  }, activeGroup.intro), Field && selectedFields.map((field, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Field, {
    key: "selectedFields-" + i,
    index: i,
    field: field,
    fields: selectedFields
  }))), disabled && !networkwide_error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-locked"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-locked-overlay"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "rsssl-task-status rsssl-premium"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Upgrade", "really-simple-ssl")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, rsssl_settings.pro_plugin_active && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, msg, "\xA0", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "rsssl-locked-link",
    href: "#settings/license"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Check license", "really-simple-ssl"))), !rsssl_settings.pro_plugin_active && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: "_blank",
    text: msg,
    url: upgrade
  })))), networkwide_error && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-locked"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rsssl-locked-overlay"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "rsssl-task-status rsssl-warning"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Network feature", "really-simple-ssl")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("This feature is only available networkwide.", "really-simple-ssl"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_Hyperlink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    target: "_blank",
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Network settings", "really-simple-ssl"),
    url: rsssl_settings.network_link
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsGroup);

/***/ }),

/***/ "./src/utils/Icon.js":
/*!***************************!*\
  !*** ./src/utils/Icon.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _wp_includes_js_codemirror_csslint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../wp-includes/js/codemirror/csslint */ "../../../../wp-includes/js/codemirror/csslint.js");
/* harmony import */ var _wp_includes_js_codemirror_csslint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wp_includes_js_codemirror_csslint__WEBPACK_IMPORTED_MODULE_2__);





const Icon = props => {
  const {
    name,
    color,
    size
  } = props;
  // set defaults
  const iconName = name || 'bullet';
  const iconColor = color || 'black';
  const iconSize = size || 15;
  const iconColors = {
    'black': 'var(--rsp-black)',
    'green': 'var(--rsp-green)',
    'yellow': 'var(--rsp-yellow)',
    'orange': 'var(--rsp-yellow)',
    'red-faded': 'var(--rsp-red-faded)',
    'red': 'var(--rsp-red)',
    'grey': 'var(--rsp-grey-400)',
    'red-warning': 'var(--rsp-red-faded)'
  };
  let renderedIcon = '';
  if (iconName === 'bullet') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
      }))
    };
  }
  if (iconName === 'circle') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
      }))
    };
  }
  if (iconName === 'check') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
      }))
    };
  }
  if (iconName === 'warning') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
      }))
    };
  }
  if (iconName === 'error') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
      }))
    };
  }
  if (iconName === 'times') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
      }))
    };
  }
  if (iconName === 'circle-check') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
      }))
    };
  }
  if (iconName === 'circle-times') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"
      }))
    };
  }
  if (iconName === 'chevron-up') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
      }))
    };
  }
  if (iconName === 'chevron-down') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
      }))
    };
  }
  if (iconName === 'chevron-right') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
      }))
    };
  }
  if (iconName === 'chevron-left') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 320 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
      }))
    };
  }
  if (iconName === 'plus') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
      }))
    };
  }
  if (iconName === 'minus') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"
      }))
    };
  }
  if (iconName === 'sync') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z"
      }))
    };
  }
  if (iconName === 'sync-error') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M256 79.1C178.5 79.1 112.7 130.1 89.2 199.7C84.96 212.2 71.34 218.1 58.79 214.7C46.23 210.5 39.48 196.9 43.72 184.3C73.6 95.8 157.3 32 256 32C337.5 32 408.8 75.53 448 140.6V104C448 90.75 458.7 80 472 80C485.3 80 496 90.75 496 104V200C496 213.3 485.3 224 472 224H376C362.7 224 352 213.3 352 200C352 186.7 362.7 176 376 176H412.8C383.7 118.1 324.4 80 256 80V79.1zM280 263.1C280 277.3 269.3 287.1 256 287.1C242.7 287.1 232 277.3 232 263.1V151.1C232 138.7 242.7 127.1 256 127.1C269.3 127.1 280 138.7 280 151.1V263.1zM224 352C224 334.3 238.3 319.1 256 319.1C273.7 319.1 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352zM40 432C26.75 432 16 421.3 16 408V311.1C16 298.7 26.75 287.1 40 287.1H136C149.3 287.1 160 298.7 160 311.1C160 325.3 149.3 336 136 336H99.19C128.3 393 187.6 432 256 432C333.5 432 399.3 381.9 422.8 312.3C427 299.8 440.7 293 453.2 297.3C465.8 301.5 472.5 315.1 468.3 327.7C438.4 416.2 354.7 480 256 480C174.5 480 103.2 436.5 64 371.4V408C64 421.3 53.25 432 40 432V432z"
      }))
    };
  }
  if (iconName === 'shortcode') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M128 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h96C145.7 480 160 465.7 160 448S145.7 416 128 416H64V96h64C145.7 96 160 81.67 160 64S145.7 32 128 32zM416 32h-96C302.3 32 288 46.33 288 63.1S302.3 96 319.1 96H384v320h-64C302.3 416 288 430.3 288 447.1S302.3 480 319.1 480H416c17.6 0 32-14.4 32-32V64C448 46.4 433.6 32 416 32z"
      }))
    };
  }
  if (iconName === 'file') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 384 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"
      }))
    };
  }
  if (iconName === 'file-disabled') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M639.1 487.1c0-7.119-3.153-14.16-9.191-18.89l-118.8-93.12l.0013-237.3c0-16.97-6.742-33.26-18.74-45.26l-74.63-74.64C406.6 6.742 390.3 0 373.4 0H192C156.7 0 128 28.65 128 64L128 75.01L38.82 5.11C34.41 1.672 29.19 0 24.04 0C10.19 0-.0002 11.3-.0002 23.1c0 7.12 3.153 14.16 9.192 18.89l591.1 463.1C605.6 510.3 610.8 512 615.1 512C629.8 512 639.1 500.6 639.1 487.1zM464 338.4l-287.1-225.7l-.002-48.51c0-8.836 7.164-16 15.1-16h160l-.0065 79.87c0 17.67 14.33 31.1 31.1 31.1L464 159.1V338.4zM448 463.1H192c-8.834 0-15.1-7.164-15.1-16L176 234.6L128 197L128 447.1c0 35.34 28.65 64 63.1 64H448c20.4 0 38.45-9.851 50.19-24.84l-37.72-29.56C457.5 461.4 453.2 463.1 448 463.1z"
      }))
    };
  }
  if (iconName === 'file-download') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 384 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M216 342.1V240c0-13.25-10.75-24-24-24S168 226.8 168 240v102.1L128.1 303C124.3 298.3 118.2 296 112 296S99.72 298.3 95.03 303c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L216 342.1zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448z"
      }))
    };
  }
  if (iconName === 'calendar') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"
      }))
    };
  }
  if (iconName === 'calendar-error') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M151.1 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V192H47.1V448C47.1 456.8 55.16 464 63.1 464H284.5C296.7 482.8 312.5 499.1 330.8 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24L151.1 64zM576 368C576 447.5 511.5 512 432 512C352.5 512 287.1 447.5 287.1 368C287.1 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 416C418.7 416 408 426.7 408 440C408 453.3 418.7 464 432 464C445.3 464 456 453.3 456 440C456 426.7 445.3 416 432 416zM447.1 288C447.1 279.2 440.8 272 431.1 272C423.2 272 415.1 279.2 415.1 288V368C415.1 376.8 423.2 384 431.1 384C440.8 384 447.1 376.8 447.1 368V288z"
      }))
    };
  }
  if (iconName === 'help') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
      }))
    };
  }
  if (iconName === 'copy') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"
      }))
    };
  }
  if (iconName === 'info') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
      }))
    };
  }
  if (iconName === 'info-open') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 304c13.25 0 24-10.75 24-24v-128C280 138.8 269.3 128 256 128S232 138.8 232 152v128C232 293.3 242.8 304 256 304zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1z"
      }))
    };
  }
  if (iconName === 'list') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M184.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 113c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L39 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM256 96c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32zM192 416c0-17.7 14.3-32 32-32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zM80 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"
      }))
    };
  }
  if (iconName === 'empty') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        height: iconSize,
        width: iconSize,
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 280.8 363.67"
      })
    };
  }
  if (iconName === 'external-link') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: iconColors[iconColor],
        d: "M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"
      }))
    };
  }
  if (iconName === 'shield') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        height: iconSize,
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        id: "uuid-026a4e87-44db-4336-a398-3c29d25b7317",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 280.8 363.67"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: "#f9c23e",
        d: "M280.8,62.4L140.5,0,0,62.2V213.3c0,10.7,1.6,21.3,4.9,31.5,9.5,29.9,28.2,52.8,54.4,69.5,26,16.6,52.4,32.4,78.6,48.6,2,1.2,3.4,.9,5.1-.2,19.9-12.3,39.8-24.5,59.6-36.8,12.6-7.8,25.5-15.1,36.5-25.1,26.4-24.2,41.4-53.6,41.5-89.9V62.4h.2Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect", {
        className: "uuid-57af18f1-eed9-4dfe-9c3e-67e3c55f9bf4",
        x: "155",
        y: "266.8",
        width: "77.6",
        height: "6"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: "#1d2327",
        d: "M224.4,204.5h-1.8v-10.1c0-15.9-12.9-28.8-28.8-28.8s-28.8,12.9-28.8,28.8v10.1h-1.8c-4.6,0-8.3,3.7-8.3,8.3v51.3h77.6v-51.3c0-4.6-3.7-8.3-8.3-8.3h.2Zm-45.3-10.1c0-8.1,6.6-14.7,14.7-14.7s14.7,6.6,14.7,14.7v10.1h-29.5v-10.1h.1Zm36.6,32.9l-20.7,20.2c-.2,.2-.3,.4-.5,.6l-2,2c-.2,.2-.4,.4-.6,.5l-3.8,3.8-4.5-4.3-2-2c-.2-.2-.4-.4-.5-.6l-9.1-9.1c-2.4-2.4-2.4-6.4,0-8.8l2-2c2.4-2.4,6.4-2.4,8.8,0l5.3,5.3,16.9-16.4c2.4-2.4,6.4-2.4,8.8,0l2,2c2.4,2.4,2.4,6.4,0,8.8h-.1Z"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        fill: "#1d2327",
        d: "M125.2,192.3c-.5-2.9-.5-5.8-1-8.6-.5-2.4-2.6-4-4.8-3.9-2.3,0-4.2,1.9-4.7,4.3-.2,1,0,1.9,0,2.9,.8,14.6,7.2,26.3,18.2,35.7,2.2,1.9,4.5,3.5,6.9,4.8v-11.8c-7.4-5.8-12.9-14.1-14.6-23.3v-.1Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "uuid-57af18f1-eed9-4dfe-9c3e-67e3c55f9bf4",
        d: "M96.4,236.1c-13-15-20-32.3-19.5-52.3,.3-13.1,6.1-23.6,16.6-31.2,11.5-8.5,24.5-10.9,38.3-7.1,12.7,3.5,22,10.7,27.4,22,2.1-2.7,4.5-5.2,7.2-7.4-4-7-9.7-12.9-17-17.4-17-10.4-34.9-11.7-52.9-3.1-19,9.1-28.7,24.7-29.3,45.8,0,5.2,.5,10.2,1.4,15.2,3.4,19.4,13.4,35.2,27.2,48.9,1.1,1.1,2.5,1.6,4.1,1.4,1.8-.2,3.2-1.3,3.8-3,.6-1.8,.4-3.6-1-5.1-2.1-2.2-4.2-4.4-6.2-6.7h-.1Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "uuid-57af18f1-eed9-4dfe-9c3e-67e3c55f9bf4",
        d: "M68.1,89.4c1.1-.4,2.1-1,3.1-1.5,17.9-9.1,36.8-12.7,56.8-11.3,12.2,.8,23.9,3.8,35.1,8.7,3,1.3,5.9,2.8,8.9,4.1,2.7,1.1,5.3,0,6.4-2.4,1.1-2.3,0-5-2.3-6.3-11-5.7-22.4-10-34.6-12.3-4.2-.8-8.5-1.1-12.8-1.7h-17.1c-.3,0-.6,.2-.9,.2-11.2,.8-22,3.2-32.5,7.2-4.9,1.9-9.7,4.1-14.3,6.6-2.5,1.3-3.4,4.2-2.2,6.5,1.1,2.2,4,3.2,6.4,2.1v.1Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "uuid-57af18f1-eed9-4dfe-9c3e-67e3c55f9bf4",
        d: "M61.1,153.5c13.6-21.6,33.6-31.5,58.7-32.1h6c.8,0,1.6,.2,2.3,.3,13.4,1.7,25.5,6.6,35.9,15.4,5.8,4.9,10.5,10.3,14.1,16.2,3.1-1.2,6.4-2,9.8-2.5-4.7-8.7-11.3-16.3-19.6-22.7-19-14.6-40.5-19.5-64.1-15.1-14.3,2.7-26.9,9-37.7,18.8-10.4,9.5-17.8,20.9-21.2,34.6-2.8,11.3-2.6,22.7-.9,34.1,1.1,7,2.9,13.9,5.4,20.5,.9,2.3,3,3.7,5.2,3.5,2.1-.2,3.9-2,4.3-4.3,.2-1.1-.2-2.2-.6-3.2-4.3-11.9-6.3-24.1-5.6-36.7,.5-9.6,2.8-18.7,8-26.8h0Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "uuid-57af18f1-eed9-4dfe-9c3e-67e3c55f9bf4",
        d: "M139.8,240.6c-20.9-8.4-34.1-23.7-38.4-46.7-.8-4.3-1.4-8.7-.4-13,1.8-7.1,6.4-11.4,13.4-13.5,11.8-3.4,24.7,5.3,24.5,17.6,0,4.8,1.4,9.3,4,13.4,.3,.5,.6,.9,.9,1.3,1.6-2.4,3.7-4.6,6.1-6.2,0-.9,0-1.9,.2-2.8-.7-1.7-1.1-3.5-1.2-5.3-.3-6.1-1.6-11.9-5.5-16.8-6.8-8.8-15.9-12.4-27-11.5-11.3,.9-21.6,9.6-24.5,20.6-1.8,6.6-.9,13.3,.4,19.8,2.4,12.9,8.2,24,17.1,33.7,8.6,9.4,18.8,15.8,30.6,19.8v-10.4h-.2Z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "uuid-57af18f1-eed9-4dfe-9c3e-67e3c55f9bf4",
        d: "M47.5,133.2c6.8-8.8,15-16,24.6-21.6,20.8-12,43.2-15.2,66.6-11,14.8,2.7,28.2,8.7,39.9,18.2,6.3,5,11.6,11,16.4,17.4,1.9,2.5,4.8,2.8,7,1.1,2.1-1.7,2.4-4.5,.6-7-5.9-8.2-12.8-15.3-20.9-21.3-18.3-13.6-39.1-19.6-61.7-20-6.3,0-12.5,.6-18.6,1.6-15.7,2.8-30.1,8.6-42.9,18.1-8.3,6.2-15.5,13.5-21.5,22-1.6,2.3-1.3,5.1,.7,6.7,2.1,1.7,4.9,1.5,6.8-.7,1-1.2,1.9-2.5,2.9-3.7l.1,.2Z"
      }))))
    };
  }
  if (iconName === 'file-search') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: iconSize,
        fill: "none",
        viewBox: "0 0 384 512"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        d: "M374.6 150.6l-141.3-141.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3C384 164.8 380.6 156.6 374.6 150.6zM224 22.63L361.4 160H248C234.8 160 224 149.2 224 136V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120V448zM176 208c-53.02 0-96 42.98-96 96s42.98 96 96 96c23.62 0 44.96-8.859 61.68-23l68.66 68.66C307.9 447.2 309.9 448 312 448s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31l-68.66-68.66C263.1 348.1 272 327.6 272 304C272 250.1 229 208 176 208zM176 384C131.9 384 96 348.1 96 304S131.9 224 176 224S256 259.9 256 304S220.1 384 176 384z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'download') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: iconSize,
        fill: "none",
        viewBox: "0 0 512 512"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        d: "M480 352h-88C387.6 352 384 355.6 384 360s3.582 8 8 8H480c8.822 0 16 7.178 16 16v96c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-96c0-8.822 7.178-16 16-16h88C124.4 368 128 364.4 128 360S124.4 352 120 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM464 432c0-17.6-14.4-32-32-32s-32 14.4-32 32c0 17.6 14.4 32 32 32S464 449.6 464 432zM416 432c0-8.822 7.178-16 16-16s16 7.178 16 16S440.8 448 432 448S416 440.8 416 432zM250.3 413.7c3.125 3.125 8.188 3.125 11.31 0l152-152C415.2 260.1 416 258.1 416 256s-.7813-4.094-2.344-5.656c-3.125-3.125-8.188-3.125-11.31 0L264 388.7V8C264 3.594 260.4 0 256 0S248 3.594 248 8v380.7L109.7 250.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L250.3 413.7z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'satellite-dish') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        color: iconColors[iconColor],
        height: iconSize,
        viewBox: "0 0 512 512"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        d: "M208 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c150.2 0 272 121.8 272 272c0 8.8 7.2 16 16 16s16-7.2 16-16C512 136.1 375.9 0 208 0zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c97.2 0 176 78.8 176 176c0 8.8 7.2 16 16 16s16-7.2 16-16c0-114.9-93.1-208-208-208zM32 304c0-24.5 5-47.7 13.9-68.8L276.8 466.1C255.7 475 232.5 480 208 480c-97.2 0-176-78.8-176-176zm33.5-94.5c-14-14-37.3-12.1-45.7 5.8C7.1 242.2 0 272.3 0 304C0 418.9 93.1 512 208 512c31.7 0 61.8-7.1 88.7-19.8c17.9-8.4 19.8-31.8 5.8-45.7L195.3 339.3l24-24c6.3 3 13.3 4.7 20.7 4.7c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48c0 7.4 1.7 14.4 4.7 20.7l-24 24L65.5 209.5zM224 272a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'rotate-light') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        color: iconColors[iconColor],
        height: iconSize,
        viewBox: "0 0 512 512"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        d: "M426.1 301.2C406.2 376.5 337.6 432 256 432c-51 0-96.9-21.7-129-56.3l41-41c5.1-5.1 8-12.1 8-19.3c0-15.1-12.2-27.3-27.3-27.3H48c-8.8 0-16 7.2-16 16V404.7C32 419.8 44.2 432 59.3 432c7.2 0 14.2-2.9 19.3-8l25.7-25.7C142.3 438.7 196.2 464 256 464c97.4 0 179.2-67 201.8-157.4c2.4-9.7-5.2-18.6-15.2-18.6c-7.8 0-14.5 5.6-16.5 13.2zM385 136.3l-41 41c-5.1 5.1-8 12.1-8 19.3c0 15.1 12.2 27.3 27.3 27.3H464c8.8 0 16-7.2 16-16V107.3C480 92.2 467.8 80 452.7 80c-7.2 0-14.2 2.9-19.3 8l-25.7 25.7C369.7 73.3 315.8 48 256 48C158.6 48 76.8 115 54.2 205.4c-2.4 9.7 5.2 18.6 15.2 18.6c7.8 0 14.5-5.6 16.5-13.2C105.8 135.5 174.4 80 256 80c51 0 96.9 21.7 129.1 56.3zM448 192H374.6L448 118.6V192zM64 320h73.4L64 393.4V320z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'rotate-exclamation-light') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
            .fa-secondary {
              opacity: 0.4;
              color: ${iconColors[iconColor]};
            }
          `)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-primary",
        d: "M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-secondary",
        d: "M432 117.4C391 65.4 327.4 32 256 32C158.4 32 75.5 94.4 44.8 181.3c-5.9 16.7 2.8 34.9 19.5 40.8s34.9-2.8 40.8-19.5C127.1 140.5 186.4 96 256 96c52.3 0 98.8 25.1 128 64H352c-17.7 0-32 14.3-32 32s14.3 32 32 32h84.3c.5 0 1 0 1.5 0H464c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v37.4zm35.2 213.2c5.9-16.7-2.8-34.9-19.5-40.8s-34.9 2.8-40.8 19.5C384.9 371.5 325.6 416 256 416c-52.3 0-98.8-25.1-128-64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32V432c0 17.7 14.3 32 32 32s32-14.3 32-32V394.6c41 52 104.6 85.4 176 85.4c97.6 0 180.5-62.4 211.2-149.3z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'radar-duotone') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
            .fa-secondary {
              color: ${iconColors[iconColor]} !important;
            }        
          `)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-primary",
        d: "M497 49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-182 182c-7.7-3.3-16.1-5.1-25-5.1c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-8.9-1.8-17.3-5.1-25L497 49z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-secondary",
        d: "M350.9 127.2l-46.1 46.1c-14.3-8.4-31-13.3-48.8-13.3c-53 0-96 43-96 96s43 96 96 96s96-43 96-96h64c0 73.5-49.6 135.5-117.2 154.2C290.8 394.7 274.7 384 256 384s-34.8 10.7-42.8 26.2c-51.7-14.3-92.8-53.9-109.4-104.6c14.4-8.3 24.1-23.8 24.1-41.7c0-19.4-11.5-36.1-28-43.7C116.2 149.1 179.9 96 256 96c35.5 0 68.3 11.6 94.9 31.2zm22.8-22.8C341.2 79 300.4 64 256 64C163.1 64 85.7 129.9 67.9 217.6C47.2 222.9 32 241.7 32 264c0 23.8 17.3 43.6 40.1 47.4c19.3 64.3 71.5 114.4 137 130.9C213.8 463.8 233 480 256 480s42.2-16.2 46.9-37.8C386.3 421.3 448 345.9 448 256h64c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0c62.1 0 118.9 22.1 163.3 58.8l-45.5 45.5z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'satellite-dish-duotone') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: iconSize
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
            .fa-secondary {
              color: ${iconColors[iconColor]} !important;
            }        
          `)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-primary",
        d: "M60.6 220.6c-14.5-14.5-38.8-11.8-46.3 7.3C5.1 251.5 0 277.1 0 304C0 418.9 93.1 512 208 512c26.9 0 52.5-5.1 76.1-14.4c19-7.5 21.8-31.8 7.3-46.3L187.3 347.3l28.4-28.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3l-28.4 28.4L60.6 220.6z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-secondary",
        d: "M224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192z"
      })),
      viewBox: '0 0 24 24'
    };
  }
  if (iconName === 'spinner') {
    renderedIcon = {
      html: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        width: "20",
        height: "20"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `
                            .fa-secondary {
                              opacity: 0.4;
                            }
                          `)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-primary",
        d: "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 256A48 48 0 1 0 0 256a48 48 0 1 0 96 0zM75 142.9A48 48 0 1 0 142.9 75 48 48 0 1 0 75 142.9z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
        className: "fa-secondary",
        d: "M369.1 75A48 48 0 1 1 437 142.9 48 48 0 1 1 369.1 75zM416 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM208 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zm294.2 0A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z"
      })),
      viewBox: '0 0 22 22'
    };
  }
  const StyledTooltip = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref => {
    let {
      className,
      ...props
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      classes: {
        popper: className
      }
    }));
  })(_ref2 => {
    let {
      theme
    } = _ref2;
    return {
      [`& .MuiTooltip-tooltip`]: {
        padding: "10px 20px",
        fontWeight: "340",
        fontSize: "var(--rsp-fs-200)",
        fontFamily: "unset",
        backgroundColor: "var(--rsp-black)"
      }
    };
  });

  //https://smartdevpreneur.com/how-to-style-the-material-ui-tooltip/#Resources_and_Related_Posts
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(StyledTooltip, {
    arrow: true,
    enterDelay: 200,
    title: props.tooltip
    //leaveDelay={2000000} //set to 100000000  to be able to examine the DOM
    ,
    placement: "bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: 'rsssl-icon rsssl-icon-' + iconName
  }, renderedIcon.html));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./src/utils/lib.js":
/*!**************************!*\
  !*** ./src/utils/lib.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorMsg": () => (/* binding */ errorMsg),
/* harmony export */   "in_array": () => (/* binding */ in_array)
/* harmony export */ });
const in_array = (needle, haystack) => {
  let length = haystack.length;
  for (let i = 0; i < length; i++) {
    if (haystack[i] == needle) return true;
  }
  return false;
};
const errorMsg = error => {
  let length = haystack.length;
  for (let i = 0; i < length; i++) {
    if (haystack[i] == needle) return true;
  }
  return false;
};

/***/ }),

/***/ "../../../../wp-includes/js/codemirror/csslint.js":
/*!********************************************************!*\
  !*** ../../../../wp-includes/js/codemirror/csslint.js ***!
  \********************************************************/
/***/ (() => {

/*!
CSSLint v1.0.4
Copyright (c) 2016 Nicole Sullivan and Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var CSSLint = function () {
  var module = module || {},
    exports = exports || {};

  /*!
  Parser-Lib
  Copyright (c) 2009-2016 Nicholas C. Zakas. All rights reserved.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */
  /* Version v1.1.0, Build time: 6-December-2016 10:31:29 */
  var parserlib = function () {
    var require;
    require = function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a) return a(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o] = {
            exports: {}
          };
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++) s(r[o]);
      return s;
    }({
      1: [function (require, module, exports) {
        "use strict";

        /* exported Colors */
        var Colors = module.exports = {
          __proto__: null,
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgrey: "#a9a9a9",
          darkgreen: "#006400",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          grey: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgrey: "#d3d3d3",
          lightgreen: "#90ee90",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370d8",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#d87093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
          //'currentColor' color keyword https://www.w3.org/TR/css3-color/#currentcolor
          currentColor: "The value of the 'color' property.",
          //CSS2 system colors https://www.w3.org/TR/css3-color/#css2-system
          activeBorder: "Active window border.",
          activecaption: "Active window caption.",
          appworkspace: "Background color of multiple document interface.",
          background: "Desktop background.",
          buttonface: "The face background color for 3-D elements that appear 3-D due to one layer of surrounding border.",
          buttonhighlight: "The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
          buttonshadow: "The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
          buttontext: "Text on push buttons.",
          captiontext: "Text in caption, size box, and scrollbar arrow box.",
          graytext: "Grayed (disabled) text. This color is set to #000 if the current display driver does not support a solid gray color.",
          greytext: "Greyed (disabled) text. This color is set to #000 if the current display driver does not support a solid grey color.",
          highlight: "Item(s) selected in a control.",
          highlighttext: "Text of item(s) selected in a control.",
          inactiveborder: "Inactive window border.",
          inactivecaption: "Inactive window caption.",
          inactivecaptiontext: "Color of text in an inactive caption.",
          infobackground: "Background color for tooltip controls.",
          infotext: "Text color for tooltip controls.",
          menu: "Menu background.",
          menutext: "Text in menus.",
          scrollbar: "Scroll bar gray area.",
          threeddarkshadow: "The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedface: "The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedhighlight: "The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedlightshadow: "The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedshadow: "The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          window: "Window background.",
          windowframe: "Window frame.",
          windowtext: "Text in windows."
        };
      }, {}],
      2: [function (require, module, exports) {
        "use strict";

        module.exports = Combinator;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a selector combinator (whitespace, +, >).
         * @namespace parserlib.css
         * @class Combinator
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} text The text representation of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function Combinator(text, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.COMBINATOR_TYPE);

          /**
           * The type of modifier.
           * @type String
           * @property type
           */
          this.type = "unknown";

          //pretty simple
          if (/^\s+$/.test(text)) {
            this.type = "descendant";
          } else if (text === ">") {
            this.type = "child";
          } else if (text === "+") {
            this.type = "adjacent-sibling";
          } else if (text === "~") {
            this.type = "sibling";
          }
        }
        Combinator.prototype = new SyntaxUnit();
        Combinator.prototype.constructor = Combinator;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      3: [function (require, module, exports) {
        "use strict";

        module.exports = Matcher;
        var StringReader = require("../util/StringReader");
        var SyntaxError = require("../util/SyntaxError");

        /**
         * This class implements a combinator library for matcher functions.
         * The combinators are described at:
         * https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#Component_value_combinators
         */
        function Matcher(matchFunc, toString) {
          this.match = function (expression) {
            // Save/restore marks to ensure that failed matches always restore
            // the original location in the expression.
            var result;
            expression.mark();
            result = matchFunc(expression);
            if (result) {
              expression.drop();
            } else {
              expression.restore();
            }
            return result;
          };
          this.toString = typeof toString === "function" ? toString : function () {
            return toString;
          };
        }

        /** Precedence table of combinators. */
        Matcher.prec = {
          MOD: 5,
          SEQ: 4,
          ANDAND: 3,
          OROR: 2,
          ALT: 1
        };

        /** Simple recursive-descent grammar to build matchers from strings. */
        Matcher.parse = function (str) {
          var reader, eat, expr, oror, andand, seq, mod, term, result;
          reader = new StringReader(str);
          eat = function (matcher) {
            var result = reader.readMatch(matcher);
            if (result === null) {
              throw new SyntaxError("Expected " + matcher, reader.getLine(), reader.getCol());
            }
            return result;
          };
          expr = function () {
            // expr = oror (" | " oror)*
            var m = [oror()];
            while (reader.readMatch(" | ") !== null) {
              m.push(oror());
            }
            return m.length === 1 ? m[0] : Matcher.alt.apply(Matcher, m);
          };
          oror = function () {
            // oror = andand ( " || " andand)*
            var m = [andand()];
            while (reader.readMatch(" || ") !== null) {
              m.push(andand());
            }
            return m.length === 1 ? m[0] : Matcher.oror.apply(Matcher, m);
          };
          andand = function () {
            // andand = seq ( " && " seq)*
            var m = [seq()];
            while (reader.readMatch(" && ") !== null) {
              m.push(seq());
            }
            return m.length === 1 ? m[0] : Matcher.andand.apply(Matcher, m);
          };
          seq = function () {
            // seq = mod ( " " mod)*
            var m = [mod()];
            while (reader.readMatch(/^ (?![&|\]])/) !== null) {
              m.push(mod());
            }
            return m.length === 1 ? m[0] : Matcher.seq.apply(Matcher, m);
          };
          mod = function () {
            // mod = term ( "?" | "*" | "+" | "#" | "{<num>,<num>}" )?
            var m = term();
            if (reader.readMatch("?") !== null) {
              return m.question();
            } else if (reader.readMatch("*") !== null) {
              return m.star();
            } else if (reader.readMatch("+") !== null) {
              return m.plus();
            } else if (reader.readMatch("#") !== null) {
              return m.hash();
            } else if (reader.readMatch(/^\{\s*/) !== null) {
              var min = eat(/^\d+/);
              eat(/^\s*,\s*/);
              var max = eat(/^\d+/);
              eat(/^\s*\}/);
              return m.braces(+min, +max);
            }
            return m;
          };
          term = function () {
            // term = <nt> | literal | "[ " expression " ]"
            if (reader.readMatch("[ ") !== null) {
              var m = expr();
              eat(" ]");
              return m;
            }
            return Matcher.fromType(eat(/^[^ ?*+#{]+/));
          };
          result = expr();
          if (!reader.eof()) {
            throw new SyntaxError("Expected end of string", reader.getLine(), reader.getCol());
          }
          return result;
        };

        /**
         * Convert a string to a matcher (parsing simple alternations),
         * or do nothing if the argument is already a matcher.
         */
        Matcher.cast = function (m) {
          if (m instanceof Matcher) {
            return m;
          }
          return Matcher.parse(m);
        };

        /**
         * Create a matcher for a single type.
         */
        Matcher.fromType = function (type) {
          // Late require of ValidationTypes to break a dependency cycle.
          var ValidationTypes = require("./ValidationTypes");
          return new Matcher(function (expression) {
            return expression.hasNext() && ValidationTypes.isType(expression, type);
          }, type);
        };

        /**
         * Create a matcher for one or more juxtaposed words, which all must
         * occur, in the given order.
         */
        Matcher.seq = function () {
          var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
          if (ms.length === 1) {
            return ms[0];
          }
          return new Matcher(function (expression) {
            var i,
              result = true;
            for (i = 0; result && i < ms.length; i++) {
              result = ms[i].match(expression);
            }
            return result;
          }, function (prec) {
            var p = Matcher.prec.SEQ;
            var s = ms.map(function (m) {
              return m.toString(p);
            }).join(" ");
            if (prec > p) {
              s = "[ " + s + " ]";
            }
            return s;
          });
        };

        /**
         * Create a matcher for one or more alternatives, where exactly one
         * must occur.
         */
        Matcher.alt = function () {
          var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
          if (ms.length === 1) {
            return ms[0];
          }
          return new Matcher(function (expression) {
            var i,
              result = false;
            for (i = 0; !result && i < ms.length; i++) {
              result = ms[i].match(expression);
            }
            return result;
          }, function (prec) {
            var p = Matcher.prec.ALT;
            var s = ms.map(function (m) {
              return m.toString(p);
            }).join(" | ");
            if (prec > p) {
              s = "[ " + s + " ]";
            }
            return s;
          });
        };

        /**
         * Create a matcher for two or more options.  This implements the
         * double bar (||) and double ampersand (&&) operators, as well as
         * variants of && where some of the alternatives are optional.
         * This will backtrack through even successful matches to try to
         * maximize the number of items matched.
         */
        Matcher.many = function (required) {
          var ms = Array.prototype.slice.call(arguments, 1).reduce(function (acc, v) {
            if (v.expand) {
              // Insert all of the options for the given complex rule as
              // individual options.
              var ValidationTypes = require("./ValidationTypes");
              acc.push.apply(acc, ValidationTypes.complex[v.expand].options);
            } else {
              acc.push(Matcher.cast(v));
            }
            return acc;
          }, []);
          if (required === true) {
            required = ms.map(function () {
              return true;
            });
          }
          var result = new Matcher(function (expression) {
            var seen = [],
              max = 0,
              pass = 0;
            var success = function (matchCount) {
              if (pass === 0) {
                max = Math.max(matchCount, max);
                return matchCount === ms.length;
              } else {
                return matchCount === max;
              }
            };
            var tryMatch = function (matchCount) {
              for (var i = 0; i < ms.length; i++) {
                if (seen[i]) {
                  continue;
                }
                expression.mark();
                if (ms[i].match(expression)) {
                  seen[i] = true;
                  // Increase matchCount iff this was a required element
                  // (or if all the elements are optional)
                  if (tryMatch(matchCount + (required === false || required[i] ? 1 : 0))) {
                    expression.drop();
                    return true;
                  }
                  // Backtrack: try *not* matching using this rule, and
                  // let's see if it leads to a better overall match.
                  expression.restore();
                  seen[i] = false;
                } else {
                  expression.drop();
                }
              }
              return success(matchCount);
            };
            if (!tryMatch(0)) {
              // Couldn't get a complete match, retrace our steps to make the
              // match with the maximum # of required elements.
              pass++;
              tryMatch(0);
            }
            if (required === false) {
              return max > 0;
            }
            // Use finer-grained specification of which matchers are required.
            for (var i = 0; i < ms.length; i++) {
              if (required[i] && !seen[i]) {
                return false;
              }
            }
            return true;
          }, function (prec) {
            var p = required === false ? Matcher.prec.OROR : Matcher.prec.ANDAND;
            var s = ms.map(function (m, i) {
              if (required !== false && !required[i]) {
                return m.toString(Matcher.prec.MOD) + "?";
              }
              return m.toString(p);
            }).join(required === false ? " || " : " && ");
            if (prec > p) {
              s = "[ " + s + " ]";
            }
            return s;
          });
          result.options = ms;
          return result;
        };

        /**
         * Create a matcher for two or more options, where all options are
         * mandatory but they may appear in any order.
         */
        Matcher.andand = function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(true);
          return Matcher.many.apply(Matcher, args);
        };

        /**
         * Create a matcher for two or more options, where options are
         * optional and may appear in any order, but at least one must be
         * present.
         */
        Matcher.oror = function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(false);
          return Matcher.many.apply(Matcher, args);
        };

        /** Instance methods on Matchers. */
        Matcher.prototype = {
          constructor: Matcher,
          // These are expected to be overridden in every instance.
          match: function () {
            throw new Error("unimplemented");
          },
          toString: function () {
            throw new Error("unimplemented");
          },
          // This returns a standalone function to do the matching.
          func: function () {
            return this.match.bind(this);
          },
          // Basic combinators
          then: function (m) {
            return Matcher.seq(this, m);
          },
          or: function (m) {
            return Matcher.alt(this, m);
          },
          andand: function (m) {
            return Matcher.many(true, this, m);
          },
          oror: function (m) {
            return Matcher.many(false, this, m);
          },
          // Component value multipliers
          star: function () {
            return this.braces(0, Infinity, "*");
          },
          plus: function () {
            return this.braces(1, Infinity, "+");
          },
          question: function () {
            return this.braces(0, 1, "?");
          },
          hash: function () {
            return this.braces(1, Infinity, "#", Matcher.cast(","));
          },
          braces: function (min, max, marker, optSep) {
            var m1 = this,
              m2 = optSep ? optSep.then(this) : this;
            if (!marker) {
              marker = "{" + min + "," + max + "}";
            }
            return new Matcher(function (expression) {
              var result = true,
                i;
              for (i = 0; i < max; i++) {
                if (i > 0 && optSep) {
                  result = m2.match(expression);
                } else {
                  result = m1.match(expression);
                }
                if (!result) {
                  break;
                }
              }
              return i >= min;
            }, function () {
              return m1.toString(Matcher.prec.MOD) + marker;
            });
          }
        };
      }, {
        "../util/StringReader": 24,
        "../util/SyntaxError": 25,
        "./ValidationTypes": 21
      }],
      4: [function (require, module, exports) {
        "use strict";

        module.exports = MediaFeature;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a media feature, such as max-width:500.
         * @namespace parserlib.css
         * @class MediaFeature
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {SyntaxUnit} name The name of the feature.
         * @param {SyntaxUnit} value The value of the feature or null if none.
         */
        function MediaFeature(name, value) {
          SyntaxUnit.call(this, "(" + name + (value !== null ? ":" + value : "") + ")", name.startLine, name.startCol, Parser.MEDIA_FEATURE_TYPE);

          /**
           * The name of the media feature
           * @type String
           * @property name
           */
          this.name = name;

          /**
           * The value for the feature or null if there is none.
           * @type SyntaxUnit
           * @property value
           */
          this.value = value;
        }
        MediaFeature.prototype = new SyntaxUnit();
        MediaFeature.prototype.constructor = MediaFeature;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      5: [function (require, module, exports) {
        "use strict";

        module.exports = MediaQuery;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents an individual media query.
         * @namespace parserlib.css
         * @class MediaQuery
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} modifier The modifier "not" or "only" (or null).
         * @param {String} mediaType The type of media (i.e., "print").
         * @param {Array} parts Array of selectors parts making up this selector.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function MediaQuery(modifier, mediaType, features, line, col) {
          SyntaxUnit.call(this, (modifier ? modifier + " " : "") + (mediaType ? mediaType : "") + (mediaType && features.length > 0 ? " and " : "") + features.join(" and "), line, col, Parser.MEDIA_QUERY_TYPE);

          /**
           * The media modifier ("not" or "only")
           * @type String
           * @property modifier
           */
          this.modifier = modifier;

          /**
           * The mediaType (i.e., "print")
           * @type String
           * @property mediaType
           */
          this.mediaType = mediaType;

          /**
           * The parts that make up the selector.
           * @type Array
           * @property features
           */
          this.features = features;
        }
        MediaQuery.prototype = new SyntaxUnit();
        MediaQuery.prototype.constructor = MediaQuery;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      6: [function (require, module, exports) {
        "use strict";

        module.exports = Parser;
        var EventTarget = require("../util/EventTarget");
        var SyntaxError = require("../util/SyntaxError");
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Combinator = require("./Combinator");
        var MediaFeature = require("./MediaFeature");
        var MediaQuery = require("./MediaQuery");
        var PropertyName = require("./PropertyName");
        var PropertyValue = require("./PropertyValue");
        var PropertyValuePart = require("./PropertyValuePart");
        var Selector = require("./Selector");
        var SelectorPart = require("./SelectorPart");
        var SelectorSubPart = require("./SelectorSubPart");
        var TokenStream = require("./TokenStream");
        var Tokens = require("./Tokens");
        var Validation = require("./Validation");

        /**
         * A CSS3 parser.
         * @namespace parserlib.css
         * @class Parser
         * @constructor
         * @param {Object} options (Optional) Various options for the parser:
         *      starHack (true|false) to allow IE6 star hack as valid,
         *      underscoreHack (true|false) to interpret leading underscores
         *      as IE6-7 targeting for known properties, ieFilters (true|false)
         *      to indicate that IE < 8 filters should be accepted and not throw
         *      syntax errors.
         */
        function Parser(options) {
          //inherit event functionality
          EventTarget.call(this);
          this.options = options || {};
          this._tokenStream = null;
        }

        //Static constants
        Parser.DEFAULT_TYPE = 0;
        Parser.COMBINATOR_TYPE = 1;
        Parser.MEDIA_FEATURE_TYPE = 2;
        Parser.MEDIA_QUERY_TYPE = 3;
        Parser.PROPERTY_NAME_TYPE = 4;
        Parser.PROPERTY_VALUE_TYPE = 5;
        Parser.PROPERTY_VALUE_PART_TYPE = 6;
        Parser.SELECTOR_TYPE = 7;
        Parser.SELECTOR_PART_TYPE = 8;
        Parser.SELECTOR_SUB_PART_TYPE = 9;
        Parser.prototype = function () {
          var proto = new EventTarget(),
            //new prototype
            prop,
            additions = {
              __proto__: null,
              //restore constructor
              constructor: Parser,
              //instance constants - yuck
              DEFAULT_TYPE: 0,
              COMBINATOR_TYPE: 1,
              MEDIA_FEATURE_TYPE: 2,
              MEDIA_QUERY_TYPE: 3,
              PROPERTY_NAME_TYPE: 4,
              PROPERTY_VALUE_TYPE: 5,
              PROPERTY_VALUE_PART_TYPE: 6,
              SELECTOR_TYPE: 7,
              SELECTOR_PART_TYPE: 8,
              SELECTOR_SUB_PART_TYPE: 9,
              //-----------------------------------------------------------------
              // Grammar
              //-----------------------------------------------------------------

              _stylesheet: function () {
                /*
                 * stylesheet
                 *  : [ CHARSET_SYM S* STRING S* ';' ]?
                 *    [S|CDO|CDC]* [ import [S|CDO|CDC]* ]*
                 *    [ namespace [S|CDO|CDC]* ]*
                 *    [ [ ruleset | media | page | font_face | keyframes_rule | supports_rule ] [S|CDO|CDC]* ]*
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                  count,
                  token,
                  tt;
                this.fire("startstylesheet");

                //try to read character set
                this._charset();
                this._skipCruft();

                //try to read imports - may be more than one
                while (tokenStream.peek() === Tokens.IMPORT_SYM) {
                  this._import();
                  this._skipCruft();
                }

                //try to read namespaces - may be more than one
                while (tokenStream.peek() === Tokens.NAMESPACE_SYM) {
                  this._namespace();
                  this._skipCruft();
                }

                //get the next token
                tt = tokenStream.peek();

                //try to read the rest
                while (tt > Tokens.EOF) {
                  try {
                    switch (tt) {
                      case Tokens.MEDIA_SYM:
                        this._media();
                        this._skipCruft();
                        break;
                      case Tokens.PAGE_SYM:
                        this._page();
                        this._skipCruft();
                        break;
                      case Tokens.FONT_FACE_SYM:
                        this._font_face();
                        this._skipCruft();
                        break;
                      case Tokens.KEYFRAMES_SYM:
                        this._keyframes();
                        this._skipCruft();
                        break;
                      case Tokens.VIEWPORT_SYM:
                        this._viewport();
                        this._skipCruft();
                        break;
                      case Tokens.DOCUMENT_SYM:
                        this._document();
                        this._skipCruft();
                        break;
                      case Tokens.SUPPORTS_SYM:
                        this._supports();
                        this._skipCruft();
                        break;
                      case Tokens.UNKNOWN_SYM:
                        //unknown @ rule
                        tokenStream.get();
                        if (!this.options.strict) {
                          //fire error event
                          this.fire({
                            type: "error",
                            error: null,
                            message: "Unknown @ rule: " + tokenStream.LT(0).value + ".",
                            line: tokenStream.LT(0).startLine,
                            col: tokenStream.LT(0).startCol
                          });

                          //skip braces
                          count = 0;
                          while (tokenStream.advance([Tokens.LBRACE, Tokens.RBRACE]) === Tokens.LBRACE) {
                            count++; //keep track of nesting depth
                          }

                          while (count) {
                            tokenStream.advance([Tokens.RBRACE]);
                            count--;
                          }
                        } else {
                          //not a syntax error, rethrow it
                          throw new SyntaxError("Unknown @ rule.", tokenStream.LT(0).startLine, tokenStream.LT(0).startCol);
                        }
                        break;
                      case Tokens.S:
                        this._readWhitespace();
                        break;
                      default:
                        if (!this._ruleset()) {
                          //error handling for known issues
                          switch (tt) {
                            case Tokens.CHARSET_SYM:
                              token = tokenStream.LT(1);
                              this._charset(false);
                              throw new SyntaxError("@charset not allowed here.", token.startLine, token.startCol);
                            case Tokens.IMPORT_SYM:
                              token = tokenStream.LT(1);
                              this._import(false);
                              throw new SyntaxError("@import not allowed here.", token.startLine, token.startCol);
                            case Tokens.NAMESPACE_SYM:
                              token = tokenStream.LT(1);
                              this._namespace(false);
                              throw new SyntaxError("@namespace not allowed here.", token.startLine, token.startCol);
                            default:
                              tokenStream.get(); //get the last token
                              this._unexpectedToken(tokenStream.token());
                          }
                        }
                    }
                  } catch (ex) {
                    if (ex instanceof SyntaxError && !this.options.strict) {
                      this.fire({
                        type: "error",
                        error: ex,
                        message: ex.message,
                        line: ex.line,
                        col: ex.col
                      });
                    } else {
                      throw ex;
                    }
                  }
                  tt = tokenStream.peek();
                }
                if (tt !== Tokens.EOF) {
                  this._unexpectedToken(tokenStream.token());
                }
                this.fire("endstylesheet");
              },
              _charset: function (emit) {
                var tokenStream = this._tokenStream,
                  charset,
                  token,
                  line,
                  col;
                if (tokenStream.match(Tokens.CHARSET_SYM)) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  this._readWhitespace();
                  tokenStream.mustMatch(Tokens.STRING);
                  token = tokenStream.token();
                  charset = token.value;
                  this._readWhitespace();
                  tokenStream.mustMatch(Tokens.SEMICOLON);
                  if (emit !== false) {
                    this.fire({
                      type: "charset",
                      charset: charset,
                      line: line,
                      col: col
                    });
                  }
                }
              },
              _import: function (emit) {
                /*
                 * import
                 *   : IMPORT_SYM S*
                 *    [STRING|URI] S* media_query_list? ';' S*
                 */

                var tokenStream = this._tokenStream,
                  uri,
                  importToken,
                  mediaList = [];

                //read import symbol
                tokenStream.mustMatch(Tokens.IMPORT_SYM);
                importToken = tokenStream.token();
                this._readWhitespace();
                tokenStream.mustMatch([Tokens.STRING, Tokens.URI]);

                //grab the URI value
                uri = tokenStream.token().value.replace(/^(?:url\()?["']?([^"']+?)["']?\)?$/, "$1");
                this._readWhitespace();
                mediaList = this._media_query_list();

                //must end with a semicolon
                tokenStream.mustMatch(Tokens.SEMICOLON);
                this._readWhitespace();
                if (emit !== false) {
                  this.fire({
                    type: "import",
                    uri: uri,
                    media: mediaList,
                    line: importToken.startLine,
                    col: importToken.startCol
                  });
                }
              },
              _namespace: function (emit) {
                /*
                 * namespace
                 *   : NAMESPACE_SYM S* [namespace_prefix S*]? [STRING|URI] S* ';' S*
                 */

                var tokenStream = this._tokenStream,
                  line,
                  col,
                  prefix,
                  uri;

                //read import symbol
                tokenStream.mustMatch(Tokens.NAMESPACE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();

                //it's a namespace prefix - no _namespace_prefix() method because it's just an IDENT
                if (tokenStream.match(Tokens.IDENT)) {
                  prefix = tokenStream.token().value;
                  this._readWhitespace();
                }
                tokenStream.mustMatch([Tokens.STRING, Tokens.URI]);
                /*if (!tokenStream.match(Tokens.STRING)){
                    tokenStream.mustMatch(Tokens.URI);
                }*/

                //grab the URI value
                uri = tokenStream.token().value.replace(/(?:url\()?["']([^"']+)["']\)?/, "$1");
                this._readWhitespace();

                //must end with a semicolon
                tokenStream.mustMatch(Tokens.SEMICOLON);
                this._readWhitespace();
                if (emit !== false) {
                  this.fire({
                    type: "namespace",
                    prefix: prefix,
                    uri: uri,
                    line: line,
                    col: col
                  });
                }
              },
              _supports: function (emit) {
                /*
                 * supports_rule
                 *  : SUPPORTS_SYM S* supports_condition S* group_rule_body
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col;
                if (tokenStream.match(Tokens.SUPPORTS_SYM)) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  this._readWhitespace();
                  this._supports_condition();
                  this._readWhitespace();
                  tokenStream.mustMatch(Tokens.LBRACE);
                  this._readWhitespace();
                  if (emit !== false) {
                    this.fire({
                      type: "startsupports",
                      line: line,
                      col: col
                    });
                  }
                  while (true) {
                    if (!this._ruleset()) {
                      break;
                    }
                  }
                  tokenStream.mustMatch(Tokens.RBRACE);
                  this._readWhitespace();
                  this.fire({
                    type: "endsupports",
                    line: line,
                    col: col
                  });
                }
              },
              _supports_condition: function () {
                /*
                 * supports_condition
                 *  : supports_negation | supports_conjunction | supports_disjunction |
                 *    supports_condition_in_parens
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  ident;
                if (tokenStream.match(Tokens.IDENT)) {
                  ident = tokenStream.token().value.toLowerCase();
                  if (ident === "not") {
                    tokenStream.mustMatch(Tokens.S);
                    this._supports_condition_in_parens();
                  } else {
                    tokenStream.unget();
                  }
                } else {
                  this._supports_condition_in_parens();
                  this._readWhitespace();
                  while (tokenStream.peek() === Tokens.IDENT) {
                    ident = tokenStream.LT(1).value.toLowerCase();
                    if (ident === "and" || ident === "or") {
                      tokenStream.mustMatch(Tokens.IDENT);
                      this._readWhitespace();
                      this._supports_condition_in_parens();
                      this._readWhitespace();
                    }
                  }
                }
              },
              _supports_condition_in_parens: function () {
                /*
                 * supports_condition_in_parens
                 *  : ( '(' S* supports_condition S* ')' ) | supports_declaration_condition |
                 *    general_enclosed
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  ident;
                if (tokenStream.match(Tokens.LPAREN)) {
                  this._readWhitespace();
                  if (tokenStream.match(Tokens.IDENT)) {
                    // look ahead for not keyword, if not given, continue with declaration condition.
                    ident = tokenStream.token().value.toLowerCase();
                    if (ident === "not") {
                      this._readWhitespace();
                      this._supports_condition();
                      this._readWhitespace();
                      tokenStream.mustMatch(Tokens.RPAREN);
                    } else {
                      tokenStream.unget();
                      this._supports_declaration_condition(false);
                    }
                  } else {
                    this._supports_condition();
                    this._readWhitespace();
                    tokenStream.mustMatch(Tokens.RPAREN);
                  }
                } else {
                  this._supports_declaration_condition();
                }
              },
              _supports_declaration_condition: function (requireStartParen) {
                /*
                 * supports_declaration_condition
                 *  : '(' S* declaration ')'
                 *  ;
                 */
                var tokenStream = this._tokenStream;
                if (requireStartParen !== false) {
                  tokenStream.mustMatch(Tokens.LPAREN);
                }
                this._readWhitespace();
                this._declaration();
                tokenStream.mustMatch(Tokens.RPAREN);
              },
              _media: function () {
                /*
                 * media
                 *   : MEDIA_SYM S* media_query_list S* '{' S* ruleset* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col,
                  mediaList; //       = [];

                //look for @media
                tokenStream.mustMatch(Tokens.MEDIA_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                mediaList = this._media_query_list();
                tokenStream.mustMatch(Tokens.LBRACE);
                this._readWhitespace();
                this.fire({
                  type: "startmedia",
                  media: mediaList,
                  line: line,
                  col: col
                });
                while (true) {
                  if (tokenStream.peek() === Tokens.PAGE_SYM) {
                    this._page();
                  } else if (tokenStream.peek() === Tokens.FONT_FACE_SYM) {
                    this._font_face();
                  } else if (tokenStream.peek() === Tokens.VIEWPORT_SYM) {
                    this._viewport();
                  } else if (tokenStream.peek() === Tokens.DOCUMENT_SYM) {
                    this._document();
                  } else if (tokenStream.peek() === Tokens.SUPPORTS_SYM) {
                    this._supports();
                  } else if (tokenStream.peek() === Tokens.MEDIA_SYM) {
                    this._media();
                  } else if (!this._ruleset()) {
                    break;
                  }
                }
                tokenStream.mustMatch(Tokens.RBRACE);
                this._readWhitespace();
                this.fire({
                  type: "endmedia",
                  media: mediaList,
                  line: line,
                  col: col
                });
              },
              //CSS3 Media Queries
              _media_query_list: function () {
                /*
                 * media_query_list
                 *   : S* [media_query [ ',' S* media_query ]* ]?
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  mediaList = [];
                this._readWhitespace();
                if (tokenStream.peek() === Tokens.IDENT || tokenStream.peek() === Tokens.LPAREN) {
                  mediaList.push(this._media_query());
                }
                while (tokenStream.match(Tokens.COMMA)) {
                  this._readWhitespace();
                  mediaList.push(this._media_query());
                }
                return mediaList;
              },
              /*
               * Note: "expression" in the grammar maps to the _media_expression
               * method.
                */
              _media_query: function () {
                /*
                 * media_query
                 *   : [ONLY | NOT]? S* media_type S* [ AND S* expression ]*
                 *   | expression [ AND S* expression ]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  type = null,
                  ident = null,
                  token = null,
                  expressions = [];
                if (tokenStream.match(Tokens.IDENT)) {
                  ident = tokenStream.token().value.toLowerCase();

                  //since there's no custom tokens for these, need to manually check
                  if (ident !== "only" && ident !== "not") {
                    tokenStream.unget();
                    ident = null;
                  } else {
                    token = tokenStream.token();
                  }
                }
                this._readWhitespace();
                if (tokenStream.peek() === Tokens.IDENT) {
                  type = this._media_type();
                  if (token === null) {
                    token = tokenStream.token();
                  }
                } else if (tokenStream.peek() === Tokens.LPAREN) {
                  if (token === null) {
                    token = tokenStream.LT(1);
                  }
                  expressions.push(this._media_expression());
                }
                if (type === null && expressions.length === 0) {
                  return null;
                } else {
                  this._readWhitespace();
                  while (tokenStream.match(Tokens.IDENT)) {
                    if (tokenStream.token().value.toLowerCase() !== "and") {
                      this._unexpectedToken(tokenStream.token());
                    }
                    this._readWhitespace();
                    expressions.push(this._media_expression());
                  }
                }
                return new MediaQuery(ident, type, expressions, token.startLine, token.startCol);
              },
              //CSS3 Media Queries
              _media_type: function () {
                /*
                 * media_type
                 *   : IDENT
                 *   ;
                 */
                return this._media_feature();
              },
              /**
               * Note: in CSS3 Media Queries, this is called "expression".
               * Renamed here to avoid conflict with CSS3 Selectors
               * definition of "expression". Also note that "expr" in the
               * grammar now maps to "expression" from CSS3 selectors.
               * @method _media_expression
               * @private
               */
              _media_expression: function () {
                /*
                 * expression
                 *  : '(' S* media_feature S* [ ':' S* expr ]? ')' S*
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  feature = null,
                  token,
                  expression = null;
                tokenStream.mustMatch(Tokens.LPAREN);
                feature = this._media_feature();
                this._readWhitespace();
                if (tokenStream.match(Tokens.COLON)) {
                  this._readWhitespace();
                  token = tokenStream.LT(1);
                  expression = this._expression();
                }
                tokenStream.mustMatch(Tokens.RPAREN);
                this._readWhitespace();
                return new MediaFeature(feature, expression ? new SyntaxUnit(expression, token.startLine, token.startCol) : null);
              },
              //CSS3 Media Queries
              _media_feature: function () {
                /*
                 * media_feature
                 *   : IDENT
                 *   ;
                 */
                var tokenStream = this._tokenStream;
                this._readWhitespace();
                tokenStream.mustMatch(Tokens.IDENT);
                return SyntaxUnit.fromToken(tokenStream.token());
              },
              //CSS3 Paged Media
              _page: function () {
                /*
                 * page:
                 *    PAGE_SYM S* IDENT? pseudo_page? S*
                 *    '{' S* [ declaration | margin ]? [ ';' S* [ declaration | margin ]? ]* '}' S*
                 *    ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col,
                  identifier = null,
                  pseudoPage = null;

                //look for @page
                tokenStream.mustMatch(Tokens.PAGE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                if (tokenStream.match(Tokens.IDENT)) {
                  identifier = tokenStream.token().value;

                  //The value 'auto' may not be used as a page name and MUST be treated as a syntax error.
                  if (identifier.toLowerCase() === "auto") {
                    this._unexpectedToken(tokenStream.token());
                  }
                }

                //see if there's a colon upcoming
                if (tokenStream.peek() === Tokens.COLON) {
                  pseudoPage = this._pseudo_page();
                }
                this._readWhitespace();
                this.fire({
                  type: "startpage",
                  id: identifier,
                  pseudo: pseudoPage,
                  line: line,
                  col: col
                });
                this._readDeclarations(true, true);
                this.fire({
                  type: "endpage",
                  id: identifier,
                  pseudo: pseudoPage,
                  line: line,
                  col: col
                });
              },
              //CSS3 Paged Media
              _margin: function () {
                /*
                 * margin :
                 *    margin_sym S* '{' declaration [ ';' S* declaration? ]* '}' S*
                 *    ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col,
                  marginSym = this._margin_sym();
                if (marginSym) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  this.fire({
                    type: "startpagemargin",
                    margin: marginSym,
                    line: line,
                    col: col
                  });
                  this._readDeclarations(true);
                  this.fire({
                    type: "endpagemargin",
                    margin: marginSym,
                    line: line,
                    col: col
                  });
                  return true;
                } else {
                  return false;
                }
              },
              //CSS3 Paged Media
              _margin_sym: function () {
                /*
                 * margin_sym :
                 *    TOPLEFTCORNER_SYM |
                 *    TOPLEFT_SYM |
                 *    TOPCENTER_SYM |
                 *    TOPRIGHT_SYM |
                 *    TOPRIGHTCORNER_SYM |
                 *    BOTTOMLEFTCORNER_SYM |
                 *    BOTTOMLEFT_SYM |
                 *    BOTTOMCENTER_SYM |
                 *    BOTTOMRIGHT_SYM |
                 *    BOTTOMRIGHTCORNER_SYM |
                 *    LEFTTOP_SYM |
                 *    LEFTMIDDLE_SYM |
                 *    LEFTBOTTOM_SYM |
                 *    RIGHTTOP_SYM |
                 *    RIGHTMIDDLE_SYM |
                 *    RIGHTBOTTOM_SYM
                 *    ;
                 */

                var tokenStream = this._tokenStream;
                if (tokenStream.match([Tokens.TOPLEFTCORNER_SYM, Tokens.TOPLEFT_SYM, Tokens.TOPCENTER_SYM, Tokens.TOPRIGHT_SYM, Tokens.TOPRIGHTCORNER_SYM, Tokens.BOTTOMLEFTCORNER_SYM, Tokens.BOTTOMLEFT_SYM, Tokens.BOTTOMCENTER_SYM, Tokens.BOTTOMRIGHT_SYM, Tokens.BOTTOMRIGHTCORNER_SYM, Tokens.LEFTTOP_SYM, Tokens.LEFTMIDDLE_SYM, Tokens.LEFTBOTTOM_SYM, Tokens.RIGHTTOP_SYM, Tokens.RIGHTMIDDLE_SYM, Tokens.RIGHTBOTTOM_SYM])) {
                  return SyntaxUnit.fromToken(tokenStream.token());
                } else {
                  return null;
                }
              },
              _pseudo_page: function () {
                /*
                 * pseudo_page
                 *   : ':' IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream;
                tokenStream.mustMatch(Tokens.COLON);
                tokenStream.mustMatch(Tokens.IDENT);

                //TODO: CSS3 Paged Media says only "left", "center", and "right" are allowed

                return tokenStream.token().value;
              },
              _font_face: function () {
                /*
                 * font_face
                 *   : FONT_FACE_SYM S*
                 *     '{' S* declaration [ ';' S* declaration ]* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col;

                //look for @page
                tokenStream.mustMatch(Tokens.FONT_FACE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                this.fire({
                  type: "startfontface",
                  line: line,
                  col: col
                });
                this._readDeclarations(true);
                this.fire({
                  type: "endfontface",
                  line: line,
                  col: col
                });
              },
              _viewport: function () {
                /*
                 * viewport
                 *   : VIEWPORT_SYM S*
                 *     '{' S* declaration? [ ';' S* declaration? ]* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col;
                tokenStream.mustMatch(Tokens.VIEWPORT_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                this.fire({
                  type: "startviewport",
                  line: line,
                  col: col
                });
                this._readDeclarations(true);
                this.fire({
                  type: "endviewport",
                  line: line,
                  col: col
                });
              },
              _document: function () {
                /*
                 * document
                 *   : DOCUMENT_SYM S*
                 *     _document_function [ ',' S* _document_function ]* S*
                 *     '{' S* ruleset* '}'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token,
                  functions = [],
                  prefix = "";
                tokenStream.mustMatch(Tokens.DOCUMENT_SYM);
                token = tokenStream.token();
                if (/^@\-([^\-]+)\-/.test(token.value)) {
                  prefix = RegExp.$1;
                }
                this._readWhitespace();
                functions.push(this._document_function());
                while (tokenStream.match(Tokens.COMMA)) {
                  this._readWhitespace();
                  functions.push(this._document_function());
                }
                tokenStream.mustMatch(Tokens.LBRACE);
                this._readWhitespace();
                this.fire({
                  type: "startdocument",
                  functions: functions,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
                var ok = true;
                while (ok) {
                  switch (tokenStream.peek()) {
                    case Tokens.PAGE_SYM:
                      this._page();
                      break;
                    case Tokens.FONT_FACE_SYM:
                      this._font_face();
                      break;
                    case Tokens.VIEWPORT_SYM:
                      this._viewport();
                      break;
                    case Tokens.MEDIA_SYM:
                      this._media();
                      break;
                    case Tokens.KEYFRAMES_SYM:
                      this._keyframes();
                      break;
                    case Tokens.DOCUMENT_SYM:
                      this._document();
                      break;
                    default:
                      ok = Boolean(this._ruleset());
                  }
                }
                tokenStream.mustMatch(Tokens.RBRACE);
                token = tokenStream.token();
                this._readWhitespace();
                this.fire({
                  type: "enddocument",
                  functions: functions,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
              },
              _document_function: function () {
                /*
                 * document_function
                 *   : function | URI S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value;
                if (tokenStream.match(Tokens.URI)) {
                  value = tokenStream.token().value;
                  this._readWhitespace();
                } else {
                  value = this._function();
                }
                return value;
              },
              _operator: function (inFunction) {
                /*
                 * operator (outside function)
                 *  : '/' S* | ',' S* | /( empty )/
                 * operator (inside function)
                 *  : '/' S* | '+' S* | '*' S* | '-' S* /( empty )/
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                  token = null;
                if (tokenStream.match([Tokens.SLASH, Tokens.COMMA]) || inFunction && tokenStream.match([Tokens.PLUS, Tokens.STAR, Tokens.MINUS])) {
                  token = tokenStream.token();
                  this._readWhitespace();
                }
                return token ? PropertyValuePart.fromToken(token) : null;
              },
              _combinator: function () {
                /*
                 * combinator
                 *  : PLUS S* | GREATER S* | TILDE S* | S+
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                  value = null,
                  token;
                if (tokenStream.match([Tokens.PLUS, Tokens.GREATER, Tokens.TILDE])) {
                  token = tokenStream.token();
                  value = new Combinator(token.value, token.startLine, token.startCol);
                  this._readWhitespace();
                }
                return value;
              },
              _unary_operator: function () {
                /*
                 * unary_operator
                 *  : '-' | '+'
                 *  ;
                 */

                var tokenStream = this._tokenStream;
                if (tokenStream.match([Tokens.MINUS, Tokens.PLUS])) {
                  return tokenStream.token().value;
                } else {
                  return null;
                }
              },
              _property: function () {
                /*
                 * property
                 *   : IDENT S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value = null,
                  hack = null,
                  tokenValue,
                  token,
                  line,
                  col;

                //check for star hack - throws error if not allowed
                if (tokenStream.peek() === Tokens.STAR && this.options.starHack) {
                  tokenStream.get();
                  token = tokenStream.token();
                  hack = token.value;
                  line = token.startLine;
                  col = token.startCol;
                }
                if (tokenStream.match(Tokens.IDENT)) {
                  token = tokenStream.token();
                  tokenValue = token.value;

                  //check for underscore hack - no error if not allowed because it's valid CSS syntax
                  if (tokenValue.charAt(0) === "_" && this.options.underscoreHack) {
                    hack = "_";
                    tokenValue = tokenValue.substring(1);
                  }
                  value = new PropertyName(tokenValue, hack, line || token.startLine, col || token.startCol);
                  this._readWhitespace();
                }
                return value;
              },
              //Augmented with CSS3 Selectors
              _ruleset: function () {
                /*
                 * ruleset
                 *   : selectors_group
                 *     '{' S* declaration? [ ';' S* declaration? ]* '}' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  tt,
                  selectors;

                /*
                 * Error Recovery: If even a single selector fails to parse,
                 * then the entire ruleset should be thrown away.
                 */
                try {
                  selectors = this._selectors_group();
                } catch (ex) {
                  if (ex instanceof SyntaxError && !this.options.strict) {
                    //fire error event
                    this.fire({
                      type: "error",
                      error: ex,
                      message: ex.message,
                      line: ex.line,
                      col: ex.col
                    });

                    //skip over everything until closing brace
                    tt = tokenStream.advance([Tokens.RBRACE]);
                    if (tt === Tokens.RBRACE) {
                      //if there's a right brace, the rule is finished so don't do anything
                    } else {
                      //otherwise, rethrow the error because it wasn't handled properly
                      throw ex;
                    }
                  } else {
                    //not a syntax error, rethrow it
                    throw ex;
                  }

                  //trigger parser to continue
                  return true;
                }

                //if it got here, all selectors parsed
                if (selectors) {
                  this.fire({
                    type: "startrule",
                    selectors: selectors,
                    line: selectors[0].line,
                    col: selectors[0].col
                  });
                  this._readDeclarations(true);
                  this.fire({
                    type: "endrule",
                    selectors: selectors,
                    line: selectors[0].line,
                    col: selectors[0].col
                  });
                }
                return selectors;
              },
              //CSS3 Selectors
              _selectors_group: function () {
                /*
                 * selectors_group
                 *   : selector [ COMMA S* selector ]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  selectors = [],
                  selector;
                selector = this._selector();
                if (selector !== null) {
                  selectors.push(selector);
                  while (tokenStream.match(Tokens.COMMA)) {
                    this._readWhitespace();
                    selector = this._selector();
                    if (selector !== null) {
                      selectors.push(selector);
                    } else {
                      this._unexpectedToken(tokenStream.LT(1));
                    }
                  }
                }
                return selectors.length ? selectors : null;
              },
              //CSS3 Selectors
              _selector: function () {
                /*
                 * selector
                 *   : simple_selector_sequence [ combinator simple_selector_sequence ]*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  selector = [],
                  nextSelector = null,
                  combinator = null,
                  ws = null;

                //if there's no simple selector, then there's no selector
                nextSelector = this._simple_selector_sequence();
                if (nextSelector === null) {
                  return null;
                }
                selector.push(nextSelector);
                do {
                  //look for a combinator
                  combinator = this._combinator();
                  if (combinator !== null) {
                    selector.push(combinator);
                    nextSelector = this._simple_selector_sequence();

                    //there must be a next selector
                    if (nextSelector === null) {
                      this._unexpectedToken(tokenStream.LT(1));
                    } else {
                      //nextSelector is an instance of SelectorPart
                      selector.push(nextSelector);
                    }
                  } else {
                    //if there's not whitespace, we're done
                    if (this._readWhitespace()) {
                      //add whitespace separator
                      ws = new Combinator(tokenStream.token().value, tokenStream.token().startLine, tokenStream.token().startCol);

                      //combinator is not required
                      combinator = this._combinator();

                      //selector is required if there's a combinator
                      nextSelector = this._simple_selector_sequence();
                      if (nextSelector === null) {
                        if (combinator !== null) {
                          this._unexpectedToken(tokenStream.LT(1));
                        }
                      } else {
                        if (combinator !== null) {
                          selector.push(combinator);
                        } else {
                          selector.push(ws);
                        }
                        selector.push(nextSelector);
                      }
                    } else {
                      break;
                    }
                  }
                } while (true);
                return new Selector(selector, selector[0].line, selector[0].col);
              },
              //CSS3 Selectors
              _simple_selector_sequence: function () {
                /*
                 * simple_selector_sequence
                 *   : [ type_selector | universal ]
                 *     [ HASH | class | attrib | pseudo | negation ]*
                 *   | [ HASH | class | attrib | pseudo | negation ]+
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  //parts of a simple selector
                  elementName = null,
                  modifiers = [],
                  //complete selector text
                  selectorText = "",
                  //the different parts after the element name to search for
                  components = [
                  //HASH
                  function () {
                    return tokenStream.match(Tokens.HASH) ? new SelectorSubPart(tokenStream.token().value, "id", tokenStream.token().startLine, tokenStream.token().startCol) : null;
                  }, this._class, this._attrib, this._pseudo, this._negation],
                  i = 0,
                  len = components.length,
                  component = null,
                  line,
                  col;

                //get starting line and column for the selector
                line = tokenStream.LT(1).startLine;
                col = tokenStream.LT(1).startCol;
                elementName = this._type_selector();
                if (!elementName) {
                  elementName = this._universal();
                }
                if (elementName !== null) {
                  selectorText += elementName;
                }
                while (true) {
                  //whitespace means we're done
                  if (tokenStream.peek() === Tokens.S) {
                    break;
                  }

                  //check for each component
                  while (i < len && component === null) {
                    component = components[i++].call(this);
                  }
                  if (component === null) {
                    //we don't have a selector
                    if (selectorText === "") {
                      return null;
                    } else {
                      break;
                    }
                  } else {
                    i = 0;
                    modifiers.push(component);
                    selectorText += component.toString();
                    component = null;
                  }
                }
                return selectorText !== "" ? new SelectorPart(elementName, modifiers, selectorText, line, col) : null;
              },
              //CSS3 Selectors
              _type_selector: function () {
                /*
                 * type_selector
                 *   : [ namespace_prefix ]? element_name
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  ns = this._namespace_prefix(),
                  elementName = this._element_name();
                if (!elementName) {
                  /*
                   * Need to back out the namespace that was read due to both
                   * type_selector and universal reading namespace_prefix
                   * first. Kind of hacky, but only way I can figure out
                   * right now how to not change the grammar.
                   */
                  if (ns) {
                    tokenStream.unget();
                    if (ns.length > 1) {
                      tokenStream.unget();
                    }
                  }
                  return null;
                } else {
                  if (ns) {
                    elementName.text = ns + elementName.text;
                    elementName.col -= ns.length;
                  }
                  return elementName;
                }
              },
              //CSS3 Selectors
              _class: function () {
                /*
                 * class
                 *   : '.' IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token;
                if (tokenStream.match(Tokens.DOT)) {
                  tokenStream.mustMatch(Tokens.IDENT);
                  token = tokenStream.token();
                  return new SelectorSubPart("." + token.value, "class", token.startLine, token.startCol - 1);
                } else {
                  return null;
                }
              },
              //CSS3 Selectors
              _element_name: function () {
                /*
                 * element_name
                 *   : IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token;
                if (tokenStream.match(Tokens.IDENT)) {
                  token = tokenStream.token();
                  return new SelectorSubPart(token.value, "elementName", token.startLine, token.startCol);
                } else {
                  return null;
                }
              },
              //CSS3 Selectors
              _namespace_prefix: function () {
                /*
                 * namespace_prefix
                 *   : [ IDENT | '*' ]? '|'
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  value = "";

                //verify that this is a namespace prefix
                if (tokenStream.LA(1) === Tokens.PIPE || tokenStream.LA(2) === Tokens.PIPE) {
                  if (tokenStream.match([Tokens.IDENT, Tokens.STAR])) {
                    value += tokenStream.token().value;
                  }
                  tokenStream.mustMatch(Tokens.PIPE);
                  value += "|";
                }
                return value.length ? value : null;
              },
              //CSS3 Selectors
              _universal: function () {
                /*
                 * universal
                 *   : [ namespace_prefix ]? '*'
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  value = "",
                  ns;
                ns = this._namespace_prefix();
                if (ns) {
                  value += ns;
                }
                if (tokenStream.match(Tokens.STAR)) {
                  value += "*";
                }
                return value.length ? value : null;
              },
              //CSS3 Selectors
              _attrib: function () {
                /*
                 * attrib
                 *   : '[' S* [ namespace_prefix ]? IDENT S*
                 *         [ [ PREFIXMATCH |
                 *             SUFFIXMATCH |
                 *             SUBSTRINGMATCH |
                 *             '=' |
                 *             INCLUDES |
                 *             DASHMATCH ] S* [ IDENT | STRING ] S*
                 *         ]? ']'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value = null,
                  ns,
                  token;
                if (tokenStream.match(Tokens.LBRACKET)) {
                  token = tokenStream.token();
                  value = token.value;
                  value += this._readWhitespace();
                  ns = this._namespace_prefix();
                  if (ns) {
                    value += ns;
                  }
                  tokenStream.mustMatch(Tokens.IDENT);
                  value += tokenStream.token().value;
                  value += this._readWhitespace();
                  if (tokenStream.match([Tokens.PREFIXMATCH, Tokens.SUFFIXMATCH, Tokens.SUBSTRINGMATCH, Tokens.EQUALS, Tokens.INCLUDES, Tokens.DASHMATCH])) {
                    value += tokenStream.token().value;
                    value += this._readWhitespace();
                    tokenStream.mustMatch([Tokens.IDENT, Tokens.STRING]);
                    value += tokenStream.token().value;
                    value += this._readWhitespace();
                  }
                  tokenStream.mustMatch(Tokens.RBRACKET);
                  return new SelectorSubPart(value + "]", "attribute", token.startLine, token.startCol);
                } else {
                  return null;
                }
              },
              //CSS3 Selectors
              _pseudo: function () {
                /*
                 * pseudo
                 *   : ':' ':'? [ IDENT | functional_pseudo ]
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  pseudo = null,
                  colons = ":",
                  line,
                  col;
                if (tokenStream.match(Tokens.COLON)) {
                  if (tokenStream.match(Tokens.COLON)) {
                    colons += ":";
                  }
                  if (tokenStream.match(Tokens.IDENT)) {
                    pseudo = tokenStream.token().value;
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol - colons.length;
                  } else if (tokenStream.peek() === Tokens.FUNCTION) {
                    line = tokenStream.LT(1).startLine;
                    col = tokenStream.LT(1).startCol - colons.length;
                    pseudo = this._functional_pseudo();
                  }
                  if (pseudo) {
                    pseudo = new SelectorSubPart(colons + pseudo, "pseudo", line, col);
                  } else {
                    var startLine = tokenStream.LT(1).startLine,
                      startCol = tokenStream.LT(0).startCol;
                    throw new SyntaxError("Expected a `FUNCTION` or `IDENT` after colon at line " + startLine + ", col " + startCol + ".", startLine, startCol);
                  }
                }
                return pseudo;
              },
              //CSS3 Selectors
              _functional_pseudo: function () {
                /*
                 * functional_pseudo
                 *   : FUNCTION S* expression ')'
                 *   ;
                */

                var tokenStream = this._tokenStream,
                  value = null;
                if (tokenStream.match(Tokens.FUNCTION)) {
                  value = tokenStream.token().value;
                  value += this._readWhitespace();
                  value += this._expression();
                  tokenStream.mustMatch(Tokens.RPAREN);
                  value += ")";
                }
                return value;
              },
              //CSS3 Selectors
              _expression: function () {
                /*
                 * expression
                 *   : [ [ PLUS | '-' | DIMENSION | NUMBER | STRING | IDENT ] S* ]+
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value = "";
                while (tokenStream.match([Tokens.PLUS, Tokens.MINUS, Tokens.DIMENSION, Tokens.NUMBER, Tokens.STRING, Tokens.IDENT, Tokens.LENGTH, Tokens.FREQ, Tokens.ANGLE, Tokens.TIME, Tokens.RESOLUTION, Tokens.SLASH])) {
                  value += tokenStream.token().value;
                  value += this._readWhitespace();
                }
                return value.length ? value : null;
              },
              //CSS3 Selectors
              _negation: function () {
                /*
                 * negation
                 *   : NOT S* negation_arg S* ')'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  line,
                  col,
                  value = "",
                  arg,
                  subpart = null;
                if (tokenStream.match(Tokens.NOT)) {
                  value = tokenStream.token().value;
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  value += this._readWhitespace();
                  arg = this._negation_arg();
                  value += arg;
                  value += this._readWhitespace();
                  tokenStream.match(Tokens.RPAREN);
                  value += tokenStream.token().value;
                  subpart = new SelectorSubPart(value, "not", line, col);
                  subpart.args.push(arg);
                }
                return subpart;
              },
              //CSS3 Selectors
              _negation_arg: function () {
                /*
                 * negation_arg
                 *   : type_selector | universal | HASH | class | attrib | pseudo
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  args = [this._type_selector, this._universal, function () {
                    return tokenStream.match(Tokens.HASH) ? new SelectorSubPart(tokenStream.token().value, "id", tokenStream.token().startLine, tokenStream.token().startCol) : null;
                  }, this._class, this._attrib, this._pseudo],
                  arg = null,
                  i = 0,
                  len = args.length,
                  line,
                  col,
                  part;
                line = tokenStream.LT(1).startLine;
                col = tokenStream.LT(1).startCol;
                while (i < len && arg === null) {
                  arg = args[i].call(this);
                  i++;
                }

                //must be a negation arg
                if (arg === null) {
                  this._unexpectedToken(tokenStream.LT(1));
                }

                //it's an element name
                if (arg.type === "elementName") {
                  part = new SelectorPart(arg, [], arg.toString(), line, col);
                } else {
                  part = new SelectorPart(null, [arg], arg.toString(), line, col);
                }
                return part;
              },
              _declaration: function () {
                /*
                 * declaration
                 *   : property ':' S* expr prio?
                 *   | /( empty )/
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  property = null,
                  expr = null,
                  prio = null,
                  invalid = null,
                  propertyName = "";
                property = this._property();
                if (property !== null) {
                  tokenStream.mustMatch(Tokens.COLON);
                  this._readWhitespace();
                  expr = this._expr();

                  //if there's no parts for the value, it's an error
                  if (!expr || expr.length === 0) {
                    this._unexpectedToken(tokenStream.LT(1));
                  }
                  prio = this._prio();

                  /*
                   * If hacks should be allowed, then only check the root
                   * property. If hacks should not be allowed, treat
                   * _property or *property as invalid properties.
                   */
                  propertyName = property.toString();
                  if (this.options.starHack && property.hack === "*" || this.options.underscoreHack && property.hack === "_") {
                    propertyName = property.text;
                  }
                  try {
                    this._validateProperty(propertyName, expr);
                  } catch (ex) {
                    invalid = ex;
                  }
                  this.fire({
                    type: "property",
                    property: property,
                    value: expr,
                    important: prio,
                    line: property.line,
                    col: property.col,
                    invalid: invalid
                  });
                  return true;
                } else {
                  return false;
                }
              },
              _prio: function () {
                /*
                 * prio
                 *   : IMPORTANT_SYM S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  result = tokenStream.match(Tokens.IMPORTANT_SYM);
                this._readWhitespace();
                return result;
              },
              _expr: function (inFunction) {
                /*
                 * expr
                 *   : term [ operator term ]*
                 *   ;
                 */

                var values = [],
                  //valueParts    = [],
                  value = null,
                  operator = null;
                value = this._term(inFunction);
                if (value !== null) {
                  values.push(value);
                  do {
                    operator = this._operator(inFunction);

                    //if there's an operator, keep building up the value parts
                    if (operator) {
                      values.push(operator);
                    } /*else {
                        //if there's not an operator, you have a full value
                        values.push(new PropertyValue(valueParts, valueParts[0].line, valueParts[0].col));
                        valueParts = [];
                      }*/

                    value = this._term(inFunction);
                    if (value === null) {
                      break;
                    } else {
                      values.push(value);
                    }
                  } while (true);
                }

                //cleanup
                /*if (valueParts.length) {
                    values.push(new PropertyValue(valueParts, valueParts[0].line, valueParts[0].col));
                }*/

                return values.length > 0 ? new PropertyValue(values, values[0].line, values[0].col) : null;
              },
              _term: function (inFunction) {
                /*
                 * term
                 *   : unary_operator?
                 *     [ NUMBER S* | PERCENTAGE S* | LENGTH S* | ANGLE S* |
                 *       TIME S* | FREQ S* | function | ie_function ]
                 *   | STRING S* | IDENT S* | URI S* | UNICODERANGE S* | hexcolor
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  unary = null,
                  value = null,
                  endChar = null,
                  part = null,
                  token,
                  line,
                  col;

                //returns the operator or null
                unary = this._unary_operator();
                if (unary !== null) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                }

                //exception for IE filters
                if (tokenStream.peek() === Tokens.IE_FUNCTION && this.options.ieFilters) {
                  value = this._ie_function();
                  if (unary === null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                  }

                  //see if it's a simple block
                } else if (inFunction && tokenStream.match([Tokens.LPAREN, Tokens.LBRACE, Tokens.LBRACKET])) {
                  token = tokenStream.token();
                  endChar = token.endChar;
                  value = token.value + this._expr(inFunction).text;
                  if (unary === null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                  }
                  tokenStream.mustMatch(Tokens.type(endChar));
                  value += endChar;
                  this._readWhitespace();

                  //see if there's a simple match
                } else if (tokenStream.match([Tokens.NUMBER, Tokens.PERCENTAGE, Tokens.LENGTH, Tokens.ANGLE, Tokens.TIME, Tokens.FREQ, Tokens.STRING, Tokens.IDENT, Tokens.URI, Tokens.UNICODE_RANGE])) {
                  value = tokenStream.token().value;
                  if (unary === null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                    // Correct potentially-inaccurate IDENT parsing in
                    // PropertyValuePart constructor.
                    part = PropertyValuePart.fromToken(tokenStream.token());
                  }
                  this._readWhitespace();
                } else {
                  //see if it's a color
                  token = this._hexcolor();
                  if (token === null) {
                    //if there's no unary, get the start of the next token for line/col info
                    if (unary === null) {
                      line = tokenStream.LT(1).startLine;
                      col = tokenStream.LT(1).startCol;
                    }

                    //has to be a function
                    if (value === null) {
                      /*
                       * This checks for alpha(opacity=0) style of IE
                       * functions. IE_FUNCTION only presents progid: style.
                       */
                      if (tokenStream.LA(3) === Tokens.EQUALS && this.options.ieFilters) {
                        value = this._ie_function();
                      } else {
                        value = this._function();
                      }
                    }

                    /*if (value === null) {
                        return null;
                        //throw new Error("Expected identifier at line " + tokenStream.token().startLine + ", character " +  tokenStream.token().startCol + ".");
                    }*/
                  } else {
                    value = token.value;
                    if (unary === null) {
                      line = token.startLine;
                      col = token.startCol;
                    }
                  }
                }
                return part !== null ? part : value !== null ? new PropertyValuePart(unary !== null ? unary + value : value, line, col) : null;
              },
              _function: function () {
                /*
                 * function
                 *   : FUNCTION S* expr ')' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  functionText = null,
                  expr = null,
                  lt;
                if (tokenStream.match(Tokens.FUNCTION)) {
                  functionText = tokenStream.token().value;
                  this._readWhitespace();
                  expr = this._expr(true);
                  functionText += expr;

                  //START: Horrible hack in case it's an IE filter
                  if (this.options.ieFilters && tokenStream.peek() === Tokens.EQUALS) {
                    do {
                      if (this._readWhitespace()) {
                        functionText += tokenStream.token().value;
                      }

                      //might be second time in the loop
                      if (tokenStream.LA(0) === Tokens.COMMA) {
                        functionText += tokenStream.token().value;
                      }
                      tokenStream.match(Tokens.IDENT);
                      functionText += tokenStream.token().value;
                      tokenStream.match(Tokens.EQUALS);
                      functionText += tokenStream.token().value;

                      //functionText += this._term();
                      lt = tokenStream.peek();
                      while (lt !== Tokens.COMMA && lt !== Tokens.S && lt !== Tokens.RPAREN) {
                        tokenStream.get();
                        functionText += tokenStream.token().value;
                        lt = tokenStream.peek();
                      }
                    } while (tokenStream.match([Tokens.COMMA, Tokens.S]));
                  }

                  //END: Horrible Hack

                  tokenStream.match(Tokens.RPAREN);
                  functionText += ")";
                  this._readWhitespace();
                }
                return functionText;
              },
              _ie_function: function () {
                /* (My own extension)
                 * ie_function
                 *   : IE_FUNCTION S* IDENT '=' term [S* ','? IDENT '=' term]+ ')' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  functionText = null,
                  lt;

                //IE function can begin like a regular function, too
                if (tokenStream.match([Tokens.IE_FUNCTION, Tokens.FUNCTION])) {
                  functionText = tokenStream.token().value;
                  do {
                    if (this._readWhitespace()) {
                      functionText += tokenStream.token().value;
                    }

                    //might be second time in the loop
                    if (tokenStream.LA(0) === Tokens.COMMA) {
                      functionText += tokenStream.token().value;
                    }
                    tokenStream.match(Tokens.IDENT);
                    functionText += tokenStream.token().value;
                    tokenStream.match(Tokens.EQUALS);
                    functionText += tokenStream.token().value;

                    //functionText += this._term();
                    lt = tokenStream.peek();
                    while (lt !== Tokens.COMMA && lt !== Tokens.S && lt !== Tokens.RPAREN) {
                      tokenStream.get();
                      functionText += tokenStream.token().value;
                      lt = tokenStream.peek();
                    }
                  } while (tokenStream.match([Tokens.COMMA, Tokens.S]));
                  tokenStream.match(Tokens.RPAREN);
                  functionText += ")";
                  this._readWhitespace();
                }
                return functionText;
              },
              _hexcolor: function () {
                /*
                 * There is a constraint on the color that it must
                 * have either 3 or 6 hex-digits (i.e., [0-9a-fA-F])
                 * after the "#"; e.g., "#000" is OK, but "#abcd" is not.
                 *
                 * hexcolor
                 *   : HASH S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token = null,
                  color;
                if (tokenStream.match(Tokens.HASH)) {
                  //need to do some validation here

                  token = tokenStream.token();
                  color = token.value;
                  if (!/#[a-f0-9]{3,6}/i.test(color)) {
                    throw new SyntaxError("Expected a hex color but found '" + color + "' at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
                  }
                  this._readWhitespace();
                }
                return token;
              },
              //-----------------------------------------------------------------
              // Animations methods
              //-----------------------------------------------------------------

              _keyframes: function () {
                /*
                 * keyframes:
                 *   : KEYFRAMES_SYM S* keyframe_name S* '{' S* keyframe_rule* '}' {
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  token,
                  tt,
                  name,
                  prefix = "";
                tokenStream.mustMatch(Tokens.KEYFRAMES_SYM);
                token = tokenStream.token();
                if (/^@\-([^\-]+)\-/.test(token.value)) {
                  prefix = RegExp.$1;
                }
                this._readWhitespace();
                name = this._keyframe_name();
                this._readWhitespace();
                tokenStream.mustMatch(Tokens.LBRACE);
                this.fire({
                  type: "startkeyframes",
                  name: name,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
                this._readWhitespace();
                tt = tokenStream.peek();

                //check for key
                while (tt === Tokens.IDENT || tt === Tokens.PERCENTAGE) {
                  this._keyframe_rule();
                  this._readWhitespace();
                  tt = tokenStream.peek();
                }
                this.fire({
                  type: "endkeyframes",
                  name: name,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
                this._readWhitespace();
                tokenStream.mustMatch(Tokens.RBRACE);
                this._readWhitespace();
              },
              _keyframe_name: function () {
                /*
                 * keyframe_name:
                 *   : IDENT
                 *   | STRING
                 *   ;
                 */
                var tokenStream = this._tokenStream;
                tokenStream.mustMatch([Tokens.IDENT, Tokens.STRING]);
                return SyntaxUnit.fromToken(tokenStream.token());
              },
              _keyframe_rule: function () {
                /*
                 * keyframe_rule:
                 *   : key_list S*
                 *     '{' S* declaration [ ';' S* declaration ]* '}' S*
                 *   ;
                 */
                var keyList = this._key_list();
                this.fire({
                  type: "startkeyframerule",
                  keys: keyList,
                  line: keyList[0].line,
                  col: keyList[0].col
                });
                this._readDeclarations(true);
                this.fire({
                  type: "endkeyframerule",
                  keys: keyList,
                  line: keyList[0].line,
                  col: keyList[0].col
                });
              },
              _key_list: function () {
                /*
                 * key_list:
                 *   : key [ S* ',' S* key]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  keyList = [];

                //must be least one key
                keyList.push(this._key());
                this._readWhitespace();
                while (tokenStream.match(Tokens.COMMA)) {
                  this._readWhitespace();
                  keyList.push(this._key());
                  this._readWhitespace();
                }
                return keyList;
              },
              _key: function () {
                /*
                 * There is a restriction that IDENT can be only "from" or "to".
                 *
                 * key
                 *   : PERCENTAGE
                 *   | IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token;
                if (tokenStream.match(Tokens.PERCENTAGE)) {
                  return SyntaxUnit.fromToken(tokenStream.token());
                } else if (tokenStream.match(Tokens.IDENT)) {
                  token = tokenStream.token();
                  if (/from|to/i.test(token.value)) {
                    return SyntaxUnit.fromToken(token);
                  }
                  tokenStream.unget();
                }

                //if it gets here, there wasn't a valid token, so time to explode
                this._unexpectedToken(tokenStream.LT(1));
              },
              //-----------------------------------------------------------------
              // Helper methods
              //-----------------------------------------------------------------

              /**
               * Not part of CSS grammar, but useful for skipping over
               * combination of white space and HTML-style comments.
               * @return {void}
               * @method _skipCruft
               * @private
               */
              _skipCruft: function () {
                while (this._tokenStream.match([Tokens.S, Tokens.CDO, Tokens.CDC])) {
                  //noop
                }
              },
              /**
               * Not part of CSS grammar, but this pattern occurs frequently
               * in the official CSS grammar. Split out here to eliminate
               * duplicate code.
               * @param {Boolean} checkStart Indicates if the rule should check
               *      for the left brace at the beginning.
               * @param {Boolean} readMargins Indicates if the rule should check
               *      for margin patterns.
               * @return {void}
               * @method _readDeclarations
               * @private
               */
              _readDeclarations: function (checkStart, readMargins) {
                /*
                 * Reads the pattern
                 * S* '{' S* declaration [ ';' S* declaration ]* '}' S*
                 * or
                 * S* '{' S* [ declaration | margin ]? [ ';' S* [ declaration | margin ]? ]* '}' S*
                 * Note that this is how it is described in CSS3 Paged Media, but is actually incorrect.
                 * A semicolon is only necessary following a declaration if there's another declaration
                 * or margin afterwards.
                 */
                var tokenStream = this._tokenStream,
                  tt;
                this._readWhitespace();
                if (checkStart) {
                  tokenStream.mustMatch(Tokens.LBRACE);
                }
                this._readWhitespace();
                try {
                  while (true) {
                    if (tokenStream.match(Tokens.SEMICOLON) || readMargins && this._margin()) {
                      //noop
                    } else if (this._declaration()) {
                      if (!tokenStream.match(Tokens.SEMICOLON)) {
                        break;
                      }
                    } else {
                      break;
                    }

                    //if ((!this._margin() && !this._declaration()) || !tokenStream.match(Tokens.SEMICOLON)){
                    //    break;
                    //}
                    this._readWhitespace();
                  }
                  tokenStream.mustMatch(Tokens.RBRACE);
                  this._readWhitespace();
                } catch (ex) {
                  if (ex instanceof SyntaxError && !this.options.strict) {
                    //fire error event
                    this.fire({
                      type: "error",
                      error: ex,
                      message: ex.message,
                      line: ex.line,
                      col: ex.col
                    });

                    //see if there's another declaration
                    tt = tokenStream.advance([Tokens.SEMICOLON, Tokens.RBRACE]);
                    if (tt === Tokens.SEMICOLON) {
                      //if there's a semicolon, then there might be another declaration
                      this._readDeclarations(false, readMargins);
                    } else if (tt !== Tokens.RBRACE) {
                      //if there's a right brace, the rule is finished so don't do anything
                      //otherwise, rethrow the error because it wasn't handled properly
                      throw ex;
                    }
                  } else {
                    //not a syntax error, rethrow it
                    throw ex;
                  }
                }
              },
              /**
               * In some cases, you can end up with two white space tokens in a
               * row. Instead of making a change in every function that looks for
               * white space, this function is used to match as much white space
               * as necessary.
               * @method _readWhitespace
               * @return {String} The white space if found, empty string if not.
               * @private
               */
              _readWhitespace: function () {
                var tokenStream = this._tokenStream,
                  ws = "";
                while (tokenStream.match(Tokens.S)) {
                  ws += tokenStream.token().value;
                }
                return ws;
              },
              /**
               * Throws an error when an unexpected token is found.
               * @param {Object} token The token that was found.
               * @method _unexpectedToken
               * @return {void}
               * @private
               */
              _unexpectedToken: function (token) {
                throw new SyntaxError("Unexpected token '" + token.value + "' at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
              },
              /**
               * Helper method used for parsing subparts of a style sheet.
               * @return {void}
               * @method _verifyEnd
               * @private
               */
              _verifyEnd: function () {
                if (this._tokenStream.LA(1) !== Tokens.EOF) {
                  this._unexpectedToken(this._tokenStream.LT(1));
                }
              },
              //-----------------------------------------------------------------
              // Validation methods
              //-----------------------------------------------------------------
              _validateProperty: function (property, value) {
                Validation.validate(property, value);
              },
              //-----------------------------------------------------------------
              // Parsing methods
              //-----------------------------------------------------------------

              parse: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);
                this._stylesheet();
              },
              parseStyleSheet: function (input) {
                //just passthrough
                return this.parse(input);
              },
              parseMediaQuery: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);
                var result = this._media_query();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses a property value (everything after the semicolon).
               * @return {parserlib.css.PropertyValue} The property value.
               * @throws parserlib.util.SyntaxError If an unexpected token is found.
               * @method parserPropertyValue
               */
              parsePropertyValue: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);
                this._readWhitespace();
                var result = this._expr();

                //okay to have a trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses a complete CSS rule, including selectors and
               * properties.
               * @param {String} input The text to parser.
               * @return {Boolean} True if the parse completed successfully, false if not.
               * @method parseRule
               */
              parseRule: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);

                //skip any leading white space
                this._readWhitespace();
                var result = this._ruleset();

                //skip any trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses a single CSS selector (no comma)
               * @param {String} input The text to parse as a CSS selector.
               * @return {Selector} An object representing the selector.
               * @throws parserlib.util.SyntaxError If an unexpected token is found.
               * @method parseSelector
               */
              parseSelector: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);

                //skip any leading white space
                this._readWhitespace();
                var result = this._selector();

                //skip any trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses an HTML style attribute: a set of CSS declarations
               * separated by semicolons.
               * @param {String} input The text to parse as a style attribute
               * @return {void}
               * @method parseStyleAttribute
               */
              parseStyleAttribute: function (input) {
                input += "}"; // for error recovery in _readDeclarations()
                this._tokenStream = new TokenStream(input, Tokens);
                this._readDeclarations();
              }
            };

          //copy over onto prototype
          for (prop in additions) {
            if (Object.prototype.hasOwnProperty.call(additions, prop)) {
              proto[prop] = additions[prop];
            }
          }
          return proto;
        }();

        /*
        nth
          : S* [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]? |
                 ['-'|'+']? INTEGER | {O}{D}{D} | {E}{V}{E}{N} ] S*
          ;
        */
      }, {
        "../util/EventTarget": 23,
        "../util/SyntaxError": 25,
        "../util/SyntaxUnit": 26,
        "./Combinator": 2,
        "./MediaFeature": 4,
        "./MediaQuery": 5,
        "./PropertyName": 8,
        "./PropertyValue": 9,
        "./PropertyValuePart": 11,
        "./Selector": 13,
        "./SelectorPart": 14,
        "./SelectorSubPart": 15,
        "./TokenStream": 17,
        "./Tokens": 18,
        "./Validation": 19
      }],
      7: [function (require, module, exports) {
        "use strict";

        /* exported Properties */
        var Properties = module.exports = {
          __proto__: null,
          //A
          "align-items": "flex-start | flex-end | center | baseline | stretch",
          "align-content": "flex-start | flex-end | center | space-between | space-around | stretch",
          "align-self": "auto | flex-start | flex-end | center | baseline | stretch",
          "all": "initial | inherit | unset",
          "-webkit-align-items": "flex-start | flex-end | center | baseline | stretch",
          "-webkit-align-content": "flex-start | flex-end | center | space-between | space-around | stretch",
          "-webkit-align-self": "auto | flex-start | flex-end | center | baseline | stretch",
          "alignment-adjust": "auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | <percentage> | <length>",
          "alignment-baseline": "auto | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
          "animation": 1,
          "animation-delay": "<time>#",
          "animation-direction": "<single-animation-direction>#",
          "animation-duration": "<time>#",
          "animation-fill-mode": "[ none | forwards | backwards | both ]#",
          "animation-iteration-count": "[ <number> | infinite ]#",
          "animation-name": "[ none | <single-animation-name> ]#",
          "animation-play-state": "[ running | paused ]#",
          "animation-timing-function": 1,
          //vendor prefixed
          "-moz-animation-delay": "<time>#",
          "-moz-animation-direction": "[ normal | alternate ]#",
          "-moz-animation-duration": "<time>#",
          "-moz-animation-iteration-count": "[ <number> | infinite ]#",
          "-moz-animation-name": "[ none | <single-animation-name> ]#",
          "-moz-animation-play-state": "[ running | paused ]#",
          "-ms-animation-delay": "<time>#",
          "-ms-animation-direction": "[ normal | alternate ]#",
          "-ms-animation-duration": "<time>#",
          "-ms-animation-iteration-count": "[ <number> | infinite ]#",
          "-ms-animation-name": "[ none | <single-animation-name> ]#",
          "-ms-animation-play-state": "[ running | paused ]#",
          "-webkit-animation-delay": "<time>#",
          "-webkit-animation-direction": "[ normal | alternate ]#",
          "-webkit-animation-duration": "<time>#",
          "-webkit-animation-fill-mode": "[ none | forwards | backwards | both ]#",
          "-webkit-animation-iteration-count": "[ <number> | infinite ]#",
          "-webkit-animation-name": "[ none | <single-animation-name> ]#",
          "-webkit-animation-play-state": "[ running | paused ]#",
          "-o-animation-delay": "<time>#",
          "-o-animation-direction": "[ normal | alternate ]#",
          "-o-animation-duration": "<time>#",
          "-o-animation-iteration-count": "[ <number> | infinite ]#",
          "-o-animation-name": "[ none | <single-animation-name> ]#",
          "-o-animation-play-state": "[ running | paused ]#",
          "appearance": "none | auto",
          "-moz-appearance": "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
          "-ms-appearance": "none | icon | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",
          "-webkit-appearance": "none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox	| listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button	| media-seek-forward-button	| media-slider | media-sliderthumb | menulist	| menulist-button	| menulist-text	| menulist-textfield | push-button	| radio	| searchfield	| searchfield-cancel-button	| searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical	| square-button	| textarea	| textfield	| scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical",
          "-o-appearance": "none | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",
          "azimuth": "<azimuth>",
          //B
          "backface-visibility": "visible | hidden",
          "background": 1,
          "background-attachment": "<attachment>#",
          "background-clip": "<box>#",
          "background-color": "<color>",
          "background-image": "<bg-image>#",
          "background-origin": "<box>#",
          "background-position": "<bg-position>",
          "background-repeat": "<repeat-style>#",
          "background-size": "<bg-size>#",
          "baseline-shift": "baseline | sub | super | <percentage> | <length>",
          "behavior": 1,
          "binding": 1,
          "bleed": "<length>",
          "bookmark-label": "<content> | <attr> | <string>",
          "bookmark-level": "none | <integer>",
          "bookmark-state": "open | closed",
          "bookmark-target": "none | <uri> | <attr>",
          "border": "<border-width> || <border-style> || <color>",
          "border-bottom": "<border-width> || <border-style> || <color>",
          "border-bottom-color": "<color>",
          "border-bottom-left-radius": "<x-one-radius>",
          "border-bottom-right-radius": "<x-one-radius>",
          "border-bottom-style": "<border-style>",
          "border-bottom-width": "<border-width>",
          "border-collapse": "collapse | separate",
          "border-color": "<color>{1,4}",
          "border-image": 1,
          "border-image-outset": "[ <length> | <number> ]{1,4}",
          "border-image-repeat": "[ stretch | repeat | round ]{1,2}",
          "border-image-slice": "<border-image-slice>",
          "border-image-source": "<image> | none",
          "border-image-width": "[ <length> | <percentage> | <number> | auto ]{1,4}",
          "border-left": "<border-width> || <border-style> || <color>",
          "border-left-color": "<color>",
          "border-left-style": "<border-style>",
          "border-left-width": "<border-width>",
          "border-radius": "<border-radius>",
          "border-right": "<border-width> || <border-style> || <color>",
          "border-right-color": "<color>",
          "border-right-style": "<border-style>",
          "border-right-width": "<border-width>",
          "border-spacing": "<length>{1,2}",
          "border-style": "<border-style>{1,4}",
          "border-top": "<border-width> || <border-style> || <color>",
          "border-top-color": "<color>",
          "border-top-left-radius": "<x-one-radius>",
          "border-top-right-radius": "<x-one-radius>",
          "border-top-style": "<border-style>",
          "border-top-width": "<border-width>",
          "border-width": "<border-width>{1,4}",
          "bottom": "<margin-width>",
          "-moz-box-align": "start | end | center | baseline | stretch",
          "-moz-box-decoration-break": "slice | clone",
          "-moz-box-direction": "normal | reverse",
          "-moz-box-flex": "<number>",
          "-moz-box-flex-group": "<integer>",
          "-moz-box-lines": "single | multiple",
          "-moz-box-ordinal-group": "<integer>",
          "-moz-box-orient": "horizontal | vertical | inline-axis | block-axis",
          "-moz-box-pack": "start | end | center | justify",
          "-o-box-decoration-break": "slice | clone",
          "-webkit-box-align": "start | end | center | baseline | stretch",
          "-webkit-box-decoration-break": "slice | clone",
          "-webkit-box-direction": "normal | reverse",
          "-webkit-box-flex": "<number>",
          "-webkit-box-flex-group": "<integer>",
          "-webkit-box-lines": "single | multiple",
          "-webkit-box-ordinal-group": "<integer>",
          "-webkit-box-orient": "horizontal | vertical | inline-axis | block-axis",
          "-webkit-box-pack": "start | end | center | justify",
          "box-decoration-break": "slice | clone",
          "box-shadow": "<box-shadow>",
          "box-sizing": "content-box | border-box",
          "break-after": "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
          "break-before": "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
          "break-inside": "auto | avoid | avoid-page | avoid-column",
          //C
          "caption-side": "top | bottom",
          "clear": "none | right | left | both",
          "clip": "<shape> | auto",
          "-webkit-clip-path": "<clip-source> | <clip-path> | none",
          "clip-path": "<clip-source> | <clip-path> | none",
          "clip-rule": "nonzero | evenodd",
          "color": "<color>",
          "color-interpolation": "auto | sRGB | linearRGB",
          "color-interpolation-filters": "auto | sRGB | linearRGB",
          "color-profile": 1,
          "color-rendering": "auto | optimizeSpeed | optimizeQuality",
          "column-count": "<integer> | auto",
          //https://www.w3.org/TR/css3-multicol/
          "column-fill": "auto | balance",
          "column-gap": "<length> | normal",
          "column-rule": "<border-width> || <border-style> || <color>",
          "column-rule-color": "<color>",
          "column-rule-style": "<border-style>",
          "column-rule-width": "<border-width>",
          "column-span": "none | all",
          "column-width": "<length> | auto",
          "columns": 1,
          "content": 1,
          "counter-increment": 1,
          "counter-reset": 1,
          "crop": "<shape> | auto",
          "cue": "cue-after | cue-before",
          "cue-after": 1,
          "cue-before": 1,
          "cursor": 1,
          //D
          "direction": "ltr | rtl",
          "display": "inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | none | -moz-box | -moz-inline-block | -moz-inline-box | -moz-inline-grid | -moz-inline-stack | -moz-inline-table | -moz-grid | -moz-grid-group | -moz-grid-line | -moz-groupbox | -moz-deck | -moz-popup | -moz-stack | -moz-marker | -webkit-box | -webkit-inline-box | -ms-flexbox | -ms-inline-flexbox | flex | -webkit-flex | inline-flex | -webkit-inline-flex",
          "dominant-baseline": "auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge",
          "drop-initial-after-adjust": "central | middle | after-edge | text-after-edge | ideographic | alphabetic | mathematical | <percentage> | <length>",
          "drop-initial-after-align": "baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
          "drop-initial-before-adjust": "before-edge | text-before-edge | central | middle | hanging | mathematical | <percentage> | <length>",
          "drop-initial-before-align": "caps-height | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
          "drop-initial-size": "auto | line | <length> | <percentage>",
          "drop-initial-value": "<integer>",
          //E
          "elevation": "<angle> | below | level | above | higher | lower",
          "empty-cells": "show | hide",
          "enable-background": 1,
          //F
          "fill": "<paint>",
          "fill-opacity": "<opacity-value>",
          "fill-rule": "nonzero | evenodd",
          "filter": "<filter-function-list> | none",
          "fit": "fill | hidden | meet | slice",
          "fit-position": 1,
          "flex": "<flex>",
          "flex-basis": "<width>",
          "flex-direction": "row | row-reverse | column | column-reverse",
          "flex-flow": "<flex-direction> || <flex-wrap>",
          "flex-grow": "<number>",
          "flex-shrink": "<number>",
          "flex-wrap": "nowrap | wrap | wrap-reverse",
          "-webkit-flex": "<flex>",
          "-webkit-flex-basis": "<width>",
          "-webkit-flex-direction": "row | row-reverse | column | column-reverse",
          "-webkit-flex-flow": "<flex-direction> || <flex-wrap>",
          "-webkit-flex-grow": "<number>",
          "-webkit-flex-shrink": "<number>",
          "-webkit-flex-wrap": "nowrap | wrap | wrap-reverse",
          "-ms-flex": "<flex>",
          "-ms-flex-align": "start | end | center | stretch | baseline",
          "-ms-flex-direction": "row | row-reverse | column | column-reverse",
          "-ms-flex-order": "<number>",
          "-ms-flex-pack": "start | end | center | justify",
          "-ms-flex-wrap": "nowrap | wrap | wrap-reverse",
          "float": "left | right | none",
          "float-offset": 1,
          "flood-color": 1,
          "flood-opacity": "<opacity-value>",
          "font": "<font-shorthand> | caption | icon | menu | message-box | small-caption | status-bar",
          "font-family": "<font-family>",
          "font-feature-settings": "<feature-tag-value> | normal",
          "font-kerning": "auto | normal | none",
          "font-size": "<font-size>",
          "font-size-adjust": "<number> | none",
          "font-stretch": "<font-stretch>",
          "font-style": "<font-style>",
          "font-variant": "<font-variant> | normal | none",
          "font-variant-alternates": "<font-variant-alternates> | normal",
          "font-variant-caps": "<font-variant-caps> | normal",
          "font-variant-east-asian": "<font-variant-east-asian> | normal",
          "font-variant-ligatures": "<font-variant-ligatures> | normal | none",
          "font-variant-numeric": "<font-variant-numeric> | normal",
          "font-variant-position": "normal | sub | super",
          "font-weight": "<font-weight>",
          //G
          "glyph-orientation-horizontal": "<glyph-angle>",
          "glyph-orientation-vertical": "auto | <glyph-angle>",
          "grid": 1,
          "grid-area": 1,
          "grid-auto-columns": 1,
          "grid-auto-flow": 1,
          "grid-auto-position": 1,
          "grid-auto-rows": 1,
          "grid-cell-stacking": "columns | rows | layer",
          "grid-column": 1,
          "grid-columns": 1,
          "grid-column-align": "start | end | center | stretch",
          "grid-column-sizing": 1,
          "grid-column-start": 1,
          "grid-column-end": 1,
          "grid-column-span": "<integer>",
          "grid-flow": "none | rows | columns",
          "grid-layer": "<integer>",
          "grid-row": 1,
          "grid-rows": 1,
          "grid-row-align": "start | end | center | stretch",
          "grid-row-start": 1,
          "grid-row-end": 1,
          "grid-row-span": "<integer>",
          "grid-row-sizing": 1,
          "grid-template": 1,
          "grid-template-areas": 1,
          "grid-template-columns": 1,
          "grid-template-rows": 1,
          //H
          "hanging-punctuation": 1,
          "height": "<margin-width> | <content-sizing>",
          "hyphenate-after": "<integer> | auto",
          "hyphenate-before": "<integer> | auto",
          "hyphenate-character": "<string> | auto",
          "hyphenate-lines": "no-limit | <integer>",
          "hyphenate-resource": 1,
          "hyphens": "none | manual | auto",
          //I
          "icon": 1,
          "image-orientation": "angle | auto",
          "image-rendering": "auto | optimizeSpeed | optimizeQuality",
          "image-resolution": 1,
          "ime-mode": "auto | normal | active | inactive | disabled",
          "inline-box-align": "last | <integer>",
          //J
          "justify-content": "flex-start | flex-end | center | space-between | space-around",
          "-webkit-justify-content": "flex-start | flex-end | center | space-between | space-around",
          //K
          "kerning": "auto | <length>",
          //L
          "left": "<margin-width>",
          "letter-spacing": "<length> | normal",
          "line-height": "<line-height>",
          "line-break": "auto | loose | normal | strict",
          "line-stacking": 1,
          "line-stacking-ruby": "exclude-ruby | include-ruby",
          "line-stacking-shift": "consider-shifts | disregard-shifts",
          "line-stacking-strategy": "inline-line-height | block-line-height | max-height | grid-height",
          "list-style": 1,
          "list-style-image": "<uri> | none",
          "list-style-position": "inside | outside",
          "list-style-type": "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none",
          //M
          "margin": "<margin-width>{1,4}",
          "margin-bottom": "<margin-width>",
          "margin-left": "<margin-width>",
          "margin-right": "<margin-width>",
          "margin-top": "<margin-width>",
          "mark": 1,
          "mark-after": 1,
          "mark-before": 1,
          "marker": 1,
          "marker-end": 1,
          "marker-mid": 1,
          "marker-start": 1,
          "marks": 1,
          "marquee-direction": 1,
          "marquee-play-count": 1,
          "marquee-speed": 1,
          "marquee-style": 1,
          "mask": 1,
          "max-height": "<length> | <percentage> | <content-sizing> | none",
          "max-width": "<length> | <percentage> | <content-sizing> | none",
          "min-height": "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
          "min-width": "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
          "move-to": 1,
          //N
          "nav-down": 1,
          "nav-index": 1,
          "nav-left": 1,
          "nav-right": 1,
          "nav-up": 1,
          //O
          "object-fit": "fill | contain | cover | none | scale-down",
          "object-position": "<position>",
          "opacity": "<opacity-value>",
          "order": "<integer>",
          "-webkit-order": "<integer>",
          "orphans": "<integer>",
          "outline": 1,
          "outline-color": "<color> | invert",
          "outline-offset": 1,
          "outline-style": "<border-style>",
          "outline-width": "<border-width>",
          "overflow": "visible | hidden | scroll | auto",
          "overflow-style": 1,
          "overflow-wrap": "normal | break-word",
          "overflow-x": 1,
          "overflow-y": 1,
          //P
          "padding": "<padding-width>{1,4}",
          "padding-bottom": "<padding-width>",
          "padding-left": "<padding-width>",
          "padding-right": "<padding-width>",
          "padding-top": "<padding-width>",
          "page": 1,
          "page-break-after": "auto | always | avoid | left | right",
          "page-break-before": "auto | always | avoid | left | right",
          "page-break-inside": "auto | avoid",
          "page-policy": 1,
          "pause": 1,
          "pause-after": 1,
          "pause-before": 1,
          "perspective": 1,
          "perspective-origin": 1,
          "phonemes": 1,
          "pitch": 1,
          "pitch-range": 1,
          "play-during": 1,
          "pointer-events": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all",
          "position": "static | relative | absolute | fixed",
          "presentation-level": 1,
          "punctuation-trim": 1,
          //Q
          "quotes": 1,
          //R
          "rendering-intent": 1,
          "resize": 1,
          "rest": 1,
          "rest-after": 1,
          "rest-before": 1,
          "richness": 1,
          "right": "<margin-width>",
          "rotation": 1,
          "rotation-point": 1,
          "ruby-align": 1,
          "ruby-overhang": 1,
          "ruby-position": 1,
          "ruby-span": 1,
          //S
          "shape-rendering": "auto | optimizeSpeed | crispEdges | geometricPrecision",
          "size": 1,
          "speak": "normal | none | spell-out",
          "speak-header": "once | always",
          "speak-numeral": "digits | continuous",
          "speak-punctuation": "code | none",
          "speech-rate": 1,
          "src": 1,
          "stop-color": 1,
          "stop-opacity": "<opacity-value>",
          "stress": 1,
          "string-set": 1,
          "stroke": "<paint>",
          "stroke-dasharray": "none | <dasharray>",
          "stroke-dashoffset": "<percentage> | <length>",
          "stroke-linecap": "butt | round | square",
          "stroke-linejoin": "miter | round | bevel",
          "stroke-miterlimit": "<miterlimit>",
          "stroke-opacity": "<opacity-value>",
          "stroke-width": "<percentage> | <length>",
          "table-layout": "auto | fixed",
          "tab-size": "<integer> | <length>",
          "target": 1,
          "target-name": 1,
          "target-new": 1,
          "target-position": 1,
          "text-align": "left | right | center | justify | match-parent | start | end",
          "text-align-last": 1,
          "text-anchor": "start | middle | end",
          "text-decoration": "<text-decoration-line> || <text-decoration-style> || <text-decoration-color>",
          "text-decoration-color": "<text-decoration-color>",
          "text-decoration-line": "<text-decoration-line>",
          "text-decoration-style": "<text-decoration-style>",
          "text-emphasis": 1,
          "text-height": 1,
          "text-indent": "<length> | <percentage>",
          "text-justify": "auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida",
          "text-outline": 1,
          "text-overflow": 1,
          "text-rendering": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
          "text-shadow": 1,
          "text-transform": "capitalize | uppercase | lowercase | none",
          "text-wrap": "normal | none | avoid",
          "top": "<margin-width>",
          "-ms-touch-action": "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
          "touch-action": "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
          "transform": 1,
          "transform-origin": 1,
          "transform-style": 1,
          "transition": 1,
          "transition-delay": 1,
          "transition-duration": 1,
          "transition-property": 1,
          "transition-timing-function": 1,
          //U
          "unicode-bidi": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
          "user-modify": "read-only | read-write | write-only",
          "user-select": "none | text | toggle | element | elements | all",
          //V
          "vertical-align": "auto | use-script | baseline | sub | super | top | text-top | central | middle | bottom | text-bottom | <percentage> | <length>",
          "visibility": "visible | hidden | collapse",
          "voice-balance": 1,
          "voice-duration": 1,
          "voice-family": 1,
          "voice-pitch": 1,
          "voice-pitch-range": 1,
          "voice-rate": 1,
          "voice-stress": 1,
          "voice-volume": 1,
          "volume": 1,
          //W
          "white-space": "normal | pre | nowrap | pre-wrap | pre-line | -pre-wrap | -o-pre-wrap | -moz-pre-wrap | -hp-pre-wrap",
          // https://perishablepress.com/wrapping-content/
          "white-space-collapse": 1,
          "widows": "<integer>",
          "width": "<length> | <percentage> | <content-sizing> | auto",
          "will-change": "<will-change>",
          "word-break": "normal | keep-all | break-all",
          "word-spacing": "<length> | normal",
          "word-wrap": "normal | break-word",
          "writing-mode": "horizontal-tb | vertical-rl | vertical-lr | lr-tb | rl-tb | tb-rl | bt-rl | tb-lr | bt-lr | lr-bt | rl-bt | lr | rl | tb",
          //Z
          "z-index": "<integer> | auto",
          "zoom": "<number> | <percentage> | normal"
        };
      }, {}],
      8: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyName;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a selector combinator (whitespace, +, >).
         * @namespace parserlib.css
         * @class PropertyName
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} text The text representation of the unit.
         * @param {String} hack The type of IE hack applied ("*", "_", or null).
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function PropertyName(text, hack, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.PROPERTY_NAME_TYPE);

          /**
           * The type of IE hack applied ("*", "_", or null).
           * @type String
           * @property hack
           */
          this.hack = hack;
        }
        PropertyName.prototype = new SyntaxUnit();
        PropertyName.prototype.constructor = PropertyName;
        PropertyName.prototype.toString = function () {
          return (this.hack ? this.hack : "") + this.text;
        };
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      9: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyValue;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a single part of a CSS property value, meaning that it represents
         * just everything single part between ":" and ";". If there are multiple values
         * separated by commas, this type represents just one of the values.
         * @param {String[]} parts An array of value parts making up this value.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         * @namespace parserlib.css
         * @class PropertyValue
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         */
        function PropertyValue(parts, line, col) {
          SyntaxUnit.call(this, parts.join(" "), line, col, Parser.PROPERTY_VALUE_TYPE);

          /**
           * The parts that make up the selector.
           * @type Array
           * @property parts
           */
          this.parts = parts;
        }
        PropertyValue.prototype = new SyntaxUnit();
        PropertyValue.prototype.constructor = PropertyValue;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      10: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyValueIterator;

        /**
         * A utility class that allows for easy iteration over the various parts of a
         * property value.
         * @param {parserlib.css.PropertyValue} value The property value to iterate over.
         * @namespace parserlib.css
         * @class PropertyValueIterator
         * @constructor
         */
        function PropertyValueIterator(value) {
          /**
           * Iterator value
           * @type int
           * @property _i
           * @private
           */
          this._i = 0;

          /**
           * The parts that make up the value.
           * @type Array
           * @property _parts
           * @private
           */
          this._parts = value.parts;

          /**
           * Keeps track of bookmarks along the way.
           * @type Array
           * @property _marks
           * @private
           */
          this._marks = [];

          /**
           * Holds the original property value.
           * @type parserlib.css.PropertyValue
           * @property value
           */
          this.value = value;
        }

        /**
         * Returns the total number of parts in the value.
         * @return {int} The total number of parts in the value.
         * @method count
         */
        PropertyValueIterator.prototype.count = function () {
          return this._parts.length;
        };

        /**
         * Indicates if the iterator is positioned at the first item.
         * @return {Boolean} True if positioned at first item, false if not.
         * @method isFirst
         */
        PropertyValueIterator.prototype.isFirst = function () {
          return this._i === 0;
        };

        /**
         * Indicates if there are more parts of the property value.
         * @return {Boolean} True if there are more parts, false if not.
         * @method hasNext
         */
        PropertyValueIterator.prototype.hasNext = function () {
          return this._i < this._parts.length;
        };

        /**
         * Marks the current spot in the iteration so it can be restored to
         * later on.
         * @return {void}
         * @method mark
         */
        PropertyValueIterator.prototype.mark = function () {
          this._marks.push(this._i);
        };

        /**
         * Returns the next part of the property value or null if there is no next
         * part. Does not move the internal counter forward.
         * @return {parserlib.css.PropertyValuePart} The next part of the property value or null if there is no next
         * part.
         * @method peek
         */
        PropertyValueIterator.prototype.peek = function (count) {
          return this.hasNext() ? this._parts[this._i + (count || 0)] : null;
        };

        /**
         * Returns the next part of the property value or null if there is no next
         * part.
         * @return {parserlib.css.PropertyValuePart} The next part of the property value or null if there is no next
         * part.
         * @method next
         */
        PropertyValueIterator.prototype.next = function () {
          return this.hasNext() ? this._parts[this._i++] : null;
        };

        /**
         * Returns the previous part of the property value or null if there is no
         * previous part.
         * @return {parserlib.css.PropertyValuePart} The previous part of the
         * property value or null if there is no previous part.
         * @method previous
         */
        PropertyValueIterator.prototype.previous = function () {
          return this._i > 0 ? this._parts[--this._i] : null;
        };

        /**
         * Restores the last saved bookmark.
         * @return {void}
         * @method restore
         */
        PropertyValueIterator.prototype.restore = function () {
          if (this._marks.length) {
            this._i = this._marks.pop();
          }
        };

        /**
         * Drops the last saved bookmark.
         * @return {void}
         * @method drop
         */
        PropertyValueIterator.prototype.drop = function () {
          this._marks.pop();
        };
      }, {}],
      11: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyValuePart;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Colors = require("./Colors");
        var Parser = require("./Parser");
        var Tokens = require("./Tokens");

        /**
         * Represents a single part of a CSS property value, meaning that it represents
         * just one part of the data between ":" and ";".
         * @param {String} text The text representation of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         * @namespace parserlib.css
         * @class PropertyValuePart
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         */
        function PropertyValuePart(text, line, col, optionalHint) {
          var hint = optionalHint || {};
          SyntaxUnit.call(this, text, line, col, Parser.PROPERTY_VALUE_PART_TYPE);

          /**
           * Indicates the type of value unit.
           * @type String
           * @property type
           */
          this.type = "unknown";

          //figure out what type of data it is

          var temp;

          //it is a measurement?
          if (/^([+\-]?[\d\.]+)([a-z]+)$/i.test(text)) {
            //dimension
            this.type = "dimension";
            this.value = +RegExp.$1;
            this.units = RegExp.$2;

            //try to narrow down
            switch (this.units.toLowerCase()) {
              case "em":
              case "rem":
              case "ex":
              case "px":
              case "cm":
              case "mm":
              case "in":
              case "pt":
              case "pc":
              case "ch":
              case "vh":
              case "vw":
              case "vmax":
              case "vmin":
                this.type = "length";
                break;
              case "fr":
                this.type = "grid";
                break;
              case "deg":
              case "rad":
              case "grad":
              case "turn":
                this.type = "angle";
                break;
              case "ms":
              case "s":
                this.type = "time";
                break;
              case "hz":
              case "khz":
                this.type = "frequency";
                break;
              case "dpi":
              case "dpcm":
                this.type = "resolution";
                break;

              //default
            }
          } else if (/^([+\-]?[\d\.]+)%$/i.test(text)) {
            //percentage
            this.type = "percentage";
            this.value = +RegExp.$1;
          } else if (/^([+\-]?\d+)$/i.test(text)) {
            //integer
            this.type = "integer";
            this.value = +RegExp.$1;
          } else if (/^([+\-]?[\d\.]+)$/i.test(text)) {
            //number
            this.type = "number";
            this.value = +RegExp.$1;
          } else if (/^#([a-f0-9]{3,6})/i.test(text)) {
            //hexcolor
            this.type = "color";
            temp = RegExp.$1;
            if (temp.length === 3) {
              this.red = parseInt(temp.charAt(0) + temp.charAt(0), 16);
              this.green = parseInt(temp.charAt(1) + temp.charAt(1), 16);
              this.blue = parseInt(temp.charAt(2) + temp.charAt(2), 16);
            } else {
              this.red = parseInt(temp.substring(0, 2), 16);
              this.green = parseInt(temp.substring(2, 4), 16);
              this.blue = parseInt(temp.substring(4, 6), 16);
            }
          } else if (/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i.test(text)) {
            //rgb() color with absolute numbers
            this.type = "color";
            this.red = +RegExp.$1;
            this.green = +RegExp.$2;
            this.blue = +RegExp.$3;
          } else if (/^rgb\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i.test(text)) {
            //rgb() color with percentages
            this.type = "color";
            this.red = +RegExp.$1 * 255 / 100;
            this.green = +RegExp.$2 * 255 / 100;
            this.blue = +RegExp.$3 * 255 / 100;
          } else if (/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/i.test(text)) {
            //rgba() color with absolute numbers
            this.type = "color";
            this.red = +RegExp.$1;
            this.green = +RegExp.$2;
            this.blue = +RegExp.$3;
            this.alpha = +RegExp.$4;
          } else if (/^rgba\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d\.]+)\s*\)/i.test(text)) {
            //rgba() color with percentages
            this.type = "color";
            this.red = +RegExp.$1 * 255 / 100;
            this.green = +RegExp.$2 * 255 / 100;
            this.blue = +RegExp.$3 * 255 / 100;
            this.alpha = +RegExp.$4;
          } else if (/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i.test(text)) {
            //hsl()
            this.type = "color";
            this.hue = +RegExp.$1;
            this.saturation = +RegExp.$2 / 100;
            this.lightness = +RegExp.$3 / 100;
          } else if (/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d\.]+)\s*\)/i.test(text)) {
            //hsla() color with percentages
            this.type = "color";
            this.hue = +RegExp.$1;
            this.saturation = +RegExp.$2 / 100;
            this.lightness = +RegExp.$3 / 100;
            this.alpha = +RegExp.$4;
          } else if (/^url\(("([^\\"]|\\.)*")\)/i.test(text)) {
            //URI
            // generated by TokenStream.readURI, so always double-quoted.
            this.type = "uri";
            this.uri = PropertyValuePart.parseString(RegExp.$1);
          } else if (/^([^\(]+)\(/i.test(text)) {
            this.type = "function";
            this.name = RegExp.$1;
            this.value = text;
          } else if (/^"([^\n\r\f\\"]|\\\r\n|\\[^\r0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*"/i.test(text)) {
            //double-quoted string
            this.type = "string";
            this.value = PropertyValuePart.parseString(text);
          } else if (/^'([^\n\r\f\\']|\\\r\n|\\[^\r0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*'/i.test(text)) {
            //single-quoted string
            this.type = "string";
            this.value = PropertyValuePart.parseString(text);
          } else if (Colors[text.toLowerCase()]) {
            //named color
            this.type = "color";
            temp = Colors[text.toLowerCase()].substring(1);
            this.red = parseInt(temp.substring(0, 2), 16);
            this.green = parseInt(temp.substring(2, 4), 16);
            this.blue = parseInt(temp.substring(4, 6), 16);
          } else if (/^[,\/]$/.test(text)) {
            this.type = "operator";
            this.value = text;
          } else if (/^-?[a-z_\u00A0-\uFFFF][a-z0-9\-_\u00A0-\uFFFF]*$/i.test(text)) {
            this.type = "identifier";
            this.value = text;
          }

          // There can be ambiguity with escape sequences in identifiers, as
          // well as with "color" parts which are also "identifiers", so record
          // an explicit hint when the token generating this PropertyValuePart
          // was an identifier.
          this.wasIdent = Boolean(hint.ident);
        }
        PropertyValuePart.prototype = new SyntaxUnit();
        PropertyValuePart.prototype.constructor = PropertyValuePart;

        /**
         * Helper method to parse a CSS string.
         */
        PropertyValuePart.parseString = function (str) {
          str = str.slice(1, -1); // Strip surrounding single/double quotes
          var replacer = function (match, esc) {
            if (/^(\n|\r\n|\r|\f)$/.test(esc)) {
              return "";
            }
            var m = /^[0-9a-f]{1,6}/i.exec(esc);
            if (m) {
              var codePoint = parseInt(m[0], 16);
              if (String.fromCodePoint) {
                return String.fromCodePoint(codePoint);
              } else {
                // XXX No support for surrogates on old JavaScript engines.
                return String.fromCharCode(codePoint);
              }
            }
            return esc;
          };
          return str.replace(/\\(\r\n|[^\r0-9a-f]|[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)/ig, replacer);
        };

        /**
         * Helper method to serialize a CSS string.
         */
        PropertyValuePart.serializeString = function (value) {
          var replacer = function (match, c) {
            if (c === "\"") {
              return "\\" + c;
            }
            var cp = String.codePointAt ? String.codePointAt(0) :
            // We only escape non-surrogate chars, so using charCodeAt
            // is harmless here.
            String.charCodeAt(0);
            return "\\" + cp.toString(16) + " ";
          };
          return "\"" + value.replace(/["\r\n\f]/g, replacer) + "\"";
        };

        /**
         * Create a new syntax unit based solely on the given token.
         * Convenience method for creating a new syntax unit when
         * it represents a single token instead of multiple.
         * @param {Object} token The token object to represent.
         * @return {parserlib.css.PropertyValuePart} The object representing the token.
         * @static
         * @method fromToken
         */
        PropertyValuePart.fromToken = function (token) {
          var part = new PropertyValuePart(token.value, token.startLine, token.startCol, {
            // Tokens can have escaped characters that would fool the type
            // identification in the PropertyValuePart constructor, so pass
            // in a hint if this was an identifier.
            ident: token.type === Tokens.IDENT
          });
          return part;
        };
      }, {
        "../util/SyntaxUnit": 26,
        "./Colors": 1,
        "./Parser": 6,
        "./Tokens": 18
      }],
      12: [function (require, module, exports) {
        "use strict";

        var Pseudos = module.exports = {
          __proto__: null,
          ":first-letter": 1,
          ":first-line": 1,
          ":before": 1,
          ":after": 1
        };
        Pseudos.ELEMENT = 1;
        Pseudos.CLASS = 2;
        Pseudos.isElement = function (pseudo) {
          return pseudo.indexOf("::") === 0 || Pseudos[pseudo.toLowerCase()] === Pseudos.ELEMENT;
        };
      }, {}],
      13: [function (require, module, exports) {
        "use strict";

        module.exports = Selector;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");
        var Specificity = require("./Specificity");

        /**
         * Represents an entire single selector, including all parts but not
         * including multiple selectors (those separated by commas).
         * @namespace parserlib.css
         * @class Selector
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {Array} parts Array of selectors parts making up this selector.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function Selector(parts, line, col) {
          SyntaxUnit.call(this, parts.join(" "), line, col, Parser.SELECTOR_TYPE);

          /**
           * The parts that make up the selector.
           * @type Array
           * @property parts
           */
          this.parts = parts;

          /**
           * The specificity of the selector.
           * @type parserlib.css.Specificity
           * @property specificity
           */
          this.specificity = Specificity.calculate(this);
        }
        Selector.prototype = new SyntaxUnit();
        Selector.prototype.constructor = Selector;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6,
        "./Specificity": 16
      }],
      14: [function (require, module, exports) {
        "use strict";

        module.exports = SelectorPart;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a single part of a selector string, meaning a single set of
         * element name and modifiers. This does not include combinators such as
         * spaces, +, >, etc.
         * @namespace parserlib.css
         * @class SelectorPart
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} elementName The element name in the selector or null
         *      if there is no element name.
         * @param {Array} modifiers Array of individual modifiers for the element.
         *      May be empty if there are none.
         * @param {String} text The text representation of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function SelectorPart(elementName, modifiers, text, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.SELECTOR_PART_TYPE);

          /**
           * The tag name of the element to which this part
           * of the selector affects.
           * @type String
           * @property elementName
           */
          this.elementName = elementName;

          /**
           * The parts that come after the element name, such as class names, IDs,
           * pseudo classes/elements, etc.
           * @type Array
           * @property modifiers
           */
          this.modifiers = modifiers;
        }
        SelectorPart.prototype = new SyntaxUnit();
        SelectorPart.prototype.constructor = SelectorPart;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      15: [function (require, module, exports) {
        "use strict";

        module.exports = SelectorSubPart;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a selector modifier string, meaning a class name, element name,
         * element ID, pseudo rule, etc.
         * @namespace parserlib.css
         * @class SelectorSubPart
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} text The text representation of the unit.
         * @param {String} type The type of selector modifier.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function SelectorSubPart(text, type, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.SELECTOR_SUB_PART_TYPE);

          /**
           * The type of modifier.
           * @type String
           * @property type
           */
          this.type = type;

          /**
           * Some subparts have arguments, this represents them.
           * @type Array
           * @property args
           */
          this.args = [];
        }
        SelectorSubPart.prototype = new SyntaxUnit();
        SelectorSubPart.prototype.constructor = SelectorSubPart;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      16: [function (require, module, exports) {
        "use strict";

        module.exports = Specificity;
        var Pseudos = require("./Pseudos");
        var SelectorPart = require("./SelectorPart");

        /**
         * Represents a selector's specificity.
         * @namespace parserlib.css
         * @class Specificity
         * @constructor
         * @param {int} a Should be 1 for inline styles, zero for stylesheet styles
         * @param {int} b Number of ID selectors
         * @param {int} c Number of classes and pseudo classes
         * @param {int} d Number of element names and pseudo elements
         */
        function Specificity(a, b, c, d) {
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
        }
        Specificity.prototype = {
          constructor: Specificity,
          /**
           * Compare this specificity to another.
           * @param {Specificity} other The other specificity to compare to.
           * @return {int} -1 if the other specificity is larger, 1 if smaller, 0 if equal.
           * @method compare
           */
          compare: function (other) {
            var comps = ["a", "b", "c", "d"],
              i,
              len;
            for (i = 0, len = comps.length; i < len; i++) {
              if (this[comps[i]] < other[comps[i]]) {
                return -1;
              } else if (this[comps[i]] > other[comps[i]]) {
                return 1;
              }
            }
            return 0;
          },
          /**
           * Creates a numeric value for the specificity.
           * @return {int} The numeric value for the specificity.
           * @method valueOf
           */
          valueOf: function () {
            return this.a * 1000 + this.b * 100 + this.c * 10 + this.d;
          },
          /**
           * Returns a string representation for specificity.
           * @return {String} The string representation of specificity.
           * @method toString
           */
          toString: function () {
            return this.a + "," + this.b + "," + this.c + "," + this.d;
          }
        };

        /**
         * Calculates the specificity of the given selector.
         * @param {parserlib.css.Selector} The selector to calculate specificity for.
         * @return {parserlib.css.Specificity} The specificity of the selector.
         * @static
         * @method calculate
         */
        Specificity.calculate = function (selector) {
          var i,
            len,
            part,
            b = 0,
            c = 0,
            d = 0;
          function updateValues(part) {
            var i,
              j,
              len,
              num,
              elementName = part.elementName ? part.elementName.text : "",
              modifier;
            if (elementName && elementName.charAt(elementName.length - 1) !== "*") {
              d++;
            }
            for (i = 0, len = part.modifiers.length; i < len; i++) {
              modifier = part.modifiers[i];
              switch (modifier.type) {
                case "class":
                case "attribute":
                  c++;
                  break;
                case "id":
                  b++;
                  break;
                case "pseudo":
                  if (Pseudos.isElement(modifier.text)) {
                    d++;
                  } else {
                    c++;
                  }
                  break;
                case "not":
                  for (j = 0, num = modifier.args.length; j < num; j++) {
                    updateValues(modifier.args[j]);
                  }
              }
            }
          }
          for (i = 0, len = selector.parts.length; i < len; i++) {
            part = selector.parts[i];
            if (part instanceof SelectorPart) {
              updateValues(part);
            }
          }
          return new Specificity(0, b, c, d);
        };
      }, {
        "./Pseudos": 12,
        "./SelectorPart": 14
      }],
      17: [function (require, module, exports) {
        "use strict";

        module.exports = TokenStream;
        var TokenStreamBase = require("../util/TokenStreamBase");
        var PropertyValuePart = require("./PropertyValuePart");
        var Tokens = require("./Tokens");
        var h = /^[0-9a-fA-F]$/,
          nonascii = /^[\u00A0-\uFFFF]$/,
          nl = /\n|\r\n|\r|\f/,
          whitespace = /\u0009|\u000a|\u000c|\u000d|\u0020/;

        //-----------------------------------------------------------------------------
        // Helper functions
        //-----------------------------------------------------------------------------

        function isHexDigit(c) {
          return c !== null && h.test(c);
        }
        function isDigit(c) {
          return c !== null && /\d/.test(c);
        }
        function isWhitespace(c) {
          return c !== null && whitespace.test(c);
        }
        function isNewLine(c) {
          return c !== null && nl.test(c);
        }
        function isNameStart(c) {
          return c !== null && /[a-z_\u00A0-\uFFFF\\]/i.test(c);
        }
        function isNameChar(c) {
          return c !== null && (isNameStart(c) || /[0-9\-\\]/.test(c));
        }
        function isIdentStart(c) {
          return c !== null && (isNameStart(c) || /\-\\/.test(c));
        }
        function mix(receiver, supplier) {
          for (var prop in supplier) {
            if (Object.prototype.hasOwnProperty.call(supplier, prop)) {
              receiver[prop] = supplier[prop];
            }
          }
          return receiver;
        }

        //-----------------------------------------------------------------------------
        // CSS Token Stream
        //-----------------------------------------------------------------------------

        /**
         * A token stream that produces CSS tokens.
         * @param {String|Reader} input The source of text to tokenize.
         * @constructor
         * @class TokenStream
         * @namespace parserlib.css
         */
        function TokenStream(input) {
          TokenStreamBase.call(this, input, Tokens);
        }
        TokenStream.prototype = mix(new TokenStreamBase(), {
          /**
           * Overrides the TokenStreamBase method of the same name
           * to produce CSS tokens.
           * @return {Object} A token object representing the next token.
           * @method _getToken
           * @private
           */
          _getToken: function () {
            var c,
              reader = this._reader,
              token = null,
              startLine = reader.getLine(),
              startCol = reader.getCol();
            c = reader.read();
            while (c) {
              switch (c) {
                /*
                 * Potential tokens:
                 * - COMMENT
                 * - SLASH
                 * - CHAR
                 */
                case "/":
                  if (reader.peek() === "*") {
                    token = this.commentToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - DASHMATCH
                 * - INCLUDES
                 * - PREFIXMATCH
                 * - SUFFIXMATCH
                 * - SUBSTRINGMATCH
                 * - CHAR
                 */
                case "|":
                case "~":
                case "^":
                case "$":
                case "*":
                  if (reader.peek() === "=") {
                    token = this.comparisonToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - STRING
                 * - INVALID
                 */
                case "\"":
                case "'":
                  token = this.stringToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - HASH
                 * - CHAR
                 */
                case "#":
                  if (isNameChar(reader.peek())) {
                    token = this.hashToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - DOT
                 * - NUMBER
                 * - DIMENSION
                 * - PERCENTAGE
                 */
                case ".":
                  if (isDigit(reader.peek())) {
                    token = this.numberToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - CDC
                 * - MINUS
                 * - NUMBER
                 * - DIMENSION
                 * - PERCENTAGE
                 */
                case "-":
                  if (reader.peek() === "-") {
                    //could be closing HTML-style comment
                    token = this.htmlCommentEndToken(c, startLine, startCol);
                  } else if (isNameStart(reader.peek())) {
                    token = this.identOrFunctionToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - IMPORTANT_SYM
                 * - CHAR
                 */
                case "!":
                  token = this.importantToken(c, startLine, startCol);
                  break;

                /*
                 * Any at-keyword or CHAR
                 */
                case "@":
                  token = this.atRuleToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - NOT
                 * - CHAR
                 */
                case ":":
                  token = this.notToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - CDO
                 * - CHAR
                 */
                case "<":
                  token = this.htmlCommentStartToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - IDENT
                 * - CHAR
                 */
                case "\\":
                  if (/[^\r\n\f]/.test(reader.peek())) {
                    token = this.identOrFunctionToken(this.readEscape(c, true), startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - UNICODE_RANGE
                 * - URL
                 * - CHAR
                 */
                case "U":
                case "u":
                  if (reader.peek() === "+") {
                    token = this.unicodeRangeToken(c, startLine, startCol);
                    break;
                  }
                /* falls through */
                default:
                  /*
                   * Potential tokens:
                   * - NUMBER
                   * - DIMENSION
                   * - LENGTH
                   * - FREQ
                   * - TIME
                   * - EMS
                   * - EXS
                   * - ANGLE
                   */
                  if (isDigit(c)) {
                    token = this.numberToken(c, startLine, startCol);
                  } else
                    /*
                     * Potential tokens:
                     * - S
                     */
                    if (isWhitespace(c)) {
                      token = this.whitespaceToken(c, startLine, startCol);
                    } else
                      /*
                       * Potential tokens:
                       * - IDENT
                       */
                      if (isIdentStart(c)) {
                        token = this.identOrFunctionToken(c, startLine, startCol);
                      } else {
                        /*
                         * Potential tokens:
                         * - CHAR
                         * - PLUS
                         */
                        token = this.charToken(c, startLine, startCol);
                      }
              }

              //make sure this token is wanted
              //TODO: check channel
              break;
            }
            if (!token && c === null) {
              token = this.createToken(Tokens.EOF, null, startLine, startCol);
            }
            return token;
          },
          //-------------------------------------------------------------------------
          // Methods to create tokens
          //-------------------------------------------------------------------------

          /**
           * Produces a token based on available data and the current
           * reader position information. This method is called by other
           * private methods to create tokens and is never called directly.
           * @param {int} tt The token type.
           * @param {String} value The text value of the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @param {Object} options (Optional) Specifies a channel property
           *      to indicate that a different channel should be scanned
           *      and/or a hide property indicating that the token should
           *      be hidden.
           * @return {Object} A token object.
           * @method createToken
           */
          createToken: function (tt, value, startLine, startCol, options) {
            var reader = this._reader;
            options = options || {};
            return {
              value: value,
              type: tt,
              channel: options.channel,
              endChar: options.endChar,
              hide: options.hide || false,
              startLine: startLine,
              startCol: startCol,
              endLine: reader.getLine(),
              endCol: reader.getCol()
            };
          },
          //-------------------------------------------------------------------------
          // Methods to create specific tokens
          //-------------------------------------------------------------------------

          /**
           * Produces a token for any at-rule. If the at-rule is unknown, then
           * the token is for a single "@" character.
           * @param {String} first The first character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method atRuleToken
           */
          atRuleToken: function (first, startLine, startCol) {
            var rule = first,
              reader = this._reader,
              tt = Tokens.CHAR,
              ident;

            /*
             * First, mark where we are. There are only four @ rules,
             * so anything else is really just an invalid token.
             * Basically, if this doesn't match one of the known @
             * rules, just return '@' as an unknown token and allow
             * parsing to continue after that point.
             */
            reader.mark();

            //try to find the at-keyword
            ident = this.readName();
            rule = first + ident;
            tt = Tokens.type(rule.toLowerCase());

            //if it's not valid, use the first character only and reset the reader
            if (tt === Tokens.CHAR || tt === Tokens.UNKNOWN) {
              if (rule.length > 1) {
                tt = Tokens.UNKNOWN_SYM;
              } else {
                tt = Tokens.CHAR;
                rule = first;
                reader.reset();
              }
            }
            return this.createToken(tt, rule, startLine, startCol);
          },
          /**
           * Produces a character token based on the given character
           * and location in the stream. If there's a special (non-standard)
           * token name, this is used; otherwise CHAR is used.
           * @param {String} c The character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method charToken
           */
          charToken: function (c, startLine, startCol) {
            var tt = Tokens.type(c);
            var opts = {};
            if (tt === -1) {
              tt = Tokens.CHAR;
            } else {
              opts.endChar = Tokens[tt].endChar;
            }
            return this.createToken(tt, c, startLine, startCol, opts);
          },
          /**
           * Produces a character token based on the given character
           * and location in the stream. If there's a special (non-standard)
           * token name, this is used; otherwise CHAR is used.
           * @param {String} first The first character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method commentToken
           */
          commentToken: function (first, startLine, startCol) {
            var comment = this.readComment(first);
            return this.createToken(Tokens.COMMENT, comment, startLine, startCol);
          },
          /**
           * Produces a comparison token based on the given character
           * and location in the stream. The next character must be
           * read and is already known to be an equals sign.
           * @param {String} c The character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method comparisonToken
           */
          comparisonToken: function (c, startLine, startCol) {
            var reader = this._reader,
              comparison = c + reader.read(),
              tt = Tokens.type(comparison) || Tokens.CHAR;
            return this.createToken(tt, comparison, startLine, startCol);
          },
          /**
           * Produces a hash token based on the specified information. The
           * first character provided is the pound sign (#) and then this
           * method reads a name afterward.
           * @param {String} first The first character (#) in the hash name.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method hashToken
           */
          hashToken: function (first, startLine, startCol) {
            var name = this.readName(first);
            return this.createToken(Tokens.HASH, name, startLine, startCol);
          },
          /**
           * Produces a CDO or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method htmlCommentStartToken
           */
          htmlCommentStartToken: function (first, startLine, startCol) {
            var reader = this._reader,
              text = first;
            reader.mark();
            text += reader.readCount(3);
            if (text === "<!--") {
              return this.createToken(Tokens.CDO, text, startLine, startCol);
            } else {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            }
          },
          /**
           * Produces a CDC or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method htmlCommentEndToken
           */
          htmlCommentEndToken: function (first, startLine, startCol) {
            var reader = this._reader,
              text = first;
            reader.mark();
            text += reader.readCount(2);
            if (text === "-->") {
              return this.createToken(Tokens.CDC, text, startLine, startCol);
            } else {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            }
          },
          /**
           * Produces an IDENT or FUNCTION token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the identifier.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method identOrFunctionToken
           */
          identOrFunctionToken: function (first, startLine, startCol) {
            var reader = this._reader,
              ident = this.readName(first),
              tt = Tokens.IDENT,
              uriFns = ["url(", "url-prefix(", "domain("],
              uri;

            //if there's a left paren immediately after, it's a URI or function
            if (reader.peek() === "(") {
              ident += reader.read();
              if (uriFns.indexOf(ident.toLowerCase()) > -1) {
                reader.mark();
                uri = this.readURI(ident);
                if (uri === null) {
                  //didn't find a valid URL or there's no closing paren
                  reader.reset();
                  tt = Tokens.FUNCTION;
                } else {
                  tt = Tokens.URI;
                  ident = uri;
                }
              } else {
                tt = Tokens.FUNCTION;
              }
            } else if (reader.peek() === ":") {
              //might be an IE function

              //IE-specific functions always being with progid:
              if (ident.toLowerCase() === "progid") {
                ident += reader.readTo("(");
                tt = Tokens.IE_FUNCTION;
              }
            }
            return this.createToken(tt, ident, startLine, startCol);
          },
          /**
           * Produces an IMPORTANT_SYM or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method importantToken
           */
          importantToken: function (first, startLine, startCol) {
            var reader = this._reader,
              important = first,
              tt = Tokens.CHAR,
              temp,
              c;
            reader.mark();
            c = reader.read();
            while (c) {
              //there can be a comment in here
              if (c === "/") {
                //if the next character isn't a star, then this isn't a valid !important token
                if (reader.peek() !== "*") {
                  break;
                } else {
                  temp = this.readComment(c);
                  if (temp === "") {
                    //broken!
                    break;
                  }
                }
              } else if (isWhitespace(c)) {
                important += c + this.readWhitespace();
              } else if (/i/i.test(c)) {
                temp = reader.readCount(8);
                if (/mportant/i.test(temp)) {
                  important += c + temp;
                  tt = Tokens.IMPORTANT_SYM;
                }
                break; //we're done
              } else {
                break;
              }
              c = reader.read();
            }
            if (tt === Tokens.CHAR) {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            } else {
              return this.createToken(tt, important, startLine, startCol);
            }
          },
          /**
           * Produces a NOT or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method notToken
           */
          notToken: function (first, startLine, startCol) {
            var reader = this._reader,
              text = first;
            reader.mark();
            text += reader.readCount(4);
            if (text.toLowerCase() === ":not(") {
              return this.createToken(Tokens.NOT, text, startLine, startCol);
            } else {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            }
          },
          /**
           * Produces a number token based on the given character
           * and location in the stream. This may return a token of
           * NUMBER, EMS, EXS, LENGTH, ANGLE, TIME, FREQ, DIMENSION,
           * or PERCENTAGE.
           * @param {String} first The first character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method numberToken
           */
          numberToken: function (first, startLine, startCol) {
            var reader = this._reader,
              value = this.readNumber(first),
              ident,
              tt = Tokens.NUMBER,
              c = reader.peek();
            if (isIdentStart(c)) {
              ident = this.readName(reader.read());
              value += ident;
              if (/^em$|^ex$|^px$|^gd$|^rem$|^vw$|^vh$|^vmax$|^vmin$|^ch$|^cm$|^mm$|^in$|^pt$|^pc$/i.test(ident)) {
                tt = Tokens.LENGTH;
              } else if (/^deg|^rad$|^grad$|^turn$/i.test(ident)) {
                tt = Tokens.ANGLE;
              } else if (/^ms$|^s$/i.test(ident)) {
                tt = Tokens.TIME;
              } else if (/^hz$|^khz$/i.test(ident)) {
                tt = Tokens.FREQ;
              } else if (/^dpi$|^dpcm$/i.test(ident)) {
                tt = Tokens.RESOLUTION;
              } else {
                tt = Tokens.DIMENSION;
              }
            } else if (c === "%") {
              value += reader.read();
              tt = Tokens.PERCENTAGE;
            }
            return this.createToken(tt, value, startLine, startCol);
          },
          /**
           * Produces a string token based on the given character
           * and location in the stream. Since strings may be indicated
           * by single or double quotes, a failure to match starting
           * and ending quotes results in an INVALID token being generated.
           * The first character in the string is passed in and then
           * the rest are read up to and including the final quotation mark.
           * @param {String} first The first character in the string.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method stringToken
           */
          stringToken: function (first, startLine, startCol) {
            var delim = first,
              string = first,
              reader = this._reader,
              tt = Tokens.STRING,
              c = reader.read(),
              i;
            while (c) {
              string += c;
              if (c === "\\") {
                c = reader.read();
                if (c === null) {
                  break; // premature EOF after backslash
                } else if (/[^\r\n\f0-9a-f]/i.test(c)) {
                  // single-character escape
                  string += c;
                } else {
                  // read up to six hex digits
                  for (i = 0; isHexDigit(c) && i < 6; i++) {
                    string += c;
                    c = reader.read();
                  }
                  // swallow trailing newline or space
                  if (c === "\r" && reader.peek() === "\n") {
                    string += c;
                    c = reader.read();
                  }
                  if (isWhitespace(c)) {
                    string += c;
                  } else {
                    // This character is null or not part of the escape;
                    // jump back to the top to process it.
                    continue;
                  }
                }
              } else if (c === delim) {
                break; // delimiter found.
              } else if (isNewLine(reader.peek())) {
                // newline without an escapement: it's an invalid string
                tt = Tokens.INVALID;
                break;
              }
              c = reader.read();
            }

            //if c is null, that means we're out of input and the string was never closed
            if (c === null) {
              tt = Tokens.INVALID;
            }
            return this.createToken(tt, string, startLine, startCol);
          },
          unicodeRangeToken: function (first, startLine, startCol) {
            var reader = this._reader,
              value = first,
              temp,
              tt = Tokens.CHAR;

            //then it should be a unicode range
            if (reader.peek() === "+") {
              reader.mark();
              value += reader.read();
              value += this.readUnicodeRangePart(true);

              //ensure there's an actual unicode range here
              if (value.length === 2) {
                reader.reset();
              } else {
                tt = Tokens.UNICODE_RANGE;

                //if there's a ? in the first part, there can't be a second part
                if (value.indexOf("?") === -1) {
                  if (reader.peek() === "-") {
                    reader.mark();
                    temp = reader.read();
                    temp += this.readUnicodeRangePart(false);

                    //if there's not another value, back up and just take the first
                    if (temp.length === 1) {
                      reader.reset();
                    } else {
                      value += temp;
                    }
                  }
                }
              }
            }
            return this.createToken(tt, value, startLine, startCol);
          },
          /**
           * Produces a S token based on the specified information. Since whitespace
           * may have multiple characters, this consumes all whitespace characters
           * into a single token.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method whitespaceToken
           */
          whitespaceToken: function (first, startLine, startCol) {
            var value = first + this.readWhitespace();
            return this.createToken(Tokens.S, value, startLine, startCol);
          },
          //-------------------------------------------------------------------------
          // Methods to read values from the string stream
          //-------------------------------------------------------------------------

          readUnicodeRangePart: function (allowQuestionMark) {
            var reader = this._reader,
              part = "",
              c = reader.peek();

            //first read hex digits
            while (isHexDigit(c) && part.length < 6) {
              reader.read();
              part += c;
              c = reader.peek();
            }

            //then read question marks if allowed
            if (allowQuestionMark) {
              while (c === "?" && part.length < 6) {
                reader.read();
                part += c;
                c = reader.peek();
              }
            }

            //there can't be any other characters after this point

            return part;
          },
          readWhitespace: function () {
            var reader = this._reader,
              whitespace = "",
              c = reader.peek();
            while (isWhitespace(c)) {
              reader.read();
              whitespace += c;
              c = reader.peek();
            }
            return whitespace;
          },
          readNumber: function (first) {
            var reader = this._reader,
              number = first,
              hasDot = first === ".",
              c = reader.peek();
            while (c) {
              if (isDigit(c)) {
                number += reader.read();
              } else if (c === ".") {
                if (hasDot) {
                  break;
                } else {
                  hasDot = true;
                  number += reader.read();
                }
              } else {
                break;
              }
              c = reader.peek();
            }
            return number;
          },
          // returns null w/o resetting reader if string is invalid.
          readString: function () {
            var token = this.stringToken(this._reader.read(), 0, 0);
            return token.type === Tokens.INVALID ? null : token.value;
          },
          // returns null w/o resetting reader if URI is invalid.
          readURI: function (first) {
            var reader = this._reader,
              uri = first,
              inner = "",
              c = reader.peek();

            //skip whitespace before
            while (c && isWhitespace(c)) {
              reader.read();
              c = reader.peek();
            }

            //it's a string
            if (c === "'" || c === "\"") {
              inner = this.readString();
              if (inner !== null) {
                inner = PropertyValuePart.parseString(inner);
              }
            } else {
              inner = this.readUnquotedURL();
            }
            c = reader.peek();

            //skip whitespace after
            while (c && isWhitespace(c)) {
              reader.read();
              c = reader.peek();
            }

            //if there was no inner value or the next character isn't closing paren, it's not a URI
            if (inner === null || c !== ")") {
              uri = null;
            } else {
              // Ensure argument to URL is always double-quoted
              // (This simplifies later processing in PropertyValuePart.)
              uri += PropertyValuePart.serializeString(inner) + reader.read();
            }
            return uri;
          },
          // This method never fails, although it may return an empty string.
          readUnquotedURL: function (first) {
            var reader = this._reader,
              url = first || "",
              c;
            for (c = reader.peek(); c; c = reader.peek()) {
              // Note that the grammar at
              // https://www.w3.org/TR/CSS2/grammar.html#scanner
              // incorrectly includes the backslash character in the
              // `url` production, although it is correctly omitted in
              // the `baduri1` production.
              if (nonascii.test(c) || /^[\-!#$%&*-\[\]-~]$/.test(c)) {
                url += c;
                reader.read();
              } else if (c === "\\") {
                if (/^[^\r\n\f]$/.test(reader.peek(2))) {
                  url += this.readEscape(reader.read(), true);
                } else {
                  break; // bad escape sequence.
                }
              } else {
                break; // bad character
              }
            }

            return url;
          },
          readName: function (first) {
            var reader = this._reader,
              ident = first || "",
              c;
            for (c = reader.peek(); c; c = reader.peek()) {
              if (c === "\\") {
                if (/^[^\r\n\f]$/.test(reader.peek(2))) {
                  ident += this.readEscape(reader.read(), true);
                } else {
                  // Bad escape sequence.
                  break;
                }
              } else if (isNameChar(c)) {
                ident += reader.read();
              } else {
                break;
              }
            }
            return ident;
          },
          readEscape: function (first, unescape) {
            var reader = this._reader,
              cssEscape = first || "",
              i = 0,
              c = reader.peek();
            if (isHexDigit(c)) {
              do {
                cssEscape += reader.read();
                c = reader.peek();
              } while (c && isHexDigit(c) && ++i < 6);
            }
            if (cssEscape.length === 1) {
              if (/^[^\r\n\f0-9a-f]$/.test(c)) {
                reader.read();
                if (unescape) {
                  return c;
                }
              } else {
                // We should never get here (readName won't call readEscape
                // if the escape sequence is bad).
                throw new Error("Bad escape sequence.");
              }
            } else if (c === "\r") {
              reader.read();
              if (reader.peek() === "\n") {
                c += reader.read();
              }
            } else if (/^[ \t\n\f]$/.test(c)) {
              reader.read();
            } else {
              c = "";
            }
            if (unescape) {
              var cp = parseInt(cssEscape.slice(first.length), 16);
              return String.fromCodePoint ? String.fromCodePoint(cp) : String.fromCharCode(cp);
            }
            return cssEscape + c;
          },
          readComment: function (first) {
            var reader = this._reader,
              comment = first || "",
              c = reader.read();
            if (c === "*") {
              while (c) {
                comment += c;

                //look for end of comment
                if (comment.length > 2 && c === "*" && reader.peek() === "/") {
                  comment += reader.read();
                  break;
                }
                c = reader.read();
              }
              return comment;
            } else {
              return "";
            }
          }
        });
      }, {
        "../util/TokenStreamBase": 27,
        "./PropertyValuePart": 11,
        "./Tokens": 18
      }],
      18: [function (require, module, exports) {
        "use strict";

        var Tokens = module.exports = [
        /*
         * The following token names are defined in CSS3 Grammar: https://www.w3.org/TR/css3-syntax/#lexical
         */

        // HTML-style comments
        {
          name: "CDO"
        }, {
          name: "CDC"
        },
        // ignorables
        {
          name: "S",
          whitespace: true /*, channel: "ws"*/
        }, {
          name: "COMMENT",
          comment: true,
          hide: true,
          channel: "comment"
        },
        // attribute equality
        {
          name: "INCLUDES",
          text: "~="
        }, {
          name: "DASHMATCH",
          text: "|="
        }, {
          name: "PREFIXMATCH",
          text: "^="
        }, {
          name: "SUFFIXMATCH",
          text: "$="
        }, {
          name: "SUBSTRINGMATCH",
          text: "*="
        },
        // identifier types
        {
          name: "STRING"
        }, {
          name: "IDENT"
        }, {
          name: "HASH"
        },
        // at-keywords
        {
          name: "IMPORT_SYM",
          text: "@import"
        }, {
          name: "PAGE_SYM",
          text: "@page"
        }, {
          name: "MEDIA_SYM",
          text: "@media"
        }, {
          name: "FONT_FACE_SYM",
          text: "@font-face"
        }, {
          name: "CHARSET_SYM",
          text: "@charset"
        }, {
          name: "NAMESPACE_SYM",
          text: "@namespace"
        }, {
          name: "SUPPORTS_SYM",
          text: "@supports"
        }, {
          name: "VIEWPORT_SYM",
          text: ["@viewport", "@-ms-viewport", "@-o-viewport"]
        }, {
          name: "DOCUMENT_SYM",
          text: ["@document", "@-moz-document"]
        }, {
          name: "UNKNOWN_SYM"
        },
        //{ name: "ATKEYWORD"},

        // CSS3 animations
        {
          name: "KEYFRAMES_SYM",
          text: ["@keyframes", "@-webkit-keyframes", "@-moz-keyframes", "@-o-keyframes"]
        },
        // important symbol
        {
          name: "IMPORTANT_SYM"
        },
        // measurements
        {
          name: "LENGTH"
        }, {
          name: "ANGLE"
        }, {
          name: "TIME"
        }, {
          name: "FREQ"
        }, {
          name: "DIMENSION"
        }, {
          name: "PERCENTAGE"
        }, {
          name: "NUMBER"
        },
        // functions
        {
          name: "URI"
        }, {
          name: "FUNCTION"
        },
        // Unicode ranges
        {
          name: "UNICODE_RANGE"
        },
        /*
         * The following token names are defined in CSS3 Selectors: https://www.w3.org/TR/css3-selectors/#selector-syntax
         */

        // invalid string
        {
          name: "INVALID"
        },
        // combinators
        {
          name: "PLUS",
          text: "+"
        }, {
          name: "GREATER",
          text: ">"
        }, {
          name: "COMMA",
          text: ","
        }, {
          name: "TILDE",
          text: "~"
        },
        // modifier
        {
          name: "NOT"
        },
        /*
         * Defined in CSS3 Paged Media
         */
        {
          name: "TOPLEFTCORNER_SYM",
          text: "@top-left-corner"
        }, {
          name: "TOPLEFT_SYM",
          text: "@top-left"
        }, {
          name: "TOPCENTER_SYM",
          text: "@top-center"
        }, {
          name: "TOPRIGHT_SYM",
          text: "@top-right"
        }, {
          name: "TOPRIGHTCORNER_SYM",
          text: "@top-right-corner"
        }, {
          name: "BOTTOMLEFTCORNER_SYM",
          text: "@bottom-left-corner"
        }, {
          name: "BOTTOMLEFT_SYM",
          text: "@bottom-left"
        }, {
          name: "BOTTOMCENTER_SYM",
          text: "@bottom-center"
        }, {
          name: "BOTTOMRIGHT_SYM",
          text: "@bottom-right"
        }, {
          name: "BOTTOMRIGHTCORNER_SYM",
          text: "@bottom-right-corner"
        }, {
          name: "LEFTTOP_SYM",
          text: "@left-top"
        }, {
          name: "LEFTMIDDLE_SYM",
          text: "@left-middle"
        }, {
          name: "LEFTBOTTOM_SYM",
          text: "@left-bottom"
        }, {
          name: "RIGHTTOP_SYM",
          text: "@right-top"
        }, {
          name: "RIGHTMIDDLE_SYM",
          text: "@right-middle"
        }, {
          name: "RIGHTBOTTOM_SYM",
          text: "@right-bottom"
        },
        /*
         * The following token names are defined in CSS3 Media Queries: https://www.w3.org/TR/css3-mediaqueries/#syntax
         */
        /*{ name: "MEDIA_ONLY", state: "media"},
        { name: "MEDIA_NOT", state: "media"},
        { name: "MEDIA_AND", state: "media"},*/
        {
          name: "RESOLUTION",
          state: "media"
        },
        /*
         * The following token names are not defined in any CSS specification but are used by the lexer.
         */

        // not a real token, but useful for stupid IE filters
        {
          name: "IE_FUNCTION"
        },
        // part of CSS3 grammar but not the Flex code
        {
          name: "CHAR"
        },
        // TODO: Needed?
        // Not defined as tokens, but might as well be
        {
          name: "PIPE",
          text: "|"
        }, {
          name: "SLASH",
          text: "/"
        }, {
          name: "MINUS",
          text: "-"
        }, {
          name: "STAR",
          text: "*"
        }, {
          name: "LBRACE",
          endChar: "}",
          text: "{"
        }, {
          name: "RBRACE",
          text: "}"
        }, {
          name: "LBRACKET",
          endChar: "]",
          text: "["
        }, {
          name: "RBRACKET",
          text: "]"
        }, {
          name: "EQUALS",
          text: "="
        }, {
          name: "COLON",
          text: ":"
        }, {
          name: "SEMICOLON",
          text: ";"
        }, {
          name: "LPAREN",
          endChar: ")",
          text: "("
        }, {
          name: "RPAREN",
          text: ")"
        }, {
          name: "DOT",
          text: "."
        }];
        (function () {
          var nameMap = [],
            typeMap = Object.create(null);
          Tokens.UNKNOWN = -1;
          Tokens.unshift({
            name: "EOF"
          });
          for (var i = 0, len = Tokens.length; i < len; i++) {
            nameMap.push(Tokens[i].name);
            Tokens[Tokens[i].name] = i;
            if (Tokens[i].text) {
              if (Tokens[i].text instanceof Array) {
                for (var j = 0; j < Tokens[i].text.length; j++) {
                  typeMap[Tokens[i].text[j]] = i;
                }
              } else {
                typeMap[Tokens[i].text] = i;
              }
            }
          }
          Tokens.name = function (tt) {
            return nameMap[tt];
          };
          Tokens.type = function (c) {
            return typeMap[c] || -1;
          };
        })();
      }, {}],
      19: [function (require, module, exports) {
        "use strict";

        /* exported Validation */
        var Matcher = require("./Matcher");
        var Properties = require("./Properties");
        var ValidationTypes = require("./ValidationTypes");
        var ValidationError = require("./ValidationError");
        var PropertyValueIterator = require("./PropertyValueIterator");
        var Validation = module.exports = {
          validate: function (property, value) {
            //normalize name
            var name = property.toString().toLowerCase(),
              expression = new PropertyValueIterator(value),
              spec = Properties[name],
              part;
            if (!spec) {
              if (name.indexOf("-") !== 0) {
                //vendor prefixed are ok
                throw new ValidationError("Unknown property '" + property + "'.", property.line, property.col);
              }
            } else if (typeof spec !== "number") {
              // All properties accept some CSS-wide values.
              // https://drafts.csswg.org/css-values-3/#common-keywords
              if (ValidationTypes.isAny(expression, "inherit | initial | unset")) {
                if (expression.hasNext()) {
                  part = expression.next();
                  throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
                }
                return;
              }

              // Property-specific validation.
              this.singleProperty(spec, expression);
            }
          },
          singleProperty: function (types, expression) {
            var result = false,
              value = expression.value,
              part;
            result = Matcher.parse(types).match(expression);
            if (!result) {
              if (expression.hasNext() && !expression.isFirst()) {
                part = expression.peek();
                throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
              } else {
                throw new ValidationError("Expected (" + ValidationTypes.describe(types) + ") but found '" + value + "'.", value.line, value.col);
              }
            } else if (expression.hasNext()) {
              part = expression.next();
              throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
            }
          }
        };
      }, {
        "./Matcher": 3,
        "./Properties": 7,
        "./PropertyValueIterator": 10,
        "./ValidationError": 20,
        "./ValidationTypes": 21
      }],
      20: [function (require, module, exports) {
        "use strict";

        module.exports = ValidationError;

        /**
         * Type to use when a validation error occurs.
         * @class ValidationError
         * @namespace parserlib.util
         * @constructor
         * @param {String} message The error message.
         * @param {int} line The line at which the error occurred.
         * @param {int} col The column at which the error occurred.
         */
        function ValidationError(message, line, col) {
          /**
           * The column at which the error occurred.
           * @type int
           * @property col
           */
          this.col = col;

          /**
           * The line at which the error occurred.
           * @type int
           * @property line
           */
          this.line = line;

          /**
           * The text representation of the unit.
           * @type String
           * @property text
           */
          this.message = message;
        }

        //inherit from Error
        ValidationError.prototype = new Error();
      }, {}],
      21: [function (require, module, exports) {
        "use strict";

        var ValidationTypes = module.exports;
        var Matcher = require("./Matcher");
        function copy(to, from) {
          Object.keys(from).forEach(function (prop) {
            to[prop] = from[prop];
          });
        }
        copy(ValidationTypes, {
          isLiteral: function (part, literals) {
            var text = part.text.toString().toLowerCase(),
              args = literals.split(" | "),
              i,
              len,
              found = false;
            for (i = 0, len = args.length; i < len && !found; i++) {
              if (args[i].charAt(0) === "<") {
                found = this.simple[args[i]](part);
              } else if (args[i].slice(-2) === "()") {
                found = part.type === "function" && part.name === args[i].slice(0, -2);
              } else if (text === args[i].toLowerCase()) {
                found = true;
              }
            }
            return found;
          },
          isSimple: function (type) {
            return Boolean(this.simple[type]);
          },
          isComplex: function (type) {
            return Boolean(this.complex[type]);
          },
          describe: function (type) {
            if (this.complex[type] instanceof Matcher) {
              return this.complex[type].toString(0);
            }
            return type;
          },
          /**
           * Determines if the next part(s) of the given expression
           * are any of the given types.
           */
          isAny: function (expression, types) {
            var args = types.split(" | "),
              i,
              len,
              found = false;
            for (i = 0, len = args.length; i < len && !found && expression.hasNext(); i++) {
              found = this.isType(expression, args[i]);
            }
            return found;
          },
          /**
           * Determines if the next part(s) of the given expression
           * are one of a group.
           */
          isAnyOfGroup: function (expression, types) {
            var args = types.split(" || "),
              i,
              len,
              found = false;
            for (i = 0, len = args.length; i < len && !found; i++) {
              found = this.isType(expression, args[i]);
            }
            return found ? args[i - 1] : false;
          },
          /**
           * Determines if the next part(s) of the given expression
           * are of a given type.
           */
          isType: function (expression, type) {
            var part = expression.peek(),
              result = false;
            if (type.charAt(0) !== "<") {
              result = this.isLiteral(part, type);
              if (result) {
                expression.next();
              }
            } else if (this.simple[type]) {
              result = this.simple[type](part);
              if (result) {
                expression.next();
              }
            } else if (this.complex[type] instanceof Matcher) {
              result = this.complex[type].match(expression);
            } else {
              result = this.complex[type](expression);
            }
            return result;
          },
          simple: {
            __proto__: null,
            "<absolute-size>": "xx-small | x-small | small | medium | large | x-large | xx-large",
            "<animateable-feature>": "scroll-position | contents | <animateable-feature-name>",
            "<animateable-feature-name>": function (part) {
              return this["<ident>"](part) && !/^(unset|initial|inherit|will-change|auto|scroll-position|contents)$/i.test(part);
            },
            "<angle>": function (part) {
              return part.type === "angle";
            },
            "<attachment>": "scroll | fixed | local",
            "<attr>": "attr()",
            // inset() = inset( <shape-arg>{1,4} [round <border-radius>]? )
            // circle() = circle( [<shape-radius>]? [at <position>]? )
            // ellipse() = ellipse( [<shape-radius>{2}]? [at <position>]? )
            // polygon() = polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
            "<basic-shape>": "inset() | circle() | ellipse() | polygon()",
            "<bg-image>": "<image> | <gradient> | none",
            "<border-style>": "none | hidden | dotted | dashed | solid | double | groove | " + "ridge | inset | outset",
            "<border-width>": "<length> | thin | medium | thick",
            "<box>": "padding-box | border-box | content-box",
            "<clip-source>": "<uri>",
            "<color>": function (part) {
              return part.type === "color" || String(part) === "transparent" || String(part) === "currentColor";
            },
            // The SVG <color> spec doesn't include "currentColor" or "transparent" as a color.
            "<color-svg>": function (part) {
              return part.type === "color";
            },
            "<content>": "content()",
            // https://www.w3.org/TR/css3-sizing/#width-height-keywords
            "<content-sizing>": "fill-available | -moz-available | -webkit-fill-available | " + "max-content | -moz-max-content | -webkit-max-content | " + "min-content | -moz-min-content | -webkit-min-content | " + "fit-content | -moz-fit-content | -webkit-fit-content",
            "<feature-tag-value>": function (part) {
              return part.type === "function" && /^[A-Z0-9]{4}$/i.test(part);
            },
            // custom() isn't actually in the spec
            "<filter-function>": "blur() | brightness() | contrast() | custom() | " + "drop-shadow() | grayscale() | hue-rotate() | invert() | " + "opacity() | saturate() | sepia()",
            "<flex-basis>": "<width>",
            "<flex-direction>": "row | row-reverse | column | column-reverse",
            "<flex-grow>": "<number>",
            "<flex-shrink>": "<number>",
            "<flex-wrap>": "nowrap | wrap | wrap-reverse",
            "<font-size>": "<absolute-size> | <relative-size> | <length> | <percentage>",
            "<font-stretch>": "normal | ultra-condensed | extra-condensed | condensed | " + "semi-condensed | semi-expanded | expanded | extra-expanded | " + "ultra-expanded",
            "<font-style>": "normal | italic | oblique",
            "<font-variant-caps>": "small-caps | all-small-caps | petite-caps | all-petite-caps | " + "unicase | titling-caps",
            "<font-variant-css21>": "normal | small-caps",
            "<font-weight>": "normal | bold | bolder | lighter | " + "100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",
            "<generic-family>": "serif | sans-serif | cursive | fantasy | monospace",
            "<geometry-box>": "<shape-box> | fill-box | stroke-box | view-box",
            "<glyph-angle>": function (part) {
              return part.type === "angle" && part.units === "deg";
            },
            "<gradient>": function (part) {
              return part.type === "function" && /^(?:\-(?:ms|moz|o|webkit)\-)?(?:repeating\-)?(?:radial\-|linear\-)?gradient/i.test(part);
            },
            "<icccolor>": "cielab() | cielch() | cielchab() | " + "icc-color() | icc-named-color()",
            //any identifier
            "<ident>": function (part) {
              return part.type === "identifier" || part.wasIdent;
            },
            "<ident-not-generic-family>": function (part) {
              return this["<ident>"](part) && !this["<generic-family>"](part);
            },
            "<image>": "<uri>",
            "<integer>": function (part) {
              return part.type === "integer";
            },
            "<length>": function (part) {
              if (part.type === "function" && /^(?:\-(?:ms|moz|o|webkit)\-)?calc/i.test(part)) {
                return true;
              } else {
                return part.type === "length" || part.type === "number" || part.type === "integer" || String(part) === "0";
              }
            },
            "<line>": function (part) {
              return part.type === "integer";
            },
            "<line-height>": "<number> | <length> | <percentage> | normal",
            "<margin-width>": "<length> | <percentage> | auto",
            "<miterlimit>": function (part) {
              return this["<number>"](part) && part.value >= 1;
            },
            "<nonnegative-length-or-percentage>": function (part) {
              return (this["<length>"](part) || this["<percentage>"](part)) && (String(part) === "0" || part.type === "function" || part.value >= 0);
            },
            "<nonnegative-number-or-percentage>": function (part) {
              return (this["<number>"](part) || this["<percentage>"](part)) && (String(part) === "0" || part.type === "function" || part.value >= 0);
            },
            "<number>": function (part) {
              return part.type === "number" || this["<integer>"](part);
            },
            "<opacity-value>": function (part) {
              return this["<number>"](part) && part.value >= 0 && part.value <= 1;
            },
            "<padding-width>": "<nonnegative-length-or-percentage>",
            "<percentage>": function (part) {
              return part.type === "percentage" || String(part) === "0";
            },
            "<relative-size>": "smaller | larger",
            "<shape>": "rect() | inset-rect()",
            "<shape-box>": "<box> | margin-box",
            "<single-animation-direction>": "normal | reverse | alternate | alternate-reverse",
            "<single-animation-name>": function (part) {
              return this["<ident>"](part) && /^-?[a-z_][-a-z0-9_]+$/i.test(part) && !/^(none|unset|initial|inherit)$/i.test(part);
            },
            "<string>": function (part) {
              return part.type === "string";
            },
            "<time>": function (part) {
              return part.type === "time";
            },
            "<uri>": function (part) {
              return part.type === "uri";
            },
            "<width>": "<margin-width>"
          },
          complex: {
            __proto__: null,
            "<azimuth>": "<angle>" + " | " + "[ [ left-side | far-left | left | center-left | center | " + "center-right | right | far-right | right-side ] || behind ]" + " | " + "leftwards | rightwards",
            "<bg-position>": "<position>#",
            "<bg-size>": "[ <length> | <percentage> | auto ]{1,2} | cover | contain",
            "<border-image-slice>":
            // [<number> | <percentage>]{1,4} && fill?
            // *but* fill can appear between any of the numbers
            Matcher.many([true /* first element is required */], Matcher.cast("<nonnegative-number-or-percentage>"), Matcher.cast("<nonnegative-number-or-percentage>"), Matcher.cast("<nonnegative-number-or-percentage>"), Matcher.cast("<nonnegative-number-or-percentage>"), "fill"),
            "<border-radius>": "<nonnegative-length-or-percentage>{1,4} " + "[ / <nonnegative-length-or-percentage>{1,4} ]?",
            "<box-shadow>": "none | <shadow>#",
            "<clip-path>": "<basic-shape> || <geometry-box>",
            "<dasharray>":
            // "list of comma and/or white space separated <length>s and
            // <percentage>s".  There is a non-negative constraint.
            Matcher.cast("<nonnegative-length-or-percentage>").braces(1, Infinity, "#", Matcher.cast(",").question()),
            "<family-name>":
            // <string> | <IDENT>+
            "<string> | <ident-not-generic-family> <ident>*",
            "<filter-function-list>": "[ <filter-function> | <uri> ]+",
            // https://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/#flex-property
            "<flex>": "none | [ <flex-grow> <flex-shrink>? || <flex-basis> ]",
            "<font-family>": "[ <generic-family> | <family-name> ]#",
            "<font-shorthand>": "[ <font-style> || <font-variant-css21> || " + "<font-weight> || <font-stretch> ]? <font-size> " + "[ / <line-height> ]? <font-family>",
            "<font-variant-alternates>":
            // stylistic(<feature-value-name>)
            "stylistic() || " + "historical-forms || " +
            // styleset(<feature-value-name> #)
            "styleset() || " +
            // character-variant(<feature-value-name> #)
            "character-variant() || " +
            // swash(<feature-value-name>)
            "swash() || " +
            // ornaments(<feature-value-name>)
            "ornaments() || " +
            // annotation(<feature-value-name>)
            "annotation()",
            "<font-variant-ligatures>":
            // <common-lig-values>
            "[ common-ligatures | no-common-ligatures ] || " +
            // <discretionary-lig-values>
            "[ discretionary-ligatures | no-discretionary-ligatures ] || " +
            // <historical-lig-values>
            "[ historical-ligatures | no-historical-ligatures ] || " +
            // <contextual-alt-values>
            "[ contextual | no-contextual ]",
            "<font-variant-numeric>":
            // <numeric-figure-values>
            "[ lining-nums | oldstyle-nums ] || " +
            // <numeric-spacing-values>
            "[ proportional-nums | tabular-nums ] || " +
            // <numeric-fraction-values>
            "[ diagonal-fractions | stacked-fractions ] || " + "ordinal || slashed-zero",
            "<font-variant-east-asian>":
            // <east-asian-variant-values>
            "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ] || " +
            // <east-asian-width-values>
            "[ full-width | proportional-width ] || " + "ruby",
            // Note that <color> here is "as defined in the SVG spec", which
            // is more restrictive that the <color> defined in the CSS spec.
            // none | currentColor | <color> [<icccolor>]? |
            // <funciri> [ none | currentColor | <color> [<icccolor>]? ]?
            "<paint>": "<paint-basic> | <uri> <paint-basic>?",
            // Helper definition for <paint> above.
            "<paint-basic>": "none | currentColor | <color-svg> <icccolor>?",
            "<position>":
            // Because our `alt` combinator is ordered, we need to test these
            // in order from longest possible match to shortest.
            "[ center | [ left | right ] [ <percentage> | <length> ]? ] && " + "[ center | [ top | bottom ] [ <percentage> | <length> ]? ]" + " | " + "[ left | center | right | <percentage> | <length> ] " + "[ top | center | bottom | <percentage> | <length> ]" + " | " + "[ left | center | right | top | bottom | <percentage> | <length> ]",
            "<repeat-style>": "repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}",
            "<shadow>":
            //inset? && [ <length>{2,4} && <color>? ]
            Matcher.many([true /* length is required */], Matcher.cast("<length>").braces(2, 4), "inset", "<color>"),
            "<text-decoration-color>": "<color>",
            "<text-decoration-line>": "none | [ underline || overline || line-through || blink ]",
            "<text-decoration-style>": "solid | double | dotted | dashed | wavy",
            "<will-change>": "auto | <animateable-feature>#",
            "<x-one-radius>":
            //[ <length> | <percentage> ] [ <length> | <percentage> ]?
            "[ <length> | <percentage> ]{1,2}"
          }
        });
        Object.keys(ValidationTypes.simple).forEach(function (nt) {
          var rule = ValidationTypes.simple[nt];
          if (typeof rule === "string") {
            ValidationTypes.simple[nt] = function (part) {
              return ValidationTypes.isLiteral(part, rule);
            };
          }
        });
        Object.keys(ValidationTypes.complex).forEach(function (nt) {
          var rule = ValidationTypes.complex[nt];
          if (typeof rule === "string") {
            ValidationTypes.complex[nt] = Matcher.parse(rule);
          }
        });

        // Because this is defined relative to other complex validation types,
        // we need to define it *after* the rest of the types are initialized.
        ValidationTypes.complex["<font-variant>"] = Matcher.oror({
          expand: "<font-variant-ligatures>"
        }, {
          expand: "<font-variant-alternates>"
        }, "<font-variant-caps>", {
          expand: "<font-variant-numeric>"
        }, {
          expand: "<font-variant-east-asian>"
        });
      }, {
        "./Matcher": 3
      }],
      22: [function (require, module, exports) {
        "use strict";

        module.exports = {
          Colors: require("./Colors"),
          Combinator: require("./Combinator"),
          Parser: require("./Parser"),
          PropertyName: require("./PropertyName"),
          PropertyValue: require("./PropertyValue"),
          PropertyValuePart: require("./PropertyValuePart"),
          Matcher: require("./Matcher"),
          MediaFeature: require("./MediaFeature"),
          MediaQuery: require("./MediaQuery"),
          Selector: require("./Selector"),
          SelectorPart: require("./SelectorPart"),
          SelectorSubPart: require("./SelectorSubPart"),
          Specificity: require("./Specificity"),
          TokenStream: require("./TokenStream"),
          Tokens: require("./Tokens"),
          ValidationError: require("./ValidationError")
        };
      }, {
        "./Colors": 1,
        "./Combinator": 2,
        "./Matcher": 3,
        "./MediaFeature": 4,
        "./MediaQuery": 5,
        "./Parser": 6,
        "./PropertyName": 8,
        "./PropertyValue": 9,
        "./PropertyValuePart": 11,
        "./Selector": 13,
        "./SelectorPart": 14,
        "./SelectorSubPart": 15,
        "./Specificity": 16,
        "./TokenStream": 17,
        "./Tokens": 18,
        "./ValidationError": 20
      }],
      23: [function (require, module, exports) {
        "use strict";

        module.exports = EventTarget;

        /**
         * A generic base to inherit from for any object
         * that needs event handling.
         * @class EventTarget
         * @constructor
         */
        function EventTarget() {
          /**
           * The array of listeners for various events.
           * @type Object
           * @property _listeners
           * @private
           */
          this._listeners = Object.create(null);
        }
        EventTarget.prototype = {
          //restore constructor
          constructor: EventTarget,
          /**
           * Adds a listener for a given event type.
           * @param {String} type The type of event to add a listener for.
           * @param {Function} listener The function to call when the event occurs.
           * @return {void}
           * @method addListener
           */
          addListener: function (type, listener) {
            if (!this._listeners[type]) {
              this._listeners[type] = [];
            }
            this._listeners[type].push(listener);
          },
          /**
           * Fires an event based on the passed-in object.
           * @param {Object|String} event An object with at least a 'type' attribute
           *      or a string indicating the event name.
           * @return {void}
           * @method fire
           */
          fire: function (event) {
            if (typeof event === "string") {
              event = {
                type: event
              };
            }
            if (typeof event.target !== "undefined") {
              event.target = this;
            }
            if (typeof event.type === "undefined") {
              throw new Error("Event object missing 'type' property.");
            }
            if (this._listeners[event.type]) {
              //create a copy of the array and use that so listeners can't chane
              var listeners = this._listeners[event.type].concat();
              for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
              }
            }
          },
          /**
           * Removes a listener for a given event type.
           * @param {String} type The type of event to remove a listener from.
           * @param {Function} listener The function to remove from the event.
           * @return {void}
           * @method removeListener
           */
          removeListener: function (type, listener) {
            if (this._listeners[type]) {
              var listeners = this._listeners[type];
              for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                  listeners.splice(i, 1);
                  break;
                }
              }
            }
          }
        };
      }, {}],
      24: [function (require, module, exports) {
        "use strict";

        module.exports = StringReader;

        /**
         * Convenient way to read through strings.
         * @namespace parserlib.util
         * @class StringReader
         * @constructor
         * @param {String} text The text to read.
         */
        function StringReader(text) {
          /**
           * The input text with line endings normalized.
           * @property _input
           * @type String
           * @private
           */
          this._input = text.replace(/(\r\n?|\n)/g, "\n");

          /**
           * The row for the character to be read next.
           * @property _line
           * @type int
           * @private
           */
          this._line = 1;

          /**
           * The column for the character to be read next.
           * @property _col
           * @type int
           * @private
           */
          this._col = 1;

          /**
           * The index of the character in the input to be read next.
           * @property _cursor
           * @type int
           * @private
           */
          this._cursor = 0;
        }
        StringReader.prototype = {
          // restore constructor
          constructor: StringReader,
          //-------------------------------------------------------------------------
          // Position info
          //-------------------------------------------------------------------------

          /**
           * Returns the column of the character to be read next.
           * @return {int} The column of the character to be read next.
           * @method getCol
           */
          getCol: function () {
            return this._col;
          },
          /**
           * Returns the row of the character to be read next.
           * @return {int} The row of the character to be read next.
           * @method getLine
           */
          getLine: function () {
            return this._line;
          },
          /**
           * Determines if you're at the end of the input.
           * @return {Boolean} True if there's no more input, false otherwise.
           * @method eof
           */
          eof: function () {
            return this._cursor === this._input.length;
          },
          //-------------------------------------------------------------------------
          // Basic reading
          //-------------------------------------------------------------------------

          /**
           * Reads the next character without advancing the cursor.
           * @param {int} count How many characters to look ahead (default is 1).
           * @return {String} The next character or null if there is no next character.
           * @method peek
           */
          peek: function (count) {
            var c = null;
            count = typeof count === "undefined" ? 1 : count;

            // if we're not at the end of the input...
            if (this._cursor < this._input.length) {
              // get character and increment cursor and column
              c = this._input.charAt(this._cursor + count - 1);
            }
            return c;
          },
          /**
           * Reads the next character from the input and adjusts the row and column
           * accordingly.
           * @return {String} The next character or null if there is no next character.
           * @method read
           */
          read: function () {
            var c = null;

            // if we're not at the end of the input...
            if (this._cursor < this._input.length) {
              // if the last character was a newline, increment row count
              // and reset column count
              if (this._input.charAt(this._cursor) === "\n") {
                this._line++;
                this._col = 1;
              } else {
                this._col++;
              }

              // get character and increment cursor and column
              c = this._input.charAt(this._cursor++);
            }
            return c;
          },
          //-------------------------------------------------------------------------
          // Misc
          //-------------------------------------------------------------------------

          /**
           * Saves the current location so it can be returned to later.
           * @method mark
           * @return {void}
           */
          mark: function () {
            this._bookmark = {
              cursor: this._cursor,
              line: this._line,
              col: this._col
            };
          },
          reset: function () {
            if (this._bookmark) {
              this._cursor = this._bookmark.cursor;
              this._line = this._bookmark.line;
              this._col = this._bookmark.col;
              delete this._bookmark;
            }
          },
          //-------------------------------------------------------------------------
          // Advanced reading
          //-------------------------------------------------------------------------

          /**
           * Reads up to and including the given string. Throws an error if that
           * string is not found.
           * @param {String} pattern The string to read.
           * @return {String} The string when it is found.
           * @throws Error when the string pattern is not found.
           * @method readTo
           */
          readTo: function (pattern) {
            var buffer = "",
              c;

            /*
             * First, buffer must be the same length as the pattern.
             * Then, buffer must end with the pattern or else reach the
             * end of the input.
             */
            while (buffer.length < pattern.length || buffer.lastIndexOf(pattern) !== buffer.length - pattern.length) {
              c = this.read();
              if (c) {
                buffer += c;
              } else {
                throw new Error("Expected \"" + pattern + "\" at line " + this._line + ", col " + this._col + ".");
              }
            }
            return buffer;
          },
          /**
           * Reads characters while each character causes the given
           * filter function to return true. The function is passed
           * in each character and either returns true to continue
           * reading or false to stop.
           * @param {Function} filter The function to read on each character.
           * @return {String} The string made up of all characters that passed the
           *      filter check.
           * @method readWhile
           */
          readWhile: function (filter) {
            var buffer = "",
              c = this.peek();
            while (c !== null && filter(c)) {
              buffer += this.read();
              c = this.peek();
            }
            return buffer;
          },
          /**
           * Reads characters that match either text or a regular expression and
           * returns those characters. If a match is found, the row and column
           * are adjusted; if no match is found, the reader's state is unchanged.
           * reading or false to stop.
           * @param {String|RegExp} matcher If a string, then the literal string
           *      value is searched for. If a regular expression, then any string
           *      matching the pattern is search for.
           * @return {String} The string made up of all characters that matched or
           *      null if there was no match.
           * @method readMatch
           */
          readMatch: function (matcher) {
            var source = this._input.substring(this._cursor),
              value = null;

            // if it's a string, just do a straight match
            if (typeof matcher === "string") {
              if (source.slice(0, matcher.length) === matcher) {
                value = this.readCount(matcher.length);
              }
            } else if (matcher instanceof RegExp) {
              if (matcher.test(source)) {
                value = this.readCount(RegExp.lastMatch.length);
              }
            }
            return value;
          },
          /**
           * Reads a given number of characters. If the end of the input is reached,
           * it reads only the remaining characters and does not throw an error.
           * @param {int} count The number of characters to read.
           * @return {String} The string made up the read characters.
           * @method readCount
           */
          readCount: function (count) {
            var buffer = "";
            while (count--) {
              buffer += this.read();
            }
            return buffer;
          }
        };
      }, {}],
      25: [function (require, module, exports) {
        "use strict";

        module.exports = SyntaxError;

        /**
         * Type to use when a syntax error occurs.
         * @class SyntaxError
         * @namespace parserlib.util
         * @constructor
         * @param {String} message The error message.
         * @param {int} line The line at which the error occurred.
         * @param {int} col The column at which the error occurred.
         */
        function SyntaxError(message, line, col) {
          Error.call(this);
          this.name = this.constructor.name;

          /**
           * The column at which the error occurred.
           * @type int
           * @property col
           */
          this.col = col;

          /**
           * The line at which the error occurred.
           * @type int
           * @property line
           */
          this.line = line;

          /**
           * The text representation of the unit.
           * @type String
           * @property text
           */
          this.message = message;
        }

        //inherit from Error
        SyntaxError.prototype = Object.create(Error.prototype); // jshint ignore:line
        SyntaxError.prototype.constructor = SyntaxError; // jshint ignore:line
      }, {}],
      26: [function (require, module, exports) {
        "use strict";

        module.exports = SyntaxUnit;

        /**
         * Base type to represent a single syntactic unit.
         * @class SyntaxUnit
         * @namespace parserlib.util
         * @constructor
         * @param {String} text The text of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function SyntaxUnit(text, line, col, type) {
          /**
           * The column of text on which the unit resides.
           * @type int
           * @property col
           */
          this.col = col;

          /**
           * The line of text on which the unit resides.
           * @type int
           * @property line
           */
          this.line = line;

          /**
           * The text representation of the unit.
           * @type String
           * @property text
           */
          this.text = text;

          /**
           * The type of syntax unit.
           * @type int
           * @property type
           */
          this.type = type;
        }

        /**
         * Create a new syntax unit based solely on the given token.
         * Convenience method for creating a new syntax unit when
         * it represents a single token instead of multiple.
         * @param {Object} token The token object to represent.
         * @return {parserlib.util.SyntaxUnit} The object representing the token.
         * @static
         * @method fromToken
         */
        SyntaxUnit.fromToken = function (token) {
          return new SyntaxUnit(token.value, token.startLine, token.startCol);
        };
        SyntaxUnit.prototype = {
          //restore constructor
          constructor: SyntaxUnit,
          /**
           * Returns the text representation of the unit.
           * @return {String} The text representation of the unit.
           * @method valueOf
           */
          valueOf: function () {
            return this.toString();
          },
          /**
           * Returns the text representation of the unit.
           * @return {String} The text representation of the unit.
           * @method toString
           */
          toString: function () {
            return this.text;
          }
        };
      }, {}],
      27: [function (require, module, exports) {
        "use strict";

        module.exports = TokenStreamBase;
        var StringReader = require("./StringReader");
        var SyntaxError = require("./SyntaxError");

        /**
         * Generic TokenStream providing base functionality.
         * @class TokenStreamBase
         * @namespace parserlib.util
         * @constructor
         * @param {String|StringReader} input The text to tokenize or a reader from
         *      which to read the input.
         */
        function TokenStreamBase(input, tokenData) {
          /**
           * The string reader for easy access to the text.
           * @type StringReader
           * @property _reader
           * @private
           */
          this._reader = new StringReader(input ? input.toString() : "");

          /**
           * Token object for the last consumed token.
           * @type Token
           * @property _token
           * @private
           */
          this._token = null;

          /**
           * The array of token information.
           * @type Array
           * @property _tokenData
           * @private
           */
          this._tokenData = tokenData;

          /**
           * Lookahead token buffer.
           * @type Array
           * @property _lt
           * @private
           */
          this._lt = [];

          /**
           * Lookahead token buffer index.
           * @type int
           * @property _ltIndex
           * @private
           */
          this._ltIndex = 0;
          this._ltIndexCache = [];
        }

        /**
         * Accepts an array of token information and outputs
         * an array of token data containing key-value mappings
         * and matching functions that the TokenStream needs.
         * @param {Array} tokens An array of token descriptors.
         * @return {Array} An array of processed token data.
         * @method createTokenData
         * @static
         */
        TokenStreamBase.createTokenData = function (tokens) {
          var nameMap = [],
            typeMap = Object.create(null),
            tokenData = tokens.concat([]),
            i = 0,
            len = tokenData.length + 1;
          tokenData.UNKNOWN = -1;
          tokenData.unshift({
            name: "EOF"
          });
          for (; i < len; i++) {
            nameMap.push(tokenData[i].name);
            tokenData[tokenData[i].name] = i;
            if (tokenData[i].text) {
              typeMap[tokenData[i].text] = i;
            }
          }
          tokenData.name = function (tt) {
            return nameMap[tt];
          };
          tokenData.type = function (c) {
            return typeMap[c];
          };
          return tokenData;
        };
        TokenStreamBase.prototype = {
          //restore constructor
          constructor: TokenStreamBase,
          //-------------------------------------------------------------------------
          // Matching methods
          //-------------------------------------------------------------------------

          /**
           * Determines if the next token matches the given token type.
           * If so, that token is consumed; if not, the token is placed
           * back onto the token stream. You can pass in any number of
           * token types and this will return true if any of the token
           * types is found.
           * @param {int|int[]} tokenTypes Either a single token type or an array of
           *      token types that the next token might be. If an array is passed,
           *      it's assumed that the token can be any of these.
           * @param {variant} channel (Optional) The channel to read from. If not
           *      provided, reads from the default (unnamed) channel.
           * @return {Boolean} True if the token type matches, false if not.
           * @method match
           */
          match: function (tokenTypes, channel) {
            //always convert to an array, makes things easier
            if (!(tokenTypes instanceof Array)) {
              tokenTypes = [tokenTypes];
            }
            var tt = this.get(channel),
              i = 0,
              len = tokenTypes.length;
            while (i < len) {
              if (tt === tokenTypes[i++]) {
                return true;
              }
            }

            //no match found, put the token back
            this.unget();
            return false;
          },
          /**
           * Determines if the next token matches the given token type.
           * If so, that token is consumed; if not, an error is thrown.
           * @param {int|int[]} tokenTypes Either a single token type or an array of
           *      token types that the next token should be. If an array is passed,
           *      it's assumed that the token must be one of these.
           * @return {void}
           * @method mustMatch
           */
          mustMatch: function (tokenTypes) {
            var token;

            //always convert to an array, makes things easier
            if (!(tokenTypes instanceof Array)) {
              tokenTypes = [tokenTypes];
            }
            if (!this.match.apply(this, arguments)) {
              token = this.LT(1);
              throw new SyntaxError("Expected " + this._tokenData[tokenTypes[0]].name + " at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
            }
          },
          //-------------------------------------------------------------------------
          // Consuming methods
          //-------------------------------------------------------------------------

          /**
           * Keeps reading from the token stream until either one of the specified
           * token types is found or until the end of the input is reached.
           * @param {int|int[]} tokenTypes Either a single token type or an array of
           *      token types that the next token should be. If an array is passed,
           *      it's assumed that the token must be one of these.
           * @param {variant} channel (Optional) The channel to read from. If not
           *      provided, reads from the default (unnamed) channel.
           * @return {void}
           * @method advance
           */
          advance: function (tokenTypes, channel) {
            while (this.LA(0) !== 0 && !this.match(tokenTypes, channel)) {
              this.get();
            }
            return this.LA(0);
          },
          /**
           * Consumes the next token from the token stream.
           * @return {int} The token type of the token that was just consumed.
           * @method get
           */
          get: function (channel) {
            var tokenInfo = this._tokenData,
              i = 0,
              token,
              info;

            //check the lookahead buffer first
            if (this._lt.length && this._ltIndex >= 0 && this._ltIndex < this._lt.length) {
              i++;
              this._token = this._lt[this._ltIndex++];
              info = tokenInfo[this._token.type];

              //obey channels logic
              while (info.channel !== undefined && channel !== info.channel && this._ltIndex < this._lt.length) {
                this._token = this._lt[this._ltIndex++];
                info = tokenInfo[this._token.type];
                i++;
              }

              //here be dragons
              if ((info.channel === undefined || channel === info.channel) && this._ltIndex <= this._lt.length) {
                this._ltIndexCache.push(i);
                return this._token.type;
              }
            }

            //call token retriever method
            token = this._getToken();

            //if it should be hidden, don't save a token
            if (token.type > -1 && !tokenInfo[token.type].hide) {
              //apply token channel
              token.channel = tokenInfo[token.type].channel;

              //save for later
              this._token = token;
              this._lt.push(token);

              //save space that will be moved (must be done before array is truncated)
              this._ltIndexCache.push(this._lt.length - this._ltIndex + i);

              //keep the buffer under 5 items
              if (this._lt.length > 5) {
                this._lt.shift();
              }

              //also keep the shift buffer under 5 items
              if (this._ltIndexCache.length > 5) {
                this._ltIndexCache.shift();
              }

              //update lookahead index
              this._ltIndex = this._lt.length;
            }

            /*
             * Skip to the next token if:
             * 1. The token type is marked as hidden.
             * 2. The token type has a channel specified and it isn't the current channel.
             */
            info = tokenInfo[token.type];
            if (info && (info.hide || info.channel !== undefined && channel !== info.channel)) {
              return this.get(channel);
            } else {
              //return just the type
              return token.type;
            }
          },
          /**
           * Looks ahead a certain number of tokens and returns the token type at
           * that position. This will throw an error if you lookahead past the
           * end of input, past the size of the lookahead buffer, or back past
           * the first token in the lookahead buffer.
           * @param {int} The index of the token type to retrieve. 0 for the
           *      current token, 1 for the next, -1 for the previous, etc.
           * @return {int} The token type of the token in the given position.
           * @method LA
           */
          LA: function (index) {
            var total = index,
              tt;
            if (index > 0) {
              //TODO: Store 5 somewhere
              if (index > 5) {
                throw new Error("Too much lookahead.");
              }

              //get all those tokens
              while (total) {
                tt = this.get();
                total--;
              }

              //unget all those tokens
              while (total < index) {
                this.unget();
                total++;
              }
            } else if (index < 0) {
              if (this._lt[this._ltIndex + index]) {
                tt = this._lt[this._ltIndex + index].type;
              } else {
                throw new Error("Too much lookbehind.");
              }
            } else {
              tt = this._token.type;
            }
            return tt;
          },
          /**
           * Looks ahead a certain number of tokens and returns the token at
           * that position. This will throw an error if you lookahead past the
           * end of input, past the size of the lookahead buffer, or back past
           * the first token in the lookahead buffer.
           * @param {int} The index of the token type to retrieve. 0 for the
           *      current token, 1 for the next, -1 for the previous, etc.
           * @return {Object} The token of the token in the given position.
           * @method LA
           */
          LT: function (index) {
            //lookahead first to prime the token buffer
            this.LA(index);

            //now find the token, subtract one because _ltIndex is already at the next index
            return this._lt[this._ltIndex + index - 1];
          },
          /**
           * Returns the token type for the next token in the stream without
           * consuming it.
           * @return {int} The token type of the next token in the stream.
           * @method peek
           */
          peek: function () {
            return this.LA(1);
          },
          /**
           * Returns the actual token object for the last consumed token.
           * @return {Token} The token object for the last consumed token.
           * @method token
           */
          token: function () {
            return this._token;
          },
          /**
           * Returns the name of the token for the given token type.
           * @param {int} tokenType The type of token to get the name of.
           * @return {String} The name of the token or "UNKNOWN_TOKEN" for any
           *      invalid token type.
           * @method tokenName
           */
          tokenName: function (tokenType) {
            if (tokenType < 0 || tokenType > this._tokenData.length) {
              return "UNKNOWN_TOKEN";
            } else {
              return this._tokenData[tokenType].name;
            }
          },
          /**
           * Returns the token type value for the given token name.
           * @param {String} tokenName The name of the token whose value should be returned.
           * @return {int} The token type value for the given token name or -1
           *      for an unknown token.
           * @method tokenName
           */
          tokenType: function (tokenName) {
            return this._tokenData[tokenName] || -1;
          },
          /**
           * Returns the last consumed token to the token stream.
           * @method unget
           */
          unget: function () {
            //if (this._ltIndex > -1) {
            if (this._ltIndexCache.length) {
              this._ltIndex -= this._ltIndexCache.pop(); //--;
              this._token = this._lt[this._ltIndex - 1];
            } else {
              throw new Error("Too much lookahead.");
            }
          }
        };
      }, {
        "./StringReader": 24,
        "./SyntaxError": 25
      }],
      28: [function (require, module, exports) {
        "use strict";

        module.exports = {
          StringReader: require("./StringReader"),
          SyntaxError: require("./SyntaxError"),
          SyntaxUnit: require("./SyntaxUnit"),
          EventTarget: require("./EventTarget"),
          TokenStreamBase: require("./TokenStreamBase")
        };
      }, {
        "./EventTarget": 23,
        "./StringReader": 24,
        "./SyntaxError": 25,
        "./SyntaxUnit": 26,
        "./TokenStreamBase": 27
      }],
      "parserlib": [function (require, module, exports) {
        "use strict";

        module.exports = {
          css: require("./css"),
          util: require("./util")
        };
      }, {
        "./css": 22,
        "./util": 28
      }]
    }, {}, []);
    return require('parserlib');
  }();
  var clone = function () {
    'use strict';

    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      // maybe a reference error because no `Map`. Give it a dummy value that no
      // value will ever be an instanceof.
      nativeMap = function () {};
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function () {};
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function () {};
    }

    /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
    */
    function clone(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === 'object') {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      // maintain two arrays for circular references, where corresponding parents
      // and children have the same index
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != 'undefined';
      if (typeof circular == 'undefined') circular = true;
      if (typeof depth == 'undefined') depth = Infinity;

      // recurse this function so we don't reset allParents and allChildren
      function _clone(parent, depth) {
        // cloning null always returns null
        if (parent === null) return null;
        if (depth === 0) return parent;
        var child;
        var proto;
        if (typeof parent != 'object') {
          return parent;
        }
        if (parent instanceof nativeMap) {
          child = new nativeMap();
        } else if (parent instanceof nativeSet) {
          child = new nativeSet();
        } else if (parent instanceof nativePromise) {
          child = new nativePromise(function (resolve, reject) {
            parent.then(function (value) {
              resolve(_clone(value, depth - 1));
            }, function (err) {
              reject(_clone(err, depth - 1));
            });
          });
        } else if (clone.__isArray(parent)) {
          child = [];
        } else if (clone.__isRegExp(parent)) {
          child = new RegExp(parent.source, __getRegExpFlags(parent));
          if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (clone.__isDate(parent)) {
          child = new Date(parent.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent)) {
          child = new Buffer(parent.length);
          parent.copy(child);
          return child;
        } else if (parent instanceof Error) {
          child = Object.create(parent);
        } else {
          if (typeof prototype == 'undefined') {
            proto = Object.getPrototypeOf(parent);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index = allParents.indexOf(parent);
          if (index != -1) {
            return allChildren[index];
          }
          allParents.push(parent);
          allChildren.push(child);
        }
        if (parent instanceof nativeMap) {
          var keyIterator = parent.keys();
          while (true) {
            var next = keyIterator.next();
            if (next.done) {
              break;
            }
            var keyChild = _clone(next.value, depth - 1);
            var valueChild = _clone(parent.get(next.value), depth - 1);
            child.set(keyChild, valueChild);
          }
        }
        if (parent instanceof nativeSet) {
          var iterator = parent.keys();
          while (true) {
            var next = iterator.next();
            if (next.done) {
              break;
            }
            var entryChild = _clone(next.value, depth - 1);
            child.add(entryChild);
          }
        }
        for (var i in parent) {
          var attrs;
          if (proto) {
            attrs = Object.getOwnPropertyDescriptor(proto, i);
          }
          if (attrs && attrs.set == null) {
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent);
          for (var i = 0; i < symbols.length; i++) {
            // Don't need to worry about cloning a symbol because it is a primitive,
            // like a number or string.
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent[symbol], depth - 1);
            if (!descriptor.enumerable) {
              Object.defineProperty(child, symbol, {
                enumerable: false
              });
            }
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent[propertyName], depth - 1);
            Object.defineProperty(child, propertyName, {
              enumerable: false
            });
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }

    /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
    clone.clonePrototype = function clonePrototype(parent) {
      if (parent === null) return null;
      var c = function () {};
      c.prototype = parent;
      return new c();
    };

    // private utility functions

    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === 'object' && __objToStr(o) === '[object Date]';
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === 'object' && __objToStr(o) === '[object Array]';
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = '';
      if (re.global) flags += 'g';
      if (re.ignoreCase) flags += 'i';
      if (re.multiline) flags += 'm';
      return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
  }();
  if (typeof module === 'object' && module.exports) {
    module.exports = clone;
  }

  /**
   * Main CSSLint object.
   * @class CSSLint
   * @static
   * @extends parserlib.util.EventTarget
   */

  /* global parserlib, clone, Reporter */
  /* exported CSSLint */

  var CSSLint = function () {
    "use strict";

    var rules = [],
      formatters = [],
      embeddedRuleset = /\/\*\s*csslint([^\*]*)\*\//,
      api = new parserlib.util.EventTarget();
    api.version = "1.0.4";

    //-------------------------------------------------------------------------
    // Rule Management
    //-------------------------------------------------------------------------

    /**
     * Adds a new rule to the engine.
     * @param {Object} rule The rule to add.
     * @method addRule
     */
    api.addRule = function (rule) {
      rules.push(rule);
      rules[rule.id] = rule;
    };

    /**
     * Clears all rule from the engine.
     * @method clearRules
     */
    api.clearRules = function () {
      rules = [];
    };

    /**
     * Returns the rule objects.
     * @return An array of rule objects.
     * @method getRules
     */
    api.getRules = function () {
      return [].concat(rules).sort(function (a, b) {
        return a.id > b.id ? 1 : 0;
      });
    };

    /**
     * Returns a ruleset configuration object with all current rules.
     * @return A ruleset object.
     * @method getRuleset
     */
    api.getRuleset = function () {
      var ruleset = {},
        i = 0,
        len = rules.length;
      while (i < len) {
        ruleset[rules[i++].id] = 1; // by default, everything is a warning
      }

      return ruleset;
    };

    /**
     * Returns a ruleset object based on embedded rules.
     * @param {String} text A string of css containing embedded rules.
     * @param {Object} ruleset A ruleset object to modify.
     * @return {Object} A ruleset object.
     * @method getEmbeddedRuleset
     */
    function applyEmbeddedRuleset(text, ruleset) {
      var valueMap,
        embedded = text && text.match(embeddedRuleset),
        rules = embedded && embedded[1];
      if (rules) {
        valueMap = {
          "true": 2,
          // true is error
          "": 1,
          // blank is warning
          "false": 0,
          // false is ignore

          "2": 2,
          // explicit error
          "1": 1,
          // explicit warning
          "0": 0 // explicit ignore
        };

        rules.toLowerCase().split(",").forEach(function (rule) {
          var pair = rule.split(":"),
            property = pair[0] || "",
            value = pair[1] || "";
          ruleset[property.trim()] = valueMap[value.trim()];
        });
      }
      return ruleset;
    }

    //-------------------------------------------------------------------------
    // Formatters
    //-------------------------------------------------------------------------

    /**
     * Adds a new formatter to the engine.
     * @param {Object} formatter The formatter to add.
     * @method addFormatter
     */
    api.addFormatter = function (formatter) {
      // formatters.push(formatter);
      formatters[formatter.id] = formatter;
    };

    /**
     * Retrieves a formatter for use.
     * @param {String} formatId The name of the format to retrieve.
     * @return {Object} The formatter or undefined.
     * @method getFormatter
     */
    api.getFormatter = function (formatId) {
      return formatters[formatId];
    };

    /**
     * Formats the results in a particular format for a single file.
     * @param {Object} result The results returned from CSSLint.verify().
     * @param {String} filename The filename for which the results apply.
     * @param {String} formatId The name of the formatter to use.
     * @param {Object} options (Optional) for special output handling.
     * @return {String} A formatted string for the results.
     * @method format
     */
    api.format = function (results, filename, formatId, options) {
      var formatter = this.getFormatter(formatId),
        result = null;
      if (formatter) {
        result = formatter.startFormat();
        result += formatter.formatResults(results, filename, options || {});
        result += formatter.endFormat();
      }
      return result;
    };

    /**
     * Indicates if the given format is supported.
     * @param {String} formatId The ID of the format to check.
     * @return {Boolean} True if the format exists, false if not.
     * @method hasFormat
     */
    api.hasFormat = function (formatId) {
      return formatters.hasOwnProperty(formatId);
    };

    //-------------------------------------------------------------------------
    // Verification
    //-------------------------------------------------------------------------

    /**
     * Starts the verification process for the given CSS text.
     * @param {String} text The CSS text to verify.
     * @param {Object} ruleset (Optional) List of rules to apply. If null, then
     *      all rules are used. If a rule has a value of 1 then it's a warning,
     *      a value of 2 means it's an error.
     * @return {Object} Results of the verification.
     * @method verify
     */
    api.verify = function (text, ruleset) {
      var i = 0,
        reporter,
        lines,
        allow = {},
        ignore = [],
        report,
        parser = new parserlib.css.Parser({
          starHack: true,
          ieFilters: true,
          underscoreHack: true,
          strict: false
        });

      // normalize line endings
      lines = text.replace(/\n\r?/g, "$split$").split("$split$");

      // find 'allow' comments
      CSSLint.Util.forEach(lines, function (line, lineno) {
        var allowLine = line && line.match(/\/\*[ \t]*csslint[ \t]+allow:[ \t]*([^\*]*)\*\//i),
          allowRules = allowLine && allowLine[1],
          allowRuleset = {};
        if (allowRules) {
          allowRules.toLowerCase().split(",").forEach(function (allowRule) {
            allowRuleset[allowRule.trim()] = true;
          });
          if (Object.keys(allowRuleset).length > 0) {
            allow[lineno + 1] = allowRuleset;
          }
        }
      });
      var ignoreStart = null,
        ignoreEnd = null;
      CSSLint.Util.forEach(lines, function (line, lineno) {
        // Keep oldest, "unclosest" ignore:start
        if (ignoreStart === null && line.match(/\/\*[ \t]*csslint[ \t]+ignore:start[ \t]*\*\//i)) {
          ignoreStart = lineno;
        }
        if (line.match(/\/\*[ \t]*csslint[ \t]+ignore:end[ \t]*\*\//i)) {
          ignoreEnd = lineno;
        }
        if (ignoreStart !== null && ignoreEnd !== null) {
          ignore.push([ignoreStart, ignoreEnd]);
          ignoreStart = ignoreEnd = null;
        }
      });

      // Close remaining ignore block, if any
      if (ignoreStart !== null) {
        ignore.push([ignoreStart, lines.length]);
      }
      if (!ruleset) {
        ruleset = this.getRuleset();
      }
      if (embeddedRuleset.test(text)) {
        // defensively copy so that caller's version does not get modified
        ruleset = clone(ruleset);
        ruleset = applyEmbeddedRuleset(text, ruleset);
      }
      reporter = new Reporter(lines, ruleset, allow, ignore);
      ruleset.errors = 2; // always report parsing errors as errors
      for (i in ruleset) {
        if (ruleset.hasOwnProperty(i) && ruleset[i]) {
          if (rules[i]) {
            rules[i].init(parser, reporter);
          }
        }
      }

      // capture most horrible error type
      try {
        parser.parse(text);
      } catch (ex) {
        reporter.error("Fatal error, cannot continue: " + ex.message, ex.line, ex.col, {});
      }
      report = {
        messages: reporter.messages,
        stats: reporter.stats,
        ruleset: reporter.ruleset,
        allow: reporter.allow,
        ignore: reporter.ignore
      };

      // sort by line numbers, rollups at the bottom
      report.messages.sort(function (a, b) {
        if (a.rollup && !b.rollup) {
          return 1;
        } else if (!a.rollup && b.rollup) {
          return -1;
        } else {
          return a.line - b.line;
        }
      });
      return report;
    };

    //-------------------------------------------------------------------------
    // Publish the API
    //-------------------------------------------------------------------------

    return api;
  }();

  /**
   * An instance of Report is used to report results of the
   * verification back to the main API.
   * @class Reporter
   * @constructor
   * @param {String[]} lines The text lines of the source.
   * @param {Object} ruleset The set of rules to work with, including if
   *      they are errors or warnings.
   * @param {Object} explicitly allowed lines
   * @param {[][]} ingore list of line ranges to be ignored
   */
  function Reporter(lines, ruleset, allow, ignore) {
    "use strict";

    /**
     * List of messages being reported.
     * @property messages
     * @type String[]
     */
    this.messages = [];

    /**
     * List of statistics being reported.
     * @property stats
     * @type String[]
     */
    this.stats = [];

    /**
     * Lines of code being reported on. Used to provide contextual information
     * for messages.
     * @property lines
     * @type String[]
     */
    this.lines = lines;

    /**
     * Information about the rules. Used to determine whether an issue is an
     * error or warning.
     * @property ruleset
     * @type Object
     */
    this.ruleset = ruleset;

    /**
     * Lines with specific rule messages to leave out of the report.
     * @property allow
     * @type Object
     */
    this.allow = allow;
    if (!this.allow) {
      this.allow = {};
    }

    /**
     * Linesets not to include in the report.
     * @property ignore
     * @type [][]
     */
    this.ignore = ignore;
    if (!this.ignore) {
      this.ignore = [];
    }
  }
  Reporter.prototype = {
    // restore constructor
    constructor: Reporter,
    /**
     * Report an error.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method error
     */
    error: function (message, line, col, rule) {
      "use strict";

      this.messages.push({
        type: "error",
        line: line,
        col: col,
        message: message,
        evidence: this.lines[line - 1],
        rule: rule || {}
      });
    },
    /**
     * Report an warning.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method warn
     * @deprecated Use report instead.
     */
    warn: function (message, line, col, rule) {
      "use strict";

      this.report(message, line, col, rule);
    },
    /**
     * Report an issue.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method report
     */
    report: function (message, line, col, rule) {
      "use strict";

      // Check if rule violation should be allowed
      if (this.allow.hasOwnProperty(line) && this.allow[line].hasOwnProperty(rule.id)) {
        return;
      }
      var ignore = false;
      CSSLint.Util.forEach(this.ignore, function (range) {
        if (range[0] <= line && line <= range[1]) {
          ignore = true;
        }
      });
      if (ignore) {
        return;
      }
      this.messages.push({
        type: this.ruleset[rule.id] === 2 ? "error" : "warning",
        line: line,
        col: col,
        message: message,
        evidence: this.lines[line - 1],
        rule: rule
      });
    },
    /**
     * Report some informational text.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method info
     */
    info: function (message, line, col, rule) {
      "use strict";

      this.messages.push({
        type: "info",
        line: line,
        col: col,
        message: message,
        evidence: this.lines[line - 1],
        rule: rule
      });
    },
    /**
     * Report some rollup error information.
     * @param {String} message The message to store.
     * @param {Object} rule The rule this message relates to.
     * @method rollupError
     */
    rollupError: function (message, rule) {
      "use strict";

      this.messages.push({
        type: "error",
        rollup: true,
        message: message,
        rule: rule
      });
    },
    /**
     * Report some rollup warning information.
     * @param {String} message The message to store.
     * @param {Object} rule The rule this message relates to.
     * @method rollupWarn
     */
    rollupWarn: function (message, rule) {
      "use strict";

      this.messages.push({
        type: "warning",
        rollup: true,
        message: message,
        rule: rule
      });
    },
    /**
     * Report a statistic.
     * @param {String} name The name of the stat to store.
     * @param {Variant} value The value of the stat.
     * @method stat
     */
    stat: function (name, value) {
      "use strict";

      this.stats[name] = value;
    }
  };

  // expose for testing purposes
  CSSLint._Reporter = Reporter;

  /*
   * Utility functions that make life easier.
   */
  CSSLint.Util = {
    /*
     * Adds all properties from supplier onto receiver,
     * overwriting if the same name already exists on
     * receiver.
     * @param {Object} The object to receive the properties.
     * @param {Object} The object to provide the properties.
     * @return {Object} The receiver
     */
    mix: function (receiver, supplier) {
      "use strict";

      var prop;
      for (prop in supplier) {
        if (supplier.hasOwnProperty(prop)) {
          receiver[prop] = supplier[prop];
        }
      }
      return prop;
    },
    /*
     * Polyfill for array indexOf() method.
     * @param {Array} values The array to search.
     * @param {Variant} value The value to search for.
     * @return {int} The index of the value if found, -1 if not.
     */
    indexOf: function (values, value) {
      "use strict";

      if (values.indexOf) {
        return values.indexOf(value);
      } else {
        for (var i = 0, len = values.length; i < len; i++) {
          if (values[i] === value) {
            return i;
          }
        }
        return -1;
      }
    },
    /*
     * Polyfill for array forEach() method.
     * @param {Array} values The array to operate on.
     * @param {Function} func The function to call on each item.
     * @return {void}
     */
    forEach: function (values, func) {
      "use strict";

      if (values.forEach) {
        return values.forEach(func);
      } else {
        for (var i = 0, len = values.length; i < len; i++) {
          func(values[i], i, values);
        }
      }
    }
  };

  /*
   * Rule: Don't use adjoining classes (.foo.bar).
   */

  CSSLint.addRule({
    // rule information
    id: "adjoining-classes",
    name: "Disallow adjoining classes",
    desc: "Don't use adjoining classes.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-adjoining-classes",
    browsers: "IE6",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          classCount,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              classCount = 0;
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "class") {
                  classCount++;
                }
                if (classCount > 1) {
                  reporter.report("Adjoining classes: " + selectors[i].text, part.line, part.col, rule);
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Don't use width or height when using padding or border.
   */
  CSSLint.addRule({
    // rule information
    id: "box-model",
    name: "Beware of broken box size",
    desc: "Don't use width or height when using padding or border.",
    url: "https://github.com/CSSLint/csslint/wiki/Beware-of-box-model-size",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        widthProperties = {
          border: 1,
          "border-left": 1,
          "border-right": 1,
          padding: 1,
          "padding-left": 1,
          "padding-right": 1
        },
        heightProperties = {
          border: 1,
          "border-bottom": 1,
          "border-top": 1,
          padding: 1,
          "padding-bottom": 1,
          "padding-top": 1
        },
        properties,
        boxSizing = false;
      function startRule() {
        properties = {};
        boxSizing = false;
      }
      function endRule() {
        var prop, value;
        if (!boxSizing) {
          if (properties.height) {
            for (prop in heightProperties) {
              if (heightProperties.hasOwnProperty(prop) && properties[prop]) {
                value = properties[prop].value;
                // special case for padding
                if (!(prop === "padding" && value.parts.length === 2 && value.parts[0].value === 0)) {
                  reporter.report("Using height with " + prop + " can sometimes make elements larger than you expect.", properties[prop].line, properties[prop].col, rule);
                }
              }
            }
          }
          if (properties.width) {
            for (prop in widthProperties) {
              if (widthProperties.hasOwnProperty(prop) && properties[prop]) {
                value = properties[prop].value;
                if (!(prop === "padding" && value.parts.length === 2 && value.parts[1].value === 0)) {
                  reporter.report("Using width with " + prop + " can sometimes make elements larger than you expect.", properties[prop].line, properties[prop].col, rule);
                }
              }
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (heightProperties[name] || widthProperties[name]) {
          if (!/^0\S*$/.test(event.value) && !(name === "border" && event.value.toString() === "none")) {
            properties[name] = {
              line: event.property.line,
              col: event.property.col,
              value: event.value
            };
          }
        } else {
          if (/^(width|height)/i.test(name) && /^(length|percentage)/.test(event.value.parts[0].type)) {
            properties[name] = 1;
          } else if (name === "box-sizing") {
            boxSizing = true;
          }
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: box-sizing doesn't work in IE6 and IE7.
   */

  CSSLint.addRule({
    // rule information
    id: "box-sizing",
    name: "Disallow use of box-sizing",
    desc: "The box-sizing properties isn't supported in IE6 and IE7.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-box-sizing",
    browsers: "IE6, IE7",
    tags: ["Compatibility"],
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (name === "box-sizing") {
          reporter.report("The box-sizing property isn't supported in IE6 and IE7.", event.line, event.col, rule);
        }
      });
    }
  });

  /*
   * Rule: Use the bulletproof @font-face syntax to avoid 404's in old IE
   * (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax)
   */

  CSSLint.addRule({
    // rule information
    id: "bulletproof-font-face",
    name: "Use the bulletproof @font-face syntax",
    desc: "Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).",
    url: "https://github.com/CSSLint/csslint/wiki/Bulletproof-font-face",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        fontFaceRule = false,
        firstSrc = true,
        ruleFailed = false,
        line,
        col;

      // Mark the start of a @font-face declaration so we only test properties inside it
      parser.addListener("startfontface", function () {
        fontFaceRule = true;
      });
      parser.addListener("property", function (event) {
        // If we aren't inside an @font-face declaration then just return
        if (!fontFaceRule) {
          return;
        }
        var propertyName = event.property.toString().toLowerCase(),
          value = event.value.toString();

        // Set the line and col numbers for use in the endfontface listener
        line = event.line;
        col = event.col;

        // This is the property that we care about, we can ignore the rest
        if (propertyName === "src") {
          var regex = /^\s?url\(['"].+\.eot\?.*['"]\)\s*format\(['"]embedded-opentype['"]\).*$/i;

          // We need to handle the advanced syntax with two src properties
          if (!value.match(regex) && firstSrc) {
            ruleFailed = true;
            firstSrc = false;
          } else if (value.match(regex) && !firstSrc) {
            ruleFailed = false;
          }
        }
      });

      // Back to normal rules that we don't need to test
      parser.addListener("endfontface", function () {
        fontFaceRule = false;
        if (ruleFailed) {
          reporter.report("@font-face declaration doesn't follow the fontspring bulletproof syntax.", line, col, rule);
        }
      });
    }
  });

  /*
   * Rule: Include all compatible vendor prefixes to reach a wider
   * range of users.
   */

  CSSLint.addRule({
    // rule information
    id: "compatible-vendor-prefixes",
    name: "Require compatible vendor prefixes",
    desc: "Include all compatible vendor prefixes to reach a wider range of users.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-compatible-vendor-prefixes",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        compatiblePrefixes,
        properties,
        prop,
        variations,
        prefixed,
        i,
        len,
        inKeyFrame = false,
        arrayPush = Array.prototype.push,
        applyTo = [];

      // See http://peter.sh/experiments/vendor-prefixed-css-property-overview/ for details
      compatiblePrefixes = {
        "animation": "webkit",
        "animation-delay": "webkit",
        "animation-direction": "webkit",
        "animation-duration": "webkit",
        "animation-fill-mode": "webkit",
        "animation-iteration-count": "webkit",
        "animation-name": "webkit",
        "animation-play-state": "webkit",
        "animation-timing-function": "webkit",
        "appearance": "webkit moz",
        "border-end": "webkit moz",
        "border-end-color": "webkit moz",
        "border-end-style": "webkit moz",
        "border-end-width": "webkit moz",
        "border-image": "webkit moz o",
        "border-radius": "webkit",
        "border-start": "webkit moz",
        "border-start-color": "webkit moz",
        "border-start-style": "webkit moz",
        "border-start-width": "webkit moz",
        "box-align": "webkit moz ms",
        "box-direction": "webkit moz ms",
        "box-flex": "webkit moz ms",
        "box-lines": "webkit ms",
        "box-ordinal-group": "webkit moz ms",
        "box-orient": "webkit moz ms",
        "box-pack": "webkit moz ms",
        "box-sizing": "",
        "box-shadow": "",
        "column-count": "webkit moz ms",
        "column-gap": "webkit moz ms",
        "column-rule": "webkit moz ms",
        "column-rule-color": "webkit moz ms",
        "column-rule-style": "webkit moz ms",
        "column-rule-width": "webkit moz ms",
        "column-width": "webkit moz ms",
        "hyphens": "epub moz",
        "line-break": "webkit ms",
        "margin-end": "webkit moz",
        "margin-start": "webkit moz",
        "marquee-speed": "webkit wap",
        "marquee-style": "webkit wap",
        "padding-end": "webkit moz",
        "padding-start": "webkit moz",
        "tab-size": "moz o",
        "text-size-adjust": "webkit ms",
        "transform": "webkit ms",
        "transform-origin": "webkit ms",
        "transition": "",
        "transition-delay": "",
        "transition-duration": "",
        "transition-property": "",
        "transition-timing-function": "",
        "user-modify": "webkit moz",
        "user-select": "webkit moz ms",
        "word-break": "epub ms",
        "writing-mode": "epub ms"
      };
      for (prop in compatiblePrefixes) {
        if (compatiblePrefixes.hasOwnProperty(prop)) {
          variations = [];
          prefixed = compatiblePrefixes[prop].split(" ");
          for (i = 0, len = prefixed.length; i < len; i++) {
            variations.push("-" + prefixed[i] + "-" + prop);
          }
          compatiblePrefixes[prop] = variations;
          arrayPush.apply(applyTo, variations);
        }
      }
      parser.addListener("startrule", function () {
        properties = [];
      });
      parser.addListener("startkeyframes", function (event) {
        inKeyFrame = event.prefix || true;
      });
      parser.addListener("endkeyframes", function () {
        inKeyFrame = false;
      });
      parser.addListener("property", function (event) {
        var name = event.property;
        if (CSSLint.Util.indexOf(applyTo, name.text) > -1) {
          // e.g., -moz-transform is okay to be alone in @-moz-keyframes
          if (!inKeyFrame || typeof inKeyFrame !== "string" || name.text.indexOf("-" + inKeyFrame + "-") !== 0) {
            properties.push(name);
          }
        }
      });
      parser.addListener("endrule", function () {
        if (!properties.length) {
          return;
        }
        var propertyGroups = {},
          i,
          len,
          name,
          prop,
          variations,
          value,
          full,
          actual,
          item,
          propertiesSpecified;
        for (i = 0, len = properties.length; i < len; i++) {
          name = properties[i];
          for (prop in compatiblePrefixes) {
            if (compatiblePrefixes.hasOwnProperty(prop)) {
              variations = compatiblePrefixes[prop];
              if (CSSLint.Util.indexOf(variations, name.text) > -1) {
                if (!propertyGroups[prop]) {
                  propertyGroups[prop] = {
                    full: variations.slice(0),
                    actual: [],
                    actualNodes: []
                  };
                }
                if (CSSLint.Util.indexOf(propertyGroups[prop].actual, name.text) === -1) {
                  propertyGroups[prop].actual.push(name.text);
                  propertyGroups[prop].actualNodes.push(name);
                }
              }
            }
          }
        }
        for (prop in propertyGroups) {
          if (propertyGroups.hasOwnProperty(prop)) {
            value = propertyGroups[prop];
            full = value.full;
            actual = value.actual;
            if (full.length > actual.length) {
              for (i = 0, len = full.length; i < len; i++) {
                item = full[i];
                if (CSSLint.Util.indexOf(actual, item) === -1) {
                  propertiesSpecified = actual.length === 1 ? actual[0] : actual.length === 2 ? actual.join(" and ") : actual.join(", ");
                  reporter.report("The property " + item + " is compatible with " + propertiesSpecified + " and should be included as well.", value.actualNodes[0].line, value.actualNodes[0].col, rule);
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Certain properties don't play well with certain display values.
   * - float should not be used with inline-block
   * - height, width, margin-top, margin-bottom, float should not be used with inline
   * - vertical-align should not be used with block
   * - margin, float should not be used with table-*
   */

  CSSLint.addRule({
    // rule information
    id: "display-property-grouping",
    name: "Require properties appropriate for display",
    desc: "Certain properties shouldn't be used with certain display property values.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      var propertiesToCheck = {
          display: 1,
          "float": "none",
          height: 1,
          width: 1,
          margin: 1,
          "margin-left": 1,
          "margin-right": 1,
          "margin-bottom": 1,
          "margin-top": 1,
          padding: 1,
          "padding-left": 1,
          "padding-right": 1,
          "padding-bottom": 1,
          "padding-top": 1,
          "vertical-align": 1
        },
        properties;
      function reportProperty(name, display, msg) {
        if (properties[name]) {
          if (typeof propertiesToCheck[name] !== "string" || properties[name].value.toLowerCase() !== propertiesToCheck[name]) {
            reporter.report(msg || name + " can't be used with display: " + display + ".", properties[name].line, properties[name].col, rule);
          }
        }
      }
      function startRule() {
        properties = {};
      }
      function endRule() {
        var display = properties.display ? properties.display.value : null;
        if (display) {
          switch (display) {
            case "inline":
              // height, width, margin-top, margin-bottom, float should not be used with inline
              reportProperty("height", display);
              reportProperty("width", display);
              reportProperty("margin", display);
              reportProperty("margin-top", display);
              reportProperty("margin-bottom", display);
              reportProperty("float", display, "display:inline has no effect on floated elements (but may be used to fix the IE6 double-margin bug).");
              break;
            case "block":
              // vertical-align should not be used with block
              reportProperty("vertical-align", display);
              break;
            case "inline-block":
              // float should not be used with inline-block
              reportProperty("float", display);
              break;
            default:
              // margin, float should not be used with table
              if (display.indexOf("table-") === 0) {
                reportProperty("margin", display);
                reportProperty("margin-left", display);
                reportProperty("margin-right", display);
                reportProperty("margin-top", display);
                reportProperty("margin-bottom", display);
                reportProperty("float", display);
              }

            // otherwise do nothing
          }
        }
      }

      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (propertiesToCheck[name]) {
          properties[name] = {
            value: event.value.text,
            line: event.property.line,
            col: event.property.col
          };
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: Disallow duplicate background-images (using url).
   */

  CSSLint.addRule({
    // rule information
    id: "duplicate-background-images",
    name: "Disallow duplicate background images",
    desc: "Every background-image should be unique. Use a common class for e.g. sprites.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-background-images",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        stack = {};
      parser.addListener("property", function (event) {
        var name = event.property.text,
          value = event.value,
          i,
          len;
        if (name.match(/background/i)) {
          for (i = 0, len = value.parts.length; i < len; i++) {
            if (value.parts[i].type === "uri") {
              if (typeof stack[value.parts[i].uri] === "undefined") {
                stack[value.parts[i].uri] = event;
              } else {
                reporter.report("Background image '" + value.parts[i].uri + "' was used multiple times, first declared at line " + stack[value.parts[i].uri].line + ", col " + stack[value.parts[i].uri].col + ".", event.line, event.col, rule);
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Duplicate properties must appear one after the other. If an already-defined
   * property appears somewhere else in the rule, then it's likely an error.
   */

  CSSLint.addRule({
    // rule information
    id: "duplicate-properties",
    name: "Disallow duplicate properties",
    desc: "Duplicate properties must appear one after the other.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        properties,
        lastProperty;
      function startRule() {
        properties = {};
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var property = event.property,
          name = property.text.toLowerCase();
        if (properties[name] && (lastProperty !== name || properties[name] === event.value.text)) {
          reporter.report("Duplicate property '" + event.property + "' found.", event.line, event.col, rule);
        }
        properties[name] = event.value.text;
        lastProperty = name;
      });
    }
  });

  /*
   * Rule: Style rules without any properties defined should be removed.
   */

  CSSLint.addRule({
    // rule information
    id: "empty-rules",
    name: "Disallow empty rules",
    desc: "Rules without any properties specified should be removed.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-empty-rules",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startrule", function () {
        count = 0;
      });
      parser.addListener("property", function () {
        count++;
      });
      parser.addListener("endrule", function (event) {
        var selectors = event.selectors;
        if (count === 0) {
          reporter.report("Rule is empty.", selectors[0].line, selectors[0].col, rule);
        }
      });
    }
  });

  /*
   * Rule: There should be no syntax errors. (Duh.)
   */

  CSSLint.addRule({
    // rule information
    id: "errors",
    name: "Parsing Errors",
    desc: "This rule looks for recoverable syntax errors.",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("error", function (event) {
        reporter.error(event.message, event.line, event.col, rule);
      });
    }
  });
  CSSLint.addRule({
    // rule information
    id: "fallback-colors",
    name: "Require fallback colors",
    desc: "For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-fallback-colors",
    browsers: "IE6,IE7,IE8",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        lastProperty,
        propertiesToCheck = {
          color: 1,
          background: 1,
          "border-color": 1,
          "border-top-color": 1,
          "border-right-color": 1,
          "border-bottom-color": 1,
          "border-left-color": 1,
          border: 1,
          "border-top": 1,
          "border-right": 1,
          "border-bottom": 1,
          "border-left": 1,
          "background-color": 1
        };
      function startRule() {
        lastProperty = null;
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var property = event.property,
          name = property.text.toLowerCase(),
          parts = event.value.parts,
          i = 0,
          colorType = "",
          len = parts.length;
        if (propertiesToCheck[name]) {
          while (i < len) {
            if (parts[i].type === "color") {
              if ("alpha" in parts[i] || "hue" in parts[i]) {
                if (/([^\)]+)\(/.test(parts[i])) {
                  colorType = RegExp.$1.toUpperCase();
                }
                if (!lastProperty || lastProperty.property.text.toLowerCase() !== name || lastProperty.colorType !== "compat") {
                  reporter.report("Fallback " + name + " (hex or RGB) should precede " + colorType + " " + name + ".", event.line, event.col, rule);
                }
              } else {
                event.colorType = "compat";
              }
            }
            i++;
          }
        }
        lastProperty = event;
      });
    }
  });

  /*
   * Rule: You shouldn't use more than 10 floats. If you do, there's probably
   * room for some abstraction.
   */

  CSSLint.addRule({
    // rule information
    id: "floats",
    name: "Disallow too many floats",
    desc: "This rule tests if the float property is used too many times",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-too-many-floats",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      var count = 0;

      // count how many times "float" is used
      parser.addListener("property", function (event) {
        if (event.property.text.toLowerCase() === "float" && event.value.text.toLowerCase() !== "none") {
          count++;
        }
      });

      // report the results
      parser.addListener("endstylesheet", function () {
        reporter.stat("floats", count);
        if (count >= 10) {
          reporter.rollupWarn("Too many floats (" + count + "), you're probably using them for layout. Consider using a grid system instead.", rule);
        }
      });
    }
  });

  /*
   * Rule: Avoid too many @font-face declarations in the same stylesheet.
   */

  CSSLint.addRule({
    // rule information
    id: "font-faces",
    name: "Don't use too many web fonts",
    desc: "Too many different web fonts in the same stylesheet.",
    url: "https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-web-fonts",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startfontface", function () {
        count++;
      });
      parser.addListener("endstylesheet", function () {
        if (count > 5) {
          reporter.rollupWarn("Too many @font-face declarations (" + count + ").", rule);
        }
      });
    }
  });

  /*
   * Rule: You shouldn't need more than 9 font-size declarations.
   */

  CSSLint.addRule({
    // rule information
    id: "font-sizes",
    name: "Disallow too many font sizes",
    desc: "Checks the number of font-size declarations.",
    url: "https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-font-size-declarations",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;

      // check for use of "font-size"
      parser.addListener("property", function (event) {
        if (event.property.toString() === "font-size") {
          count++;
        }
      });

      // report the results
      parser.addListener("endstylesheet", function () {
        reporter.stat("font-sizes", count);
        if (count >= 10) {
          reporter.rollupWarn("Too many font-size declarations (" + count + "), abstraction needed.", rule);
        }
      });
    }
  });

  /*
   * Rule: When using a vendor-prefixed gradient, make sure to use them all.
   */

  CSSLint.addRule({
    // rule information
    id: "gradients",
    name: "Require all gradient definitions",
    desc: "When using a vendor-prefixed gradient, make sure to use them all.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-all-gradient-definitions",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        gradients;
      parser.addListener("startrule", function () {
        gradients = {
          moz: 0,
          webkit: 0,
          oldWebkit: 0,
          o: 0
        };
      });
      parser.addListener("property", function (event) {
        if (/\-(moz|o|webkit)(?:\-(?:linear|radial))\-gradient/i.test(event.value)) {
          gradients[RegExp.$1] = 1;
        } else if (/\-webkit\-gradient/i.test(event.value)) {
          gradients.oldWebkit = 1;
        }
      });
      parser.addListener("endrule", function (event) {
        var missing = [];
        if (!gradients.moz) {
          missing.push("Firefox 3.6+");
        }
        if (!gradients.webkit) {
          missing.push("Webkit (Safari 5+, Chrome)");
        }
        if (!gradients.oldWebkit) {
          missing.push("Old Webkit (Safari 4+, Chrome)");
        }
        if (!gradients.o) {
          missing.push("Opera 11.1+");
        }
        if (missing.length && missing.length < 4) {
          reporter.report("Missing vendor-prefixed CSS gradients for " + missing.join(", ") + ".", event.selectors[0].line, event.selectors[0].col, rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use IDs for selectors.
   */

  CSSLint.addRule({
    // rule information
    id: "ids",
    name: "Disallow IDs in selectors",
    desc: "Selectors should not contain IDs.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          idCount,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          idCount = 0;
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "id") {
                  idCount++;
                }
              }
            }
          }
          if (idCount === 1) {
            reporter.report("Don't use IDs in selectors.", selector.line, selector.col, rule);
          } else if (idCount > 1) {
            reporter.report(idCount + " IDs in the selector, really?", selector.line, selector.col, rule);
          }
        }
      });
    }
  });

  /*
   * Rule: IE6-9 supports up to 31 stylesheet import.
   * Reference:
   * http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/internet-explorer-stylesheet-rule-selector-import-sheet-limit-maximum.aspx
   */

  CSSLint.addRule({
    // rule information
    id: "import-ie-limit",
    name: "@import limit on IE6-IE9",
    desc: "IE6-9 supports up to 31 @import per stylesheet",
    browsers: "IE6, IE7, IE8, IE9",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        MAX_IMPORT_COUNT = 31,
        count = 0;
      function startPage() {
        count = 0;
      }
      parser.addListener("startpage", startPage);
      parser.addListener("import", function () {
        count++;
      });
      parser.addListener("endstylesheet", function () {
        if (count > MAX_IMPORT_COUNT) {
          reporter.rollupError("Too many @import rules (" + count + "). IE6-9 supports up to 31 import per stylesheet.", rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use @import, use <link> instead.
   */

  CSSLint.addRule({
    // rule information
    id: "import",
    name: "Disallow @import",
    desc: "Don't use @import, use <link> instead.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-%40import",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("import", function (event) {
        reporter.report("@import prevents parallel downloads, use <link> instead.", event.line, event.col, rule);
      });
    }
  });

  /*
   * Rule: Make sure !important is not overused, this could lead to specificity
   * war. Display a warning on !important declarations, an error if it's
   * used more at least 10 times.
   */

  CSSLint.addRule({
    // rule information
    id: "important",
    name: "Disallow !important",
    desc: "Be careful when using !important declaration",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-%21important",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;

      // warn that important is used and increment the declaration counter
      parser.addListener("property", function (event) {
        if (event.important === true) {
          count++;
          reporter.report("Use of !important", event.line, event.col, rule);
        }
      });

      // if there are more than 10, show an error
      parser.addListener("endstylesheet", function () {
        reporter.stat("important", count);
        if (count >= 10) {
          reporter.rollupWarn("Too many !important declarations (" + count + "), try to use less than 10 to avoid specificity issues.", rule);
        }
      });
    }
  });

  /*
   * Rule: Properties should be known (listed in CSS3 specification) or
   * be a vendor-prefixed property.
   */

  CSSLint.addRule({
    // rule information
    id: "known-properties",
    name: "Require use of known properties",
    desc: "Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-use-of-known-properties",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("property", function (event) {
        // the check is handled entirely by the parser-lib (https://github.com/nzakas/parser-lib)
        if (event.invalid) {
          reporter.report(event.invalid.message, event.line, event.col, rule);
        }
      });
    }
  });

  /*
   * Rule: All properties should be in alphabetical order.
   */

  CSSLint.addRule({
    // rule information
    id: "order-alphabetical",
    name: "Alphabetical order",
    desc: "Assure properties are in alphabetical order",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        properties;
      var startRule = function () {
        properties = [];
      };
      var endRule = function (event) {
        var currentProperties = properties.join(","),
          expectedProperties = properties.sort().join(",");
        if (currentProperties !== expectedProperties) {
          reporter.report("Rule doesn't have all its properties in alphabetical order.", event.line, event.col, rule);
        }
      };
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text,
          lowerCasePrefixLessName = name.toLowerCase().replace(/^-.*?-/, "");
        properties.push(lowerCasePrefixLessName);
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: outline: none or outline: 0 should only be used in a :focus rule
   *       and only if there are other properties in the same rule.
   */

  CSSLint.addRule({
    // rule information
    id: "outline-none",
    name: "Disallow outline: none",
    desc: "Use of outline: none or outline: 0 should be limited to :focus rules.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-outline%3Anone",
    browsers: "All",
    tags: ["Accessibility"],
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        lastRule;
      function startRule(event) {
        if (event.selectors) {
          lastRule = {
            line: event.line,
            col: event.col,
            selectors: event.selectors,
            propCount: 0,
            outline: false
          };
        } else {
          lastRule = null;
        }
      }
      function endRule() {
        if (lastRule) {
          if (lastRule.outline) {
            if (lastRule.selectors.toString().toLowerCase().indexOf(":focus") === -1) {
              reporter.report("Outlines should only be modified using :focus.", lastRule.line, lastRule.col, rule);
            } else if (lastRule.propCount === 1) {
              reporter.report("Outlines shouldn't be hidden unless other visual changes are made.", lastRule.line, lastRule.col, rule);
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase(),
          value = event.value;
        if (lastRule) {
          lastRule.propCount++;
          if (name === "outline" && (value.toString() === "none" || value.toString() === "0")) {
            lastRule.outline = true;
          }
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: Don't use classes or IDs with elements (a.foo or a#foo).
   */

  CSSLint.addRule({
    // rule information
    id: "overqualified-elements",
    name: "Disallow overqualified elements",
    desc: "Don't use classes or IDs with elements (a.foo or a#foo).",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        classes = {};
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (part.elementName && modifier.type === "id") {
                  reporter.report("Element (" + part + ") is overqualified, just use " + modifier + " without element name.", part.line, part.col, rule);
                } else if (modifier.type === "class") {
                  if (!classes[modifier]) {
                    classes[modifier] = [];
                  }
                  classes[modifier].push({
                    modifier: modifier,
                    part: part
                  });
                }
              }
            }
          }
        }
      });
      parser.addListener("endstylesheet", function () {
        var prop;
        for (prop in classes) {
          if (classes.hasOwnProperty(prop)) {
            // one use means that this is overqualified
            if (classes[prop].length === 1 && classes[prop][0].part.elementName) {
              reporter.report("Element (" + classes[prop][0].part + ") is overqualified, just use " + classes[prop][0].modifier + " without element name.", classes[prop][0].part.line, classes[prop][0].part.col, rule);
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Headings (h1-h6) should not be qualified (namespaced).
   */

  CSSLint.addRule({
    // rule information
    id: "qualified-headings",
    name: "Disallow qualified headings",
    desc: "Headings should not be qualified (namespaced).",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-qualified-headings",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          i,
          j;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              if (part.elementName && /h[1-6]/.test(part.elementName.toString()) && j > 0) {
                reporter.report("Heading (" + part.elementName + ") should not be qualified.", part.line, part.col, rule);
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Selectors that look like regular expressions are slow and should be avoided.
   */

  CSSLint.addRule({
    // rule information
    id: "regex-selectors",
    name: "Disallow selectors that look like regexs",
    desc: "Selectors that look like regular expressions are slow and should be avoided.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-selectors-that-look-like-regular-expressions",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "attribute") {
                  if (/([~\|\^\$\*]=)/.test(modifier)) {
                    reporter.report("Attribute selectors with " + RegExp.$1 + " are slow!", modifier.line, modifier.col, rule);
                  }
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Total number of rules should not exceed x.
   */

  CSSLint.addRule({
    // rule information
    id: "rules-count",
    name: "Rules Count",
    desc: "Track how many rules there are.",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var count = 0;

      // count each rule
      parser.addListener("startrule", function () {
        count++;
      });
      parser.addListener("endstylesheet", function () {
        reporter.stat("rule-count", count);
      });
    }
  });

  /*
   * Rule: Warn people with approaching the IE 4095 limit
   */

  CSSLint.addRule({
    // rule information
    id: "selector-max-approaching",
    name: "Warn when approaching the 4095 selector limit for IE",
    desc: "Will warn when selector count is >= 3800 selectors.",
    browsers: "IE",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startrule", function (event) {
        count += event.selectors.length;
      });
      parser.addListener("endstylesheet", function () {
        if (count >= 3800) {
          reporter.report("You have " + count + " selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.", 0, 0, rule);
        }
      });
    }
  });

  /*
   * Rule: Warn people past the IE 4095 limit
   */

  CSSLint.addRule({
    // rule information
    id: "selector-max",
    name: "Error when past the 4095 selector limit for IE",
    desc: "Will error when selector count is > 4095.",
    browsers: "IE",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startrule", function (event) {
        count += event.selectors.length;
      });
      parser.addListener("endstylesheet", function () {
        if (count > 4095) {
          reporter.report("You have " + count + " selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.", 0, 0, rule);
        }
      });
    }
  });

  /*
   * Rule: Avoid new-line characters in selectors.
   */

  CSSLint.addRule({
    // rule information
    id: "selector-newline",
    name: "Disallow new-line characters in selectors",
    desc: "New-line characters in selectors are usually a forgotten comma and not a descendant combinator.",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      function startRule(event) {
        var i,
          len,
          selector,
          p,
          n,
          pLen,
          part,
          part2,
          type,
          currentLine,
          nextLine,
          selectors = event.selectors;
        for (i = 0, len = selectors.length; i < len; i++) {
          selector = selectors[i];
          for (p = 0, pLen = selector.parts.length; p < pLen; p++) {
            for (n = p + 1; n < pLen; n++) {
              part = selector.parts[p];
              part2 = selector.parts[n];
              type = part.type;
              currentLine = part.line;
              nextLine = part2.line;
              if (type === "descendant" && nextLine > currentLine) {
                reporter.report("newline character found in selector (forgot a comma?)", currentLine, selectors[i].parts[0].col, rule);
              }
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
    }
  });

  /*
   * Rule: Use shorthand properties where possible.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "shorthand",
    name: "Require shorthand properties",
    desc: "Use shorthand properties where possible.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-shorthand-properties",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        prop,
        i,
        len,
        propertiesToCheck = {},
        properties,
        mapping = {
          "margin": ["margin-top", "margin-bottom", "margin-left", "margin-right"],
          "padding": ["padding-top", "padding-bottom", "padding-left", "padding-right"]
        };

      // initialize propertiesToCheck
      for (prop in mapping) {
        if (mapping.hasOwnProperty(prop)) {
          for (i = 0, len = mapping[prop].length; i < len; i++) {
            propertiesToCheck[mapping[prop][i]] = prop;
          }
        }
      }
      function startRule() {
        properties = {};
      }

      // event handler for end of rules
      function endRule(event) {
        var prop, i, len, total;

        // check which properties this rule has
        for (prop in mapping) {
          if (mapping.hasOwnProperty(prop)) {
            total = 0;
            for (i = 0, len = mapping[prop].length; i < len; i++) {
              total += properties[mapping[prop][i]] ? 1 : 0;
            }
            if (total === mapping[prop].length) {
              reporter.report("The properties " + mapping[prop].join(", ") + " can be replaced by " + prop + ".", event.line, event.col, rule);
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);

      // check for use of "font-size"
      parser.addListener("property", function (event) {
        var name = event.property.toString().toLowerCase();
        if (propertiesToCheck[name]) {
          properties[name] = 1;
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
    }
  });

  /*
   * Rule: Don't use properties with a star prefix.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "star-property-hack",
    name: "Disallow properties with a star prefix",
    desc: "Checks for the star property hack (targets IE6/7)",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-star-hack",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;

      // check if property name starts with "*"
      parser.addListener("property", function (event) {
        var property = event.property;
        if (property.hack === "*") {
          reporter.report("Property with star prefix found.", event.property.line, event.property.col, rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use text-indent for image replacement if you need to support rtl.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "text-indent",
    name: "Disallow negative text-indent",
    desc: "Checks for text indent less than -99px",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-negative-text-indent",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        textIndent,
        direction;
      function startRule() {
        textIndent = false;
        direction = "inherit";
      }

      // event handler for end of rules
      function endRule() {
        if (textIndent && direction !== "ltr") {
          reporter.report("Negative text-indent doesn't work well with RTL. If you use text-indent for image replacement explicitly set direction for that item to ltr.", textIndent.line, textIndent.col, rule);
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);

      // check for use of "font-size"
      parser.addListener("property", function (event) {
        var name = event.property.toString().toLowerCase(),
          value = event.value;
        if (name === "text-indent" && value.parts[0].value < -99) {
          textIndent = event.property;
        } else if (name === "direction" && value.toString() === "ltr") {
          direction = "ltr";
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
    }
  });

  /*
   * Rule: Don't use properties with a underscore prefix.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "underscore-property-hack",
    name: "Disallow properties with an underscore prefix",
    desc: "Checks for the underscore property hack (targets IE6)",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-underscore-hack",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;

      // check if property name starts with "_"
      parser.addListener("property", function (event) {
        var property = event.property;
        if (property.hack === "_") {
          reporter.report("Property with underscore prefix found.", event.property.line, event.property.col, rule);
        }
      });
    }
  });

  /*
   * Rule: Headings (h1-h6) should be defined only once.
   */

  CSSLint.addRule({
    // rule information
    id: "unique-headings",
    name: "Headings should only be defined once",
    desc: "Headings should be defined only once.",
    url: "https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      var headings = {
        h1: 0,
        h2: 0,
        h3: 0,
        h4: 0,
        h5: 0,
        h6: 0
      };
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          pseudo,
          i,
          j;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          part = selector.parts[selector.parts.length - 1];
          if (part.elementName && /(h[1-6])/i.test(part.elementName.toString())) {
            for (j = 0; j < part.modifiers.length; j++) {
              if (part.modifiers[j].type === "pseudo") {
                pseudo = true;
                break;
              }
            }
            if (!pseudo) {
              headings[RegExp.$1]++;
              if (headings[RegExp.$1] > 1) {
                reporter.report("Heading (" + part.elementName + ") has already been defined.", part.line, part.col, rule);
              }
            }
          }
        }
      });
      parser.addListener("endstylesheet", function () {
        var prop,
          messages = [];
        for (prop in headings) {
          if (headings.hasOwnProperty(prop)) {
            if (headings[prop] > 1) {
              messages.push(headings[prop] + " " + prop + "s");
            }
          }
        }
        if (messages.length) {
          reporter.rollupWarn("You have " + messages.join(", ") + " defined in this stylesheet.", rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use universal selector because it's slow.
   */

  CSSLint.addRule({
    // rule information
    id: "universal-selector",
    name: "Disallow universal selector",
    desc: "The universal selector (*) is known to be slow.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          i;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          part = selector.parts[selector.parts.length - 1];
          if (part.elementName === "*") {
            reporter.report(rule.desc, part.line, part.col, rule);
          }
        }
      });
    }
  });

  /*
   * Rule: Don't use unqualified attribute selectors because they're just like universal selectors.
   */

  CSSLint.addRule({
    // rule information
    id: "unqualified-attributes",
    name: "Disallow unqualified attribute selectors",
    desc: "Unqualified attribute selectors are known to be slow.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selectorContainsClassOrId = false,
          selector,
          part,
          modifier,
          i,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          part = selector.parts[selector.parts.length - 1];
          if (part.type === parser.SELECTOR_PART_TYPE) {
            for (k = 0; k < part.modifiers.length; k++) {
              modifier = part.modifiers[k];
              if (modifier.type === "class" || modifier.type === "id") {
                selectorContainsClassOrId = true;
                break;
              }
            }
            if (!selectorContainsClassOrId) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "attribute" && (!part.elementName || part.elementName === "*")) {
                  reporter.report(rule.desc, part.line, part.col, rule);
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: When using a vendor-prefixed property, make sure to
   * include the standard one.
   */

  CSSLint.addRule({
    // rule information
    id: "vendor-prefix",
    name: "Require standard property with vendor prefix",
    desc: "When using a vendor-prefixed property, make sure to include the standard one.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        properties,
        num,
        propertiesToCheck = {
          "-webkit-border-radius": "border-radius",
          "-webkit-border-top-left-radius": "border-top-left-radius",
          "-webkit-border-top-right-radius": "border-top-right-radius",
          "-webkit-border-bottom-left-radius": "border-bottom-left-radius",
          "-webkit-border-bottom-right-radius": "border-bottom-right-radius",
          "-o-border-radius": "border-radius",
          "-o-border-top-left-radius": "border-top-left-radius",
          "-o-border-top-right-radius": "border-top-right-radius",
          "-o-border-bottom-left-radius": "border-bottom-left-radius",
          "-o-border-bottom-right-radius": "border-bottom-right-radius",
          "-moz-border-radius": "border-radius",
          "-moz-border-radius-topleft": "border-top-left-radius",
          "-moz-border-radius-topright": "border-top-right-radius",
          "-moz-border-radius-bottomleft": "border-bottom-left-radius",
          "-moz-border-radius-bottomright": "border-bottom-right-radius",
          "-moz-column-count": "column-count",
          "-webkit-column-count": "column-count",
          "-moz-column-gap": "column-gap",
          "-webkit-column-gap": "column-gap",
          "-moz-column-rule": "column-rule",
          "-webkit-column-rule": "column-rule",
          "-moz-column-rule-style": "column-rule-style",
          "-webkit-column-rule-style": "column-rule-style",
          "-moz-column-rule-color": "column-rule-color",
          "-webkit-column-rule-color": "column-rule-color",
          "-moz-column-rule-width": "column-rule-width",
          "-webkit-column-rule-width": "column-rule-width",
          "-moz-column-width": "column-width",
          "-webkit-column-width": "column-width",
          "-webkit-column-span": "column-span",
          "-webkit-columns": "columns",
          "-moz-box-shadow": "box-shadow",
          "-webkit-box-shadow": "box-shadow",
          "-moz-transform": "transform",
          "-webkit-transform": "transform",
          "-o-transform": "transform",
          "-ms-transform": "transform",
          "-moz-transform-origin": "transform-origin",
          "-webkit-transform-origin": "transform-origin",
          "-o-transform-origin": "transform-origin",
          "-ms-transform-origin": "transform-origin",
          "-moz-box-sizing": "box-sizing",
          "-webkit-box-sizing": "box-sizing"
        };

      // event handler for beginning of rules
      function startRule() {
        properties = {};
        num = 1;
      }

      // event handler for end of rules
      function endRule() {
        var prop,
          i,
          len,
          needed,
          actual,
          needsStandard = [];
        for (prop in properties) {
          if (propertiesToCheck[prop]) {
            needsStandard.push({
              actual: prop,
              needed: propertiesToCheck[prop]
            });
          }
        }
        for (i = 0, len = needsStandard.length; i < len; i++) {
          needed = needsStandard[i].needed;
          actual = needsStandard[i].actual;
          if (!properties[needed]) {
            reporter.report("Missing standard property '" + needed + "' to go along with '" + actual + "'.", properties[actual][0].name.line, properties[actual][0].name.col, rule);
          } else {
            // make sure standard property is last
            if (properties[needed][0].pos < properties[actual][0].pos) {
              reporter.report("Standard property '" + needed + "' should come after vendor-prefixed property '" + actual + "'.", properties[actual][0].name.line, properties[actual][0].name.col, rule);
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (!properties[name]) {
          properties[name] = [];
        }
        properties[name].push({
          name: event.property,
          value: event.value,
          pos: num++
        });
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: You don't need to specify units when a value is 0.
   */

  CSSLint.addRule({
    // rule information
    id: "zero-units",
    name: "Disallow units for 0 values",
    desc: "You don't need to specify units when a value is 0.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-units-for-zero-values",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;

      // count how many times "float" is used
      parser.addListener("property", function (event) {
        var parts = event.value.parts,
          i = 0,
          len = parts.length;
        while (i < len) {
          if ((parts[i].units || parts[i].type === "percentage") && parts[i].value === 0 && parts[i].type !== "time") {
            reporter.report("Values of 0 shouldn't have units specified.", parts[i].line, parts[i].col, rule);
          }
          i++;
        }
      });
    }
  });
  (function () {
    "use strict";

    /**
     * Replace special characters before write to output.
     *
     * Rules:
     *  - single quotes is the escape sequence for double-quotes
     *  - &amp; is the escape sequence for &
     *  - &lt; is the escape sequence for <
     *  - &gt; is the escape sequence for >
     *
     * @param {String} message to escape
     * @return escaped message as {String}
     */
    var xmlEscape = function (str) {
      if (!str || str.constructor !== String) {
        return "";
      }
      return str.replace(/["&><]/g, function (match) {
        switch (match) {
          case "\"":
            return "&quot;";
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
        }
      });
    };
    CSSLint.addFormatter({
      // format information
      id: "checkstyle-xml",
      name: "Checkstyle XML format",
      /**
       * Return opening root XML tag.
       * @return {String} to prepend before all results
       */
      startFormat: function () {
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?><checkstyle>";
      },
      /**
       * Return closing root XML tag.
       * @return {String} to append after all results
       */
      endFormat: function () {
        return "</checkstyle>";
      },
      /**
       * Returns message when there is a file read error.
       * @param {String} filename The name of the file that caused the error.
       * @param {String} message The error message
       * @return {String} The error message.
       */
      readError: function (filename, message) {
        return "<file name=\"" + xmlEscape(filename) + "\"><error line=\"0\" column=\"0\" severty=\"error\" message=\"" + xmlEscape(message) + "\"></error></file>";
      },
      /**
       * Given CSS Lint results for a file, return output for this format.
       * @param results {Object} with error and warning messages
       * @param filename {String} relative file path
       * @param options {Object} (UNUSED for now) specifies special handling of output
       * @return {String} output for results
       */
      formatResults: function (results, filename /*, options*/) {
        var messages = results.messages,
          output = [];

        /**
         * Generate a source string for a rule.
         * Checkstyle source strings usually resemble Java class names e.g
         * net.csslint.SomeRuleName
         * @param {Object} rule
         * @return rule source as {String}
         */
        var generateSource = function (rule) {
          if (!rule || !("name" in rule)) {
            return "";
          }
          return "net.csslint." + rule.name.replace(/\s/g, "");
        };
        if (messages.length > 0) {
          output.push("<file name=\"" + filename + "\">");
          CSSLint.Util.forEach(messages, function (message) {
            // ignore rollups for now
            if (!message.rollup) {
              output.push("<error line=\"" + message.line + "\" column=\"" + message.col + "\" severity=\"" + message.type + "\"" + " message=\"" + xmlEscape(message.message) + "\" source=\"" + generateSource(message.rule) + "\"/>");
            }
          });
          output.push("</file>");
        }
        return output.join("");
      }
    });
  })();
  CSSLint.addFormatter({
    // format information
    id: "compact",
    name: "Compact, 'porcelain' format",
    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename, options) {
      "use strict";

      var messages = results.messages,
        output = "";
      options = options || {};

      /**
       * Capitalize and return given string.
       * @param str {String} to capitalize
       * @return {String} capitalized
       */
      var capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      if (messages.length === 0) {
        return options.quiet ? "" : filename + ": Lint Free!";
      }
      CSSLint.Util.forEach(messages, function (message) {
        if (message.rollup) {
          output += filename + ": " + capitalize(message.type) + " - " + message.message + " (" + message.rule.id + ")\n";
        } else {
          output += filename + ": line " + message.line + ", col " + message.col + ", " + capitalize(message.type) + " - " + message.message + " (" + message.rule.id + ")\n";
        }
      });
      return output;
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "csslint-xml",
    name: "CSSLint XML format",
    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "<?xml version=\"1.0\" encoding=\"utf-8\"?><csslint>";
    },
    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "</csslint>";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename /*, options*/) {
      "use strict";

      var messages = results.messages,
        output = [];

      /**
       * Replace special characters before write to output.
       *
       * Rules:
       *  - single quotes is the escape sequence for double-quotes
       *  - &amp; is the escape sequence for &
       *  - &lt; is the escape sequence for <
       *  - &gt; is the escape sequence for >
       *
       * @param {String} message to escape
       * @return escaped message as {String}
       */
      var escapeSpecialCharacters = function (str) {
        if (!str || str.constructor !== String) {
          return "";
        }
        return str.replace(/"/g, "'").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      if (messages.length > 0) {
        output.push("<file name=\"" + filename + "\">");
        CSSLint.Util.forEach(messages, function (message) {
          if (message.rollup) {
            output.push("<issue severity=\"" + message.type + "\" reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          } else {
            output.push("<issue line=\"" + message.line + "\" char=\"" + message.col + "\" severity=\"" + message.type + "\"" + " reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          }
        });
        output.push("</file>");
      }
      return output.join("");
    }
  });

  /* globals JSON: true */

  CSSLint.addFormatter({
    // format information
    id: "json",
    name: "JSON",
    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      this.json = [];
      return "";
    },
    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      var ret = "";
      if (this.json.length > 0) {
        if (this.json.length === 1) {
          ret = JSON.stringify(this.json[0]);
        } else {
          ret = JSON.stringify(this.json);
        }
      }
      return ret;
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path (Unused)
     * @return {String} output for results
     */
    formatResults: function (results, filename, options) {
      "use strict";

      if (results.messages.length > 0 || !options.quiet) {
        this.json.push({
          filename: filename,
          messages: results.messages,
          stats: results.stats
        });
      }
      return "";
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "junit-xml",
    name: "JUNIT XML format",
    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "<?xml version=\"1.0\" encoding=\"utf-8\"?><testsuites>";
    },
    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "</testsuites>";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename /*, options*/) {
      "use strict";

      var messages = results.messages,
        output = [],
        tests = {
          "error": 0,
          "failure": 0
        };

      /**
       * Generate a source string for a rule.
       * JUNIT source strings usually resemble Java class names e.g
       * net.csslint.SomeRuleName
       * @param {Object} rule
       * @return rule source as {String}
       */
      var generateSource = function (rule) {
        if (!rule || !("name" in rule)) {
          return "";
        }
        return "net.csslint." + rule.name.replace(/\s/g, "");
      };

      /**
       * Replace special characters before write to output.
       *
       * Rules:
       *  - single quotes is the escape sequence for double-quotes
       *  - &lt; is the escape sequence for <
       *  - &gt; is the escape sequence for >
       *
       * @param {String} message to escape
       * @return escaped message as {String}
       */
      var escapeSpecialCharacters = function (str) {
        if (!str || str.constructor !== String) {
          return "";
        }
        return str.replace(/"/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      if (messages.length > 0) {
        messages.forEach(function (message) {
          // since junit has no warning class
          // all issues as errors
          var type = message.type === "warning" ? "error" : message.type;

          // ignore rollups for now
          if (!message.rollup) {
            // build the test case separately, once joined
            // we'll add it to a custom array filtered by type
            output.push("<testcase time=\"0\" name=\"" + generateSource(message.rule) + "\">");
            output.push("<" + type + " message=\"" + escapeSpecialCharacters(message.message) + "\"><![CDATA[" + message.line + ":" + message.col + ":" + escapeSpecialCharacters(message.evidence) + "]]></" + type + ">");
            output.push("</testcase>");
            tests[type] += 1;
          }
        });
        output.unshift("<testsuite time=\"0\" tests=\"" + messages.length + "\" skipped=\"0\" errors=\"" + tests.error + "\" failures=\"" + tests.failure + "\" package=\"net.csslint\" name=\"" + filename + "\">");
        output.push("</testsuite>");
      }
      return output.join("");
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "lint-xml",
    name: "Lint XML format",
    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "<?xml version=\"1.0\" encoding=\"utf-8\"?><lint>";
    },
    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "</lint>";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename /*, options*/) {
      "use strict";

      var messages = results.messages,
        output = [];

      /**
       * Replace special characters before write to output.
       *
       * Rules:
       *  - single quotes is the escape sequence for double-quotes
       *  - &amp; is the escape sequence for &
       *  - &lt; is the escape sequence for <
       *  - &gt; is the escape sequence for >
       *
       * @param {String} message to escape
       * @return escaped message as {String}
       */
      var escapeSpecialCharacters = function (str) {
        if (!str || str.constructor !== String) {
          return "";
        }
        return str.replace(/"/g, "'").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      if (messages.length > 0) {
        output.push("<file name=\"" + filename + "\">");
        CSSLint.Util.forEach(messages, function (message) {
          if (message.rollup) {
            output.push("<issue severity=\"" + message.type + "\" reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          } else {
            var rule = "";
            if (message.rule && message.rule.id) {
              rule = "rule=\"" + escapeSpecialCharacters(message.rule.id) + "\" ";
            }
            output.push("<issue " + rule + "line=\"" + message.line + "\" char=\"" + message.col + "\" severity=\"" + message.type + "\"" + " reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          }
        });
        output.push("</file>");
      }
      return output.join("");
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "text",
    name: "Plain Text",
    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename, options) {
      "use strict";

      var messages = results.messages,
        output = "";
      options = options || {};
      if (messages.length === 0) {
        return options.quiet ? "" : "\n\ncsslint: No errors in " + filename + ".";
      }
      output = "\n\ncsslint: There ";
      if (messages.length === 1) {
        output += "is 1 problem";
      } else {
        output += "are " + messages.length + " problems";
      }
      output += " in " + filename + ".";
      var pos = filename.lastIndexOf("/"),
        shortFilename = filename;
      if (pos === -1) {
        pos = filename.lastIndexOf("\\");
      }
      if (pos > -1) {
        shortFilename = filename.substring(pos + 1);
      }
      CSSLint.Util.forEach(messages, function (message, i) {
        output = output + "\n\n" + shortFilename;
        if (message.rollup) {
          output += "\n" + (i + 1) + ": " + message.type;
          output += "\n" + message.message;
        } else {
          output += "\n" + (i + 1) + ": " + message.type + " at line " + message.line + ", col " + message.col;
          output += "\n" + message.message;
          output += "\n" + message.evidence;
        }
      });
      return output;
    }
  });
  return CSSLint;
}();

/***/ })

}]);
//# sourceMappingURL=src_Settings_Settings_js.js.map