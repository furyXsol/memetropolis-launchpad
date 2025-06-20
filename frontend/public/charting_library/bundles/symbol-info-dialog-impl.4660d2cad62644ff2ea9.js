;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9374],
  {
    71425: (e) => {
      e.exports = { body: 'body-XooS0VBr' }
    },
    5943: (e) => {
      e.exports = { header: 'header-_UwzQmBd', close: 'close-_UwzQmBd' }
    },
    23455: (e) => {
      e.exports = { message: 'message-iqdHKcH8', error: 'error-iqdHKcH8' }
    },
    17817: (e) => {
      e.exports = { footer: 'footer-fSCU20uC' }
    },
    27267: (e, t, r) => {
      'use strict'
      function o(e, t, r, o, n) {
        function i(n) {
          if (e > n.timeStamp) return
          const i = n.target
          void 0 !== r &&
            null !== t &&
            null !== i &&
            i.ownerDocument === o &&
            (t.contains(i) || r(n))
        }
        return (
          n.click && o.addEventListener('click', i, !1),
          n.mouseDown && o.addEventListener('mousedown', i, !1),
          n.touchEnd && o.addEventListener('touchend', i, !1),
          n.touchStart && o.addEventListener('touchstart', i, !1),
          () => {
            o.removeEventListener('click', i, !1),
              o.removeEventListener('mousedown', i, !1),
              o.removeEventListener('touchend', i, !1),
              o.removeEventListener('touchstart', i, !1)
          }
        )
      }
      r.d(t, { addOutsideEventListener: () => o })
    },
    36383: (e, t, r) => {
      'use strict'
      r.d(t, { useOutsideEvent: () => i })
      var o = r(50959),
        n = r(27267)
      function i(e) {
        const {
            click: t,
            mouseDown: r,
            touchEnd: i,
            touchStart: a,
            handler: s,
            reference: l,
            ownerDocument: u = document,
          } = e,
          c = (0, o.useRef)(null),
          d = (0, o.useRef)(new CustomEvent('timestamp').timeStamp)
        return (
          (0, o.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: r, touchEnd: i, touchStart: a },
              o = l ? l.current : c.current
            return (0, n.addOutsideEventListener)(d.current, o, s, u, e)
          }, [t, r, i, a, s]),
          l || c
        )
      }
    },
    9745: (e, t, r) => {
      'use strict'
      r.d(t, { Icon: () => n })
      var o = r(50959)
      const n = o.forwardRef((e, t) => {
        const { icon: r = '', ...n } = e
        return o.createElement('span', {
          ...n,
          ref: t,
          dangerouslySetInnerHTML: { __html: r },
        })
      })
    },
    90186: (e, t, r) => {
      'use strict'
      function o(e) {
        return i(e, a)
      }
      function n(e) {
        return i(e, s)
      }
      function i(e, t) {
        const r = Object.entries(e).filter(t),
          o = {}
        for (const [e, t] of r) o[e] = t
        return o
      }
      function a(e) {
        const [t, r] = e
        return 0 === t.indexOf('data-') && 'string' == typeof r
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-')
      }
      r.d(t, {
        filterAriaProps: () => n,
        filterDataProps: () => o,
        filterProps: () => i,
        isAriaAttribute: () => s,
        isDataAttribute: () => a,
      })
    },
    67961: (e, t, r) => {
      'use strict'
      r.d(t, { OverlapManager: () => i, getRootOverlapManager: () => s })
      var o = r(50151)
      class n {
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
          ;(this._storage = new n()),
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
          const o = this._document.createElement('div')
          if (
            ((o.style.position = t.position),
            (o.style.zIndex = this._index.toString()),
            (o.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length
            if (t.index >= e) this._container.appendChild(o)
            else if (t.index <= 0)
              this._container.insertBefore(o, this._container.firstChild)
            else {
              const e = this._container.childNodes[t.index]
              this._container.insertBefore(o, e)
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(o, this._container.firstChild)
              : this._container.appendChild(o)
          return this._windows.set(e, o), ++this._index, o
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
      const a = new WeakMap()
      function s(e = document) {
        const t = e.getElementById('overlap-manager-root')
        if (null !== t) return (0, o.ensureDefined)(a.get(t))
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
          return a.set(r, t), t.setContainer(r), e.body.appendChild(r), t
        }
      }
    },
    967: (e, t, r) => {
      'use strict'
      r.d(t, { weekDaysMiniNames: () => a, weekDaysShortNames: () => i })
      var o = r(44352),
        n = r(84917)
      n.Months.JANUARY,
        o.t(null, void 0, r(26910)),
        n.Months.FEBRUARY,
        o.t(null, void 0, r(16467)),
        n.Months.MARCH,
        o.t(null, void 0, r(84675)),
        n.Months.APRIL,
        o.t(null, void 0, r(97637)),
        n.Months.MAY,
        o.t(null, void 0, r(68327)),
        n.Months.JUNE,
        o.t(null, void 0, r(49385)),
        n.Months.JULY,
        o.t(null, void 0, r(23230)),
        n.Months.AUGUST,
        o.t(null, void 0, r(86797)),
        n.Months.SEPTEMBER,
        o.t(null, void 0, r(61132)),
        n.Months.OCTOBER,
        o.t(null, void 0, r(90784)),
        n.Months.NOVEMBER,
        o.t(null, void 0, r(71194)),
        n.Months.DECEMBER,
        o.t(null, void 0, r(55669)),
        n.Months.JANUARY,
        o.t(null, void 0, r(95425)),
        n.Months.FEBRUARY,
        o.t(null, void 0, r(35050)),
        n.Months.MARCH,
        o.t(null, void 0, r(51369)),
        n.Months.APRIL,
        o.t(null, void 0, r(42762)),
        n.Months.MAY,
        o.t(null, { context: 'short' }, r(27991)),
        n.Months.JUNE,
        o.t(null, void 0, r(15224)),
        n.Months.JULY,
        o.t(null, void 0, r(6215)),
        n.Months.AUGUST,
        o.t(null, void 0, r(38465)),
        n.Months.SEPTEMBER,
        o.t(null, void 0, r(57902)),
        n.Months.OCTOBER,
        o.t(null, void 0, r(73546)),
        n.Months.NOVEMBER,
        o.t(null, void 0, r(71230)),
        n.Months.DECEMBER,
        o.t(null, void 0, r(92203)),
        n.WeekDays.SUNDAY,
        o.t(null, void 0, r(72149)),
        n.WeekDays.MONDAY,
        o.t(null, void 0, r(61199)),
        n.WeekDays.TUESDAY,
        o.t(null, void 0, r(44979)),
        n.WeekDays.WEDNESDAY,
        o.t(null, void 0, r(7147)),
        n.WeekDays.THURSDAY,
        o.t(null, void 0, r(7951)),
        n.WeekDays.FRIDAY,
        o.t(null, void 0, r(72970)),
        n.WeekDays.SATURDAY,
        o.t(null, void 0, r(1144))
      const i = {
          [n.WeekDays.SUNDAY]: o.t(null, void 0, r(86577)),
          [n.WeekDays.MONDAY]: o.t(null, void 0, r(83085)),
          [n.WeekDays.TUESDAY]: o.t(null, void 0, r(94316)),
          [n.WeekDays.WEDNESDAY]: o.t(null, void 0, r(75094)),
          [n.WeekDays.THURSDAY]: o.t(null, void 0, r(9787)),
          [n.WeekDays.FRIDAY]: o.t(null, void 0, r(564)),
          [n.WeekDays.SATURDAY]: o.t(null, void 0, r(36835)),
        },
        a = {
          [n.WeekDays.SUNDAY]: o.t(null, { context: 'day_of_week' }, r(85954)),
          [n.WeekDays.MONDAY]: o.t(
            null,
            {
              context: 'day_of_week',
            },
            r(11268),
          ),
          [n.WeekDays.TUESDAY]: o.t(null, { context: 'day_of_week' }, r(31533)),
          [n.WeekDays.WEDNESDAY]: o.t(
            null,
            { context: 'day_of_week' },
            r(26230),
          ),
          [n.WeekDays.THURSDAY]: o.t(
            null,
            { context: 'day_of_week' },
            r(24793),
          ),
          [n.WeekDays.FRIDAY]: o.t(null, { context: 'day_of_week' }, r(19801)),
          [n.WeekDays.SATURDAY]: o.t(
            null,
            { context: 'day_of_week' },
            r(63331),
          ),
        }
    },
    99054: (e, t, r) => {
      'use strict'
      r.d(t, { setFixedBodyState: () => u })
      const o = (() => {
        let e
        return () => {
          var t
          if (void 0 === e) {
            const r = document.createElement('div'),
              o = r.style
            ;(o.visibility = 'hidden'),
              (o.width = '100px'),
              (o.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(r)
            const n = r.offsetWidth
            r.style.overflow = 'scroll'
            const i = document.createElement('div')
            ;(i.style.width = '100%'), r.appendChild(i)
            const a = i.offsetWidth
            null === (t = r.parentNode) || void 0 === t || t.removeChild(r),
              (e = n - a)
          }
          return e
        }
      })()
      function n(e, t, r) {
        null !== e && e.style.setProperty(t, r)
      }
      function i(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t)
      }
      function a(e, t) {
        return parseInt(i(e, t))
      }
      let s = 0,
        l = !1
      function u(e) {
        const { body: t } = document,
          r = t.querySelector('.widgetbar-wrap')
        if (e && 1 == ++s) {
          const e = i(t, 'overflow'),
            s = a(t, 'padding-right')
          'hidden' !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (n(r, 'right', `${o()}px`),
            (t.style.paddingRight = `${s + o()}px`),
            (l = !0)),
            t.classList.add('i-no-scroll')
        } else if (
          !e &&
          s > 0 &&
          0 == --s &&
          (t.classList.remove('i-no-scroll'), l)
        ) {
          n(r, 'right', '0px')
          let e = 0
          0,
            t.scrollHeight <= t.clientHeight && (e -= o()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + 'px'),
            (l = !1)
        }
      }
    },
    9481: (e, t, r) => {
      'use strict'
      r.d(t, { KeyboardDocumentListener: () => n })
      var o = r(50959)
      class n extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleKeyDown = (e) => {
              e.keyCode === this.props.keyCode && this.props.handler(e)
            })
        }
        componentDidMount() {
          document.addEventListener(
            this.props.eventType || 'keydown',
            this._handleKeyDown,
            !1,
          )
        }
        componentWillUnmount() {
          document.removeEventListener(
            this.props.eventType || 'keydown',
            this._handleKeyDown,
            !1,
          )
        }
        render() {
          return null
        }
      }
    },
    65718: (e, t, r) => {
      'use strict'
      r.d(t, { Portal: () => l, PortalContext: () => u })
      var o = r(50959),
        n = r(962),
        i = r(36174),
        a = r(67961),
        s = r(60508)
      class l extends o.PureComponent {
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
            n.createPortal(
              o.createElement(u.Provider, { value: this }, this.props.children),
              e,
            )
          )
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid)
        }
        _manager() {
          return null === this.context
            ? (0, a.getRootOverlapManager)()
            : this.context
        }
      }
      l.contextType = s.SlotContext
      const u = o.createContext(null)
    },
    60508: (e, t, r) => {
      'use strict'
      r.d(t, { Slot: () => n, SlotContext: () => i })
      var o = r(50959)
      class n extends o.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return o.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const i = o.createContext(null)
    },
    95257: (e, t) => {
      'use strict'
      var r = Symbol.for('react.element'),
        o = Symbol.for('react.portal'),
        n = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        a = Symbol.for('react.profiler'),
        s = Symbol.for('react.provider'),
        l = Symbol.for('react.context'),
        u = Symbol.for('react.forward_ref'),
        c = Symbol.for('react.suspense'),
        d = Symbol.for('react.memo'),
        h = Symbol.for('react.lazy'),
        p = Symbol.iterator
      var m = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        _ = Object.assign,
        f = {}
      function v(e, t, r) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = r || m)
      }
      function y() {}
      function S(e, t, r) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = r || m)
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
        (y.prototype = v.prototype)
      var b = (S.prototype = new y())
      ;(b.constructor = S), _(b, v.prototype), (b.isPureReactComponent = !0)
      var k = Array.isArray,
        D = Object.prototype.hasOwnProperty,
        g = { current: null },
        T = { key: !0, ref: !0, __self: !0, __source: !0 }
      function M(e, t, o) {
        var n,
          i = {},
          a = null,
          s = null
        if (null != t)
          for (n in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = '' + t.key),
          t))
            D.call(t, n) && !T.hasOwnProperty(n) && (i[n] = t[n])
        var l = arguments.length - 2
        if (1 === l) i.children = o
        else if (1 < l) {
          for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2]
          i.children = u
        }
        if (e && e.defaultProps)
          for (n in (l = e.defaultProps)) void 0 === i[n] && (i[n] = l[n])
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: g.current,
        }
      }
      function z(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === r
      }
      var E = /\/+/g
      function I(e, t) {
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
      function L(e, t, n, i, a) {
        var s = typeof e
        ;('undefined' !== s && 'boolean' !== s) || (e = null)
        var l = !1
        if (null === e) l = !0
        else
          switch (s) {
            case 'string':
            case 'number':
              l = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case r:
                case o:
                  l = !0
              }
          }
        if (l)
          return (
            (a = a((l = e))),
            (e = '' === i ? '.' + I(l, 0) : i),
            k(a)
              ? ((n = ''),
                null != e && (n = e.replace(E, '$&/') + '/'),
                L(a, t, n, '', function (e) {
                  return e
                }))
              : null != a &&
                (z(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    }
                  })(
                    a,
                    n +
                      (!a.key || (l && l.key === a.key)
                        ? ''
                        : ('' + a.key).replace(E, '$&/') + '/') +
                      e,
                  )),
                t.push(a)),
            1
          )
        if (((l = 0), (i = '' === i ? '.' : i + ':'), k(e)))
          for (var u = 0; u < e.length; u++) {
            var c = i + I((s = e[u]), u)
            l += L(s, t, n, c, a)
          }
        else if (
          ((c = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null
          })(e)),
          'function' == typeof c)
        )
          for (e = c.call(e), u = 0; !(s = e.next()).done; )
            l += L((s = s.value), t, n, (c = i + I(s, u++)), a)
        else if ('object' === s)
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
        return l
      }
      function x(e, t, r) {
        if (null == e) return e
        var o = [],
          n = 0
        return (
          L(e, o, '', '', function (e) {
            return t.call(r, e, n++)
          }),
          o
        )
      }
      function N(e) {
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
      var W = { current: null },
        U = { transition: null },
        C = {
          ReactCurrentDispatcher: W,
          ReactCurrentBatchConfig: U,
          ReactCurrentOwner: g,
        }
      ;(t.Children = {
        map: x,
        forEach: function (e, t, r) {
          x(
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
            x(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            x(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!z(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return e
        },
      }),
        (t.Component = v),
        (t.Fragment = n),
        (t.Profiler = a),
        (t.PureComponent = S),
        (t.StrictMode = i),
        (t.Suspense = c),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C),
        (t.cloneElement = function (e, t, o) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            )
          var n = _({}, e.props),
            i = e.key,
            a = e.ref,
            s = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (s = g.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps
            for (u in t)
              D.call(t, u) &&
                !T.hasOwnProperty(u) &&
                (n[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
          }
          var u = arguments.length - 2
          if (1 === u) n.children = o
          else if (1 < u) {
            l = Array(u)
            for (var c = 0; c < u; c++) l[c] = arguments[c + 2]
            n.children = l
          }
          return {
            $$typeof: r,
            type: e.type,
            key: i,
            ref: a,
            props: n,
            _owner: s,
          }
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: l,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          )
        }),
        (t.createElement = M),
        (t.createFactory = function (e) {
          var t = M.bind(null, e)
          return (t.type = e), t
        }),
        (t.createRef = function () {
          return { current: null }
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e }
        }),
        (t.isValidElement = z),
        (t.lazy = function (e) {
          return {
            $$typeof: h,
            _payload: { _status: -1, _result: e },
            _init: N,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = U.transition
          U.transition = {}
          try {
            e()
          } finally {
            U.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return W.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return W.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return W.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return W.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return W.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return W.current.useImperativeHandle(e, t, r)
        }),
        (t.useInsertionEffect = function (e, t) {
          return W.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return W.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return W.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, r) {
          return W.current.useReducer(e, t, r)
        }),
        (t.useRef = function (e) {
          return W.current.useRef(e)
        }),
        (t.useState = function (e) {
          return W.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return W.current.useSyncExternalStore(e, t, r)
        }),
        (t.useTransition = function () {
          return W.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, r) => {
      'use strict'
      e.exports = r(95257)
    },
    93317: (e) => {
      e.exports = {
        popupDialog: 'popupDialog-mBXAEZtB',
        content: 'content-mBXAEZtB',
        row: 'row-mBXAEZtB',
        column: 'column-mBXAEZtB',
        title: 'title-mBXAEZtB',
        value: 'value-mBXAEZtB',
        columnTitle: 'columnTitle-mBXAEZtB',
        columnValue: 'columnValue-mBXAEZtB',
      }
    },
    18510: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { showSymbolInfoDialog: () => G, tickSize: () => F })
      var o = r(962),
        n = r(50959),
        i = r(50151),
        a = r(967),
        s = r(82992),
        l = r(44352),
        u = r(36174),
        c = r(24658),
        d = r(41249),
        h = r.n(d),
        p = r(14483),
        m = r(61146)
      function _(e, t) {
        const r = Math.floor(t / 1e4) % 1e4,
          o = (Math.floor(t / 100) % 100) - 1,
          n = t % 100
        return e.format(new Date(Date.UTC(r, o, n)))
      }
      var f = r(42960),
        v = r(97304),
        y = r(2438),
        S = r(63016),
        b = r(97754),
        k = r(5943),
        D = r(8636),
        g = r(9745)
      function T(e) {
        const t = e.hideIcon
          ? null
          : n.createElement(g.Icon, {
              className: k.close,
              icon: D,
              onClick: e.onClose,
            })
        return n.createElement(
          'div',
          {
            className: b(k.header, e.className),
            'data-dragg-area': !0,
            ref: e.reference,
          },
          e.children,
          t,
        )
      }
      r(17817)
      var M = r(71425)
      function z(e) {
        return n.createElement(
          'div',
          { className: b(M.body, e.className), ref: e.reference },
          e.children,
        )
      }
      r(36383), r(23455)
      var E = r(9481),
        I = r(76422),
        L = r(52092),
        x = r(93317)
      class N extends n.PureComponent {
        constructor() {
          super(...arguments), (this._close = () => this.props.onClose())
        }
        componentDidMount() {
          I.subscribe(L.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null)
        }
        componentWillUnmount() {
          I.unsubscribe(L.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null)
        }
        render() {
          return n.createElement(
            S.PopupDialog,
            {
              className: x.popupDialog,
              isOpened: this.props.isOpened,
              onClickOutside: this.props.onClose,
            },
            n.createElement(
              T,
              { onClose: this.props.onClose },
              l.t(null, void 0, r(12014)),
            ),
            n.createElement(
              z,
              null,
              n.createElement(E.KeyboardDocumentListener, {
                keyCode: 27,
                handler: this.props.onClose,
              }),
              n.createElement(
                'div',
                { className: x.content, 'data-symbol-info-dialog-content': !0 },
                this._renderFields(),
              ),
            ),
          )
        }
        _renderFields() {
          return this.props.fields
            ? this.props.fields.map((e, t) =>
                n.createElement(
                  'div',
                  { key: e.propName + t.toString(), className: x.row },
                  n.createElement(
                    'div',
                    { className: b(x.column, x.columnTitle) },
                    n.createElement('span', { className: x.title }, e.title),
                  ),
                  n.createElement(
                    'div',
                    { className: b(x.column, x.columnValue) },
                    n.createElement(
                      'span',
                      { className: x.value },
                      (function (e) {
                        const t = e.value || e.defValue || '-'
                        if (e.setHtml)
                          return n.createElement('span', {
                            dangerouslySetInnerHTML: { __html: t },
                          })
                        return t
                      })(e),
                    ),
                  ),
                ),
              )
            : []
        }
      }
      var W = r(38618),
        U = r(32923),
        C = r(38223)
      function w(e) {
        for (; e > h().minutesPerDay; ) e -= h().minutesPerDay
        const t = e % 60,
          r = (e - t) / 60,
          o =
            (0, m.numberToStringWithLeadingZero)(r, 2) +
            ':' +
            (0, m.numberToStringWithLeadingZero)(t, 2)
        return (0, C.isRtl)() ? (0, C.startWithLTR)(o) : o
      }
      function A(e, t, r) {
        const { weekDays: o, closed: n } = r
        return t.map((t) => {
          const r = e.filter((e) => e.dayOfWeek() === t),
            i = `${o[t]} `
          if (0 === r.length) return `${i}${n}`
          const a = r.map((e) => {
            const t = e.sessionStartDayOfWeek(),
              r = e.sessionStartDaysOffset(),
              n = (function (e, t) {
                let r = e + t
                for (; r > h().SATURDAY; ) r -= h().SATURDAY
                return r
              })(t, r === e.sessionEndDaysOffset() ? 0 : r),
              i = t !== e.dayOfWeek() || n !== e.dayOfWeek(),
              a = i ? o[t] : '',
              s = i ? o[n] : ''
            return `${w(e.start())}${a}-${w(e.start() + e.length())}${s}`
          })
          return `${i}${a.join(', ')}`
        })
      }
      let Y = null
      const j = [
          d.MONDAY,
          d.TUESDAY,
          d.WEDNESDAY,
          d.THURSDAY,
          d.FRIDAY,
          d.SATURDAY,
          d.SUNDAY,
        ],
        H = j.reduce((e, t) => ((e[t] = a.weekDaysMiniNames[t]), e), {})
      function P(e) {
        return (
          !(0, f.isEconomicSymbol)(e) &&
          !(function (e, t) {
            var r
            return (
              t.indexOf(
                null !== (r = e.listed_exchange) && void 0 !== r ? r : '',
              ) >= 0
            )
          })(e, ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'])
        )
      }
      function O(e) {
        var t
        return (
          (null !== (t = e.minmove2) && void 0 !== t ? t : 0) > 0 &&
          !e.fractional &&
          0 !== e.pricescale
        )
      }
      function R(e) {
        return O(e) && void 0 !== e.pricescale
          ? new m.PriceFormatter(
              e.pricescale / (0, i.ensureDefined)(e.minmove2),
            ).format((0, i.ensureDefined)(e.minmove2) / e.pricescale)
          : null
      }
      function F(e) {
        const { minmov: t, pricescale: o, fractional: n, minmove2: i } = e
        if (void 0 === t || void 0 === o) return null
        if (n && o && t)
          return i
            ? l.t(
                null,
                {
                  context: 'double fractional tick size',
                  replace: { minmove2: String(i), pricescale: String(o / i) },
                },
                r(72653),
              )
            : `${t}/${o}`
        const { variable_tick_size: a, ...s } = e
        return (0, f.createSeriesFormatter)(s, 'default').format(t / o)
      }
      function B(e) {
        var t
        return (0, c.marketType)(
          null !== (t = e.type) && void 0 !== t ? t : '',
          e.typespecs,
        )
      }
      function J(e) {
        return 'futures' === e.type && 'front_contract' in e
      }
      function V(e) {
        return !(0, f.isEconomicSymbol)(e)
      }
      function $(e) {
        return 'expiration' in e
      }
      function K(e) {
        var t, r, o
        return null !==
          (o =
            null !==
              (r =
                null === (t = e.source2) || void 0 === t
                  ? void 0
                  : t.description) && void 0 !== r
              ? r
              : e.source) && void 0 !== o
          ? o
          : null
      }
      function Z(e) {
        return (0, f.isEconomicSymbol)(e) && Boolean(K(e))
      }
      function G(e, t) {
        Q({ isOpened: !1, onClose: () => {}, fields: [] }),
          null === e && (e = s.linking.symbol.value()),
          (e += '')
        const n = t && t.symbolInfo,
          a = [
            {
              title: l.t(null, void 0, r(35383)),
              propName: (0, p.enabled)('charting_library_base')
                ? 'name'
                : 'pro_name',
            },
            { title: l.t(null, void 0, r(28174)), propName: 'description' },
            { title: l.t(null, void 0, r(90656)), propName: 'type', getter: B },
            {
              title: l.t(null, void 0, r(49263)),
              propName: 'expiration',
              visibility: $,
              formatter: _.bind(null, t.dateFormatter),
            },
            {
              title: l.t(null, void 0, r(22992)),
              propName: 'front_contract',
              visibility: J,
            },
            { title: l.t(null, void 0, r(64659)), propName: 'pointvalue' },
            {
              title: l.t(null, void 0, r(77295)),
              propName: 'exchange',
              visibility: V,
            },
            {
              title: l.t(null, void 0, r(91617)),
              propName: 'listed_exchange',
              visibility: V,
            },
            {
              title: l.t(null, void 0, r(46147)),
              propName: 'source',
              getter: K,
              visibility: Z,
            },
            {
              title: l.t(null, void 0, r(50985)),
              propName: 'currency_code',
              getter: (e) => (0, f.symbolOriginalCurrency)(e, !0),
              visibility: (e) => Boolean((0, f.symbolOriginalCurrency)(e, !0)),
              formatter: (e) => (null != e ? e : ''),
              defValue: '',
            },
            {
              title: l.t(null, void 0, r(59607)),
              propName: 'value_unit_id',
              getter: (e) => t.unitDescription((0, f.measureUnitId)(e)),
              visibility: (e) =>
                Boolean((0, f.measureUnitId)(e)) &&
                (0, f.isMeasureUnitSymbol)(e) &&
                t.showUnit,
              formatter: (e) => (null != e ? e : ''),
              defValue: '',
            },
            {
              title: l.t(null, void 0, r(77534)),
              propName: 'unit_id',
              getter: (e) =>
                t.unitDescription((0, f.symbolOriginalUnit)(e, t.showUnit)),
              visibility: (e) =>
                Boolean((0, f.symbolOriginalUnit)(e, t.showUnit)) &&
                !(0, f.isMeasureUnitSymbol)(e),
              formatter: (e) => (null != e ? e : ''),
              defValue: '',
            },
            {
              title: l.t(null, void 0, r(45221)),
              propName: 'pip_size',
              getter: R,
              visibility: O,
            },
            {
              title: l.t(null, void 0, r(55209)),
              propName: 'tick_size',
              getter: F,
            },
            { title: l.t(null, void 0, r(31672)), propName: 'sector' },
            { title: l.t(null, void 0, r(91746)), propName: 'industry' },
            {
              title: l.t(null, void 0, r(87492)),
              propName: 'timezone',
              formatter: W.timezoneTitle,
              visibility: P,
            },
            {
              title: l.t(null, void 0, r(25866)),
              propName: 'session_display',
              altPropName: 'session',
              formatter: X,
              visibility: P,
              setHtml: !0,
            },
          ],
          c = (0, v.getAdditionalSymbolInfoFields)()
        if (c && c.length > 0)
          for (const e of c)
            a.push({ title: e.title, propName: e.propertyName })
        const d = n ? te(n, a) : 0,
          h = {
            isOpened: !0,
            onClose: () => {
              Q({ isOpened: !1, onClose: () => {}, fields: [] }),
                o.unmountComponentAtNode((0, i.ensureNotNull)(Y)),
                (Y = null)
            },
            fields: a,
          }
        if (d < a.length) {
          const t = 'symbolinfodialog.' + (0, u.guid)(),
            r = (0, y.getQuoteSessionInstance)('full')
          r.subscribe(t, e, (o, n) => {
            te(n.values, a), r.unsubscribe(t, (0, i.ensureNotNull)(e)), Q(h)
          })
        }
        Q(h)
      }
      function Q(e) {
        Y ||
          ((Y = document.createElement('div')), document.body.appendChild(Y)),
          o.render(n.createElement(N, e), Y)
      }
      function X(e) {
        const t = new U.SessionSpec('Etc/UTC', e),
          o = { weekDays: H, closed: l.t(null, void 0, r(25219)) }
        return A(t.entries(), j, o).join('<br>')
      }
      function q(e) {
        var t
        return null !== (t = null == e ? void 0 : e.toString()) && void 0 !== t
          ? t
          : '-'
      }
      function ee(e, t) {
        ;(void 0 === e.value || t) && (e.value = t)
      }
      function te(e, t) {
        let r = 0
        for (let o = 0; o < t.length; o++) {
          const n = t[o].getter
          if (n) {
            const i = n(e)
            null !== i && ee(t[o], i), r++
            continue
          }
          const i = t[o].propName,
            a = t[o].altPropName,
            s = i in e ? i : void 0 !== a && a in e ? a : void 0
          if (void 0 !== s) {
            const n = e[s]
            ee(t[o], (t[o].formatter || q)(n)), r++
          }
        }
        return (
          (r -= (function (e, t) {
            let r = 0
            for (let o = 0; o < t.length; o++) {
              const n = t[o]
              void 0 === n.visibility ||
                n.visibility(e) ||
                (t.splice(o, 1), o--, r++)
            }
            return r
          })(e, t)),
          r
        )
      }
    },
    24658: (e, t, r) => {
      'use strict'
      r.d(t, { marketType: () => s })
      var o = r(44352)
      const n = new Map([
        ['cfd', o.t(null, void 0, r(87592))],
        ['dr', o.t(null, void 0, r(67245))],
        ['index', o.t(null, void 0, r(12754))],
        ['forex', o.t(null, void 0, r(39512))],
        ['right', o.t(null, { context: 'symbol_type' }, r(9898))],
        ['bond', o.t(null, void 0, r(79852))],
        ['bitcoin', o.t(null, void 0, r(8448))],
        ['crypto', o.t(null, void 0, r(8448))],
        ['economic', o.t(null, void 0, r(88720))],
        ['indices', o.t(null, void 0, r(60804))],
        ['futures', o.t(null, void 0, r(81859))],
        ['stock', o.t(null, void 0, r(36931))],
        ['commodity', o.t(null, void 0, r(12629))],
      ])
      r(42053)
      const i = new Map(),
        a = new Set([
          'cfd',
          'spreadbet',
          'defi',
          'sharia',
          'yield',
          'government',
          'corporate',
          'mutual',
          'money',
          'etf',
          'unit',
          'trust',
          'reit',
          'etn',
          'convertible',
          'closedend',
          'crypto',
          'oracle',
        ])
      function s(e, t = [], r = !0) {
        const o = t.filter((e) => a.has(e)),
          s = `${e}_${o.sort().join('_')}`,
          l = i.get(s)
        if (void 0 !== l) return l
        const u = r
            ? (function (e) {
                return n.get(e) || e
              })(e)
            : e,
          c = Boolean(t.length) ? [u, ...o].join(' ') : u
        return i.set(s, c), c
      }
    },
    8636: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
    },
    72653: (e) => {
      e.exports = {
        ar: ['1/{minmove2} من 1/{pricescale}'],
        ca_ES: '1/{minmove2} of 1/{pricescale}',
        cs: '1/{minmove2} of 1/{pricescale}',
        de: ['1/{minmove2} von 1/{pricescale}'],
        el: '1/{minmove2} of 1/{pricescale}',
        en: '1/{minmove2} of 1/{pricescale}',
        es: ['1/{minmove2} de 1/{pricescale}'],
        fa: '1/{minmove2} of 1/{pricescale}',
        fr: ['1/{minmove2} de 1/{pricescale}'],
        he_IL: ['1/{minmove2} מתוך 1/{pricescale}'],
        hu_HU: '1/{minmove2} of 1/{pricescale}',
        id_ID: ['1/{minmove2} dari 1/{pricescale}'],
        it: ['1/{minmove2} di 1/{pricescale}'],
        ja: ['1/{pricescale}に対して1/{minmove2}'],
        ko: ['1/{pricescale} 의 1/{minmove2}'],
        ms_MY: ['1/{minmove2} untuk 1/{pricescale}'],
        nl_NL: '1/{minmove2} of 1/{pricescale}',
        pl: ['1/{minmove2} z 1/{pricescale}'],
        pt: ['1/{minmove2} de 1/{pricescale}'],
        ro: '1/{minmove2} of 1/{pricescale}',
        ru: ['1/{minmove2} от 1/{pricescale}'],
        sv: ['1/{minmove2} av 1/{pricescale}'],
        th: '1/{minmove2} of 1/{pricescale}',
        tr: ["1/{pricescale}'in 1/{minmove2}'si"],
        vi: ['1/{minmove2} trong số 1/{pricescale}'],
        zh: ['1/{pricescale}的1/{minmove2}'],
        zh_TW: ['1/{pricescale}的1/{minmove2}'],
      }
    },
    19801: (e) => {
      e.exports = {
        ar: ['الجمعة'],
        ca_ES: ['Dv'],
        cs: 'Fr',
        de: 'Fr',
        el: 'Fr',
        en: 'Fr',
        es: ['V'],
        fa: 'Fr',
        fr: ['Ven'],
        he_IL: ['שישי'],
        hu_HU: ['P'],
        id_ID: ['Jum'],
        it: ['Ven'],
        ja: ['金'],
        ko: ['금'],
        ms_MY: 'Fr',
        nl_NL: 'Fr',
        pl: ['Pt'],
        pt: ['Sexta'],
        ro: 'Fr',
        ru: ['Пт'],
        sv: 'Fr',
        th: 'Fr',
        tr: ['Cum'],
        vi: 'Fr',
        zh: ['周五'],
        zh_TW: ['周五'],
      }
    },
    11268: (e) => {
      e.exports = {
        ar: ['الاثنين'],
        ca_ES: ['Dl'],
        cs: 'Mo',
        de: 'Mo',
        el: 'Mo',
        en: 'Mo',
        es: ['L'],
        fa: 'Mo',
        fr: 'Mo',
        he_IL: ['שני'],
        hu_HU: ['H'],
        id_ID: ['Sen'],
        it: ['Lun'],
        ja: ['月'],
        ko: ['월'],
        ms_MY: 'Mo',
        nl_NL: 'Mo',
        pl: ['Pn'],
        pt: ['Seg'],
        ro: 'Mo',
        ru: ['Пн'],
        sv: 'Mo',
        th: ['โม'],
        tr: ['Pzt'],
        vi: 'Mo',
        zh: ['周一'],
        zh_TW: ['周一'],
      }
    },
    63331: (e) => {
      e.exports = {
        ar: ['السبت'],
        ca_ES: ['Ds'],
        cs: 'Sa',
        de: 'Sa',
        el: 'Sa',
        en: 'Sa',
        es: ['Sáb'],
        fa: 'Sa',
        fr: 'Sa',
        he_IL: ['שבת'],
        hu_HU: ['Szo'],
        id_ID: ['Sab'],
        it: ['Sab'],
        ja: ['土'],
        ko: ['토'],
        ms_MY: 'Sa',
        nl_NL: 'Sa',
        pl: ['Sob.'],
        pt: ['Sáb.'],
        ro: 'Sa',
        ru: ['Сб'],
        sv: 'Sa',
        th: 'Sa',
        tr: ['Cmt'],
        vi: 'Sa',
        zh: ['周六'],
        zh_TW: ['周六'],
      }
    },
    85954: (e) => {
      e.exports = {
        ar: ['الأحد'],
        ca_ES: ['Dg'],
        cs: 'Su',
        de: 'Su',
        el: 'Su',
        en: 'Su',
        es: ['Do'],
        fa: 'Su',
        fr: 'Su',
        he_IL: ['ראשון'],
        hu_HU: ['V'],
        id_ID: ['Min'],
        it: ['Dom'],
        ja: ['日'],
        ko: ['일'],
        ms_MY: 'Su',
        nl_NL: 'Su',
        pl: ['Nd.'],
        pt: ['Dom'],
        ro: 'Su',
        ru: ['Вс'],
        sv: 'Su',
        th: 'Su',
        tr: ['Paz'],
        vi: 'Su',
        zh: ['周日'],
        zh_TW: ['周日'],
      }
    },
    26230: (e) => {
      e.exports = {
        ar: ['الأربعاء'],
        ca_ES: ['Dc'],
        cs: 'We',
        de: 'We',
        el: 'We',
        en: 'We',
        es: ['X'],
        fa: 'We',
        fr: 'We',
        he_IL: 'We',
        hu_HU: ['Sze'],
        id_ID: ['Rab'],
        it: ['Mer'],
        ja: ['水'],
        ko: ['수'],
        ms_MY: 'We',
        nl_NL: 'We',
        pl: ['Śr'],
        pt: ['Quarta'],
        ro: 'We',
        ru: ['Ср'],
        sv: 'We',
        th: ['วันพุธ'],
        tr: ['Çar'],
        vi: ['T4'],
        zh: ['周三'],
        zh_TW: ['周三'],
      }
    },
    24793: (e) => {
      e.exports = {
        ar: ['الخميس'],
        ca_ES: ['Dj'],
        cs: 'Th',
        de: 'Th',
        el: 'Th',
        en: 'Th',
        es: ['Ju'],
        fa: 'Th',
        fr: 'Th',
        he_IL: ['חמישי'],
        hu_HU: ['Cs'],
        id_ID: ['Kam'],
        it: ['Gio'],
        ja: ['木'],
        ko: ['목'],
        ms_MY: 'Th',
        nl_NL: 'Th',
        pl: ['Czw.'],
        pt: ['Quinta'],
        ro: 'Th',
        ru: ['Чт'],
        sv: 'Th',
        th: 'Th',
        tr: ['Per'],
        vi: 'Th',
        zh: ['周四'],
        zh_TW: ['周四'],
      }
    },
    31533: (e) => {
      e.exports = {
        ar: ['الثلاثاء'],
        ca_ES: ['Ma'],
        cs: 'Tu',
        de: 'Tu',
        el: 'Tu',
        en: 'Tu',
        es: ['Ma'],
        fa: 'Tu',
        fr: 'Tu',
        he_IL: ['שלישי'],
        hu_HU: ['K'],
        id_ID: ['Sel'],
        it: ['Mar'],
        ja: ['火'],
        ko: ['화'],
        ms_MY: 'Tu',
        nl_NL: 'Tu',
        pl: ['Wt'],
        pt: ['Terça'],
        ro: 'Tu',
        ru: ['Вт'],
        sv: 'Tu',
        th: 'Tu',
        tr: ['Sal'],
        vi: ['Thứ 3'],
        zh: ['周二'],
        zh_TW: ['周二'],
      }
    },
    9898: (e) => {
      e.exports = {
        ar: ['حق'],
        ca_ES: ['Right (dret de subscripció)'],
        cs: 'Right',
        de: ['Rechter'],
        el: 'Right',
        en: 'Right',
        es: ['Right (derecho de suscripción)'],
        fa: 'Right',
        fr: ['De droite'],
        he_IL: ['זכות Right'],
        hu_HU: 'Right',
        id_ID: ['Kanan'],
        it: ['Diritto'],
        ja: ['ストックオプション'],
        ko: ['라이트'],
        ms_MY: ['Benar'],
        nl_NL: 'Right',
        pl: ['Prawo do udostępniania'],
        pt: ['Direita'],
        ro: 'Right',
        ru: ['Право на акцию'],
        sv: ['Höger'],
        th: ['สิทธิ'],
        tr: ['Sağ'],
        vi: ['Phải'],
        zh: ['认股权'],
        zh_TW: ['認股權'],
      }
    },
    25219: (e) => {
      e.exports = {
        ar: ['مُغلقة'],
        ca_ES: ['Tancat'],
        cs: 'Closed',
        de: ['Geschlossen'],
        el: 'Closed',
        en: 'Closed',
        es: ['Cerrado'],
        fa: 'Closed',
        fr: ['Fermé'],
        he_IL: ['סגור'],
        hu_HU: ['Záró'],
        id_ID: ['Telah Ditutup'],
        it: ['Chiuso'],
        ja: ['終了'],
        ko: ['장종료'],
        ms_MY: ['Ditutup'],
        nl_NL: 'Closed',
        pl: ['Zamknięte'],
        pt: ['Fechado'],
        ro: 'Closed',
        ru: ['Закрыт'],
        sv: ['Stängd'],
        th: ['ปิดแล้ว'],
        tr: ['Kapalı'],
        vi: ['Đóng'],
        zh: ['已关闭'],
        zh_TW: ['已關閉'],
      }
    },
    50985: (e) => {
      e.exports = {
        ar: ['عملة'],
        ca_ES: ['Divisa'],
        cs: ['Měna'],
        de: ['Währung'],
        el: 'Currency',
        en: 'Currency',
        es: ['Divisa'],
        fa: 'Currency',
        fr: ['Devise'],
        he_IL: ['מַטְבֵּעַ'],
        hu_HU: ['Valuta'],
        id_ID: ['Mata Uang'],
        it: ['Valuta'],
        ja: ['通貨'],
        ko: ['통화'],
        ms_MY: ['Mata wang'],
        nl_NL: 'Currency',
        pl: ['Waluta'],
        pt: ['Moeda'],
        ro: 'Currency',
        ru: ['Валюта'],
        sv: ['Valuta'],
        th: ['สกุลเงิน'],
        tr: ['Döviz'],
        vi: ['Tiền tệ'],
        zh: ['货币'],
        zh_TW: ['貨幣'],
      }
    },
    22992: (e) => {
      e.exports = {
        ar: ['العقد الحالي'],
        ca_ES: ['Contracte vigent'],
        cs: ['Current Contract'],
        de: ['Aktueller Kontrakt'],
        el: ['Current Contract'],
        en: 'Current contract',
        es: ['Contrato vigente'],
        fa: ['Current Contract'],
        fr: ['Contrat en cours'],
        he_IL: ['החוזה הנוכחי'],
        hu_HU: ['Current Contract'],
        id_ID: ['Kontrak Saat Ini'],
        it: ['Contratto corrente'],
        ja: ['当限'],
        ko: ['커런트 컨트랙트'],
        ms_MY: ['Kontrak Semasa'],
        nl_NL: ['Current Contract'],
        pl: ['Aktualny kontrakt'],
        pt: ['Contrato atual'],
        ro: ['Current Contract'],
        ru: ['Текущий контракт'],
        sv: ['Nuvarande kontrakt'],
        th: ['สัญญาปัจจุบัน'],
        tr: ['Mevcut Sözleşme'],
        vi: ['Hợp đồng hiện tại'],
        zh: ['当前合约'],
        zh_TW: ['Current Contract'],
      }
    },
    97637: (e) => {
      e.exports = {
        ar: ['أبريل'],
        ca_ES: ['Abril'],
        cs: 'April',
        de: 'April',
        el: 'April',
        en: 'April',
        es: ['Abril'],
        fa: ['آوریل'],
        fr: ['Avril'],
        he_IL: ['‏אפריל'],
        hu_HU: ['Április'],
        id_ID: 'April',
        it: ['Aprile'],
        ja: ['4月'],
        ko: ['4월'],
        ms_MY: 'April',
        nl_NL: 'April',
        pl: ['Kwiecień'],
        pt: ['Abril'],
        ro: 'April',
        ru: ['Апрель'],
        sv: 'April',
        th: ['เมษายน'],
        tr: ['Nisan'],
        vi: ['Tháng Tư'],
        zh: ['4月'],
        zh_TW: ['四月'],
      }
    },
    86797: (e) => {
      e.exports = {
        ar: ['أغسطس'],
        ca_ES: ['Agost'],
        cs: 'August',
        de: 'August',
        el: 'August',
        en: 'August',
        es: ['Agosto'],
        fa: ['آگوست'],
        fr: ['Août'],
        he_IL: ['‏אוגוסט'],
        hu_HU: ['Augusztus'],
        id_ID: ['Agustus'],
        it: ['Agosto'],
        ja: ['8月'],
        ko: ['8월'],
        ms_MY: ['Ogos'],
        nl_NL: 'August',
        pl: ['Sierpień'],
        pt: ['Agosto'],
        ro: 'August',
        ru: ['Август'],
        sv: ['Augusti'],
        th: ['สิงหาคม'],
        tr: ['Ağustos'],
        vi: ['Tháng Tám'],
        zh: ['8月'],
        zh_TW: ['八月'],
      }
    },
    79852: (e) => {
      e.exports = {
        ar: ['سند'],
        ca_ES: ['Bo'],
        cs: 'Bond',
        de: ['Anleihe'],
        el: 'Bond',
        en: 'Bond',
        es: ['Bono'],
        fa: 'Bond',
        fr: ['Obligation'],
        he_IL: ['אגרת חוב'],
        hu_HU: 'Bond',
        id_ID: ['Surat hutang'],
        it: ['Obbligazione'],
        ja: ['債券'],
        ko: ['채권'],
        ms_MY: ['Bon'],
        nl_NL: 'Bond',
        pl: ['Obligacja'],
        pt: ['Título'],
        ro: 'Bond',
        ru: ['Облигации'],
        sv: ['Obligation'],
        th: ['พันธบัตร'],
        tr: ['Tahvil'],
        vi: ['Trái phiếu'],
        zh: ['债券'],
        zh_TW: ['債券'],
      }
    },
    55669: (e) => {
      e.exports = {
        ar: ['ديسمبر'],
        ca_ES: ['Desembre'],
        cs: 'December',
        de: ['Dezember'],
        el: 'December',
        en: 'December',
        es: ['Diciembre'],
        fa: ['دسامبر'],
        fr: ['Décembre'],
        he_IL: ['דצמבר‏'],
        hu_HU: 'December',
        id_ID: ['Desember'],
        it: ['Dicembre'],
        ja: ['12月'],
        ko: ['12월'],
        ms_MY: ['Disember'],
        nl_NL: 'December',
        pl: ['Grudzień'],
        pt: ['Dezembro'],
        ro: 'December',
        ru: ['Декабрь'],
        sv: 'December',
        th: ['ธันวาคม'],
        tr: ['Aralık'],
        vi: ['Tháng Mười hai'],
        zh: ['12月'],
        zh_TW: ['十二月'],
      }
    },
    49263: (e) => {
      e.exports = {
        ar: ['تاريخ انتهاء الصلاحية'],
        ca_ES: ['Data de caducitat'],
        cs: 'Expiration date',
        de: ['Ablaufdatum'],
        el: 'Expiration date',
        en: 'Expiration date',
        es: ['Fecha de vencimiento'],
        fa: 'Expiration date',
        fr: ["Date d'expiration"],
        he_IL: ['תאריך תפוגה'],
        hu_HU: 'Expiration date',
        id_ID: ['Tanggal kadaluarsa'],
        it: ['Data di scadenza'],
        ja: ['有効期限'],
        ko: ['만기 날짜'],
        ms_MY: ['Tarikh tamat tempoh'],
        nl_NL: 'Expiration date',
        pl: ['Data ważności'],
        pt: ['Data de expiração'],
        ro: 'Expiration date',
        ru: ['Истечение срока'],
        sv: ['Utgångsdatum'],
        th: ['วันหมดอายุ'],
        tr: ['Son kullanma tarihi'],
        vi: ['Ngày hết hạn'],
        zh: ['到期日'],
        zh_TW: ['到期日'],
      }
    },
    16467: (e) => {
      e.exports = {
        ar: ['فبراير'],
        ca_ES: ['Febrer'],
        cs: 'February',
        de: ['Februar'],
        el: 'February',
        en: 'February',
        es: ['Febrero'],
        fa: 'February',
        fr: ['Février'],
        he_IL: ['פברואר‏'],
        hu_HU: ['Február'],
        id_ID: ['Februari'],
        it: ['Febbraio'],
        ja: ['2月'],
        ko: ['2월'],
        ms_MY: ['Februari'],
        nl_NL: 'February',
        pl: ['Luty'],
        pt: ['Fevereiro'],
        ro: 'February',
        ru: ['Февраль'],
        sv: ['Februari'],
        th: ['กุมภาพันธ์'],
        tr: ['Şubat'],
        vi: ['Tháng Hai'],
        zh: ['2月'],
        zh_TW: ['二月'],
      }
    },
    564: (e) => {
      e.exports = {
        ar: ['الجمعة'],
        ca_ES: ['Dv'],
        cs: 'Fri',
        de: ['Fr'],
        el: 'Fri',
        en: 'Fri',
        es: ['Vi'],
        fa: 'Fri',
        fr: ['Ven'],
        he_IL: ['שישי'],
        hu_HU: ['Pén'],
        id_ID: ['Jum'],
        it: ['Ven'],
        ja: ['金'],
        ko: ['금'],
        ms_MY: ['Jum'],
        nl_NL: 'Fri',
        pl: ['Pt'],
        pt: ['Sexta'],
        ro: 'Fri',
        ru: ['Пт'],
        sv: ['Fre'],
        th: ['ศุกร์'],
        tr: ['Cum'],
        vi: ['Thứ 6'],
        zh: ['周五'],
        zh_TW: ['周五'],
      }
    },
    72970: (e) => {
      e.exports = {
        ar: ['الجمعة'],
        ca_ES: ['Divendres'],
        cs: 'Friday',
        de: ['Freitag'],
        el: 'Friday',
        en: 'Friday',
        es: ['Viernes'],
        fa: 'Friday',
        fr: ['Vendredi'],
        he_IL: ['יום שישי'],
        hu_HU: ['Péntek'],
        id_ID: ['Jumat'],
        it: ['Venerdì'],
        ja: ['金曜日'],
        ko: ['금요일'],
        ms_MY: ['Jumaat'],
        nl_NL: 'Friday',
        pl: ['Piątek'],
        pt: ['Sexta'],
        ro: 'Friday',
        ru: ['Пятница'],
        sv: ['Fredag'],
        th: ['วันศุกร์'],
        tr: ['Cuma'],
        vi: ['Thứ Sáu'],
        zh: ['周五'],
        zh_TW: ['周五'],
      }
    },
    91746: (e) => {
      e.exports = {
        ar: ['صناعة'],
        ca_ES: ['Indústria'],
        cs: 'Industry',
        de: ['Branche'],
        el: 'Industry',
        en: 'Industry',
        es: ['Industria'],
        fa: ['صنعت'],
        fr: ['Industrie'],
        he_IL: ['תעשיה'],
        hu_HU: ['Iparág'],
        id_ID: ['Industri'],
        it: ['Industria'],
        ja: ['業種'],
        ko: ['산업'],
        ms_MY: ['Industri'],
        nl_NL: 'Industry',
        pl: ['Branża'],
        pt: ['Indústria'],
        ro: 'Industry',
        ru: ['Отрасль'],
        sv: ['Bransch'],
        th: ['อุตสาหกรรม'],
        tr: ['Endüstri'],
        vi: ['Công nghiệp'],
        zh: ['行业'],
        zh_TW: ['產業'],
      }
    },
    26910: (e) => {
      e.exports = {
        ar: ['يناير'],
        ca_ES: ['Gener'],
        cs: 'January',
        de: ['Januar'],
        el: 'January',
        en: 'January',
        es: ['Enero'],
        fa: 'January',
        fr: ['Janvier'],
        he_IL: ['ינואר‏'],
        hu_HU: ['Január'],
        id_ID: ['Januari'],
        it: ['Gennaio'],
        ja: ['1月'],
        ko: ['1월'],
        ms_MY: ['Januari'],
        nl_NL: 'January',
        pl: ['Styczeń'],
        pt: ['Janeiro'],
        ro: 'January',
        ru: ['Январь'],
        sv: ['Januari'],
        th: ['มกราคม'],
        tr: ['Ocak'],
        vi: ['Tháng Một'],
        zh: ['1月'],
        zh_TW: ['一月'],
      }
    },
    23230: (e) => {
      e.exports = {
        ar: ['يوليو'],
        ca_ES: ['Juliol'],
        cs: 'July',
        de: ['Juli'],
        el: 'July',
        en: 'July',
        es: ['Julio'],
        fa: 'July',
        fr: ['Juillet'],
        he_IL: ['יולי‏'],
        hu_HU: ['Július'],
        id_ID: ['Juli'],
        it: ['Luglio'],
        ja: ['7月'],
        ko: ['7월'],
        ms_MY: ['Julai'],
        nl_NL: 'July',
        pl: ['Lipiec'],
        pt: ['Julho'],
        ro: 'July',
        ru: ['Июль'],
        sv: ['Juli'],
        th: ['กรกฎาคม'],
        tr: ['Temmuz'],
        vi: ['Tháng Bảy'],
        zh: ['7月'],
        zh_TW: ['七月'],
      }
    },
    49385: (e) => {
      e.exports = {
        ar: ['يونيو'],
        ca_ES: ['Juny'],
        cs: 'June',
        de: ['Juni'],
        el: 'June',
        en: 'June',
        es: ['Junio'],
        fa: 'June',
        fr: ['Juin'],
        he_IL: ['יוני‏'],
        hu_HU: ['Június'],
        id_ID: ['Juni'],
        it: ['Giugno'],
        ja: ['6月'],
        ko: ['6월'],
        ms_MY: ['Jun'],
        nl_NL: 'June',
        pl: ['Czerwiec'],
        pt: ['Junho'],
        ro: 'June',
        ru: ['Июнь'],
        sv: ['Juni'],
        th: ['มิถุนายน'],
        tr: ['Haziran'],
        vi: ['Tháng Sáu'],
        zh: ['6月'],
        zh_TW: ['六月'],
      }
    },
    90784: (e) => {
      e.exports = {
        ar: ['أكتوبر'],
        ca_ES: ['Octubre'],
        cs: 'October',
        de: 'October',
        el: 'October',
        en: 'October',
        es: ['Octubre'],
        fa: 'October',
        fr: ['Octobre'],
        he_IL: ['אוקטובר‏'],
        hu_HU: ['Október'],
        id_ID: ['Oktober'],
        it: ['Ottobre'],
        ja: ['10月'],
        ko: ['10월'],
        ms_MY: ['Oktober'],
        nl_NL: 'October',
        pl: ['Październik'],
        pt: ['Outubro'],
        ro: 'October',
        ru: ['Октябрь'],
        sv: ['Oktober'],
        th: ['ตุลาคม'],
        tr: ['Ekim'],
        vi: ['Tháng Mười'],
        zh: ['10月'],
        zh_TW: ['十月'],
      }
    },
    91617: (e) => {
      e.exports = {
        ar: ['البورصة المدرجة'],
        ca_ES: ['Mercat cotitzat'],
        cs: ['Listed Exchange'],
        de: ['Gelistete Börse'],
        el: ['Listed Exchange'],
        en: 'Listed exchange',
        es: ['Mercado cotizado'],
        fa: ['Listed Exchange'],
        fr: ['Bourse agréée'],
        he_IL: ['בורסה רשומה'],
        hu_HU: ['Listázott Tőzsde'],
        id_ID: ['Bursa Terdaftar'],
        it: ['Quotato in borsa'],
        ja: ['上場取引所'],
        ko: ['상장 거래소'],
        ms_MY: ['Bursa Tersenarai'],
        nl_NL: ['Listed Exchange'],
        pl: ['Wymieniona Giełda'],
        pt: ['Bolsa listada'],
        ro: ['Listed Exchange'],
        ru: ['Зарегистрирован'],
        sv: ['Listad börs'],
        th: ['รายการตลาดหลักทรัพย์'],
        tr: ['Kayıtlı Borsa'],
        vi: ['Giao dịch đã thống kê'],
        zh: ['上市交易所'],
        zh_TW: ['列表交易所'],
      }
    },
    83085: (e) => {
      e.exports = {
        ar: ['يوم الاثنين'],
        ca_ES: ['Dl'],
        cs: 'Mon',
        de: 'Mon',
        el: 'Mon',
        en: 'Mon',
        es: ['Lu'],
        fa: 'Mon',
        fr: ['Lun'],
        he_IL: ['שני'],
        hu_HU: ['Hét'],
        id_ID: ['Sen'],
        it: ['Lun'],
        ja: ['月'],
        ko: ['월'],
        ms_MY: ['Isnin'],
        nl_NL: 'Mon',
        pl: ['Pon'],
        pt: ['Seg'],
        ro: 'Mon',
        ru: ['Пн'],
        sv: ['Mån'],
        th: ['จันทร์'],
        tr: ['Pzt'],
        vi: ['Thứ 2'],
        zh: ['周一'],
        zh_TW: ['周一'],
      }
    },
    61199: (e) => {
      e.exports = {
        ar: ['الاثنين'],
        ca_ES: ['Dilluns'],
        cs: 'Monday',
        de: ['Montag'],
        el: 'Monday',
        en: 'Monday',
        es: ['Lunes'],
        fa: 'Monday',
        fr: ['Lundi'],
        he_IL: ['יום שני'],
        hu_HU: ['Hétfő'],
        id_ID: ['Senin'],
        it: ['Lunedì'],
        ja: ['月曜日'],
        ko: ['월요일'],
        ms_MY: ['Isnin'],
        nl_NL: 'Monday',
        pl: ['Poniedziałek'],
        pt: ['Segunda'],
        ro: 'Monday',
        ru: ['Понедельник'],
        sv: ['Måndag'],
        th: ['วันจันทร์'],
        tr: ['Pazartesi'],
        vi: ['Thứ Hai'],
        zh: ['周一'],
        zh_TW: ['周一'],
      }
    },
    68327: (e) => {
      e.exports = {
        ar: ['مايو'],
        ca_ES: ['Maig'],
        cs: ['Květen'],
        de: ['Mai'],
        el: ['Μαι'],
        en: 'May',
        es: ['Mayo'],
        fa: ['می'],
        fr: ['Mai'],
        he_IL: ['מאי'],
        hu_HU: ['Május'],
        id_ID: ['Mei'],
        it: ['Maggio'],
        ja: ['5月'],
        ko: ['5월'],
        ms_MY: ['Mei'],
        nl_NL: ['Mei'],
        pl: ['Maj'],
        pt: ['Мaio'],
        ro: 'May',
        ru: ['Май'],
        sv: ['Maj'],
        th: ['พ.ค.'],
        tr: 'May',
        vi: ['Tháng Năm'],
        zh: ['5月'],
        zh_TW: ['五月'],
      }
    },
    84675: (e) => {
      e.exports = {
        ar: ['مارس'],
        ca_ES: ['Març'],
        cs: 'March',
        de: ['März'],
        el: 'March',
        en: 'March',
        es: ['Marzo'],
        fa: 'March',
        fr: ['Mars'],
        he_IL: ['מרץ‏'],
        hu_HU: ['Március'],
        id_ID: ['Maret'],
        it: ['Marzo'],
        ja: ['3月'],
        ko: ['3월'],
        ms_MY: ['Mac'],
        nl_NL: 'March',
        pl: ['Marzec'],
        pt: ['Março'],
        ro: 'March',
        ru: ['Март'],
        sv: ['Mars'],
        th: ['มีนาคม'],
        tr: ['Mart'],
        vi: ['Tháng Ba'],
        zh: ['3月'],
        zh_TW: ['三月'],
      }
    },
    59607: (e) => {
      e.exports = {
        ar: ['مقياس'],
        ca_ES: ['Mida'],
        cs: 'Measure',
        de: ['Messen'],
        el: 'Measure',
        en: 'Measure',
        es: ['Medida'],
        fa: 'Measure',
        fr: ['Mesure'],
        he_IL: ['מדידה'],
        hu_HU: 'Measure',
        id_ID: ['Mengukur'],
        it: ['Misura'],
        ja: ['ものさし'],
        ko: ['재기'],
        ms_MY: ['Langkah'],
        nl_NL: 'Measure',
        pl: ['Linijka'],
        pt: ['Medir'],
        ro: 'Measure',
        ru: ['Линейка'],
        sv: ['Mäta'],
        th: ['การวัด'],
        tr: ['Ölç'],
        vi: ['Đo lường'],
        zh: ['测量'],
        zh_TW: ['測量'],
      }
    },
    71194: (e) => {
      e.exports = {
        ar: ['نوفمبر'],
        ca_ES: ['Novembre'],
        cs: 'November',
        de: 'November',
        el: 'November',
        en: 'November',
        es: ['Noviembre'],
        fa: 'November',
        fr: ['Novembre'],
        he_IL: ['נובמבר‏'],
        hu_HU: 'November',
        id_ID: 'November',
        it: ['Novembre'],
        ja: ['11月'],
        ko: ['11월'],
        ms_MY: 'November',
        nl_NL: 'November',
        pl: ['Listopad'],
        pt: ['Novembro'],
        ro: 'November',
        ru: ['Ноябрь'],
        sv: 'November',
        th: ['พฤศจิกายน'],
        tr: ['Kasım'],
        vi: ['Tháng Mười một'],
        zh: ['11月'],
        zh_TW: ['十一月'],
      }
    },
    46147: (e) => {
      e.exports = {
        ar: ['مصدر'],
        ca_ES: ['Font'],
        cs: ['Zdroj'],
        de: ['Quelle'],
        el: 'Source',
        en: 'Source',
        es: ['Fuente'],
        fa: 'Source',
        fr: 'Source',
        he_IL: ['מקור'],
        hu_HU: ['Forrás'],
        id_ID: ['Sumber'],
        it: ['Sorgente'],
        ja: ['ソース'],
        ko: ['소스'],
        ms_MY: ['Sumber'],
        nl_NL: 'Source',
        pl: ['Źródło'],
        pt: ['Fonte'],
        ro: 'Source',
        ru: ['Источник'],
        sv: ['Källa'],
        th: ['จุดกำเนิด'],
        tr: ['Kaynak'],
        vi: ['Nguồn'],
        zh: ['来源'],
        zh_TW: ['來源'],
      }
    },
    36835: (e) => {
      e.exports = {
        ar: ['السبت'],
        ca_ES: ['Ds'],
        cs: 'Sat',
        de: ['Sa'],
        el: 'Sat',
        en: 'Sat',
        es: ['Sáb'],
        fa: 'Sat',
        fr: ['Sam'],
        he_IL: ['שבת'],
        hu_HU: ['Szom'],
        id_ID: ['Sab'],
        it: ['Sab'],
        ja: ['土'],
        ko: ['토'],
        ms_MY: ['Sabtu'],
        nl_NL: 'Sat',
        pl: ['Sob'],
        pt: ['Sáb.'],
        ro: 'Sat',
        ru: ['Сб'],
        sv: ['Lör'],
        th: ['เสาร์'],
        tr: ['Cmt'],
        vi: ['Thứ 7'],
        zh: ['周六'],
        zh_TW: ['周六'],
      }
    },
    1144: (e) => {
      e.exports = {
        ar: ['السبت'],
        ca_ES: ['Dissabte'],
        cs: 'Saturday',
        de: ['Samstag'],
        el: 'Saturday',
        en: 'Saturday',
        es: ['Sábado'],
        fa: 'Saturday',
        fr: ['Samedi'],
        he_IL: ['יום שבת'],
        hu_HU: ['Szombat'],
        id_ID: ['Sabtu'],
        it: ['Sabato'],
        ja: ['土曜日'],
        ko: ['토요일'],
        ms_MY: ['Sabtu'],
        nl_NL: 'Saturday',
        pl: ['Sobota'],
        pt: ['Sábado'],
        ro: 'Saturday',
        ru: ['Суббота'],
        sv: ['Lördag'],
        th: ['เสาร์'],
        tr: ['Cumartesi'],
        vi: ['Thứ Bảy'],
        zh: ['周六'],
        zh_TW: ['周六'],
      }
    },
    31672: (e) => {
      e.exports = {
        ar: ['قطاع'],
        ca_ES: 'Sector',
        cs: 'Sector',
        de: ['Sektor'],
        el: 'Sector',
        en: 'Sector',
        es: 'Sector',
        fa: 'Sector',
        fr: ['Secteur'],
        he_IL: ['סקטור'],
        hu_HU: ['Szektor'],
        id_ID: ['Sektor'],
        it: ['Settore'],
        ja: ['セクター'],
        ko: ['섹터'],
        ms_MY: ['Sektor'],
        nl_NL: 'Sector',
        pl: ['Sektor'],
        pt: ['Setor'],
        ro: 'Sector',
        ru: ['Сектор'],
        sv: ['Sektor'],
        th: ['ภาค'],
        tr: ['Sektör'],
        vi: ['Khu vực'],
        zh: ['板块'],
        zh_TW: ['部門'],
      }
    },
    61132: (e) => {
      e.exports = {
        ar: ['سبتمبر'],
        ca_ES: ['Setembre'],
        cs: 'September',
        de: 'September',
        el: 'September',
        en: 'September',
        es: ['Septiembre'],
        fa: 'September',
        fr: ['Septembre'],
        he_IL: ['ספטמבר‏'],
        hu_HU: ['Szeptember'],
        id_ID: 'September',
        it: ['Settembre'],
        ja: ['9月'],
        ko: ['9월'],
        ms_MY: 'September',
        nl_NL: 'September',
        pl: ['Wrzesień'],
        pt: ['Setembro'],
        ro: 'September',
        ru: ['Сентябрь'],
        sv: 'September',
        th: ['กันยายน'],
        tr: ['Eylül'],
        vi: ['Tháng Chín'],
        zh: ['9月'],
        zh_TW: ['九月'],
      }
    },
    86577: (e) => {
      e.exports = {
        ar: ['الأحد'],
        ca_ES: ['Dg'],
        cs: 'Sun',
        de: ['Son'],
        el: 'Sun',
        en: 'Sun',
        es: ['Do'],
        fa: 'Sun',
        fr: ['Dim'],
        he_IL: ['יום ראשון'],
        hu_HU: ['Vas'],
        id_ID: ['Min'],
        it: ['Dom'],
        ja: ['日'],
        ko: ['일'],
        ms_MY: ['Ahad'],
        nl_NL: 'Sun',
        pl: ['Niedz.'],
        pt: ['Dom'],
        ro: 'Sun',
        ru: ['Вс'],
        sv: ['Sön'],
        th: ['อาทิตย์'],
        tr: ['Paz'],
        vi: ['CN'],
        zh: ['周日'],
        zh_TW: ['周日'],
      }
    },
    72149: (e) => {
      e.exports = {
        ar: ['الأحد'],
        ca_ES: ['Diumenge'],
        cs: 'Sunday',
        de: ['Sonntag'],
        el: 'Sunday',
        en: 'Sunday',
        es: ['Domingo'],
        fa: 'Sunday',
        fr: ['Dimanche'],
        he_IL: ['יום ראשון'],
        hu_HU: ['Vasárnap'],
        id_ID: ['Minggu'],
        it: ['Domenica'],
        ja: ['日曜日'],
        ko: ['일요일'],
        ms_MY: ['Ahad'],
        nl_NL: 'Sunday',
        pl: ['Niedziela'],
        pt: ['Domingo'],
        ro: 'Sunday',
        ru: ['Воскресенье'],
        sv: ['Söndag'],
        th: ['อาทิตย์'],
        tr: ['Pazar'],
        vi: ['Chủ nhật'],
        zh: ['周日'],
        zh_TW: ['周日'],
      }
    },
    12014: (e) => {
      e.exports = {
        ar: ['معلومات الرمز'],
        ca_ES: ['Informació del símbol'],
        cs: 'Symbol Info',
        de: 'Symbol Info',
        el: 'Symbol Info',
        en: 'Symbol Info',
        es: ['Información del símbolo'],
        fa: 'Symbol Info',
        fr: ['Info du Symbole'],
        he_IL: ['מידע על הסימול'],
        hu_HU: ['Szimbólum Infó'],
        id_ID: ['Info Simbol'],
        it: ['Informazioni simbolo'],
        ja: ['シンボル情報'],
        ko: ['심볼 정보'],
        ms_MY: ['Maklumat Simbol'],
        nl_NL: 'Symbol Info',
        pl: ['Informacje o Symbolu'],
        pt: ['Informações do símbolo'],
        ro: 'Symbol Info',
        ru: ['Информация по инструменту'],
        sv: ['Symbolinformation'],
        th: ['ข้อมูลสัญลักษณ์'],
        tr: ['Sembol Bilgisi'],
        vi: ['Thông tin Mã giao dịch'],
        zh: ['商品信息'],
        zh_TW: ['商品資訊'],
      }
    },
    35383: (e) => {
      e.exports = {
        ar: ['اسم الرمز'],
        ca_ES: ['Nom del símbol'],
        cs: ['Symbol Name'],
        de: ['Symbolname'],
        el: ['Symbol Name'],
        en: 'Symbol name',
        es: ['Nombre del símbolo'],
        fa: ['Symbol Name'],
        fr: ['Nom du symbole'],
        he_IL: ['שם סימול'],
        hu_HU: ['Szimbólum Neve'],
        id_ID: ['Nama Simbol'],
        it: ['Nome simbolo'],
        ja: ['シンボル名'],
        ko: ['심볼 이름'],
        ms_MY: ['Nama Simbol'],
        nl_NL: ['Symbol Name'],
        pl: ['Nazwa Symbolu'],
        pt: ['Nome do símbolo'],
        ro: ['Symbol Name'],
        ru: ['Имя инструмента'],
        sv: ['Symbolnamn'],
        th: ['ชื่อสัญลักษณ์'],
        tr: ['Sembol Adı'],
        vi: ['Tên Mã giao dịch'],
        zh: ['商品名称'],
        zh_TW: ['商品名稱'],
      }
    },
    28174: (e) => {
      e.exports = {
        ar: ['وصف الرمز'],
        ca_ES: ['Descripció del símbol'],
        cs: ['Symbol Description'],
        de: ['Symbolbeschreibung'],
        el: ['Symbol Description'],
        en: 'Symbol description',
        es: ['Descripción del símbolo'],
        fa: ['Symbol Description'],
        fr: ['Description du symbole'],
        he_IL: ['תיאור הסימול'],
        hu_HU: ['Szimbólum Leírás'],
        id_ID: ['Deskripsi Simbol'],
        it: ['Descrizione simbolo'],
        ja: ['シンボル詳細'],
        ko: ['심볼 설명'],
        ms_MY: ['Huraian Simbol'],
        nl_NL: ['Symbol Description'],
        pl: ['Opis Symbolu'],
        pt: ['Descrição do símbolo'],
        ro: ['Symbol Description'],
        ru: ['Описание инструмента'],
        sv: ['Symbolbeskrivning'],
        th: ['คำอธิบายของสัญลักษณ์'],
        tr: ['Sembol Açıklaması'],
        vi: ['Mô tả Mã giao dịch'],
        zh: ['商品说明'],
        zh_TW: ['商品說明'],
      }
    },
    90656: (e) => {
      e.exports = {
        ar: ['نوع الرمز'],
        ca_ES: ['Tipus de símbol'],
        cs: ['Symbol Type'],
        de: ['Symboltyp'],
        el: ['Symbol Type'],
        en: 'Symbol type',
        es: ['Tipo de símbolo'],
        fa: ['Symbol Type'],
        fr: ['Type de symbole'],
        he_IL: ['סוג סימול'],
        hu_HU: ['Szimbólum Típusa'],
        id_ID: ['Tipe simbol'],
        it: ['Categoria simbolo'],
        ja: ['シンボルタイプ'],
        ko: ['심볼 타입'],
        ms_MY: ['Jenis Simbol'],
        nl_NL: ['Symbol Type'],
        pl: ['Typ Symbolu'],
        pt: ['Tipo do Símbolo'],
        ro: ['Symbol Type'],
        ru: ['Тип инструмента'],
        sv: ['Symbol typ'],
        th: ['ประเภทสัญลักษณ์'],
        tr: ['Sembol tipi'],
        vi: ['Loại Mã giao dịch'],
        zh: ['商品类型'],
        zh_TW: ['商品類型'],
      }
    },
    64659: (e) => {
      e.exports = {
        ar: ['قيمة النقطة'],
        ca_ES: ['Valor del punt'],
        cs: 'Point value',
        de: ['Punktwert'],
        el: 'Point value',
        en: 'Point value',
        es: ['Valor del punto'],
        fa: 'Point value',
        fr: ['Valeur du point'],
        he_IL: ['נקודת ערך Point value'],
        hu_HU: 'Point value',
        id_ID: ['Nilai poin'],
        it: ['Valore punto'],
        ja: ['ポイント値'],
        ko: ['포인트 밸류'],
        ms_MY: ['Nilai mata'],
        nl_NL: 'Point value',
        pl: ['Wartość punktu'],
        pt: ['Valor do ponto'],
        ro: 'Point value',
        ru: ['Значение пункта'],
        sv: ['Punktvärde'],
        th: ['มูลค่าของจุด'],
        tr: ['Nokta Değeri'],
        vi: ['Giá trị điểm'],
        zh: ['点值'],
        zh_TW: ['計點值'],
      }
    },
    45221: (e) => {
      e.exports = {
        ar: ['حجم النقطة'],
        ca_ES: ['Mida del Pip'],
        cs: ['Pip Size'],
        de: ['Pip-Größe'],
        el: ['Pip Size'],
        en: 'Pip size',
        es: ['Tamaño del Pip'],
        fa: ['Pip Size'],
        fr: ['Valeur du pip'],
        he_IL: ['גודל Pip'],
        hu_HU: ['Pip Méret'],
        id_ID: ['Ukuran Pip'],
        it: ['Dimensione Pip'],
        ja: ['Pipサイズ'],
        ko: ['핍사이즈'],
        ms_MY: ['Saiz Pip'],
        nl_NL: ['Pip Size'],
        pl: ['Rozmiar Pip'],
        pt: ['Tamanho do Pip'],
        ro: ['Pip Size'],
        ru: ['Объём пункта'],
        sv: ['Pipstorlek'],
        th: ['ขนาดของปิ้บ'],
        tr: ['Pip Miktarı'],
        vi: ['Cỡ Pip'],
        zh: ['点值大小'],
        zh_TW: ['Pip 大小'],
      }
    },
    75094: (e) => {
      e.exports = {
        ar: ['الأربعاء'],
        ca_ES: ['Dc'],
        cs: 'Wed',
        de: ['Mi'],
        el: 'Wed',
        en: 'Wed',
        es: ['Mi'],
        fa: 'Wed',
        fr: ['Mer'],
        he_IL: ['רביעי'],
        hu_HU: ['Szer'],
        id_ID: ['Rab'],
        it: ['Mer'],
        ja: ['水'],
        ko: ['수'],
        ms_MY: ['Rabu'],
        nl_NL: 'Wed',
        pl: ['Śr.'],
        pt: ['Quarta'],
        ro: 'Wed',
        ru: ['Ср'],
        sv: ['Ons'],
        th: ['พุธ'],
        tr: ['Çar'],
        vi: ['Thứ 4'],
        zh: ['周三'],
        zh_TW: ['周三'],
      }
    },
    7147: (e) => {
      e.exports = {
        ar: ['الأربعاء'],
        ca_ES: ['Dimecres'],
        cs: 'Wednesday',
        de: ['Mittwoch'],
        el: 'Wednesday',
        en: 'Wednesday',
        es: ['Miércoles'],
        fa: 'Wednesday',
        fr: ['Mercredi'],
        he_IL: ['יום רביעי'],
        hu_HU: ['Szerda'],
        id_ID: ['Rabu'],
        it: ['Mercoledì'],
        ja: ['水曜日'],
        ko: ['수요일'],
        ms_MY: ['Rabu'],
        nl_NL: 'Wednesday',
        pl: ['Środa'],
        pt: ['Quarta'],
        ro: 'Wednesday',
        ru: ['Среда'],
        sv: ['Onsdag'],
        th: ['พุธ'],
        tr: ['Çarşamba'],
        vi: ['Thứ tư'],
        zh: ['周三'],
        zh_TW: ['周三'],
      }
    },
    9787: (e) => {
      e.exports = {
        ar: ['الخميس'],
        ca_ES: ['Dj'],
        cs: 'Thu',
        de: ['Do'],
        el: 'Thu',
        en: 'Thu',
        es: ['Jue'],
        fa: 'Thu',
        fr: ['Jeu'],
        he_IL: ['חמישי'],
        hu_HU: ['Cs'],
        id_ID: ['Kamis'],
        it: ['Gio'],
        ja: ['木'],
        ko: ['목'],
        ms_MY: ['Khamis'],
        nl_NL: 'Thu',
        pl: ['Czw.'],
        pt: ['Qui'],
        ro: 'Thu',
        ru: ['Чт'],
        sv: ['Tor'],
        th: ['พฤหัสบดี'],
        tr: ['Per'],
        vi: ['Thứ 5'],
        zh: ['周四'],
        zh_TW: ['周四'],
      }
    },
    7951: (e) => {
      e.exports = {
        ar: ['الخميس'],
        ca_ES: ['Dijous'],
        cs: 'Thursday',
        de: ['Donnerstag'],
        el: 'Thursday',
        en: 'Thursday',
        es: ['Jueves'],
        fa: 'Thursday',
        fr: ['Jeudi'],
        he_IL: ['יום חמישי'],
        hu_HU: ['Csütörtök'],
        id_ID: ['Kamis'],
        it: ['Giovedì'],
        ja: ['木曜日'],
        ko: ['목요일'],
        ms_MY: ['Khamis'],
        nl_NL: 'Thursday',
        pl: ['Czwartek'],
        pt: ['Quinta'],
        ro: 'Thursday',
        ru: ['Четверг'],
        sv: ['Torsdag'],
        th: ['พฤหัสบดี'],
        tr: ['Perşembe'],
        vi: ['Thứ năm'],
        zh: ['周四'],
        zh_TW: ['周四'],
      }
    },
    55209: (e) => {
      e.exports = {
        ar: ['حجم التيك'],
        ca_ES: ['Mida del tick'],
        cs: 'Tick size',
        de: ['Tickgröße'],
        el: 'Tick size',
        en: 'Tick size',
        es: ['Tamaño del tick'],
        fa: 'Tick size',
        fr: ['Taille du tick'],
        he_IL: ['גודל Tick'],
        hu_HU: 'Tick size',
        id_ID: ['Ukuran tick'],
        it: ['Dimensione tick'],
        ja: ['ティックサイズ'],
        ko: ['틱 사이즈'],
        ms_MY: ['Saiz tick'],
        nl_NL: 'Tick size',
        pl: ['Rozmiar ticka'],
        pt: ['Tamanho do tick'],
        ro: 'Tick size',
        ru: ['Размер тика'],
        sv: ['Tickstorlek'],
        th: ['ขนาด Tick'],
        tr: ['fiyat adımı boyutu'],
        vi: ['Cỡ Tick'],
        zh: ['Tick大小'],
        zh_TW: ['Tick大小'],
      }
    },
    87492: (e) => {
      e.exports = {
        ar: ['توقيت'],
        ca_ES: ['Zona horària'],
        cs: ['Časové pásmo'],
        de: ['Zeitzone'],
        el: 'Timezone',
        en: 'Timezone',
        es: ['Zona horaria'],
        fa: 'Timezone',
        fr: ['Fuseau horaire'],
        he_IL: ['אזור זמן'],
        hu_HU: ['Időzóna'],
        id_ID: ['Zona waktu'],
        it: ['Fuso orario'],
        ja: ['タイムゾーン'],
        ko: ['타임존'],
        ms_MY: ['Zon Waktu'],
        nl_NL: 'Timezone',
        pl: ['Strefa czasowa'],
        pt: ['Fuso Horário'],
        ro: 'Timezone',
        ru: ['Часовой пояс'],
        sv: ['Tidszon'],
        th: ['เขตเวลา'],
        tr: ['Saat Dilimi'],
        vi: ['Múi giờ'],
        zh: ['时区'],
        zh_TW: ['時區'],
      }
    },
    94316: (e) => {
      e.exports = {
        ar: ['الثلاثاء'],
        ca_ES: ['Març'],
        cs: 'Tue',
        de: ['Die'],
        el: 'Tue',
        en: 'Tue',
        es: ['Mar'],
        fa: 'Tue',
        fr: ['Mar'],
        he_IL: ['שלישי'],
        hu_HU: ['Ke'],
        id_ID: ['Selasa'],
        it: ['Mar'],
        ja: ['火'],
        ko: ['화'],
        ms_MY: ['Selasa'],
        nl_NL: 'Tue',
        pl: ['Wt.'],
        pt: ['Terça'],
        ro: 'Tue',
        ru: ['Вт'],
        sv: ['Tis'],
        th: ['อังคาร'],
        tr: ['Sal'],
        vi: ['Thứ 3'],
        zh: ['周二'],
        zh_TW: ['周二'],
      }
    },
    44979: (e) => {
      e.exports = {
        ar: ['الثلاثاء'],
        ca_ES: ['Dimarts'],
        cs: 'Tuesday',
        de: ['Dienstag'],
        el: 'Tuesday',
        en: 'Tuesday',
        es: ['Martes'],
        fa: 'Tuesday',
        fr: ['Mardi'],
        he_IL: ['יום שלישי'],
        hu_HU: ['Kedd'],
        id_ID: ['Selasa'],
        it: ['Martedì'],
        ja: ['火曜日'],
        ko: ['화요일'],
        ms_MY: ['Selasa'],
        nl_NL: 'Tuesday',
        pl: ['Wtorek'],
        pt: ['Terça'],
        ro: 'Tuesday',
        ru: ['Вторник'],
        sv: ['Tisdag'],
        th: ['อังคาร'],
        tr: ['Salı'],
        vi: ['Thứ ba'],
        zh: ['周二'],
        zh_TW: ['周一'],
      }
    },
    77534: (e) => {
      e.exports = {
        ar: ['وحدة'],
        ca_ES: ['Unitat'],
        cs: 'Unit',
        de: ['Einheit'],
        el: 'Unit',
        en: 'Unit',
        es: ['Unidad'],
        fa: 'Unit',
        fr: ['Unité'],
        he_IL: ['יחידה'],
        hu_HU: 'Unit',
        id_ID: 'Unit',
        it: ['Unità'],
        ja: ['単位'],
        ko: ['유닛'],
        ms_MY: 'Unit',
        nl_NL: 'Unit',
        pl: ['Jednostka'],
        pt: ['Unidade'],
        ro: 'Unit',
        ru: ['Единица'],
        sv: ['Enhet'],
        th: ['หน่วย'],
        tr: ['Birim'],
        vi: ['Đơn vị'],
        zh: ['单位'],
        zh_TW: ['單位'],
      }
    },
    12629: (e) => {
      e.exports = {
        ar: ['السلع'],
        ca_ES: 'commodity',
        cs: 'commodity',
        de: ['Rohstoff'],
        el: 'commodity',
        en: 'commodity',
        es: ['materia prima'],
        fa: 'commodity',
        fr: ['produit de base'],
        he_IL: ['סחורה'],
        hu_HU: 'commodity',
        id_ID: ['komiditas'],
        it: ['materia prima'],
        ja: ['コモディティ'],
        ko: ['상품'],
        ms_MY: ['komoditi'],
        nl_NL: 'commodity',
        pl: ['towar'],
        pt: 'commodity',
        ro: 'commodity',
        ru: ['товары'],
        sv: ['Råvaror'],
        th: ['คอมมอดิตี้'],
        tr: ['Emtia'],
        vi: ['hàng hóa'],
        zh: ['商品'],
        zh_TW: ['商品'],
      }
    },
    87592: (e) => {
      e.exports = {
        ar: ['عقود الفروقات'],
        ca_ES: 'cfd',
        cs: 'cfd',
        de: 'cfd',
        el: 'cfd',
        en: 'cfd',
        es: 'cfd',
        fa: 'cfd',
        fr: 'cfd',
        he_IL: ['חוזה הפרשים cfd'],
        hu_HU: 'cfd',
        id_ID: 'cfd',
        it: 'cfd',
        ja: ['CFD'],
        ko: ['씨에프디'],
        ms_MY: 'cfd',
        nl_NL: 'cfd',
        pl: 'cfd',
        pt: 'cfd',
        ro: 'cfd',
        ru: 'cfd',
        sv: 'cfd',
        th: 'cfd',
        tr: 'cfd',
        vi: 'cfd',
        zh: ['差价合约'],
        zh_TW: 'cfd',
      }
    },
    8448: (e) => {
      e.exports = {
        ar: ['العملات الرقمية'],
        ca_ES: ['cripto'],
        cs: 'crypto',
        de: 'crypto',
        el: 'crypto',
        en: 'crypto',
        es: ['cripto'],
        fa: 'crypto',
        fr: 'crypto',
        he_IL: ['קריפטו'],
        hu_HU: ['kripto'],
        id_ID: 'crypto',
        it: ['cripto'],
        ja: ['暗号'],
        ko: ['크립토'],
        ms_MY: ['kripto'],
        nl_NL: 'crypto',
        pl: ['krypto'],
        pt: ['Cripto'],
        ro: 'crypto',
        ru: ['криптовалюты'],
        sv: ['krypto'],
        th: ['คริปโต'],
        tr: ['kripto'],
        vi: ['tiền điện tử'],
        zh: ['加密'],
        zh_TW: 'crypto',
      }
    },
    67245: (e) => {
      e.exports = {
        ar: ['إيصال إيداع'],
        ca_ES: 'dr',
        cs: 'dr',
        de: 'dr',
        el: 'dr',
        en: 'dr',
        es: 'dr',
        fa: 'dr',
        fr: 'dr',
        he_IL: 'dr',
        hu_HU: 'dr',
        id_ID: 'dr',
        it: 'dr',
        ja: ['預託証券'],
        ko: 'dr',
        ms_MY: 'dr',
        nl_NL: 'dr',
        pl: ['Potwierdzenie wpłaty'],
        pt: 'dr',
        ro: 'dr',
        ru: ['Депоз. расписки'],
        sv: 'dr',
        th: 'dr',
        tr: 'dr',
        vi: 'dr',
        zh: 'dr',
        zh_TW: 'dr',
      }
    },
    88720: (e) => {
      e.exports = {
        ar: ['اقتصاد'],
        ca_ES: ['economia'],
        cs: 'economy',
        de: ['Wirtschaft'],
        el: 'economy',
        en: 'economy',
        es: ['economía'],
        fa: 'economy',
        fr: ['économie'],
        he_IL: ['כַּלְכָּלָה'],
        hu_HU: 'economy',
        id_ID: ['ekonomi'],
        it: ['economia'],
        ja: ['経済指標'],
        ko: ['경제'],
        ms_MY: ['ekonomi'],
        nl_NL: 'economy',
        pl: ['gospodarka'],
        pt: ['economia'],
        ro: 'economy',
        ru: ['экономические данные'],
        sv: ['ekonomi'],
        th: ['เศรษฐกิจ'],
        tr: ['ekonomi'],
        vi: ['kinh tế'],
        zh: ['经济'],
        zh_TW: ['經濟'],
      }
    },
    39512: (e) => {
      e.exports = {
        ar: ['فوركس'],
        ca_ES: ['Forex'],
        cs: 'forex',
        de: ['Devisen'],
        el: 'forex',
        en: 'forex',
        es: ['Forex'],
        fa: 'forex',
        fr: ['Forex'],
        he_IL: ['מט"ח'],
        hu_HU: 'forex',
        id_ID: 'forex',
        it: 'forex',
        ja: ['FX'],
        ko: ['외환'],
        ms_MY: 'forex',
        nl_NL: 'forex',
        pl: 'forex',
        pt: 'forex',
        ro: 'forex',
        ru: ['форекс'],
        sv: ['valutor'],
        th: ['ฟอเร็กซ์'],
        tr: ['döviz'],
        vi: 'forex',
        zh: ['外汇'],
        zh_TW: ['外匯'],
      }
    },
    81859: (e) => {
      e.exports = {
        ar: ['العقود الآجلة'],
        ca_ES: ['futurs'],
        cs: 'futures',
        de: ['Futures'],
        el: 'futures',
        en: 'futures',
        es: ['futuros'],
        fa: 'futures',
        fr: 'futures',
        he_IL: ['חוזים עתידיים'],
        hu_HU: 'futures',
        id_ID: ['kontrak berjangka'],
        it: ['future'],
        ja: ['先物'],
        ko: ['퓨쳐스'],
        ms_MY: ['pasaran hadapan'],
        nl_NL: 'futures',
        pl: ['Kontrakty terminowe'],
        pt: ['futuros'],
        ro: 'futures',
        ru: ['фьючерсы'],
        sv: ['terminer'],
        th: ['ฟิวเจอร์ส'],
        tr: ['vadeli'],
        vi: ['hợp đồng tương lai'],
        zh: ['期货'],
        zh_TW: ['期貨'],
      }
    },
    12754: (e) => {
      e.exports = {
        ar: ['مؤشر'],
        ca_ES: ['índex'],
        cs: 'index',
        de: ['Index'],
        el: 'index',
        en: 'index',
        es: ['índice'],
        fa: 'index',
        fr: ['indice'],
        he_IL: ['מדד'],
        hu_HU: 'index',
        id_ID: ['indeks'],
        it: ['indice'],
        ja: ['指数'],
        ko: ['지수'],
        ms_MY: ['indeks'],
        nl_NL: 'index',
        pl: ['indeks'],
        pt: ['índice'],
        ro: 'index',
        ru: ['индексы'],
        sv: 'index',
        th: ['ดัชนี'],
        tr: ['endeks'],
        vi: ['chỉ số'],
        zh: ['指数'],
        zh_TW: ['指數'],
      }
    },
    60804: (e) => {
      e.exports = {
        ar: ['المؤشرات'],
        ca_ES: 'indices',
        cs: 'indices',
        de: ['Indizes'],
        el: 'indices',
        en: 'indices',
        es: ['índices'],
        fa: 'indices',
        fr: 'indices',
        he_IL: ['מדדים'],
        hu_HU: 'indices',
        id_ID: ['indeks'],
        it: ['Indici'],
        ja: ['指数'],
        ko: ['지수'],
        ms_MY: ['indeks'],
        nl_NL: ['indexen'],
        pl: ['indeksy'],
        pt: ['índices'],
        ro: 'indices',
        ru: ['индексы'],
        sv: ['index'],
        th: ['ดัชนี'],
        tr: ['endeks'],
        vi: ['các chỉ báo'],
        zh: ['指数'],
        zh_TW: ['指數'],
      }
    },
    36931: (e) => {
      e.exports = {
        ar: ['سهم'],
        ca_ES: ['accions'],
        cs: 'stock',
        de: ['Aktie'],
        el: 'stock',
        en: 'stock',
        es: ['acciones'],
        fa: 'stock',
        fr: 'stock',
        he_IL: ['מניה'],
        hu_HU: 'stock',
        id_ID: ['saham'],
        it: ['azione'],
        ja: ['株式'],
        ko: ['스탁'],
        ms_MY: ['saham'],
        nl_NL: 'stock',
        pl: ['akcja'],
        pt: ['ação'],
        ro: 'stock',
        ru: ['акция'],
        sv: ['aktier'],
        th: ['หุ้น'],
        tr: ['hisse'],
        vi: ['cổ phiếu'],
        zh: ['股票'],
        zh_TW: ['股票'],
      }
    },
  },
])
