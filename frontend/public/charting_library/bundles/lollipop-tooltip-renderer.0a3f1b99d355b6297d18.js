;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9039],
  {
    59142: function (e, t) {
      var n, o, r
      ;(o = [t]),
        (n = function (e) {
          'use strict'
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t]
              return n
            }
            return Array.from(e)
          }
          Object.defineProperty(e, '__esModule', { value: !0 })
          var n = !1
          if ('undefined' != typeof window) {
            var o = {
              get passive() {
                n = !0
              },
            }
            window.addEventListener('testPassive', null, o),
              window.removeEventListener('testPassive', null, o)
          }
          var r =
              'undefined' != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            l = [],
            i = !1,
            a = -1,
            c = void 0,
            s = void 0,
            u = function (e) {
              return l.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                )
              })
            },
            d = function (e) {
              var t = e || window.event
              return (
                !!u(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              )
            },
            f = function () {
              setTimeout(function () {
                void 0 !== s &&
                  ((document.body.style.paddingRight = s), (s = void 0)),
                  void 0 !== c &&
                    ((document.body.style.overflow = c), (c = void 0))
              })
            }
          ;(e.disableBodyScroll = function (e, o) {
            if (r) {
              if (!e)
                return void console.error(
                  'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                )
              if (
                e &&
                !l.some(function (t) {
                  return t.targetElement === e
                })
              ) {
                var f = { targetElement: e, options: o || {} }
                ;(l = [].concat(t(l), [f])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (a = e.targetTouches[0].clientY)
                  }),
                  (e.ontouchmove = function (t) {
                    var n, o, r, l
                    1 === t.targetTouches.length &&
                      ((o = e),
                      (l = (n = t).targetTouches[0].clientY - a),
                      !u(n.target) &&
                        ((o && 0 === o.scrollTop && 0 < l) ||
                        ((r = o) &&
                          r.scrollHeight - r.scrollTop <= r.clientHeight &&
                          l < 0)
                          ? d(n)
                          : n.stopPropagation()))
                  }),
                  i ||
                    (document.addEventListener(
                      'touchmove',
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (i = !0))
              }
            } else {
              ;(m = o),
                setTimeout(function () {
                  if (void 0 === s) {
                    var e = !!m && !0 === m.reserveScrollBarGap,
                      t =
                        window.innerWidth - document.documentElement.clientWidth
                    e &&
                      0 < t &&
                      ((s = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + 'px'))
                  }
                  void 0 === c &&
                    ((c = document.body.style.overflow),
                    (document.body.style.overflow = 'hidden'))
                })
              var p = { targetElement: e, options: o || {} }
              l = [].concat(t(l), [p])
            }
            var m
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (l.forEach(function (e) {
                    ;(e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null)
                  }),
                  i &&
                    (document.removeEventListener(
                      'touchmove',
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (i = !1)),
                  (l = []),
                  (a = -1))
                : (f(), (l = []))
            }),
            (e.enableBodyScroll = function (e) {
              if (r) {
                if (!e)
                  return void console.error(
                    'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                  )
                ;(e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (l = l.filter(function (t) {
                    return t.targetElement !== e
                  })),
                  i &&
                    0 === l.length &&
                    (document.removeEventListener(
                      'touchmove',
                      d,
                      n ? { passive: !1 } : void 0,
                    ),
                    (i = !1))
              } else
                1 === l.length && l[0].targetElement === e
                  ? (f(), (l = []))
                  : (l = l.filter(function (t) {
                      return t.targetElement !== e
                    }))
            })
        }),
        void 0 === (r = 'function' == typeof n ? n.apply(t, o) : n) ||
          (e.exports = r)
    },
    66076: (e) => {
      e.exports = {
        'default-drawer-min-top-distance': '100px',
        wrap: 'wrap-_HnK0UIN',
        positionBottom: 'positionBottom-_HnK0UIN',
        backdrop: 'backdrop-_HnK0UIN',
        drawer: 'drawer-_HnK0UIN',
        positionLeft: 'positionLeft-_HnK0UIN',
      }
    },
    27267: (e, t, n) => {
      'use strict'
      function o(e, t, n, o, r) {
        function l(r) {
          if (e > r.timeStamp) return
          const l = r.target
          void 0 !== n &&
            null !== t &&
            null !== l &&
            l.ownerDocument === o &&
            (t.contains(l) || n(r))
        }
        return (
          r.click && o.addEventListener('click', l, !1),
          r.mouseDown && o.addEventListener('mousedown', l, !1),
          r.touchEnd && o.addEventListener('touchend', l, !1),
          r.touchStart && o.addEventListener('touchstart', l, !1),
          () => {
            o.removeEventListener('click', l, !1),
              o.removeEventListener('mousedown', l, !1),
              o.removeEventListener('touchend', l, !1),
              o.removeEventListener('touchstart', l, !1)
          }
        )
      }
      n.d(t, { addOutsideEventListener: () => o })
    },
    37558: (e, t, n) => {
      'use strict'
      n.d(t, { DrawerContext: () => i, DrawerManager: () => l })
      var o = n(50959),
        r = n(99054)
      class l extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._isBodyFixed = !1),
            (this._addDrawer = (e) => {
              this.setState((t) => ({ stack: [...t.stack, e] }))
            }),
            (this._removeDrawer = (e) => {
              this.setState((t) => ({ stack: t.stack.filter((t) => t !== e) }))
            }),
            (this.state = { stack: [] })
        }
        componentDidUpdate(e, t) {
          !t.stack.length &&
            this.state.stack.length &&
            ((0, r.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, r.setFixedBodyState)(!1), (this._isBodyFixed = !1))
        }
        componentWillUnmount() {
          this.state.stack.length &&
            this._isBodyFixed &&
            (0, r.setFixedBodyState)(!1)
        }
        render() {
          return o.createElement(
            i.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.stack.length
                  ? this.state.stack[this.state.stack.length - 1]
                  : null,
              },
            },
            this.props.children,
          )
        }
      }
      const i = o.createContext(null)
    },
    41590: (e, t, n) => {
      'use strict'
      n.d(t, { Drawer: () => f })
      var o = n(50959),
        r = n(50151),
        l = n(97754),
        i = n(36174),
        a = n(65718),
        c = n(37558),
        s = n(29197),
        u = n(86656),
        d = n(66076)
      function f(e) {
        const {
            position: t = 'Bottom',
            onClose: n,
            children: u,
            className: f,
            theme: m = d,
          } = e,
          h = (0, r.ensureNotNull)((0, o.useContext)(c.DrawerContext)),
          [v] = (0, o.useState)(() => (0, i.randomHash)()),
          y = (0, o.useRef)(null),
          g = (0, o.useContext)(s.CloseDelegateContext)
        return (
          (0, o.useLayoutEffect)(
            () => (
              (0, r.ensureNotNull)(y.current).focus({ preventScroll: !0 }),
              g.subscribe(h, n),
              h.addDrawer(v),
              () => {
                h.removeDrawer(v), g.unsubscribe(h, n)
              }
            ),
            [],
          ),
          o.createElement(
            a.Portal,
            null,
            o.createElement(
              'div',
              { className: l(d.wrap, d[`position${t}`]) },
              v === h.currentDrawer &&
                o.createElement('div', { className: d.backdrop, onClick: n }),
              o.createElement(
                p,
                {
                  className: l(m.drawer, d[`position${t}`], f),
                  ref: y,
                  'data-name': e['data-name'],
                },
                u,
              ),
            ),
          )
        )
      }
      const p = (0, o.forwardRef)((e, t) => {
        const { className: n, ...r } = e
        return o.createElement(u.TouchScrollContainer, {
          className: l(d.drawer, n),
          tabIndex: -1,
          ref: t,
          ...r,
        })
      })
    },
    20520: (e, t, n) => {
      'use strict'
      n.d(t, { PopupMenu: () => f })
      var o = n(50959),
        r = n(962),
        l = n(62942),
        i = n(65718),
        a = n(27317),
        c = n(29197)
      const s = o.createContext(void 0)
      var u = n(36383)
      const d = o.createContext({ setMenuMaxWidth: !1 })
      function f(e) {
        const {
            controller: t,
            children: n,
            isOpened: f,
            closeOnClickOutside: p = !0,
            doNotCloseOn: m,
            onClickOutside: h,
            onClose: v,
            onKeyboardClose: y,
            'data-name': g = 'popup-menu-container',
            ...b
          } = e,
          E = (0, o.useContext)(c.CloseDelegateContext),
          w = o.useContext(d),
          C = (0, o.useContext)(s),
          k = (0, u.useOutsideEvent)({
            handler: function (e) {
              h && h(e)
              if (!p) return
              const t = (0, l.default)(m) ? m() : null == m ? [] : [m]
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = r.findDOMNode(n)
                  if (t instanceof Node && t.contains(e.target)) return
                }
              v()
            },
            mouseDown: !0,
            touchStart: !0,
          })
        return f
          ? o.createElement(
              i.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              o.createElement(
                'span',
                { ref: k, style: { pointerEvents: 'auto' } },
                o.createElement(
                  a.Menu,
                  {
                    ...b,
                    onClose: v,
                    onKeyboardClose: y,
                    onScroll: function (t) {
                      const { onScroll: n } = e
                      n && n(t)
                    },
                    customCloseDelegate: E,
                    customRemeasureDelegate: C,
                    ref: t,
                    'data-name': g,
                    limitMaxWidth: w.setMenuMaxWidth,
                  },
                  n,
                ),
              ),
            )
          : null
      }
    },
    86656: (e, t, n) => {
      'use strict'
      n.d(t, { TouchScrollContainer: () => a })
      var o = n(50959),
        r = n(59142),
        l = n(50151),
        i = n(49483)
      const a = (0, o.forwardRef)((e, t) => {
        const { children: n, ...l } = e,
          a = (0, o.useRef)(null)
        return (
          (0, o.useImperativeHandle)(t, () => a.current),
          (0, o.useLayoutEffect)(() => {
            if (i.CheckMobile.iOS())
              return (
                null !== a.current &&
                  (0, r.disableBodyScroll)(a.current, { allowTouchMove: c(a) }),
                () => {
                  null !== a.current && (0, r.enableBodyScroll)(a.current)
                }
              )
          }, []),
          o.createElement('div', { ref: a, ...l }, n)
        )
      })
      function c(e) {
        return (t) => {
          const n = (0, l.ensureNotNull)(e.current),
            o = document.activeElement
          return (
            !n.contains(t) || (null !== o && n.contains(o) && o.contains(t))
          )
        }
      }
    },
    40173: (e, t, n) => {
      'use strict'
      function o(e, t, n = {}) {
        return Object.assign(
          {},
          e,
          (function (e, t, n = {}) {
            const o = Object.assign({}, t)
            for (const r of Object.keys(t)) {
              const l = n[r] || r
              l in e && (o[r] = [e[l], t[r]].join(' '))
            }
            return o
          })(e, t, n),
        )
      }
      n.d(t, { mergeThemes: () => o })
    },
    95257: (e, t) => {
      'use strict'
      var n = Symbol.for('react.element'),
        o = Symbol.for('react.portal'),
        r = Symbol.for('react.fragment'),
        l = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        a = Symbol.for('react.provider'),
        c = Symbol.for('react.context'),
        s = Symbol.for('react.forward_ref'),
        u = Symbol.for('react.suspense'),
        d = Symbol.for('react.memo'),
        f = Symbol.for('react.lazy'),
        p = Symbol.iterator
      var m = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        v = {}
      function y(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || m)
      }
      function g() {}
      function b(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || m)
      }
      ;(y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (y.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (g.prototype = y.prototype)
      var E = (b.prototype = new g())
      ;(E.constructor = b), h(E, y.prototype), (E.isPureReactComponent = !0)
      var w = Array.isArray,
        C = Object.prototype.hasOwnProperty,
        k = { current: null },
        _ = { key: !0, ref: !0, __self: !0, __source: !0 }
      function x(e, t, o) {
        var r,
          l = {},
          i = null,
          a = null
        if (null != t)
          for (r in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = '' + t.key),
          t))
            C.call(t, r) && !_.hasOwnProperty(r) && (l[r] = t[r])
        var c = arguments.length - 2
        if (1 === c) l.children = o
        else if (1 < c) {
          for (var s = Array(c), u = 0; u < c; u++) s[u] = arguments[u + 2]
          l.children = s
        }
        if (e && e.defaultProps)
          for (r in (c = e.defaultProps)) void 0 === l[r] && (l[r] = c[r])
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: a,
          props: l,
          _owner: k.current,
        }
      }
      function T(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === n
      }
      var S = /\/+/g
      function O(e, t) {
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
      function N(e, t, r, l, i) {
        var a = typeof e
        ;('undefined' !== a && 'boolean' !== a) || (e = null)
        var c = !1
        if (null === e) c = !0
        else
          switch (a) {
            case 'string':
            case 'number':
              c = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case n:
                case o:
                  c = !0
              }
          }
        if (c)
          return (
            (i = i((c = e))),
            (e = '' === l ? '.' + O(c, 0) : l),
            w(i)
              ? ((r = ''),
                null != e && (r = e.replace(S, '$&/') + '/'),
                N(i, t, r, '', function (e) {
                  return e
                }))
              : null != i &&
                (T(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    }
                  })(
                    i,
                    r +
                      (!i.key || (c && c.key === i.key)
                        ? ''
                        : ('' + i.key).replace(S, '$&/') + '/') +
                      e,
                  )),
                t.push(i)),
            1
          )
        if (((c = 0), (l = '' === l ? '.' : l + ':'), w(e)))
          for (var s = 0; s < e.length; s++) {
            var u = l + O((a = e[s]), s)
            c += N(a, t, r, u, i)
          }
        else if (
          ((u = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null
          })(e)),
          'function' == typeof u)
        )
          for (e = u.call(e), s = 0; !(a = e.next()).done; )
            c += N((a = a.value), t, r, (u = l + O(a, s++)), i)
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
        return c
      }
      function R(e, t, n) {
        if (null == e) return e
        var o = [],
          r = 0
        return (
          N(e, o, '', '', function (e) {
            return t.call(n, e, r++)
          }),
          o
        )
      }
      function B(e) {
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
      var M = { current: null },
        F = { transition: null },
        D = {
          ReactCurrentDispatcher: M,
          ReactCurrentBatchConfig: F,
          ReactCurrentOwner: k,
        }
      ;(t.Children = {
        map: R,
        forEach: function (e, t, n) {
          R(
            e,
            function () {
              t.apply(this, arguments)
            },
            n,
          )
        },
        count: function (e) {
          var t = 0
          return (
            R(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            R(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!T(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return e
        },
      }),
        (t.Component = y),
        (t.Fragment = r),
        (t.Profiler = i),
        (t.PureComponent = b),
        (t.StrictMode = l),
        (t.Suspense = u),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.cloneElement = function (e, t, o) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            )
          var r = h({}, e.props),
            l = e.key,
            i = e.ref,
            a = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = k.current)),
              void 0 !== t.key && (l = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps
            for (s in t)
              C.call(t, s) &&
                !_.hasOwnProperty(s) &&
                (r[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
          }
          var s = arguments.length - 2
          if (1 === s) r.children = o
          else if (1 < s) {
            c = Array(s)
            for (var u = 0; u < s; u++) c[u] = arguments[u + 2]
            r.children = c
          }
          return {
            $$typeof: n,
            type: e.type,
            key: l,
            ref: i,
            props: r,
            _owner: a,
          }
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: c,
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
        (t.createElement = x),
        (t.createFactory = function (e) {
          var t = x.bind(null, e)
          return (t.type = e), t
        }),
        (t.createRef = function () {
          return { current: null }
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e }
        }),
        (t.isValidElement = T),
        (t.lazy = function (e) {
          return {
            $$typeof: f,
            _payload: { _status: -1, _result: e },
            _init: B,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = F.transition
          F.transition = {}
          try {
            e()
          } finally {
            F.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return M.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return M.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return M.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return M.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return M.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return M.current.useImperativeHandle(e, t, n)
        }),
        (t.useInsertionEffect = function (e, t) {
          return M.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return M.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return M.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, n) {
          return M.current.useReducer(e, t, n)
        }),
        (t.useRef = function (e) {
          return M.current.useRef(e)
        }),
        (t.useState = function (e) {
          return M.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return M.current.useSyncExternalStore(e, t, n)
        }),
        (t.useTransition = function () {
          return M.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, n) => {
      'use strict'
      e.exports = n(95257)
    },
    25105: (e) => {
      e.exports = {
        drawer: 'drawer-xBKhVqal',
        drawerItem: 'drawerItem-xBKhVqal',
        menuWrap: 'menuWrap-xBKhVqal',
        scrollWrap: 'scrollWrap-xBKhVqal',
        menuBox: 'menuBox-xBKhVqal',
        card: 'card-xBKhVqal',
        cardRow: 'cardRow-xBKhVqal',
        mini: 'mini-xBKhVqal',
        fadeTop: 'fadeTop-xBKhVqal',
        fadeBottom: 'fadeBottom-xBKhVqal',
      }
    },
    95795: (e) => {
      e.exports = {
        lollipopTooltipTitle: 'lollipopTooltipTitle-hkWvPxQc',
        lollipopTooltipTitle_minimal: 'lollipopTooltipTitle_minimal-hkWvPxQc',
        lollipopTooltipTitle__title: 'lollipopTooltipTitle__title-hkWvPxQc',
        lollipopTooltipTitle_mobile: 'lollipopTooltipTitle_mobile-hkWvPxQc',
        lollipopTooltipTitle__icon: 'lollipopTooltipTitle__icon-hkWvPxQc',
      }
    },
    13668: (e) => {
      e.exports = {
        content: 'content-tm3FiOQl',
        contentWithTab: 'contentWithTab-tm3FiOQl',
        group: 'group-tm3FiOQl',
        subtitle: 'subtitle-tm3FiOQl',
        text: 'text-tm3FiOQl',
        tabsWrapper: 'tabsWrapper-tm3FiOQl',
        tabsContentWrapper: 'tabsContentWrapper-tm3FiOQl',
        groupIcon: 'groupIcon-tm3FiOQl',
        beforeMarketOpen: 'beforeMarketOpen-tm3FiOQl',
        afterMarketClose: 'afterMarketClose-tm3FiOQl',
        groupTitle: 'groupTitle-tm3FiOQl',
        groupRow: 'groupRow-tm3FiOQl',
        groupCell: 'groupCell-tm3FiOQl',
        link: 'link-tm3FiOQl',
        mob: 'mob-tm3FiOQl',
        mini: 'mini-tm3FiOQl',
        generalContent: 'generalContent-tm3FiOQl',
      }
    },
    70434: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { showLollipopTooltip: () => D })
      var o = n(50959),
        r = n(962),
        l = n(50151),
        i = n(97754),
        a = n.n(i)
      function c(e, t, n) {
        ;(0, o.useEffect)(() => {
          const o = new IntersectionObserver(
            (e) => {
              e[e.length - 1].intersectionRatio < 0.25 ? n() : t()
            },
            {
              threshold: [0, 0.25, 0.5, 0.75, 1],
              root: null,
              rootMargin: '0px',
            },
          )
          return e.current && o.observe(e.current), () => o.disconnect()
        }, [])
      }
      var s = n(90692),
        u = n(41590),
        d = n(37558),
        f = n(20520),
        p = n(59064),
        m = n(68335),
        h = n(1722)
      const v = (0, o.forwardRef)((e, t) => {
        const {
            onClose: n,
            onForceClose: r,
            onClickOutside: l,
            className: i,
            ...a
          } = e,
          c = (0, o.useRef)(null)
        ;(0, o.useEffect)(
          () => (
            p.globalCloseDelegate.subscribe(null, r),
            () => {
              p.globalCloseDelegate.unsubscribe(null, r)
            }
          ),
          [r],
        )
        const s = (0, o.useCallback)(
            (e) => {
              27 === (0, m.hashFromEvent)(e) && (e.preventDefault(), r())
            },
            [r],
          ),
          u = (0, o.useCallback)(() => {
            c.current && c.current.focus({ preventScroll: !0 })
          }, [])
        return o.createElement(
          f.PopupMenu,
          {
            className: i,
            isOpened: !0,
            tabIndex: -1,
            reference: (e) => {
              'function' == typeof t
                ? t(e)
                : (0, h.isObject)(t) && (t.current = e),
                (c.current = e)
            },
            onClose: n,
            onClickOutside: l,
            onKeyDown: s,
            onOpen: u,
            ...a,
          },
          e.children,
        )
      })
      function y(e) {
        ;(0, o.useEffect)(() => {
          return (
            (e = g),
            window.addEventListener('scroll', e),
            () => window.removeEventListener('scroll', e)
          )
          var e
        }, []),
          (0, o.useEffect)(() => {
            if (e.length)
              return (function (e, t) {
                for (const n of e) n.subscribe(null, t)
                return () => {
                  for (const n of e) n.unsubscribe(null, t)
                }
              })(e, g)
          }, e)
      }
      function g() {
        ;(0, p.globalCloseMenu)()
      }
      v.displayName = 'TooltipPopup'
      var b = n(40173),
        E = n(27317),
        w = n(9745),
        C = n(95795)
      function k(e) {
        const { title: t, icon: n, iconStyle: r, className: l, cardType: i } = e
        return o.createElement(
          'div',
          {
            className: a()(
              C.lollipopTooltipTitle,
              [
                'mob' === i && C.lollipopTooltipTitle_mobile,
                'mini' === i && C.lollipopTooltipTitle_minimal,
              ],
              l,
            ),
          },
          n &&
            o.createElement(w.Icon, {
              icon: n,
              className: C.lollipopTooltipTitle__icon,
              style: r,
            }),
          o.createElement(
            'span',
            { className: C.lollipopTooltipTitle__title },
            t,
          ),
        )
      }
      var _,
        x = n(13668)
      function T(e) {
        const { text: t, href: n, onClick: r } = e
        return o.createElement(
          'a',
          {
            href: n,
            onClick:
              r &&
              ((e) => {
                e.preventDefault(), r()
              }),
            className: x.link,
          },
          t,
        )
      }
      function S(e) {
        const {
          name: t,
          value: n,
          style: r,
          valueStyle: l,
          onValueClick: i,
          valueRightIcon: c,
          className: s,
        } = e
        return o.createElement(
          'div',
          { className: a()(x.groupRow, s), style: r },
          t &&
            o.createElement(
              'div',
              { className: x.groupCell },
              o.createElement('span', { className: x.text }, t),
            ),
          o.createElement(
            'div',
            { className: x.groupCell },
            o.createElement(
              'span',
              { className: x.text, style: l, onClick: i },
              n,
            ),
            c &&
              o.createElement(w.Icon, {
                icon: c.iconContent,
                className: a()(
                  x.groupIcon,
                  c.iconClass,
                  'apply-common-tooltip',
                ),
                title: c.tooltipText,
              }),
          ),
        )
      }
      function O(e) {
        const { content: t = [], subTitle: n, cardRowClass: r } = e,
          l = t.map((e, t) => {
            const { title: n, content: r } = e
            return o.createElement(
              'div',
              { key: `group${t}`, className: x.group },
              n && o.createElement('span', { className: x.groupTitle }, n),
              r.map((e, t) =>
                o.createElement(S, { key: `contentRow${t}`, ...e }),
              ),
            )
          }),
          i =
            'string' == typeof n
              ? n
              : n.map((e, t) =>
                  o.createElement(S, { key: `subTitle${t}`, ...e }),
                )
        return o.createElement(
          'div',
          { className: r },
          o.createElement('span', { className: x.subtitle }, i),
          l.length > 0 && o.createElement('div', null, l),
        )
      }
      !(function (e) {
        ;(e[(e.BeforeMarketOpen = x.beforeMarketOpen)] = 'BeforeMarketOpen'),
          (e[(e.AfterMarketClose = x.afterMarketClose)] = 'AfterMarketClose')
      })(_ || (_ = {}))
      function N(e) {
        var t
        const { cardType: n, anchor: r, title: l, tooltipIcon: i, ...c } = e,
          s = n ? a()(x.content, x[n]) : x.content,
          u = (0, o.useMemo)(() => {
            var t
            return l && i
              ? {
                  color:
                    null === (t = e.style) || void 0 === t ? void 0 : t.color,
                }
              : void 0
          }, [
            !!l,
            !!i,
            null === (t = e.style) || void 0 === t ? void 0 : t.color,
          ])
        return o.createElement(
          'div',
          { className: s },
          l &&
            o.createElement(k, {
              title: l,
              icon: i,
              iconStyle: u,
              cardType: n,
            }),
          'common' === c.type && o.createElement(O, { ...c }),
          r &&
            ('mob' !== n || !r.hideInMobileMode) &&
            o.createElement(
              'div',
              { className: x.group },
              o.createElement(T, { ...r }),
            ),
        )
      }
      var R = n(25105)
      const B = (0, b.mergeThemes)(E.DEFAULT_MENU_THEME, {
        menuWrap: R.menuWrap,
        menuBox: R.menuBox,
      })
      function M(e) {
        const {
            tooltips: t,
            onClose: n,
            onForceClose: r,
            onClickOutside: l,
            position: i,
            customCloseSubscriptions: f = [],
            showScrollFades: p,
            cardType: m,
            doNotCloseOn: h,
          } = e,
          g = (0, o.useRef)(null),
          b = (0, o.useRef)(null),
          E = (0, o.useRef)(null),
          w = (0, o.useRef)(null),
          [C, k] = (0, o.useState)('100%'),
          _ = (e) => {
            null !== e && k(`${e.clientWidth}px`)
          },
          [x, T] = (0, o.useState)(!1)
        c(
          E,
          () => T(!1),
          () => T(!0),
        )
        const S = { display: x ? 'block' : 'none', width: C },
          [O, M] = (0, o.useState)(!1)
        c(
          w,
          () => M(!1),
          () => M(!0),
        )
        const F = { display: O ? 'block' : 'none', width: C }
        y(f)
        const D = m ? a()(R.card, R[m]) : R.card
        return o.createElement(
          d.DrawerManager,
          null,
          o.createElement(
            s.MatchMedia,
            { rule: 'screen and (max-width: 419px)' },
            (e) =>
              e
                ? o.createElement(
                    u.Drawer,
                    {
                      className: R.drawer,
                      onClose: r || n,
                      position: 'Bottom',
                    },
                    t.map((e, t) =>
                      o.createElement(
                        'div',
                        { key: `${t}`, className: R.drawerItem },
                        o.createElement(N, { cardType: 'mob', ...e }),
                      ),
                    ),
                  )
                : o.createElement(
                    v,
                    {
                      position: i,
                      theme: B,
                      onClose: n,
                      onForceClose: r || n,
                      onClickOutside: l,
                      doNotCloseOn: h,
                    },
                    p &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('div', {
                          ref: g,
                          className: R.fadeTop,
                          style: S,
                        }),
                        o.createElement('div', { ref: E }),
                      ),
                    o.createElement(
                      'div',
                      { ref: _ },
                      t.map((e, t) => {
                        var n
                        return o.createElement(
                          'div',
                          {
                            key: `${t}`,
                            className: D,
                            style: {
                              borderColor:
                                null === (n = e.style) || void 0 === n
                                  ? void 0
                                  : n.color,
                            },
                          },
                          o.createElement(N, { cardType: m, ...e }),
                        )
                      }),
                    ),
                    p &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('div', { ref: w }),
                        o.createElement('div', {
                          ref: b,
                          className: R.fadeBottom,
                          style: F,
                        }),
                      ),
                  ),
          ),
        )
      }
      let F = null
      function D(e) {
        if (!e.items.length) return () => {}
        const t = {
          tooltips: e.items,
          onClose: I,
          onForceClose: () => {
            I(), 'function' == typeof e.onCustomClose && e.onCustomClose()
          },
          onClickOutside: e.onClickOutside,
          doNotCloseOn: e.doNotCloseOn,
          position: $.bind(null, e.position),
          customCloseSubscriptions: e.customCloseSubscriptions,
          showScrollFades: e.showScrollFades,
          cardType: e.cardType,
        }
        return (
          null === F &&
            ((F = document.createElement('div')), document.body.appendChild(F)),
          r.render(o.createElement(M, { ...t }), F),
          I
        )
      }
      function I() {
        null !== F && (r.unmountComponentAtNode(F), F.remove(), (F = null))
      }
      function $(e, t, n) {
        const o = e.target,
          r = o.getBoundingClientRect(),
          i = r.width - e.targetSize.width,
          a = r.height - e.targetSize.height,
          c = (0, l.ensureNotNull)(o.closest('.chart-container')),
          s = c.getBoundingClientRect(),
          u = (0, l.ensureNotNull)(c.parentElement).getBoundingClientRect(),
          d = r.left + e.point.x + i,
          f = Math.round(d - t / 2),
          p = Math.min(f + t, s.right, u.right)
        let m,
          h,
          v = Math.max(p - t, s.left, u.left)
        v + t >= u.right && (v = u.right - t)
        const y = s.bottom - (r.top + e.point.y + a),
          g = s.height - y - e.marginTop
        return (
          g < n
            ? ((h = e.marginTop + s.top), (m = Math.max(g, 0)))
            : (h = s.height + s.top - y - n),
          { x: v, y: h, overrideHeight: m }
        )
      }
    },
  },
])
