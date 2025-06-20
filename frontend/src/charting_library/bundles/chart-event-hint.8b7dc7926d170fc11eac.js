;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6166],
  {
    87941: (e) => {
      e.exports = {
        container: 'container-kfvcmk8t',
        centerElement: 'centerElement-kfvcmk8t',
        text: 'text-kfvcmk8t',
      }
    },
    96302: (e) => {
      e.exports = {
        container: 'container-zLVm6B4t',
        content: 'content-zLVm6B4t',
        arrowHolder: 'arrowHolder-zLVm6B4t',
        'arrowHolder--below': 'arrowHolder--below-zLVm6B4t',
        'arrowHolder--above': 'arrowHolder--above-zLVm6B4t',
        'arrowHolder--before': 'arrowHolder--before-zLVm6B4t',
        'arrowHolder--after': 'arrowHolder--after-zLVm6B4t',
        'arrowHolder--above-fix': 'arrowHolder--above-fix-zLVm6B4t',
        'arrowHolder--before-rtl-fix': 'arrowHolder--before-rtl-fix-zLVm6B4t',
        'arrowHolder--after-ltr-fix': 'arrowHolder--after-ltr-fix-zLVm6B4t',
        label: 'label-zLVm6B4t',
        closeButton: 'closeButton-zLVm6B4t',
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
    67961: (e, t, r) => {
      'use strict'
      r.d(t, { OverlapManager: () => i, getRootOverlapManager: () => a })
      var n = r(50151)
      class o {
        constructor() {
          this._storage = []
        }
        add(e) {
          this._storage.push(e)
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t)
        }
        has(e) {
          return this._storage.includes(e)
        }
        getItems() {
          return this._storage
        }
      }
      class i {
        constructor(e = document) {
          ;(this._storage = new o()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment())
        }
        setContainer(e) {
          const t = this._container,
            r = null === e ? this._document.createDocumentFragment() : e
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
            })
          })(t, r),
            (this._container = r)
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e)
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const r = this._windows.get(e)
          if (void 0 !== r) return r
          this.registerWindow(e)
          const n = this._document.createElement('div')
          if (
            ((n.style.position = t.position),
            (n.style.zIndex = this._index.toString()),
            (n.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length
            if (t.index >= e) this._container.appendChild(n)
            else if (t.index <= 0)
              this._container.insertBefore(n, this._container.firstChild)
            else {
              const e = this._container.childNodes[t.index]
              this._container.insertBefore(n, e)
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(n, this._container.firstChild)
              : this._container.appendChild(n)
          return this._windows.set(e, n), ++this._index, n
        }
        unregisterWindow(e) {
          this._storage.remove(e)
          const t = this._windows.get(e)
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e))
        }
        getZindex(e) {
          const t = this.ensureWindow(e)
          return parseInt(t.style.zIndex || '0')
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString()
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e)
        }
      }
      const s = new WeakMap()
      function a(e = document) {
        const t = e.getElementById('overlap-manager-root')
        if (null !== t) return (0, n.ensureDefined)(s.get(t))
        {
          const t = new i(e),
            r = (function (e) {
              const t = e.createElement('div')
              return (
                (t.style.position = 'absolute'),
                (t.style.zIndex = (150).toString()),
                (t.style.top = '0px'),
                (t.style.left = '0px'),
                (t.id = 'overlap-manager-root'),
                t
              )
            })(e)
          return s.set(r, t), t.setContainer(r), e.body.appendChild(r), t
        }
      }
    },
    5015: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { ChartEventHintRenderer: () => d })
      var n = r(50959),
        o = r(962),
        i = r(97754),
        s = r(9745),
        a = (r(65718), r(33765)),
        u = r(96302)
      n.PureComponent
      function c(e) {
        const {
          className: t,
          containerClassName: r,
          contentClassName: o,
          reference: c,
          style: l,
          arrow: f = !0,
          arrowClassName: d,
          arrowReference: p,
          onClose: h,
          arrowStyle: m,
          children: y,
          ..._
        } = e
        return n.createElement(
          'div',
          { ..._, className: t, ref: c, style: l },
          f && n.createElement('div', { className: d, ref: p, style: m }),
          n.createElement(
            'div',
            { className: i(u.container, r) },
            n.createElement('div', { className: i(u.content, o) }, y),
            h &&
              n.createElement(s.Icon, {
                className: u.closeButton,
                icon: a,
                onClick: h,
              }),
          ),
        )
      }
      var l = r(87941)
      function f(e) {
        const { bottomOffset: t, text: r, onClose: o } = e
        return n.createElement(
          'div',
          { className: l.container, style: { bottom: t } },
          n.createElement(
            'div',
            { className: l.centerElement },
            n.createElement(
              c,
              { arrow: !1, onClose: o },
              n.createElement('div', { className: l.text }, r),
            ),
          ),
        )
      }
      class d {
        constructor(e) {
          ;(this._wrap = document.createElement('div')), (this._container = e)
        }
        show(e, t) {
          if (!this._wrap) return
          this.hide(), this._container.append(this._wrap)
          const r = {
            text: e,
            onClose: () => {
              t && t(), this.hide()
            },
            bottomOffset: Array.from(this._container.children).reduce(
              (e, t) => (
                t.getAttribute('data-is-chart-toolbar-component') &&
                  (e += t.clientHeight),
                e
              ),
              32,
            ),
          }
          o.render(n.createElement(f, { ...r }), this._wrap)
        }
        hide() {
          this._wrap &&
            (o.unmountComponentAtNode(this._wrap), this._wrap.remove())
        }
        destroy() {
          this.hide(), delete this._wrap
        }
      }
    },
    65718: (e, t, r) => {
      'use strict'
      r.d(t, { Portal: () => u, PortalContext: () => c })
      var n = r(50959),
        o = r(962),
        i = r(36174),
        s = r(67961),
        a = r(60508)
      class u extends n.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, i.guid)())
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid)
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions,
          )
          return (
            (e.style.top = this.props.top || ''),
            (e.style.bottom = this.props.bottom || ''),
            (e.style.left = this.props.left || ''),
            (e.style.right = this.props.right || ''),
            (e.style.pointerEvents = this.props.pointerEvents || ''),
            o.createPortal(
              n.createElement(c.Provider, { value: this }, this.props.children),
              e,
            )
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context
            ? (0, s.getRootOverlapManager)()
            : this.context
        }
      }
      u.contextType = a.SlotContext
      const c = n.createContext(null)
    },
    60508: (e, t, r) => {
      'use strict'
      r.d(t, { Slot: () => o, SlotContext: () => i })
      var n = r(50959)
      class o extends n.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return n.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const i = n.createContext(null)
    },
    95257: (e, t) => {
      'use strict'
      var r = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        s = Symbol.for('react.profiler'),
        a = Symbol.for('react.provider'),
        u = Symbol.for('react.context'),
        c = Symbol.for('react.forward_ref'),
        l = Symbol.for('react.suspense'),
        f = Symbol.for('react.memo'),
        d = Symbol.for('react.lazy'),
        p = Symbol.iterator
      var h = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        y = {}
      function _(e, t, r) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = r || h)
      }
      function v() {}
      function w(e, t, r) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = r || h)
      }
      ;(_.prototype.isReactComponent = {}),
        (_.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (_.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (v.prototype = _.prototype)
      var g = (w.prototype = new v())
      ;(g.constructor = w), m(g, _.prototype), (g.isPureReactComponent = !0)
      var b = Array.isArray,
        x = Object.prototype.hasOwnProperty,
        E = { current: null },
        C = { key: !0, ref: !0, __self: !0, __source: !0 }
      function S(e, t, n) {
        var o,
          i = {},
          s = null,
          a = null
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = '' + t.key),
          t))
            x.call(t, o) && !C.hasOwnProperty(o) && (i[o] = t[o])
        var u = arguments.length - 2
        if (1 === u) i.children = n
        else if (1 < u) {
          for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2]
          i.children = c
        }
        if (e && e.defaultProps)
          for (o in (u = e.defaultProps)) void 0 === i[o] && (i[o] = u[o])
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: a,
          props: i,
          _owner: E.current,
        }
      }
      function k(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r
      }
      var R = /\/+/g
      function L(e, t) {
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
      function N(e, t, o, i, s) {
        var a = typeof e
        ;('undefined' !== a && 'boolean' !== a) || (e = null)
        var u = !1
        if (null === e) u = !0
        else
          switch (a) {
            case 'string':
            case 'number':
              u = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case r:
                case n:
                  u = !0
              }
          }
        if (u)
          return (
            (s = s((u = e))),
            (e = '' === i ? '.' + L(u, 0) : i),
            b(s)
              ? ((o = ''),
                null != e && (o = e.replace(R, '$&/') + '/'),
                N(s, t, o, '', function (e) {
                  return e
                }))
              : null != s &&
                (k(s) &&
                  (s = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    }
                  })(
                    s,
                    o +
                      (!s.key || (u && u.key === s.key)
                        ? ''
                        : ('' + s.key).replace(R, '$&/') + '/') +
                      e,
                  )),
                t.push(s)),
            1
          )
        if (((u = 0), (i = '' === i ? '.' : i + ':'), b(e)))
          for (var c = 0; c < e.length; c++) {
            var l = i + L((a = e[c]), c)
            u += N(a, t, o, l, s)
          }
        else if (
          ((l = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null
          })(e)),
          'function' == typeof l)
        )
          for (e = l.call(e), c = 0; !(a = e.next()).done; )
            u += N((a = a.value), t, o, (l = i + L(a, c++)), s)
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
        return u
      }
      function $(e, t, r) {
        if (null == e) return e
        var n = [],
          o = 0
        return (
          N(e, n, '', '', function (e) {
            return t.call(r, e, o++)
          }),
          n
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
      var H = { current: null },
        I = { transition: null },
        z = {
          ReactCurrentDispatcher: H,
          ReactCurrentBatchConfig: I,
          ReactCurrentOwner: E,
        }
      ;(t.Children = {
        map: $,
        forEach: function (e, t, r) {
          $(
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
            $(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            $(e, function (e) {
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
        (t.Component = _),
        (t.Fragment = o),
        (t.Profiler = s),
        (t.PureComponent = w),
        (t.StrictMode = i),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            )
          var o = m({}, e.props),
            i = e.key,
            s = e.ref,
            a = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (a = E.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps
            for (c in t)
              x.call(t, c) &&
                !C.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
          }
          var c = arguments.length - 2
          if (1 === c) o.children = n
          else if (1 < c) {
            u = Array(c)
            for (var l = 0; l < c; l++) u[l] = arguments[l + 2]
            o.children = u
          }
          return {
            $$typeof: r,
            type: e.type,
            key: i,
            ref: s,
            props: o,
            _owner: a,
          }
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: u,
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
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e)
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
            _init: B,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = I.transition
          I.transition = {}
          try {
            e()
          } finally {
            I.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return H.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return H.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return H.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return H.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return H.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return H.current.useImperativeHandle(e, t, r)
        }),
        (t.useInsertionEffect = function (e, t) {
          return H.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return H.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return H.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, r) {
          return H.current.useReducer(e, t, r)
        }),
        (t.useRef = function (e) {
          return H.current.useRef(e)
        }),
        (t.useState = function (e) {
          return H.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return H.current.useSyncExternalStore(e, t, r)
        }),
        (t.useTransition = function () {
          return H.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, r) => {
      'use strict'
      e.exports = r(95257)
    },
    33765: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
    },
  },
])
