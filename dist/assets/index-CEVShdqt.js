var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return (e && (t = e((e = 0))), t);
    } catch (e) {
      throw ((n = [e]), e);
    }
  },
  s = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  u = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  d = (e) =>
    a.call(e, `module.exports`)
      ? e[`module.exports`]
      : l(t({}, `__esModule`, { value: !0 }), e);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var f = s((e) => {
    var t = Symbol.for(`react.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.provider`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.iterator;
    function p(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (f && e[f]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var m = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      h = Object.assign,
      g = {};
    function _(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = n || m));
    }
    ((_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `setState(...): takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function v() {}
    v.prototype = _.prototype;
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = n || m));
    }
    var b = (y.prototype = new v());
    ((b.constructor = y), h(b, _.prototype), (b.isPureReactComponent = !0));
    var x = Array.isArray,
      S = Object.prototype.hasOwnProperty,
      C = { current: null },
      w = { key: !0, ref: !0, __self: !0, __source: !0 };
    function T(e, n, r) {
      var i,
        a = {},
        o = null,
        s = null;
      if (n != null)
        for (i in (n.ref !== void 0 && (s = n.ref),
        n.key !== void 0 && (o = `` + n.key),
        n))
          S.call(n, i) && !w.hasOwnProperty(i) && (a[i] = n[i]);
      var c = arguments.length - 2;
      if (c === 1) a.children = r;
      else if (1 < c) {
        for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
        a.children = l;
      }
      if (e && e.defaultProps)
        for (i in ((c = e.defaultProps), c)) a[i] === void 0 && (a[i] = c[i]);
      return {
        $$typeof: t,
        type: e,
        key: o,
        ref: s,
        props: a,
        _owner: C.current,
      };
    }
    function ee(e, n) {
      return {
        $$typeof: t,
        type: e.type,
        key: n,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function te(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ne(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var re = /\/+/g;
    function ie(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ne(`` + e.key)
        : t.toString(36);
    }
    function ae(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
            }
        }
      if (c)
        return (
          (c = e),
          (o = o(c)),
          (e = a === `` ? `.` + ie(c, 0) : a),
          x(o)
            ? ((i = ``),
              e != null && (i = e.replace(re, `$&/`) + `/`),
              ae(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (te(o) &&
                (o = ee(
                  o,
                  i +
                    (!o.key || (c && c.key === o.key)
                      ? ``
                      : (`` + o.key).replace(re, `$&/`) + `/`) +
                    e,
                )),
              r.push(o)),
          1
        );
      if (((c = 0), (a = a === `` ? `.` : a + `:`), x(e)))
        for (var l = 0; l < e.length; l++) {
          s = e[l];
          var u = a + ie(s, l);
          c += ae(s, r, i, u, o);
        }
      else if (((u = p(e)), typeof u == `function`))
        for (e = u.call(e), l = 0; !(s = e.next()).done; )
          ((s = s.value), (u = a + ie(s, l++)), (c += ae(s, r, i, u, o)));
      else if (s === `object`)
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      return c;
    }
    function oe(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ae(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function se(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var ce = { current: null },
      le = { transition: null },
      E = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: C,
      };
    function ue() {
      throw Error(`act(...) is not supported in production builds of React.`);
    }
    ((e.Children = {
      map: oe,
      forEach: function (e, t, n) {
        oe(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          oe(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          oe(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!te(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    }),
      (e.Component = _),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = y),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E),
      (e.act = ue),
      (e.cloneElement = function (e, n, r) {
        if (e == null)
          throw Error(
            `React.cloneElement(...): The argument must be a React element, but you passed ` +
              e +
              `.`,
          );
        var i = h({}, e.props),
          a = e.key,
          o = e.ref,
          s = e._owner;
        if (n != null) {
          if (
            (n.ref !== void 0 && ((o = n.ref), (s = C.current)),
            n.key !== void 0 && (a = `` + n.key),
            e.type && e.type.defaultProps)
          )
            var c = e.type.defaultProps;
          for (l in n)
            S.call(n, l) &&
              !w.hasOwnProperty(l) &&
              (i[l] = n[l] === void 0 && c !== void 0 ? c[l] : n[l]);
        }
        var l = arguments.length - 2;
        if (l === 1) i.children = r;
        else if (1 < l) {
          c = Array(l);
          for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
          i.children = c;
        }
        return {
          $$typeof: t,
          type: e.type,
          key: a,
          ref: o,
          props: i,
          _owner: s,
        };
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }),
          (e.Provider = { $$typeof: o, _context: e }),
          (e.Consumer = e)
        );
      }),
      (e.createElement = T),
      (e.createFactory = function (e) {
        var t = T.bind(null, e);
        return ((t.type = e), t);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = te),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: se,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = le.transition;
        le.transition = {};
        try {
          e();
        } finally {
          le.transition = t;
        }
      }),
      (e.unstable_act = ue),
      (e.useCallback = function (e, t) {
        return ce.current.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return ce.current.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e) {
        return ce.current.useDeferredValue(e);
      }),
      (e.useEffect = function (e, t) {
        return ce.current.useEffect(e, t);
      }),
      (e.useId = function () {
        return ce.current.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return ce.current.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return ce.current.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return ce.current.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return ce.current.useMemo(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return ce.current.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return ce.current.useRef(e);
      }),
      (e.useState = function (e) {
        return ce.current.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return ce.current.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return ce.current.useTransition();
      }),
      (e.version = `18.3.1`));
  }),
  p = s((e, t) => {
    t.exports = f();
  }),
  m = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      typeof performance == `object` &&
      typeof performance.now == `function`
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = typeof setTimeout == `function` ? setTimeout : null,
      _ = typeof clearTimeout == `function` ? clearTimeout : null,
      v = typeof setImmediate < `u` ? setImmediate : null;
    typeof navigator < `u` &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function b(e) {
      if (((h = !1), y(e), !m)) {
        if (n(c) !== null) ((m = !0), oe(x));
        else {
          var t = n(l);
          t !== null && se(b, t.startTime - e);
        }
      }
    }
    function x(t, i) {
      ((m = !1), h && ((h = !1), _(w), (w = -1)), (p = !0));
      var a = f;
      try {
        for (
          y(i), d = n(c);
          d !== null && (!(d.expirationTime > i) || (t && !te()));
        ) {
          var o = d.callback;
          if (typeof o == `function`) {
            ((d.callback = null), (f = d.priorityLevel));
            var s = o(d.expirationTime <= i);
            ((i = e.unstable_now()),
              typeof s == `function` ? (d.callback = s) : d === n(c) && r(c),
              y(i));
          } else r(c);
          d = n(c);
        }
        if (d !== null) var u = !0;
        else {
          var g = n(l);
          (g !== null && se(b, g.startTime - i), (u = !1));
        }
        return u;
      } finally {
        ((d = null), (f = a), (p = !1));
      }
    }
    var S = !1,
      C = null,
      w = -1,
      T = 5,
      ee = -1;
    function te() {
      return !(e.unstable_now() - ee < T);
    }
    function ne() {
      if (C !== null) {
        var t = e.unstable_now();
        ee = t;
        var n = !0;
        try {
          n = C(!0, t);
        } finally {
          n ? re() : ((S = !1), (C = null));
        }
      } else S = !1;
    }
    var re;
    if (typeof v == `function`)
      re = function () {
        v(ne);
      };
    else if (typeof MessageChannel < `u`) {
      var ie = new MessageChannel(),
        ae = ie.port2;
      ((ie.port1.onmessage = ne),
        (re = function () {
          ae.postMessage(null);
        }));
    } else
      re = function () {
        g(ne, 0);
      };
    function oe(e) {
      ((C = e), S || ((S = !0), re()));
    }
    function se(t, n) {
      w = g(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || p || ((m = !0), oe(x));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (T = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(c);
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (_(w), (w = -1)) : (h = !0), se(b, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), oe(x))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  h = s((e, t) => {
    t.exports = m();
  }),
  g = s((e) => {
    var t = p(),
      n = h();
    function r(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    var i = new Set(),
      a = {};
    function o(e, t) {
      (s(e, t), s(e + `Capture`, t));
    }
    function s(e, t) {
      for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
    }
    var c = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      l = Object.prototype.hasOwnProperty,
      u =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      d = {},
      f = {};
    function m(e) {
      return l.call(f, e)
        ? !0
        : l.call(d, e)
          ? !1
          : u.test(e)
            ? (f[e] = !0)
            : ((d[e] = !0), !1);
    }
    function g(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case `function`:
        case `symbol`:
          return !0;
        case `boolean`:
          return r
            ? !1
            : n === null
              ? ((e = e.toLowerCase().slice(0, 5)),
                e !== `data-` && e !== `aria-`)
              : !n.acceptsBooleans;
        default:
          return !1;
      }
    }
    function _(e, t, n, r) {
      if (t == null || g(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function v(e, t, n, r, i, a, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
    }
    var y = {};
    (`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
      .split(` `)
      .forEach(function (e) {
        y[e] = new v(e, 0, !1, e, null, !1, !1);
      }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        y[t] = new v(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        y[e] = new v(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        y[e] = new v(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        y[e] = new v(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        y[e] = new v(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }));
    var b = /[\-:]([a-z])/g;
    function x(e) {
      return e[1].toUpperCase();
    }
    (`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
      .split(` `)
      .forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(t, 1, !1, e, null, !1, !1);
      }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(b, x);
          y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new v(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }));
    function S(e, t, n, r) {
      var i = y.hasOwnProperty(t) ? y[t] : null;
      (i === null
        ? r ||
          !(2 < t.length) ||
          (t[0] !== `o` && t[0] !== `O`) ||
          (t[1] !== `n` && t[1] !== `N`)
        : i.type !== 0) &&
        (_(t, n, i, r) && (n = null),
        r || i === null
          ? m(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? i.type !== 3 && `` : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && !0 === n) ? `` : `` + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      w = Symbol.for(`react.element`),
      T = Symbol.for(`react.portal`),
      ee = Symbol.for(`react.fragment`),
      te = Symbol.for(`react.strict_mode`),
      ne = Symbol.for(`react.profiler`),
      re = Symbol.for(`react.provider`),
      ie = Symbol.for(`react.context`),
      ae = Symbol.for(`react.forward_ref`),
      oe = Symbol.for(`react.suspense`),
      se = Symbol.for(`react.suspense_list`),
      ce = Symbol.for(`react.memo`),
      le = Symbol.for(`react.lazy`),
      E = Symbol.for(`react.offscreen`),
      ue = Symbol.iterator;
    function de(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ue && e[ue]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var D = Object.assign,
      fe;
    function pe(e) {
      if (fe === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          fe = (t && t[1]) || ``;
        }
      return (
        `
` +
        fe +
        e
      );
    }
    var me = !1;
    function he(e, t) {
      if (!e || me) return ``;
      me = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) {
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == `object` && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && typeof t.stack == `string`) {
          for (
            var i = t.stack.split(`
`),
              a = r.stack.split(`
`),
              o = i.length - 1,
              s = a.length - 1;
            1 <= o && 0 <= s && i[o] !== a[s];
          )
            s--;
          for (; 1 <= o && 0 <= s; o--, s--)
            if (i[o] !== a[s]) {
              if (o !== 1 || s !== 1)
                do
                  if ((o--, s--, 0 > s || i[o] !== a[s])) {
                    var c =
                      `
` + i[o].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        c.includes(`<anonymous>`) &&
                        (c = c.replace(`<anonymous>`, e.displayName)),
                      c
                    );
                  }
                while (1 <= o && 0 <= s);
              break;
            }
        }
      } finally {
        ((me = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : ``) ? pe(e) : ``;
    }
    function ge(e) {
      switch (e.tag) {
        case 5:
          return pe(e.type);
        case 16:
          return pe(`Lazy`);
        case 13:
          return pe(`Suspense`);
        case 19:
          return pe(`SuspenseList`);
        case 0:
        case 2:
        case 15:
          return ((e = he(e.type, !1)), e);
        case 11:
          return ((e = he(e.type.render, !1)), e);
        case 1:
          return ((e = he(e.type, !0)), e);
        default:
          return ``;
      }
    }
    function O(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ee:
          return `Fragment`;
        case T:
          return `Portal`;
        case ne:
          return `Profiler`;
        case te:
          return `StrictMode`;
        case oe:
          return `Suspense`;
        case se:
          return `SuspenseList`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case ie:
            return (e.displayName || `Context`) + `.Consumer`;
          case re:
            return (e._context.displayName || `Context`) + `.Provider`;
          case ae:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ce:
            return (
              (t = e.displayName || null),
              t === null ? O(e.type) || `Memo` : t
            );
          case le:
            ((t = e._payload), (e = e._init));
            try {
              return O(e(t));
            } catch {}
        }
      return null;
    }
    function _e(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return `Cache`;
        case 9:
          return (t.displayName || `Context`) + `.Consumer`;
        case 10:
          return (t._context.displayName || `Context`) + `.Provider`;
        case 18:
          return `DehydratedFragment`;
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ``),
            t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)
          );
        case 7:
          return `Fragment`;
        case 5:
          return t;
        case 4:
          return `Portal`;
        case 3:
          return `Root`;
        case 6:
          return `Text`;
        case 16:
          return O(t);
        case 8:
          return t === te ? `StrictMode` : `Mode`;
        case 22:
          return `Offscreen`;
        case 12:
          return `Profiler`;
        case 21:
          return `Scope`;
        case 13:
          return `Suspense`;
        case 19:
          return `SuspenseList`;
        case 25:
          return `TracingMarker`;
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == `function`) return t.displayName || t.name || null;
          if (typeof t == `string`) return t;
      }
      return null;
    }
    function ve(e) {
      switch (typeof e) {
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function k(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function ye(e) {
      var t = k(e) ? `checked` : `value`,
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `` + e[t];
      if (
        !e.hasOwnProperty(t) &&
        n !== void 0 &&
        typeof n.get == `function` &&
        typeof n.set == `function`
      ) {
        var i = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((r = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function be(e) {
      e._valueTracker ||= ye(e);
    }
    function xe(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = k(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Se(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ce(e, t) {
      var n = t.checked;
      return D({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function we(e, t) {
      var n = t.defaultValue == null ? `` : t.defaultValue,
        r = t.checked == null ? t.defaultChecked : t.checked;
      ((n = ve(t.value == null ? n : t.value)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === `checkbox` || t.type === `radio`
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Te(e, t) {
      ((t = t.checked), t != null && S(e, `checked`, t, !1));
    }
    function Ee(e, t) {
      Te(e, t);
      var n = ve(t.value),
        r = t.type;
      if (n != null)
        r === `number`
          ? ((n === 0 && e.value === ``) || e.value != n) && (e.value = `` + n)
          : e.value !== `` + n && (e.value = `` + n);
      else if (r === `submit` || r === `reset`) {
        e.removeAttribute(`value`);
        return;
      }
      (t.hasOwnProperty(`value`)
        ? Oe(e, t.type, n)
        : t.hasOwnProperty(`defaultValue`) && Oe(e, t.type, ve(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function De(e, t, n) {
      if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
        var r = t.type;
        if (
          !(
            (r !== `submit` && r !== `reset`) ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        ((t = `` + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== `` && (e.name = ``),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== `` && (e.name = n));
    }
    function Oe(e, t, n) {
      (t !== `number` || Se(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = `` + e._wrapperState.initialValue)
          : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
    }
    var ke = Array.isArray;
    function Ae(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + ve(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function je(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
      return D({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `` + e._wrapperState.initialValue,
      });
    }
    function Me(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(r(92));
          if (ke(n)) {
            if (1 < n.length) throw Error(r(93));
            n = n[0];
          }
          t = n;
        }
        ((t ??= ``), (n = t));
      }
      e._wrapperState = { initialValue: ve(n) };
    }
    function Ne(e, t) {
      var n = ve(t.value),
        r = ve(t.defaultValue);
      (n != null &&
        ((n = `` + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = `` + r));
    }
    function Pe(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== `` &&
        t !== null &&
        (e.value = t);
    }
    function Fe(e) {
      switch (e) {
        case `svg`:
          return `http://www.w3.org/2000/svg`;
        case `math`:
          return `http://www.w3.org/1998/Math/MathML`;
        default:
          return `http://www.w3.org/1999/xhtml`;
      }
    }
    function Ie(e, t) {
      return e == null || e === `http://www.w3.org/1999/xhtml`
        ? Fe(t)
        : e === `http://www.w3.org/2000/svg` && t === `foreignObject`
          ? `http://www.w3.org/1999/xhtml`
          : e;
    }
    var Le,
      Re = (function (e) {
        return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e)
          e.innerHTML = t;
        else {
          for (
            Le ||= document.createElement(`div`),
              Le.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`,
              t = Le.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function ze(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var A = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Be = [`Webkit`, `ms`, `Moz`, `O`];
    Object.keys(A).forEach(function (e) {
      Be.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (A[t] = A[e]));
      });
    });
    function Ve(e, t, n) {
      return t == null || typeof t == `boolean` || t === ``
        ? ``
        : n || typeof t != `number` || t === 0 || (A.hasOwnProperty(e) && A[e])
          ? (`` + t).trim()
          : t + `px`;
    }
    function He(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf(`--`) === 0,
            i = Ve(n, t[n], r);
          (n === `float` && (n = `cssFloat`),
            r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var Ue = D(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function We(e, t) {
      if (t) {
        if (Ue[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(r(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(r(60));
          if (
            typeof t.dangerouslySetInnerHTML != `object` ||
            !(`__html` in t.dangerouslySetInnerHTML)
          )
            throw Error(r(61));
        }
        if (t.style != null && typeof t.style != `object`) throw Error(r(62));
      }
    }
    function Ge(e, t) {
      if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Ke = null;
    function qe(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Je = null,
      Ye = null,
      Xe = null;
    function Ze(e) {
      if ((e = Wi(e))) {
        if (typeof Je != `function`) throw Error(r(280));
        var t = e.stateNode;
        t && ((t = Ki(t)), Je(e.stateNode, e.type, t));
      }
    }
    function Qe(e) {
      Ye ? (Xe ? Xe.push(e) : (Xe = [e])) : (Ye = e);
    }
    function $e() {
      if (Ye) {
        var e = Ye,
          t = Xe;
        if (((Xe = Ye = null), Ze(e), t))
          for (e = 0; e < t.length; e++) Ze(t[e]);
      }
    }
    function et(e, t) {
      return e(t);
    }
    function tt() {}
    var nt = !1;
    function rt(e, t, n) {
      if (nt) return e(t, n);
      nt = !0;
      try {
        return et(e, t, n);
      } finally {
        ((nt = !1), (Ye !== null || Xe !== null) && (tt(), $e()));
      }
    }
    function it(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var i = Ki(n);
      if (i === null) return null;
      n = i[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((i = !i.disabled) ||
            ((e = e.type),
            (i =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !i));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(r(231, t, typeof n));
      return n;
    }
    var at = !1;
    if (c)
      try {
        var ot = {};
        (Object.defineProperty(ot, "passive", {
          get: function () {
            at = !0;
          },
        }),
          window.addEventListener(`test`, ot, ot),
          window.removeEventListener(`test`, ot, ot));
      } catch {
        at = !1;
      }
    function st(e, t, n, r, i, a, o, s, c) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, l);
      } catch (e) {
        this.onError(e);
      }
    }
    var ct = !1,
      lt = null,
      ut = !1,
      dt = null,
      ft = {
        onError: function (e) {
          ((ct = !0), (lt = e));
        },
      };
    function pt(e, t, n, r, i, a, o, s, c) {
      ((ct = !1), (lt = null), st.apply(ft, arguments));
    }
    function mt(e, t, n, i, a, o, s, c, l) {
      if ((pt.apply(this, arguments), ct)) {
        if (ct) {
          var u = lt;
          ((ct = !1), (lt = null));
        } else throw Error(r(198));
        ut || ((ut = !0), (dt = u));
      }
    }
    function ht(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function gt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function _t(e) {
      if (ht(e) !== e) throw Error(r(188));
    }
    function vt(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = ht(e)), t === null)) throw Error(r(188));
        return t === e ? e : null;
      }
      for (var n = e, i = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((i = a.return), i !== null)) {
            n = i;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === n) return (_t(a), e);
            if (o === i) return (_t(a), t);
            o = o.sibling;
          }
          throw Error(r(188));
        }
        if (n.return !== i.return) ((n = a), (i = o));
        else {
          for (var s = !1, c = a.child; c; ) {
            if (c === n) {
              ((s = !0), (n = a), (i = o));
              break;
            }
            if (c === i) {
              ((s = !0), (i = a), (n = o));
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = o.child; c; ) {
              if (c === n) {
                ((s = !0), (n = o), (i = a));
                break;
              }
              if (c === i) {
                ((s = !0), (i = o), (n = a));
                break;
              }
              c = c.sibling;
            }
            if (!s) throw Error(r(189));
          }
        }
        if (n.alternate !== i) throw Error(r(190));
      }
      if (n.tag !== 3) throw Error(r(188));
      return n.stateNode.current === n ? e : t;
    }
    function yt(e) {
      return ((e = vt(e)), e === null ? null : bt(e));
    }
    function bt(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = bt(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var xt = n.unstable_scheduleCallback,
      St = n.unstable_cancelCallback,
      Ct = n.unstable_shouldYield,
      wt = n.unstable_requestPaint,
      j = n.unstable_now,
      Tt = n.unstable_getCurrentPriorityLevel,
      Et = n.unstable_ImmediatePriority,
      Dt = n.unstable_UserBlockingPriority,
      Ot = n.unstable_NormalPriority,
      kt = n.unstable_LowPriority,
      At = n.unstable_IdlePriority,
      jt = null,
      Mt = null;
    function Nt(e) {
      if (Mt && typeof Mt.onCommitFiberRoot == `function`)
        try {
          Mt.onCommitFiberRoot(jt, e, void 0, (e.current.flags & 128) == 128);
        } catch {}
    }
    var Pt = Math.clz32 ? Math.clz32 : Lt,
      Ft = Math.log,
      It = Math.LN2;
    function Lt(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ft(e) / It) | 0)) | 0);
    }
    var Rt = 64,
      zt = 4194304;
    function Bt(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Vt(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var s = o & ~i;
        s === 0 ? ((a &= o), a !== 0 && (r = Bt(a))) : (r = Bt(s));
      } else ((o = n & ~i), o === 0 ? a !== 0 && (r = Bt(a)) : (r = Bt(o)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        (t & i) === 0 &&
        ((i = r & -r), (a = t & -t), i >= a || (i === 16 && a & 4194240))
      )
        return t;
      if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
          ((n = 31 - Pt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function Ht(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ut(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;
      ) {
        var o = 31 - Pt(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ht(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
    }
    function Wt(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e === 0 ? (e & 1073741824 ? 1073741824 : 0) : e
      );
    }
    function Gt() {
      var e = Rt;
      return ((Rt <<= 1), !(Rt & 4194240) && (Rt = 64), e);
    }
    function Kt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function qt(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Pt(t)),
        (e[t] = n));
    }
    function Jt(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Pt(n),
          a = 1 << i;
        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
      }
    }
    function Yt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Pt(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    var M = 0;
    function Xt(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Zt,
      Qt,
      $t,
      en,
      tn,
      nn = !1,
      rn = [],
      an = null,
      on = null,
      sn = null,
      cn = new Map(),
      ln = new Map(),
      un = [],
      dn =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(
          ` `,
        );
    function fn(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          an = null;
          break;
        case `dragenter`:
        case `dragleave`:
          on = null;
          break;
        case `mouseover`:
        case `mouseout`:
          sn = null;
          break;
        case `pointerover`:
        case `pointerout`:
          cn.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          ln.delete(t.pointerId);
      }
    }
    function pn(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Wi(t)), t !== null && Qt(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function mn(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((an = pn(an, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((on = pn(on, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((sn = pn(sn, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (cn.set(a, pn(cn.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            ln.set(a, pn(ln.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function hn(e) {
      var t = Ui(e.target);
      if (t !== null) {
        var n = ht(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = gt(n)), t !== null)) {
              ((e.blockedOn = t),
                tn(e.priority, function () {
                  $t(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function gn(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Dn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Ke = r), n.target.dispatchEvent(r), (Ke = null));
        } else return ((t = Wi(n)), t !== null && Qt(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function _n(e, t, n) {
      gn(e) && n.delete(t);
    }
    function vn() {
      ((nn = !1),
        an !== null && gn(an) && (an = null),
        on !== null && gn(on) && (on = null),
        sn !== null && gn(sn) && (sn = null),
        cn.forEach(_n),
        ln.forEach(_n));
    }
    function yn(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        nn ||
          ((nn = !0),
          n.unstable_scheduleCallback(n.unstable_NormalPriority, vn)));
    }
    function bn(e) {
      function t(t) {
        return yn(t, e);
      }
      if (0 < rn.length) {
        yn(rn[0], e);
        for (var n = 1; n < rn.length; n++) {
          var r = rn[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        an !== null && yn(an, e),
          on !== null && yn(on, e),
          sn !== null && yn(sn, e),
          cn.forEach(t),
          ln.forEach(t),
          n = 0;
        n < un.length;
        n++
      )
        ((r = un[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
        (hn(n), n.blockedOn === null && un.shift());
    }
    var xn = C.ReactCurrentBatchConfig,
      Sn = !0;
    function Cn(e, t, n, r) {
      var i = M,
        a = xn.transition;
      xn.transition = null;
      try {
        ((M = 1), Tn(e, t, n, r));
      } finally {
        ((M = i), (xn.transition = a));
      }
    }
    function wn(e, t, n, r) {
      var i = M,
        a = xn.transition;
      xn.transition = null;
      try {
        ((M = 4), Tn(e, t, n, r));
      } finally {
        ((M = i), (xn.transition = a));
      }
    }
    function Tn(e, t, n, r) {
      if (Sn) {
        var i = Dn(e, t, n, r);
        if (i === null) (_i(e, t, r, En, n), fn(e, r));
        else if (mn(i, e, t, n, r)) r.stopPropagation();
        else if ((fn(e, r), t & 4 && -1 < dn.indexOf(e))) {
          for (; i !== null; ) {
            var a = Wi(i);
            if (
              (a !== null && Zt(a),
              (a = Dn(e, t, n, r)),
              a === null && _i(e, t, r, En, n),
              a === i)
            )
              break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else _i(e, t, r, null, n);
      }
    }
    var En = null;
    function Dn(e, t, n, r) {
      if (((En = null), (e = qe(r)), (e = Ui(e)), e !== null)) {
        if (((t = ht(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = gt(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
      return ((En = e), null);
    }
    function On(e) {
      switch (e) {
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 1;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `toggle`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 4;
        case `message`:
          switch (Tt()) {
            case Et:
              return 1;
            case Dt:
              return 4;
            case Ot:
            case kt:
              return 16;
            case At:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kn = null,
      An = null,
      jn = null;
    function Mn() {
      if (jn) return jn;
      var e,
        t = An,
        n = t.length,
        r,
        i = `value` in kn ? kn.value : kn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (jn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Nn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Pn() {
      return !0;
    }
    function Fn() {
      return !1;
    }
    function In(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Pn
            : Fn),
          (this.isPropagationStopped = Fn),
          this
        );
      }
      return (
        D(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Pn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Pn));
          },
          persist: function () {},
          isPersistent: Pn,
        }),
        t
      );
    }
    var Ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Rn = In(Ln),
      zn = D({}, Ln, { view: 0, detail: 0 }),
      Bn = In(zn),
      Vn,
      Hn,
      Un,
      Wn = D({}, zn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: tr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Un &&
                (Un && e.type === `mousemove`
                  ? ((Vn = e.screenX - Un.screenX),
                    (Hn = e.screenY - Un.screenY))
                  : (Hn = Vn = 0),
                (Un = e)),
              Vn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Hn;
        },
      }),
      Gn = In(Wn),
      Kn = In(D({}, Wn, { dataTransfer: 0 })),
      qn = In(D({}, zn, { relatedTarget: 0 })),
      Jn = In(
        D({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Yn = In(
        D({}, Ln, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Xn = In(D({}, Ln, { data: 0 })),
      Zn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Qn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      $n = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function er(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = $n[e])
          ? !!t[e]
          : !1;
    }
    function tr() {
      return er;
    }
    var nr = In(
        D({}, zn, {
          key: function (e) {
            if (e.key) {
              var t = Zn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Nn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Qn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: tr,
          charCode: function (e) {
            return e.type === `keypress` ? Nn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Nn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      rr = In(
        D({}, Wn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      ir = In(
        D({}, zn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: tr,
        }),
      ),
      ar = In(D({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      or = In(
        D({}, Wn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      sr = [9, 13, 27, 32],
      cr = c && `CompositionEvent` in window,
      lr = null;
    c && `documentMode` in document && (lr = document.documentMode);
    var ur = c && `TextEvent` in window && !lr,
      dr = c && (!cr || (lr && 8 < lr && 11 >= lr)),
      fr = ` `,
      pr = !1;
    function mr(e, t) {
      switch (e) {
        case `keyup`:
          return sr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function hr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var gr = !1;
    function _r(e, t) {
      switch (e) {
        case `compositionend`:
          return hr(t);
        case `keypress`:
          return t.which === 32 ? ((pr = !0), fr) : null;
        case `textInput`:
          return ((e = t.data), e === fr && pr ? null : e);
        default:
          return null;
      }
    }
    function vr(e, t) {
      if (gr)
        return e === `compositionend` || (!cr && mr(e, t))
          ? ((e = Mn()), (jn = An = kn = null), (gr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return dr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var yr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function br(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!yr[e.type] : t === `textarea`;
    }
    function xr(e, t, n, r) {
      (Qe(r),
        (t = yi(t, `onChange`)),
        0 < t.length &&
          ((n = new Rn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Sr = null,
      Cr = null;
    function wr(e) {
      pi(e, 0);
    }
    function Tr(e) {
      if (xe(Gi(e))) return e;
    }
    function Er(e, t) {
      if (e === `change`) return t;
    }
    var Dr = !1;
    if (c) {
      var Or;
      if (c) {
        var kr = `oninput` in document;
        if (!kr) {
          var Ar = document.createElement(`div`);
          (Ar.setAttribute(`oninput`, `return;`),
            (kr = typeof Ar.oninput == `function`));
        }
        Or = kr;
      } else Or = !1;
      Dr = Or && (!document.documentMode || 9 < document.documentMode);
    }
    function jr() {
      Sr && (Sr.detachEvent(`onpropertychange`, Mr), (Cr = Sr = null));
    }
    function Mr(e) {
      if (e.propertyName === `value` && Tr(Cr)) {
        var t = [];
        (xr(t, Cr, e, qe(e)), rt(wr, t));
      }
    }
    function Nr(e, t, n) {
      e === `focusin`
        ? (jr(), (Sr = t), (Cr = n), Sr.attachEvent(`onpropertychange`, Mr))
        : e === `focusout` && jr();
    }
    function Pr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return Tr(Cr);
    }
    function Fr(e, t) {
      if (e === `click`) return Tr(t);
    }
    function Ir(e, t) {
      if (e === `input` || e === `change`) return Tr(t);
    }
    function Lr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Rr = typeof Object.is == `function` ? Object.is : Lr;
    function zr(e, t) {
      if (Rr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!l.call(t, i) || !Rr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Br(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Vr(e, t) {
      var n = Br(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Br(n);
      }
    }
    function Hr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Hr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ur() {
      for (var e = window, t = Se(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Se(e.document);
      }
      return t;
    }
    function Wr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    function Gr(e) {
      var t = Ur(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Hr(n.ownerDocument.documentElement, n)
      ) {
        if (r !== null && Wr(n)) {
          if (
            ((t = r.start),
            (e = r.end),
            e === void 0 && (e = t),
            `selectionStart` in n)
          )
            ((n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e =
              ((t = n.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var i = n.textContent.length,
              a = Math.min(r.start, i);
            ((r = r.end === void 0 ? a : Math.min(r.end, i)),
              !e.extend && a > r && ((i = r), (r = a), (a = i)),
              (i = Vr(n, a)));
            var o = Vr(n, r);
            i &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              a > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode); )
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof n.focus == `function` && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var Kr = c && `documentMode` in document && 11 >= document.documentMode,
      qr = null,
      Jr = null,
      Yr = null,
      N = !1;
    function Xr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      N ||
        qr == null ||
        qr !== Se(r) ||
        ((r = qr),
        `selectionStart` in r && Wr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Yr && zr(Yr, r)) ||
          ((Yr = r),
          (r = yi(Jr, `onSelect`)),
          0 < r.length &&
            ((t = new Rn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = qr))));
    }
    function Zr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Qr = {
        animationend: Zr(`Animation`, `AnimationEnd`),
        animationiteration: Zr(`Animation`, `AnimationIteration`),
        animationstart: Zr(`Animation`, `AnimationStart`),
        transitionend: Zr(`Transition`, `TransitionEnd`),
      },
      $r = {},
      ei = {};
    c &&
      ((ei = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Qr.animationend.animation,
        delete Qr.animationiteration.animation,
        delete Qr.animationstart.animation),
      `TransitionEvent` in window || delete Qr.transitionend.transition);
    function ti(e) {
      if ($r[e]) return $r[e];
      if (!Qr[e]) return e;
      var t = Qr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in ei) return ($r[e] = t[n]);
      return e;
    }
    var ni = ti(`animationend`),
      ri = ti(`animationiteration`),
      ii = ti(`animationstart`),
      P = ti(`transitionend`),
      ai = new Map(),
      oi =
        `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    function si(e, t) {
      (ai.set(e, t), o(t, [e]));
    }
    for (var ci = 0; ci < oi.length; ci++) {
      var li = oi[ci];
      si(li.toLowerCase(), `on` + (li[0].toUpperCase() + li.slice(1)));
    }
    (si(ni, `onAnimationEnd`),
      si(ri, `onAnimationIteration`),
      si(ii, `onAnimationStart`),
      si(`dblclick`, `onDoubleClick`),
      si(`focusin`, `onFocus`),
      si(`focusout`, `onBlur`),
      si(P, `onTransitionEnd`),
      s(`onMouseEnter`, [`mouseout`, `mouseover`]),
      s(`onMouseLeave`, [`mouseout`, `mouseover`]),
      s(`onPointerEnter`, [`pointerout`, `pointerover`]),
      s(`onPointerLeave`, [`pointerout`, `pointerover`]),
      o(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      o(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      o(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      o(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      o(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      o(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var ui =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      di = new Set(
        `cancel close invalid load scroll toggle`.split(` `).concat(ui),
      );
    function fi(e, t, n) {
      var r = e.type || `unknown-event`;
      ((e.currentTarget = n), mt(r, t, void 0, e), (e.currentTarget = null));
    }
    function pi(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (fi(i, s, l), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (fi(i, s, l), (a = c));
            }
        }
      }
      if (ut) throw ((e = dt), (ut = !1), (dt = null), e);
    }
    function F(e, t) {
      var n = t[Bi];
      n === void 0 && (n = t[Bi] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (gi(t, e, 2, !1), n.add(r));
    }
    function mi(e, t, n) {
      var r = 0;
      (t && (r |= 4), gi(n, e, r, t));
    }
    var I = `_reactListening` + Math.random().toString(36).slice(2);
    function hi(e) {
      if (!e[I]) {
        ((e[I] = !0),
          i.forEach(function (t) {
            t !== `selectionchange` &&
              (di.has(t) || mi(t, !1, e), mi(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[I] || ((t[I] = !0), mi(`selectionchange`, !1, t));
      }
    }
    function gi(e, t, n, r) {
      switch (On(t)) {
        case 1:
          var i = Cn;
          break;
        case 4:
          i = wn;
          break;
        default:
          i = Tn;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !at ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function _i(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var c = o.tag;
                if (
                  (c === 3 || c === 4) &&
                  ((c = o.stateNode.containerInfo),
                  c === i || (c.nodeType === 8 && c.parentNode === i))
                )
                  return;
                o = o.return;
              }
            for (; s !== null; ) {
              if (((o = Ui(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      rt(function () {
        var r = a,
          i = qe(n),
          o = [];
        a: {
          var s = ai.get(e);
          if (s !== void 0) {
            var c = Rn,
              l = e;
            switch (e) {
              case `keypress`:
                if (Nn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = nr;
                break;
              case `focusin`:
                ((l = `focus`), (c = qn));
                break;
              case `focusout`:
                ((l = `blur`), (c = qn));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = qn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Gn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = Kn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = ir;
                break;
              case ni:
              case ri:
              case ii:
                c = Jn;
                break;
              case P:
                c = ar;
                break;
              case `scroll`:
                c = Bn;
                break;
              case `wheel`:
                c = or;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = Yn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = rr;
            }
            var u = !!(t & 4),
              d = !u && e === `scroll`,
              f = u ? (s === null ? null : s + `Capture`) : s;
            u = [];
            for (var p = r, m; p !== null; ) {
              m = p;
              var h = m.stateNode;
              if (
                (m.tag === 5 &&
                  h !== null &&
                  ((m = h),
                  f !== null &&
                    ((h = it(p, f)), h != null && u.push(vi(p, h, m)))),
                d)
              )
                break;
              p = p.return;
            }
            0 < u.length &&
              ((s = new c(s, l, null, n, i)),
              o.push({ event: s, listeners: u }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s &&
                n !== Ke &&
                (l = n.relatedTarget || n.fromElement) &&
                (Ui(l) || l[R]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Ui(l) : null),
                  l !== null &&
                    ((d = ht(l)), l !== d || (l.tag !== 5 && l.tag !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l)
            ) {
              if (
                ((u = Gn),
                (h = `onMouseLeave`),
                (f = `onMouseEnter`),
                (p = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((u = rr),
                  (h = `onPointerLeave`),
                  (f = `onPointerEnter`),
                  (p = `pointer`)),
                (d = c == null ? s : Gi(c)),
                (m = l == null ? s : Gi(l)),
                (s = new u(h, p + `leave`, c, n, i)),
                (s.target = d),
                (s.relatedTarget = m),
                (h = null),
                Ui(i) === r &&
                  ((u = new u(f, p + `enter`, l, n, i)),
                  (u.target = m),
                  (u.relatedTarget = d),
                  (h = u)),
                (d = h),
                c && l)
              )
                b: {
                  for (u = c, f = l, p = 0, m = u; m; m = bi(m)) p++;
                  for (m = 0, h = f; h; h = bi(h)) m++;
                  for (; 0 < p - m; ) ((u = bi(u)), p--);
                  for (; 0 < m - p; ) ((f = bi(f)), m--);
                  for (; p--; ) {
                    if (u === f || (f !== null && u === f.alternate)) break b;
                    ((u = bi(u)), (f = bi(f)));
                  }
                  u = null;
                }
              else u = null;
              (c !== null && xi(o, s, c, u, !1),
                l !== null && d !== null && xi(o, d, l, u, !0));
            }
          }
          a: {
            if (
              ((s = r ? Gi(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var g = Er;
            else if (br(s)) {
              if (Dr) g = Ir;
              else {
                g = Pr;
                var _ = Nr;
              }
            } else
              (c = s.nodeName) &&
                c.toLowerCase() === `input` &&
                (s.type === `checkbox` || s.type === `radio`) &&
                (g = Fr);
            if ((g &&= g(e, r))) {
              xr(o, g, n, i);
              break a;
            }
            (_ && _(e, s, r),
              e === `focusout` &&
                (_ = s._wrapperState) &&
                _.controlled &&
                s.type === `number` &&
                Oe(s, `number`, s.value));
          }
          switch (((_ = r ? Gi(r) : window), e)) {
            case `focusin`:
              (br(_) || _.contentEditable === `true`) &&
                ((qr = _), (Jr = r), (Yr = null));
              break;
            case `focusout`:
              Yr = Jr = qr = null;
              break;
            case `mousedown`:
              N = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((N = !1), Xr(o, n, i));
              break;
            case `selectionchange`:
              if (Kr) break;
            case `keydown`:
            case `keyup`:
              Xr(o, n, i);
          }
          var v;
          if (cr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var y = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  y = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  y = `onCompositionUpdate`;
                  break b;
              }
              y = void 0;
            }
          else
            gr
              ? mr(e, n) && (y = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (y = `onCompositionStart`);
          (y &&
            (dr &&
              n.locale !== `ko` &&
              (gr || y !== `onCompositionStart`
                ? y === `onCompositionEnd` && gr && (v = Mn())
                : ((kn = i),
                  (An = `value` in kn ? kn.value : kn.textContent),
                  (gr = !0))),
            (_ = yi(r, y)),
            0 < _.length &&
              ((y = new Xn(y, e, null, n, i)),
              o.push({ event: y, listeners: _ }),
              v ? (y.data = v) : ((v = hr(n)), v !== null && (y.data = v)))),
            (v = ur ? _r(e, n) : vr(e, n)) &&
              ((r = yi(r, `onBeforeInput`)),
              0 < r.length &&
                ((i = new Xn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = v))));
        }
        pi(o, t);
      });
    }
    function vi(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function yi(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        (i.tag === 5 &&
          a !== null &&
          ((i = a),
          (a = it(e, n)),
          a != null && r.unshift(vi(e, a, i)),
          (a = it(e, t)),
          a != null && r.push(vi(e, a, i))),
          (e = e.return));
      }
      return r;
    }
    function bi(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function xi(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (c !== null && c === r) break;
        (s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((c = it(n, a)), c != null && o.unshift(vi(n, c, s)))
            : i || ((c = it(n, a)), c != null && o.push(vi(n, c, s)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var L = /\r\n?/g,
      Si = /\u0000|\uFFFD/g;
    function Ci(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          L,
          `
`,
        )
        .replace(Si, ``);
    }
    function wi(e, t, n) {
      if (((t = Ci(t)), Ci(e) !== t && n)) throw Error(r(425));
    }
    function Ti() {}
    var Ei = null,
      Di = null;
    function Oi(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var ki = typeof setTimeout == `function` ? setTimeout : void 0,
      Ai = typeof clearTimeout == `function` ? clearTimeout : void 0,
      ji = typeof Promise == `function` ? Promise : void 0,
      Mi =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : ji === void 0
            ? ki
            : function (e) {
                return ji.resolve(null).then(e).catch(Ni);
              };
    function Ni(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Pi(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$`)) {
            if (r === 0) {
              (e.removeChild(i), bn(t));
              return;
            }
            r--;
          } else (n !== `$` && n !== `$?` && n !== `$!`) || r++;
        }
        n = i;
      } while (n);
      bn(t);
    }
    function Fi(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === `$` || t === `$!` || t === `$?`)) break;
          if (t === `/$`) return null;
        }
      }
      return e;
    }
    function Ii(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?`) {
            if (t === 0) return e;
            t--;
          } else n === `/$` && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Li = Math.random().toString(36).slice(2),
      Ri = `__reactFiber$` + Li,
      zi = `__reactProps$` + Li,
      R = `__reactContainer$` + Li,
      Bi = `__reactEvents$` + Li,
      Vi = `__reactListeners$` + Li,
      Hi = `__reactHandles$` + Li;
    function Ui(e) {
      var t = e[Ri];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[R] || n[Ri])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Ii(e); e !== null; ) {
              if ((n = e[Ri])) return n;
              e = Ii(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Wi(e) {
      return (
        (e = e[Ri] || e[R]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function Gi(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(r(33));
    }
    function Ki(e) {
      return e[zi] || null;
    }
    var qi = [],
      Ji = -1;
    function Yi(e) {
      return { current: e };
    }
    function z(e) {
      0 > Ji || ((e.current = qi[Ji]), (qi[Ji] = null), Ji--);
    }
    function B(e, t) {
      (Ji++, (qi[Ji] = e.current), (e.current = t));
    }
    var Xi = {},
      Zi = Yi(Xi),
      Qi = Yi(!1),
      $i = Xi;
    function ea(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Xi;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        a;
      for (a in n) i[a] = t[a];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ta(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function na() {
      (z(Qi), z(Zi));
    }
    function ra(e, t, n) {
      if (Zi.current !== Xi) throw Error(r(168));
      (B(Zi, t), B(Qi, n));
    }
    function ia(e, t, n) {
      var i = e.stateNode;
      if (((t = t.childContextTypes), typeof i.getChildContext != `function`))
        return n;
      for (var a in ((i = i.getChildContext()), i))
        if (!(a in t)) throw Error(r(108, _e(e) || `Unknown`, a));
      return D({}, n, i);
    }
    function aa(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Xi),
        ($i = Zi.current),
        B(Zi, e),
        B(Qi, Qi.current),
        !0
      );
    }
    function oa(e, t, n) {
      var i = e.stateNode;
      if (!i) throw Error(r(169));
      (n
        ? ((e = ia(e, t, $i)),
          (i.__reactInternalMemoizedMergedChildContext = e),
          z(Qi),
          z(Zi),
          B(Zi, e))
        : z(Qi),
        B(Qi, n));
    }
    var sa = null,
      ca = !1,
      la = !1;
    function ua(e) {
      sa === null ? (sa = [e]) : sa.push(e);
    }
    function da(e) {
      ((ca = !0), ua(e));
    }
    function fa() {
      if (!la && sa !== null) {
        la = !0;
        var e = 0,
          t = M;
        try {
          var n = sa;
          for (M = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((sa = null), (ca = !1));
        } catch (t) {
          throw (sa !== null && (sa = sa.slice(e + 1)), xt(Et, fa), t);
        } finally {
          ((M = t), (la = !1));
        }
      }
      return null;
    }
    var pa = [],
      ma = 0,
      ha = null,
      ga = 0,
      _a = [],
      va = 0,
      ya = null,
      ba = 1,
      xa = ``;
    function Sa(e, t) {
      ((pa[ma++] = ga), (pa[ma++] = ha), (ha = e), (ga = t));
    }
    function Ca(e, t, n) {
      ((_a[va++] = ba), (_a[va++] = xa), (_a[va++] = ya), (ya = e));
      var r = ba;
      e = xa;
      var i = 32 - Pt(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Pt(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ba = (1 << (32 - Pt(t) + i)) | (n << i) | r),
          (xa = a + e));
      } else ((ba = (1 << a) | (n << i) | r), (xa = e));
    }
    function wa(e) {
      e.return !== null && (Sa(e, 1), Ca(e, 1, 0));
    }
    function Ta(e) {
      for (; e === ha; )
        ((ha = pa[--ma]), (pa[ma] = null), (ga = pa[--ma]), (pa[ma] = null));
      for (; e === ya; )
        ((ya = _a[--va]),
          (_a[va] = null),
          (xa = _a[--va]),
          (_a[va] = null),
          (ba = _a[--va]),
          (_a[va] = null));
    }
    var Ea = null,
      V = null,
      H = !1,
      Da = null;
    function Oa(e, t) {
      var n = Jl(5, null, null, 0);
      ((n.elementType = `DELETED`),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function ka(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =
              t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null &&
              ((e.stateNode = t), (Ea = e), (V = Fi(t.firstChild)), !0)
          );
        case 6:
          return (
            (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
            t !== null && ((e.stateNode = t), (Ea = e), (V = null), !0)
          );
        case 13:
          return (
            (t = t.nodeType === 8 ? t : null),
            t !== null &&
              ((n = ya === null ? null : { id: ba, overflow: xa }),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Jl(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ea = e),
              (V = null),
              !0)
          );
        default:
          return !1;
      }
    }
    function Aa(e) {
      return !!(e.mode & 1) && !(e.flags & 128);
    }
    function ja(e) {
      if (H) {
        var t = V;
        if (t) {
          var n = t;
          if (!ka(e, t)) {
            if (Aa(e)) throw Error(r(418));
            t = Fi(n.nextSibling);
            var i = Ea;
            t && ka(e, t)
              ? Oa(i, n)
              : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ea = e));
          }
        } else {
          if (Aa(e)) throw Error(r(418));
          ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ea = e));
        }
      }
    }
    function Ma(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      Ea = e;
    }
    function Na(e) {
      if (e !== Ea) return !1;
      if (!H) return (Ma(e), (H = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== `head` && t !== `body` && !Oi(e.type, e.memoizedProps))),
        (t &&= V))
      ) {
        if (Aa(e)) throw (Pa(), Error(r(418)));
        for (; t; ) (Oa(e, t), (t = Fi(t.nextSibling)));
      }
      if ((Ma(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(r(317));
        a: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === `/$`) {
                if (t === 0) {
                  V = Fi(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          V = null;
        }
      } else V = Ea ? Fi(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Pa() {
      for (var e = V; e; ) e = Fi(e.nextSibling);
    }
    function Fa() {
      ((V = Ea = null), (H = !1));
    }
    function Ia(e) {
      Da === null ? (Da = [e]) : Da.push(e);
    }
    var La = C.ReactCurrentBatchConfig;
    function Ra(e, t, n) {
      if (
        ((e = n.ref),
        e !== null && typeof e != `function` && typeof e != `object`)
      ) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(r(309));
            var i = n.stateNode;
          }
          if (!i) throw Error(r(147, e));
          var a = i,
            o = `` + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == `function` &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (e) {
                var t = a.refs;
                e === null ? delete t[o] : (t[o] = e);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != `string`) throw Error(r(284));
        if (!n._owner) throw Error(r(290, e));
      }
      return e;
    }
    function za(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === `[object Object]`
              ? `object with keys {` + Object.keys(t).join(`, `) + `}`
              : e,
          ),
        )
      );
    }
    function Ba(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Va(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function i(e, t) {
        for (e = new Map(); t !== null; )
          (t.key === null ? e.set(t.index, t) : e.set(t.key, t),
            (t = t.sibling));
        return e;
      }
      function a(e, t) {
        return ((e = Zl(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 2), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 2), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = tu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ee
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === le &&
                  Ba(i) === t.type))
            ? ((r = a(t, n.props)), (r.ref = Ra(e, t, n)), (r.return = e), r)
            : ((r = Ql(n.type, n.key, n.props, null, e.mode, r)),
              (r.ref = Ra(e, t, n)),
              (r.return = e),
              r);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = nu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = $l(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number`)
          return ((t = tu(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case w:
              return (
                (n = Ql(t.type, t.key, t.props, null, e.mode, n)),
                (n.ref = Ra(e, null, t)),
                (n.return = e),
                n
              );
            case T:
              return ((t = nu(t, e.mode, n)), (t.return = e), t);
            case le:
              var r = t._init;
              return f(e, r(t._payload), n);
          }
          if (ke(t) || de(t))
            return ((t = $l(t, e.mode, n, null)), (t.return = e), t);
          za(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case w:
              return n.key === i ? l(e, t, n, r) : null;
            case T:
              return n.key === i ? u(e, t, n, r) : null;
            case le:
              return ((i = n._init), p(e, t, i(n._payload), r));
          }
          if (ke(n) || de(n)) return i === null ? d(e, t, n, r, null) : null;
          za(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case w:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case T:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case le:
              var a = r._init;
              return m(e, t, n, a(r._payload), i);
          }
          if (ke(r) || de(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          za(t, r);
        }
        return null;
      }
      function h(r, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(r, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(r, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(r, d), H && Sa(r, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(r, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (H && Sa(r, h), l);
        }
        for (d = i(r, d); h < s.length; h++)
          ((g = m(d, r, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(r, e);
            }),
          H && Sa(r, h),
          l
        );
      }
      function g(a, s, c, l) {
        var u = de(c);
        if (typeof u != `function`) throw Error(r(150));
        if (((c = u.call(c)), c == null)) throw Error(r(151));
        for (
          var d = (u = null), h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), H && Sa(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (H && Sa(a, g), u);
        }
        for (h = i(a, h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          H && Sa(a, g),
          u
        );
      }
      function _(e, r, i, o) {
        if (
          (typeof i == `object` &&
            i &&
            i.type === ee &&
            i.key === null &&
            (i = i.props.children),
          typeof i == `object` && i)
        ) {
          switch (i.$$typeof) {
            case w:
              a: {
                for (var c = i.key, l = r; l !== null; ) {
                  if (l.key === c) {
                    if (((c = i.type), c === ee)) {
                      if (l.tag === 7) {
                        (n(e, l.sibling),
                          (r = a(l, i.props.children)),
                          (r.return = e),
                          (e = r));
                        break a;
                      }
                    } else if (
                      l.elementType === c ||
                      (typeof c == `object` &&
                        c &&
                        c.$$typeof === le &&
                        Ba(c) === l.type)
                    ) {
                      (n(e, l.sibling),
                        (r = a(l, i.props)),
                        (r.ref = Ra(e, l, i)),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, l);
                    break;
                  }
                  (t(e, l), (l = l.sibling));
                }
                i.type === ee
                  ? ((r = $l(i.props.children, e.mode, o, i.key)),
                    (r.return = e),
                    (e = r))
                  : ((o = Ql(i.type, i.key, i.props, null, e.mode, o)),
                    (o.ref = Ra(e, r, i)),
                    (o.return = e),
                    (e = o));
              }
              return s(e);
            case T:
              a: {
                for (l = i.key; r !== null; ) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      (n(e, r.sibling),
                        (r = a(r, i.children || [])),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((r = nu(i, e.mode, o)), (r.return = e), (e = r));
              }
              return s(e);
            case le:
              return ((l = i._init), _(e, r, l(i._payload), o));
          }
          if (ke(i)) return h(e, r, i, o);
          if (de(i)) return g(e, r, i, o);
          za(e, i);
        }
        return (typeof i == `string` && i !== ``) || typeof i == `number`
          ? ((i = `` + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (r = a(r, i)), (r.return = e), (e = r))
              : (n(e, r), (r = tu(i, e.mode, o)), (r.return = e), (e = r)),
            s(e))
          : n(e, r);
      }
      return _;
    }
    var Ha = Va(!0),
      Ua = Va(!1),
      Wa = Yi(null),
      Ga = null,
      Ka = null,
      qa = null;
    function Ja() {
      qa = Ka = Ga = null;
    }
    function U(e) {
      var t = Wa.current;
      (z(Wa), (e._currentValue = t));
    }
    function Ya(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Xa(e, t) {
      ((Ga = e),
        (qa = Ka = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Ls = !0), (e.firstContext = null)));
    }
    function Za(e) {
      var t = e._currentValue;
      if (qa !== e) {
        if (((e = { context: e, memoizedValue: t, next: null }), Ka === null)) {
          if (Ga === null) throw Error(r(308));
          ((Ka = e), (Ga.dependencies = { lanes: 0, firstContext: e }));
        } else Ka = Ka.next = e;
      }
      return t;
    }
    var Qa = null;
    function $a(e) {
      Qa === null ? (Qa = [e]) : Qa.push(e);
    }
    function eo(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), $a(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        to(e, r)
      );
    }
    function to(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var no = !1;
    function ro(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function io(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function ao(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function oo(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), Y & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          to(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), $a(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        to(e, n)
      );
    }
    function so(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194240))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yt(e, n));
      }
    }
    function co(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function lo(e, t, n, r) {
      var i = e.updateQueue;
      no = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane,
            p = s.eventTime;
          if ((r & f) === f) {
            u !== null &&
              (u = u.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                });
            a: {
              var m = e,
                h = s;
              switch (((f = t), (p = n), h.tag)) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(p, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(p, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = D({}, d, f);
                  break a;
                case 2:
                  no = !0;
              }
            }
            s.callback !== null &&
              s.lane !== 0 &&
              ((e.flags |= 64),
              (f = i.effects),
              f === null ? (i.effects = [s]) : f.push(s));
          } else
            ((p = {
              eventTime: p,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((f = s),
              (s = f.next),
              (f.next = null),
              (i.lastBaseUpdate = f),
              (i.shared.pending = null));
          }
        } while (1);
        if (
          (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          (t = i.shared.interleaved),
          t !== null)
        ) {
          i = t;
          do ((o |= i.lane), (i = i.next));
          while (i !== t);
        } else a === null && (i.shared.lanes = 0);
        ((Qc |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function uo(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var i = e[t],
            a = i.callback;
          if (a !== null) {
            if (((i.callback = null), (i = n), typeof a != `function`))
              throw Error(r(191, a));
            a.call(i);
          }
        }
    }
    var fo = {},
      po = Yi(fo),
      mo = Yi(fo),
      ho = Yi(fo);
    function go(e) {
      if (e === fo) throw Error(r(174));
      return e;
    }
    function _o(e, t) {
      switch ((B(ho, t), B(mo, e), B(po, fo), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Ie(null, ``);
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Ie(t, e)));
      }
      (z(po), B(po, t));
    }
    function vo() {
      (z(po), z(mo), z(ho));
    }
    function yo(e) {
      go(ho.current);
      var t = go(po.current),
        n = Ie(t, e.type);
      t !== n && (B(mo, e), B(po, n));
    }
    function bo(e) {
      mo.current === e && (z(po), z(mo));
    }
    var W = Yi(0);
    function xo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === `$?` || n.data === `$!`)
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var So = [];
    function Co() {
      for (var e = 0; e < So.length; e++)
        So[e]._workInProgressVersionPrimary = null;
      So.length = 0;
    }
    var wo = C.ReactCurrentDispatcher,
      To = C.ReactCurrentBatchConfig,
      Eo = 0,
      G = null,
      Do = null,
      K = null,
      Oo = !1,
      ko = !1,
      Ao = 0,
      jo = 0;
    function Mo() {
      throw Error(r(321));
    }
    function No(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Rr(e[n], t[n])) return !1;
      return !0;
    }
    function Po(e, t, n, i, a, o) {
      if (
        ((Eo = o),
        (G = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (wo.current = e === null || e.memoizedState === null ? _s : vs),
        (e = n(i, a)),
        ko)
      ) {
        o = 0;
        do {
          if (((ko = !1), (Ao = 0), 25 <= o)) throw Error(r(301));
          ((o += 1),
            (K = Do = null),
            (t.updateQueue = null),
            (wo.current = ys),
            (e = n(i, a)));
        } while (ko);
      }
      if (
        ((wo.current = gs),
        (t = Do !== null && Do.next !== null),
        (Eo = 0),
        (K = Do = G = null),
        (Oo = !1),
        t)
      )
        throw Error(r(300));
      return e;
    }
    function Fo() {
      var e = Ao !== 0;
      return ((Ao = 0), e);
    }
    function Io() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (K === null ? (G.memoizedState = K = e) : (K = K.next = e), K);
    }
    function Lo() {
      if (Do === null) {
        var e = G.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = Do.next;
      var t = K === null ? G.memoizedState : K.next;
      if (t !== null) ((K = t), (Do = e));
      else {
        if (e === null) throw Error(r(310));
        ((Do = e),
          (e = {
            memoizedState: Do.memoizedState,
            baseState: Do.baseState,
            baseQueue: Do.baseQueue,
            queue: Do.queue,
            next: null,
          }),
          K === null ? (G.memoizedState = K = e) : (K = K.next = e));
      }
      return K;
    }
    function Ro(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function zo(e) {
      var t = Lo(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = Do,
        a = i.baseQueue,
        o = n.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((i.baseQueue = a = o), (n.pending = null));
      }
      if (a !== null) {
        ((o = a.next), (i = i.baseState));
        var c = (s = null),
          l = null,
          u = o;
        do {
          var d = u.lane;
          if ((Eo & d) === d)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (i = u.hasEagerState ? u.eagerState : e(i, u.action)));
          else {
            var f = {
              lane: d,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            (l === null ? ((c = l = f), (s = i)) : (l = l.next = f),
              (G.lanes |= d),
              (Qc |= d));
          }
          u = u.next;
        } while (u !== null && u !== o);
        (l === null ? (s = i) : (l.next = c),
          Rr(i, t.memoizedState) || (Ls = !0),
          (t.memoizedState = i),
          (t.baseState = s),
          (t.baseQueue = l),
          (n.lastRenderedState = i));
      }
      if (((e = n.interleaved), e !== null)) {
        a = e;
        do ((o = a.lane), (G.lanes |= o), (Qc |= o), (a = a.next));
        while (a !== e);
      } else a === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Bo(e) {
      var t = Lo(),
        n = t.queue;
      if (n === null) throw Error(r(311));
      n.lastRenderedReducer = e;
      var i = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Rr(o, t.memoizedState) || (Ls = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, i];
    }
    function Vo() {}
    function Ho(e, t) {
      var n = G,
        i = Lo(),
        a = t(),
        o = !Rr(i.memoizedState, a);
      if (
        (o && ((i.memoizedState = a), (Ls = !0)),
        (i = i.queue),
        es(Go.bind(null, n, i, e), [e]),
        i.getSnapshot !== t || o || (K !== null && K.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          Yo(9, Wo.bind(null, n, i, a, t), void 0, null),
          Gc === null)
        )
          throw Error(r(349));
        Eo & 30 || Uo(n, t, a);
      }
      return a;
    }
    function Uo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = G.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (G.updateQueue = t),
            (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Wo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ko(t) && qo(e));
    }
    function Go(e, t, n) {
      return n(function () {
        Ko(t) && qo(e);
      });
    }
    function Ko(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Rr(e, n);
      } catch {
        return !0;
      }
    }
    function qo(e) {
      var t = to(e, 1);
      t !== null && vl(t, e, 1, -1);
    }
    function Jo(e) {
      var t = Io();
      return (
        typeof e == `function` && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = fs.bind(null, G, e)),
        [t.memoizedState, e]
      );
    }
    function Yo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = G.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (G.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function Xo() {
      return Lo().memoizedState;
    }
    function Zo(e, t, n, r) {
      var i = Io();
      ((G.flags |= e),
        (i.memoizedState = Yo(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function Qo(e, t, n, r) {
      var i = Lo();
      r = r === void 0 ? null : r;
      var a = void 0;
      if (Do !== null) {
        var o = Do.memoizedState;
        if (((a = o.destroy), r !== null && No(r, o.deps))) {
          i.memoizedState = Yo(t, n, a, r);
          return;
        }
      }
      ((G.flags |= e), (i.memoizedState = Yo(1 | t, n, a, r)));
    }
    function $o(e, t) {
      return Zo(8390656, 8, e, t);
    }
    function es(e, t) {
      return Qo(2048, 8, e, t);
    }
    function ts(e, t) {
      return Qo(4, 2, e, t);
    }
    function ns(e, t) {
      return Qo(4, 4, e, t);
    }
    function rs(e, t) {
      if (typeof t == `function`)
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function is(e, t, n) {
      return (
        (n = n == null ? null : n.concat([e])),
        Qo(4, 4, rs.bind(null, t, e), n)
      );
    }
    function as() {}
    function os(e, t) {
      var n = Lo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && No(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function ss(e, t) {
      var n = Lo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && No(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function cs(e, t, n) {
      return Eo & 21
        ? (Rr(n, t) ||
            ((n = Gt()), (G.lanes |= n), (Qc |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Ls = !0)),
          (e.memoizedState = n));
    }
    function ls(e, t) {
      var n = M;
      ((M = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = To.transition;
      To.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((M = n), (To.transition = r));
      }
    }
    function us() {
      return Lo().memoizedState;
    }
    function ds(e, t, n) {
      var r = _l(e);
      if (
        ((n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        ps(e))
      )
        ms(t, n);
      else if (((n = eo(e, t, n, r)), n !== null)) {
        var i = gl();
        (vl(n, e, r, i), hs(n, t, r));
      }
    }
    function fs(e, t, n) {
      var r = _l(e),
        i = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (ps(e)) ms(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Rr(s, o))) {
              var c = t.interleaved;
              (c === null
                ? ((i.next = i), $a(t))
                : ((i.next = c.next), (c.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = eo(e, t, i, r)),
          n !== null && ((i = gl()), vl(n, e, r, i), hs(n, t, r)));
      }
    }
    function ps(e) {
      var t = e.alternate;
      return e === G || (t !== null && t === G);
    }
    function ms(e, t) {
      ko = Oo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function hs(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yt(e, n));
      }
    }
    var gs = {
        readContext: Za,
        useCallback: Mo,
        useContext: Mo,
        useEffect: Mo,
        useImperativeHandle: Mo,
        useInsertionEffect: Mo,
        useLayoutEffect: Mo,
        useMemo: Mo,
        useReducer: Mo,
        useRef: Mo,
        useState: Mo,
        useDebugValue: Mo,
        useDeferredValue: Mo,
        useTransition: Mo,
        useMutableSource: Mo,
        useSyncExternalStore: Mo,
        useId: Mo,
        unstable_isNewReconciler: !1,
      },
      _s = {
        readContext: Za,
        useCallback: function (e, t) {
          return ((Io().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Za,
        useEffect: $o,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n == null ? null : n.concat([e])),
            Zo(4194308, 4, rs.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return Zo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return Zo(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Io();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Io();
          return (
            (t = n === void 0 ? t : n(t)),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = ds.bind(null, G, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Io();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: Jo,
        useDebugValue: as,
        useDeferredValue: function (e) {
          return (Io().memoizedState = e);
        },
        useTransition: function () {
          var e = Jo(!1),
            t = e[0];
          return ((e = ls.bind(null, e[1])), (Io().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var i = G,
            a = Io();
          if (H) {
            if (n === void 0) throw Error(r(407));
            n = n();
          } else {
            if (((n = t()), Gc === null)) throw Error(r(349));
            Eo & 30 || Uo(i, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            $o(Go.bind(null, i, o, e), [e]),
            (i.flags |= 2048),
            Yo(9, Wo.bind(null, i, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Io(),
            t = Gc.identifierPrefix;
          if (H) {
            var n = xa,
              r = ba;
            ((n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = Ao++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = jo++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      vs = {
        readContext: Za,
        useCallback: os,
        useContext: Za,
        useEffect: es,
        useImperativeHandle: is,
        useInsertionEffect: ts,
        useLayoutEffect: ns,
        useMemo: ss,
        useReducer: zo,
        useRef: Xo,
        useState: function () {
          return zo(Ro);
        },
        useDebugValue: as,
        useDeferredValue: function (e) {
          return cs(Lo(), Do.memoizedState, e);
        },
        useTransition: function () {
          return [zo(Ro)[0], Lo().memoizedState];
        },
        useMutableSource: Vo,
        useSyncExternalStore: Ho,
        useId: us,
        unstable_isNewReconciler: !1,
      },
      ys = {
        readContext: Za,
        useCallback: os,
        useContext: Za,
        useEffect: es,
        useImperativeHandle: is,
        useInsertionEffect: ts,
        useLayoutEffect: ns,
        useMemo: ss,
        useReducer: Bo,
        useRef: Xo,
        useState: function () {
          return Bo(Ro);
        },
        useDebugValue: as,
        useDeferredValue: function (e) {
          var t = Lo();
          return Do === null
            ? (t.memoizedState = e)
            : cs(t, Do.memoizedState, e);
        },
        useTransition: function () {
          return [Bo(Ro)[0], Lo().memoizedState];
        },
        useMutableSource: Vo,
        useSyncExternalStore: Ho,
        useId: us,
        unstable_isNewReconciler: !1,
      };
    function bs(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = D({}, t)), (e = e.defaultProps), e))
          t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function xs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : D({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ss = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? ht(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = gl(),
          i = _l(e),
          a = ao(r, i);
        ((a.payload = t),
          n != null && (a.callback = n),
          (t = oo(e, a, i)),
          t !== null && (vl(t, e, i, r), so(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = gl(),
          i = _l(e),
          a = ao(r, i);
        ((a.tag = 1),
          (a.payload = t),
          n != null && (a.callback = n),
          (t = oo(e, a, i)),
          t !== null && (vl(t, e, i, r), so(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = gl(),
          r = _l(e),
          i = ao(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = oo(e, i, r)),
          t !== null && (vl(t, e, r, n), so(t, e, r)));
      },
    };
    function Cs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !zr(n, r) || !zr(i, a)
            : !0
      );
    }
    function ws(e, t, n) {
      var r = !1,
        i = Xi,
        a = t.contextType;
      return (
        typeof a == `object` && a
          ? (a = Za(a))
          : ((i = ta(t) ? $i : Zi.current),
            (r = t.contextTypes),
            (a = (r = r != null) ? ea(e, i) : Xi)),
        (t = new t(n, a)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ss),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function Ts(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ss.enqueueReplaceState(t, t.state, null));
    }
    function Es(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), ro(e));
      var a = t.contextType;
      (typeof a == `object` && a
        ? (i.context = Za(a))
        : ((a = ta(t) ? $i : Zi.current), (i.context = ea(e, a))),
        (i.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == `function` && (xs(e, t, a, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == `function` ||
          typeof i.getSnapshotBeforeUpdate == `function` ||
          (typeof i.UNSAFE_componentWillMount != `function` &&
            typeof i.componentWillMount != `function`) ||
          ((t = i.state),
          typeof i.componentWillMount == `function` && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == `function` &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && Ss.enqueueReplaceState(i, i.state, null),
          lo(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == `function` && (e.flags |= 4194308));
    }
    function Ds(e, t) {
      try {
        var n = ``,
          r = t;
        do ((n += ge(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (e) {
        i =
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack;
      }
      return { value: e, source: t, stack: i, digest: null };
    }
    function Os(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function ks(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var As = typeof WeakMap == `function` ? WeakMap : Map;
    function js(e, t, n) {
      ((n = ao(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (ol || ((ol = !0), (sl = r)), ks(e, t));
        }),
        n
      );
    }
    function Ms(e, t, n) {
      ((n = ao(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == `function`) {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            ks(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == `function` &&
          (n.callback = function () {
            (ks(e, t),
              typeof r != `function` &&
                (cl === null ? (cl = new Set([this])) : cl.add(this)));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: n === null ? `` : n,
            });
          }),
        n
      );
    }
    function Ns(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new As();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Vl.bind(null, e, t, n)), t.then(e, e));
    }
    function Ps(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Fs(e, t, n, r, i) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null
                  ? (n.tag = 17)
                  : ((t = ao(-1, 1)), (t.tag = 2), oo(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var Is = C.ReactCurrentOwner,
      Ls = !1;
    function Rs(e, t, n, r) {
      t.child = e === null ? Ua(t, null, n, r) : Ha(t, e.child, n, r);
    }
    function zs(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      return (
        Xa(t, i),
        (r = Po(e, t, n, r, a, i)),
        (n = Fo()),
        e !== null && !Ls
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            ac(e, t, i))
          : (H && n && wa(t), (t.flags |= 1), Rs(e, t, r, i), t.child)
      );
    }
    function Bs(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Yl(a) &&
          a.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Vs(e, t, a, r, i))
          : ((e = Ql(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & i) === 0)) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? zr : n),
          n(o, r) && e.ref === t.ref)
        )
          return ac(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = Zl(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Vs(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (zr(a, r) && e.ref === t.ref) {
          if (((Ls = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
            e.flags & 131072 && (Ls = !0);
          else return ((t.lanes = e.lanes), ac(e, t, i));
        }
      }
      return Ws(e, t, n, r, i);
    }
    function Hs(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`) {
        if (!(t.mode & 1))
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            B(Yc, Jc),
            (Jc |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = a === null ? n : a.baseLanes | n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              B(Yc, Jc),
              (Jc |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = a === null ? n : a.baseLanes),
            B(Yc, Jc),
            (Jc |= r));
        }
      } else
        (a === null
          ? (r = n)
          : ((r = a.baseLanes | n), (t.memoizedState = null)),
          B(Yc, Jc),
          (Jc |= r));
      return (Rs(e, t, i, n), t.child);
    }
    function Us(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Ws(e, t, n, r, i) {
      var a = ta(n) ? $i : Zi.current;
      return (
        (a = ea(t, a)),
        Xa(t, i),
        (n = Po(e, t, n, r, a, i)),
        (r = Fo()),
        e !== null && !Ls
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            ac(e, t, i))
          : (H && r && wa(t), (t.flags |= 1), Rs(e, t, n, i), t.child)
      );
    }
    function Gs(e, t, n, r, i) {
      if (ta(n)) {
        var a = !0;
        aa(t);
      } else a = !1;
      if ((Xa(t, i), t.stateNode === null))
        (ic(e, t), ws(t, n, r), Es(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          s = t.memoizedProps;
        o.props = s;
        var c = o.context,
          l = n.contextType;
        typeof l == `object` && l
          ? (l = Za(l))
          : ((l = ta(n) ? $i : Zi.current), (l = ea(t, l)));
        var u = n.getDerivedStateFromProps,
          d =
            typeof u == `function` ||
            typeof o.getSnapshotBeforeUpdate == `function`;
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== r || c !== l) && Ts(t, o, r, l)),
          (no = !1));
        var f = t.memoizedState;
        ((o.state = f),
          lo(t, r, o, i),
          (c = t.memoizedState),
          s !== r || f !== c || Qi.current || no
            ? (typeof u == `function` &&
                (xs(t, n, u, r), (c = t.memoizedState)),
              (s = no || Cs(t, n, s, r, f, c, l))
                ? (d ||
                    (typeof o.UNSAFE_componentWillMount != `function` &&
                      typeof o.componentWillMount != `function`) ||
                    (typeof o.componentWillMount == `function` &&
                      o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == `function` &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = c)),
              (o.props = r),
              (o.state = c),
              (o.context = l),
              (r = s))
            : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((o = t.stateNode),
          io(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : bs(t.type, s)),
          (o.props = l),
          (d = t.pendingProps),
          (f = o.context),
          (c = n.contextType),
          typeof c == `object` && c
            ? (c = Za(c))
            : ((c = ta(n) ? $i : Zi.current), (c = ea(t, c))));
        var p = n.getDerivedStateFromProps;
        ((u =
          typeof p == `function` ||
          typeof o.getSnapshotBeforeUpdate == `function`) ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== d || f !== c) && Ts(t, o, r, c)),
          (no = !1),
          (f = t.memoizedState),
          (o.state = f),
          lo(t, r, o, i));
        var m = t.memoizedState;
        s !== d || f !== m || Qi.current || no
          ? (typeof p == `function` && (xs(t, n, p, r), (m = t.memoizedState)),
            (l = no || Cs(t, n, l, r, f, m, c) || !1)
              ? (u ||
                  (typeof o.UNSAFE_componentWillUpdate != `function` &&
                    typeof o.componentWillUpdate != `function`) ||
                  (typeof o.componentWillUpdate == `function` &&
                    o.componentWillUpdate(r, m, c),
                  typeof o.UNSAFE_componentWillUpdate == `function` &&
                    o.UNSAFE_componentWillUpdate(r, m, c)),
                typeof o.componentDidUpdate == `function` && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof o.componentDidUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = c),
            (r = l))
          : (typeof o.componentDidUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Ks(e, t, n, r, a, i);
    }
    function Ks(e, t, n, r, i, a) {
      Us(e, t);
      var o = !!(t.flags & 128);
      if (!r && !o) return (i && oa(t, n, !1), ac(e, t, a));
      ((r = t.stateNode), (Is.current = t));
      var s =
        o && typeof n.getDerivedStateFromError != `function`
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = Ha(t, e.child, null, a)), (t.child = Ha(t, null, s, a)))
          : Rs(e, t, s, a),
        (t.memoizedState = r.state),
        i && oa(t, n, !0),
        t.child
      );
    }
    function qs(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? ra(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ra(e, t.context, !1),
        _o(e, t.containerInfo));
    }
    function Js(e, t, n, r, i) {
      return (Fa(), Ia(i), (t.flags |= 256), Rs(e, t, n, r), t.child);
    }
    var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Xs(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Zs(e, t, n) {
      var r = t.pendingProps,
        i = W.current,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)),
        s
          ? ((a = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (i |= 1),
        B(W, i & 1),
        e === null)
      )
        return (
          ja(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((t.lanes = t.mode & 1 ? (e.data === `$!` ? 8 : 1073741824) : 1),
              null)
            : ((o = r.children),
              (e = r.fallback),
              a
                ? ((r = t.mode),
                  (a = t.child),
                  (o = { mode: `hidden`, children: o }),
                  !(r & 1) && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = o))
                    : (a = eu(o, r, 0, null)),
                  (e = $l(e, r, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = Xs(n)),
                  (t.memoizedState = Ys),
                  e)
                : Qs(t, o))
        );
      if (
        ((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null))
      )
        return ec(e, t, o, r, s, i, n);
      if (a) {
        ((a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling));
        var c = { mode: `hidden`, children: r.children };
        return (
          !(o & 1) && t.child !== i
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = c),
              (t.deletions = null))
            : ((r = Zl(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          s === null
            ? ((a = $l(a, o, n, null)), (a.flags |= 2))
            : (a = Zl(s, a)),
          (a.return = t),
          (r.return = t),
          (r.sibling = a),
          (t.child = r),
          (r = a),
          (a = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? Xs(n)
              : {
                  baseLanes: o.baseLanes | n,
                  cachePool: null,
                  transitions: o.transitions,
                }),
          (a.memoizedState = o),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = Ys),
          r
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (r = Zl(a, { mode: `visible`, children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions),
          n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function Qs(e, t) {
      return (
        (t = eu({ mode: `visible`, children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function $s(e, t, n, r) {
      return (
        r !== null && Ia(r),
        Ha(t, e.child, null, n),
        (e = Qs(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function ec(e, t, n, i, a, o, s) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (i = Os(Error(r(422)))), $s(e, t, s, i))
          : t.memoizedState === null
            ? ((o = i.fallback),
              (a = t.mode),
              (i = eu({ mode: `visible`, children: i.children }, a, 0, null)),
              (o = $l(o, a, s, null)),
              (o.flags |= 2),
              (i.return = t),
              (o.return = t),
              (i.sibling = o),
              (t.child = i),
              t.mode & 1 && Ha(t, e.child, null, s),
              (t.child.memoizedState = Xs(s)),
              (t.memoizedState = Ys),
              o)
            : ((t.child = e.child), (t.flags |= 128), null);
      if (!(t.mode & 1)) return $s(e, t, s, null);
      if (a.data === `$!`) {
        if (((i = a.nextSibling && a.nextSibling.dataset), i)) var c = i.dgst;
        return (
          (i = c),
          (o = Error(r(419))),
          (i = Os(o, i, void 0)),
          $s(e, t, s, i)
        );
      }
      if (((c = (s & e.childLanes) !== 0), Ls || c)) {
        if (((i = Gc), i !== null)) {
          switch (s & -s) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          ((a = (a & (i.suspendedLanes | s)) === 0 ? a : 0),
            a !== 0 &&
              a !== o.retryLane &&
              ((o.retryLane = a), to(e, a), vl(i, e, a, -1)));
        }
        return (jl(), (i = Os(Error(r(421)))), $s(e, t, s, i));
      }
      return a.data === `$?`
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Ul.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (V = Fi(a.nextSibling)),
          (Ea = t),
          (H = !0),
          (Da = null),
          e !== null &&
            ((_a[va++] = ba),
            (_a[va++] = xa),
            (_a[va++] = ya),
            (ba = e.id),
            (xa = e.overflow),
            (ya = t)),
          (t = Qs(t, i.children)),
          (t.flags |= 4096),
          t);
    }
    function tc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Ya(e.return, t, n));
    }
    function nc(e, t, n, r, i) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
    }
    function rc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((Rs(e, t, r.children, n), (r = W.current), r & 2))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
            else if (e.tag === 19) tc(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((B(W, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (i) {
          case `forwards`:
            for (n = t.child, i = null; n !== null; )
              ((e = n.alternate),
                e !== null && xo(e) === null && (i = n),
                (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              nc(t, !1, i, n, a));
            break;
          case `backwards`:
            for (n = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && xo(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            nc(t, !0, n, null, a);
            break;
          case `together`:
            nc(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function ic(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function ac(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Qc |= t.lanes),
        (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(r(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Zl(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = Zl(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function oc(e, t, n) {
      switch (t.tag) {
        case 3:
          (qs(t), Fa());
          break;
        case 5:
          yo(t);
          break;
        case 1:
          ta(t.type) && aa(t);
          break;
        case 4:
          _o(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (B(Wa, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (B(W, W.current & 1),
                  (e = ac(e, t, n)),
                  e === null ? null : e.sibling)
                : Zs(e, t, n)
              : (B(W, W.current & 1), (t.flags |= 128), null);
          B(W, W.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return rc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            B(W, W.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Hs(e, t, n));
      }
      return ac(e, t, n);
    }
    var sc = function (e, t) {
        for (var n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      },
      cc = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), go(po.current));
          var o = null;
          switch (n) {
            case `input`:
              ((i = Ce(e, i)), (r = Ce(e, r)), (o = []));
              break;
            case `select`:
              ((i = D({}, i, { value: void 0 })),
                (r = D({}, r, { value: void 0 })),
                (o = []));
              break;
            case `textarea`:
              ((i = je(e, i)), (r = je(e, r)), (o = []));
              break;
            default:
              typeof i.onClick != `function` &&
                typeof r.onClick == `function` &&
                (e.onclick = Ti);
          }
          We(n, r);
          var s;
          for (u in ((n = null), i))
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) {
              if (u === `style`) {
                var c = i[u];
                for (s in c) c.hasOwnProperty(s) && ((n ||= {}), (n[s] = ``));
              } else
                u !== `dangerouslySetInnerHTML` &&
                  u !== `children` &&
                  u !== `suppressContentEditableWarning` &&
                  u !== `suppressHydrationWarning` &&
                  u !== `autoFocus` &&
                  (a.hasOwnProperty(u) ? (o ||= []) : (o ||= []).push(u, null));
            }
          for (u in r) {
            var l = r[u];
            if (
              ((c = i?.[u]),
              r.hasOwnProperty(u) && l !== c && (l != null || c != null))
            ) {
              if (u === `style`) {
                if (c) {
                  for (s in c)
                    !c.hasOwnProperty(s) ||
                      (l && l.hasOwnProperty(s)) ||
                      ((n ||= {}), (n[s] = ``));
                  for (s in l)
                    l.hasOwnProperty(s) &&
                      c[s] !== l[s] &&
                      ((n ||= {}), (n[s] = l[s]));
                } else (n || ((o ||= []), o.push(u, n)), (n = l));
              } else
                u === `dangerouslySetInnerHTML`
                  ? ((l = l ? l.__html : void 0),
                    (c = c ? c.__html : void 0),
                    l != null && c !== l && (o ||= []).push(u, l))
                  : u === `children`
                    ? (typeof l != `string` && typeof l != `number`) ||
                      (o ||= []).push(u, `` + l)
                    : u !== `suppressContentEditableWarning` &&
                      u !== `suppressHydrationWarning` &&
                      (a.hasOwnProperty(u)
                        ? (l != null && u === `onScroll` && F(`scroll`, e),
                          o || c === l || (o = []))
                        : (o ||= []).push(u, l));
            }
          }
          n && (o ||= []).push(`style`, n);
          var u = o;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      },
      lc = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
    function uc(e, t) {
      if (!H)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function dc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 14680064),
            (r |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function fc(e, t, n) {
      var i = t.pendingProps;
      switch ((Ta(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (dc(t), null);
        case 1:
          return (ta(t.type) && na(), dc(t), null);
        case 3:
          return (
            (i = t.stateNode),
            vo(),
            z(Qi),
            z(Zi),
            Co(),
            i.pendingContext &&
              ((i.context = i.pendingContext), (i.pendingContext = null)),
            (e === null || e.child === null) &&
              (Na(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Da !== null && (Sl(Da), (Da = null)))),
            dc(t),
            null
          );
        case 5:
          bo(t);
          var o = go(ho.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (cc(e, t, n, i, o),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!i) {
              if (t.stateNode === null) throw Error(r(166));
              return (dc(t), null);
            }
            if (((e = go(po.current)), Na(t))) {
              ((i = t.stateNode), (n = t.type));
              var s = t.memoizedProps;
              switch (((i[Ri] = t), (i[zi] = s), (e = !!(t.mode & 1)), n)) {
                case `dialog`:
                  (F(`cancel`, i), F(`close`, i));
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  F(`load`, i);
                  break;
                case `video`:
                case `audio`:
                  for (o = 0; o < ui.length; o++) F(ui[o], i);
                  break;
                case `source`:
                  F(`error`, i);
                  break;
                case `img`:
                case `image`:
                case `link`:
                  (F(`error`, i), F(`load`, i));
                  break;
                case `details`:
                  F(`toggle`, i);
                  break;
                case `input`:
                  (we(i, s), F(`invalid`, i));
                  break;
                case `select`:
                  ((i._wrapperState = { wasMultiple: !!s.multiple }),
                    F(`invalid`, i));
                  break;
                case `textarea`:
                  (Me(i, s), F(`invalid`, i));
              }
              for (var c in (We(n, s), (o = null), s))
                if (s.hasOwnProperty(c)) {
                  var l = s[c];
                  c === `children`
                    ? typeof l == `string`
                      ? i.textContent !== l &&
                        (!0 !== s.suppressHydrationWarning &&
                          wi(i.textContent, l, e),
                        (o = [`children`, l]))
                      : typeof l == `number` &&
                        i.textContent !== `` + l &&
                        (!0 !== s.suppressHydrationWarning &&
                          wi(i.textContent, l, e),
                        (o = [`children`, `` + l]))
                    : a.hasOwnProperty(c) &&
                      l != null &&
                      c === `onScroll` &&
                      F(`scroll`, i);
                }
              switch (n) {
                case `input`:
                  (be(i), De(i, s, !0));
                  break;
                case `textarea`:
                  (be(i), Pe(i));
                  break;
                case `select`:
                case `option`:
                  break;
                default:
                  typeof s.onClick == `function` && (i.onclick = Ti);
              }
              ((i = o), (t.updateQueue = i), i !== null && (t.flags |= 4));
            } else {
              ((c = o.nodeType === 9 ? o : o.ownerDocument),
                e === `http://www.w3.org/1999/xhtml` && (e = Fe(n)),
                e === `http://www.w3.org/1999/xhtml`
                  ? n === `script`
                    ? ((e = c.createElement(`div`)),
                      (e.innerHTML = `<script><\/script>`),
                      (e = e.removeChild(e.firstChild)))
                    : typeof i.is == `string`
                      ? (e = c.createElement(n, { is: i.is }))
                      : ((e = c.createElement(n)),
                        n === `select` &&
                          ((c = e),
                          i.multiple
                            ? (c.multiple = !0)
                            : i.size && (c.size = i.size)))
                  : (e = c.createElementNS(e, n)),
                (e[Ri] = t),
                (e[zi] = i),
                sc(e, t, !1, !1),
                (t.stateNode = e));
              a: {
                switch (((c = Ge(n, i)), n)) {
                  case `dialog`:
                    (F(`cancel`, e), F(`close`, e), (o = i));
                    break;
                  case `iframe`:
                  case `object`:
                  case `embed`:
                    (F(`load`, e), (o = i));
                    break;
                  case `video`:
                  case `audio`:
                    for (o = 0; o < ui.length; o++) F(ui[o], e);
                    o = i;
                    break;
                  case `source`:
                    (F(`error`, e), (o = i));
                    break;
                  case `img`:
                  case `image`:
                  case `link`:
                    (F(`error`, e), F(`load`, e), (o = i));
                    break;
                  case `details`:
                    (F(`toggle`, e), (o = i));
                    break;
                  case `input`:
                    (we(e, i), (o = Ce(e, i)), F(`invalid`, e));
                    break;
                  case `option`:
                    o = i;
                    break;
                  case `select`:
                    ((e._wrapperState = { wasMultiple: !!i.multiple }),
                      (o = D({}, i, { value: void 0 })),
                      F(`invalid`, e));
                    break;
                  case `textarea`:
                    (Me(e, i), (o = je(e, i)), F(`invalid`, e));
                    break;
                  default:
                    o = i;
                }
                for (s in (We(n, o), (l = o), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    s === `style`
                      ? He(e, u)
                      : s === `dangerouslySetInnerHTML`
                        ? ((u = u ? u.__html : void 0), u != null && Re(e, u))
                        : s === `children`
                          ? typeof u == `string`
                            ? (n !== `textarea` || u !== ``) && ze(e, u)
                            : typeof u == `number` && ze(e, `` + u)
                          : s !== `suppressContentEditableWarning` &&
                            s !== `suppressHydrationWarning` &&
                            s !== `autoFocus` &&
                            (a.hasOwnProperty(s)
                              ? u != null && s === `onScroll` && F(`scroll`, e)
                              : u != null && S(e, s, u, c));
                  }
                switch (n) {
                  case `input`:
                    (be(e), De(e, i, !1));
                    break;
                  case `textarea`:
                    (be(e), Pe(e));
                    break;
                  case `option`:
                    i.value != null &&
                      e.setAttribute(`value`, `` + ve(i.value));
                    break;
                  case `select`:
                    ((e.multiple = !!i.multiple),
                      (s = i.value),
                      s == null
                        ? i.defaultValue != null &&
                          Ae(e, !!i.multiple, i.defaultValue, !0)
                        : Ae(e, !!i.multiple, s, !1));
                    break;
                  default:
                    typeof o.onClick == `function` && (e.onclick = Ti);
                }
                switch (n) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    i = !!i.autoFocus;
                    break a;
                  case `img`:
                    i = !0;
                    break a;
                  default:
                    i = !1;
                }
              }
              i && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (dc(t), null);
        case 6:
          if (e && t.stateNode != null) lc(e, t, e.memoizedProps, i);
          else {
            if (typeof i != `string` && t.stateNode === null)
              throw Error(r(166));
            if (((n = go(ho.current)), go(po.current), Na(t))) {
              if (
                ((i = t.stateNode),
                (n = t.memoizedProps),
                (i[Ri] = t),
                (s = i.nodeValue !== n) && ((e = Ea), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    wi(i.nodeValue, n, !!(e.mode & 1));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      wi(i.nodeValue, n, !!(e.mode & 1));
                }
              s && (t.flags |= 4);
            } else
              ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                (i[Ri] = t),
                (t.stateNode = i));
          }
          return (dc(t), null);
        case 13:
          if (
            (z(W),
            (i = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (H && V !== null && t.mode & 1 && !(t.flags & 128))
              (Pa(), Fa(), (t.flags |= 98560), (s = !1));
            else if (((s = Na(t)), i !== null && i.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(r(318));
                if (
                  ((s = t.memoizedState),
                  (s = s === null ? null : s.dehydrated),
                  !s)
                )
                  throw Error(r(317));
                s[Ri] = t;
              } else
                (Fa(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (dc(t), (s = !1));
            } else (Da !== null && (Sl(Da), (Da = null)), (s = !0));
            if (!s) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((i = i !== null),
              i !== (e !== null && e.memoizedState !== null) &&
                i &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || W.current & 1 ? Xc === 0 && (Xc = 3) : jl())),
              t.updateQueue !== null && (t.flags |= 4),
              dc(t),
              null);
        case 4:
          return (
            vo(),
            e === null && hi(t.stateNode.containerInfo),
            dc(t),
            null
          );
        case 10:
          return (U(t.type._context), dc(t), null);
        case 17:
          return (ta(t.type) && na(), dc(t), null);
        case 19:
          if ((z(W), (s = t.memoizedState), s === null)) return (dc(t), null);
          if (((i = !!(t.flags & 128)), (c = s.rendering), c === null)) {
            if (i) uc(s, !1);
            else {
              if (Xc !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((c = xo(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        uc(s, !1),
                        i = c.updateQueue,
                        i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        i = n,
                        n = t.child;
                      n !== null;
                    )
                      ((s = n),
                        (e = i),
                        (s.flags &= 14680066),
                        (c = s.alternate),
                        c === null
                          ? ((s.childLanes = 0),
                            (s.lanes = e),
                            (s.child = null),
                            (s.subtreeFlags = 0),
                            (s.memoizedProps = null),
                            (s.memoizedState = null),
                            (s.updateQueue = null),
                            (s.dependencies = null),
                            (s.stateNode = null))
                          : ((s.childLanes = c.childLanes),
                            (s.lanes = c.lanes),
                            (s.child = c.child),
                            (s.subtreeFlags = 0),
                            (s.deletions = null),
                            (s.memoizedProps = c.memoizedProps),
                            (s.memoizedState = c.memoizedState),
                            (s.updateQueue = c.updateQueue),
                            (s.type = c.type),
                            (e = c.dependencies),
                            (s.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling));
                    return (B(W, (W.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                j() > il &&
                ((t.flags |= 128), (i = !0), uc(s, !1), (t.lanes = 4194304));
            }
          } else {
            if (!i) {
              if (((e = xo(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  uc(s, !0),
                  s.tail === null &&
                    s.tailMode === `hidden` &&
                    !c.alternate &&
                    !H)
                )
                  return (dc(t), null);
              } else
                2 * j() - s.renderingStartTime > il &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (i = !0), uc(s, !1), (t.lanes = 4194304));
            }
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((n = s.last),
                n === null ? (t.child = c) : (n.sibling = c),
                (s.last = c));
          }
          return s.tail === null
            ? (dc(t), null)
            : ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = j()),
              (t.sibling = null),
              (n = W.current),
              B(W, i ? (n & 1) | 2 : n & 1),
              t);
        case 22:
        case 23:
          return (
            Dl(),
            (i = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
            i && t.mode & 1
              ? Jc & 1073741824 &&
                (dc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : dc(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function pc(e, t) {
      switch ((Ta(t), t.tag)) {
        case 1:
          return (
            ta(t.type) && na(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            vo(),
            z(Qi),
            z(Zi),
            Co(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (bo(t), null);
        case 13:
          if (
            (z(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(r(340));
            Fa();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (z(W), null);
        case 4:
          return (vo(), null);
        case 10:
          return (U(t.type._context), null);
        case 22:
        case 23:
          return (Dl(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var mc = !1,
      q = !1,
      hc = typeof WeakSet == `function` ? WeakSet : Set,
      J = null;
    function gc(e, t) {
      var n = e.ref;
      if (n !== null) {
        if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function _c(e, t, n) {
      try {
        n();
      } catch (n) {
        Z(e, t, n);
      }
    }
    var vc = !1;
    function yc(e, t) {
      if (((Ei = Sn), (e = Ur()), Wr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
              n = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Di = { focusedElem: e, selectionRange: n }, Sn = !1, J = t;
        J !== null;
      )
        if (((t = J), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (J = e));
        else
          for (; J !== null; ) {
            t = J;
            try {
              var h = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (h !== null) {
                      var g = h.memoizedProps,
                        _ = h.memoizedState,
                        v = t.stateNode;
                      v.__reactInternalSnapshotBeforeUpdate =
                        v.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? g : bs(t.type, g),
                          _,
                        );
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = ``)
                      : y.nodeType === 9 &&
                        y.documentElement &&
                        y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(r(163));
                }
            } catch (e) {
              Z(t, t.return, e);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (J = e));
              break;
            }
            J = t.return;
          }
      return ((h = vc), (vc = !1), h);
    }
    function bc(e, t, n) {
      var r = t.updateQueue;
      if (((r = r === null ? null : r.lastEffect), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy;
            ((i.destroy = void 0), a !== void 0 && _c(t, n, a));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function xc(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t === null ? null : t.lastEffect),
        t !== null)
      ) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Sc(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == `function` ? t(e) : (t.current = e);
      }
    }
    function Cc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Cc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[Ri],
            delete t[zi],
            delete t[Bi],
            delete t[Vi],
            delete t[Hi])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function wc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Tc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || wc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ec(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Ti)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Ec(e, t, n), e = e.sibling; e !== null; )
          (Ec(e, t, n), (e = e.sibling));
    }
    function Dc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Dc(e, t, n), e = e.sibling; e !== null; )
          (Dc(e, t, n), (e = e.sibling));
    }
    var Oc = null,
      kc = !1;
    function Ac(e, t, n) {
      for (n = n.child; n !== null; ) (jc(e, t, n), (n = n.sibling));
    }
    function jc(e, t, n) {
      if (Mt && typeof Mt.onCommitFiberUnmount == `function`)
        try {
          Mt.onCommitFiberUnmount(jt, n);
        } catch {}
      switch (n.tag) {
        case 5:
          q || gc(n, t);
        case 6:
          var r = Oc,
            i = kc;
          ((Oc = null),
            Ac(e, t, n),
            (Oc = r),
            (kc = i),
            Oc !== null &&
              (kc
                ? ((e = Oc),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : Oc.removeChild(n.stateNode)));
          break;
        case 18:
          Oc !== null &&
            (kc
              ? ((e = Oc),
                (n = n.stateNode),
                e.nodeType === 8
                  ? Pi(e.parentNode, n)
                  : e.nodeType === 1 && Pi(e, n),
                bn(e))
              : Pi(Oc, n.stateNode));
          break;
        case 4:
          ((r = Oc),
            (i = kc),
            (Oc = n.stateNode.containerInfo),
            (kc = !0),
            Ac(e, t, n),
            (Oc = r),
            (kc = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !q &&
            ((r = n.updateQueue),
            r !== null && ((r = r.lastEffect), r !== null))
          ) {
            i = r = r.next;
            do {
              var a = i,
                o = a.destroy;
              ((a = a.tag),
                o !== void 0 && (a & 2 || a & 4) && _c(n, t, o),
                (i = i.next));
            } while (i !== r);
          }
          Ac(e, t, n);
          break;
        case 1:
          if (
            !q &&
            (gc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function`)
          )
            try {
              ((r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount());
            } catch (e) {
              Z(n, t, e);
            }
          Ac(e, t, n);
          break;
        case 21:
          Ac(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((q = (r = q) || n.memoizedState !== null), Ac(e, t, n), (q = r))
            : Ac(e, t, n);
          break;
        default:
          Ac(e, t, n);
      }
    }
    function Mc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new hc()),
          t.forEach(function (t) {
            var r = Wl.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          }));
      }
    }
    function Nc(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          try {
            var o = e,
              s = t,
              c = s;
            a: for (; c !== null; ) {
              switch (c.tag) {
                case 5:
                  ((Oc = c.stateNode), (kc = !1));
                  break a;
                case 3:
                  ((Oc = c.stateNode.containerInfo), (kc = !0));
                  break a;
                case 4:
                  ((Oc = c.stateNode.containerInfo), (kc = !0));
                  break a;
              }
              c = c.return;
            }
            if (Oc === null) throw Error(r(160));
            (jc(o, s, a), (Oc = null), (kc = !1));
            var l = a.alternate;
            (l !== null && (l.return = null), (a.return = null));
          } catch (e) {
            Z(a, t, e);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) (Pc(t, e), (t = t.sibling));
    }
    function Pc(e, t) {
      var n = e.alternate,
        i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Nc(t, e), Fc(e), i & 4)) {
            try {
              (bc(3, e, e.return), xc(3, e));
            } catch (t) {
              Z(e, e.return, t);
            }
            try {
              bc(5, e, e.return);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 1:
          (Nc(t, e), Fc(e), i & 512 && n !== null && gc(n, n.return));
          break;
        case 5:
          if (
            (Nc(t, e),
            Fc(e),
            i & 512 && n !== null && gc(n, n.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              ze(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          if (i & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              s = n === null ? o : n.memoizedProps,
              c = e.type,
              l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
              try {
                (c === `input` &&
                  o.type === `radio` &&
                  o.name != null &&
                  Te(a, o),
                  Ge(c, s));
                var u = Ge(c, o);
                for (s = 0; s < l.length; s += 2) {
                  var d = l[s],
                    f = l[s + 1];
                  d === `style`
                    ? He(a, f)
                    : d === `dangerouslySetInnerHTML`
                      ? Re(a, f)
                      : d === `children`
                        ? ze(a, f)
                        : S(a, d, f, u);
                }
                switch (c) {
                  case `input`:
                    Ee(a, o);
                    break;
                  case `textarea`:
                    Ne(a, o);
                    break;
                  case `select`:
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var m = o.value;
                    m == null
                      ? p !== !!o.multiple &&
                        (o.defaultValue == null
                          ? Ae(a, !!o.multiple, o.multiple ? [] : ``, !1)
                          : Ae(a, !!o.multiple, o.defaultValue, !0))
                      : Ae(a, !!o.multiple, m, !1);
                }
                a[zi] = o;
              } catch (t) {
                Z(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Nc(t, e), Fc(e), i & 4)) {
            if (e.stateNode === null) throw Error(r(162));
            ((a = e.stateNode), (o = e.memoizedProps));
            try {
              a.nodeValue = o;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (Nc(t, e),
            Fc(e),
            i & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              bn(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          break;
        case 4:
          (Nc(t, e), Fc(e));
          break;
        case 13:
          (Nc(t, e),
            Fc(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (rl = j())),
            i & 4 && Mc(e));
          break;
        case 22:
          if (
            ((d = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((q = (u = q) || d), Nc(t, e), (q = u)) : Nc(t, e),
            Fc(e),
            i & 8192)
          ) {
            if (
              ((u = e.memoizedState !== null),
              (e.stateNode.isHidden = u) && !d && e.mode & 1)
            )
              for (J = e, d = e.child; d !== null; ) {
                for (f = J = d; J !== null; ) {
                  switch (((p = J), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      bc(4, p, p.return);
                      break;
                    case 1:
                      gc(p, p.return);
                      var h = p.stateNode;
                      if (typeof h.componentWillUnmount == `function`) {
                        ((i = p), (n = p.return));
                        try {
                          ((t = i),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount());
                        } catch (e) {
                          Z(i, n, e);
                        }
                      }
                      break;
                    case 5:
                      gc(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        zc(f);
                        continue;
                      }
                  }
                  m === null ? zc(f) : ((m.return = p), (J = m));
                }
                d = d.sibling;
              }
            a: for (d = null, f = e; ; ) {
              if (f.tag === 5) {
                if (d === null) {
                  d = f;
                  try {
                    ((a = f.stateNode),
                      u
                        ? ((o = a.style),
                          typeof o.setProperty == `function`
                            ? o.setProperty(`display`, `none`, `important`)
                            : (o.display = `none`))
                        : ((c = f.stateNode),
                          (l = f.memoizedProps.style),
                          (s =
                            l != null && l.hasOwnProperty(`display`)
                              ? l.display
                              : null),
                          (c.style.display = Ve(`display`, s))));
                  } catch (t) {
                    Z(e, e.return, t);
                  }
                }
              } else if (f.tag === 6) {
                if (d === null)
                  try {
                    f.stateNode.nodeValue = u ? `` : f.memoizedProps;
                  } catch (t) {
                    Z(e, e.return, t);
                  }
              } else if (
                ((f.tag !== 22 && f.tag !== 23) ||
                  f.memoizedState === null ||
                  f === e) &&
                f.child !== null
              ) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break a;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break a;
                (d === f && (d = null), (f = f.return));
              }
              (d === f && (d = null),
                (f.sibling.return = f.return),
                (f = f.sibling));
            }
          }
          break;
        case 19:
          (Nc(t, e), Fc(e), i & 4 && Mc(e));
          break;
        case 21:
          break;
        default:
          (Nc(t, e), Fc(e));
      }
    }
    function Fc(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          a: {
            for (var n = e.return; n !== null; ) {
              if (wc(n)) {
                var i = n;
                break a;
              }
              n = n.return;
            }
            throw Error(r(160));
          }
          switch (i.tag) {
            case 5:
              var a = i.stateNode;
              (i.flags & 32 && (ze(a, ``), (i.flags &= -33)), Dc(e, Tc(e), a));
              break;
            case 3:
            case 4:
              var o = i.stateNode.containerInfo;
              Ec(e, Tc(e), o);
              break;
            default:
              throw Error(r(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Ic(e, t, n) {
      ((J = e), Lc(e, t, n));
    }
    function Lc(e, t, n) {
      for (var r = !!(e.mode & 1); J !== null; ) {
        var i = J,
          a = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || mc;
          if (!o) {
            var s = i.alternate,
              c = (s !== null && s.memoizedState !== null) || q;
            s = mc;
            var l = q;
            if (((mc = o), (q = c) && !l))
              for (J = i; J !== null; )
                ((o = J),
                  (c = o.child),
                  (o.tag === 22 && o.memoizedState !== null) || c === null
                    ? Bc(i)
                    : ((c.return = o), (J = c)));
            for (; a !== null; ) ((J = a), Lc(a, t, n), (a = a.sibling));
            ((J = i), (mc = s), (q = l));
          }
          Rc(e, t, n);
        } else
          i.subtreeFlags & 8772 && a !== null
            ? ((a.return = i), (J = a))
            : Rc(e, t, n);
      }
    }
    function Rc(e) {
      for (; J !== null; ) {
        var t = J;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  q || xc(5, t);
                  break;
                case 1:
                  var i = t.stateNode;
                  if (t.flags & 4 && !q) {
                    if (n === null) i.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : bs(t.type, n.memoizedProps);
                      i.componentDidUpdate(
                        a,
                        n.memoizedState,
                        i.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  }
                  var o = t.updateQueue;
                  o !== null && uo(t, o, i);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    uo(t, s, n);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = c;
                    var l = t.memoizedProps;
                    switch (t.type) {
                      case `button`:
                      case `input`:
                      case `select`:
                      case `textarea`:
                        l.autoFocus && n.focus();
                        break;
                      case `img`:
                        l.src && (n.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var d = u.memoizedState;
                      if (d !== null) {
                        var f = d.dehydrated;
                        f !== null && bn(f);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(r(163));
              }
            q || (t.flags & 512 && Sc(t));
          } catch (e) {
            Z(t, t.return, e);
          }
        }
        if (t === e) {
          J = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (J = n));
          break;
        }
        J = t.return;
      }
    }
    function zc(e) {
      for (; J !== null; ) {
        var t = J;
        if (t === e) {
          J = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (J = n));
          break;
        }
        J = t.return;
      }
    }
    function Bc(e) {
      for (; J !== null; ) {
        var t = J;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                xc(4, t);
              } catch (e) {
                Z(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == `function`) {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  Z(t, i, e);
                }
              }
              var a = t.return;
              try {
                Sc(t);
              } catch (e) {
                Z(t, a, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                Sc(t);
              } catch (e) {
                Z(t, o, e);
              }
          }
        } catch (e) {
          Z(t, t.return, e);
        }
        if (t === e) {
          J = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (J = s));
          break;
        }
        J = t.return;
      }
    }
    var Vc = Math.ceil,
      Hc = C.ReactCurrentDispatcher,
      Uc = C.ReactCurrentOwner,
      Wc = C.ReactCurrentBatchConfig,
      Y = 0,
      Gc = null,
      Kc = null,
      qc = 0,
      Jc = 0,
      Yc = Yi(0),
      Xc = 0,
      Zc = null,
      Qc = 0,
      $c = 0,
      el = 0,
      tl = null,
      nl = null,
      rl = 0,
      il = 1 / 0,
      al = null,
      ol = !1,
      sl = null,
      cl = null,
      ll = !1,
      ul = null,
      dl = 0,
      fl = 0,
      pl = null,
      ml = -1,
      hl = 0;
    function gl() {
      return Y & 6 ? j() : ml === -1 ? (ml = j()) : ml;
    }
    function _l(e) {
      return e.mode & 1
        ? Y & 2 && qc !== 0
          ? qc & -qc
          : La.transition === null
            ? ((e = M),
              e === 0
                ? ((e = window.event), (e = e === void 0 ? 16 : On(e.type)), e)
                : e)
            : (hl === 0 && (hl = Gt()), hl)
        : 1;
    }
    function vl(e, t, n, i) {
      if (50 < fl) throw ((fl = 0), (pl = null), Error(r(185)));
      (qt(e, n, i),
        (!(Y & 2) || e !== Gc) &&
          (e === Gc && (!(Y & 2) && ($c |= n), Xc === 4 && wl(e, qc)),
          yl(e, i),
          n === 1 &&
            Y === 0 &&
            !(t.mode & 1) &&
            ((il = j() + 500), ca && fa())));
    }
    function yl(e, t) {
      var n = e.callbackNode;
      Ut(e, t);
      var r = Vt(e, e === Gc ? qc : 0);
      if (r === 0)
        (n !== null && St(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && St(n), t === 1))
          (e.tag === 0 ? da(Tl.bind(null, e)) : ua(Tl.bind(null, e)),
            Mi(function () {
              !(Y & 6) && fa();
            }),
            (n = null));
        else {
          switch (Xt(r)) {
            case 1:
              n = Et;
              break;
            case 4:
              n = Dt;
              break;
            case 16:
              n = Ot;
              break;
            case 536870912:
              n = At;
              break;
            default:
              n = Ot;
          }
          n = Kl(n, bl.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function bl(e, t) {
      if (((ml = -1), (hl = 0), Y & 6)) throw Error(r(327));
      var n = e.callbackNode;
      if (zl() && e.callbackNode !== n) return null;
      var i = Vt(e, e === Gc ? qc : 0);
      if (i === 0) return null;
      if (i & 30 || (i & e.expiredLanes) !== 0 || t) t = Ml(e, i);
      else {
        t = i;
        var a = Y;
        Y |= 2;
        var o = Al();
        (Gc !== e || qc !== t) && ((al = null), (il = j() + 500), Ol(e, t));
        do
          try {
            Pl();
            break;
          } catch (t) {
            kl(e, t);
          }
        while (1);
        (Ja(),
          (Hc.current = o),
          (Y = a),
          Kc === null ? ((Gc = null), (qc = 0), (t = Xc)) : (t = 0));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Wt(e)), a !== 0 && ((i = a), (t = xl(e, a)))),
          t === 1)
        )
          throw ((n = Zc), Ol(e, 0), wl(e, i), yl(e, j()), n);
        if (t === 6) wl(e, i);
        else {
          if (
            ((a = e.current.alternate),
            !(i & 30) &&
              !Cl(a) &&
              ((t = Ml(e, i)),
              t === 2 && ((o = Wt(e)), o !== 0 && ((i = o), (t = xl(e, o)))),
              t === 1))
          )
            throw ((n = Zc), Ol(e, 0), wl(e, i), yl(e, j()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 2:
              Ll(e, nl, al);
              break;
            case 3:
              if (
                (wl(e, i),
                (i & 130023424) === i && ((t = rl + 500 - j()), 10 < t))
              ) {
                if (Vt(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & i) !== i)) {
                  (gl(), (e.pingedLanes |= e.suspendedLanes & a));
                  break;
                }
                e.timeoutHandle = ki(Ll.bind(null, e, nl, al), t);
                break;
              }
              Ll(e, nl, al);
              break;
            case 4:
              if ((wl(e, i), (i & 4194240) === i)) break;
              for (t = e.eventTimes, a = -1; 0 < i; ) {
                var s = 31 - Pt(i);
                ((o = 1 << s), (s = t[s]), s > a && (a = s), (i &= ~o));
              }
              if (
                ((i = a),
                (i = j() - i),
                (i =
                  (120 > i
                    ? 120
                    : 480 > i
                      ? 480
                      : 1080 > i
                        ? 1080
                        : 1920 > i
                          ? 1920
                          : 3e3 > i
                            ? 3e3
                            : 4320 > i
                              ? 4320
                              : 1960 * Vc(i / 1960)) - i),
                10 < i)
              ) {
                e.timeoutHandle = ki(Ll.bind(null, e, nl, al), i);
                break;
              }
              Ll(e, nl, al);
              break;
            case 5:
              Ll(e, nl, al);
              break;
            default:
              throw Error(r(329));
          }
        }
      }
      return (yl(e, j()), e.callbackNode === n ? bl.bind(null, e) : null);
    }
    function xl(e, t) {
      var n = tl;
      return (
        e.current.memoizedState.isDehydrated && (Ol(e, t).flags |= 256),
        (e = Ml(e, t)),
        e !== 2 && ((t = nl), (nl = n), t !== null && Sl(t)),
        e
      );
    }
    function Sl(e) {
      nl === null ? (nl = e) : nl.push.apply(nl, e);
    }
    function Cl(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i.getSnapshot;
              i = i.value;
              try {
                if (!Rr(a(), i)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function wl(e, t) {
      for (
        t &= ~el,
          t &= ~$c,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Pt(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Tl(e) {
      if (Y & 6) throw Error(r(327));
      zl();
      var t = Vt(e, 0);
      if (!(t & 1)) return (yl(e, j()), null);
      var n = Ml(e, t);
      if (e.tag !== 0 && n === 2) {
        var i = Wt(e);
        i !== 0 && ((t = i), (n = xl(e, i)));
      }
      if (n === 1) throw ((n = Zc), Ol(e, 0), wl(e, t), yl(e, j()), n);
      if (n === 6) throw Error(r(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ll(e, nl, al),
        yl(e, j()),
        null
      );
    }
    function El(e, t) {
      var n = Y;
      Y |= 1;
      try {
        return e(t);
      } finally {
        ((Y = n), Y === 0 && ((il = j() + 500), ca && fa()));
      }
    }
    function X(e) {
      ul !== null && ul.tag === 0 && !(Y & 6) && zl();
      var t = Y;
      Y |= 1;
      var n = Wc.transition,
        r = M;
      try {
        if (((Wc.transition = null), (M = 1), e)) return e();
      } finally {
        ((M = r), (Wc.transition = n), (Y = t), !(Y & 6) && fa());
      }
    }
    function Dl() {
      ((Jc = Yc.current), z(Yc));
    }
    function Ol(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), Ai(n)), Kc !== null))
        for (n = Kc.return; n !== null; ) {
          var r = n;
          switch ((Ta(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && na());
              break;
            case 3:
              (vo(), z(Qi), z(Zi), Co());
              break;
            case 5:
              bo(r);
              break;
            case 4:
              vo();
              break;
            case 13:
              z(W);
              break;
            case 19:
              z(W);
              break;
            case 10:
              U(r.type._context);
              break;
            case 22:
            case 23:
              Dl();
          }
          n = n.return;
        }
      if (
        ((Gc = e),
        (Kc = e = Zl(e.current, null)),
        (qc = Jc = t),
        (Xc = 0),
        (Zc = null),
        (el = $c = Qc = 0),
        (nl = tl = null),
        Qa !== null)
      ) {
        for (t = 0; t < Qa.length; t++)
          if (((n = Qa[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              a = n.pending;
            if (a !== null) {
              var o = a.next;
              ((a.next = i), (r.next = o));
            }
            n.pending = r;
          }
        Qa = null;
      }
      return e;
    }
    function kl(e, t) {
      do {
        var n = Kc;
        try {
          if ((Ja(), (wo.current = gs), Oo)) {
            for (var i = G.memoizedState; i !== null; ) {
              var a = i.queue;
              (a !== null && (a.pending = null), (i = i.next));
            }
            Oo = !1;
          }
          if (
            ((Eo = 0),
            (K = Do = G = null),
            (ko = !1),
            (Ao = 0),
            (Uc.current = null),
            n === null || n.return === null)
          ) {
            ((Xc = 1), (Zc = t), (Kc = null));
            break;
          }
          a: {
            var o = e,
              s = n.return,
              c = n,
              l = t;
            if (
              ((t = qc),
              (c.flags |= 32768),
              typeof l == `object` && l && typeof l.then == `function`)
            ) {
              var u = l,
                d = c,
                f = d.tag;
              if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                var p = d.alternate;
                p
                  ? ((d.updateQueue = p.updateQueue),
                    (d.memoizedState = p.memoizedState),
                    (d.lanes = p.lanes))
                  : ((d.updateQueue = null), (d.memoizedState = null));
              }
              var m = Ps(s);
              if (m !== null) {
                ((m.flags &= -257),
                  Fs(m, s, c, o, t),
                  m.mode & 1 && Ns(o, u, t),
                  (t = m),
                  (l = u));
                var h = t.updateQueue;
                if (h === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else h.add(l);
                break a;
              }
              if (!(t & 1)) {
                (Ns(o, u, t), jl());
                break a;
              }
              l = Error(r(426));
            } else if (H && c.mode & 1) {
              var _ = Ps(s);
              if (_ !== null) {
                (!(_.flags & 65536) && (_.flags |= 256),
                  Fs(_, s, c, o, t),
                  Ia(Ds(l, c)));
                break a;
              }
            }
            ((o = l = Ds(l, c)),
              Xc !== 4 && (Xc = 2),
              tl === null ? (tl = [o]) : tl.push(o),
              (o = s));
            do {
              switch (o.tag) {
                case 3:
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var v = js(o, l, t);
                  co(o, v);
                  break a;
                case 1:
                  c = l;
                  var y = o.type,
                    b = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof y.getDerivedStateFromError == `function` ||
                      (b !== null &&
                        typeof b.componentDidCatch == `function` &&
                        (cl === null || !cl.has(b))))
                  ) {
                    ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                    var x = Ms(o, c, t);
                    co(o, x);
                    break a;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          Il(n);
        } catch (e) {
          ((t = e), Kc === n && n !== null && (Kc = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function Al() {
      var e = Hc.current;
      return ((Hc.current = gs), e === null ? gs : e);
    }
    function jl() {
      ((Xc === 0 || Xc === 3 || Xc === 2) && (Xc = 4),
        Gc === null || (!(Qc & 268435455) && !($c & 268435455)) || wl(Gc, qc));
    }
    function Ml(e, t) {
      var n = Y;
      Y |= 2;
      var i = Al();
      (Gc !== e || qc !== t) && ((al = null), Ol(e, t));
      do
        try {
          Nl();
          break;
        } catch (t) {
          kl(e, t);
        }
      while (1);
      if ((Ja(), (Y = n), (Hc.current = i), Kc !== null)) throw Error(r(261));
      return ((Gc = null), (qc = 0), Xc);
    }
    function Nl() {
      for (; Kc !== null; ) Fl(Kc);
    }
    function Pl() {
      for (; Kc !== null && !Ct(); ) Fl(Kc);
    }
    function Fl(e) {
      var t = Gl(e.alternate, e, Jc);
      ((e.memoizedProps = e.pendingProps),
        t === null ? Il(e) : (Kc = t),
        (Uc.current = null));
    }
    function Il(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = pc(n, t)), n !== null)) {
            ((n.flags &= 32767), (Kc = n));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((Xc = 6), (Kc = null));
            return;
          }
        } else if (((n = fc(n, t, Jc)), n !== null)) {
          Kc = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Kc = t;
          return;
        }
        Kc = t = e;
      } while (t !== null);
      Xc === 0 && (Xc = 5);
    }
    function Ll(e, t, n) {
      var r = M,
        i = Wc.transition;
      try {
        ((Wc.transition = null), (M = 1), Rl(e, t, n, r));
      } finally {
        ((Wc.transition = i), (M = r));
      }
      return null;
    }
    function Rl(e, t, n, i) {
      do zl();
      while (ul !== null);
      if (Y & 6) throw Error(r(327));
      n = e.finishedWork;
      var a = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(r(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var o = n.lanes | n.childLanes;
      if (
        (Jt(e, o),
        e === Gc && ((Kc = Gc = null), (qc = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          ll ||
          ((ll = !0),
          Kl(Ot, function () {
            return (zl(), null);
          })),
        (o = !!(n.flags & 15990)),
        n.subtreeFlags & 15990 || o)
      ) {
        ((o = Wc.transition), (Wc.transition = null));
        var s = M;
        M = 1;
        var c = Y;
        ((Y |= 4),
          (Uc.current = null),
          yc(e, n),
          Pc(n, e),
          Gr(Di),
          (Sn = !!Ei),
          (Di = Ei = null),
          (e.current = n),
          Ic(n, e, a),
          wt(),
          (Y = c),
          (M = s),
          (Wc.transition = o));
      } else e.current = n;
      if (
        (ll && ((ll = !1), (ul = e), (dl = a)),
        (o = e.pendingLanes),
        o === 0 && (cl = null),
        Nt(n.stateNode, i),
        yl(e, j()),
        t !== null)
      )
        for (i = e.onRecoverableError, n = 0; n < t.length; n++)
          ((a = t[n]),
            i(a.value, { componentStack: a.stack, digest: a.digest }));
      if (ol) throw ((ol = !1), (e = sl), (sl = null), e);
      return (
        dl & 1 && e.tag !== 0 && zl(),
        (o = e.pendingLanes),
        o & 1 ? (e === pl ? fl++ : ((fl = 0), (pl = e))) : (fl = 0),
        fa(),
        null
      );
    }
    function zl() {
      if (ul !== null) {
        var e = Xt(dl),
          t = Wc.transition,
          n = M;
        try {
          if (((Wc.transition = null), (M = 16 > e ? 16 : e), ul === null))
            var i = !1;
          else {
            if (((e = ul), (ul = null), (dl = 0), Y & 6)) throw Error(r(331));
            var a = Y;
            for (Y |= 4, J = e.current; J !== null; ) {
              var o = J,
                s = o.child;
              if (J.flags & 16) {
                var c = o.deletions;
                if (c !== null) {
                  for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    for (J = u; J !== null; ) {
                      var d = J;
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          bc(8, d, o);
                      }
                      var f = d.child;
                      if (f !== null) ((f.return = d), (J = f));
                      else
                        for (; J !== null; ) {
                          d = J;
                          var p = d.sibling,
                            m = d.return;
                          if ((Cc(d), d === u)) {
                            J = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (J = p));
                            break;
                          }
                          J = m;
                        }
                    }
                  }
                  var h = o.alternate;
                  if (h !== null) {
                    var g = h.child;
                    if (g !== null) {
                      h.child = null;
                      do {
                        var _ = g.sibling;
                        ((g.sibling = null), (g = _));
                      } while (g !== null);
                    }
                  }
                  J = o;
                }
              }
              if (o.subtreeFlags & 2064 && s !== null)
                ((s.return = o), (J = s));
              else
                b: for (; J !== null; ) {
                  if (((o = J), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bc(9, o, o.return);
                    }
                  var v = o.sibling;
                  if (v !== null) {
                    ((v.return = o.return), (J = v));
                    break b;
                  }
                  J = o.return;
                }
            }
            var y = e.current;
            for (J = y; J !== null; ) {
              s = J;
              var b = s.child;
              if (s.subtreeFlags & 2064 && b !== null)
                ((b.return = s), (J = b));
              else
                b: for (s = y; J !== null; ) {
                  if (((c = J), c.flags & 2048))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xc(9, c);
                      }
                    } catch (e) {
                      Z(c, c.return, e);
                    }
                  if (c === s) {
                    J = null;
                    break b;
                  }
                  var x = c.sibling;
                  if (x !== null) {
                    ((x.return = c.return), (J = x));
                    break b;
                  }
                  J = c.return;
                }
            }
            if (
              ((Y = a),
              fa(),
              Mt && typeof Mt.onPostCommitFiberRoot == `function`)
            )
              try {
                Mt.onPostCommitFiberRoot(jt, e);
              } catch {}
            i = !0;
          }
          return i;
        } finally {
          ((M = n), (Wc.transition = t));
        }
      }
      return !1;
    }
    function Bl(e, t, n) {
      ((t = Ds(n, t)),
        (t = js(e, t, 1)),
        (e = oo(e, t, 1)),
        (t = gl()),
        e !== null && (qt(e, 1, t), yl(e, t)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Bl(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Bl(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (cl === null || !cl.has(r)))
            ) {
              ((e = Ds(n, e)),
                (e = Ms(t, e, 1)),
                (t = oo(t, e, 1)),
                (e = gl()),
                t !== null && (qt(t, 1, e), yl(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Vl(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = gl()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Gc === e &&
          (qc & n) === n &&
          (Xc === 4 || (Xc === 3 && (qc & 130023424) === qc && 500 > j() - rl)
            ? Ol(e, 0)
            : (el |= n)),
        yl(e, t));
    }
    function Hl(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = zt), (zt <<= 1), !(zt & 130023424) && (zt = 4194304))
          : (t = 1));
      var n = gl();
      ((e = to(e, t)), e !== null && (qt(e, t, n), yl(e, n)));
    }
    function Ul(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Hl(e, n));
    }
    function Wl(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        default:
          throw Error(r(314));
      }
      (i !== null && i.delete(t), Hl(e, n));
    }
    var Gl = function (e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps || Qi.current) Ls = !0;
        else {
          if ((e.lanes & n) === 0 && !(t.flags & 128))
            return ((Ls = !1), oc(e, t, n));
          Ls = !!(e.flags & 131072);
        }
      } else ((Ls = !1), H && t.flags & 1048576 && Ca(t, ga, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var i = t.type;
          (ic(e, t), (e = t.pendingProps));
          var a = ea(t, Zi.current);
          (Xa(t, n), (a = Po(null, t, i, e, a, n)));
          var o = Fo();
          return (
            (t.flags |= 1),
            typeof a == `object` &&
            a &&
            typeof a.render == `function` &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ta(i) ? ((o = !0), aa(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                ro(t),
                (a.updater = Ss),
                (t.stateNode = a),
                (a._reactInternals = t),
                Es(t, i, e, n),
                (t = Ks(null, t, i, !0, o, n)))
              : ((t.tag = 0),
                H && o && wa(t),
                Rs(null, t, a, n),
                (t = t.child)),
            t
          );
        case 16:
          i = t.elementType;
          a: {
            switch (
              (ic(e, t),
              (e = t.pendingProps),
              (a = i._init),
              (i = a(i._payload)),
              (t.type = i),
              (a = t.tag = Xl(i)),
              (e = bs(i, e)),
              a)
            ) {
              case 0:
                t = Ws(null, t, i, e, n);
                break a;
              case 1:
                t = Gs(null, t, i, e, n);
                break a;
              case 11:
                t = zs(null, t, i, e, n);
                break a;
              case 14:
                t = Bs(null, t, i, bs(i.type, e), n);
                break a;
            }
            throw Error(r(306, i, ``));
          }
          return t;
        case 0:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : bs(i, a)),
            Ws(e, t, i, a, n)
          );
        case 1:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : bs(i, a)),
            Gs(e, t, i, a, n)
          );
        case 3:
          a: {
            if ((qs(t), e === null)) throw Error(r(387));
            ((i = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              io(e, t),
              lo(t, i, null, n));
            var s = t.memoizedState;
            if (((i = s.element), o.isDehydrated)) {
              if (
                ((o = {
                  element: i,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                ((a = Ds(Error(r(423)), t)), (t = Js(e, t, i, n, a)));
                break a;
              }
              if (i !== a) {
                ((a = Ds(Error(r(424)), t)), (t = Js(e, t, i, n, a)));
                break a;
              }
              for (
                V = Fi(t.stateNode.containerInfo.firstChild),
                  Ea = t,
                  H = !0,
                  Da = null,
                  n = Ua(t, null, i, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Fa(), i === a)) {
                t = ac(e, t, n);
                break a;
              }
              Rs(e, t, i, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            yo(t),
            e === null && ja(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (s = a.children),
            Oi(i, a) ? (s = null) : o !== null && Oi(i, o) && (t.flags |= 32),
            Us(e, t),
            Rs(e, t, s, n),
            t.child
          );
        case 6:
          return (e === null && ja(t), null);
        case 13:
          return Zs(e, t, n);
        case 4:
          return (
            _o(t, t.stateNode.containerInfo),
            (i = t.pendingProps),
            e === null ? (t.child = Ha(t, null, i, n)) : Rs(e, t, i, n),
            t.child
          );
        case 11:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : bs(i, a)),
            zs(e, t, i, a, n)
          );
        case 7:
          return (Rs(e, t, t.pendingProps, n), t.child);
        case 8:
          return (Rs(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Rs(e, t, t.pendingProps.children, n), t.child);
        case 10:
          a: {
            if (
              ((i = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              B(Wa, i._currentValue),
              (i._currentValue = s),
              o !== null)
            ) {
              if (Rr(o.value, s)) {
                if (o.children === a.children && !Qi.current) {
                  t = ac(e, t, n);
                  break a;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                  var c = o.dependencies;
                  if (c !== null) {
                    s = o.child;
                    for (var l = c.firstContext; l !== null; ) {
                      if (l.context === i) {
                        if (o.tag === 1) {
                          ((l = ao(-1, n & -n)), (l.tag = 2));
                          var u = o.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var d = u.pending;
                            (d === null
                              ? (l.next = l)
                              : ((l.next = d.next), (d.next = l)),
                              (u.pending = l));
                          }
                        }
                        ((o.lanes |= n),
                          (l = o.alternate),
                          l !== null && (l.lanes |= n),
                          Ya(o.return, n, t),
                          (c.lanes |= n));
                        break;
                      }
                      l = l.next;
                    }
                  } else if (o.tag === 10)
                    s = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((s = o.return), s === null)) throw Error(r(341));
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Ya(s, n, t),
                      (s = o.sibling));
                  } else s = o.child;
                  if (s !== null) s.return = o;
                  else
                    for (s = o; s !== null; ) {
                      if (s === t) {
                        s = null;
                        break;
                      }
                      if (((o = s.sibling), o !== null)) {
                        ((o.return = s.return), (s = o));
                        break;
                      }
                      s = s.return;
                    }
                  o = s;
                }
            }
            (Rs(e, t, a.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (i = t.pendingProps.children),
            Xa(t, n),
            (a = Za(a)),
            (i = i(a)),
            (t.flags |= 1),
            Rs(e, t, i, n),
            t.child
          );
        case 14:
          return (
            (i = t.type),
            (a = bs(i, t.pendingProps)),
            (a = bs(i.type, a)),
            Bs(e, t, i, a, n)
          );
        case 15:
          return Vs(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : bs(i, a)),
            ic(e, t),
            (t.tag = 1),
            ta(i) ? ((e = !0), aa(t)) : (e = !1),
            Xa(t, n),
            ws(t, i, a),
            Es(t, i, a, n),
            Ks(null, t, i, !0, e, n)
          );
        case 19:
          return rc(e, t, n);
        case 22:
          return Hs(e, t, n);
      }
      throw Error(r(156, t.tag));
    };
    function Kl(e, t) {
      return xt(e, t);
    }
    function ql(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Jl(e, t, n, r) {
      return new ql(e, t, n, r);
    }
    function Yl(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Xl(e) {
      if (typeof e == `function`) return +!!Yl(e);
      if (e != null) {
        if (((e = e.$$typeof), e === ae)) return 11;
        if (e === ce) return 14;
      }
      return 2;
    }
    function Zl(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Jl(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Ql(e, t, n, i, a, o) {
      var s = 2;
      if (((i = e), typeof e == `function`)) Yl(e) && (s = 1);
      else if (typeof e == `string`) s = 5;
      else
        a: switch (e) {
          case ee:
            return $l(n.children, a, o, t);
          case te:
            ((s = 8), (a |= 8));
            break;
          case ne:
            return (
              (e = Jl(12, n, t, a | 2)),
              (e.elementType = ne),
              (e.lanes = o),
              e
            );
          case oe:
            return (
              (e = Jl(13, n, t, a)),
              (e.elementType = oe),
              (e.lanes = o),
              e
            );
          case se:
            return (
              (e = Jl(19, n, t, a)),
              (e.elementType = se),
              (e.lanes = o),
              e
            );
          case E:
            return eu(n, a, o, t);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case re:
                  s = 10;
                  break a;
                case ie:
                  s = 9;
                  break a;
                case ae:
                  s = 11;
                  break a;
                case ce:
                  s = 14;
                  break a;
                case le:
                  ((s = 16), (i = null));
                  break a;
              }
            throw Error(r(130, e == null ? e : typeof e, ``));
        }
      return (
        (t = Jl(s, n, t, a)),
        (t.elementType = e),
        (t.type = i),
        (t.lanes = o),
        t
      );
    }
    function $l(e, t, n, r) {
      return ((e = Jl(7, e, r, t)), (e.lanes = n), e);
    }
    function eu(e, t, n, r) {
      return (
        (e = Jl(22, e, r, t)),
        (e.elementType = E),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function tu(e, t, n) {
      return ((e = Jl(6, e, null, t)), (e.lanes = n), e);
    }
    function nu(e, t, n) {
      return (
        (t = Jl(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ru(e, t, n, r, i) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Kt(0)),
        (this.expirationTimes = Kt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Kt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
    }
    function iu(e, t, n, r, i, a, o, s, c) {
      return (
        (e = new ru(e, t, n, s, c)),
        t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Jl(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        ro(a),
        e
      );
    }
    function au(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: T,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function ou(e) {
      if (!e) return Xi;
      e = e._reactInternals;
      a: {
        if (ht(e) !== e || e.tag !== 1) throw Error(r(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break a;
            case 1:
              if (ta(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(r(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (ta(n)) return ia(e, n, t);
      }
      return t;
    }
    function su(e, t, n, r, i, a, o, s, c) {
      return (
        (e = iu(n, r, !0, e, i, a, o, s, c)),
        (e.context = ou(null)),
        (n = e.current),
        (r = gl()),
        (i = _l(n)),
        (a = ao(r, i)),
        (a.callback = t ?? null),
        oo(n, a, i),
        (e.current.lanes = i),
        qt(e, i, r),
        yl(e, r),
        e
      );
    }
    function cu(e, t, n, r) {
      var i = t.current,
        a = gl(),
        o = _l(i);
      return (
        (n = ou(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = ao(a, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = oo(i, t, o)),
        e !== null && (vl(e, i, o, a), so(e, i, o)),
        o
      );
    }
    function lu(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function uu(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function du(e, t) {
      (uu(e, t), (e = e.alternate) && uu(e, t));
    }
    function fu() {
      return null;
    }
    var pu =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            console.error(e);
          };
    function mu(e) {
      this._internalRoot = e;
    }
    ((hu.prototype.render = mu.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        cu(e, t, null, null);
      }),
      (hu.prototype.unmount = mu.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (X(function () {
              cu(null, e, null, null);
            }),
              (t[R] = null));
          }
        }));
    function hu(e) {
      this._internalRoot = e;
    }
    hu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = en();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
        (un.splice(n, 0, e), n === 0 && hn(e));
      }
    };
    function gu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function _u(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
      );
    }
    function vu() {}
    function yu(e, t, n, r, i) {
      if (i) {
        if (typeof r == `function`) {
          var a = r;
          r = function () {
            var e = lu(o);
            a.call(e);
          };
        }
        var o = su(t, r, e, 0, null, !1, !1, ``, vu);
        return (
          (e._reactRootContainer = o),
          (e[R] = o.current),
          hi(e.nodeType === 8 ? e.parentNode : e),
          X(),
          o
        );
      }
      for (; (i = e.lastChild); ) e.removeChild(i);
      if (typeof r == `function`) {
        var s = r;
        r = function () {
          var e = lu(c);
          s.call(e);
        };
      }
      var c = iu(e, 0, !1, null, null, !1, !1, ``, vu);
      return (
        (e._reactRootContainer = c),
        (e[R] = c.current),
        hi(e.nodeType === 8 ? e.parentNode : e),
        X(function () {
          cu(t, c, n, r);
        }),
        c
      );
    }
    function bu(e, t, n, r, i) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if (typeof i == `function`) {
          var s = i;
          i = function () {
            var e = lu(o);
            s.call(e);
          };
        }
        cu(t, o, e, i);
      } else o = yu(n, t, e, i, r);
      return lu(o);
    }
    ((Zt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Bt(t.pendingLanes);
            n !== 0 &&
              (Yt(t, n | 1), yl(t, j()), !(Y & 6) && ((il = j() + 500), fa()));
          }
          break;
        case 13:
          (X(function () {
            var t = to(e, 1);
            t !== null && vl(t, e, 1, gl());
          }),
            du(e, 1));
      }
    }),
      (Qt = function (e) {
        if (e.tag === 13) {
          var t = to(e, 134217728);
          (t !== null && vl(t, e, 134217728, gl()), du(e, 134217728));
        }
      }),
      ($t = function (e) {
        if (e.tag === 13) {
          var t = _l(e),
            n = to(e, t);
          (n !== null && vl(n, e, t, gl()), du(e, t));
        }
      }),
      (en = function () {
        return M;
      }),
      (tn = function (e, t) {
        var n = M;
        try {
          return ((M = e), t());
        } finally {
          M = n;
        }
      }),
      (Je = function (e, t, n) {
        switch (t) {
          case `input`:
            if ((Ee(e, n), (t = n.name), n.type === `radio` && t != null)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name=` + JSON.stringify(`` + t) + `][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                  var a = Ki(i);
                  if (!a) throw Error(r(90));
                  (xe(i), Ee(i, a));
                }
              }
            }
            break;
          case `textarea`:
            Ne(e, n);
            break;
          case `select`:
            ((t = n.value), t != null && Ae(e, !!n.multiple, t, !1));
        }
      }),
      (et = El),
      (tt = X));
    var xu = { usingClientEntryPoint: !1, Events: [Wi, Gi, Ki, Qe, $e, El] },
      Su = {
        findFiberByHostInstance: Ui,
        bundleType: 0,
        version: `18.3.1`,
        rendererPackageName: `react-dom`,
      },
      Cu = {
        bundleType: Su.bundleType,
        version: Su.version,
        rendererPackageName: Su.rendererPackageName,
        rendererConfig: Su.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: C.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = yt(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: Su.findFiberByHostInstance || fu,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.3.1-next-f1338f8080-20240426`,
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wu.isDisabled && wu.supportsFiber)
        try {
          ((jt = wu.inject(Cu)), (Mt = wu));
        } catch {}
    }
    ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xu),
      (e.createPortal = function (e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!gu(t)) throw Error(r(200));
        return au(e, t, null, n);
      }),
      (e.createRoot = function (e, t) {
        if (!gu(e)) throw Error(r(299));
        var n = !1,
          i = ``,
          a = pu;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
          (t = iu(e, 1, !1, null, null, n, !1, i, a)),
          (e[R] = t.current),
          hi(e.nodeType === 8 ? e.parentNode : e),
          new mu(t)
        );
      }),
      (e.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(r(188))
            : ((e = Object.keys(e).join(`,`)), Error(r(268, e)));
        return ((e = yt(t)), (e = e === null ? null : e.stateNode), e);
      }),
      (e.flushSync = function (e) {
        return X(e);
      }),
      (e.hydrate = function (e, t, n) {
        if (!_u(t)) throw Error(r(200));
        return bu(null, e, t, !0, n);
      }),
      (e.hydrateRoot = function (e, t, n) {
        if (!gu(e)) throw Error(r(405));
        var i = (n != null && n.hydratedSources) || null,
          a = !1,
          o = ``,
          s = pu;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
          (t = su(t, null, e, 1, n ?? null, a, !1, o, s)),
          (e[R] = t.current),
          hi(e),
          i)
        )
          for (e = 0; e < i.length; e++)
            ((n = i[e]),
              (a = n._getVersion),
              (a = a(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a));
        return new hu(t);
      }),
      (e.render = function (e, t, n) {
        if (!_u(t)) throw Error(r(200));
        return bu(null, e, t, !1, n);
      }),
      (e.unmountComponentAtNode = function (e) {
        if (!_u(e)) throw Error(r(40));
        return e._reactRootContainer
          ? (X(function () {
              bu(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[R] = null));
              });
            }),
            !0)
          : !1;
      }),
      (e.unstable_batchedUpdates = El),
      (e.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
        if (!_u(n)) throw Error(r(200));
        if (e == null || e._reactInternals === void 0) throw Error(r(38));
        return bu(e, t, n, !1, i);
      }),
      (e.version = `18.3.1-next-f1338f8080-20240426`));
  }),
  _ = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = g()));
  }),
  v = u(
    s((e) => {
      var t = _();
      ((e.createRoot = t.createRoot), (e.hydrateRoot = t.hydrateRoot));
    })(),
    1,
  ),
  y = u(p(), 1),
  b = 3,
  x = 4e3,
  S = 0;
function C() {
  return ((S = (S + 1) % (2 ** 53 - 1)), S.toString());
}
var w = {
    ADD_TOAST: `ADD_TOAST`,
    UPDATE_TOAST: `UPDATE_TOAST`,
    DISMISS_TOAST: `DISMISS_TOAST`,
    REMOVE_TOAST: `REMOVE_TOAST`,
  },
  T = new Map();
function ee(e) {
  if (T.has(e)) return;
  let t = setTimeout(() => {
    (T.delete(e), ie({ type: w.REMOVE_TOAST, toastId: e }));
  }, x);
  T.set(e, t);
}
function te(e, t) {
  switch (t.type) {
    case w.ADD_TOAST:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, b) };
    case w.UPDATE_TOAST:
      return {
        ...e,
        toasts: e.toasts.map((e) =>
          e.id === t.toast.id ? { ...e, ...t.toast } : e,
        ),
      };
    case w.DISMISS_TOAST: {
      let { toastId: n } = t;
      return (
        n ? ee(n) : e.toasts.forEach((e) => ee(e.id)),
        {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === n || n === void 0 ? { ...e, open: !1 } : e,
          ),
        }
      );
    }
    case w.REMOVE_TOAST:
      return t.toastId === void 0
        ? { ...e, toasts: [] }
        : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
    default:
      return e;
  }
}
var ne = [],
  re = { toasts: [] };
function ie(e) {
  ((re = te(re, e)), ne.forEach((e) => e(re)));
}
function ae({ ...e }) {
  let t = C(),
    n = (e) => ie({ type: w.UPDATE_TOAST, toast: { ...e, id: t } }),
    r = () => ie({ type: w.DISMISS_TOAST, toastId: t });
  return (
    ie({
      type: w.ADD_TOAST,
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (e) => {
          e || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function oe() {
  let [e, t] = y.useState(re);
  return (
    y.useEffect(
      () => (
        ne.push(t),
        () => {
          let e = ne.indexOf(t);
          e > -1 && ne.splice(e, 1);
        }
      ),
      [],
    ),
    {
      ...e,
      toast: ae,
      dismiss: (e) => ie({ type: w.DISMISS_TOAST, toastId: e }),
    }
  );
}
var se = u(_(), 1),
  ce = Object.defineProperty,
  le = (e, t) => ce(e, `name`, { value: t, configurable: !0 }),
  E = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  );
function ue(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return le(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r);
  }, `handleEvent`);
}
le(ue, `composeEventHandlers`);
function de(e) {
  if (!E) throw Error(`Cannot access window outside of the DOM`);
  return e?.ownerDocument?.defaultView ?? window;
}
le(de, `getOwnerWindow`);
function D(e) {
  if (!E) throw Error(`Cannot access document outside of the DOM`);
  return e?.ownerDocument ?? document;
}
le(D, `getOwnerDocument`);
function fe(e, t = !1) {
  let { activeElement: n } = D(e);
  if (!n?.nodeName) return null;
  if (pe(n) && n.contentDocument) return fe(n.contentDocument.body, t);
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`);
    if (e) {
      let t = D(n).getElementById(e);
      if (t) return t;
    }
  }
  return n;
}
le(fe, `getActiveElement`);
function pe(e) {
  return e.tagName === `IFRAME`;
}
le(pe, `isFrame`);
var me = Object.defineProperty,
  he = (e, t) => me(e, `name`, { value: t, configurable: !0 });
function ge(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
he(ge, `setRef`);
function O(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = ge(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : ge(e[t], null);
        }
      };
  };
}
he(O, `composeRefs`);
function _e(...e) {
  return y.useCallback(O(...e), e);
}
he(_e, `useComposedRefs`);
var ve = s((e) => {
    var t = p(),
      n = Symbol.for(`react.element`),
      r = Symbol.for(`react.fragment`),
      i = Object.prototype.hasOwnProperty,
      a =
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      o = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(e, t, r) {
      var s,
        c = {},
        l = null,
        u = null;
      for (s in (r !== void 0 && (l = `` + r),
      t.key !== void 0 && (l = `` + t.key),
      t.ref !== void 0 && (u = t.ref),
      t))
        i.call(t, s) && !o.hasOwnProperty(s) && (c[s] = t[s]);
      if (e && e.defaultProps)
        for (s in ((t = e.defaultProps), t)) c[s] === void 0 && (c[s] = t[s]);
      return {
        $$typeof: n,
        type: e,
        key: l,
        ref: u,
        props: c,
        _owner: a.current,
      };
    }
    ((e.Fragment = r), (e.jsx = s), (e.jsxs = s));
  }),
  k = s((e, t) => {
    t.exports = ve();
  })(),
  ye = Object.defineProperty,
  be = (e, t) => ye(e, `name`, { value: t, configurable: !0 });
function xe(e, t) {
  let n = y.createContext(t);
  n.displayName = e + `Context`;
  let r = be((e) => {
    let { children: t, ...r } = e,
      i = y.useMemo(() => r, Object.values(r));
    return (0, k.jsx)(n.Provider, { value: i, children: t });
  }, `Provider`);
  r.displayName = e + `Provider`;
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = y.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
  }
  return (be(i, `useContext`), [r, i]);
}
be(xe, `createContext`);
function Se(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = y.createContext(r);
    i.displayName = t + `Context`;
    let a = n.length;
    n = [...n, r];
    let o = be((t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = y.useMemo(() => o, Object.values(o));
      return (0, k.jsx)(s.Provider, { value: c, children: r });
    }, `Provider`);
    o.displayName = t + `Provider`;
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        u = y.useContext(l);
      if (u) return u;
      if (r !== void 0) return r;
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return (be(s, `useContext`), [o, s]);
  }
  be(r, `createContext`);
  let i = be(() => {
    let t = n.map((e) => y.createContext(e));
    return be(function (n) {
      let r = n?.[e] || t;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    }, `useScope`);
  }, `createScope`);
  return ((i.scopeName = e), [r, Ce(i, ...t)]);
}
be(Se, `createContextScope`);
function Ce(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = be(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return be(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    }, `useComposedScopes`);
  }, `createScope`);
  return ((n.scopeName = t.scopeName), n);
}
be(Ce, `composeContextScopes`);
var we = Object.defineProperty,
  Te = (e, t) => we(e, `name`, { value: t, configurable: !0 });
function Ee(e) {
  let t = y.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (Pe(r) && typeof Re == `function` && (r = Re(r._payload)),
      y.Children.forEach(r, (e) => {
        if (Me(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (Pe(n) && typeof Re == `function` && (n = Re(n._payload)),
            (a = ke(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = y.cloneElement(a, void 0, s))
        : !o && y.Children.count(r) === 1 && y.isValidElement(r) && (a = r));
    let c = a ? je(a) : void 0,
      l = _e(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? Le(e) : Ie(e));
      return r;
    }
    let u = Ae(i, a.props ?? {});
    return (a.type !== y.Fragment && (u.ref = n ? l : c), y.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
Te(Ee, `createSlot`);
var De = Symbol.for(`radix.slottable`);
function Oe(e) {
  let t = Te(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = De), t);
}
Te(Oe, `createSlottable`);
var ke = Te((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return y.isValidElement(t)
      ? y.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return y.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function Ae(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
Te(Ae, `mergeProps`);
function je(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
Te(je, `getElementRef`);
function Me(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === De
  );
}
Te(Me, `isSlottable`);
var Ne = Symbol.for(`react.lazy`);
function Pe(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === Ne &&
    `_payload` in e &&
    Fe(e._payload)
  );
}
Te(Pe, `isLazyComponent`);
function Fe(e) {
  return typeof e == `object` && !!e && `then` in e;
}
Te(Fe, `isPromiseLike`);
var Ie = Te(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  Le = Te(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  Re = y.use,
  ze = Object.defineProperty,
  A = (e, t) => ze(e, `name`, { value: t, configurable: !0 });
function Be(e) {
  let t = e + `CollectionProvider`,
    [n, r] = Se(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = A((e) => {
      let { scope: t, children: n } = e,
        r = y.useRef(null),
        a = y.useRef(new Map()).current;
      return (0, k.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      });
    }, `CollectionProvider`);
  o.displayName = t;
  let s = e + `CollectionSlot`,
    c = Ee(s),
    l = y.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = _e(t, a(s, n).collectionRef);
      return (0, k.jsx)(c, { ref: i, children: r });
    });
  l.displayName = s;
  let u = e + `CollectionItemSlot`,
    d = `data-radix-collection-item`,
    f = Ee(u),
    p = y.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = y.useRef(null),
        s = _e(t, o),
        c = a(u, n);
      return (
        y.useEffect(
          () => (
            c.itemMap.set(o, { ref: o, ...i }),
            () => void c.itemMap.delete(o)
          ),
        ),
        (0, k.jsx)(f, { [d]: ``, ref: s, children: r })
      );
    });
  p.displayName = u;
  function m(t) {
    let n = a(e + `CollectionConsumer`, t);
    return y.useCallback(() => {
      let e = n.collectionRef.current;
      if (!e) return [];
      let t = Array.from(e.querySelectorAll(`[${d}]`));
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      );
    }, [n.collectionRef, n.itemMap]);
  }
  return (A(m, `useCollection`), [{ Provider: o, Slot: l, ItemSlot: p }, m, r]);
}
A(Be, `createCollection`);
var Ve = new WeakMap(),
  He = class e extends Map {
    static {
      A(this, `OrderedDict`);
    }
    #e;
    constructor(e) {
      (super(e), (this.#e = [...super.keys()]), Ve.set(this, !0));
    }
    set(e, t) {
      return (
        Ve.get(this) &&
          (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
        super.set(e, t),
        this
      );
    }
    insert(e, t, n) {
      let r = this.has(t),
        i = this.#e.length,
        a = Ge(e),
        o = a >= 0 ? a : i + a,
        s = o < 0 || o >= i ? -1 : o;
      if (s === this.size || (r && s === this.size - 1) || s === -1)
        return (this.set(t, n), this);
      let c = this.size + +!r;
      a < 0 && o++;
      let l = [...this.#e],
        u,
        d = !1;
      for (let e = o; e < c; e++)
        if (o === e) {
          let i = l[e];
          (l[e] === t && (i = l[e + 1]),
            r && this.delete(t),
            (u = this.get(i)),
            this.set(t, n));
        } else {
          !d && l[e - 1] === t && (d = !0);
          let n = l[d ? e : e - 1],
            r = u;
          ((u = this.get(n)), this.delete(n), this.set(n, r));
        }
      return this;
    }
    with(t, n, r) {
      let i = new e(this);
      return (i.insert(t, n, r), i);
    }
    before(e) {
      let t = this.#e.indexOf(e) - 1;
      if (!(t < 0)) return this.entryAt(t);
    }
    setBefore(e, t, n) {
      let r = this.#e.indexOf(e);
      return r === -1 ? this : this.insert(r, t, n);
    }
    after(e) {
      let t = this.#e.indexOf(e);
      if (((t = t === -1 || t === this.size - 1 ? -1 : t + 1), t !== -1))
        return this.entryAt(t);
    }
    setAfter(e, t, n) {
      let r = this.#e.indexOf(e);
      return r === -1 ? this : this.insert(r + 1, t, n);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return ((this.#e = []), super.clear());
    }
    delete(e) {
      let t = super.delete(e);
      return (t && this.#e.splice(this.#e.indexOf(e), 1), t);
    }
    deleteAt(e) {
      let t = this.keyAt(e);
      return t !== void 0 && this.delete(t);
    }
    at(e) {
      let t = Ue(this.#e, e);
      if (t !== void 0) return this.get(t);
    }
    entryAt(e) {
      let t = Ue(this.#e, e);
      if (t !== void 0) return [t, this.get(t)];
    }
    indexOf(e) {
      return this.#e.indexOf(e);
    }
    keyAt(e) {
      return Ue(this.#e, e);
    }
    from(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
      );
    }
    keyFrom(e, t) {
      let n = this.indexOf(e);
      if (n === -1) return;
      let r = n + t;
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
      );
    }
    find(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return r;
        n++;
      }
    }
    findIndex(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return n;
        n++;
      }
      return -1;
    }
    filter(t, n) {
      let r = [],
        i = 0;
      for (let e of this) (Reflect.apply(t, n, [e, i, this]) && r.push(e), i++);
      return new e(r);
    }
    map(t, n) {
      let r = [],
        i = 0;
      for (let e of this)
        (r.push([e[0], Reflect.apply(t, n, [e, i, this])]), i++);
      return new e(r);
    }
    reduce(...e) {
      let [t, n] = e,
        r = 0,
        i = n ?? this.at(0);
      for (let n of this)
        ((i =
          r === 0 && e.length === 1
            ? n
            : Reflect.apply(t, this, [i, n, r, this])),
          r++);
      return i;
    }
    reduceRight(...e) {
      let [t, n] = e,
        r = n ?? this.at(-1);
      for (let n = this.size - 1; n >= 0; n--) {
        let i = this.at(n);
        r =
          n === this.size - 1 && e.length === 1
            ? i
            : Reflect.apply(t, this, [r, i, n, this]);
      }
      return r;
    }
    toSorted(t) {
      let n = [...this.entries()].sort(t);
      return new e(n);
    }
    toReversed() {
      let t = new e();
      for (let e = this.size - 1; e >= 0; e--) {
        let n = this.keyAt(e),
          r = this.get(n);
        t.set(n, r);
      }
      return t;
    }
    toSpliced(...t) {
      let n = [...this.entries()];
      return (n.splice(...t), new e(n));
    }
    slice(t, n) {
      let r = new e(),
        i = this.size - 1;
      if (t === void 0) return r;
      (t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1));
      for (let e = t; e <= i; e++) {
        let t = this.keyAt(e),
          n = this.get(t);
        r.set(t, n);
      }
      return r;
    }
    every(e, t) {
      let n = 0;
      for (let r of this) {
        if (!Reflect.apply(e, t, [r, n, this])) return !1;
        n++;
      }
      return !0;
    }
    some(e, t) {
      let n = 0;
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return !0;
        n++;
      }
      return !1;
    }
  };
function Ue(e, t) {
  if (`at` in Array.prototype) return Array.prototype.at.call(e, t);
  let n = We(e, t);
  return n === -1 ? void 0 : e[n];
}
A(Ue, `at`);
function We(e, t) {
  let n = e.length,
    r = Ge(t),
    i = r >= 0 ? r : n + r;
  return i < 0 || i >= n ? -1 : i;
}
A(We, `toSafeIndex`);
function Ge(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
A(Ge, `toSafeInteger`);
function Ke(e) {
  let t = e + `CollectionProvider`,
    [n, r] = Se(t),
    [i, a] = n(t, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new He(),
      setItemMap: A(() => void 0, `setItemMap`),
    }),
    o = A(
      ({ state: e, ...t }) =>
        e ? (0, k.jsx)(c, { ...t, state: e }) : (0, k.jsx)(s, { ...t }),
      `CollectionProvider`,
    );
  o.displayName = t;
  let s = A((e) => {
    let t = h();
    return (0, k.jsx)(c, { ...e, state: t });
  }, `CollectionInit`);
  s.displayName = t + `Init`;
  let c = A((e) => {
    let { scope: t, children: n, state: r } = e,
      a = y.useRef(null),
      [o, s] = y.useState(null),
      c = _e(a, s),
      [l, u] = r;
    return (
      y.useEffect(() => {
        if (!o) return;
        let e = Xe(() => {});
        return (
          e.observe(o, { childList: !0, subtree: !0 }),
          () => {
            e.disconnect();
          }
        );
      }, [o]),
      (0, k.jsx)(i, {
        scope: t,
        itemMap: l,
        setItemMap: u,
        collectionRef: c,
        collectionRefObject: a,
        collectionElement: o,
        children: n,
      })
    );
  }, `CollectionProviderImpl`);
  c.displayName = t + `Impl`;
  let l = e + `CollectionSlot`,
    u = Ee(l),
    d = y.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = _e(t, a(l, n).collectionRef);
      return (0, k.jsx)(u, { ref: i, children: r });
    });
  d.displayName = l;
  let f = e + `CollectionItemSlot`,
    p = Ee(f),
    m = y.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = y.useRef(null),
        [s, c] = y.useState(null),
        l = _e(t, o, c),
        { setItemMap: u } = a(f, n),
        d = y.useRef(i);
      qe(d.current, i) || (d.current = i);
      let m = d.current;
      return (
        y.useEffect(() => {
          let e = m;
          return (
            u((t) =>
              s
                ? t.has(s)
                  ? t.set(s, { ...e, element: s }).toSorted(Ye)
                  : (t.set(s, { ...e, element: s }), t.toSorted(Ye))
                : t,
            ),
            () => {
              u((e) => (!s || !e.has(s) ? e : (e.delete(s), new He(e))));
            }
          );
        }, [s, m, u]),
        (0, k.jsx)(p, { "data-radix-collection-item": ``, ref: l, children: r })
      );
    });
  m.displayName = f;
  function h() {
    return y.useState(new He());
  }
  A(h, `useInitCollection`);
  function g(t) {
    let { itemMap: n } = a(e + `CollectionConsumer`, t);
    return n;
  }
  return (
    A(g, `useCollection`),
    [
      { Provider: o, Slot: d, ItemSlot: m },
      { createCollectionScope: r, useCollection: g, useInitCollection: h },
    ]
  );
}
A(Ke, `createCollection`);
function qe(e, t) {
  if (e === t) return !0;
  if (typeof e != `object` || typeof t != `object` || e == null || t == null)
    return !1;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
A(qe, `shallowEqual`);
function Je(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
A(Je, `isElementPreceding`);
function Ye(e, t) {
  return !e[1].element || !t[1].element
    ? 0
    : Je(e[1].element, t[1].element)
      ? -1
      : 1;
}
A(Ye, `sortByDocumentPosition`);
function Xe(e) {
  return new MutationObserver((t) => {
    for (let n of t)
      if (n.type === `childList`) {
        e();
        return;
      }
  });
}
A(Xe, `getChildListObserver`);
var Ze = Object.defineProperty,
  Qe = (e, t) => Ze(e, `name`, { value: t, configurable: !0 }),
  $e = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = Ee(`Primitive.${t}`),
      r = y.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t;
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, k.jsx)(o, { ...a, ref: r })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function et(e, t) {
  e && se.flushSync(() => e.dispatchEvent(t));
}
Qe(et, `dispatchDiscreteCustomEvent`);
var tt = Object.defineProperty,
  nt = (e, t) => tt(e, `name`, { value: t, configurable: !0 });
function rt(e) {
  let t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
nt(rt, `useCallbackRef`);
var it = Object.defineProperty,
  at = (e, t) => it(e, `name`, { value: t, configurable: !0 }),
  ot = `dismissableLayer.update`,
  st = `dismissableLayer.pointerDownOutside`,
  ct = `dismissableLayer.focusOutside`,
  lt,
  ut = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  dt = y.forwardRef(
    at(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          onFocusOutside: o,
          onInteractOutside: s,
          onDismiss: c,
          ...l
        } = e,
        u = y.useContext(ut),
        [d, f] = y.useState(null),
        p = d?.ownerDocument ?? globalThis?.document,
        [, m] = y.useState({}),
        h = _e(t, f),
        g = Array.from(u.layers),
        [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        v = _ ? g.indexOf(_) : -1,
        b = d ? g.indexOf(d) : -1,
        x = u.layersWithOutsidePointerEventsDisabled.size > 0,
        S = b >= v,
        C = y.useRef(!1),
        w = ht(
          (e) => {
            (a?.(e), s?.(e), e.defaultPrevented || c?.());
          },
          {
            ownerDocument: p,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: C,
            dismissableSurfaces: u.dismissableSurfaces,
            shouldHandlePointerDownOutside: y.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1;
                let t = [...u.branches].some((t) => t.contains(e));
                return S && !t;
              },
              [u.branches, S],
            ),
          },
        ),
        T = gt((e) => {
          if (r && C.current) return;
          let t = e.target;
          [...u.branches].some((e) => e.contains(t)) ||
            (o?.(e), s?.(e), e.defaultPrevented || c?.());
        }, p),
        ee = d ? b === g.length - 1 : !1,
        te = rt((e) => {
          e.key === `Escape` &&
            (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
        });
      return (
        y.useEffect(() => {
          if (ee)
            return (
              p.addEventListener(`keydown`, te, { capture: !0 }),
              () => p.removeEventListener(`keydown`, te, { capture: !0 })
            );
        }, [p, ee, te]),
        y.useEffect(() => {
          if (d)
            return (
              n &&
                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((lt = p.body.style.pointerEvents),
                  (p.body.style.pointerEvents = `none`)),
                u.layersWithOutsidePointerEventsDisabled.add(d)),
              u.layers.add(d),
              _t(),
              () => {
                n &&
                  (u.layersWithOutsidePointerEventsDisabled.delete(d),
                  u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (p.body.style.pointerEvents = lt));
              }
            );
        }, [d, p, n, u]),
        y.useEffect(
          () => () => {
            d &&
              (u.layers.delete(d),
              u.layersWithOutsidePointerEventsDisabled.delete(d),
              _t());
          },
          [d, u],
        ),
        y.useEffect(() => {
          let e = at(() => m({}), `handleUpdate`);
          return (
            document.addEventListener(ot, e),
            () => document.removeEventListener(ot, e)
          );
        }, []),
        (0, k.jsx)($e.div, {
          ...l,
          ref: h,
          style: {
            pointerEvents: x ? (S ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: ue(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: ue(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: ue(
            e.onPointerDownCapture,
            w.onPointerDownCapture,
          ),
        })
      );
    }, `DismissableLayer`),
  ),
  ft = y.forwardRef(
    at(function (e, t) {
      let n = y.useContext(ut),
        r = y.useRef(null),
        i = _e(t, r);
      return (
        y.useEffect(() => {
          let e = r.current;
          if (e)
            return (
              n.branches.add(e),
              () => {
                n.branches.delete(e);
              }
            );
        }, [n.branches]),
        (0, k.jsx)($e.div, { ...e, ref: i })
      );
    }, `DismissableLayerBranch`),
  );
function pt() {
  let e = y.useContext(ut),
    [t, n] = y.useState(null);
  return (
    y.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t);
          }
        );
    }, [t, e.dismissableSurfaces]),
    n
  );
}
at(pt, `useDismissableLayerSurface`);
var mt = at(() => !0, `IS_TRUE`);
function ht(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = mt,
    } = t,
    s = rt(e),
    c = y.useRef(!1),
    l = y.useRef(!1),
    u = y.useRef(new Map()),
    d = y.useRef(() => {});
  return (
    y.useEffect(() => {
      function e() {
        ((l.current = !1), (i.current = !1), u.current.clear());
      }
      at(e, `resetOutsideInteraction`);
      function t() {
        return Array.from(u.current.values()).some(Boolean);
      }
      at(t, `isOutsideInteractionIntercepted`);
      function f(e) {
        if (!l.current) return;
        let t = e.target;
        ((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          u.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && d.current();
            }, 0));
      }
      at(f, `handleInteractionCapture`);
      function p(e) {
        l.current && u.current.set(e.type, !1);
      }
      at(p, `handleInteractionBubble`);
      let m = at((a) => {
          if (a.target && !c.current) {
            let f = function () {
              n.removeEventListener(`click`, d.current);
              let r = t();
              (e(), r || vt(st, s, p, { discrete: !0 }));
            };
            if (
              (at(f, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              (n.removeEventListener(`click`, d.current),
                e(),
                (c.current = !1));
              return;
            }
            let p = { originalEvent: a };
            ((l.current = !0),
              (i.current = r && a.button === 0),
              u.current.clear(),
              !r || a.button !== 0
                ? f()
                : (n.removeEventListener(`click`, d.current),
                  (d.current = f),
                  n.addEventListener(`click`, d.current, { once: !0 })));
          } else (n.removeEventListener(`click`, d.current), e());
          c.current = !1;
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ];
      for (let e of h) (n.addEventListener(e, f, !0), n.addEventListener(e, p));
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m);
      }, 0);
      return () => {
        (window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, d.current));
        for (let e of h)
          (n.removeEventListener(e, f, !0), n.removeEventListener(e, p));
      };
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: at(() => (c.current = !0), `onPointerDownCapture`) }
  );
}
at(ht, `usePointerDownOutside`);
function gt(e, t = globalThis?.document) {
  let n = rt(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      let e = at((e) => {
        e.target &&
          !r.current &&
          vt(ct, n, { originalEvent: e }, { discrete: !1 });
      }, `handleFocus`);
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      );
    }, [t, n]),
    {
      onFocusCapture: at(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: at(() => (r.current = !1), `onBlurCapture`),
    }
  );
}
at(gt, `useFocusOutside`);
function _t() {
  let e = new CustomEvent(ot);
  document.dispatchEvent(e);
}
at(_t, `dispatchUpdate`);
function vt(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? et(i, a) : i.dispatchEvent(a));
}
at(vt, `handleAndDispatchCustomEvent`);
var yt = dt,
  bt = ft,
  xt = globalThis?.document ? y.useLayoutEffect : () => {},
  St = Object.defineProperty,
  Ct = y.forwardRef(
    ((e, t) => St(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = y.useState(!1);
      xt(() => a(!0), []);
      let o = n || (i && globalThis?.document?.body);
      return o
        ? se.createPortal((0, k.jsx)($e.div, { ...r, ref: t }), o)
        : null;
    }, `Portal`),
  ),
  wt = Object.defineProperty,
  j = (e, t) => wt(e, `name`, { value: t, configurable: !0 });
function Tt(e, t) {
  return y.useReducer((e, n) => t[e][n] ?? e, e);
}
j(Tt, `useStateMachine`);
var Et = j((e) => {
  let { present: t, children: n } = e,
    r = Dt(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : y.Children.only(n),
    a = kt(r.ref, jt(i));
  return typeof n == `function` || r.isPresent
    ? y.cloneElement(i, { ref: a })
    : null;
}, `Presence`);
function Dt(e) {
  let [t, n] = y.useState(),
    r = y.useRef(null),
    i = y.useRef(e),
    a = y.useRef(`none`),
    o = y.useRef(void 0),
    [s, c] = Tt(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    y.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? At(r.current)), (o.current = void 0))
        : (a.current = `none`);
    }, [s]),
    xt(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          s = At(t);
        (e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, c]),
    xt(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = j((a) => {
            let o = At(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r);
                })));
            }
          }, `handleAnimationEnd`),
          s = j((e) => {
            e.target === t && (a.current = At(r.current));
          }, `handleAnimationStart`);
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      }
      c(`ANIMATION_END`);
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: y.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e);
          ((r.current = t), (o.current = At(t)));
        } else r.current = null;
        n(e);
      }, []),
    }
  );
}
j(Dt, `usePresence`);
function Ot(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
j(Ot, `setRef`);
function kt(...e) {
  let t = y.useRef(e);
  return (
    (t.current = e),
    y.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = Ot(t, e);
          return (!r && typeof n == `function` && (r = !0), n);
        });
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            typeof t == `function` ? t() : Ot(n[e], null);
          }
        };
    }, [])
  );
}
j(kt, `useStableComposedRefs`);
function At(e) {
  return e?.animationName || `none`;
}
j(At, `getAnimationName`);
function jt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
j(jt, `getElementRef`);
var Mt = Object.defineProperty,
  Nt = (e, t) => Mt(e, `name`, { value: t, configurable: !0 }),
  Pt = y.useEffectEvent,
  Ft = y.useInsertionEffect;
function It(e) {
  if (typeof Pt == `function`) return Pt(e);
  let t = y.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`);
  });
  return (
    typeof Ft == `function`
      ? Ft(() => {
          t.current = e;
        })
      : xt(() => {
          t.current = e;
        }),
    y.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
Nt(It, `useEffectEvent`);
var Lt = Object.defineProperty,
  Rt = (e, t) => Lt(e, `name`, { value: t, configurable: !0 }),
  zt = y.useInsertionEffect || xt;
function Bt({
  prop: e,
  defaultProp: t,
  onChange: n = Rt(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = Vt({ defaultProp: t, onChange: n }),
    s = e !== void 0;
  return [
    s ? e : i,
    y.useCallback(
      (t) => {
        if (s) {
          let n = Ht(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
Rt(Bt, `useControllableState`);
function Vt({ defaultProp: e, onChange: t }) {
  let [n, r] = y.useState(e),
    i = y.useRef(n),
    a = y.useRef(t);
  return (
    zt(() => {
      a.current = t;
    }, [t]),
    y.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
Rt(Vt, `useUncontrolledState`);
function Ht(e) {
  return typeof e == `function`;
}
Rt(Ht, `isFunction`);
var Ut = Symbol(`RADIX:SYNC_STATE`);
function Wt(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: s } = t,
    c = i !== void 0,
    l = It(o),
    u = [{ ...n, state: a }];
  r && u.push(r);
  let [d, f] = y.useReducer(
      (t, n) => {
        if (n.type === Ut) return { ...t, state: n.state };
        let r = e(t, n);
        return (c && !Object.is(r.state, t.state) && l(r.state), r);
      },
      ...u,
    ),
    p = d.state,
    m = y.useRef(p);
  y.useEffect(() => {
    m.current !== p && ((m.current = p), c || l(p));
  }, [p, m, c]);
  let h = y.useMemo(() => (i === void 0 ? d : { ...d, state: i }), [d, i]);
  return (
    y.useEffect(() => {
      c && !Object.is(i, d.state) && f({ type: Ut, state: i });
    }, [i, d.state, c]),
    [h, f]
  );
}
Rt(Wt, `useControllableStateReducer`);
var Gt = Object.defineProperty,
  Kt = (e, t) => Gt(e, `name`, { value: t, configurable: !0 }),
  qt = Object.freeze({
    position: `absolute`,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: `hidden`,
    clip: `rect(0, 0, 0, 0)`,
    whiteSpace: `nowrap`,
    wordWrap: `normal`,
  }),
  Jt = y.forwardRef(
    Kt(function (e, t) {
      return (0, k.jsx)($e.span, {
        ...e,
        ref: t,
        style: { ...qt, ...e.style },
      });
    }, `VisuallyHidden`),
  ),
  Yt = Object.defineProperty,
  M = (e, t) => Yt(e, `name`, { value: t, configurable: !0 }),
  Xt = `ToastProvider`,
  [Zt, Qt, $t] = Be(`Toast`),
  [en, tn] = Se(`Toast`, [$t]),
  [nn, rn] = en(Xt),
  an = M((e) => {
    let {
        __scopeToast: t,
        label: n = `Notification`,
        duration: r = 5e3,
        swipeDirection: i = `right`,
        swipeThreshold: a = 50,
        announcerContainer: o,
        children: s,
      } = e,
      [c, l] = y.useState(null),
      [u, d] = y.useState(0),
      f = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Xt}\`. Expected non-empty \`string\`.`,
        ),
      (0, k.jsx)(Zt.Provider, {
        scope: t,
        children: (0, k.jsx)(nn, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: a,
          toastCount: u,
          viewport: c,
          onViewportChange: l,
          onToastAdd: y.useCallback(() => d((e) => e + 1), []),
          onToastRemove: y.useCallback(() => d((e) => e - 1), []),
          isClosePausedRef: f,
          announcerContainer: o,
          children: s,
        }),
      })
    );
  }, `ToastProvider`),
  on = `ToastViewport`,
  sn = [`F8`],
  cn = `toast.viewportPause`,
  ln = `toast.viewportResume`,
  un = y.forwardRef(
    M(function (e, t) {
      let {
          __scopeToast: n,
          hotkey: r = sn,
          label: i = `Notifications ({hotkey})`,
          ...a
        } = e,
        o = rn(on, n),
        s = Qt(n),
        c = y.useRef(null),
        l = y.useRef(null),
        u = y.useRef(null),
        d = y.useRef(null),
        f = _e(t, d, o.onViewportChange),
        p = r.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
        m = o.toastCount > 0;
      (y.useEffect(() => {
        let e = M((e) => {
          r.length !== 0 &&
            r.every((t) => e[t] || e.code === t) &&
            d.current?.focus();
        }, `handleKeyDown`);
        return (
          document.addEventListener(`keydown`, e),
          () => document.removeEventListener(`keydown`, e)
        );
      }, [r]),
        y.useEffect(() => {
          let e = c.current,
            t = d.current;
          if (m && e && t) {
            let n = M(() => {
                if (!o.isClosePausedRef.current) {
                  let e = new CustomEvent(cn);
                  (t.dispatchEvent(e), (o.isClosePausedRef.current = !0));
                }
              }, `handlePause`),
              r = M(() => {
                if (o.isClosePausedRef.current) {
                  let e = new CustomEvent(ln);
                  (t.dispatchEvent(e), (o.isClosePausedRef.current = !1));
                }
              }, `handleResume`),
              i = M((t) => {
                e.contains(t.relatedTarget) || r();
              }, `handleFocusOutResume`),
              a = M(() => {
                e.contains(document.activeElement) || r();
              }, `handlePointerLeaveResume`);
            return (
              e.addEventListener(`focusin`, n),
              e.addEventListener(`focusout`, i),
              e.addEventListener(`pointermove`, n),
              e.addEventListener(`pointerleave`, a),
              window.addEventListener(`blur`, n),
              window.addEventListener(`focus`, r),
              () => {
                (e.removeEventListener(`focusin`, n),
                  e.removeEventListener(`focusout`, i),
                  e.removeEventListener(`pointermove`, n),
                  e.removeEventListener(`pointerleave`, a),
                  window.removeEventListener(`blur`, n),
                  window.removeEventListener(`focus`, r));
              }
            );
          }
        }, [m, o.isClosePausedRef]));
      let h = y.useCallback(
        ({ tabbingDirection: e }) => {
          let t = s().map((t) => {
            let n = t.ref.current,
              r = [n, ...Fn(n)];
            return e === `forwards` ? r : r.reverse();
          });
          return (e === `forwards` ? t.reverse() : t).flat();
        },
        [s],
      );
      return (
        y.useEffect(() => {
          let e = d.current;
          if (e) {
            let t = M((t) => {
              let n = t.altKey || t.ctrlKey || t.metaKey;
              if (t.key === `Tab` && !n) {
                let n = document.activeElement,
                  r = t.shiftKey;
                if (t.target === e && r) {
                  l.current?.focus();
                  return;
                }
                let i = h({ tabbingDirection: r ? `backwards` : `forwards` }),
                  a = i.findIndex((e) => e === n);
                In(i.slice(a + 1))
                  ? t.preventDefault()
                  : r
                    ? l.current?.focus()
                    : u.current?.focus();
              }
            }, `handleKeyDown`);
            return (
              e.addEventListener(`keydown`, t),
              () => e.removeEventListener(`keydown`, t)
            );
          }
        }, [s, h]),
        (0, k.jsxs)(bt, {
          ref: c,
          role: `region`,
          "aria-label": i.replace(`{hotkey}`, p),
          tabIndex: -1,
          style: { pointerEvents: m ? void 0 : `none` },
          children: [
            m &&
              (0, k.jsx)(fn, {
                ref: l,
                onFocusFromOutsideViewport: () => {
                  In(h({ tabbingDirection: `forwards` }));
                },
              }),
            (0, k.jsx)(Zt.Slot, {
              scope: n,
              children: (0, k.jsx)($e.ol, { tabIndex: -1, ...a, ref: f }),
            }),
            m &&
              (0, k.jsx)(fn, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                  In(h({ tabbingDirection: `backwards` }));
                },
              }),
          ],
        })
      );
    }, `ToastViewport`),
  ),
  dn = `ToastFocusProxy`,
  fn = y.forwardRef(
    M(function (e, t) {
      let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
        a = rn(dn, n);
      return (0, k.jsx)(Jt, {
        tabIndex: 0,
        ...i,
        ref: t,
        style: { position: `fixed` },
        onFocus: (e) => {
          let t = e.relatedTarget;
          a.viewport?.contains(t) || r();
        },
      });
    }, `ToastFocusProxy`),
  ),
  pn = `Toast`,
  mn = `toast.swipeStart`,
  hn = `toast.swipeMove`,
  gn = `toast.swipeCancel`,
  _n = `toast.swipeEnd`,
  vn = y.forwardRef(
    M(function (e, t) {
      let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e,
        [s, c] = Bt({ prop: r, defaultProp: i ?? !0, onChange: a, caller: pn });
      return (0, k.jsx)(Et, {
        present: n || s,
        children: (0, k.jsx)(xn, {
          open: s,
          ...o,
          ref: t,
          onClose: () => c(!1),
          onPause: rt(e.onPause),
          onResume: rt(e.onResume),
          onSwipeStart: ue(e.onSwipeStart, (e) => {
            e.currentTarget.setAttribute(`data-swipe`, `start`);
          }),
          onSwipeMove: ue(e.onSwipeMove, (e) => {
            let { x: t, y: n } = e.detail.delta;
            (e.currentTarget.setAttribute(`data-swipe`, `move`),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-move-x`,
                `${t}px`,
              ),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-move-y`,
                `${n}px`,
              ));
          }),
          onSwipeCancel: ue(e.onSwipeCancel, (e) => {
            (e.currentTarget.setAttribute(`data-swipe`, `cancel`),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-x`,
              ),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-y`,
              ),
              e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-end-y`,
              ));
          }),
          onSwipeEnd: ue(e.onSwipeEnd, (e) => {
            let { x: t, y: n } = e.detail.delta;
            (e.currentTarget.setAttribute(`data-swipe`, `end`),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-x`,
              ),
              e.currentTarget.style.removeProperty(
                `--radix-toast-swipe-move-y`,
              ),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-end-x`,
                `${t}px`,
              ),
              e.currentTarget.style.setProperty(
                `--radix-toast-swipe-end-y`,
                `${n}px`,
              ),
              c(!1));
          }),
        }),
      });
    }, `Toast`),
  ),
  [yn, bn] = en(pn, { onClose() {} }),
  xn = y.forwardRef(
    M(function (e, t) {
      let {
          __scopeToast: n,
          type: r = `foreground`,
          duration: i,
          open: a,
          onClose: o,
          onEscapeKeyDown: s,
          onPause: c,
          onResume: l,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...m
        } = e,
        h = rn(pn, n),
        g = Qt(n),
        [_, v] = y.useState(null),
        b = _e(t, v),
        x = y.useRef(null),
        S = y.useRef(null),
        C = i || h.duration,
        w = y.useRef(0),
        T = y.useRef(C),
        ee = y.useRef(0),
        { onToastAdd: te, onToastRemove: ne } = h,
        re = rt(() => {
          (_?.contains(document.activeElement) && h.viewport?.focus(), o());
        }),
        ie = y.useCallback(
          (e) => {
            e &&
              e !== 1 / 0 &&
              (window.clearTimeout(ee.current),
              (w.current = new Date().getTime()),
              (ee.current = window.setTimeout(re, e)));
          },
          [re],
        );
      (y.useEffect(() => {
        let e = h.viewport;
        if (e) {
          let t = M(() => {
              (ie(T.current), l?.());
            }, `handleResume`),
            n = M(() => {
              let e = new Date().getTime() - w.current;
              ((T.current -= e), window.clearTimeout(ee.current), c?.());
            }, `handlePause`);
          return (
            e.addEventListener(cn, n),
            e.addEventListener(ln, t),
            () => {
              (e.removeEventListener(cn, n), e.removeEventListener(ln, t));
            }
          );
        }
      }, [h.viewport, C, c, l, ie]),
        y.useEffect(() => {
          a && !h.isClosePausedRef.current && ie(C);
        }, [a, C, h.isClosePausedRef, ie]),
        y.useEffect(
          () => () => {
            window.clearTimeout(ee.current);
          },
          [],
        ),
        y.useEffect(() => (te(), () => ne()), [te, ne]));
      let ae = y.useMemo(() => (_ ? An(_) : null), [_]);
      return h.viewport
        ? (0, k.jsxs)(k.Fragment, {
            children: [
              ae &&
                (0, k.jsx)(Sn, {
                  __scopeToast: n,
                  role: `status`,
                  "aria-live": r === `foreground` ? `assertive` : `polite`,
                  children: ae,
                }),
              (0, k.jsx)(yn, {
                scope: n,
                onClose: re,
                children: se.createPortal(
                  (0, k.jsx)(Zt.ItemSlot, {
                    scope: n,
                    children: (0, k.jsx)(yt, {
                      asChild: !0,
                      onEscapeKeyDown: ue(s, (e) => {
                        g().some((t) => t.ref.current?.contains(e.target)) ||
                          re();
                      }),
                      children: (0, k.jsx)($e.li, {
                        tabIndex: 0,
                        "data-state": a ? `open` : `closed`,
                        "data-swipe-direction": h.swipeDirection,
                        ...m,
                        ref: b,
                        style: {
                          userSelect: `none`,
                          touchAction: `none`,
                          ...e.style,
                        },
                        onKeyDown: ue(e.onKeyDown, (e) => {
                          e.key === `Escape` &&
                            (s?.(e.nativeEvent),
                            e.nativeEvent.defaultPrevented || re());
                        }),
                        onPointerDown: ue(e.onPointerDown, (e) => {
                          e.button === 0 &&
                            (x.current = { x: e.clientX, y: e.clientY });
                        }),
                        onPointerMove: ue(e.onPointerMove, (e) => {
                          if (!x.current) return;
                          let t = e.clientX - x.current.x,
                            n = e.clientY - x.current.y,
                            r = !!S.current,
                            i = [`left`, `right`].includes(h.swipeDirection),
                            a = [`left`, `up`].includes(h.swipeDirection)
                              ? Math.min
                              : Math.max,
                            o = i ? a(0, t) : 0,
                            s = i ? 0 : a(0, n),
                            c = e.pointerType === `touch` ? 10 : 2,
                            l = { x: o, y: s },
                            f = { originalEvent: e, delta: l };
                          r
                            ? ((S.current = l), jn(hn, d, f, { discrete: !1 }))
                            : Mn(l, h.swipeDirection, c)
                              ? ((S.current = l),
                                jn(mn, u, f, { discrete: !1 }),
                                e.target.setPointerCapture(e.pointerId))
                              : (Math.abs(t) > c || Math.abs(n) > c) &&
                                (x.current = null);
                        }),
                        onPointerUp: ue(e.onPointerUp, (e) => {
                          let t = S.current,
                            n = e.target;
                          if (
                            (n.hasPointerCapture(e.pointerId) &&
                              n.releasePointerCapture(e.pointerId),
                            (S.current = null),
                            (x.current = null),
                            t)
                          ) {
                            let n = e.currentTarget,
                              r = { originalEvent: e, delta: t };
                            (Mn(t, h.swipeDirection, h.swipeThreshold)
                              ? jn(_n, p, r, { discrete: !0 })
                              : jn(gn, f, r, { discrete: !0 }),
                              n.addEventListener(
                                `click`,
                                (e) => e.preventDefault(),
                                { once: !0 },
                              ));
                          }
                        }),
                      }),
                    }),
                  }),
                  h.viewport,
                ),
              }),
            ],
          })
        : null;
    }, `ToastImpl`),
  ),
  Sn = M((e) => {
    let { __scopeToast: t, children: n, ...r } = e,
      i = rn(pn, t),
      [a, o] = y.useState(!1),
      [s, c] = y.useState(!1);
    return (
      Nn(() => o(!0)),
      y.useEffect(() => {
        let e = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(e);
      }, []),
      s
        ? null
        : (0, k.jsx)(Ct, {
            asChild: !0,
            container: i.announcerContainer || void 0,
            children: (0, k.jsx)(Jt, {
              ...r,
              children:
                a && (0, k.jsxs)(k.Fragment, { children: [i.label, ` `, n] }),
            }),
          })
    );
  }, `ToastAnnounce`),
  Cn = y.forwardRef(
    M(function (e, t) {
      let { __scopeToast: n, ...r } = e;
      return (0, k.jsx)($e.div, { ...r, ref: t });
    }, `ToastTitle`),
  ),
  wn = y.forwardRef(
    M(function (e, t) {
      let { __scopeToast: n, ...r } = e;
      return (0, k.jsx)($e.div, { ...r, ref: t });
    }, `ToastDescription`),
  ),
  Tn = `ToastAction`,
  En = y.forwardRef(
    M(function (e, t) {
      let { altText: n, ...r } = e;
      return n.trim()
        ? (0, k.jsx)(kn, {
            altText: n,
            asChild: !0,
            children: (0, k.jsx)(On, { ...r, ref: t }),
          })
        : (console.error(
            `Invalid prop \`altText\` supplied to \`${Tn}\`. Expected non-empty \`string\`.`,
          ),
          null);
    }, `ToastAction`),
  ),
  Dn = `ToastClose`,
  On = y.forwardRef(
    M(function (e, t) {
      let { __scopeToast: n, ...r } = e,
        i = bn(Dn, n);
      return (0, k.jsx)(kn, {
        asChild: !0,
        children: (0, k.jsx)($e.button, {
          type: `button`,
          ...r,
          ref: t,
          onClick: ue(e.onClick, i.onClose),
        }),
      });
    }, `ToastClose`),
  ),
  kn = y.forwardRef(
    M(function (e, t) {
      let { __scopeToast: n, altText: r, ...i } = e;
      return (0, k.jsx)($e.div, {
        "data-radix-toast-announce-exclude": ``,
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t,
      });
    }, `ToastAnnounceExclude`),
  );
function An(e) {
  let t = [];
  return (
    Array.from(e.childNodes).forEach((e) => {
      if (
        (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent),
        Pn(e))
      ) {
        let n = e.ariaHidden || e.hidden || e.style.display === `none`,
          r = e.dataset.radixToastAnnounceExclude === ``;
        if (!n) {
          if (r) {
            let n = e.dataset.radixToastAnnounceAlt;
            n && t.push(n);
          } else t.push(...An(e));
        }
      }
    }),
    t
  );
}
M(An, `getAnnounceTextContent`);
function jn(e, t, n, { discrete: r }) {
  let i = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }),
    r ? et(i, a) : i.dispatchEvent(a));
}
M(jn, `handleAndDispatchCustomEvent`);
var Mn = M((e, t, n = 0) => {
  let r = Math.abs(e.x),
    i = Math.abs(e.y),
    a = r > i;
  return t === `left` || t === `right` ? a && r > n : !a && i > n;
}, `isDeltaInDirection`);
function Nn(e = () => {}) {
  let t = rt(e);
  xt(() => {
    let e = 0,
      n = 0;
    return (
      (e = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(e), window.cancelAnimationFrame(n));
      }
    );
  }, [t]);
}
M(Nn, `useNextFrame`);
function Pn(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
M(Pn, `isHTMLElement`);
function Fn(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: M((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }, `acceptNode`),
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
M(Fn, `getTabbableCandidates`);
function In(e) {
  let t = document.activeElement;
  return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
}
M(In, `focusFirst`);
var Ln = an,
  Rn = un,
  zn = vn,
  Bn = Cn,
  Vn = wn,
  Hn = En,
  Un = On;
function Wn(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Wn(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function Gn() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Wn(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Kn = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  qn = Gn,
  Jn = (e, t) => (n) => {
    if (t?.variants == null) return qn(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = Kn(t) || Kn(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return qn(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  Yn = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Xn = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Zn = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Qn = (0, y.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, y.createElement)(
        `svg`,
        {
          ref: c,
          ...Zn,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Xn(`lucide`, i),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, y.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  $n = (e, t) => {
    let n = (0, y.forwardRef)(({ className: n, ...r }, i) =>
      (0, y.createElement)(Qn, {
        ref: i,
        iconNode: t,
        className: Xn(`lucide-${Yn(e)}`, n),
        ...r,
      }),
    );
    return ((n.displayName = `${e}`), n);
  },
  er = $n(`ArrowLeft`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  tr = $n(`ArrowRight`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  nr = $n(`Check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  rr = $n(`Clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`polyline`, { points: `12 6 12 12 16 14`, key: `68esgv` }],
  ]),
  ir = $n(`Facebook`, [
    [
      `path`,
      {
        d: `M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`,
        key: `1jg4f8`,
      },
    ],
  ]),
  ar = $n(`Instagram`, [
    [
      `rect`,
      {
        width: `20`,
        height: `20`,
        x: `2`,
        y: `2`,
        rx: `5`,
        ry: `5`,
        key: `2e1cvw`,
      },
    ],
    [
      `path`,
      { d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`, key: `9exkf1` },
    ],
    [`line`, { x1: `17.5`, x2: `17.51`, y1: `6.5`, y2: `6.5`, key: `r4j83e` }],
  ]),
  or = $n(`Lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  sr = $n(`Mail`, [
    [
      `rect`,
      { width: `20`, height: `16`, x: `2`, y: `4`, rx: `2`, key: `18n3k1` },
    ],
    [`path`, { d: `m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`, key: `1ocrg3` }],
  ]),
  cr = $n(`MapPin`, [
    [
      `path`,
      {
        d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
        key: `1r0f0z`,
      },
    ],
    [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
  ]),
  lr = $n(`Menu`, [
    [`line`, { x1: `4`, x2: `20`, y1: `12`, y2: `12`, key: `1e0a9i` }],
    [`line`, { x1: `4`, x2: `20`, y1: `6`, y2: `6`, key: `1owob3` }],
    [`line`, { x1: `4`, x2: `20`, y1: `18`, y2: `18`, key: `yk5zj1` }],
  ]),
  ur = $n(`MessageCircle`, [
    [`path`, { d: `M7.9 20A9 9 0 1 0 4 16.1L2 22Z`, key: `vv11sd` }],
  ]),
  dr = $n(`Minus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }]]),
  fr = $n(`Phone`, [
    [
      `path`,
      {
        d: `M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`,
        key: `foiqr5`,
      },
    ],
  ]),
  pr = $n(`Plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  mr = $n(`Send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  hr = $n(`ShoppingBag`, [
    [
      `path`,
      {
        d: `M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z`,
        key: `hou9p0`,
      },
    ],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
  ]),
  gr = $n(`X`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  _r = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  vr = (e, t) => ({ classGroupId: e, validator: t }),
  yr = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  br = `-`,
  xr = [],
  Sr = `arbitrary..`,
  Cr = (e) => {
    let t = Er(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Tr(e);
        let n = e.split(br);
        return wr(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? _r(i, t) : t) : i || xr;
        }
        return n[e] || xr;
      },
    };
  },
  wr = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = wr(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(br) : e.slice(t).join(br),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Tr = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? Sr + r : void 0;
        })(),
  Er = (e) => {
    let { theme: t, classGroups: n } = e;
    return Dr(n, t);
  },
  Dr = (e, t) => {
    let n = yr();
    for (let r in e) {
      let i = e[r];
      Or(i, n, r, t);
    }
    return n;
  },
  Or = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      kr(i, t, n, r);
    }
  },
  kr = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ar(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      jr(e, t, n, r);
      return;
    }
    Mr(e, t, n, r);
  },
  Ar = (e, t, n) => {
    let r = e === `` ? t : Nr(t, e);
    r.classGroupId = n;
  },
  jr = (e, t, n, r) => {
    if (Pr(e)) {
      Or(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(vr(n, e)));
  },
  Mr = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      Or(o, Nr(t, a), n, r);
    }
  },
  Nr = (e, t) => {
    let n = e,
      r = t.split(br),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = yr()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Pr = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  Fr = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Ir = `!`,
  Lr = `:`,
  Rr = [],
  zr = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Br = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Lr) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Ir)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Ir) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return zr(t, l, c, u);
      };
    if (t) {
      let e = t + Lr,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : zr(Rr, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Vr = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Hr = (e) => ({
    cache: Fr(e.cacheSize),
    parseClassName: Br(e),
    sortModifiers: Vr(e),
    postfixLookupClassGroupIds: Ur(e),
    ...Cr(e),
  }),
  Ur = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Wr = /\s+/,
  Gr = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Wr),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + Ir : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  Kr = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; )
      (n = e[t++]) && (r = qr(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  qr = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = qr(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Jr = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Hr(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Gr(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(Kr(...e)));
  },
  Yr = [],
  N = (e) => {
    let t = (t) => t[e] || Yr;
    return ((t.isThemeGetter = !0), t);
  },
  Xr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Zr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Qr = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  $r = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ei =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ti = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ni = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ri =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ii = (e) => Qr.test(e),
  P = (e) => !!e && !Number.isNaN(Number(e)),
  ai = (e) => !!e && Number.isInteger(Number(e)),
  oi = (e) => e.endsWith(`%`) && P(e.slice(0, -1)),
  si = (e) => $r.test(e),
  ci = () => !0,
  li = (e) => ei.test(e) && !ti.test(e),
  ui = () => !1,
  di = (e) => ni.test(e),
  fi = (e) => ri.test(e),
  pi = (e) => !I(e) && !L(e),
  F = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  mi = (e) => ki(e, Ni, ui),
  I = (e) => Xr.test(e),
  hi = (e) => ki(e, Pi, li),
  gi = (e) => ki(e, Fi, P),
  _i = (e) => ki(e, Li, ci),
  vi = (e) => ki(e, Ii, ui),
  yi = (e) => ki(e, ji, ui),
  bi = (e) => ki(e, Mi, fi),
  xi = (e) => ki(e, Ri, di),
  L = (e) => Zr.test(e),
  Si = (e) => Ai(e, Pi),
  Ci = (e) => Ai(e, Ii),
  wi = (e) => Ai(e, ji),
  Ti = (e) => Ai(e, Ni),
  Ei = (e) => Ai(e, Mi),
  Di = (e) => Ai(e, Ri, !0),
  Oi = (e) => Ai(e, Li, !0),
  ki = (e, t, n) => {
    let r = Xr.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Ai = (e, t, n = !1) => {
    let r = Zr.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  ji = (e) => e === `position` || e === `percentage`,
  Mi = (e) => e === `image` || e === `url`,
  Ni = (e) => e === `length` || e === `size` || e === `bg-size`,
  Pi = (e) => e === `length`,
  Fi = (e) => e === `number`,
  Ii = (e) => e === `family-name`,
  Li = (e) => e === `number` || e === `weight`,
  Ri = (e) => e === `shadow`,
  zi = Jr(() => {
    let e = N(`color`),
      t = N(`font`),
      n = N(`text`),
      r = N(`font-weight`),
      i = N(`tracking`),
      a = N(`leading`),
      o = N(`breakpoint`),
      s = N(`container`),
      c = N(`spacing`),
      l = N(`radius`),
      u = N(`shadow`),
      d = N(`inset-shadow`),
      f = N(`text-shadow`),
      p = N(`drop-shadow`),
      m = N(`blur`),
      h = N(`perspective`),
      g = N(`aspect`),
      _ = N(`ease`),
      v = N(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), L, I],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [L, I, c],
      T = () => [ii, `full`, `auto`, ...w()],
      ee = () => [ai, `none`, `subgrid`, L, I],
      te = () => [`auto`, { span: [`full`, ai, L, I] }, ai, L, I],
      ne = () => [ai, `auto`, L, I],
      re = () => [`auto`, `min`, `max`, `fr`, L, I],
      ie = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      ae = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      oe = () => [`auto`, ...w()],
      se = () => [
        ii,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      ce = () => [
        ii,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      le = () => [
        ii,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      E = () => [e, L, I],
      ue = () => [...b(), wi, yi, { position: [L, I] }],
      de = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      D = () => [`auto`, `cover`, `contain`, Ti, mi, { size: [L, I] }],
      fe = () => [oi, Si, hi],
      pe = () => [``, `none`, `full`, l, L, I],
      me = () => [``, P, Si, hi],
      he = () => [`solid`, `dashed`, `dotted`, `double`],
      ge = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      O = () => [P, oi, wi, yi],
      _e = () => [``, `none`, m, L, I],
      ve = () => [`none`, P, L, I],
      k = () => [`none`, P, L, I],
      ye = () => [P, L, I],
      be = () => [ii, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [si],
        breakpoint: [si],
        color: [ci],
        container: [si],
        "drop-shadow": [si],
        ease: [`in`, `out`, `in-out`],
        font: [pi],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [si],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [si],
        shadow: [si],
        spacing: [`px`, P],
        text: [si],
        "text-shadow": [si],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, ii, I, L, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, L, I] }],
        "container-named": [F],
        columns: [{ columns: [P, I, L, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [ai, `auto`, L, I] }],
        basis: [{ basis: [ii, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [P, ii, `auto`, `initial`, `none`, I] }],
        grow: [{ grow: [``, P, L, I] }],
        shrink: [{ shrink: [``, P, L, I] }],
        order: [{ order: [ai, `first`, `last`, `none`, L, I] }],
        "grid-cols": [{ "grid-cols": ee() }],
        "col-start-end": [{ col: te() }],
        "col-start": [{ "col-start": ne() }],
        "col-end": [{ "col-end": ne() }],
        "grid-rows": [{ "grid-rows": ee() }],
        "row-start-end": [{ row: te() }],
        "row-start": [{ "row-start": ne() }],
        "row-end": [{ "row-end": ne() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": re() }],
        "auto-rows": [{ "auto-rows": re() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...ie(), `normal`] }],
        "justify-items": [{ "justify-items": [...ae(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...ae()] }],
        "align-content": [{ content: [`normal`, ...ie()] }],
        "align-items": [{ items: [...ae(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...ae(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": ie() }],
        "place-items": [{ "place-items": [...ae(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...ae()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: oe() }],
        mx: [{ mx: oe() }],
        my: [{ my: oe() }],
        ms: [{ ms: oe() }],
        me: [{ me: oe() }],
        mbs: [{ mbs: oe() }],
        mbe: [{ mbe: oe() }],
        mt: [{ mt: oe() }],
        mr: [{ mr: oe() }],
        mb: [{ mb: oe() }],
        ml: [{ ml: oe() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: se() }],
        "inline-size": [{ inline: [`auto`, ...ce()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ce()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ce()] }],
        "block-size": [{ block: [`auto`, ...le()] }],
        "min-block-size": [{ "min-block": [`auto`, ...le()] }],
        "max-block-size": [{ "max-block": [`none`, ...le()] }],
        w: [{ w: [s, `screen`, ...se()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...se()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...se()] },
        ],
        h: [{ h: [`screen`, `lh`, ...se()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...se()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...se()] }],
        "font-size": [{ text: [`base`, n, Si, hi] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Oi, _i] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              oi,
              I,
            ],
          },
        ],
        "font-family": [{ font: [Ci, vi, t] }],
        "font-features": [{ "font-features": [I] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, L, I] }],
        "line-clamp": [{ "line-clamp": [P, `none`, L, gi] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, L, I] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, L, I] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: E() }],
        "text-color": [{ text: E() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...he(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [P, `from-font`, `auto`, L, hi] },
        ],
        "text-decoration-color": [{ decoration: E() }],
        "underline-offset": [{ "underline-offset": [P, `auto`, L, I] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "tab-size": [{ tab: [ai, L, I] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              L,
              I,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, L, I] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: ue() }],
        "bg-repeat": [{ bg: de() }],
        "bg-size": [{ bg: D() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  ai,
                  L,
                  I,
                ],
                radial: [``, L, I],
                conic: [ai, L, I],
              },
              Ei,
              bi,
            ],
          },
        ],
        "bg-color": [{ bg: E() }],
        "gradient-from-pos": [{ from: fe() }],
        "gradient-via-pos": [{ via: fe() }],
        "gradient-to-pos": [{ to: fe() }],
        "gradient-from": [{ from: E() }],
        "gradient-via": [{ via: E() }],
        "gradient-to": [{ to: E() }],
        rounded: [{ rounded: pe() }],
        "rounded-s": [{ "rounded-s": pe() }],
        "rounded-e": [{ "rounded-e": pe() }],
        "rounded-t": [{ "rounded-t": pe() }],
        "rounded-r": [{ "rounded-r": pe() }],
        "rounded-b": [{ "rounded-b": pe() }],
        "rounded-l": [{ "rounded-l": pe() }],
        "rounded-ss": [{ "rounded-ss": pe() }],
        "rounded-se": [{ "rounded-se": pe() }],
        "rounded-ee": [{ "rounded-ee": pe() }],
        "rounded-es": [{ "rounded-es": pe() }],
        "rounded-tl": [{ "rounded-tl": pe() }],
        "rounded-tr": [{ "rounded-tr": pe() }],
        "rounded-br": [{ "rounded-br": pe() }],
        "rounded-bl": [{ "rounded-bl": pe() }],
        "border-w": [{ border: me() }],
        "border-w-x": [{ "border-x": me() }],
        "border-w-y": [{ "border-y": me() }],
        "border-w-s": [{ "border-s": me() }],
        "border-w-e": [{ "border-e": me() }],
        "border-w-bs": [{ "border-bs": me() }],
        "border-w-be": [{ "border-be": me() }],
        "border-w-t": [{ "border-t": me() }],
        "border-w-r": [{ "border-r": me() }],
        "border-w-b": [{ "border-b": me() }],
        "border-w-l": [{ "border-l": me() }],
        "divide-x": [{ "divide-x": me() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": me() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...he(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...he(), `hidden`, `none`] }],
        "border-color": [{ border: E() }],
        "border-color-x": [{ "border-x": E() }],
        "border-color-y": [{ "border-y": E() }],
        "border-color-s": [{ "border-s": E() }],
        "border-color-e": [{ "border-e": E() }],
        "border-color-bs": [{ "border-bs": E() }],
        "border-color-be": [{ "border-be": E() }],
        "border-color-t": [{ "border-t": E() }],
        "border-color-r": [{ "border-r": E() }],
        "border-color-b": [{ "border-b": E() }],
        "border-color-l": [{ "border-l": E() }],
        "divide-color": [{ divide: E() }],
        "outline-style": [{ outline: [...he(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [P, L, I] }],
        "outline-w": [{ outline: [``, P, Si, hi] }],
        "outline-color": [{ outline: E() }],
        shadow: [{ shadow: [``, `none`, u, Di, xi] }],
        "shadow-color": [{ shadow: E() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Di, xi] }],
        "inset-shadow-color": [{ "inset-shadow": E() }],
        "ring-w": [{ ring: me() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: E() }],
        "ring-offset-w": [{ "ring-offset": [P, hi] }],
        "ring-offset-color": [{ "ring-offset": E() }],
        "inset-ring-w": [{ "inset-ring": me() }],
        "inset-ring-color": [{ "inset-ring": E() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Di, xi] }],
        "text-shadow-color": [{ "text-shadow": E() }],
        opacity: [{ opacity: [P, L, I] }],
        "mix-blend": [
          { "mix-blend": [...ge(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": ge() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [P] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": O() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": O() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": E() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": E() }],
        "mask-image-t-from-pos": [{ "mask-t-from": O() }],
        "mask-image-t-to-pos": [{ "mask-t-to": O() }],
        "mask-image-t-from-color": [{ "mask-t-from": E() }],
        "mask-image-t-to-color": [{ "mask-t-to": E() }],
        "mask-image-r-from-pos": [{ "mask-r-from": O() }],
        "mask-image-r-to-pos": [{ "mask-r-to": O() }],
        "mask-image-r-from-color": [{ "mask-r-from": E() }],
        "mask-image-r-to-color": [{ "mask-r-to": E() }],
        "mask-image-b-from-pos": [{ "mask-b-from": O() }],
        "mask-image-b-to-pos": [{ "mask-b-to": O() }],
        "mask-image-b-from-color": [{ "mask-b-from": E() }],
        "mask-image-b-to-color": [{ "mask-b-to": E() }],
        "mask-image-l-from-pos": [{ "mask-l-from": O() }],
        "mask-image-l-to-pos": [{ "mask-l-to": O() }],
        "mask-image-l-from-color": [{ "mask-l-from": E() }],
        "mask-image-l-to-color": [{ "mask-l-to": E() }],
        "mask-image-x-from-pos": [{ "mask-x-from": O() }],
        "mask-image-x-to-pos": [{ "mask-x-to": O() }],
        "mask-image-x-from-color": [{ "mask-x-from": E() }],
        "mask-image-x-to-color": [{ "mask-x-to": E() }],
        "mask-image-y-from-pos": [{ "mask-y-from": O() }],
        "mask-image-y-to-pos": [{ "mask-y-to": O() }],
        "mask-image-y-from-color": [{ "mask-y-from": E() }],
        "mask-image-y-to-color": [{ "mask-y-to": E() }],
        "mask-image-radial": [{ "mask-radial": [L, I] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": O() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": O() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": E() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": E() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [P] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": O() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": O() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": E() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": E() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: ue() }],
        "mask-repeat": [{ mask: de() }],
        "mask-size": [{ mask: D() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, L, I] }],
        filter: [{ filter: [``, `none`, L, I] }],
        blur: [{ blur: _e() }],
        brightness: [{ brightness: [P, L, I] }],
        contrast: [{ contrast: [P, L, I] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Di, xi] }],
        "drop-shadow-color": [{ "drop-shadow": E() }],
        grayscale: [{ grayscale: [``, P, L, I] }],
        "hue-rotate": [{ "hue-rotate": [P, L, I] }],
        invert: [{ invert: [``, P, L, I] }],
        saturate: [{ saturate: [P, L, I] }],
        sepia: [{ sepia: [``, P, L, I] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, L, I] }],
        "backdrop-blur": [{ "backdrop-blur": _e() }],
        "backdrop-brightness": [{ "backdrop-brightness": [P, L, I] }],
        "backdrop-contrast": [{ "backdrop-contrast": [P, L, I] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, P, L, I] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [P, L, I] }],
        "backdrop-invert": [{ "backdrop-invert": [``, P, L, I] }],
        "backdrop-opacity": [{ "backdrop-opacity": [P, L, I] }],
        "backdrop-saturate": [{ "backdrop-saturate": [P, L, I] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, P, L, I] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              L,
              I,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [P, `initial`, L, I] }],
        ease: [{ ease: [`linear`, `initial`, _, L, I] }],
        delay: [{ delay: [P, L, I] }],
        animate: [{ animate: [`none`, v, L, I] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, L, I] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: ve() }],
        "rotate-x": [{ "rotate-x": ve() }],
        "rotate-y": [{ "rotate-y": ve() }],
        "rotate-z": [{ "rotate-z": ve() }],
        scale: [{ scale: k() }],
        "scale-x": [{ "scale-x": k() }],
        "scale-y": [{ "scale-y": k() }],
        "scale-z": [{ "scale-z": k() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: ye() }],
        "skew-x": [{ "skew-x": ye() }],
        "skew-y": [{ "skew-y": ye() }],
        transform: [{ transform: [L, I, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: be() }],
        "translate-x": [{ "translate-x": be() }],
        "translate-y": [{ "translate-y": be() }],
        "translate-z": [{ "translate-z": be() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [ai, L, I] }],
        accent: [{ accent: E() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: E() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              L,
              I,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": E() }],
        "scrollbar-track-color": [{ "scrollbar-track": E() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, L, I] },
        ],
        fill: [{ fill: [`none`, ...E()] }],
        "stroke-w": [{ stroke: [P, Si, hi, gi] }],
        stroke: [{ stroke: [`none`, ...E()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function R(...e) {
  return zi(Gn(e));
}
(window.self, window.top);
var Bi = Ln,
  Vi = y.forwardRef(({ className: e, ...t }, n) =>
    (0, k.jsx)(Rn, {
      ref: n,
      className: R(
        `fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]`,
        e,
      ),
      ...t,
    }),
  );
Vi.displayName = Rn.displayName;
var Hi = Jn(
    `group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full`,
    {
      variants: {
        variant: {
          default: `border-border bg-background text-foreground`,
          destructive: `destructive group border-destructive bg-destructive text-destructive-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  ),
  Ui = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    (0, k.jsx)(zn, { ref: r, className: R(Hi({ variant: t }), e), ...n }),
  );
Ui.displayName = zn.displayName;
var Wi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, k.jsx)(Hn, {
    ref: n,
    className: R(
      `inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive`,
      e,
    ),
    ...t,
  }),
);
Wi.displayName = Hn.displayName;
var Gi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, k.jsx)(Un, {
    ref: n,
    className: R(
      `absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600`,
      e,
    ),
    "toast-close": ``,
    ...t,
    children: (0, k.jsx)(gr, { className: `h-4 w-4` }),
  }),
);
Gi.displayName = Un.displayName;
var Ki = y.forwardRef(({ className: e, ...t }, n) =>
  (0, k.jsx)(Bn, { ref: n, className: R(`text-sm font-semibold`, e), ...t }),
);
Ki.displayName = Bn.displayName;
var qi = y.forwardRef(({ className: e, ...t }, n) =>
  (0, k.jsx)(Vn, { ref: n, className: R(`text-sm opacity-90`, e), ...t }),
);
qi.displayName = Vn.displayName;
function Ji() {
  let { toasts: e } = oe();
  return (0, k.jsxs)(Bi, {
    children: [
      e.map(function ({ id: e, title: t, description: n, action: r, ...i }) {
        return (0, k.jsxs)(
          Ui,
          {
            ...i,
            children: [
              (0, k.jsxs)(`div`, {
                className: `grid gap-1`,
                children: [
                  t && (0, k.jsx)(Ki, { children: t }),
                  n && (0, k.jsx)(qi, { children: n }),
                ],
              }),
              r,
              (0, k.jsx)(Gi, {}),
            ],
          },
          e,
        );
      }),
      (0, k.jsx)(Vi, {}),
    ],
  });
}
var Yi = y.createContext(void 0),
  z = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, k.jsx)(Yi.Provider, { value: e, children: t })
  ),
  B = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Xi = new (class {
    #e = B;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Zi(e) {
  setTimeout(e, 0);
}
var Qi = typeof window > `u` || `Deno` in globalThis;
function $i() {}
function ea(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ta(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function na(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function ra(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ia(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== oa(o, t.options)) return !1;
    } else if (!ca(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function aa(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (sa(t.options.mutationKey) !== sa(a)) return !1;
    } else if (!ca(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function oa(e, t) {
  return (t?.queryKeyHashFn || sa)(e);
}
function sa(e) {
  return JSON.stringify(e, (e, t) =>
    fa(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function ca(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!ca(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!ca(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var la = Object.prototype.hasOwnProperty;
function ua(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = da(e) && da(t);
  if (!r && !(fa(e) && fa(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : la.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = ua(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function da(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function fa(e) {
  if (!pa(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !pa(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function pa(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ma(e) {
  return new Promise((t) => {
    Xi.setTimeout(t, e);
  });
}
function ha(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : ua(e, t);
}
function ga(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function _a(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var va = Symbol();
function ya(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === va
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function ba(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var xa = () => Qi,
  Sa = () => xa(),
  Ca = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  wa = new (class extends Ca {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  Ta = Zi;
function Ea() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Ta,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var V = Ea(),
  H = new (class extends Ca {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function Da(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Oa(e) {
  return (e ?? `online`) !== `online` || H.isOnline();
}
var ka = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function Aa(e) {
  let t = !1,
    n = 0,
    r,
    i = `pending`,
    a,
    o,
    s = new Promise((e, t) => {
      ((a = e), (o = t));
    });
  s.catch($i);
  let c = () => i !== `pending`,
    l = (t) => {
      if (!c()) {
        let n = new ka(t);
        (h(n), e.onCancel?.(n));
      }
    },
    u = () => {
      t = !0;
    },
    d = () => {
      t = !1;
    },
    f = () =>
      wa.isFocused() &&
      (e.networkMode === `always` || H.isOnline()) &&
      e.canRun(),
    p = () => Oa(e.networkMode) && e.canRun(),
    m = (e) => {
      c() || (r?.(), (i = `resolved`), a(e));
    },
    h = (e) => {
      c() || (r?.(), (i = `rejected`), o(e));
    },
    g = () =>
      new Promise((t) => {
        ((r = (e) => {
          (c() || f()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), c() || e.onContinue?.());
      }),
    _ = () => {
      if (c()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(m)
        .catch((r) => {
          if (c()) return;
          let i = e.retry ?? (Sa() ? 0 : 3),
            a = e.retryDelay ?? Da,
            o = typeof a == `function` ? a(n, r) : a,
            s =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !s) {
            h(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            ma(o)
              .then(() => (f() ? void 0 : g()))
              .then(() => {
                t ? h(r) : _();
              }));
        });
    };
  return {
    promise: s,
    status: () => i,
    cancel: l,
    continue: () => (r?.(), s),
    cancelRetry: u,
    continueRetry: d,
    canStart: p,
    start: () => (p() ? _() : g().then(_), s),
  };
}
var ja = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      ta(this.gcTime) &&
        (this.#e = Xi.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (Sa() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Xi.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Ma(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              ba(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = ya(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? _a : ga;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Pa : Na,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Na(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            )
        : l;
    },
  };
}
function Na(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Pa(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Fa = class extends ja {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Ra(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Ra(this.options);
      e.data !== void 0 &&
        (this.setState(La(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = ha(this.state.data, e, this.options);
    return (
      this.#c({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#c({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then($i).catch($i) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => ra(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === va || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => ra(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !na(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    let t = this.observers.indexOf(e);
    t !== -1 &&
      (this.observers.splice(t, 1),
      this.observers.length ||
        (this.#a &&
          (this.#s ||
          (this.state.fetchStatus === `paused` &&
            this.state.status === `pending`)
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#c({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = ya(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? Ma(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#c({ type: `fetch`, meta: a.fetchOptions?.meta }));
    let o = (this.#a = Aa({
      initialPromise: t?.initialPromise,
      fn: a.fetchFn,
      onCancel: (e) => {
        (e instanceof ka &&
          e.revert &&
          this.setState({ ...this.#n, fetchStatus: `idle` }),
          n.abort());
      },
      onFail: (e, t) => {
        this.#c({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#c({ type: `pause` });
      },
      onContinue: () => {
        this.#c({ type: `continue` });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode,
      canRun: () => !0,
    }));
    try {
      let e = await o.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof ka) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#c({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      (this.#a === o && (this.#a = void 0), this.scheduleGc());
    }
  }
  #c(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...Ia(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...La(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      V.batch(() => {
        (this.observers.slice().forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function Ia(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Oa(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function La(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Ra(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var za = class extends ja {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Ba()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return (
      this.#r?.continue() ??
      (this.state.status === `pending`
        ? this.execute(this.state.variables)
        : Promise.resolve())
    );
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      },
      r = (this.#r = Aa({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(e, n)
            : Promise.reject(Error(`No mutationFn found`)),
        onFail: (e, t) => {
          this.#i({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#i({ type: `pause` });
        },
        onContinue: t,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#n.canRun(this),
      })),
      i = this.state.status === `pending`,
      a = !r.canStart();
    try {
      if (i) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: a }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: a });
      }
      let o = await r.start();
      return (
        await this.#n.config.onSuccess?.(o, e, this.state.context, this, n),
        await this.options.onSuccess?.(o, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          o,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(o, null, e, this.state.context, n),
        this.#i({ type: `success`, data: o }),
        o
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      (this.#r === r && (this.#r = void 0), this.#n.runNext(this));
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      V.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function Ba() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Va = class extends Ca {
  #e;
  #t;
  #n;
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  build(e, t, n) {
    let r = new za({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = Ha(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Ha(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n) {
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
        }
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = Ha(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = Ha(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    V.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => aa(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => aa(e, t));
  }
  notify(e) {
    V.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return V.batch(() => Promise.all(e.map((e) => e.continue().catch($i))));
  }
};
function Ha(e) {
  return e.options.scope?.id;
}
var Ua = class extends Ca {
    #e;
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? oa(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Fa({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      V.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => ia(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => ia(e, t)) : t;
    }
    notify(e) {
      V.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      V.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      V.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Wa = new (class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Ua()),
        (this.#t = e.mutationCache || new Va()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = wa.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = H.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(ra(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = ea(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return V.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      V.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return V.batch(() => {
        let r = n.findAll(e),
          i = new Set(r);
        return (
          r.forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, predicate: (e) => i.has(e) }, t)
        );
      });
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = V.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then($i).catch($i);
    }
    invalidateQueries(e, t = {}) {
      return V.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = V.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch($i)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then($i);
    }
    async query(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t),
        r = n.isStaleByTime(ra(t.staleTime, n))
          ? await n.fetch(t)
          : n.state.data,
        i = t.select;
      return i ? i(r) : r;
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(ra(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then($i).catch($i);
    }
    infiniteQuery(e) {
      return ((e._type = `infinite`), this.query(e));
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then($i).catch($i);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return H.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(sa(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          ca(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(sa(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          ca(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= oa(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === va && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  })({ defaultOptions: { queries: { refetchOnWindowFocus: !1, retry: 1 } } });
function Ga() {
  return (
    (Ga = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ga.apply(null, arguments)
  );
}
var Ka;
(function (e) {
  ((e.Pop = `POP`), (e.Push = `PUSH`), (e.Replace = `REPLACE`));
})((Ka ||= {}));
var qa = `popstate`;
function Ja(e) {
  e === void 0 && (e = {});
  function t(e, t) {
    let { pathname: n, search: r, hash: i } = e.location;
    return Qa(
      ``,
      { pathname: n, search: r, hash: i },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : $a(t);
  }
  return to(t, n, null, e);
}
function U(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function Ya(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function Xa() {
  return Math.random().toString(36).substr(2, 8);
}
function Za(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Qa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ga(
      { pathname: typeof e == `string` ? e : e.pathname, search: ``, hash: `` },
      typeof t == `string` ? eo(t) : t,
      { state: n, key: (t && t.key) || r || Xa() },
    )
  );
}
function $a(e) {
  let { pathname: t = `/`, search: n = ``, hash: r = `` } = e;
  return (
    n && n !== `?` && (t += n.charAt(0) === `?` ? n : `?` + n),
    r && r !== `#` && (t += r.charAt(0) === `#` ? r : `#` + r),
    t
  );
}
function eo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function to(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = Ka.Pop,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState(Ga({}, o.state, { idx: l }), ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = Ka.Pop;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = Ka.Push;
    let r = Qa(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = Za(r, l),
      f = h.createHref(r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = Ka.Replace;
    let r = Qa(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = Za(r, l),
      d = h.createHref(r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    let t = i.location.origin === `null` ? i.location.href : i.location.origin,
      n = typeof e == `string` ? e : $a(e);
    return (
      (n = n.replace(/ $/, `%20`)),
      U(
        t,
        `No window.location.(origin|href) available to create URL for href: ` +
          n,
      ),
      new URL(n, t)
    );
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(qa, d),
        (c = e),
        () => {
          (i.removeEventListener(qa, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
var no;
(function (e) {
  ((e.data = `data`),
    (e.deferred = `deferred`),
    (e.redirect = `redirect`),
    (e.error = `error`));
})((no ||= {}));
function ro(e, t, n) {
  return (n === void 0 && (n = `/`), io(e, t, n, !1));
}
function io(e, t, n, r) {
  let i = xo((typeof t == `string` ? eo(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = ao(e);
  so(a);
  let o = null,
    s = W(i);
  for (let e = 0; o == null && e < a.length; ++e) o = vo(a[e], s, r);
  return o;
}
function ao(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ``));
  let i = (e, i, a) => {
    let o = {
      relativePath: a === void 0 ? e.path || `` : a,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: i,
      route: e,
    };
    o.relativePath.startsWith(`/`) &&
      (U(
        o.relativePath.startsWith(r),
        `Absolute route path "` +
          o.relativePath +
          `" nested under path ` +
          (`"` + r + `" is not valid. An absolute child route path `) +
          `must start with the combined path of all its parent routes.`,
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let s = K([r, o.relativePath]),
      c = n.concat(o);
    (e.children &&
      e.children.length > 0 &&
      (U(
        e.index !== !0,
        `Index routes must not have child routes. Please remove ` +
          (`all child routes from route path "` + s + `".`),
      ),
      ao(e.children, t, c, s)),
      (e.path != null || e.index) &&
        t.push({ path: s, score: go(s, e.index), routesMeta: c }));
  };
  return (
    e.forEach((e, t) => {
      var n;
      if (e.path === `` || !((n = e.path) != null && n.includes(`?`))) i(e, t);
      else for (let n of oo(e.path)) i(e, t, n);
    }),
    t
  );
}
function oo(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = oo(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function so(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? _o(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var co = /^:[\w-]+$/,
  lo = 3,
  uo = 2,
  fo = 1,
  po = 10,
  mo = -2,
  ho = (e) => e === `*`;
function go(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(ho) && (r += mo),
    t && (r += uo),
    n
      .filter((e) => !ho(e))
      .reduce((e, t) => e + (co.test(t) ? lo : t === `` ? fo : po), r)
  );
}
function _o(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function vo(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = yo(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = yo(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: K([a, u.pathname]),
        pathnameBase: Oo(K([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = K([a, u.pathnameBase])));
  }
  return o;
}
function yo(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = bo(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, t, n) => {
      let { paramName: r, isOptional: i } = t;
      if (r === `*`) {
        let e = s[n] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let c = s[n];
      return ((e[r] = i && !c ? void 0 : (c || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function bo(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ya(
      e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
      `Route path "` +
        e +
        `" will be treated as if it were ` +
        (`"` + e.replace(/\*$/, `/*`) + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        (`please change the route path to "` + e.replace(/\*$/, `/*`) + `".`),
    ));
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (e, t, n) => (
            r.push({ paramName: t, isOptional: n != null }),
            n ? `/?([^\\/]+)?` : `/([^\\/]+)`
          ),
        );
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function W(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      Ya(
        !1,
        `The URL path "` +
          e +
          `" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ` +
          (`encoding (` + t + `).`),
      ),
      e
    );
  }
}
function xo(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function So(e, t) {
  t === void 0 && (t = `/`);
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? eo(e) : e,
    a;
  return (
    n
      ? ((n = Do(n)),
        (a = n.startsWith(`/`) ? Co(n.substring(1), `/`) : Co(n, t)))
      : (a = t),
    { pathname: a, search: ko(r), hash: Ao(i) }
  );
}
function Co(e, t) {
  let n = t.replace(/\/+$/, ``).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function wo(e, t, n, r) {
  return (
    `Cannot include a '` +
    e +
    `' character in a manually specified ` +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      `].  Please separate it out to the `) +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    `a string in <Link to="..."> and the router will parse it for you.`
  );
}
function To(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Eo(e, t) {
  let n = To(e);
  return t
    ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
    : n.map((e) => e.pathnameBase);
}
function G(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == `string`
    ? (i = eo(e))
    : ((i = Ga({}, e)),
      U(
        !i.pathname || !i.pathname.includes(`?`),
        wo(`?`, `pathname`, `search`, i),
      ),
      U(
        !i.pathname || !i.pathname.includes(`#`),
        wo(`#`, `pathname`, `hash`, i),
      ),
      U(!i.search || !i.search.includes(`#`), wo(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = So(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Do = (e) => e.replace(/\/\/+/g, `/`),
  K = (e) => Do(e.join(`/`)),
  Oo = (e) => e.replace(/\/+$/, ``).replace(/^\/*/, `/`),
  ko = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Ao = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e);
function jo(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
var Mo = [`post`, `put`, `patch`, `delete`];
new Set(Mo);
var No = [`get`, ...Mo];
new Set(No);
function Po() {
  return (
    (Po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Po.apply(null, arguments)
  );
}
var Fo = y.createContext(null),
  Io = y.createContext(null),
  Lo = y.createContext(null),
  Ro = y.createContext(null),
  zo = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bo = y.createContext(null);
function Vo(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  !Ho() && U(!1);
  let { basename: r, navigator: i } = y.useContext(Lo),
    { hash: a, pathname: o, search: s } = Zo(e, { relative: n }),
    c = o;
  return (
    r !== `/` && (c = o === `/` ? r : K([r, o])),
    i.createHref({ pathname: c, search: s, hash: a })
  );
}
function Ho() {
  return y.useContext(Ro) != null;
}
function Uo() {
  return (!Ho() && U(!1), y.useContext(Ro).location);
}
function Wo() {
  return y.useContext(Ro).navigationType;
}
function Go(e) {
  y.useContext(Lo).static || y.useLayoutEffect(e);
}
function Ko() {
  let { isDataRoute: e } = y.useContext(zo);
  return e ? fs() : qo();
}
function qo() {
  !Ho() && U(!1);
  let e = y.useContext(Fo),
    { basename: t, future: n, navigator: r } = y.useContext(Lo),
    { matches: i } = y.useContext(zo),
    { pathname: a } = Uo(),
    o = JSON.stringify(Eo(i, n.v7_relativeSplatPath)),
    s = y.useRef(!1);
  return (
    Go(() => {
      s.current = !0;
    }),
    y.useCallback(
      function (n, i) {
        if ((i === void 0 && (i = {}), !s.current)) return;
        if (typeof n == `number`) {
          r.go(n);
          return;
        }
        let c = G(n, JSON.parse(o), a, i.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : K([t, c.pathname])),
          (i.replace ? r.replace : r.push)(c, i.state, i));
      },
      [t, r, o, a, e],
    )
  );
}
var Jo = y.createContext(null);
function Yo(e) {
  let t = y.useContext(zo).outlet;
  return t && y.createElement(Jo.Provider, { value: e }, t);
}
function Xo() {
  let { matches: e } = y.useContext(zo),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Zo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Lo),
    { matches: i } = y.useContext(zo),
    { pathname: a } = Uo(),
    o = JSON.stringify(Eo(i, r.v7_relativeSplatPath));
  return y.useMemo(() => G(e, JSON.parse(o), a, n === `path`), [e, o, a, n]);
}
function Qo(e, t) {
  return $o(e, t);
}
function $o(e, t, n, r) {
  !Ho() && U(!1);
  let { navigator: i } = y.useContext(Lo),
    { matches: a } = y.useContext(zo),
    o = a[a.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : `/`;
  o && o.route;
  let l = Uo(),
    u;
  if (t) {
    var d;
    let e = typeof t == `string` ? eo(t) : t;
    (!(c === `/` || ((d = e.pathname) != null && d.startsWith(c))) && U(!1),
      (u = e));
  } else u = l;
  let f = u.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = ro(e, { pathname: p }),
    h = is(
      m &&
        m.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, s, e.params),
            pathname: K([
              c,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : K([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && h
    ? y.createElement(
        Ro.Provider,
        {
          value: {
            location: Po(
              {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
              },
              u,
            ),
            navigationType: Ka.Pop,
          },
        },
        h,
      )
    : h;
}
function es() {
  let e = ds(),
    t = jo(e)
      ? e.status + ` ` + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null;
  return y.createElement(
    y.Fragment,
    null,
    y.createElement(`h2`, null, `Unexpected Application Error!`),
    y.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
    n
      ? y.createElement(
          `pre`,
          {
            style: {
              padding: `0.5rem`,
              backgroundColor: `rgba(200,200,200, 0.5)`,
            },
          },
          n,
        )
      : null,
    null,
  );
}
var ts = y.createElement(es, null),
  ns = class extends y.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        `React Router caught the following error during render`,
        e,
        t,
      );
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : y.createElement(
            zo.Provider,
            { value: this.props.routeContext },
            y.createElement(Bo.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          );
    }
  };
function rs(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = y.useContext(Fo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(zo.Provider, { value: t }, r)
  );
}
function is(e, t, n, r) {
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    o = n?.errors;
  if (o != null) {
    let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
    (!(e >= 0) && U(!1), (a = a.slice(0, Math.min(a.length, e + 1))));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: r } = n,
          i =
            t.route.loader &&
            e[t.route.id] === void 0 &&
            (!r || r[t.route.id] === void 0);
        if (t.route.lazy || i) {
          ((s = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((e, r, i) => {
    let l,
      u = !1,
      d = null,
      f = null;
    n &&
      ((l = o && r.route.id ? o[r.route.id] : void 0),
      (d = r.route.errorElement || ts),
      s &&
        (c < 0 && i === 0
          ? (ms(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (u = !0),
            (f = null))
          : c === i &&
            ((u = !0), (f = r.route.hydrateFallbackElement || null))));
    let p = t.concat(a.slice(0, i + 1)),
      m = () => {
        let t;
        return (
          (t = l
            ? d
            : u
              ? f
              : r.route.Component
                ? y.createElement(r.route.Component, null)
                : r.route.element
                  ? r.route.element
                  : e),
          y.createElement(rs, {
            match: r,
            routeContext: { outlet: e, matches: p, isDataRoute: n != null },
            children: t,
          })
        );
      };
    return n && (r.route.ErrorBoundary || r.route.errorElement || i === 0)
      ? y.createElement(ns, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: l,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var as = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      e
    );
  })(as || {}),
  os = (function (e) {
    return (
      (e.UseBlocker = `useBlocker`),
      (e.UseLoaderData = `useLoaderData`),
      (e.UseActionData = `useActionData`),
      (e.UseRouteError = `useRouteError`),
      (e.UseNavigation = `useNavigation`),
      (e.UseRouteLoaderData = `useRouteLoaderData`),
      (e.UseMatches = `useMatches`),
      (e.UseRevalidator = `useRevalidator`),
      (e.UseNavigateStable = `useNavigate`),
      (e.UseRouteId = `useRouteId`),
      e
    );
  })(os || {});
function ss(e) {
  let t = y.useContext(Fo);
  return (!t && U(!1), t);
}
function cs(e) {
  let t = y.useContext(Io);
  return (!t && U(!1), t);
}
function ls(e) {
  let t = y.useContext(zo);
  return (!t && U(!1), t);
}
function us(e) {
  let t = ls(e),
    n = t.matches[t.matches.length - 1];
  return (!n.route.id && U(!1), n.route.id);
}
function ds() {
  let e = y.useContext(Bo),
    t = cs(os.UseRouteError),
    n = us(os.UseRouteError);
  return e === void 0 ? t.errors?.[n] : e;
}
function fs() {
  let { router: e } = ss(as.UseNavigateStable),
    t = us(os.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Go(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (r, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof r == `number`
              ? e.navigate(r)
              : e.navigate(r, Po({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
var ps = {};
function ms(e, t, n) {
  !t && !ps[e] && (ps[e] = !0);
}
var hs = (e, t, n) => (
  `` +
    t +
    ("You can use the `" + e + "` future flag to opt-in early. ") +
    (`For more information, see ` + n + `.`),
  void 0
);
function gs(e, t) {
  (e?.v7_startTransition === void 0 &&
    hs(
      `v7_startTransition`,
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      `https://reactrouter.com/v6/upgrading/future#v7_starttransition`,
    ),
    e?.v7_relativeSplatPath === void 0 &&
      (!t || t.v7_relativeSplatPath === void 0) &&
      hs(
        `v7_relativeSplatPath`,
        `Relative route resolution within Splat routes is changing in v7`,
        `https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`,
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        hs(
          `v7_fetcherPersist`,
          `The persistence behavior of fetchers is changing in v7`,
          `https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`,
        ),
      t.v7_normalizeFormMethod === void 0 &&
        hs(
          `v7_normalizeFormMethod`,
          "Casing of `formMethod` fields is being normalized to uppercase in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`,
        ),
      t.v7_partialHydration === void 0 &&
        hs(
          `v7_partialHydration`,
          "`RouterProvider` hydration behavior is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_partialhydration`,
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        hs(
          `v7_skipActionErrorRevalidation`,
          "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
          `https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`,
        )));
}
function _s(e) {
  return Yo(e.context);
}
function vs(e) {
  U(!1);
}
function ys(e) {
  let {
    basename: t = `/`,
    children: n = null,
    location: r,
    navigationType: i = Ka.Pop,
    navigator: a,
    static: o = !1,
    future: s,
  } = e;
  Ho() && U(!1);
  let c = t.replace(/^\/*/, `/`),
    l = y.useMemo(
      () => ({
        basename: c,
        navigator: a,
        static: o,
        future: Po({ v7_relativeSplatPath: !1 }, s),
      }),
      [c, s, a, o],
    );
  typeof r == `string` && (r = eo(r));
  let {
      pathname: u = `/`,
      search: d = ``,
      hash: f = ``,
      state: p = null,
      key: m = `default`,
    } = r,
    h = y.useMemo(() => {
      let e = xo(u, c);
      return e == null
        ? null
        : {
            location: { pathname: e, search: d, hash: f, state: p, key: m },
            navigationType: i,
          };
    }, [c, u, d, f, p, m, i]);
  return h == null
    ? null
    : y.createElement(
        Lo.Provider,
        { value: l },
        y.createElement(Ro.Provider, { children: n, value: h }),
      );
}
function bs(e) {
  let { children: t, location: n } = e;
  return Qo(Ss(t), n);
}
var xs = (function (e) {
  return (
    (e[(e.pending = 0)] = `pending`),
    (e[(e.success = 1)] = `success`),
    (e[(e.error = 2)] = `error`),
    e
  );
})(xs || {});
(new Promise(() => {}), y.Component);
function Ss(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (e, r) => {
      if (!y.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === y.Fragment) {
        n.push.apply(n, Ss(e.props.children, i));
        return;
      }
      (e.type !== vs && U(!1), e.props.index && e.props.children && U(!1));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        loader: e.props.loader,
        action: e.props.action,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.ErrorBoundary != null || e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Ss(e.props.children, i)), n.push(a));
    }),
    n
  );
}
function Cs() {
  return (
    (Cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cs.apply(null, arguments)
  );
}
function ws(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Ts(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Es(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !Ts(e);
}
var Ds = [
    `onClick`,
    `relative`,
    `reloadDocument`,
    `replace`,
    `state`,
    `target`,
    `to`,
    `preventScrollReset`,
    `viewTransition`,
  ],
  Os = `6`;
try {
  window.__reactRouterVersion = Os;
} catch {}
var ks = y.startTransition;
function As(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    a = y.useRef();
  a.current ??= Ja({ window: i, v5Compat: !0 });
  let o = a.current,
    [s, c] = y.useState({ action: o.action, location: o.location }),
    { v7_startTransition: l } = r || {},
    u = y.useCallback(
      (e) => {
        l && ks ? ks(() => c(e)) : c(e);
      },
      [c, l],
    );
  return (
    y.useLayoutEffect(() => o.listen(u), [o, u]),
    y.useEffect(() => gs(r), [r]),
    y.createElement(ys, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
var js =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Ms = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ns = y.forwardRef(function (e, t) {
    let {
        onClick: n,
        relative: r,
        reloadDocument: i,
        replace: a,
        state: o,
        target: s,
        to: c,
        preventScrollReset: l,
        viewTransition: u,
      } = e,
      d = ws(e, Ds),
      { basename: f } = y.useContext(Lo),
      p,
      m = !1;
    if (typeof c == `string` && Ms.test(c) && ((p = c), js))
      try {
        let e = new URL(window.location.href),
          t = c.startsWith(`//`) ? new URL(e.protocol + c) : new URL(c),
          n = xo(t.pathname, f);
        t.origin === e.origin && n != null
          ? (c = n + t.search + t.hash)
          : (m = !0);
      } catch {}
    let h = Vo(c, { relative: r }),
      g = Is(c, {
        replace: a,
        state: o,
        target: s,
        preventScrollReset: l,
        relative: r,
        viewTransition: u,
      });
    function _(e) {
      (n && n(e), e.defaultPrevented || g(e));
    }
    return y.createElement(
      `a`,
      Cs({}, d, { href: p || h, onClick: m || i ? n : _, ref: t, target: s }),
    );
  }),
  Ps;
(function (e) {
  ((e.UseScrollRestoration = `useScrollRestoration`),
    (e.UseSubmit = `useSubmit`),
    (e.UseSubmitFetcher = `useSubmitFetcher`),
    (e.UseFetcher = `useFetcher`),
    (e.useViewTransitionState = `useViewTransitionState`));
})((Ps ||= {}));
var Fs;
(function (e) {
  ((e.UseFetcher = `useFetcher`),
    (e.UseFetchers = `useFetchers`),
    (e.UseScrollRestoration = `useScrollRestoration`));
})((Fs ||= {}));
function Is(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: a,
      relative: o,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    c = Ko(),
    l = Uo(),
    u = Zo(e, { relative: o });
  return y.useCallback(
    (t) => {
      if (Es(t, n)) {
        t.preventDefault();
        let n = r === void 0 ? $a(l) === $a(u) : r;
        c(e, {
          replace: n,
          state: i,
          preventScrollReset: a,
          relative: o,
          viewTransition: s,
        });
      }
    },
    [l, c, u, r, i, n, e, a, o, s],
  );
}
function Ls() {
  let e = Uo().pathname.substring(1);
  return (0, k.jsx)(`div`, {
    className: `min-h-screen flex items-center justify-center p-6 bg-slate-50`,
    children: (0, k.jsx)(`div`, {
      className: `max-w-md w-full`,
      children: (0, k.jsxs)(`div`, {
        className: `text-center space-y-6`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, k.jsx)(`h1`, {
                className: `text-7xl font-light text-slate-300`,
                children: `404`,
              }),
              (0, k.jsx)(`div`, {
                className: `h-0.5 w-16 bg-slate-200 mx-auto`,
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              (0, k.jsx)(`h2`, {
                className: `text-2xl font-medium text-slate-800`,
                children: `Page Not Found`,
              }),
              (0, k.jsxs)(`p`, {
                className: `text-slate-600 leading-relaxed`,
                children: [
                  `The page`,
                  ` `,
                  (0, k.jsxs)(`span`, {
                    className: `font-medium text-slate-700`,
                    children: [`"`, e, `"`],
                  }),
                  ` `,
                  `could not be found in this application.`,
                ],
              }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `pt-6`,
            children: (0, k.jsxs)(`button`, {
              onClick: () => (window.location.href = `/`),
              className: `inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500`,
              children: [
                (0, k.jsx)(`svg`, {
                  className: `w-4 h-4 mr-2`,
                  fill: `none`,
                  stroke: `currentColor`,
                  viewBox: `0 0 24 24`,
                  children: (0, k.jsx)(`path`, {
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    strokeWidth: 2,
                    d: `M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`,
                  }),
                }),
                `Go Home`,
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
var Rs = (e) => {
  let t = e.slice(1);
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
};
function zs() {
  let { pathname: e, hash: t } = Uo(),
    n = Wo();
  return (
    (0, y.useEffect)(() => {
      if (n !== `POP`) {
        if (t) {
          let e = Rs(t),
            n = window.setTimeout(() => {
              document
                .getElementById(e)
                ?.scrollIntoView({ behavior: `smooth` });
            }, 50);
          return () => window.clearTimeout(n);
        }
        window.scrollTo({ top: 0, left: 0, behavior: `instant` });
      }
    }, [e, t, n]),
    null
  );
}
var Bs = (0, y.createContext)(null),
  Vs = `elegance_cart_v1`;
function Hs({ children: e }) {
  let [t, n] = (0, y.useState)(() => {
    try {
      let e = localStorage.getItem(Vs);
      return e ? JSON.parse(e) : [];
    } catch {
      return [];
    }
  });
  (0, y.useEffect)(() => {
    localStorage.setItem(Vs, JSON.stringify(t));
  }, [t]);
  let r = (0, y.useCallback)(
      (e, { size: t, color: r, quantity: i = 1 } = {}) => {
        n((n) => {
          let a = `${e.id}-${t}-${r}`;
          return n.find((e) => e.key === a)
            ? n.map((e) =>
                e.key === a ? { ...e, quantity: e.quantity + i } : e,
              )
            : [
                ...n,
                {
                  key: a,
                  product_id: e.id,
                  name: e.name,
                  price: e.discount_price || e.price,
                  image: e.images?.[0],
                  size: t,
                  color: r,
                  quantity: i,
                },
              ];
        });
      },
      [],
    ),
    i = (0, y.useCallback)((e) => {
      n((t) => t.filter((t) => t.key !== e));
    }, []),
    a = (0, y.useCallback)((e, t) => {
      n((n) =>
        n.map((n) => (n.key === e ? { ...n, quantity: Math.max(1, t) } : n)),
      );
    }, []),
    o = (0, y.useCallback)(() => n([]), []),
    s = t.reduce((e, t) => e + t.quantity, 0),
    c = t.reduce((e, t) => e + t.price * t.quantity, 0);
  return (0, k.jsx)(Bs.Provider, {
    value: {
      items: t,
      addItem: r,
      removeItem: i,
      updateQuantity: a,
      clearCart: o,
      itemCount: s,
      subtotal: c,
    },
    children: e,
  });
}
function Us() {
  let e = (0, y.useContext)(Bs);
  if (!e) throw Error(`useCart must be used within CartProvider`);
  return e;
}
var Ws = [
  { label: `Femme`, path: `/women` },
  { label: `Homme`, path: `/men` },
  { label: `Nouvelle Collection`, path: `/new` },
  { label: `Boutique`, path: `/shop` },
  { label: `À propos`, path: `/about` },
  { label: `Contact`, path: `/contact` },
];
function Gs() {
  let [e, t] = (0, y.useState)(!1),
    [n, r] = (0, y.useState)(!1),
    { itemCount: i } = Us(),
    a = Ko(),
    o = Uo();
  ((0, y.useEffect)(() => {
    let e = () => t(window.scrollY > 40);
    return (
      e(),
      window.addEventListener(`scroll`, e),
      () => window.removeEventListener(`scroll`, e)
    );
  }, []),
    (0, y.useEffect)(() => {
      r(!1);
    }, [o.pathname]));
  let s = o.pathname === `/`;
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(`header`, {
        className: R(
          `fixed top-0 left-0 right-0 z-50 transition-all duration-700`,
          e || !s
            ? `bg-background/80 backdrop-blur-xl border-b border-border/60`
            : `bg-transparent`,
        ),
        children: (0, k.jsx)(`div`, {
          className: `px-6 md:px-12 lg:px-16`,
          children: (0, k.jsxs)(`div`, {
            className: `flex items-center justify-between h-20`,
            children: [
              (0, k.jsx)(`button`, {
                className: `lg:hidden text-foreground p-2 -ml-2`,
                onClick: () => r(!0),
                "aria-label": `Menu`,
                children: (0, k.jsx)(lr, { size: 22, strokeWidth: 1.25 }),
              }),
              (0, k.jsx)(`nav`, {
                className: `hidden lg:flex items-center gap-8 flex-1`,
                children: Ws.slice(0, 3).map((t) =>
                  (0, k.jsx)(Ks, { ...t, dark: s && !e }, t.path),
                ),
              }),
              (0, k.jsx)(Ns, {
                to: `/`,
                className: R(
                  `font-heading tracking-luxe-sm text-2xl md:text-3xl font-light transition-colors`,
                  s && !e ? `text-background` : `text-foreground`,
                ),
                style: {
                  animation: `kerning 1.6s cubic-bezier(0.22,1,0.36,1) both`,
                },
                children: `ÉLÉGANCE`,
              }),
              (0, k.jsxs)(`div`, {
                className: `hidden lg:flex items-center gap-8 flex-1 justify-end`,
                children: [
                  Ws.slice(3).map((t) =>
                    (0, k.jsx)(Ks, { ...t, dark: s && !e }, t.path),
                  ),
                  (0, k.jsxs)(`button`, {
                    onClick: () => a(`/cart`),
                    className: R(
                      `relative p-1 transition-colors`,
                      s && !e ? `text-background` : `text-foreground`,
                    ),
                    "aria-label": `Panier`,
                    children: [
                      (0, k.jsx)(hr, { size: 22, strokeWidth: 1.25 }),
                      i > 0 &&
                        (0, k.jsx)(`span`, {
                          className: `absolute -top-1 -right-2 bg-accent text-background text-[10px] font-medium min-w-[16px] h-[16px] rounded-full flex items-center justify-center px-1`,
                          children: i,
                        }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(`button`, {
                onClick: () => a(`/cart`),
                className: R(
                  `lg:hidden relative p-2 -mr-2 transition-colors`,
                  s && !e ? `text-background` : `text-foreground`,
                ),
                "aria-label": `Panier`,
                children: [
                  (0, k.jsx)(hr, { size: 22, strokeWidth: 1.25 }),
                  i > 0 &&
                    (0, k.jsx)(`span`, {
                      className: `absolute top-0 right-0 bg-accent text-background text-[10px] font-medium min-w-[16px] h-[16px] rounded-full flex items-center justify-center px-1`,
                      children: i,
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, k.jsxs)(`div`, {
        className: R(
          `fixed inset-0 z-[60] lg:hidden transition-all duration-500`,
          n ? `visible` : `invisible`,
        ),
        children: [
          (0, k.jsx)(`div`, {
            className: R(
              `absolute inset-0 bg-foreground/40 transition-opacity duration-500`,
              n ? `opacity-100` : `opacity-0`,
            ),
            onClick: () => r(!1),
          }),
          (0, k.jsxs)(`div`, {
            className: R(
              `absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background px-8 py-8 flex flex-col transition-transform duration-500`,
              n ? `translate-x-0` : `-translate-x-full`,
            ),
            children: [
              (0, k.jsxs)(`div`, {
                className: `flex items-center justify-between mb-12`,
                children: [
                  (0, k.jsx)(`span`, {
                    className: `font-heading tracking-luxe-sm text-xl`,
                    children: `ÉLÉGANCE`,
                  }),
                  (0, k.jsx)(`button`, {
                    onClick: () => r(!1),
                    "aria-label": `Fermer`,
                    children: (0, k.jsx)(gr, { size: 22, strokeWidth: 1.25 }),
                  }),
                ],
              }),
              (0, k.jsx)(`nav`, {
                className: `flex flex-col gap-1`,
                children: Ws.map((e) =>
                  (0, k.jsx)(
                    Ns,
                    {
                      to: e.path,
                      className: `font-heading text-3xl font-light py-3 border-b border-border/50 hover:text-accent transition-colors`,
                      children: e.label,
                    },
                    e.path,
                  ),
                ),
              }),
              (0, k.jsx)(`div`, {
                className: `mt-auto pt-8 text-sm text-muted-foreground tracking-luxe-sm`,
                children: `MAISON · TUNIS`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ks({ label: e, path: t, dark: n }) {
  return (0, k.jsxs)(Ns, {
    to: t,
    className: R(
      `relative text-[11px] uppercase tracking-luxe-sm font-medium pb-1 group transition-colors`,
      n
        ? `text-background/90 hover:text-background`
        : `text-foreground/80 hover:text-foreground`,
    ),
    children: [
      e,
      (0, k.jsx)(`span`, {
        className: `absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full`,
      }),
    ],
  });
}
function qs() {
  return (0, k.jsx)(`footer`, {
    className: `bg-foreground text-background px-6 md:px-12 lg:px-16 pt-24 pb-10`,
    children: (0, k.jsxs)(`div`, {
      className: `max-w-7xl mx-auto`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `md:col-span-1`,
              children: [
                (0, k.jsx)(`h3`, {
                  className: `font-heading text-3xl font-light tracking-luxe-sm mb-4`,
                  children: `ÉLÉGANCE`,
                }),
                (0, k.jsx)(`p`, {
                  className: `text-sm text-background/60 leading-relaxed max-w-xs`,
                  children: `Maison de textile de luxe. Prêt-à-porter premium, conçu en Tunisie pour le monde.`,
                }),
              ],
            }),
            (0, k.jsx)(Js, {
              title: `Boutique`,
              links: [
                { label: `Femme`, path: `/women` },
                { label: `Homme`, path: `/men` },
                { label: `Nouvelle Collection`, path: `/new` },
                { label: `Toute la boutique`, path: `/shop` },
              ],
            }),
            (0, k.jsx)(Js, {
              title: `Maison`,
              links: [
                { label: `À propos`, path: `/about` },
                { label: `Contact`, path: `/contact` },
                { label: `Panier`, path: `/cart` },
                { label: `Commander`, path: `/checkout` },
              ],
            }),
            (0, k.jsxs)(`div`, {
              children: [
                (0, k.jsx)(`h4`, {
                  className: `text-[11px] uppercase tracking-luxe-sm text-background/50 mb-5`,
                  children: `Contact`,
                }),
                (0, k.jsxs)(`ul`, {
                  className: `space-y-2 text-sm text-background/70`,
                  children: [
                    (0, k.jsx)(`li`, { children: `Avenue Habib Bourguiba` }),
                    (0, k.jsx)(`li`, { children: `Tunis, Tunisie` }),
                    (0, k.jsx)(`li`, {
                      className: `pt-2`,
                      children: `+216 26653690`,
                    }),
                    (0, k.jsx)(`li`, { children: `contact@elegance.tn` }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex gap-4 mt-6`,
                  children: [
                    (0, k.jsx)(`a`, {
                      href: `#`,
                      "aria-label": `Instagram`,
                      className: `text-background/60 hover:text-accent transition-colors`,
                      children: (0, k.jsx)(ar, { size: 18, strokeWidth: 1.25 }),
                    }),
                    (0, k.jsx)(`a`, {
                      href: `#`,
                      "aria-label": `Facebook`,
                      className: `text-background/60 hover:text-accent transition-colors`,
                      children: (0, k.jsx)(ir, { size: 18, strokeWidth: 1.25 }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `border-t border-background/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4`,
          children: [
            (0, k.jsx)(`p`, {
              className: `text-xs text-background/40 tracking-luxe-sm`,
              children: `© 2026 ÉLÉGANCE — TOUS DROITS RÉSERVÉS`,
            }),
            (0, k.jsxs)(`div`, {
              className: `flex gap-6 text-xs text-background/40 tracking-luxe-sm`,
              children: [
                (0, k.jsx)(`span`, { children: `LIVRAISON NATIONALE` }),
                (0, k.jsx)(`span`, { children: `PAIEMENT SÉCURISÉ` }),
                (0, k.jsx)(`span`, { children: `CONÇU À TUNIS` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Js({ title: e, links: t }) {
  return (0, k.jsxs)(`div`, {
    children: [
      (0, k.jsx)(`h4`, {
        className: `text-[11px] uppercase tracking-luxe-sm text-background/50 mb-5`,
        children: e,
      }),
      (0, k.jsx)(`ul`, {
        className: `space-y-3`,
        children: t.map((e) =>
          (0, k.jsx)(
            `li`,
            {
              children: (0, k.jsx)(Ns, {
                to: e.path,
                className: `text-sm text-background/70 hover:text-accent transition-colors`,
                children: e.label,
              }),
            },
            e.label,
          ),
        ),
      }),
    ],
  });
}
function Ys() {
  return (0, k.jsxs)(`div`, {
    className: `min-h-screen flex flex-col bg-paper`,
    children: [
      (0, k.jsx)(Gs, {}),
      (0, k.jsx)(`main`, { className: `flex-1`, children: (0, k.jsx)(_s, {}) }),
      (0, k.jsx)(qs, {}),
    ],
  });
}
var Xs = (0, y.createContext)({});
function Zs(e) {
  let t = (0, y.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var Qs = (0, y.createContext)(null),
  $s = (0, y.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  });
function ec(e = !0) {
  let t = (0, y.useContext)(Qs);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, y.useId)();
  (0, y.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, y.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var tc = typeof window < `u`,
  nc = tc ? y.useLayoutEffect : y.useEffect,
  rc = (e) => e,
  ic = rc,
  ac = rc;
function oc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var sc = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  cc = (e) => e * 1e3,
  lc = (e) => e / 1e3,
  uc = { skipAnimations: !1, useManualTiming: !1 };
function dc(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.has(e) || s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var fc = [
    `read`,
    `resolveKeyframes`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  pc = 40;
function mc(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = fc.reduce((e, t) => ((e[t] = dc(a)), e), {}),
    {
      read: s,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      let a = uc.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, pc), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    m = () => {
      ((n = !0), (r = !0), i.isProcessing || e(p));
    };
  return {
    schedule: fc.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < fc.length; t++) o[fc[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: q,
    cancel: hc,
    state: J,
    steps: gc,
  } = mc(typeof requestAnimationFrame < `u` ? requestAnimationFrame : rc, !0),
  _c = (0, y.createContext)({ strict: !1 }),
  vc = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  yc = {};
for (let e in vc) yc[e] = { isEnabled: (t) => vc[e].some((e) => !!t[e]) };
function bc(e) {
  for (let t in e) yc[t] = { ...yc[t], ...e[t] };
}
var xc = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function Sc(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    xc.has(e)
  );
}
var Cc = c({ default: () => wc }),
  wc,
  Tc = o(() => {
    throw (
      (wc = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  Ec = (e) => !Sc(e);
function Dc(e) {
  e && (Ec = (t) => (t.startsWith(`on`) ? !Sc(t) : e(t)));
}
try {
  Dc((Tc(), d(Cc)).default);
} catch {}
function Oc(e, t, n) {
  let r = {};
  for (let i in e)
    (i !== `values` || typeof e.values != `object`) &&
      (Ec(i) ||
        (n === !0 && Sc(i)) ||
        (!t && !Sc(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
      (r[i] = e[i]);
  return r;
}
function kc(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) =>
      r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
  });
}
var Ac = (0, y.createContext)({});
function jc(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Mc(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var Nc = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Pc = [`initial`, ...Nc];
function Fc(e) {
  return Mc(e.animate) || Pc.some((t) => jc(e[t]));
}
function Ic(e) {
  return !!(Fc(e) || e.variants);
}
function Lc(e, t) {
  if (Fc(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || jc(t) ? t : void 0,
      animate: jc(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function Rc(e) {
  let { initial: t, animate: n } = Lc(e, (0, y.useContext)(Ac));
  return (0, y.useMemo)(() => ({ initial: t, animate: n }), [zc(t), zc(n)]);
}
function zc(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var Bc = Symbol.for(`motionComponentSymbol`);
function Vc(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function Hc(e, t, n) {
  return (0, y.useCallback)(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : Vc(n) && (n.current = r)));
    },
    [t],
  );
}
var Uc = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  Wc = `data-` + Uc(`framerAppearId`),
  { schedule: Y, cancel: Gc } = mc(queueMicrotask, !1),
  Kc = (0, y.createContext)({});
function qc(e, t, n, r, i) {
  let { visualElement: a } = (0, y.useContext)(Ac),
    o = (0, y.useContext)(_c),
    s = (0, y.useContext)(Qs),
    c = (0, y.useContext)($s).reducedMotion,
    l = (0, y.useRef)(null);
  ((r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  let u = l.current,
    d = (0, y.useContext)(Kc);
  u &&
    !u.projection &&
    i &&
    (u.type === `html` || u.type === `svg`) &&
    Jc(l.current, n, i, d);
  let f = (0, y.useRef)(!1);
  (0, y.useInsertionEffect)(() => {
    u && f.current && u.update(n, s);
  });
  let p = n[Wc],
    m = (0, y.useRef)(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p),
    );
  return (
    nc(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        Y.render(u.render),
        m.current && u.animationState && u.animationState.animateChanges());
    }),
    (0, y.useEffect)(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        (m.current &&=
          (queueMicrotask(() => {
            var e;
            (e = window.MotionHandoffMarkAsComplete) == null ||
              e.call(window, p);
          }),
          !1)));
    }),
    u
  );
}
function Jc(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : Yc(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && Vc(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function Yc(e) {
  if (e) return e.options.allowProjection === !1 ? Yc(e.parent) : e.projection;
}
function Xc({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && bc(e);
  function a(a, o) {
    let s,
      c = { ...(0, y.useContext)($s), ...a, layoutId: Zc(a) },
      { isStatic: l } = c,
      u = Rc(a),
      d = r(a, l);
    if (!l && tc) {
      Qc(c, e);
      let n = $c(c);
      ((s = n.MeasureLayout),
        (u.visualElement = qc(i, d, c, t, n.ProjectionNode)));
    }
    return (0, k.jsxs)(Ac.Provider, {
      value: u,
      children: [
        s && u.visualElement
          ? (0, k.jsx)(s, { visualElement: u.visualElement, ...c })
          : null,
        n(i, a, Hc(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`}`;
  let o = (0, y.forwardRef)(a);
  return ((o[Bc] = i), o);
}
function Zc({ layoutId: e }) {
  let t = (0, y.useContext)(Xs).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Qc(e, t) {
  (0, y.useContext)(_c).strict;
}
function $c(e) {
  let { drag: t, layout: n } = yc;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var el = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function tl(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(el.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function nl(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function rl(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = nl(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = nl(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var il = (e) => Array.isArray(e),
  al = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  ol = (e) => (il(e) ? e[e.length - 1] || 0 : e),
  sl = (e) => !!(e && e.getVelocity);
function cl(e) {
  let t = sl(e) ? e.get() : e;
  return al(t) ? t.toValue() : t;
}
function ll(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  a,
) {
  let o = { latestValues: dl(r, i, a, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (e) => n({ props: r, current: e, ...o })),
      (o.onUpdate = (e) => n(e))),
    o
  );
}
var ul = (e) => (t, n) => {
  let r = (0, y.useContext)(Ac),
    i = (0, y.useContext)(Qs),
    a = () => ll(e, t, r, i);
  return n ? a() : Zs(a);
};
function dl(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = cl(a[e]);
  let { initial: o, animate: s } = e,
    c = Fc(e),
    l = Ic(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Mc(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = rl(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var fl = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  pl = new Set(fl),
  ml = (e) => (t) => typeof t == `string` && t.startsWith(e),
  hl = ml(`--`),
  gl = ml(`var(--`),
  _l = (e) => (gl(e) ? vl.test(e.split(`/*`)[0].trim()) : !1),
  vl =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  yl = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  bl = (e, t, n) => (n > t ? t : n < e ? e : n),
  xl = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  Sl = { ...xl, transform: (e) => bl(0, 1, e) },
  Cl = { ...xl, default: 1 },
  wl = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Tl = wl(`deg`),
  El = wl(`%`),
  X = wl(`px`),
  Dl = wl(`vh`),
  Ol = wl(`vw`),
  kl = {
    ...El,
    parse: (e) => El.parse(e) / 100,
    transform: (e) => El.transform(e * 100),
  },
  Al = {
    borderWidth: X,
    borderTopWidth: X,
    borderRightWidth: X,
    borderBottomWidth: X,
    borderLeftWidth: X,
    borderRadius: X,
    radius: X,
    borderTopLeftRadius: X,
    borderTopRightRadius: X,
    borderBottomRightRadius: X,
    borderBottomLeftRadius: X,
    width: X,
    maxWidth: X,
    height: X,
    maxHeight: X,
    top: X,
    right: X,
    bottom: X,
    left: X,
    padding: X,
    paddingTop: X,
    paddingRight: X,
    paddingBottom: X,
    paddingLeft: X,
    margin: X,
    marginTop: X,
    marginRight: X,
    marginBottom: X,
    marginLeft: X,
    backgroundPositionX: X,
    backgroundPositionY: X,
  },
  jl = {
    rotate: Tl,
    rotateX: Tl,
    rotateY: Tl,
    rotateZ: Tl,
    scale: Cl,
    scaleX: Cl,
    scaleY: Cl,
    scaleZ: Cl,
    skew: Tl,
    skewX: Tl,
    skewY: Tl,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: Sl,
    originX: kl,
    originY: kl,
    originZ: X,
  },
  Ml = { ...xl, transform: Math.round },
  Nl = {
    ...Al,
    ...jl,
    zIndex: Ml,
    size: X,
    fillOpacity: Sl,
    strokeOpacity: Sl,
    numOctaves: Ml,
  },
  Pl = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  Fl = fl.length;
function Il(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Fl; a++) {
    let o = fl[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c =
        typeof s == `number`
          ? s === +!!o.startsWith(`scale`)
          : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = yl(s, Nl[o]);
      if (!c) {
        i = !1;
        let t = Pl[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function Ll(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (pl.has(e)) {
      o = !0;
      continue;
    }
    if (hl(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = yl(n, Nl[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Il(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var Rl = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  zl = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Bl(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? Rl : zl;
  e[a.offset] = X.transform(-r);
  let o = X.transform(t),
    s = X.transform(n);
  e[a.array] = `${o} ${s}`;
}
function Z(e, t, n) {
  return typeof e == `string` ? e : X.transform(t + n * e);
}
function Vl(e, t, n) {
  return `${Z(t, e.x, e.width)} ${Z(n, e.y, e.height)}`;
}
function Hl(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d,
) {
  if ((Ll(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = Vl(
        m,
        i === void 0 ? 0.5 : i,
        a === void 0 ? 0.5 : a,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && Bl(f, o, s, c, !1));
}
var Ul = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Wl = () => ({ ...Ul(), attrs: {} }),
  Gl = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function Kl(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var ql = new Set([
  `baseFrequency`,
  `diffuseConstant`,
  `kernelMatrix`,
  `kernelUnitLength`,
  `keySplines`,
  `keyTimes`,
  `limitingConeAngle`,
  `markerHeight`,
  `markerWidth`,
  `numOctaves`,
  `targetX`,
  `targetY`,
  `surfaceScale`,
  `specularConstant`,
  `specularExponent`,
  `stdDeviation`,
  `tableValues`,
  `viewBox`,
  `gradientTransform`,
  `pathLength`,
  `startOffset`,
  `textLength`,
  `lengthAdjust`,
]);
function Jl(e, t, n, r) {
  Kl(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(ql.has(n) ? n : Uc(n), t.attrs[n]);
}
var Yl = {};
function Xl(e) {
  Object.assign(Yl, e);
}
function Zl(e, { layout: t, layoutId: n }) {
  return (
    pl.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!Yl[e] || e === `opacity`))
  );
}
function Ql(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (sl(r[a]) ||
      (t.style && sl(t.style[a])) ||
      Zl(a, e) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function $l(e, t, n) {
  let r = Ql(e, t, n);
  for (let n in e)
    if (sl(e[n]) || sl(t[n])) {
      let t =
        fl.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function eu(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var tu = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  nu = {
    useVisualState: ul({
      scrapeMotionValuesFromProps: $l,
      createRenderState: Wl,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (pl.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < tu.length; n++) {
            let r = tu[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          q.read(() => {
            (eu(n, r),
              q.render(() => {
                (Hl(r, i, Gl(n.tagName), e.transformTemplate), Jl(n, r));
              }));
          });
      },
    }),
  },
  ru = {
    useVisualState: ul({
      scrapeMotionValuesFromProps: Ql,
      createRenderState: Ul,
    }),
  };
function iu(e, t, n) {
  for (let r in t) !sl(t[r]) && !Zl(r, n) && (e[r] = t[r]);
}
function au({ transformTemplate: e }, t) {
  return (0, y.useMemo)(() => {
    let n = Ul();
    return (Ll(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function ou(e, t) {
  let n = e.style || {},
    r = {};
  return (iu(r, n, e), Object.assign(r, au(e, t)), r);
}
function su(e, t) {
  let n = {},
    r = ou(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function cu(e, t, n, r) {
  let i = (0, y.useMemo)(() => {
    let n = Wl();
    return (
      Hl(n, t, Gl(r), e.transformTemplate),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (iu(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function lu(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (tl(t) ? cu : su)(n, i, a, t),
      s = Oc(n, typeof t == `string`, e),
      c = t === y.Fragment ? {} : { ...s, ...o, ref: r },
      { children: l } = n,
      u = (0, y.useMemo)(() => (sl(l) ? l.get() : l), [l]);
    return (0, y.createElement)(t, { ...c, children: u });
  };
}
function uu(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return Xc({
      ...(tl(n) ? nu : ru),
      preloadedFeatures: e,
      useRender: lu(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function du(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function fu(e, t, n) {
  let r = e.getProps();
  return rl(r, t, n === void 0 ? r.custom : n, e);
}
var pu = oc(() => window.ScrollTimeline !== void 0),
  mu = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => (`finished` in e ? e.finished : e)),
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((n) => {
        if (pu() && n.attachTimeline) return n.attachTimeline(e);
        if (typeof t == `function`) return t(n);
      });
      return () => {
        n.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll(`flatten`);
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  },
  hu = class extends mu {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function gu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var _u = 2e4;
function vu(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4; ) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function yu(e) {
  return typeof e == `function`;
}
function bu(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var xu = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Su = { linearEasing: void 0 };
function Cu(e, t) {
  let n = oc(e);
  return () => Su[t] ?? n();
}
var wu = Cu(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Tu = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e(sc(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Eu(e) {
  return !!(
    (typeof e == `function` && wu()) ||
    !e ||
    (typeof e == `string` && (e in Ou || wu())) ||
    xu(e) ||
    (Array.isArray(e) && e.every(Eu))
  );
}
var Du = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ou = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Du([0, 0.65, 0.55, 1]),
    circOut: Du([0.55, 0, 1, 0.45]),
    backIn: Du([0.31, 0.01, 0.66, -0.59]),
    backOut: Du([0.33, 1.53, 0.69, 0.99]),
  };
function ku(e, t) {
  if (e)
    return typeof e == `function` && wu()
      ? Tu(e, t)
      : xu(e)
        ? Du(e)
        : Array.isArray(e)
          ? e.map((e) => ku(e, t) || Ou.easeOut)
          : Ou[e];
}
var Au = { x: !1, y: !1 };
function ju() {
  return Au.x || Au.y;
}
function Mu(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Nu(e, t) {
  let n = Mu(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Pu(e) {
  return (t) => {
    t.pointerType === `touch` || ju() || e(t);
  };
}
function Fu(e, t, n = {}) {
  let [r, i, a] = Nu(e, n),
    o = Pu((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = Pu((e) => {
        (r(e), n.removeEventListener(`pointerleave`, a));
      });
      n.addEventListener(`pointerleave`, a, i);
    });
  return (
    r.forEach((e) => {
      e.addEventListener(`pointerenter`, o, i);
    }),
    a
  );
}
var Iu = (e, t) => (t ? e === t || Iu(e, t.parentElement) : !1),
  Lu = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  Ru = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function zu(e) {
  return Ru.has(e.tagName) || e.tabIndex !== -1;
}
var Bu = new WeakSet();
function Vu(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function Hu(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var Uu = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = Vu(() => {
    if (Bu.has(n)) return;
    Hu(n, `down`);
    let e = Vu(() => {
      Hu(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => Hu(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function Wu(e) {
  return Lu(e) && !ju();
}
function Gu(e, t, n = {}) {
  let [r, i, a] = Nu(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Wu(e) || Bu.has(r)) return;
      Bu.add(r);
      let a = t(e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            Wu(e) &&
              Bu.has(r) &&
              (Bu.delete(r), typeof a == `function` && a(e, { success: t })));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || Iu(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i),
        window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      (!zu(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => Uu(e, i), i));
    }),
    a
  );
}
function Ku(e) {
  return e === `x` || e === `y`
    ? Au[e]
      ? null
      : ((Au[e] = !0),
        () => {
          Au[e] = !1;
        })
    : Au.x || Au.y
      ? null
      : ((Au.x = Au.y = !0),
        () => {
          Au.x = Au.y = !1;
        });
}
var qu = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...fl]),
  Ju;
function Yu() {
  Ju = void 0;
}
var Xu = {
  now: () => (
    Ju === void 0 &&
      Xu.set(
        J.isProcessing || uc.useManualTiming ? J.timestamp : performance.now(),
      ),
    Ju
  ),
  set: (e) => {
    ((Ju = e), queueMicrotask(Yu));
  },
};
function Zu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qu(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var $u = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (Zu(this.subscriptions, e), () => Qu(this.subscriptions, e));
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r) {
      if (r === 1) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function ed(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var td = 30,
  nd = (e) => !isNaN(parseFloat(e)),
  rd = { current: void 0 },
  id = class {
    constructor(e, t = {}) {
      ((this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = Xu.now();
          (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = Xu.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = nd(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new $u());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              q.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (rd.current && rd.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Xu.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > td
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, td);
      return ed(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function ad(e, t) {
  return new id(e, t);
}
function od(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ad(n));
}
function sd(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = fu(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) od(e, t, ol(i[t]));
}
function cd(e) {
  return !!(sl(e) && e.add);
}
function ld(e, t) {
  let n = e.getValue(`willChange`);
  if (cd(n)) return n.add(t);
}
function ud(e) {
  return e.props[Wc];
}
var dd = { current: !1 },
  fd = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  pd = 1e-7,
  md = 12;
function hd(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = fd(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > pd && ++s < md);
  return o;
}
function gd(e, t, n, r) {
  if (e === t && n === r) return rc;
  let i = (t) => hd(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : fd(i(e), t, r));
}
var _d = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  vd = (e) => (t) => 1 - e(1 - t),
  yd = gd(0.33, 1.53, 0.69, 0.99),
  bd = vd(yd),
  xd = _d(bd),
  Sd = (e) => ((e *= 2) < 1 ? 0.5 * bd(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  Cd = (e) => 1 - Math.sin(Math.acos(e)),
  wd = vd(Cd),
  Td = _d(Cd),
  Ed = (e) => /^0[^.\s]+$/u.test(e);
function Dd(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || Ed(e);
}
var Od = (e) => Math.round(e * 1e5) / 1e5,
  kd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ad(e) {
  return e == null;
}
var jd =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Md = (e, t) => (n) =>
    !!(
      (typeof n == `string` && jd.test(n) && n.startsWith(e)) ||
      (t && !Ad(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Nd = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(kd);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  Pd = (e) => bl(0, 255, e),
  Fd = { ...xl, transform: (e) => Math.round(Pd(e)) },
  Id = {
    test: Md(`rgb`, `red`),
    parse: Nd(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      Fd.transform(e) +
      `, ` +
      Fd.transform(t) +
      `, ` +
      Fd.transform(n) +
      `, ` +
      Od(Sl.transform(r)) +
      `)`,
  };
function Ld(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Rd = { test: Md(`#`), parse: Ld, transform: Id.transform },
  zd = {
    test: Md(`hsl`, `hue`),
    parse: Nd(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      El.transform(Od(t)) +
      `, ` +
      El.transform(Od(n)) +
      `, ` +
      Od(Sl.transform(r)) +
      `)`,
  },
  Bd = {
    test: (e) => Id.test(e) || Rd.test(e) || zd.test(e),
    parse: (e) =>
      Id.test(e) ? Id.parse(e) : zd.test(e) ? zd.parse(e) : Rd.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? Id.transform(e)
          : zd.transform(e),
  },
  Vd =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Hd(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(kd)?.length || 0) + (e.match(Vd)?.length || 0) > 0
  );
}
var Ud = `number`,
  Wd = `color`,
  Gd = `var`,
  Kd = `var(`,
  qd = "${}",
  Jd =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Yd(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Jd,
        (e) => (
          Bd.test(e)
            ? (r.color.push(a), i.push(Wd), n.push(Bd.parse(e)))
            : e.startsWith(Kd)
              ? (r.var.push(a), i.push(Gd), n.push(e))
              : (r.number.push(a), i.push(Ud), n.push(parseFloat(e))),
          ++a,
          qd
        ),
      )
      .split(qd),
    indexes: r,
    types: i,
  };
}
function Xd(e) {
  return Yd(e).values;
}
function Zd(e) {
  let { split: t, types: n } = Yd(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        i += t === Ud ? Od(e[a]) : t === Wd ? Bd.transform(e[a]) : e[a];
      }
    return i;
  };
}
var Qd = (e) => (typeof e == `number` ? 0 : e);
function $d(e) {
  let t = Xd(e);
  return Zd(e)(t.map(Qd));
}
var ef = { test: Hd, parse: Xd, createTransformer: Zd, getAnimatableNone: $d },
  tf = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function nf(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(kd) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!tf.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var rf = /\b([a-z-]*)\(.*?\)/gu,
  af = {
    ...ef,
    getAnimatableNone: (e) => {
      let t = e.match(rf);
      return t ? t.map(nf).join(` `) : e;
    },
  },
  of = {
    ...Nl,
    color: Bd,
    backgroundColor: Bd,
    outlineColor: Bd,
    fill: Bd,
    stroke: Bd,
    borderColor: Bd,
    borderTopColor: Bd,
    borderRightColor: Bd,
    borderBottomColor: Bd,
    borderLeftColor: Bd,
    filter: af,
    WebkitFilter: af,
  },
  sf = (e) => of[e];
function cf(e, t) {
  let n = sf(e);
  return (
    n !== af && (n = ef),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var lf = new Set([`auto`, `none`, `0`]);
function uf(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let t = e[r];
    (typeof t == `string` && !lf.has(t) && Yd(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = cf(n, i);
}
var df = (e) => e === xl || e === X,
  ff = (e, t) => parseFloat(e.split(`, `)[t]),
  pf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return ff(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? ff(t[1], e) : 0;
      }
    },
  mf = new Set([`x`, `y`, `z`]),
  hf = fl.filter((e) => !mf.has(e));
function gf(e) {
  let t = [];
  return (
    hf.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var _f = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: pf(4, 13),
  y: pf(5, 14),
};
((_f.translateX = _f.x), (_f.translateY = _f.y));
var vf = new Set(),
  yf = !1,
  bf = !1;
function xf() {
  if (bf) {
    let e = Array.from(vf).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = gf(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((bf = !1), (yf = !1), vf.forEach((e) => e.complete()), vf.clear());
}
function Sf() {
  vf.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (bf = !0));
  });
}
function Cf() {
  (Sf(), xf());
}
var wf = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.isScheduled = !0),
        this.isAsync
          ? (vf.add(this),
            yf || ((yf = !0), q.read(Sf), q.resolveKeyframes(xf)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null) {
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          } else e[i] = e[i - 1];
        }
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ((this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        vf.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), vf.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  Tf = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Ef = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Df(e) {
  let t = Ef.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var Of = 4;
function kf(e, t, n = 1) {
  ac(
    n <= Of,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
  );
  let [r, i] = Df(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Tf(e) ? parseFloat(e) : e;
  }
  return _l(i) ? kf(i, t, n + 1) : i;
}
var Af = (e) => (t) => t.test(e),
  jf = [xl, X, El, Tl, Ol, Dl, { test: (e) => e === `auto`, parse: (e) => e }],
  Mf = (e) => jf.find(Af(e)),
  Nf = class extends wf {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), _l(r))) {
          let i = kf(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !qu.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = Mf(r),
        o = Mf(i);
      if (a !== o) {
        if (df(a) && df(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
      }
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) Dd(e[t]) && n.push(t);
      n.length && uf(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = _f[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = _f[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Pf = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (ef.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function Ff(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function If(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Pf(i, t),
    s = Pf(a, t);
  return (
    ic(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`,
    ),
    !o || !s ? !1 : Ff(e) || ((n === `spring` || yu(n)) && r)
  );
}
var Lf = (e) => e !== null;
function Rf(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(Lf),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var zf = 40,
  Bf = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      ...o
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = Xu.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > zf
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && Cf(),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      ((this.resolvedAt = Xu.now()), (this.hasAttemptedResolve = !0));
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !If(e, n, r, i)) {
        if (dd.current || !a) {
          (s && s(Rf(e, this.options, t)),
            o && o(),
            this.resolveFinishedPromise());
          return;
        }
        this.options.duration = 0;
      }
      let l = this.initPlayback(e, t);
      l !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...l }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      ((this.options.type = `keyframes`), (this.options.ease = `linear`));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Q = (e, t, n) => e + (t - e) * n;
function Vf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Hf({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Vf(s, r, e + 1 / 3)), (a = Vf(s, r, e)), (o = Vf(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Uf(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Wf = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Gf = [Rd, Id, zd],
  Kf = (e) => Gf.find((t) => t.test(e));
function qf(e) {
  let t = Kf(e);
  if (
    (ic(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === zd && (n = Hf(n)), n);
}
var Jf = (e, t) => {
    let n = qf(e),
      r = qf(t);
    if (!n || !r) return Uf(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = Wf(n.red, r.red, e)),
      (i.green = Wf(n.green, r.green, e)),
      (i.blue = Wf(n.blue, r.blue, e)),
      (i.alpha = Q(n.alpha, r.alpha, e)),
      Id.transform(i)
    );
  },
  Yf = (e, t) => (n) => t(e(n)),
  Xf = (...e) => e.reduce(Yf),
  Zf = new Set([`none`, `hidden`]);
function Qf(e, t) {
  return Zf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function $f(e, t) {
  return (n) => Q(e, t, n);
}
function ep(e) {
  return typeof e == `number`
    ? $f
    : typeof e == `string`
      ? _l(e)
        ? Uf
        : Bd.test(e)
          ? Jf
          : ip
      : Array.isArray(e)
        ? tp
        : typeof e == `object`
          ? Bd.test(e)
            ? Jf
            : np
          : Uf;
}
function tp(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => ep(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function np(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ep(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function rp(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var ip = (e, t) => {
  let n = ef.createTransformer(t),
    r = Yd(e),
    i = Yd(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Zf.has(e) && !i.values.length) || (Zf.has(t) && !r.values.length)
      ? Qf(e, t)
      : Xf(tp(rp(r, i), i.values), n)
    : (ic(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      ),
      Uf(e, t));
};
function ap(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? Q(e, t, n)
    : ep(e)(e, t);
}
var op = 5;
function sp(e, t, n) {
  let r = Math.max(t - op, 0);
  return ed(n - e(r), t - r);
}
var $ = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  cp = 0.001;
function lp({
  duration: e = $.duration,
  bounce: t = $.bounce,
  velocity: n = $.velocity,
  mass: r = $.mass,
}) {
  let i, a;
  ic(e <= cc($.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  ((o = bl($.minDamping, $.maxDamping, o)),
    (e = bl($.minDuration, $.maxDuration, lc(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = fp(t, o),
            c = Math.exp(-i);
          return cp - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = fp(t ** 2, o);
          return ((-i(t) + cp > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = dp(i, a, s);
  if (((e = cc(e)), isNaN(c)))
    return { stiffness: $.stiffness, damping: $.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var up = 12;
function dp(e, t, n) {
  let r = n;
  for (let n = 1; n < up; n++) r -= e(r) / t(r);
  return r;
}
function fp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var pp = [`duration`, `bounce`],
  mp = [`stiffness`, `damping`, `mass`];
function hp(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function gp(e) {
  let t = {
    velocity: $.velocity,
    stiffness: $.stiffness,
    damping: $.damping,
    mass: $.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!hp(e, mp) && hp(e, pp)) {
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * bl(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: $.mass, stiffness: i, damping: a };
    } else {
      let n = lp(e);
      ((t = { ...t, ...n, mass: $.mass }), (t.isResolvedFromDuration = !0));
    }
  }
  return t;
}
function _p(e = $.visualDuration, t = $.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = gp({ ...n, velocity: -lc(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = lc(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? $.restSpeed.granular : $.restSpeed.default),
    (i ||= v ? $.restDelta.granular : $.restDelta.default));
  let y;
  if (h < 1) {
    let e = fp(_, h);
    y = (t) => {
      let n = Math.exp(-h * _ * t);
      return (
        o - n * (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
      );
    };
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = 0;
        h < 1 && (n = e === 0 ? cc(m) : sp(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(vu(b), _u),
        t = Tu((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function vp({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = _p({
          keyframes: [f.value, m(f.value)],
          velocity: sp(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
var yp = gd(0.42, 0, 1, 1),
  bp = gd(0, 0, 0.58, 1),
  xp = gd(0.42, 0, 0.58, 1),
  Sp = (e) => Array.isArray(e) && typeof e[0] != `number`,
  Cp = {
    linear: rc,
    easeIn: yp,
    easeInOut: xp,
    easeOut: bp,
    circIn: Cd,
    circInOut: Td,
    circOut: wd,
    backIn: bd,
    backInOut: xd,
    backOut: yd,
    anticipate: Sd,
  },
  wp = (e) => {
    if (xu(e)) {
      ac(
        e.length === 4,
        `Cubic bezier arrays must contain four numerical values.`,
      );
      let [t, n, r, i] = e;
      return gd(t, n, r, i);
    }
    return typeof e == `string`
      ? (ac(Cp[e] !== void 0, `Invalid easing type '${e}'`), Cp[e])
      : e;
  };
function Tp(e, t, n) {
  let r = [],
    i = n || ap,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = Xf(Array.isArray(t) ? t[n] || rc : t, a)), r.push(a));
  }
  return r;
}
function Ep(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if (
    (ac(a === t.length, `Both input and output ranges must be the same length`),
    a === 1)
  )
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Tp(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = sc(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(bl(e[0], e[a - 1], t)) : l;
}
function Dp(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = sc(0, t, r);
    e.push(Q(n, 1, i));
  }
}
function Op(e) {
  let t = [0];
  return (Dp(t, e.length - 1), t);
}
function kp(e, t) {
  return e.map((e) => e * t);
}
function Ap(e, t) {
  return e.map(() => t || xp).splice(0, e.length - 1);
}
function jp({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Sp(r) ? r.map(wp) : wp(r),
    a = { done: !1, value: t[0] },
    o = Ep(kp(n && n.length === t.length ? n : Op(t), e), t, {
      ease: Array.isArray(i) ? i : Ap(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Mp = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => q.update(t, !0),
      stop: () => hc(t),
      now: () => (J.isProcessing ? J.timestamp : Xu.now()),
    };
  },
  Np = { decay: vp, inertia: vp, tween: jp, keyframes: jp, spring: _p },
  Pp = (e) => e / 100,
  Fp = class extends Bf {
    constructor(e) {
      (super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = `running`),
        (this.startTime = null),
        (this.state = `idle`),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === `idle`)
          )
            return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        }));
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        a = r?.KeyframeResolver || wf,
        o = (e, t) => this.onKeyframesResolved(e, t);
      ((this.resolver = new a(i, o, t, n, r)), this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          ));
    }
    initPlayback(e) {
      let {
          type: t = `keyframes`,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = yu(t) ? t : Np[t] || jp,
        s,
        c;
      o !== jp &&
        typeof e[0] != `number` &&
        ((s = Xf(Pp, ap(e[0], e[1]))), (e = [0, 100]));
      let l = o({ ...this.options, keyframes: e });
      (i === `mirror` &&
        (c = o({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
        l.calculatedDuration === null && (l.calculatedDuration = vu(l)));
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r;
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === `paused` || !e
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: d,
        repeat: f,
        repeatType: p,
        repeatDelay: m,
        onUpdate: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        (this.currentTime = t
          ? e
          : this.holdTime === null
            ? Math.round(e - this.startTime) * this.speed
            : this.holdTime));
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = l));
      let v = this.currentTime,
        y = i;
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 &&
            (p === `reverse`
              ? ((n = 1 - n), m && (n -= m / u))
              : p === `mirror` && (y = a)),
          (v = bl(0, 1, n) * u));
      }
      let b = _ ? { done: !1, value: s[0] } : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ &&
        c !== null &&
        (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = Rf(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? lc(e.calculatedDuration) : 0;
    }
    get time() {
      return lc(this.currentTime);
    }
    set time(e) {
      ((e = cc(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      ((this.playbackSpeed = e), t && (this.time = lc(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = Mp, onPlay: t, startTime: n } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), t && t());
      let r = this.driver.now();
      (this.holdTime === null
        ? this.startTime
          ? this.state === `finished` && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === `finished` && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = `paused`;
        return;
      }
      ((this.state = `paused`), (this.holdTime = this.currentTime ?? 0));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.pendingPlayState = this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = `finished`));
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
  },
  Ip = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function Lp(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeInOut`,
    times: c,
  } = {},
) {
  let l = { [t]: n };
  c && (l.offset = c);
  let u = ku(s, i);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? `linear` : u,
      fill: `both`,
      iterations: a + 1,
      direction: o === `reverse` ? `alternate` : `normal`,
    })
  );
}
var Rp = oc(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  zp = 10,
  Bp = 2e4;
function Vp(e) {
  return yu(e.type) || e.type === `spring` || !Eu(e.ease);
}
function Hp(e, t) {
  let n = new Fp({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    a = 0;
  for (; !r.done && a < Bp; ) ((r = n.sample(a)), i.push(r.value), (a += zp));
  return { times: void 0, keyframes: i, duration: a - zp, ease: `linear` };
}
var Up = { anticipate: Sd, backInOut: xd, circInOut: Td };
function Wp(e) {
  return e in Up;
}
var Gp = class extends Bf {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new Nf(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r,
      )),
        this.resolver.scheduleResolve());
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if (
        (typeof i == `string` && wu() && Wp(i) && (i = Up[i]), Vp(this.options))
      ) {
        let {
            onComplete: t,
            onUpdate: o,
            motionValue: s,
            element: c,
            ...l
          } = this.options,
          u = Hp(e, l);
        ((e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`));
      }
      let l = Lp(o.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (bu(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              (o.set(Rf(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        { animation: l, duration: n, times: r, type: a, ease: i, keyframes: e }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return lc(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return lc(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = cc(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return `idle`;
      let { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      let { resolved: e } = this;
      if (!e) return null;
      let { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return rc;
        let { animation: n } = t;
        bu(n, e);
      }
      return rc;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      (t.playState === `finished` && this.updateFinishedPromise(), t.play());
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)
      )
        return;
      (this.resolveFinishedPromise(), this.updateFinishedPromise());
      let { resolved: e } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e;
      if (t.playState === `idle` || t.playState === `finished`) return;
      if (this.time) {
        let {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: c,
            ...l
          } = this.options,
          u = new Fp({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = cc(this.time);
        e.setWithVelocity(u.sample(d - zp).value, u.sample(d).value, zp);
      }
      let { onStop: s } = this.options;
      (s && s(), this.cancel());
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
      return (
        Rp() &&
        n &&
        Ip.has(n) &&
        !s &&
        !c &&
        !r &&
        i !== `mirror` &&
        a !== 0 &&
        o !== `inertia`
      );
    }
  },
  Kp = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  qp = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Jp = { type: `keyframes`, duration: 0.8 },
  Yp = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Xp = (e, { keyframes: t }) =>
    t.length > 2
      ? Jp
      : pl.has(e)
        ? e.startsWith(`scale`)
          ? qp(t[1])
          : Kp
        : Yp;
function Zp({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
var Qp =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = gu(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= cc(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        (t.set(e), s.onUpdate && s.onUpdate(e));
      },
      onComplete: () => {
        (o(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    (Zp(s) || (u = { ...u, ...Xp(e, u) }),
      u.duration && (u.duration = cc(u.duration)),
      u.repeatDelay && (u.repeatDelay = cc(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (dd.current || uc.skipAnimations) &&
        ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = Rf(u.keyframes, s);
      if (e !== void 0)
        return (
          q.update(() => {
            (u.onUpdate(e), u.onComplete());
          }),
          new hu([])
        );
    }
    return !a && Gp.supports(u) ? new Gp(u) : new Fp(u);
  };
function $p({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function em(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && $p(l, t))) continue;
    let o = { delay: n, ...gu(a || {}, t) },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = ud(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, q);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    (ld(e, t),
      r.start(
        Qp(t, r, i, e.shouldReduceMotion && qu.has(t) ? { type: !1 } : o, e, u),
      ));
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        q.update(() => {
          o && sd(e, o);
        });
      }),
    c
  );
}
function tm(e, t, n = {}) {
  let r = fu(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(em(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return nm(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function nm(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(rm)
      .forEach((e, r) => {
        (e.notify(`AnimationStart`, t),
          o.push(
            tm(e, t, { ...a, delay: n + c(r) }).then(() =>
              e.notify(`AnimationComplete`, t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function rm(e, t) {
  return e.sortNodePosition(t);
}
function im(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => tm(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = tm(e, t, n);
  else {
    let i = typeof t == `function` ? fu(e, t, n.custom) : t;
    r = Promise.all(em(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var am = Pc.length;
function om(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && om(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < am; n++) {
    let r = Pc[n],
      i = e.props[r];
    (jc(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var sm = [...Nc].reverse(),
  cm = Nc.length;
function lm(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => im(e, t, n)));
}
function um(e) {
  let t = lm(e),
    n = pm(),
    r = !0,
    i = (t) => (n, r) => {
      let i = fu(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = om(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < cm; t++) {
      let f = sm[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = jc(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          Mc(m) ||
          typeof m == `boolean`)
      )
        continue;
      let v = dm(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        w = { ...C, ...S },
        T = (t) => {
          ((y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in w) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = il(t) && il(n) ? !du(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : T(e)
            : t !== void 0 && l.has(e)
              ? T(e)
              : (p.protectedKeys[e] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive && (u = { ...u, ...S }),
        r && e.blockInitialAnimation && (y = !1),
        y &&
          (!(_ && v) || b) &&
          c.push(...x.map((e) => ({ animation: e, options: { type: f } }))));
    }
    if (l.size) {
      let t = {};
      (l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        c.push({ animation: t }));
    }
    let f = !!c.length;
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    ((i = e.variantChildren) == null ||
      i.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let a = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      ((n = pm()), (r = !0));
    },
  };
}
function dm(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !du(t, e) : !1;
}
function fm(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function pm() {
  return {
    animate: fm(!0),
    whileInView: fm(),
    whileHover: fm(),
    whileTap: fm(),
    whileDrag: fm(),
    whileFocus: fm(),
    exit: fm(),
  };
}
var mm = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  hm = class extends mm {
    constructor(e) {
      (super(e), (e.animationState ||= um(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Mc(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this));
    }
  },
  gm = 0,
  _m = {
    animation: { Feature: hm },
    exit: {
      Feature: class extends mm {
        constructor() {
          (super(...arguments), (this.id = gm++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
function vm(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function ym(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var bm = (e) => (t) => Lu(t) && e(t, ym(t));
function xm(e, t, n, r) {
  return vm(e, t, bm(n), r);
}
var Sm = (e, t) => Math.abs(e - t);
function Cm(e, t) {
  let n = Sm(e.x, t.x),
    r = Sm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var wm = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = Dm(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = Cm(e.offset, { x: 0, y: 0 }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = J;
        this.history.push({ ...r, timestamp: i });
        let { onStart: a, onMove: o } = this.handlers;
        (t ||
          (a && a(this.lastMoveEvent, e),
          (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e));
      }),
      (this.handlePointerMove = (e, t) => {
        ((this.lastMoveEvent = e),
          (this.lastMoveEventInfo = Tm(t, this.transformPagePoint)),
          q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if (
          (this.dragSnapToOrigin && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let a = Dm(
          e.type === `pointercancel`
            ? this.lastMoveEventInfo
            : Tm(t, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && n && n(e, a), r && r(e, a));
      }),
      !Lu(e))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window));
    let a = Tm(ym(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = J;
    this.history = [{ ...o, timestamp: s }];
    let { onSessionStart: c } = t;
    (c && c(e, Dm(a, this.history)),
      (this.removeListeners = Xf(
        xm(this.contextWindow, `pointermove`, this.handlePointerMove),
        xm(this.contextWindow, `pointerup`, this.handlePointerUp),
        xm(this.contextWindow, `pointercancel`, this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), hc(this.updatePoint));
  }
};
function Tm(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Em(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Dm({ point: e }, t) {
  return {
    point: e,
    delta: Em(e, km(t)),
    offset: Em(e, Om(t)),
    velocity: Am(t, 0.1),
  };
}
function Om(e) {
  return e[0];
}
function km(e) {
  return e[e.length - 1];
}
function Am(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = km(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > cc(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let a = lc(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var jm = 0.9999,
  Mm = 1.0001,
  Nm = -0.01,
  Pm = 0.01;
function Fm(e) {
  return e.max - e.min;
}
function Im(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Lm(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Q(t.min, t.max, e.origin)),
    (e.scale = Fm(n) / Fm(t)),
    (e.translate = Q(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= jm && e.scale <= Mm) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Nm && e.translate <= Pm) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Rm(e, t, n, r) {
  (Lm(e.x, t.x, n.x, r ? r.originX : void 0),
    Lm(e.y, t.y, n.y, r ? r.originY : void 0));
}
function zm(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Fm(t)));
}
function Bm(e, t, n) {
  (zm(e.x, t.x, n.x), zm(e.y, t.y, n.y));
}
function Vm(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Fm(t)));
}
function Hm(e, t, n) {
  (Vm(e.x, t.x, n.x), Vm(e.y, t.y, n.y));
}
function Um(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Q(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Wm(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Gm(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Wm(e.x, n, i), y: Wm(e.y, t, r) };
}
function Km(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function qm(e, t) {
  return { x: Km(e.x, t.x), y: Km(e.y, t.y) };
}
function Jm(e, t) {
  let n = 0.5,
    r = Fm(e),
    i = Fm(t);
  return (
    i > r
      ? (n = sc(t.min, t.max - r, e.min))
      : r > i && (n = sc(e.min, e.max - i, t.min)),
    bl(0, 1, n)
  );
}
function Ym(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var Xm = 0.35;
function Zm(e = Xm) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Xm),
    { x: Qm(e, `left`, `right`), y: Qm(e, `top`, `bottom`) }
  );
}
function Qm(e, t, n) {
  return { min: $m(e, t), max: $m(e, n) };
}
function $m(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var eh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  th = () => ({ x: eh(), y: eh() }),
  nh = () => ({ min: 0, max: 0 }),
  rh = () => ({ x: nh(), y: nh() });
function ih(e) {
  return [e(`x`), e(`y`)];
}
function ah({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function oh({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function sh(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ch(e) {
  return e === void 0 || e === 1;
}
function lh({ scale: e, scaleX: t, scaleY: n }) {
  return !ch(e) || !ch(t) || !ch(n);
}
function uh(e) {
  return (
    lh(e) ||
    dh(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function dh(e) {
  return fh(e.x) || fh(e.y);
}
function fh(e) {
  return e && e !== `0%`;
}
function ph(e, t, n) {
  return n + t * (e - n);
}
function mh(e, t, n, r, i) {
  return (i !== void 0 && (e = ph(e, i, r)), ph(e, n, r) + t);
}
function hh(e, t = 0, n = 1, r, i) {
  ((e.min = mh(e.min, t, n, r, i)), (e.max = mh(e.max, t, n, r, i)));
}
function gh(e, { x: t, y: n }) {
  (hh(e.x, t.translate, t.scale, t.originPoint),
    hh(e.y, n.translate, n.scale, n.originPoint));
}
var _h = 0.999999999999,
  vh = 1.2665369000001;
function yh(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Sh(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), gh(e, o)),
      r && uh(a.latestValues) && Sh(e, a.latestValues));
  }
  (t.x < vh && t.x > _h && (t.x = 1), t.y < vh && t.y > _h && (t.y = 1));
}
function bh(e, t) {
  ((e.min += t), (e.max += t));
}
function xh(e, t, n, r, i = 0.5) {
  hh(e, t, n, Q(e.min, e.max, i), r);
}
function Sh(e, t) {
  (xh(e.x, t.x, t.scaleX, t.scale, t.originX),
    xh(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function Ch(e, t) {
  return ah(sh(e.getBoundingClientRect(), t));
}
function wh(e, t, n) {
  let r = Ch(e, n),
    { scroll: i } = t;
  return (i && (bh(r.x, i.offset.x), bh(r.y, i.offset.y)), r);
}
var Th = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Eh = new WeakMap(),
  Dh = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = rh()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          (n ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(ym(e).point));
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = Ku(n)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            ih((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (El.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Fm(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && q.postRender(() => i(e, t)),
            ld(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = kh(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && a(e, t));
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          ih(
            (e) =>
              this.getAnimationState(e) === `paused` &&
              this.getAxisMotionValue(e).animation?.play(),
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new wm(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: a,
          onSessionEnd: o,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: Th(this.visualElement),
        },
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && q.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Oh(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = Um(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && Vc(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? Gm(n.layoutBox, e) : !1),
        (this.elastic = Zm(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          ih((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Ym(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Vc(e)) return !1;
      let n = e.current;
      ac(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = wh(n, r.root, this.visualElement.getTransformPagePoint()),
        a = qm(r.layout.layoutBox, i);
      if (t) {
        let e = t(oh(a));
        ((this.hasMutatedConstraints = !!e), e && (a = ah(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = ih((o) => {
          if (!Oh(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          a && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        ld(this.visualElement, e),
        n.start(Qp(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      ih((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      ih((e) => this.getAxisMotionValue(e).animation?.pause());
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      ih((t) => {
        let { drag: n } = this.getProps();
        if (!Oh(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - Q(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Vc(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      ih((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = Jm({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        ih((t) => {
          if (!Oh(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(Q(i, a, r[t]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Eh.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = xm(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          Vc(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        q.read(n));
      let a = vm(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (ih((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (a(), t(), i(), o && o());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Xm,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function Oh(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function kh(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Ah = class extends mm {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = rc),
        (this.removeListeners = rc),
        (this.controls = new Dh(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || rc));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  jh = (e) => (t, n) => {
    e && q.postRender(() => e(t, n));
  },
  Mh = class extends mm {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = rc));
    }
    onPointerDown(e) {
      this.session = new wm(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Th(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: jh(e),
        onStart: jh(t),
        onMove: n,
        onEnd: (e, t) => {
          (delete this.session, r && q.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = xm(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  Nh = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ph(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Fh = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`) {
        if (X.test(e)) e = parseFloat(e);
        else return e;
      }
      return `${Ph(e, t.target.x)}% ${Ph(e, t.target.y)}%`;
    },
  },
  Ih = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = ef.parse(e);
      if (i.length > 5) return r;
      let a = ef.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = Q(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  Lh = class extends y.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (Xl(zh),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Nh.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                q.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        Y.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Rh(e) {
  let [t, n] = ec(),
    r = (0, y.useContext)(Xs);
  return (0, k.jsx)(Lh, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, y.useContext)(Kc),
    isPresent: t,
    safeToRemove: n,
  });
}
var zh = {
  borderRadius: {
    ...Fh,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: Fh,
  borderTopRightRadius: Fh,
  borderBottomLeftRadius: Fh,
  borderBottomRightRadius: Fh,
  boxShadow: Ih,
};
function Bh(e, t, n) {
  let r = sl(e) ? e : ad(e);
  return (r.start(Qp(``, r, t, n)), r.animation);
}
function Vh(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var Hh = (e, t) => e.depth - t.depth,
  Uh = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (Zu(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (Qu(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(Hh),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function Wh(e, t) {
  let n = Xu.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (hc(r), e(a - t));
    };
  return (q.read(r, !0), () => hc(r));
}
var Gh = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  Kh = Gh.length,
  qh = (e) => (typeof e == `string` ? parseFloat(e) : e),
  Jh = (e) => typeof e == `number` || X.test(e);
function Yh(e, t, n, r, i, a) {
  i
    ? ((e.opacity = Q(0, n.opacity === void 0 ? 1 : n.opacity, Zh(r))),
      (e.opacityExit = Q(t.opacity === void 0 ? 1 : t.opacity, 0, Qh(r))))
    : a &&
      (e.opacity = Q(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r,
      ));
  for (let i = 0; i < Kh; i++) {
    let a = `border${Gh[i]}Radius`,
      o = Xh(t, a),
      s = Xh(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Jh(o) === Jh(s)
        ? ((e[a] = Math.max(Q(qh(o), qh(s), r), 0)),
          (El.test(s) || El.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r));
}
function Xh(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var Zh = $h(0, 0.5, wd),
  Qh = $h(0.5, 0.95, rc);
function $h(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(sc(e, t, r)));
}
function eg(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function tg(e, t) {
  (eg(e.x, t.x), eg(e.y, t.y));
}
function ng(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function rg(e, t, n, r, i) {
  return (
    (e -= t),
    (e = ph(e, 1 / n, r)),
    i !== void 0 && (e = ph(e, 1 / i, r)),
    e
  );
}
function ig(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (El.test(t) &&
      ((t = parseFloat(t)), (t = Q(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = Q(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = rg(e.min, t, n, s, i)),
    (e.max = rg(e.max, t, n, s, i)));
}
function ag(e, t, [n, r, i], a, o) {
  ig(e, t[n], t[r], t[i], t.scale, a, o);
}
var og = [`x`, `scaleX`, `originX`],
  sg = [`y`, `scaleY`, `originY`];
function cg(e, t, n, r) {
  (ag(e.x, t, og, n ? n.x : void 0, r ? r.x : void 0),
    ag(e.y, t, sg, n ? n.y : void 0, r ? r.y : void 0));
}
function lg(e) {
  return e.translate === 0 && e.scale === 1;
}
function ug(e) {
  return lg(e.x) && lg(e.y);
}
function dg(e, t) {
  return e.min === t.min && e.max === t.max;
}
function fg(e, t) {
  return dg(e.x, t.x) && dg(e.y, t.y);
}
function pg(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function mg(e, t) {
  return pg(e.x, t.x) && pg(e.y, t.y);
}
function hg(e) {
  return Fm(e.x) / Fm(e.y);
}
function gg(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var _g = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (Zu(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (Qu(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((t) => e === t);
    if (t === 0) return !1;
    let n;
    for (let e = t; e >= 0; e--) {
      let t = this.members[e];
      if (t.isPresent !== !1) {
        n = t;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      (t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function vg(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var yg = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  bg = typeof window < `u` && window.MotionDebug !== void 0,
  xg = [``, `X`, `Y`, `Z`],
  Sg = { visibility: `hidden` },
  Cg = 1e3,
  wg = 0;
function Tg(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Eg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = ud(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, q, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Eg(r);
}
function Dg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = wg++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            bg &&
              (yg.totalNodes =
                yg.resolvedTargetDeltas =
                yg.recalculatedProjection =
                  0),
            this.nodes.forEach(Ag),
            this.nodes.forEach(Lg),
            this.nodes.forEach(Rg),
            this.nodes.forEach(jg),
            bg && window.MotionDebug.record(yg));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uh());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new $u()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = Vh(t)), (this.instance = t));
      let { layoutId: r, layout: i, visualElement: a } = this.options;
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1);
        e(t, () => {
          ((this.root.updateBlockedByResize = !0),
            n && n(),
            (n = Wh(r, 250)),
            Nh.hasAnimatedSinceResize &&
              ((Nh.hasAnimatedSinceResize = !1), this.nodes.forEach(Ig)));
        });
      }
      (r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let i = this.options.transition || a.getDefaultTransition() || Gg,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  a.getProps(),
                c = !this.targetLayout || !mg(this.targetLayout, r) || n,
                l = !t && n;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l));
                let t = { ...gu(i, `layout`), onPlay: o, onComplete: s };
                ((a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t));
              } else
                (t || Ig(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        hc(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(zg),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Eg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Ng));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Pg),
        (this.isUpdating = !1),
        this.nodes.forEach(Fg),
        this.nodes.forEach(Og),
        this.nodes.forEach(kg),
        this.clearAllSnapshots());
      let e = Xu.now();
      ((J.delta = bl(0, 1e3 / 60, e - J.timestamp)),
        (J.timestamp = e),
        (J.isProcessing = !0),
        gc.update.process(J),
        gc.preRender.process(J),
        gc.render.process(J),
        (J.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Y.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Mg), this.sharedNodes.forEach(Bg));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = rh()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !ug(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || uh(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Yg(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return rh();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Zg))) {
        let { scroll: e } = this.root;
        e && (bh(t.x, e.offset.x), bh(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = rh();
      if ((tg(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && tg(t, e), bh(t.x, i.offset.x), bh(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = rh();
      tg(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          Sh(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          uh(r.latestValues) && Sh(n, r.latestValues));
      }
      return (uh(this.latestValues) && Sh(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = rh();
      tg(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !uh(n.latestValues)) continue;
        lh(n.latestValues) && n.updateSnapshot();
        let r = rh();
        (tg(r, n.measurePageBox()),
          cg(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (uh(this.latestValues) && cg(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== J.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (this.layout && (r || i)) {
        if (
          ((this.resolvedRelativeTargetAt = J.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = rh()),
              (this.relativeTargetOrigin = rh()),
              Hm(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                e.layout.layoutBox,
              ),
              tg(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (this.relativeTarget || this.targetDelta) {
          if (
            (this.target ||
              ((this.target = rh()), (this.targetWithTransforms = rh())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Bm(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : tg(this.target, this.layout.layoutBox),
                  gh(this.target, this.targetDelta))
                : tg(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let e = this.getClosestProjectingParent();
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = rh()),
                (this.relativeTargetOrigin = rh()),
                Hm(this.relativeTargetOrigin, this.target, e.target),
                tg(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          bg && yg.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          lh(this.parent.latestValues) ||
          dh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === J.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      tg(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (yh(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = rh())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ng(this.prevProjectionDelta.x, this.projectionDelta.x),
          ng(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Rm(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !gg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !gg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        bg && yg.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = th()),
        (this.projectionDelta = th()),
        (this.projectionDeltaWithTransform = th()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = th();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = rh(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !(!s || l || this.options.crossfade !== !0 || this.path.some(Wg));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (Vg(a.x, e.x, n),
          Vg(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Hm(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ug(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && fg(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= rh()),
            tg(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), Yh(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (hc(this.pendingAnimation), void 0)),
        (this.pendingAnimation = q.update(() => {
          ((Nh.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Bh(0, Cg, {
              ...e,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Cg),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (t && n && r) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Xg(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || rh();
          let t = Fm(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = Fm(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (tg(t, n),
          Sh(t, i),
          Rm(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new _g()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && Tg(`z`, e, r, this.animationValues);
      for (let t = 0; t < xg.length; t++)
        (Tg(`rotate${xg[t]}`, e, r, this.animationValues),
          Tg(`skew${xg[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Sg;
      let t = { visibility: `` },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = cl(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity =
              this.latestValues.opacity === void 0
                ? 1
                : this.latestValues.opacity),
            (t.pointerEvents = cl(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !uh(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      (this.applyTransformsToTarget(),
        (t.transform = vg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          i,
        )),
        n && (t.transform = n(i, t.transform)));
      let { x: a, y: o } = this.projectionDelta;
      ((t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        (t.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let e in Yl) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = Yl[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? cl(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(Ng),
        this.root.sharedNodes.clear());
    }
  };
}
function Og(e) {
  e.updateLayout();
}
function kg(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? ih((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = Fm(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : Xg(i, t.layoutBox, n) &&
        ih((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Fm(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = th();
    Rm(o, n, t.layoutBox);
    let s = th();
    a ? Rm(s, e.applyTransform(r, !0), t.measuredBox) : Rm(s, n, t.layoutBox);
    let c = !ug(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = rh();
          Hm(o, t.layoutBox, i.layoutBox);
          let s = rh();
          (Hm(s, n, a.layoutBox),
            mg(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Ag(e) {
  (bg && yg.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function jg(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Mg(e) {
  e.clearSnapshot();
}
function Ng(e) {
  e.clearMeasurements();
}
function Pg(e) {
  e.isLayoutDirty = !1;
}
function Fg(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Ig(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Lg(e) {
  e.resolveTargetDelta();
}
function Rg(e) {
  e.calcProjection();
}
function zg(e) {
  e.resetSkewAndRotation();
}
function Bg(e) {
  e.removeLeadSnapshot();
}
function Vg(e, t, n) {
  ((e.translate = Q(t.translate, 0, n)),
    (e.scale = Q(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Hg(e, t, n, r) {
  ((e.min = Q(t.min, n.min, r)), (e.max = Q(t.max, n.max, r)));
}
function Ug(e, t, n, r) {
  (Hg(e.x, t.x, n.x, r), Hg(e.y, t.y, n.y, r));
}
function Wg(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Gg = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Kg = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  qg = Kg(`applewebkit/`) && !Kg(`chrome/`) ? Math.round : rc;
function Jg(e) {
  ((e.min = qg(e.min)), (e.max = qg(e.max)));
}
function Yg(e) {
  (Jg(e.x), Jg(e.y));
}
function Xg(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Im(hg(t), hg(n), 0.2))
  );
}
function Zg(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var Qg = Dg({
    attachResizeListener: (e, t) => vm(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  $g = { current: void 0 },
  e_ = Dg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!$g.current) {
        let e = new Qg({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), ($g.current = e));
      }
      return $g.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  t_ = {
    pan: { Feature: Mh },
    drag: { Feature: Ah, ProjectionNode: e_, MeasureLayout: Rh },
  };
function n_(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && q.postRender(() => i(t, ym(t)));
}
var r_ = class extends mm {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Fu(
          e,
          (e) => (n_(this.node, e, `Start`), (e) => n_(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  i_ = class extends mm {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      e &&
        this.node.animationState &&
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      this.isActive &&
        this.node.animationState &&
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Xf(
        vm(this.node.current, `focus`, () => this.onFocus()),
        vm(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function a_(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && q.postRender(() => i(t, ym(t)));
}
var o_ = class extends mm {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Gu(
          e,
          (e) => (
            a_(this.node, e, `Start`),
            (e, { success: t }) => a_(this.node, e, t ? `End` : `Cancel`)
          ),
          { useGlobalTarget: this.node.props.globalTapTarget },
        ));
    }
    unmount() {}
  },
  s_ = new WeakMap(),
  c_ = new WeakMap(),
  l_ = (e) => {
    let t = s_.get(e.target);
    t && t(e);
  },
  u_ = (e) => {
    e.forEach(l_);
  };
function d_({ root: e, ...t }) {
  let n = e || document;
  c_.has(n) || c_.set(n, {});
  let r = c_.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(u_, { root: e, ...t })),
    r[i]
  );
}
function f_(e, t, n) {
  let r = d_(t);
  return (
    s_.set(e, n),
    r.observe(e),
    () => {
      (s_.delete(e), r.unobserve(e));
    }
  );
}
var p_ = { some: 0, all: 1 },
  m_ = class extends mm {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : p_[r],
        };
      return f_(this.node.current, a, (e) => {
        let { isIntersecting: t } = e;
        if (
          this.isInView === t ||
          ((this.isInView = t), i && !t && this.hasEnteredView)
        )
          return;
        (t && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive(`whileInView`, t));
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r;
        a && a(e);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(h_(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function h_({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var g_ = {
    inView: { Feature: m_ },
    tap: { Feature: o_ },
    focus: { Feature: i_ },
    hover: { Feature: r_ },
  },
  __ = { layout: { ProjectionNode: e_, MeasureLayout: Rh } },
  v_ = { current: null },
  y_ = { current: !1 };
function b_() {
  if (((y_.current = !0), tc)) {
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (v_.current = e.matches);
      (e.addListener(t), t());
    } else v_.current = !1;
  }
}
var x_ = [...jf, Bd, ef],
  S_ = (e) => x_.find(Af(e)),
  C_ = new WeakMap();
function w_(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (sl(i)) e.addValue(r, i);
    else if (sl(a)) e.addValue(r, ad(i, { owner: e }));
    else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, ad(t === void 0 ? i : t, { owner: e }));
      }
    }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var T_ = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  E_ = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = wf),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = Xu.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), q.render(this.render, !1, !0));
        }));
      let { latestValues: s, renderState: c, onUpdate: l } = a;
      ((this.onUpdate = l),
        (this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = Fc(t)),
        (this.isVariantNode = Ic(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && sl(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        C_.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        y_.current || b_(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always` || v_.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (C_.delete(this.current),
        this.projection && this.projection.unmount(),
        hc(this.notifyUpdate),
        hc(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = pl.has(e),
        r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && q.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = t.on(`renderRequest`, this.scheduleRender),
        a;
      (window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i(), a && a(), t.owner && t.stop());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in yc) {
        let t = yc[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : rh();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < T_.length; t++) {
        let n = T_[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = w_(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = ad(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (Tf(n) || Ed(n))
            ? (n = parseFloat(n))
            : !S_(n) && ef.test(t) && (n = cf(e, t)),
          this.setBaseTarget(e, sl(n) ? n.get() : n)),
        sl(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = rl(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !sl(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new $u()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  D_ = class extends E_ {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Nf));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      sl(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function O_(e) {
  return window.getComputedStyle(e);
}
var k_ = class extends D_ {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = Kl));
    }
    readValueFromInstance(e, t) {
      if (pl.has(t)) {
        let e = sf(t);
        return (e && e.default) || 0;
      }
      {
        let n = O_(e),
          r = (hl(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Ch(e, t);
    }
    build(e, t, n) {
      Ll(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ql(e, t, n);
    }
  },
  A_ = class extends D_ {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = rh));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (pl.has(t)) {
        let e = sf(t);
        return (e && e.default) || 0;
      }
      return ((t = ql.has(t) ? t : Uc(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return $l(e, t, n);
    }
    build(e, t, n) {
      Hl(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Jl(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = Gl(e.tagName)), super.mount(e));
    }
  },
  j_ = (e, t) =>
    tl(e) ? new A_(t) : new k_(t, { allowProjection: e !== y.Fragment }),
  M_ = kc(uu({ ..._m, ...g_, ...t_, ...__ }, j_));
function N_(e, t) {
  let n,
    r = () => {
      let { currentTime: r } = t,
        i = (r === null ? 0 : r.value) / 100;
      (n !== i && e(i), (n = i));
    };
  return (q.update(r, !0), () => hc(r));
}
var P_ = new WeakMap(),
  F_;
function I_(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function L_({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = P_.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return I_(e, n);
        },
      });
    });
}
function R_(e) {
  e.forEach(L_);
}
function z_() {
  typeof ResizeObserver > `u` || (F_ = new ResizeObserver(R_));
}
function B_(e, t) {
  F_ || z_();
  let n = Mu(e);
  return (
    n.forEach((e) => {
      let n = P_.get(e);
      (n || ((n = new Set()), P_.set(e, n)), n.add(t), F_?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = P_.get(e);
        (n?.delete(t), n?.size || F_?.unobserve(e));
      });
    }
  );
}
var V_ = new Set(),
  H_;
function U_() {
  ((H_ = () => {
    let e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    V_.forEach((e) => e(t));
  }),
    window.addEventListener(`resize`, H_));
}
function W_(e) {
  return (
    V_.add(e),
    H_ || U_(),
    () => {
      (V_.delete(e), !V_.size && H_ && (H_ = void 0));
    }
  );
}
function G_(e, t) {
  return typeof e == `function` ? W_(e) : B_(e, t);
}
var K_ = 50,
  q_ = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  J_ = () => ({ time: 0, x: q_(), y: q_() }),
  Y_ = {
    x: { length: `Width`, position: `Left` },
    y: { length: `Height`, position: `Top` },
  };
function X_(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = Y_[t],
    s = i.current,
    c = n.time;
  ((i.current = e[`scroll${o}`]),
    (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = sc(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > K_ ? 0 : ed(i.current - s, l);
}
function Z_(e, t, n) {
  (X_(e, `x`, t, n), X_(e, `y`, t, n), (t.time = n));
}
function Q_(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === `svg`) {
      let e = r.getBoundingClientRect();
      r = r.parentElement;
      let t = r.getBoundingClientRect();
      ((n.x += e.left - t.left), (n.y += e.top - t.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: e, y: t } = r.getBBox();
      ((n.x += e), (n.y += t));
      let i = null,
        a = r.parentNode;
      for (; !i; ) (a.tagName === `svg` && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return n;
}
var $_ = { start: 0, center: 0.5, end: 1 };
function ev(e, t, n = 0) {
  let r = 0;
  if ((e in $_ && (e = $_[e]), typeof e == `string`)) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (typeof e == `number` && (r = t * e), n + r);
}
var tv = [0, 0];
function nv(e, t, n, r) {
  let i = Array.isArray(e) ? e : tv,
    a = 0,
    o = 0;
  return (
    typeof e == `number`
      ? (i = [e, e])
      : typeof e == `string` &&
        ((e = e.trim()),
        (i = e.includes(` `) ? e.split(` `) : [e, $_[e] ? e : `0`])),
    (a = ev(i[0], n, r)),
    (o = ev(i[1], t)),
    a - o
  );
}
var rv = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  iv = { x: 0, y: 0 };
function av(e) {
  return `getBBox` in e && e.tagName !== `svg`
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function ov(e, t, n) {
  let { offset: r = rv.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? iv : Q_(i, e),
    c = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : av(i),
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = nv(r[e], l[o], c[o], s[a]);
    (!u && n !== t[a].interpolatorOffsets[e] && (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = Ep(t[a].offset, Op(r), { clamp: !1 })),
    (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = bl(0, 1, t[a].interpolate(t[a].current))));
}
function sv(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function cv(e, t, n, r = {}) {
  return {
    measure: () => sv(e, r.target, n),
    update: (t) => {
      (Z_(e, n, t), (r.offset || r.target) && ov(e, n, r));
    },
    notify: () => t(n),
  };
}
var lv = new WeakMap(),
  uv = new WeakMap(),
  dv = new WeakMap(),
  fv = (e) => (e === document.documentElement ? window : e);
function pv(e, { container: t = document.documentElement, ...n } = {}) {
  let r = dv.get(t);
  r || ((r = new Set()), dv.set(t, r));
  let i = cv(t, e, J_(), n);
  if ((r.add(i), !lv.has(t))) {
    let e = () => {
        for (let e of r) e.measure();
      },
      n = () => {
        for (let e of r) e.update(J.timestamp);
      },
      i = () => {
        for (let e of r) e.notify();
      },
      a = () => {
        (q.read(e, !1, !0), q.read(n, !1, !0), q.update(i, !1, !0));
      };
    lv.set(t, a);
    let o = fv(t);
    (window.addEventListener(`resize`, a, { passive: !0 }),
      t !== document.documentElement && uv.set(t, G_(t, a)),
      o.addEventListener(`scroll`, a, { passive: !0 }));
  }
  let a = lv.get(t);
  return (
    q.read(a, !1, !0),
    () => {
      var e;
      hc(a);
      let n = dv.get(t);
      if (!n || (n.delete(i), n.size)) return;
      let r = lv.get(t);
      (lv.delete(t),
        r &&
          (fv(t).removeEventListener(`scroll`, r),
          (e = uv.get(t)) == null || e(),
          window.removeEventListener(`resize`, r)));
    }
  );
}
function mv({ source: e, container: t, axis: n = `y` }) {
  e && (t = e);
  let r = { value: 0 };
  return {
    currentTime: r,
    cancel: pv(
      (e) => {
        r.value = e[n].progress * 100;
      },
      { container: t, axis: n },
    ),
  };
}
var hv = new Map();
function gv({
  source: e,
  container: t = document.documentElement,
  axis: n = `y`,
} = {}) {
  (e && (t = e), hv.has(t) || hv.set(t, {}));
  let r = hv.get(t);
  return (
    r[n] ||
      (r[n] = pu()
        ? new ScrollTimeline({ source: t, axis: n })
        : mv({ source: t, axis: n })),
    r[n]
  );
}
function _v(e) {
  return e.length === 2;
}
function vv(e) {
  return e && (e.target || e.offset);
}
function yv(e, t) {
  return _v(e) || vv(t)
    ? pv((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : N_(e, gv(t));
}
function bv(e, t) {
  if ((e.flatten(), vv(t)))
    return (
      e.pause(),
      pv((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    let n = gv(t);
    return e.attachTimeline
      ? e.attachTimeline(
          n,
          (e) => (
            e.pause(),
            N_((t) => {
              e.time = e.duration * t;
            }, n)
          ),
        )
      : rc;
  }
}
function xv(e, { axis: t = `y`, ...n } = {}) {
  let r = { axis: t, ...n };
  return typeof e == `function` ? yv(e, r) : bv(e, r);
}
function Sv(e, t) {
  ic(
    !(t && !t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`,
  );
}
var Cv = () => ({
  scrollX: ad(0),
  scrollY: ad(0),
  scrollXProgress: ad(0),
  scrollYProgress: ad(0),
});
function wv({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = Zs(Cv);
  return (
    (n ? nc : y.useEffect)(
      () => (
        Sv(`target`, t),
        Sv(`container`, e),
        xv(
          (e, { x: t, y: n }) => {
            (i.scrollX.set(t.current),
              i.scrollXProgress.set(t.progress),
              i.scrollY.set(n.current),
              i.scrollYProgress.set(n.progress));
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          },
        )
      ),
      [e, t, JSON.stringify(r.offset)],
    ),
    i
  );
}
function Tv(e) {
  let t = Zs(() => ad(e)),
    { isStatic: n } = (0, y.useContext)($s);
  if (n) {
    let [, n] = (0, y.useState)(e);
    (0, y.useEffect)(() => t.on(`change`, n), []);
  }
  return t;
}
function Ev(e, t) {
  let n = Tv(t()),
    r = () => n.set(t());
  return (
    r(),
    nc(() => {
      let t = () => q.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), hc(r));
      };
    }),
    n
  );
}
var Dv = (e) => e && typeof e == `object` && e.mix,
  Ov = (e) => (Dv(e) ? e.mix : void 0);
function kv(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = Ep(i, a, { mixer: Ov(a[0]), ...o });
  return t ? s(r) : s;
}
function Av(e) {
  ((rd.current = []), e());
  let t = Ev(rd.current, e);
  return ((rd.current = void 0), t);
}
function jv(e, t, n, r) {
  if (typeof e == `function`) return Av(e);
  let i = typeof t == `function` ? t : kv(t, n, r);
  return Array.isArray(e) ? Mv(e, i) : Mv([e], ([e]) => i(e));
}
function Mv(e, t) {
  let n = Zs(() => []);
  return Ev(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
var Nv = [
  {
    id: `w-trench-camel`,
    name: `Trench Camel Épuré`,
    category: `women`,
    subcategory: `Manteaux`,
    price: 890,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&q=80`,
      `https://images.unsplash.com/photo-1520975954732-35dd22299614?w=1200&q=80`,
    ],
    description: `Trench en laine mélangée, coupe cintrée et ceinture nouée. Une pièce intemporelle pensée pour les mi-saisons.`,
    material: `70% laine, 30% polyester`,
    sizes: [`XS`, `S`, `M`, `L`, `XL`],
    colors: [`Camel`, `Noir`],
    is_new: !0,
    is_bestseller: !0,
    created_date: `2026-02-10`,
  },
  {
    id: `w-robe-soie`,
    name: `Robe Soie Émeraude`,
    category: `women`,
    subcategory: `Robes`,
    price: 650,
    discount_price: 520,
    images: [
      `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80`,
      `https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80`,
    ],
    description: `Robe fluide en soie naturelle, drapé asymétrique et fermeture dos invisible. Pour les soirées mémorables.`,
    material: `100% soie`,
    sizes: [`XS`, `S`, `M`, `L`],
    colors: [`Émeraude`, `Noir`, `Bordeaux`],
    is_new: !1,
    is_bestseller: !0,
    created_date: `2025-11-02`,
  },
  {
    id: `w-blazer-lin`,
    name: `Blazer Lin Ivoire`,
    category: `women`,
    subcategory: `Vestes`,
    price: 480,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1200&q=80`,
      `https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80`,
    ],
    description: `Blazer déstructuré en lin léger, épaules marquées et boutonnage simple. L'allié du vestiaire de bureau.`,
    material: `100% lin`,
    sizes: [`XS`, `S`, `M`, `L`, `XL`],
    colors: [`Ivoire`, `Sable`],
    is_new: !0,
    is_bestseller: !1,
    created_date: `2026-01-18`,
  },
  {
    id: `w-pull-cachemire`,
    name: `Pull Cachemire Sable`,
    category: `women`,
    subcategory: `Maille`,
    price: 390,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80`,
      `https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80`,
    ],
    description: `Pull col rond en cachemire pur, maille fine et toucher extra-doux. Une essentielle pour l'hiver.`,
    material: `100% cachemire`,
    sizes: [`XS`, `S`, `M`, `L`],
    colors: [`Sable`, `Gris chiné`, `Noir`],
    is_new: !1,
    is_bestseller: !0,
    created_date: `2025-10-05`,
  },
  {
    id: `w-jupe-plissee`,
    name: `Jupe Plissée Champagne`,
    category: `women`,
    subcategory: `Jupes`,
    price: 320,
    discount_price: 260,
    images: [
      `https://images.unsplash.com/photo-1583496661160-fb5886a13d1a?w=1200&q=80`,
      `https://images.unsplash.com/photo-1583496661268-2f8f7e9d8fc5?w=1200&q=80`,
    ],
    description: `Jupe plissée midi en satin, taille haute élastiquée. Mouvement et fluidité à chaque pas.`,
    material: `95% polyester, 5% élasthanne`,
    sizes: [`XS`, `S`, `M`, `L`],
    colors: [`Champagne`, `Noir`],
    is_new: !0,
    is_bestseller: !1,
    created_date: `2026-02-01`,
  },
  {
    id: `w-chemise-lin`,
    name: `Chemise Lin Blanche`,
    category: `women`,
    subcategory: `Chemises`,
    price: 280,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80`,
      `https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1200&q=80`,
    ],
    description: `Chemise ample en lin lavé, col officier et manches trois-quarts. Fraîcheur et élégance décontractée.`,
    material: `100% lin`,
    sizes: [`XS`, `S`, `M`, `L`, `XL`],
    colors: [`Blanc`, `Bleu ciel`],
    is_new: !1,
    is_bestseller: !1,
    created_date: `2025-09-14`,
  },
  {
    id: `m-costume-laine`,
    name: `Costume Laine Anthracite`,
    category: `men`,
    subcategory: `Costumes`,
    price: 1250,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80`,
      `https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=1200&q=80`,
    ],
    description: `Costume deux pièces en laine vierge, coupe ajustée et doublure demi-toile. Le vestiaire tailleur par excellence.`,
    material: `100% laine vierge`,
    sizes: [`46`, `48`, `50`, `52`, `54`],
    colors: [`Anthracite`, `Marine`],
    is_new: !0,
    is_bestseller: !0,
    created_date: `2026-01-25`,
  },
  {
    id: `m-chemise-oxford`,
    name: `Chemise Oxford Bleu Ciel`,
    category: `men`,
    subcategory: `Chemises`,
    price: 220,
    discount_price: 180,
    images: [
      `https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80`,
      `https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=80`,
    ],
    description: `Chemise en coton Oxford, col boutonné et coupe ajustée. Un classique qui traverse les saisons.`,
    material: `100% coton`,
    sizes: [`S`, `M`, `L`, `XL`, `XXL`],
    colors: [`Bleu ciel`, `Blanc`],
    is_new: !1,
    is_bestseller: !0,
    created_date: `2025-08-20`,
  },
  {
    id: `m-manteau-laine`,
    name: `Manteau Laine Marine`,
    category: `men`,
    subcategory: `Manteaux`,
    price: 980,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=1200&q=80`,
      `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80`,
    ],
    description: `Manteau long en laine et cachemire, col croisé et coupe droite. Chaleur et prestance pour l'hiver.`,
    material: `80% laine, 20% cachemire`,
    sizes: [`48`, `50`, `52`, `54`],
    colors: [`Marine`, `Gris`],
    is_new: !0,
    is_bestseller: !1,
    created_date: `2026-01-30`,
  },
  {
    id: `m-pull-col-v`,
    name: `Pull Col V Merinos`,
    category: `men`,
    subcategory: `Maille`,
    price: 290,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80`,
      `https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&q=80`,
    ],
    description: `Pull col V en laine mérinos extra-fine, léger et thermorégulateur. Se porte seul ou sous un blazer.`,
    material: `100% laine mérinos`,
    sizes: [`S`, `M`, `L`, `XL`],
    colors: [`Bordeaux`, `Gris chiné`, `Noir`],
    is_new: !1,
    is_bestseller: !0,
    created_date: `2025-10-28`,
  },
  {
    id: `m-pantalon-laine`,
    name: `Pantalon Laine Chino`,
    category: `men`,
    subcategory: `Pantalons`,
    price: 260,
    discount_price: 210,
    images: [
      `https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80`,
      `https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1200&q=80`,
    ],
    description: `Pantalon chino en flanelle de laine, coupe droite et pinces légères. Le compagnon idéal du costume décontracté.`,
    material: `95% laine, 5% élasthanne`,
    sizes: [`44`, `46`, `48`, `50`, `52`],
    colors: [`Beige`, `Anthracite`],
    is_new: !1,
    is_bestseller: !1,
    created_date: `2025-09-30`,
  },
  {
    id: `m-veste-cuir`,
    name: `Veste Cuir Bomber`,
    category: `men`,
    subcategory: `Vestes`,
    price: 1100,
    discount_price: null,
    images: [
      `https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80`,
      `https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1200&q=80`,
    ],
    description: `Veste bomber en cuir d'agneau, finitions côtelées et doublure satin. Une pièce forte, entre tradition et modernité.`,
    material: `100% cuir d'agneau`,
    sizes: [`S`, `M`, `L`, `XL`],
    colors: [`Noir`, `Cognac`],
    is_new: !0,
    is_bestseller: !0,
    created_date: `2026-02-05`,
  },
];
function Pv(e, t) {
  return !(
    (t.category && e.category !== t.category) ||
    (t.is_new && !e.is_new) ||
    (t.is_bestseller && !e.is_bestseller) ||
    (t.id && e.id !== t.id)
  );
}
function Fv(e = {}, t = 100) {
  return Nv.filter((t) => Pv(t, e)).slice(0, t);
}
function Iv(e) {
  return Nv.find((t) => t.id === e) || null;
}
function Lv(e = {}, t = 100) {
  let [n, r] = (0, y.useState)([]),
    [i, a] = (0, y.useState)(!0),
    o = JSON.stringify(e) + t;
  return (
    (0, y.useEffect)(() => {
      let n = !0;
      a(!0);
      let i = setTimeout(() => {
        n && (r(Fv(e, t)), a(!1));
      }, 150);
      return () => {
        ((n = !1), clearTimeout(i));
      };
    }, [o]),
    { products: n, loading: i }
  );
}
function Rv({ product: e, index: t = 0 }) {
  let n = e.discount_price && e.discount_price < e.price,
    r = e.images?.[0];
  return (0, k.jsx)(M_.div, {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: `-60px` },
    transition: {
      duration: 0.9,
      delay: (t % 3) * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
    className: `group`,
    children: (0, k.jsxs)(Ns, {
      to: `/product/${e.id}`,
      className: `block`,
      children: [
        (0, k.jsxs)(`div`, {
          className: `relative overflow-hidden bg-secondary aspect-[3/4] mb-5`,
          children: [
            r &&
              (0, k.jsx)(`img`, {
                src: r,
                alt: e.name,
                loading: `lazy`,
                className: `w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110`,
              }),
            (0, k.jsxs)(`div`, {
              className: `absolute top-4 left-4 flex flex-col gap-2`,
              children: [
                e.is_new &&
                  (0, k.jsx)(`span`, {
                    className: `bg-background/90 text-foreground text-[10px] tracking-luxe-sm px-3 py-1 uppercase`,
                    children: `Nouveau`,
                  }),
                n &&
                  (0, k.jsx)(`span`, {
                    className: `bg-accent text-background text-[10px] tracking-luxe-sm px-3 py-1 uppercase`,
                    children: `Promo`,
                  }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`,
              children: (0, k.jsx)(`div`, {
                className: `bg-background/95 text-foreground text-center text-[11px] tracking-luxe-sm uppercase py-3`,
                children: `Voir le produit`,
              }),
            }),
          ],
        }),
        (0, k.jsxs)(`div`, {
          className: `space-y-1`,
          children: [
            e.subcategory &&
              (0, k.jsx)(`p`, {
                className: `text-[10px] uppercase tracking-luxe-sm text-muted-foreground`,
                children: e.subcategory,
              }),
            (0, k.jsx)(`h3`, {
              className: `font-heading text-xl font-light leading-snug`,
              children: e.name,
            }),
            (0, k.jsx)(`div`, {
              className: `flex items-baseline gap-2`,
              children: n
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsxs)(`span`, {
                        className: `text-accent font-medium`,
                        children: [
                          e.discount_price.toLocaleString(`fr-TN`),
                          ` TND`,
                        ],
                      }),
                      (0, k.jsxs)(`span`, {
                        className: `text-sm text-muted-foreground line-through`,
                        children: [e.price.toLocaleString(`fr-TN`), ` TND`],
                      }),
                    ],
                  })
                : (0, k.jsxs)(`span`, {
                    className: `font-medium`,
                    children: [e.price.toLocaleString(`fr-TN`), ` TND`],
                  }),
            }),
          ],
        }),
      ],
    }),
  });
}
function zv() {
  let [e, t] = (0, y.useState)(``),
    [n, r] = (0, y.useState)(!1);
  return (0, k.jsx)(`section`, {
    className: `px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-secondary`,
    children: (0, k.jsxs)(`div`, {
      className: `max-w-2xl mx-auto text-center`,
      children: [
        (0, k.jsx)(`p`, {
          className: `text-[11px] uppercase tracking-luxe text-accent mb-5`,
          children: `L'Atelier`,
        }),
        (0, k.jsx)(`h2`, {
          className: `font-heading text-4xl md:text-6xl font-light mb-6 leading-tight`,
          children: `Rejoignez la Maison`,
        }),
        (0, k.jsx)(`p`, {
          className: `text-muted-foreground mb-10 max-w-md mx-auto`,
          children: `Recevez nos collections en avant-première, les ventes privées et les histoires de notre atelier.`,
        }),
        (0, k.jsxs)(`form`, {
          onSubmit: (n) => {
            (n.preventDefault(),
              e && (r(!0), t(``), setTimeout(() => r(!1), 4e3)));
          },
          className: `flex flex-col sm:flex-row gap-3 max-w-md mx-auto`,
          children: [
            (0, k.jsx)(`input`, {
              type: `email`,
              required: !0,
              value: e,
              onChange: (e) => t(e.target.value),
              placeholder: `Votre adresse e-mail`,
              className: `flex-1 bg-transparent border-b border-foreground/30 focus:border-foreground px-1 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground`,
            }),
            (0, k.jsx)(`button`, {
              type: `submit`,
              className: `bg-foreground text-background px-8 py-3 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500 whitespace-nowrap`,
              children: n
                ? (0, k.jsxs)(`span`, {
                    className: `flex items-center gap-2 justify-center`,
                    children: [(0, k.jsx)(nr, { size: 14 }), ` Inscrit`],
                  })
                : `S'inscrire`,
            }),
          ],
        }),
      ],
    }),
  });
}
function Bv({ children: e, delay: t = 0, y: n = 28, className: r = `` }) {
  return (0, k.jsx)(M_.div, {
    className: r,
    initial: { opacity: 0, y: n },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: `-80px` },
    transition: { duration: 1, delay: t, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
var Vv = [
    {
      image: `https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1800&q=80`,
      label: `Femme`,
      sub: `Manteau Trench`,
    },
    {
      image: `https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1800&q=80`,
      label: `Homme`,
      sub: `Costume Laine`,
    },
    {
      image: `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=80`,
      label: `Soirée`,
      sub: `Robe Soie`,
    },
  ],
  Hv = [
    `https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80`,
    `https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80`,
    `https://images.unsplash.com/photo-1583496661160-fb5886a13d1a?w=800&q=80`,
    `https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80`,
    `https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80`,
    `https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80`,
  ];
function Uv() {
  let [e, t] = (0, y.useState)(0),
    { scrollY: n } = wv(),
    r = jv(n, [0, 800], [0, 200]),
    i = jv(n, [0, 800], [0, -120]),
    a = jv(n, [0, 600], [1, 0]),
    { products: o } = Lv({ is_bestseller: !0 }, 4),
    { products: s } = Lv({ is_new: !0 }, 4);
  return (
    (0, y.useEffect)(() => {
      let e = setInterval(() => t((e) => (e + 1) % Vv.length), 5500);
      return () => clearInterval(e);
    }, []),
    (0, k.jsxs)(`div`, {
      children: [
        (0, k.jsxs)(`section`, {
          className: `relative h-screen w-full overflow-hidden bg-foreground`,
          children: [
            Vv.map((t, n) =>
              (0, k.jsxs)(
                M_.div,
                {
                  className: `absolute inset-0`,
                  initial: { opacity: 0 },
                  animate: { opacity: +(e === n) },
                  transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                  children: [
                    (0, k.jsx)(M_.img, {
                      src: t.image,
                      alt: t.sub,
                      style: { y: e === n ? r : 0 },
                      className: `w-full h-full object-cover scale-110`,
                    }),
                    (0, k.jsx)(`div`, {
                      className: `absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/50`,
                    }),
                  ],
                },
                n,
              ),
            ),
            (0, k.jsxs)(M_.div, {
              style: { y: i, opacity: a },
              className: `relative h-full flex flex-col items-center justify-center text-center px-6`,
              children: [
                (0, k.jsxs)(M_.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1, delay: 0.3 },
                  className: `text-[11px] uppercase tracking-luxe text-background/70 mb-6`,
                  children: [Vv[e].label, ` — `, Vv[e].sub],
                }),
                (0, k.jsxs)(M_.h1, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 1.2,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  className: `font-heading text-background text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight`,
                  children: [
                    `Nouvelle`,
                    (0, k.jsx)(`br`, {}),
                    `Collection 2026`,
                  ],
                }),
                (0, k.jsx)(M_.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1, delay: 0.7 },
                  className: `mt-10`,
                  children: (0, k.jsxs)(Ns, {
                    to: `/new`,
                    className: `group inline-flex items-center gap-3 border border-background/40 text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-background hover:text-foreground transition-all duration-500`,
                    children: [
                      `Découvrir la collection`,
                      (0, k.jsx)(tr, {
                        size: 14,
                        className: `group-hover:translate-x-1 transition-transform`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, k.jsxs)(`div`, {
              className: `absolute bottom-8 left-6 md:left-12 lg:left-16 text-background`,
              children: [
                (0, k.jsx)(`span`, {
                  className: `font-heading text-2xl font-light`,
                  children: String(e + 1).padStart(2, `0`),
                }),
                (0, k.jsxs)(`span`, {
                  className: `text-background/50 text-sm ml-2`,
                  children: [`/ `, String(Vv.length).padStart(2, `0`)],
                }),
              ],
            }),
            (0, k.jsx)(M_.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.2 },
              className: `absolute bottom-8 right-6 md:right-12 lg:right-16 text-background/60 text-[10px] uppercase tracking-luxe-sm`,
              children: `Défiler`,
            }),
          ],
        }),
        (0, k.jsxs)(`section`, {
          className: `px-6 md:px-12 lg:px-16 py-20 md:py-28`,
          children: [
            (0, k.jsx)(`div`, {
              className: `text-center mb-16`,
              children: (0, k.jsxs)(Bv, {
                children: [
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                    children: `L'Atelier`,
                  }),
                  (0, k.jsx)(`h2`, {
                    className: `font-heading text-4xl md:text-6xl font-light`,
                    children: `Nos Univers`,
                  }),
                ],
              }),
            }),
            (0, k.jsxs)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`,
              children: [
                (0, k.jsx)(Wv, {
                  to: `/women`,
                  image: Vv[0].image,
                  title: `Femme`,
                  subtitle: `L'élégance au quotidien`,
                }),
                (0, k.jsx)(Wv, {
                  to: `/men`,
                  image: Vv[1].image,
                  title: `Homme`,
                  subtitle: `Le raffinement moderne`,
                }),
              ],
            }),
          ],
        }),
        (0, k.jsxs)(`section`, {
          className: `px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4`,
              children: [
                (0, k.jsxs)(Bv, {
                  children: [
                    (0, k.jsx)(`p`, {
                      className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                      children: `Les plus convoités`,
                    }),
                    (0, k.jsx)(`h2`, {
                      className: `font-heading text-4xl md:text-6xl font-light`,
                      children: `Best-Sellers`,
                    }),
                  ],
                }),
                (0, k.jsxs)(Ns, {
                  to: `/shop`,
                  className: `group inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm hover:text-accent transition-colors`,
                  children: [
                    `Tout voir`,
                    ` `,
                    (0, k.jsx)(tr, {
                      size: 14,
                      className: `group-hover:translate-x-1 transition-transform`,
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10`,
              children: o.map((e, t) =>
                (0, k.jsx)(Rv, { product: e, index: t }, e.id),
              ),
            }),
          ],
        }),
        (0, k.jsxs)(`section`, {
          className: `relative h-[60vh] md:h-[80vh] overflow-hidden`,
          children: [
            (0, k.jsx)(`img`, {
              src: Vv[2].image,
              alt: `Collection Soirée`,
              className: `absolute inset-0 w-full h-full object-cover`,
            }),
            (0, k.jsx)(`div`, {
              className: `absolute inset-0 bg-foreground/40`,
            }),
            (0, k.jsx)(`div`, {
              className: `relative h-full flex flex-col items-center justify-center text-center text-background px-6`,
              children: (0, k.jsxs)(Bv, {
                children: [
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe text-background/70 mb-5`,
                    children: `Édition Limitée`,
                  }),
                  (0, k.jsx)(`h2`, {
                    className: `font-heading text-5xl md:text-7xl font-light mb-8 max-w-3xl leading-tight`,
                    children: `L'Art de la Soie`,
                  }),
                  (0, k.jsx)(Ns, {
                    to: `/women`,
                    className: `border border-background/50 text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-background hover:text-foreground transition-all duration-500`,
                    children: `Explorer la collection`,
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, k.jsxs)(`section`, {
          className: `px-6 md:px-12 lg:px-16 py-20 md:py-28`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4`,
              children: [
                (0, k.jsxs)(Bv, {
                  children: [
                    (0, k.jsx)(`p`, {
                      className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                      children: `Fraîchement arrivés`,
                    }),
                    (0, k.jsx)(`h2`, {
                      className: `font-heading text-4xl md:text-6xl font-light`,
                      children: `Nouveautés`,
                    }),
                  ],
                }),
                (0, k.jsxs)(Ns, {
                  to: `/new`,
                  className: `group inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm hover:text-accent transition-colors`,
                  children: [
                    `Tout voir`,
                    ` `,
                    (0, k.jsx)(tr, {
                      size: 14,
                      className: `group-hover:translate-x-1 transition-transform`,
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10`,
              children: s.map((e, t) =>
                (0, k.jsx)(Rv, { product: e, index: t }, e.id),
              ),
            }),
          ],
        }),
        (0, k.jsxs)(`section`, {
          className: `px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary`,
          children: [
            (0, k.jsx)(`div`, {
              className: `text-center mb-12`,
              children: (0, k.jsxs)(Bv, {
                children: [
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                    children: `@elegance.tn`,
                  }),
                  (0, k.jsx)(`h2`, {
                    className: `font-heading text-4xl md:text-6xl font-light`,
                    children: `Suivez la Maison`,
                  }),
                ],
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3`,
              children: Hv.map((e, t) =>
                (0, k.jsx)(
                  M_.div,
                  {
                    initial: { opacity: 0, scale: 0.95 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: !0 },
                    transition: { duration: 0.7, delay: (t % 6) * 0.08 },
                    className: `aspect-square overflow-hidden bg-background group cursor-pointer`,
                    children: (0, k.jsx)(`img`, {
                      src: e,
                      alt: `Galerie ${t + 1}`,
                      loading: `lazy`,
                      className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`,
                    }),
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        (0, k.jsx)(zv, {}),
      ],
    })
  );
}
function Wv({ to: e, image: t, title: n, subtitle: r }) {
  return (0, k.jsx)(Bv, {
    children: (0, k.jsxs)(Ns, {
      to: e,
      className: `group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]`,
      children: [
        (0, k.jsx)(`img`, {
          src: t,
          alt: n,
          className: `w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105`,
        }),
        (0, k.jsx)(`div`, {
          className: `absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent`,
        }),
        (0, k.jsxs)(`div`, {
          className: `absolute bottom-0 left-0 p-8 md:p-10`,
          children: [
            (0, k.jsx)(`p`, {
              className: `text-[11px] uppercase tracking-luxe text-background/70 mb-2`,
              children: r,
            }),
            (0, k.jsx)(`h3`, {
              className: `font-heading text-background text-4xl md:text-5xl font-light mb-4`,
              children: n,
            }),
            (0, k.jsxs)(`span`, {
              className: `inline-flex items-center gap-2 text-background text-[11px] uppercase tracking-luxe-sm border-b border-background/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors`,
              children: [`Découvrir `, (0, k.jsx)(tr, { size: 14 })],
            }),
          ],
        }),
      ],
    }),
  });
}
function Gv({ title: e, subtitle: t, eyebrow: n, products: r, loading: i }) {
  let [a, o] = (0, y.useState)(`featured`),
    [s, c] = (0, y.useState)(`all`),
    l = (0, y.useMemo)(() => {
      let e = [...r];
      return (
        s !== `all` && (e = e.filter((e) => e.category === s)),
        a === `price-asc` &&
          e.sort(
            (e, t) =>
              (e.discount_price || e.price) - (t.discount_price || t.price),
          ),
        a === `price-desc` &&
          e.sort(
            (e, t) =>
              (t.discount_price || t.price) - (e.discount_price || e.price),
          ),
        a === `new` &&
          e.sort((e, t) => new Date(t.created_date) - new Date(e.created_date)),
        e
      );
    }, [r, a, s]);
  return (0, k.jsxs)(`div`, {
    className: `pt-20`,
    children: [
      (0, k.jsx)(`section`, {
        className: `px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 text-center`,
        children: (0, k.jsxs)(Bv, {
          children: [
            n &&
              (0, k.jsx)(`p`, {
                className: `text-[11px] uppercase tracking-luxe text-accent mb-5`,
                children: n,
              }),
            (0, k.jsx)(`h1`, {
              className: `font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-5`,
              children: e,
            }),
            t &&
              (0, k.jsx)(`p`, {
                className: `text-muted-foreground max-w-xl mx-auto`,
                children: t,
              }),
          ],
        }),
      }),
      (0, k.jsx)(`div`, {
        className: `px-6 md:px-12 lg:px-16 pb-10 border-b border-border`,
        children: (0, k.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row items-center justify-between gap-4`,
          children: [
            (0, k.jsx)(`div`, {
              className: `flex gap-6 text-[11px] uppercase tracking-luxe-sm`,
              children: [`all`, `women`, `men`].map((e) =>
                (0, k.jsx)(
                  `button`,
                  {
                    onClick: () => c(e),
                    className: `pb-1 border-b transition-colors ${s === e ? `border-foreground text-foreground` : `border-transparent text-muted-foreground hover:text-foreground`}`,
                    children:
                      e === `all` ? `Tout` : e === `women` ? `Femme` : `Homme`,
                  },
                  e,
                ),
              ),
            }),
            (0, k.jsxs)(`div`, {
              className: `flex items-center gap-3 text-[11px] uppercase tracking-luxe-sm text-muted-foreground`,
              children: [
                (0, k.jsx)(`span`, { children: `Trier` }),
                (0, k.jsxs)(`select`, {
                  value: a,
                  onChange: (e) => o(e.target.value),
                  className: `bg-transparent border-b border-border pb-1 outline-none cursor-pointer text-foreground`,
                  children: [
                    (0, k.jsx)(`option`, {
                      value: `featured`,
                      children: `Sélection`,
                    }),
                    (0, k.jsx)(`option`, {
                      value: `new`,
                      children: `Nouveautés`,
                    }),
                    (0, k.jsx)(`option`, {
                      value: `price-asc`,
                      children: `Prix croissant`,
                    }),
                    (0, k.jsx)(`option`, {
                      value: `price-desc`,
                      children: `Prix décroissant`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, k.jsx)(`section`, {
        className: `px-6 md:px-12 lg:px-16 py-12 md:py-16`,
        children: i
          ? (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10`,
              children: Array.from({ length: 8 }).map((e, t) =>
                (0, k.jsx)(
                  `div`,
                  { className: `aspect-[3/4] bg-secondary animate-pulse` },
                  t,
                ),
              ),
            })
          : l.length === 0
            ? (0, k.jsx)(`p`, {
                className: `text-center text-muted-foreground py-20`,
                children: `Aucun produit pour le moment.`,
              })
            : (0, k.jsx)(`div`, {
                className: `grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-16`,
                children: l.map((e, t) =>
                  (0, k.jsx)(Rv, { product: e, index: t }, e.id),
                ),
              }),
      }),
    ],
  });
}
function Kv() {
  let { products: e, loading: t } = Lv({}, 100);
  return (0, k.jsx)(Gv, {
    eyebrow: `La Boutique`,
    title: `Toute la Collection`,
    subtitle: `Prêt-à-porter premium pour femme et homme, conçu dans l'atelier ÉLÉGANCE.`,
    products: e,
    loading: t,
  });
}
function qv() {
  let { products: e, loading: t } = Lv({ category: `women` }, 100);
  return (0, k.jsx)(Gv, {
    eyebrow: `Femme`,
    title: `L'Élégance Féminine`,
    subtitle: `Pièces intemporelles, drapées avec précision pour la femme moderne.`,
    products: e,
    loading: t,
  });
}
function Jv() {
  let { products: e, loading: t } = Lv({ category: `men` }, 100);
  return (0, k.jsx)(Gv, {
    eyebrow: `Homme`,
    title: `Le Raffinement Masculin`,
    subtitle: `L'art du vestiaire masculin, entre tradition tailleur et lignes contemporaines.`,
    products: e,
    loading: t,
  });
}
function Yv() {
  let { products: e, loading: t } = Lv({ is_new: !0 }, 100);
  return (0, k.jsx)(Gv, {
    eyebrow: `Saison 2026`,
    title: `Nouvelle Collection`,
    subtitle: `Les pièces les plus récentes de notre atelier — éditions limitées et matières d'exception.`,
    products: e,
    loading: t,
  });
}
var Xv = `21626653690`,
  Zv = `+216 26653690`;
function Qv(e) {
  return `https://wa.me/${Xv}?text=${encodeURIComponent(e)}`;
}
function $v() {
  let { id: e } = Xo(),
    t = Ko(),
    { addItem: n } = Us(),
    [r, i] = (0, y.useState)(null),
    [a, o] = (0, y.useState)(!0),
    [s, c] = (0, y.useState)(0),
    [l, u] = (0, y.useState)(null),
    [d, f] = (0, y.useState)(null),
    [p, m] = (0, y.useState)(1),
    [h, g] = (0, y.useState)(!1);
  (0, y.useEffect)(() => {
    let t = !0;
    (o(!0), c(0), u(null), f(null), m(1));
    let n = setTimeout(() => {
      t && (i(Iv(e)), o(!1));
    }, 150);
    return () => {
      ((t = !1), clearTimeout(n));
    };
  }, [e]);
  let { products: _ } = Lv(r ? { category: r.category } : {}, 5),
    v = _.filter((t) => t.id !== e).slice(0, 4);
  if (a)
    return (0, k.jsx)(`div`, {
      className: `pt-32 px-6 md:px-12 lg:px-16`,
      children: (0, k.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-12`,
        children: [
          (0, k.jsx)(`div`, {
            className: `aspect-[3/4] bg-secondary animate-pulse`,
          }),
          (0, k.jsxs)(`div`, {
            className: `space-y-4 pt-8`,
            children: [
              (0, k.jsx)(`div`, {
                className: `h-10 bg-secondary animate-pulse`,
              }),
              (0, k.jsx)(`div`, {
                className: `h-6 w-1/3 bg-secondary animate-pulse`,
              }),
              (0, k.jsx)(`div`, {
                className: `h-32 bg-secondary animate-pulse`,
              }),
            ],
          }),
        ],
      }),
    });
  if (!r)
    return (0, k.jsxs)(`div`, {
      className: `pt-40 px-6 text-center`,
      children: [
        (0, k.jsx)(`p`, {
          className: `text-muted-foreground mb-6`,
          children: `Produit introuvable.`,
        }),
        (0, k.jsx)(Ns, {
          to: `/shop`,
          className: `text-[11px] uppercase tracking-luxe-sm border-b border-foreground pb-1`,
          children: `Retour à la boutique`,
        }),
      ],
    });
  let b = r.discount_price && r.discount_price < r.price,
    x = r.discount_price || r.price;
  return (0, k.jsxs)(`div`, {
    className: `pt-20`,
    children: [
      (0, k.jsx)(`div`, {
        className: `px-6 md:px-12 lg:px-16 py-6`,
        children: (0, k.jsxs)(`button`, {
          onClick: () => t(-1),
          className: `inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm text-muted-foreground hover:text-foreground transition-colors`,
          children: [(0, k.jsx)(er, { size: 14 }), ` Retour`],
        }),
      }),
      (0, k.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-12 lg:px-16 pb-20`,
        children: [
          (0, k.jsxs)(`div`, {
            className: `lg:sticky lg:top-28 lg:self-start`,
            children: [
              (0, k.jsx)(`div`, {
                className: `aspect-[3/4] overflow-hidden bg-secondary mb-4`,
                children: (0, k.jsx)(
                  M_.img,
                  {
                    initial: { opacity: 0.4 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5 },
                    src: r.images?.[s],
                    alt: r.name,
                    className: `w-full h-full object-cover`,
                  },
                  s,
                ),
              }),
              r.images?.length > 1 &&
                (0, k.jsx)(`div`, {
                  className: `flex gap-3`,
                  children: r.images.map((e, t) =>
                    (0, k.jsx)(
                      `button`,
                      {
                        onClick: () => c(t),
                        className: `w-20 h-24 overflow-hidden border transition-all ${s === t ? `border-foreground` : `border-transparent opacity-60 hover:opacity-100`}`,
                        children: (0, k.jsx)(`img`, {
                          src: e,
                          alt: `${r.name} ${t + 1}`,
                          className: `w-full h-full object-cover`,
                        }),
                      },
                      t,
                    ),
                  ),
                }),
            ],
          }),
          (0, k.jsx)(`div`, {
            className: `lg:pt-4`,
            children: (0, k.jsxs)(Bv, {
              children: [
                r.subcategory &&
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                    children: r.subcategory,
                  }),
                (0, k.jsx)(`h1`, {
                  className: `font-heading text-4xl md:text-5xl font-light mb-6 leading-tight`,
                  children: r.name,
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex items-baseline gap-3 mb-8`,
                  children: [
                    (0, k.jsxs)(`span`, {
                      className: `font-heading text-3xl font-light`,
                      children: [x.toLocaleString(`fr-TN`), ` TND`],
                    }),
                    b &&
                      (0, k.jsxs)(`span`, {
                        className: `text-lg text-muted-foreground line-through`,
                        children: [r.price.toLocaleString(`fr-TN`), ` TND`],
                      }),
                  ],
                }),
                r.description &&
                  (0, k.jsx)(`p`, {
                    className: `text-muted-foreground leading-relaxed mb-8 max-w-md`,
                    children: r.description,
                  }),
                r.material &&
                  (0, k.jsxs)(`p`, {
                    className: `text-sm text-muted-foreground mb-8`,
                    children: [
                      (0, k.jsx)(`span`, {
                        className: `text-foreground`,
                        children: `Matière:`,
                      }),
                      ` `,
                      r.material,
                    ],
                  }),
                r.sizes?.length > 0 &&
                  (0, k.jsxs)(`div`, {
                    className: `mb-8`,
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `text-[11px] uppercase tracking-luxe-sm mb-4`,
                        children: `Taille`,
                      }),
                      (0, k.jsx)(`div`, {
                        className: `flex flex-wrap gap-3`,
                        children: r.sizes.map((e) =>
                          (0, k.jsx)(
                            `button`,
                            {
                              onClick: () => u(e),
                              className: `min-w-[48px] h-12 px-4 border text-sm transition-all ${l === e ? `border-foreground bg-foreground text-background` : `border-border hover:border-foreground`}`,
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                r.colors?.length > 0 &&
                  (0, k.jsxs)(`div`, {
                    className: `mb-8`,
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `text-[11px] uppercase tracking-luxe-sm mb-4`,
                        children: `Couleur`,
                      }),
                      (0, k.jsx)(`div`, {
                        className: `flex flex-wrap gap-3`,
                        children: r.colors.map((e) =>
                          (0, k.jsx)(
                            `button`,
                            {
                              onClick: () => f(e),
                              className: `px-4 h-10 border text-sm transition-all ${d === e ? `border-foreground bg-secondary` : `border-border hover:border-foreground`}`,
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                (0, k.jsxs)(`div`, {
                  className: `mb-8`,
                  children: [
                    (0, k.jsx)(`p`, {
                      className: `text-[11px] uppercase tracking-luxe-sm mb-4`,
                      children: `Quantité`,
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `inline-flex items-center border border-border`,
                      children: [
                        (0, k.jsx)(`button`, {
                          onClick: () => m((e) => Math.max(1, e - 1)),
                          className: `w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors`,
                          "aria-label": `Diminuer`,
                          children: (0, k.jsx)(dr, { size: 14 }),
                        }),
                        (0, k.jsx)(`span`, {
                          className: `w-12 text-center text-sm`,
                          children: p,
                        }),
                        (0, k.jsx)(`button`, {
                          onClick: () => m((e) => e + 1),
                          className: `w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors`,
                          "aria-label": `Augmenter`,
                          children: (0, k.jsx)(pr, { size: 14 }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)(`div`, {
                  className: `flex flex-col gap-3 max-w-md`,
                  children: [
                    (0, k.jsx)(`button`, {
                      onClick: () => {
                        (n(r, { size: l, color: d, quantity: p }),
                          g(!0),
                          setTimeout(() => g(!1), 2500));
                      },
                      className: `h-14 bg-foreground text-background text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500 flex items-center justify-center gap-2`,
                      children: h
                        ? (0, k.jsxs)(k.Fragment, {
                            children: [
                              (0, k.jsx)(nr, { size: 16 }),
                              ` Ajouté au panier`,
                            ],
                          })
                        : `Ajouter au Panier`,
                    }),
                    (0, k.jsxs)(`button`, {
                      onClick: () => {
                        let e = `Bonjour ÉLÉGANCE, je souhaite commander :\n\n${r.name}\nTaille: ${l}\nCouleur: ${d}\nQuantité: ${p}\nPrix: ${x.toLocaleString(`fr-TN`)} TND`;
                        window.open(Qv(e), `_blank`);
                      },
                      className: `h-14 border border-foreground text-foreground text-[11px] uppercase tracking-luxe-sm hover:bg-foreground hover:text-background transition-colors duration-500 flex items-center justify-center gap-2`,
                      children: [
                        (0, k.jsx)(ur, { size: 16 }),
                        ` Commander via WhatsApp`,
                      ],
                    }),
                    (0, k.jsxs)(`p`, {
                      className: `text-xs text-muted-foreground text-center mt-2`,
                      children: [`Service concierge · `, Zv],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      v.length > 0 &&
        (0, k.jsxs)(`section`, {
          className: `px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary`,
          children: [
            (0, k.jsx)(`div`, {
              className: `text-center mb-12`,
              children: (0, k.jsxs)(Bv, {
                children: [
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                    children: `Vous aimerez aussi`,
                  }),
                  (0, k.jsx)(`h2`, {
                    className: `font-heading text-4xl md:text-5xl font-light`,
                    children: `Pièces Associées`,
                  }),
                ],
              }),
            }),
            (0, k.jsx)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10`,
              children: v.map((e, t) =>
                (0, k.jsx)(Rv, { product: e, index: t }, e.id),
              ),
            }),
          ],
        }),
    ],
  });
}
var ey = 12;
function ty() {
  let {
      items: e,
      removeItem: t,
      updateQuantity: n,
      subtotal: r,
      itemCount: i,
    } = Us(),
    a = r + (e.length > 0 ? ey : 0);
  return e.length === 0
    ? (0, k.jsxs)(`div`, {
        className: `pt-32 pb-20 px-6 text-center min-h-[70vh] flex flex-col items-center justify-center`,
        children: [
          (0, k.jsx)(hr, {
            size: 40,
            strokeWidth: 1,
            className: `text-muted-foreground mb-6`,
          }),
          (0, k.jsx)(`h1`, {
            className: `font-heading text-4xl md:text-5xl font-light mb-4`,
            children: `Votre panier est vide`,
          }),
          (0, k.jsx)(`p`, {
            className: `text-muted-foreground mb-10 max-w-sm`,
            children: `Découvrez nos collections et laissez-vous tenter par l'élégance.`,
          }),
          (0, k.jsxs)(Ns, {
            to: `/shop`,
            className: `inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors`,
            children: [`Découvrir la boutique `, (0, k.jsx)(tr, { size: 14 })],
          }),
        ],
      })
    : (0, k.jsxs)(`div`, {
        className: `pt-28 pb-20 px-6 md:px-12 lg:px-16`,
        children: [
          (0, k.jsx)(`div`, {
            className: `text-center mb-12`,
            children: (0, k.jsxs)(Bv, {
              children: [
                (0, k.jsx)(`p`, {
                  className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                  children: `Votre sélection`,
                }),
                (0, k.jsx)(`h1`, {
                  className: `font-heading text-5xl md:text-6xl font-light`,
                  children: `Panier`,
                }),
                (0, k.jsxs)(`p`, {
                  className: `text-muted-foreground mt-3`,
                  children: [i, ` article`, i > 1 ? `s` : ``],
                }),
              ],
            }),
          }),
          (0, k.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto`,
            children: [
              (0, k.jsxs)(`div`, {
                className: `lg:col-span-2 space-y-8`,
                children: [
                  e.map((e) =>
                    (0, k.jsxs)(
                      `div`,
                      {
                        className: `flex gap-5 pb-8 border-b border-border`,
                        children: [
                          (0, k.jsx)(Ns, {
                            to: `/product/${e.product_id}`,
                            className: `shrink-0`,
                            children: (0, k.jsx)(`div`, {
                              className: `w-28 h-36 md:w-32 md:h-40 bg-secondary overflow-hidden`,
                              children: (0, k.jsx)(`img`, {
                                src: e.image,
                                alt: e.name,
                                className: `w-full h-full object-cover`,
                              }),
                            }),
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `flex-1 flex flex-col`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                className: `flex justify-between gap-4`,
                                children: [
                                  (0, k.jsxs)(`div`, {
                                    children: [
                                      (0, k.jsx)(Ns, {
                                        to: `/product/${e.product_id}`,
                                        className: `font-heading text-xl md:text-2xl font-light hover:text-accent transition-colors`,
                                        children: e.name,
                                      }),
                                      (0, k.jsxs)(`p`, {
                                        className: `text-xs text-muted-foreground mt-1 space-x-2`,
                                        children: [
                                          e.size &&
                                            (0, k.jsxs)(`span`, {
                                              children: [`Taille: `, e.size],
                                            }),
                                          e.color &&
                                            (0, k.jsxs)(`span`, {
                                              children: [
                                                `· Couleur: `,
                                                e.color,
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, k.jsx)(`button`, {
                                    onClick: () => t(e.key),
                                    className: `text-muted-foreground hover:text-foreground transition-colors`,
                                    "aria-label": `Retirer`,
                                    children: (0, k.jsx)(gr, {
                                      size: 18,
                                      strokeWidth: 1.25,
                                    }),
                                  }),
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                className: `flex items-end justify-between mt-auto pt-4`,
                                children: [
                                  (0, k.jsxs)(`div`, {
                                    className: `inline-flex items-center border border-border`,
                                    children: [
                                      (0, k.jsx)(`button`, {
                                        onClick: () => n(e.key, e.quantity - 1),
                                        className: `w-9 h-9 flex items-center justify-center hover:bg-secondary transition-colors`,
                                        children: (0, k.jsx)(dr, { size: 12 }),
                                      }),
                                      (0, k.jsx)(`span`, {
                                        className: `w-9 text-center text-sm`,
                                        children: e.quantity,
                                      }),
                                      (0, k.jsx)(`button`, {
                                        onClick: () => n(e.key, e.quantity + 1),
                                        className: `w-9 h-9 flex items-center justify-center hover:bg-secondary transition-colors`,
                                        children: (0, k.jsx)(pr, { size: 12 }),
                                      }),
                                    ],
                                  }),
                                  (0, k.jsxs)(`span`, {
                                    className: `font-medium`,
                                    children: [
                                      (e.price * e.quantity).toLocaleString(
                                        `fr-TN`,
                                      ),
                                      ` TND`,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.key,
                    ),
                  ),
                  (0, k.jsx)(Ns, {
                    to: `/shop`,
                    className: `inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm text-muted-foreground hover:text-foreground transition-colors`,
                    children: `← Continuer mes achats`,
                  }),
                ],
              }),
              (0, k.jsx)(`div`, {
                className: `lg:col-span-1`,
                children: (0, k.jsxs)(`div`, {
                  className: `bg-secondary p-8 sticky top-28`,
                  children: [
                    (0, k.jsx)(`h2`, {
                      className: `font-heading text-2xl font-light mb-6`,
                      children: `Récapitulatif`,
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `space-y-3 text-sm pb-6 border-b border-border`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `flex justify-between`,
                          children: [
                            (0, k.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `Sous-total`,
                            }),
                            (0, k.jsxs)(`span`, {
                              children: [r.toLocaleString(`fr-TN`), ` TND`],
                            }),
                          ],
                        }),
                        (0, k.jsxs)(`div`, {
                          className: `flex justify-between`,
                          children: [
                            (0, k.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `Livraison`,
                            }),
                            (0, k.jsxs)(`span`, { children: [ey, ` TND`] }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `flex justify-between items-baseline py-6`,
                      children: [
                        (0, k.jsx)(`span`, {
                          className: `font-heading text-xl font-light`,
                          children: `Total`,
                        }),
                        (0, k.jsxs)(`span`, {
                          className: `font-heading text-2xl font-light`,
                          children: [a.toLocaleString(`fr-TN`), ` TND`],
                        }),
                      ],
                    }),
                    (0, k.jsx)(Ns, {
                      to: `/checkout`,
                      className: `block w-full text-center bg-foreground text-background py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500`,
                      children: `Passer la commande`,
                    }),
                    (0, k.jsx)(`p`, {
                      className: `text-xs text-muted-foreground text-center mt-4`,
                      children: `Paiement à la livraison disponible`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
}
var ny = 12,
  ry = [
    `Tunis`,
    `Ariana`,
    `Ben Arous`,
    `Manouba`,
    `Nabeul`,
    `Bizerte`,
    `Sousse`,
    `Monastir`,
    `Mahdia`,
    `Sfax`,
    `Kairouan`,
    `Kasserine`,
    `Sidi Bouzid`,
    `Gabès`,
    `Medenine`,
    `Tataouine`,
    `Gafsa`,
    `Tozeur`,
    `Kebili`,
    `Jendouba`,
    `Le Kef`,
    `Siliana`,
    `Beja`,
    `Zaghouan`,
  ];
function iy() {
  let { items: e, subtotal: t, clearCart: n } = Us();
  Ko();
  let [r, i] = (0, y.useState)(`info`),
    [a, o] = (0, y.useState)(!1),
    [s, c] = (0, y.useState)(null),
    [l, u] = (0, y.useState)({
      customer_name: ``,
      customer_email: ``,
      customer_phone: ``,
      shipping_address: ``,
      city: `Tunis`,
      postal_code: ``,
      notes: ``,
      payment_method: `cod`,
    }),
    d = t + (e.length > 0 ? ny : 0),
    f = (e, t) => u((n) => ({ ...n, [e]: t }));
  return r === `done`
    ? (0, k.jsx)(`div`, {
        className: `pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center`,
        children: (0, k.jsxs)(Bv, {
          className: `text-center max-w-md`,
          children: [
            (0, k.jsx)(`div`, {
              className: `w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8`,
              children: (0, k.jsx)(nr, {
                size: 28,
                className: `text-accent`,
                strokeWidth: 1.5,
              }),
            }),
            (0, k.jsx)(`p`, {
              className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
              children: `Commande confirmée`,
            }),
            (0, k.jsx)(`h1`, {
              className: `font-heading text-4xl md:text-5xl font-light mb-5`,
              children: `Merci pour votre confiance`,
            }),
            (0, k.jsxs)(`p`, {
              className: `text-muted-foreground mb-2`,
              children: [
                `Votre commande`,
                ` `,
                (0, k.jsxs)(`span`, {
                  className: `text-foreground font-medium`,
                  children: [`#`, s?.slice(-8).toUpperCase()],
                }),
                ` `,
                `a bien été reçue.`,
              ],
            }),
            (0, k.jsx)(`p`, {
              className: `text-muted-foreground mb-10`,
              children: `Notre équipe vous contactera sous peu pour confirmer la livraison.`,
            }),
            (0, k.jsx)(Ns, {
              to: `/`,
              className: `inline-flex bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors`,
              children: `Retour à l'accueil`,
            }),
          ],
        }),
      })
    : e.length === 0
      ? (0, k.jsxs)(`div`, {
          className: `pt-32 pb-20 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center`,
          children: [
            (0, k.jsx)(`h1`, {
              className: `font-heading text-4xl font-light mb-4`,
              children: `Votre panier est vide`,
            }),
            (0, k.jsx)(Ns, {
              to: `/shop`,
              className: `text-[11px] uppercase tracking-luxe-sm border-b border-foreground pb-1`,
              children: `Découvrir la boutique`,
            }),
          ],
        })
      : (0, k.jsxs)(`div`, {
          className: `pt-28 pb-20 px-6 md:px-12 lg:px-16 min-h-screen bg-secondary/30`,
          children: [
            (0, k.jsx)(`div`, {
              className: `fixed top-0 left-0 right-0 h-0.5 bg-border z-40`,
              children: (0, k.jsx)(`div`, {
                className: `h-full bg-accent transition-all duration-700`,
                style: { width: `100%` },
              }),
            }),
            (0, k.jsxs)(`div`, {
              className: `max-w-5xl mx-auto`,
              children: [
                (0, k.jsx)(`div`, {
                  className: `text-center mb-12`,
                  children: (0, k.jsxs)(Bv, {
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                        children: `Finalisation`,
                      }),
                      (0, k.jsx)(`h1`, {
                        className: `font-heading text-4xl md:text-6xl font-light`,
                        children: `Commande`,
                      }),
                    ],
                  }),
                }),
                (0, k.jsxs)(`form`, {
                  onSubmit: async (e) => {
                    (e.preventDefault(), o(!0));
                    try {
                      let e =
                        typeof crypto < `u` && crypto.randomUUID
                          ? crypto.randomUUID()
                          : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
                      (c(e), i(`done`), n());
                    } catch (e) {
                      console.error(e);
                    } finally {
                      o(!1);
                    }
                  },
                  className: `grid grid-cols-1 lg:grid-cols-5 gap-8`,
                  children: [
                    (0, k.jsxs)(`div`, {
                      className: `lg:col-span-3 space-y-6`,
                      children: [
                        (0, k.jsxs)(`div`, {
                          className: `bg-background p-6 md:p-8`,
                          children: [
                            (0, k.jsx)(`h2`, {
                              className: `font-heading text-2xl font-light mb-6`,
                              children: `Informations de livraison`,
                            }),
                            (0, k.jsxs)(`div`, {
                              className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                              children: [
                                (0, k.jsx)(ay, {
                                  label: `Nom complet`,
                                  required: !0,
                                  value: l.customer_name,
                                  onChange: (e) => f(`customer_name`, e),
                                }),
                                (0, k.jsx)(ay, {
                                  label: `Téléphone`,
                                  required: !0,
                                  type: `tel`,
                                  value: l.customer_phone,
                                  onChange: (e) => f(`customer_phone`, e),
                                }),
                                (0, k.jsx)(ay, {
                                  label: `E-mail`,
                                  type: `email`,
                                  value: l.customer_email,
                                  onChange: (e) => f(`customer_email`, e),
                                }),
                                (0, k.jsx)(ay, {
                                  label: `Code postal`,
                                  value: l.postal_code,
                                  onChange: (e) => f(`postal_code`, e),
                                }),
                                (0, k.jsx)(`div`, {
                                  className: `md:col-span-2`,
                                  children: (0, k.jsx)(ay, {
                                    label: `Adresse`,
                                    required: !0,
                                    value: l.shipping_address,
                                    onChange: (e) => f(`shipping_address`, e),
                                  }),
                                }),
                                (0, k.jsxs)(`div`, {
                                  className: `md:col-span-2`,
                                  children: [
                                    (0, k.jsx)(`label`, {
                                      className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block`,
                                      children: `Ville`,
                                    }),
                                    (0, k.jsx)(`select`, {
                                      value: l.city,
                                      onChange: (e) =>
                                        f(`city`, e.target.value),
                                      className: `w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors`,
                                      children: ry.map((e) =>
                                        (0, k.jsx)(
                                          `option`,
                                          { value: e, children: e },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, k.jsxs)(`div`, {
                                  className: `md:col-span-2`,
                                  children: [
                                    (0, k.jsx)(`label`, {
                                      className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block`,
                                      children: `Notes (optionnel)`,
                                    }),
                                    (0, k.jsx)(`textarea`, {
                                      value: l.notes,
                                      onChange: (e) =>
                                        f(`notes`, e.target.value),
                                      rows: 2,
                                      className: `w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors resize-none`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsxs)(`div`, {
                          className: `bg-background p-6 md:p-8`,
                          children: [
                            (0, k.jsx)(`h2`, {
                              className: `font-heading text-2xl font-light mb-6`,
                              children: `Mode de paiement`,
                            }),
                            (0, k.jsxs)(`div`, {
                              className: `space-y-3`,
                              children: [
                                (0, k.jsx)(oy, {
                                  value: `cod`,
                                  current: l.payment_method,
                                  onSelect: (e) => f(`payment_method`, e),
                                  title: `Paiement à la livraison`,
                                  desc: `Payez en espèces à la réception de votre commande.`,
                                }),
                                (0, k.jsx)(oy, {
                                  value: `whatsapp`,
                                  current: l.payment_method,
                                  onSelect: (e) => f(`payment_method`, e),
                                  title: `Commande via WhatsApp`,
                                  desc: `Finalisez votre commande avec notre concierge.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsx)(`div`, {
                      className: `lg:col-span-2`,
                      children: (0, k.jsxs)(`div`, {
                        className: `bg-background p-6 md:p-8 sticky top-28`,
                        children: [
                          (0, k.jsx)(`h2`, {
                            className: `font-heading text-2xl font-light mb-6`,
                            children: `Votre commande`,
                          }),
                          (0, k.jsx)(`div`, {
                            className: `space-y-4 pb-6 border-b border-border max-h-64 overflow-y-auto`,
                            children: e.map((e) =>
                              (0, k.jsxs)(
                                `div`,
                                {
                                  className: `flex gap-3`,
                                  children: [
                                    (0, k.jsx)(`div`, {
                                      className: `w-14 h-18 bg-secondary shrink-0 overflow-hidden`,
                                      children: (0, k.jsx)(`img`, {
                                        src: e.image,
                                        alt: e.name,
                                        className: `w-full h-full object-cover`,
                                      }),
                                    }),
                                    (0, k.jsxs)(`div`, {
                                      className: `flex-1 text-sm`,
                                      children: [
                                        (0, k.jsx)(`p`, {
                                          className: `font-heading text-base font-light leading-tight`,
                                          children: e.name,
                                        }),
                                        (0, k.jsxs)(`p`, {
                                          className: `text-xs text-muted-foreground`,
                                          children: [
                                            e.size,
                                            ` · `,
                                            e.color,
                                            ` · x`,
                                            e.quantity,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)(`span`, {
                                      className: `text-sm`,
                                      children: [
                                        (e.price * e.quantity).toLocaleString(
                                          `fr-TN`,
                                        ),
                                        ` TND`,
                                      ],
                                    }),
                                  ],
                                },
                                e.key,
                              ),
                            ),
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `space-y-3 py-6 border-b border-border text-sm`,
                            children: [
                              (0, k.jsxs)(`div`, {
                                className: `flex justify-between`,
                                children: [
                                  (0, k.jsx)(`span`, {
                                    className: `text-muted-foreground`,
                                    children: `Sous-total`,
                                  }),
                                  (0, k.jsxs)(`span`, {
                                    children: [
                                      t.toLocaleString(`fr-TN`),
                                      ` TND`,
                                    ],
                                  }),
                                ],
                              }),
                              (0, k.jsxs)(`div`, {
                                className: `flex justify-between`,
                                children: [
                                  (0, k.jsx)(`span`, {
                                    className: `text-muted-foreground`,
                                    children: `Livraison`,
                                  }),
                                  (0, k.jsxs)(`span`, {
                                    children: [ny, ` TND`],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsxs)(`div`, {
                            className: `flex justify-between items-baseline py-6`,
                            children: [
                              (0, k.jsx)(`span`, {
                                className: `font-heading text-xl font-light`,
                                children: `Total`,
                              }),
                              (0, k.jsxs)(`span`, {
                                className: `font-heading text-2xl font-light`,
                                children: [d.toLocaleString(`fr-TN`), ` TND`],
                              }),
                            ],
                          }),
                          l.payment_method === `whatsapp`
                            ? (0, k.jsx)(`button`, {
                                type: `button`,
                                onClick: () => {
                                  let t = `Bonjour ÉLÉGANCE, je souhaite commander :\n\n${e.map(
                                    (e) =>
                                      `• ${e.name} (${e.size}, ${e.color}) x${e.quantity} — ${(e.price * e.quantity).toLocaleString(`fr-TN`)} TND`,
                                  ).join(`
`)}\n\nTotal: ${d.toLocaleString(`fr-TN`)} TND\n\nNom: ${l.customer_name}\nTél: ${l.customer_phone}\nAdresse: ${l.shipping_address}, ${l.city}`;
                                  window.open(Qv(t), `_blank`);
                                },
                                className: `w-full h-14 border border-foreground text-foreground text-[11px] uppercase tracking-luxe-sm hover:bg-foreground hover:text-background transition-colors duration-500`,
                                children: `Commander via WhatsApp`,
                              })
                            : (0, k.jsx)(`button`, {
                                type: `submit`,
                                disabled: a,
                                className: `w-full h-14 bg-foreground text-background text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500 disabled:opacity-50 flex items-center justify-center gap-2`,
                                children: a
                                  ? `Traitement...`
                                  : `Confirmer la commande`,
                              }),
                          (0, k.jsxs)(`p`, {
                            className: `text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1.5`,
                            children: [
                              (0, k.jsx)(or, { size: 12 }),
                              ` Paiement sécurisé · Livraison 2-4 jours`,
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
}
function ay({
  label: e,
  value: t,
  onChange: n,
  type: r = `text`,
  required: i,
}) {
  return (0, k.jsxs)(`div`, {
    children: [
      (0, k.jsxs)(`label`, {
        className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block`,
        children: [
          e,
          i && (0, k.jsx)(`span`, { className: `text-accent`, children: ` *` }),
        ],
      }),
      (0, k.jsx)(`input`, {
        type: r,
        required: i,
        value: t,
        onChange: (e) => n(e.target.value),
        className: `w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors`,
      }),
    ],
  });
}
function oy({ value: e, current: t, onSelect: n, title: r, desc: i }) {
  let a = t === e;
  return (0, k.jsx)(`button`, {
    type: `button`,
    onClick: () => n(e),
    className: `w-full text-left p-4 border transition-all ${a ? `border-foreground bg-secondary/40` : `border-border hover:border-foreground/50`}`,
    children: (0, k.jsxs)(`div`, {
      className: `flex items-start gap-3`,
      children: [
        (0, k.jsx)(`div`, {
          className: `w-4 h-4 rounded-full border mt-1 shrink-0 flex items-center justify-center ${a ? `border-foreground` : `border-border`}`,
          children:
            a &&
            (0, k.jsx)(`div`, {
              className: `w-2 h-2 rounded-full bg-foreground`,
            }),
        }),
        (0, k.jsxs)(`div`, {
          children: [
            (0, k.jsx)(`p`, { className: `font-medium text-sm`, children: r }),
            (0, k.jsx)(`p`, {
              className: `text-xs text-muted-foreground mt-1`,
              children: i,
            }),
          ],
        }),
      ],
    }),
  });
}
var sy = `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80`,
  cy = `https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80`,
  ly = [
    {
      num: `01`,
      title: `Matières d'Exception`,
      text: `Laine, soie, lin et cachemire sélectionnés auprès des plus belles maisons textiles.`,
    },
    {
      num: `02`,
      title: `Savoir-Faire Tunisien`,
      text: `Chaque pièce est confectionnée dans notre atelier à Tunis, par des mains expertes.`,
    },
    {
      num: `03`,
      title: `Édition Limitée`,
      text: `Des séries courtes pour préserver l'unicité et réduire notre empreinte.`,
    },
  ];
function uy() {
  return (0, k.jsxs)(`div`, {
    className: `pt-20`,
    children: [
      (0, k.jsxs)(`section`, {
        className: `relative h-[60vh] md:h-[70vh] overflow-hidden`,
        children: [
          (0, k.jsx)(`img`, {
            src: sy,
            alt: `ÉLÉGANCE`,
            className: `absolute inset-0 w-full h-full object-cover`,
          }),
          (0, k.jsx)(`div`, { className: `absolute inset-0 bg-foreground/40` }),
          (0, k.jsx)(`div`, {
            className: `relative h-full flex flex-col items-center justify-center text-center text-background px-6`,
            children: (0, k.jsxs)(Bv, {
              children: [
                (0, k.jsx)(`p`, {
                  className: `text-[11px] uppercase tracking-luxe text-background/70 mb-5`,
                  children: `La Maison`,
                }),
                (0, k.jsxs)(`h1`, {
                  className: `font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]`,
                  children: [`L'Art de`, (0, k.jsx)(`br`, {}), `l'Élégance`],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, k.jsx)(`section`, {
        className: `px-6 md:px-12 lg:px-16 py-20 md:py-32`,
        children: (0, k.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto`,
          children: [
            (0, k.jsx)(Bv, {
              children: (0, k.jsx)(`div`, {
                className: `aspect-[4/5] overflow-hidden bg-secondary`,
                children: (0, k.jsx)(`img`, {
                  src: cy,
                  alt: `Atelier`,
                  className: `w-full h-full object-cover`,
                }),
              }),
            }),
            (0, k.jsx)(Bv, {
              delay: 0.1,
              children: (0, k.jsxs)(`div`, {
                children: [
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe text-accent mb-5`,
                    children: `Notre Histoire`,
                  }),
                  (0, k.jsxs)(`h2`, {
                    className: `font-heading text-4xl md:text-5xl font-light mb-6 leading-tight`,
                    children: [
                      `Née à Tunis,`,
                      (0, k.jsx)(`br`, {}),
                      `conçue pour le monde`,
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `space-y-4 text-muted-foreground leading-relaxed`,
                    children: [
                      (0, k.jsx)(`p`, {
                        children: `ÉLÉGANCE est une maison de textile fondée à Tunis, au carrefour de la Méditerranée. Nous puisons dans l'héritage artisanal tunisien pour créer un prêt-à-porter premium qui parle un langage universel.`,
                      }),
                      (0, k.jsx)(`p`, {
                        children: `Chaque pièce est pensée comme une architecture : des lignes épurées, des matières nobles, et une coupe précise qui épouse le corps sans le contraindre. Nous croyons que le luxe véritable réside dans la simplicité et la justesse.`,
                      }),
                      (0, k.jsx)(`p`, {
                        children: `De la sélection du fil à la dernière couture, tout est fait dans notre atelier avec une obsession : la perfection silencieuse.`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      (0, k.jsxs)(`section`, {
        className: `px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary`,
        children: [
          (0, k.jsx)(`div`, {
            className: `text-center mb-16`,
            children: (0, k.jsxs)(Bv, {
              children: [
                (0, k.jsx)(`p`, {
                  className: `text-[11px] uppercase tracking-luxe text-accent mb-4`,
                  children: `Nos Principes`,
                }),
                (0, k.jsx)(`h2`, {
                  className: `font-heading text-4xl md:text-6xl font-light`,
                  children: `La Philosophie de la Maison`,
                }),
              ],
            }),
          }),
          (0, k.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto`,
            children: ly.map((e, t) =>
              (0, k.jsx)(
                Bv,
                {
                  delay: t * 0.1,
                  children: (0, k.jsxs)(`div`, {
                    className: `text-center`,
                    children: [
                      (0, k.jsx)(`p`, {
                        className: `font-heading text-5xl font-light text-accent/40 mb-4`,
                        children: e.num,
                      }),
                      (0, k.jsx)(`h3`, {
                        className: `font-heading text-2xl font-light mb-3`,
                        children: e.title,
                      }),
                      (0, k.jsx)(`p`, {
                        className: `text-sm text-muted-foreground leading-relaxed`,
                        children: e.text,
                      }),
                    ],
                  }),
                },
                e.num,
              ),
            ),
          }),
        ],
      }),
      (0, k.jsx)(`section`, {
        className: `px-6 md:px-12 lg:px-16 py-20 md:py-28`,
        children: (0, k.jsx)(`div`, {
          className: `grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto`,
          children: [
            { n: `2018`, l: `Année de fondation` },
            { n: `12K+`, l: `Clients fidèles` },
            { n: `24`, l: `Gouvernorats livrés` },
            { n: `100%`, l: `Fait en Tunisie` },
          ].map((e, t) =>
            (0, k.jsxs)(
              Bv,
              {
                delay: t * 0.08,
                children: [
                  (0, k.jsx)(`p`, {
                    className: `font-heading text-4xl md:text-5xl font-light mb-2`,
                    children: e.n,
                  }),
                  (0, k.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground`,
                    children: e.l,
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      }),
      (0, k.jsx)(zv, {}),
    ],
  });
}
function dy() {
  let [e, t] = (0, y.useState)({ name: ``, email: ``, message: `` }),
    [n, r] = (0, y.useState)(!1);
  return (0, k.jsxs)(`div`, {
    className: `pt-20`,
    children: [
      (0, k.jsx)(`section`, {
        className: `px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 text-center`,
        children: (0, k.jsxs)(Bv, {
          children: [
            (0, k.jsx)(`p`, {
              className: `text-[11px] uppercase tracking-luxe text-accent mb-5`,
              children: `Restons en contact`,
            }),
            (0, k.jsx)(`h1`, {
              className: `font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-5`,
              children: `Contactez la Maison`,
            }),
            (0, k.jsx)(`p`, {
              className: `text-muted-foreground max-w-lg mx-auto`,
              children: `Une question, une demande sur-mesure, un conseil de styling ? Notre atelier vous répond.`,
            }),
          ],
        }),
      }),
      (0, k.jsx)(`div`, {
        className: `px-6 md:px-12 lg:px-16 pb-20 md:pb-28`,
        children: (0, k.jsxs)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto`,
          children: [
            (0, k.jsx)(Bv, {
              children: (0, k.jsxs)(`div`, {
                className: `space-y-8`,
                children: [
                  (0, k.jsx)(fy, {
                    icon: cr,
                    title: `Boutique`,
                    lines: [`Avenue Habib Bourguiba`, `Tunis 1000, Tunisie`],
                  }),
                  (0, k.jsx)(fy, { icon: fr, title: `Téléphone`, lines: [Zv] }),
                  (0, k.jsx)(fy, {
                    icon: sr,
                    title: `E-mail`,
                    lines: [`contact@elegance.tn`],
                  }),
                  (0, k.jsx)(fy, {
                    icon: rr,
                    title: `Horaires`,
                    lines: [
                      `Lun — Sam : 10h — 20h`,
                      `Dimanche : sur rendez-vous`,
                    ],
                  }),
                ],
              }),
            }),
            (0, k.jsx)(Bv, {
              delay: 0.1,
              children: (0, k.jsxs)(`form`, {
                onSubmit: (e) => {
                  (e.preventDefault(),
                    r(!0),
                    t({ name: ``, email: ``, message: `` }),
                    setTimeout(() => r(!1), 4e3));
                },
                className: `space-y-6`,
                children: [
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`label`, {
                        className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block`,
                        children: `Nom`,
                      }),
                      (0, k.jsx)(`input`, {
                        required: !0,
                        value: e.name,
                        onChange: (e) =>
                          t((t) => ({ ...t, name: e.target.value })),
                        className: `w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`label`, {
                        className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block`,
                        children: `E-mail`,
                      }),
                      (0, k.jsx)(`input`, {
                        required: !0,
                        type: `email`,
                        value: e.email,
                        onChange: (e) =>
                          t((t) => ({ ...t, email: e.target.value })),
                        className: `w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors`,
                      }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    children: [
                      (0, k.jsx)(`label`, {
                        className: `text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block`,
                        children: `Message`,
                      }),
                      (0, k.jsx)(`textarea`, {
                        required: !0,
                        rows: 5,
                        value: e.message,
                        onChange: (e) =>
                          t((t) => ({ ...t, message: e.target.value })),
                        className: `w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors resize-none`,
                      }),
                    ],
                  }),
                  (0, k.jsx)(`button`, {
                    type: `submit`,
                    className: `inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500`,
                    children: n
                      ? (0, k.jsxs)(k.Fragment, {
                          children: [
                            (0, k.jsx)(nr, { size: 14 }),
                            ` Message envoyé`,
                          ],
                        })
                      : (0, k.jsxs)(k.Fragment, {
                          children: [
                            (0, k.jsx)(mr, { size: 14 }),
                            ` Envoyer le message`,
                          ],
                        }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function fy({ icon: e, title: t, lines: n }) {
  return (0, k.jsxs)(`div`, {
    className: `flex gap-5`,
    children: [
      (0, k.jsx)(`div`, {
        className: `w-12 h-12 shrink-0 border border-border flex items-center justify-center text-accent`,
        children: (0, k.jsx)(e, { size: 18, strokeWidth: 1.25 }),
      }),
      (0, k.jsxs)(`div`, {
        children: [
          (0, k.jsx)(`h3`, {
            className: `text-[11px] uppercase tracking-luxe-sm mb-2`,
            children: t,
          }),
          n.map((e, t) =>
            (0, k.jsx)(
              `p`,
              { className: `text-muted-foreground text-sm`, children: e },
              t,
            ),
          ),
        ],
      }),
    ],
  });
}
function py() {
  return (0, k.jsxs)(z, {
    client: Wa,
    children: [
      (0, k.jsxs)(As, {
        children: [
          (0, k.jsx)(zs, {}),
          (0, k.jsx)(Hs, {
            children: (0, k.jsx)(bs, {
              children: (0, k.jsxs)(vs, {
                element: (0, k.jsx)(Ys, {}),
                children: [
                  (0, k.jsx)(vs, { path: `/`, element: (0, k.jsx)(Uv, {}) }),
                  (0, k.jsx)(vs, {
                    path: `/shop`,
                    element: (0, k.jsx)(Kv, {}),
                  }),
                  (0, k.jsx)(vs, {
                    path: `/women`,
                    element: (0, k.jsx)(qv, {}),
                  }),
                  (0, k.jsx)(vs, { path: `/men`, element: (0, k.jsx)(Jv, {}) }),
                  (0, k.jsx)(vs, { path: `/new`, element: (0, k.jsx)(Yv, {}) }),
                  (0, k.jsx)(vs, {
                    path: `/product/:id`,
                    element: (0, k.jsx)($v, {}),
                  }),
                  (0, k.jsx)(vs, {
                    path: `/cart`,
                    element: (0, k.jsx)(ty, {}),
                  }),
                  (0, k.jsx)(vs, {
                    path: `/checkout`,
                    element: (0, k.jsx)(iy, {}),
                  }),
                  (0, k.jsx)(vs, {
                    path: `/about`,
                    element: (0, k.jsx)(uy, {}),
                  }),
                  (0, k.jsx)(vs, {
                    path: `/contact`,
                    element: (0, k.jsx)(dy, {}),
                  }),
                  (0, k.jsx)(vs, { path: `*`, element: (0, k.jsx)(Ls, {}) }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, k.jsx)(Ji, {}),
    ],
  });
}
v.createRoot(document.getElementById(`root`)).render((0, k.jsx)(py, {}));
