;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5899],
  {
    70048: (e) => {
      e.exports = {
        wrapper: 'wrapper-GZajBGIm',
        input: 'input-GZajBGIm',
        box: 'box-GZajBGIm',
        icon: 'icon-GZajBGIm',
        noOutline: 'noOutline-GZajBGIm',
        'intent-danger': 'intent-danger-GZajBGIm',
        check: 'check-GZajBGIm',
        dot: 'dot-GZajBGIm',
      }
    },
    25650: (e) => {
      e.exports = {
        loader: 'loader-UL6iwcBa',
        static: 'static-UL6iwcBa',
        item: 'item-UL6iwcBa',
        'tv-button-loader': 'tv-button-loader-UL6iwcBa',
        medium: 'medium-UL6iwcBa',
        small: 'small-UL6iwcBa',
        black: 'black-UL6iwcBa',
        white: 'white-UL6iwcBa',
        gray: 'gray-UL6iwcBa',
        primary: 'primary-UL6iwcBa',
        'loader-initial': 'loader-initial-UL6iwcBa',
        'loader-appear': 'loader-appear-UL6iwcBa',
      }
    },
    51331: (e) => {
      e.exports = {
        loaderWrap: 'loaderWrap-jGEARQlM',
        big: 'big-jGEARQlM',
        loader: 'loader-jGEARQlM',
      }
    },
    22436: (e) => {
      e.exports = {
        item: 'item-GJX1EXhk',
        interactive: 'interactive-GJX1EXhk',
        hovered: 'hovered-GJX1EXhk',
        disabled: 'disabled-GJX1EXhk',
        active: 'active-GJX1EXhk',
        shortcut: 'shortcut-GJX1EXhk',
        normal: 'normal-GJX1EXhk',
        big: 'big-GJX1EXhk',
        iconCell: 'iconCell-GJX1EXhk',
        icon: 'icon-GJX1EXhk',
        checkmark: 'checkmark-GJX1EXhk',
        content: 'content-GJX1EXhk',
        label: 'label-GJX1EXhk',
        checked: 'checked-GJX1EXhk',
        toolbox: 'toolbox-GJX1EXhk',
        showToolboxOnHover: 'showToolboxOnHover-GJX1EXhk',
        arrowIcon: 'arrowIcon-GJX1EXhk',
        subMenu: 'subMenu-GJX1EXhk',
        invisibleHotkey: 'invisibleHotkey-GJX1EXhk',
      }
    },
    86838: (e) => {
      e.exports = {
        row: 'row-DFIg7eOh',
        line: 'line-DFIg7eOh',
        hint: 'hint-DFIg7eOh',
      }
    },
    36002: (e) => {
      e.exports = { menu: 'menu-Tx5xMZww' }
    },
    29122: (e) => {
      e.exports = {
        item: 'item-WJDah4zD',
        emptyIcons: 'emptyIcons-WJDah4zD',
        loading: 'loading-WJDah4zD',
        disabled: 'disabled-WJDah4zD',
        interactive: 'interactive-WJDah4zD',
        hovered: 'hovered-WJDah4zD',
        normal: 'normal-WJDah4zD',
        big: 'big-WJDah4zD',
        icon: 'icon-WJDah4zD',
        label: 'label-WJDah4zD',
        title: 'title-WJDah4zD',
        nested: 'nested-WJDah4zD',
        shortcut: 'shortcut-WJDah4zD',
        remove: 'remove-WJDah4zD',
      }
    },
    33927: (e) => {
      e.exports = { separator: 'separator-Ymxd0dt_' }
    },
    27306: (e) => {
      e.exports = {
        button: 'button-iLKiGOdQ',
        hovered: 'hovered-iLKiGOdQ',
        disabled: 'disabled-iLKiGOdQ',
        active: 'active-iLKiGOdQ',
        hidden: 'hidden-iLKiGOdQ',
      }
    },
    70673: (e, t, n) => {
      'use strict'
      n.d(t, { CheckboxInput: () => u })
      var r = n(50959),
        o = n(97754),
        s = n(90186),
        a = n(9745),
        i = n(65890),
        l = n(70048),
        c = n.n(l)
      function u(e) {
        const t = o(c().box, c()[`intent-${e.intent}`], {
            [c().check]: !Boolean(e.indeterminate),
            [c().dot]: Boolean(e.indeterminate),
            [c().noOutline]: -1 === e.tabIndex,
          }),
          n = o(c().wrapper, e.className)
        return r.createElement(
          'span',
          { className: n, title: e.title, style: e.style },
          r.createElement('input', {
            id: e.id,
            tabIndex: e.tabIndex,
            className: c().input,
            type: 'checkbox',
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange && e.onChange(e.value)
            },
            ref: e.reference,
            'aria-required': e['aria-required'],
            'aria-describedby': e['aria-describedby'],
            'aria-invalid': e['aria-invalid'],
            ...(0, s.filterDataProps)(e),
          }),
          r.createElement(
            'span',
            { className: t },
            r.createElement(a.Icon, { icon: i, className: c().icon }),
          ),
        )
      }
    },
    26996: (e, t, n) => {
      'use strict'
      n.d(t, { Loader: () => c })
      var r,
        o = n(50959),
        s = n(97754),
        a = n(74991),
        i = n(25650),
        l = n.n(i)
      !(function (e) {
        ;(e[(e.Initial = 0)] = 'Initial'),
          (e[(e.Appear = 1)] = 'Appear'),
          (e[(e.Active = 2)] = 'Active')
      })(r || (r = {}))
      class c extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: r.Initial })
        }
        render() {
          const {
              className: e,
              color: t = 'black',
              size: n = 'medium',
              staticPosition: r,
            } = this.props,
            a = s(l().item, l()[t], l()[n])
          return o.createElement(
            'span',
            {
              className: s(
                l().loader,
                r && l().static,
                this._getStateClass(),
                e,
              ),
            },
            o.createElement('span', { className: a }),
            o.createElement('span', { className: a }),
            o.createElement('span', { className: a }),
          )
        }
        componentDidMount() {
          this.setState({ state: r.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: r.Active })
            }, 2 * a.dur))
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null))
        }
        _getStateClass() {
          switch (this.state.state) {
            case r.Initial:
              return l()['loader-initial']
            case r.Appear:
              return l()['loader-appear']
            default:
              return ''
          }
        }
      }
    },
    29332: (e, t, n) => {
      'use strict'
      n.d(t, { ContextMenu: () => x, OverlapContextMenu: () => g })
      var r = n(50959),
        o = n(97754),
        s = n.n(o),
        a = n(86431),
        i = n(27317),
        l = n(76594),
        c = n(9481),
        u = n(58451),
        h = n(37558),
        p = n(90692),
        d = n(33927)
      function m(e) {
        return r.createElement('li', { className: d.separator })
      }
      var f = n(23829),
        v = n(41590),
        b = n(59064)
      function _(e) {
        const { action: t } = e,
          [n, o] = (0, r.useState)(() => t.getState()),
          [s, a] = (0, r.useState)(!1),
          i = !!n.subItems.length,
          l = i && s
        return (
          (0, r.useEffect)(() => {
            const e = () => o(t.getState())
            return (
              t.onUpdate().subscribe(null, e),
              () => {
                t.onUpdate().unsubscribe(null, e)
              }
            )
          }, []),
          r.createElement(
            f.ContextMenuItem,
            {
              ...n,
              onClick: function (e) {
                if (n.disabled || e.defaultPrevented) return
                if (i) return void a(!0)
                n.doNotCloseOnClick || (0, b.globalCloseMenu)()
                t.execute()
              },
              isLoading: n.loading,
              isHovered: l,
            },
            l &&
              r.createElement(
                v.Drawer,
                { onClose: c },
                r.createElement(y, {
                  items: n.subItems,
                  parentAction: t,
                  closeNested: c,
                }),
              ),
          )
        )
        function c(e) {
          e && e.preventDefault(), a(!1)
        }
      }
      var E = n(54627),
        k = n(66493)
      function y(e) {
        const { items: t, parentAction: n, closeNested: o } = e,
          s =
            !Boolean(n) &&
            t.every(
              (e) =>
                !Boolean(
                  'separator' !== e.type &&
                    (e.getState().icon || e.getState().checkable),
                ),
            )
        return r.createElement(
          E.EmptyIconsContext.Provider,
          { value: s },
          r.createElement(
            'ul',
            null,
            n &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(f.ContextMenuItem, {
                  label: n.getState().label,
                  isTitle: !0,
                  active: !1,
                  disabled: !1,
                  subItems: [],
                  checkable: !1,
                  checked: !1,
                  doNotCloseOnClick: !1,
                  icon: k,
                  onClick: o,
                }),
                r.createElement(m, null),
              ),
            t.map((e) => {
              switch (e.type) {
                case 'action':
                  return r.createElement(_, { key: e.id, action: e })
                case 'separator':
                  return r.createElement(m, { key: e.id })
              }
            }),
          ),
        )
      }
      const C = r.createContext(null)
      var w = n(36002)
      class x extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._menuRef = r.createRef()),
            (this._handleRequestUpdate = () => {
              this.update()
            }),
            (this._handleClose = () => {
              this.props.onClose && this.props.onClose()
            }),
            (this._handleOutsideClickClose = (e) => {
              const { doNotCloseOn: t, onClose: n } = this.props
              !n || (void 0 !== t && t.contains(e.target)) || n()
            }),
            (this._handleFocusOnOpen = () => {
              var e, t
              ;(null === (e = this.props.menuElementReference) || void 0 === e
                ? void 0
                : e.current) &&
                this.props.takeFocus &&
                (null === (t = this.props.menuElementReference) ||
                  void 0 === t ||
                  t.current.focus({ preventScroll: !0 }))
            }),
            (this.state = {})
        }
        render() {
          const {
            isOpened: e,
            onClose: t,
            items: n,
            doNotCloseOn: o,
            menuStatName: a,
            parentStatName: d,
            takeFocus: m,
            ...f
          } = this.props
          return e
            ? r.createElement(
                h.DrawerManager,
                null,
                r.createElement(c.KeyboardDocumentListener, {
                  keyCode: 27,
                  eventType: 'keyup',
                  handler: this._handleClose,
                }),
                r.createElement(
                  p.MatchMedia,
                  { rule: 'screen and (max-width: 430px)' },
                  (t) =>
                    this._isDrawer(t)
                      ? r.createElement(
                          C.Provider,
                          { value: { type: 'drawer' } },
                          r.createElement(
                            v.Drawer,
                            {
                              onClose: this._handleClose,
                              position: 'Bottom',
                              'data-name': f['data-name'],
                            },
                            r.createElement(y, { items: n }),
                          ),
                        )
                      : r.createElement(
                          C.Provider,
                          { value: { type: 'menu' } },
                          r.createElement(
                            l.OutsideEvent,
                            {
                              handler: this._handleOutsideClickClose,
                              mouseDown: !0,
                              touchStart: !0,
                              reference: this.props.menuElementReference,
                            },
                            (t) =>
                              r.createElement(
                                i.Menu,
                                {
                                  ...f,
                                  reference: t,
                                  className: s()(w.menu, 'context-menu'),
                                  onClose: this._handleClose,
                                  noMomentumBasedScroll: !0,
                                  ref: this._menuRef,
                                  tabIndex: m ? -1 : void 0,
                                  onOpen: this._handleFocusOnOpen,
                                },
                                r.createElement(u.ActionsTable, {
                                  items: n,
                                  menuStatName: a,
                                  parentStatName: d,
                                  parentIsOpened: e,
                                  onRequestUpdate: this._handleRequestUpdate,
                                }),
                              ),
                          ),
                        ),
                ),
              )
            : null
        }
        update() {
          this._menuRef.current && this._menuRef.current.update()
        }
        _isDrawer(e) {
          return void 0 === this.props.mode ? e : 'drawer' === this.props.mode
        }
      }
      const g = (0, a.makeOverlapable)(x)
    },
    99025: (e, t, n) => {
      'use strict'
      n.d(t, { Hint: () => i })
      var r = n(50959),
        o = n(97754),
        s = n.n(o),
        a = n(22436)
      function i(e) {
        const { text: t = '', className: n } = e
        return r.createElement('span', { className: s()(a.shortcut, n) }, t)
      }
    },
    23829: (e, t, n) => {
      'use strict'
      n.d(t, { ContextMenuItem: () => m })
      var r = n(50959),
        o = n(97754),
        s = n.n(o),
        a = n(9745),
        i = n(26996),
        l = n(54627),
        c = n(99025),
        u = n(39750),
        h = n(79978),
        p = n(69311),
        d = n(29122)
      function m(e) {
        const {
            className: t,
            isTitle: n,
            isLoading: o,
            isHovered: m,
            active: f,
            checkable: v,
            disabled: b,
            checked: _,
            icon: E,
            iconChecked: k,
            hint: y,
            subItems: C,
            label: w,
            onClick: x,
            children: g,
            toolbox: S,
            jsxLabel: I,
            size: N = 'normal',
          } = e,
          M = (0, r.useContext)(l.EmptyIconsContext),
          O = !!C.length
        return o
          ? r.createElement(
              'li',
              { className: s()(t, d.item, d.loading, d[N]) },
              r.createElement(i.Loader, null),
            )
          : r.createElement(
              'li',
              {
                className: s()(
                  t,
                  d.item,
                  d.interactive,
                  n && d.title,
                  b && d.disabled,
                  m && d.hovered,
                  f && d.active,
                  M && d.emptyIcons,
                  d[N],
                ),
                onClick: x,
              },
              r.createElement(a.Icon, {
                className: s()(d.icon),
                icon: (function () {
                  if (v && _) return k || E || u
                  return E
                })(),
              }),
              r.createElement(
                'span',
                { className: s()(d.label) },
                null != I ? I : w,
              ),
              !!S &&
                r.createElement(a.Icon, {
                  onClick: function () {
                    S && S.action()
                  },
                  className: d.remove,
                  icon: p,
                }),
              !O &&
                y &&
                r.createElement(c.Hint, { className: d.shortcut, text: y }),
              O && r.createElement(a.Icon, { className: d.nested, icon: h }),
              g,
            )
      }
    },
    54627: (e, t, n) => {
      'use strict'
      n.d(t, { EmptyIconsContext: () => r })
      const r = n(50959).createContext(!1)
    },
    9481: (e, t, n) => {
      'use strict'
      n.d(t, { KeyboardDocumentListener: () => o })
      var r = n(50959)
      class o extends r.PureComponent {
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
    76594: (e, t, n) => {
      'use strict'
      n.d(t, { OutsideEvent: () => o })
      var r = n(36383)
      function o(e) {
        const { children: t, ...n } = e
        return t((0, r.useOutsideEvent)(n))
      }
    },
    86431: (e, t, n) => {
      'use strict'
      n.d(t, { makeOverlapable: () => s })
      var r = n(50959),
        o = n(65718)
      function s(e) {
        return class extends r.PureComponent {
          render() {
            const { isOpened: t, root: n } = this.props
            if (!t) return null
            const s = r.createElement(e, { ...this.props, zIndex: 150 })
            return 'parent' === n ? s : r.createElement(o.Portal, null, s)
          }
        }
      }
    },
    96040: (e, t, n) => {
      'use strict'
      n.d(t, { RemoveButton: () => c })
      var r = n(44352),
        o = n(50959),
        s = n(97754),
        a = n(9745),
        i = n(33765),
        l = n(27306)
      function c(e) {
        const {
          className: t,
          isActive: c,
          onClick: u,
          onMouseDown: h,
          title: p,
          hidden: d,
          'data-name': m = 'remove-button',
          ...f
        } = e
        return o.createElement(a.Icon, {
          ...f,
          'data-name': m,
          className: s(
            l.button,
            'apply-common-tooltip',
            c && l.active,
            d && l.hidden,
            t,
          ),
          icon: i,
          onClick: u,
          onMouseDown: h,
          title: p || r.t(null, void 0, n(34596)),
        })
      }
    },
    95257: (e, t) => {
      'use strict'
      var n = Symbol.for('react.element'),
        r = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        s = Symbol.for('react.strict_mode'),
        a = Symbol.for('react.profiler'),
        i = Symbol.for('react.provider'),
        l = Symbol.for('react.context'),
        c = Symbol.for('react.forward_ref'),
        u = Symbol.for('react.suspense'),
        h = Symbol.for('react.memo'),
        p = Symbol.for('react.lazy'),
        d = Symbol.iterator
      var m = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        f = Object.assign,
        v = {}
      function b(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || m)
      }
      function _() {}
      function E(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || m)
      }
      ;(b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (b.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (_.prototype = b.prototype)
      var k = (E.prototype = new _())
      ;(k.constructor = E), f(k, b.prototype), (k.isPureReactComponent = !0)
      var y = Array.isArray,
        C = Object.prototype.hasOwnProperty,
        w = { current: null },
        x = { key: !0, ref: !0, __self: !0, __source: !0 }
      function g(e, t, r) {
        var o,
          s = {},
          a = null,
          i = null
        if (null != t)
          for (o in (void 0 !== t.ref && (i = t.ref),
          void 0 !== t.key && (a = '' + t.key),
          t))
            C.call(t, o) && !x.hasOwnProperty(o) && (s[o] = t[o])
        var l = arguments.length - 2
        if (1 === l) s.children = r
        else if (1 < l) {
          for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2]
          s.children = c
        }
        if (e && e.defaultProps)
          for (o in (l = e.defaultProps)) void 0 === s[o] && (s[o] = l[o])
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: i,
          props: s,
          _owner: w.current,
        }
      }
      function S(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === n
      }
      var I = /\/+/g
      function N(e, t) {
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
      function M(e, t, o, s, a) {
        var i = typeof e
        ;('undefined' !== i && 'boolean' !== i) || (e = null)
        var l = !1
        if (null === e) l = !0
        else
          switch (i) {
            case 'string':
            case 'number':
              l = !0
              break
            case 'object':
              switch (e.$$typeof) {
                case n:
                case r:
                  l = !0
              }
          }
        if (l)
          return (
            (a = a((l = e))),
            (e = '' === s ? '.' + N(l, 0) : s),
            y(a)
              ? ((o = ''),
                null != e && (o = e.replace(I, '$&/') + '/'),
                M(a, t, o, '', function (e) {
                  return e
                }))
              : null != a &&
                (S(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    }
                  })(
                    a,
                    o +
                      (!a.key || (l && l.key === a.key)
                        ? ''
                        : ('' + a.key).replace(I, '$&/') + '/') +
                      e,
                  )),
                t.push(a)),
            1
          )
        if (((l = 0), (s = '' === s ? '.' : s + ':'), y(e)))
          for (var c = 0; c < e.length; c++) {
            var u = s + N((i = e[c]), c)
            l += M(i, t, o, u, a)
          }
        else if (
          ((u = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (d && e[d]) || e['@@iterator'])
                ? e
                : null
          })(e)),
          'function' == typeof u)
        )
          for (e = u.call(e), c = 0; !(i = e.next()).done; )
            l += M((i = i.value), t, o, (u = s + N(i, c++)), a)
        else if ('object' === i)
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
      function O(e, t, n) {
        if (null == e) return e
        var r = [],
          o = 0
        return (
          M(e, r, '', '', function (e) {
            return t.call(n, e, o++)
          }),
          r
        )
      }
      function R(e) {
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
      var D = { current: null },
        L = { transition: null },
        G = {
          ReactCurrentDispatcher: D,
          ReactCurrentBatchConfig: L,
          ReactCurrentOwner: w,
        }
      ;(t.Children = {
        map: O,
        forEach: function (e, t, n) {
          O(
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
            O(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            O(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!S(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return e
        },
      }),
        (t.Component = b),
        (t.Fragment = o),
        (t.Profiler = a),
        (t.PureComponent = E),
        (t.StrictMode = s),
        (t.Suspense = u),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            )
          var o = f({}, e.props),
            s = e.key,
            a = e.ref,
            i = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (i = w.current)),
              void 0 !== t.key && (s = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps
            for (c in t)
              C.call(t, c) &&
                !x.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
          }
          var c = arguments.length - 2
          if (1 === c) o.children = r
          else if (1 < c) {
            l = Array(c)
            for (var u = 0; u < c; u++) l[u] = arguments[u + 2]
            o.children = l
          }
          return {
            $$typeof: n,
            type: e.type,
            key: s,
            ref: a,
            props: o,
            _owner: i,
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
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          )
        }),
        (t.createElement = g),
        (t.createFactory = function (e) {
          var t = g.bind(null, e)
          return (t.type = e), t
        }),
        (t.createRef = function () {
          return { current: null }
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e }
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: R,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: h, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = L.transition
          L.transition = {}
          try {
            e()
          } finally {
            L.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return D.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return D.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return D.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return D.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return D.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return D.current.useImperativeHandle(e, t, n)
        }),
        (t.useInsertionEffect = function (e, t) {
          return D.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return D.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return D.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, n) {
          return D.current.useReducer(e, t, n)
        }),
        (t.useRef = function (e) {
          return D.current.useRef(e)
        }),
        (t.useState = function (e) {
          return D.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return D.current.useSyncExternalStore(e, t, n)
        }),
        (t.useTransition = function () {
          return D.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, n) => {
      'use strict'
      e.exports = n(95257)
    },
    58451: (e, t, n) => {
      'use strict'
      n.d(t, { ActionsTable: () => M })
      var r = n(50959),
        o = n(86838)
      function s(e) {
        return r.createElement(
          'tr',
          { className: o.row },
          r.createElement(
            'td',
            null,
            r.createElement('div', { className: o.line }),
          ),
          r.createElement(
            'td',
            null,
            r.createElement('div', { className: o.line }),
            e.hint
              ? r.createElement('div', { className: o.hint }, e.hint)
              : null,
          ),
        )
      }
      var a = n(50151),
        i = n(97754),
        l = n.n(i),
        c = n(70673),
        u = n(49483),
        h = n(32563)
      var p = n(96040),
        d = n(36189),
        m = n(99025),
        f = n(25812),
        v = n(80802),
        b = n(14665),
        _ = n(22436)
      class E extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleMouseOver = (e) => {
              ;(function (e) {
                const t = e.sourceCapabilities
                let n = t && t.firesTouchEvents
                return void 0 === n && (n = h.touch), n
              })(e.nativeEvent) ||
                (this.props.onMouseOver && this.props.onMouseOver())
            }),
            (this._handleClickToolbox = (e) => {
              e.stopPropagation(),
                this.props.onClickToolbox && this.props.onClickToolbox()
            })
        }
        render() {
          const {
              hasSubItems: e,
              shortcutHint: t,
              hint: n,
              invisibleHotkey: o,
              favourite: s,
              theme: a = _,
              size: l = 'normal',
            } = this.props,
            c =
              this.props.checkable && this.props.checkboxInput ? 'label' : 'div'
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              'tr',
              {
                className: i(
                  this.props.className,
                  a.item,
                  !this.props.noInteractive && a.interactive,
                  this.props.hovered && a.hovered,
                  this.props.disabled && a.disabled,
                  this.props.active && a.active,
                  this.props.selected && a.selected,
                  a[l],
                ),
                onClick: this.props.onClick,
                onMouseOver: this._handleMouseOver,
                ref: this.props.reference,
                'data-action-name': this.props.actionName,
              },
              void 0 !== s &&
                r.createElement(
                  'td',
                  null,
                  r.createElement(d.FavoriteButton, {
                    className: a.favourite,
                    isFilled: s,
                    onClick: this.props.onFavouriteClick,
                  }),
                ),
              r.createElement(
                'td',
                { className: i(a.iconCell), 'data-icon-cell': !0 },
                this._icon(a),
              ),
              r.createElement(
                'td',
                { className: a.contentCell },
                r.createElement(
                  c,
                  { className: a.content },
                  r.createElement(
                    'span',
                    {
                      className: i(a.label, this.props.checked && a.checked),
                      'data-label': !0,
                    },
                    this.props.label,
                  ),
                  this._toolbox(a),
                  e &&
                    r.createElement('span', {
                      className: a.arrowIcon,
                      dangerouslySetInnerHTML: { __html: b },
                      'data-submenu-arrow': !0,
                    }),
                  !e &&
                    t &&
                    !u.CheckMobile.any() &&
                    r.createElement(m.Hint, {
                      className: i(o && a.invisibleHotkey),
                      text: t,
                    }),
                  !e && !t && n && r.createElement(m.Hint, { text: n }),
                ),
              ),
            ),
            r.createElement(
              'tr',
              { className: a.subMenu },
              r.createElement('td', null, this.props.children),
            ),
          )
        }
        _icon(e) {
          if (this.props.checkable) {
            if (this.props.checkboxInput)
              return r.createElement(c.CheckboxInput, {
                className: i(e.icon, e.checkboxInput),
                checked: this.props.checked,
              })
            if (this.props.checked) {
              const t = !this.props.icon && !this.props.iconChecked,
                n = this.props.iconChecked || this.props.icon || v
              return r.createElement('span', {
                className: i(e.icon, t && e.checkmark),
                dangerouslySetInnerHTML: { __html: n },
                'data-icon-checkmark': t,
              })
            }
            return this.props.icon
              ? r.createElement('span', {
                  className: e.icon,
                  dangerouslySetInnerHTML: { __html: this.props.icon },
                })
              : r.createElement('span', { className: e.icon })
          }
          return this.props.icon
            ? r.createElement('span', {
                className: e.icon,
                dangerouslySetInnerHTML: { __html: this.props.icon },
              })
            : null
        }
        _toolbox(e) {
          return this.props.toolbox
            ? r.createElement(
                'span',
                {
                  className: i(
                    e.toolbox,
                    this.props.showToolboxOnHover && e.showToolboxOnHover,
                  ),
                  onClick: this._handleClickToolbox,
                  'data-toolbox': !0,
                },
                this._renderToolboxContent(),
              )
            : null
        }
        _renderToolboxContent() {
          return this.props.toolbox &&
            this.props.toolbox.type === f.ToolboxType.Delete
            ? r.createElement(p.RemoveButton, {
                onClick: this.props.toolbox.action,
              })
            : null
        }
      }
      var k = n(29332),
        y = n(59064),
        C = n(51768),
        w = n(38223)
      var x = n(83021),
        g = n(26996),
        S = n(51331)
      function I(e) {
        const { size: t = 'normal' } = e
        return r.createElement(E, {
          size: t,
          label: r.createElement(
            'div',
            { className: l()(S.loaderWrap, S[t]) },
            r.createElement(g.Loader, { className: S.loader }),
          ),
          noInteractive: !0,
          onMouseOver: e.onMouseOver,
        })
      }
      class N extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._itemRef = null),
            (this._menuElementRef = r.createRef()),
            (this._menuRef = null),
            (this._handleClick = (e) => {
              e.isDefaultPrevented() ||
                this.state.disabled ||
                (this._hasSubItems()
                  ? this._showSubMenu()
                  : (this.state.doNotCloseOnClick || (0, y.globalCloseMenu)(),
                    this.props.action.execute(),
                    this._trackEvent(),
                    this.props.onExecute &&
                      this.props.onExecute(this.props.action)))
            }),
            (this._handleClickToolbox = () => {
              ;(0, y.globalCloseMenu)()
            }),
            (this._handleItemMouseOver = () => {
              this._showSubMenu(), this._setCurrentContextValue()
            }),
            (this._handleMenuMouseOver = () => {
              this._setCurrentContextValue()
            }),
            (this._showSubMenu = () => {
              this.props.onShowSubMenu(this.props.action)
            }),
            (this._calcSubMenuPos = (e) =>
              (function (e, t, n = { x: 0, y: 10 }) {
                if (t) {
                  const {
                      left: n,
                      right: r,
                      top: o,
                    } = t.getBoundingClientRect(),
                    s = document.documentElement.clientWidth,
                    a = { x: n - e, y: o },
                    i = { x: r, y: o }
                  return (0, w.isRtl)() ? (n <= e ? i : a) : s - r >= e ? i : a
                }
                return n
              })(e, this._itemRef)),
            (this._updateState = (e) => {
              this.setState(e.getState())
            }),
            (this._setItemRef = (e) => {
              this._itemRef = e
            }),
            (this._handleMenuRef = (e) => {
              this._menuRef = e
            }),
            (this._registerSubmenu = () => {
              var e
              return null === (e = this.context) || void 0 === e
                ? void 0
                : e.registerSubmenu(
                    this.props.action.id,
                    (e) =>
                      (0, a.ensureNotNull)(this._itemRef).contains(e) ||
                      (null !== this._menuElementRef.current &&
                        this._menuElementRef.current.contains(e)),
                  )
            }),
            (this.state = { ...this.props.action.getState() })
        }
        componentDidMount() {
          this.props.action.onUpdate().subscribe(this, this._updateState),
            this.state.subItems.length &&
              (this._unsubscribe = this._registerSubmenu()),
            this.props.reference &&
              (this._itemRef = this.props.reference.current)
        }
        componentDidUpdate(e, t) {
          var n, r, o
          t.loading !== this.state.loading &&
            (null === (r = (n = this.props).onRequestUpdate) ||
              void 0 === r ||
              r.call(n)),
            0 === t.subItems.length &&
              this.state.subItems.length > 0 &&
              (this._unsubscribe = this._registerSubmenu()),
            t.subItems.length > 0 &&
              0 === this.state.subItems.length &&
              (null === (o = this._unsubscribe) ||
                void 0 === o ||
                o.call(this)),
            t.subItems !== this.state.subItems &&
              null !== this._menuRef &&
              this._menuRef.update()
        }
        componentWillUnmount() {
          this.props.action.onUpdate().unsubscribe(this, this._updateState),
            this._unsubscribe && this._unsubscribe()
        }
        render() {
          var e, t, n
          const o =
              null !== (e = this.state.jsxLabel) && void 0 !== e
                ? e
                : this.state.label,
            s = (
              null === (t = this.context) || void 0 === t ? void 0 : t.current
            )
              ? this.context.current === this.props.action.id
              : this.props.isSubMenuOpened
          return this.state.loading
            ? r.createElement(I, { size: this.state.size })
            : r.createElement(
                E,
                {
                  theme: this.props.theme,
                  reference:
                    null !== (n = this.props.reference) && void 0 !== n
                      ? n
                      : this._setItemRef,
                  onClick: this._handleClick,
                  onClickToolbox: this._handleClickToolbox,
                  onMouseOver: this._handleItemMouseOver,
                  hovered: s,
                  hasSubItems: this._hasSubItems(),
                  actionName: this.state.name,
                  checkboxInput: this.props.checkboxInput,
                  selected: this.props.selected,
                  ...this.state,
                  label: o,
                },
                r.createElement(k.ContextMenu, {
                  isOpened: s,
                  items: this.state.subItems,
                  position: this._calcSubMenuPos,
                  menuStatName: this.props.menuStatName,
                  parentStatName: this._getStatName(),
                  menuElementReference: this._menuElementRef,
                  onMouseOver: this.state.subItems.length
                    ? this._handleMenuMouseOver
                    : void 0,
                  ref: this._handleMenuRef,
                }),
              )
        }
        _setCurrentContextValue() {
          var e
          this.state.subItems.length &&
            (null === (e = this.context) ||
              void 0 === e ||
              e.setCurrent(this.props.action.id))
        }
        _hasSubItems() {
          return this.state.subItems.length > 0
        }
        _trackEvent() {
          const e = this._getStatName()
          ;(0, C.trackEvent)(
            'ContextMenuClick',
            this.props.menuStatName || '',
            e,
          )
        }
        _getStatName() {
          return [this.props.parentStatName, this.state.statName]
            .filter((e) => Boolean(e))
            .join('.')
        }
      }
      N.contextType = x.SubmenuContext
      class M extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._handleShowSubMenu = (e) => {
              const t = e.getState()
              this.setState({ showSubMenuOf: t.subItems.length ? e : void 0 })
            }),
            (this.state = {})
        }
        render() {
          return r.createElement(
            'table',
            null,
            r.createElement(
              'tbody',
              null,
              this.props.items.map((e) => this._item(e)),
            ),
          )
        }
        static getDerivedStateFromProps(e, t) {
          return !e.parentIsOpened && t.showSubMenuOf
            ? { showSubMenuOf: void 0 }
            : null
        }
        _item(e) {
          switch (e.type) {
            case 'separator':
              return r.createElement(s, { key: e.id, hint: e.getHint() })
            case 'action':
              return r.createElement(N, {
                key: e.id,
                action: e,
                onShowSubMenu: this._handleShowSubMenu,
                isSubMenuOpened: this.state.showSubMenuOf === e,
                menuStatName: this.props.menuStatName,
                parentStatName: this.props.parentStatName,
                onRequestUpdate: this.props.onRequestUpdate,
              })
          }
        }
      }
    },
    65890: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
    },
    66493: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'
    },
    79978: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
    },
    80802: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path fill="currentColor" d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>'
    },
    39750: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
    },
    33765: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
    },
    69311: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
    },
  },
])
