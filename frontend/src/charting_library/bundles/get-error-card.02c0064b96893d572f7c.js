;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [139],
  {
    30509: (e) => {
      e.exports = {
        errorCard: 'errorCard-S9sXvhAu',
        errorCard__icon: 'errorCard__icon-S9sXvhAu',
        errorCard_size_big: 'errorCard_size_big-S9sXvhAu',
        errorCard__message: 'errorCard__message-S9sXvhAu',
        errorCard_limitWidth: 'errorCard_limitWidth-S9sXvhAu',
        errorCard__link: 'errorCard__link-S9sXvhAu',
        errorCardRendererContainer: 'errorCardRendererContainer-S9sXvhAu',
      }
    },
    9745: (e, t, r) => {
      'use strict'
      r.d(t, { Icon: () => o })
      var n = r(50959)
      const o = n.forwardRef((e, t) => {
        const { icon: r = '', ...o } = e
        return n.createElement('span', {
          ...o,
          ref: t,
          dangerouslySetInnerHTML: { __html: r },
        })
      })
    },
    81200: (e, t, r) => {
      'use strict'
      r.r(t),
        r.d(t, {
          ErrorCard: () => p,
          ErrorCardRenderer: () => y,
          ResizableErrorCard: () => m,
        })
      var n = r(50959),
        o = r(962),
        u = r(43370),
        i = r(97754),
        a = r.n(i),
        s = r(9745),
        c = (r(44352), r(14483)),
        l = r(29540),
        f = r(11425),
        d = r(30509)
      const h = {
        ghost: {
          1: (0, c.enabled)('hide_image_invalid_symbol') ? void 0 : l,
          2: (0, c.enabled)('hide_image_invalid_symbol') ? void 0 : f,
        },
        'stop-hand': { 1: void 0, 2: void 0 },
      }
      const p = n.forwardRef((e, t) => {
        const {
            icon: r,
            message: o,
            size: u = 1,
            rawHtml: i = !1,
            doNotLimitWidth: c,
            solutionId: l,
          } = e,
          f = n.useMemo(
            () =>
              r &&
              (function (e, t) {
                if (0 !== t) return h[e][t]
              })(r, u),
            [r, u],
          )
        return n.createElement(
          'div',
          {
            ref: t,
            className: a()(
              d.errorCard,
              2 === u && d.errorCard_size_big,
              !c && d.errorCard_limitWidth,
            ),
          },
          f &&
            n.createElement(s.Icon, { icon: f, className: d.errorCard__icon }),
          i
            ? n.createElement('div', {
                className: d.errorCard__message,
                dangerouslySetInnerHTML: { __html: o },
              })
            : n.createElement('div', { className: d.errorCard__message }, o),
          null,
        )
      })
      function m(e) {
        const {
            icon: t,
            message: r,
            rawHtml: o,
            doNotLimitWidth: i,
            maxWidth: a = 200,
            maxHeight: s = 200,
            offsetHeight: c = 0,
            solutionId: l,
          } = e,
          f = n.useRef(null),
          [d, h] = n.useState(1)
        return (
          n.useEffect(() => {
            const e = f.current
            if (e) {
              const t = new ResizeObserver((0, u.default)(m, 150))
              return t.observe(e), () => t.disconnect()
            }
          }, [a, s, c]),
          n.createElement(p, {
            ref: f,
            message: r,
            icon: t,
            size: d,
            rawHtml: o,
            doNotLimitWidth: i,
            solutionId: l,
          })
        )
        function m() {
          const e = f.current
          if (!e) return
          const t = e.clientHeight + c
          t < 105 ? h(0) : e.clientWidth < a || t < s ? h(1) : h(2)
        }
      }
      class y {
        constructor() {
          this._state = {
            message: null,
            rawHtml: !1,
            doNotLimitWidth: !1,
            icon: void 0,
            backgroundColor: null,
            textColor: null,
            maxWidth: 200,
            maxHeight: 200,
            offsetHeight: 0,
            solutionId: void 0,
          }
          const e = document.createElement('div')
          e.classList.add(d.errorCardRendererContainer), (this.container = e)
        }
        destroy() {
          o.unmountComponentAtNode(this.container)
        }
        update(e) {
          ;(this._state = Object.assign({}, this._state, e)),
            this._updateContainer(),
            this._render()
        }
        _updateContainer() {
          const { backgroundColor: e, textColor: t } = this._state
          this.container.style.setProperty('--backgroundColor', e),
            this.container.style.setProperty('--textColor', t)
        }
        _render() {
          const {
            message: e,
            icon: t,
            rawHtml: r,
            doNotLimitWidth: u,
            maxWidth: i,
            maxHeight: a,
            offsetHeight: s,
            solutionId: c,
          } = this._state
          o.render(
            e
              ? n.createElement(m, {
                  message: e,
                  icon: t,
                  rawHtml: r,
                  doNotLimitWidth: u,
                  maxWidth: i,
                  maxHeight: a,
                  offsetHeight: s,
                  solutionId: c,
                })
              : n.createElement(n.Fragment, null),
            this.container,
          )
        }
      }
    },
    95257: (e, t) => {
      'use strict'
      var r = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        u = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        a = Symbol.for('react.provider'),
        s = Symbol.for('react.context'),
        c = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        f = Symbol.for('react.memo'),
        d = Symbol.for('react.lazy'),
        h = Symbol.iterator
      var p = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        y = {}
      function v(e, t, r) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = r || p)
      }
      function _() {}
      function g(e, t, r) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = r || p)
      }
      ;(v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (_.prototype = v.prototype)
      var C = (g.prototype = new _())
      ;(C.constructor = g), m(C, v.prototype), (C.isPureReactComponent = !0)
      var b = Array.isArray,
        w = Object.prototype.hasOwnProperty,
        S = { current: null },
        E = { key: !0, ref: !0, __self: !0, __source: !0 }
      function R(e, t, n) {
        var o,
          u = {},
          i = null,
          a = null
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = '' + t.key),
          t))
            w.call(t, o) && !E.hasOwnProperty(o) && (u[o] = t[o])
        var s = arguments.length - 2
        if (1 === s) u.children = n
        else if (1 < s) {
          for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2]
          u.children = c
        }
        if (e && e.defaultProps)
          for (o in (s = e.defaultProps)) void 0 === u[o] && (u[o] = s[o])
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: a,
          props: u,
          _owner: S.current,
        }
      }
      function k(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r
      }
      var x = /\/+/g
      function H(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' }
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e]
                })
              )
            })('' + e.key)
          : t.toString(36)
      }
      function $(e, t, o, u, i) {
        var a = typeof e
        ;('undefined' !== a && 'boolean' !== a) || (e = null)
        var s = !1
        if (null === e) s = !0
        else
          switch (a) {
            case 'string':
            case 'number':
              s = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case r:
                case n:
                  s = !0
              }
          }
        if (s)
          return (
            (i = i((s = e))),
            (e = '' === u ? '.' + H(s, 0) : u),
            b(i)
              ? ((o = ''),
                null != e && (o = e.replace(x, '$&/') + '/'),
                $(i, t, o, '', function (e) {
                  return e
                }))
              : null != i &&
                (k(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    }
                  })(
                    i,
                    o +
                      (!i.key || (s && s.key === i.key)
                        ? ''
                        : ('' + i.key).replace(x, '$&/') + '/') +
                      e,
                  )),
                t.push(i)),
            1
          )
        if (((s = 0), (u = '' === u ? '.' : u + ':'), b(e)))
          for (var c = 0; c < e.length; c++) {
            var l = u + H((a = e[c]), c)
            s += $(a, t, o, l, i)
          }
        else if (
          ((l = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (h && e[h]) || e['@@iterator'])
                ? e
                : null
          })(e)),
          'function' == typeof l)
        )
          for (e = l.call(e), c = 0; !(a = e.next()).done; )
            s += $((a = a.value), t, o, (l = u + H(a, c++)), i)
        else if ('object' === a)
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t) +
                '). If you meant to render a collection of children, use an array instead.',
            ))
          )
        return s
      }
      function L(e, t, r) {
        if (null == e) return e
        var n = [],
          o = 0
        return (
          $(e, n, '', '', function (e) {
            return t.call(r, e, o++)
          }),
          n
        )
      }
      function I(e) {
        if (-1 === e._status) {
          var t = e._result
          ;(t = t()).then(
            function (t) {
              ;(0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t))
            },
            function (t) {
              ;(0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t))
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t))
        }
        if (1 === e._status) return e._result.default
        throw e._result
      }
      var V = { current: null },
        j = { transition: null },
        A = {
          ReactCurrentDispatcher: V,
          ReactCurrentBatchConfig: j,
          ReactCurrentOwner: S,
        }
      ;(t.Children = {
        map: L,
        forEach: function (e, t, r) {
          L(
            e,
            function () {
              t.apply(this, arguments)
            },
            r,
          )
        },
        count: function (e) {
          var t = 0
          return (
            L(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            L(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!k(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return e
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = g),
        (t.StrictMode = u),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            )
          var o = m({}, e.props),
            u = e.key,
            i = e.ref,
            a = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = S.current)),
              void 0 !== t.key && (u = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps
            for (c in t)
              w.call(t, c) &&
                !E.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
          }
          var c = arguments.length - 2
          if (1 === c) o.children = n
          else if (1 < c) {
            s = Array(c)
            for (var l = 0; l < c; l++) s[l] = arguments[l + 2]
            o.children = s
          }
          return {
            $$typeof: r,
            type: e.type,
            key: u,
            ref: i,
            props: o,
            _owner: a,
          }
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: s,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          )
        }),
        (t.createElement = R),
        (t.createFactory = function (e) {
          var t = R.bind(null, e)
          return (t.type = e), t
        }),
        (t.createRef = function () {
          return { current: null }
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e }
        }),
        (t.isValidElement = k),
        (t.lazy = function (e) {
          return {
            $$typeof: d,
            _payload: { _status: -1, _result: e },
            _init: I,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = j.transition
          j.transition = {}
          try {
            e()
          } finally {
            j.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return V.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return V.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return V.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return V.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return V.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return V.current.useImperativeHandle(e, t, r)
        }),
        (t.useInsertionEffect = function (e, t) {
          return V.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return V.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return V.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, r) {
          return V.current.useReducer(e, t, r)
        }),
        (t.useRef = function (e) {
          return V.current.useRef(e)
        }),
        (t.useState = function (e) {
          return V.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return V.current.useSyncExternalStore(e, t, r)
        }),
        (t.useTransition = function () {
          return V.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, r) => {
      'use strict'
      e.exports = r(95257)
    },
    11425: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="currentColor" fill-rule="evenodd" d="M23 39a36 36 0 0 1 72 0v13.15l15.1 8.44 2.16 1.2-1.64 1.86-12.85 14.59 3.73 4.03L98.57 85 95 81.13V117H77v-12H67v9H50V95H40v22H23V81.28l-3.8 3.61-2.76-2.9 4.05-3.84-12.77-14.5-1.64-1.86 2.16-1.2L23 52.34V39Zm72 36.33 10.98-12.46L95 56.73v18.6ZM23 56.92v18.03L12.35 62.87 23 56.92ZM59 7a32 32 0 0 0-32 32v74h9V91h18v19h9v-9h18v12h10V39A32 32 0 0 0 59 7Zm-7 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm19 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
    },
    29540: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" d="M15 24a21 21 0 1 1 42 0v7.41l8.97 5.01 1.08.6-.82.94-7.77 8.82 2.34 2.53-1.47 1.36L57 48.15V69H46v-7h-6v5h-9V56h-6v13H15V48.15l-2.33 2.52-1.47-1.36 2.35-2.53-7.78-8.82-.82-.93 1.08-.6L15 31.4V24Zm0 9.7-6.9 3.87L15 45.4V33.7Zm42 11.7 6.91-7.83-6.9-3.87v11.7ZM36 5a19 19 0 0 0-19 19v43h6V54h10v11h5v-5h10v7h7V24A19 19 0 0 0 36 5Zm-5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM42.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>'
    },
  },
])
