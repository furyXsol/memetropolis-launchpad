;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2878],
  {
    45300: (e) => {
      e.exports = {}
    },
    10888: (e) => {
      e.exports = { 'default-drawer-min-top-distance': '100px' }
    },
    33963: (e) => {
      e.exports = {
        item: 'item-zwyEh4hn',
        label: 'label-zwyEh4hn',
        labelRow: 'labelRow-zwyEh4hn',
        toolbox: 'toolbox-zwyEh4hn',
      }
    },
    71986: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 430px)',
        item: 'item-jFqVJoPk',
        hovered: 'hovered-jFqVJoPk',
        isDisabled: 'isDisabled-jFqVJoPk',
        isActive: 'isActive-jFqVJoPk',
        shortcut: 'shortcut-jFqVJoPk',
        toolbox: 'toolbox-jFqVJoPk',
        withIcon: 'withIcon-jFqVJoPk',
        'round-icon': 'round-icon-jFqVJoPk',
        icon: 'icon-jFqVJoPk',
        labelRow: 'labelRow-jFqVJoPk',
        label: 'label-jFqVJoPk',
        showOnHover: 'showOnHover-jFqVJoPk',
        'disclosure-item-circle-logo': 'disclosure-item-circle-logo-jFqVJoPk',
        showOnFocus: 'showOnFocus-jFqVJoPk',
      }
    },
    39416: (e, t, o) => {
      'use strict'
      o.d(t, { useFunctionalRefObject: () => l })
      var n = o(50959),
        i = o(43010)
      function l(e) {
        const t = (0, n.useMemo)(
            () =>
              (function (e) {
                const t = (o) => {
                  e(o), (t.current = o)
                }
                return (t.current = null), t
              })((e) => {
                s.current(e)
              }),
            [],
          ),
          o = (0, n.useRef)(null),
          l = (t) => {
            if (null === t) return a(o.current, t), void (o.current = null)
            o.current !== e && ((o.current = e), a(o.current, t))
          },
          s = (0, n.useRef)(l)
        return (
          (s.current = l),
          (0, i.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return s.current(t.current), () => s.current(null)
          }, [e]),
          t
        )
      }
      function a(e, t) {
        null !== e && ('function' == typeof e ? e(t) : (e.current = t))
      }
    },
    43010: (e, t, o) => {
      'use strict'
      o.d(t, { useIsomorphicLayoutEffect: () => i })
      var n = o(50959)
      function i(e, t) {
        ;('undefined' == typeof window ? n.useEffect : n.useLayoutEffect)(e, t)
      }
    },
    27267: (e, t, o) => {
      'use strict'
      function n(e, t, o, n, i) {
        function l(i) {
          if (e > i.timeStamp) return
          const l = i.target
          void 0 !== o &&
            null !== t &&
            null !== l &&
            l.ownerDocument === n &&
            (t.contains(l) || o(i))
        }
        return (
          i.click && n.addEventListener('click', l, !1),
          i.mouseDown && n.addEventListener('mousedown', l, !1),
          i.touchEnd && n.addEventListener('touchend', l, !1),
          i.touchStart && n.addEventListener('touchstart', l, !1),
          () => {
            n.removeEventListener('click', l, !1),
              n.removeEventListener('mousedown', l, !1),
              n.removeEventListener('touchend', l, !1),
              n.removeEventListener('touchstart', l, !1)
          }
        )
      }
      o.d(t, { addOutsideEventListener: () => n })
    },
    67842: (e, t, o) => {
      'use strict'
      o.d(t, { useResizeObserver: () => s })
      var n = o(50959),
        i = o(59255),
        l = o(43010),
        a = o(39416)
      function s(e, t = []) {
        const { callback: o, ref: s = null } = (function (e) {
            return 'function' == typeof e ? { callback: e } : e
          })(e),
          r = (0, n.useRef)(null),
          c = (0, n.useRef)(o)
        c.current = o
        const u = (0, a.useFunctionalRefObject)(s),
          d = (0, n.useCallback)(
            (e) => {
              u(e),
                null !== r.current &&
                  (r.current.disconnect(), null !== e && r.current.observe(e))
            },
            [u, r],
          )
        return (
          (0, l.useIsomorphicLayoutEffect)(
            () => (
              (r.current = new i.default((e, t) => {
                c.current(e, t)
              })),
              u.current && d(u.current),
              () => {
                var e
                null === (e = r.current) || void 0 === e || e.disconnect()
              }
            ),
            [u, ...t],
          ),
          d
        )
      }
    },
    90186: (e, t, o) => {
      'use strict'
      function n(e) {
        return l(e, a)
      }
      function i(e) {
        return l(e, s)
      }
      function l(e, t) {
        const o = Object.entries(e).filter(t),
          n = {}
        for (const [e, t] of o) n[e] = t
        return n
      }
      function a(e) {
        const [t, o] = e
        return 0 === t.indexOf('data-') && 'string' == typeof o
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-')
      }
      o.d(t, {
        filterAriaProps: () => i,
        filterDataProps: () => n,
        filterProps: () => l,
        isAriaAttribute: () => s,
        isDataAttribute: () => a,
      })
    },
    76460: (e, t, o) => {
      'use strict'
      function n(e) {
        return 0 === e.detail
      }
      o.d(t, { isKeyboardClick: () => n })
    },
    47201: (e, t, o) => {
      'use strict'
      function n(...e) {
        return (t) => {
          for (const o of e) void 0 !== o && o(t)
        }
      }
      o.d(t, { createSafeMulticastEventHandler: () => n })
    },
    45601: (e, t, o) => {
      'use strict'
      o.d(t, { Measure: () => i })
      var n = o(67842)
      function i(e) {
        const { children: t, onResize: o } = e
        return t((0, n.useResizeObserver)(o || (() => {}), [null === o]))
      }
    },
    50238: (e, t, o) => {
      'use strict'
      o.d(t, { useRovingTabindexElement: () => a })
      var n = o(50959),
        i = o(39416),
        l = o(16838)
      function a(e, t = []) {
        const [o, a] = (0, n.useState)(!1),
          s = (0, i.useFunctionalRefObject)(e)
        return (
          (0, n.useLayoutEffect)(() => {
            if (!l.PLATFORM_ACCESSIBILITY_ENABLED) return
            const e = s.current
            if (null === e) return
            const t = (e) => {
              switch (e.type) {
                case 'roving-tabindex:main-element':
                  a(!0)
                  break
                case 'roving-tabindex:secondary-element':
                  a(!1)
              }
            }
            return (
              e.addEventListener('roving-tabindex:main-element', t),
              e.addEventListener('roving-tabindex:secondary-element', t),
              () => {
                e.removeEventListener('roving-tabindex:main-element', t),
                  e.removeEventListener('roving-tabindex:secondary-element', t)
              }
            )
          }, t),
          [s, l.PLATFORM_ACCESSIBILITY_ENABLED ? (o ? 0 : -1) : void 0]
        )
      }
    },
    76068: (e, t, o) => {
      'use strict'
      o.d(t, { CircleLogo: () => l })
      var n = o(50959),
        i = o(58492)
      o(45300)
      function l(e) {
        var t, o
        const l = (0, i.getStyleClasses)(e.size, e.className),
          a =
            null !== (o = null !== (t = e.alt) && void 0 !== t ? t : e.title) &&
            void 0 !== o
              ? o
              : ''
        return (0, i.isCircleLogoWithUrlProps)(e)
          ? n.createElement('img', {
              className: l,
              src: e.logoUrl,
              alt: a,
              title: e.title,
              loading: e.loading,
              'aria-label': e['aria-label'],
              'aria-hidden': e['aria-hidden'],
            })
          : n.createElement(
              'span',
              {
                className: l,
                title: e.title,
                'aria-label': e['aria-label'],
                'aria-hidden': e['aria-hidden'],
              },
              e.placeholderLetter,
            )
      }
    },
    58492: (e, t, o) => {
      'use strict'
      o.d(t, { getStyleClasses: () => i, isCircleLogoWithUrlProps: () => l })
      var n = o(97754)
      function i(e, t) {
        return n('tv-circle-logo', `tv-circle-logo--${e}`, t)
      }
      function l(e) {
        return 'logoUrl' in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
      }
    },
    78036: (e, t, o) => {
      'use strict'
      o.d(t, { useEnsuredContext: () => l })
      var n = o(50959),
        i = o(50151)
      function l(e) {
        return (0, i.ensureNotNull)((0, n.useContext)(e))
      }
    },
    70412: (e, t, o) => {
      'use strict'
      o.d(t, {
        hoverMouseEventFilter: () => l,
        useAccurateHover: () => a,
        useHover: () => i,
      })
      var n = o(50959)
      function i() {
        const [e, t] = (0, n.useState)(!1)
        return [
          e,
          {
            onMouseOver: function (e) {
              l(e) && t(!0)
            },
            onMouseOut: function (e) {
              l(e) && t(!1)
            },
          },
        ]
      }
      function l(e) {
        return !e.currentTarget.contains(e.relatedTarget)
      }
      function a(e) {
        const [t, o] = (0, n.useState)(!1)
        return (
          (0, n.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return
              const n = e.current.contains(t.target)
              o(n)
            }
            return (
              document.addEventListener('mouseover', t),
              () => document.removeEventListener('mouseover', t)
            )
          }, []),
          t
        )
      }
    },
    29006: (e, t, o) => {
      'use strict'
      o.d(t, { useResizeObserver: () => n.useResizeObserver })
      var n = o(67842)
    },
    77975: (e, t, o) => {
      'use strict'
      o.d(t, { useWatchedValueReadonly: () => i })
      var n = o(50959)
      const i = (e, t = !1) => {
        const o = 'watchedValue' in e ? e.watchedValue : void 0,
          i = 'defaultValue' in e ? e.defaultValue : e.watchedValue.value(),
          [l, a] = (0, n.useState)(o ? o.value() : i)
        return (
          (t ? n.useLayoutEffect : n.useEffect)(() => {
            if (o) {
              a(o.value())
              const e = (e) => a(e)
              return o.subscribe(e), () => o.unsubscribe(e)
            }
            return () => {}
          }, [o]),
          l
        )
      }
    },
    16396: (e, t, o) => {
      'use strict'
      o.d(t, { DEFAULT_POPUP_MENU_ITEM_THEME: () => u, PopupMenuItem: () => h })
      var n = o(50959),
        i = o(97754),
        l = o(59064),
        a = o(51768),
        s = o(90186),
        r = o(76068),
        c = o(71986)
      const u = c
      function d(e) {
        e.stopPropagation()
      }
      function h(e) {
        const {
            id: t,
            role: o,
            'aria-label': u,
            'aria-selected': h,
            'aria-checked': m,
            className: v,
            title: b,
            labelRowClassName: p,
            labelClassName: g,
            shortcut: f,
            forceShowShortcuts: T,
            icon: C,
            isActive: _,
            isDisabled: E,
            isHovered: w,
            appearAsDisabled: x,
            label: F,
            link: k,
            showToolboxOnHover: L,
            showToolboxOnFocus: S,
            target: A,
            rel: y,
            toolbox: M,
            reference: I,
            onMouseOut: B,
            onMouseOver: D,
            onKeyDown: N,
            suppressToolboxClick: R = !0,
            theme: W = c,
            tabIndex: O,
            tagName: P,
            renderComponent: V,
            roundedIcon: H,
            iconAriaProps: j,
            circleLogo: z,
          } = e,
          U = (0, s.filterDataProps)(e),
          Z = (0, n.useRef)(null),
          G = (0, n.useMemo)(
            () =>
              (function (e) {
                function t(t) {
                  const { reference: o, ...i } = t,
                    l = null != e ? e : i.href ? 'a' : 'div',
                    a =
                      'a' === l
                        ? i
                        : (function (e) {
                            const {
                              download: t,
                              href: o,
                              hrefLang: n,
                              media: i,
                              ping: l,
                              rel: a,
                              target: s,
                              type: r,
                              referrerPolicy: c,
                              ...u
                            } = e
                            return u
                          })(i)
                  return n.createElement(l, { ...a, ref: o })
                }
                return (t.displayName = `DefaultComponent(${e})`), t
              })(P),
            [P],
          ),
          K = null != V ? V : G
        return n.createElement(
          K,
          {
            ...U,
            id: t,
            role: o,
            'aria-label': u,
            'aria-selected': h,
            'aria-checked': m,
            className: i(v, W.item, C && W.withIcon, {
              [W.isActive]: _,
              [W.isDisabled]: E || x,
              [W.hovered]: w,
            }),
            title: b,
            href: k,
            target: A,
            rel: y,
            reference: function (e) {
              ;(Z.current = e), 'function' == typeof I && I(e)
              'object' == typeof I && (I.current = e)
            },
            onClick: function (t) {
              const {
                dontClosePopup: o,
                onClick: n,
                onClickArg: i,
                trackEventObject: s,
              } = e
              if (E) return
              s && (0, a.trackEvent)(s.category, s.event, s.label)
              n && n(i, t)
              o || (0, l.globalCloseMenu)()
            },
            onContextMenu: function (t) {
              const { trackEventObject: o, trackRightClick: n } = e
              o &&
                n &&
                (0, a.trackEvent)(o.category, o.event, `${o.label}_rightClick`)
            },
            onMouseUp: function (t) {
              const { trackEventObject: o, trackMouseWheelClick: n } = e
              if (1 === t.button && k && o) {
                let e = o.label
                n && (e += '_mouseWheelClick'),
                  (0, a.trackEvent)(o.category, o.event, e)
              }
            },
            onMouseOver: D,
            onMouseOut: B,
            onKeyDown: N,
            tabIndex: O,
          },
          z &&
            n.createElement(r.CircleLogo, {
              ...j,
              className: c['disclosure-item-circle-logo'],
              size: 'xxxsmall',
              logoUrl: z.logoUrl,
              placeholderLetter: z.placeholderLetter,
            }),
          C &&
            n.createElement('span', {
              'aria-label': j && j['aria-label'],
              'aria-hidden': j && Boolean(j['aria-hidden']),
              className: i(W.icon, H && c['round-icon']),
              dangerouslySetInnerHTML: { __html: C },
            }),
          n.createElement(
            'span',
            { className: i(W.labelRow, p) },
            n.createElement('span', { className: i(W.label, g) }, F),
          ),
          (void 0 !== f || T) &&
            n.createElement(
              'span',
              { className: W.shortcut },
              (J = f) && J.split('+').join(' + '),
            ),
          void 0 !== M &&
            n.createElement(
              'span',
              {
                onClick: R ? d : void 0,
                className: i(W.toolbox, {
                  [W.showOnHover]: L,
                  [W.showOnFocus]: S,
                }),
              },
              M,
            ),
        )
        var J
      }
    },
    81332: (e, t, o) => {
      'use strict'
      o.d(t, { multilineLabelWithIconAndToolboxTheme: () => a })
      var n = o(40173),
        i = o(71986),
        l = o(33963)
      const a = (0, n.mergeThemes)(i, l)
    },
    20520: (e, t, o) => {
      'use strict'
      o.d(t, { PopupMenu: () => h })
      var n = o(50959),
        i = o(962),
        l = o(62942),
        a = o(65718),
        s = o(27317),
        r = o(29197)
      const c = n.createContext(void 0)
      var u = o(36383)
      const d = n.createContext({ setMenuMaxWidth: !1 })
      function h(e) {
        const {
            controller: t,
            children: o,
            isOpened: h,
            closeOnClickOutside: m = !0,
            doNotCloseOn: v,
            onClickOutside: b,
            onClose: p,
            onKeyboardClose: g,
            'data-name': f = 'popup-menu-container',
            ...T
          } = e,
          C = (0, n.useContext)(r.CloseDelegateContext),
          _ = n.useContext(d),
          E = (0, n.useContext)(c),
          w = (0, u.useOutsideEvent)({
            handler: function (e) {
              b && b(e)
              if (!m) return
              const t = (0, l.default)(v) ? v() : null == v ? [] : [v]
              if (t.length > 0 && e.target instanceof Node)
                for (const o of t) {
                  const t = i.findDOMNode(o)
                  if (t instanceof Node && t.contains(e.target)) return
                }
              p()
            },
            mouseDown: !0,
            touchStart: !0,
          })
        return h
          ? n.createElement(
              a.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              n.createElement(
                'span',
                { ref: w, style: { pointerEvents: 'auto' } },
                n.createElement(
                  s.Menu,
                  {
                    ...T,
                    onClose: p,
                    onKeyboardClose: g,
                    onScroll: function (t) {
                      const { onScroll: o } = e
                      o && o(t)
                    },
                    customCloseDelegate: C,
                    customRemeasureDelegate: E,
                    ref: t,
                    'data-name': f,
                    limitMaxWidth: _.setMenuMaxWidth,
                  },
                  o,
                ),
              ),
            )
          : null
      }
    },
    86656: (e, t, o) => {
      'use strict'
      o.d(t, { TouchScrollContainer: () => s })
      var n = o(50959),
        i = o(59142),
        l = o(50151),
        a = o(49483)
      const s = (0, n.forwardRef)((e, t) => {
        const { children: o, ...l } = e,
          s = (0, n.useRef)(null)
        return (
          (0, n.useImperativeHandle)(t, () => s.current),
          (0, n.useLayoutEffect)(() => {
            if (a.CheckMobile.iOS())
              return (
                null !== s.current &&
                  (0, i.disableBodyScroll)(s.current, { allowTouchMove: r(s) }),
                () => {
                  null !== s.current && (0, i.enableBodyScroll)(s.current)
                }
              )
          }, []),
          n.createElement('div', { ref: s, ...l }, o)
        )
      })
      function r(e) {
        return (t) => {
          const o = (0, l.ensureNotNull)(e.current),
            n = document.activeElement
          return (
            !o.contains(t) || (null !== n && o.contains(n) && n.contains(t))
          )
        }
      }
    },
    6132: (e, t, o) => {
      'use strict'
      var n = o(22134)
      function i() {}
      function l() {}
      ;(l.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, o, i, l, a) {
            if (a !== n) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              )
              throw ((s.name = 'Invariant Violation'), s)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var o = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: l,
            resetWarningCache: i,
          }
          return (o.PropTypes = o), o
        })
    },
    19036: (e, t, o) => {
      e.exports = o(6132)()
    },
    22134: (e) => {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    47102: (e) => {
      e.exports = {
        accessible: 'accessible-NQERJsv9',
        active: 'active-NQERJsv9',
      }
    },
    89089: (e) => {
      e.exports = { button: 'button-LkmyTVRc', active: 'active-LkmyTVRc' }
    },
    22878: (e) => {
      e.exports = {
        dropdown: 'dropdown-pbhJWNrt',
        buttonWrap: 'buttonWrap-pbhJWNrt',
        control: 'control-pbhJWNrt',
        arrow: 'arrow-pbhJWNrt',
        arrowIcon: 'arrowIcon-pbhJWNrt',
        isOpened: 'isOpened-pbhJWNrt',
        hover: 'hover-pbhJWNrt',
        isGrayed: 'isGrayed-pbhJWNrt',
        accessible: 'accessible-pbhJWNrt',
      }
    },
    27334: (e) => {
      e.exports = {
        container: 'container-Wp9adlfh',
        mirror: 'mirror-Wp9adlfh',
        background: 'background-Wp9adlfh',
        arrow: 'arrow-Wp9adlfh',
      }
    },
    46173: (e) => {
      e.exports = { item: 'item-uxNfqe_g', label: 'label-uxNfqe_g' }
    },
    99537: (e) => {
      e.exports = {
        drawingToolbar: 'drawingToolbar-BfVZxb4b',
        isHidden: 'isHidden-BfVZxb4b',
        inner: 'inner-BfVZxb4b',
        group: 'group-BfVZxb4b',
        lastGroup: 'lastGroup-BfVZxb4b',
        fill: 'fill-BfVZxb4b',
      }
    },
    22231: (e) => {
      e.exports = {
        toggleButton: 'toggleButton-OhcB9eH7',
        collapsed: 'collapsed-OhcB9eH7',
        background: 'background-OhcB9eH7',
        arrow: 'arrow-OhcB9eH7',
      }
    },
    20274: (e) => {
      e.exports = { item: 'item-yfwdxbRo', hovered: 'hovered-yfwdxbRo' }
    },
    12451: (e) => {
      e.exports = {
        desktopSize: 'desktopSize-l1SzP6TV',
        smallSize: 'smallSize-l1SzP6TV',
        tabs: 'tabs-l1SzP6TV',
        categories: 'categories-l1SzP6TV',
      }
    },
    78227: (e) => {
      e.exports = { sticker: 'sticker-aZclaNCs' }
    },
    23091: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 430px)',
        stickerRow: 'stickerRow-KUOIljqV',
      }
    },
    62270: (e) => {
      e.exports = { wrapper: 'wrapper-FNeSdxed' }
    },
    37531: (e) => {
      e.exports = { drawer: 'drawer-PzCssz1z', menuBox: 'menuBox-PzCssz1z' }
    },
    85470: (e) => {
      e.exports = {
        toolButtonMagnet: 'toolButtonMagnet-wg76fIbD',
        toolButtonMagnet__menuItem: 'toolButtonMagnet__menuItem-wg76fIbD',
        toolButtonMagnet__hintPlaceholder:
          'toolButtonMagnet__hintPlaceholder-wg76fIbD',
      }
    },
    30261: (e) => {
      e.exports = {
        wrap: 'wrap-Z4M3tWHb',
        scrollWrap: 'scrollWrap-Z4M3tWHb',
        noScrollBar: 'noScrollBar-Z4M3tWHb',
        content: 'content-Z4M3tWHb',
        icon: 'icon-Z4M3tWHb',
        scrollBot: 'scrollBot-Z4M3tWHb',
        scrollTop: 'scrollTop-Z4M3tWHb',
        isVisible: 'isVisible-Z4M3tWHb',
        iconWrap: 'iconWrap-Z4M3tWHb',
        fadeBot: 'fadeBot-Z4M3tWHb',
        fadeTop: 'fadeTop-Z4M3tWHb',
      }
    },
    55619: (e) => {
      e.exports = { iconContainer: 'iconContainer-dmpvVypS' }
    },
    81261: (e, t, o) => {
      'use strict'
      o.d(t, {
        focusFirstMenuItem: () => c,
        handleAccessibleMenuFocus: () => s,
        handleAccessibleMenuKeyDown: () => r,
        queryMenuElements: () => h,
      })
      var n = o(16838),
        i = o(71468),
        l = o(68335)
      const a = [37, 39, 38, 40]
      function s(e, t) {
        e.target &&
          n.PLATFORM_ACCESSIBILITY_ENABLED &&
          e.relatedTarget === t.current &&
          c(e.target)
      }
      function r(e) {
        if (!n.PLATFORM_ACCESSIBILITY_ENABLED) return
        if (e.defaultPrevented) return
        const t = (0, l.hashFromEvent)(e)
        if (!a.includes(t)) return
        const o = document.activeElement
        if (!(document.activeElement instanceof HTMLElement)) return
        const s = h(e.currentTarget).sort(n.navigationOrderComparator)
        if (0 === s.length) return
        const r = document.activeElement.closest('[data-role="menuitem"]')
        if (!(r instanceof HTMLElement)) return
        const c = s.indexOf(r)
        if (-1 === c) return
        const v = m(r),
          b = v.indexOf(document.activeElement),
          p = -1 !== b,
          g = (e) => {
            o && (0, i.becomeSecondaryElement)(o),
              (0, i.becomeMainElement)(e),
              e.focus()
          }
        switch (t) {
          case 37:
            if (!v.length) return
            e.preventDefault(),
              g(0 === b ? s[c] : p ? u(v, b, -1) : v[v.length - 1])
            break
          case 39:
            if (!v.length) return
            e.preventDefault(),
              b === v.length - 1 ? g(s[c]) : g(p ? u(v, b, 1) : v[0])
            break
          case 38: {
            e.preventDefault()
            const t = u(s, c, -1)
            if (p) {
              const e = d(t, b)
              g(e || t)
              break
            }
            g(t)
            break
          }
          case 40: {
            e.preventDefault()
            const t = u(s, c, 1)
            if (p) {
              const e = d(t, b)
              g(e || t)
              break
            }
            g(t)
          }
        }
      }
      function c(e) {
        const [t] = h(e)
        t && ((0, i.becomeMainElement)(t), t.focus())
      }
      function u(e, t, o) {
        return e[(t + e.length + o) % e.length]
      }
      function d(e, t) {
        const o = m(e)
        return o.length ? o[(t + o.length) % o.length] : null
      }
      function h(e) {
        return Array.from(
          e.querySelectorAll(
            '[data-role="menuitem"]:not([disabled], [aria-disabled])',
          ),
        ).filter((0, n.createScopedVisibleElementFilter)(e))
      }
      function m(e) {
        return Array.from(
          e.querySelectorAll('[tabindex]:not([disabled], [aria-disabled])'),
        ).filter((0, n.createScopedVisibleElementFilter)(e))
      }
    },
    71468: (e, t, o) => {
      'use strict'
      function n(e) {
        e.dispatchEvent(new CustomEvent('roving-tabindex:main-element'))
      }
      function i(e) {
        e.dispatchEvent(new CustomEvent('roving-tabindex:secondary-element'))
      }
      o.d(t, { becomeMainElement: () => n, becomeSecondaryElement: () => i })
    },
    81351: (e, t, o) => {
      'use strict'
      o.d(t, { AccessibleMenuItem: () => d })
      var n = o(50959),
        i = o(97754),
        l = o.n(i),
        a = o(3343),
        s = o(50238),
        r = o(16838),
        c = o(16396),
        u = o(47102)
      function d(e) {
        const { className: t, ...o } = e,
          [i, d] = (0, s.useRovingTabindexElement)(null)
        return n.createElement(c.PopupMenuItem, {
          ...o,
          className: l()(
            r.PLATFORM_ACCESSIBILITY_ENABLED && u.accessible,
            e.isActive && u.active,
            t,
          ),
          reference: i,
          tabIndex: d,
          onKeyDown: function (e) {
            if (
              !r.PLATFORM_ACCESSIBILITY_ENABLED ||
              e.target !== e.currentTarget
            )
              return
            const t = (0, a.hashFromEvent)(e)
            ;(13 !== t && 32 !== t) ||
              (e.preventDefault(),
              i.current instanceof HTMLElement && i.current.click())
          },
          'data-role': r.PLATFORM_ACCESSIBILITY_ENABLED ? 'menuitem' : void 0,
          'aria-disabled':
            (r.PLATFORM_ACCESSIBILITY_ENABLED && e.isDisabled) || void 0,
        })
      }
    },
    12165: (e, t, o) => {
      'use strict'
      o.d(t, { MenuFavoriteButton: () => u })
      var n = o(50959),
        i = o(97754),
        l = o.n(i),
        a = o(50238),
        s = o(16838),
        r = o(36189),
        c = o(89089)
      function u(e) {
        const { tooltip: t, onClick: o, ...i } = e,
          [u, d] = (0, a.useRovingTabindexElement)(null)
        return s.PLATFORM_ACCESSIBILITY_ENABLED
          ? n.createElement(
              'button',
              {
                ref: u,
                tabIndex: d,
                onClick: o,
                className: l()(c.button, i.isActive && c.active),
                type: 'button',
              },
              n.createElement(r.FavoriteButton, {
                'aria-label': t,
                ...i,
                'data-tooltip': t,
              }),
            )
          : n.createElement(r.FavoriteButton, { ...e, 'data-tooltip': t })
      }
    },
    14186: (e, t, o) => {
      'use strict'
      o.r(t), o.d(t, { DrawingToolbarRenderer: () => mo })
      var n = o(50959),
        i = o(962),
        l = o(50151),
        a = o(97754),
        s = o.n(a),
        r = o(32563),
        c = o(56840),
        u = o(14483),
        d = o(88348),
        h = o(76422),
        m = o(57898),
        v = o(49483),
        b = o(84015),
        p = o(54819)
      class g {
        constructor(e) {
          this._drawingsAccess = e || { tools: [], type: 'black' }
        }
        isToolEnabled(e) {
          const t = this._findTool(e)
          return (
            !(!t || !t.grayed) ||
            ('black' === this._drawingsAccess.type ? !t : !!t)
          )
        }
        isToolGrayed(e) {
          const t = this._findTool(e)
          return Boolean(t && t.grayed)
        }
        _findTool(e) {
          return this._drawingsAccess.tools.find((t) => t.name === e)
        }
      }
      var f = o(44352),
        T = o(68335)
      const C = [
        {
          id: 'linetool-group-cursors',
          title: f.t(null, void 0, o(82401)),
          items: [
            { name: 'cursor' },
            { name: 'dot' },
            { name: 'arrow' },
            { name: 'eraser' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-trend-line',
          title: f.t(null, void 0, o(18794)),
          items: [
            { name: 'LineToolTrendLine', hotkeyHash: T.Modifiers.Alt + 84 },
            { name: 'LineToolArrow' },
            { name: 'LineToolRay' },
            { name: 'LineToolInfoLine' },
            { name: 'LineToolExtended' },
            { name: 'LineToolTrendAngle' },
            { name: 'LineToolHorzLine', hotkeyHash: T.Modifiers.Alt + 72 },
            { name: 'LineToolHorzRay', hotkeyHash: T.Modifiers.Alt + 74 },
            { name: 'LineToolVertLine', hotkeyHash: T.Modifiers.Alt + 86 },
            { name: 'LineToolCrossLine', hotkeyHash: T.Modifiers.Alt + 67 },
            { name: 'LineToolParallelChannel' },
            {
              name: 'LineToolRegressionTrend',
            },
            { name: 'LineToolFlatBottom' },
            { name: 'LineToolDisjointAngle' },
            { name: 'LineToolAnchoredVWAP' },
          ].filter(Boolean),
          trackLabel: null,
        },
        {
          id: 'linetool-group-gann-and-fibonacci',
          title: f.t(null, void 0, o(5816)),
          items: [
            {
              name: 'LineToolFibRetracement',
              hotkeyHash: T.Modifiers.Alt + 70,
            },
            { name: 'LineToolTrendBasedFibExtension' },
            { name: 'LineToolPitchfork' },
            { name: 'LineToolSchiffPitchfork2' },
            { name: 'LineToolSchiffPitchfork' },
            { name: 'LineToolInsidePitchfork' },
            { name: 'LineToolFibChannel' },
            { name: 'LineToolFibTimeZone' },
            { name: 'LineToolGannSquare' },
            { name: 'LineToolGannFixed' },
            { name: 'LineToolGannComplex' },
            { name: 'LineToolGannFan' },
            { name: 'LineToolFibSpeedResistanceFan' },
            { name: 'LineToolTrendBasedFibTime' },
            { name: 'LineToolFibCircles' },
            { name: 'LineToolPitchfan' },
            { name: 'LineToolFibSpiral' },
            { name: 'LineToolFibSpeedResistanceArcs' },
            { name: 'LineToolFibWedge' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-geometric-shapes',
          title: f.t(null, void 0, o(22146)),
          items: [
            { name: 'LineToolBrush' },
            { name: 'LineToolHighlighter' },
            { name: 'LineToolRectangle' },
            { name: 'LineToolCircle' },
            { name: 'LineToolEllipse' },
            { name: 'LineToolPath' },
            { name: 'LineToolBezierQuadro' },
            { name: 'LineToolPolyline' },
            { name: 'LineToolTriangle' },
            { name: 'LineToolRotatedRectangle' },
            { name: 'LineToolArc' },
            { name: 'LineToolBezierCubic' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-annotation',
          title: f.t(null, void 0, o(19661)),
          items: [
            { name: 'LineToolText' },
            { name: 'LineToolTextAbsolute' },
            { name: 'LineToolNote' },
            { name: 'LineToolNoteAbsolute' },
            { name: 'LineToolSignpost' },
            null,
            null,
            null,
            { name: 'LineToolCallout' },
            { name: 'LineToolComment' },
            { name: 'LineToolPriceLabel' },
            { name: 'LineToolPriceNote' },
            { name: 'LineToolArrowMarker' },
            { name: 'LineToolArrowMarkLeft' },
            { name: 'LineToolArrowMarkRight' },
            { name: 'LineToolArrowMarkUp' },
            { name: 'LineToolArrowMarkDown' },
            { name: 'LineToolFlagMark' },
          ].filter(Boolean),
          trackLabel: null,
        },
        {
          id: 'linetool-group-patterns',
          title: f.t(null, void 0, o(19693)),
          items: [
            { name: 'LineTool5PointsPattern' },
            { name: 'LineToolCypherPattern' },
            { name: 'LineToolABCD' },
            { name: 'LineToolTrianglePattern' },
            { name: 'LineToolThreeDrivers' },
            { name: 'LineToolHeadAndShoulders' },
            { name: 'LineToolElliottImpulse' },
            { name: 'LineToolElliottTriangle' },
            { name: 'LineToolElliottTripleCombo' },
            { name: 'LineToolElliottCorrection' },
            { name: 'LineToolElliottDoubleCombo' },
            { name: 'LineToolCircleLines' },
            { name: 'LineToolTimeCycles' },
            { name: 'LineToolSineLine' },
          ],
          trackLabel: null,
        },
        {
          id: 'linetool-group-prediction-and-measurement',
          title: f.t(null, void 0, o(97100)),
          items: [
            { name: 'LineToolRiskRewardLong' },
            { name: 'LineToolRiskRewardShort' },
            { name: 'LineToolPrediction' },
            { name: 'LineToolDateRange' },
            { name: 'LineToolPriceRange' },
            { name: 'LineToolDateAndPriceRange' },
            { name: 'LineToolBarsPattern' },
            { name: 'LineToolGhostFeed' },
            { name: 'LineToolProjection' },
            { name: 'LineToolFixedRangeVolumeProfile' },
            null,
          ].filter(Boolean),
          trackLabel: null,
        },
      ]
      var _ = o(14873),
        E = o(9745),
        w = o(88275),
        x = o(61345),
        F = o(45601),
        k = o(30261),
        L = o(61380)
      class S extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._scroll = null),
            (this._handleScrollTop = () => {
              this.animateTo(
                Math.max(
                  0,
                  this.currentPosition() - (this.state.heightWrap - 50),
                ),
              )
            }),
            (this._handleScrollBot = () => {
              this.animateTo(
                Math.min(
                  (this.state.heightContent || 0) -
                    (this.state.heightWrap || 0),
                  this.currentPosition() + (this.state.heightWrap - 50),
                ),
              )
            }),
            (this._handleResizeWrap = ([e]) => {
              this.setState({ heightWrap: e.contentRect.height })
            }),
            (this._handleResizeContent = ([e]) => {
              this.setState({ heightContent: e.contentRect.height })
            }),
            (this._handleScroll = () => {
              const { onScroll: e } = this.props
              e && e(this.currentPosition(), this.isAtTop(), this.isAtBot()),
                this._checkButtonsVisibility()
            }),
            (this._checkButtonsVisibility = () => {
              const { isVisibleTopButton: e, isVisibleBotButton: t } =
                  this.state,
                o = this.isAtTop(),
                n = this.isAtBot()
              o || e
                ? o && e && this.setState({ isVisibleTopButton: !1 })
                : this.setState({ isVisibleTopButton: !0 }),
                n || t
                  ? n && t && this.setState({ isVisibleBotButton: !1 })
                  : this.setState({ isVisibleBotButton: !0 })
            }),
            (this.state = {
              heightContent: 0,
              heightWrap: 0,
              isVisibleBotButton: !1,
              isVisibleTopButton: !1,
            })
        }
        componentDidMount() {
          this._checkButtonsVisibility()
        }
        componentDidUpdate(e, t) {
          ;(t.heightWrap === this.state.heightWrap &&
            t.heightContent === this.state.heightContent) ||
            this._handleScroll()
        }
        currentPosition() {
          return this._scroll ? this._scroll.scrollTop : 0
        }
        isAtTop() {
          return this.currentPosition() <= 1
        }
        isAtBot() {
          return (
            this.currentPosition() + this.state.heightWrap >=
            this.state.heightContent - 1
          )
        }
        animateTo(e, t = x.dur) {
          const o = this._scroll
          o &&
            (0, w.doAnimate)({
              onStep(e, t) {
                o.scrollTop = t
              },
              from: o.scrollTop,
              to: Math.round(e),
              easing: x.easingFunc.easeInOutCubic,
              duration: t,
            })
        }
        render() {
          const {
              children: e,
              isVisibleScrollbar: t,
              isVisibleFade: o,
              isVisibleButtons: i,
              onMouseOver: l,
              onMouseOut: a,
            } = this.props,
            {
              heightContent: r,
              heightWrap: c,
              isVisibleBotButton: u,
              isVisibleTopButton: d,
            } = this.state
          return n.createElement(
            F.Measure,
            { onResize: this._handleResizeWrap },
            (h) =>
              n.createElement(
                'div',
                { className: k.wrap, onMouseOver: l, onMouseOut: a, ref: h },
                n.createElement(
                  'div',
                  {
                    className: s()(k.scrollWrap, { [k.noScrollBar]: !t }),
                    onScroll: this._handleScroll,
                    ref: (e) => (this._scroll = e),
                  },
                  n.createElement(
                    F.Measure,
                    { onResize: this._handleResizeContent },
                    (t) =>
                      n.createElement(
                        'div',
                        { className: k.content, ref: t },
                        e,
                      ),
                  ),
                ),
                o &&
                  n.createElement('div', {
                    className: s()(k.fadeTop, { [k.isVisible]: d && r > c }),
                  }),
                o &&
                  n.createElement('div', {
                    className: s()(k.fadeBot, { [k.isVisible]: u && r > c }),
                  }),
                i &&
                  n.createElement(
                    'div',
                    {
                      className: s()(k.scrollTop, {
                        [k.isVisible]: d && r > c,
                      }),
                      onClick: this._handleScrollTop,
                    },
                    n.createElement(
                      'div',
                      { className: k.iconWrap },
                      n.createElement(E.Icon, { icon: L, className: k.icon }),
                    ),
                  ),
                i &&
                  n.createElement(
                    'div',
                    {
                      className: s()(k.scrollBot, {
                        [k.isVisible]: u && r > c,
                      }),
                      onClick: this._handleScrollBot,
                    },
                    n.createElement(
                      'div',
                      { className: k.iconWrap },
                      n.createElement(E.Icon, { icon: L, className: k.icon }),
                    ),
                  ),
              ),
          )
        }
      }
      S.defaultProps = { isVisibleScrollbar: !0 }
      var A = o(4741),
        y = o(59064),
        M = o(66427),
        I = o(16838),
        B = o(50238)
      function D(e) {
        const [t, o] = (0, B.useRovingTabindexElement)(null)
        return n.createElement(M.ToolButton, {
          ...e,
          ref: t,
          tag: I.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div',
          tabIndex: o,
        })
      }
      function N(e) {
        const {
          id: t,
          action: o,
          isActive: i,
          isHidden: l,
          isTransparent: a,
          toolName: s,
        } = e
        return n.createElement(D, {
          id: t,
          icon: p.lineToolsInfo[s].icon,
          isActive: i,
          isHidden: l,
          isTransparent: a,
          onClick: o,
          tooltip: p.lineToolsInfo[s].localizedName,
          'data-name': s,
        })
      }
      var R = o(90186)
      const W = (e) => {
        const [t, o] = (0, n.useState)(e.value())
        return (
          (0, n.useEffect)(() => {
            const t = (e) => o(e)
            return e.subscribe(t), () => e.unsubscribe(t)
          }, [e]),
          [t, (t) => e.setValue(t)]
        )
      }
      var O,
        P = o(97145)
      !(function (e) {
        ;(e.Icons = 'icons'), (e.Emojis = 'emojis'), (e.Stickers = 'stickers')
      })(O || (O = {}))
      const V = c.getValue('ToolButtonIcons.LastCategory', O.Emojis),
        H = new P.WatchedValue(V)
      function j() {
        const [e, t] = W(H)
        return [
          e,
          (0, n.useCallback)(
            (e) => {
              t(e),
                (function (e) {
                  c.setValue('ToolButtonIcons.LastCategory', e)
                })(e)
            },
            [t],
          ),
        ]
      }
      var z = o(99616),
        U = o(62270)
      function Z(e) {
        return n.createElement('div', { className: U.wrapper }, e.text)
      }
      var G = o(87872),
        K = o(51609),
        J = o(22976),
        Y = o(70616),
        q = o(18042),
        $ = o(44986),
        Q = o(83778),
        X = o(48748)
      const ee = [
          '0xF087',
          '0xF088',
          '0xF164',
          '0xF165',
          '0xF0A4',
          '0xF0A5',
          '0xF007',
          '0xF0A6',
          '0xF0A7',
          '0xF118',
          '0xF11A',
          '0xF119',
          '0xF183',
        ],
        te = [
          '0xF153',
          '0xF154',
          '0xF155',
          '0xF156',
          '0xF157',
          '0xF158',
          '0xF159',
          '0xF195',
          '0xF15A',
        ],
        oe = [
          '0xF060',
          '0xF061',
          '0xF062',
          '0xF063',
          '0xF053',
          '0xF054',
          '0xF077',
          '0xF078',
          '0xF07D',
          '0xF07E',
          '0xF0A9',
          '0xF0AA',
          '0xF0AB',
          '0xF0D9',
          '0xF0DA',
          '0xF0D7',
          '0xF0D8',
          '0xF102',
          '0xF103',
          '0xF104',
          '0xF105',
          '0xF106',
          '0xF107',
          '0xF137',
          '0xF139',
          '0xF13A',
          '0xF112',
          '0xF064',
          '0xF148',
          '0xF149',
          '0xF177',
          '0xF178',
          '0xF175',
          '0xF176',
          '0xF01A',
          '0xF01B',
          '0xF065',
          '0xF066',
        ],
        ne = [
          '0xF11D',
          '0xF11E',
          '0xF024',
          '0xF004',
          '0xF005',
          '0xF006',
          '0xF046',
          '0xF00C',
          '0xF00D',
          '0xF011',
          '0xF012',
          '0xF021',
          '0xF01E',
          '0xF192',
          '0xF041',
          '0xF14A',
          '0xF055',
          '0xF056',
          '0xF057',
          '0xF059',
          '0xF058',
          '0xF05A',
          '0xF05B',
          '0xF05C',
          '0xF05D',
          '0xF05E',
          '0xF067',
          '0xF068',
          '0xF069',
          '0xF06A',
          '0xF071',
          '0xF06E',
          '0xF070',
          '0xF075',
          '0xF08A',
          '0xF0A3',
          '0xF0E5',
          '0xF110',
          '0xF111',
          '0xF123',
          '0xF124',
          '0xF10C',
          '0xF128',
          '0xF129',
          '0xF12A',
          '0xF140',
          '0xF113',
          '0xF17C',
          '0xF179',
        ],
        ie = ['0xF06C', '0xF185', '0xF186', '0xF188', '0xF0E7'],
        le = [
          '0xF000',
          '0xF002',
          '0xF00E',
          '0xF015',
          '0xF017',
          '0xF030',
          '0xF013',
          '0xF043',
          '0xF06B',
          '0xF072',
          '0xF076',
          '0xF080',
          '0xF084',
          '0xF040',
          '0xF0A1',
          '0xF0A2',
          '0xF0D6',
          '0xF0E3',
          '0xF0EB',
          '0xF0F3',
          '0xF135',
          '0xF13D',
          '0xF2FE',
        ],
        ae = [...ee, ...te, ...oe, ...ne, ...ie, ...le].map((e) => +e),
        se = new Set(ae)
      const re = [
          {
            title: f.t(null, { context: 'emoji_group' }, o(15426)),
            emojis: [],
            content: n.createElement(z.IconItem, { icon: $ }),
          },
          {
            title: f.t(null, { context: 'emoji_group' }, o(33628)),
            emojis: ee,
            content: n.createElement(z.IconItem, { icon: Q }),
          },
          {
            title: f.t(null, { context: 'emoji_group' }, o(77011)),
            emojis: ne,
            content: n.createElement(z.IconItem, { icon: Y }),
          },
          {
            title: f.t(null, { context: 'emoji_group' }, o(11739)),
            emojis: ie,
            content: n.createElement(z.IconItem, { icon: X }),
          },
          {
            title: f.t(null, { context: 'emoji_group' }, o(14281)),
            emojis: te,
            content: n.createElement(z.IconItem, { icon: J }),
          },
          {
            title: f.t(null, { context: 'emoji_group' }, o(72302)),
            emojis: le,
            content: n.createElement(z.IconItem, { icon: q }),
          },
          {
            title: f.t(null, { context: 'emoji_group' }, o(57792)),
            emojis: oe,
            content: n.createElement(z.IconItem, { icon: K }),
          },
        ],
        ce = {
          [O.Icons]: G.drawingToolsIcons.heart,
          [O.Emojis]: G.drawingToolsIcons.smile,
          [O.Stickers]: G.drawingToolsIcons.sticker,
        },
        ue = [
          {
            title: O.Emojis,
            content: n.createElement(Z, { text: f.t(null, void 0, o(19570)) }),
          },
          {
            title: O.Stickers,
            content: n.createElement(Z, { text: f.t(null, void 0, o(84121)) }),
          },
          {
            title: O.Icons,
            content: n.createElement(Z, { text: f.t(null, void 0, o(92464)) }),
          },
        ]
      var de = o(3343),
        he = o(20520),
        me = o(27317),
        ve = o(76460),
        be = o(41590),
        pe = o(40173),
        ge = o(81261),
        fe = o(14665)
      const Te = o(22878),
        Ce = (0, n.forwardRef)((e, t) => {
          const {
              buttonActiveClass: o,
              buttonClass: i,
              buttonIcon: l,
              buttonTitle: s,
              buttonHotKey: c,
              dropdownTooltip: u,
              children: d,
              isActive: h,
              isGrayed: m,
              onClickWhenGrayed: v,
              checkable: b,
              isSmallTablet: p,
              theme: g = Te,
              onClickButton: f,
              onArrowClick: T,
              openDropdownByClick: C,
              onMenuFocus: _ = ge.handleAccessibleMenuFocus,
              onMenuKeyDown: w = ge.handleAccessibleMenuKeyDown,
              ...x
            } = e,
            F = (0, pe.mergeThemes)(me.DEFAULT_MENU_THEME, {
              menuBox: g.menuBox,
            }),
            k = I.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div',
            [L, S] = (0, n.useState)(!1),
            [A, y] = (0, n.useState)(!1),
            D = (0, n.useRef)(null),
            N = (0, n.useRef)(null),
            R = (0, n.useRef)(null),
            W = (0, n.useRef)(0),
            O = (0, n.useRef)(0),
            [P, V] = (0, B.useRovingTabindexElement)(null),
            [H, j] = (0, B.useRovingTabindexElement)(null)
          return (
            (0, n.useImperativeHandle)(t, () => ({ open: () => S(!0) }), []),
            n.createElement(
              'div',
              {
                ...x,
                className: a(g.dropdown, {
                  [g.isGrayed]: m,
                  [g.isActive]: h,
                  [g.isOpened]: L,
                }),
                onClick: m ? v : void 0,
                onKeyDown: function (e) {
                  var t
                  if (
                    e.defaultPrevented ||
                    !(e.target instanceof Node) ||
                    !I.PLATFORM_ACCESSIBILITY_ENABLED
                  )
                    return
                  const o = (0, de.hashFromEvent)(e)
                  if (e.currentTarget.contains(e.target) || 27 !== o) return
                  e.preventDefault(),
                    z(!1),
                    A &&
                      (null === (t = null == H ? void 0 : H.current) ||
                        void 0 === t ||
                        t.focus())
                },
                ref: D,
              },
              n.createElement(
                'div',
                { ref: N, className: g.control },
                n.createElement(
                  'div',
                  {
                    ...(function () {
                      if (!m)
                        return r.mobiletouch
                          ? b
                            ? { onTouchStart: G, onTouchEnd: J, onTouchMove: K }
                            : { onClick: Z }
                          : { onMouseDown: G, onMouseUp: Y }
                      return {}
                    })(),
                    className: a(
                      g.buttonWrap,
                      I.PLATFORM_ACCESSIBILITY_ENABLED && g.accessible,
                    ),
                  },
                  n.createElement(M.ToolButton, {
                    activeClass: o,
                    className: a(i, g.button),
                    icon: l,
                    isActive: h,
                    isGrayed: m,
                    isTransparent: !b,
                    ref: P,
                    tag: k,
                    tabIndex: V,
                    onClick: function (e) {
                      if (!(0, ve.isKeyboardClick)(e)) return
                      C ? z(!0, !0) : null == f || f()
                    },
                    tooltip: s,
                    buttonHotKey: c,
                    'data-tooltip-delay': 1500,
                    tooltipPosition: 'vertical',
                  }),
                ),
                !m &&
                  !r.mobiletouch &&
                  n.createElement(
                    k,
                    {
                      className: a(
                        g.arrow,
                        u && 'apply-common-tooltip common-tooltip-vertical',
                        I.PLATFORM_ACCESSIBILITY_ENABLED && g.accessible,
                      ),
                      onClick: function (e) {
                        null == T || T(), z(void 0, (0, ve.isKeyboardClick)(e))
                      },
                      onKeyDown: function (e) {
                        if (
                          e.defaultPrevented ||
                          !(e.target instanceof Node) ||
                          !I.PLATFORM_ACCESSIBILITY_ENABLED
                        )
                          return
                        const t = (0, de.hashFromEvent)(e)
                        if (e.currentTarget.contains(e.target))
                          switch (t) {
                            case 39:
                              if (L) return
                              e.preventDefault(), z(!0, !0)
                              break
                            case 27:
                              if (!L) return
                              e.preventDefault(), z(!1)
                          }
                      },
                      type: I.PLATFORM_ACCESSIBILITY_ENABLED
                        ? 'button'
                        : void 0,
                      'data-role': I.PLATFORM_ACCESSIBILITY_ENABLED
                        ? void 0
                        : 'menu-handle',
                      ref: H,
                      tabIndex: j,
                      'aria-pressed': I.PLATFORM_ACCESSIBILITY_ENABLED
                        ? h
                        : void 0,
                      'aria-label': I.PLATFORM_ACCESSIBILITY_ENABLED
                        ? u
                        : void 0,
                      'data-tooltip': u,
                    },
                    n.createElement(E.Icon, {
                      className: g.arrowIcon,
                      icon: fe,
                    }),
                  ),
              ),
              !m &&
                (p
                  ? L &&
                    n.createElement(
                      be.Drawer,
                      { className: g.drawer, onClose: U, position: 'Bottom' },
                      d,
                    )
                  : n.createElement(
                      he.PopupMenu,
                      {
                        theme: F,
                        doNotCloseOn: function () {
                          if (null === D.current) return []
                          return [D.current]
                        },
                        isOpened: L,
                        onClose: U,
                        position: function () {
                          if (!N || !N.current) return { x: 0, y: 0 }
                          const e = N.current.getBoundingClientRect()
                          return { x: e.left + e.width + 1, y: e.top - 6 }
                        },
                        onKeyDown: w,
                        onFocus: (e) => _(e, H),
                        controller: R,
                        onOpen: function () {
                          var e
                          if (!I.PLATFORM_ACCESSIBILITY_ENABLED) return
                          null === (e = R.current) || void 0 === e || e.focus()
                        },
                        tabIndex: I.PLATFORM_ACCESSIBILITY_ENABLED
                          ? -1
                          : void 0,
                      },
                      d,
                    )),
            )
          )
          function z(e, t = !1) {
            const o = void 0 !== e ? e : !L
            S(o), y(!!o && t)
          }
          function U() {
            z(!1)
          }
          function Z() {
            f && f(), z()
          }
          function G() {
            if (r.mobiletouch && !b) !O.current && f && f()
            else {
              if (W.current)
                return clearTimeout(W.current), (W.current = 0), void z(!0)
              W.current = setTimeout(() => {
                ;(W.current = 0), !O.current && f && f()
              }, 175)
            }
            O.current = setTimeout(() => {
              ;(O.current = 0), z(!0)
            }, 300)
          }
          function K() {
            clearTimeout(O.current),
              (O.current = 0),
              clearTimeout(W.current),
              (W.current = 0)
          }
          function J(e) {
            e.cancelable && e.preventDefault(), Y()
          }
          function Y() {
            O.current &&
              (clearTimeout(O.current),
              (O.current = 0),
              L
                ? z(!1)
                : b || L || r.mobiletouch || (!h && !C)
                  ? !W.current && f && f()
                  : z(!0))
          }
        })
      var _e = o(38297),
        Ee = o(85034),
        we = o(68456),
        xe = o(21097)
      class Fe extends we.CommonJsonStoreService {
        constructor(e, t, o, n, i = 18) {
          super(xe.TVXWindowEvents, c, e, t, []),
            (this._onChangeDrawingState = () => {
              const e = d[this._drawingType].value()
              this._promote(e)
            }),
            (this._sanitizer = o),
            (this._drawingType = n),
            (this._maxRecentCount = i),
            d[this._drawingType].subscribe(this._onChangeDrawingState)
        }
        destroy() {
          d[this._drawingType].unsubscribe(this._onChangeDrawingState),
            super.destroy()
        }
        _deserialize(e) {
          const t = this._sanitizer(e)
          return this._removeUnavailableRecents(e, t)
        }
        _removeUnavailableRecents(e, t) {
          return (
            Array.isArray(e)
              ? e.length > this._maxRecentCount &&
                (t = e.slice(0, this._maxRecentCount))
              : (t = []),
            t
          )
        }
        _promote(e) {
          let t = [...this.get()]
          const o = t.indexOf(e)
          ;-1 !== o && t.splice(o, 1),
            (t = [e, ...t.slice(0, this._maxRecentCount - 1)]),
            this.set(t)
        }
      }
      const ke = new Fe(
        'RECENT_ICONS_CHANGED',
        'linetoolicon.recenticons',
        function (e) {
          return e.filter((e) => se.has(e))
        },
        'iconTool',
      )
      var Le = o(55619)
      function Se(e) {
        const { fallback: t, ...o } = e
        return n.createElement(
          n.Suspense,
          { fallback: null != t ? t : null },
          n.createElement(Ae, { ...o }),
        )
      }
      const Ae = n.lazy(async () => {
        const { getSvgContentForCharCode: e } = await o
          .e(7987)
          .then(o.bind(o, 1383))
        return {
          default: (t) => {
            var o
            const { charCode: i } = t,
              l = null !== (o = e(i)) && void 0 !== o ? o : void 0
            return n.createElement(E.Icon, {
              icon: l,
              className: Le.iconContainer,
            })
          },
        }
      })
      var ye = o(20274)
      var Me = o(173)
      const Ie = new Fe(
          'RECENT_EMOJIS_CHANGED',
          'linetoolemoji.recents',
          Me.removeUnavailableEmoji,
          'emojiTool',
        ),
        Be = [
          'elon',
          'doge',
          'dislike',
          'yolo',
          'whale',
          'wagmi',
          'tendies',
          'short',
          'rugged',
          'shill',
          'rekt',
          'sell',
          'paper-hands',
          'og',
          'fud',
          'gm',
          'ngmi',
          'moon',
          'love',
          'lambo',
          'ethereum',
          'look',
          'diamond-hand',
          'leap',
          'like',
          'few',
          'bitcoin',
          'bag-holder',
          'buy-the-dip',
          'buy',
          'hodl',
        ]
      var De = o(37603),
        Ne = o(90624)
      const Re = new Set(Be)
      const We = [
          {
            title: f.t(null, { context: 'emoji_group' }, o(15426)),
            emojis: [],
            content: n.createElement(z.IconItem, { icon: De }),
          },
          {
            title: 'TradingView',
            emojis: Be,
            content: n.createElement(z.IconItem, { icon: Ne }),
          },
        ],
        Oe = new Fe(
          'RECENT_STICKERS_CHANGED',
          'linetoolsticker.recents',
          function (e) {
            return e.filter((e) => Re.has(e))
          },
          'stickerTool',
          3,
        )
      var Pe = o(78036),
        Ve = o(47291),
        He = o(78227)
      var je = o(26601),
        ze = o(23091)
      const Ue = {
        [O.Icons]: {
          service: ke,
          toolName: 'LineToolIcon',
          ItemComponent: function (e) {
            const { emoji: t, className: o } = e
            return n.createElement(
              'div',
              { className: s()(ye.item, o) },
              n.createElement(Se, { charCode: Number(t) }),
            )
          },
          icons: re,
          onEmojiSelect: (e) => {
            d.iconTool.setValue(Number(e)), d.tool.setValue('LineToolIcon')
          },
        },
        [O.Emojis]: {
          service: Ie,
          toolName: 'LineToolEmoji',
          icons: Me.emojiGroups,
          onEmojiSelect: (e) => {
            d.emojiTool.setValue(e), d.tool.setValue('LineToolEmoji')
          },
        },
        [O.Stickers]: {
          service: Oe,
          toolName: 'LineToolSticker',
          ItemComponent: function (e) {
            const { emoji: t } = e,
              { size: i } = (0, Pe.useEnsuredContext)(
                Ve.EmojiListContentContext,
              ),
              [l, a] = (0, n.useState)()
            return (
              (0, n.useEffect)(() => {
                o.e(5598)
                  .then(o.bind(o, 31235))
                  .then(({ getSvgContentForSticker: e }) => {
                    const o = e(t)
                    o && a(o)
                  })
              }, []),
              n.createElement(E.Icon, {
                className: He.sticker,
                icon: null !== l ? l : void 0,
                style: { width: `${i}px`, height: `${i}px` },
              })
            )
          },
          RowComponent: function (e) {
            return n.createElement(je.EmojisRow, {
              ...e,
              className: ze.stickerRow,
            })
          },
          icons: We,
          onEmojiSelect: (e) => {
            d.stickerTool.setValue(e), d.tool.setValue('LineToolSticker')
          },
          getEmojiSize: (e) => (e ? 78 : 112),
        },
      }
      var Ze = o(12451)
      function Ge(e) {
        const {
            isSmallTablet: t,
            maxHeight: o,
            activeTab: i,
            setActiveTab: l,
          } = e,
          s = Ue[i],
          {
            service: r,
            ItemComponent: c,
            RowComponent: u,
            onEmojiSelect: d,
            getEmojiSize: h,
          } = s,
          m = h && h(t),
          [v, b] = (0, n.useState)(Ke(s))
        return (
          (0, n.useLayoutEffect)(() => {
            const e = {},
              t = () => {
                const e = Ke(s)
                b(e)
              }
            return (
              t(),
              r.getOnChange().subscribe(e, t),
              () => {
                r.getOnChange().unsubscribeAll(e)
              }
            )
          }, [s]),
          n.createElement(
            'div',
            { style: { maxHeight: o } },
            n.createElement(_e.EmojiList, {
              className: a(Ze.desktopSize, t && Ze.smallSize),
              emojis: v,
              onSelect: function (e) {
                d(e), (0, y.globalCloseMenu)()
              },
              ItemComponent: c,
              RowComponent: u,
              height: o,
              category: i,
              emojiSize: m,
            }),
            n.createElement(Ee.GroupTabs, {
              className: Ze.tabs,
              tabClassName: Ze.categories,
              tabs: ue,
              activeTab: i,
              onTabClick: function (e) {
                l(e)
              },
            }),
          )
        )
      }
      function Ke(e) {
        const { icons: t, service: o } = e,
          n = [...t],
          i = o.get()
        return (
          (n[0].emojis = i.map((e) => String(e))),
          n.filter((e) => e.emojis.length)
        )
      }
      var Je = o(10888),
        Ye = o(37531)
      const qe = {
          icon: f.t(null, void 0, o(26579)),
          dropdownTooltip: f.t(null, void 0, o(92464)),
        },
        $e = (0, pe.mergeThemes)(Te, {
          menuBox: Ye.menuBox,
          drawer: Ye.drawer,
        }),
        Qe = parseInt(Je['default-drawer-min-top-distance'])
      function Xe(e) {
        const { isGrayed: t, isSmallTablet: o } = e,
          i = (0, R.filterDataProps)(e),
          [l, a] = j(),
          [s] = W(d.tool),
          { toolName: r } = Ue[l]
        return n.createElement(
          Ce,
          {
            theme: $e,
            buttonIcon: ce[l],
            buttonTitle: qe.icon,
            dropdownTooltip: qe.dropdownTooltip,
            isActive: s === r,
            isGrayed: t,
            isSmallTablet: o,
            onClickButton: function () {
              c()
            },
            onClickWhenGrayed: () =>
              (0, h.emit)('onGrayedObjectClicked', {
                type: 'drawing',
                name: p.lineToolsInfo[r].localizedName,
              }),
            onArrowClick: function () {
              c('menu')
            },
            openDropdownByClick: !0,
            onMenuFocus: et,
            onMenuKeyDown: function (e) {
              if (!I.PLATFORM_ACCESSIBILITY_ENABLED) return
              if (e.defaultPrevented) return
              const t = (0, T.hashFromEvent)(e)
              ;(9 !== t && t !== T.Modifiers.Shift + 9) ||
                (0, I.updateTabIndexes)()
            },
            ...i,
          },
          n.createElement(Ge, {
            isSmallTablet: o,
            maxHeight: o ? Math.min(679, window.innerHeight - Qe) : 679,
            activeTab: l,
            setActiveTab: a,
          }),
        )
        function c(e) {
          0
        }
      }
      function et(e) {
        if (!e.target || !I.PLATFORM_ACCESSIBILITY_ENABLED) return
        const t = e.currentTarget
        e.target === t &&
          ((0, I.updateTabIndexes)(),
          setTimeout(() => {
            if (document.activeElement !== t) return
            const [e] = (0, I.queryTabbableElements)(t).sort(
              I.navigationOrderComparator,
            )
            e && e.focus()
          }))
      }
      var tt = o(46100)
      class ot extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              this.props.saveDefaultOnChange &&
                (0, tt.saveDefaultProperties)(!0)
              const e = !this.props.property.value()
              this.props.property.setValue(e),
                this.props.saveDefaultOnChange &&
                  (0, tt.saveDefaultProperties)(!1),
                this.props.onClick && this.props.onClick(e)
            }),
            (this.state = { isActive: this.props.property.value() })
        }
        componentDidMount() {
          this.props.property.subscribe(this, this._onChange)
        }
        componentWillUnmount() {
          this.props.property.unsubscribe(this, this._onChange)
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = p.lineToolsInfo[e]
          return n.createElement(D, {
            icon: t && o.iconActive ? o.iconActive : o.icon,
            isActive: t,
            onClick: this._handleClick,
            tooltip: o.localizedName,
            buttonHotKey: o.hotKey,
            'data-name': e,
          })
        }
        _onChange(e) {
          this.setState({ isActive: e.value() })
        }
      }
      class nt extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              var e, t
              d.tool.setValue(this.props.toolName),
                null === (t = (e = this.props).onClick) ||
                  void 0 === t ||
                  t.call(e)
            }),
            (this._onChange = () => {
              this.setState({
                isActive: d.tool.value() === this.props.toolName,
              })
            }),
            (this.state = { isActive: d.tool.value() === this.props.toolName })
        }
        componentDidMount() {
          d.tool.subscribe(this._onChange)
        }
        componentWillUnmount() {
          d.tool.unsubscribe(this._onChange)
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = p.lineToolsInfo[e]
          return n.createElement(D, {
            icon: p.lineToolsInfo[e].icon,
            isActive: t,
            isTransparent: !0,
            onClick: this._handleClick,
            tooltip: o.localizedName,
            buttonHotKey: o.hotKey,
            'data-name': e,
          })
        }
      }
      class it extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._boundUndoModel = null),
            (this._handleClick = () => {
              const e = this._activeChartWidget()
              e.hasModel() && e.model().zoomFromViewport()
            }),
            (this._syncUnzoomButton = () => {
              const e = this._activeChartWidget()
              let t = !1
              if (e.hasModel()) {
                const o = e.model()
                this._boundUndoModel !== o &&
                  (this._boundUndoModel &&
                    this._boundUndoModel
                      .zoomStack()
                      .onChange()
                      .unsubscribe(null, this._syncUnzoomButton),
                  o
                    .zoomStack()
                    .onChange()
                    .subscribe(null, this._syncUnzoomButton),
                  (this._boundUndoModel = o)),
                  (t = !o.zoomStack().isEmpty())
              } else e.withModel(null, this._syncUnzoomButton)
              this.setState({ isVisible: t })
            }),
            (this.state = { isVisible: !1 })
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._syncUnzoomButton,
            { callWithLast: !0 },
          )
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
            this._syncUnzoomButton,
          )
        }
        render() {
          return this.state.isVisible
            ? n.createElement(N, {
                action: this._handleClick,
                isTransparent: !0,
                toolName: 'zoom-out',
              })
            : n.createElement('div', null)
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value()
        }
      }
      var lt = o(71810),
        at = o(12165),
        st = o(81351),
        rt = o(81332),
        ct = o(92249)
      class ut extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._onChangeDrawingState = () => {
              const e = this._getActiveToolIndex()
              this.setState({
                current: -1 !== e ? e : this.state.current,
                isActive: -1 !== e,
              })
            }),
            (this._handleClickButton = () => {
              if ((this._trackClick(), v.CheckMobile.any())) return
              const e = this._getCurrentToolName()
              this._selectTool(e)
            }),
            (this._handleClickItem = (e) => {
              this._selectTool(e)
            }),
            (this._handleGrayedClick = (e) => {
              ;(0, h.emit)('onGrayedObjectClicked', {
                type: 'drawing',
                name: p.lineToolsInfo[e].localizedName,
              })
            }),
            (this._handleClickFavorite = (e) => {
              this.state.favState && this.state.favState[e]
                ? lt.LinetoolsFavoritesStore.removeFavorite(e)
                : lt.LinetoolsFavoritesStore.addFavorite(e)
            }),
            (this._onAddFavorite = (e) => {
              this.setState({ favState: { ...this.state.favState, [e]: !0 } })
            }),
            (this._onRemoveFavorite = (e) => {
              this.setState({ favState: { ...this.state.favState, [e]: !1 } })
            }),
            (this._onSyncFavorites = () => {
              this.setState({ favState: this._composeFavState() })
            }),
            (this._handleArrowClick = () => {
              this._trackClick('menu')
            }),
            (this._trackClick = (e) => {
              const { trackLabel: t } = this.props
            })
          const t = this._getActiveToolIndex()
          this.state = {
            current: -1 === t ? this._firstNonGrayedTool() : t,
            favState: this._composeFavState(),
            isActive: -1 !== t,
          }
        }
        componentDidMount() {
          d.tool.subscribe(this._onChangeDrawingState),
            lt.LinetoolsFavoritesStore.favoriteAdded.subscribe(
              null,
              this._onAddFavorite,
            ),
            lt.LinetoolsFavoritesStore.favoriteRemoved.subscribe(
              null,
              this._onRemoveFavorite,
            ),
            lt.LinetoolsFavoritesStore.favoritesSynced.subscribe(
              null,
              this._onSyncFavorites,
            )
        }
        componentWillUnmount() {
          d.tool.unsubscribe(this._onChangeDrawingState),
            lt.LinetoolsFavoritesStore.favoriteAdded.unsubscribe(
              null,
              this._onAddFavorite,
            ),
            lt.LinetoolsFavoritesStore.favoriteRemoved.unsubscribe(
              null,
              this._onRemoveFavorite,
            ),
            lt.LinetoolsFavoritesStore.favoritesSynced.unsubscribe(
              null,
              this._onSyncFavorites,
            )
        }
        componentDidUpdate(e, t) {
          e.lineTools !== this.props.lineTools &&
            this.setState({ favState: this._composeFavState() })
        }
        render() {
          const {
              favoriting: e,
              grayedTools: t,
              lineTools: o,
              dropdownTooltip: i,
              isSmallTablet: l,
            } = this.props,
            { current: a, favState: s, isActive: r } = this.state,
            c = this._getCurrentToolName(),
            u = p.lineToolsInfo[c],
            d = this._showShortcuts(),
            h = (0, R.filterDataProps)(this.props)
          return n.createElement(
            'span',
            null,
            n.createElement(
              Ce,
              {
                buttonIcon: u.icon,
                buttonTitle: u.localizedName,
                buttonHotKey: u.hotKey,
                dropdownTooltip: i,
                isActive: r,
                onClickButton: this._handleClickButton,
                onArrowClick: this._handleArrowClick,
                isSmallTablet: l,
                ...h,
              },
              o.map((o, i) => {
                const c = o.name,
                  u = p.lineToolsInfo[c],
                  h = t[c]
                return n.createElement(st.AccessibleMenuItem, {
                  key: c,
                  'data-name': o.name,
                  theme: l ? rt.multilineLabelWithIconAndToolboxTheme : void 0,
                  dontClosePopup: h,
                  forceShowShortcuts: d,
                  shortcut:
                    !l && o.hotkeyHash
                      ? (0, T.humanReadableHash)(o.hotkeyHash)
                      : void 0,
                  icon: u.icon,
                  isActive: r && a === i,
                  appearAsDisabled: h,
                  label: u.localizedName,
                  showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
                  onClick: h ? this._handleGrayedClick : this._handleClickItem,
                  onClickArg: c,
                  showToolboxOnHover: !s[c],
                  toolbox:
                    e && !h
                      ? n.createElement(at.MenuFavoriteButton, {
                          isActive: r && a === i,
                          isFilled: s[c],
                          onClick: () => this._handleClickFavorite(c),
                        })
                      : void 0,
                })
              }),
            ),
          )
        }
        _getCurrentToolName() {
          const { current: e } = this.state,
            { lineTools: t } = this.props
          return t[e || 0].name
        }
        _firstNonGrayedTool() {
          const { grayedTools: e, lineTools: t } = this.props
          return t.findIndex((t) => !e[t.name])
        }
        _getActiveToolIndex() {
          return this.props.lineTools.findIndex(
            (e) => e.name === d.tool.value(),
          )
        }
        _showShortcuts() {
          return this.props.lineTools.some((e) => 'shortcut' in e)
        }
        async _selectTool(e) {
          d.tool.setValue(e)
        }
        _composeFavState() {
          const e = {}
          return (
            this.props.lineTools.forEach((t) => {
              e[t.name] = lt.LinetoolsFavoritesStore.isFavorite(t.name)
            }),
            e
          )
        }
      }
      var dt = o(51768),
        ht = o(16396),
        mt = o(46173)
      const vt = (0, pe.mergeThemes)(ht.DEFAULT_POPUP_MENU_ITEM_THEME, mt)
      var bt = o(28853)
      const pt = !1
      class gt extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleRemoveToolClick = () => {
              r.mobiletouch || this._handleRemoveDrawings(), Tt()
            }),
            (this._handleRemoveDrawings = () => {
              ft('remove drawing'),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllDrawingTools()
            }),
            (this._handleRemoveStudies = () => {
              ft('remove indicator'),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllStudies()
            }),
            (this._handleRemoveAll = () => {
              ft('remove all'),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllStudiesDrawingTools()
            }),
            (this._handleActiveChartWidgetChanged = (e) => {
              this._activeChartWidget &&
                this._unsubscribeToModelChanges(this._activeChartWidget),
                e && this._subscribeToModelChanges(e),
                (this._activeChartWidget = e),
                this._handleCollectionChanged()
            }),
            (this._handleCollectionChanged = () => {
              this.setState(this._getActualState())
            }),
            (this._getActualState = () => {
              if (
                !this._activeChartWidget ||
                !this._activeChartWidget.hasModel()
              )
                return { numOfDrawings: 0, numOfIndicators: 0 }
              const e = this._activeChartWidget.model().dataSources(),
                t = e
                  .filter(ct.isLineTool)
                  .filter((e) => e.isActualSymbol() && e.isUserDeletable()),
                o = e
                  .filter(bt.isStudy)
                  .filter((e) => e.removeByRemoveAllStudies())
              return { numOfDrawings: t.length, numOfIndicators: o.length }
            }),
            (this._activeChartWidget =
              this.props.chartWidgetCollection.activeChartWidget.value()),
            (this.state = this._getActualState())
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._handleActiveChartWidgetChanged,
            { callWithLast: !0 },
          )
        }
        componentWillUnmount() {
          this._activeChartWidget &&
            this._unsubscribeToModelChanges(this._activeChartWidget),
            this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
              this._handleActiveChartWidgetChanged,
            )
        }
        render() {
          const e = this.props.isSmallTablet ? vt : void 0,
            { numOfDrawings: t, numOfIndicators: i } = this.state,
            l = f.t(
              null,
              {
                plural: '{amount} drawings',
                count: t,
                replace: { amount: t.toString() },
              },
              o(93030),
            ),
            a = f.t(
              null,
              {
                plural: '{amount} indicators',
                count: i,
                replace: { amount: i.toString() },
              },
              o(80437),
            ),
            s = f.t(null, { replace: { drawings: l } }, o(30513)),
            r = f.t(null, { replace: { indicators: a } }, o(55084)),
            c = f.t(null, { replace: { drawings: l, indicators: a } }, o(10049))
          return n.createElement(
            Ce,
            {
              buttonIcon: p.lineToolsInfo[this.props.toolName].icon,
              buttonTitle: s,
              onClickButton: this._handleRemoveToolClick,
              isSmallTablet: this.props.isSmallTablet,
              'data-name': this.props.toolName,
              onArrowClick: this._handleArrowClick,
              openDropdownByClick: pt,
            },
            n.createElement(st.AccessibleMenuItem, {
              'data-name': 'remove-drawing-tools',
              label: s,
              onClick: this._handleRemoveDrawings,
              theme: e,
            }),
            n.createElement(st.AccessibleMenuItem, {
              'data-name': 'remove-studies',
              label: r,
              onClick: this._handleRemoveStudies,
              theme: e,
            }),
            n.createElement(st.AccessibleMenuItem, {
              'data-name': 'remove-all',
              label: c,
              onClick: this._handleRemoveAll,
              theme: e,
            }),
          )
        }
        _handleArrowClick() {
          Tt('menu')
        }
        _subscribeToModelChanges(e) {
          e.withModel(this, () => {
            this._handleCollectionChanged(),
              e
                .model()
                .model()
                .dataSourceCollectionChanged()
                .subscribe(this, this._handleCollectionChanged)
          })
        }
        _unsubscribeToModelChanges(e) {
          e.hasModel() &&
            e
              .model()
              .model()
              .dataSourceCollectionChanged()
              .unsubscribe(this, this._handleCollectionChanged),
            e.modelCreated().unsubscribeAll(this)
        }
      }
      function ft(e) {
        ;(0, dt.trackEvent)('GUI', 'Chart Left Toolbar', e)
      }
      function Tt(e) {
        0
      }
      var Ct = o(90995),
        _t = o(14881)
      const Et = n.createContext({ hideMode: 'drawings', isActive: !1 })
      function wt(e) {
        const {
            hideMode: t,
            option: { label: o, dataName: i, getBoxedValue: l },
            isSmallTablet: a,
            onClick: s,
          } = e,
          { hideMode: r, isActive: c } = (0, n.useContext)(Et),
          u = null == l ? void 0 : l()
        return 'all' === t || u
          ? n.createElement(st.AccessibleMenuItem, {
              label: o,
              isActive: r === t && c,
              onClick: function () {
                s(t, (0, Ct.toggleHideMode)(t))
              },
              'data-name': i,
              theme: a ? vt : void 0,
            })
          : n.createElement(n.Fragment, null)
      }
      const xt = {
        drawings: {
          active: G.drawingToolsIcons.hideAllDrawingToolsActive,
          inactive: G.drawingToolsIcons.hideAllDrawingTools,
        },
        indicators: {
          active: G.drawingToolsIcons.hideAllIndicatorsActive,
          inactive: G.drawingToolsIcons.hideAllIndicators,
        },
        positions: {
          active: G.drawingToolsIcons.hideAllPositionsToolsActive,
          inactive: G.drawingToolsIcons.hideAllPositionsTools,
        },
        all: {
          active: G.drawingToolsIcons.hideAllDrawingsActive,
          inactive: G.drawingToolsIcons.hideAllDrawings,
        },
      }
      function Ft(e) {
        const { isSmallTablet: t } = e,
          [{ isActive: o, hideMode: i }, a] = (0, n.useState)(() => ({
            isActive: !1,
            hideMode: (0, Ct.getSavedHideMode)(),
          }))
        ;(0, n.useEffect)(
          () => (
            _t.hideStateChange.subscribe(null, a),
            () => {
              _t.hideStateChange.unsubscribe(null, a)
            }
          ),
          [],
        )
        const s = p.lineToolsInfo.hideAllDrawings,
          {
            trackLabel: r,
            tooltip: c,
            dataName: u,
          } = (0, l.ensureDefined)((0, Ct.getHideOptions)().get(i)),
          d = xt[i][o ? 'active' : 'inactive'],
          h = o ? c.active : c.inactive
        return n.createElement(
          Ce,
          {
            buttonIcon: d,
            buttonTitle: h,
            buttonHotKey: s.hotKey,
            onClickButton: function () {
              ;(0, Ct.toggleHideMode)(i), kt(r, !o), Lt(o ? 'on' : 'off')
            },
            isSmallTablet: t,
            isActive: o,
            checkable: !0,
            'data-name': 'hide-all',
            'data-type': u,
            onArrowClick: function () {
              Lt('menu')
            },
          },
          n.createElement(
            Et.Provider,
            { value: { isActive: o, hideMode: i } },
            Array.from((0, Ct.getHideOptions)()).map(([e, o]) =>
              n.createElement(wt, {
                key: e,
                hideMode: e,
                option: o,
                isSmallTablet: t,
                onClick: m,
              }),
            ),
          ),
        )
        function m(e, t) {
          kt(
            (0, l.ensureDefined)((0, Ct.getHideOptions)().get(e)).trackLabel,
            t,
          )
        }
      }
      function kt(e, t) {
        ;(0, dt.trackEvent)(
          'GUI',
          'Chart Left Toolbar',
          `${e} ${t ? 'on' : 'off'}`,
        )
      }
      function Lt(e) {
        0
      }
      var St = o(241),
        At = o(51445)
      const yt = f.t(null, void 0, o(49616))
      class Mt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._instance = null),
            (this._promise = null),
            (this._bindedForceUpdate = () => this.forceUpdate()),
            (this._handleClick = () => {
              null !== this._instance &&
                (this._instance.isVisible()
                  ? (this._instance.hideAndSaveSettingsValue(),
                    this._trackClick(!1))
                  : (this._instance.showAndSaveSettingsValue(),
                    this._trackClick(!0)))
            })
        }
        componentDidMount() {
          const e = (this._promise = (0, l.ensureNotNull)(
            (0, St.getFavoriteDrawingToolbarPromise)(),
          ))
          e.then((t) => {
            this._promise === e &&
              ((this._instance = t),
              this._instance.canBeShown().subscribe(this._bindedForceUpdate),
              this._instance.visibility().subscribe(this._bindedForceUpdate),
              this.forceUpdate())
          })
        }
        componentWillUnmount() {
          ;(this._promise = null),
            null !== this._instance &&
              (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate),
              this._instance.visibility().unsubscribe(this._bindedForceUpdate),
              (this._instance = null))
        }
        render() {
          return null !== this._instance && this._instance.canBeShown().value()
            ? n.createElement(D, {
                id: this.props.id,
                icon: At,
                isActive: this._instance.isVisible(),
                onClick: this._handleClick,
                tooltip: yt,
              })
            : null
        }
        _trackClick(e) {
          0
        }
      }
      var It = o(77975),
        Bt = o(36147),
        Dt = o(18540),
        Nt = o(85470)
      const Rt = {
        [Bt.MagnetMode.WeakMagnet]: {
          id: Bt.MagnetMode.WeakMagnet,
          name: 'weakMagnet',
          icon: G.drawingToolsIcons.magnet,
          localizedName: f.t(null, void 0, o(45265)),
        },
        [Bt.MagnetMode.StrongMagnet]: {
          id: Bt.MagnetMode.StrongMagnet,
          name: 'strongMagnet',
          icon: G.drawingToolsIcons.strongMagnet,
          localizedName: f.t(null, void 0, o(85422)),
        },
      }
      function Wt(e) {
        const { isSmallTablet: t } = e,
          o = (0, It.useWatchedValueReadonly)({
            watchedValue: (0, Dt.magnetEnabled)(),
          }),
          i = (0, It.useWatchedValueReadonly)({
            watchedValue: (0, Dt.magnetMode)(),
          })
        return n.createElement(
          'div',
          { className: Nt.toolButtonMagnet },
          n.createElement(
            Ce,
            {
              'data-name': 'magnet-button',
              buttonIcon: Rt[i].icon,
              buttonTitle: p.lineToolsInfo.magnet.localizedName,
              isActive: o,
              onClickButton: function () {
                const e = !o
                ;(0, dt.trackEvent)(
                  'GUI',
                  'Chart Left Toolbar',
                  'magnet mode ' + (e ? 'on' : 'off'),
                ),
                  !1
                ;(0, Dt.setIsMagnetEnabled)(e)
              },
              buttonHotKey: p.lineToolsInfo.magnet.hotKey,
              checkable: !0,
              isSmallTablet: t,
              onArrowClick: function () {
                0
              },
            },
            Object.values(Rt).map(
              ({ id: e, name: a, localizedName: s, icon: r }) =>
                n.createElement(st.AccessibleMenuItem, {
                  key: e,
                  className: t ? Nt.toolButtonMagnet__menuItem : void 0,
                  'data-name': a,
                  icon: r,
                  isActive: o && i === e,
                  label: s,
                  onClick: l,
                  onClickArg: e,
                }),
            ),
          ),
          !1,
        )
        function l(e) {
          void 0 !== e &&
            ((0, dt.trackEvent)(
              'GUI',
              'Magnet mode',
              e === Bt.MagnetMode.WeakMagnet ? 'Weak' : 'Strong',
            ),
            (0, Dt.setMagnetMode)(e))
        }
      }
      var Ot
      !(function (e) {
        ;(e.Screenshot = 'drawing-toolbar-screenshot'),
          (e.FavoriteDrawings = 'drawing-toolbar-favorite-drawings'),
          (e.ObjectTree = 'drawing-toolbar-object-tree')
      })(Ot || (Ot = {}))
      var Pt = o(70412),
        Vt = o(21861),
        Ht = o(9438),
        jt = o(29197),
        zt = o(54079),
        Ut = o(27334)
      const Zt = Ut,
        Gt = 'http://www.w3.org/2000/svg'
      function Kt(e) {
        const { direction: t, theme: o = Ut } = e
        return n.createElement(
          'svg',
          {
            xmlns: Gt,
            width: '9',
            height: '27',
            viewBox: '0 0 9 27',
            className: a(o.container, 'right' === t ? o.mirror : null),
            onContextMenu: Vt.preventDefault,
          },
          n.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            n.createElement('path', {
              className: o.background,
              d: 'M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z',
            }),
            n.createElement('path', {
              className: o.arrow,
              d: 'M5.5 10l-2 3.5 2 3.5',
            }),
          ),
        )
      }
      var Jt = o(22231)
      const Yt = (0, pe.mergeThemes)(Zt, Jt),
        qt = {
          hide: f.t(null, void 0, o(96411)),
          show: f.t(null, void 0, o(63354)),
        }
      class $t extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._toggleVisibility = () => {
              _.isDrawingToolbarVisible.setValue(
                !_.isDrawingToolbarVisible.value(),
              )
            })
        }
        render() {
          const { toolbarVisible: e, 'data-name': t } = this.props
          return n.createElement(
            'div',
            {
              className: a(
                Yt.toggleButton,
                'apply-common-tooltip common-tooltip-vertical',
                !e && Yt.collapsed,
              ),
              onClick: this._toggleVisibility,
              title: e ? qt.hide : qt.show,
              'data-name': t,
              'data-value': e ? 'visible' : 'collapsed',
            },
            n.createElement(Kt, {
              direction: e ? 'left' : 'right',
              theme: e ? void 0 : Yt,
            }),
          )
        }
      }
      var Qt = o(37558),
        Xt = o(24437),
        eo = o(90692)
      const to = { chartWidgetCollection: o(19036).any.isRequired }
      var oo = o(5962),
        no = o(99537)
      const io = u.enabled('right_toolbar'),
        lo = u.enabled('keep_object_tree_widget_in_right_toolbar'),
        ao = (0, v.onWidget)(),
        so = new m.Delegate(),
        ro = dt.trackEvent.bind(null, 'GUI', 'Chart Left Toolbar'),
        co = (e, t) => ro(`${e} ${t ? 'on' : 'off'}`)
      class uo extends n.PureComponent {
        constructor(e) {
          var t
          super(e),
            (this._grayedTools = {}),
            (this._handleMeasureClick = () => {
              ho('measure')
            }),
            (this._handleZoomInClick = () => {
              ho('zoom in')
            }),
            (this._handleDrawingClick = (e) => {
              co('drawing mode', e), ho('drawing mode', e ? 'on' : 'off')
            }),
            (this._handleLockClick = (e) => {
              co('lock all drawing', e), ho('lock', e ? 'on' : 'off')
            }),
            (this._handleSyncClick = (e) => {
              co('sync', e), ho('sync', e ? 'on' : 'off')
            }),
            (this._handleObjectsTreeClick = () => {
              this._activeChartWidget().showObjectsTreeDialog(),
                ho('object tree')
            }),
            (this._handleMouseOver = (e) => {
              ;(0, Pt.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !0 })
            }),
            (this._handleMouseOut = (e) => {
              ;(0, Pt.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !1 })
            }),
            (this._handleChangeVisibility = (e) => {
              this.setState({ isVisible: e })
            }),
            (this._handleEsc = () => {
              d.resetToCursor(!0)
            }),
            (this._handleWidgetbarSettled = (e) => {
              var t
              this.setState({
                isWidgetbarVisible: Boolean(
                  null === (t = window.widgetbar) || void 0 === t
                    ? void 0
                    : t.visible().value(),
                ),
                widgetbarSettled: e,
              })
            }),
            (this._handleWidgetbarVisible = (e) => {
              this.setState({ isWidgetbarVisible: e })
            }),
            d.init(),
            (this._toolsFilter = new g(this.props.drawingsAccess)),
            (this._filteredLineTools = C.map((e) => ({
              id: e.id,
              title: e.title,
              items: e.items.filter((e) =>
                this._toolsFilter.isToolEnabled(
                  p.lineToolsInfo[e.name].localizedName,
                ),
              ),
              trackLabel: e.trackLabel,
            })).filter((e) => 0 !== e.items.length)),
            this._filteredLineTools.forEach((e) =>
              e.items.forEach((e) => {
                this._grayedTools[e.name] = this._toolsFilter.isToolGrayed(
                  p.lineToolsInfo[e.name].localizedName,
                )
              }),
            ),
            (this.state = {
              isHovered: !1,
              isVisible: _.isDrawingToolbarVisible.value(),
              isWidgetbarVisible: Boolean(
                null === (t = window.widgetbar) || void 0 === t
                  ? void 0
                  : t.visible().value(),
              ),
              widgetbarSettled: void 0 !== window.widgetbar,
            }),
            (this._features = {
              favoriting: !ao && u.enabled('items_favoriting'),
              multicharts: u.enabled('support_multicharts'),
              tools: !ao || u.enabled('charting_library_base'),
            }),
            (this._registry = {
              chartWidgetCollection: this.props.chartWidgetCollection,
            }),
            this._negotiateResizer()
        }
        componentDidMount() {
          var e
          _.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility),
            y.globalCloseDelegate.subscribe(this, this._handleGlobalClose),
            (this._tool = d.tool.spawn()),
            this._tool.subscribe(this._updateHotkeys.bind(this)),
            this._initHotkeys(),
            this.props.widgetbarSettled &&
              (this.props.widgetbarSettled.subscribe(
                this,
                this._handleWidgetbarSettled,
              ),
              v.CheckMobile.any() &&
                (null === (e = window.widgetbar) ||
                  void 0 === e ||
                  e.visible().subscribe(this._handleWidgetbarVisible)))
        }
        componentWillUnmount() {
          var e
          null === (e = window.widgetbar) ||
            void 0 === e ||
            e.visible().unsubscribe(this._handleWidgetbarVisible),
            _.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility),
            y.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose),
            this._tool.destroy(),
            this._hotkeys.destroy()
        }
        componentDidUpdate(e, t) {
          var o
          const { isVisible: n, widgetbarSettled: i } = this.state
          n !== t.isVisible &&
            (h.emit('toggle_sidebar', !n),
            c.setValue('ChartDrawingToolbarWidget.visible', n),
            this._negotiateResizer()),
            t.widgetbarSettled !== i &&
              i &&
              v.CheckMobile.any() &&
              (null === (o = window.widgetbar) ||
                void 0 === o ||
                o.visible().subscribe(this._handleWidgetbarVisible))
        }
        render() {
          const {
              bgColor: e,
              chartWidgetCollection: t,
              readOnly: o,
            } = this.props,
            { isHovered: i, isVisible: l } = this.state,
            s = { backgroundColor: e && `#${e}` }
          let c
          c = n.createElement($t, {
            toolbarVisible: l,
            'data-name': 'toolbar-drawing-toggle-button',
          })
          const h = () =>
            !!this._features.tools &&
            !(!u.enabled('show_object_tree') || (lo && !io))
          return n.createElement(
            oo.RegistryProvider,
            { validation: to, value: this._registry },
            n.createElement(
              jt.CloseDelegateContext.Provider,
              { value: so },
              n.createElement(
                Qt.DrawerManager,
                null,
                n.createElement(
                  eo.MatchMedia,
                  { rule: Xt.DialogBreakpoints.TabletSmall },
                  (e) =>
                    n.createElement(
                      zt.Toolbar,
                      {
                        id: 'drawing-toolbar',
                        className: a(no.drawingToolbar, { [no.isHidden]: !l }),
                        style: s,
                        onClick: this.props.onClick,
                        onContextMenu: Vt.preventDefaultForContextMenu,
                        orientation: 'vertical',
                      },
                      n.createElement(
                        S,
                        {
                          onScroll: this._handleGlobalClose,
                          isVisibleFade: r.mobiletouch,
                          isVisibleButtons: !r.mobiletouch && i,
                          isVisibleScrollbar: !1,
                          onMouseOver: this._handleMouseOver,
                          onMouseOut: this._handleMouseOut,
                        },
                        n.createElement(
                          'div',
                          { className: no.inner },
                          !o &&
                            n.createElement(
                              'div',
                              { className: no.group, style: s },
                              this._filteredLineTools.map((o, i) =>
                                n.createElement(ut, {
                                  'data-name': o.id,
                                  chartWidgetCollection: t,
                                  favoriting:
                                    this._features.favoriting &&
                                    !(
                                      'linetool-group-cursors' === o.id &&
                                      (0, b.isOnMobileAppPage)('any')
                                    ),
                                  grayedTools: this._grayedTools,
                                  key: i,
                                  dropdownTooltip: o.title,
                                  lineTools: o.items,
                                  isSmallTablet: e,
                                  trackLabel: o.trackLabel,
                                }),
                              ),
                              this._toolsFilter.isToolEnabled('Font Icons') &&
                                n.createElement(Xe, {
                                  'data-name': 'linetool-group-font-icons',
                                  isGrayed: this._grayedTools['Font Icons'],
                                  isSmallTablet: e,
                                }),
                            ),
                          !o &&
                            n.createElement(
                              'div',
                              { className: no.group, style: s },
                              n.createElement(nt, {
                                toolName: 'measure',
                                onClick: this._handleMeasureClick,
                              }),
                              n.createElement(nt, {
                                toolName: 'zoom',
                                onClick: this._handleZoomInClick,
                              }),
                              n.createElement(it, { chartWidgetCollection: t }),
                            ),
                          !o &&
                            n.createElement(
                              'div',
                              { className: no.group, style: s },
                              n.createElement(Wt, { isSmallTablet: e }),
                              this._features.tools &&
                                n.createElement(ot, {
                                  property: d.properties().childs()
                                    .stayInDrawingMode,
                                  saveDefaultOnChange: !0,
                                  toolName: 'drawginmode',
                                  onClick: this._handleDrawingClick,
                                }),
                              this._features.tools &&
                                n.createElement(ot, {
                                  property: d.lockDrawings(),
                                  toolName: 'lockAllDrawings',
                                  onClick: this._handleLockClick,
                                }),
                              this._features.tools &&
                                n.createElement(Ft, { isSmallTablet: e }),
                              !1,
                            ),
                          !o &&
                            this._features.tools &&
                            n.createElement(
                              'div',
                              { className: no.group, style: s },
                              n.createElement(gt, {
                                chartWidgetCollection: t,
                                isSmallTablet: e,
                                toolName: 'removeAllDrawingTools',
                              }),
                            ),
                          n.createElement('div', {
                            className: no.fill,
                            style: s,
                          }),
                          !o &&
                            (this._features.tools || !1) &&
                            n.createElement(
                              'div',
                              {
                                className: a(no.group, no.lastGroup),
                                style: s,
                              },
                              !1,
                              this._features.tools &&
                                this._features.favoriting &&
                                n.createElement(Mt, {
                                  id: Ot.FavoriteDrawings,
                                }),
                              h() &&
                                n.createElement(N, {
                                  id: Ot.ObjectTree,
                                  action: this._handleObjectsTreeClick,
                                  toolName: 'showObjectsTree',
                                }),
                            ),
                        ),
                      ),
                    ),
                ),
                c,
              ),
            ),
          )
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value()
        }
        _negotiateResizer() {
          const e = Ht.TOOLBAR_WIDTH_COLLAPSED
          this.props.resizerBridge.negotiateWidth(
            this.state.isVisible ? Ht.TOOLBAR_WIDTH_EXPANDED : e,
          )
        }
        _handleGlobalClose() {
          so.fire()
        }
        _updateHotkeys() {
          this._hotkeys.promote()
        }
        _initHotkeys() {
          ;(this._hotkeys = A.createGroup({ desc: 'Drawing Toolbar' })),
            this._hotkeys.add({
              desc: 'Reset',
              hotkey: 27,
              handler: () => this._handleEsc(),
              isDisabled: () => d.toolIsCursor(d.tool.value()),
            })
        }
      }
      function ho(e, t) {
        0
      }
      class mo {
        constructor(e, t) {
          ;(this._component = null),
            (this._handleRef = (e) => {
              this._component = e
            }),
            (this._container = e),
            i.render(
              n.createElement(uo, { ...t, ref: this._handleRef }),
              this._container,
            )
        }
        destroy() {
          i.unmountComponentAtNode(this._container)
        }
        getComponent() {
          return (0, l.ensureNotNull)(this._component)
        }
      }
    },
    5962: (e, t, o) => {
      'use strict'
      o.d(t, {
        RegistryProvider: () => r,
        registryContextType: () => c,
        validateRegistry: () => s,
      })
      var n = o(50959),
        i = o(19036),
        l = o.n(i)
      const a = n.createContext({})
      function s(e, t) {
        l().checkPropTypes(t, e, 'context', 'RegistryContext')
      }
      function r(e) {
        const { validation: t, value: o } = e
        return s(o, t), n.createElement(a.Provider, { value: o }, e.children)
      }
      function c() {
        return a
      }
    },
    61380: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
    },
    51445: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>'
    },
    51609: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.31 14.5a1.07 1.07 0 0 1 0-1.5L13 4.3c.42-.41 1.1-.41 1.52 0l.99 1c.42.42.41 1.11-.02 1.53l-5.38 5.12h12.83c.6 0 1.07.48 1.07 1.07v1.43c0 .6-.48 1.07-1.07 1.07H10.1l5.38 5.13c.44.41.45 1.1.02 1.53l-1 .99c-.41.42-1.1.42-1.5 0L4.3 14.5Zm7.97 9.38-8.67-8.67c-.81-.8-.82-2.12 0-2.93l8.68-8.67c.8-.81 2.12-.82 2.92 0l1 .99c.82.82.8 2.16-.04 2.96l-3.57 3.4h10.33c1.14 0 2.07.93 2.07 2.07v1.43c0 1.15-.93 2.07-2.07 2.07H12.6l3.57 3.4c.84.8.86 2.14.03 2.97l-.99.99c-.8.8-2.12.8-2.93 0Z"/></svg>'
    },
    22976: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.87 4.52a.5.5 0 0 1 .61.35L6.91 10h5.47l1.03-4.67c.14-.63 1.04-.63 1.18 0L15.62 10h5.47l1.43-5.13a.5.5 0 0 1 .96.26L22.13 10H25a.5.5 0 0 1 0 1h-3.15l-.83 3H25a.5.5 0 0 1 0 1h-4.26l-2.15 7.75c-.17.6-1.03.58-1.16-.03L15.7 15h-3.42l-1.72 7.72c-.13.6-1 .63-1.16.03L7.26 15H3a.5.5 0 1 1 0-1h3.98l-.83-3H3a.5.5 0 1 1 0-1h2.87L4.52 5.13a.5.5 0 0 1 .35-.61ZM7.19 11l.83 3h3.47l.66-3H7.2Zm5.99 0-.67 3h2.98l-.67-3h-1.64Zm1.42-1L14 7.3l-.6 2.7h1.2Zm1.25 1 .66 3h3.47l.83-3h-4.96Zm3.85 4h-2.97l1.32 5.94L19.7 15Zm-8.43 0H8.3l1.65 5.94L11.27 15Z"/></svg>'
    },
    70616: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>'
    },
    48748: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14.08 3.73c.1.16.1.37 0 .54a9.4 9.4 0 0 0 3.35 13.26 9.9 9.9 0 0 0 6.49 1.18.5.5 0 0 1 .5.76 10.67 10.67 0 0 1-3.83 3.64 10.91 10.91 0 0 1-14.28-3.3A10.44 10.44 0 0 1 8.69 5.56a10.86 10.86 0 0 1 4.9-2.06.5.5 0 0 1 .49.22Zm8.3 15.61v.5c-1.91 0-3.8-.5-5.45-1.44a10.64 10.64 0 0 1-3.95-3.97 10.4 10.4 0 0 1-.3-9.72 9.6 9.6 0 0 0-6.37 5.39 9.39 9.39 0 0 0 .83 9.14 9.7 9.7 0 0 0 3.6 3.17 9.92 9.92 0 0 0 12.21-2.59c-.19.02-.38.02-.57.02v-.5Z"/></svg>'
    },
    18042: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M6 11.69C6 7.46 9.56 4 14 4c4.44 0 8 3.46 8 7.69 0 2.63-1.2 4.93-3.25 6.31H14.5v-5H18v-1h-8v1h3.5v5H9.14A8.06 8.06 0 0 1 6 11.69Zm2 6.67a9.1 9.1 0 0 1-3-6.67C5 6.87 9.05 3 14 3s9 3.87 9 8.69a8.51 8.51 0 0 1-3 6.62V22h-2v3h-8v-3H8v-3.64ZM11 22v2h6v-2h-6Zm-2-1v-2h10v2H9Z"/></svg>'
    },
    44986: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM14 16V9h1v6h4v1h-5Z"/></svg>'
    },
    83778: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-6 4-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17Z"/></svg>'
    },
    90624: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="28" height="28"><path fill="#fff" d="M63.42 93.22a37.13 37.13 0 1 0 .01-74.27 37.13 37.13 0 0 0-.01 74.27Z"/><path fill="#fff" d="M45.48 48.85c-.71.04-1.96 0-3.17.2-2.36.41-4.72.85-7.03 1.51a30.65 30.65 0 0 0-4.87 2.02c-1.9.9-3.74 1.93-5.59 2.94-.66.36-.71.86-.16 1.39.53.53 1.1 1.01 1.7 1.44 2.43 1.63 4.91 3.15 7.3 4.85 2.77 1.95 5.86 3.03 8.95 4.03 3.5 1.14 7.15.85 10.72.38 4.05-.54 8.1-1.3 11.9-2.96 2.17-.95 4.21-2.22 6.27-3.44.88-.5.86-.86.08-1.5-1.59-1.28-3.16-2.6-4.82-3.78-3.73-2.66-7.65-4.85-12.05-6a29.47 29.47 0 0 0-9.23-1.08Zm6.56-21.95v8.8c0 1.1-.02 2.18-.03 3.27 0 .86.33 1.39 1.14 1.47.38.04.77.06 1.16.11 2.8.35 3.14.13 3.99-2.86.77-2.7 1.47-5.44 2.22-8.15.31-1.12.5-1.18 1.5-.79 1.98.78 3.95 1.58 5.94 2.32.77.29 1.03.6.7 1.56-.98 2.94-1.86 5.92-2.77 8.89-.09.28-.15.57-.21.86-.42 2.02-.37 2.12 1.37 2.8.25.1.5.21.74.34.51.3.91.26 1.38-.19 2.34-2.22 4.75-4.34 7.05-6.6.74-.73 1.57-.62 2.16-.04A83.06 83.06 0 0 1 82 42.52c.64.73.6 1.52-.04 2.3a273.4 273.4 0 0 1-4.69 5.62c-.46.53-.44.98-.02 1.44 1.46 1.55 2.93 3.1 4.4 4.63 1.1 1.13 2.21 2.24 3.3 3.37 1.05 1.07 1.12 1.67.06 2.77-1.44 1.5-2.86 3.08-4.51 4.23a87.09 87.09 0 0 1-10 6.28 32.38 32.38 0 0 1-12.28 3.5c-4.54.36-9.07.43-13.57-.15a59.04 59.04 0 0 1-9.69-2.07 38.4 38.4 0 0 1-8.35-3.83 51.59 51.59 0 0 1-5.8-4.13 73.78 73.78 0 0 1-6.18-5.38c-1.29-1.3-2.33-2.9-3.38-4.46-.58-.84-.06-1.55.59-2.1 1.14-.96 2.32-1.9 3.42-2.9.72-.65.95-.96 1.62-1.67.5-.53.43-1.02-.07-1.51-1.3-1.3-1.52-1.76-2.83-3.07-.6-.59-.74-1.1-.07-1.79 1.66-1.72 4.35-4.22 5.97-5.98.8-.86.9-.82 1.7.12 1.6 1.9 2.12 2.97 3.78 4.83.87.98 1.19 1.55 2.5 1.04 2.37-.95 1.76-.7 1.05-3.35-.64-2.37-1-2.96-1.72-5.3-.08-.26-.17-.5-.23-.75-.33-1.2-.3-1.33.8-1.7 2.06-.68 5.56-1.72 7.62-2.4.8-.27 1.16.18 1.39.93.73 2.55 1.01 3.38 1.77 5.92.2.72.48 1.41.84 2.05.7 1.18 1.13 1.4 2.27 1.36 1.96-.07 2.24-.3 2.24-2.45 0-3.1-.06-6.21-.14-9.32-.04-1.53-.07-1.62 1.34-1.66 2.3-.06 4.61-.02 6.96-.02"/><path fill="#2962FF" d="M63.42 90.92a34.26 34.26 0 1 0 .01-68.52 34.26 34.26 0 0 0-.01 68.52Z"/><path fill="#FF5200" d="M45.69 49.83c-.67.03-1.83 0-2.95.17-2.2.35-4.4.72-6.54 1.28-1.56.4-3.06 1.05-4.53 1.7-1.76.77-3.47 1.64-5.2 2.49-.6.3-.66.73-.15 1.17.5.45 1.03.86 1.59 1.22 2.26 1.37 4.56 2.66 6.79 4.1 2.57 1.64 5.45 2.55 8.31 3.4 3.26.96 6.65.72 9.98.32 3.76-.46 7.52-1.1 11.06-2.5 2.01-.8 3.92-1.88 5.82-2.9.82-.44.8-.74.08-1.27-1.48-1.09-2.94-2.2-4.48-3.2-3.47-2.25-7.11-4.1-11.2-5.06a30.03 30.03 0 0 0-8.59-.91v-.01Zm6.09-18.54v7.44l-.02 2.76c0 .72.3 1.17 1.05 1.24.36.03.73.05 1.08.1 2.6.29 2.92.1 3.71-2.43.72-2.28 1.37-4.59 2.07-6.88.29-.94.45-1 1.4-.66 1.84.66 3.66 1.33 5.52 1.95.7.25.95.52.64 1.32-.9 2.48-1.72 5-2.57 7.5-.08.25-.14.5-.2.74-.38 1.7-.34 1.79 1.28 2.37.23.08.47.17.7.28.47.26.84.22 1.27-.16 2.18-1.87 4.42-3.67 6.56-5.58.69-.61 1.46-.52 2-.03a73.41 73.41 0 0 1 3.37 3.24c.6.6.56 1.28-.03 1.94-1.44 1.6-2.89 3.18-4.37 4.74-.43.46-.4.83-.01 1.22a340.4 340.4 0 0 0 4.1 3.91c1 .96 2.04 1.9 3.06 2.85.97.9 1.03 1.41.05 2.34-1.34 1.26-2.66 2.6-4.2 3.57a82.59 82.59 0 0 1-9.29 5.3 32.44 32.44 0 0 1-11.42 2.97c-4.22.3-8.43.36-12.62-.13a59.71 59.71 0 0 1-9-1.75c-2.76-.77-5.3-1.91-7.77-3.24a48.2 48.2 0 0 1-5.39-3.49c-2-1.4-3.92-2.92-5.75-4.54-1.2-1.09-2.17-2.45-3.15-3.76-.53-.72-.05-1.31.55-1.78 1.06-.82 2.16-1.6 3.18-2.45.67-.55 1.27-1.17 1.9-1.77.46-.45.4-.86-.07-1.28l-3.64-3.32c-.55-.5-.68-.93-.05-1.51 1.53-1.46 3.01-2.98 4.52-4.46.74-.72.84-.7 1.58.1 1.5 1.61 2.98 3.24 4.51 4.8.82.84 1.75 1.09 2.96.65 2.21-.8 2.3-.73 1.63-2.97-.6-2-1.32-3.96-2-5.93-.07-.22-.16-.42-.21-.63-.3-1.02-.28-1.12.74-1.43 1.92-.59 3.85-1.11 5.77-1.69.75-.23 1.08.15 1.3.78.67 2.16 1.33 4.32 2.04 6.46.18.61.44 1.2.78 1.74.66 1 1.72.98 2.78.94 1.83-.06 2.09-.25 2.09-2.07 0-2.62-.06-5.25-.13-7.87-.04-1.3-.07-1.37 1.24-1.4 2.14-.06 4.29-.02 6.47-.02"/><path fill="#FDD600" d="m53.5 54.08.15-.32c-.5-.49-.91-1.15-1.5-1.44a9.83 9.83 0 0 0-6.84-.8c-1.95.5-3.23 1.92-4.14 3.57-.98 1.8-1.33 3.8-.09 5.64.54.8 1.38 1.44 2.16 2.04a6.98 6.98 0 0 0 10.61-2.68c.4-.87.27-1.18-.66-1.48-.98-.31-1.98-.59-2.96-.9-.65-.22-1.31-.44-1.31-1.3 0-.82.53-1.15 1.24-1.35 1.12-.3 2.23-.65 3.34-.97Zm-7.81-4.25c3.23-.15 5.9.29 8.58.92 4.08.96 7.73 2.8 11.21 5.06 1.54.99 3 2.1 4.48 3.2.72.53.74.82-.08 1.26-1.91 1.03-3.82 2.1-5.82 2.9-3.54 1.4-7.3 2.04-11.07 2.5-3.32.4-6.72.65-9.97-.31-2.87-.85-5.74-1.76-8.32-3.41-2.22-1.43-4.52-2.72-6.78-4.1a12 12 0 0 1-1.6-1.21c-.5-.45-.45-.86.17-1.18 1.72-.86 3.43-1.72 5.19-2.48 1.48-.65 2.97-1.3 4.52-1.7 2.16-.56 4.35-.93 6.55-1.28 1.12-.18 2.28-.14 2.94-.18"/><path fill="#1D1D1B" d="M53.5 54.08c-1.11.33-2.22.67-3.34.98-.71.19-1.24.52-1.24 1.34 0 .86.67 1.1 1.3 1.3.99.32 1.99.6 2.97.9.93.3 1.05.61.66 1.49a6.98 6.98 0 0 1-10.62 2.68 9.18 9.18 0 0 1-2.16-2.04c-1.24-1.85-.9-3.85.1-5.65.9-1.65 2.18-3.07 4.13-3.57a9.84 9.84 0 0 1 6.84.8c.6.3 1.01.95 1.5 1.44l-.15.33"/></svg>'
    },
  },
])
