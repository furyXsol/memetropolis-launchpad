;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2077],
  {
    81026: (e) => {
      e.exports = {
        container: 'container-WDZ0PRNh',
        'container-xxsmall': 'container-xxsmall-WDZ0PRNh',
        'container-xsmall': 'container-xsmall-WDZ0PRNh',
        'container-small': 'container-small-WDZ0PRNh',
        'container-medium': 'container-medium-WDZ0PRNh',
        'container-large': 'container-large-WDZ0PRNh',
        'intent-default': 'intent-default-WDZ0PRNh',
        focused: 'focused-WDZ0PRNh',
        readonly: 'readonly-WDZ0PRNh',
        disabled: 'disabled-WDZ0PRNh',
        'with-highlight': 'with-highlight-WDZ0PRNh',
        grouped: 'grouped-WDZ0PRNh',
        'adjust-position': 'adjust-position-WDZ0PRNh',
        'first-row': 'first-row-WDZ0PRNh',
        'first-col': 'first-col-WDZ0PRNh',
        stretch: 'stretch-WDZ0PRNh',
        'font-size-medium': 'font-size-medium-WDZ0PRNh',
        'font-size-large': 'font-size-large-WDZ0PRNh',
        'no-corner-top-left': 'no-corner-top-left-WDZ0PRNh',
        'no-corner-top-right': 'no-corner-top-right-WDZ0PRNh',
        'no-corner-bottom-right': 'no-corner-bottom-right-WDZ0PRNh',
        'no-corner-bottom-left': 'no-corner-bottom-left-WDZ0PRNh',
        'size-xxsmall': 'size-xxsmall-WDZ0PRNh',
        'size-xsmall': 'size-xsmall-WDZ0PRNh',
        'size-small': 'size-small-WDZ0PRNh',
        'size-medium': 'size-medium-WDZ0PRNh',
        'size-large': 'size-large-WDZ0PRNh',
        'intent-success': 'intent-success-WDZ0PRNh',
        'intent-warning': 'intent-warning-WDZ0PRNh',
        'intent-danger': 'intent-danger-WDZ0PRNh',
        'intent-primary': 'intent-primary-WDZ0PRNh',
        'border-none': 'border-none-WDZ0PRNh',
        'border-thin': 'border-thin-WDZ0PRNh',
        'border-thick': 'border-thick-WDZ0PRNh',
        highlight: 'highlight-WDZ0PRNh',
        shown: 'shown-WDZ0PRNh',
      }
    },
    7236: (e) => {
      e.exports = {
        'inner-slot': 'inner-slot-W53jtLjw',
        interactive: 'interactive-W53jtLjw',
        icon: 'icon-W53jtLjw',
        'inner-middle-slot': 'inner-middle-slot-W53jtLjw',
        'before-slot': 'before-slot-W53jtLjw',
        'after-slot': 'after-slot-W53jtLjw',
      }
    },
    30930: (e) => {
      e.exports = {
        input: 'input-RUSovanF',
        'size-xxsmall': 'size-xxsmall-RUSovanF',
        'size-xsmall': 'size-xsmall-RUSovanF',
        'size-small': 'size-small-RUSovanF',
        'size-medium': 'size-medium-RUSovanF',
        'size-large': 'size-large-RUSovanF',
        'with-start-slot': 'with-start-slot-RUSovanF',
        'with-end-slot': 'with-end-slot-RUSovanF',
      }
    },
    86332: (e, t, n) => {
      'use strict'
      n.d(t, { ControlGroupContext: () => r })
      const r = n(50959).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      })
    },
    95604: (e, t, n) => {
      'use strict'
      function r(e) {
        let t = 0
        return (
          (e.isTop && e.isLeft) || (t += 1),
          (e.isTop && e.isRight) || (t += 2),
          (e.isBottom && e.isLeft) || (t += 8),
          (e.isBottom && e.isRight) || (t += 4),
          t
        )
      }
      n.d(t, { getGroupCellRemoveRoundBorders: () => r })
    },
    67029: (e, t, n) => {
      'use strict'
      n.d(t, { ControlSkeleton: () => y, InputClasses: () => p })
      var r = n(50959),
        o = n(97754),
        i = n(50151),
        a = n(38528),
        s = n(90186),
        l = n(86332),
        u = n(95604)
      var c = n(81026),
        d = n.n(c)
      function f(e) {
        let t = ''
        return (
          0 !== e &&
            (1 & e && (t = o(t, d()['no-corner-top-left'])),
            2 & e && (t = o(t, d()['no-corner-top-right'])),
            4 & e && (t = o(t, d()['no-corner-bottom-right'])),
            8 & e && (t = o(t, d()['no-corner-bottom-left']))),
          t
        )
      }
      function h(e, t, n, r) {
        const {
            removeRoundBorder: i,
            className: a,
            intent: s = 'default',
            borderStyle: l = 'thin',
            size: c,
            highlight: h,
            disabled: m,
            readonly: p,
            stretch: g,
            noReadonlyStyles: v,
            isFocused: y,
          } = e,
          D = f(null != i ? i : (0, u.getGroupCellRemoveRoundBorders)(n))
        return o(
          d().container,
          d()[`container-${c}`],
          d()[`intent-${s}`],
          d()[`border-${l}`],
          c && d()[`size-${c}`],
          D,
          h && d()['with-highlight'],
          m && d().disabled,
          p && !v && d().readonly,
          y && d().focused,
          g && d().stretch,
          t && d().grouped,
          !r && d()['adjust-position'],
          n.isTop && d()['first-row'],
          n.isLeft && d()['first-col'],
          a,
        )
      }
      function m(e, t, n) {
        const { highlight: r, highlightRemoveRoundBorder: i } = e
        if (!r) return d().highlight
        const a = f(null != i ? i : (0, u.getGroupCellRemoveRoundBorders)(t))
        return o(d().highlight, d().shown, d()[`size-${n}`], a)
      }
      const p = {
          FontSizeMedium: (0, i.ensureDefined)(d()['font-size-medium']),
          FontSizeLarge: (0, i.ensureDefined)(d()['font-size-large']),
        },
        g = { passive: !1 }
      function v(e, t) {
        const {
            style: n,
            id: o,
            role: i,
            onFocus: u,
            onBlur: c,
            onMouseOver: d,
            onMouseOut: f,
            onMouseDown: p,
            onMouseUp: v,
            onKeyDown: y,
            onClick: D,
            tabIndex: b,
            startSlot: S,
            middleSlot: w,
            endSlot: k,
            onWheel: H,
            onWheelNoPassive: M = null,
            size: W,
          } = e,
          {
            isGrouped: _,
            cellState: C,
            disablePositionAdjustment: R = !1,
          } = (0, r.useContext)(l.ControlGroupContext),
          x = (function (e, t = null, n) {
            const o = (0, r.useRef)(null),
              i = (0, r.useRef)(null),
              a = (0, r.useCallback)(() => {
                if (null === o.current || null === i.current) return
                const [e, t, n] = i.current
                null !== t && o.current.addEventListener(e, t, n)
              }, []),
              s = (0, r.useCallback)(() => {
                if (null === o.current || null === i.current) return
                const [e, t, n] = i.current
                null !== t && o.current.removeEventListener(e, t, n)
              }, []),
              l = (0, r.useCallback)((e) => {
                s(), (o.current = e), a()
              }, [])
            return (
              (0, r.useEffect)(
                () => ((i.current = [e, t, n]), a(), s),
                [e, t, n],
              ),
              l
            )
          })('wheel', M, g)
        return r.createElement(
          'span',
          {
            style: n,
            id: o,
            role: i,
            className: h(e, _, C, R),
            tabIndex: b,
            ref: (0, a.useMergedRefs)([t, x]),
            onFocus: u,
            onBlur: c,
            onMouseOver: d,
            onMouseOut: f,
            onMouseDown: p,
            onMouseUp: v,
            onKeyDown: y,
            onClick: D,
            onWheel: H,
            ...(0, s.filterDataProps)(e),
            ...(0, s.filterAriaProps)(e),
          },
          S,
          w,
          k,
          r.createElement('span', { className: m(e, C, W) }),
        )
      }
      v.displayName = 'ControlSkeleton'
      const y = r.forwardRef(v)
    },
    78274: (e, t, n) => {
      'use strict'
      n.d(t, {
        AfterSlot: () => c,
        EndSlot: () => u,
        MiddleSlot: () => l,
        StartSlot: () => s,
      })
      var r = n(50959),
        o = n(97754),
        i = n(7236),
        a = n.n(i)
      function s(e) {
        const {
          className: t,
          interactive: n = !0,
          icon: i = !1,
          children: s,
        } = e
        return r.createElement(
          'span',
          {
            className: o(
              a()['inner-slot'],
              n && a().interactive,
              i && a().icon,
              t,
            ),
          },
          s,
        )
      }
      function l(e) {
        const { className: t, children: n } = e
        return r.createElement(
          'span',
          { className: o(a()['inner-slot'], a()['inner-middle-slot'], t) },
          n,
        )
      }
      function u(e) {
        const {
          className: t,
          interactive: n = !0,
          icon: i = !1,
          children: s,
        } = e
        return r.createElement(
          'span',
          {
            className: o(
              a()['inner-slot'],
              n && a().interactive,
              i && a().icon,
              t,
            ),
          },
          s,
        )
      }
      function c(e) {
        const { className: t, children: n } = e
        return r.createElement(
          'span',
          { className: o(a()['after-slot'], t) },
          n,
        )
      }
    },
    31261: (e, t, n) => {
      'use strict'
      n.d(t, { InputControl: () => y })
      var r = n(50959),
        o = n(97754),
        i = n(90186),
        a = n(47201),
        s = n(48907),
        l = n(38528),
        u = n(48027),
        c = n(29202),
        d = n(45812),
        f = n(67029),
        h = n(78274),
        m = n(30930),
        p = n.n(m)
      function g(e) {
        return !(0, i.isAriaAttribute)(e) && !(0, i.isDataAttribute)(e)
      }
      function v(e) {
        const {
            id: t,
            title: n,
            role: a,
            tabIndex: s,
            placeholder: l,
            name: u,
            type: c,
            value: d,
            defaultValue: m,
            draggable: v,
            autoComplete: y,
            autoFocus: D,
            maxLength: b,
            min: S,
            max: w,
            step: k,
            pattern: H,
            inputMode: M,
            onSelect: W,
            onFocus: _,
            onBlur: C,
            onKeyDown: R,
            onKeyUp: x,
            onKeyPress: E,
            onChange: N,
            onDragStart: z,
            size: P = 'small',
            className: O,
            inputClassName: I,
            disabled: j,
            readonly: T,
            containerTabIndex: L,
            startSlot: F,
            endSlot: U,
            reference: Z,
            containerReference: B,
            onContainerFocus: A,
            ...$
          } = e,
          G = (0, i.filterProps)($, g),
          V = {
            ...(0, i.filterAriaProps)($),
            ...(0, i.filterDataProps)($),
            id: t,
            title: n,
            role: a,
            tabIndex: s,
            placeholder: l,
            name: u,
            type: c,
            value: d,
            defaultValue: m,
            draggable: v,
            autoComplete: y,
            autoFocus: D,
            maxLength: b,
            min: S,
            max: w,
            step: k,
            pattern: H,
            inputMode: M,
            onSelect: W,
            onFocus: _,
            onBlur: C,
            onKeyDown: R,
            onKeyUp: x,
            onKeyPress: E,
            onChange: N,
            onDragStart: z,
          }
        return r.createElement(f.ControlSkeleton, {
          ...G,
          disabled: j,
          readonly: T,
          tabIndex: L,
          className: o(p().container, O),
          size: P,
          ref: B,
          onFocus: A,
          startSlot: F,
          middleSlot: r.createElement(
            h.MiddleSlot,
            null,
            r.createElement('input', {
              ...V,
              className: o(
                p().input,
                p()[`size-${P}`],
                I,
                F && p()['with-start-slot'],
                U && p()['with-end-slot'],
              ),
              disabled: j,
              readOnly: T,
              ref: Z,
            }),
          ),
          endSlot: U,
        })
      }
      function y(e) {
        e = (0, u.useControl)(e)
        const {
            disabled: t,
            autoSelectOnFocus: n,
            tabIndex: o = 0,
            onFocus: i,
            onBlur: f,
            reference: h,
            containerReference: m = null,
          } = e,
          p = (0, r.useRef)(null),
          g = (0, r.useRef)(null),
          [y, D] = (0, c.useFocus)(),
          b = t ? void 0 : y ? -1 : o,
          S = t ? void 0 : y ? o : -1,
          {
            isMouseDown: w,
            handleMouseDown: k,
            handleMouseUp: H,
          } = (0, d.useIsMouseDown)(),
          M = (0, a.createSafeMulticastEventHandler)(
            D.onFocus,
            function (e) {
              n && !w.current && (0, s.selectAllContent)(e.currentTarget)
            },
            i,
          ),
          W = (0, a.createSafeMulticastEventHandler)(D.onBlur, f),
          _ = (0, r.useCallback)(
            (e) => {
              ;(p.current = e),
                h &&
                  ('function' == typeof h && h(e),
                  'object' == typeof h && (h.current = e))
            },
            [p, h],
          )
        return r.createElement(v, {
          ...e,
          isFocused: y,
          containerTabIndex: b,
          tabIndex: S,
          onContainerFocus: function (e) {
            g.current === e.target && null !== p.current && p.current.focus()
          },
          onFocus: M,
          onBlur: W,
          reference: _,
          containerReference: (0, l.useMergedRefs)([g, m]),
          onMouseDown: k,
          onMouseUp: H,
        })
      }
    },
    48027: (e, t, n) => {
      'use strict'
      n.d(t, { useControl: () => i })
      var r = n(47201),
        o = n(29202)
      function i(e) {
        const {
            onFocus: t,
            onBlur: n,
            intent: i,
            highlight: a,
            disabled: s,
          } = e,
          [l, u] = (0, o.useFocus)(void 0, s),
          c = (0, r.createSafeMulticastEventHandler)(s ? void 0 : u.onFocus, t),
          d = (0, r.createSafeMulticastEventHandler)(s ? void 0 : u.onBlur, n)
        return {
          ...e,
          intent: i || (l ? 'primary' : 'default'),
          highlight: null != a ? a : l,
          onFocus: c,
          onBlur: d,
        }
      }
    },
    29202: (e, t, n) => {
      'use strict'
      n.d(t, { useFocus: () => o })
      var r = n(50959)
      function o(e, t) {
        const [n, o] = (0, r.useState)(!1)
        ;(0, r.useEffect)(() => {
          t && n && o(!1)
        }, [t, n])
        const i = {
          onFocus: (0, r.useCallback)(
            function (t) {
              ;(void 0 !== e && e.current !== t.target) || o(!0)
            },
            [e],
          ),
          onBlur: (0, r.useCallback)(
            function (t) {
              ;(void 0 !== e && e.current !== t.target) || o(!1)
            },
            [e],
          ),
        }
        return [n, i]
      }
    },
    45812: (e, t, n) => {
      'use strict'
      n.d(t, { useIsMouseDown: () => o })
      var r = n(50959)
      function o() {
        const e = (0, r.useRef)(!1),
          t = (0, r.useCallback)(() => {
            e.current = !0
          }, [e]),
          n = (0, r.useCallback)(() => {
            e.current = !1
          }, [e])
        return { isMouseDown: e, handleMouseDown: t, handleMouseUp: n }
      }
    },
    38528: (e, t, n) => {
      'use strict'
      n.d(t, {
        useMergedRefs: () => i,
      })
      var r = n(50959),
        o = n(53017)
      function i(e) {
        return (0, r.useCallback)((0, o.mergeRefs)(e), e)
      }
    },
    27267: (e, t, n) => {
      'use strict'
      function r(e, t, n, r, o) {
        function i(o) {
          if (e > o.timeStamp) return
          const i = o.target
          void 0 !== n &&
            null !== t &&
            null !== i &&
            i.ownerDocument === r &&
            (t.contains(i) || n(o))
        }
        return (
          o.click && r.addEventListener('click', i, !1),
          o.mouseDown && r.addEventListener('mousedown', i, !1),
          o.touchEnd && r.addEventListener('touchend', i, !1),
          o.touchStart && r.addEventListener('touchstart', i, !1),
          () => {
            r.removeEventListener('click', i, !1),
              r.removeEventListener('mousedown', i, !1),
              r.removeEventListener('touchend', i, !1),
              r.removeEventListener('touchstart', i, !1)
          }
        )
      }
      n.d(t, { addOutsideEventListener: () => r })
    },
    36383: (e, t, n) => {
      'use strict'
      n.d(t, { useOutsideEvent: () => i })
      var r = n(50959),
        o = n(27267)
      function i(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: i,
            touchStart: a,
            handler: s,
            reference: l,
            ownerDocument: u = document,
          } = e,
          c = (0, r.useRef)(null),
          d = (0, r.useRef)(new CustomEvent('timestamp').timeStamp)
        return (
          (0, r.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: i, touchStart: a },
              r = l ? l.current : c.current
            return (0, o.addOutsideEventListener)(d.current, r, s, u, e)
          }, [t, n, i, a, s]),
          l || c
        )
      }
    },
    9745: (e, t, n) => {
      'use strict'
      n.d(t, { Icon: () => o })
      var r = n(50959)
      const o = r.forwardRef((e, t) => {
        const { icon: n = '', ...o } = e
        return r.createElement('span', {
          ...o,
          ref: t,
          dangerouslySetInnerHTML: { __html: n },
        })
      })
    },
    90186: (e, t, n) => {
      'use strict'
      function r(e) {
        return i(e, a)
      }
      function o(e) {
        return i(e, s)
      }
      function i(e, t) {
        const n = Object.entries(e).filter(t),
          r = {}
        for (const [e, t] of n) r[e] = t
        return r
      }
      function a(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, {
        filterAriaProps: () => o,
        filterDataProps: () => r,
        filterProps: () => i,
        isAriaAttribute: () => s,
        isDataAttribute: () => a,
      })
    },
    48907: (e, t, n) => {
      'use strict'
      function r(e) {
        null !== e && e.setSelectionRange(0, e.value.length)
      }
      n.d(t, { selectAllContent: () => r })
    },
    53017: (e, t, n) => {
      'use strict'
      function r(e) {
        return (t) => {
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t)
          })
        }
      }
      function o(e) {
        return r([e])
      }
      n.d(t, { isomorphicRef: () => o, mergeRefs: () => r })
    },
    67961: (e, t, n) => {
      'use strict'
      n.d(t, { OverlapManager: () => i, getRootOverlapManager: () => s })
      var r = n(50151)
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
            n = null === e ? this._document.createDocumentFragment() : e
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
            })
          })(t, n),
            (this._container = n)
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e)
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const n = this._windows.get(e)
          if (void 0 !== n) return n
          this.registerWindow(e)
          const r = this._document.createElement('div')
          if (
            ((r.style.position = t.position),
            (r.style.zIndex = this._index.toString()),
            (r.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length
            if (t.index >= e) this._container.appendChild(r)
            else if (t.index <= 0)
              this._container.insertBefore(r, this._container.firstChild)
            else {
              const e = this._container.childNodes[t.index]
              this._container.insertBefore(r, e)
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(r, this._container.firstChild)
              : this._container.appendChild(r)
          return this._windows.set(e, r), ++this._index, r
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
        if (null !== t) return (0, r.ensureDefined)(a.get(t))
        {
          const t = new i(e),
            n = (function (e) {
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
          return a.set(n, t), t.setContainer(n), e.body.appendChild(n), t
        }
      }
    },
    47201: (e, t, n) => {
      'use strict'
      function r(...e) {
        return (t) => {
          for (const n of e) void 0 !== n && n(t)
        }
      }
      n.d(t, { createSafeMulticastEventHandler: () => r })
    },
    99054: (e, t, n) => {
      'use strict'
      n.d(t, { setFixedBodyState: () => u })
      const r = (() => {
        let e
        return () => {
          var t
          if (void 0 === e) {
            const n = document.createElement('div'),
              r = n.style
            ;(r.visibility = 'hidden'),
              (r.width = '100px'),
              (r.msOverflowStyle = 'scrollbar'),
              document.body.appendChild(n)
            const o = n.offsetWidth
            n.style.overflow = 'scroll'
            const i = document.createElement('div')
            ;(i.style.width = '100%'), n.appendChild(i)
            const a = i.offsetWidth
            null === (t = n.parentNode) || void 0 === t || t.removeChild(n),
              (e = o - a)
          }
          return e
        }
      })()
      function o(e, t, n) {
        null !== e && e.style.setProperty(t, n)
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
          n = t.querySelector('.widgetbar-wrap')
        if (e && 1 == ++s) {
          const e = i(t, 'overflow'),
            s = a(t, 'padding-right')
          'hidden' !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (o(n, 'right', `${r()}px`),
            (t.style.paddingRight = `${s + r()}px`),
            (l = !0)),
            t.classList.add('i-no-scroll')
        } else if (
          !e &&
          s > 0 &&
          0 == --s &&
          (t.classList.remove('i-no-scroll'), l)
        ) {
          o(n, 'right', '0px')
          let e = 0
          0,
            t.scrollHeight <= t.clientHeight && (e -= r()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + 'px'),
            (l = !1)
        }
      }
    },
    51826: (e, t, n) => {
      'use strict'
      n.d(t, { DialogsOpenerManager: () => r, dialogsOpenerManager: () => o })
      class r {
        constructor() {
          this._storage = new Map()
        }
        setAsOpened(e, t) {
          this._storage.set(e, t)
        }
        setAsClosed(e) {
          this._storage.delete(e)
        }
        isOpened(e) {
          return this._storage.has(e)
        }
        getDialogPayload(e) {
          return this._storage.get(e)
        }
      }
      const o = new r()
    },
    65718: (e, t, n) => {
      'use strict'
      n.d(t, { Portal: () => l, PortalContext: () => u })
      var r = n(50959),
        o = n(962),
        i = n(36174),
        a = n(67961),
        s = n(60508)
      class l extends r.PureComponent {
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
              r.createElement(u.Provider, { value: this }, this.props.children),
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
      const u = r.createContext(null)
    },
    60508: (e, t, n) => {
      'use strict'
      n.d(t, { Slot: () => o, SlotContext: () => i })
      var r = n(50959)
      class o extends r.Component {
        shouldComponentUpdate() {
          return !1
        }
        render() {
          return r.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          })
        }
      }
      const i = r.createContext(null)
    },
    95257: (e, t) => {
      'use strict'
      var n = Symbol.for('react.element'),
        r = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        a = Symbol.for('react.profiler'),
        s = Symbol.for('react.provider'),
        l = Symbol.for('react.context'),
        u = Symbol.for('react.forward_ref'),
        c = Symbol.for('react.suspense'),
        d = Symbol.for('react.memo'),
        f = Symbol.for('react.lazy'),
        h = Symbol.iterator
      var m = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        p = Object.assign,
        g = {}
      function v(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || m)
      }
      function y() {}
      function D(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || m)
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
      var b = (D.prototype = new y())
      ;(b.constructor = D), p(b, v.prototype), (b.isPureReactComponent = !0)
      var S = Array.isArray,
        w = Object.prototype.hasOwnProperty,
        k = { current: null },
        H = { key: !0, ref: !0, __self: !0, __source: !0 }
      function M(e, t, r) {
        var o,
          i = {},
          a = null,
          s = null
        if (null != t)
          for (o in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = '' + t.key),
          t))
            w.call(t, o) && !H.hasOwnProperty(o) && (i[o] = t[o])
        var l = arguments.length - 2
        if (1 === l) i.children = r
        else if (1 < l) {
          for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2]
          i.children = u
        }
        if (e && e.defaultProps)
          for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o])
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: k.current,
        }
      }
      function W(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === n
      }
      var _ = /\/+/g
      function C(e, t) {
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
      function R(e, t, o, i, a) {
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
                case n:
                case r:
                  l = !0
              }
          }
        if (l)
          return (
            (a = a((l = e))),
            (e = '' === i ? '.' + C(l, 0) : i),
            S(a)
              ? ((o = ''),
                null != e && (o = e.replace(_, '$&/') + '/'),
                R(a, t, o, '', function (e) {
                  return e
                }))
              : null != a &&
                (W(a) &&
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
                        : ('' + a.key).replace(_, '$&/') + '/') +
                      e,
                  )),
                t.push(a)),
            1
          )
        if (((l = 0), (i = '' === i ? '.' : i + ':'), S(e)))
          for (var u = 0; u < e.length; u++) {
            var c = i + C((s = e[u]), u)
            l += R(s, t, o, c, a)
          }
        else if (
          ((c = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (h && e[h]) || e['@@iterator'])
                ? e
                : null
          })(e)),
          'function' == typeof c)
        )
          for (e = c.call(e), u = 0; !(s = e.next()).done; )
            l += R((s = s.value), t, o, (c = i + C(s, u++)), a)
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
      function x(e, t, n) {
        if (null == e) return e
        var r = [],
          o = 0
        return (
          R(e, r, '', '', function (e) {
            return t.call(n, e, o++)
          }),
          r
        )
      }
      function E(e) {
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
      var N = { current: null },
        z = { transition: null },
        P = {
          ReactCurrentDispatcher: N,
          ReactCurrentBatchConfig: z,
          ReactCurrentOwner: k,
        }
      ;(t.Children = {
        map: x,
        forEach: function (e, t, n) {
          x(
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
          if (!W(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return e
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = a),
        (t.PureComponent = D),
        (t.StrictMode = i),
        (t.Suspense = c),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.',
            )
          var o = p({}, e.props),
            i = e.key,
            a = e.ref,
            s = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (s = k.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps
            for (u in t)
              w.call(t, u) &&
                !H.hasOwnProperty(u) &&
                (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
          }
          var u = arguments.length - 2
          if (1 === u) o.children = r
          else if (1 < u) {
            l = Array(u)
            for (var c = 0; c < u; c++) l[c] = arguments[c + 2]
            o.children = l
          }
          return {
            $$typeof: n,
            type: e.type,
            key: i,
            ref: a,
            props: o,
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
        (t.isValidElement = W),
        (t.lazy = function (e) {
          return {
            $$typeof: f,
            _payload: { _status: -1, _result: e },
            _init: E,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = z.transition
          z.transition = {}
          try {
            e()
          } finally {
            z.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return N.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return N.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return N.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return N.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return N.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return N.current.useImperativeHandle(e, t, n)
        }),
        (t.useInsertionEffect = function (e, t) {
          return N.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return N.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return N.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, n) {
          return N.current.useReducer(e, t, n)
        }),
        (t.useRef = function (e) {
          return N.current.useRef(e)
        }),
        (t.useState = function (e) {
          return N.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return N.current.useSyncExternalStore(e, t, n)
        }),
        (t.useTransition = function () {
          return N.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, n) => {
      'use strict'
      e.exports = n(95257)
    },
    76894: (e) => {
      e.exports = {
        dialog: 'dialog-UGdC69sw',
        dialogInner: 'dialogInner-UGdC69sw',
        titleWrapper: 'titleWrapper-UGdC69sw',
        title: 'title-UGdC69sw',
        infoHint: 'infoHint-UGdC69sw',
        form: 'form-UGdC69sw',
        inputWrapper: 'inputWrapper-UGdC69sw',
        input: 'input-UGdC69sw',
        hint: 'hint-UGdC69sw',
        error: 'error-UGdC69sw',
      }
    },
    57163: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { showChangeIntervalDialog: () => w })
      var r = n(50959),
        o = n(962),
        i = n(97754),
        a = n.n(i),
        s = n(44352),
        l = n(31261),
        u = n(67029),
        c = n(82992),
        d = n(63016),
        f = n(9745),
        h = n(85508)
      const m = s.t(null, void 0, n(52143)),
        p = s.t(null, void 0, n(35668))
      function g(e) {
        const { className: t, isSecondsEnabled: n } = e
        return r.createElement(f.Icon, {
          icon: h,
          className: a()('apply-common-tooltip', t),
          title: n ? p : m,
        })
      }
      var v = n(94025),
        y = n(36274)
      var D = n(76894)
      function b(e) {
        const { initVal: t, selectOnInit: o, onClose: i } = e,
          f = (0, r.useRef)(null),
          [h, m] = (0, r.useState)(t.toUpperCase()),
          p = (0, r.useMemo)(() => (0, v.parseIntervalValue)(h), [h]),
          b = (function (e, t) {
            return (0, r.useMemo)(() => {
              if (t.error || !(0, v.intervalIsSupported)(e)) return !1
              const n = y.Interval.normalize(e)
              return null !== n && (0, v.isResolutionMultiplierValid)(n)
            }, [e, t])
          })(h, p),
          S = (0, r.useMemo)(() => {
            if (!b) return null
            const e = p.qty + (p.unit || '')
            return (0, v.getTranslatedResolutionModel)(e).hint
          }, [b, p])
        return (
          (0, r.useLayoutEffect)(() => {
            var e, t
            o
              ? null === (e = f.current) || void 0 === e || e.select()
              : null === (t = f.current) || void 0 === t || t.focus()
          }, [o]),
          r.createElement(
            d.PopupDialog,
            {
              className: D.dialog,
              'data-dialog-name': 'change-interval-dialog',
              isOpened: !0,
              onClickOutside: i,
              onFocus: function () {
                var e
                null === (e = f.current) || void 0 === e || e.focus()
              },
              onKeyDown: function (e) {
                27 === e.keyCode && (null == i || i())
              },
            },
            r.createElement(
              'div',
              { className: D.dialogInner },
              r.createElement(
                'div',
                { className: D.titleWrapper },
                r.createElement(
                  'div',
                  { className: D.title },
                  s.t(null, void 0, n(99374)),
                ),
                r.createElement(g, {
                  className: D.infoHint,
                  isSecondsEnabled: (0, v.isSecondsEnabled)(),
                }),
              ),
              r.createElement(
                'form',
                {
                  className: D.form,
                  onSubmit: function (e) {
                    e.preventDefault()
                    const t = c.linking.interval.value(),
                      n = y.Interval.normalize(h)
                    n &&
                      t !== n &&
                      b &&
                      ((r = n),
                      (0, v.setLastUsedResolution)(r),
                      c.linking.interval.setValue(r))
                    var r
                    null == i || i()
                  },
                },
                r.createElement(l.InputControl, {
                  className: a()(D.inputWrapper, u.InputClasses.FontSizeLarge),
                  inputClassName: D.input,
                  type: 'text',
                  size: 'large',
                  reference: f,
                  value: h,
                  maxLength: 8,
                  intent: b ? void 0 : 'danger',
                  onChange: function (e) {
                    const { value: t } = e.target
                    m(t.toUpperCase())
                  },
                }),
              ),
              b
                ? r.createElement('div', { className: D.hint }, S)
                : r.createElement(
                    'div',
                    { className: a()(D.hint, D.error) },
                    s.t(null, void 0, n(72572)),
                  ),
            ),
          )
        )
      }
      var S = n(51826)
      function w(e) {
        if (
          S.dialogsOpenerManager.isOpened('ChangeIntervalDialog') ||
          S.dialogsOpenerManager.isOpened('SymbolSearch')
        )
          return
        const t = document.createElement('div'),
          { initVal: n, selectOnInit: i, onClose: a } = e,
          s = r.createElement(b, {
            initVal: n,
            selectOnInit: i,
            onClose: function () {
              o.unmountComponentAtNode(t),
                S.dialogsOpenerManager.setAsClosed('ChangeIntervalDialog'),
                null == a || a()
            },
          })
        o.render(s, t),
          S.dialogsOpenerManager.setAsOpened('ChangeIntervalDialog')
      }
    },
    85508: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'
    },
    72572: (e) => {
      e.exports = {
        ar: ['لا يمكن تطبيقه'],
        ca_ES: ['No aplicable'],
        cs: ['Nelze použít'],
        de: ['Nicht anwendbar'],
        el: ['Μη εφαρμόσιμο'],
        en: 'Not applicable',
        es: ['No aplicable'],
        fa: ['غیر قابل قبول'],
        fr: ['Non applicable'],
        he_IL: ['בלתי קביל'],
        hu_HU: ['Nem alkalmazható'],
        id_ID: ['Tidak dapat diterapkan'],
        it: ['Non applicabile'],
        ja: ['適用できません'],
        ko: ['쓸 수 없음'],
        ms_MY: ['Tidak berkenaan'],
        nl_NL: ['Niet van toepassingen'],
        pl: ['Nie dotyczy'],
        pt: ['Não aplicável'],
        ro: 'Not applicable',
        ru: ['Не поддерживается'],
        sv: ['Ej applicerbar'],
        th: ['ไม่สามารถใช้ได้'],
        tr: ['Uygun Değil'],
        vi: ['Không áp dụng được'],
        zh: ['不适用'],
        zh_TW: ['不適用'],
      }
    },
    52143: (e) => {
      e.exports = {
        ar: [
          'اكتب رقم الفاصل الزمني للرسم البياني لدقيقة (مثلا أكتب رقم 5 إذا كان الرسم البياني لخمس دقائق). أو أكتب رقم وإضافة حرف بعد ك حرف الـ H (للساعة)، و حرف الـ D (لليوم)، و حرف الـW (للأسبوع)، و حرف الـ M (للشهر) مثلاً (D أو 2H).',
        ],
        ca_ES: [
          "Escriviu el número d'interval per a gràfics de minuts (és a dir, 5 si serà un gràfic de cinc minuts). O número més lletra per a H (per hora), D (diari), S (setmanal), M (mensual) intervals (es a dir, D o 2H).",
        ],
        cs: 'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        de: [
          'Geben Sie die Intervall-Nummer für Minuten-Charts ein (z.B. 5, wenn es sich um einen Fünf-Minuten-Chart handelt). Oder Zahl plus Buchstabe für H (stündlich), D (täglich), W (wöchentlich), M (monatlich) Intervalle (d.h. D oder 2H)',
        ],
        el: 'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        en: 'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        es: [
          'Escriba el número de intervalo para gráficos de minutos (es decir, 5 si va a ser un gráfico de cinco minutos). O número más letra para H (por hora), D (diario), S (semanal), M (mensual) intervalos (es decir, D o 2H)',
        ],
        fa: 'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        fr: [
          "Tapez le numéro d'intervalle pour les diagrammes de minutes (c'est-à-dire 5 si le graphique doit être de cinq minutes). Ou un nombre plus une lettre pour les intervalles H (horaires), D (journaliers), W (hebdomadaires), M (mensuels) (c'est-à-dire D ou 2H)",
        ],
        he_IL: [
          'הקלד את מספר האינטרוול  לגרף דקה (כלומר, 5 במידה וזה גרף חמש דקות). או מספר פלוס אות H (לשעה), D (יום), W (שבוע) M (חודש) אינטרוולים. (כלומר D ליום או 2H ל2שעות)',
        ],
        hu_HU:
          'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        id_ID: [
          'Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau tanda plus untuk interval H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H).',
        ],
        it: [
          "Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere 'D' o '2H')",
        ],
        ja: [
          '分足チャートの分数を入力します（5分足チャートの場合であれば5）。他の時間足の場合には、時間の数値に続けて文字（H (時間)、D (日)、W (週)、M (月)）を入力して下さい（例．D や 2H）。',
        ],
        ko: [
          '분 차트에 대한 인터벌 숫자를 타이핑하십시오 (보기: 5분 차트는 5). 또는 숫자와 함께 H (시간), D(날), W(주), M(달) 인터벌값을 넣으십시오 (보기: D 또는 2H)',
        ],
        ms_MY: [
          'Masukkan angka selang masa untuk carta minit (contohnya seperti 5 jika anda perlukan carta 5 minit). Atau nombor dengan abjad untuk J (Jam), H (Harian), M (Mingguan), B (Bulanan) (contoh H atau 2j)',
        ],
        nl_NL:
          'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        pl: [
          'Wprowadź wybraną wartość liczbową interwału dla wykresów minutowych (np. wartość 5 dla wykresu o interwale 5 minutowym) bądź wartość liczbową i/lub jedną z liter: H (interwał godzinny), D (dzienny), W (tygodniowy), M (miesięczny), czyli np. D, 2H, itd.',
        ],
        pt: [
          'Digite o número de intervalo para gráficos de minutos (ou seja, cinco para um gráfico de cinco minutos). Ou número mais a letra para os intervalos H (Por hora), D (Diário), S (Semanal), M (Mensal) (ou seja, D ou 2H)',
        ],
        ro: 'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        ru: [
          'Введите нужное число для минутных графиков (например, 5 если нужен 5-минутный график), или число и букву для соответствующих интервалов: H (часы), D (дни), W (недели), M (месяцы), например, D или 2H',
        ],
        sv: [
          'Skriv intervallnumret för minutdiagram (dvs 5 om det ska vara ett femminuters diagram). Eller nummer plus bokstav för H (Timmars), D (Dag), W (Vecko), M (Månads) intervaller (dvs D eller 2H)',
        ],
        th: [
          'พิมพ์ช่วงเวลาในหน่วยของชาร์ตนาที (ตัวอย่างเช่น พิมพ์ 5 ก็จะแสดงชาร์ตราย 5 นาที) หรือ ตัวเลขตามด้วยอักษร H สำหรับช่วงเวลา (รายชั่วโมง) D (รายวัน) W (รายสัปดาห์) M (รายเดือน) (เช่น D หรือ 2H)',
        ],
        tr: [
          'Dakika grafikleri için aralık sayısını girin (örn beş dakikalık grafik için 5). Veya sayı artı; saat için H harfi (saatlik), D (günlük), W(haftalık), M (aylık) aralıklarını kullanın(örn D veya 2H gibi)',
        ],
        vi: [
          'Nhập số khoảng thời gian cho biểu đồ phút (ví dụ 5 nếu đó sẽ là biểu đồ năm phút). Hoặc số cộng cho chữ H (Hàng giờ), D (Hàng ngày), W (Hàng tuần), M (Hàng tháng) (ví dụ D hoặc 2H)',
        ],
        zh: [
          '在分钟图表上输入时间周期数值（即5代表5分钟的图表）。或H（小时）、D（日）、W（周）、M（月）时间周期（即D或2H）的数字加字母。',
        ],
        zh_TW: [
          '鍵入分鐘圖表的間隔時間 (如果是五分鐘圖表，則為5)。或數字加字母 H (小時)、D (日)、W (週)、M (月) 的間隔時間 (即D或2H)',
        ],
      }
    },
    35668: (e) => {
      e.exports = {
        ar: [
          'اكتب رقم الإطار الزمني للرسوم البيانية بالدقائق (مثلاً: 5 إذا كان إطار الرسم البياني هو 5 دقائق). أو رقم مع حروف للأطر الزمنية الأخرى: حرف "ث" للرسم البياني بإطار 1 ثانية (15 "ث" للرسم البياني 15 ثانية، إلخ)، و"س" (ساعة)، و"ي" (يوم)، و"أ" (أسبوعي)، و"ش" (شهر) (مثلاً: "ي" أو "2س")',
        ],
        ca_ES: [
          "Introduïu el número de l'interval per als gràfics de minuts (per exemple, 5 si és un gràfic de cinc minuts). També podeu introduir un número més una lletra per aconseguir diferents intervals: S per a un gràfic d'un segon (15S correspon a un gràfic de 15 segons); H (hores), W (setmanes) o M (mesos). A continuació teniu un exemple: 1D o 2H.",
        ],
        cs: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        de: [
          'Geben Sie die Intervallnummer für Minuten-Charts ein (d.h. 5, wenn es sich um ein Fünf-Minuten-Chart handeln soll). Oder Nummer und Buchstabe für andere Intervalle: S für 1-Sekunden-Chart (15S für 15-Sekunden-Chart, etc.), H (stündliche), D (tägliche), W (wöchentliche), M (monatliche) Intervalle (z.B. D oder 2H)',
        ],
        el: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        en: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        es: [
          'Introduzca el número del intervalo para los gráficos de minutos (por ejemplo, 5 si va a ser un gráfico de cinco minutos). También puede introducir un número, más una letra, para conseguir diferentes intervalos: S para un gráfico de 1 segundo (15S corresponde a un gráfico de 15 segundos); H (horas), W (semanas) o M (meses). A continuación se muestra un ejemplo: 1D o 2H.',
        ],
        fa: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        fr: [
          "Tapez le numéro d'intervalle pour les graphiques en minutes (c'est-à-dire 5 s'il s'agit d'un graphique de cinq minutes). Ou un chiffre plus une lettre pour les autres intervalles: S pour 1 seconde (15S pour 15 secondes, etc.), H (horaire), D (quotidien), W (hebdomadaire), M (mensuel) (c.-à-d. D ou 2H)",
        ],
        he_IL: [
          "הקלד את מספר האינטרוול עבור גרפי דקות (כלומר 5 אם זה יהיה גרף של חמש דקות). או מספר אותיות במרווחי זמן אחרים: S בגרף שניה (15S לגרף 15 שניות וכו'), H (שעה), D (יומי), W (שבועי), M (חודשי) באינטרוולים (כלומר D או 2H)",
        ],
        hu_HU:
          "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        id_ID: [
          'Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau angka dengan huruf untuk interval lainnya: S untuk chart 1 detik (15S untuk chart 15 detik, dsb), H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H).',
        ],
        it: [
          "Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'S' per i secondi, 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere '15S', '1D' o '2H')",
        ],
        ja: [
          '分足チャートの分数を入力します（例．5分足チャートの場合であれば5）。他の時間足の場合には、時間の数値に続けて時間足を表す文字を入力して下さい: 秒足チャート (15Sは15秒チャート), H (時間), D (日), W (週), M (月)、（例．D や 2H）。',
        ],
        ko: [
          '분 차트에 대한 인터벌 숫자를 타이핑하십시오 (보기: 5분 차트는 5). 또는 숫자와 함께 S (1초, 15초는 15S 등),  H (시간), D(날), W(주), M(달) 인터벌값을 넣으십시오 (보기: D 또는 2H)',
        ],
        ms_MY: [
          'Taipkan nombor selang masa untuk carta minit (i.e. 5 jika ia merupakan carta lima minit). Atau kombinasi nombor dengan huruf bagi selang lain: selang masa s untuk carta 1 saat (15s untuk carta 15 saat, dll.), j (Jam), H (Harian), M (Mingguan), B (Bulanan) (contohnya H atau 2j)',
        ],
        nl_NL:
          "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        pl: [
          'Wpisz numer interwału dla wykresów minutowych (np. 5, jeśli ma to być wykres pięciominutowy). Lub numer plus litera dla innych interwałów: S dla wykresu jednosekundowego (15S dla wykresu 15-sekundowego itd.) H (Godzinowy), D (dzienny), W (tygodniowy), M (miesięczny) (np. D lub 2H)',
        ],
        pt: [
          'Digite o número do tempo gráfico de minutos (ou seja, 5 se for um gráfico de cinco minutos). Ou número mais letra para outros intervalos: S para 1 segundo (15S para 15 segundos, etc.), H (Para Hora), D (Diário), W (Semanal), M (Mensal) intervalos (ou seja, D ou 2H)',
        ],
        ro: "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        ru: [
          'Введите нужное число для минутных графиков (например, 5, если нужен 5-минутный график). Или число и букву для других интервалов: S для 1-секундного графика (15S для 15-секундного и т. д.), H (часы), D (дни), W (недели), M (месяцы). Например, D или 2H',
        ],
        sv: [
          'Ange intervallnumret för minutdiagram (t.ex. 5 om det är ett femminutersdiagram). Eller så anger du nummer och bokstav för andra intervall: S för 1-sekundsdiagram (15S för 15-sekundersdiagram osv.), H (varje timme), D (varje dag), W (varje vecka), M (varje månad) intervaller (t.ex. D eller 2H)',
        ],
        th: [
          'พิมพ์ตัวเลขช่วงเวลาสำหรับชาร์ตรายนาที (ตัวอย่าง 5 ถ้าต้องการชาร์ตรายห้านาที) หรือตัวเลขบวกตัวอักษรสำหรับช่วงเวลาอื่นๆ: S สำหรับชาร์ตราย 1 วินาที (15S สำหรับชาร์ตราย 15 วินาที เป็นต้น) H (รายชั่วโมง) D (รายวัน) W (รายสัปดาห์) M (รายเดือน) (ตัวอย่าง D หรือ 2H)',
        ],
        tr: [
          'Dakika grafiği için aralık numarasını yazın (yani, beş dakikalık bir grafik olacaksa 5). Veya diğer aralıklar için sayı ve sayının yanında harf: 1 saniye grafik için s (15 saniye grafik için 15s, vb.), S (Saatlik), G (Günlük), H (Haftalık), A (Aylık) aralıkları (yani G veya 2S)',
        ],
        vi: [
          'Nhập số khoảng cho các biểu đồ phút (tức là 5 nếu nó sẽ là biểu đồ năm phút). Hoặc số cộng chữ cái cho các khoảng thời gian khác: S cho biểu đồ 1 giây (15S cho biểu đồ 15 giây, v.v.), H (Hàng giờ), D (Hàng ngày), W (Hàng tuần), M (Hàng tháng) (tức là D hoặc 2H)',
        ],
        zh: [
          '在分钟图表上输入时间周期数值（即5代表5分钟的图表）。或H（小时）、D（日）、W（周）、M（月）时间周期（即D或2H）的数字加字母。',
        ],
        zh_TW: [
          '鍵入分鐘圖表的間隔時間(如果是五分鐘圖表，則輸入5)。或其他間隔的數字加字母：S為1秒圖表(15S為15秒圖表等)、H(小時)、D(日)、W(週)、M(月)間隔時間(即D或2H)',
        ],
      }
    },
  },
])
