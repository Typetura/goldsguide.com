/**
 * Copyright 2018-2021 Typetura LLC
 * typetura.com

 * typetura.js is subject to the Typetura platform license
 * https://docs.typetura.com/legal/copyright

 * US Patent US10769348B1
 */

"use strict";
window.typetura = {
  selectors: [
    ".typetura",
    ".primary-headline",
    ".primary-subheadline",
    ".section-headline",
    ".section-label",
    ".pullquote",
    ".meta",
    "main",
    "article",
    "section",
    "aside",
    "[class*='block']",
    ".typetura-prose h1",
    ".typetura-prose h2",
    ".typetura-prose h3",
    ".typetura-prose h4",
    ".typetura-prose h5",
    ".typetura-prose h6",
  ],
};

(function (factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function () {
  "use strict";

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length)
              return {
                done: true,
              };
            return {
              done: false,
              value: o[i++],
            };
          },
          e: function (e) {
            throw e;
          },
          f: F,
        };
      }

      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }

    var it,
      normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      },
    };
  }

  var typeturize = function typeturize(element) {
    if (typeof window.ResizeObserver !== "undefined") {
      var resizeObserver = new window.ResizeObserver(function (entries) {
        window.requestAnimationFrame(function () {
          if (!Array.isArray(entries) || !entries.length) {
            return;
          }

          var _iterator = _createForOfIteratorHelper(entries),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var entry = _step.value;

              if (entry.contentRect) {
                entry.target.style.setProperty(
                  "--tt-bind",
                  entry.contentRect.width
                );
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      });
      resizeObserver.observe(element);
    }
  };

  var typeturaInit = function typeturaInit() {
    var options =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var selectors = options.selectors || [".typetura"];
    return new Promise(function (resolve, reject) {
      // Look for new elements on the page that might be Typetura contexts.
      var mutationObserver = new window.MutationObserver(mutations);
      mutationObserver.observe(document.documentElement, {
        childList: true,
        attributes: false,
        subtree: true,
      }); // Loop through new elements and attach resize observations.

      function mutations(mutationsList) {
        mutationsList.forEach(function (mutation) {
          var nodes = mutation.addedNodes;
          nodes.forEach(function (node) {
            if (node.classList) {
              if (node.matches(selectors)) {
                typeturize(node);
              }
            }
          });
        });
      }

      typeturize(document.documentElement); // Write typetura properties to the top of the document head to avoid cascade conflicts
      resolve();
    });
  };

  window.typetura = window.typetura || {
    selectors: [".typetura"],
  };
  typeturaInit(window.typetura);
});
