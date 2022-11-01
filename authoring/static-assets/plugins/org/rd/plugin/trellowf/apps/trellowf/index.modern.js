var { useLayoutEffect, useEffect, useRef, useCallback, useMemo, forwardRef, useContext, createContext, createElement, Fragment: Fragment$1, Children, isValidElement, cloneElement, useState, useImperativeHandle, Suspense: Suspense$1 } = craftercms.libs.React;
var React = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var _utils = craftercms.libs.MaterialUI && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI, 'default') ? craftercms.libs.MaterialUI['default'] : craftercms.libs.MaterialUI;
var { Skeleton, Tooltip, useTheme: useTheme$3, Dialog, DialogTitle, Typography: Typography$1, IconButton: IconButton$1, Grid, Card, CardHeader, Paper, Box } = craftercms.libs.MaterialUI;
var { createIntl, createIntlCache, useIntl } = craftercms.libs.ReactIntl;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var createSvgIcon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
});
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

var EditRounded = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(createSvgIcon);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'EditRounded');

exports.default = _default;
});

var EditRoundedIcon = /*@__PURE__*/getDefaultExportFromCjs(EditRounded);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function isPlainObject(item) {
  return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
  // @ts-expect-error
  item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends$1({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui-org/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return useCallback((...args) => // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}

function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const {
    target
  } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function useIsFocusVisible() {
  const ref = useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = useRef(false);
  /**
   * Should be called if a blur event is fired
   */

  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }

    return false;
  }
  /**
   * Should be called if a blur event is fired
   */


  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  }

  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }

        acc.push(getUtilityClass(key));
      }

      return acc;
    }, []).join(' ');
  });
  return output;
}

const defaultGenerator = componentName => componentName;

const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },

    generate(componentName) {
      return generate(componentName);
    },

    reset() {
      generate = defaultGenerator;
    }

  };
};

const ClassNameGenerator = createClassNameGenerator();

const globalStateClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected'
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || `${ClassNameGenerator.generate(componentName)}-${slot}`;
}

function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$2.apply(this, arguments);
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return (e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return "/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0;}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = N(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (R(character)) {
      break;
    }

    L();
  }

  return Q(begin, E);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R(character)) {
      case 0:
        // &\f
        if (character === 38 && N() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(E - 1, points, index);
        break;

      case 2:
        parsed[index] += V(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = L());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [ve];

var createCache = function createCache(options) {
  var key = options.key;

  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [fe,  le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [fe];

    var _serializer = oe(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return ie(ae(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h;var Element=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t$1;var Memo=r$1;var Portal=d$1;
var Profiler=g$1;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e$1};var isLazy=function(a){return z$1(a)===t$1};
var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d$1};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z$1;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$2 = typeof document !== 'undefined';

var EmotionCacheContext = /* #__PURE__ */createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$2) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */createContext({});

var _extends_1$1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};
var isBrowser$3 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/createElement(finalTag, newProps);

      if (!isBrowser$3 && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/createElement(Fragment$1, null, /*#__PURE__*/createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends$2({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

/** @license MUI v5.0.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled(tag, options) {
  const stylesFactory = newStyled(tag, options);

  return stylesFactory;
}

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screens

};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }

      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;

  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

    if (isBreakpointUnused) {
      delete acc[key];
    }

    return acc;
  }, style);
}

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function getValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }

  if (transform) {
    value = transform(value);
  }

  return value;
}

function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value = getValue(themeMapping, transform, propValueFinal);

      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  {};
  fn.filterProps = [prop];
  return fn;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes =  {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function memoize$1(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = memoize$1(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8);
}
function getValue$1(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue$1(transformer, propValue);
    return acc;
  }, {});
}

function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }

  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}

function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}

function spacing(props) {
  return style$1(props, spacingKeys);
}

spacing.propTypes =  {};
spacing.filterProps = spacingKeys;

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = style({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = style({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

    const styleFromPropValue = propValue => ({
      borderRadius: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes =  {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);

const displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = style({
  prop: 'display'
});
const overflow = style({
  prop: 'overflow'
});
const textOverflow = style({
  prop: 'textOverflow'
});
const visibility = style({
  prop: 'visibility'
});
const whiteSpace = style({
  prop: 'whiteSpace'
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

const flexBasis = style({
  prop: 'flexBasis'
});
const flexDirection = style({
  prop: 'flexDirection'
});
const flexWrap = style({
  prop: 'flexWrap'
});
const justifyContent = style({
  prop: 'justifyContent'
});
const alignItems = style({
  prop: 'alignItems'
});
const alignContent = style({
  prop: 'alignContent'
});
const order = style({
  prop: 'order'
});
const flex = style({
  prop: 'flex'
});
const flexGrow = style({
  prop: 'flexGrow'
});
const flexShrink = style({
  prop: 'flexShrink'
});
const alignSelf = style({
  prop: 'alignSelf'
});
const justifyItems = style({
  prop: 'justifyItems'
});
const justifySelf = style({
  prop: 'justifySelf'
});
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      gap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes =  {};
gap.filterProps = ['gap'];
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      columnGap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes =  {};
columnGap.filterProps = ['columnGap'];
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      rowGap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes =  {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style({
  prop: 'gridColumn'
});
const gridRow = style({
  prop: 'gridRow'
});
const gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
const gridArea = style({
  prop: 'gridArea'
});
const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

const color = style({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const backgroundColor = style({
  prop: 'backgroundColor',
  themeKey: 'palette'
});
const palette = compose(color, bgcolor, backgroundColor);

const position = style({
  prop: 'position'
});
const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const top = style({
  prop: 'top'
});
const right = style({
  prop: 'right'
});
const bottom = style({
  prop: 'bottom'
});
const left = style({
  prop: 'left'
});
var positions = compose(position, zIndex, top, right, bottom, left);

const boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});

function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

const width = style({
  prop: 'width',
  transform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style({
  prop: 'minWidth',
  transform
});
const height = style({
  prop: 'height',
  transform
});
const maxHeight = style({
  prop: 'maxHeight',
  transform
});
const minHeight = style({
  prop: 'minHeight',
  transform
});
const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = style({
  prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = style({
  prop: 'letterSpacing'
});
const lineHeight = style({
  prop: 'lineHeight'
});
const textAlign = style({
  prop: 'textAlign'
});
const typographyVariant = style({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

const filterPropsMapping = {
  borders: borders.filterProps,
  display: display.filterProps,
  flexbox: flexbox.filterProps,
  grid: grid.filterProps,
  positions: positions.filterProps,
  palette: palette.filterProps,
  shadows: boxShadow.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  typography: typography.filterProps
};
const styleFunctionMapping = {
  borders,
  display,
  flexbox,
  grid,
  positions,
  palette,
  shadows: boxShadow,
  sizing,
  spacing,
  typography
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  const {
    sx: styles,
    theme = {}
  } = props || {};

  if (!styles) {
    return null;
  }

  let stylesObject = styles;

  if (typeof styles === 'function') {
    stylesObject = styles(theme);
  } else if (typeof styles !== 'object') {
    // value
    return styles;
  }

  const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
  const breakpointsKeys = Object.keys(emptyBreakpoints);
  let css = emptyBreakpoints;
  Object.keys(stylesObject).forEach(styleKey => {
    const value = callIfFn(stylesObject[styleKey], theme);

    if (typeof value === 'object') {
      if (propToStyleFunction[styleKey]) {
        css = merge(css, getThemeValue(styleKey, value, theme));
      } else {
        const breakpointsValues = handleBreakpoints({
          theme
        }, value, x => ({
          [styleKey]: x
        }));

        if (objectsHaveSameKeys(breakpointsValues, value)) {
          css[styleKey] = styleFunctionSx({
            sx: value,
            theme
          });
        } else {
          css = merge(css, breakpointsValues);
        }
      }
    } else {
      css = merge(css, getThemeValue(styleKey, value, theme));
    }
  });
  return removeUnusedBreakpoints(breakpointsKeys, css);
}

styleFunctionSx.filterProps = ['sx'];

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["sx"];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = _objectWithoutPropertiesLoose$1(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  return _extends$3({}, otherProps, {
    sx: _extends$3({}, systemProps, inSx)
  });
}

const _excluded$1 = ["values", "unit", "step"];

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablets
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screens

    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$1);

  const keys = Object.keys(values);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  return _extends$3({
    keys,
    values,
    up,
    down,
    between,
    only,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};

/* tslint:enable:unified-signatures */
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = createUnarySpacing({
    spacing: spacingInput
  });

  const spacing = (...argsInput) => {

    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };

  spacing.mui = true;
  return spacing;
}

const _excluded$2 = ["breakpoints", "palette", "spacing", "shape"];

function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose$1(options, _excluded$2);

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends$3({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends$3({}, shape, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

const ThemeContext$1 = /*#__PURE__*/createContext(null);

function useTheme() {
  const theme = useContext(ThemeContext$1);

  return theme;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme$1(defaultTheme = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme = createTheme();

function useTheme$2(defaultTheme = systemDefaultTheme) {
  return useTheme$1(defaultTheme);
}

const _excluded$3 = ["variant"];

function isEmpty(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */


function propsToClassKey(props) {
  const {
    variant
  } = props,
        other = _objectWithoutPropertiesLoose$1(props, _excluded$3);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

const _excluded$4 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
      _excluded2 = ["theme"],
      _excluded3 = ["theme"];

function isEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}

const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

const getVariantStyles = (name, theme) => {
  let variants = [];

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }

  const variantsStyles = {};
  variants.forEach(definition => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

const variantsResolver = (props, styles, theme, name) => {
  var _theme$components, _theme$components$nam;

  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach(themeVariant => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach(key => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
};

function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme$1 = createTheme();

function createStyled$1(input = {}) {
  const {
    defaultTheme = systemDefaultTheme$1,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions,
          options = _objectWithoutPropertiesLoose$1(inputOptions, _excluded$4); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
    const skipSx = inputSkipSx || false;
    let label;

    let shouldForwardPropOption = shouldForwardProp;

    if (componentSlot === 'Root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    }

    const defaultStyledResolver = styled(tag, _extends$3({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        // On the server emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        // eslint-disable-next-line no-underscore-dangle
        return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? _ref => {
          let {
            theme: themeInput
          } = _ref,
              other = _objectWithoutPropertiesLoose$1(_ref, _excluded2);

          return stylesArg(_extends$3({
            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx(_extends$3({}, props, {
            theme
          }));
        });
      }

      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = _ref2 => {
          let {
            theme: themeInput
          } = _ref2,
              other = _objectWithoutPropertiesLoose$1(_ref2, _excluded3);

          return styleArg(_extends$3({
            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

      return Component;
    };

    return muiStyledResolver;
  };
}

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = _extends$3({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

function useThemeProps({
  props,
  name,
  defaultTheme
}) {
  const theme = useTheme$2(defaultTheme);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( formatMuiErrorMessage(9, color));
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }

    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }

  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }

  return `${type}(${values})`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

function createMixins(breakpoints, spacing, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

const common = {
  black: '#000',
  white: '#fff'
};

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};

const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};

const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};

const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};

const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};

const _excluded$5 = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }

  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}

function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }

  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}

function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }

  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}

function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }

  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}

function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }

  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}

function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700]
    };
  }

  return {
    main: '#ED6C02',
    // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900]
  };
}

function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = _objectWithoutPropertiesLoose(palette, _excluded$5);

  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    return contrastText;
  }

  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.hasOwnProperty('main')) {
      throw new Error( formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error( formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = {
    dark,
    light
  };

  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common,
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

const _excluded$6 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

const _excluded$7 = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}

function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }

  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);

  const mergedDuration = _extends({}, duration, inputTransitions.duration);

  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options,
          other = _objectWithoutPropertiesLoose(options, _excluded$7);

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };

  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex$1 = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

const _excluded$8 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function createTheme$1(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose(options, _excluded$8);

  const palette = createPalette(paletteInput);
  const systemTheme = createTheme(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

  return muiTheme;
}

const defaultTheme = createTheme$1();

const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
const styled$1 = createStyled$1({
  defaultTheme,
  rootShouldForwardProp
});

function useThemeProps$1({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme
  });
}

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$4.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var TransitionGroupContext = React.createContext(null);

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values$1 = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$4({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose$2(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values$1(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React.Component);

TransitionGroup.propTypes =  {};
TransitionGroup.defaultProps = defaultProps;

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

  if (!inProp && !leaving) {
    setLeaving(true);
  }

  useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsxRuntime.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsxRuntime.jsx("span", {
      className: childClassName
    })
  });
}

const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

const _excluded$9 = ["center", "classes", "className"];

let _$1 = t => t,
    _t,
    _t2,
    _t3,
    _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _$1`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _$1`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _$1`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled$1('span', {
  name: 'MuiTouchRipple',
  slot: 'Root',
  skipSx: true
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.

const TouchRippleRipple = styled$1(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})(_t4 || (_t4 = _$1`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

const TouchRipple = /*#__PURE__*/forwardRef(function TouchRipple(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiTouchRipple'
  });

  const {
    center: centerProp = false,
    classes = {},
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$9);

  const [ripples, setRipples] = useState([]);
  const nextKey = useRef(0);
  const rippleCallback = useRef(null);
  useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  const ignoringMouseDown = useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  const startTimer = useRef(null); // This is the hook called once the previous timeout is ready.

  const startTimerCommit = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = useCallback((event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes

    } = options;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    let rippleX;
    let rippleY;
    let rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = useCallback((event, cb) => {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, _extends({
    className: clsx(classes.root, touchRippleClasses.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

const _excluded$a = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];

const useUtilityClasses = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }

  return composedClasses;
};

const ButtonBaseRoot = styled$1('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.

  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

const ButtonBase = /*#__PURE__*/forwardRef(function ButtonBase(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiButtonBase'
  });

  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    type
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$a);

  const buttonRef = useRef(null);
  const rippleRef = useRef(null);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  const keydownRef = useRef(false);
  const handleKeyDown = useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;

  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }

  const buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const [mountedState, setMountedState] = useState(false);
  useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    jsxRuntime.jsx(TouchRipple, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});

/**
 * @ignore - internal component.
 */

const ListContext = /*#__PURE__*/createContext({});

function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass('MuiListItemButton', slot);
}
const listItemButtonClasses = generateUtilityClasses('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);

const _excluded$b = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected"];
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};

const useUtilityClasses$1 = ownerState => {
  const {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', divider && 'divider', disabled && 'disabled', alignItems === 'flex-start' && 'alignItemsFlexStart', selected && 'selected']
  };
  const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const ListItemButtonRoot = styled$1(ButtonBase, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiListItemButton',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemButtonClasses.focusVisible}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemButtonClasses.selected}:hover`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${listItemButtonClasses.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus
  },
  [`&.${listItemButtonClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity
  }
}, ownerState.divider && {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundClip: 'padding-box'
}, ownerState.alignItems === 'flex-start' && {
  alignItems: 'flex-start'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}));
const ListItemButton = /*#__PURE__*/forwardRef(function ListItemButton(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemButton'
  });

  const {
    alignItems = 'center',
    autoFocus = false,
    component = 'div',
    children,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$b);

  const context = useContext(ListContext);
  const childContext = {
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  };
  const listItemRef = useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      }
    }
  }, [autoFocus]);

  const ownerState = _extends({}, props, {
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  });

  const classes = useUtilityClasses$1(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  return /*#__PURE__*/jsxRuntime.jsx(ListContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsxRuntime.jsx(ListItemButtonRoot, _extends({
      ref: handleRef,
      component: component,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ownerState: ownerState
    }, other, {
      classes: classes,
      children: children
    }))
  });
});

function getListItemIconUtilityClass(slot) {
  return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);

const _excluded$c = ["className"];

const useUtilityClasses$2 = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};

const ListItemIconRoot = styled$1('div', {
  name: 'MuiListItemIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => _extends({
  minWidth: 56,
  color: theme.palette.action.active,
  flexShrink: 0,
  display: 'inline-flex'
}, ownerState.alignItems === 'flex-start' && {
  marginTop: 8
}));
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

const ListItemIcon = /*#__PURE__*/forwardRef(function ListItemIcon(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemIcon'
  });

  const {
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$c);

  const context = useContext(ListContext);

  const ownerState = _extends({}, props, {
    alignItems: context.alignItems
  });

  const classes = useUtilityClasses$2(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ListItemIconRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
const typographyClasses = generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const _excluded$d = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];

const useUtilityClasses$3 = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};

const TypographyRoot = styled$1('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/forwardRef(function Typography(inProps, ref) {
  const themeProps = useThemeProps$1({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$d);

  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$3(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(TypographyRoot, _extends({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className)
  }, other));
});

function getListItemTextUtilityClass(slot) {
  return generateUtilityClass('MuiListItemText', slot);
}
const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);

const _excluded$e = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"];

const useUtilityClasses$4 = ownerState => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ['root', inset && 'inset', dense && 'dense', primary && secondary && 'multiline'],
    primary: ['primary'],
    secondary: ['secondary']
  };
  return composeClasses(slots, getListItemTextUtilityClass, classes);
};

const ListItemTextRoot = styled$1('div', {
  name: 'MuiListItemText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses.primary}`]: styles.primary
    }, {
      [`& .${listItemTextClasses.secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})(({
  ownerState
}) => _extends({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, ownerState.primary && ownerState.secondary && {
  marginTop: 6,
  marginBottom: 6
}, ownerState.inset && {
  paddingLeft: 56
}));
const ListItemText = /*#__PURE__*/forwardRef(function ListItemText(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemText'
  });

  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$e);

  const {
    dense
  } = useContext(ListContext);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;

  const ownerState = _extends({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  });

  const classes = useUtilityClasses$4(ownerState);

  if (primary != null && primary.type !== Typography && !disableTypography) {
    primary = /*#__PURE__*/jsxRuntime.jsx(Typography, _extends({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps, {
      children: primary
    }));
  }

  if (secondary != null && secondary.type !== Typography && !disableTypography) {
    secondary = /*#__PURE__*/jsxRuntime.jsx(Typography, _extends({
      variant: "body2",
      className: classes.secondary,
      color: "text.secondary",
      display: "block"
    }, secondaryTypographyProps, {
      children: secondary
    }));
  }

  return /*#__PURE__*/jsxRuntime.jsxs(ListItemTextRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [primary, secondary]
  }));
});

function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass('MuiListItemSecondaryAction', slot);
}
const listItemSecondaryActionClasses = generateUtilityClasses('MuiListItemSecondaryAction', ['root', 'disableGutters']);

const _excluded$f = ["className"];

const useUtilityClasses$5 = ownerState => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disableGutters && 'disableGutters']
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};

const ListItemSecondaryActionRoot = styled$1('div', {
  name: 'MuiListItemSecondaryAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})(({
  ownerState
}) => _extends({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.disableGutters && {
  right: 0
}));
/**
 * Must be used as the last child of ListItem to function properly.
 */

const ListItemSecondaryAction = /*#__PURE__*/forwardRef(function ListItemSecondaryAction(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemSecondaryAction'
  });

  const {
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$f);

  const context = useContext(ListContext);

  const ownerState = _extends({}, props, {
    disableGutters: context.disableGutters
  });

  const classes = useUtilityClasses$5(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ListItemSecondaryActionRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);

const _excluded$g = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

const useUtilityClasses$6 = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};

const IconButtonRoot = styled$1(ButtonBase, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: theme.palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.color === 'inherit' && {
  color: 'inherit'
}, ownerState.color !== 'inherit' && ownerState.color !== 'default' && {
  color: theme.palette[ownerState.color].main,
  '&:hover': {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.size === 'small' && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = /*#__PURE__*/forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiIconButton'
  });

  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$g);

  const ownerState = _extends({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });

  const classes = useUtilityClasses$6(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(IconButtonRoot, _extends({
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children
  }));
});

var ChevronRightRounded = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(createSvgIcon);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
}), 'ChevronRightRounded');

exports.default = _default;
});

var ChevronRounded = /*@__PURE__*/getDefaultExportFromCjs(ChevronRightRounded);

function getIconUtilityClass(slot) {
  return generateUtilityClass('MuiIcon', slot);
}
const iconClasses = generateUtilityClasses('MuiIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const _excluded$h = ["baseClassName", "className", "color", "component", "fontSize"];

const useUtilityClasses$7 = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getIconUtilityClass, classes);
};

const IconRoot = styled$1('span', {
  name: 'MuiIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
  // To remove at some point.
  overflow: 'hidden',
  display: 'inline-block',
  // allow overflow hidden to take action
  textAlign: 'center',
  // support non-square icon
  flexShrink: 0,
  fontSize: {
    inherit: 'inherit',
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36)
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    action: theme.palette.action.active,
    error: theme.palette.error.main,
    disabled: theme.palette.action.disabled,
    inherit: undefined
  }[ownerState.color]
}));
const Icon = /*#__PURE__*/forwardRef(function Icon(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiIcon'
  });

  const {
    baseClassName = 'material-icons',
    className,
    color = 'inherit',
    component: Component = 'span',
    fontSize = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$h);

  const ownerState = _extends({}, props, {
    baseClassName,
    color,
    component: Component,
    fontSize
  });

  const classes = useUtilityClasses$7(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(IconRoot, _extends({
    as: Component,
    className: clsx(baseClassName, // Prevent the translation of the text content.
    // The font relies on the exact text content to render the icon.
    'notranslate', classes.root, className),
    ownerState: ownerState,
    "aria-hidden": true,
    ref: ref
  }, other));
});
Icon.muiName = 'Icon';

var ErrorRounded = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(createSvgIcon);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"
}), 'ErrorRounded');

exports.default = _default;
});

var ErrorRounded$1 = /*@__PURE__*/getDefaultExportFromCjs(ErrorRounded);

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const components = new Map();

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function SystemIcon(props) {
  var _a, _b, _c;
  let { icon, className, style } = props;
  if ('id' in icon) {
    const IconComponent = components.get(icon.id);
    const iconStyle = Object.assign(
      Object.assign(Object.assign({}, icon.style), style),
      (_a = props.svgIconProps) === null || _a === void 0 ? void 0 : _a.style
    );
    const iconClassName = clsx(
      icon.class,
      className,
      (_b = props.svgIconProps) === null || _b === void 0 ? void 0 : _b.className
    );
    return IconComponent
      ? React.createElement(
          Suspense$1,
          {
            fallback: React.createElement(Skeleton, {
              variant: 'rectangular',
              width: '24px',
              style: iconStyle,
              className: iconClassName
            })
          },
          React.createElement(
            IconComponent,
            Object.assign({}, props.svgIconProps, { style: iconStyle, className: iconClassName })
          )
        )
      : React.createElement(
          Tooltip,
          { title: `Icon ${icon.id} not found. Check config.` },
          React.createElement(ErrorRounded$1, null)
        );
  } else {
    return React.createElement(
      Icon,
      Object.assign({ className: icon.class, children: icon.content }, props.fontIconProps, {
        style: Object.assign(
          Object.assign(Object.assign({}, icon.style), style),
          (_c = props.fontIconProps) === null || _c === void 0 ? void 0 : _c.style
        )
      })
    );
  }
}

var guestDetectionMessage = "Communication with the preview application was interrupted. Studio will continue to retry the connection.";
var socketConnectionIssue = "Connection with the server was interrupted. Studio will continue to retry the connection.";
var en = {
	"CreateUserDialog.title": "Create User",
	"GlobalMenu.Audit": "Audit",
	"GlobalMenu.Sites": "Projects",
	"GraphiQL.title": "GraphiQL",
	"InstallPluginDialog.empty": "No plugins found.",
	"InstallPluginDialog.title": "Search & install plugin",
	"about.buildDate": "Build Date",
	"about.buildNumber": "Build Number",
	"about.studioVersionNumber": "Studio Version Number",
	"about.versionNumber": "Version Number",
	"aboutView.attribution": "CrafterCMS is made possible by these other <a>open source software projects</a>.",
	"accountManagement.changeHelperText": "Once your password has been successfully updated, you'll be required to login again.",
	"accountManagement.changeLanguage": "Change Language",
	"accountManagement.changePassword": "Change Password",
	"accountManagement.confirmPassword": "Confirm Password",
	"accountManagement.currentPassword": "Current Password",
	"accountManagement.languageUpdated": "Language preference changed",
	"accountManagement.newPassword": "New Password",
	"accountManagement.passwordChanged": "Password changed successfully",
	"accountManagement.passwordInvalid": "Password is invalid.",
	"accountManagement.passwordMatch": "Must match the previous password.",
	"adminConfigurations.allEncrypted": "All marked items are already encrypted. The `encrypted` attribute should have a blank value to be marked for encryption (e.g. `encrypted=\"\"`)",
	"adminConfigurations.configSaved": "Configuration saved successfully.",
	"adminConfigurations.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"adminConfigurations.encryptHinPt1": "To encrypt the content of a tag, (1) mark the desired tags for encryption, then (2) click on the \"Encrypt Marked\" button.",
	"adminConfigurations.encryptHinPt2": "(1) Mark your tags for encryption by adding the attribute <bold>`encrypted=\"\"`</bold>. ",
	"adminConfigurations.encryptHinPt3": "Example: {lt}accessKey encrypted=\"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) Click on the <bold>`Encrypt Marked`</bold> button. Once the process completes, your tag should now look like:",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted=\"true\"{gt}${lc}enc:xeJW23SomeEncryptedValuesListedHere{rc}{lt}/accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "Remember:",
	"adminConfigurations.encryptHinPt7": "Use the `encrypted=\"\"` attribute only on tags which directly hold the value to be encrypted (text).",
	"adminConfigurations.encryptHinPt8": "Don’t add the attribute on tags that contain other tags - unless you actually want to encrypt a chunk of XML.",
	"adminConfigurations.encryptHinPt9": "Do not manipulate encryption results manually.",
	"adminConfigurations.encryptMarked": "Encrypt Marked",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" with value \"{value}\"",
	"adminConfigurations.noEncryptItems": "No items to encrypt were found in XML markup. Add attribute `encrypted=\"\"` to mark for encryption.",
	"adminConfigurations.pendingEncryption": "{itemCount, plural, one {Tag Name {tags} is marked for encryption but hasn't}other {Tag names: {tags} {br} are marked for encryption but haven't}} been encrypted, please trigger encryption or remove the tag flagging.",
	"adminConfigurations.xmlContainsErrors": "The XML document contains errors: {errors}",
	"approvedScheduledItemsDashlet.collapseAll": "Collapse All",
	"approvedScheduledItemsDashlet.dashletTitle": "Approved Scheduled Items ({count})",
	"approvedScheduledItemsDashlet.emptyMessage": "No items are scheduled",
	"approvedScheduledItemsDashlet.expandedAll": "Expand All",
	"approvedScheduledItemsDashlet.filterBy": "Filter by",
	"asyncVideoPlayer.videoBeingProcessed": "Video is being processed, preview will be available when processing is complete",
	"audiencesPanel.apply": "Apply",
	"audiencesPanel.defaults": "Defaults",
	"audiencesPanel.undefinedControlType": "Unknown control type",
	"auditGrid.allOrigins": "All Origins",
	"auditGrid.allSites": "All Projects",
	"auditGrid.allUsers": "All Users",
	"auditGrid.clearFilters": "Clear filters",
	"auditGrid.clusterNode": "Cluster Node",
	"auditGrid.emptyStateMessage": "No Logs Found",
	"auditGrid.name": "Name",
	"auditGrid.noParameters": "No parameters",
	"auditGrid.operation": "Operation",
	"auditGrid.origin": "Origin",
	"auditGrid.parameters": "Parameters",
	"auditGrid.showParameters": "Show parameters",
	"auditGrid.siteName": "Project",
	"auditGrid.targetType": "Target Type",
	"auditGrid.targetValue": "Target Value",
	"auditGrid.timestamp": "Timestamp",
	"auditGrid.timezone": "Timezone",
	"auditGrid.username": "Username",
	"auditGridFilterPopover.allOperations": "All Operations",
	"auditGridFilterPopover.filterByCluster": "Filter by Cluster Node",
	"auditGridFilterPopover.filterByOperations": "Filter by Operations",
	"auditGridFilterPopover.filterByOrigin": "Filter by Origin",
	"auditGridFilterPopover.filterBySite": "Filter by Project",
	"auditGridFilterPopover.filterByTarget": "Filter by Target Value",
	"auditGridFilterPopover.filterByUser": "Filter by User",
	"authMonitor.dialogTitleText": "Session Expired",
	"authMonitor.incorrectPasswordMessage": "Incorrect password. Please try again.",
	"authMonitor.logOutButtonLabel": "Log Out",
	"authMonitor.openSSOLoginButtonLabel": "Open Login Form",
	"authMonitor.passwordTextFieldLabel": "Password",
	"authMonitor.postSSOLoginMismatchMessage": "Looks like you've logged in with a user different from the owner of this session. For security reasons, your screen will now be refreshed.",
	"authMonitor.sessionExpiredMessage": "Your session has expired. Please log back in.",
	"authMonitor.ssoOpenPopupMessage": "Make sure pop ups are not blocked. Once you log in, come back to this window and click on `Resume` button below.",
	"authMonitor.usernameTextFieldLabel": "Username",
	"authMonitor.validateSessionButtonLabel": "Resume",
	"awaitingApprovalDashlet.collapseAll": "Collapse All",
	"awaitingApprovalDashlet.dashletTitle": "Items Waiting For Approval ({count})",
	"awaitingApprovalDashlet.emptyMessage": "No items are awaiting approval",
	"awaitingApprovalDashlet.expandedAll": "Expand All",
	"awaitingApprovalDashlet.hideUnpublished": "Hide Unpublished",
	"awaitingApprovalDashlet.item": "Item",
	"awaitingApprovalDashlet.lastEdited": "Last Edited",
	"awaitingApprovalDashlet.lastEditedBy": "Last Edited By",
	"awaitingApprovalDashlet.publishingDate": "Publishing Date",
	"awaitingApprovalDashlet.publishingTarget": "Publishing Target",
	"awaitingApprovalDashlet.showUnpublished": "Show Unpublished",
	"browseCMIS.cloningCMIS": "Cloning CMIS Asset",
	"browseCMIS.cmis": "CMIS",
	"browseFilesDialog.emptyStateMessage": "Path `{path}` doesn't exist.",
	"browseFilesDialog.noResults": "No files found.",
	"browseFilesDialog.uploadImage": "Select a file",
	"browseSearchMessages.lookUpChildError": "Unable to lookup child form callback for search: {searchId}",
	"browseSearchMessages.lookUpParentError": "Unable to lookup parent context for search: {searchId}",
	"bulkUploadConfirmDialogMessages.description": "There is still a bulk upload in progress. Only one bulk upload can be executed at the same time.",
	"bulkUploadConfirmDialogMessages.title": "Upload in progress",
	"changeContentTypeDialog.emptyStateMessage": "No Content Types Found",
	"changeContentTypeDialog.subtitle": "The following starter templates are available for use within this section.",
	"changeContentTypeDialog.title": "Choose Content Type",
	"checkboxGroupControl.datasource": "Data Source",
	"checkboxGroupControl.horizontal": "Horizonal",
	"checkboxGroupControl.listDirection": "List Direction",
	"checkboxGroupControl.readonly": "Read Only",
	"checkboxGroupControl.showSelectAll": "Show \"Select All\"",
	"checkboxGroupControl.vertical": "Vertical",
	"childContentDS.childContent": "Child Content (Deprecated)",
	"clusterAdmin.clusterDeleted": "{cluster} deleted.",
	"clusterGrid.authType": "Auth Type",
	"clusterGrid.confirmDeleteCluster": "Delete this cluster?",
	"clusterGrid.deleteCluster": "Delete cluster",
	"clusterGrid.emptyStateMessage": "No Clusters Found",
	"clusterGrid.localAddress": "Local Address",
	"clusterGrid.remoteName": "Remote Name",
	"clusterManagement.clusterDeleted": "Cluster deleted successfully",
	"codeEditor.confirm": "Confirm Close",
	"codeEditor.contentModel": "Content model",
	"codeEditor.inProgressConfirmation": "Another editor is currently open & minimized. Please close the current editor before opening another",
	"codeEditor.insertCode": "Insert Code",
	"codeEditor.localesConfirmBody": "The template for the locale you selected does not exist. Do you want to create it now?",
	"codeEditor.localesConfirmTitle": "Create Template",
	"codeEditor.localesHelperText": "Select the locale for which to create/edit a template. Locales, like 'en' will cover sub-locales like 'en_us' or 'en_uk'.",
	"codeEditor.localesSnackBarTitle": "Template Created. Do you want to copy the base template?",
	"codeEditor.pendingChangesConfirmation": "Close without saving changes?",
	"codeEditor.saveAndClose": "Save & Close",
	"codeEditor.saveAndMinimize": "Save & Minimize",
	"codeEditor.saved": "Save successful",
	"codeEditor.stay": "No, stay",
	"codeEditor.title": "Code Editor",
	"common.back": "Back",
	"common.clearSelectedWithCount": "Clear {count} selected",
	"common.collapseAll": "Collapse all",
	"common.craftercms": "CrafterCMS",
	"common.developer": "Developer",
	"common.expandAll": "Expand all",
	"common.license": "License",
	"common.marketplace": "Marketplace",
	"common.minimizedDialogSiteSwitchCheck": "Please close any minimized dialogs before switching sites",
	"common.moreInfo": "More info",
	"common.password": "Password",
	"common.privateKey": "Private Key",
	"common.publishingTarget": "Publishing Target",
	"common.remoteName": "Git Remote Name",
	"common.toggleSidebarTooltip": "Toggle sidebar",
	"common.token": "Token",
	"common.use": "Use",
	"common.userName": "Username",
	"common.usernameAndPassword": "Username & Password",
	"common.version": "Version",
	"common.website": "Website",
	"compareVersionsDialog.back.selectRevision": "Back to select revision",
	"compareVersionsDialog.headerSubtitleCompare": "Select a revision to compare",
	"compareVersionsDialog.headerSubtitleCompareTo": "Select a revision to compare to “{selectedA}”",
	"compareVersionsDialog.headerTitle": "Compare item versions",
	"compareVersionsDialog.pleaseContentItem": "Please content item",
	"componentsPanel.emptyComponentsSubtitle": "Communicate with your developers to create the required components in the system.",
	"componentsPanel.emptyStateMessage": "No components found",
	"componentsPanel.suspenseStateMessage": "Retrieving Page Model",
	"configurationMessages.localeError": "Incorrect locale configuration: {message}. Using browser locale settings. Check site config xml.",
	"configurationSamplePreviewDialog.appendContent": "Append after current content",
	"configurationSamplePreviewDialog.replaceContent": "Replace current content",
	"configurationSamplePreviewDialog.title": "Sample File",
	"configurationSamplePreviewDialog.useSampleContent": "Use Sample Content",
	"contentLocalization.mark": "Mark for translation",
	"contentLocalization.title": "Content Localization",
	"contentType.RTEConfiguration": "RTE Configuration",
	"contentType.autoGrow": "Auto Grow",
	"contentType.contentTypeWarningMessage": "Please note Child Content datasource is being phased out of CrafterCMS. For components that need to be shared across pages or components, please use Shared Content instead. For components that belong exclusively to this content object, please use Embedded Content.",
	"contentType.continueEditing": "Continue Editing",
	"contentType.dependsOn": "This property depends on \"{dependency}\"",
	"contentType.enableSpellCheck": "Enable Spell Check",
	"contentType.fileManager": "File Manager",
	"contentType.fileNameErrorMessage": "Content types require a file name. Please add either a \"File Name\" or \"Auto Filename\" control to this content type definition.",
	"contentType.flatTitleError": "Please fill every title for fields and datasources.",
	"contentType.forceBRNewLines": "Force br New Lines",
	"contentType.forcePNewLines": "Force p tags New Lines",
	"contentType.forceRootBlockP": "Force Root Block p Tag",
	"contentType.height": "Height",
	"contentType.idError": "Please fill variable name for: ",
	"contentType.imageManager": "Image Manager",
	"contentType.internalNameErrorMessage": "This content type requires an Internal Name.",
	"contentType.maxSizeError": "Maximum value can't be lower than minimum value",
	"contentType.minSizeError": "Minimum value can't be higher than maximum value",
	"contentType.noTemplateAssoc": "There is no template associated with this content type. Click Save to proceed with save operation or Continue to update the content type (under Basic Content Type Properties) with a template.",
	"contentType.notice": "Notice",
	"contentType.saveFailed": "Save Failed",
	"contentType.supportedChannels": "Supported Channels",
	"contentType.useChildContent": "Use Deprecated Control Anyway",
	"contentType.useEmbeddedContent": "Use Embedded Content",
	"contentType.useSharedContent": "Use Shared Content",
	"contentType.videoManager": "Video Manager",
	"contentType.width": "Width",
	"contextMenu.emptyOptionsMessage": "No options available to display.",
	"controlsCommonMessages.escapeContent": "Escape Content",
	"copyItems.cancel": "Cancel",
	"copyItems.copy": "Copy",
	"copyItems.deselectAll": "Deselect All",
	"copyItems.selectAll": "Select All",
	"copyTokenDialog.helperText": "Token created successfully. Please copy the token and store it securely as you won’t be able to see it’s value again.",
	"copyTokenDialog.title": "Access Token Created",
	"craftercms.pages.option.noLocales": "The project has no locales declared.",
	"craftercms.pages.option.terminateSelection": "Terminate Selection",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} Item selected} other {{count} Items selected}}",
	"craftercms.pages.widget.title": "Pages",
	"createFileDialog.controller": "New Controller",
	"createFileDialog.createPolicy": "The supplied name goes against project policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFileDialog.fileAlreadyExists": "A file with that name already exists",
	"createFileDialog.fileName": "File Name",
	"createFileDialog.fileNameRequired": "File name is required.",
	"createFileDialog.helperText": "Consisting of letters, numbers, dot (.), dash (-) and underscore (_).",
	"createFileDialog.placeholder": "Please type a name",
	"createFileDialog.policyError": "The supplied name goes against project policies.",
	"createFileDialog.template": "New Template",
	"createFolder.createPolicy": "The supplied name goes against project policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFolder.placeholder": "Please type a folder name",
	"createFolder.policyError": "The supplied name goes against project policies.",
	"createSiteDialog.additionalOptions": "Additional Options",
	"createSiteDialog.authentication": "Authentication",
	"createSiteDialog.authenticationNoRequired": "Authentication not required (public URL)",
	"createSiteDialog.blueprintParameters": "Blueprint Parameters",
	"createSiteDialog.blueprintStrategy": "Create from plugin",
	"createSiteDialog.branch": "Git Branch",
	"createSiteDialog.cantStart": "Project names may not start with zeros, dashes (-) or underscores (_).",
	"createSiteDialog.changeQuery": "Try changing your query or browse the full catalog.",
	"createSiteDialog.chooseCreationStrategy": "Choose creation strategy: start from an existing Git repo or create based on a plugin that suits you best.",
	"createSiteDialog.clone_remoteBranch_label": "The project will get created cloning that branch of the repo. You may switch between branches later too.",
	"createSiteDialog.clone_remoteName_label": "Name the remote that will refer to the source repo to pull from. Typically named “upstream” or “origin”.",
	"createSiteDialog.clone_url_label": "The git repository URL to clone from.",
	"createSiteDialog.createAsOrphan": "Create the project from a remote repository as orphan (no git history)",
	"createSiteDialog.createAsOrphanHelpText": "Creating the project as an orphan will dissociate the project from the source git repository and remove all history.",
	"createSiteDialog.createInBackground": "Create in Background",
	"createSiteDialog.createSite": "Create Project",
	"createSiteDialog.creatingSite": "Creating Project",
	"createSiteDialog.creationStrategy": "Creation Strategy",
	"createSiteDialog.description": "Description",
	"createSiteDialog.descriptionMaxLength": "Max length: {maxLength} characters.",
	"createSiteDialog.dialogCloseMessage": "Data entered in the form would be lost upon closing.",
	"createSiteDialog.dialogCloseTitle": "Confirm Close",
	"createSiteDialog.finish": "Finish",
	"createSiteDialog.gitBlueprintDescription": "Create a new project based on a CrafterCMS project in an existing, remote git repository.",
	"createSiteDialog.gitBlueprintName": "Remote Git Repository",
	"createSiteDialog.gitBranch": "Git Branch",
	"createSiteDialog.gitBranchDescription": "Name of the branch this project will track. Pull operations will be done against this branch.",
	"createSiteDialog.gitStrategy": "Existing remote git repo clone",
	"createSiteDialog.idExist": "The ID already exists.",
	"createSiteDialog.nameAndDescription": "Name and describe your project",
	"createSiteDialog.nameExist": "The name already exists.",
	"createSiteDialog.noBlueprints": "No Blueprints Were Found",
	"createSiteDialog.noDescription": "No description supplied",
	"createSiteDialog.pleaseWait": "Please wait while your project is being created.",
	"createSiteDialog.plugin": "Blueprint",
	"createSiteDialog.privateBlueprints": "Private Blueprints",
	"createSiteDialog.privateKey": "Private Key",
	"createSiteDialog.publicMarketplace": "Public Marketplace",
	"createSiteDialog.remoteBranch": "Git Branch",
	"createSiteDialog.remoteName": "Git Remote Name",
	"createSiteDialog.remoteURL": "Git Repo URL",
	"createSiteDialog.repoUrl": "Git Repo URL",
	"createSiteDialog.required": "{name} is required.",
	"createSiteDialog.review": "Review",
	"createSiteDialog.reviewSite": "Review set up summary and create your project",
	"createSiteDialog.sandboxBranch": "Sandbox Branch",
	"createSiteDialog.showIncompatible": "Show Incompatible Plugins",
	"createSiteDialog.siteFormat": "Max length: 50 characters, consisting of: lowercase letters, numbers & dash (-).",
	"createSiteDialog.siteId": "Project ID",
	"createSiteDialog.siteInfo": "Project Info",
	"createSiteDialog.siteName": "Project Name",
	"createSiteDialog.token": "Token",
	"createSiteDialog.useDefaultValue": "use default value",
	"createSiteDialog.userNameAndPassword": "Username & Password",
	"createTokenDialog.expiresHelperNeverText": "Switch off to never expire.",
	"createTokenDialog.expiresHelperText": "Switch on to set an expiration.",
	"createTokenDialog.expiresLabel": "Expire Token",
	"createTokenDialog.helperText": "Type a name for the new token. The token will be created by the server and shown to you after. Store it securely as you won’t be able to see it’s value again.",
	"createTokenDialog.title": "Create Access Token",
	"createUserDialog.emailRequired": "Email is required.",
	"createUserDialog.firstName": "First Name",
	"createUserDialog.firstNameRequired": "First Name is required.",
	"createUserDialog.invalidEmail": "Email is invalid.",
	"createUserDialog.lastName": "Last Name",
	"createUserDialog.lastNameRequired": "Last Name is required.",
	"createUserDialog.passwordInvalid": "Password is invalid.",
	"createUserDialog.passwordMatch": "Must match the previous password.",
	"createUserDialog.passwordRequired": "Password is required.",
	"createUserDialog.passwordVerification": "Password Verification",
	"createUserDialog.usernameRequired": "Username is required.",
	"dashboardItemsApproval.item": "Item",
	"dashboardItemsApproval.lastEdited": "Last Edited",
	"dashboardItemsApproval.lastEditedBy": "Package Id",
	"dashboardItemsApproval.publishingTarget": "Publishing Target",
	"dashboardItemsScheduled.item": "Item",
	"dashboardItemsScheduled.lastEdited": "Last Edited",
	"dashboardItemsScheduled.packageId": "Package Id",
	"dashboardItemsScheduled.publishingTarget": "Publishing Target",
	"datasourceActionList.imageFromDesktopLabel": "Upload image from desktop",
	"datasourceActionList.imageFromRepoLabel": "Image from repository",
	"datasourceActionList.videoFromDesktopLabel": "Upload video from desktop",
	"datasourceActionList.videoFromRepoLabel": "Video from repository",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Invalid Date.",
	"datetimepicker.datePlaceholder": "Date",
	"datetimepicker.timeInvalidMessage": "Invalid Time.",
	"datetimepicker.timePlaceholder": "Time",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Error deleting content type",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Content type deleted successfully",
	"deleteContentTypeDialog.headerSubtitle": "Please confirm the deletion of \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Delete Content Type",
	"deleteContentTypeDialog.noUsagesFound": "No usages found",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Please review and confirm all of content type dependencies that will be deleted.",
	"deleteContentTypeDialog.safeToDelete": "The content type can be safely deleted.",
	"deleteContentTypeDialog.submitButton": "Delete",
	"deleteContentTypeDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm the deletion of \"{name}\" and all it's dependencies.",
	"deleteDialog.brokenItems": "Will have broken references",
	"deleteDialog.childItemsText": "Child Items",
	"deleteDialog.confirmDeletion": "I understand that deleted items will be published immediately.",
	"deleteDialog.deleteItems": "Delete Items",
	"deleteDialog.dependentItems": "Dependent Items",
	"deleteDialog.emptyChildItems": "No child items",
	"deleteDialog.emptyDependentItems": "No dependent items",
	"deleteDialog.maxCharacters": "Max {maxLength} characters",
	"deleteDialog.submissionCommentFieldError": "Please write submission comment.",
	"deleteDialog.submissionCommentLabel": "Submission Comment",
	"deleteDialog.subtitle": "Selected items will be deleted along with their child items. Please review dependent items before deleting as these will end-up with broken link references.",
	"deleteDialog.title": "Delete",
	"deleteDialog.willGetDeleted": "Will get deleted",
	"dependenciesDialog.allDeps": "Show all dependencies",
	"dependenciesDialog.assets": "Assets only",
	"dependenciesDialog.code": "Code only",
	"dependenciesDialog.contentItems": "Content items only",
	"dependenciesDialog.dependencies": "Dependencies",
	"dependenciesDialog.dependsOn": "Items that depend on selected item",
	"dependenciesDialog.dependsOnMe": "Dependencies of selected item",
	"dependenciesDialog.edit": "Edit",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} has no dependencies",
	"dependenciesDialog.emptyDependenciesMessage": "Nothing depends on {itemName}",
	"dependenciesDialog.history": "History",
	"dependenciesDialog.title": "Content Item Dependencies",
	"devContentOpsDashlet.widgetTitle": "DevContentOps",
	"dialog.pendingChangesConfirmation": "Close without saving changes?",
	"dialogHeader.toggleFullScreen": "Toggle full screen",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "The drop zone does not support this type of component. Check your content model.",
	"dragAndDropMessages.contentTypeNotFound": "The content type id was not found in your template. Drag and drop will be impaired. More info at docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "Deleting components from an embedded drop zone component is not supported yet. Please use the forms to edit content.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "Drag and drop on embedded components it's not supported yet. Please use the forms to edit content.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "On this release, embedded components may only be dragged within their current parent. Please use the forms to edit content.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "Moving components out of an embedded drop zone component is not supported yet. Please use the forms to edit content.",
	"dragAndDropMessages.objectIdNotFound": "Object id is missing. Drag and drop will be impaired. More info at docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.pathNotFound": "Path is missing. Drag and drop will be impaired. More info at docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dropTargetsMessages.allowEmbedded": "Allow Embedded",
	"dropTargetsMessages.allowShared": "Allow Shared",
	"dropTargetsMessages.baseBrowsePath": "Base Browse Path",
	"dropTargetsMessages.baseRepositoryPath": "Base Repository Path",
	"dropTargetsMessages.browseExisting": "Browse existing",
	"dropTargetsMessages.contentTypes": "Content Types",
	"dropTargetsMessages.createNewEmbedded": "Create new embedded",
	"dropTargetsMessages.createNewShared": "Create new shared",
	"dropTargetsMessages.dropTargets": "Drop Targets",
	"dropTargetsMessages.enableBrowse": "Enable Browse",
	"dropTargetsMessages.enableSearch": "Enable Search",
	"dropTargetsMessages.searchExisting": "Search existing components",
	"dropTargetsMessages.tags": "Tags",
	"editGroupDialog.close": "Close",
	"editGroupDialog.deleteGroup": "Delete group",
	"editGroupDialog.editGroupMembers": "Edit Group Members",
	"editGroupDialog.groupDetails": "Group Details",
	"editGroupDialog.groupMemberHelperText": "Group members are editable after creation",
	"editGroupDialog.helperText": "Delete \"{name}\" group?",
	"editGroupDialog.requiredGroupName": "Group name is required.",
	"editModesSwitcher.editModeTooltip": "Edit mode (e)",
	"editModesSwitcher.moveModeTooltip": "Move mode (m)",
	"editModesSwitcher.offButtonTooltip": "Switch off editing ({shortcutKey})",
	"editSiteDialog.cancel": "Cancel",
	"editSiteDialog.notEditable": "The project id is not editable",
	"editSiteDialog.siteDescription": "Project Description",
	"editSiteDialog.siteId": "Project ID",
	"editSiteDialog.siteName": "Project Name",
	"editSiteDialog.siteNameRequired": "Project Name is required.",
	"editSiteDialog.sitenameExists": "The name already exist.",
	"editSiteDialog.title": "Edit Project",
	"embeddedContentDS.embeddedContent": "Embedded Content",
	"embeddedLegacyFormMessages.openContentFormFailedError": "An error occurred opening the content form. Please try again momentarily. Contact the administrator if the error persists.",
	"emptyUiConfigMessageTitle.subtitle": "Nothing is set to be shown here.",
	"emptyUiConfigMessageTitle.title": "Configuration is empty",
	"encryptTool.buttonText": "Encrypt Text",
	"encryptTool.clearResultButtonText": "Clear",
	"encryptTool.errorMessage": "Text encryption failed. Please try again momentarily.",
	"encryptTool.inputLabel": "Raw Text",
	"encryptTool.pageTitle": "Encryption Tool",
	"encryptTool.successMessage": "Encrypted text copied to clipboard.",
	"fileNameControl.urlChangeWarning": "Changing this value may result in broken references and links.",
	"fileUpload.chooseFile": "Choose File",
	"fileUpload.createPolicy": "The upload file name goes against project policies. Suggested modified file name is: \"{name}\". Would you like to use the suggested name?",
	"fileUpload.policyError": "The upload file name goes against project policies.",
	"fileUpload.selectFileMessage": "Please select a file to upload",
	"fileUpload.uploadedFile": "Uploaded File",
	"fileUpload.uploadingFile": "Uploading File",
	"fileUpload.validatingFile": "Validating File",
	"filter.noResults": "No results match your query",
	"folder.created": "Folder created successfully",
	"folderBrowserTreeView.invalidPath": "The entered path doesn't exist.",
	"formEngine.createPolicy": "The {originalPath} path goes against project policies. Suggested modified path is: \"{path}\". Would you like to use the suggested path?",
	"formEngine.formNotReadyForSaving": "Form is not ready for saving. Please try again momentarily or use the cancel button.",
	"formEngine.inProgressConfirmation": "Another form is currently open & minimized. Please close the current form before opening another",
	"formEngine.policyError": "The {path} path goes against project policies.",
	"formEngine.save": "Save as Draft",
	"formEngine.saveAndClose": "Save & Close",
	"formEngine.saveAndMinimize": "Save & Minimize",
	"formEngine.saveAndPreview": "Save & Preview",
	"formEngine.saveDraftCompleted": "Draft Save Completed",
	"formEngine.useMVS": "Use _mvs postfix (backward compat)",
	"gitAuthForm.privateKey": "Private Key",
	"gitForm.noAuthenticationRequired": "Authentication not required (public URL)",
	"gitForm.privateKey": "Private Key",
	"gitForm.required": "{name} is required.",
	"gitForm.token": "Token",
	"gitForm.usernameAndPassword": "Username & Password",
	"global.about": "About",
	"globalApp.routeNotFound": "Route not found",
	"globalAppToolbar.toggleSidebar": "Toggle Sidebar",
	"globalConfig.configSaved": "Configuration saved successfully.",
	"globalConfig.confirmHelper": "Discard unsaved changes?",
	"globalConfig.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"globalConfig.unsavedConfirmation": "You have unsaved changes, do you want to leave?",
	"globalConfig.unsavedConfirmationTitle": "Unsaved changes",
	"globalConfig.viewSample": "View Sample",
	"globalConfigManagement.pendingChanges": "You have unsaved changes. Discard changes?",
	"globalMenu.closeMenu": "Close menu",
	"globalMenu.encryptionTool": "Encryption Tool",
	"globalMenu.globalConfigEntryLabel": "Global Config",
	"globalMenu.logConsoleEntryLabel": "Log Console",
	"globalMenu.loggingLevelsEntryLabel": "Logging Levels",
	"globalMenu.mySites": "My Projects",
	"globalMenu.noSitesMessage": "No projects to display.",
	"globalMenu.pluginManagementEntryLabel": "Plugin Management",
	"globalMenu.recover": "Password Recovery",
	"globalMenu.settings": "Account",
	"globalMenu.tokenManagement": "Token Management",
	"groupEditDialog.createGroup": "Create Group",
	"groupEditDialog.editGroup": "Edit Group",
	"groupEditDialog.groupCreated": "Group created successfully",
	"groupEditDialog.groupDeleted": "Group deleted successfully",
	"groupEditDialog.groupEdited": "Group edited successfully",
	"groupEditDialog.membersAdded": "{count, plural, one {User added successfully} other {Users added successfully}}",
	"groupEditDialog.membersRemoved": "{count, plural, one {User removed successfully} other {Users removed successfully}}",
	"groupsAdmin.displayName": "Display Name",
	"groupsAdmin.groupCreated": "{group} created.",
	"groupsAdmin.groupDeleted": "{group} deleted.",
	"groupsAdmin.groupEdited": "{group} edited.",
	"groupsAdmin.maxLengthError": "{field} can't be longer than {size} characters",
	"groupsAdmin.usereRemoved": "{username} successfully removed from {group}",
	"groupsAdmin.usersAdded": "User(s) successfully added.",
	"groupsGrid.emptyStateMessage": "No Groups Found",
	guestDetectionMessage: guestDetectionMessage,
	"historyDialog.back.selectRevision": "Back to history list",
	"historyDialog.confirmRevertBody": "Are you sure you want to revert to {versionTitle}?",
	"historyDialog.confirmRevertTitle": "Revert confirmation",
	"historyDialog.current": "current",
	"historyDialog.headerTitle": "Item History",
	"historyDialog.options.compareTo": "Compare to...",
	"historyDialog.options.compareToCurrent": "Compare to current",
	"historyDialog.options.compareToPrevious": "Compare to previous",
	"historyDialog.options.revertToPrevious": "Revert to <b>previous</b>",
	"historyDialog.options.revertToThisVersion": "Revert to <b>this version</b>",
	"icePanel.itemLockedWarning": "Item is locked, some functionality may be disabled",
	"icePanel.noWidgetsMessage": "No tools have been configured",
	"iconGuide.css": "CSS",
	"iconGuide.freemarker": "Freemarker Template",
	"iconGuide.groovy": "Groovy Script",
	"iconGuide.html": "HTML",
	"iconGuide.itemTypes": "Item Types",
	"iconGuide.javascript": "JavaScript",
	"iconGuide.json": "Json",
	"iconGuide.levelDescriptor": "Section Defaults",
	"iconGuide.plainText": "Plain Text",
	"iconGuide.publishingStatusTarget": "Publishing Status/Target",
	"iconGuide.title": "Icon Guide",
	"iconGuide.workflowStates": "Workflow States",
	"iconGuide.xml": "XML",
	"internalNameControl.displaySize": "Display Size",
	"internalNameControl.label": "Internal Name",
	"internalNameControl.maxLength": "Max Length",
	"item.contentTypeChanged": "Item type changed successfully",
	"item.controllerNotFound": "Controller not found.",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Item created successfully",
	"item.cut": "Item cut successfully",
	"item.delete": "{count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Item duplicated successfully",
	"item.edited": "Item updated successfully",
	"item.itemPasteToChildNotAllowed": "Pasting to a child item is not allowed for cut",
	"item.pasted": "Item pasted successfully",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.reverted": "Item reverted successfully",
	"item.savedAsDraft": "Item draft saved",
	"item.schedulePublished": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.templateNotFound": "Template not found.",
	"item.unlocked": "Item unlocked successfully",
	"itemActions.changeContentType": "Change Type",
	"itemActions.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemActions.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemActions.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemActions.copyDialogTitle": "Copy",
	"itemActions.copyWithChildren": "Copy with children",
	"itemActions.createController": "New Controller",
	"itemActions.createFolder": "New Folder",
	"itemActions.createTemplate": "New Template",
	"itemActions.deleteController": "Delete Controller",
	"itemActions.deleteTemplate": "Delete Template",
	"itemActions.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemActions.editController": "Edit Controller",
	"itemActions.editTemplate": "Edit Template",
	"itemActions.newContent": "New Content",
	"itemActions.requestPublish": "Request Publish",
	"itemActions.unableToVerifyWorkflows": "Unable to verify affected workflows please try again momentary",
	"itemActions.verifyingAffectedWorkflows": "Verifying affected workflows...",
	"itemActions.viewForm": "View Form",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemPublishingDate.scheduled": "Scheduled for {date}",
	"itemPublishingDate.scheduledForAsap": "Scheduled for ASAP",
	"itemPublishingDate.submitted": "Submitted for {date}",
	"itemPublishingDate.submittedForAsap": "Submitted for ASAP",
	"itemState.deleted": "Deleted",
	"itemState.disabled": "Disabled",
	"itemState.locked": "Locked",
	"itemState.lockedBy": "Locked by {user}",
	"itemState.modified": "Modified",
	"itemState.new": "New",
	"itemState.notInWorkflow": "Not in workflow",
	"itemState.publishing": "Publishing",
	"itemState.scheduled": "Scheduled",
	"itemState.scheduledToGoLive": "Scheduled to live",
	"itemState.scheduledToStaging": "Scheduled to staging",
	"itemState.submitted": "Submitted",
	"itemState.submittedToLive": "Submitted to live",
	"itemState.submittedToStaging": "Submitted to staging",
	"itemState.systemProcessing": "System Processing",
	"itemStates.anyState": "Any state",
	"itemStates.clearFilters": "Clear Filters",
	"itemStates.emptyStateMessage": "No results found",
	"itemStates.invalidPathRegexHelperText": "The regular expression is invalid",
	"itemStates.lockedBy": "By {owner}",
	"itemStates.pathRegex": "Path (regex)",
	"itemStates.pathRegexHelperText": "Use a path-matching regex",
	"itemStates.selectedAll": "Select {count} items across pages",
	"itemStates.showItemsIn": "Show Items In",
	"keyboardShortcutsDialog.title": "Keyboard Shortcuts",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Project <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Navigation Menu",
	"launcherOpenerButton.openMenuButtonText": "Open Menu",
	"launcherOpenerButton.signOut": "Sign Out",
	"legacyComponentsPanel.addComponent": "Add Component",
	"legacyFormDialog.errorLoadingForm": "An error occurred trying to load the form",
	"legacyFormDialog.loadingForm": "Loading...",
	"legacyFormDialog.title": "Content Form",
	"localeSelectorControl.label": "Locale Selector",
	"localeSelectorControl.requiredError": "Field is Required",
	"logConsoleDetailsDialog.title": "Log Details",
	"logConsoleManagement.noLogs": "No logs found",
	"loggingLevels.avoidDisplayingAllEntriesLabel": "Try filtering instead",
	"loggingLevels.changeLevelTo": "Current Level",
	"loggingLevels.currentLevel": "Current Level",
	"loggingLevels.displayAllEntriesButtonLabel": "Display {remaining} more entries",
	"loggingLevels.levelFilterLabel": "Level filter",
	"loggingLevels.levelFilterSelectEmptyLabel": "Any level",
	"loggingLevels.loggersFilterLabel": "Logger filter",
	"loggingLevelsManagement.levelChangedSuccessMessage": "Logging level changed successfully",
	"loginView.dialogTitleText": "Login to CrafterCMS",
	"loginView.forgotPasswordButtonLabel": "Forgot your password?",
	"loginView.incorrectCredentialsMessage": "Incorrect username or password. Please try again.",
	"loginView.loginButtonLabel": "Log In",
	"loginView.recoverYourPasswordBackButtonLabel": "Back",
	"loginView.recoverYourPasswordIntroText": "If your username exists, an email will be sent to you with a reset link.",
	"loginView.recoverYourPasswordSuccessMessage": "If \"{username}\" exists, a recovery email has been sent",
	"loginView.resetYourPasswordIntroText": "Please enter your new password",
	"loginView.usernameTextFieldLabel": "Username",
	"media.card.itemLastEdition": "Edited {time}",
	"media.card.title": "options",
	"mimeTypes.application/gzip": "GZip Compressed Archive",
	"mimeTypes.application/javascript": "Typescript (tsx)",
	"mimeTypes.application/msword": "Microsoft Word",
	"mimeTypes.application/pdf": "Adobe Portable Document Format (PDF)",
	"mimeTypes.application/vnd.ms-excel": "Microsoft Excel",
	"mimeTypes.application/vnd.ms-fontobject": "MS Embedded OpenType fonts",
	"mimeTypes.application/vnd.ms-powerpoint": "Microsoft Power Point",
	"mimeTypes.application/vnd.oasis.opendocument.presentation": "OpenDocument presentation document",
	"mimeTypes.application/vnd.oasis.opendocument.spreadsheet": "OpenDocument spreadsheet document",
	"mimeTypes.application/vnd.oasis.opendocument.text": "OpenDocument text document",
	"mimeTypes.application/vnd.openxmlformats-officedocument.presentationml.presentation": "Microsoft Power Point (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Microsoft Excel (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Microsoft Word (Open XML)",
	"mimeTypes.application/vnd.rar": "RAR archive",
	"mimeTypes.application/x-7z-compressed": "7-zip archive",
	"mimeTypes.application/x-bzip": "BZip archive",
	"mimeTypes.application/x-bzip2": "BZip2 archive",
	"mimeTypes.application/x-tar": "Tape Archive (TAR)",
	"mimeTypes.application/xml": "XML",
	"mimeTypes.application/zip": "ZIP archive",
	"mimeTypes.audio/aac": "AAC audio",
	"mimeTypes.audio/midi audio/x-midi": "Musical Instrument Digital Interface (MIDI)",
	"mimeTypes.audio/mpeg": "MP3 audio",
	"mimeTypes.audio/wav": "Waveform Audio Format",
	"mimeTypes.font/otf": "OpenType font",
	"mimeTypes.font/ttf": "TrueType Font",
	"mimeTypes.font/woff": "Web Open Font Format (WOFF)",
	"mimeTypes.font/woff2": "Web Open Font Format (WOFF)",
	"mimeTypes.image/gif": "GIF images",
	"mimeTypes.image/jpeg": "JPEG images",
	"mimeTypes.image/png": "PNG images",
	"mimeTypes.image/svg+xml": "SVG images",
	"mimeTypes.image/vnd.microsoft.icon": "Icon format",
	"mimeTypes.image/webp": "WEBP image",
	"mimeTypes.text/css": "CSS stylesheet",
	"mimeTypes.text/html": "HyperText Markup Language (HTML)",
	"mimeTypes.text/javascript": "JavaScript",
	"mimeTypes.text/plain": "Text",
	"mimeTypes.text/texmacs": "Typescript (ts)",
	"mimeTypes.text/x-freemarker": "Freemarker",
	"mimeTypes.text/x-groovy": "Groovy",
	"mimeTypes.text/x-sass": "SASS stylesheet",
	"mimeTypes.text/x-scss": "SCSS stylesheet",
	"mimeTypes.video/mp4": "MP4 video",
	"mimeTypes.video/mpeg": "MPEG Video",
	"mimeTypes.video/x-msvideo": "AVI: Audio Video Interleave",
	"multiChoiceSaveButton.saveAndClose": "Save & Close",
	"multiChoiceSaveButton.saveAndMinimize": "Save & Minimize",
	"newContentDialog.contentTypeAllLabel": "Show all types",
	"newContentDialog.contentTypeComponentLabel": "Components only",
	"newContentDialog.contentTypePageLabel": "Pages only",
	"newContentDialog.emptyStateMessage": "No Content Types Found",
	"newContentDialog.subtitle": "Choose a content type template for your new content item.",
	"newContentDialog.title": "Create Content",
	"newFolder.folderAlreadyExists": "A folder with that name already exists",
	"newFolder.folderName": "Folder Name",
	"newFolder.helperText": "Consisting of: letters, numbers, dash (-) and underscore (_).",
	"newFolder.rename": "Provide a new folder name",
	"newFolder.required": "Folder name is required.",
	"newFolder.title": "Create a New Folder",
	"newFolder.title.rename": "Rename Folder",
	"noUiConfigMessageTitle.subtitle": "Add & configure `ui.xml` on your project to show content here.",
	"noUiConfigMessageTitle.title": "Configuration file missing",
	"numericInputControl.childContent": "Minimum",
	"numericInputControl.maximun": "Maximum",
	"numericInputControl.noDecimalsErrMessage": "Decimals aren't allowed on this input.",
	"openToolsPanel.label": "Open tools panel",
	"operations.addMembers": "Add Members",
	"operations.addRemote": "Add Remote",
	"operations.approveScheduled": "Approve Scheduled",
	"operations.assetUploadFailed": "Asset Upload failed.",
	"operations.assetUploadStarted": "Asset upload started.",
	"operations.cancelPublishingPackage": "Cancel Publishing Package",
	"operations.deleteOperationComplete": "Delete operation completed.",
	"operations.deleteOperationFailed": "Delete operation failed.",
	"operations.duplicateItemOperationComplete": "Item duplicated successfully.",
	"operations.duplicateItemOperationFailed": "Item duplication failed.",
	"operations.initialPublish": "Initial Publish",
	"operations.insertItemOperationComplete": "Item created successfully.",
	"operations.insertItemOperationFailed": "Item creation failed.",
	"operations.insertOperationComplete": "Insert component operation completed.",
	"operations.insertOperationFailed": "Insert component operation failed.",
	"operations.loginFailed": "Login Failed",
	"operations.moveOperationComplete": "Move operation completed",
	"operations.moveOperationFailed": "Move operation failed.",
	"operations.pullFromRemote": "Pull From Remote",
	"operations.pushToRemote": "Push To Remote",
	"operations.removeClusterNode": "Remove Cluster Node",
	"operations.removeMembers": "Remove Members",
	"operations.removeRemote": "Remove Remote",
	"operations.requestPublish": "Request Publish",
	"operations.sortOperationComplete": "Sort operation completed.",
	"operations.sortOperationFailed": "Sort operation failed.",
	"operations.startPublisher": "Start Publisher",
	"operations.stopPublisher": "Stop Publisher",
	"operations.updateOperationComplete": "Update operation completed.",
	"operations.updateOperationFailed": "Update operation failed.",
	"packageDetailsDialog.emptyPackageMessage": "The package is empty",
	"packageDetailsDialog.emptyPackageMessageSubtitle": "Fetched package id is {packageId}",
	"packageDetailsDialog.missingPackageId": "Unable to fetch package details as package id was not provided to this UI",
	"packageDetailsDialog.packageDetailsDialogTitle": "Publishing Package Details",
	"pageExplorerPanel.currentContentItems": "Current Content Items",
	"pagination.PreviousPage": "Previous page",
	"pagination.itemsPerPage": "Items per page",
	"pagination.nextPage": "Next page",
	"pagination.previousPage": "Previous page",
	"passwordRequirement.fulfillAllReqErrorMessage": "Please fulfill all password requirements.",
	"passwordRequirement.hasLowercase": "Must contain at least one lowercase letter",
	"passwordRequirement.hasNumbers": "Must contain at least one number",
	"passwordRequirement.hasSpecialChars": "Must contain at least one special character {chars}",
	"passwordRequirement.hasUppercase": "Must contain at least one uppercase letter",
	"passwordRequirement.invalidPassword": "Requirements are not met",
	"passwordRequirement.maxLength": "Length must not exceed {max} characters",
	"passwordRequirement.minLength": "Length must be at least {min} characters",
	"passwordRequirement.minMaxLength": "Length must be between {minLength} and {maxLength} characters",
	"passwordRequirement.noBlank": "Must not be blank",
	"passwordRequirement.noSpaces": "Must not contain whitespaces",
	"passwordRequirement.passwordConfirmationMismatch": "Passwords don't match",
	"passwordRequirement.passwordValidation": "Password Validation",
	"passwordRequirement.unnamedGroup": "Condition not described",
	"passwordRequirement.validPassword": "Requirements met",
	"passwordRequirement.validationPassing": "Validation passing",
	"passwordTextField.toggleVisibilityButtonText": "toggle password visibility",
	"pastePolicy.confirm": "The selected {action} target goes against project policies for the destination directory. • Original path: \"{path}\", • Suggested path is: \"{modifiedPath}\". Would you like to use the suggested path?",
	"pastePolicy.error": "The selected {action} target goes against project policies for the destination directory.",
	"pathNavigator.noChildren": "Item has no children",
	"pathNavigator.noItemsAtLocation": "No items at this location",
	"pathNavigator.pathFilterInputPlaceholder": "Filter children of {name}...",
	"pathNavigator.viewChildren": "View children",
	"pathNavigatorTree.missingRootPath": "The path \"{path}\" doesn't exist",
	"pathNavigatorTree.moreLinkLabel": "{count, plural, one {...{count} more item} other {...{count} more items}}",
	"pathNavigatorTreeItemFilter.placeholder": "Filter children...",
	"pathSelectionDialog.changeRootButtonLabel": "Change root",
	"pathSelectionDialog.createFolderButtonLabel": "Create Folder",
	"pathSelectionDialog.title": "Select Path",
	"pathSelectionInput.description": "Enter a path and press `enter` to validate",
	"pathSelectionInput.found": "Path found",
	"pathSelectionInput.invalidPath": "The entered path doesn't exist",
	"pathSelector.inputPlaceholderText": "Select path",
	"pendingApprovalDashlet.entryPrimaryText": "{name} submitted to <render_target>{publishingTarget}</render_target>",
	"pendingApprovalDashlet.noPendingItems": "There are no items pending approval",
	"pendingApprovalDashlet.noSubmissionCommentAvailable": "Submission comment not provided",
	"pendingApprovalDashlet.widgetTitle": "Pending Approval <render_total>{total}</render_total>",
	"plugin.by": "By",
	"plugin.crafterCMS": "CrafterCMS",
	"plugin.license": "License",
	"plugin.licenseTooltip": "{license} license",
	"plugin.more": "More...",
	"plugin.noDev": "No developer specified.",
	"plugin.use": "Use",
	"plugin.version": "Version",
	"pluginConfigDialog.title": "Plugin Configuration",
	"pluginDetails.markdownError": "Unable to render documentation. Visit <a>{link}</a> to view.",
	"pluginDetails.notCompatible": "This blueprint is not compatible with your current version of CrafterCMS.",
	"pluginManagement.emptyList": "There are no plugins installed",
	"pluginManagement.installationDate": "Installation Date",
	"pluginManagement.listPluginPermission": "You don't have enough permissions to see the list of plugins",
	"pluginManagement.pluginConfigUpdated": "Plugin configuration updated successfully",
	"pluginManagement.pluginInstalled": "Plugin installed successfully",
	"pluginManagement.pluginUninstalled": "Plugin uninstalled successfully",
	"pluginManagement.searchPlugin": "Search & install",
	"preview.previewIFrameTitle": "Preview Frame",
	"previewAddressBar.reloadButtonLabel": "Reload this page",
	"previewAssetsPanel.itemsPerPage": "Items per page:",
	"previewAssetsPanel.noResults": " No results found.",
	"previewAssetsPanel.retrieveAssets": "Retrieving Project Assets",
	"previewAssetsPanel.title": "Assets",
	"previewAudiencesPanel.loading": "Retrieving targeting options",
	"previewAudiencesPanel.title": "Audience Targeting",
	"previewBrowseComponentsPanel.allContentType": "All Content types",
	"previewBrowseComponentsPanel.filter": "Filter...",
	"previewBrowseComponentsPanel.nextPage": "next page",
	"previewBrowseComponentsPanel.noResults": " No results found.",
	"previewBrowseComponentsPanel.previousPage": "previous page",
	"previewBrowseComponentsPanel.sharedComponentsHelperText": "Only shared components are shown here",
	"previewBrowseComponentsPanel.title": "Browse Components",
	"previewCompatDialog.legacyCompatMessage": "This page is compatible with the previous editing experience. Would you like to go there now?",
	"previewCompatDialog.nextCompatMessage": "This page is compatible with the new editing experience. Would you like to go there now?",
	"previewCompatDialog.rememberChoice": "Remember choice",
	"previewCompatDialog.title": "Preview Compatibility Notice",
	"previewComponentsPanel.browse": "Browse existing",
	"previewComponentsPanel.listDropTargets": "List drop targets",
	"previewComponentsPanel.listInPageInstances": "Instances on this page",
	"previewComponentsPanel.title": "Add Components",
	"previewConcierge.contentWasChangedByAnotherUser": "{name} has changed the current page. Reload?",
	"previewConcierge.contentWasLockedByAnotherUser": "The item was locked by {name}. Edit mode disabled until lock is released.",
	"previewDropTargetsPanel.chooseContentType": "Please choose a content type.",
	"previewDropTargetsPanel.noResults": "No results found.",
	"previewDropTargetsPanel.selectContentType": "Select content type",
	"previewDropTargetsPanel.title": "Component Drop Targets",
	"previewEditFormTool.editController": "Edit Controller",
	"previewEditFormTool.editTemplate": "Edit Template",
	"previewEditFormTool.openComponentForm": "Edit",
	"previewInPageInstancesPanel.chooseContentType": "Please choose a content type.",
	"previewInPageInstancesPanel.noResults": "No results found.",
	"previewInPageInstancesPanel.selectContentType": "Select content type",
	"previewInPageInstancesPanel.title": "In this Page",
	"previewPageExplorerPanel.loading": "Loading",
	"previewPageExplorerPanel.rootItemLabel": "Current Content Items",
	"previewPageExplorerPanel.title": "Page Explorer",
	"previewRubbishBin.dropToTrash": "Drop Here To Trash",
	"previewRubbishBin.itemTrashed": "Trashed!",
	"previewSearchPanel.title": "Search",
	"previewSimulatorPanel.previewWindowSize": "Preview Window Size",
	"previewSimulatorPanel.title": "Device Simulator",
	"previewSiteExplorerPanel.title": "Project Explorer",
	"previewToolbar.editModeSwitchDisabled": "Editing is not available",
	"previewToolbar.editModeSwitchLockedMessage": "Item is locked by {lockOwner}",
	"previewToolbar.itemMenu": "Item menu",
	"previewToolbar.quickCreateMenuTooltip": "Quick create menu",
	"previewToolbar.toggleEditMode": "Toggle edit mode",
	"previewTools.choseSiteMessage": "Please choose project",
	"previewTools.noWidgetsMessage": "No tools have been configured",
	"profileSettings.currentPassword": "Current password",
	"profileSettings.isRequired": "is required",
	"profileSettings.languageUpdateFailedWarning": "Language update has failed. Please retry momentarily.",
	"profileSettings.languageUpdatedSuccessfully": "Language Updated Successfully.",
	"profileSettings.mustMatchPreviousEntry": "Must match the previous entry",
	"profileSettings.password": "Password",
	"profileSettings.unsavedConfirmation": "You have unsaved changes. Discard changes?",
	"profileSettings.unsavedConfirmationTitle": "Unsaved Changes",
	"publishCommitDialog.successMessage": "Publish completed successfully",
	"publishCommitDialog.title": "Publish Commit",
	"publishDialog.approveForPublish": "Approve for Publish",
	"publishDialog.differentPublishDateWarning": "<strong>Warning</strong> The items you have selected for approval were submitted with different requested publish dates/times.",
	"publishDialog.emptyHardDependencies": "No hard dependencies",
	"publishDialog.emptySoftDependencies": "No soft dependencies",
	"publishDialog.firstPublish": "The entire site will be published since this is the first publish request",
	"publishDialog.hardDependencies": "Hard Dependencies",
	"publishDialog.introductoryText": "Selected files will be published. Hard dependencies are automatically included. Soft dependencies are optional and you may choose which to include.",
	"publishDialog.itemsToPublish": "Items To Publish",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "Selected Item Scheduling",
	"publishDialog.requestPublish": "Request Publish",
	"publishDialog.requestPublishHint": "Items will be submitted for review and published upon approval",
	"publishDialog.showAllDependencies": "Show All Dependencies",
	"publishDialog.softDependencies": "Soft Dependencies",
	"publishDialog.submissionCommentFieldError": "Please write submission comment.",
	"publishDialog.submissionMandatory": "Submission Mandatory",
	"publishDialog.submissionOptional": "Submission Optional",
	"publishDialog.subtitle": "Hard dependencies are automatically submitted with the main items. You may choose whether to submit or not soft dependencies",
	"publishDialog.title": "Publish",
	"publishForm.emailLabel": "Email me the reviewer's feedback",
	"publishForm.mixedPublishingDates": "Items have mixed publishing date/time schedules.",
	"publishForm.mixedPublishingTargets": "Items have mixed publishing targets.",
	"publishForm.publishingTargetError": "Publishing targets load failed.",
	"publishForm.publishingTargetLoading": "Loading...",
	"publishForm.publishingTargetRetry": "retry",
	"publishForm.publishingTargetSuccess": "Success",
	"publishForm.requestApproval": "Request approval",
	"publishForm.scheduling": "Scheduling",
	"publishForm.schedulingLater": "Later",
	"publishForm.schedulingLaterDisabled": "Later (disabled on first publish)",
	"publishForm.schedulingNow": "Now",
	"publishForm.submissionComment": "Submission Comment",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "You may enter multiple separate by comma",
	"publishOnDemand.formPathLabel": "Path to Publish",
	"publishOnDemand.formPathLabelPreview": "Commit or tag IDs",
	"publishOnDemand.pathModeDescription": "Publish changes made in Studio via the UI",
	"publishOnDemand.publishingTarget": "Publishing Target",
	"publishOnDemand.submissionComment": "Submission Comment",
	"publishOnDemand.tagsModeDescription": "Publish changes made via direct git actions against the repository or pulled from a remote repository",
	"publishOnDemand.title": "Publish on Demand",
	"publishing.bulkPublishNote": "Bulk publish should be used to publish changes made in Studio via the UI. For changes made via direct git actions, use the \"Publish by...\" feature.",
	"publishing.busy": "Busy",
	"publishing.idle": "Idle",
	"publishing.publishByNote": "\"Publish by...\" feature must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use \"Bulk Publish\".",
	"publishing.queued": "Queued",
	"publishing.ready": "Ready",
	"publishing.started": "Started",
	"publishing.stopped": "Stopped",
	"publishingDashboard.BLOCKED": "Blocked",
	"publishingDashboard.CANCELLED": "Cancelled",
	"publishingDashboard.COMPLETED": "Completed",
	"publishingDashboard.PROCESSING": "Processing",
	"publishingDashboard.READY_FOR_LIVE": "Ready for Live",
	"publishingDashboard.all": "All",
	"publishingDashboard.bulkPublishStarted": "Bulk Publish process has been started.",
	"publishingDashboard.cancelItemButtonText": "Cancel",
	"publishingDashboard.cancelSelected": "Cancel Selected",
	"publishingDashboard.comment": "Comment",
	"publishingDashboard.commentNotProvided": "(submission comment not provided)",
	"publishingDashboard.confirmAllHelper": "Set the state for all selected items to \"Cancelled\"?",
	"publishingDashboard.confirmHelperText": "Set item state to \"Cancelled\"?",
	"publishingDashboard.fetchPackagesFiles": "Fetch Packages Files",
	"publishingDashboard.filesList": "files list",
	"publishingDashboard.filteredBy": "Showing: {state, select, all {} other {Status: {state}.}} {environment, select, all {} other {{environment} target.}} {path, select, none {} other {Filtered by {path}}}",
	"publishingDashboard.filters": "Filters",
	"publishingDashboard.gitNote": "Publishing by commit or tag must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use please <a>publish by path</a>.",
	"publishingDashboard.next": "Next page",
	"publishingDashboard.no": "No",
	"publishingDashboard.noPackagesSubtitle": "Try changing your query",
	"publishingDashboard.noPackagesTitle": "No packages were found",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} Package selected} other {{count} Packages selected}}",
	"publishingDashboard.pathExpression": "Path Expression",
	"publishingDashboard.previous": "Previous page",
	"publishingDashboard.publishSuccess": "Published successfully.",
	"publishingDashboard.scheduled": "Scheduled for <b>{schedule, date, medium} {schedule, time, short}</b> by <b>{approver}</b>",
	"publishingDashboard.selectAll": "Select all on this page",
	"publishingDashboard.state": "State",
	"publishingDashboard.status": "Status is {state} for {environment} target",
	"publishingDashboard.studioNote": "Publishing by path should be used to publish changes made in Studio via the UI. For changes made via direct git actions, please <a>publish by commit or tag</a>.",
	"publishingDashboard.title": "Publishing Dashboard",
	"publishingDashboard.warning": "This will force publish all items that match the pattern requested including their dependencies, and it may take a long time depending on the number of items. Please make sure that all modified items (including potentially someone's work in progress) are ready to be published before continuing.",
	"publishingDashboard.yes": "Yes",
	"publishingQueue.title": "Publishing Queue",
	"publishingStatus.publisherUnlocked": "Publisher Unlocked",
	"publishingStatusMessages.confirmUnlockPublisher": "Confirm you wish to unlock the publisher?",
	"publishingStatusMessages.errorMessage": "The publisher was stopped due to an error.",
	"publishingStatusMessages.isDisabledMessage": "The publisher is disabled.",
	"publishingStatusMessages.lockOwnerDisplayMessage": "Locked by {lockOwner}",
	"publishingStatusMessages.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusMessages.processingMessage": "Preparing items for publishing. {numberOfItems} out of {totalItems} processed so far.",
	"publishingStatusMessages.publishingMessage": "Publishing items. Published {numberOfItems} {numberOfItems, plural, one {item} other {items}} out of {totalItems} to {publishingTarget}. Package id is {submissionId}.",
	"publishingStatusMessages.publishingStatus": "Publishing Status",
	"publishingStatusMessages.queuedMessage": "Items are scheduled for publishing.",
	"publishingStatusMessages.stoppedMessage": "The publisher was stopped by an administrator.",
	"pullDialog.pullFrom": "Pull from {remoteName}",
	"pushToRemoteDialog.forcePush": "Force push",
	"quickCreateBtnLabel.label": "Open quick create menu",
	"quickCreateMenu.learnMore": "Learn More",
	"quickCreateMenu.learnMoreError": "Quick create has not been configured. Please contact your system administrator.",
	"quickCreateMenu.sectionTitle": "Quick Create",
	"quickCreateMenu.title": "New Content",
	"recentActivity.lastEditedBy": "Last Edited By",
	"recentActivity.publishDate": "Publish Date",
	"recentActivityDashlet.dashletTitle": "My Recent Activity",
	"recentActivityDashlet.emptyMessage": "No recent activity",
	"recentActivityDashlet.filterBy": "Filter by",
	"recentActivityDashlet.hideLiveItems": "Hide Live Items",
	"recentActivityDashlet.showLiveItems": "Show Live Items",
	"recentlyPublished.myLastEdit": "My Last Edit",
	"recentlyPublished.publishDate": "Publish Date",
	"recentlyPublished.publishedBy": "Published By",
	"recentlyPublished.publishedTo": "Published To",
	"recentlyPublishedDashlet.collapseAll": "Collapse All",
	"recentlyPublishedDashlet.dashletTitle": "Recently Published ({total})",
	"recentlyPublishedDashlet.emptyMessage": "No items published recently",
	"recentlyPublishedDashlet.expandAll": "Expand All",
	"recentlyPublishedDashlet.filterBy": "Filter by",
	"recentlyPublishedDashlet.showAll": "All ({total})",
	"register.dropTargetsNotFound": "There are no drop targets for {contentType} components",
	"register.notFound": "{name} is not visible or was not registered by it's developer",
	"rejectDialog.cancel": "Cancel",
	"rejectDialog.continue": "Reject",
	"rejectDialog.firstPublish": "The entire site publish will be rejected since this is the first publish request",
	"rejectDialog.noItemsSelected": "There are no files to reject",
	"rejectDialog.predefinedRejectionComments": "Predefined Rejection Comments",
	"rejectDialog.rejectCommentLabel": "Rejection Comment",
	"rejectDialog.submittedBy": "Submitted By",
	"rejectDialog.subtitle": "The following checked item(s) will be rejected.",
	"rejectDialog.title": "Reject",
	"rejectDialog.typeMyOwnComment": "Type my own comment",
	"remoteRepositories.title": "Remote Repositories",
	"reposAdmin.pendingCommit": "Repo contains files pending commit. See Repository status below for details.",
	"reposAdmin.repositoriesNote": "Do not use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.",
	"reposAdmin.unreachableRemote": "Remote \"{name}\" is currently unreachable.",
	"reposAdmin.unstagedFilesMessage": "There are unstaged files in your repository.",
	"repositories.acceptRemote": "Accept Remote",
	"repositories.acceptRemoteHelper": "Override local file with the version pulled from remote.",
	"repositories.commitResolution": "Commit Resolution",
	"repositories.commitResolutionHelper": "After committing this resolution. you should 'push' the changes to remote(s) to sync up the new state that you have just defined.",
	"repositories.commitSuccessMessage": "Successfully committed.",
	"repositories.confirmHelper": "Cancel pull operation and keep what's on this repository.",
	"repositories.conflictsExist": "Repository operations are disabled while conflicts exist. Please resolve conflicts.",
	"repositories.deleteConfirmation": "Delete remote repository?",
	"repositories.fetching": "Fetching repository status...",
	"repositories.forcePushWarning": "Force push will overwrite what's in the remote repository branch.",
	"repositories.keepLocal": "Keep Local",
	"repositories.keepLocalHelper": "Discard remote changes and keep the local file.",
	"repositories.mergeStrategyLabel": "Merge Strategy",
	"repositories.mergeStrategyNone": "None",
	"repositories.mergeStrategyOurs": "Accept Ours",
	"repositories.mergeStrategyTheirs": "Accept Theirs",
	"repositories.messageLabel": "Conflict resolution message",
	"repositories.newRemoteDialogTitle": "New Remote Repository",
	"repositories.newRepository": "New Remote",
	"repositories.noConflicts": "Local repository is free of conflicts.",
	"repositories.pendingCommit": "Repo contains files pending commit. See Repository status below for details.",
	"repositories.pullFromCreatedBranchOnlyHint": "You may only pull from the branch the site was created from; any feature branch work should be merged upstream.",
	"repositories.pullSuccessMessage": "Successfully pulled {numberOfCommits} commits. Merge commit id was copied to clipboard. Would you like to publish this now?",
	"repositories.pullSuccessNoChangesMessage": "Pull successful: already up to date.",
	"repositories.pushSuccessMessage": "Successfully pushed.",
	"repositories.pushUrl": "Push URL",
	"repositories.remoteBranchToPull": "Remote Branch to Pull",
	"repositories.remoteBranchToPush": "Remote Branch to Push",
	"repositories.remoteCreateSuccessMessage": "Remote repository created successfully.",
	"repositories.remoteDeleteSuccessMessage": "Remote repository deleted successfully.",
	"repositories.remoteName": "Remote Git Repository Name",
	"repositories.remoteUrl": "Remote Repository URL",
	"repositories.repoRemoteNameHelper": "Name the remote that will refer to the source repo to pull from.",
	"repositories.repoRemoteUrlHelper": "The git repository URL to create from.",
	"repositories.revertAll": "Revert All",
	"repositories.revertPullSuccessMessage": "Successfully reverted repository.",
	"repositories.sandboxBranchRetrievalError": "Unable to retrieve project’s branch",
	"repositories.splitView": "Split View",
	"repositories.unstagedFiles": "There are unstaged files in your repository.",
	"repository.conflictedFiles": "Conflicted Files",
	"repository.pendingCommit": "Pending Commit",
	"repository.repositoryStatusLabel": "Repository Status",
	"repository.statusNote": "Do not use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.",
	"requestPublishDialog.cancel": "Cancel",
	"resetPasswordDialog.helperText": "Set a new password for \"{user}\" user",
	"resetPasswordDialog.passwordUpdated": "Password updated successfully",
	"resetPasswordDialog.title": "Reset Password",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "Confirm Password",
	"resetView.resetPasswordError": "Error resetting password. Token may be invalid or expired.",
	"resetView.resetPasswordFieldPlaceholderLabel": "New Password",
	"resetView.resetPasswordInvalidToken": "Token validation failed.",
	"resetView.resetPasswordSuccess": "Password successfully reset. Please login with your new password.",
	"rteControlMessages.chooseSource": "Choose a Source",
	"rteControlMessages.dropImageUploaded": "{title} was successfully uploaded.",
	"rteControlMessages.escapeScripts": "Escape Scripts",
	"rteControlMessages.incompatibleDatasource": "The data source configured for browse is not compatible with the Rich Text Editor. Please contact your administrator.",
	"rteControlMessages.noDatasourcesConfigured": "No sources configured for this editor.",
	"rteControlMessages.requiredField": "Field is Required",
	"scheduledDashlet.widgetTitle": "Scheduled for Publish",
	"search.acceptSelection": "Accept Selection",
	"search.changeQuery": "Try changing your query.",
	"search.clearSelected": "Clear {count} selected",
	"search.filtersActive": " • <span>Filters Active</span>",
	"search.goToPreview": "Go to page",
	"search.itemsPerPage": "Items per page:",
	"search.noPermissions": "No permissions available.",
	"search.noResults": "No Results Were Found.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Select all on this page",
	"search.selectionCount": "{count} selected",
	"search.videoProcessed": "Video is being processed, preview will be available when processing is complete",
	"searchAhead.noResults": "No Results.",
	"searchBar.placeholder": "Filter...",
	"searchFilter.above": "Above {value}{unit}",
	"searchFilter.anyPath": "Any Path",
	"searchFilter.asc": "Ascending",
	"searchFilter.byRelevanceAscMessage": "Less relevant first",
	"searchFilter.byRelevanceDescMessage": "Most relevant first",
	"searchFilter.clearFilters": "Clear Filters",
	"searchFilter.contentType": "Content Type",
	"searchFilter.desc": "Descending",
	"searchFilter.internalName": "Name",
	"searchFilter.lastEditDate": "Last Edit Date",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Search in:",
	"searchFilter.size": "Content Size",
	"searchFilter.sortBy": "Sort By",
	"searchFilter.under": "Under {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Change view",
	"searchToolBar.showHideFilters": "Show/hide filters",
	"setWorkflowStateDialog.clearAsPublishedLive": "Clear as published live",
	"setWorkflowStateDialog.clearAsPublishedToStaging": "Clear as published to staging",
	"setWorkflowStateDialog.clearModified": "Clear modified",
	"setWorkflowStateDialog.clearNew": "Clear new",
	"setWorkflowStateDialog.clearSystemProcessing": "Clear system processing",
	"setWorkflowStateDialog.clearUserLock": "Clear user lock",
	"setWorkflowStateDialog.setAsPublishedLive": "Set as published live",
	"setWorkflowStateDialog.setAsPublishedToStaging": "Set as published to staging",
	"settingsPanel.editMode": "Edit Mode (e | m)",
	"settingsPanel.editModeHelperText": "Enable/disabled in-context editing",
	"settingsPanel.editModePaddingHelp": "Adds padding to collections for easier interaction in edit-mode. Press `p` at any point to toggle on/off.",
	"settingsPanel.editModePaddingLabel": "Padding mode (p)",
	"settingsPanel.highlightAllTargets": "Highlight all targets (e)",
	"settingsPanel.highlightMode": "Highlight Mode",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is selected, only content items you can be moved or sorted highlight. Text inputs and other non-movable won't highlight. Press `e` and `m` at any point to toggle between modes.",
	"settingsPanel.highlightMovable": "Highlight movable (m)",
	"sharedContentDS.sharedContent": "Shared Content",
	"shortcuts.disableICE": "Disable ICE while held down (to click through)",
	"shortcuts.editModePadding": "Toggle edit mode padding",
	"shortcuts.reloadPreview": "Reload preview",
	"shortcuts.showShortcuts": "Show keyboard shortcuts",
	"shortcuts.toggleEditMode": "Edit Mode ON/OFF",
	"shortcuts.toggleMoveMode": "Move Mode ON/OFF",
	"site.deleted": "Project deleted successfully",
	"siteCard.helperText": "Delete \"{site}\" project?",
	"siteComponentDS.componentPath": "Component Path",
	"siteComponentDS.dataType": "Data Type",
	"siteComponentDS.date": "Date",
	"siteComponentDS.float": "Float",
	"siteComponentDS.html": "Data Type",
	"siteComponentDS.integer": "Integer",
	"siteComponentDS.label": "Taxonomy Selector",
	"siteComponentDS.required": "Required",
	"siteComponentDS.siteComponent": "Project Component",
	"siteComponentDS.string": "String",
	"siteComponentDS.unableLoad": "The system was unable to load {file}.",
	"siteConfig.controlNotAvailable": "Control not available",
	"siteConfig.insertExpressionMessage": "Insert Expression",
	"siteConfig.invalidNumber": "\"{value}\" is not a valid number.",
	"siteConfig.landingMessage": "Please choose a tool from the left.",
	"siteConfig.loadModuleError": "Unable to load \"{tool}\". Check project tools configuration.",
	"siteConfig.postfixes": "Postfixes",
	"siteConfig.switchToMessage": "Switch to {type}",
	"siteConfig.toolNotFound": "\"{tool}\" tool not found.",
	"siteConfigurationManagement.activeEnvironment": "{environment} Environment",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS Profiles",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "AWS profiles configuration file.",
	"siteConfigurationManagement.confTabAssetProcessing": "Asset Processing",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Asset processing configuration file.",
	"siteConfigurationManagement.confTabBlobStores": "Blob Stores",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob stores configuration file.",
	"siteConfigurationManagement.confTabBoxProfiles": "Box Profiles",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Box profiles configuration file.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS Configuration",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "This files configures 0 or more CMIS-capable repositories as data-sources for content authors to pick from",
	"siteConfigurationManagement.confTabCodeEditorConf": "Code Editor Configuration",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Defines Code Editor configurations",
	"siteConfigurationManagement.confTabConfDesc": "Defines this list of configurations",
	"siteConfigurationManagement.confTabConfigurations": "Configurations",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Contextual Navigation Configuration",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Defines modules on the project contextual navigation bar",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Dependency Resolver Configuration",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "This file configures what file paths Crafter considers a dependency and how they should be extracted.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Dev Environment Configuration",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Defines a dev environment configuration",
	"siteConfigurationManagement.confTabEndpointsConf": "Endpoints Configuration",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Defines a list of end points available",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Engine Project Application Context",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Project application context used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Engine Project Application Context - Live",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Engine Project Application Context - Preview",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Engine Project Application Context - Staging",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Engine Project Configuration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Project configuration used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Engine Project Configuration - Live",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Engine Project Configuration - Preview",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Engine Project Configuration - Staging",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Engine URL Rewrite Configuration (XML Style)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "This file configures project properties used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Engine URL Rewrite Configuration (XML Style) - Live",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Engine URL Rewrite Configuration (XML Style) - Preview",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Engine URL Rewrite Configuration (XML Style) - Staging",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Environment Configuration",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "This file configures the environments Crafter Studio can publish to",
	"siteConfigurationManagement.confTabMimeTypes": "Mime Types",
	"siteConfigurationManagement.confTabMimeTypesDesc": "This file configures the mime types icons overrides for this project/blueprint.",
	"siteConfigurationManagement.confTabNotificationConf": "Notification Configuration",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Defines a list of UI messages",
	"siteConfigurationManagement.confTabPermissionsMappings": "Permissions Mapping",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Defines a map of permissions and paths",
	"siteConfigurationManagement.confTabPersonasConf": "Personas Configuration",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Defines a list of personas available to assume in preview",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Preview Asset Configuration",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Defines a list of editable assets associated with XML contents",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Preview Components Configuration",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Defines a list of components that can be created dynamically in preview",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Preview Panel Configuration",
	"siteConfigurationManagement.confTabProxyConfig": "Proxy Config",
	"siteConfigurationManagement.confTabProxyConfigDesc": "This file configures the proxy servers for preview.",
	"siteConfigurationManagement.confTabRoleMappings": "Role Mappings",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Defines a list of roles available in project",
	"siteConfigurationManagement.confTabSidebarConf": "Sidebar Configuration",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Defines modules on the sidebar",
	"siteConfigurationManagement.confTabSiteConf": "Content Type Editor Config",
	"siteConfigurationManagement.confTabSiteConfDesc": "Defines controls and datasources available for content type editing",
	"siteConfigurationManagement.confTabSiteConfiguration": "Project Configuration",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Defines the general project configuration",
	"siteConfigurationManagement.confTabSitePolicyConf": "Project Policy Configuration",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Defines policies to validate content operations",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Targeting Configuration",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "This file configures the targeting system of Crafter Studio to help provide Crafter Engine with fake user properties that help drive the targeting system",
	"siteConfigurationManagement.confTabTargetsConf": "Targets Configuration",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Defines a list of targets used for form datasource",
	"siteConfigurationManagement.confTabTranslationConf": "Translation Configuration",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Defines supported languages and how to resolve them",
	"siteConfigurationManagement.confTabUiConf": "User Interface Configuration",
	"siteConfigurationManagement.confTabUiConfDesc": "Defines the widgets shown in the user interface",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "WebDAV profiles configuration file.",
	"siteConfigurationManagement.confTabWorkflowConf": "Workflow Configuration",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Defines workflows available in the system",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Defines a list of tools available in preview",
	"siteConfigurationManagement.environment": "The active environment is \"{environment}\"",
	"siteConfigurationManagement.hideSample": "Hide Sample",
	"siteConfigurationManagement.history": "History",
	"siteConfigurationManagement.rteConfigDescription": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.rteConfigTitle": "RTE Configuration",
	"siteConfigurationManagement.selectConfigFile": "Please choose a config file from the left.",
	"siteConfigurationManagement.title": "Configuration",
	"siteConfigurationManagement.unsavedChangesSubtitle": "You have unsaved changes, do you want to leave?",
	"siteConfigurationManagement.unsavedChangesTitle": "Unsaved changes",
	"siteConfigurationManagement.viewSample": "View Sample",
	"siteDashboard.emptyStateMessageSubtitle": "Add widgets at your project's User Interface Configuration",
	"siteDashboard.emptyStateMessageTitle": "No widgets to display",
	"siteSearch.noOptionsAvailable": "No options available",
	"siteSearch.unknownErrorSearching": "An error occurred with the search service.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Choose site",
	"siteTools.itemStates": "Item States",
	"siteTools.selectTool": "Please choose a tool from the left.",
	"siteTools.title": "Project Tools",
	"siteTools.toolListingNotConfigured": "The project tools list has not been set",
	"siteTools.toolListingNotConfiguredSubtitle": "Please set the craftercms.siteTools reference on the ui.xml",
	"siteTools.toolNotFound": "Tool not found",
	"sites.ChangeView": "Change view",
	"sites.createGroup": "Create Group",
	"sites.createSite": "Create Project",
	"sitesAdmin.siteUpdated": "Project Updated.",
	"sitesGrid.emptyStateMessage": "No Projects Found",
	"sitesGrid.siteDeleted": "Project deleted successfully",
	socketConnectionIssue: socketConnectionIssue,
	"systemType.asset": "Asset",
	"systemType.component": "Component",
	"systemType.folder": "Folder",
	"systemType.levelDescriptor": "Level Descriptor",
	"systemType.page": "Page",
	"systemType.renderingTemplate": "Rendering Template",
	"systemType.script": "Script",
	"systemType.taxonomy": "Taxonomy",
	"targetingDialog.setNow": "Set Now",
	"tokenManagement.clearSelected": "Clear Selected ({count})",
	"tokenManagement.copied": "Token copied to clipboard",
	"tokenManagement.createToken": "Create Token",
	"tokenManagement.created": "Token created and copied to clipboard",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Delete Selected",
	"tokenManagement.emptyTokens": "There are no tokens, click on Create Token to add a new one",
	"tokenManagement.helperText": "Delete \"{label}\" token?",
	"tokenManagement.updated": "Token updated",
	"transcodedVideoPickerControl.label": "Transcoded Video",
	"transferList.addDisabledTooltip": "Select items to add from the left",
	"transferList.addToTarget": "Add selected",
	"transferList.emptyListMessage": "All users are members of this group",
	"transferList.removeDisabledTooltip": "Select items to remove from the right",
	"transferList.removeFromTarget": "Remove selected",
	"transferList.targetEmptyStateMessage": "No members on this group",
	"transferListColumn.noResults": "No results, try to change the query",
	"uninstallPluginDialog.headerSubtitle": "Please confirm the uninstalling of \"{pluginId}\"",
	"uninstallPluginDialog.headerTitle": "Uninstall Plugin",
	"uninstallPluginDialog.noUsagesFound": "No usages found",
	"uninstallPluginDialog.pluginSafeToUninstall": "The plugin can be safely uninstalled.",
	"uninstallPluginDialog.reviewDependenciesMessage": "Please review the dependant items of \"{pluginId}\"",
	"uninstallPluginDialog.typePassword": "Type the word \"<b>{password}</b>\" to confirm the deletion of the plugin.",
	"unlockPublisherDialog.dialogCopy": "Please confirm the release of the publisher lock",
	"unlockPublisherDialog.dialogTitle": "Confirm Publisher Unlock",
	"unlockPublisherDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm you understand the implications and wish to proceed.",
	"unlockPublisherDialog.unlockCompleteMessage": "Publisher lock released successfully.",
	"unlockPublisherDialog.unlockFailedMessage": "Error releasing publisher lock.",
	"unpublishedDashlet.entrySecondaryText": "Edited by {name} on {date}",
	"unpublishedDashlet.noUnpublishedItems": "There are no unpublished items",
	"unpublishedDashlet.widgetTitle": "Unpublished Work",
	"uploadDialog.title": "Upload",
	"uploadDialog.uploadInProgress": "Uploads are still in progress. Leaving this page would stop the pending uploads. Are you sure you wish to leave?",
	"uploadDialog.uploadInProgressConfirmation": "Uploads are still in progress. Closing this modal would stop the pending uploads. Are you sure you wish to close it?",
	"uppyCore.noDuplicates": "Cannot add the duplicate file “%'{fileName}'”, it already exists",
	"uppyDashboard.acceptAll": "Accept all changes",
	"uppyDashboard.addMore": "Add more",
	"uppyDashboard.addingMoreFiles": "Adding more files",
	"uppyDashboard.cancelPending": "Cancel pending",
	"uppyDashboard.clearCompleted": "Clear completed",
	"uppyDashboard.maxActiveUploadsReached": "{maxFiles} maximum active uploads reached. Excess has been discarded.",
	"uppyDashboard.maxFiles": "{maxFiles} max.",
	"uppyDashboard.rejectAll": "Reject all changes",
	"uppyDashboard.removeFile": "Remove file",
	"uppyDashboard.renamingFromTo": "Renaming from %'{from}' to %'{to}'",
	"uppyDashboard.validateAndRetry": "Accept changes and upload",
	"userGroupMembershipEditor.addOrRemoveError": "Error modifying user group(s). Please try again momentarily.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Close",
	"userInfoDialog.deleteUser": "Delete user",
	"userInfoDialog.externallyManaged": "Managed externally",
	"userInfoDialog.helperText": "Delete \"{username}\" user?",
	"userInfoDialog.noRoles": "No roles",
	"userInfoDialog.resetPassword": "Reset password",
	"userInfoDialog.siteName": "Project name",
	"userInfoDialog.siteRoles": "Roles per project",
	"userInfoDialog.userDeleted": "User deleted successfully",
	"userInfoDialog.userDetails": "User Details",
	"userInfoDialog.userDisabled": "User disabled successfully",
	"userInfoDialog.userEnabled": "User enabled successfully",
	"userInfoDialog.userUpdated": "User updated successfully",
	"usersAdmin.firstName": "First Name",
	"usersAdmin.lastName": "Last Name",
	"usersAdmin.maxLengthError": "{field} can't be longer than {size} characters",
	"usersAdmin.passwordChangeSuccessMessage": "Password changed successfully",
	"usersAdmin.userCreated": "{username} created.",
	"usersAdmin.userDeleted": "{username} deleted.",
	"usersAdmin.userEdited": "{username} edited.",
	"usersAdmin.userName": "User Name",
	"usersGrid.createUser": "Create User",
	"usersGrid.emptyStateMessage": "No Users Found",
	"validations.itemLocked": "The item is already locked by {lockOwner}. Please try again later.",
	"validations.maxCount": "The max number of items is {maxCount}",
	"validations.maxLength": "Maximum length reached ({maxLength})",
	"validations.minCount": "The min number of items is {minCount}",
	"validations.noDataSourcesSet": "There are no data sources set for this field",
	"validations.noPathSetInDataSource": "No path was set for the data source",
	"validations.outOfSyncContent": "An automatic reload was performed because the item was changed in the background. Please try again.",
	"validations.required": "{field} is required",
	"viewVersionDialog.headerTitle": "Viewing item version",
	"wcmRootFolder.pathNotFound": "Folder {path} not found.",
	"widgetComponent.componentNotFoundSubtitle": "Check ui config & make sure you've installed the plugins that contain the desired components.",
	"widgetComponent.componentNotFoundTitle": "Component {id} not found.",
	"widgetComponent.pluginLoadFailedMessageBody": "With {info} & component id \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Plugin load failed",
	"withEmptyState.defaultEmptyStateMessage": "No results found",
	"word.configuration": "Configuration",
	"word.refresh": "Refresh",
	"word.upload": "Upload",
	"words.about": "About",
	"words.accept": "Accept",
	"words.account": "Account",
	"words.activity": "Activity",
	"words.all": "All",
	"words.apply": "Apply",
	"words.approve": "Approve",
	"words.asset": "Asset",
	"words.assets": "Assets",
	"words.audit": "Audit",
	"words.authentication": "Authentication",
	"words.author": "Author",
	"words.back": "Back",
	"words.base": "Base",
	"words.branch": "Branch",
	"words.browse": "Browse",
	"words.by": "By",
	"words.cancel": "Cancel",
	"words.clear": "Clear",
	"words.close": "Close",
	"words.cluster": "Cluster",
	"words.collapse": "Collapse",
	"words.compact": "Compact",
	"words.component": "Component",
	"words.components": "Components",
	"words.configuration": "Configuration",
	"words.confirm": "Confirm",
	"words.content": "Content",
	"words.continue": "Continue",
	"words.copy": "Copy",
	"words.create": "Create",
	"words.created": "Created",
	"words.custom": "Custom",
	"words.cut": "Cut",
	"words.dashboard": "Dashboard",
	"words.defaults": "Defaults",
	"words.delete": "Delete",
	"words.dependencies": "Dependencies",
	"words.description": "Description",
	"words.desktop": "Desktop",
	"words.details": "Details",
	"words.diff": "Diff",
	"words.disable": "Disable",
	"words.disabled": "Disabled",
	"words.dismiss": "Dismiss",
	"words.documentation": "Documentation",
	"words.done": "Done",
	"words.duplicate": "Duplicate",
	"words.edit": "Edit",
	"words.edited": "Edited",
	"words.email": "E-mail",
	"words.enable": "Enable",
	"words.enabled": "Enabled",
	"words.error": "Error",
	"words.expand": "Expand",
	"words.expiration": "Expiration",
	"words.expired": "Expired",
	"words.expiring": "Expiring",
	"words.fetch": "Fetch",
	"words.fetching": "Fetching",
	"words.files": "Files",
	"words.filter": "Filter",
	"words.filters": "Filters",
	"words.firstName": "First name",
	"words.folder": "Folder",
	"words.font": "Font",
	"words.forward": "Forward",
	"words.from": "From",
	"words.git": "Git",
	"words.global": "Global",
	"words.go": "Go",
	"words.graphQL": "GraphQL",
	"words.groups": "Groups",
	"words.height": "Height",
	"words.history": "History",
	"words.icon": "Icon",
	"words.id": "Id",
	"words.image": "Image",
	"words.install": "Install",
	"words.installed": "Installed",
	"words.item": "Item",
	"words.label": "Label",
	"words.language": "Language",
	"words.lastName": "Last name",
	"words.level": "Level",
	"words.live": "Live",
	"words.loading": "Loading",
	"words.local": "Local",
	"words.locales": "Locales",
	"words.location": "Location",
	"words.locked": "Locked",
	"words.logger": "Logger",
	"words.login": "Login",
	"words.logout": "Logout",
	"words.max": "Max",
	"words.members": "Members",
	"words.message": "Message",
	"words.min": "Min",
	"words.minimize": "Minimize",
	"words.move": "Move",
	"words.name": "Name",
	"words.never": "Never",
	"words.no": "No",
	"words.notification": "Notification",
	"words.now": "Now",
	"words.ok": "Ok",
	"words.options": "Options",
	"words.page": "Page",
	"words.pages": "Pages",
	"words.parameters": "Parameters",
	"words.password": "Password",
	"words.paste": "Paste",
	"words.pasting": "Pasting...",
	"words.path": "Path",
	"words.pause": "Pause",
	"words.phone": "Phone",
	"words.presets": "Presets",
	"words.preview": "Preview",
	"words.processing": "Processing",
	"words.project": "Project",
	"words.projects": "Projects",
	"words.publish": "Publish",
	"words.published": "Published",
	"words.publishing": "Publishing",
	"words.pull": "Pull",
	"words.push": "Push",
	"words.queued": "Queued",
	"words.range": "Range",
	"words.ready": "Ready",
	"words.reason": "Reason",
	"words.refresh": "Refresh",
	"words.reject": "Reject",
	"words.relevance": "Relevance",
	"words.remote": "Remote",
	"words.rename": "Rename",
	"words.reset": "Reset",
	"words.retry": "Retry",
	"words.revert": "Revert",
	"words.review": "Review",
	"words.roles": "Roles",
	"words.save": "Save",
	"words.schedule": "Schedule",
	"words.script": "Script",
	"words.scripts": "Scripts",
	"words.search": "Search",
	"words.select": "Select",
	"words.selected": "Selected",
	"words.shortcuts": "Shortcuts",
	"words.show": "Show",
	"words.snippets": "Snippets",
	"words.staged": "Staged",
	"words.staging": "Staging",
	"words.start": "Start",
	"words.state": "State",
	"words.status": "Status",
	"words.stay": "Stay",
	"words.stop": "Stop",
	"words.stopped": "Stopped",
	"words.submit": "Submit",
	"words.system": "System",
	"words.tablet": "Tablet",
	"words.taxonomy": "Taxonomy",
	"words.template": "Template",
	"words.templates": "Templates",
	"words.thread": "Thread",
	"words.timeline": "Timeline",
	"words.timestamp": "Timestamp",
	"words.to": "To",
	"words.token": "Token",
	"words.translation": "Translation",
	"words.type": "Type",
	"words.uninstall": "Uninstall",
	"words.unknown": "Unknown",
	"words.unlock": "Unlock",
	"words.unpublished": "Unpublished",
	"words.update": "Update",
	"words.upload": "Upload",
	"words.url": "URL",
	"words.userName": "Username",
	"words.username": "Username",
	"words.users": "Users",
	"words.validating": "Validating",
	"words.value": "Value",
	"words.version": "Version",
	"words.view": "View",
	"words.warning": "Warning",
	"words.width": "Width",
	"words.yes": "Yes",
	"workflowCancellation.cancel": "Cancel",
	"workflowCancellation.continue": "Continue",
	"workflowCancellation.subtitle": "Edit will cancel all items that are in the scheduled deployment batch. Please review the list of files below and chose “Continue” to cancel workflow and edit or “Cancel” to remain in your dashboard.",
	"workflowCancellation.title": "Warning: Workflow Cancellation",
	"workflowCancellationDialog.noAffectedFiles": "There are no affected files",
	"workflowStateManagementMessages.statesUpdatedMessage": "State for {count} {count, plural, one {item} other {items}} updated successfully",
	"workflowStates.locked": "Locked",
	"workflowStates.setState": "{count, plural, one {Set State for \"{name}\"} other {Set State for Items ({count})}}",
	"workflowStates.title": "Workflow States"
};

var guestDetectionMessage$1 = "La comunicación con la aplicación de vista previa fue interrumpida. Studio continuará reintentando la conexión.";
var socketConnectionIssue$1 = "Se interrumpió la conexión con el servidor. Studio continuará reintentando la conexión.";
var es = {
	"CreateUserDialog.title": "Crear usuario",
	"GlobalMenu.Audit": "Auditoría",
	"GlobalMenu.Sites": "Proyectos",
	"GraphiQL.title": "GraphiQL",
	"InstallPluginDialog.empty": "No se encontraron complementos.",
	"InstallPluginDialog.title": "Complemento de búsqueda e instalación",
	"about.buildDate": "La fecha de construcción",
	"about.buildNumber": "Número de compilación",
	"about.studioVersionNumber": "Número de versión de Studio",
	"about.versionNumber": "Número de versión",
	"aboutView.attribution": "CrafterCMS es posible gracias a otros <a>proyectos de software de código abierto</a>.",
	"accountManagement.changeHelperText": "Una vez que su contraseña se haya actualizado correctamente, se le pedirá que inicie sesión nuevamente.",
	"accountManagement.changeLanguage": "Cambiar idioma",
	"accountManagement.changePassword": "Cambia la contraseña",
	"accountManagement.confirmPassword": "Confirmar contraseña",
	"accountManagement.currentPassword": "Contraseña actual",
	"accountManagement.languageUpdated": "La preferencia de idioma cambió",
	"accountManagement.newPassword": "Nueva contraseña",
	"accountManagement.passwordChanged": "Contraseña cambiada con éxito",
	"accountManagement.passwordInvalid": "La contraseña no es válida.",
	"accountManagement.passwordMatch": "Debe coincidir con la contraseña anterior.",
	"adminConfigurations.allEncrypted": "No hay elementos pendientes de ser cifrados. Para marcar para el cifrado, el attributo `encrypted` debe tener un valor en blanco (por ejemplo, `encrypted=\"\"`)",
	"adminConfigurations.configSaved": "Configuración guardada con éxito.",
	"adminConfigurations.documentError": "El documento contiene errores. Compruebe si hay marcadores de error en el lateral del editor.",
	"adminConfigurations.encryptHinPt1": "Para cifrar el contenido de una etiqueta, (1) marque las etiquetas deseadas para el cifrado, luego (2) haga clic en el botón \"Cifrar marcado\".",
	"adminConfigurations.encryptHinPt2": "(1) Marque sus etiquetas para el cifrado agregando el atributo <bold>`encrypted =\" \"`</bold>.",
	"adminConfigurations.encryptHinPt3": "Ejemplo: {lt}accessKey encrypted = \"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) Haga clic en el botón <bold>`Cifrar marcado '</bold>. Trás completar la petición, su etiqueta ahora debería verse así:",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted = \"true\"{gt}${lc}enc: xeJW23SomeEncryptedValuesListedHere{rc}{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "Recuerde:",
	"adminConfigurations.encryptHinPt7": "Utilice el atributo `encrypted =” ”` solo en etiquetas que contengan directamente el valor a cifrar (texto).",
	"adminConfigurations.encryptHinPt8": "No agregue el atributo en etiquetas que contengan otras etiquetas, a menos que quiera cifrar una cadena de XML.",
	"adminConfigurations.encryptHinPt9": "No manipule los resultados de cifrado manualmente.",
	"adminConfigurations.encryptMarked": "Cifrar marcados",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" con el valor \"{value}\"",
	"adminConfigurations.noEncryptItems": "No se encontraron elementos para cifrar en el XML. Agregue el atributo `encrypted=\"\"` para marcar para el cifrado.",
	"adminConfigurations.pendingEncryption": " {itemCount, plural, one {La etiqueta {tags} está marcada para encriptar pero no ha sido cifrada}other {Las etiquetas: {tags} {br} están marcados para encriptar pero no se han cifrado}}, active el cifrado o elimine el marcado de etiquetas.",
	"adminConfigurations.xmlContainsErrors": "El documento XML contiene errores: {errors}",
	"approvedScheduledItemsDashlet.collapseAll": "Desplegar todo",
	"approvedScheduledItemsDashlet.dashletTitle": "Elementos programados aprobados ({count})",
	"approvedScheduledItemsDashlet.emptyMessage": "No hay elementos programados",
	"approvedScheduledItemsDashlet.expandedAll": "Expandir todo",
	"approvedScheduledItemsDashlet.filterBy": "Filtrado por",
	"asyncVideoPlayer.videoBeingProcessed": "El video se está procesando, la vista previa estará disponible cuando se complete el procesamiento",
	"audiencesPanel.apply": "Aplicar",
	"audiencesPanel.defaults": "Valores predeterminados",
	"audiencesPanel.undefinedControlType": "Tipo de control desconocido",
	"auditGrid.allOrigins": "Todos los orígenes",
	"auditGrid.allSites": "Todos los proyectos",
	"auditGrid.allUsers": "Todos los usuarios",
	"auditGrid.clearFilters": "Borrar filtros",
	"auditGrid.clusterNode": "Nodo de clúster",
	"auditGrid.emptyStateMessage": "No se encontraron registros",
	"auditGrid.name": "Nombre",
	"auditGrid.noParameters": "Sin parámetros",
	"auditGrid.operation": "Operación",
	"auditGrid.origin": "Origen",
	"auditGrid.parameters": "Parámetros",
	"auditGrid.showParameters": "Mostrar parámetros",
	"auditGrid.siteName": "Proyecto",
	"auditGrid.targetType": "Tipo de objetivo",
	"auditGrid.targetValue": "Valor objetivo",
	"auditGrid.timestamp": "marca de tiempo",
	"auditGrid.timezone": "Zona horaria",
	"auditGrid.username": "Nombre de usuario",
	"auditGridFilterPopover.allOperations": "Todas las operaciones",
	"auditGridFilterPopover.filterByCluster": "Filtrar por nodo de clúster",
	"auditGridFilterPopover.filterByOperations": "Filtrar por operaciones",
	"auditGridFilterPopover.filterByOrigin": "Filtrar por origen",
	"auditGridFilterPopover.filterBySite": "Filtrar por proyecto",
	"auditGridFilterPopover.filterByTarget": "Filtrar por valor objetivo",
	"auditGridFilterPopover.filterByUser": "Filtrar por usuario",
	"authMonitor.dialogTitleText": "Sesión expirada",
	"authMonitor.incorrectPasswordMessage": "Contraseña incorrecta. Inténtalo de nuevo.",
	"authMonitor.logOutButtonLabel": "Cerrar sesión",
	"authMonitor.openSSOLoginButtonLabel": "Abrir formulario de inicio de sesión",
	"authMonitor.passwordTextFieldLabel": "Contraseña",
	"authMonitor.postSSOLoginMismatchMessage": "Parece que has iniciado sesión con un usuario diferente al propietario de esta sesión. Por razones de seguridad, su pantalla ahora se actualizará.",
	"authMonitor.sessionExpiredMessage": "Su sesión ha caducado. Por favor, vuelva a iniciar sesión.",
	"authMonitor.ssoOpenPopupMessage": "Asegúrese de que las ventanas emergentes no estén bloqueadas. Una vez que inicie sesión, regrese a esta ventana y haga clic en el botón \"Reanudar\" a continuación.",
	"authMonitor.usernameTextFieldLabel": "Nombre de usuario",
	"authMonitor.validateSessionButtonLabel": "Continuar",
	"awaitingApprovalDashlet.collapseAll": "Desplegar todo",
	"awaitingApprovalDashlet.dashletTitle": "Elementos en espera de aprobación ({count})",
	"awaitingApprovalDashlet.emptyMessage": "No hay artículos en espera de aprobación.",
	"awaitingApprovalDashlet.expandedAll": "Expandir todo",
	"awaitingApprovalDashlet.hideUnpublished": "Ocultar no publicado",
	"awaitingApprovalDashlet.item": "ít",
	"awaitingApprovalDashlet.lastEdited": "Última edición",
	"awaitingApprovalDashlet.lastEditedBy": "Última edición por",
	"awaitingApprovalDashlet.publishingDate": "Fecha de publicación",
	"awaitingApprovalDashlet.publishingTarget": "Objetivo de publicación",
	"awaitingApprovalDashlet.showUnpublished": "Mostrar sin publicar",
	"browseCMIS.cloningCMIS": "Clonación de activos CMIS",
	"browseCMIS.cmis": "CMIS",
	"browseFilesDialog.emptyStateMessage": "La ruta `{path}` no existe.",
	"browseFilesDialog.noResults": "No se encontraron archivos.",
	"browseFilesDialog.uploadImage": "Seleccione Un Archivo",
	"browseSearchMessages.lookUpChildError": "No se puede buscar la devolución de llamada del formulario secundario para la búsqueda: {searchId}",
	"browseSearchMessages.lookUpParentError": "No se puede buscar el contexto principal para la búsqueda: {searchId}",
	"bulkUploadConfirmDialogMessages.description": "Hay un dialogo de subida de archivos",
	"bulkUploadConfirmDialogMessages.title": "Subida en progreso",
	"changeContentTypeDialog.emptyStateMessage": "No se encontraron tipos de contenido",
	"changeContentTypeDialog.subtitle": "Las siguientes plantillas de inicio están disponibles para su uso dentro de esta sección.",
	"changeContentTypeDialog.title": "Elija el tipo de contenido",
	"checkboxGroupControl.datasource": "Fuente de datos",
	"checkboxGroupControl.horizontal": "Horizontal",
	"checkboxGroupControl.listDirection": "Dirección de lista",
	"checkboxGroupControl.readonly": "Solo lectura",
	"checkboxGroupControl.showSelectAll": "Mostrar \"Seleccionar todo\"",
	"checkboxGroupControl.vertical": "Vertical",
	"childContentDS.childContent": "Contenido secundario (en desuso)",
	"clusterAdmin.clusterDeleted": "{cluster} eliminado.",
	"clusterGrid.authType": "Tipo de autenticación",
	"clusterGrid.confirmDeleteCluster": "¿Eliminar este clúster?",
	"clusterGrid.deleteCluster": "Eliminar clúster",
	"clusterGrid.emptyStateMessage": "No se encontraron clústeres",
	"clusterGrid.localAddress": "Direccion local",
	"clusterGrid.remoteName": "Nombre remoto",
	"clusterManagement.clusterDeleted": "Clúster eliminado correctamente",
	"codeEditor.confirm": "Confirmar Cerrar",
	"codeEditor.contentModel": "Modelo de contenido",
	"codeEditor.inProgressConfirmation": "Actualmente, hay otro editor abierto y minimizado. Cierre el editor actual antes de abrir otro.",
	"codeEditor.insertCode": "Insertar código",
	"codeEditor.localesConfirmBody": "La plantilla para la configuración regional que seleccionó no existe. ¿Quieres crearlo ahora?",
	"codeEditor.localesConfirmTitle": "crear plantilla",
	"codeEditor.localesHelperText": "Seleccione la configuración regional para la que crear o editar una plantilla. Las configuraciones regionales, como 'en' cubrirán sub-configuraciones regionales como 'en_us' o 'en_uk'.",
	"codeEditor.localesSnackBarTitle": "Plantilla creada. ¿Quieres copiar la plantilla base?",
	"codeEditor.pendingChangesConfirmation": "¿Cerrar sin guardar cambios?",
	"codeEditor.saveAndClose": "Guardar cerrar",
	"codeEditor.saveAndMinimize": "Guardar y minimizar",
	"codeEditor.saved": "Se guardo correctamente",
	"codeEditor.stay": "No, quedarse",
	"codeEditor.title": "Editor de código",
	"common.back": "atrás",
	"common.clearSelectedWithCount": "Borrar {count} seleccionados",
	"common.collapseAll": "Plegar todo",
	"common.craftercms": "CrafterCMS",
	"common.developer": "Desarrollador",
	"common.expandAll": "Expandir todo",
	"common.license": "Licencia",
	"common.marketplace": "Mercado",
	"common.minimizedDialogSiteSwitchCheck": "Cierre los diálogos minimizados antes de cambiar de sitio",
	"common.moreInfo": "Más información",
	"common.password": "Contraseña",
	"common.privateKey": "Llave privada",
	"common.publishingTarget": "Objetivo de publicación",
	"common.remoteName": "Nombre remoto de Git",
	"common.toggleSidebarTooltip": "Alternar barra lateral",
	"common.token": "Simbólico",
	"common.use": "Utilizar",
	"common.userName": "Nombre de usuario",
	"common.usernameAndPassword": "Usuario Contraseña",
	"common.version": "Versión",
	"common.website": "sitio web",
	"compareVersionsDialog.back.selectRevision": "Volver a seleccionar revisión",
	"compareVersionsDialog.headerSubtitleCompare": "Seleccione una revisión para comparar",
	"compareVersionsDialog.headerSubtitleCompareTo": "Seleccione una revisión para compararla con \"{selectedA}\"",
	"compareVersionsDialog.headerTitle": "Comparar versiones de artículos",
	"compareVersionsDialog.pleaseContentItem": "Por favor contente el artículo",
	"componentsPanel.emptyComponentsSubtitle": "Comuníquese con sus desarrolladores para crear los componentes necesarios en el sistema.",
	"componentsPanel.emptyStateMessage": "No se encontraron componentes",
	"componentsPanel.suspenseStateMessage": "Recuperando modelo de página",
	"configurationMessages.localeError": "Configuración regional incorrecta: {message}. Usando la configuración regional del navegador. Verifique la configuración del sitio xml.",
	"configurationSamplePreviewDialog.appendContent": "Agregar después del contenido actual",
	"configurationSamplePreviewDialog.replaceContent": "Reemplazar contenido actual",
	"configurationSamplePreviewDialog.title": "Archivo de muestra",
	"configurationSamplePreviewDialog.useSampleContent": "Usar contenido de muestra",
	"contentLocalization.mark": "Marcar para traducción",
	"contentLocalization.title": "Localización de contenido",
	"contentType.RTEConfiguration": "Configuración RTE",
	"contentType.autoGrow": "Agrandar automáticamente",
	"contentType.contentTypeWarningMessage": "Tenga en cuenta que la fuente de datos de contenido secundario se está eliminando gradualmente de CrafterCMS. Para los componentes que deben compartirse entre páginas o componentes, utilice Contenido compartido en su lugar. Para los componentes que pertenecen exclusivamente a este objeto de contenido, utilice Contenido incorporado.",
	"contentType.continueEditing": "Continua editando",
	"contentType.dependsOn": "Esta propiedad depende de \"{dependency}\"",
	"contentType.enableSpellCheck": "Habilitar revisión ortográfica",
	"contentType.fileManager": "Administrador de archivos",
	"contentType.fileNameErrorMessage": "Los tipos de contenido requieren un nombre de archivo. Agregue un control \"Nombre de archivo\" o \"Nombre de archivo automático\" a esta definición de tipo de contenido.",
	"contentType.flatTitleError": "Complete todos los títulos de los campos y fuentes de datos.",
	"contentType.forceBRNewLines": "Forzar nuevas líneas",
	"contentType.forcePNewLines": "Forzar etiquetas p Nuevas líneas",
	"contentType.forceRootBlockP": "Forzar etiqueta \"p\"",
	"contentType.height": "Altura",
	"contentType.idError": "Por favor complete el nombre de la variable para:",
	"contentType.imageManager": "Administrador de imagen",
	"contentType.internalNameErrorMessage": "Este tipo de contenido requiere un nombre interno. Agregue un control \"Nombre interno\" a esta definición de tipo de contenido.",
	"contentType.maxSizeError": "El valor máximo no puede ser inferior al valor mínimo",
	"contentType.minSizeError": "El valor mínimo no puede ser mayor que el valor máximo",
	"contentType.noTemplateAssoc": "No hay una plantilla asociada con este tipo de contenido. Haga clic en Guardar para continuar con la operación de guardar o Continuar para actualizar el tipo de contenido (en Propiedades del tipo de contenido básico) con una plantilla.",
	"contentType.notice": "darse cuenta",
	"contentType.saveFailed": "Error al guardar",
	"contentType.supportedChannels": "Canales soportados",
	"contentType.useChildContent": "Utilice el control obsoleto de todos modos",
	"contentType.useEmbeddedContent": "Usar contenido incrustado",
	"contentType.useSharedContent": "Usar contenido compartido",
	"contentType.videoManager": "Gestor De Vídeo",
	"contentType.width": "anchura",
	"contextMenu.emptyOptionsMessage": "No hay opciones disponibles para mostrar.",
	"controlsCommonMessages.escapeContent": "Contenido de escape",
	"copyItems.cancel": "Cancelar",
	"copyItems.copy": "Dupdo",
	"copyItems.deselectAll": "Deseleccionar todo",
	"copyItems.selectAll": "Seleccionar todo",
	"copyTokenDialog.helperText": "Token creado con éxito. Copie el token y guárdelo de forma segura, ya que no podrá volver a ver su valor.",
	"copyTokenDialog.title": "Token de acceso creado",
	"craftercms.pages.option.noLocales": "El proyecto no tiene locales declarados.",
	"craftercms.pages.option.terminateSelection": "Terminar selección",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} elemento seleccionado} other {{count} elementos seleccionados}}",
	"craftercms.pages.widget.title": "Páginas",
	"createFileDialog.controller": "Nuevo controlador",
	"createFileDialog.createPolicy": "El nombre proporcionado va en contra de las políticas del proyecto. El nombre modificado sugerido es: \"{name}\". ¿Le gustaría usar el nombre sugerido?",
	"createFileDialog.fileAlreadyExists": "Ya existe un archivo con ese nombre",
	"createFileDialog.fileName": "Nombre del archivo",
	"createFileDialog.fileNameRequired": "Se requiere el nombre del archivo.",
	"createFileDialog.helperText": "Consta de letras, números, punto (.), Guión (-) y guión bajo (_).",
	"createFileDialog.placeholder": "Por favor escriba un nombre",
	"createFileDialog.policyError": "El nombre proporcionado va en contra de las políticas del sitio.",
	"createFileDialog.template": "Nueva Plantilla",
	"createFolder.createPolicy": "El nombre proporcionado va en contra de las políticas del sitio. El nombre modificado sugerido es: \"{name}\". ¿Le gustaría usar el nombre sugerido?",
	"createFolder.placeholder": "Escriba un nombre de carpeta",
	"createFolder.policyError": "El nombre proporcionado va en contra de las políticas del proyecto.",
	"createSiteDialog.additionalOptions": "Opciones adicionales",
	"createSiteDialog.authentication": "Autenticación",
	"createSiteDialog.authenticationNoRequired": "No se requiere autenticación (URL pública)",
	"createSiteDialog.blueprintParameters": "Parámetros de planos",
	"createSiteDialog.blueprintStrategy": "Crear a partir de planos",
	"createSiteDialog.branch": "Rama Git",
	"createSiteDialog.cantStart": "Los nombres de los proyectos pueden no comenzar con ceros, guiones (-) o guiones bajos (_).",
	"createSiteDialog.changeQuery": "Intente cambiar su consulta o explore el catálogo completo.",
	"createSiteDialog.chooseCreationStrategy": "Elija la estrategia de creación: comience desde un repositorio Git existente o cree en base a un plan que más le convenga.",
	"createSiteDialog.clone_remoteBranch_label": "El proyecto se creará clonando esa rama del repositorio. Puede cambiar entre ramas más tarde también.",
	"createSiteDialog.clone_remoteName_label": "Nombre el control remoto que se referirá al repositorio de origen para extraer. Típicamente llamado \"upstream\" u \"origen\".",
	"createSiteDialog.clone_url_label": "La URL del repositorio de git para clonar.",
	"createSiteDialog.createAsOrphan": "Cree el proyecto desde un repositorio remoto como huérfano (sin historial de git)",
	"createSiteDialog.createAsOrphanHelpText": "Crear el proyecto como un huérfano lo disociará del repositorio git de origen y eliminará todo el historial.",
	"createSiteDialog.createInBackground": "Crear en segundo plano",
	"createSiteDialog.createSite": "Crear proyecto",
	"createSiteDialog.creatingSite": "Creando proyecto",
	"createSiteDialog.creationStrategy": "Estrategia de creación",
	"createSiteDialog.description": "Descripción",
	"createSiteDialog.descriptionMaxLength": "Longitud máxima: {maxLength} caracteres.",
	"createSiteDialog.dialogCloseMessage": "Los datos ingresados en el formulario se perderán al cerrar.",
	"createSiteDialog.dialogCloseTitle": "Confirmar Cerrar",
	"createSiteDialog.finish": "Terminar",
	"createSiteDialog.gitBlueprintDescription": "Cree un nuevo proyecto basado en un proyecto CrafterCMS en un repositorio de git remoto existente.",
	"createSiteDialog.gitBlueprintName": "Repositorio Git Remoto",
	"createSiteDialog.gitBranch": "Rama Git",
	"createSiteDialog.gitBranchDescription": "Nombre de la rama a la que seguirá este proyecto. Las operaciones de pull se realizarán contra esta rama.",
	"createSiteDialog.gitStrategy": "Clon de repositorio git remoto existente",
	"createSiteDialog.idExist": "La identificación ya existe.",
	"createSiteDialog.nameAndDescription": "Nombra y describe tu proyecto",
	"createSiteDialog.nameExist": "El nombre ya existe.",
	"createSiteDialog.noBlueprints": "No hay planos donde se encuentran",
	"createSiteDialog.noDescription": "No se ha proporcionado ninguna descripción.",
	"createSiteDialog.pleaseWait": "Espere mientras se crea su proyecto.",
	"createSiteDialog.plugin": "Plano",
	"createSiteDialog.privateBlueprints": "Planos privados",
	"createSiteDialog.privateKey": "Llave privada",
	"createSiteDialog.publicMarketplace": "Mercado Público",
	"createSiteDialog.remoteBranch": "Rama Git",
	"createSiteDialog.remoteName": "Nombre remoto de Git",
	"createSiteDialog.remoteURL": "URL de repositorio de Git",
	"createSiteDialog.repoUrl": "URL de repositorio de Git",
	"createSiteDialog.required": " Se requiere{name} .",
	"createSiteDialog.review": "revisión",
	"createSiteDialog.reviewSite": "Revise el resumen de configuración y cree su proyecto",
	"createSiteDialog.sandboxBranch": "Rama Sandbox",
	"createSiteDialog.showIncompatible": "Mostrar complementos incompatibles",
	"createSiteDialog.siteFormat": "Longitud máxima: 50 caracteres, que consta de: letras minúsculas, números y guión (-).",
	"createSiteDialog.siteId": "Identificación del proyecto",
	"createSiteDialog.siteInfo": "Información del proyecto",
	"createSiteDialog.siteName": "Nombre del proyecto",
	"createSiteDialog.token": "Simbólico",
	"createSiteDialog.useDefaultValue": "usar valor predeterminado",
	"createSiteDialog.userNameAndPassword": "Usuario Contraseña",
	"createTokenDialog.expiresHelperNeverText": "Apáguelo para no caducar nunca.",
	"createTokenDialog.expiresHelperText": "Enciéndalo para establecer una caducidad.",
	"createTokenDialog.expiresLabel": "Caducar Token",
	"createTokenDialog.helperText": "Escriba un nombre para el nuevo token. El servidor creará el token y se lo mostrará después. Guárdelo de forma segura, ya que no podrá volver a ver su valor.",
	"createTokenDialog.title": "Crear token de acceso",
	"createUserDialog.emailRequired": "Correo electronico es requerido.",
	"createUserDialog.firstName": "Nombre de pila",
	"createUserDialog.firstNameRequired": "Se requiere el primer nombre.",
	"createUserDialog.invalidEmail": "El correo electrónico es invalido.",
	"createUserDialog.lastName": "Apellido",
	"createUserDialog.lastNameRequired": "Se requiere apellido.",
	"createUserDialog.passwordInvalid": "La contraseña no es válida.",
	"createUserDialog.passwordMatch": "Debe coincidir con la contraseña anterior.",
	"createUserDialog.passwordRequired": "Se requiere contraseña.",
	"createUserDialog.passwordVerification": "Verificación de contraseña",
	"createUserDialog.usernameRequired": "Se requiere nombre de usuario.",
	"dashboardItemsApproval.item": "ít",
	"dashboardItemsApproval.lastEdited": "Última edición",
	"dashboardItemsApproval.lastEditedBy": "ID del paquete",
	"dashboardItemsApproval.publishingTarget": "Objetivo de publicación",
	"dashboardItemsScheduled.item": "ít",
	"dashboardItemsScheduled.lastEdited": "Última edición",
	"dashboardItemsScheduled.packageId": "ID del paquete",
	"dashboardItemsScheduled.publishingTarget": "Objetivo de publicación",
	"datasourceActionList.imageFromDesktopLabel": "Subir imagen desde el escritorio",
	"datasourceActionList.imageFromRepoLabel": "Imagen del repositorio",
	"datasourceActionList.videoFromDesktopLabel": "Subir video desde el escritorio",
	"datasourceActionList.videoFromRepoLabel": "Video del repositorio",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Fecha invalida.",
	"datetimepicker.datePlaceholder": "Fecha",
	"datetimepicker.timeInvalidMessage": "Tiempo inválido.",
	"datetimepicker.timePlaceholder": "hora",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Error al eliminar el tipo de contenido",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Tipo de contenido eliminado correctamente",
	"deleteContentTypeDialog.headerSubtitle": "Confirme la eliminación de \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Eliminar tipo de contenido",
	"deleteContentTypeDialog.noUsagesFound": "No se encontraron usos",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Revise y confirme todas las dependencias de tipo de contenido que se eliminarán.",
	"deleteContentTypeDialog.safeToDelete": "El tipo de contenido se puede eliminar de forma segura.",
	"deleteContentTypeDialog.submitButton": "Borrar",
	"deleteContentTypeDialog.typeConfirmPassword": "Escriba la palabra \"<b>{password}</b>\" para confirmar la eliminación de \"{name}\" y todas sus dependencias.",
	"deleteDialog.brokenItems": " Habrá referencias rotas",
	"deleteDialog.childItemsText": "Artículos infantiles",
	"deleteDialog.confirmDeletion": "Entiendo que los elementos eliminados se publicarán de inmediato.",
	"deleteDialog.deleteItems": "Eliminar ítems",
	"deleteDialog.dependentItems": "Artículos dependientes",
	"deleteDialog.emptyChildItems": "No hay elementos secundarios",
	"deleteDialog.emptyDependentItems": "Sin elementos dependientes",
	"deleteDialog.maxCharacters": "Máx. {maxLength} caracteres",
	"deleteDialog.submissionCommentFieldError": "Por favor escriba el comentario de envío.",
	"deleteDialog.submissionCommentLabel": "Comentario de envío",
	"deleteDialog.subtitle": "Los elementos seleccionados se eliminarán junto con sus elementos secundarios. Revise los elementos dependientes antes de eliminarlos, ya que terminarán con referencias de enlaces rotas.",
	"deleteDialog.title": "Borrar",
	"deleteDialog.willGetDeleted": " Será eliminado",
	"dependenciesDialog.allDeps": "Mostrar todas las dependencias",
	"dependenciesDialog.assets": "solo activos",
	"dependenciesDialog.code": "Solo codigo",
	"dependenciesDialog.contentItems": "Solo elementos de contenido",
	"dependenciesDialog.dependencies": "Dependencias",
	"dependenciesDialog.dependsOn": "Elementos que dependen del elemento seleccionado",
	"dependenciesDialog.dependsOnMe": "Dependencias del elemento seleccionado",
	"dependenciesDialog.edit": "Editar",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} no tiene dependencias",
	"dependenciesDialog.emptyDependenciesMessage": "Nada depende de {itemName}",
	"dependenciesDialog.history": "historia",
	"dependenciesDialog.title": "Dependencias de elementos de contenido",
	"dialog.pendingChangesConfirmation": "¿Cerrar sin guardar cambios?",
	"dialogHeader.toggleFullScreen": "Cambiar a pantalla completa",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "La zona de colocación no admite este tipo de componente. Verifica tu modelo de contenido.",
	"dragAndDropMessages.contentTypeNotFound": "La identificación del tipo de contenido no se encontró en su plantilla. Arrastrar y soltar se verá afectado. Más información en docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "Aún no se admite la eliminación de componentes de un componente de zona de colocación incrustado. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "Arrastrar y soltar en los componentes integrados aún no es compatible. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "En esta versión, los componentes integrados solo se pueden arrastrar dentro de su padre actual. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "Mover componentes fuera de un componente de zona de colocación incrustado aún no es compatible. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.objectIdNotFound": "Falta la identificación del objeto. Arrastrar y soltar se verá afectado. Más información en docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.pathNotFound": "Falta la ruta. Arrastrar y soltar se verá afectado. Más información en docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dropTargetsMessages.allowEmbedded": "Permitir incrustado",
	"dropTargetsMessages.allowShared": "Permitir compartido",
	"dropTargetsMessages.baseBrowsePath": "Ruta de exploración base",
	"dropTargetsMessages.baseRepositoryPath": "Ruta del repositorio base",
	"dropTargetsMessages.browseExisting": "Navegar existente",
	"dropTargetsMessages.contentTypes": "Tipos de contenido",
	"dropTargetsMessages.createNewEmbedded": "Crear nuevo incrustado",
	"dropTargetsMessages.createNewShared": "Crear nuevo compartido",
	"dropTargetsMessages.dropTargets": "Eliminar objetivos",
	"dropTargetsMessages.enableBrowse": "Habilitar exploración",
	"dropTargetsMessages.enableSearch": "Habilitar búsqueda",
	"dropTargetsMessages.searchExisting": "Buscar componentes existentes",
	"dropTargetsMessages.tags": "Etiquetas",
	"editGroupDialog.close": "Cerrar",
	"editGroupDialog.deleteGroup": "Eliminar grupo",
	"editGroupDialog.editGroupMembers": "Editar miembros del grupo",
	"editGroupDialog.groupDetails": "Detalles del grupo",
	"editGroupDialog.groupMemberHelperText": "Los miembros del grupo son editables después de la creación",
	"editGroupDialog.helperText": "¿Eliminar el grupo \"{name}\"?",
	"editGroupDialog.requiredGroupName": "Se requiere el nombre del grupo.",
	"editModesSwitcher.editModeTooltip": "Modo de edición (e)",
	"editModesSwitcher.moveModeTooltip": "Mover el modo (m)",
	"editModesSwitcher.offButtonTooltip": "Desactivar la edición ({shortcutKey})",
	"editSiteDialog.cancel": "Cancelar",
	"editSiteDialog.notEditable": "El ID del sitio no se puede editar",
	"editSiteDialog.siteDescription": "descripción del lugar",
	"editSiteDialog.siteId": "Identificación del sitio",
	"editSiteDialog.siteName": "Nombre del sitio",
	"editSiteDialog.siteNameRequired": "Se requiere el nombre del sitio.",
	"editSiteDialog.sitenameExists": "El nombre ya existe.",
	"editSiteDialog.title": "Editar sitio",
	"embeddedContentDS.embeddedContent": "Contenido incrustado",
	"embeddedLegacyFormMessages.openContentFormFailedError": "Se produjo un error al abrir el formulario de contenido. Inténtelo de nuevo momentáneamente. Comuníquese con el administrador si el error persiste.",
	"emptyUiConfigMessageTitle.subtitle": "Aquí no se muestra nada.",
	"emptyUiConfigMessageTitle.title": "La configuración está vacía",
	"encryptTool.buttonText": "Cifrar texto",
	"encryptTool.clearResultButtonText": "Limpiar",
	"encryptTool.errorMessage": "El cifrado de texto falló. Por favor intente nuevamente momentáneamente.",
	"encryptTool.inputLabel": "Texto sin procesar",
	"encryptTool.pageTitle": "Herramienta de cifrado",
	"encryptTool.successMessage": "Texto cifrado copiado al portapapeles.",
	"fileNameControl.urlChangeWarning": "Cambiar este valor puede provocar referencias y enlaces rotos.",
	"fileUpload.chooseFile": "Elija el archivo",
	"fileUpload.createPolicy": "El nombre del archivo de carga va en contra de las políticas del proyecto. El nombre de archivo modificado sugerido es: \"{name}\". ¿Le gustaría usar el nombre sugerido?",
	"fileUpload.policyError": "El nombre del archivo de carga va en contra de las políticas del proyecto.",
	"fileUpload.selectFileMessage": "Por favor seleccione un archivo para cargar",
	"fileUpload.uploadedFile": "Archivo subido",
	"fileUpload.uploadingFile": "Subiendo archivo",
	"fileUpload.validatingFile": "Validación de archivo",
	"filter.noResults": "Ningún resultado coincide con su consulta",
	"folder.created": "Carpeta creada con éxito",
	"folderBrowserTreeView.invalidPath": "La ruta ingresada no existe.",
	"formEngine.createPolicy": "La ruta {originalPath} va en contra de las políticas del proyecto. La ruta modificada sugerida es: \"{path}\". ¿Le gustaría utilizar la ruta sugerida?",
	"formEngine.formNotReadyForSaving": "El formulario no está listo para guardar. Inténtelo de nuevo momentáneamente o use el botón cancelar.",
	"formEngine.inProgressConfirmation": "Actualmente, hay otro formulario abierto y minimizado. Cierre el formulario actual antes de abrir otro.",
	"formEngine.policyError": "La ruta {path} va en contra de las políticas del proyecto.",
	"formEngine.save": "Guardar como borrador",
	"formEngine.saveAndClose": "Guardar cerrar",
	"formEngine.saveAndMinimize": "Guardar y minimizar",
	"formEngine.saveAndPreview": "Guardar y obtener una vista previa",
	"formEngine.saveDraftCompleted": "Borrador de guardado completado",
	"formEngine.useMVS": "Use _mvs postfix (compatibilidad con versiones anteriores)",
	"gitAuthForm.privateKey": "Llave privada",
	"gitForm.noAuthenticationRequired": "No se requiere autenticación (URL pública)",
	"gitForm.privateKey": "Llave privada",
	"gitForm.required": " Se requiere{name} .",
	"gitForm.token": "Simbólico",
	"gitForm.usernameAndPassword": "Usuario Contraseña",
	"global.about": "Acerca de",
	"globalApp.routeNotFound": "Ruta no encontrada",
	"globalAppToolbar.toggleSidebar": "Alternar barra lateral",
	"globalConfig.configSaved": "Configuración guardada con éxito.",
	"globalConfig.confirmHelper": "¿Descartar los cambios no guardados?",
	"globalConfig.documentError": "El documento contiene errores. Busque marcadores de error en el lateral del editor.",
	"globalConfig.unsavedConfirmation": "Tienes cambios sin guardar, ¿quieres irte?",
	"globalConfig.unsavedConfirmationTitle": "Cambios sin guardar",
	"globalConfig.viewSample": "Ver muestra",
	"globalConfigManagement.pendingChanges": "Tiene cambios sin guardar. ¿Descartar los cambios?",
	"globalMenu.closeMenu": "Cerrar el menú",
	"globalMenu.encryptionTool": "Herramienta de cifrado",
	"globalMenu.globalConfigEntryLabel": "Configuración Global",
	"globalMenu.logConsoleEntryLabel": "Consola de registro",
	"globalMenu.loggingLevelsEntryLabel": "Niveles de registro",
	"globalMenu.mySites": "MIS PROYECTOS",
	"globalMenu.noSitesMessage": "No hay sitios para mostrar.",
	"globalMenu.pluginManagementEntryLabel": "Gestión de complementos",
	"globalMenu.recover": "Recuperación de contraseña",
	"globalMenu.settings": "Administración de cuentas",
	"globalMenu.tokenManagement": "Gestión de tokens",
	"groupEditDialog.createGroup": "Crea un grupo",
	"groupEditDialog.editGroup": "Grupo de edición",
	"groupEditDialog.groupCreated": "Grupo creado con éxito",
	"groupEditDialog.groupDeleted": "Grupo eliminado con éxito",
	"groupEditDialog.groupEdited": "Grupo editado correctamente",
	"groupEditDialog.membersAdded": "{count, plural, one {Usuario agregado correctamente} other {Userios agregados correctamente}}",
	"groupEditDialog.membersRemoved": "{count, plural, one {Usuario eliminado correctamente} other {Userios eliminados correctamente}}",
	"groupsAdmin.displayName": "Nombre para mostrar",
	"groupsAdmin.groupCreated": "{group} creado.",
	"groupsAdmin.groupDeleted": "{group} eliminado.",
	"groupsAdmin.groupEdited": "{group} editado.",
	"groupsAdmin.maxLengthError": "{field} no puede tener más de {size} caracteres",
	"groupsAdmin.usereRemoved": "{username} eliminado correctamente de {group}",
	"groupsAdmin.usersAdded": "Usuario (s) agregado (s) exitosamente.",
	"groupsGrid.emptyStateMessage": "No se encontraron grupos",
	guestDetectionMessage: guestDetectionMessage$1,
	"historyDialog.back.selectRevision": "Volver a la lista del historial",
	"historyDialog.confirmRevertBody": "¿Está seguro de que desea volver a {versionTitle}?",
	"historyDialog.confirmRevertTitle": "Revertir confirmación",
	"historyDialog.current": "Corriente",
	"historyDialog.headerTitle": "Historial de artículos",
	"historyDialog.options.compareTo": "Comparar con...",
	"historyDialog.options.compareToCurrent": "Comparar con el actual",
	"historyDialog.options.compareToPrevious": "Comparar con anterior",
	"historyDialog.options.revertToPrevious": "Volver a la <b>anterior</b>",
	"historyDialog.options.revertToThisVersion": "Volver a <b>esta versión</b>",
	"icePanel.itemLockedWarning": "El ítem está bloqueado, es posible que algunas funciones estén deshabilitadas",
	"icePanel.noWidgetsMessage": "No se han configurado herramientas",
	"iconGuide.css": "css",
	"iconGuide.freemarker": "Plantilla Freemarker",
	"iconGuide.groovy": "Guión maravilloso",
	"iconGuide.html": "HTML",
	"iconGuide.itemTypes": "Tipos de elementos",
	"iconGuide.javascript": "Javascript",
	"iconGuide.json": "JSON",
	"iconGuide.levelDescriptor": "Valores predeterminados de la sección",
	"iconGuide.plainText": "Texto sin formato",
	"iconGuide.publishingStatusTarget": "Estado de publicación / destino",
	"iconGuide.title": "Guía de iconos",
	"iconGuide.workflowStates": "Estados de flujo de trabajo",
	"iconGuide.xml": "XML",
	"internalNameControl.displaySize": "Tamaño de la pantalla",
	"internalNameControl.label": "Nombre interno",
	"internalNameControl.maxLength": "Longitud máxima",
	"item.contentTypeChanged": "El tipo de artículo cambió correctamente",
	"item.controllerNotFound": "No se encontró el controlador.",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Artículo creado con éxito",
	"item.cut": "Artículo cortado con éxito",
	"item.delete": " {count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Elemento duplicado correctamente",
	"item.edited": "Elemento actualizado con éxito",
	"item.itemPasteToChildNotAllowed": "No se permite pegar en un elemento secundario para cortar",
	"item.pasted": "Elemento pegado correctamente",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {El ítem seleccionado ha sido programados para {environment}} other {Los elementos seleccionados han sido programados para {environment}}}",
	"item.reverted": "Elemento revertido con éxito",
	"item.savedAsDraft": "Se guardó el borrador del artículo",
	"item.schedulePublished": "{count, plural, one {El ítem seleccionado ha sido programados para {environment}} other {Los elementos seleccionados han sido programados para {environment}}}",
	"item.templateNotFound": "Plantilla no encontrada.",
	"item.unlocked": "Artículo desbloqueado con éxito",
	"itemActions.changeContentType": "Cambiar tipo",
	"itemActions.contentTypeDialogBody": "La siguiente operación puede provocar la pérdida de datos. ¿Le gustaría continuar?",
	"itemActions.contentTypeDialogTitle": "Advertencia: cambiar el tipo de contenido",
	"itemActions.copyDialogSubtitle": "Seleccione cualquiera de las subpáginas que le gustaría copiar por lotes. Al pegar, se conservarán las subpáginas seleccionadas y su jerarquía posicional.",
	"itemActions.copyDialogTitle": "Dupdo",
	"itemActions.copyWithChildren": "Copiar con hijos",
	"itemActions.createController": "Nuevo controlador",
	"itemActions.createFolder": "Nueva carpeta",
	"itemActions.createTemplate": "Nueva Plantilla",
	"itemActions.deleteController": "Eliminar controlador",
	"itemActions.deleteTemplate": "Eliminar plantilla",
	"itemActions.duplicateDialogBody": "Se creará una nueva copia de este elemento y de todo su contenido específico. ¿Seguro que desea continuar?",
	"itemActions.editController": "Editar controlador",
	"itemActions.editTemplate": "Editar plantilla",
	"itemActions.newContent": "Nuevo contenido",
	"itemActions.requestPublish": "Solicitar publicación",
	"itemActions.unableToVerifyWorkflows": "No se pueden verificar los flujos de trabajo afectados, inténtelo de nuevo momentáneamente",
	"itemActions.verifyingAffectedWorkflows": "Verificando los flujos de trabajo afectados ...",
	"itemActions.viewForm": "Ver formulario",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemPublishingDate.scheduled": "Programado para {date}",
	"itemPublishingDate.scheduledForAsap": "Programado para lo antes posible",
	"itemPublishingDate.submitted": "Enviado para {date}",
	"itemPublishingDate.submittedForAsap": "Enviado para lo antes posible",
	"itemState.deleted": "Eliminado",
	"itemState.disabled": "Discapacitado",
	"itemState.locked": "Bloqueado",
	"itemState.lockedBy": "Bloqueado por {user}",
	"itemState.modified": "Modificado",
	"itemState.new": "Nuevo",
	"itemState.notInWorkflow": "No en el flujo de trabajo",
	"itemState.publishing": "Publicación",
	"itemState.scheduled": "Programado",
	"itemState.scheduledToGoLive": "Programado para producción",
	"itemState.scheduledToStaging": "Programado para puesta en escena",
	"itemState.submitted": "Presentado",
	"itemState.submittedToLive": "Enviado a producción",
	"itemState.submittedToStaging": "Sometido a la puesta en escena",
	"itemState.systemProcessing": "Procesamiento del sistema",
	"itemStates.anyState": "Cualquier estado",
	"itemStates.clearFilters": "Borrar filtros",
	"itemStates.emptyStateMessage": "No se han encontrado resultados",
	"itemStates.invalidPathRegexHelperText": "La expresión regular no es válida",
	"itemStates.lockedBy": "Por {owner}",
	"itemStates.pathRegex": "Ruta (expresión regular)",
	"itemStates.pathRegexHelperText": "Utilice una expresión regular que coincida con la ruta",
	"itemStates.selectedAll": "Seleccione {count} elementos en las páginas.",
	"itemStates.showItemsIn": "Mostrar elementos en",
	"keyboardShortcutsDialog.title": "Atajos de teclado",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Project <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Menú de Navegación",
	"launcherOpenerButton.openMenuButtonText": "Menú abierto",
	"launcherOpenerButton.signOut": "desconectar",
	"legacyComponentsPanel.addComponent": "Agregar componente",
	"legacyFormDialog.errorLoadingForm": "Ocurrió un error al intentar cargar el formulario",
	"legacyFormDialog.loadingForm": "Cargando...",
	"legacyFormDialog.title": "Formulario de contenido",
	"localeSelectorControl.label": "Selector de configuración regional",
	"localeSelectorControl.requiredError": "Se requiere campo",
	"logConsoleDetailsDialog.title": "detalles del registro",
	"logConsoleManagement.noLogs": "No se encontraron registros",
	"loggingLevels.avoidDisplayingAllEntriesLabel": "Intente filtrar",
	"loggingLevels.changeLevelTo": "Nivel actual",
	"loggingLevels.currentLevel": "Nivel actual",
	"loggingLevels.displayAllEntriesButtonLabel": "Mostrar {remaining} entradas más",
	"loggingLevels.levelFilterLabel": "Filtro de nivel",
	"loggingLevels.levelFilterSelectEmptyLabel": "Cualquier nivel",
	"loggingLevels.loggersFilterLabel": "Filtro de logger",
	"loggingLevelsManagement.levelChangedSuccessMessage": "El nivel de registro cambió correctamente",
	"loginView.dialogTitleText": "Inicie sesión en CrafterCMS",
	"loginView.forgotPasswordButtonLabel": "¿Olvidaste tu contraseña?",
	"loginView.incorrectCredentialsMessage": "Nombre de usuario o contraseña incorrecta. Inténtalo de nuevo.",
	"loginView.loginButtonLabel": "Iniciar sesión",
	"loginView.recoverYourPasswordBackButtonLabel": "atrás",
	"loginView.recoverYourPasswordIntroText": "Si su correo usuario existe, se le enviará un correo electrónico con un enlace de para restaurar su contraseña.",
	"loginView.recoverYourPasswordSuccessMessage": "Si \"{username}\" existe, un email de recuperación ha sido enviado",
	"loginView.resetYourPasswordIntroText": "Por favor ingrese su nueva contraseña",
	"loginView.usernameTextFieldLabel": "Nombre de usuario",
	"media.card.itemLastEdition": "editado {time}",
	"media.card.title": "Opciones",
	"mimeTypes.application/gzip": "GZip Compressed Archive",
	"mimeTypes.application/javascript": "Typescript (tsx)",
	"mimeTypes.application/msword": "Microsoft Word",
	"mimeTypes.application/pdf": "Adobe Portable Document Format (PDF)",
	"mimeTypes.application/vnd.ms-excel": "Microsoft Excel",
	"mimeTypes.application/vnd.ms-fontobject": "MS Embedded OpenType fonts",
	"mimeTypes.application/vnd.ms-powerpoint": "Microsoft Power Point",
	"mimeTypes.application/vnd.oasis.opendocument.presentation": "OpenDocument presentation document",
	"mimeTypes.application/vnd.oasis.opendocument.spreadsheet": "OpenDocument spreadsheet document",
	"mimeTypes.application/vnd.oasis.opendocument.text": "OpenDocument text document",
	"mimeTypes.application/vnd.openxmlformats-officedocument.presentationml.presentation": "Microsoft Power Point (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Microsoft Excel (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Microsoft Word (Open XML)",
	"mimeTypes.application/vnd.rar": "RAR archive",
	"mimeTypes.application/x-7z-compressed": "7-zip archive",
	"mimeTypes.application/x-bzip": "BZip archive",
	"mimeTypes.application/x-bzip2": "BZip2 archive",
	"mimeTypes.application/x-tar": "Tape Archive (TAR)",
	"mimeTypes.application/xml": "XML",
	"mimeTypes.application/zip": "ZIP archive",
	"mimeTypes.audio/aac": "AAC audio",
	"mimeTypes.audio/midi audio/x-midi": "Musical Instrument Digital Interface (MIDI)",
	"mimeTypes.audio/mpeg": "MP3 audio",
	"mimeTypes.audio/wav": "Waveform Audio Format",
	"mimeTypes.font/otf": "OpenType font",
	"mimeTypes.font/ttf": "TrueType Font",
	"mimeTypes.font/woff": "Web Open Font Format (WOFF)",
	"mimeTypes.font/woff2": "Web Open Font Format (WOFF)",
	"mimeTypes.image/gif": "GIF images",
	"mimeTypes.image/jpeg": "JPEG images",
	"mimeTypes.image/png": "PNG images",
	"mimeTypes.image/svg+xml": "SVG images",
	"mimeTypes.image/vnd.microsoft.icon": "Icon format",
	"mimeTypes.image/webp": "WEBP image",
	"mimeTypes.text/css": "CSS stylesheet",
	"mimeTypes.text/html": "HyperText Markup Language (HTML)",
	"mimeTypes.text/javascript": "JavaScript",
	"mimeTypes.text/plain": "Text",
	"mimeTypes.text/texmacs": "Typescript (ts)",
	"mimeTypes.text/x-freemarker": "Freemarker",
	"mimeTypes.text/x-groovy": "Groovy",
	"mimeTypes.text/x-sass": "SASS stylesheet",
	"mimeTypes.text/x-scss": "SCSS stylesheet",
	"mimeTypes.video/mp4": "MP4 video",
	"mimeTypes.video/mpeg": "MPEG Video",
	"mimeTypes.video/x-msvideo": "AVI: Audio Video Interleave",
	"multiChoiceSaveButton.saveAndClose": "Guardar cerrar",
	"multiChoiceSaveButton.saveAndMinimize": "Guardar y minimizar",
	"newContentDialog.contentTypeAllLabel": "Mostrar todos los tipos",
	"newContentDialog.contentTypeComponentLabel": "Solo componentes",
	"newContentDialog.contentTypePageLabel": "Solo páginas",
	"newContentDialog.emptyStateMessage": "No se encontraron tipos de contenido",
	"newContentDialog.subtitle": "Elija una plantilla de tipo de contenido para su nuevo elemento de contenido.",
	"newContentDialog.title": "Crear contenido",
	"newFolder.folderAlreadyExists": "Ya existe una carpeta con ese nombre",
	"newFolder.folderName": "Nombre de la carpeta",
	"newFolder.helperText": "Consta de: letras, números, guión (-) y guión bajo (_).",
	"newFolder.rename": "Proporcione un nuevo nombre de carpeta",
	"newFolder.required": "Se requiere el nombre de la carpeta.",
	"newFolder.title": "Crear una nueva carpeta",
	"newFolder.title.rename": "Renombrar Carpeta",
	"noUiConfigMessageTitle.subtitle": "Agregue y configure `ui.xml` en su proyecto para mostrar contenido aquí.",
	"noUiConfigMessageTitle.title": "Falta el archivo de configuración",
	"numericInputControl.childContent": "Mínimo",
	"numericInputControl.maximun": "Máximo",
	"numericInputControl.noDecimalsErrMessage": "Decimales no permitidos en esta entrada.",
	"openToolsPanel.label": "Panel de herramientas abierto",
	"operations.addMembers": "Añadir miembros",
	"operations.addRemote": "Agregar control remoto",
	"operations.approveScheduled": "Aprobar programado",
	"operations.assetUploadFailed": "Error al cargar activos.",
	"operations.assetUploadStarted": "Se inició la carga de activos.",
	"operations.cancelPublishingPackage": "Cancelar paquete de publicación",
	"operations.deleteOperationComplete": "Se completó la operación de eliminación.",
	"operations.deleteOperationFailed": "Error en la operación de eliminación.",
	"operations.duplicateItemOperationComplete": "Artículo duplicado con éxito.",
	"operations.duplicateItemOperationFailed": "La duplicación del artículo falló.",
	"operations.initialPublish": "Publicación inicial",
	"operations.insertItemOperationComplete": "Artículo creado con éxito.",
	"operations.insertItemOperationFailed": "La creación del elemento falló.",
	"operations.insertOperationComplete": "Se completó la operación de inserción de componentes.",
	"operations.insertOperationFailed": "Error en la operación de inserción del componente.",
	"operations.loginFailed": "Error de inicio de sesión",
	"operations.moveOperationComplete": "Mover operación completada",
	"operations.moveOperationFailed": "Error en la operación de movimiento.",
	"operations.pullFromRemote": "Tirar del control remoto",
	"operations.pushToRemote": "Empuje al control remoto",
	"operations.removeClusterNode": "Eliminar nodo de clúster",
	"operations.removeMembers": "Eliminar miembros",
	"operations.removeRemote": "Quitar control remoto",
	"operations.requestPublish": "Solicitar publicación",
	"operations.sortOperationComplete": "Operación de clasificación completada.",
	"operations.sortOperationFailed": "Error en la operación de clasificación.",
	"operations.startPublisher": "Iniciar editor",
	"operations.stopPublisher": "Detener editor",
	"operations.updateOperationComplete": "Se completó la operación de actualización.",
	"operations.updateOperationFailed": "Error en la operación de actualización.",
	"packageDetailsDialog.emptyPackageMessage": "El paquete esta vacio",
	"packageDetailsDialog.emptyPackageMessageSubtitle": "El ID del paquete obtenido es {packageId}",
	"packageDetailsDialog.missingPackageId": "No se pueden obtener los detalles del paquete porque la identificación del paquete no se proporcionó a esta interfaz de usuario",
	"packageDetailsDialog.packageDetailsDialogTitle": "Detalles del Paquete de Publicación",
	"pageExplorerPanel.currentContentItems": "Elementos de contenido actual",
	"pagination.PreviousPage": "Página anterior",
	"pagination.itemsPerPage": "Artículos por página",
	"pagination.nextPage": "Siguiente página",
	"pagination.previousPage": "Página anterior",
	"passwordRequirement.fulfillAllReqErrorMessage": "Por favor, cumpla con todos los requisitos de contraseña.",
	"passwordRequirement.hasLowercase": "Debe contener al menos una letra minúscula",
	"passwordRequirement.hasNumbers": "Debe contener al menos un número",
	"passwordRequirement.hasSpecialChars": "Debe contener al menos un carácter especial {chars}",
	"passwordRequirement.hasUppercase": "Debe contener al menos una letra mayúscula",
	"passwordRequirement.invalidPassword": "No se cumplen los requisitos.",
	"passwordRequirement.maxLength": "La longitud no debe exceder {max} caracteres",
	"passwordRequirement.minLength": "La longitud debe tener al menos {min} caracteres",
	"passwordRequirement.minMaxLength": "La longitud debe estar entre {minLength} y {maxLength} caracteres",
	"passwordRequirement.noBlank": "No debe estar en blanco",
	"passwordRequirement.noSpaces": "No debe contener espacios en blanco",
	"passwordRequirement.passwordConfirmationMismatch": "Las contraseñas no coinciden",
	"passwordRequirement.passwordValidation": "Validación de contraseña",
	"passwordRequirement.unnamedGroup": "Condición no descrita",
	"passwordRequirement.validPassword": "Requisitos cumplidos",
	"passwordRequirement.validationPassing": "Validación aprobada",
	"passwordTextField.toggleVisibilityButtonText": "alternar la visibilidad de la contraseña",
	"pastePolicy.confirm": "El destino {action} seleccionado va en contra de las políticas del proyecto para el directorio de destino. • Ruta original: \"{path}\", • La ruta sugerida es: \"{modifiedPath}\". ¿Le gustaría utilizar la ruta sugerida?",
	"pastePolicy.error": "El destino {action} seleccionado va en contra de las políticas del proyecto para el directorio de destino.",
	"pathNavigator.noChildren": "El artículo no tiene hijos",
	"pathNavigator.noItemsAtLocation": "No hay elementos en esta ubicación",
	"pathNavigator.pathFilterInputPlaceholder": "Filtrar hijos de {name}...",
	"pathNavigator.viewChildren": "Ver niños",
	"pathNavigatorTree.missingRootPath": "La ruta \"{path}\" no existe",
	"pathNavigatorTree.moreLinkLabel": " {count, plural, one {...{count} more item} other {...{count} more items}}",
	"pathNavigatorTreeItemFilter.placeholder": "Filtrar niños ...",
	"pathSelectionDialog.changeRootButtonLabel": "Cambiar raíz",
	"pathSelectionDialog.createFolderButtonLabel": "Crear carpeta",
	"pathSelectionDialog.title": "Seleccionar ruta",
	"pathSelectionInput.description": "Ingrese una ruta y presione `enter` para validar",
	"pathSelectionInput.found": "Ruta encontrada",
	"pathSelectionInput.invalidPath": "La ruta ingresada no existe",
	"pathSelector.inputPlaceholderText": "Seleccionar ruta",
	"plugin.by": "Por",
	"plugin.crafterCMS": "CrafterCMS",
	"plugin.license": "Licencia",
	"plugin.licenseTooltip": " {license} licencia",
	"plugin.more": "Más...",
	"plugin.noDev": "Ningún desarrollador especificado.",
	"plugin.use": "Utilizar",
	"plugin.version": "Versión",
	"pluginConfigDialog.title": "Configuración del complemento",
	"pluginDetails.markdownError": "No se puede presentar la documentación. Visite <a>{link}</a> para ver.",
	"pluginDetails.notCompatible": "Este plano no es compatible con su versión actual de CrafterCMS.",
	"pluginManagement.emptyList": "No hay complementos instalados",
	"pluginManagement.installationDate": "Fecha de instalación",
	"pluginManagement.listPluginPermission": "No tienes suficientes permisos para ver la lista de complementos",
	"pluginManagement.pluginConfigUpdated": "La configuración del complemento se actualizó correctamente",
	"pluginManagement.pluginInstalled": "Complemento instalado correctamente",
	"pluginManagement.pluginUninstalled": "Complemento desinstalado con éxito",
	"pluginManagement.searchPlugin": "Buscar e instalar",
	"preview.previewIFrameTitle": "Marco de vista previa",
	"previewAddressBar.reloadButtonLabel": "Recarga esta página",
	"previewAssetsPanel.itemsPerPage": "Artículos por página:",
	"previewAssetsPanel.noResults": " No se han encontrado resultados.",
	"previewAssetsPanel.retrieveAssets": "Recuperación de activos del proyecto",
	"previewAssetsPanel.title": "bienes",
	"previewAudiencesPanel.loading": "Recuperando opciones de orientación",
	"previewAudiencesPanel.title": "Segmentación de audiencia",
	"previewBrowseComponentsPanel.allContentType": "todos los tipos de contenido",
	"previewBrowseComponentsPanel.filter": "Filtrar...",
	"previewBrowseComponentsPanel.nextPage": "Siguiente página",
	"previewBrowseComponentsPanel.noResults": " No se han encontrado resultados.",
	"previewBrowseComponentsPanel.previousPage": "Página anterior",
	"previewBrowseComponentsPanel.sharedComponentsHelperText": "Aquí solo se muestran los componentes compartidos",
	"previewBrowseComponentsPanel.title": "Examinar componentes",
	"previewCompatDialog.legacyCompatMessage": "Esta página es compatible con la experiencia de edición anterior. ¿Le gustaría ir allí ahora?",
	"previewCompatDialog.nextCompatMessage": "Esta página es compatible con la nueva experiencia de edición. ¿Le gustaría ir allí ahora?",
	"previewCompatDialog.rememberChoice": "Recuerda la elección",
	"previewCompatDialog.title": "Aviso de compatibilidad de vista previa",
	"previewComponentsPanel.browse": "Navegar existente",
	"previewComponentsPanel.listDropTargets": "Listar destinos de caída",
	"previewComponentsPanel.listInPageInstances": "Instancias en esta página",
	"previewComponentsPanel.title": "Agregar componentes",
	"previewConcierge.contentWasChangedByAnotherUser": "{name} ha cambiado la página actual. ¿Recargar?",
	"previewConcierge.contentWasLockedByAnotherUser": "El elemento fue bloqueado por {name}. Edición deshabilitada hasta que se libera el bloqueo.",
	"previewDropTargetsPanel.chooseContentType": "Elija un tipo de contenido.",
	"previewDropTargetsPanel.noResults": "No se han encontrado resultados.",
	"previewDropTargetsPanel.selectContentType": "Seleccionar tipo de contenido",
	"previewDropTargetsPanel.title": "Objetivos de caída de componentes",
	"previewEditFormTool.editController": "Editar controlador",
	"previewEditFormTool.editTemplate": "Editar plantilla",
	"previewEditFormTool.openComponentForm": "Editar",
	"previewInPageInstancesPanel.chooseContentType": "Elija un tipo de contenido.",
	"previewInPageInstancesPanel.noResults": "No se han encontrado resultados.",
	"previewInPageInstancesPanel.selectContentType": "Seleccionar tipo de contenido",
	"previewInPageInstancesPanel.title": "En esta página",
	"previewPageExplorerPanel.loading": "Cargando",
	"previewPageExplorerPanel.rootItemLabel": "Elementos de contenido actual",
	"previewPageExplorerPanel.title": "Explorador de páginas",
	"previewRubbishBin.dropToTrash": "Deje caer aquí a la basura",
	"previewRubbishBin.itemTrashed": "¡A la basura!",
	"previewSearchPanel.title": "Buscar",
	"previewSimulatorPanel.previewWindowSize": "Tamaño de ventana de vista previa",
	"previewSimulatorPanel.title": "Simulador de dispositivo",
	"previewSiteExplorerPanel.title": "Explorador del proyecto",
	"previewToolbar.editModeSwitchDisabled": "La edición no está disponible",
	"previewToolbar.editModeSwitchLockedMessage": "El elemento está bloqueado por {lockOwner}",
	"previewToolbar.itemMenu": "Menú de elementos",
	"previewToolbar.quickCreateMenuTooltip": "Menú de creación rápida",
	"previewToolbar.toggleEditMode": "Alternar modo de edición",
	"previewTools.choseSiteMessage": "Por favor elija el proyecto",
	"previewTools.noWidgetsMessage": "No se han configurado herramientas",
	"profileSettings.currentPassword": "Contraseña actual",
	"profileSettings.isRequired": "es requerido",
	"profileSettings.languageUpdateFailedWarning": "La actualización del idioma ha fallado. Vuelva a intentarlo momentáneamente.",
	"profileSettings.languageUpdatedSuccessfully": "Idioma actualizado con éxito.",
	"profileSettings.mustMatchPreviousEntry": "Debe coincidir con la entrada anterior",
	"profileSettings.password": "Contraseña",
	"profileSettings.unsavedConfirmation": "Tiene cambios sin guardar. ¿Descartar los cambios?",
	"profileSettings.unsavedConfirmationTitle": "Cambios sin guardar",
	"publishCommitDialog.successMessage": "Publicación completada con éxito",
	"publishCommitDialog.title": "Publicar commit",
	"publishDialog.approveForPublish": "Aprobar para publicación",
	"publishDialog.differentPublishDateWarning": "<strong>Advertencia</strong> Los elementos que ha seleccionado para aprobación se enviaron con diferentes fechas / horas de publicación solicitadas.",
	"publishDialog.emptyHardDependencies": "Sin dependencias duras",
	"publishDialog.emptySoftDependencies": "Sin dependencias blandas",
	"publishDialog.firstPublish": "Se publicará todo el sitio ya que esta es la primera solicitud de publicación.",
	"publishDialog.hardDependencies": "Dependencias difíciles",
	"publishDialog.introductoryText": "Los archivos seleccionados serán publicados. Las dependencias duras se incluyen automáticamente. Las dependencias suaves son opcionales y puede elegir cuál incluir.",
	"publishDialog.itemsToPublish": "Artículos para publicar",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "Programación de elementos seleccionados",
	"publishDialog.requestPublish": "Solicitar publicación",
	"publishDialog.requestPublishHint": "Los artículos se enviarán a revisión y se publicarán una vez aprobados.",
	"publishDialog.showAllDependencies": "Mostrar todas las dependencias",
	"publishDialog.softDependencies": "Dependencias suaves",
	"publishDialog.submissionCommentFieldError": "Por favor escriba el comentario de envío.",
	"publishDialog.submissionMandatory": "Presentación obligatoria",
	"publishDialog.submissionOptional": "Presentación opcional",
	"publishDialog.subtitle": "Las dependencias duras se envían automáticamente con los elementos principales. Puede elegir si desea enviar o no dependencias suaves",
	"publishDialog.title": "Publicar",
	"publishForm.emailLabel": "Envíeme los comentarios del revisor por correo electrónico",
	"publishForm.mixedPublishingDates": "Los elementos tienen horarios de publicación mixtos.",
	"publishForm.mixedPublishingTargets": "Los elementos tienen objetivos de publicación mixtos.",
	"publishForm.publishingTargetError": "Error al cargar los destinos de publicación.",
	"publishForm.publishingTargetLoading": "Cargando...",
	"publishForm.publishingTargetRetry": "Procesar de nuevo",
	"publishForm.publishingTargetSuccess": "Éxito",
	"publishForm.requestApproval": "Pedir aprobación",
	"publishForm.scheduling": "Programación",
	"publishForm.schedulingLater": "Luego",
	"publishForm.schedulingLaterDisabled": "Más tarde (deshabilitado en la primera publicación)",
	"publishForm.schedulingNow": "ahora",
	"publishForm.submissionComment": "Comentario de envío",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "Puede ingresar varios separados por comas",
	"publishOnDemand.formPathLabel": "Ruta para publicar",
	"publishOnDemand.formPathLabelPreview": "Confirmar o etiquetar ID",
	"publishOnDemand.pathModeDescription": "Publique los cambios realizados en Studio a través de la interfaz de usuario",
	"publishOnDemand.publishingTarget": "Objetivo de publicación",
	"publishOnDemand.submissionComment": "Comentario de envío",
	"publishOnDemand.tagsModeDescription": "Publique los cambios realizados a través de acciones directas de git en el repositorio o extraídos de un repositorio remoto",
	"publishOnDemand.title": "Publicar bajo demanda",
	"publishing.bulkPublishNote": "La publicación masiva debe usarse para publicar los cambios realizados en Studio a través de la interfaz de usuario. Para los cambios realizados a través de acciones directas de git, use la función \"Publicar por ...\".",
	"publishing.busy": "Ocupado",
	"publishing.idle": "Ocioso",
	"publishing.publishByNote": "La función \"Publicar por ...\" debe usarse para los cambios realizados a través de acciones directas de git contra el repositorio o extraídas de un repositorio remoto. Para los cambios realizados a través de Studio en la interfaz de usuario, utilice \"Publicación masiva\".",
	"publishing.queued": "En cola",
	"publishing.ready": "Listo",
	"publishing.started": "Empezado",
	"publishing.stopped": "Detenido",
	"publishingDashboard.BLOCKED": "Obstruido",
	"publishingDashboard.CANCELLED": "Cancelado",
	"publishingDashboard.COMPLETED": "Completado",
	"publishingDashboard.PROCESSING": "Procesando",
	"publishingDashboard.READY_FOR_LIVE": "Listo Para Publicar",
	"publishingDashboard.all": "TODOS",
	"publishingDashboard.bulkPublishStarted": "Se ha iniciado el proceso de publicación masiva.",
	"publishingDashboard.cancelItemButtonText": "Cancelar",
	"publishingDashboard.cancelSelected": "Cancelar Seleccionados",
	"publishingDashboard.comment": "Comentario",
	"publishingDashboard.commentNotProvided": "(comentario de envío no proporcionado)",
	"publishingDashboard.confirmAllHelper": "¿Establecer el estado de todos los elementos seleccionados en \"Cancelado\"?",
	"publishingDashboard.confirmHelperText": "¿Establecer el estado del elemento en \"Cancelado\"?",
	"publishingDashboard.fetchPackagesFiles": "Obtener archivos de paquetes",
	"publishingDashboard.filesList": "Lista de archivos",
	"publishingDashboard.filteredBy": "Mostrando: {state, select, all {} other {estado: {state}.}} {environment, select, all {} other {{environment} objetivo.}} {path, select, none {} other {Filtrado por {path}}}",
	"publishingDashboard.filters": "Filtros",
	"publishingDashboard.gitNote": "La publicación por confirmación o etiqueta debe usarse para los cambios realizados a través de acciones directas de git contra el repositorio o extraídos de un repositorio remoto. Para los cambios realizados a través de Studio en la interfaz de usuario, utilice <a>publique por ruta</a>.",
	"publishingDashboard.next": "Siguiente página",
	"publishingDashboard.no": "No",
	"publishingDashboard.noPackagesSubtitle": "Intenta cambiar tu consulta",
	"publishingDashboard.noPackagesTitle": "No hay paquetes donde se encuentran",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} Paquete seleccionado} other {{count} Paquetes seleccionados}}",
	"publishingDashboard.pathExpression": "Expresión de ruta",
	"publishingDashboard.previous": "Página anterior",
	"publishingDashboard.publishSuccess": "Publicado con éxito.",
	"publishingDashboard.scheduled": "Programado para <b>{schedule, date, medium} {schedule, time, short}</b> por <b>{approver}</b>",
	"publishingDashboard.selectAll": "Seleccionar todo en esta página",
	"publishingDashboard.state": "Estado",
	"publishingDashboard.status": "El estado es {state} para el ojetivo de publicación {environment}",
	"publishingDashboard.studioNote": "La publicación por ruta debe usarse para publicar los cambios realizados en Studio a través de la interfaz de usuario. Para los cambios realizados mediante acciones directas de git, <a>publícalos por confirmación o etiqueta</a>.",
	"publishingDashboard.title": "Panel de publicación",
	"publishingDashboard.warning": "Esto obligará a publicar todos los elementos que coincidan con el patrón solicitado, incluidas sus dependencias, y puede llevar mucho tiempo según la cantidad de elementos. Asegúrese de que todos los elementos modificados (incluido el posible trabajo en curso de alguien) estén listos para publicarse antes de continuar.",
	"publishingDashboard.yes": "Sí",
	"publishingQueue.title": "Cola de publicación",
	"publishingStatus.publisherUnlocked": "Editor desbloqueado",
	"publishingStatusMessages.confirmUnlockPublisher": "¿Confirma que desea desbloquear el publicador?",
	"publishingStatusMessages.errorMessage": "El editor se detuvo debido a un error.",
	"publishingStatusMessages.isDisabledMessage": "El editor está inhabilitado.",
	"publishingStatusMessages.lockOwnerDisplayMessage": "Bloqueado por {lockOwner}",
	"publishingStatusMessages.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusMessages.processingMessage": "Preparando elementos para su publicación. {numberOfItems} de {totalItems} procesados hasta ahora.",
	"publishingStatusMessages.publishingMessage": "Publicar elementos. Publicado {numberOfItems} {numberOfItems, plural, one {item} other {items}} de {totalItems} a {publishingTarget}. La identificación del paquete es {submissionId}.",
	"publishingStatusMessages.publishingStatus": "Estado de publicación",
	"publishingStatusMessages.queuedMessage": "Los elementos están programados para su publicación.",
	"publishingStatusMessages.stoppedMessage": "Un administrador detuvo al editor.",
	"pullDialog.pullFrom": "Hacer pull de {remoteName}",
	"pushToRemoteDialog.forcePush": "Empuje forzado",
	"quickCreateBtnLabel.label": "Abrir menú de creación rápida",
	"quickCreateMenu.learnMore": "aprende más",
	"quickCreateMenu.learnMoreError": "No se ha configurado la creación rápida. Por favor, póngase en contacto con el administrador del sistema.",
	"quickCreateMenu.sectionTitle": "Creación rápida",
	"quickCreateMenu.title": "Nuevo contenido",
	"recentActivity.lastEditedBy": "Última edición por",
	"recentActivity.publishDate": "Fecha de publicación",
	"recentActivityDashlet.dashletTitle": "Mi actividad reciente",
	"recentActivityDashlet.emptyMessage": "No hay actividad reciente",
	"recentActivityDashlet.filterBy": "Filtrado por",
	"recentActivityDashlet.hideLiveItems": "Ocultar elementos activos",
	"recentActivityDashlet.showLiveItems": "Mostrar elementos en vivo",
	"recentlyPublished.myLastEdit": "Mi última edición",
	"recentlyPublished.publishDate": "Fecha de publicación",
	"recentlyPublished.publishedBy": "Publicado por",
	"recentlyPublished.publishedTo": "publicado para",
	"recentlyPublishedDashlet.collapseAll": "Desplegar todo",
	"recentlyPublishedDashlet.dashletTitle": "Publicado recientemente ({total})",
	"recentlyPublishedDashlet.emptyMessage": "No hay elementos publicados recientemente",
	"recentlyPublishedDashlet.expandAll": "Expandir todo",
	"recentlyPublishedDashlet.filterBy": "Filtrado por",
	"recentlyPublishedDashlet.showAll": "Todos ({total})",
	"register.dropTargetsNotFound": "No hay destinos de caída para {contentType} componentes.",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.cancel": "Cancelar",
	"rejectDialog.continue": "Rechazar",
	"rejectDialog.firstPublish": "La publicación completa del sitio será rechazada ya que esta es la primera solicitud de publicación.",
	"rejectDialog.noItemsSelected": "No hay archivos para rechazar",
	"rejectDialog.predefinedRejectionComments": "Comentarios de rechazo predefinidos",
	"rejectDialog.rejectCommentLabel": "Comentario de rechazo",
	"rejectDialog.submittedBy": "Presentado por",
	"rejectDialog.subtitle": "Los siguientes artículos marcados serán rechazados.",
	"rejectDialog.title": "Rechazar",
	"rejectDialog.typeMyOwnComment": "Escribe mi propio comentario",
	"remoteRepositories.title": "Repositorios remotos",
	"reposAdmin.pendingCommit": "El repositorio contiene archivos pendientes de confirmación. Consulte el estado del repositorio a continuación para obtener más detalles.",
	"reposAdmin.repositoriesNote": "No utilice Studio como una plataforma de resolución de conflictos y fusión de git. Todos los conflictos de fusión deben resolverse en sentido ascendente antes de ingresar a Studio.",
	"reposAdmin.unreachableRemote": "El repositorio \"{name}\" no está disponible actualmente.",
	"reposAdmin.unstagedFilesMessage": "Hay archivos sin clasificar en su repositorio.",
	"repositories.acceptRemote": "Aceptar remoto",
	"repositories.acceptRemoteHelper": "Reemplace el archivo local con la versión extraída del control remoto.",
	"repositories.commitResolution": "Comprometer resolución",
	"repositories.commitResolutionHelper": "Después de comprometer esta resolución. debe 'empujar' los cambios a los remotos para sincronizar el nuevo estado que acaba de definir.",
	"repositories.commitSuccessMessage": "Comprometido con éxito.",
	"repositories.confirmHelper": "Cancele la operación de extracción y conserve lo que hay en este repositorio.",
	"repositories.conflictsExist": "Las operaciones del repositorio están deshabilitadas mientras existen conflictos. Resuelve los conflictos.",
	"repositories.deleteConfirmation": "¿Eliminar repositorio remoto?",
	"repositories.fetching": "Obteniendo estado del repositorio...",
	"repositories.forcePushWarning": "Force push sobrescribirá lo que hay en la rama del repositorio remoto.",
	"repositories.keepLocal": "Mantener local",
	"repositories.keepLocalHelper": "Descarte los cambios remotos y conserve el archivo local.",
	"repositories.mergeStrategyLabel": "Fusionar estrategia",
	"repositories.mergeStrategyNone": "Ninguna",
	"repositories.mergeStrategyOurs": "Acepta la nuestra",
	"repositories.mergeStrategyTheirs": "Aceptar el suyo",
	"repositories.messageLabel": "Mensaje de resolución de conflictos",
	"repositories.newRemoteDialogTitle": "Nuevo repositorio remoto",
	"repositories.newRepository": "Agregar repositorio remoto",
	"repositories.noConflicts": "El repositorio local está libre de conflictos.",
	"repositories.pendingCommit": "Repo contiene archivos pendientes de confirmación. Consulte el estado del repositorio a continuación para obtener más detalles.",
	"repositories.pullFromCreatedBranchOnlyHint": "Solo puede hacer pull de la rama desde la que se creó el sitio; cualquier trabajo de fusión debe hacerse en el repositorio remoto.",
	"repositories.pullSuccessMessage": "Extrajo con éxito {numberOfCommits} confirmaciones. La identificación de confirmación de fusión se copió al portapapeles. ¿Te gustaría publicar esto ahora?",
	"repositories.pullSuccessNoChangesMessage": "Pull exitoso: ya actualizado.",
	"repositories.pushSuccessMessage": "Empujado con éxito.",
	"repositories.pushUrl": "URL de inserción",
	"repositories.remoteBranchToPull": "Rama remota para tirar",
	"repositories.remoteBranchToPush": "Rama remota para empujar",
	"repositories.remoteCreateSuccessMessage": "El repositorio remoto se creó correctamente.",
	"repositories.remoteDeleteSuccessMessage": "El repositorio remoto se eliminó correctamente.",
	"repositories.remoteName": "Nombre del repositorio de Git remoto",
	"repositories.remoteUrl": "URL del repositorio remoto",
	"repositories.repoRemoteNameHelper": "Nombra el control remoto que hará referencia al repositorio de origen desde el que extraer.",
	"repositories.repoRemoteUrlHelper": "La URL del repositorio de git desde la que crear.",
	"repositories.revertAll": "Revertir todo",
	"repositories.revertPullSuccessMessage": "Repositorio revertido con éxito.",
	"repositories.sandboxBranchRetrievalError": "No se puede recuperar la rama del proyecto",
	"repositories.splitView": "Vista dividida",
	"repositories.unstagedFiles": "Hay archivos sin clasificar en su repositorio.",
	"repository.conflictedFiles": "Archivos en conflicto",
	"repository.pendingCommit": "Compromiso pendiente",
	"repository.repositoryStatusLabel": "Estado del repositorio",
	"repository.statusNote": "No utilice Studio como una plataforma de resolución de conflictos y fusión de git. Todos los conflictos de fusión deben resolverse en sentido ascendente antes de ingresar a Studio.",
	"requestPublishDialog.cancel": "Cancelar",
	"resetPasswordDialog.helperText": "Establecer una nueva contraseña para el usuario \"{user}\"",
	"resetPasswordDialog.passwordUpdated": "Contraseña actualizada exitosamente",
	"resetPasswordDialog.title": "Restablecer la contraseña",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "Confirmar contraseña",
	"resetView.resetPasswordError": "Error al restablecer la contraseña. El token puede ser inválido o caducado.",
	"resetView.resetPasswordFieldPlaceholderLabel": "Nueva contraseña",
	"resetView.resetPasswordInvalidToken": "Token inválido o caducado.",
	"resetView.resetPasswordSuccess": "La contraseña se restableció correctamente. Inicia sesión con tu nueva contraseña.",
	"rteControlMessages.chooseSource": "Elija una fuente",
	"rteControlMessages.dropImageUploaded": "{title} se cargó correctamente.",
	"rteControlMessages.escapeScripts": "Escapar Scripts",
	"rteControlMessages.incompatibleDatasource": "La fuente de datos configurada para navegar no es compatible con el editor de texto enriquecido. Por favor contacte a su administrador.",
	"rteControlMessages.noDatasourcesConfigured": "No hay fuentes configuradas para este editor.",
	"rteControlMessages.requiredField": "Campo requerido",
	"scheduledDashlet.widgetTitle": "Programado para publicar",
	"search.acceptSelection": "Aceptar selección",
	"search.changeQuery": "Intente cambiar su consulta.",
	"search.clearSelected": "Borrar {count} seleccionados",
	"search.filtersActive": " • <span>Filtros activos</span>",
	"search.goToPreview": "Ir a la página",
	"search.itemsPerPage": "Artículos por página:",
	"search.noPermissions": "No hay permisos disponibles.",
	"search.noResults": "No se encontraron resultados.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Seleccionar todo en esta página",
	"search.selectionCount": " {count} seleccionado",
	"search.videoProcessed": "El video se está procesando, la vista previa estará disponible cuando se complete el procesamiento",
	"searchAhead.noResults": "No hay resultados.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": "Arriba de {value}{unit}",
	"searchFilter.anyPath": "Cualquier directorio",
	"searchFilter.asc": "ascendente",
	"searchFilter.byRelevanceAscMessage": "Menos relevante primero",
	"searchFilter.byRelevanceDescMessage": "Lo más relevante primero",
	"searchFilter.clearFilters": "Borrar filtros",
	"searchFilter.contentType": "Tipo de contenido",
	"searchFilter.desc": "Descendiendo",
	"searchFilter.internalName": "Nombre",
	"searchFilter.lastEditDate": "Última fecha de edición",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Busca en:",
	"searchFilter.size": "Tamaño del contenido",
	"searchFilter.sortBy": "Ordenar por",
	"searchFilter.under": "debajo de {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Cambio Vista",
	"searchToolBar.showHideFilters": "Mostrar / ocultar filtros",
	"setWorkflowStateDialog.clearAsPublishedLive": "Limpiar como se publicó en vivo",
	"setWorkflowStateDialog.clearAsPublishedToStaging": "Borrar como publicado hacia la puesta en escena",
	"setWorkflowStateDialog.clearModified": "Quitar modificado",
	"setWorkflowStateDialog.clearNew": "Quitar nuevo",
	"setWorkflowStateDialog.clearSystemProcessing": "Procesamiento claro del sistema",
	"setWorkflowStateDialog.clearUserLock": "Borrar bloqueo de usuario",
	"setWorkflowStateDialog.setAsPublishedLive": "Establecer como publicado en vivo",
	"setWorkflowStateDialog.setAsPublishedToStaging": "Establecer como publicado para la puesta en escena",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.editModePaddingHelp": "Agrega relleno a las colecciones para facilitar la interacción en el modo de edición. Presione `p` en cualquier momento para activar / desactivar.",
	"settingsPanel.editModePaddingLabel": "Modo espaciado (p)",
	"settingsPanel.highlightAllTargets": "Resalte todos los objetivos (e)",
	"settingsPanel.highlightMode": "Modo de resaltado",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "Contenido compartido",
	"shortcuts.disableICE": "Desactive ICE mientras se mantiene presionado (para hacer clic)",
	"shortcuts.editModePadding": "Alternar el relleno del modo de edición",
	"shortcuts.reloadPreview": "Recargar vista previa",
	"shortcuts.showShortcuts": "Mostrar atajos de teclado",
	"shortcuts.toggleEditMode": "Modo de edición ENCENDIDO / APAGADO",
	"shortcuts.toggleMoveMode": "Activar / desactivar el modo de movimiento",
	"site.deleted": "Proyecto eliminado correctamente",
	"siteCard.helperText": "¿Eliminar el proyecto \"{site}\"?",
	"siteComponentDS.componentPath": "Ruta de componente",
	"siteComponentDS.dataType": "Tipo de datos",
	"siteComponentDS.date": "Fecha",
	"siteComponentDS.float": "Punto flotante",
	"siteComponentDS.html": "Tipo de datos",
	"siteComponentDS.integer": "Entero",
	"siteComponentDS.label": "Selector de taxonomía",
	"siteComponentDS.required": "Necesario",
	"siteComponentDS.siteComponent": "Componente del proyecto",
	"siteComponentDS.string": "Cadena de caracteres",
	"siteComponentDS.unableLoad": "El sistema no pudo cargar {file}.",
	"siteConfig.controlNotAvailable": "Control no disponible",
	"siteConfig.insertExpressionMessage": "Insertar expresión",
	"siteConfig.invalidNumber": "\"{value}\" no es un número válido.",
	"siteConfig.landingMessage": "Por favor, elija una herramienta de la izquierda.",
	"siteConfig.loadModuleError": "No se puede cargar \"{tool}\". Compruebe la configuración de las herramientas del proyecto.",
	"siteConfig.postfixes": "Sufijos",
	"siteConfig.switchToMessage": "Cambiar a {type}",
	"siteConfig.toolNotFound": "No se encontró la herramienta \"{tool}\".",
	"siteConfigurationManagement.activeEnvironment": "{environment} Medio ambiente",
	"siteConfigurationManagement.confTabAWSProfiles": "Perfiles de AWS",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "Archivo de configuración de perfiles de AWS.",
	"siteConfigurationManagement.confTabAssetProcessing": "Procesamiento de activos",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Archivo de configuración de procesamiento de activos.",
	"siteConfigurationManagement.confTabBlobStores": "Tiendas de blobs",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob almacena el archivo de configuración.",
	"siteConfigurationManagement.confTabBoxProfiles": "Perfiles de caja",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Archivo de configuración de perfiles de caja.",
	"siteConfigurationManagement.confTabCMISConfiguration": "Configuración CMIS",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "Estos archivos configuran 0 o más repositorios compatibles con CMIS como fuentes de datos para que los autores de contenido elijan",
	"siteConfigurationManagement.confTabCodeEditorConf": "Configuración del editor de código",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Define las configuraciones del editor de código",
	"siteConfigurationManagement.confTabConfDesc": "Define esta lista de configuraciones",
	"siteConfigurationManagement.confTabConfigurations": "Configuraciones",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Configuración de navegación contextual",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Define módulos en la barra de navegación contextual del proyecto.",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Configuración del solucionador de dependencias",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "Este archivo configura qué rutas de archivo Crafter considera una dependencia y cómo deben extraerse.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Configuración del entorno de desarrollo",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Define una configuración de entorno de desarrollo",
	"siteConfigurationManagement.confTabEndpointsConf": "Configuración de terminales",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Define una lista de puntos finales disponibles",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Contexto de la aplicación del proyecto del motor",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Contexto de la aplicación del proyecto utilizado por Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Contexto de la aplicación del proyecto del motor: en vivo",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Contexto de la aplicación del proyecto del motor: vista previa",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Contexto de la aplicación del proyecto del motor: puesta en escena",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Configuración del proyecto del motor",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Configuración del proyecto utilizada por Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Configuración del proyecto del motor: en vivo",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Configuración del proyecto del motor: vista previa",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Configuración del proyecto del motor: puesta en escena",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Configuración de reescritura de URL del motor (estilo XML)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "Este archivo configura las propiedades del proyecto utilizadas por Crafter Engine",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Configuración de reescritura de URL del motor (estilo XML) - En vivo",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Configuración de reescritura de URL del motor (estilo XML) - Vista previa",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Configuración de reescritura de URL del motor (estilo XML): puesta en escena",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Configuración del entorno",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "Este archivo configura los entornos en los que Crafter Studio puede publicar",
	"siteConfigurationManagement.confTabMimeTypes": "Tipos de mimo",
	"siteConfigurationManagement.confTabMimeTypesDesc": "Este archivo configura los íconos de tipos de mímica anulados para este proyecto / plano.",
	"siteConfigurationManagement.confTabNotificationConf": "Configuracion de notificaciones",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Define una lista de mensajes de IU",
	"siteConfigurationManagement.confTabPermissionsMappings": "Asignación de permisos",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Define un mapa de permisos y rutas.",
	"siteConfigurationManagement.confTabPersonasConf": "Configuración de personas",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Define una lista de personas disponibles para asumir en la vista previa",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Vista previa de la configuración de activos",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Define una lista de activos editables asociados con contenido XML",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Vista previa de la configuración de componentes",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Define una lista de componentes que se pueden crear dinámicamente en la vista previa",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Configuración del panel de vista previa",
	"siteConfigurationManagement.confTabProxyConfig": "Configuración de proxy",
	"siteConfigurationManagement.confTabProxyConfigDesc": "Este archivo configura los servidores proxy para la vista previa.",
	"siteConfigurationManagement.confTabRoleMappings": "Asignaciones de roles",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Define una lista de roles disponibles en el proyecto.",
	"siteConfigurationManagement.confTabSidebarConf": "Configuración de la barra lateral",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Define módulos en la barra lateral",
	"siteConfigurationManagement.confTabSiteConf": "Configuración de Editor de Tipos de Contenido",
	"siteConfigurationManagement.confTabSiteConfDesc": "Define controles y fuentes de datos disponibles para edición de tipos de contenido",
	"siteConfigurationManagement.confTabSiteConfiguration": "Configuración del proyecto",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Define la configuración general del proyecto.",
	"siteConfigurationManagement.confTabSitePolicyConf": "Configuración de la política del proyecto",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Define políticas para validar operaciones de contenido.",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Configuración de segmentación",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "Este archivo configura el sistema de orientación de Crafter Studio para ayudar a proporcionar a Crafter Engine propiedades de usuario falsas que ayuden a impulsar el sistema de orientación.",
	"siteConfigurationManagement.confTabTargetsConf": "Configuración de objetivos",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Define una lista de objetivos utilizados para la fuente de datos del formulario",
	"siteConfigurationManagement.confTabTranslationConf": "Configuración de traducción",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Define los idiomas admitidos y cómo resolverlos.",
	"siteConfigurationManagement.confTabUiConf": "Configuración de la interfaz de usuario",
	"siteConfigurationManagement.confTabUiConfDesc": "Define los widgets que se muestran en la interfaz de usuario.",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "Archivo de configuración de perfiles WebDAV.",
	"siteConfigurationManagement.confTabWorkflowConf": "Configuración del flujo de trabajo",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Define los flujos de trabajo disponibles en el sistema.",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Define una lista de herramientas disponibles en la vista previa.",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "Ocultar muestra",
	"siteConfigurationManagement.history": "historia",
	"siteConfigurationManagement.rteConfigDescription": "Define las configuraciones de los editores de texto enriquecido en forma",
	"siteConfigurationManagement.rteConfigTitle": "Configuración RTE",
	"siteConfigurationManagement.selectConfigFile": "Elija un archivo de configuración de la izquierda.",
	"siteConfigurationManagement.title": "Configuración",
	"siteConfigurationManagement.unsavedChangesSubtitle": "Tienes cambios sin guardar, ¿quieres irte?",
	"siteConfigurationManagement.unsavedChangesTitle": "Cambios sin guardar",
	"siteConfigurationManagement.viewSample": "Ver muestra",
	"siteDashboard.emptyStateMessageSubtitle": "Agregue widgets en la configuración de la interfaz de usuario de su proyecto",
	"siteDashboard.emptyStateMessageTitle": "No hay widgets para mostrar",
	"siteSearch.noOptionsAvailable": "No hay opciones disponibles.",
	"siteSearch.unknownErrorSearching": "Ocurrió un error con el servicio de búsqueda.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Elija proyecto",
	"siteTools.itemStates": "Estados del artículo",
	"siteTools.selectTool": "Por favor, elija una herramienta de la izquierda.",
	"siteTools.title": "Herramientas del Proyecto",
	"siteTools.toolListingNotConfigured": "No se ha configurado la lista de herramientas del proyecto",
	"siteTools.toolListingNotConfiguredSubtitle": "Establezca la referencia craftercms.siteTools en ui.xml",
	"siteTools.toolNotFound": "Herramienta no encontrada",
	"sites.ChangeView": "Cambio Vista",
	"sites.createGroup": "Crea un grupo",
	"sites.createSite": "Crear sitio",
	"sitesAdmin.siteUpdated": "Proyecto actualizado.",
	"sitesGrid.emptyStateMessage": "No se encontraron proyectos",
	"sitesGrid.siteDeleted": "Proyecto eliminado correctamente",
	socketConnectionIssue: socketConnectionIssue$1,
	"systemType.asset": "Activo",
	"systemType.component": "componente",
	"systemType.folder": "Carpeta",
	"systemType.levelDescriptor": "Descriptor de nivel",
	"systemType.page": "Página",
	"systemType.renderingTemplate": "Plantilla de renderizado",
	"systemType.script": "Guión",
	"systemType.taxonomy": "Taxonomia",
	"targetingDialog.setNow": "Establecer ahora",
	"tokenManagement.clearSelected": "Borrar seleccionados ({count})",
	"tokenManagement.copied": "Token copiado al portapapeles",
	"tokenManagement.createToken": "Crear token",
	"tokenManagement.created": "Token creado y copiado al portapapeles",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Eliminar seleccionado",
	"tokenManagement.emptyTokens": "No hay tokens, haga clic en Create Token para agregar uno nuevo",
	"tokenManagement.helperText": "¿Eliminar el token \"{label}\"?",
	"tokenManagement.updated": "Token actualizado",
	"transcodedVideoPickerControl.label": "Video transcodificado",
	"transferList.addDisabledTooltip": "Seleccionar elementos para agregar desde la izquierda",
	"transferList.addToTarget": "Añadir seleccionado",
	"transferList.emptyListMessage": "Todos los usuarios son miembros de este grupo.",
	"transferList.removeDisabledTooltip": "Seleccionar elementos para eliminar de la derecha",
	"transferList.removeFromTarget": "Eliminar selección",
	"transferList.targetEmptyStateMessage": "No hay miembros en este grupo",
	"transferListColumn.noResults": "No hay resultados, intente cambiar la consulta",
	"uninstallPluginDialog.headerSubtitle": "Confirme la desinstalación de \"{pluginId}\"",
	"uninstallPluginDialog.headerTitle": "Desinstalar complemento",
	"uninstallPluginDialog.noUsagesFound": "No se encontraron usos",
	"uninstallPluginDialog.pluginSafeToUninstall": "El complemento se puede desinstalar de forma segura.",
	"uninstallPluginDialog.reviewDependenciesMessage": "Revise los elementos dependientes de \"{pluginId}\"",
	"uninstallPluginDialog.typePassword": "Escribe la palabra \"<b>{password}</b>\" para confirmar la eliminación del complemento.",
	"unlockPublisherDialog.dialogCopy": "Confirme la liberación del bloqueo del editor.",
	"unlockPublisherDialog.dialogTitle": "Confirmar el desbloqueo del editor",
	"unlockPublisherDialog.typeConfirmPassword": "Escriba la palabra \"<b>{password}</b>\" para confirmar que comprende las implicaciones y desea continuar.",
	"unlockPublisherDialog.unlockCompleteMessage": "El bloqueo del editor se liberó correctamente.",
	"unlockPublisherDialog.unlockFailedMessage": "Error al liberar el bloqueo del editor.",
	"uploadDialog.title": "Subir",
	"uploadDialog.uploadInProgress": "Las cargas aún están en curso. Salir de esta página detendría las cargas pendientes. ¿Estás seguro de que deseas irte?",
	"uploadDialog.uploadInProgressConfirmation": "Las cargas aún están en curso. Cerrar este modal detendría las cargas pendientes. ¿Estás seguro de que deseas cerrarlo?",
	"uppyCore.noDuplicates": "No se puede agregar el archivo duplicado \"% '{fileName}'\", ya existe",
	"uppyDashboard.acceptAll": "Aceptar todos los cambios",
	"uppyDashboard.addMore": "Añadir más",
	"uppyDashboard.addingMoreFiles": "Agregar más archivos",
	"uppyDashboard.cancelPending": "Cancelar pendiente",
	"uppyDashboard.clearCompleted": "Despejado completo",
	"uppyDashboard.maxActiveUploadsReached": " Se alcanzó el{maxFiles} máximo de cargas activas. Se ha descartado el exceso.",
	"uppyDashboard.maxFiles": "{maxFiles} máx.",
	"uppyDashboard.rejectAll": "Rechazar todos los cambios",
	"uppyDashboard.removeFile": "Remover archivo",
	"uppyDashboard.renamingFromTo": "Cambio de nombre de% '{from}' a% '{to}'",
	"uppyDashboard.validateAndRetry": "Aceptar cambios y subir",
	"userGroupMembershipEditor.addOrRemoveError": "Error al modificar el (los) grupo (s) de usuarios. Inténtelo de nuevo momentáneamente.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Cerrar",
	"userInfoDialog.deleteUser": "Borrar usuario",
	"userInfoDialog.externallyManaged": "Gestionado externamente",
	"userInfoDialog.helperText": "¿Eliminar usuario \"{username}\"?",
	"userInfoDialog.noRoles": "Sin roles",
	"userInfoDialog.resetPassword": "Restablecer la contraseña",
	"userInfoDialog.siteName": "Nombre del proyecto",
	"userInfoDialog.siteRoles": "Roles por proyecto",
	"userInfoDialog.userDeleted": "usuario eliminado con éxito",
	"userInfoDialog.userDetails": "Detalles de usuario",
	"userInfoDialog.userDisabled": "Usuario inhabilitado con éxito",
	"userInfoDialog.userEnabled": "Usuario habilitado correctamente",
	"userInfoDialog.userUpdated": "Usuario actualizado con éxito",
	"usersAdmin.firstName": "Nombre de pila",
	"usersAdmin.lastName": "Apellido",
	"usersAdmin.maxLengthError": "{field} no puede tener más de {size} caracteres",
	"usersAdmin.passwordChangeSuccessMessage": "Contraseña cambiada con éxito",
	"usersAdmin.userCreated": "{username} creado.",
	"usersAdmin.userDeleted": "{username} eliminado.",
	"usersAdmin.userEdited": "{username} editado.",
	"usersAdmin.userName": "Nombre de usuario",
	"usersGrid.createUser": "Crear usuario",
	"usersGrid.emptyStateMessage": "No se encontraron usuarios",
	"validations.itemLocked": "El artículo ya está bloqueado por {lockOwner}. Por favor, inténtelo de nuevo más tarde.",
	"validations.maxCount": "El número máximo de elementos es {maxCount}",
	"validations.maxLength": "Longitud máxima alcanzada ({maxLength})",
	"validations.minCount": "La cantidad mínima de elementos es {minCount}",
	"validations.noDataSourcesSet": "No hay fuentes de datos establecidas para este campo",
	"validations.noPathSetInDataSource": "No se estableció ninguna ruta para la fuente de datos",
	"validations.outOfSyncContent": "Se realizó una recarga automática porque el elemento se cambió en segundo plano. Inténtalo de nuevo.",
	"validations.required": " {field} es obligatorio",
	"viewVersionDialog.headerTitle": "Ver la versión del artículo",
	"wcmRootFolder.pathNotFound": "Carpeta {path} no encontrada.",
	"widgetComponent.componentNotFoundSubtitle": "Verifique la configuración de la interfaz de usuario y asegúrese de haber instalado los complementos que contienen los componentes deseados.",
	"widgetComponent.componentNotFoundTitle": "Componente {id} no encontrado.",
	"widgetComponent.pluginLoadFailedMessageBody": "Con {info} & ID de componente \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Error al cargar el complemento",
	"withEmptyState.defaultEmptyStateMessage": "No se han encontrado resultados",
	"word.configuration": "Configuración",
	"word.refresh": "Refrescar",
	"word.upload": "Subir",
	"words.about": "Acerca de",
	"words.accept": "Aceptar",
	"words.account": "Cuenta",
	"words.activity": "Actividad",
	"words.all": "TODOS",
	"words.apply": "Aplicar",
	"words.approve": "Aprobar",
	"words.asset": "Activo",
	"words.assets": "bienes",
	"words.audit": "Auditoría",
	"words.authentication": "Autenticación",
	"words.author": "autor",
	"words.back": "atrás",
	"words.base": "Base",
	"words.branch": "Rama",
	"words.browse": "Explorar",
	"words.by": "Por",
	"words.cancel": "Cancelar",
	"words.clear": "Limpiar",
	"words.close": "Cerrar",
	"words.cluster": "Racimo",
	"words.collapse": "Colapso",
	"words.compact": "Compacto",
	"words.component": "componente",
	"words.components": "componentes",
	"words.configuration": "Configuración",
	"words.confirm": "Confirmar",
	"words.content": "Contenido",
	"words.continue": "Continuar",
	"words.copy": "Dupdo",
	"words.create": "Crear",
	"words.created": "creado",
	"words.custom": "Personalizado",
	"words.cut": "Cortar",
	"words.dashboard": "Tablero",
	"words.defaults": "Valores predeterminados",
	"words.delete": "Borrar",
	"words.dependencies": "Dependencias",
	"words.description": "Descripción",
	"words.desktop": "escritorio",
	"words.details": "Detalles",
	"words.diff": "Diferencia",
	"words.disable": "Inhabilitar",
	"words.disabled": "Discapacitado",
	"words.dismiss": "Despedir",
	"words.documentation": "Documentación",
	"words.done": "Terminado",
	"words.duplicate": "Duplicar",
	"words.edit": "Editar",
	"words.edited": "Editado",
	"words.email": "Email",
	"words.enable": "Habilitar",
	"words.enabled": "Habilitado",
	"words.error": "Error",
	"words.expand": "Expandir",
	"words.expiration": "Vencimiento",
	"words.expired": "Muerto",
	"words.expiring": "Expirando",
	"words.fetch": "Ir a buscar",
	"words.fetching": "Atractivo",
	"words.files": "archivos",
	"words.filter": "Filtrar",
	"words.filters": "Filtros",
	"words.firstName": "Nombre de pila",
	"words.folder": "Carpeta",
	"words.font": "Fuente",
	"words.forward": "Adelante",
	"words.from": "Desde",
	"words.git": "Git",
	"words.global": "global",
	"words.go": "Ir",
	"words.graphQL": "GraphQL",
	"words.groups": "Los grupos",
	"words.height": "Altura",
	"words.history": "historia",
	"words.icon": "Icono",
	"words.id": "Id",
	"words.image": "Imagen",
	"words.install": "instalar",
	"words.installed": "Instalado",
	"words.item": "ít",
	"words.label": "Etiqueta",
	"words.language": "Idioma",
	"words.lastName": "Apellido",
	"words.level": "Nivel",
	"words.live": "VIVIR",
	"words.loading": "Cargando",
	"words.local": "Local",
	"words.locales": "Locales",
	"words.location": "Ubicación",
	"words.locked": "Bloqueado",
	"words.logger": "Logger",
	"words.login": "Iniciar sesión",
	"words.logout": "Cerrar sesión",
	"words.max": "Max",
	"words.members": "Miembros",
	"words.message": "Mensaje",
	"words.min": "Min",
	"words.minimize": "Minimizar",
	"words.move": "movimiento",
	"words.name": "Nombre",
	"words.never": "Nunca",
	"words.no": "No",
	"words.notification": "Notificación",
	"words.now": "ahora",
	"words.ok": "Ok",
	"words.options": "Opciones",
	"words.page": "Página",
	"words.pages": "Páginas",
	"words.parameters": "Parámetros",
	"words.password": "Contraseña",
	"words.paste": "Pegar",
	"words.pasting": "Pegado...",
	"words.path": "camino",
	"words.pause": "pausa",
	"words.phone": "Teléfono",
	"words.presets": "Preajustes",
	"words.preview": "Avance",
	"words.processing": "Procesando",
	"words.project": "Proyecto",
	"words.projects": "Proyectos",
	"words.publish": "Publicar",
	"words.published": "Publicado",
	"words.publishing": "Publicación",
	"words.pull": "Halar",
	"words.push": "Empujar",
	"words.queued": "En cola",
	"words.range": "Distancia",
	"words.ready": "listo",
	"words.reason": "Razón",
	"words.refresh": "Refrescar",
	"words.reject": "rechazar",
	"words.relevance": "Pertinencia",
	"words.remote": "remoto",
	"words.rename": "Rebautizar",
	"words.reset": "Reiniciar",
	"words.retry": "Reintentar",
	"words.revert": "Revertir",
	"words.review": "revisión",
	"words.roles": "Roles",
	"words.save": "Guardar",
	"words.schedule": "Programar",
	"words.script": "Guión",
	"words.scripts": "Guiones",
	"words.search": "Buscar",
	"words.select": "Seleccionar",
	"words.selected": "Seleccionado",
	"words.shortcuts": "Atajos",
	"words.show": "Show",
	"words.snippets": "Fragmentos",
	"words.staged": "Escenificado",
	"words.staging": "Puesta en escena",
	"words.start": "comienzo",
	"words.state": "Estado",
	"words.status": "Estado",
	"words.stay": "Permanecer",
	"words.stop": "Detener",
	"words.stopped": "Detenido",
	"words.submit": "Enviar",
	"words.system": "Sistema",
	"words.tablet": "Tableta",
	"words.taxonomy": "Taxonomia",
	"words.template": "Modelo",
	"words.templates": "Plantillas",
	"words.thread": "Hilo",
	"words.timeline": "Línea de tiempo",
	"words.timestamp": "marca de tiempo",
	"words.to": "a",
	"words.token": "Token",
	"words.translation": "Traducción",
	"words.type": "Tipo",
	"words.uninstall": "Desinstalar",
	"words.unknown": "Desconocido",
	"words.unlock": "Desbloquear",
	"words.unpublished": "Inédito",
	"words.update": "Actualizar",
	"words.upload": "Subir",
	"words.url": "Url",
	"words.userName": "Nombre de usuario",
	"words.username": "Nombre de usuario",
	"words.users": "Usuarios",
	"words.validating": "validación",
	"words.value": "Valor",
	"words.version": "Versión",
	"words.view": "Ver",
	"words.warning": "Advertencia",
	"words.width": "anchura",
	"words.yes": "Si",
	"workflowCancellation.cancel": "Cancelar",
	"workflowCancellation.continue": "Continuar",
	"workflowCancellation.subtitle": "Editar cancelará todos los elementos que están en el lote de implementación programado. Revise la lista de archivos a continuación y elija \"Continuar\" para cancelar el flujo de trabajo y editar o \"Cancelar\" para permanecer en su panel de control.",
	"workflowCancellation.title": "Advertencia: cancelación del flujo de trabajo",
	"workflowCancellationDialog.noAffectedFiles": "No hay archivos afectados",
	"workflowStateManagementMessages.statesUpdatedMessage": "Estado para {count} {count, plural, one {ítem} other {ítems}} actualizado con éxito",
	"workflowStates.locked": "Bloqueado",
	"workflowStates.setState": " {count, plural, one {Set State for \"{name}\"} other {Set State for Items ({count})}}",
	"workflowStates.title": "Estados de flujo de trabajo"
};

var guestDetectionMessage$2 = "Die Kommunikation mit der Vorschauanwendung wurde unterbrochen. Studio wird die Verbindung weiterhin versuchen.";
var socketConnectionIssue$2 = "Die Verbindung zum Server wurde unterbrochen. Studio wird weiterhin versuchen, die Verbindung herzustellen.";
var de = {
	"CreateUserDialog.title": "Benutzer erstellen",
	"GlobalMenu.Audit": "PRÜFUNG",
	"GlobalMenu.Sites": "Projekte",
	"GraphiQL.title": "GraphiQL",
	"InstallPluginDialog.empty": "Keine Plugins gefunden.",
	"InstallPluginDialog.title": "Plugin suchen & installieren",
	"about.buildDate": "Erstellungsdatum",
	"about.buildNumber": "Build-Nummer",
	"about.studioVersionNumber": "Studio-Versionsnummer",
	"about.versionNumber": "Versionsnummer",
	"aboutView.attribution": "CrafterCMS wird durch diese anderen <a>Quelloffene Software projekte</a> ermöglicht.",
	"accountManagement.changeHelperText": "Nachdem Ihr Passwort erfolgreich aktualisiert wurde, müssen Sie sich erneut anmelden.",
	"accountManagement.changeLanguage": "Sprache ändern",
	"accountManagement.changePassword": "Ändere das Passwort",
	"accountManagement.confirmPassword": "Passwort bestätigen",
	"accountManagement.currentPassword": "derzeitiges Passwort",
	"accountManagement.languageUpdated": "Spracheinstellung geändert",
	"accountManagement.newPassword": "Neues Kennwort",
	"accountManagement.passwordChanged": "Das Passwort wurde erfolgreich geändert",
	"accountManagement.passwordInvalid": "Passwort ist ungültig.",
	"accountManagement.passwordMatch": "Muss mit dem vorherigen Passwort übereinstimmen.",
	"adminConfigurations.allEncrypted": "Alle markierten Elemente sind bereits verschlüsselt. Das Attribut \"encrypted\" sollte einen leeren Wert haben, der für die Verschlüsselung markiert werden soll (z.B. `encrypted=\"\"`).",
	"adminConfigurations.configSaved": "Konfiguration erfolgreich gespeichert.",
	"adminConfigurations.documentError": "Das Dokument enthält Fehler. Überprüfen Sie auf der Seite des Editors, ob Fehlermarkierungen vorhanden sind.",
	"adminConfigurations.encryptHinPt1": "Um den Inhalt eines Tags zu verschlüsseln, (1) markieren Sie die gewünschten Tags für die Verschlüsselung und (2) klicken Sie auf die Schaltfläche \"Markiert verschlüsseln\".",
	"adminConfigurations.encryptHinPt2": "(1) Markieren Sie Ihre Tags für die Verschlüsselung, indem Sie das Attribut <bold>`encrypted =\" \"`</bold>hinzufügen.",
	"adminConfigurations.encryptHinPt3": "Beispiel: {lt}accessKey encrypted = \"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) Klicken Sie auf die Schaltfläche <bold>`Verschlüsselt markiert`</bold> , und Ihr Tag sollte nun wie folgt aussehen:",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted = \"true\"{gt}${lc}enc: xeJW23SomeEncryptedValuesListedHere{rc}{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "Merken:",
	"adminConfigurations.encryptHinPt7": "Verwenden Sie das Attribut `encrypted =” ”` nur für Tags, die den zu verschlüsselnden Wert (Text) direkt enthalten.",
	"adminConfigurations.encryptHinPt8": "Fügen Sie das Attribut nicht zu Tags hinzu, die andere Tags enthalten - es sei denn, Sie möchten tatsächlich einen Teil von XML verschlüsseln.",
	"adminConfigurations.encryptHinPt9": "Manipulieren Sie die Verschlüsselungsergebnisse nicht manuell.",
	"adminConfigurations.encryptMarked": "Markierte verschlüsseln",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" mit Wert \"{value}\"",
	"adminConfigurations.noEncryptItems": "Im XML-Markup wurden keine zu verschlüsselnden Elemente gefunden. Fügen Sie das Attribut `encrypted=\"\"` hinzu, um es für die Verschlüsselung zu markieren.",
	"adminConfigurations.pendingEncryption": " {itemCount, plural, one {Tag-Name {tags} ist für die Verschlüsselung markiert, hat es aber nicht}other {Tag-Namen: {tags} {br} sind zur Verschlüsselung markiert, haben sie aber nicht}} wurde verschlüsselt. Lösen Sie die Verschlüsselung aus oder entfernen Sie das Tag-Flag.",
	"adminConfigurations.xmlContainsErrors": "Das XML-Dokument enthält Fehler: {errors}",
	"approvedScheduledItemsDashlet.collapseAll": "Alles einklappen",
	"approvedScheduledItemsDashlet.dashletTitle": "Genehmigte geplante Elemente ({count})",
	"approvedScheduledItemsDashlet.emptyMessage": "Es sind keine Artikel geplant",
	"approvedScheduledItemsDashlet.expandedAll": "Alle erweitern",
	"approvedScheduledItemsDashlet.filterBy": "Filtern nach",
	"asyncVideoPlayer.videoBeingProcessed": "Video wird verarbeitet, Vorschau ist verfügbar, wenn die Verarbeitung abgeschlossen ist",
	"audiencesPanel.apply": "Sich bewerben",
	"audiencesPanel.defaults": "Standardeinstellungen",
	"audiencesPanel.undefinedControlType": "Unbekannter Kontrolltyp",
	"auditGrid.allOrigins": "Alle Ursprünge",
	"auditGrid.allSites": "Alle Projekte",
	"auditGrid.allUsers": "Alle Nutzer",
	"auditGrid.clearFilters": "Filter löschen",
	"auditGrid.clusterNode": "Clusterknoten",
	"auditGrid.emptyStateMessage": "Keine Protokolle gefunden",
	"auditGrid.name": "Name",
	"auditGrid.noParameters": "Keine Parameter",
	"auditGrid.operation": "Operation",
	"auditGrid.origin": "Ursprung",
	"auditGrid.parameters": "Parameter",
	"auditGrid.showParameters": "Parameter anzeigen",
	"auditGrid.siteName": "Projekt",
	"auditGrid.targetType": "Zieltyp",
	"auditGrid.targetValue": "Zielwert",
	"auditGrid.timestamp": "Zeitstempel",
	"auditGrid.timezone": "Zeitzone",
	"auditGrid.username": "Nutzername",
	"auditGridFilterPopover.allOperations": "Alle Operationen",
	"auditGridFilterPopover.filterByCluster": "Nach Clusterknoten filtern",
	"auditGridFilterPopover.filterByOperations": "Nach Operationen filtern",
	"auditGridFilterPopover.filterByOrigin": "Nach Herkunft filtern",
	"auditGridFilterPopover.filterBySite": "Nach Projekt filtern",
	"auditGridFilterPopover.filterByTarget": "Nach Zielwert filtern",
	"auditGridFilterPopover.filterByUser": "Nach Benutzer filtern",
	"authMonitor.dialogTitleText": "Sitzung abgelaufen",
	"authMonitor.incorrectPasswordMessage": "Falsches Passwort. Bitte versuche es erneut.",
	"authMonitor.logOutButtonLabel": "Ausloggen",
	"authMonitor.openSSOLoginButtonLabel": "Öffnen Sie das Anmeldeformular",
	"authMonitor.passwordTextFieldLabel": "Passwort",
	"authMonitor.postSSOLoginMismatchMessage": "Sie haben sich anscheinend mit einem anderen Benutzer als dem Eigentümer dieser Sitzung angemeldet. Aus Sicherheitsgründen wird Ihr Bildschirm jetzt aktualisiert.",
	"authMonitor.sessionExpiredMessage": "Deine Sitzung ist abgelaufen. Bitte melden Sie sich wieder an.",
	"authMonitor.ssoOpenPopupMessage": "Stellen Sie sicher, dass Popups nicht blockiert sind. Wenn Sie sich angemeldet haben, kehren Sie zu diesem Fenster zurück und klicken Sie unten auf die Schaltfläche \"Fortsetzen\".",
	"authMonitor.usernameTextFieldLabel": "Nutzername",
	"authMonitor.validateSessionButtonLabel": "Fortsetzen",
	"awaitingApprovalDashlet.collapseAll": "Alles einklappen",
	"awaitingApprovalDashlet.dashletTitle": "Artikel, die auf Genehmigung warten ({count})",
	"awaitingApprovalDashlet.emptyMessage": "Keine Artikel warten auf Genehmigung",
	"awaitingApprovalDashlet.expandedAll": "Alle erweitern",
	"awaitingApprovalDashlet.hideUnpublished": "Unveröffentlichtes ausblenden",
	"awaitingApprovalDashlet.item": "Artikel",
	"awaitingApprovalDashlet.lastEdited": "Zuletzt bearbeitet",
	"awaitingApprovalDashlet.lastEditedBy": "Zuletzt bearbeitet von",
	"awaitingApprovalDashlet.publishingDate": "Veröffentlichungsdatum",
	"awaitingApprovalDashlet.publishingTarget": "Veröffentlichungsziel",
	"awaitingApprovalDashlet.showUnpublished": "Unveröffentlichte anzeigen",
	"browseCMIS.cloningCMIS": "CMIS-Asset klonen",
	"browseCMIS.cmis": "CMIS",
	"browseFilesDialog.emptyStateMessage": "Pfad `{path}` existiert nicht.",
	"browseFilesDialog.noResults": "Keine Dateien gefunden.",
	"browseFilesDialog.uploadImage": "Wählen Sie eine Datei aus",
	"browseSearchMessages.lookUpChildError": "Untergeordneter Formularrückruf für Suche kann nicht gesucht werden: {searchId}",
	"browseSearchMessages.lookUpParentError": "Übergeordneter Kontext für Suche kann nicht gesucht werden: {searchId}",
	"bulkUploadConfirmDialogMessages.description": "Es wird noch ein Massen-Upload durchgeführt. Es kann immer nur ein Massen-Upload gleichzeitig ausgeführt werden.",
	"bulkUploadConfirmDialogMessages.title": "Upload läuft",
	"changeContentTypeDialog.emptyStateMessage": "Keine Inhaltstypen gefunden",
	"changeContentTypeDialog.subtitle": "Die folgenden Startvorlagen stehen zur Verwendung in diesem Abschnitt zur Verfügung.",
	"changeContentTypeDialog.title": "Wählen Sie den Inhaltstyp",
	"checkboxGroupControl.datasource": "Datenquelle",
	"checkboxGroupControl.horizontal": "Horizontal",
	"checkboxGroupControl.listDirection": "Listenrichtung",
	"checkboxGroupControl.readonly": "Schreibgeschützt",
	"checkboxGroupControl.showSelectAll": "Zeige \"Alles auswählen\"",
	"checkboxGroupControl.vertical": "Vertikale",
	"childContentDS.childContent": "Untergeordneter Inhalt (veraltet)",
	"clusterAdmin.clusterDeleted": "{cluster} gelöscht.",
	"clusterGrid.authType": "Authentifizierungstyp",
	"clusterGrid.confirmDeleteCluster": "Diesen Cluster löschen?",
	"clusterGrid.deleteCluster": "Cluster löschen",
	"clusterGrid.emptyStateMessage": "Keine Cluster gefunden",
	"clusterGrid.localAddress": "Lokale Adresse",
	"clusterGrid.remoteName": "Remote-Name",
	"clusterManagement.clusterDeleted": "Cluster erfolgreich gelöscht",
	"codeEditor.confirm": "Bestätigen Sie Schließen",
	"codeEditor.contentModel": "Inhaltsmodell",
	"codeEditor.inProgressConfirmation": "Ein anderer Editor ist derzeit geöffnet und minimiert. Bitte schließen Sie den aktuellen Editor, bevor Sie einen anderen öffnen",
	"codeEditor.insertCode": "Code eingeben",
	"codeEditor.localesConfirmBody": "Die Vorlage für das ausgewählte Gebietsschema ist nicht vorhanden. Möchten Sie es jetzt erstellen?",
	"codeEditor.localesConfirmTitle": "Vorlage Erstellen",
	"codeEditor.localesHelperText": "Wählen Sie das Gebietsschema aus, für das Sie eine Vorlage erstellen/bearbeiten möchten. Gebietsschemas wie 'en' decken untergeordnete Gebietsschemas wie 'en_us' oder 'en_uk' ab.",
	"codeEditor.localesSnackBarTitle": "Vorlage erstellt. Möchten Sie die Basisvorlage kopieren?",
	"codeEditor.pendingChangesConfirmation": "Schließen ohne Änderungen zu speichern?",
	"codeEditor.saveAndClose": "Speichern und schließen",
	"codeEditor.saveAndMinimize": "Speichern & minimieren",
	"codeEditor.saved": "Speichern Sie erfolgreich",
	"codeEditor.stay": "Nein, bleib",
	"codeEditor.title": "Code-Editor",
	"common.back": "Zurück",
	"common.clearSelectedWithCount": " {count} ausgewählt löschen",
	"common.collapseAll": "Alles einklappen",
	"common.craftercms": "CrafterCMS",
	"common.developer": "Entwickler",
	"common.expandAll": "Alle erweitern",
	"common.license": "Lizenz",
	"common.marketplace": "Marktplatz",
	"common.minimizedDialogSiteSwitchCheck": "Bitte schließen Sie alle minimierten Dialoge, bevor Sie die Seite wechseln",
	"common.moreInfo": "Mehr Info",
	"common.password": "Passwort",
	"common.privateKey": "Privat Schlüssel",
	"common.publishingTarget": "Veröffentlichungsziel",
	"common.remoteName": "Git Remote Name",
	"common.toggleSidebarTooltip": "Seitenleiste umschalten",
	"common.token": "Zeichen",
	"common.use": "Benutzen",
	"common.userName": "Nutzername",
	"common.usernameAndPassword": "Benutzername Passwort",
	"common.version": "Ausführung",
	"common.website": "webseite",
	"compareVersionsDialog.back.selectRevision": "Zurück zur Auswahl der Revision",
	"compareVersionsDialog.headerSubtitleCompare": "Wählen Sie eine Revision zum Vergleichen aus",
	"compareVersionsDialog.headerSubtitleCompareTo": "Wählen Sie eine Überarbeitung zum Vergleichen mit \"{selectedA}\"",
	"compareVersionsDialog.headerTitle": "Artikelversionen vergleichen",
	"compareVersionsDialog.pleaseContentItem": "Bitte Artikel zufrieden stellen",
	"componentsPanel.emptyComponentsSubtitle": "Kommunizieren Sie mit Ihren Entwicklern, um die erforderlichen Komponenten im System zu erstellen.",
	"componentsPanel.emptyStateMessage": "Keine Komponenten gefunden",
	"componentsPanel.suspenseStateMessage": "Seitenmodell abrufen",
	"configurationMessages.localeError": "Falsche Gebietsschemakonfiguration: {message}. Verwenden der Browser-Gebietsschemaeinstellungen. Überprüfen Sie die XML-Site-Konfiguration.",
	"configurationSamplePreviewDialog.appendContent": "Nach aktuellem Inhalt anhängen",
	"configurationSamplePreviewDialog.replaceContent": "Aktuellen Inhalt ersetzen",
	"configurationSamplePreviewDialog.title": "Beispieldatei",
	"configurationSamplePreviewDialog.useSampleContent": "Verwenden Sie Beispielinhalte",
	"contentLocalization.mark": "Zur Übersetzung markieren",
	"contentLocalization.title": "Inhaltslokalisierung",
	"contentType.RTEConfiguration": "RTE-Konfiguration",
	"contentType.autoGrow": "Automatisch wachsen",
	"contentType.contentTypeWarningMessage": "Bitte beachten Sie, dass die Datenquelle für untergeordnete Inhalte aus CrafterCMS ausläuft. Verwenden Sie für Komponenten, die seiten- oder komponentenübergreifend freigegeben werden müssen, stattdessen Shared Content. Verwenden Sie für Komponenten, die ausschließlich zu diesem Inhaltsobjekt gehören, Embedded Content.",
	"contentType.continueEditing": "Weiter bearbeiten",
	"contentType.dependsOn": "Diese Eigenschaft ist abhängig von \"{dependency}\"",
	"contentType.enableSpellCheck": "Rechtschreibprüfung aktivieren",
	"contentType.fileManager": "Dateimanager",
	"contentType.fileNameErrorMessage": "Inhaltstypen erfordern einen Dateinamen. Fügen Sie dieser Inhaltstypdefinition entweder ein Steuerelement \"Dateiname\" oder \"Auto-Dateiname\" hinzu.",
	"contentType.flatTitleError": "Bitte füllen Sie jeden Titel für Felder und Datenquellen aus.",
	"contentType.forceBRNewLines": "Neue Zeilen erzwingen",
	"contentType.forcePNewLines": "P-Tags erzwingen Neue Zeilen",
	"contentType.forceRootBlockP": "Root Block p Tag erzwingen",
	"contentType.height": "Höhe",
	"contentType.idError": "Bitte geben Sie den Variablennamen ein für:",
	"contentType.imageManager": "image Manager",
	"contentType.internalNameErrorMessage": "Dieser Inhaltstyp erfordert einen internen Namen. Fügen Sie dieser Inhaltstypdefinition ein Steuerelement \"Interner Name\" hinzu.",
	"contentType.maxSizeError": "Der Maximalwert darf nicht kleiner als der Minimalwert sein",
	"contentType.minSizeError": "Der Mindestwert darf nicht höher sein als der Höchstwert",
	"contentType.noTemplateAssoc": "Mit diesem Inhaltstyp ist keine Vorlage verknüpft. Klicken Sie auf Speichern, um mit dem Speichervorgang fortzufahren, oder klicken Sie auf Weiter, um den Inhaltstyp (unter Grundlegende Eigenschaften des Inhaltstyps) mit einer Vorlage zu aktualisieren.",
	"contentType.notice": "Beachten",
	"contentType.saveFailed": "Speichern fehlgeschlagen",
	"contentType.supportedChannels": "Unterstützte Kanäle",
	"contentType.useChildContent": "Trotzdem veraltete Steuerung verwenden",
	"contentType.useEmbeddedContent": "Verwenden Sie eingebetteten Inhalt",
	"contentType.useSharedContent": "Verwenden Sie gemeinsam genutzten Inhalt",
	"contentType.videoManager": "Videomanager",
	"contentType.width": "Breite",
	"contextMenu.emptyOptionsMessage": "Keine Optionen zum Anzeigen verfügbar.",
	"controlsCommonMessages.escapeContent": "Escape-Inhalt",
	"copyItems.cancel": "Stornieren",
	"copyItems.copy": "Kopieren",
	"copyItems.deselectAll": "Alle abwählen",
	"copyItems.selectAll": "Wählen Sie Alle",
	"copyTokenDialog.helperText": "Token erfolgreich erstellt. Bitte kopieren Sie das Token und bewahren Sie es sicher auf, da Sie seinen Wert dann nicht mehr sehen können.",
	"copyTokenDialog.title": "Zugriffstoken erstellt",
	"craftercms.pages.option.noLocales": "Die Projekt hat keine Gebietsschemas deklariert.",
	"craftercms.pages.option.terminateSelection": "Auswahl beenden",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} artikel ausgewählt} other {{count} elemente ausgewählt}}",
	"craftercms.pages.widget.title": "Seiten",
	"createFileDialog.controller": "Neuer Controller",
	"createFileDialog.createPolicy": "Der angegebene Name verstößt gegen Projektrichtlinien. Der vorgeschlagene geänderte Name ist: \"{name}\". Möchten Sie den vorgeschlagenen Namen verwenden?",
	"createFileDialog.fileAlreadyExists": "Eine Datei mit diesem Namen existiert bereits",
	"createFileDialog.fileName": "Dateiname",
	"createFileDialog.fileNameRequired": "Dateiname ist erforderlich.",
	"createFileDialog.helperText": "Bestehend aus Buchstaben, Zahlen, Punkt (.), Bindestrich (-) und Unterstrich (_).",
	"createFileDialog.placeholder": "Bitte geben Sie einen Namen ein",
	"createFileDialog.policyError": "Der angegebene Name verstößt gegen Projektrichtlinien.",
	"createFileDialog.template": "Neue Vorlage",
	"createFolder.createPolicy": "Der angegebene Name verstößt gegen Projektrichtlinien. Der vorgeschlagene geänderte Name ist: \"{name}\". Möchten Sie den vorgeschlagenen Namen verwenden?",
	"createFolder.placeholder": "Bitte geben Sie einen Ordnernamen ein",
	"createFolder.policyError": "Der angegebene Name verstößt gegen Projektrichtlinien.",
	"createSiteDialog.additionalOptions": "Zusätzliche Optionen",
	"createSiteDialog.authentication": "Authentifizierung",
	"createSiteDialog.authenticationNoRequired": "Authentifizierung nicht erforderlich (öffentliche URL)",
	"createSiteDialog.blueprintParameters": "Blueprint-Parameter",
	"createSiteDialog.blueprintStrategy": "Erstellen Sie aus Blaupause",
	"createSiteDialog.branch": "Git Branch",
	"createSiteDialog.cantStart": "Site-Namen dürfen nicht mit Nullen, Bindestrichen (-) oder Unterstrichen (_) beginnen.",
	"createSiteDialog.changeQuery": "Versuchen Sie, Ihre Abfrage zu ändern, oder durchsuchen Sie den gesamten Katalog.",
	"createSiteDialog.chooseCreationStrategy": "Wählen Sie die Erstellungsstrategie: Beginnen Sie mit einem vorhandenen Git-Repo oder erstellen Sie anhand einer Blaupause, die am besten zu Ihnen passt.",
	"createSiteDialog.clone_remoteBranch_label": "Das Projekt wird erstellt, indem dieser Zweig des Repos geklont wird. Sie können auch später zwischen Zweigen wechseln.",
	"createSiteDialog.clone_remoteName_label": "Nennen Sie die Fernbedienung, die sich auf das Quellrepo bezieht, von dem abgerufen werden soll. In der Regel als \"Upstream\" oder \"Herkunft\" bezeichnet.",
	"createSiteDialog.clone_url_label": "Die Git-Repository-URL, von der geklont werden soll.",
	"createSiteDialog.createAsOrphan": "Erstellen Sie die Projekt aus einem Remote-Repository als verwaist (kein Git-Verlauf).",
	"createSiteDialog.createAsOrphanHelpText": "Wenn Sie das Projekt als verwaistes Projekt erstellen, wird das Projekt vom Quell-Git-Repository getrennt und der gesamte Verlauf entfernt.",
	"createSiteDialog.createInBackground": "Im Hintergrund erstellen",
	"createSiteDialog.createSite": "Projekt erstellen",
	"createSiteDialog.creatingSite": "Projekt erstellen",
	"createSiteDialog.creationStrategy": "Schöpfungsstrategie",
	"createSiteDialog.description": "Beschreibung",
	"createSiteDialog.descriptionMaxLength": "Maximale Länge: {maxLength} Zeichen.",
	"createSiteDialog.dialogCloseMessage": "In das Formular eingegebene Daten gehen beim Schließen verloren.",
	"createSiteDialog.dialogCloseTitle": "Bestätigen Sie Schließen",
	"createSiteDialog.finish": "Fertig",
	"createSiteDialog.gitBlueprintDescription": "Erstellen Sie ein neues Projekt basierend auf einem Crafter-CMS-Projekt in einem vorhandenen Remote-Git-Repository.",
	"createSiteDialog.gitBlueprintName": "Remote Git Repository",
	"createSiteDialog.gitBranch": "Git Branch",
	"createSiteDialog.gitBranchDescription": "Name des Zweigs, den dieses Projekt verfolgt. Pull-Vorgänge werden gegen diesen Zweig ausgeführt.",
	"createSiteDialog.gitStrategy": "Bestehender Remote Git Repo Klon",
	"createSiteDialog.idExist": "Die ID existiert bereits.",
	"createSiteDialog.nameAndDescription": "Nennen und beschreiben Sie Ihre Site",
	"createSiteDialog.nameExist": "Der Name existiert bereits.",
	"createSiteDialog.noBlueprints": "Keine Blaupausen gefunden",
	"createSiteDialog.noDescription": "Keine Beschreibung angegeben",
	"createSiteDialog.pleaseWait": "Bitte warten Sie, während Ihr Projekt erstellt wird.",
	"createSiteDialog.plugin": "Entwurf",
	"createSiteDialog.privateBlueprints": "Private Baupläne",
	"createSiteDialog.privateKey": "Privat Schlüssel",
	"createSiteDialog.publicMarketplace": "Öffentlicher Marktplatz",
	"createSiteDialog.remoteBranch": "Git Branch",
	"createSiteDialog.remoteName": "Git Remote Name",
	"createSiteDialog.remoteURL": "Git Repo URL",
	"createSiteDialog.repoUrl": "Git Repo URL",
	"createSiteDialog.required": "{name} ist erforderlich.",
	"createSiteDialog.review": "Rezension",
	"createSiteDialog.reviewSite": "Überprüfen Sie die Zusammenfassung der Einrichtung und erstellen Sie Ihr Projekt",
	"createSiteDialog.sandboxBranch": "Sandbox Branch",
	"createSiteDialog.showIncompatible": "Inkompatible Plugins anzeigen",
	"createSiteDialog.siteFormat": "Maximale Länge: 50 Zeichen, bestehend aus: Kleinbuchstaben, Zahlen und Bindestrich (-).",
	"createSiteDialog.siteId": "Webseitenadresse",
	"createSiteDialog.siteInfo": "Site Info",
	"createSiteDialog.siteName": "Site-Name",
	"createSiteDialog.token": "Zeichen",
	"createSiteDialog.useDefaultValue": "Standardwert verwenden",
	"createSiteDialog.userNameAndPassword": "Benutzername Passwort",
	"createTokenDialog.expiresHelperNeverText": "Ausschalten, um nie abzulaufen.",
	"createTokenDialog.expiresHelperText": "Schalten Sie ein, um ein Ablaufdatum festzulegen.",
	"createTokenDialog.expiresLabel": "Ablaufmarke",
	"createTokenDialog.helperText": "Geben Sie einen Namen für das neue Token ein. Der Token wird vom Server erstellt und Ihnen danach angezeigt. Bewahren Sie es sicher auf, da Sie seinen Wert nicht mehr sehen können.",
	"createTokenDialog.title": "Zugriffstoken erstellen",
	"createUserDialog.emailRequired": "E-Mail ist erforderlich.",
	"createUserDialog.firstName": "Vorname",
	"createUserDialog.firstNameRequired": "Vorname ist erforderlich.",
	"createUserDialog.invalidEmail": "E-Mail ist ungültig.",
	"createUserDialog.lastName": "Nachname",
	"createUserDialog.lastNameRequired": "Nachname ist erforderlich.",
	"createUserDialog.passwordInvalid": "Passwort ist ungültig.",
	"createUserDialog.passwordMatch": "Muss mit dem vorherigen Passwort übereinstimmen.",
	"createUserDialog.passwordRequired": "Passwort wird benötigt.",
	"createUserDialog.passwordVerification": "Kennwortüberprüfung",
	"createUserDialog.usernameRequired": "Ein Benutzername ist erforderlich.",
	"dashboardItemsApproval.item": "Artikel",
	"dashboardItemsApproval.lastEdited": "Zuletzt bearbeitet",
	"dashboardItemsApproval.lastEditedBy": "Paket-ID",
	"dashboardItemsApproval.publishingTarget": "Veröffentlichungsziel",
	"dashboardItemsScheduled.item": "Artikel",
	"dashboardItemsScheduled.lastEdited": "Zuletzt bearbeitet",
	"dashboardItemsScheduled.packageId": "Paket-ID",
	"dashboardItemsScheduled.publishingTarget": "Veröffentlichungsziel",
	"datasourceActionList.imageFromDesktopLabel": "Bild vom Desktop hochladen",
	"datasourceActionList.imageFromRepoLabel": "Bild aus dem Repository",
	"datasourceActionList.videoFromDesktopLabel": "Video vom Desktop hochladen",
	"datasourceActionList.videoFromRepoLabel": "Video aus dem Repository",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Ungültiges Datum.",
	"datetimepicker.datePlaceholder": "Datum",
	"datetimepicker.timeInvalidMessage": "Ungültige Zeit.",
	"datetimepicker.timePlaceholder": "Zeit",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Fehler beim Löschen des Inhaltstyps",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Inhaltstyp erfolgreich gelöscht",
	"deleteContentTypeDialog.headerSubtitle": "Bitte bestätigen Sie das Löschen von \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Inhaltstyp löschen",
	"deleteContentTypeDialog.noUsagesFound": "Keine Verwendungen gefunden",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Bitte überprüfen und bestätigen Sie alle Inhaltstypabhängigkeiten, die gelöscht werden.",
	"deleteContentTypeDialog.safeToDelete": "Der Inhaltstyp kann sicher gelöscht werden.",
	"deleteContentTypeDialog.submitButton": "Löschen",
	"deleteContentTypeDialog.typeConfirmPassword": "Geben Sie das Wort \"<b>{password}</b>\" ein, um das Löschen von \"{name}\" und all seinen Abhängigkeiten zu bestätigen.",
	"deleteDialog.brokenItems": " Wird gebrochene Referenzen haben",
	"deleteDialog.childItemsText": "Untergeordnete Elemente",
	"deleteDialog.confirmDeletion": "Mir ist bekannt, dass gelöschte Elemente sofort veröffentlicht werden.",
	"deleteDialog.deleteItems": "Elemente löschen",
	"deleteDialog.dependentItems": "Abhängige Gegenstände",
	"deleteDialog.emptyChildItems": "Keine untergeordneten Artikel",
	"deleteDialog.emptyDependentItems": "Keine abhängigen Artikel",
	"deleteDialog.maxCharacters": "Maximal {maxLength} Zeichen",
	"deleteDialog.submissionCommentFieldError": "Bitte schreibe einen Kommentar.",
	"deleteDialog.submissionCommentLabel": "Kommentar zur Einreichung",
	"deleteDialog.subtitle": "Ausgewählte Elemente werden zusammen mit ihren untergeordneten Elementen gelöscht. Bitte überprüfen Sie abhängige Elemente, bevor Sie sie löschen, da diese mit fehlerhaften Linkreferenzen enden.",
	"deleteDialog.title": "Löschen",
	"deleteDialog.willGetDeleted": " Wird gelöscht",
	"dependenciesDialog.allDeps": "Alle Abhängigkeiten anzeigen",
	"dependenciesDialog.assets": "Nur Vermögenswerte",
	"dependenciesDialog.code": "Nur Code",
	"dependenciesDialog.contentItems": "Nur Inhaltselemente",
	"dependenciesDialog.dependencies": "Abhängigkeiten",
	"dependenciesDialog.dependsOn": "Artikel, die vom ausgewählten Artikel abhängen",
	"dependenciesDialog.dependsOnMe": "Abhängigkeiten des ausgewählten Elements",
	"dependenciesDialog.edit": "Bearbeiten",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} hat keine Abhängigkeiten",
	"dependenciesDialog.emptyDependenciesMessage": "Nichts hängt von {itemName}ab",
	"dependenciesDialog.history": "Geschichte",
	"dependenciesDialog.title": "Abhängigkeiten von Inhaltselementen",
	"dialog.pendingChangesConfirmation": "Schließen ohne Änderungen zu speichern?",
	"dialogHeader.toggleFullScreen": "Vollbild umschalten",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "Die Drop-Zone unterstützt diesen Komponententyp nicht. Überprüfen Sie Ihr Inhaltsmodell.",
	"dragAndDropMessages.contentTypeNotFound": "Die ID des Inhaltstyps wurde in Ihrer Vorlage nicht gefunden. Drag and Drop wird beeinträchtigt. Weitere Informationen finden Sie unter docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "Das Löschen von Komponenten aus einer eingebetteten Drop-Zone-Komponente wird noch nicht unterstützt. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "Ziehen und Ablegen von eingebetteten Komponenten wird noch nicht unterstützt. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "In dieser Version können eingebettete Komponenten nur innerhalb ihres aktuellen übergeordneten Elements gezogen werden. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "Das Verschieben von Komponenten aus einer eingebetteten Drop-Zone-Komponente wird noch nicht unterstützt. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.objectIdNotFound": "Objekt-ID fehlt. Drag and Drop wird beeinträchtigt. Weitere Informationen finden Sie unter docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.pathNotFound": "Pfad fehlt. Drag and Drop wird beeinträchtigt. Weitere Informationen finden Sie unter docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dropTargetsMessages.allowEmbedded": "Eingebettet zulassen",
	"dropTargetsMessages.allowShared": "Geteilt zulassen",
	"dropTargetsMessages.baseBrowsePath": "Basissuchpfad",
	"dropTargetsMessages.baseRepositoryPath": "Basis-Repository-Pfad",
	"dropTargetsMessages.browseExisting": "Vorhandene durchsuchen",
	"dropTargetsMessages.contentTypes": "Inhaltstypen",
	"dropTargetsMessages.createNewEmbedded": "Neue eingebettete erstellen",
	"dropTargetsMessages.createNewShared": "Neue geteilte erstellen",
	"dropTargetsMessages.dropTargets": "Drop-Ziele",
	"dropTargetsMessages.enableBrowse": "Durchsuchen aktivieren",
	"dropTargetsMessages.enableSearch": "Suche aktivieren",
	"dropTargetsMessages.searchExisting": "Vorhandene Komponenten suchen",
	"dropTargetsMessages.tags": "Stichworte",
	"editGroupDialog.close": "Schließen",
	"editGroupDialog.deleteGroup": "Gruppe löschen",
	"editGroupDialog.editGroupMembers": "Gruppenmitglieder bearbeiten",
	"editGroupDialog.groupDetails": "GRUPPEN-DETAILS",
	"editGroupDialog.groupMemberHelperText": "Gruppenmitglieder können nach der Erstellung bearbeitet werden",
	"editGroupDialog.helperText": "Gruppe \"{name}\" löschen?",
	"editGroupDialog.requiredGroupName": "Gruppenname ist erforderlich.",
	"editModesSwitcher.editModeTooltip": "Bearbeitungsmodus (e)",
	"editModesSwitcher.moveModeTooltip": "Bewegungsmodus (m)",
	"editModesSwitcher.offButtonTooltip": "Bearbeiten ausschalten ({shortcutKey})",
	"editSiteDialog.cancel": "Stornieren",
	"editSiteDialog.notEditable": "Die Site-ID kann nicht bearbeitet werden",
	"editSiteDialog.siteDescription": "Seitenbeschreibung",
	"editSiteDialog.siteId": "Webseitenadresse",
	"editSiteDialog.siteName": "Site-Name",
	"editSiteDialog.siteNameRequired": "Site-Name ist erforderlich.",
	"editSiteDialog.sitenameExists": "Der Name existiert bereits.",
	"editSiteDialog.title": "Site bearbeiten",
	"embeddedContentDS.embeddedContent": "Eingebetteter Inhalt",
	"embeddedLegacyFormMessages.openContentFormFailedError": "Beim Öffnen des Inhaltsformulars ist ein Fehler aufgetreten. Bitte versuchen Sie es kurz erneut. Wenden Sie sich an den Administrator, wenn der Fehler weiterhin besteht.",
	"emptyUiConfigMessageTitle.subtitle": "Hier wird nichts angezeigt.",
	"emptyUiConfigMessageTitle.title": "Konfiguration ist leer",
	"encryptTool.buttonText": "Text verschlüsseln",
	"encryptTool.clearResultButtonText": "klar",
	"encryptTool.errorMessage": "Textverschlüsselung fehlgeschlagen. Bitte versuchen Sie es kurz erneut.",
	"encryptTool.inputLabel": "Roher Text",
	"encryptTool.pageTitle": "Verschlüsselungs-Tool",
	"encryptTool.successMessage": "In die Zwischenablage kopierter verschlüsselter Text.",
	"fileNameControl.urlChangeWarning": "Das Ändern dieses Werts kann zu fehlerhaften Verweisen und Links führen.",
	"fileUpload.chooseFile": "Datei wählen",
	"fileUpload.createPolicy": "Der Upload-Dateiname verstößt gegen Projektrichtlinien. Der vorgeschlagene geänderte Dateiname lautet: \"{name}\". Möchten Sie den vorgeschlagenen Namen verwenden?",
	"fileUpload.policyError": "Der Upload-Dateiname verstößt gegen Projektrichtlinien.",
	"fileUpload.selectFileMessage": "Bitte wählen Sie eine Datei zum Hochladen aus",
	"fileUpload.uploadedFile": "Hochgeladene Datei",
	"fileUpload.uploadingFile": "Datei wird hochgeladen",
	"fileUpload.validatingFile": "Datei validieren",
	"filter.noResults": "Keine Ergebnisse stimmen mit Ihrer Anfrage überein",
	"folder.created": "Ordner erfolgreich erstellt",
	"folderBrowserTreeView.invalidPath": "Der eingegebene Pfad existiert nicht.",
	"formEngine.createPolicy": "Der Pfad {originalPath} verstößt gegen Projektrichtlinien. Der vorgeschlagene geänderte Pfad ist: \"{Pfad}\". Möchten Sie den vorgeschlagenen Pfad verwenden?",
	"formEngine.formNotReadyForSaving": "Formular ist nicht zum Speichern bereit. Bitte versuchen Sie es kurz erneut oder verwenden Sie den Abbrechen-Button.",
	"formEngine.inProgressConfirmation": "Ein anderes Formular ist derzeit geöffnet und minimiert. Bitte schließen Sie das aktuelle Formular, bevor Sie ein anderes öffnen",
	"formEngine.policyError": "Der Pfad {path} verstößt gegen Projektrichtlinien.",
	"formEngine.save": "Als Entwurf speichern",
	"formEngine.saveAndClose": "Speichern und schließen",
	"formEngine.saveAndMinimize": "Speichern & minimieren",
	"formEngine.saveAndPreview": "Speichern & Vorschau",
	"formEngine.saveDraftCompleted": "Entwurfsspeicherung abgeschlossen",
	"formEngine.useMVS": "Verwenden Sie _mvs Postfix (Rückwärtskompat)",
	"gitAuthForm.privateKey": "Privat Schlüssel",
	"gitForm.noAuthenticationRequired": "Authentifizierung nicht erforderlich (öffentliche URL)",
	"gitForm.privateKey": "Privat Schlüssel",
	"gitForm.required": " {name} ist erforderlich.",
	"gitForm.token": "Zeichen",
	"gitForm.usernameAndPassword": "Benutzername Passwort",
	"global.about": "Über",
	"globalApp.routeNotFound": "Route nicht gefunden",
	"globalAppToolbar.toggleSidebar": "Seitenleiste umschalten",
	"globalConfig.configSaved": "Konfiguration erfolgreich gespeichert.",
	"globalConfig.confirmHelper": "Nicht gespeicherte Änderungen verwerfen?",
	"globalConfig.documentError": "Das Dokument enthält Fehler. Suchen Sie auf der Seite des Editors nach Fehlermarkierungen.",
	"globalConfig.unsavedConfirmation": "Sie haben nicht gespeicherte Änderungen, möchten Sie verlassen?",
	"globalConfig.unsavedConfirmationTitle": "Nicht gespeicherte Änderungen",
	"globalConfig.viewSample": "Beispiel anzeigen",
	"globalConfigManagement.pendingChanges": "Du hast nicht gespeicherte Änderungen. Änderungen verwerfen?",
	"globalMenu.closeMenu": "Menü schließen",
	"globalMenu.encryptionTool": "Verschlüsselungs-Tool",
	"globalMenu.globalConfigEntryLabel": "Globale Konfiguration",
	"globalMenu.logConsoleEntryLabel": "Protokollkonsole",
	"globalMenu.loggingLevelsEntryLabel": "Protokollierungsstufen",
	"globalMenu.mySites": "MEINE SEITEN",
	"globalMenu.noSitesMessage": "Keine Websites zum Anzeigen.",
	"globalMenu.pluginManagementEntryLabel": "Plugin-Verwaltung",
	"globalMenu.recover": "Passwort-Wiederherstellung",
	"globalMenu.settings": "Kontoverwaltung",
	"globalMenu.tokenManagement": "Token-Verwaltung",
	"groupEditDialog.createGroup": "Gruppe erstellen",
	"groupEditDialog.editGroup": "Gruppe bearbeiten",
	"groupEditDialog.groupCreated": "Gruppe erfolgreich erstellt",
	"groupEditDialog.groupDeleted": "Gruppe erfolgreich gelöscht",
	"groupEditDialog.groupEdited": "Gruppe erfolgreich bearbeitet",
	"groupEditDialog.membersAdded": "Benutzer erfolgreich hinzugefügt",
	"groupEditDialog.membersRemoved": "Benutzer erfolgreich entfernt",
	"groupsAdmin.displayName": "Anzeigename",
	"groupsAdmin.groupCreated": "{group} erstellt.",
	"groupsAdmin.groupDeleted": "{group} gelöscht.",
	"groupsAdmin.groupEdited": "{group} bearbeitet.",
	"groupsAdmin.maxLengthError": "{field} darf nicht länger als {size} Zeichen sein",
	"groupsAdmin.usereRemoved": "{username} erfolgreich aus {group}entfernt",
	"groupsAdmin.usersAdded": "Benutzer erfolgreich hinzugefügt.",
	"groupsGrid.emptyStateMessage": "Keine Gruppen gefunden",
	guestDetectionMessage: guestDetectionMessage$2,
	"historyDialog.back.selectRevision": "Zurück zur Verlaufsliste",
	"historyDialog.confirmRevertBody": "Möchten Sie wirklich zu {versionTitle}zurückkehren?",
	"historyDialog.confirmRevertTitle": "Bestätigung rückgängig machen",
	"historyDialog.current": "Aktuell",
	"historyDialog.headerTitle": "Artikelhistorie",
	"historyDialog.options.compareTo": "Vergleichen mit...",
	"historyDialog.options.compareToCurrent": "Vergleich mit aktuell",
	"historyDialog.options.compareToPrevious": "Mit vorherigem vergleichen",
	"historyDialog.options.revertToPrevious": "Zurück zum <b>vorherigen</b>",
	"historyDialog.options.revertToThisVersion": "Zurück zu <b>dieser Version</b>",
	"icePanel.itemLockedWarning": "Element ist gesperrt, einige Funktionen sind möglicherweise deaktiviert",
	"icePanel.noWidgetsMessage": "Es wurden keine Tools konfiguriert",
	"iconGuide.css": "css",
	"iconGuide.freemarker": "Freemarker-Vorlage",
	"iconGuide.groovy": "Grooviges Skript",
	"iconGuide.html": "HTML",
	"iconGuide.itemTypes": "Artikeltypen",
	"iconGuide.javascript": "JavaScript",
	"iconGuide.json": "JSON",
	"iconGuide.levelDescriptor": "Abschnittsvorgaben",
	"iconGuide.plainText": "Einfacher Text",
	"iconGuide.publishingStatusTarget": "Veröffentlichungsstatus/Ziel",
	"iconGuide.title": "Symbol-Anleitung",
	"iconGuide.workflowStates": "Workflow-Zustände",
	"iconGuide.xml": "XML",
	"internalNameControl.displaySize": "Bildschirmgröße",
	"internalNameControl.label": "Interner Name",
	"internalNameControl.maxLength": "Maximale Länge",
	"item.contentTypeChanged": "Artikeltyp erfolgreich geändert",
	"item.controllerNotFound": "Controller nicht gefunden.",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Artikel erfolgreich erstellt",
	"item.cut": "Artikel erfolgreich geschnitten",
	"item.delete": " {count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Artikel erfolgreich dupliziert",
	"item.edited": "Artikel erfolgreich aktualisiert",
	"item.itemPasteToChildNotAllowed": "Das Einfügen in ein untergeordnetes Element ist zum Ausschneiden nicht zulässig",
	"item.pasted": "Artikel erfolgreich eingefügt",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.reverted": "Artikel erfolgreich zurückgesetzt",
	"item.savedAsDraft": "Artikelentwurf gespeichert",
	"item.schedulePublished": "{count, plural, one {Das ausgewählte Element wurde für {environment} geplant} other {Die ausgewählten Elemente wurden für {environment} geplant}}",
	"item.templateNotFound": "Vorlage nicht gefunden.",
	"item.unlocked": "Artikel erfolgreich entsperrt",
	"itemActions.changeContentType": "Typ ändern",
	"itemActions.contentTypeDialogBody": "Der folgende Vorgang kann zu Datenverlust führen. Möchten Sie fortfahren?",
	"itemActions.contentTypeDialogTitle": "Warnung: Inhaltstyp ändern",
	"itemActions.copyDialogSubtitle": "Bitte wählen Sie eine der Unterseiten aus, die Sie im Stapel kopieren möchten. Beim Einfügen bleiben alle ausgewählten Unterseiten und ihre Positionshierarchie erhalten.",
	"itemActions.copyDialogTitle": "Kopieren",
	"itemActions.copyWithChildren": "Kopieren Sie mit Kindern",
	"itemActions.createController": "Neuer Controller",
	"itemActions.createFolder": "Neuer Ordner",
	"itemActions.createTemplate": "Neue Vorlage",
	"itemActions.deleteController": "Controller löschen",
	"itemActions.deleteTemplate": "Vorlage löschen",
	"itemActions.duplicateDialogBody": "Eine neue Kopie dieses Artikels und aller seiner artikelspezifischen Inhalte wird erstellt. Sind Sie sicher, dass Sie fortfahren möchten?",
	"itemActions.editController": "Controller bearbeiten",
	"itemActions.editTemplate": "Vorlage bearbeiten",
	"itemActions.newContent": "Neuer Inhalt",
	"itemActions.requestPublish": "Veröffentlichung anfordern",
	"itemActions.unableToVerifyWorkflows": "Die betroffenen Workflows können nicht überprüft werden. Bitte versuchen Sie es kurz erneut",
	"itemActions.verifyingAffectedWorkflows": "Betroffene Workflows überprüfen...",
	"itemActions.viewForm": "Formular anzeigen",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemPublishingDate.scheduled": "Geplant für {date}",
	"itemPublishingDate.scheduledForAsap": "Geplant für ASAP",
	"itemPublishingDate.submitted": "Eingereicht für {date}",
	"itemPublishingDate.submittedForAsap": "Eingereicht für ASAP",
	"itemState.deleted": "Gelöscht",
	"itemState.disabled": "Deaktiviert",
	"itemState.locked": "Verschlossen",
	"itemState.lockedBy": "Gesperrt von {user}",
	"itemState.modified": "Geändert",
	"itemState.new": "Neu",
	"itemState.notInWorkflow": "Nicht im Arbeitsablauf",
	"itemState.publishing": "Veröffentlichen",
	"itemState.scheduled": "Geplant",
	"itemState.scheduledToGoLive": "Geplant zu leben",
	"itemState.scheduledToStaging": "Zur Inszenierung geplant",
	"itemState.submitted": "Eingereicht",
	"itemState.submittedToLive": "Eingereicht, um zu leben",
	"itemState.submittedToStaging": "Zur Inszenierung eingereicht",
	"itemState.systemProcessing": "Systemverarbeitung",
	"itemStates.anyState": "Jeder Staat",
	"itemStates.clearFilters": "Filter löschen",
	"itemStates.emptyStateMessage": "keine Ergebnisse gefunden",
	"itemStates.invalidPathRegexHelperText": "Der reguläre Ausdruck ist ungültig",
	"itemStates.lockedBy": "Von {owner}",
	"itemStates.pathRegex": "Pfad (regex)",
	"itemStates.pathRegexHelperText": "Verwenden Sie eine pfadübereinstimmende Regex",
	"itemStates.selectedAll": "Wählen Sie {count} Elemente auf allen Seiten aus",
	"itemStates.showItemsIn": "Artikel anzeigen in",
	"keyboardShortcutsDialog.title": "Tastatürkürzel",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Project <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Navigationsmenu",
	"launcherOpenerButton.openMenuButtonText": "Menü öffnen",
	"launcherOpenerButton.signOut": "Ausloggen",
	"legacyComponentsPanel.addComponent": "Komponente hinzufügen",
	"legacyFormDialog.errorLoadingForm": "Beim Laden des Formulars ist ein Fehler aufgetreten",
	"legacyFormDialog.loadingForm": "Wird geladen...",
	"legacyFormDialog.title": "Inhaltsformular",
	"localeSelectorControl.label": "Gebietsschemaauswahl",
	"localeSelectorControl.requiredError": "Feld ist erforderlich",
	"logConsoleDetailsDialog.title": "Protokolldetails",
	"logConsoleManagement.noLogs": "Keine Protokolle gefunden",
	"loggingLevels.avoidDisplayingAllEntriesLabel": "Versuchen Sie stattdessen zu filtern",
	"loggingLevels.changeLevelTo": "Aktuelles Level",
	"loggingLevels.currentLevel": "Aktuelles Level",
	"loggingLevels.displayAllEntriesButtonLabel": " {remaining} weitere Einträge anzeigen",
	"loggingLevels.levelFilterLabel": "Ebenenfilter",
	"loggingLevels.levelFilterSelectEmptyLabel": "Jeder Ebene",
	"loggingLevels.loggersFilterLabel": "Logger-Filter",
	"loggingLevelsManagement.levelChangedSuccessMessage": "Protokollierungsebene erfolgreich geändert",
	"loginView.dialogTitleText": "Melden Sie sich bei CrafterCMS an",
	"loginView.forgotPasswordButtonLabel": "Haben Sie Ihr Passwort vergessen?",
	"loginView.incorrectCredentialsMessage": "Falscher Benutzername oder falsches Passwort. Bitte versuche es erneut.",
	"loginView.loginButtonLabel": "Einloggen",
	"loginView.recoverYourPasswordBackButtonLabel": "Zurück",
	"loginView.recoverYourPasswordIntroText": "Wenn Ihr Benutzername vorhanden ist, wird Ihnen eine E-Mail mit einem Reset-Link gesendet.",
	"loginView.recoverYourPasswordSuccessMessage": "Wenn \"{username}\" vorhanden ist, wurde eine Wiederherstellungs-E-Mail gesendet",
	"loginView.resetYourPasswordIntroText": "Bitte geben Sie Ihr neues Passwort ein",
	"loginView.usernameTextFieldLabel": "Benutzername",
	"media.card.itemLastEdition": "Bearbeitet {time}",
	"media.card.title": "Optionen",
	"mimeTypes.application/gzip": "GZip Compressed Archive",
	"mimeTypes.application/javascript": "Typescript (tsx)",
	"mimeTypes.application/msword": "Microsoft Word",
	"mimeTypes.application/pdf": "Adobe Portable Document Format (PDF)",
	"mimeTypes.application/vnd.ms-excel": "Microsoft Excel",
	"mimeTypes.application/vnd.ms-fontobject": "MS Embedded OpenType fonts",
	"mimeTypes.application/vnd.ms-powerpoint": "Microsoft Power Point",
	"mimeTypes.application/vnd.oasis.opendocument.presentation": "OpenDocument presentation document",
	"mimeTypes.application/vnd.oasis.opendocument.spreadsheet": "OpenDocument spreadsheet document",
	"mimeTypes.application/vnd.oasis.opendocument.text": "OpenDocument text document",
	"mimeTypes.application/vnd.openxmlformats-officedocument.presentationml.presentation": "Microsoft Power Point (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Microsoft Excel (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Microsoft Word (Open XML)",
	"mimeTypes.application/vnd.rar": "RAR archive",
	"mimeTypes.application/x-7z-compressed": "7-zip archive",
	"mimeTypes.application/x-bzip": "BZip archive",
	"mimeTypes.application/x-bzip2": "BZip2 archive",
	"mimeTypes.application/x-tar": "Tape Archive (TAR)",
	"mimeTypes.application/xml": "XML",
	"mimeTypes.application/zip": "ZIP archive",
	"mimeTypes.audio/aac": "AAC audio",
	"mimeTypes.audio/midi audio/x-midi": "Musical Instrument Digital Interface (MIDI)",
	"mimeTypes.audio/mpeg": "MP3 audio",
	"mimeTypes.audio/wav": "Waveform Audio Format",
	"mimeTypes.font/otf": "OpenType font",
	"mimeTypes.font/ttf": "TrueType Font",
	"mimeTypes.font/woff": "Web Open Font Format (WOFF)",
	"mimeTypes.font/woff2": "Web Open Font Format (WOFF)",
	"mimeTypes.image/gif": "GIF images",
	"mimeTypes.image/jpeg": "JPEG images",
	"mimeTypes.image/png": "PNG images",
	"mimeTypes.image/svg+xml": "SVG images",
	"mimeTypes.image/vnd.microsoft.icon": "Icon format",
	"mimeTypes.image/webp": "WEBP image",
	"mimeTypes.text/css": "CSS stylesheet",
	"mimeTypes.text/html": "HyperText Markup Language (HTML)",
	"mimeTypes.text/javascript": "JavaScript",
	"mimeTypes.text/plain": "Text",
	"mimeTypes.text/texmacs": "Typescript (ts)",
	"mimeTypes.text/x-freemarker": "Freemarker",
	"mimeTypes.text/x-groovy": "Groovy",
	"mimeTypes.text/x-sass": "SASS stylesheet",
	"mimeTypes.text/x-scss": "SCSS stylesheet",
	"mimeTypes.video/mp4": "MP4 video",
	"mimeTypes.video/mpeg": "MPEG Video",
	"mimeTypes.video/x-msvideo": "AVI: Audio Video Interleave",
	"multiChoiceSaveButton.saveAndClose": "Speichern und schließen",
	"multiChoiceSaveButton.saveAndMinimize": "Speichern & minimieren",
	"newContentDialog.contentTypeAllLabel": "Alle Typen anzeigen",
	"newContentDialog.contentTypeComponentLabel": "Nur Komponenten",
	"newContentDialog.contentTypePageLabel": "Nur Seiten",
	"newContentDialog.emptyStateMessage": "Keine Inhaltstypen gefunden",
	"newContentDialog.subtitle": "Wählen Sie eine Inhaltstypvorlage für Ihr neues Inhaltselement aus.",
	"newContentDialog.title": "Inhalte erstellen",
	"newFolder.folderAlreadyExists": "Ein Ordner mit diesem Namen existiert bereits",
	"newFolder.folderName": "Ordnernamen",
	"newFolder.helperText": "Bestehend aus: Buchstaben, Zahlen, Bindestrich (-) und Unterstrich (_).",
	"newFolder.rename": "Geben Sie einen neuen Ordnernamen an",
	"newFolder.required": "Ordnername ist erforderlich.",
	"newFolder.title": "Einen neuen Ordner erstellen",
	"newFolder.title.rename": "Ordner umbenennen",
	"noUiConfigMessageTitle.subtitle": "Fügen Sie `ui.xml` zu Ihrem Projekt hinzu und konfigurieren Sie es, um den Inhalt hier anzuzeigen.",
	"noUiConfigMessageTitle.title": "Konfigurationsdatei fehlt",
	"numericInputControl.childContent": "Minimum",
	"numericInputControl.maximun": "Maximal",
	"numericInputControl.noDecimalsErrMessage": "Dezimalstellen sind für diese Eingabe nicht zulässig.",
	"openToolsPanel.label": "Werkzeugfenster öffnen",
	"operations.addMembers": "Mitglieder hinzufügen",
	"operations.addRemote": "Fernbedienung hinzufügen",
	"operations.approveScheduled": "Geplant genehmigen",
	"operations.assetUploadFailed": "Asset-Upload fehlgeschlagen.",
	"operations.assetUploadStarted": "Asset-Upload gestartet.",
	"operations.cancelPublishingPackage": "Veröffentlichungspaket kündigen",
	"operations.deleteOperationComplete": "Löschvorgang abgeschlossen.",
	"operations.deleteOperationFailed": "Der Löschvorgang ist fehlgeschlagen.",
	"operations.duplicateItemOperationComplete": "Artikel erfolgreich dupliziert.",
	"operations.duplicateItemOperationFailed": "Artikel duplizieren fehlgeschlagen.",
	"operations.initialPublish": "Erstveröffentlichung",
	"operations.insertItemOperationComplete": "Artikel erfolgreich erstellt.",
	"operations.insertItemOperationFailed": "Artikelerstellung fehlgeschlagen.",
	"operations.insertOperationComplete": "Vorgang zum Einfügen der Komponente abgeschlossen.",
	"operations.insertOperationFailed": "Das Einfügen der Komponente ist fehlgeschlagen.",
	"operations.loginFailed": "Anmeldung fehlgeschlagen",
	"operations.moveOperationComplete": "Umzugsvorgang abgeschlossen",
	"operations.moveOperationFailed": "Verschiebevorgang fehlgeschlagen.",
	"operations.pullFromRemote": "Von der Fernbedienung ziehen",
	"operations.pushToRemote": "Push-to-Fernbedienung",
	"operations.removeClusterNode": "Clusterknoten entfernen",
	"operations.removeMembers": "Mitglieder entfernen",
	"operations.removeRemote": "Fernbedienung entfernen",
	"operations.requestPublish": "Veröffentlichung anfordern",
	"operations.sortOperationComplete": "Sortiervorgang abgeschlossen.",
	"operations.sortOperationFailed": "Sortiervorgang fehlgeschlagen.",
	"operations.startPublisher": "Publisher starten",
	"operations.stopPublisher": "Publisher stoppen",
	"operations.updateOperationComplete": "Aktualisierungsvorgang abgeschlossen.",
	"operations.updateOperationFailed": "Aktualisierungsvorgang fehlgeschlagen.",
	"packageDetailsDialog.emptyPackageMessage": "Das Paket ist leer",
	"packageDetailsDialog.emptyPackageMessageSubtitle": "Paket-ID abrufen ist {packageId}",
	"packageDetailsDialog.missingPackageId": "Paketdetails können nicht abgerufen werden, da dieser Benutzeroberfläche keine Paket-ID bereitgestellt wurde",
	"packageDetailsDialog.packageDetailsDialogTitle": "Einzelheiten zum Veröffentlichungspaket",
	"pageExplorerPanel.currentContentItems": "Aktuelle Inhaltselemente",
	"pagination.PreviousPage": "Vorherige Seite",
	"pagination.itemsPerPage": "Objekte pro Seite",
	"pagination.nextPage": "Nächste Seite",
	"pagination.previousPage": "Vorherige Seite",
	"passwordRequirement.fulfillAllReqErrorMessage": "Bitte erfüllen Sie alle Passwortanforderungen.",
	"passwordRequirement.hasLowercase": "Muss mindestens einen Kleinbuchstaben enthalten",
	"passwordRequirement.hasNumbers": "Muss mindestens eine Zahl enthalten",
	"passwordRequirement.hasSpecialChars": "Muss mindestens ein Sonderzeichen {chars}enthalten",
	"passwordRequirement.hasUppercase": "Muss mindestens einen Großbuchstaben enthalten",
	"passwordRequirement.invalidPassword": "Voraussetzungen sind nicht erfüllt",
	"passwordRequirement.maxLength": "Die Länge darf {max} Zeichen nicht überschreiten",
	"passwordRequirement.minLength": "Die Länge muss mindestens {min} Zeichen betragen",
	"passwordRequirement.minMaxLength": "Die Länge muss zwischen {minLength} und {maxLength} Zeichen liegen",
	"passwordRequirement.noBlank": "darf nicht leer sein",
	"passwordRequirement.noSpaces": "Darf keine Leerzeichen enthalten",
	"passwordRequirement.passwordConfirmationMismatch": "Passwörter stimmen nicht überein",
	"passwordRequirement.passwordValidation": "Passwortüberprüfung",
	"passwordRequirement.unnamedGroup": "Zustand nicht beschrieben",
	"passwordRequirement.validPassword": "Voraussetzungen erfüllt",
	"passwordRequirement.validationPassing": "Validierung bestanden",
	"passwordTextField.toggleVisibilityButtonText": "Passwortsichtbarkeit umschalten",
	"pastePolicy.confirm": "Das ausgewählte {action}-Ziel verstößt gegen Projektrichtlinien für das Zielverzeichnis. • Ursprünglicher Pfad: „{path}“, • Vorgeschlagener Pfad ist: „{modifiedPath}“. Möchten Sie den vorgeschlagenen Pfad verwenden?",
	"pastePolicy.error": "Das ausgewählte {action}-Ziel verstößt gegen Projektrichtlinien für das Zielverzeichnis.",
	"pathNavigator.noChildren": "Artikel hat keine Kinder",
	"pathNavigator.noItemsAtLocation": "Keine Artikel an diesem Standort",
	"pathNavigator.pathFilterInputPlaceholder": "Kinder von {name}filtern ...",
	"pathNavigator.viewChildren": "Kinder ansehen",
	"pathNavigatorTree.missingRootPath": "Der Pfad \"{path}\" existiert nicht",
	"pathNavigatorTree.moreLinkLabel": " {count, plural, one {...{count} more item} other {...{count} more items}}",
	"pathNavigatorTreeItemFilter.placeholder": "Kinder filtern...",
	"pathSelectionDialog.changeRootButtonLabel": "Wurzel ändern",
	"pathSelectionDialog.createFolderButtonLabel": "Ordner erstellen",
	"pathSelectionDialog.title": "Pfad auswählen",
	"pathSelectionInput.description": "Geben Sie einen Pfad ein und drücken Sie zur Bestätigung die Eingabetaste",
	"pathSelectionInput.found": "Pfad gefunden",
	"pathSelectionInput.invalidPath": "Der eingegebene Pfad existiert nicht",
	"pathSelector.inputPlaceholderText": "Pfad auswählen",
	"plugin.by": "Durch",
	"plugin.crafterCMS": "CrafterCMS",
	"plugin.license": "Lizenz",
	"plugin.licenseTooltip": " {license} Lizenz",
	"plugin.more": "Mehr...",
	"plugin.noDev": "Kein Entwickler angegeben.",
	"plugin.use": "Benutzen",
	"plugin.version": "Ausführung",
	"pluginConfigDialog.title": "Plugin-Konfiguration",
	"pluginDetails.markdownError": "Dokumentation kann nicht gerendert werden. Besuchen Sie zum Anzeigen <a>{link}</a> .",
	"pluginDetails.notCompatible": "Diese Blaupause ist nicht mit Ihrer aktuellen Version von CrafterCMS kompatibel.",
	"pluginManagement.emptyList": "Es sind keine Plugins installiert",
	"pluginManagement.installationDate": "Installationsdatum",
	"pluginManagement.listPluginPermission": "Sie haben nicht genügend Berechtigungen, um die Liste der Plugins anzuzeigen",
	"pluginManagement.pluginConfigUpdated": "Plugin-Konfiguration erfolgreich aktualisiert",
	"pluginManagement.pluginInstalled": "Plugin erfolgreich installiert",
	"pluginManagement.pluginUninstalled": "Plugin erfolgreich deinstalliert",
	"pluginManagement.searchPlugin": "Suchen & installieren",
	"preview.previewIFrameTitle": "Frame-Vorschau",
	"previewAddressBar.reloadButtonLabel": "Lade diese Seite neu",
	"previewAssetsPanel.itemsPerPage": "Objekte pro Seite:",
	"previewAssetsPanel.noResults": " Keine Ergebnisse gefunden.",
	"previewAssetsPanel.retrieveAssets": "Abrufen von Projekt-Assets",
	"previewAssetsPanel.title": "Vermögenswerte",
	"previewAudiencesPanel.loading": "Targeting-Optionen abrufen",
	"previewAudiencesPanel.title": "Zielgruppenausrichtung",
	"previewBrowseComponentsPanel.allContentType": "alle Inhaltstypen",
	"previewBrowseComponentsPanel.filter": "Filter...",
	"previewBrowseComponentsPanel.nextPage": "Nächste Seite",
	"previewBrowseComponentsPanel.noResults": " Keine Ergebnisse gefunden.",
	"previewBrowseComponentsPanel.previousPage": "Vorherige Seite",
	"previewBrowseComponentsPanel.sharedComponentsHelperText": "Hier werden nur gemeinsam genutzte Komponenten angezeigt",
	"previewBrowseComponentsPanel.title": "Komponenten durchsuchen",
	"previewCompatDialog.legacyCompatMessage": "Diese Seite ist mit der vorherigen Bearbeitungserfahrung kompatibel. Möchtest du jetzt dorthin?",
	"previewCompatDialog.nextCompatMessage": "Diese Seite ist mit der neuen Bearbeitungserfahrung kompatibel. Möchtest du jetzt dorthin?",
	"previewCompatDialog.rememberChoice": "Erinnere dich an die Wahl",
	"previewCompatDialog.title": "Hinweis zur Vorschau-Kompatibilität",
	"previewComponentsPanel.browse": "Vorhandene durchsuchen",
	"previewComponentsPanel.listDropTargets": "Drop-Ziele auflisten",
	"previewComponentsPanel.listInPageInstances": "Instanzen auf dieser Seite",
	"previewComponentsPanel.title": "Komponenten hinzufügen",
	"previewConcierge.contentWasChangedByAnotherUser": "{name} hat die aktuelle Seite geändert. Neu laden?",
	"previewConcierge.contentWasLockedByAnotherUser": "Das Element wurde von {name}gesperrt. Bearbeitungsmodus deaktiviert, bis die Sperre aufgehoben wird.",
	"previewDropTargetsPanel.chooseContentType": "Bitte wählen Sie einen Inhaltstyp aus.",
	"previewDropTargetsPanel.noResults": "Keine Ergebnisse gefunden.",
	"previewDropTargetsPanel.selectContentType": "Wählen Sie den Inhaltstyp",
	"previewDropTargetsPanel.title": "Komponentenabwurfziele",
	"previewEditFormTool.editController": "Controller bearbeiten",
	"previewEditFormTool.editTemplate": "Vorlage bearbeiten",
	"previewEditFormTool.openComponentForm": "Bearbeiten",
	"previewInPageInstancesPanel.chooseContentType": "Bitte wählen Sie einen Inhaltstyp aus.",
	"previewInPageInstancesPanel.noResults": "Keine Ergebnisse gefunden.",
	"previewInPageInstancesPanel.selectContentType": "Wählen Sie den Inhaltstyp",
	"previewInPageInstancesPanel.title": "Auf dieser Seite",
	"previewPageExplorerPanel.loading": "Wird geladen",
	"previewPageExplorerPanel.rootItemLabel": "Aktuelle Inhaltselemente",
	"previewPageExplorerPanel.title": "Seiten-Explorer",
	"previewRubbishBin.dropToTrash": "Hier in den Papierkorb werfen",
	"previewRubbishBin.itemTrashed": "Verwüstet!",
	"previewSearchPanel.title": "Suche",
	"previewSimulatorPanel.previewWindowSize": "Größe des Vorschaufensters",
	"previewSimulatorPanel.title": "Gerätesimulator",
	"previewSiteExplorerPanel.title": "Projekt-Explorer",
	"previewToolbar.editModeSwitchDisabled": "Bearbeiten ist nicht verfügbar",
	"previewToolbar.editModeSwitchLockedMessage": "Artikel ist gesperrt von {lockOwner}",
	"previewToolbar.itemMenu": "Artikelmenü",
	"previewToolbar.quickCreateMenuTooltip": "Schnellmenü erstellen",
	"previewToolbar.toggleEditMode": "Bearbeitungsmodus umschalten",
	"previewTools.choseSiteMessage": "Bitte Projekt auswählen",
	"previewTools.noWidgetsMessage": "Es wurden keine Tools konfiguriert",
	"profileSettings.currentPassword": "derzeitiges Passwort",
	"profileSettings.isRequired": "Wird benötigt",
	"profileSettings.languageUpdateFailedWarning": "Sprachaktualisierung ist fehlgeschlagen. Bitte versuchen Sie es vorübergehend erneut.",
	"profileSettings.languageUpdatedSuccessfully": "Die Sprache wurde erfolgreich aktualisiert.",
	"profileSettings.mustMatchPreviousEntry": "Muss mit dem vorherigen Eintrag übereinstimmen",
	"profileSettings.password": "Passwort",
	"profileSettings.unsavedConfirmation": "Du hast nicht gespeicherte Änderungen. Änderungen verwerfen?",
	"profileSettings.unsavedConfirmationTitle": "Nicht gespeicherte Änderungen",
	"publishCommitDialog.successMessage": "Veröffentlichung erfolgreich abgeschlossen",
	"publishCommitDialog.title": "Commit veröffentlichen",
	"publishDialog.approveForPublish": "Zur Veröffentlichung genehmigen",
	"publishDialog.differentPublishDateWarning": "<strong>Warnung</strong> Die Elemente, die Sie zur Genehmigung ausgewählt haben, wurden mit unterschiedlichen angeforderten Veröffentlichungsdaten / -zeiten gesendet.",
	"publishDialog.emptyHardDependencies": "Keine harten Abhängigkeiten",
	"publishDialog.emptySoftDependencies": "Keine weichen Abhängigkeiten",
	"publishDialog.firstPublish": "Die gesamte Website wird veröffentlicht, da dies die erste Veröffentlichungsanfrage ist",
	"publishDialog.hardDependencies": "Harte Abhängigkeiten",
	"publishDialog.introductoryText": "Ausgewählte Dateien werden veröffentlicht. Harte Abhängigkeiten werden automatisch berücksichtigt. Weiche Abhängigkeiten sind optional und Sie können auswählen, welche einbezogen werden sollen.",
	"publishDialog.itemsToPublish": "Zu veröffentlichende Elemente",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "Ausgewählte Artikelplanung",
	"publishDialog.requestPublish": "Veröffentlichung anfordern",
	"publishDialog.requestPublishHint": "Die Artikel werden zur Überprüfung eingereicht und nach Genehmigung veröffentlicht",
	"publishDialog.showAllDependencies": "Alle Abhängigkeiten anzeigen",
	"publishDialog.softDependencies": "Weiche Abhängigkeiten",
	"publishDialog.submissionCommentFieldError": "Bitte schreibe einen Kommentar.",
	"publishDialog.submissionMandatory": "Vorlage obligatorisch",
	"publishDialog.submissionOptional": "Einreichung Optional",
	"publishDialog.subtitle": "Harte Abhängigkeiten werden automatisch mit den Hauptelementen übermittelt. Sie können wählen, ob Sie weiche Abhängigkeiten einreichen oder nicht",
	"publishDialog.title": "Veröffentlichen",
	"publishForm.emailLabel": "Senden Sie mir das Feedback des Rezensenten per E-Mail",
	"publishForm.mixedPublishingDates": "Elemente haben gemischte Veröffentlichungsdatums-/Zeitpläne.",
	"publishForm.mixedPublishingTargets": "Elemente haben gemischte Veröffentlichungsziele.",
	"publishForm.publishingTargetError": "Das Laden der Veröffentlichungsziele ist fehlgeschlagen.",
	"publishForm.publishingTargetLoading": "Wird geladen...",
	"publishForm.publishingTargetRetry": "Wiederholen",
	"publishForm.publishingTargetSuccess": "Erfolg",
	"publishForm.requestApproval": "Genehmigung anfordern",
	"publishForm.scheduling": "Scheduling",
	"publishForm.schedulingLater": "später",
	"publishForm.schedulingLaterDisabled": "Später (bei der ersten Veröffentlichung deaktiviert)",
	"publishForm.schedulingNow": "Jetzt",
	"publishForm.submissionComment": "Kommentar zur Einreichung",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "Sie können mehrere durch Komma getrennt eingeben",
	"publishOnDemand.formPathLabel": "Pfad zur Veröffentlichung",
	"publishOnDemand.formPathLabelPreview": "Commit- oder Tag-IDs",
	"publishOnDemand.pathModeDescription": "In Studio vorgenommene Änderungen über die Benutzeroberfläche veröffentlichen",
	"publishOnDemand.publishingTarget": "Veröffentlichungsziel",
	"publishOnDemand.submissionComment": "Kommentar zur Einreichung",
	"publishOnDemand.tagsModeDescription": "Veröffentlichen Sie Änderungen, die über direkte Git-Aktionen für das Repository vorgenommen oder aus einem Remote-Repository abgerufen wurden",
	"publishOnDemand.title": "Bei Bedarf veröffentlichen",
	"publishing.bulkPublishNote": "Die Massenveröffentlichung sollte verwendet werden, um in Studio vorgenommene Änderungen über die Benutzeroberfläche zu veröffentlichen. Für Änderungen, die über direkte Git-Aktionen vorgenommen werden, verwenden Sie die Funktion \"Veröffentlichen von...\".",
	"publishing.busy": "Beschäftigt",
	"publishing.idle": "Im Leerlauf",
	"publishing.publishByNote": "Die Funktion \"Veröffentlichen von...\" muss für Änderungen verwendet werden, die über direkte Git-Aktionen gegen das Repository vorgenommen oder aus einem Remote-Repository abgerufen werden. Verwenden Sie für Änderungen, die über Studio auf der Benutzeroberfläche vorgenommen wurden, \"Massenveröffentlichung\".",
	"publishing.queued": "In Warteschlange",
	"publishing.ready": "Bereit",
	"publishing.started": "Gestartet",
	"publishing.stopped": "Gestoppt",
	"publishingDashboard.BLOCKED": "Verstopft",
	"publishingDashboard.CANCELLED": "Abgebrochen",
	"publishingDashboard.COMPLETED": "Abgeschlossen",
	"publishingDashboard.PROCESSING": "wird bearbeitet",
	"publishingDashboard.READY_FOR_LIVE": "Bereit fürs Leben",
	"publishingDashboard.all": "Alles",
	"publishingDashboard.bulkPublishStarted": "Der Massenveröffentlichungsprozess wurde gestartet.",
	"publishingDashboard.cancelItemButtonText": "Stornieren",
	"publishingDashboard.cancelSelected": "Auswahl abbrechen",
	"publishingDashboard.comment": "Kommentar",
	"publishingDashboard.commentNotProvided": "(Einreichungskommentar nicht bereitgestellt)",
	"publishingDashboard.confirmAllHelper": "Status für alle ausgewählten Elemente auf \"Abgebrochen\" setzen?",
	"publishingDashboard.confirmHelperText": "Artikelstatus auf \"Abgebrochen\" setzen?",
	"publishingDashboard.fetchPackagesFiles": "Paketdateien abrufen",
	"publishingDashboard.filesList": "Dateiliste",
	"publishingDashboard.filteredBy": "Angezeigt: {state, select, all {} other {: {state}.}} {environment, select, all {} other {{environment} veröffentlichungsziel.}} {path, select, none {} other {Gefiltert nach {path}}}",
	"publishingDashboard.filters": "Filter",
	"publishingDashboard.gitNote": "Die Veröffentlichung per Commit oder Tag muss für Änderungen verwendet werden, die über direkte Git-Aktionen gegen das Repository vorgenommen oder aus einem Remote-Repository abgerufen werden. Für über Studio auf der Benutzeroberfläche vorgenommene Änderungen verwenden Sie bitte <a>nach Pfad veröffentlichen</a>.",
	"publishingDashboard.next": "Nächste Seite",
	"publishingDashboard.no": "Nein",
	"publishingDashboard.noPackagesSubtitle": "Versuchen Sie, Ihre Abfrage zu ändern",
	"publishingDashboard.noPackagesTitle": "Keine Pakete gefunden",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} Paket ausgewählt} other {{count} Pakete ausgewählt}}",
	"publishingDashboard.pathExpression": "Pfadausdruck",
	"publishingDashboard.previous": "Vorherige Seite",
	"publishingDashboard.publishSuccess": "Erfolgreich veröffentlicht.",
	"publishingDashboard.scheduled": "Geplant für <b>{schedule, date, medium} {schedule, time, short}</b> von <b>{approver}</b>",
	"publishingDashboard.selectAll": "Alles auf dieser Seite auswählen",
	"publishingDashboard.state": "Zustand",
	"publishingDashboard.status": "Der Status ist {environment} für {state} Veröffentlichungsziel",
	"publishingDashboard.studioNote": "Die Veröffentlichung nach Pfad sollte verwendet werden, um in Studio vorgenommene Änderungen über die Benutzeroberfläche zu veröffentlichen. Bei Änderungen, die über direkte Git-Aktionen vorgenommen wurden, <a>veröffentlichen Sie bitte per Commit oder Tag</a>.",
	"publishingDashboard.title": "Veröffentlichungs-Dashboard",
	"publishingDashboard.warning": "Dadurch wird die Veröffentlichung aller Elemente erzwungen, die dem angeforderten Muster einschließlich ihrer Abhängigkeiten entsprechen, und es kann je nach Anzahl der Elemente lange dauern. Bitte vergewissern Sie sich, dass alle geänderten Elemente (einschließlich möglicherweise laufender Arbeiten von jemandem) zur Veröffentlichung bereit sind, bevor Sie fortfahren.",
	"publishingDashboard.yes": "Ja",
	"publishingQueue.title": "Veröffentlichungswarteschlange",
	"publishingStatus.publisherUnlocked": "Herausgeber entsperrt",
	"publishingStatusMessages.confirmUnlockPublisher": "Bestätigen Sie, dass Sie den Publisher entsperren möchten?",
	"publishingStatusMessages.errorMessage": "Der Publisher wurde aufgrund eines Fehlers gestoppt.",
	"publishingStatusMessages.isDisabledMessage": "Der Herausgeber ist deaktiviert.",
	"publishingStatusMessages.lockOwnerDisplayMessage": "Gesperrt von {lockOwner}",
	"publishingStatusMessages.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusMessages.processingMessage": "Vorbereiten von Elementen für die Veröffentlichung. {numberOfItems} von {totalItems} bisher verarbeitet.",
	"publishingStatusMessages.publishingMessage": "Artikel veröffentlichen. Veröffentlicht {numberOfItems} {numberOfItems, plural, one {item} other {items}} von {totalItems} bis {publishingTarget}. Paket-ID ist {submissionId}.",
	"publishingStatusMessages.publishingStatus": "Veröffentlichungsstatus",
	"publishingStatusMessages.queuedMessage": "Die Veröffentlichung der Elemente ist geplant.",
	"publishingStatusMessages.stoppedMessage": "Der Herausgeber wurde von einem Administrator gestoppt.",
	"pullDialog.pullFrom": "Ziehen Sie von {remoteName}",
	"pushToRemoteDialog.forcePush": "Druck erzwingen",
	"quickCreateBtnLabel.label": "Schnellerstellungsmenü öffnen",
	"quickCreateMenu.learnMore": "Mehr erfahren",
	"quickCreateMenu.learnMoreError": "Schnellerstellung wurde nicht konfiguriert. Bitte kontaktieren Sie Ihren Systemadministrator.",
	"quickCreateMenu.sectionTitle": "Schnell erstellen",
	"quickCreateMenu.title": "Neuer Inhalt",
	"recentActivity.lastEditedBy": "Zuletzt bearbeitet von",
	"recentActivity.publishDate": "Erscheinungsdatum",
	"recentActivityDashlet.dashletTitle": "Meine letzte Aktivität",
	"recentActivityDashlet.emptyMessage": "Keine aktuelle Aktivität",
	"recentActivityDashlet.filterBy": "Filtern nach",
	"recentActivityDashlet.hideLiveItems": "Live-Elemente ausblenden",
	"recentActivityDashlet.showLiveItems": "Live-Artikel anzeigen",
	"recentlyPublished.myLastEdit": "Meine letzte Bearbeitung",
	"recentlyPublished.publishDate": "Erscheinungsdatum",
	"recentlyPublished.publishedBy": "Veröffentlicht von",
	"recentlyPublished.publishedTo": "Veröffentlicht in",
	"recentlyPublishedDashlet.collapseAll": "Alles einklappen",
	"recentlyPublishedDashlet.dashletTitle": "KürzlichVeröffentlicht ({total})",
	"recentlyPublishedDashlet.emptyMessage": "Keine Artikel in letzter Zeit veröffentlicht",
	"recentlyPublishedDashlet.expandAll": "Alle erweitern",
	"recentlyPublishedDashlet.filterBy": "Filtern nach",
	"recentlyPublishedDashlet.showAll": "Alle ({total})",
	"register.dropTargetsNotFound": "Es gibt keine Drop-Ziele für {contentType} Komponenten",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.cancel": "Stornieren",
	"rejectDialog.continue": "Ablehnen",
	"rejectDialog.firstPublish": "Die gesamte Site-Veröffentlichung wird abgelehnt, da dies die erste Veröffentlichungsanfrage ist",
	"rejectDialog.noItemsSelected": "Es sind keine abzulehnenden Dateien vorhanden",
	"rejectDialog.predefinedRejectionComments": "Vordefinierte Ablehnungskommentare",
	"rejectDialog.rejectCommentLabel": "Ablehnungskommentar",
	"rejectDialog.submittedBy": "Eingereicht von",
	"rejectDialog.subtitle": "Die folgenden markierten Artikel werden zurückgewiesen.",
	"rejectDialog.title": "Ablehnen",
	"rejectDialog.typeMyOwnComment": "Geben Sie meinen eigenen Kommentar ein",
	"remoteRepositories.title": "Remote-Repositorys",
	"reposAdmin.pendingCommit": "Repo enthält Dateien, für die ein Commit aussteht. Weitere Informationen finden Sie unter Repository-Status.",
	"reposAdmin.repositoriesNote": "Verwenden Sie Studio nicht als Git-Merge- und Konfliktlösungsplattform. Alle Zusammenführungskonflikte sollten vorgelagert gelöst werden, bevor sie in Studio abgerufen werden.",
	"reposAdmin.unreachableRemote": "Remote \"{name}\" ist derzeit nicht erreichbar.",
	"reposAdmin.unstagedFilesMessage": "In Ihrem Repository befinden sich nicht bereitgestellte Dateien.",
	"repositories.acceptRemote": "Fernbedienung akzeptieren",
	"repositories.acceptRemoteHelper": "Überschreiben Sie die lokale Datei mit der aus der Ferne gezogenen Version.",
	"repositories.commitResolution": "Auflösung festlegen",
	"repositories.commitResolutionHelper": "Nach der Begehung dieses Beschlusses. Sie sollten die Änderungen auf Remote(s) verschieben, um den neuen Status, den Sie gerade definiert haben, zu synchronisieren.",
	"repositories.commitSuccessMessage": "Erfolgreich engagiert.",
	"repositories.confirmHelper": "Brechen Sie den Pull-Vorgang ab und behalten Sie den Inhalt dieses Repositorys.",
	"repositories.conflictsExist": "Repository-Operationen werden deaktiviert, während Konflikte bestehen. Bitte Konflikte lösen.",
	"repositories.deleteConfirmation": "Remote-Repository löschen?",
	"repositories.fetching": "Abrufen des Repository-Status...",
	"repositories.forcePushWarning": "Push erzwingen überschreibt, was sich im Remote-Repository-Zweig befindet.",
	"repositories.keepLocal": "Lokal halten",
	"repositories.keepLocalHelper": "Verwerfen Sie Remote-Änderungen und behalten Sie die lokale Datei.",
	"repositories.mergeStrategyLabel": "Strategie zusammenführen",
	"repositories.mergeStrategyNone": "Keiner",
	"repositories.mergeStrategyOurs": "Akzeptiere unsere",
	"repositories.mergeStrategyTheirs": "Akzeptiere ihre",
	"repositories.messageLabel": "Nachricht zur Konfliktlösung",
	"repositories.newRemoteDialogTitle": "Neues Remote-Repository",
	"repositories.newRepository": "Remote-Repository hinzufügen",
	"repositories.noConflicts": "Das lokale Repository ist konfliktfrei.",
	"repositories.pendingCommit": "Repo enthält Dateien, für die ein Commit aussteht. Weitere Informationen finden Sie unter Repository-Status.",
	"repositories.pullFromCreatedBranchOnlyHint": "Sie dürfen nur aus dem Zweig ziehen, aus dem die Site erstellt wurde; Jede Feature-Branch-Arbeit sollte Upstream zusammengeführt werden.",
	"repositories.pullSuccessMessage": " {numberOfCommits} Commits erfolgreich abgerufen. Zusammenführungs-Commit-ID wurde in die Zwischenablage kopiert. Möchten Sie diese jetzt veröffentlichen?",
	"repositories.pullSuccessNoChangesMessage": "Pull erfolgreich: bereits aktuell.",
	"repositories.pushSuccessMessage": "Erfolgreich geschoben.",
	"repositories.pushUrl": "Push-URL",
	"repositories.remoteBranchToPull": "Remote-Zweig zum Pull",
	"repositories.remoteBranchToPush": "Remote-Zweig zu Push",
	"repositories.remoteCreateSuccessMessage": "Remote-Repository erfolgreich erstellt.",
	"repositories.remoteDeleteSuccessMessage": "Remote-Repository erfolgreich gelöscht.",
	"repositories.remoteName": "Name des Remote-Git-Repositorys",
	"repositories.remoteUrl": "Remote-Repository-URL",
	"repositories.repoRemoteNameHelper": "Benennen Sie die Fernbedienung, die auf das Quell-Repository verweist, aus dem abgerufen werden soll.",
	"repositories.repoRemoteUrlHelper": "Die Git-Repository-URL, aus der erstellt werden soll.",
	"repositories.revertAll": "Alles rückgängig machen",
	"repositories.revertPullSuccessMessage": "Repository erfolgreich zurückgesetzt.",
	"repositories.sandboxBranchRetrievalError": "Zweig des Projekts kann nicht abgerufen werden",
	"repositories.splitView": "Geteilte Sicht",
	"repositories.unstagedFiles": "In Ihrem Repository befinden sich nicht bereitgestellte Dateien.",
	"repository.conflictedFiles": "In Konflikt stehende Dateien",
	"repository.pendingCommit": "Ausstehendes Commit",
	"repository.repositoryStatusLabel": "Repository-Status",
	"repository.statusNote": "Verwenden Sie Studio nicht als Git-Merge- und Konfliktlösungsplattform. Alle Zusammenführungskonflikte sollten vorgelagert gelöst werden, bevor sie in Studio abgerufen werden.",
	"requestPublishDialog.cancel": "Stornieren",
	"resetPasswordDialog.helperText": "Legen Sie ein neues Passwort für den Benutzer \"{user}\" fest",
	"resetPasswordDialog.passwordUpdated": "Passwort erfolgreich aktualisiert",
	"resetPasswordDialog.title": "Passwort zurücksetzen",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "Passwort bestätigen",
	"resetView.resetPasswordError": "Fehler beim Zurücksetzen des Passworts. Token ist möglicherweise ungültig oder abgelaufen.",
	"resetView.resetPasswordFieldPlaceholderLabel": "Neues Kennwort",
	"resetView.resetPasswordInvalidToken": "Ungültiges oder abgelaufenes Token.",
	"resetView.resetPasswordSuccess": "Passwort erfolgreich zurückgesetzt. Bitte melden Sie sich mit Ihrem neuen Passwort an.",
	"rteControlMessages.chooseSource": "Wähle eine Quelle",
	"rteControlMessages.dropImageUploaded": "{title} wurde erfolgreich hochgeladen.",
	"rteControlMessages.escapeScripts": "Escape-Skripte",
	"rteControlMessages.incompatibleDatasource": "Die zum Durchsuchen konfigurierte Datenquelle ist nicht mit dem Rich-Text-Editor kompatibel. Bitte wenden Sie sich an Ihren Administrator.",
	"rteControlMessages.noDatasourcesConfigured": "Für diesen Editor sind keine Quellen konfiguriert.",
	"rteControlMessages.requiredField": "Feld ist erforderlich",
	"scheduledDashlet.widgetTitle": "Zur Veröffentlichung geplant",
	"search.acceptSelection": "Auswahl akzeptieren",
	"search.changeQuery": "Versuchen Sie, Ihre Abfrage zu ändern.",
	"search.clearSelected": " {count} ausgewählt löschen",
	"search.filtersActive": " • <span>Filter aktiv</span>",
	"search.goToPreview": "Zur Seite gehen",
	"search.itemsPerPage": "Objekte pro Seite:",
	"search.noPermissions": "Keine Berechtigungen verfügbar.",
	"search.noResults": "Es wurden keine Ergebnisse gefunden.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Alles auf dieser Seite auswählen",
	"search.selectionCount": " {count} ausgewählt",
	"search.videoProcessed": "Video wird verarbeitet, Vorschau ist verfügbar, wenn die Verarbeitung abgeschlossen ist",
	"searchAhead.noResults": "Keine Ergebnisse.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": "über {value}{unit}",
	"searchFilter.anyPath": "Beliebiger Pfad",
	"searchFilter.asc": "Aufsteigend",
	"searchFilter.byRelevanceAscMessage": "Zuerst weniger relevant",
	"searchFilter.byRelevanceDescMessage": "Das Wichtigste zuerst",
	"searchFilter.clearFilters": "Filter löschen",
	"searchFilter.contentType": "Inhaltstyp",
	"searchFilter.desc": "Absteigend",
	"searchFilter.internalName": "Name",
	"searchFilter.lastEditDate": "Datum der letzten Bearbeitung",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Suchen in:",
	"searchFilter.size": "Inhaltsgröße",
	"searchFilter.sortBy": "Sortiere nach",
	"searchFilter.under": "unter {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Ansicht ändern",
	"searchToolBar.showHideFilters": "Filter ein-/ausblenden",
	"setWorkflowStateDialog.clearAsPublishedLive": "Als live veröffentlicht löschen",
	"setWorkflowStateDialog.clearAsPublishedToStaging": "Klar wie für die Bereitstellung veröffentlicht",
	"setWorkflowStateDialog.clearModified": "Löschen geändert",
	"setWorkflowStateDialog.clearNew": "Klar neu",
	"setWorkflowStateDialog.clearSystemProcessing": "Klare Systemverarbeitung",
	"setWorkflowStateDialog.clearUserLock": "Benutzersperre aufheben",
	"setWorkflowStateDialog.setAsPublishedLive": "Als live veröffentlicht festlegen",
	"setWorkflowStateDialog.setAsPublishedToStaging": "Als veröffentlicht auf Staging festlegen",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.editModePaddingHelp": "Fügt Sammlungen Auffüllen für eine einfachere Interaktion im Bearbeitungsmodus hinzu. Drücken Sie `p` zu einem beliebigen Zeitpunkt, um zwischen Ein- und Ausschalten zu wechseln.",
	"settingsPanel.editModePaddingLabel": "Raummodus (p)",
	"settingsPanel.highlightAllTargets": "Markieren Sie alle Ziele (e)",
	"settingsPanel.highlightMode": "Highlight-Modus",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "Geteilter Inhalt",
	"shortcuts.disableICE": "Deaktivieren Sie ICE, während Sie sie gedrückt halten (zum Durchklicken)",
	"shortcuts.editModePadding": "Auffüllen im Bearbeitungsmodus umschalten",
	"shortcuts.reloadPreview": "Vorschau neu laden",
	"shortcuts.showShortcuts": "Tastenkombinationen anzeigen",
	"shortcuts.toggleEditMode": "Bearbeitungsmodus EIN/AUS",
	"shortcuts.toggleMoveMode": "Bewegungsmodus EIN/AUS",
	"site.deleted": "Projekt erfolgreich gelöscht",
	"siteCard.helperText": "Projekt \"{site}\" löschen?",
	"siteComponentDS.componentPath": "Komponentenpfad",
	"siteComponentDS.dataType": "Datentyp",
	"siteComponentDS.date": "Datum",
	"siteComponentDS.float": "Gleitkommazahl",
	"siteComponentDS.html": "Datentyp",
	"siteComponentDS.integer": "Ganze Zahl",
	"siteComponentDS.label": "Taxonomie-Auswahl",
	"siteComponentDS.required": "Erforderlich",
	"siteComponentDS.siteComponent": "Projektkomponente",
	"siteComponentDS.string": "String",
	"siteComponentDS.unableLoad": "Das System konnte {file}nicht laden.",
	"siteConfig.controlNotAvailable": "Steuerung nicht verfügbar",
	"siteConfig.insertExpressionMessage": "Ausdruck einfügen",
	"siteConfig.invalidNumber": "\"{value}\" ist keine gültige Nummer.",
	"siteConfig.landingMessage": "Bitte wählen Sie links ein Werkzeug aus.",
	"siteConfig.loadModuleError": "\"{tool}\" kann nicht geladen werden. Überprüfen Sie die Konfiguration der Projektwerkzeuge.",
	"siteConfig.postfixes": "Suffixe",
	"siteConfig.switchToMessage": "Wechseln Sie zu {type}",
	"siteConfig.toolNotFound": "\"{tool}\" Werkzeug nicht gefunden.",
	"siteConfigurationManagement.activeEnvironment": "{environment} Umgebung",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS-Profile",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "Konfigurationsdatei für AWS-Profile.",
	"siteConfigurationManagement.confTabAssetProcessing": "Asset-Verarbeitung",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Konfigurationsdatei für die Asset-Verarbeitung.",
	"siteConfigurationManagement.confTabBlobStores": "Blob-Stores",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob speichert Konfigurationsdatei.",
	"siteConfigurationManagement.confTabBoxProfiles": "Kastenprofile",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Konfigurationsdatei für Boxprofile.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS-Konfiguration",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "Diese Datei konfiguriert 0 oder mehr CMIS-fähige Repositorys als Datenquellen, aus denen Inhaltsautoren auswählen können",
	"siteConfigurationManagement.confTabCodeEditorConf": "Konfiguration des Code-Editors",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Definiert Code-Editor-Konfigurationen",
	"siteConfigurationManagement.confTabConfDesc": "Definiert diese Liste von Konfigurationen",
	"siteConfigurationManagement.confTabConfigurations": "Konfigurationen",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Konfiguration der kontextbezogenen Navigation",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Definiert Module in der kontextabhängigen Navigationsleiste der Projekt",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Konfiguration des Abhängigkeitsauflösers",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "Diese Datei konfiguriert, welche Dateipfade Crafter als Abhängigkeit betrachtet und wie sie extrahiert werden sollen.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Konfiguration der Entwicklungsumgebung",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Definiert eine Entwicklungsumgebungskonfiguration",
	"siteConfigurationManagement.confTabEndpointsConf": "Endpunktkonfiguration",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Definiert eine Liste der verfügbaren Endpunkte",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Anwendungskontext des Engine-Projekts",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Projektanwendungskontext, der von Crafter Engine verwendet wird",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Anwendungskontext des Engine-Projekts – Live",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Anwendungskontext des Engine-Projekts – Vorschau",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Anwendungskontext des Engine-Projekts – Staging",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Engine-Projektkonfiguration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Von Crafter Engine verwendete Projektkonfiguration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Engine-Projektkonfiguration – Live",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Engine-Projektkonfiguration – Vorschau",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Engine-Projektkonfiguration - Staging",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Konfiguration zum Umschreiben von Suchmaschinen-URLs (XML-Stil)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "Diese Datei konfiguriert die von Crafter Engine verwendeten Projekteigenschaften",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Engine-URL-Rewrite-Konfiguration (XML-Stil) – Live",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Engine-URL-Rewrite-Konfiguration (XML-Stil) – Vorschau",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Engine-URL-Rewrite-Konfiguration (XML-Stil) - Staging",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Umgebungskonfiguration",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "Diese Datei konfiguriert die Umgebungen, in denen Crafter Studio veröffentlichen kann",
	"siteConfigurationManagement.confTabMimeTypes": "Pantomime-Typen",
	"siteConfigurationManagement.confTabMimeTypesDesc": "Diese Datei konfiguriert die Überschreibungen der Mime-Typensymbole für diese Projekt/diesen Blueprint.",
	"siteConfigurationManagement.confTabNotificationConf": "Benachrichtigungskonfiguration",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Definiert eine Liste von UI-Meldungen",
	"siteConfigurationManagement.confTabPermissionsMappings": "Berechtigungszuordnung",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Definiert eine Karte mit Berechtigungen und Pfaden",
	"siteConfigurationManagement.confTabPersonasConf": "Personas-Konfiguration",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Definiert eine Liste von Personas, die in der Vorschau angenommen werden können",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Vorschau der Asset-Konfiguration",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Definiert eine Liste bearbeitbarer Assets, die mit XML-Inhalten verknüpft sind",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Vorschau der Komponentenkonfiguration",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Definiert eine Liste von Komponenten, die dynamisch in der Vorschau erstellt werden können",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Konfiguration des Vorschaufensters",
	"siteConfigurationManagement.confTabProxyConfig": "Proxy-Konfiguration",
	"siteConfigurationManagement.confTabProxyConfigDesc": "Diese Datei konfiguriert die Proxyserver für die Vorschau.",
	"siteConfigurationManagement.confTabRoleMappings": "Rollenzuordnungen",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Definiert eine Liste der in der Projekt verfügbaren Rollen",
	"siteConfigurationManagement.confTabSidebarConf": "Konfiguration der Seitenleiste",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Definiert Module in der Seitenleiste",
	"siteConfigurationManagement.confTabSiteConf": "Inhaltstyp-Editor-Konfig",
	"siteConfigurationManagement.confTabSiteConfDesc": "Definiert Steuerelemente und Datenquellen, die für die Bearbeitung von Inhaltstypen verfügbar sind",
	"siteConfigurationManagement.confTabSiteConfiguration": "Projektkonfiguration",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Definiert die allgemeine Projektkonfiguration",
	"siteConfigurationManagement.confTabSitePolicyConf": "Konfiguration der Projektrichtlinie",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Definiert Richtlinien zum Validieren von Inhaltsvorgängen",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Targeting-Konfiguration",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "Diese Datei konfiguriert das Targeting-System von Crafter Studio, um Crafter Engine mit gefälschten Benutzereigenschaften zu versehen, die das Targeting-System steuern",
	"siteConfigurationManagement.confTabTargetsConf": "Zielkonfiguration",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Definiert eine Liste von Zielen, die für die Formulardatenquelle verwendet werden",
	"siteConfigurationManagement.confTabTranslationConf": "Übersetzungskonfiguration",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Definiert unterstützte Sprachen und wie man sie auflöst",
	"siteConfigurationManagement.confTabUiConf": "Konfiguration der Benutzeroberfläche",
	"siteConfigurationManagement.confTabUiConfDesc": "Definiert die in der Benutzeroberfläche angezeigten Widgets",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "Konfigurationsdatei für WebDAV-Profile.",
	"siteConfigurationManagement.confTabWorkflowConf": "Workflow-Konfiguration",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Definiert im System verfügbare Workflows",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Definiert eine Liste von Werkzeugen, die in der Vorschau verfügbar sind",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "Beispiel ausblenden",
	"siteConfigurationManagement.history": "Geschichte",
	"siteConfigurationManagement.rteConfigDescription": "Definiert Rich-Text-Editor-Konfigurationen im Formular",
	"siteConfigurationManagement.rteConfigTitle": "RTE-Konfiguration",
	"siteConfigurationManagement.selectConfigFile": "Bitte wählen Sie links eine Konfigurationsdatei aus.",
	"siteConfigurationManagement.title": "Aufbau",
	"siteConfigurationManagement.unsavedChangesSubtitle": "Sie haben nicht gespeicherte Änderungen, möchten Sie verlassen?",
	"siteConfigurationManagement.unsavedChangesTitle": "Nicht gespeicherte Änderungen",
	"siteConfigurationManagement.viewSample": "Beispiel anzeigen",
	"siteDashboard.emptyStateMessageSubtitle": "Fügen Sie Widgets in der Benutzeroberflächenkonfiguration Ihres Projekts hinzu",
	"siteDashboard.emptyStateMessageTitle": "Keine Widgets zum Anzeigen",
	"siteSearch.noOptionsAvailable": "Keine Optionen verfügbar",
	"siteSearch.unknownErrorSearching": "Beim Suchdienst ist ein Fehler aufgetreten.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Projekt wählen",
	"siteTools.itemStates": "Artikelstatus",
	"siteTools.selectTool": "Bitte wählen Sie links ein Werkzeug aus.",
	"siteTools.title": "Projektwerkzeuge",
	"siteTools.toolListingNotConfigured": "Die Liste der Projektwerkzeuge wurde nicht festgelegt",
	"siteTools.toolListingNotConfiguredSubtitle": "Bitte setzen Sie die craftercms.siteTools-Referenz in der ui.xml",
	"siteTools.toolNotFound": "Werkzeug nicht gefunden",
	"sites.ChangeView": "Ansicht ändern",
	"sites.createGroup": "Gruppe erstellen",
	"sites.createSite": "Site erstellen",
	"sitesAdmin.siteUpdated": "Projekt aktualisiert.",
	"sitesGrid.emptyStateMessage": "Keine Projekte gefunden",
	"sitesGrid.siteDeleted": "Projekt erfolgreich gelöscht",
	socketConnectionIssue: socketConnectionIssue$2,
	"systemType.asset": "Vermögenswert",
	"systemType.component": "Komponente",
	"systemType.folder": "Mappe",
	"systemType.levelDescriptor": "Level-Deskriptor",
	"systemType.page": "Seite",
	"systemType.renderingTemplate": "Rendering-Vorlage",
	"systemType.script": "Skript",
	"systemType.taxonomy": "Taxonomie",
	"targetingDialog.setNow": "jetzt einstellen",
	"tokenManagement.clearSelected": "Ausgewählte löschen ({count})",
	"tokenManagement.copied": "Token in Zwischenablage kopiert",
	"tokenManagement.createToken": "Token erstellen",
	"tokenManagement.created": "Token erstellt und in die Zwischenablage kopiert",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Ausgewählte löschen",
	"tokenManagement.emptyTokens": "Es sind keine Token vorhanden. Klicken Sie auf Token erstellen, um einen neuen hinzuzufügen",
	"tokenManagement.helperText": "Token \"{label}\" löschen?",
	"tokenManagement.updated": "Token aktualisiert",
	"transcodedVideoPickerControl.label": "Transcodiertes Video",
	"transferList.addDisabledTooltip": "Wählen Sie links die hinzuzufügenden Elemente aus",
	"transferList.addToTarget": "Auswahl hinzufügen",
	"transferList.emptyListMessage": "Alle Benutzer sind Mitglieder dieser Gruppe",
	"transferList.removeDisabledTooltip": "Wählen Sie rechts die zu entfernenden Elemente aus",
	"transferList.removeFromTarget": "Ausgewählte entfernen",
	"transferList.targetEmptyStateMessage": "Keine Mitglieder in dieser Gruppe",
	"transferListColumn.noResults": "Keine Ergebnisse, versuchen Sie, die Abfrage zu ändern",
	"uninstallPluginDialog.headerSubtitle": "Bitte bestätigen Sie die Deinstallation von \"{pluginId}\"",
	"uninstallPluginDialog.headerTitle": "Plugin deinstallieren",
	"uninstallPluginDialog.noUsagesFound": "Keine Verwendungen gefunden",
	"uninstallPluginDialog.pluginSafeToUninstall": "Das Plugin kann sicher deinstalliert werden.",
	"uninstallPluginDialog.reviewDependenciesMessage": "Bitte überprüfen Sie die abhängigen Elemente von \"{pluginId}\"",
	"uninstallPluginDialog.typePassword": "Geben Sie das Wort \"<b>{password}</b>\" ein, um das Löschen des Plugins zu bestätigen.",
	"unlockPublisherDialog.dialogCopy": "Bitte bestätigen Sie die Freigabe der Herausgebersperre",
	"unlockPublisherDialog.dialogTitle": "Bestätigen Sie die Publisher-Entsperrung",
	"unlockPublisherDialog.typeConfirmPassword": "Geben Sie das Wort \"<b>{password}</b>\" ein, um zu bestätigen, dass Sie die Auswirkungen verstehen und fortfahren möchten.",
	"unlockPublisherDialog.unlockCompleteMessage": "Publisher-Sperre erfolgreich freigegeben.",
	"unlockPublisherDialog.unlockFailedMessage": "Fehler beim Aufheben der Herausgebersperre.",
	"uploadDialog.title": "Hochladen",
	"uploadDialog.uploadInProgress": "Uploads sind noch im Gange. Wenn Sie diese Seite verlassen, werden die ausstehenden Uploads gestoppt. Bist du sicher, dass du gehen willst?",
	"uploadDialog.uploadInProgressConfirmation": "Uploads laufen noch. Das Schließen dieses Modals würde die ausstehenden Uploads stoppen. Möchten Sie es wirklich schließen?",
	"uppyCore.noDuplicates": "Die doppelte Datei \"%'{fileName}' kann nicht hinzugefügt werden, sie existiert bereits",
	"uppyDashboard.acceptAll": "Akzeptiere alle Änderungen",
	"uppyDashboard.addMore": "Weitere hinzufügen",
	"uppyDashboard.addingMoreFiles": "Weitere Dateien hinzufügen",
	"uppyDashboard.cancelPending": "Abbrechen ausstehend",
	"uppyDashboard.clearCompleted": "Klar abgeschlossen",
	"uppyDashboard.maxActiveUploadsReached": "{maxFiles} maximale Anzahl aktiver Uploads erreicht. Überschuss wurde verworfen.",
	"uppyDashboard.maxFiles": "{maxFiles} max.",
	"uppyDashboard.rejectAll": "Alle Änderungen ablehnen",
	"uppyDashboard.removeFile": "Datei löschen",
	"uppyDashboard.renamingFromTo": "Umbenennen von %'{from}' in %'{to}'",
	"uppyDashboard.validateAndRetry": "Änderungen akzeptieren und hochladen",
	"userGroupMembershipEditor.addOrRemoveError": "Fehler beim Ändern der Benutzergruppe(n). Bitte versuchen Sie es kurz erneut.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Schließen",
	"userInfoDialog.deleteUser": "Benutzer löschen",
	"userInfoDialog.externallyManaged": "Extern verwaltet",
	"userInfoDialog.helperText": "Benutzer \"{username}\" löschen?",
	"userInfoDialog.noRoles": "Keine Rollen",
	"userInfoDialog.resetPassword": "Passwort zurücksetzen",
	"userInfoDialog.siteName": "Projektname",
	"userInfoDialog.siteRoles": "Rollen pro Projekt",
	"userInfoDialog.userDeleted": "Benutzer erfolgreich gelöscht",
	"userInfoDialog.userDetails": "Nutzerdetails",
	"userInfoDialog.userDisabled": "Benutzer erfolgreich deaktiviert",
	"userInfoDialog.userEnabled": "Benutzer erfolgreich aktiviert",
	"userInfoDialog.userUpdated": "Benutzer erfolgreich aktualisiert",
	"usersAdmin.firstName": "Vorname",
	"usersAdmin.lastName": "Nachname",
	"usersAdmin.maxLengthError": "{field} darf nicht länger als {size} Zeichen sein",
	"usersAdmin.passwordChangeSuccessMessage": "Das Passwort wurde erfolgreich geändert",
	"usersAdmin.userCreated": "{username} erstellt.",
	"usersAdmin.userDeleted": "{username} gelöscht.",
	"usersAdmin.userEdited": "{username} bearbeitet.",
	"usersAdmin.userName": "Nutzername",
	"usersGrid.createUser": "Benutzer erstellen",
	"usersGrid.emptyStateMessage": "Keine Benutzer gefunden",
	"validations.itemLocked": "Das Element ist bereits von {lockOwner}gesperrt. Bitte versuchen Sie es später erneut.",
	"validations.maxCount": "Die maximale Anzahl von Elementen beträgt {maxCount}",
	"validations.maxLength": "Maximale Länge erreicht({maxLength})",
	"validations.minCount": "Die Mindestanzahl der Elemente beträgt {minCount}",
	"validations.noDataSourcesSet": "Für dieses Feld sind keine Datenquellen festgelegt",
	"validations.noPathSetInDataSource": "Für die Datenquelle wurde kein Pfad festgelegt",
	"validations.outOfSyncContent": "Es wurde ein automatischer Reload durchgeführt, da das Item im Hintergrund geändert wurde. Bitte versuche es erneut.",
	"validations.required": " {field} ist erforderlich",
	"viewVersionDialog.headerTitle": "Artikelversion anzeigen",
	"wcmRootFolder.pathNotFound": "Ordner {path} nicht gefunden.",
	"widgetComponent.componentNotFoundSubtitle": "Überprüfen Sie die UI-Konfiguration und stellen Sie sicher, dass Sie die Plugins installiert haben, die die gewünschten Komponenten enthalten.",
	"widgetComponent.componentNotFoundTitle": "Komponente {id} nicht gefunden.",
	"widgetComponent.pluginLoadFailedMessageBody": "Mit {info} & Komponenten-ID \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Laden des Plugins fehlgeschlagen",
	"withEmptyState.defaultEmptyStateMessage": "keine Ergebnisse gefunden",
	"word.configuration": "Aufbau",
	"word.refresh": "Aktualisierung",
	"word.upload": "Hochladen",
	"words.about": "Über",
	"words.accept": "Akzeptieren",
	"words.account": "Konto",
	"words.activity": "Aktivität",
	"words.all": "Alles",
	"words.apply": "Sich bewerben",
	"words.approve": "Genehmigen",
	"words.asset": "Vermögenswert",
	"words.assets": "Vermögenswerte",
	"words.audit": "PRÜFUNG",
	"words.authentication": "Authentifizierung",
	"words.author": "Autor",
	"words.back": "Zurück",
	"words.base": "Base",
	"words.branch": "Ast",
	"words.browse": "Durchsuche",
	"words.by": "Durch",
	"words.cancel": "Stornieren",
	"words.clear": "klar",
	"words.close": "Schließen",
	"words.cluster": "Cluster",
	"words.collapse": "Zusammenbruch",
	"words.compact": "Kompakt",
	"words.component": "Komponente",
	"words.components": "Komponenten",
	"words.configuration": "Aufbau",
	"words.confirm": "Bestätigen",
	"words.content": "Inhalt",
	"words.continue": "Fortsetzen",
	"words.copy": "Kopieren",
	"words.create": "Erstellen",
	"words.created": "Erstellt",
	"words.custom": "Brauch",
	"words.cut": "Schnitt",
	"words.dashboard": "Instrumententafel",
	"words.defaults": "Standardeinstellungen",
	"words.delete": "Löschen",
	"words.dependencies": "Abhängigkeiten",
	"words.description": "Beschreibung",
	"words.desktop": "Desktop",
	"words.details": "Einzelheiten",
	"words.diff": "Diff",
	"words.disable": "Deaktivieren",
	"words.disabled": "Deaktiviert",
	"words.dismiss": "entlassen",
	"words.documentation": "Dokumentation",
	"words.done": "Erledigt",
	"words.duplicate": "Duplikat",
	"words.edit": "Bearbeiten",
	"words.edited": "Bearbeitet",
	"words.email": "Email",
	"words.enable": "Aktivieren",
	"words.enabled": "aktiviert",
	"words.error": "Error",
	"words.expand": "Erweitern",
	"words.expiration": "Ablauf",
	"words.expired": "Abgelaufen",
	"words.expiring": "Auslaufen",
	"words.fetch": "Holen",
	"words.fetching": "Abruf",
	"words.files": "Dateien",
	"words.filter": "Filter",
	"words.filters": "Filter",
	"words.firstName": "Vorname",
	"words.folder": "Mappe",
	"words.font": "Schriftart",
	"words.forward": "Nach vorne",
	"words.from": "Von",
	"words.git": "Git",
	"words.global": "Global",
	"words.go": "gehen",
	"words.graphQL": "GraphQL",
	"words.groups": "Gruppen",
	"words.height": "Höhe",
	"words.history": "Geschichte",
	"words.icon": "Symbol",
	"words.id": "Id",
	"words.image": "Bild",
	"words.install": "Installieren",
	"words.installed": "Eingerichtet",
	"words.item": "Artikel",
	"words.label": "Etikette",
	"words.language": "Sprache",
	"words.lastName": "Nachname",
	"words.level": "Niveau",
	"words.live": "LEBEN",
	"words.loading": "Wird geladen",
	"words.local": "Lokal",
	"words.locales": "Locales",
	"words.location": "Ort",
	"words.locked": "Verschlossen",
	"words.logger": "Logger",
	"words.login": "Anmeldung",
	"words.logout": "Ausloggen",
	"words.max": "Max",
	"words.members": "Mitglieder",
	"words.message": "Botschaft",
	"words.min": "MINDEST",
	"words.minimize": "Minimieren",
	"words.move": "Bewegung",
	"words.name": "Name",
	"words.never": "noch nie",
	"words.no": "Nein",
	"words.notification": "Benachrichtigung",
	"words.now": "Jetzt",
	"words.ok": "Ok",
	"words.options": "Optionen",
	"words.page": "Seite",
	"words.pages": "Seiten",
	"words.parameters": "Parameter",
	"words.password": "Passwort",
	"words.paste": "Einfügen",
	"words.pasting": "Einfügen...",
	"words.path": "Pfad",
	"words.pause": "Pause",
	"words.phone": "Telefon",
	"words.presets": "Voreinstellungen",
	"words.preview": "Vorschau",
	"words.processing": "Wird bearbeitet",
	"words.project": "Projekt",
	"words.projects": "Projekte",
	"words.publish": "Veröffentlichen",
	"words.published": "Veröffentlicht",
	"words.publishing": "Veröffentlichen",
	"words.pull": "Ziehen",
	"words.push": "Drucken",
	"words.queued": "In Warteschlange",
	"words.range": "Angebot",
	"words.ready": "Bereit",
	"words.reason": "Grund",
	"words.refresh": "Aktualisierung",
	"words.reject": "Ablehnen",
	"words.relevance": "Relevanz",
	"words.remote": "Remote",
	"words.rename": "Umbenennen",
	"words.reset": "Zurücksetzen",
	"words.retry": "Wiederholen",
	"words.revert": "Zurückkehren",
	"words.review": "Rezension",
	"words.roles": "Rollen",
	"words.save": "sparen",
	"words.schedule": "Zeitplan",
	"words.script": "Skript",
	"words.scripts": "Skripte",
	"words.search": "Suche",
	"words.select": "wählen",
	"words.selected": "ausgewählt",
	"words.shortcuts": "Verknüpfungen",
	"words.show": "Show",
	"words.snippets": "Schnipsel",
	"words.staged": "Inszeniert",
	"words.staging": "Inszenierung",
	"words.start": "Start",
	"words.state": "Zustand",
	"words.status": "Status",
	"words.stay": "bleibe",
	"words.stop": "Halt",
	"words.stopped": "Gestoppt",
	"words.submit": "Einsenden",
	"words.system": "System",
	"words.tablet": "Tablette",
	"words.taxonomy": "Taxonomie",
	"words.template": "Vorlage",
	"words.templates": "Vorlagen",
	"words.thread": "Faden",
	"words.timeline": "Zeitleiste",
	"words.timestamp": "Zeitstempel",
	"words.to": "zu",
	"words.token": "Zeichen",
	"words.translation": "Übersetzung",
	"words.type": "Art",
	"words.uninstall": "Deinstallieren",
	"words.unknown": "unbekannte",
	"words.unlock": "Freischalten",
	"words.unpublished": "Unveröffentlicht",
	"words.update": "Aktualisieren",
	"words.upload": "Hochladen",
	"words.url": "Url",
	"words.userName": "Nutzername",
	"words.username": "Nutzername",
	"words.users": "Benutzer",
	"words.validating": "Validierung",
	"words.value": "Wert",
	"words.version": "Ausführung",
	"words.view": "Aussicht",
	"words.warning": "Warnung",
	"words.width": "Breite",
	"words.yes": "Ja",
	"workflowCancellation.cancel": "Stornieren",
	"workflowCancellation.continue": "Fortsetzen",
	"workflowCancellation.subtitle": "Bearbeiten bricht alle Elemente ab, die sich im geplanten Bereitstellungsbatch befinden. Bitte überprüfen Sie die Liste der Dateien unten und wählen Sie „Weiter“, um den Workflow abzubrechen und zu bearbeiten, oder „Abbrechen“, um in Ihrem Dashboard zu bleiben.",
	"workflowCancellation.title": "Warnung: Workflow-Abbruch",
	"workflowCancellationDialog.noAffectedFiles": "Es gibt keine betroffenen Dateien",
	"workflowStateManagementMessages.statesUpdatedMessage": "Zustand für {count} {count, plural, one {item} other {items}} erfolgreich aktualisiert",
	"workflowStates.locked": "Verschlossen",
	"workflowStates.setState": " {count, plural, one {Set State for \"{name}\"} other {Set State for Items ({count})}}",
	"workflowStates.title": "Workflow-Zustände"
};

var guestDetectionMessage$3 = "미리보기 응용 프로그램과의 통신이 중단되었습니다. Studio는 계속해서 연결을 다시 시도합니다.";
var socketConnectionIssue$3 = "서버와의 연결이 중단되었습니다. Studio는 계속해서 연결을 다시 시도합니다.";
var ko = {
	"CreateUserDialog.title": "사용자 생성",
	"GlobalMenu.Audit": "심사",
	"GlobalMenu.Sites": "프로젝트",
	"GraphiQL.title": "그라피큐엘",
	"InstallPluginDialog.empty": "플러그인을 찾을 수 없습니다.",
	"InstallPluginDialog.title": "플러그인 검색 및 설치",
	"about.buildDate": "빌드 날짜",
	"about.buildNumber": "빌드 번호",
	"about.studioVersionNumber": "스튜디오 버전 번호",
	"about.versionNumber": "버전 번호",
	"aboutView.attribution": "CrafterCMS는 여러가지 <a>Open Source Software Projects</a>와 연동하여 기능합니다",
	"accountManagement.changeHelperText": "비밀번호가 성공적으로 업데이트되면 다시 로그인해야 합니다.",
	"accountManagement.changeLanguage": "언어 변경",
	"accountManagement.changePassword": "비밀번호 변경",
	"accountManagement.confirmPassword": "비밀번호 확인",
	"accountManagement.currentPassword": "현재 비밀번호",
	"accountManagement.languageUpdated": "언어 환경설정이 변경됨",
	"accountManagement.newPassword": "새 비밀번호",
	"accountManagement.passwordChanged": "비밀번호가 성공적으로 변경되었습니다.",
	"accountManagement.passwordInvalid": "비밀번호가 잘못되었습니다.",
	"accountManagement.passwordMatch": "이전 비밀번호와 일치해야 합니다.",
	"adminConfigurations.allEncrypted": "표시된 모든 항목은 이미 암호화되어 있습니다. `encrypted` 속성은 암호화로 표시 될 빈 값을 가져야합니다 (예: `encrypted=\"\"`)",
	"adminConfigurations.configSaved": "구성이 성공적으로 저장되었습니다.",
	"adminConfigurations.documentError": "문서에 오류가 있습니다. 편집기 측면에서 오류 마커를 확인하십시오.",
	"adminConfigurations.encryptHinPt1": "태그의 내용을 암호화하려면 (1) 원하는 태그를 암호화하도록 표시 한 다음 (2) \"표시된 암호화\"버튼을 클릭하십시오.",
	"adminConfigurations.encryptHinPt2": "(1) <bold>`encrypted = \"\"`</bold>속성을 추가하여 태그를 암호화하도록 표시하십시오.",
	"adminConfigurations.encryptHinPt3": "예 : {lt}accessKey encrypted = \"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) <bold>`표시된 암호화`</bold> 버튼을 클릭하면 태그는 다음과 같아야합니다.",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted = \"true\"{gt}${lc}enc : xeJW23SomeEncryptedValuesListedHere{rc}{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "생각해 내다:",
	"adminConfigurations.encryptHinPt7": "암호화 할 값 (텍스트)을 직접 보유하는 태그에만`encrypted =””속성을 사용하십시오.",
	"adminConfigurations.encryptHinPt8": "실제로 XML 청크를 암호화하지 않으려면 다른 태그가 포함 된 태그에 속성을 추가하지 마십시오.",
	"adminConfigurations.encryptHinPt9": "암호화 결과를 수동으로 조작하지 마십시오.",
	"adminConfigurations.encryptMarked": "표시된 암호화",
	"adminConfigurations.encryptionSingleDetail": " 값이 \"{value}\"인{br}\"{name}\"",
	"adminConfigurations.noEncryptItems": "XML 마크 업에서 암호화 할 항목이 없습니다. 암호화를 표시하려면`encrypted = \"\"`속성을 추가하십시오.",
	"adminConfigurations.pendingEncryption": " {itemCount, plural, one {태그 이름 {tags}이(가) 암호화로 표시되었지만 아직 암호화되지 않았습니다}other {태그 이름: {tags} {br}은(는) 암호화로 표시되지만 암호화되지는 않았습니다}} 이 (가) 암호화되었습니다. 암호화를 트리거하거나 태그 플래그를 제거하십시오.",
	"adminConfigurations.xmlContainsErrors": "XML 문서에 오류가 있습니다 : {errors}",
	"approvedScheduledItemsDashlet.collapseAll": "모든 축소",
	"approvedScheduledItemsDashlet.dashletTitle": "승인된 예약 항목({count})",
	"approvedScheduledItemsDashlet.emptyMessage": "예약된 항목이 없습니다.",
	"approvedScheduledItemsDashlet.expandedAll": "모두 확장",
	"approvedScheduledItemsDashlet.filterBy": "필터링 기준",
	"asyncVideoPlayer.videoBeingProcessed": "비디오가 처리 중이며 처리가 완료되면 미리보기를 사용할 수 있습니다.",
	"audiencesPanel.apply": "대다",
	"audiencesPanel.defaults": "기본값",
	"audiencesPanel.undefinedControlType": "알 수 없는 제어 유형",
	"auditGrid.allOrigins": "모든 기원",
	"auditGrid.allSites": "모든 프로젝트",
	"auditGrid.allUsers": "모든 사용자들",
	"auditGrid.clearFilters": "필터 지우기",
	"auditGrid.clusterNode": "클러스터 노드",
	"auditGrid.emptyStateMessage": "로그를 찾을 수 없습니다.",
	"auditGrid.name": "이름",
	"auditGrid.noParameters": "매개변수 없음",
	"auditGrid.operation": "조작",
	"auditGrid.origin": "유래",
	"auditGrid.parameters": "매개 변수",
	"auditGrid.showParameters": "매개변수 표시",
	"auditGrid.siteName": "프로젝트",
	"auditGrid.targetType": "대상 유형",
	"auditGrid.targetValue": "목표치",
	"auditGrid.timestamp": "타임 스탬프",
	"auditGrid.timezone": "시간대",
	"auditGrid.username": "사용자 이름",
	"auditGridFilterPopover.allOperations": "모든 작업",
	"auditGridFilterPopover.filterByCluster": "클러스터 노드로 필터링",
	"auditGridFilterPopover.filterByOperations": "작업별 필터링",
	"auditGridFilterPopover.filterByOrigin": "출처별 필터링",
	"auditGridFilterPopover.filterBySite": "프로젝트별 필터링",
	"auditGridFilterPopover.filterByTarget": "대상 값으로 필터링",
	"auditGridFilterPopover.filterByUser": "사용자별 필터링",
	"authMonitor.dialogTitleText": "세션 만료",
	"authMonitor.incorrectPasswordMessage": "잘못된 비밀번호. 다시 시도하십시오.",
	"authMonitor.logOutButtonLabel": "로그 아웃",
	"authMonitor.openSSOLoginButtonLabel": "로그인 양식 열기",
	"authMonitor.passwordTextFieldLabel": "암호",
	"authMonitor.postSSOLoginMismatchMessage": "이 세션의 소유자와 다른 사용자로 로그인 한 것 같습니다. 보안상의 이유로 이제 화면이 새로 고쳐집니다.",
	"authMonitor.sessionExpiredMessage": "기간이 만료되었습니다. 다시 로그인하십시오.",
	"authMonitor.ssoOpenPopupMessage": "팝업이 차단되지 않았는지 확인하십시오. 로그인하면이 창으로 돌아와서 아래의 '재개'버튼을 클릭하십시오.",
	"authMonitor.usernameTextFieldLabel": "사용자 이름",
	"authMonitor.validateSessionButtonLabel": "다시 시작하다",
	"awaitingApprovalDashlet.collapseAll": "모든 축소",
	"awaitingApprovalDashlet.dashletTitle": "승인 대기 중인 항목({count})",
	"awaitingApprovalDashlet.emptyMessage": "승인 대기 중인 항목이 없습니다.",
	"awaitingApprovalDashlet.expandedAll": "모두 확장",
	"awaitingApprovalDashlet.hideUnpublished": "미공개 숨기기",
	"awaitingApprovalDashlet.item": "목",
	"awaitingApprovalDashlet.lastEdited": "마지막으로 수정됨",
	"awaitingApprovalDashlet.lastEditedBy": "마지막 편집자",
	"awaitingApprovalDashlet.publishingDate": "발행일",
	"awaitingApprovalDashlet.publishingTarget": "게시 대상",
	"awaitingApprovalDashlet.showUnpublished": "미공개 표시",
	"browseCMIS.cloningCMIS": "CMIS 자산 복제",
	"browseCMIS.cmis": "CMIS",
	"browseFilesDialog.emptyStateMessage": "`{path}` 경로가 존재하지 않습니다.",
	"browseFilesDialog.noResults": "파일을 찾을 수 없습니다.",
	"browseFilesDialog.uploadImage": "파일 선택",
	"browseSearchMessages.lookUpChildError": "검색에 대한 하위 양식 콜백을 조회할 수 없음: {searchId}",
	"browseSearchMessages.lookUpParentError": "검색을 위한 상위 컨텍스트를 조회할 수 없음: {searchId}",
	"bulkUploadConfirmDialogMessages.description": "여전히 대량 업로드가 진행 중입니다. 한 번에 하나의 일괄 업로드 만 실행할 수 있습니다.",
	"bulkUploadConfirmDialogMessages.title": "업로드 진행 중",
	"changeContentTypeDialog.emptyStateMessage": "콘텐츠 유형을 찾을 수 없습니다.",
	"changeContentTypeDialog.subtitle": "이 섹션에서 사용할 수 있는 시작 템플릿은 다음과 같습니다.",
	"changeContentTypeDialog.title": "콘텐츠 유형 선택",
	"checkboxGroupControl.datasource": "데이터 소스",
	"checkboxGroupControl.horizontal": "호라이즌",
	"checkboxGroupControl.listDirection": "목록 방향",
	"checkboxGroupControl.readonly": "읽기 전용",
	"checkboxGroupControl.showSelectAll": "\"모두 선택\"표시",
	"checkboxGroupControl.vertical": "수직선",
	"childContentDS.childContent": "아동 콘텐츠 (더 이상 사용되지 않음)",
	"clusterAdmin.clusterDeleted": "{cluster} 이(가) 삭제되었습니다.",
	"clusterGrid.authType": "인증 유형",
	"clusterGrid.confirmDeleteCluster": "이 클러스터를 삭제하시겠습니까?",
	"clusterGrid.deleteCluster": "클러스터 삭제",
	"clusterGrid.emptyStateMessage": "클러스터를 찾을 수 없습니다.",
	"clusterGrid.localAddress": "지역 주소",
	"clusterGrid.remoteName": "원격 이름",
	"clusterManagement.clusterDeleted": "클러스터가 성공적으로 삭제되었습니다.",
	"codeEditor.confirm": "닫기 확인",
	"codeEditor.contentModel": "콘텐츠 모델",
	"codeEditor.inProgressConfirmation": "다른 편집기가 현재 열려 있고 최소화되어 있습니다. 다른 편집기를 열기 전에 현재 편집기를 닫으십시오.",
	"codeEditor.insertCode": "코드를 입력하세요",
	"codeEditor.localesConfirmBody": "선택한 로케일에 대한 템플릿이 존재하지 않습니다. 지금 생성하시겠습니까?",
	"codeEditor.localesConfirmTitle": "템플릿 만들기",
	"codeEditor.localesHelperText": "템플릿을 생성/편집할 로캘을 선택합니다. 'en'과 같은 로케일은 'en_us' 또는 'en_uk'와 같은 하위 로케일을 포함합니다.",
	"codeEditor.localesSnackBarTitle": "템플릿이 생성되었습니다. 기본 템플릿을 복사하시겠습니까?",
	"codeEditor.pendingChangesConfirmation": "변경 사항을 저장하지 않고 닫으시겠습니까?",
	"codeEditor.saveAndClose": "저장 및 닫기",
	"codeEditor.saveAndMinimize": "저장 및 최소화",
	"codeEditor.saved": "저장 성공",
	"codeEditor.stay": "아니,있어",
	"codeEditor.title": "코드 편집기",
	"common.back": "뒤로",
	"common.clearSelectedWithCount": "선택한 {count} 지우기",
	"common.collapseAll": "모든 축소",
	"common.craftercms": "CrafterCMS",
	"common.developer": "개발자",
	"common.expandAll": "모두 확장",
	"common.license": "특허",
	"common.marketplace": "시장",
	"common.minimizedDialogSiteSwitchCheck": "사이트를 전환하기 전에 최소화된 대화 상자를 모두 닫으십시오.",
	"common.moreInfo": "더 많은 정보",
	"common.password": "암호",
	"common.privateKey": "개인 키",
	"common.publishingTarget": "게시 대상",
	"common.remoteName": "힘내 원격 이름",
	"common.toggleSidebarTooltip": "사이드바 전환",
	"common.token": "토큰",
	"common.use": "용도",
	"common.userName": "사용자 이름",
	"common.usernameAndPassword": "사용자 이름 및 비밀번호",
	"common.version": "번역",
	"common.website": "웹 사이트",
	"compareVersionsDialog.back.selectRevision": "버전 선택으로 돌아가기",
	"compareVersionsDialog.headerSubtitleCompare": "비교할 버전 선택",
	"compareVersionsDialog.headerSubtitleCompareTo": "\"{selectedA}\"과(와) 비교할 버전을 선택하십시오.",
	"compareVersionsDialog.headerTitle": "항목 버전 비교",
	"compareVersionsDialog.pleaseContentItem": "콘텐츠 아이템을 주세요",
	"componentsPanel.emptyComponentsSubtitle": "개발자와 통신하여 시스템에 필요한 구성 요소를 만듭니다.",
	"componentsPanel.emptyStateMessage": "구성 요소를 찾을 수 없습니다.",
	"componentsPanel.suspenseStateMessage": "페이지 모델 검색",
	"configurationMessages.localeError": "잘못된 로케일 구성: {message}. 브라우저 로케일 설정 사용. 사이트 구성 xml을 확인하십시오.",
	"configurationSamplePreviewDialog.appendContent": "현재 콘텐츠 뒤에 추가",
	"configurationSamplePreviewDialog.replaceContent": "현재 콘텐츠 바꾸기",
	"configurationSamplePreviewDialog.title": "샘플 파일",
	"configurationSamplePreviewDialog.useSampleContent": "샘플 컨텐츠 사용",
	"contentLocalization.mark": "번역 표시",
	"contentLocalization.title": "콘텐츠 현지화",
	"contentType.RTEConfiguration": "RTE 구성",
	"contentType.autoGrow": "자동 성장",
	"contentType.contentTypeWarningMessage": "어린이 콘텐츠 데이터 소스는 CrafterCMS에서 단계적으로 중단되었습니다. 여러 페이지 나 구성 요소간에 공유해야하는 구성 요소의 경우 공유 컨텐트를 대신 사용하십시오. 이 컨텐츠 객체에만 속하는 구성 요소의 경우 내장 컨텐츠를 사용하십시오.",
	"contentType.continueEditing": "계속 편집",
	"contentType.dependsOn": "이 속성은 \"{dependency}\"에 따라 다릅니다.",
	"contentType.enableSpellCheck": "맞춤법 검사 사용",
	"contentType.fileManager": "파일 관리자",
	"contentType.fileNameErrorMessage": "컨텐츠 유형에는 파일 이름이 필요합니다. 이 컨텐츠 유형 정의에 \"파일 이름\"또는 \"자동 파일 이름\"제어를 추가하십시오.",
	"contentType.flatTitleError": "필드 및 데이터 소스의 모든 제목을 작성하십시오.",
	"contentType.forceBRNewLines": "br 새 줄 강제",
	"contentType.forcePNewLines": "강제 p 태그 줄 바꿈",
	"contentType.forceRootBlockP": "루트 블록 차단 p 태그",
	"contentType.height": "신장",
	"contentType.idError": "변수 이름을 입력하십시오 :",
	"contentType.imageManager": "이미지 관리자",
	"contentType.internalNameErrorMessage": "이 컨텐츠 유형에는 내부 이름이 필요합니다. 이 컨텐츠 유형 정의에 \"내부 이름\"컨트롤을 추가하십시오.",
	"contentType.maxSizeError": "최대값은 최소값보다 낮을 수 없습니다.",
	"contentType.minSizeError": "최소값은 최대값보다 클 수 없습니다.",
	"contentType.noTemplateAssoc": "이 컨텐츠 유형과 연관된 템플리트가 없습니다. 저장을 클릭하여 저장 조작을 진행하거나 계속을 클릭하여 컨텐츠 유형 (기본 컨텐츠 유형 특성 아래)을 템플리트로 업데이트하십시오.",
	"contentType.notice": "주의",
	"contentType.saveFailed": "저장 실패",
	"contentType.supportedChannels": "지원되는 채널",
	"contentType.useChildContent": "더 이상 사용되지 않는 컨트롤 사용",
	"contentType.useEmbeddedContent": "임베디드 컨텐츠 사용",
	"contentType.useSharedContent": "공유 컨텐츠 사용",
	"contentType.videoManager": "비디오 매니저",
	"contentType.width": "폭",
	"contextMenu.emptyOptionsMessage": "표시할 수 있는 옵션이 없습니다.",
	"controlsCommonMessages.escapeContent": "탈출 콘텐츠",
	"copyItems.cancel": "취소",
	"copyItems.copy": "부",
	"copyItems.deselectAll": "모두 선택 해제",
	"copyItems.selectAll": "모두 선택",
	"copyTokenDialog.helperText": "토큰이 성공적으로 생성되었습니다. 토큰의 가치를 다시 볼 수 없으므로 토큰을 복사하여 안전하게 보관하십시오.",
	"copyTokenDialog.title": "생성된 액세스 토큰",
	"craftercms.pages.option.noLocales": "프로젝트에 선언된 로케일이 없습니다.",
	"craftercms.pages.option.terminateSelection": "선택 종료",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count}개 항목 선택됨} other {선택된 항목 {count}개}}",
	"craftercms.pages.widget.title": "페이지",
	"createFileDialog.controller": "새 컨트롤러",
	"createFileDialog.createPolicy": "제공된 이름은 프로젝트 정책에 위배됩니다. 제안된 수정 이름은 \"{name}\"입니다. 제안된 이름을 사용하시겠습니까?",
	"createFileDialog.fileAlreadyExists": "해당 이름의 파일이 이미 있습니다.",
	"createFileDialog.fileName": "파일 이름",
	"createFileDialog.fileNameRequired": "파일 이름은 필수 항목입니다.",
	"createFileDialog.helperText": "문자, 숫자, 점(.), 대시(-) 및 밑줄(_)로 구성됩니다.",
	"createFileDialog.placeholder": "이름을 입력하세요",
	"createFileDialog.policyError": "제공된 이름은 프로젝트 정책에 위배됩니다.",
	"createFileDialog.template": "새 템플릿",
	"createFolder.createPolicy": "제공된 이름은 프로젝트 정책에 위배됩니다. 제안된 수정 이름은 \"{name}\"입니다. 제안된 이름을 사용하시겠습니까?",
	"createFolder.placeholder": "폴더 이름을 입력하세요",
	"createFolder.policyError": "제공된 이름은 프로젝트 정책에 위배됩니다.",
	"createSiteDialog.additionalOptions": "추가 옵션",
	"createSiteDialog.authentication": "입증",
	"createSiteDialog.authenticationNoRequired": "인증 불필요 (공개 URL)",
	"createSiteDialog.blueprintParameters": "블루 프린트 파라미터",
	"createSiteDialog.blueprintStrategy": "청사진에서 작성",
	"createSiteDialog.branch": "힘내 지점",
	"createSiteDialog.cantStart": "사이트 이름은 0, 대시 (-) 또는 밑줄 (_)로 시작할 수 없습니다.",
	"createSiteDialog.changeQuery": "검색어를 변경하거나 전체 카탈로그를 찾아보십시오.",
	"createSiteDialog.chooseCreationStrategy": "제작 전략 선택 : 기존 Git 리포지토리에서 시작하거나 가장 적합한 청사진을 기반으로 생성하십시오.",
	"createSiteDialog.clone_remoteBranch_label": "프로젝트는 리포지토리의 해당 분기를 복제하여 생성됩니다. 나중에 분기 간에 전환할 수도 있습니다.",
	"createSiteDialog.clone_remoteName_label": "가져올 소스 저장소를 참조 할 리모콘의 이름을 지정하십시오. 일반적으로 \"업스트림\"또는 \"원산지\"라고합니다.",
	"createSiteDialog.clone_url_label": "복제 할 자식 저장소 URL입니다.",
	"createSiteDialog.createAsOrphan": "원격 저장소에서 고아로 프로젝트 생성(git history 없음)",
	"createSiteDialog.createAsOrphanHelpText": "프로젝트를 고아로 생성하면 소스 git 저장소에서 프로젝트가 분리되고 모든 기록이 제거됩니다.",
	"createSiteDialog.createInBackground": "백그라운드에서 생성",
	"createSiteDialog.createSite": "프로젝트 생성",
	"createSiteDialog.creatingSite": "프로젝트 생성",
	"createSiteDialog.creationStrategy": "창조 전략",
	"createSiteDialog.description": "기술",
	"createSiteDialog.descriptionMaxLength": "최대 길이 : {maxLength} 자",
	"createSiteDialog.dialogCloseMessage": "양식에 입력 한 데이터는 닫을 때 손실됩니다.",
	"createSiteDialog.dialogCloseTitle": "닫기 확인",
	"createSiteDialog.finish": "끝",
	"createSiteDialog.gitBlueprintDescription": "기존 원격 git 리포지토리에서 CrafterCMS 프로젝트를 기반으로 새 프로젝트를 만듭니다.",
	"createSiteDialog.gitBlueprintName": "원격 Git 리포지토리",
	"createSiteDialog.gitBranch": "힘내 지점",
	"createSiteDialog.gitBranchDescription": "이 프로젝트가 추적할 브랜치의 이름입니다. pull 작업은 이 분기에 대해 수행됩니다.",
	"createSiteDialog.gitStrategy": "기존 원격 git repo clone",
	"createSiteDialog.idExist": "아이디가 이미 존재합니다.",
	"createSiteDialog.nameAndDescription": "사이트 이름 및 설명",
	"createSiteDialog.nameExist": "이름이 이미 존재합니다.",
	"createSiteDialog.noBlueprints": "청사진이없는 곳",
	"createSiteDialog.noDescription": "설명이 제공되지 않았습니다",
	"createSiteDialog.pleaseWait": "프로젝트가 생성되는 동안 잠시 기다려 주십시오.",
	"createSiteDialog.plugin": "청사진",
	"createSiteDialog.privateBlueprints": "개인 청사진",
	"createSiteDialog.privateKey": "개인 키",
	"createSiteDialog.publicMarketplace": "공공 시장",
	"createSiteDialog.remoteBranch": "힘내 지점",
	"createSiteDialog.remoteName": "힘내 원격 이름",
	"createSiteDialog.remoteURL": "힘내 레포 URL",
	"createSiteDialog.repoUrl": "힘내 레포 URL",
	"createSiteDialog.required": "{name} 이 필요합니다.",
	"createSiteDialog.review": "리뷰",
	"createSiteDialog.reviewSite": "설정 요약 검토 및 프로젝트 생성",
	"createSiteDialog.sandboxBranch": "샌드 박스 브랜치",
	"createSiteDialog.showIncompatible": "호환되지 않는 플러그인 표시",
	"createSiteDialog.siteFormat": "최대 길이 : 50 자, 구성 : 소문자, 숫자 및 대시 (-)",
	"createSiteDialog.siteId": "사이트 ID",
	"createSiteDialog.siteInfo": "사이트 정보",
	"createSiteDialog.siteName": "사이트 이름",
	"createSiteDialog.token": "토큰",
	"createSiteDialog.useDefaultValue": "기본값을 사용하십시오",
	"createSiteDialog.userNameAndPassword": "사용자 이름 및 비밀번호",
	"createTokenDialog.expiresHelperNeverText": "만료되지 않도록 끄십시오.",
	"createTokenDialog.expiresHelperText": "만료를 설정하려면 켜십시오.",
	"createTokenDialog.expiresLabel": "만료 토큰",
	"createTokenDialog.helperText": "새 토큰의 이름을 입력합니다. 토큰은 서버에서 생성하고 나중에 표시됩니다. 그 가치를 다시는 볼 수 없으므로 안전하게 보관하십시오.",
	"createTokenDialog.title": "액세스 토큰 생성",
	"createUserDialog.emailRequired": "이메일이 필요합니다.",
	"createUserDialog.firstName": "이름",
	"createUserDialog.firstNameRequired": "이름이 필요합니다.",
	"createUserDialog.invalidEmail": "이메일이 잘못되었습니다.",
	"createUserDialog.lastName": "성",
	"createUserDialog.lastNameRequired": "성은 필수입니다.",
	"createUserDialog.passwordInvalid": "비밀번호가 잘못되었습니다.",
	"createUserDialog.passwordMatch": "이전 비밀번호와 일치해야 합니다.",
	"createUserDialog.passwordRequired": "암호는 필수 항목입니다.",
	"createUserDialog.passwordVerification": "비밀번호 확인",
	"createUserDialog.usernameRequired": "사용자 이름이 필요합니다.",
	"dashboardItemsApproval.item": "목",
	"dashboardItemsApproval.lastEdited": "마지막으로 수정됨",
	"dashboardItemsApproval.lastEditedBy": "패키지 ID",
	"dashboardItemsApproval.publishingTarget": "게시 대상",
	"dashboardItemsScheduled.item": "목",
	"dashboardItemsScheduled.lastEdited": "마지막으로 수정됨",
	"dashboardItemsScheduled.packageId": "패키지 ID",
	"dashboardItemsScheduled.publishingTarget": "게시 대상",
	"datasourceActionList.imageFromDesktopLabel": "데스크탑에서 이미지 업로드",
	"datasourceActionList.imageFromRepoLabel": "저장소의 이미지",
	"datasourceActionList.videoFromDesktopLabel": "데스크탑에서 비디오 업로드",
	"datasourceActionList.videoFromRepoLabel": "저장소의 비디오",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "잘못된 날짜.",
	"datetimepicker.datePlaceholder": "날짜",
	"datetimepicker.timeInvalidMessage": "잘못된 시간입니다.",
	"datetimepicker.timePlaceholder": "시각",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "콘텐츠 유형을 삭제하는 동안 오류가 발생했습니다.",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "콘텐츠 유형이 성공적으로 삭제되었습니다.",
	"deleteContentTypeDialog.headerSubtitle": "\"{name}\"의 삭제를 확인하십시오.",
	"deleteContentTypeDialog.headerTitle": "콘텐츠 유형 삭제",
	"deleteContentTypeDialog.noUsagesFound": "사용처를 찾을 수 없습니다",
	"deleteContentTypeDialog.reviewDependenciesMessage": "삭제될 모든 콘텐츠 유형 종속성을 검토하고 확인하십시오.",
	"deleteContentTypeDialog.safeToDelete": "콘텐츠 유형은 안전하게 삭제할 수 있습니다.",
	"deleteContentTypeDialog.submitButton": "지우다",
	"deleteContentTypeDialog.typeConfirmPassword": "\"<b>{password}</b>\"라는 단어를 입력하여 \"{name}\" 및 모든 종속 항목의 삭제를 확인합니다.",
	"deleteDialog.brokenItems": " 참조가 깨질 것입니다",
	"deleteDialog.childItemsText": "아동 용품",
	"deleteDialog.confirmDeletion": "삭제된 항목이 즉시 게시됨을 이해합니다.",
	"deleteDialog.deleteItems": "항목 삭제",
	"deleteDialog.dependentItems": "종속 품목",
	"deleteDialog.emptyChildItems": "하위 항목 없음",
	"deleteDialog.emptyDependentItems": "종속 항목 없음",
	"deleteDialog.maxCharacters": "최대 {maxLength} 자",
	"deleteDialog.submissionCommentFieldError": "제출 의견을 작성하십시오.",
	"deleteDialog.submissionCommentLabel": "제출 코멘트",
	"deleteDialog.subtitle": "선택한 항목은 하위 항목과 함께 삭제됩니다. 종속 항목은 링크 참조가 끊어지게 되므로 삭제하기 전에 검토하십시오.",
	"deleteDialog.title": "지우다",
	"deleteDialog.willGetDeleted": " 삭제됩니다",
	"dependenciesDialog.allDeps": "모든 종속성 표시",
	"dependenciesDialog.assets": "자산만",
	"dependenciesDialog.code": "코드만",
	"dependenciesDialog.contentItems": "콘텐츠 항목만",
	"dependenciesDialog.dependencies": "종속성",
	"dependenciesDialog.dependsOn": "선택한 항목에 의존하는 항목",
	"dependenciesDialog.dependsOnMe": "선택한 항목의 종속성",
	"dependenciesDialog.edit": "편집하다",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} 에는 종속성이 없습니다.",
	"dependenciesDialog.emptyDependenciesMessage": " {itemName}에 의존하지 않음",
	"dependenciesDialog.history": "역사",
	"dependenciesDialog.title": "콘텐츠 항목 종속성",
	"dialog.pendingChangesConfirmation": "변경 사항을 저장하지 않고 닫으시겠습니까?",
	"dialogHeader.toggleFullScreen": "전체 화면 전환",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "드롭 존은이 유형의 구성 요소를 지원하지 않습니다. 콘텐츠 모델을 확인하십시오.",
	"dragAndDropMessages.contentTypeNotFound": "템플릿에서 콘텐츠 유형 ID를 찾을 수 없습니다. 드래그 앤 드롭이 손상됩니다. docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html에 자세한 정보가 있습니다.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "포함 된 놓기 영역 구성 요소에서 구성 요소를 삭제하는 것은 아직 지원되지 않습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "아직 지원되지 않는 내장 구성 요소를 끌어다 놓습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "이 릴리스에서는 포함 된 구성 요소를 현재 상위 내에서만 끌 수 있습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "임베디드 드롭 존 구성 요소에서 구성 요소를 이동하는 것은 아직 지원되지 않습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.objectIdNotFound": "개체 ID가 없습니다. 드래그 앤 드롭이 손상됩니다. docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html에 자세한 정보가 있습니다.",
	"dragAndDropMessages.pathNotFound": "경로가 없습니다. 드래그 앤 드롭이 손상됩니다. docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html에 자세한 정보가 있습니다.",
	"dropTargetsMessages.allowEmbedded": "포함 허용",
	"dropTargetsMessages.allowShared": "공유 허용",
	"dropTargetsMessages.baseBrowsePath": "기본 찾아보기 경로",
	"dropTargetsMessages.baseRepositoryPath": "기본 저장소 경로",
	"dropTargetsMessages.browseExisting": "기존 찾아보기",
	"dropTargetsMessages.contentTypes": "콘텐츠 유형",
	"dropTargetsMessages.createNewEmbedded": "새 삽입 만들기",
	"dropTargetsMessages.createNewShared": "새 공유 만들기",
	"dropTargetsMessages.dropTargets": "놓기 대상",
	"dropTargetsMessages.enableBrowse": "찾아보기 활성화",
	"dropTargetsMessages.enableSearch": "검색 활성화",
	"dropTargetsMessages.searchExisting": "기존 구성 요소 검색",
	"dropTargetsMessages.tags": "태그",
	"editGroupDialog.close": "닫기",
	"editGroupDialog.deleteGroup": "그룹 삭제",
	"editGroupDialog.editGroupMembers": "그룹 구성원 편집",
	"editGroupDialog.groupDetails": "그룹 세부 정보",
	"editGroupDialog.groupMemberHelperText": "그룹 구성원은 생성 후 편집 가능",
	"editGroupDialog.helperText": "\"{name}\" 그룹을 삭제하시겠습니까?",
	"editGroupDialog.requiredGroupName": "그룹 이름은 필수 항목입니다.",
	"editModesSwitcher.editModeTooltip": "편집 모드(e)",
	"editModesSwitcher.moveModeTooltip": "이동 모드(m)",
	"editModesSwitcher.offButtonTooltip": "편집 끄기({shortcutKey})",
	"editSiteDialog.cancel": "취소",
	"editSiteDialog.notEditable": "사이트 ID는 수정할 수 없습니다.",
	"editSiteDialog.siteDescription": "사이트 설명",
	"editSiteDialog.siteId": "사이트 ID",
	"editSiteDialog.siteName": "사이트 이름",
	"editSiteDialog.siteNameRequired": "사이트 이름은 필수 항목입니다.",
	"editSiteDialog.sitenameExists": "이름이 이미 존재합니다.",
	"editSiteDialog.title": "사이트 수정",
	"embeddedContentDS.embeddedContent": "임베디드 컨텐츠",
	"embeddedLegacyFormMessages.openContentFormFailedError": "콘텐츠 양식을 여는 동안 오류가 발생했습니다. 잠시 후 다시 시도해 주세요. 오류가 지속되면 관리자에게 문의하십시오.",
	"emptyUiConfigMessageTitle.subtitle": "여기에 표시되도록 설정된 것이 없습니다.",
	"emptyUiConfigMessageTitle.title": "구성이 비어 있습니다.",
	"encryptTool.buttonText": "텍스트 암호화",
	"encryptTool.clearResultButtonText": "명확한",
	"encryptTool.errorMessage": "텍스트 암호화에 실패했습니다. 잠시 후 다시 시도하십시오.",
	"encryptTool.inputLabel": "원시 텍스트",
	"encryptTool.pageTitle": "암호화 도구",
	"encryptTool.successMessage": "암호화 된 텍스트가 클립 보드에 복사되었습니다.",
	"fileNameControl.urlChangeWarning": "이 값을 변경하면 참조 및 링크가 손상 될 수 있습니다.",
	"fileUpload.chooseFile": "파일을 선택",
	"fileUpload.createPolicy": "업로드 파일 이름이 프로젝트 정책에 위배됩니다. 제안된 수정된 파일 이름은 \"{name}\"입니다. 제안된 이름을 사용하시겠습니까?",
	"fileUpload.policyError": "업로드 파일 이름이 프로젝트 가이드라인을 위반합니다.",
	"fileUpload.selectFileMessage": "업로드 할 파일을 선택하십시오",
	"fileUpload.uploadedFile": "업로드 된 파일",
	"fileUpload.uploadingFile": "파일 업로드",
	"fileUpload.validatingFile": "파일 유효성 검사",
	"filter.noResults": "검색어와 일치하는 결과가 없습니다",
	"folder.created": "폴더가 성공적으로 생성되었습니다.",
	"folderBrowserTreeView.invalidPath": "입력한 경로가 존재하지 않습니다.",
	"formEngine.createPolicy": "{originalPath} 경로는 프로젝트 정책에 위배됩니다. 제안된 수정 경로는 \"{path}\"입니다. 제안된 경로를 사용하시겠습니까?",
	"formEngine.formNotReadyForSaving": "양식을 저장할 준비가 되지 않았습니다. 잠시 후 다시 시도하거나 취소 버튼을 사용하십시오.",
	"formEngine.inProgressConfirmation": "다른 양식이 현재 열려 있고 최소화되어 있습니다. 다른 양식을 열기 전에 현재 양식을 닫으십시오",
	"formEngine.policyError": "{path} 경로는 프로젝트 정책에 위배됩니다.",
	"formEngine.save": "임시 보관함에 저장",
	"formEngine.saveAndClose": "저장 및 닫기",
	"formEngine.saveAndMinimize": "저장 및 최소화",
	"formEngine.saveAndPreview": "저장 및 미리보기",
	"formEngine.saveDraftCompleted": "초안 저장 완료",
	"formEngine.useMVS": "_mvs 접미사 사용(이전 버전과의 호환성)",
	"gitAuthForm.privateKey": "개인 키",
	"gitForm.noAuthenticationRequired": "인증 불필요 (공개 URL)",
	"gitForm.privateKey": "개인 키",
	"gitForm.required": " {name} 이 필요합니다.",
	"gitForm.token": "토큰",
	"gitForm.usernameAndPassword": "사용자 이름 및 비밀번호",
	"global.about": "약",
	"globalApp.routeNotFound": "경로를 찾을 수 없음",
	"globalAppToolbar.toggleSidebar": "사이드바 전환",
	"globalConfig.configSaved": "구성이 성공적으로 저장되었습니다.",
	"globalConfig.confirmHelper": "저장하지 않은 변경사항을 삭제하시겠습니까?",
	"globalConfig.documentError": "문서에 오류가 있습니다. 편집기 측면에서 오류 마커를 확인합니다.",
	"globalConfig.unsavedConfirmation": "저장하지 않은 변경 사항이 있습니다. 종료 하시겠습니까?",
	"globalConfig.unsavedConfirmationTitle": "저장되지 않은 변경 사항",
	"globalConfig.viewSample": "샘플보기",
	"globalConfigManagement.pendingChanges": "저장되지 않은 변경 사항이 있습니다. 변경 사항을 취소?",
	"globalMenu.closeMenu": "메뉴 닫기",
	"globalMenu.encryptionTool": "암호화 도구",
	"globalMenu.globalConfigEntryLabel": "글로벌 구성",
	"globalMenu.logConsoleEntryLabel": "로그 콘솔",
	"globalMenu.loggingLevelsEntryLabel": "로깅 수준",
	"globalMenu.mySites": "내 사이트",
	"globalMenu.noSitesMessage": "표시할 사이트가 없습니다.",
	"globalMenu.pluginManagementEntryLabel": "플러그인 관리",
	"globalMenu.recover": "비밀번호 복구",
	"globalMenu.settings": "계정 관리",
	"globalMenu.tokenManagement": "토큰 관리",
	"groupEditDialog.createGroup": "그룹 만들기",
	"groupEditDialog.editGroup": "그룹 편집",
	"groupEditDialog.groupCreated": "그룹이 생성되었습니다.",
	"groupEditDialog.groupDeleted": "그룹이 성공적으로 삭제되었습니다.",
	"groupEditDialog.groupEdited": "그룹이 수정되었습니다.",
	"groupEditDialog.membersAdded": "사용자가 성공적으로 추가되었습니다.",
	"groupEditDialog.membersRemoved": "사용자가 성공적으로 제거되었습니다.",
	"groupsAdmin.displayName": "이름 표시하기",
	"groupsAdmin.groupCreated": "{group} 이(가) 생성되었습니다.",
	"groupsAdmin.groupDeleted": "{group} 이(가) 삭제되었습니다.",
	"groupsAdmin.groupEdited": "{group} 이(가) 수정되었습니다.",
	"groupsAdmin.maxLengthError": "{field} 은 {size} 자보다 길 수 없습니다",
	"groupsAdmin.usereRemoved": "{username} 이(가) {group}에서 성공적으로 제거되었습니다.",
	"groupsAdmin.usersAdded": "사용자가 성공적으로 추가되었습니다.",
	"groupsGrid.emptyStateMessage": "그룹을 찾을 수 없습니다.",
	guestDetectionMessage: guestDetectionMessage$3,
	"historyDialog.back.selectRevision": "기록 목록으로 돌아가기",
	"historyDialog.confirmRevertBody": " {versionTitle}(으)로 되돌리시겠습니까?",
	"historyDialog.confirmRevertTitle": "확인 되돌리기",
	"historyDialog.current": "흐름",
	"historyDialog.headerTitle": "아이템 내역",
	"historyDialog.options.compareTo": "에 비교...",
	"historyDialog.options.compareToCurrent": "현재와 비교",
	"historyDialog.options.compareToPrevious": "이전과 비교",
	"historyDialog.options.revertToPrevious": " <b>이전</b>(으)로 되돌리기",
	"historyDialog.options.revertToThisVersion": "이 버전</b>을(를) <b>(으)로 되돌리기",
	"icePanel.itemLockedWarning": "항목이 잠겨 있어 일부 기능이 비활성화될 수 있습니다.",
	"icePanel.noWidgetsMessage": "도구가 구성되지 않았습니다.",
	"iconGuide.css": "CSS",
	"iconGuide.freemarker": "프리마커 템플릿",
	"iconGuide.groovy": "그루비 스크립트",
	"iconGuide.html": "HTML",
	"iconGuide.itemTypes": "품목 유형",
	"iconGuide.javascript": "자바스크립트",
	"iconGuide.json": "제이슨",
	"iconGuide.levelDescriptor": "섹션 기본값",
	"iconGuide.plainText": "일반 텍스트",
	"iconGuide.publishingStatusTarget": "출판 현황/대상",
	"iconGuide.title": "아이콘 가이드",
	"iconGuide.workflowStates": "워크플로 상태",
	"iconGuide.xml": "XML",
	"internalNameControl.displaySize": "디스플레이 크기",
	"internalNameControl.label": "내부 이름",
	"internalNameControl.maxLength": "최대 길이",
	"item.contentTypeChanged": "항목 유형이 성공적으로 변경되었습니다.",
	"item.controllerNotFound": "컨트롤러를 찾을 수 없습니다.",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "항목이 성공적으로 생성되었습니다.",
	"item.cut": "항목 절단 성공",
	"item.delete": " {count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "항목이 성공적으로 복제되었습니다.",
	"item.edited": "항목이 성공적으로 업데이트되었습니다.",
	"item.itemPasteToChildNotAllowed": "잘라내기를 위해 하위 항목에 붙여넣기가 허용되지 않습니다.",
	"item.pasted": "항목을 성공적으로 붙여넣었습니다.",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {선택한 항목은 {environment}로 이동하도록 예약되었습니다.} other {선택한 항목은 {environment}로 이동하도록 예약되었습니다.}}",
	"item.reverted": "항목을 성공적으로 되돌렸습니다.",
	"item.savedAsDraft": "항목 초안이 저장되었습니다.",
	"item.schedulePublished": "{count, plural, one {선택한 항목은 {environment}로 이동하도록 예약되었습니다.} other {선택한 항목은 {environment}로 이동하도록 예약되었습니다.}}",
	"item.templateNotFound": "템플릿을 찾을 수 없습니다.",
	"item.unlocked": "항목 잠금 해제 성공",
	"itemActions.changeContentType": "변경 유형",
	"itemActions.contentTypeDialogBody": "다음 작업을 수행하면 데이터가 손실될 수 있습니다. 계속하시겠습니까?",
	"itemActions.contentTypeDialogTitle": "경고: 콘텐츠 유형 변경",
	"itemActions.copyDialogSubtitle": "일괄 복사할 하위 페이지를 선택하십시오. 붙여넣을 때 선택한 모든 하위 페이지와 해당 위치 계층이 유지됩니다.",
	"itemActions.copyDialogTitle": "부",
	"itemActions.copyWithChildren": "아이들과 함께 복사",
	"itemActions.createController": "새 컨트롤러",
	"itemActions.createFolder": "새 폴더",
	"itemActions.createTemplate": "새 템플릿",
	"itemActions.deleteController": "컨트롤러 삭제",
	"itemActions.deleteTemplate": "템플릿 삭제",
	"itemActions.duplicateDialogBody": "이 항목과 모든 항목별 콘텐츠의 새 사본이 생성됩니다. 계속하시겠습니까?",
	"itemActions.editController": "컨트롤러 편집",
	"itemActions.editTemplate": "템플릿 편집",
	"itemActions.newContent": "새로운 콘텐츠",
	"itemActions.requestPublish": "게시 요청",
	"itemActions.unableToVerifyWorkflows": "영향을 받는 워크플로를 확인할 수 없습니다. 잠시 후 다시 시도해 주세요.",
	"itemActions.verifyingAffectedWorkflows": "영향을 받는 워크플로 확인 중...",
	"itemActions.viewForm": "양식 보기",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemPublishingDate.scheduled": " {date}에 예정",
	"itemPublishingDate.scheduledForAsap": "최대한 빨리 예정",
	"itemPublishingDate.submitted": " {date}에 제출됨",
	"itemPublishingDate.submittedForAsap": "최대한 빨리 제출",
	"itemState.deleted": "삭제 된",
	"itemState.disabled": "장애인",
	"itemState.locked": "잠김",
	"itemState.lockedBy": " {user}에 의해 잠김",
	"itemState.modified": "수정됨",
	"itemState.new": "새로운",
	"itemState.notInWorkflow": "워크플로에 없음",
	"itemState.publishing": "출판",
	"itemState.scheduled": "예정",
	"itemState.scheduledToGoLive": "라이브 예정",
	"itemState.scheduledToStaging": "스테이징 예정",
	"itemState.submitted": "제출",
	"itemState.submittedToLive": "라이브에 제출됨",
	"itemState.submittedToStaging": "스테이징에 제출됨",
	"itemState.systemProcessing": "시스템 처리",
	"itemStates.anyState": "모든 상태",
	"itemStates.clearFilters": "필터 지우기",
	"itemStates.emptyStateMessage": "검색 결과가 없습니다",
	"itemStates.invalidPathRegexHelperText": "정규식이 잘못되었습니다.",
	"itemStates.lockedBy": "작성자: {owner}",
	"itemStates.pathRegex": "경로(정규식)",
	"itemStates.pathRegexHelperText": "경로 일치 정규식 사용",
	"itemStates.selectedAll": "페이지에서 항목 {count} 개 선택",
	"itemStates.showItemsIn": "항목 표시",
	"keyboardShortcutsDialog.title": "키보드 단축키",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Project <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "탐색 메뉴",
	"launcherOpenerButton.openMenuButtonText": "메뉴 열기",
	"launcherOpenerButton.signOut": "로그 아웃",
	"legacyComponentsPanel.addComponent": "구성 요소 추가",
	"legacyFormDialog.errorLoadingForm": "양식을 로드하는 동안 오류가 발생했습니다.",
	"legacyFormDialog.loadingForm": "로드 중 ...",
	"legacyFormDialog.title": "콘텐츠 양식",
	"localeSelectorControl.label": "로케일 선택기",
	"localeSelectorControl.requiredError": "필드는 필수입니다",
	"logConsoleDetailsDialog.title": "로그 세부 정보",
	"logConsoleManagement.noLogs": "로그를 찾을 수 없습니다.",
	"loggingLevels.avoidDisplayingAllEntriesLabel": "대신 필터링해 보세요.",
	"loggingLevels.changeLevelTo": "현재 레벨",
	"loggingLevels.currentLevel": "현재 레벨",
	"loggingLevels.displayAllEntriesButtonLabel": "항목 {remaining} 개 더 표시",
	"loggingLevels.levelFilterLabel": "레벨 필터",
	"loggingLevels.levelFilterSelectEmptyLabel": "모든 레벨",
	"loggingLevels.loggersFilterLabel": "로거 필터",
	"loggingLevelsManagement.levelChangedSuccessMessage": "로깅 수준이 성공적으로 변경되었습니다.",
	"loginView.dialogTitleText": "CrafterCMS에 로그인",
	"loginView.forgotPasswordButtonLabel": "비밀번호를 잊어 버렸습니까?",
	"loginView.incorrectCredentialsMessage": "사용자 이름 또는 비밀번호가 잘못되었습니다. 다시 시도하십시오.",
	"loginView.loginButtonLabel": "로그인",
	"loginView.recoverYourPasswordBackButtonLabel": "뒤로",
	"loginView.recoverYourPasswordIntroText": "사용자 이름이 존재하면 재설정 링크가 포함 된 이메일이 발송됩니다.",
	"loginView.recoverYourPasswordSuccessMessage": "\"{username}\"이 있으면 복구 이메일이 전송되었습니다.",
	"loginView.resetYourPasswordIntroText": "새 비밀번호를 입력하십시오",
	"loginView.usernameTextFieldLabel": "사용자 이름",
	"media.card.itemLastEdition": "수정됨 {time}",
	"media.card.title": "옵션",
	"mimeTypes.application/gzip": "GZip Compressed Archive",
	"mimeTypes.application/javascript": "Typescript (tsx)",
	"mimeTypes.application/msword": "Microsoft Word",
	"mimeTypes.application/pdf": "Adobe Portable Document Format (PDF)",
	"mimeTypes.application/vnd.ms-excel": "Microsoft Excel",
	"mimeTypes.application/vnd.ms-fontobject": "MS Embedded OpenType fonts",
	"mimeTypes.application/vnd.ms-powerpoint": "Microsoft Power Point",
	"mimeTypes.application/vnd.oasis.opendocument.presentation": "OpenDocument presentation document",
	"mimeTypes.application/vnd.oasis.opendocument.spreadsheet": "OpenDocument spreadsheet document",
	"mimeTypes.application/vnd.oasis.opendocument.text": "OpenDocument text document",
	"mimeTypes.application/vnd.openxmlformats-officedocument.presentationml.presentation": "Microsoft Power Point (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Microsoft Excel (OpenXML)",
	"mimeTypes.application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Microsoft Word (Open XML)",
	"mimeTypes.application/vnd.rar": "RAR archive",
	"mimeTypes.application/x-7z-compressed": "7-zip archive",
	"mimeTypes.application/x-bzip": "BZip archive",
	"mimeTypes.application/x-bzip2": "BZip2 archive",
	"mimeTypes.application/x-tar": "Tape Archive (TAR)",
	"mimeTypes.application/xml": "XML",
	"mimeTypes.application/zip": "ZIP archive",
	"mimeTypes.audio/aac": "AAC audio",
	"mimeTypes.audio/midi audio/x-midi": "Musical Instrument Digital Interface (MIDI)",
	"mimeTypes.audio/mpeg": "MP3 audio",
	"mimeTypes.audio/wav": "Waveform Audio Format",
	"mimeTypes.font/otf": "OpenType font",
	"mimeTypes.font/ttf": "TrueType Font",
	"mimeTypes.font/woff": "Web Open Font Format (WOFF)",
	"mimeTypes.font/woff2": "Web Open Font Format (WOFF)",
	"mimeTypes.image/gif": "GIF images",
	"mimeTypes.image/jpeg": "JPEG images",
	"mimeTypes.image/png": "PNG images",
	"mimeTypes.image/svg+xml": "SVG images",
	"mimeTypes.image/vnd.microsoft.icon": "Icon format",
	"mimeTypes.image/webp": "WEBP image",
	"mimeTypes.text/css": "CSS stylesheet",
	"mimeTypes.text/html": "HyperText Markup Language (HTML)",
	"mimeTypes.text/javascript": "JavaScript",
	"mimeTypes.text/plain": "Text",
	"mimeTypes.text/texmacs": "Typescript (ts)",
	"mimeTypes.text/x-freemarker": "Freemarker",
	"mimeTypes.text/x-groovy": "Groovy",
	"mimeTypes.text/x-sass": "SASS stylesheet",
	"mimeTypes.text/x-scss": "SCSS stylesheet",
	"mimeTypes.video/mp4": "MP4 video",
	"mimeTypes.video/mpeg": "MPEG Video",
	"mimeTypes.video/x-msvideo": "AVI: Audio Video Interleave",
	"multiChoiceSaveButton.saveAndClose": "저장 및 닫기",
	"multiChoiceSaveButton.saveAndMinimize": "저장 및 최소화",
	"newContentDialog.contentTypeAllLabel": "모든 유형 표시",
	"newContentDialog.contentTypeComponentLabel": "구성 요소만",
	"newContentDialog.contentTypePageLabel": "페이지만",
	"newContentDialog.emptyStateMessage": "콘텐츠 유형을 찾을 수 없습니다.",
	"newContentDialog.subtitle": "새 콘텐츠 항목에 대한 콘텐츠 유형 템플릿을 선택합니다.",
	"newContentDialog.title": "콘텐츠 만들기",
	"newFolder.folderAlreadyExists": "같은 이름의 폴더가 이미 있습니다.",
	"newFolder.folderName": "폴더 이름",
	"newFolder.helperText": "문자, 숫자, 대시(-) 및 밑줄(_)로 구성됩니다.",
	"newFolder.rename": "새 폴더 이름 제공",
	"newFolder.required": "폴더 이름은 필수 항목입니다.",
	"newFolder.title": "새 폴더 만들기",
	"newFolder.title.rename": "폴더 이름 바꾸기",
	"noUiConfigMessageTitle.subtitle": "여기에 콘텐츠를 표시하려면 프로젝트에 `ui.xml`을 추가하고 구성하세요.",
	"noUiConfigMessageTitle.title": "구성 파일 누락",
	"numericInputControl.childContent": "최저한의",
	"numericInputControl.maximun": "최고",
	"numericInputControl.noDecimalsErrMessage": "이 입력에는 소수를 사용할 수 없습니다.",
	"openToolsPanel.label": "도구 패널 열기",
	"operations.addMembers": "회원 추가",
	"operations.addRemote": "리모컨 추가",
	"operations.approveScheduled": "예약 승인",
	"operations.assetUploadFailed": "자산 업로드에 실패했습니다.",
	"operations.assetUploadStarted": "자산 업로드가 시작되었습니다.",
	"operations.cancelPublishingPackage": "패키지 게시 취소",
	"operations.deleteOperationComplete": "삭제 작업이 완료되었습니다.",
	"operations.deleteOperationFailed": "삭제 작업이 실패했습니다.",
	"operations.duplicateItemOperationComplete": "항목이 성공적으로 복제되었습니다.",
	"operations.duplicateItemOperationFailed": "항목 복제에 실패했습니다.",
	"operations.initialPublish": "초기 게시",
	"operations.insertItemOperationComplete": "항목이 성공적으로 생성되었습니다.",
	"operations.insertItemOperationFailed": "아이템 생성에 실패했습니다.",
	"operations.insertOperationComplete": "구성요소 삽입 작업이 완료되었습니다.",
	"operations.insertOperationFailed": "구성요소 삽입 작업이 실패했습니다.",
	"operations.loginFailed": "로그인 실패",
	"operations.moveOperationComplete": "이동 작업 완료",
	"operations.moveOperationFailed": "이동 작업이 실패했습니다.",
	"operations.pullFromRemote": "원격에서 당겨",
	"operations.pushToRemote": "원격으로 푸시",
	"operations.removeClusterNode": "클러스터 노드 제거",
	"operations.removeMembers": "구성원 제거",
	"operations.removeRemote": "리모컨 제거",
	"operations.requestPublish": "게시 요청",
	"operations.sortOperationComplete": "정렬 작업이 완료되었습니다.",
	"operations.sortOperationFailed": "정렬 작업이 실패했습니다.",
	"operations.startPublisher": "게시자 시작",
	"operations.stopPublisher": "게시자 중지",
	"operations.updateOperationComplete": "업데이트 작업이 완료되었습니다.",
	"operations.updateOperationFailed": "업데이트 작업이 실패했습니다.",
	"packageDetailsDialog.emptyPackageMessage": "패키지가 비어 있습니다.",
	"packageDetailsDialog.emptyPackageMessageSubtitle": "가져오기 패키지 ID는 {packageId}입니다.",
	"packageDetailsDialog.missingPackageId": "이 UI에 패키지 ID가 제공되지 않았기 때문에 패키지 세부정보를 가져올 수 없습니다.",
	"packageDetailsDialog.packageDetailsDialogTitle": "패키지 세부 정보 게시",
	"pageExplorerPanel.currentContentItems": "현재 콘텐츠 항목",
	"pagination.PreviousPage": "이전 페이지",
	"pagination.itemsPerPage": "페이지 당 항목",
	"pagination.nextPage": "다음 페이지",
	"pagination.previousPage": "이전 페이지",
	"passwordRequirement.fulfillAllReqErrorMessage": "모든 비밀번호 요구 사항을 충족하십시오.",
	"passwordRequirement.hasLowercase": "소문자를 하나 이상 포함해야합니다",
	"passwordRequirement.hasNumbers": "하나 이상의 숫자를 포함해야합니다",
	"passwordRequirement.hasSpecialChars": "하나 이상의 특수 문자 {chars}을 (를) 포함해야합니다.",
	"passwordRequirement.hasUppercase": "적어도 하나의 대문자를 포함해야합니다",
	"passwordRequirement.invalidPassword": "요구 사항이 충족되지 않습니다",
	"passwordRequirement.maxLength": "길이는 {max} 자를 초과하지 않아야합니다.",
	"passwordRequirement.minLength": "길이는 {min} 자 이상이어야합니다",
	"passwordRequirement.minMaxLength": "길이는 {minLength} ~ {maxLength} 자 사이 여야합니다",
	"passwordRequirement.noBlank": "비워 둘 수 없습니다",
	"passwordRequirement.noSpaces": "공백을 포함해서는 안됩니다",
	"passwordRequirement.passwordConfirmationMismatch": "비밀번호가 일치하지 않습니다",
	"passwordRequirement.passwordValidation": "비밀번호 검증",
	"passwordRequirement.unnamedGroup": "설명되지 않은 조건",
	"passwordRequirement.validPassword": "요구 사항 충족",
	"passwordRequirement.validationPassing": "검증 통과",
	"passwordTextField.toggleVisibilityButtonText": "비밀번호 표시 전환",
	"pastePolicy.confirm": "선택한 {action} 대상은 대상 디렉터리에 대한 프로젝트 정책에 위배됩니다. • 원래 경로: \"{path}\", • 제안 경로: \"{modifiedPath}\". 제안된 경로를 사용하시겠습니까?",
	"pastePolicy.error": "선택한 {action} 대상은 대상 디렉터리에 대한 프로젝트 정책에 위배됩니다.",
	"pathNavigator.noChildren": "항목에 하위 항목이 없습니다.",
	"pathNavigator.noItemsAtLocation": "이 위치에 항목이 없습니다",
	"pathNavigator.pathFilterInputPlaceholder": " {name}의 하위 항목 필터링 ...",
	"pathNavigator.viewChildren": "어린이 보기",
	"pathNavigatorTree.missingRootPath": "경로 \"{path}\"이(가) 존재하지 않습니다.",
	"pathNavigatorTree.moreLinkLabel": " {count, plural, one {...{count} more item} other {...{count} more items}}",
	"pathNavigatorTreeItemFilter.placeholder": "하위 필터...",
	"pathSelectionDialog.changeRootButtonLabel": "루트 변경",
	"pathSelectionDialog.createFolderButtonLabel": "폴더 만들기",
	"pathSelectionDialog.title": "경로 선택",
	"pathSelectionInput.description": "경로를 입력하고 'Enter'를 눌러 유효성을 검사하십시오.",
	"pathSelectionInput.found": "경로를 찾았습니다.",
	"pathSelectionInput.invalidPath": "입력한 경로가 존재하지 않습니다",
	"pathSelector.inputPlaceholderText": "경로 선택",
	"plugin.by": "으로",
	"plugin.crafterCMS": "CrafterCMS",
	"plugin.license": "특허",
	"plugin.licenseTooltip": " {license} 라이센스",
	"plugin.more": "더...",
	"plugin.noDev": "개발자를 지정하지 않았습니다.",
	"plugin.use": "용도",
	"plugin.version": "번역",
	"pluginConfigDialog.title": "플러그인 구성",
	"pluginDetails.markdownError": "문서를 렌더링할 수 없습니다. 보려면 <a>{link}</a> 을(를) 방문하세요.",
	"pluginDetails.notCompatible": "이 청사진은 현재 버전의 CrafterCMS와 호환되지 않습니다.",
	"pluginManagement.emptyList": "설치된 플러그인이 없습니다",
	"pluginManagement.installationDate": "설치 날짜",
	"pluginManagement.listPluginPermission": "플러그인 목록을 볼 수 있는 권한이 없습니다.",
	"pluginManagement.pluginConfigUpdated": "플러그인 구성이 업데이트되었습니다.",
	"pluginManagement.pluginInstalled": "플러그인이 성공적으로 설치되었습니다",
	"pluginManagement.pluginUninstalled": "플러그인이 성공적으로 제거되었습니다.",
	"pluginManagement.searchPlugin": "검색 및 설치",
	"preview.previewIFrameTitle": "미리보기 프레임",
	"previewAddressBar.reloadButtonLabel": "이 페이지 새로고침",
	"previewAssetsPanel.itemsPerPage": "페이지 당 항목:",
	"previewAssetsPanel.noResults": " 검색 결과가 없습니다.",
	"previewAssetsPanel.retrieveAssets": "프로젝트 자산 검색",
	"previewAssetsPanel.title": "자산",
	"previewAudiencesPanel.loading": "타겟팅 옵션 검색",
	"previewAudiencesPanel.title": "잠재 고객 타겟팅",
	"previewBrowseComponentsPanel.allContentType": "모든 콘텐츠 유형",
	"previewBrowseComponentsPanel.filter": "필터...",
	"previewBrowseComponentsPanel.nextPage": "다음 페이지",
	"previewBrowseComponentsPanel.noResults": " 검색 결과가 없습니다.",
	"previewBrowseComponentsPanel.previousPage": "이전 페이지",
	"previewBrowseComponentsPanel.sharedComponentsHelperText": "여기에는 공유 구성 요소만 표시됩니다.",
	"previewBrowseComponentsPanel.title": "구성 요소 찾아보기",
	"previewCompatDialog.legacyCompatMessage": "이 페이지는 이전 편집 환경과 호환됩니다. 지금 거기로 가겠습니까?",
	"previewCompatDialog.nextCompatMessage": "이 페이지는 새로운 편집 환경과 호환됩니다. 지금 거기로 가겠습니까?",
	"previewCompatDialog.rememberChoice": "선택 기억",
	"previewCompatDialog.title": "미리보기 호환성 고지",
	"previewComponentsPanel.browse": "기존 찾아보기",
	"previewComponentsPanel.listDropTargets": "놓기 대상 나열",
	"previewComponentsPanel.listInPageInstances": "이 페이지의 인스턴스",
	"previewComponentsPanel.title": "구성 요소 추가",
	"previewConcierge.contentWasChangedByAnotherUser": "{name} 이(가) 현재 페이지를 변경했습니다. 새로고침?",
	"previewConcierge.contentWasLockedByAnotherUser": "항목이 {name}에 의해 잠겼습니다. 잠금이 해제될 때까지 편집 모드가 비활성화됩니다.",
	"previewDropTargetsPanel.chooseContentType": "콘텐츠 유형을 선택하세요.",
	"previewDropTargetsPanel.noResults": "검색 결과가 없습니다.",
	"previewDropTargetsPanel.selectContentType": "콘텐츠 유형 선택",
	"previewDropTargetsPanel.title": "구성 요소 놓기 대상",
	"previewEditFormTool.editController": "컨트롤러 편집",
	"previewEditFormTool.editTemplate": "템플릿 편집",
	"previewEditFormTool.openComponentForm": "편집하다",
	"previewInPageInstancesPanel.chooseContentType": "콘텐츠 유형을 선택하세요.",
	"previewInPageInstancesPanel.noResults": "검색 결과가 없습니다.",
	"previewInPageInstancesPanel.selectContentType": "콘텐츠 유형 선택",
	"previewInPageInstancesPanel.title": "이 페이지에서",
	"previewPageExplorerPanel.loading": "로딩",
	"previewPageExplorerPanel.rootItemLabel": "현재 콘텐츠 항목",
	"previewPageExplorerPanel.title": "페이지 탐색기",
	"previewRubbishBin.dropToTrash": "여기에서 휴지통에 버리십시오.",
	"previewRubbishBin.itemTrashed": "쓰레기!",
	"previewSearchPanel.title": "수색",
	"previewSimulatorPanel.previewWindowSize": "미리보기 창 크기",
	"previewSimulatorPanel.title": "장치 시뮬레이터",
	"previewSiteExplorerPanel.title": "프로젝트 탐색기",
	"previewToolbar.editModeSwitchDisabled": "수정할 수 없습니다",
	"previewToolbar.editModeSwitchLockedMessage": "항목이 {lockOwner}에 의해 잠겼습니다.",
	"previewToolbar.itemMenu": "항목 메뉴",
	"previewToolbar.quickCreateMenuTooltip": "빠른 만들기 메뉴",
	"previewToolbar.toggleEditMode": "편집 모드 전환",
	"previewTools.choseSiteMessage": "프로젝트를 선택하십시오",
	"previewTools.noWidgetsMessage": "도구가 구성되지 않았습니다.",
	"profileSettings.currentPassword": "현재 비밀번호",
	"profileSettings.isRequired": "필요하다",
	"profileSettings.languageUpdateFailedWarning": "언어 업데이트에 실패했습니다. 잠시 후 다시 시도하십시오.",
	"profileSettings.languageUpdatedSuccessfully": "언어가 성공적으로 업데이트되었습니다.",
	"profileSettings.mustMatchPreviousEntry": "이전 항목과 일치해야합니다",
	"profileSettings.password": "암호",
	"profileSettings.unsavedConfirmation": "저장되지 않은 변경 사항이 있습니다. 변경 사항을 취소?",
	"profileSettings.unsavedConfirmationTitle": "저장되지 않은 변경 사항",
	"publishCommitDialog.successMessage": "게시 완료",
	"publishCommitDialog.title": "커밋 게시",
	"publishDialog.approveForPublish": "게시 승인",
	"publishDialog.differentPublishDateWarning": "<strong>경고</strong> 승인을 위해 선택한 항목이 요청 된 다른 게시 날짜 / 시간으로 제출되었습니다.",
	"publishDialog.emptyHardDependencies": "하드 종속성 없음",
	"publishDialog.emptySoftDependencies": "소프트 종속성 없음",
	"publishDialog.firstPublish": "첫 번째 게시 요청이므로 전체 사이트가 게시됩니다.",
	"publishDialog.hardDependencies": "어려운 의존성",
	"publishDialog.introductoryText": "선택한 파일이 게시됩니다. 엄격한 종속성이 자동으로 포함됩니다. 소프트 종속성은 선택 사항이며 포함 할 항목을 선택할 수 있습니다.",
	"publishDialog.itemsToPublish": "게시 할 항목",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "선택된 품목 일정",
	"publishDialog.requestPublish": "게시 요청",
	"publishDialog.requestPublishHint": "항목은 검토를 위해 제출되고 승인 시 게시됩니다.",
	"publishDialog.showAllDependencies": "모든 종속성 표시",
	"publishDialog.softDependencies": "소프트 종속성",
	"publishDialog.submissionCommentFieldError": "제출 의견을 작성하십시오.",
	"publishDialog.submissionMandatory": "제출 필수",
	"publishDialog.submissionOptional": "제출 옵션",
	"publishDialog.subtitle": "하드 종속성은 기본 항목과 함께 자동으로 제출됩니다. 소프트 종속성을 제출할지 여부를 선택할 수 있습니다.",
	"publishDialog.title": "게시",
	"publishForm.emailLabel": "리뷰어의 피드백을 이메일로 보내주세요",
	"publishForm.mixedPublishingDates": "항목에 혼합 게시 날짜/시간 일정이 있습니다.",
	"publishForm.mixedPublishingTargets": "항목에 혼합 게시 대상이 있습니다.",
	"publishForm.publishingTargetError": "게시 대상 로드에 실패했습니다.",
	"publishForm.publishingTargetLoading": "로드 중 ...",
	"publishForm.publishingTargetRetry": "다시 해 보다",
	"publishForm.publishingTargetSuccess": "성공",
	"publishForm.requestApproval": "승인 요청",
	"publishForm.scheduling": "스케줄링",
	"publishForm.schedulingLater": "후에",
	"publishForm.schedulingLaterDisabled": "나중에(첫 번째 게시 시 비활성화됨)",
	"publishForm.schedulingNow": "지금",
	"publishForm.submissionComment": "제출 코멘트",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "여러 개를 쉼표로 구분하여 입력할 수 있습니다.",
	"publishOnDemand.formPathLabel": "게시 경로",
	"publishOnDemand.formPathLabelPreview": "커밋 또는 태그 ID",
	"publishOnDemand.pathModeDescription": "UI를 통해 Studio에서 변경 사항 게시",
	"publishOnDemand.publishingTarget": "게시 대상",
	"publishOnDemand.submissionComment": "제출 코멘트",
	"publishOnDemand.tagsModeDescription": "리포지토리에 대해 직접 git 작업을 통해 변경하거나 원격 리포지토리에서 가져온 변경 사항 게시",
	"publishOnDemand.title": "주문형 게시",
	"publishing.bulkPublishNote": "일괄 게시는 UI를 통해 Studio에서 변경한 내용을 게시하는 데 사용해야 합니다. 직접 git 작업을 통해 변경한 경우 \"게시자...\" 기능을 사용하십시오.",
	"publishing.busy": "바쁜",
	"publishing.idle": "게으른",
	"publishing.publishByNote": "\"Publish by...\" 기능은 리포지토리에 대해 직접 git 작업을 통해 변경하거나 원격 리포지토리에서 가져온 변경에 사용해야 합니다. UI에서 Studio를 통해 변경한 경우 \"대량 게시\"를 사용합니다.",
	"publishing.queued": "대기",
	"publishing.ready": "준비된",
	"publishing.started": "시작됨",
	"publishing.stopped": "중지",
	"publishingDashboard.BLOCKED": "막힌",
	"publishingDashboard.CANCELLED": "취소 된",
	"publishingDashboard.COMPLETED": "완료된",
	"publishingDashboard.PROCESSING": "가공",
	"publishingDashboard.READY_FOR_LIVE": "라이브 준비",
	"publishingDashboard.all": "모든",
	"publishingDashboard.bulkPublishStarted": "대량 게시 프로세스가 시작되었습니다.",
	"publishingDashboard.cancelItemButtonText": "취소",
	"publishingDashboard.cancelSelected": "선택된 취소",
	"publishingDashboard.comment": "논평",
	"publishingDashboard.commentNotProvided": "(제출 의견이 제공되지 않음)",
	"publishingDashboard.confirmAllHelper": "선택한 모든 항목의 상태를 \"취소\"로 설정 하시겠습니까?",
	"publishingDashboard.confirmHelperText": "항목 상태를 \"취소됨\"으로 설정 하시겠습니까?",
	"publishingDashboard.fetchPackagesFiles": "패키지 파일 가져 오기",
	"publishingDashboard.filesList": "파일 목록",
	"publishingDashboard.filteredBy": "표시 : {state, select, all {} other {상태: {state}.}} {environment, select, all {} other {{environment} 목표.}} {path, select, none {} other {에 의해 필터링 {path}}}",
	"publishingDashboard.filters": "필터",
	"publishingDashboard.gitNote": "커밋 또는 태그에 의한 게시는 리포지토리에 대해 직접 git 작업을 통해 변경하거나 원격 리포지토리에서 가져와야 합니다. UI에서 Studio를 통해 변경한 사항은 <a>publish by path</a>를 사용하십시오.",
	"publishingDashboard.next": "다음 페이지",
	"publishingDashboard.no": "아니",
	"publishingDashboard.noPackagesSubtitle": "검색어를 변경해보십시오",
	"publishingDashboard.noPackagesTitle": "패키지가없는 곳",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} 선택된 패키지} other {{count} 선택된 패키지}}",
	"publishingDashboard.pathExpression": "경로 표현",
	"publishingDashboard.previous": "이전 페이지",
	"publishingDashboard.publishSuccess": "성공적으로 게시되었습니다.",
	"publishingDashboard.scheduled": "<b>{approver}</b>에 의해 <b>{schedule, date, medium} {schedule, time, short}</b> 에 예약",
	"publishingDashboard.selectAll": "이 페이지에서 모두 선택",
	"publishingDashboard.state": "상태",
	"publishingDashboard.status": "{environment} 공개 대상의 상태는 {state}입니다.",
	"publishingDashboard.studioNote": "경로별 게시는 UI를 통해 Studio에서 변경한 내용을 게시하는 데 사용해야 합니다. 직접 git 작업을 통해 변경한 경우 <a>커밋으로 게시하거나</a>태그를 지정하세요.",
	"publishingDashboard.title": "게시 대시보드",
	"publishingDashboard.warning": "이렇게 하면 종속성을 포함하여 요청된 패턴과 일치하는 모든 항목을 강제로 게시하며 항목 수에 따라 시간이 오래 걸릴 수 있습니다. 계속하기 전에 수정된 모든 항목(다른 사람의 진행 중인 작업 포함)이 게시될 준비가 되었는지 확인하십시오.",
	"publishingDashboard.yes": "예",
	"publishingQueue.title": "게시 대기열",
	"publishingStatus.publisherUnlocked": "게시자 잠금 해제",
	"publishingStatusMessages.confirmUnlockPublisher": "게시자의 잠금을 해제하시겠습니까?",
	"publishingStatusMessages.errorMessage": "오류로 인해 게시자가 중지되었습니다.",
	"publishingStatusMessages.isDisabledMessage": "게시자가 비활성화되었습니다.",
	"publishingStatusMessages.lockOwnerDisplayMessage": " {lockOwner}에 의해 잠김",
	"publishingStatusMessages.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusMessages.processingMessage": "퍼블리싱을 위한 아이템을 준비하고 있습니다. {totalItems} 중 {numberOfItems} 이(가) 지금까지 처리되었습니다.",
	"publishingStatusMessages.publishingMessage": "항목을 게시합니다. {totalItems} 중 {numberOfItems} {numberOfItems, plural, one {item} other {items}} 을(를) {publishingTarget}에 게시했습니다. 패키지 ID는 {submissionId}입니다.",
	"publishingStatusMessages.publishingStatus": "출판 현황",
	"publishingStatusMessages.queuedMessage": "항목이 게시될 예정입니다.",
	"publishingStatusMessages.stoppedMessage": "게시자가 관리자에 의해 중지되었습니다.",
	"pullDialog.pullFrom": " {remoteName}에서 가져오기",
	"pushToRemoteDialog.forcePush": "강제 푸시",
	"quickCreateBtnLabel.label": "빠른 만들기 메뉴 열기",
	"quickCreateMenu.learnMore": "더 알아보기",
	"quickCreateMenu.learnMoreError": "빠른 만들기가 구성되지 않았습니다. 시스템 관리자에게 문의하십시오.",
	"quickCreateMenu.sectionTitle": "빠른 만들기",
	"quickCreateMenu.title": "새로운 콘텐츠",
	"recentActivity.lastEditedBy": "마지막 편집자",
	"recentActivity.publishDate": "게시 날짜",
	"recentActivityDashlet.dashletTitle": "내 최근 활동",
	"recentActivityDashlet.emptyMessage": "최근 활동 없음",
	"recentActivityDashlet.filterBy": "필터링 기준",
	"recentActivityDashlet.hideLiveItems": "라이브 항목 숨기기",
	"recentActivityDashlet.showLiveItems": "라이브 항목 표시",
	"recentlyPublished.myLastEdit": "내 마지막 편집",
	"recentlyPublished.publishDate": "게시 날짜",
	"recentlyPublished.publishedBy": "에 의해 출판 됨",
	"recentlyPublished.publishedTo": "게시 대상",
	"recentlyPublishedDashlet.collapseAll": "모든 축소",
	"recentlyPublishedDashlet.dashletTitle": "최근에 게시됨({total})",
	"recentlyPublishedDashlet.emptyMessage": "최근에 게시된 항목이 없습니다.",
	"recentlyPublishedDashlet.expandAll": "모두 확장",
	"recentlyPublishedDashlet.filterBy": "필터링 기준",
	"recentlyPublishedDashlet.showAll": "모두({total})",
	"register.dropTargetsNotFound": " {contentType} 구성요소에 대한 놓기 대상이 없습니다.",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.cancel": "취소",
	"rejectDialog.continue": "받지 않다",
	"rejectDialog.firstPublish": "첫 번째 게시 요청이므로 전체 사이트 게시가 거부됩니다.",
	"rejectDialog.noItemsSelected": "거부할 파일이 없습니다.",
	"rejectDialog.predefinedRejectionComments": "사전 정의된 거부 설명",
	"rejectDialog.rejectCommentLabel": "거부 댓글",
	"rejectDialog.submittedBy": "에 의해 제출 된",
	"rejectDialog.subtitle": "다음 체크 항목은 거부됩니다.",
	"rejectDialog.title": "받지 않다",
	"rejectDialog.typeMyOwnComment": "내 의견 입력",
	"remoteRepositories.title": "원격 저장소",
	"reposAdmin.pendingCommit": "Repo는 커밋 보류중인 파일을 포함합니다. 자세한 내용은 아래 리포지토리 상태를 참조하십시오.",
	"reposAdmin.repositoriesNote": "Studio를 git 병합 및 충돌 해결 플랫폼으로 사용하지 마십시오. 모든 병합 충돌은 Studio로 가져 오기 전에 업스트림에서 해결되어야합니다.",
	"reposAdmin.unreachableRemote": "원격 \"{name}\"에 도달 할 수 없습니다.",
	"reposAdmin.unstagedFilesMessage": "저장소에 스테이지되지 않은 파일이 있습니다.",
	"repositories.acceptRemote": "원격 수락",
	"repositories.acceptRemoteHelper": "원격에서 가져온 버전으로 로컬 파일을 재정의합니다.",
	"repositories.commitResolution": "커밋 해결",
	"repositories.commitResolutionHelper": "이 결의안을 커밋한 후. 방금 정의한 새 상태를 동기화하려면 원격에 대한 변경 사항을 '푸시'해야 합니다.",
	"repositories.commitSuccessMessage": "커밋했습니다.",
	"repositories.confirmHelper": "끌어오기 작업을 취소하고 이 저장소에 있는 내용을 유지합니다.",
	"repositories.conflictsExist": "충돌이 있는 동안에는 리포지토리 작업이 비활성화됩니다. 충돌을 해결하십시오.",
	"repositories.deleteConfirmation": "원격 저장소를 삭제하시겠습니까?",
	"repositories.fetching": "저장소 상태를 가져오는 중...",
	"repositories.forcePushWarning": "강제 푸시는 원격 저장소 분기에 있는 내용을 덮어씁니다.",
	"repositories.keepLocal": "로컬 유지",
	"repositories.keepLocalHelper": "원격 변경 사항을 취소하고 로컬 파일을 유지합니다.",
	"repositories.mergeStrategyLabel": "병합 전략",
	"repositories.mergeStrategyNone": "없음",
	"repositories.mergeStrategyOurs": "수락",
	"repositories.mergeStrategyTheirs": "수락",
	"repositories.messageLabel": "충돌 해결 메시지",
	"repositories.newRemoteDialogTitle": "새 원격 저장소",
	"repositories.newRepository": "원격 저장소 추가",
	"repositories.noConflicts": "로컬 저장소에 충돌이 없습니다.",
	"repositories.pendingCommit": "Repo는 커밋 보류중인 파일을 포함합니다. 자세한 내용은 아래 리포지토리 상태를 참조하십시오.",
	"repositories.pullFromCreatedBranchOnlyHint": "사이트가 생성된 지점에서만 가져올 수 있습니다. 모든 기능 분기 작업은 업스트림에 병합되어야 합니다.",
	"repositories.pullSuccessMessage": " {numberOfCommits} 커밋을 가져왔습니다. 병합 커밋 ID가 클립보드에 복사되었습니다. 지금 게시하시겠습니까?",
	"repositories.pullSuccessNoChangesMessage": "가져오기 성공: 이미 최신 상태입니다.",
	"repositories.pushSuccessMessage": "성공적으로 밀었습니다.",
	"repositories.pushUrl": "푸시 URL",
	"repositories.remoteBranchToPull": "가져올 원격 분기",
	"repositories.remoteBranchToPush": "푸시할 원격 분기",
	"repositories.remoteCreateSuccessMessage": "원격 저장소가 성공적으로 생성되었습니다.",
	"repositories.remoteDeleteSuccessMessage": "원격 저장소가 성공적으로 삭제되었습니다.",
	"repositories.remoteName": "원격 Git 저장소 이름",
	"repositories.remoteUrl": "원격 저장소 URL",
	"repositories.repoRemoteNameHelper": "가져올 소스 리포지토리를 참조할 리모컨의 이름을 지정합니다.",
	"repositories.repoRemoteUrlHelper": "생성할 git 저장소 URL입니다.",
	"repositories.revertAll": "모두 되돌리기",
	"repositories.revertPullSuccessMessage": "저장소를 성공적으로 되돌렸습니다.",
	"repositories.sandboxBranchRetrievalError": "프로젝트의 분기를 검색할 수 없습니다.",
	"repositories.splitView": "분할 보기",
	"repositories.unstagedFiles": "저장소에 스테이지되지 않은 파일이 있습니다.",
	"repository.conflictedFiles": "충돌 파일",
	"repository.pendingCommit": "보류 중인 커밋",
	"repository.repositoryStatusLabel": "저장소 상태",
	"repository.statusNote": "Studio를 git 병합 및 충돌 해결 플랫폼으로 사용하지 마십시오. 모든 병합 충돌은 Studio로 가져 오기 전에 업스트림에서 해결되어야합니다.",
	"requestPublishDialog.cancel": "취소",
	"resetPasswordDialog.helperText": "\"{user}\" 사용자의 새 비밀번호 설정",
	"resetPasswordDialog.passwordUpdated": "비밀번호가 성공적으로 업데이트되었습니다.",
	"resetPasswordDialog.title": "암호를 재설정",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "비밀번호 확인",
	"resetView.resetPasswordError": "비밀번호 재설정 중 오류가 발생했습니다. 토큰이 유효하지 않거나 만료되었을 수 있습니다.",
	"resetView.resetPasswordFieldPlaceholderLabel": "새 비밀번호",
	"resetView.resetPasswordInvalidToken": "유효하지 않거나 만료 된 토큰.",
	"resetView.resetPasswordSuccess": "비밀번호가 재설정되었습니다. 새 비밀번호로 로그인하십시오.",
	"rteControlMessages.chooseSource": "소스 선택",
	"rteControlMessages.dropImageUploaded": "{title} 이(가) 성공적으로 업로드되었습니다.",
	"rteControlMessages.escapeScripts": "탈출 스크립트",
	"rteControlMessages.incompatibleDatasource": "찾아보기를 위해 구성된 데이터 소스가 리치 텍스트 편집기와 호환되지 않습니다. 관리자에게 문의하십시오.",
	"rteControlMessages.noDatasourcesConfigured": "이 편집기에 대해 구성된 소스가 없습니다.",
	"rteControlMessages.requiredField": "필드는 필수입니다",
	"scheduledDashlet.widgetTitle": "게시 예정",
	"search.acceptSelection": "선택 수락",
	"search.changeQuery": "쿼리를 변경해 보세요.",
	"search.clearSelected": "선택한 {count} 지우기",
	"search.filtersActive": " • <span>활성 필터</span>",
	"search.goToPreview": "페이지로 이동",
	"search.itemsPerPage": "페이지 당 항목:",
	"search.noPermissions": "사용 가능한 권한이 없습니다.",
	"search.noResults": "검색된 결과가 없습니다.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "이 페이지에서 모두 선택",
	"search.selectionCount": " {count} 이 (가) 선택되었습니다",
	"search.videoProcessed": "비디오가 처리 중이며 처리가 완료되면 미리보기를 사용할 수 있습니다.",
	"searchAhead.noResults": "결과가 없습니다.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": " {value}{unit}위",
	"searchFilter.anyPath": "모든 경로",
	"searchFilter.asc": "오름차순",
	"searchFilter.byRelevanceAscMessage": "덜 관련성 있는 것 먼저",
	"searchFilter.byRelevanceDescMessage": "가장 관련성이 높은 첫 번째",
	"searchFilter.clearFilters": "필터 지우기",
	"searchFilter.contentType": "컨텐츠 타입",
	"searchFilter.desc": "내림차순",
	"searchFilter.internalName": "이름",
	"searchFilter.lastEditDate": "마지막 편집 날짜",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "검색 :",
	"searchFilter.size": "콘텐츠 크기",
	"searchFilter.sortBy": "정렬",
	"searchFilter.under": " {value}{unit}아래",
	"searchToolBar.changeViewButtonTooltip": "보기 변경",
	"searchToolBar.showHideFilters": "필터 표시/숨기기",
	"setWorkflowStateDialog.clearAsPublishedLive": "게시된 라이브로 지우기",
	"setWorkflowStateDialog.clearAsPublishedToStaging": "스테이징에 게시된 대로 지우기",
	"setWorkflowStateDialog.clearModified": "삭제 수정됨",
	"setWorkflowStateDialog.clearNew": "새로 지우기",
	"setWorkflowStateDialog.clearSystemProcessing": "명확한 시스템 처리",
	"setWorkflowStateDialog.clearUserLock": "사용자 잠금 해제",
	"setWorkflowStateDialog.setAsPublishedLive": "게시된 라이브로 설정",
	"setWorkflowStateDialog.setAsPublishedToStaging": "스테이징에 게시된 것으로 설정",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.editModePaddingHelp": "편집 모드에서 더 쉽게 상호 작용할 수 있도록 컬렉션에 패딩을 추가합니다. 켜짐/꺼짐을 토글하려면 아무 지점에서나 'p'를 누르세요.",
	"settingsPanel.editModePaddingLabel": "우주 모드 (p)",
	"settingsPanel.highlightAllTargets": "모든 대상 강조 표시(e)",
	"settingsPanel.highlightMode": "하이라이트 모드",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "공유 컨텐츠",
	"shortcuts.disableICE": "누르고 있는 동안 ICE 비활성화(클릭 연결)",
	"shortcuts.editModePadding": "편집 모드 패딩 전환",
	"shortcuts.reloadPreview": "미리보기 새로고침",
	"shortcuts.showShortcuts": "키보드 단축키 표시",
	"shortcuts.toggleEditMode": "편집 모드 켜기/끄기",
	"shortcuts.toggleMoveMode": "이동 모드 켜기/끄기",
	"site.deleted": "프로젝트가 성공적으로 삭제되었습니다.",
	"siteCard.helperText": "\"{site}\" 프로젝트를 삭제하시겠습니까?",
	"siteComponentDS.componentPath": "구성 요소 경로",
	"siteComponentDS.dataType": "데이터 형식",
	"siteComponentDS.date": "날짜",
	"siteComponentDS.float": "부동 소수점",
	"siteComponentDS.html": "데이터 형식",
	"siteComponentDS.integer": "정수",
	"siteComponentDS.label": "분류법 선택기",
	"siteComponentDS.required": "필수",
	"siteComponentDS.siteComponent": "프로젝트 구성 요소",
	"siteComponentDS.string": "끈",
	"siteComponentDS.unableLoad": "시스템이 {file}을 (를)로드 할 수 없습니다.",
	"siteConfig.controlNotAvailable": "제어 할 수 없음",
	"siteConfig.insertExpressionMessage": "식 삽입",
	"siteConfig.invalidNumber": "\"{value}\"은 (는) 유효한 숫자가 아닙니다.",
	"siteConfig.landingMessage": "왼쪽에서 도구를 선택하십시오.",
	"siteConfig.loadModuleError": "\"{tool}\" kann nicht geladen werden. Überprüfen Sie die Konfiguration der Projektwerkzeuge.",
	"siteConfig.postfixes": "접미사",
	"siteConfig.switchToMessage": " {type}으로 전환",
	"siteConfig.toolNotFound": "\"{tool}\" 도구를 찾을 수 없습니다.",
	"siteConfigurationManagement.activeEnvironment": "{environment} 환경",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS Profiles",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "AWS 프로필 구성 파일.",
	"siteConfigurationManagement.confTabAssetProcessing": "자산 처리",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "자산 처리 구성 파일.",
	"siteConfigurationManagement.confTabBlobStores": "블롭 스토어",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob은 구성 파일을 저장합니다.",
	"siteConfigurationManagement.confTabBoxProfiles": "박스 프로파일",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "상자 프로필 구성 파일.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS 구성",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "이 파일은 콘텐츠 작성자가 선택할 수 있는 데이터 소스로 0개 이상의 CMIS 지원 리포지토리를 구성합니다.",
	"siteConfigurationManagement.confTabCodeEditorConf": "코드 편집기 구성",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "코드 편집기 구성을 정의합니다.",
	"siteConfigurationManagement.confTabConfDesc": "이 구성 목록을 정의합니다.",
	"siteConfigurationManagement.confTabConfigurations": "구성",
	"siteConfigurationManagement.confTabContextualNavigationConf": "상황별 탐색 구성",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "프로젝트 상황에 맞는 탐색 모음에서 모듈을 정의합니다.",
	"siteConfigurationManagement.confTabDependencyResolverConf": "종속성 해석기 구성",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "이 파일은 Crafter가 종속성을 고려하는 파일 경로와 추출 방법을 구성합니다.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "개발 환경 구성",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "개발 환경 구성을 정의합니다.",
	"siteConfigurationManagement.confTabEndpointsConf": "엔드포인트 구성",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "사용 가능한 끝점 목록을 정의합니다.",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "엔진 프로젝트 애플리케이션 컨텍스트",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Crafter Engine에서 사용하는 프로젝트 애플리케이션 컨텍스트",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "엔진 프로젝트 애플리케이션 컨텍스트 - 라이브",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "엔진 프로젝트 애플리케이션 컨텍스트 - 미리보기",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "엔진 프로젝트 애플리케이션 컨텍스트 - 스테이징",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "엔진 프로젝트 구성",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Crafter Engine에서 사용하는 프로젝트 구성",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "엔진 프로젝트 구성 - 라이브",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "엔진 프로젝트 구성 - 미리보기",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "엔진 프로젝트 구성 - 스테이징",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "엔진 URL 재작성 구성(XML 스타일)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "이 파일은 Crafter Engine에서 사용하는 프로젝트 속성을 구성합니다.",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "엔진 URL 재작성 구성(XML 스타일) - 라이브",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "엔진 URL 재작성 구성(XML 스타일) - 미리보기",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "엔진 URL 재작성 구성(XML 스타일) - 스테이징",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "환경 구성",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "이 파일은 Crafter Studio가 게시할 수 있는 환경을 구성합니다.",
	"siteConfigurationManagement.confTabMimeTypes": "마임 유형",
	"siteConfigurationManagement.confTabMimeTypesDesc": "이 파일은 이 프로젝트/청사진에 대한 MIME 유형 아이콘 재정의를 구성합니다.",
	"siteConfigurationManagement.confTabNotificationConf": "알림 구성",
	"siteConfigurationManagement.confTabNotificationConfDesc": "UI 메시지 목록을 정의합니다.",
	"siteConfigurationManagement.confTabPermissionsMappings": "권한 매핑",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "권한 및 경로 맵을 정의합니다.",
	"siteConfigurationManagement.confTabPersonasConf": "페르소나 구성",
	"siteConfigurationManagement.confTabPersonasConfDesc": "미리 보기에서 가정할 수 있는 페르소나 목록을 정의합니다.",
	"siteConfigurationManagement.confTabPreviewAssetConf": "자산 구성 미리보기",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "XML 콘텐츠와 연결된 편집 가능한 자산 목록을 정의합니다.",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "구성 요소 구성 미리보기",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "미리 보기에서 동적으로 만들 수 있는 구성 요소 목록을 정의합니다.",
	"siteConfigurationManagement.confTabPreviewPanelConf": "미리보기 패널 구성",
	"siteConfigurationManagement.confTabProxyConfig": "프록시 구성",
	"siteConfigurationManagement.confTabProxyConfigDesc": "이 파일은 미리 보기를 위해 프록시 서버를 구성합니다.",
	"siteConfigurationManagement.confTabRoleMappings": "역할 매핑",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "프로젝트에서 사용 가능한 역할 목록을 정의합니다.",
	"siteConfigurationManagement.confTabSidebarConf": "사이드바 구성",
	"siteConfigurationManagement.confTabSidebarConfDesc": "사이드바에서 모듈을 정의합니다.",
	"siteConfigurationManagement.confTabSiteConf": "콘텐츠 유형 편집기 구성",
	"siteConfigurationManagement.confTabSiteConfDesc": "콘텐츠 유형 편집에 사용할 수 있는 컨트롤 및 데이터 소스 정의",
	"siteConfigurationManagement.confTabSiteConfiguration": "프로젝트 구성",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "일반 프로젝트 구성을 정의합니다.",
	"siteConfigurationManagement.confTabSitePolicyConf": "프로젝트 정책 구성",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "콘텐츠 운영을 검증하기 위한 정책 정의",
	"siteConfigurationManagement.confTabTargetingConfiguration": "타겟팅 구성",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "이 파일은 Crafter Engine에 타겟팅 시스템을 구동하는 데 도움이 되는 가짜 사용자 속성을 제공하는 데 도움이 되도록 Crafter Studio의 타겟팅 시스템을 구성합니다.",
	"siteConfigurationManagement.confTabTargetsConf": "대상 구성",
	"siteConfigurationManagement.confTabTargetsConfDesc": "양식 데이터 소스에 사용되는 대상 목록을 정의합니다.",
	"siteConfigurationManagement.confTabTranslationConf": "번역 구성",
	"siteConfigurationManagement.confTabTranslationConfDesc": "지원되는 언어 및 해결 방법 정의",
	"siteConfigurationManagement.confTabUiConf": "사용자 인터페이스 구성",
	"siteConfigurationManagement.confTabUiConfDesc": "사용자 인터페이스에 표시되는 위젯을 정의합니다.",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "WebDAV 프로필 구성 파일.",
	"siteConfigurationManagement.confTabWorkflowConf": "워크플로 구성",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "시스템에서 사용 가능한 워크플로 정의",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "미리보기에서 사용할 수 있는 도구 목록을 정의합니다.",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "샘플 숨기기",
	"siteConfigurationManagement.history": "역사",
	"siteConfigurationManagement.rteConfigDescription": "양식에서 서식 있는 텍스트 편집기 구성을 정의합니다.",
	"siteConfigurationManagement.rteConfigTitle": "RTE 구성",
	"siteConfigurationManagement.selectConfigFile": "왼쪽에서 구성 파일을 선택하십시오.",
	"siteConfigurationManagement.title": "구성",
	"siteConfigurationManagement.unsavedChangesSubtitle": "저장하지 않은 변경 사항이 있습니다. 종료 하시겠습니까?",
	"siteConfigurationManagement.unsavedChangesTitle": "저장되지 않은 변경 사항",
	"siteConfigurationManagement.viewSample": "샘플보기",
	"siteDashboard.emptyStateMessageSubtitle": "프로젝트의 사용자 인터페이스 구성에서 위젯 추가",
	"siteDashboard.emptyStateMessageTitle": "표시할 위젯이 없습니다.",
	"siteSearch.noOptionsAvailable": "사용 가능한 옵션이 없습니다",
	"siteSearch.unknownErrorSearching": "검색 서비스에 오류가 발생했습니다.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "프로젝트 선택",
	"siteTools.itemStates": "아이템 상태",
	"siteTools.selectTool": "왼쪽에서 도구를 선택하십시오.",
	"siteTools.title": "프로젝트 도구",
	"siteTools.toolListingNotConfigured": "프로젝트 도구 목록이 설정되지 않았습니다.",
	"siteTools.toolListingNotConfiguredSubtitle": "ui.xml에서 craftercms.siteTools 참조를 설정하세요.",
	"siteTools.toolNotFound": "도구를 찾을 수 없음",
	"sites.ChangeView": "보기 변경",
	"sites.createGroup": "그룹 만들기",
	"sites.createSite": "사이트 만들기",
	"sitesAdmin.siteUpdated": "프로젝트가 업데이트되었습니다.",
	"sitesGrid.emptyStateMessage": "프로젝트를 찾을 수 없습니다.",
	"sitesGrid.siteDeleted": "프로젝트가 성공적으로 삭제되었습니다.",
	socketConnectionIssue: socketConnectionIssue$3,
	"systemType.asset": "유산",
	"systemType.component": "구성 요소",
	"systemType.folder": "폴더",
	"systemType.levelDescriptor": "레벨 설명자",
	"systemType.page": "페이지",
	"systemType.renderingTemplate": "렌더링 템플릿",
	"systemType.script": "스크립트",
	"systemType.taxonomy": "분류",
	"targetingDialog.setNow": "지금 설정",
	"tokenManagement.clearSelected": "선택 항목 지우기({count})",
	"tokenManagement.copied": "클립보드에 토큰 복사",
	"tokenManagement.createToken": "토큰 생성",
	"tokenManagement.created": "토큰이 생성되어 클립보드에 복사되었습니다.",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "선택된 것을 지워 라",
	"tokenManagement.emptyTokens": "토큰이 없습니다. 토큰 생성을 클릭하여 새 토큰을 추가하세요.",
	"tokenManagement.helperText": "\"{label}\" 토큰을 삭제하시겠습니까?",
	"tokenManagement.updated": "토큰 업데이트됨",
	"transcodedVideoPickerControl.label": "트랜스 코딩 된 비디오",
	"transferList.addDisabledTooltip": "추가할 항목을 왼쪽에서 선택",
	"transferList.addToTarget": "선택 항목 추가",
	"transferList.emptyListMessage": "모든 사용자는 이 그룹의 구성원입니다.",
	"transferList.removeDisabledTooltip": "오른쪽에서 제거할 항목 선택",
	"transferList.removeFromTarget": "선택된 것을 지워 라",
	"transferList.targetEmptyStateMessage": "이 그룹에 회원이 없습니다",
	"transferListColumn.noResults": "결과가 없습니다. 쿼리를 변경해 보세요.",
	"uninstallPluginDialog.headerSubtitle": "\"{pluginId}\"의 제거를 확인하십시오.",
	"uninstallPluginDialog.headerTitle": "플러그인 제거",
	"uninstallPluginDialog.noUsagesFound": "사용처를 찾을 수 없습니다",
	"uninstallPluginDialog.pluginSafeToUninstall": "플러그인은 안전하게 제거할 수 있습니다.",
	"uninstallPluginDialog.reviewDependenciesMessage": "\"{pluginId}\"의 종속 항목을 검토하십시오.",
	"uninstallPluginDialog.typePassword": "플러그인 삭제를 확인하려면 \"<b>{password}</b>\"라는 단어를 입력하세요.",
	"unlockPublisherDialog.dialogCopy": "게시자 잠금 해제를 확인하십시오",
	"unlockPublisherDialog.dialogTitle": "게시자 잠금 해제 확인",
	"unlockPublisherDialog.typeConfirmPassword": "의미를 이해하고 계속 진행하려면 \"<b>{password}</b>\"단어를 입력하십시오.",
	"unlockPublisherDialog.unlockCompleteMessage": "게시자 잠금이 성공적으로 해제되었습니다.",
	"unlockPublisherDialog.unlockFailedMessage": "게시자 잠금을 해제하는 동안 오류가 발생했습니다.",
	"uploadDialog.title": "업로드",
	"uploadDialog.uploadInProgress": "업로드가 아직 진행 중입니다. 이 페이지를 떠나면 보류중인 업로드가 중지됩니다. 떠나시겠습니까?",
	"uploadDialog.uploadInProgressConfirmation": "아직 업로드가 진행 중입니다. 이 모달을 닫으면 보류 중인 업로드가 중지됩니다. 닫으시겠습니까?",
	"uppyCore.noDuplicates": "중복 파일 \"%'{fileName}'\"을(를) 추가할 수 없습니다. 이미 존재합니다.",
	"uppyDashboard.acceptAll": "모든 변경 사항 수락",
	"uppyDashboard.addMore": "더 추가하기",
	"uppyDashboard.addingMoreFiles": "더 많은 파일 추가",
	"uppyDashboard.cancelPending": "취소 보류",
	"uppyDashboard.clearCompleted": "명확한 완료",
	"uppyDashboard.maxActiveUploadsReached": " 최대 활성 업로드 수{maxFiles} 개에 도달했습니다. 초과분은 폐기되었습니다.",
	"uppyDashboard.maxFiles": " 최대{maxFiles} ",
	"uppyDashboard.rejectAll": "모든 변경 사항 거부",
	"uppyDashboard.removeFile": "파일을 지우다",
	"uppyDashboard.renamingFromTo": "%'{from}'에서 %'{to}'(으)로 이름 바꾸기",
	"uppyDashboard.validateAndRetry": "변경 사항 수락 및 업로드",
	"userGroupMembershipEditor.addOrRemoveError": "사용자 그룹을 수정하는 동안 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "닫기",
	"userInfoDialog.deleteUser": "사용자 삭제",
	"userInfoDialog.externallyManaged": "외부에서 관리",
	"userInfoDialog.helperText": "\"{username}\" 사용자를 삭제하시겠습니까?",
	"userInfoDialog.noRoles": "역할 없음",
	"userInfoDialog.resetPassword": "암호를 재설정",
	"userInfoDialog.siteName": "프로젝트 이름",
	"userInfoDialog.siteRoles": "프로젝트당 역할",
	"userInfoDialog.userDeleted": "사용자가 성공적으로 삭제되었습니다.",
	"userInfoDialog.userDetails": "사용자 세부 정보",
	"userInfoDialog.userDisabled": "사용자가 성공적으로 비활성화되었습니다.",
	"userInfoDialog.userEnabled": "사용자가 성공적으로 활성화되었습니다.",
	"userInfoDialog.userUpdated": "사용자가 성공적으로 업데이트되었습니다.",
	"usersAdmin.firstName": "이름",
	"usersAdmin.lastName": "성",
	"usersAdmin.maxLengthError": "{field} 은 {size} 자보다 길 수 없습니다",
	"usersAdmin.passwordChangeSuccessMessage": "비밀번호가 성공적으로 변경되었습니다.",
	"usersAdmin.userCreated": "{username} 이(가) 생성되었습니다.",
	"usersAdmin.userDeleted": "{username} 이(가) 삭제되었습니다.",
	"usersAdmin.userEdited": "{username} 이(가) 수정되었습니다.",
	"usersAdmin.userName": "사용자 이름",
	"usersGrid.createUser": "사용자 생성",
	"usersGrid.emptyStateMessage": "사용자를 찾을 수 없습니다",
	"validations.itemLocked": "항목이 이미 {lockOwner}에 의해 잠겨 있습니다. 나중에 다시 시도하세요.",
	"validations.maxCount": "최대 항목 수는 {maxCount}개입니다.",
	"validations.maxLength": "최대 길이 도달 ({maxLength})에",
	"validations.minCount": "최소 항목 수는 {minCount}개입니다.",
	"validations.noDataSourcesSet": "이 필드에 대해 설정된 데이터 소스가 없습니다.",
	"validations.noPathSetInDataSource": "데이터 소스에 대한 경로가 설정되지 않았습니다.",
	"validations.outOfSyncContent": "항목이 백그라운드에서 변경되었기 때문에 자동 새로고침이 수행되었습니다. 다시 시도해 주세요.",
	"validations.required": "{field} 은 (는) 필수입니다.",
	"viewVersionDialog.headerTitle": "항목 버전 보기",
	"wcmRootFolder.pathNotFound": " {path} 폴더를 찾을 수 없습니다.",
	"widgetComponent.componentNotFoundSubtitle": "ui 구성을 확인하고 원하는 구성 요소가 포함된 플러그인을 설치했는지 확인합니다.",
	"widgetComponent.componentNotFoundTitle": "구성요소 {id} 을(를) 찾을 수 없습니다.",
	"widgetComponent.pluginLoadFailedMessageBody": " {info} 및 구성요소 ID \"{id}\" 사용.",
	"widgetComponent.pluginLoadFailedMessageTitle": "플러그인 로드 실패",
	"withEmptyState.defaultEmptyStateMessage": "검색 결과가 없습니다",
	"word.configuration": "구성",
	"word.refresh": "새롭게 하다",
	"word.upload": "업로드",
	"words.about": "약",
	"words.accept": "동의",
	"words.account": "계정",
	"words.activity": "활동",
	"words.all": "모든",
	"words.apply": "대다",
	"words.approve": "승인하다",
	"words.asset": "유산",
	"words.assets": "자산",
	"words.audit": "심사",
	"words.authentication": "입증",
	"words.author": "저자",
	"words.back": "뒤로",
	"words.base": "베이스",
	"words.branch": "분기",
	"words.browse": "검색",
	"words.by": "으로",
	"words.cancel": "취소",
	"words.clear": "명확한",
	"words.close": "닫기",
	"words.cluster": "클러스터",
	"words.collapse": "무너짐",
	"words.compact": "콤팩트",
	"words.component": "구성 요소",
	"words.components": "구성 요소",
	"words.configuration": "구성",
	"words.confirm": "확인",
	"words.content": "함유량",
	"words.continue": "잇다",
	"words.copy": "부",
	"words.create": "몹시 떠들어 대다",
	"words.created": "만들어진",
	"words.custom": "관습",
	"words.cut": "절단",
	"words.dashboard": "계기반",
	"words.defaults": "기본값",
	"words.delete": "지우다",
	"words.dependencies": "종속성",
	"words.description": "기술",
	"words.desktop": "데스크톱",
	"words.details": "세부",
	"words.diff": "차이",
	"words.disable": "사용 안함",
	"words.disabled": "장애인",
	"words.dismiss": "버리다",
	"words.documentation": "선적 서류 비치",
	"words.done": "끝난",
	"words.duplicate": "복제",
	"words.edit": "편집하다",
	"words.edited": "수정됨",
	"words.email": "이메일",
	"words.enable": "사용",
	"words.enabled": "사용",
	"words.error": "오류",
	"words.expand": "넓히다",
	"words.expiration": "만료",
	"words.expired": "만료",
	"words.expiring": "만료",
	"words.fetch": "술책",
	"words.fetching": "가져오기",
	"words.files": "파일",
	"words.filter": "필터",
	"words.filters": "필터",
	"words.firstName": "이름",
	"words.folder": "폴더",
	"words.font": "세례반",
	"words.forward": "앞으로",
	"words.from": "...에서",
	"words.git": "힘내",
	"words.global": "글로벌",
	"words.go": "가기",
	"words.graphQL": "GraphQL",
	"words.groups": "여러 떼",
	"words.height": "신장",
	"words.history": "역사",
	"words.icon": "상",
	"words.id": "Id",
	"words.image": "영상",
	"words.install": "설치",
	"words.installed": "설치",
	"words.item": "목",
	"words.label": "상표",
	"words.language": "언어",
	"words.lastName": "성",
	"words.level": "수평",
	"words.live": "살고 있다",
	"words.loading": "로딩",
	"words.local": "노동 조합 지부",
	"words.locales": "로케일",
	"words.location": "위치",
	"words.locked": "잠김",
	"words.logger": "나무꾼",
	"words.login": "로그인",
	"words.logout": "로그 아웃",
	"words.max": "맥스",
	"words.members": "회원",
	"words.message": "메시지",
	"words.min": "민",
	"words.minimize": "최소화",
	"words.move": "움직임",
	"words.name": "이름",
	"words.never": "못",
	"words.no": "아니",
	"words.notification": "공고",
	"words.now": "지금",
	"words.ok": "Ok",
	"words.options": "옵션",
	"words.page": "페이지",
	"words.pages": "페이지",
	"words.parameters": "매개 변수",
	"words.password": "암호",
	"words.paste": "풀",
	"words.pasting": "붙여넣기...",
	"words.path": "통로",
	"words.pause": "중지",
	"words.phone": "전화",
	"words.presets": "프리셋",
	"words.preview": "시사",
	"words.processing": "처리 중",
	"words.project": "프로젝트",
	"words.projects": "프로젝트",
	"words.publish": "게시",
	"words.published": "게시 됨",
	"words.publishing": "출판",
	"words.pull": "손잡이",
	"words.push": "푸시",
	"words.queued": "대기",
	"words.range": "범위",
	"words.ready": "준비된",
	"words.reason": "이유",
	"words.refresh": "새롭게 하다",
	"words.reject": "받지 않다",
	"words.relevance": "관련성",
	"words.remote": "먼",
	"words.rename": "이름 바꾸기",
	"words.reset": "다시 놓기",
	"words.retry": "다시 해 보다",
	"words.revert": "돌아가다",
	"words.review": "리뷰",
	"words.roles": "역할",
	"words.save": "구하다",
	"words.schedule": "시간표",
	"words.script": "스크립트",
	"words.scripts": "스크립트",
	"words.search": "수색",
	"words.select": "고르다",
	"words.selected": "선택된",
	"words.shortcuts": "바로가기",
	"words.show": "보여 주다",
	"words.snippets": "짧은 발췌",
	"words.staged": "일부러 꾸민",
	"words.staging": "각색",
	"words.start": "스타트",
	"words.state": "상태",
	"words.status": "지위",
	"words.stay": "머무르다",
	"words.stop": "중지",
	"words.stopped": "중지",
	"words.submit": "제출하다",
	"words.system": "체계",
	"words.tablet": "태블릿",
	"words.taxonomy": "분류",
	"words.template": "주형",
	"words.templates": "Templates",
	"words.thread": "실",
	"words.timeline": "타임 라인",
	"words.timestamp": "타임 스탬프",
	"words.to": "에",
	"words.token": "토큰",
	"words.translation": "번역",
	"words.type": "유형",
	"words.uninstall": "제거",
	"words.unknown": "알 수 없는",
	"words.unlock": "터놓다",
	"words.unpublished": "널리 알려지지 않은",
	"words.update": "최신 정보",
	"words.upload": "업로드",
	"words.url": "Url",
	"words.userName": "사용자 이름",
	"words.username": "사용자 이름",
	"words.users": "사용자",
	"words.validating": "검증",
	"words.value": "값",
	"words.version": "번역",
	"words.view": "전망",
	"words.warning": "경고",
	"words.width": "폭",
	"words.yes": "예",
	"workflowCancellation.cancel": "취소",
	"workflowCancellation.continue": "잇다",
	"workflowCancellation.subtitle": "편집은 예약된 배포 배치에 있는 모든 항목을 취소합니다. 아래 파일 목록을 검토하고 워크플로 및 편집을 취소하려면 \"계속\"을 선택하고 대시보드에 남아 있으려면 \"취소\"를 선택하십시오.",
	"workflowCancellation.title": "경고: 워크플로 취소",
	"workflowCancellationDialog.noAffectedFiles": "영향을 받는 파일이 없습니다",
	"workflowStateManagementMessages.statesUpdatedMessage": "{count} {count, plural, one {item} other {items}} 의 상태가 성공적으로 업데이트되었습니다.",
	"workflowStates.locked": "잠김",
	"workflowStates.setState": " {count, plural, one {Set State for \"{name}\"} other {Set State for Items ({count})}}",
	"workflowStates.title": "워크플로 상태"
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));
var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}

/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor =  Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));
var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
let UND;
// Null Or Undefined (nou)
function nou(object) {
  return object === null || object === UND;
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* private */
const bundledTranslations = {
  en,
  es,
  de,
  ko,
  kr: ko // TODO: Currently old studio UI uses the wrong code for korean
};
/* private */
const intl$$ = new Subject();
/* public */
const intl$ = intl$$.asObservable();
/* private */
let currentTranslations = bundledTranslations;
/* private */
let intl = createIntlInstance(getCurrentLocale());
function createIntlInstance(locale) {
  // TODO: Currently old studio UI uses the wrong code for korean
  locale = locale.replace('kr', 'ko');
  return createIntl(
    {
      locale: locale,
      messages: currentTranslations[locale] || en
    },
    createIntlCache()
  );
}
function getPossibleTranslation(titleOrDescriptor, formatMessage, values) {
  if (nou(titleOrDescriptor)) {
    return null;
  }
  return typeof titleOrDescriptor === 'object' ? formatMessage(titleOrDescriptor, values) : titleOrDescriptor;
}
function getCurrentLocale() {
  return getStoredLanguage(localStorage.getItem('username')) || 'en';
}
function buildStoredLanguageKey(username) {
  return `${username}_crafterStudioLanguage`;
}
function getStoredLanguage(username) {
  var _a;
  return (_a = localStorage.getItem(buildStoredLanguageKey(username))) !== null && _a !== void 0
    ? _a
    : localStorage.getItem(`crafterStudioLanguage`);
}
// @ts-ignore
document.addEventListener(
  'setlocale',
  (e) => {
    if (e.detail && e.detail !== intl.locale) {
      intl = createIntlInstance(e.detail);
      document.documentElement.setAttribute('lang', e.detail);
      intl$$.next(intl);
    }
  },
  false
);

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function usePossibleTranslation(titleOrDescriptor, values) {
  const { formatMessage } = useIntl();
  return getPossibleTranslation(titleOrDescriptor, formatMessage, values);
}

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var __rest =
  (undefined && undefined.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };
function ToolsPanelListItemButton(props) {
  const {
      icon,
      title,
      subtitle,
      onClick,
      secondaryActionIcon = React.createElement(ChevronRounded, null),
      onSecondaryActionClick
    } = props,
    listItemButtonProps = __rest(props, [
      'icon',
      'title',
      'subtitle',
      'onClick',
      'secondaryActionIcon',
      'onSecondaryActionClick'
    ]);
  return React.createElement(
    ListItemButton,
    Object.assign({}, listItemButtonProps, { onClick: onClick }),
    icon &&
      React.createElement(
        ListItemIcon,
        null,
        React.createElement(SystemIcon, { icon: icon, fontIconProps: { fontSize: 'small' } })
      ),
    React.createElement(ListItemText, {
      primary: usePossibleTranslation(title),
      secondary: subtitle,
      primaryTypographyProps: { noWrap: true },
      secondaryTypographyProps: { noWrap: true }
    }),
    onSecondaryActionClick
      ? React.createElement(
          ListItemSecondaryAction,
          { style: { right: '5px' } },
          React.createElement(IconButton, { size: 'small', onClick: onSecondaryActionClick }, secondaryActionIcon)
        )
      : React.createElement(ChevronRounded, null)
  );
}

var js_cookie = createCommonjsModule(function (module, exports) {
(function (global, factory) {
   module.exports = factory() ;
}(commonjsGlobal, (function () {
  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (key, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      key = encodeURIComponent(key)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        key + '=' + converter.write(value, key) + stringifiedAttributes)
    }

    function get (key) {
      if (typeof document === 'undefined' || (arguments.length && !key)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var foundKey = decodeURIComponent(parts[0]);
          jar[foundKey] = converter.read(value, foundKey);

          if (key === foundKey) {
            break
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar
    }

    return Object.create(
      {
        set: set,
        get: get,
        remove: function (key, attributes) {
          set(
            key,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

})));
});

var jsCookie = js_cookie;

const cardClasses = generateUtilityClasses('MuiCard', ['root']);

var ReactComponent = function (_a) {
    var boardId = _a.boardId;
    useEffect(function () {
        dataLoadChannels();
        var intervalRef = setInterval(function () {
            dataLoadChannels();
        }, 10000);
        return function () {
            clearInterval(intervalRef);
        };
    }, []);
    var dataLoadChannels = function () {
        // @ts-ignore
        var siteId = jsCookie.get('crafterSite');
        // @ts-ignore
        var serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/trellowf/trellowf/board/lists.json' + '?siteId=' + siteId;
        if (boardId) {
            serviceUrl += '&boardId=' + boardId;
        }
        // @ts-ignore
        CrafterCMSNext.util.ajax.get(serviceUrl).subscribe(function (response) {
            setState(__assign(__assign({}, state), { board: __assign({}, response.response.result.board), lists: __assign({}, response.response.result.lists) }));
        });
    };
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var darkMode = useTheme$3().palette.mode === 'dark';
    var _c = useState({
        board: { name: '', url: '', prefs: { backgroundImage: '' } },
        lists: {}
    }), state = _c[0], setState = _c[1];
    return (createElement(Fragment$1, null,
        createElement(ToolsPanelListItemButton, { icon: { id: '@mui/icons-material/AbcRounded' }, title: state.board.name, onClick: function () { return setOpen(true); } }),
        createElement(Dialog, { fullWidth: true, maxWidth: 'xl', onClose: function () { return setOpen(false); }, "aria-labelledby": "simple-dialog-title", open: open, style: { overflow: 'auto' } },
            createElement(DialogTitle, { sx: { display: 'flex', justifyContent: 'space-between' }, id: "max-width-dialog-title" },
                createElement(Typography$1, null, state.board.name),
                createElement(IconButton$1, { href: state.board.url, target: "new", "aria-label": "Edit in Trello" },
                    createElement(EditRoundedIcon, null))),
            createElement(Grid, { container: true, spacing: 2, style: { backgroundImage: "url(" + state.board.prefs.backgroundImage + ")" } },
                createElement(Grid, { item: true, xs: 12 },
                    createElement(Grid, { container: true, justifyContent: "left", paddingTop: 3, paddingBottom: 3, paddingLeft: 3, spacing: 3, style: { flexFlow: 'row' } }, state.lists &&
                        Object.entries(state.lists).map(function (_a) {
                            var _b;
                            var listIdx = _a[0];
                            var list = state.lists[listIdx];
                            var cards = list.cards &&
                                Object.entries(list.cards).map(function (_a) {
                                    var cardIdx = _a[0];
                                    var card = list.cards[cardIdx];
                                    return (createElement(Card, { elevation: 3, sx: { borderTop: card.cover.color ? "10px solid " + card.cover.color : "" } },
                                        createElement(CardHeader, { action: createElement(IconButton$1, { href: card.url, target: "card", "aria-label": "Edit in Trello" },
                                                createElement(EditRoundedIcon, null)), title: card.name, titleTypographyProps: { variant: 'body1' } })));
                                });
                            return (createElement(Paper, { elevation: 1, style: { margin: '10px' }, sx: { p: 1, bgcolor: darkMode ? 'grey' : 'grey.A200' } },
                                createElement(Typography$1, { variant: "h6", component: "h2", sx: { mb: 1 } }, list.name),
                                createElement(Box, { sx: (_b = {}, _b["." + cardClasses.root + ":not(:last-child)"] = { mb: 1 }, _b) }, cards)));
                        })))))));
};

var plugin /*: PluginDescriptor */ = {
    id: 'org.rd.plugin.trellowf',
    name: 'Sample component library',
    description: 'An example plugin of a component library',
    author: 'Russ Danner',
    logo: null,
    locales: {},
    apps: [],
    widgets: {
        'org.rd.plugin.trellowf.components.reactComponent': ReactComponent
    },
    scripts: [],
    stylesheets: [],
    themes: []
};

export default plugin;
