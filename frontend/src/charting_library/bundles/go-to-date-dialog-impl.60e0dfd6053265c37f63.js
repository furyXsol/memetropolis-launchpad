;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1859],
  {
    58222: (e) => {
      e.exports = {
        'light-button': 'light-button-bYDQcOkp',
        link: 'link-bYDQcOkp',
        content: 'content-bYDQcOkp',
        'visually-hidden': 'visually-hidden-bYDQcOkp',
        nowrap: 'nowrap-bYDQcOkp',
        'ellipsis-container': 'ellipsis-container-bYDQcOkp',
        'text-wrap-container': 'text-wrap-container-bYDQcOkp',
        'text-wrap-with-ellipsis': 'text-wrap-with-ellipsis-bYDQcOkp',
        icon: 'icon-bYDQcOkp',
        'force-direction-ltr': 'force-direction-ltr-bYDQcOkp',
        'force-direction-rtl': 'force-direction-rtl-bYDQcOkp',
        'with-grouped': 'with-grouped-bYDQcOkp',
        'variant-quiet-primary': 'variant-quiet-primary-bYDQcOkp',
        selected: 'selected-bYDQcOkp',
        'typography-regular16px': 'typography-regular16px-bYDQcOkp',
        'typography-medium16px': 'typography-medium16px-bYDQcOkp',
        'typography-regular14px': 'typography-regular14px-bYDQcOkp',
        'typography-semibold14px': 'typography-semibold14px-bYDQcOkp',
        'typography-semibold16px': 'typography-semibold16px-bYDQcOkp',
        'size-xsmall': 'size-xsmall-bYDQcOkp',
        'with-start-icon': 'with-start-icon-bYDQcOkp',
        'with-end-icon': 'with-end-icon-bYDQcOkp',
        'no-content': 'no-content-bYDQcOkp',
        wrap: 'wrap-bYDQcOkp',
        'size-small': 'size-small-bYDQcOkp',
        'size-medium': 'size-medium-bYDQcOkp',
        'variant-primary': 'variant-primary-bYDQcOkp',
        'color-gray': 'color-gray-bYDQcOkp',
        caret: 'caret-bYDQcOkp',
        grouped: 'grouped-bYDQcOkp',
        pills: 'pills-bYDQcOkp',
        'disable-active-on-touch': 'disable-active-on-touch-bYDQcOkp',
        'disable-active-state-styles': 'disable-active-state-styles-bYDQcOkp',
        'color-green': 'color-green-bYDQcOkp',
        'color-red': 'color-red-bYDQcOkp',
        'variant-secondary': 'variant-secondary-bYDQcOkp',
        'variant-ghost': 'variant-ghost-bYDQcOkp',
      }
    },
    88803: (e) => {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 430px)',
      }
    },
    55596: (e) => {
      e.exports = {
        dialog: 'dialog-b8SxMnzX',
        wrapper: 'wrapper-b8SxMnzX',
        separator: 'separator-b8SxMnzX',
        bounded: 'bounded-b8SxMnzX',
      }
    },
    69827: (e) => {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        container: 'container-BZKENkhT',
        unsetAlign: 'unsetAlign-BZKENkhT',
        title: 'title-BZKENkhT',
        subtitle: 'subtitle-BZKENkhT',
        textWrap: 'textWrap-BZKENkhT',
        ellipsis: 'ellipsis-BZKENkhT',
        close: 'close-BZKENkhT',
        icon: 'icon-BZKENkhT',
      }
    },
    45300: (e) => {
      e.exports = {}
    },
    45719: (e) => {
      e.exports = { separator: 'separator-Pf4rIzEt' }
    },
    27011: (e, t, a) => {
      'use strict'
      function r(e, t) {
        return (
          t ||
          null == e ||
          (('string' == typeof e || Array.isArray(e)) && 0 === e.length)
        )
      }
      a.d(t, { isIconOnly: () => r })
    },
    90744: (e, t, a) => {
      'use strict'
      a.d(t, { LightButton: () => y })
      var r = a(50959),
        n = a(97754),
        o = a(9745),
        s = a(17946),
        i = a(27011),
        l = a(86332)
      const u = r.createContext({ isInButtonGroup: !1, isGroupPrimary: !1 })
      var c = a(2948),
        d = a(58222),
        h = a.n(d)
      const m = (e, t) => {
        const a = (0, r.useContext)(s.CustomBehaviourContext),
          o = (0, r.useContext)(l.ControlGroupContext),
          { isInButtonGroup: c, isGroupPrimary: d } = (0, r.useContext)(u),
          {
            className: m,
            isSelected: p,
            children: y,
            startIcon: _,
            showCaret: f,
            endIcon: v,
            forceDirection: g,
            iconOnly: b,
            color: S = 'gray',
            variant: D = 'primary',
            size: k = 'medium',
            enableActiveStateStyles: M = a.enableActiveStateStyles,
            typography: T,
            isLink: N = !1,
            textWrap: z,
            isPills: x,
          } = e,
          C = T
            ? h()[`typography-${T}`]
            : h()[
                `typography-${((e, t) => ('xsmall' === e ? (t ? 'semibold14px' : 'regular14px') : 'small' === e || 'medium' === e ? (t ? 'semibold16px' : 'regular16px') : ''))(k, p || x)}`
              ]
        return n(
          m,
          h()['light-button'],
          N && h().link,
          p && h().selected,
          (0, i.isIconOnly)(y, b) && h()['no-content'],
          _ && h()['with-start-icon'],
          (f || v) && h()['with-end-icon'],
          t && h()['with-grouped'],
          g && h()[`force-direction-${g}`],
          h()[`variant-${d ? 'primary' : D}`],
          h()[`color-${d ? 'gray' : S}`],
          h()[`size-${k}`],
          C,
          !M && h()['disable-active-state-styles'],
          o.isGrouped && h().grouped,
          z && h().wrap,
          c && h()['disable-active-on-touch'],
          x && h().pills,
        )
      }
      function p(e) {
        const {
          startIcon: t,
          endIcon: a,
          showCaret: s,
          iconOnly: l,
          ellipsis: u = !0,
          textWrap: d,
          children: m,
        } = e
        return r.createElement(
          r.Fragment,
          null,
          t && r.createElement(o.Icon, { className: h().icon, icon: t }),
          !(0, i.isIconOnly)(m, l) &&
            r.createElement(
              'span',
              { className: n(h().content, !d && h().nowrap) },
              d || u
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      'span',
                      {
                        className: n(
                          !d && u && h()['ellipsis-container'],
                          d && h()['text-wrap-container'],
                          d && u && h()['text-wrap-with-ellipsis'],
                        ),
                      },
                      m,
                    ),
                    r.createElement(
                      'span',
                      { className: h()['visually-hidden'], 'aria-hidden': !0 },
                      m,
                    ),
                  )
                : r.createElement(
                    r.Fragment,
                    null,
                    m,
                    r.createElement(
                      'span',
                      { className: h()['visually-hidden'], 'aria-hidden': !0 },
                      m,
                    ),
                  ),
            ),
          (a || s) &&
            ((e) =>
              r.createElement(o.Icon, {
                className: n(h().icon, e.showCaret && h().caret),
                icon: e.showCaret ? c : e.endIcon,
              }))(e),
        )
      }
      function y(e) {
        const { isGrouped: t } = r.useContext(l.ControlGroupContext),
          {
            reference: a,
            className: n,
            isSelected: o,
            children: s,
            startIcon: i,
            iconOnly: u,
            ellipsis: c,
            showCaret: d,
            forceDirection: h,
            endIcon: y,
            color: _,
            variant: f,
            size: v,
            enableActiveStateStyles: g,
            typography: b,
            textWrap: S = !1,
            maxLines: D,
            style: k = {},
            isPills: M,
            ...T
          } = e,
          N = S ? (null != D ? D : 2) : 1,
          z = N > 0 ? { ...k, '--ui-lib-light-button-content-max-lines': N } : k
        return r.createElement(
          'button',
          {
            ...T,
            className: m(
              {
                className: n,
                isSelected: o,
                children: s,
                startIcon: i,
                iconOnly: u,
                showCaret: d,
                forceDirection: h,
                endIcon: y,
                color: _,
                variant: f,
                size: v,
                enableActiveStateStyles: g,
                typography: b,
                textWrap: S,
                isPills: M,
              },
              t,
            ),
            ref: a,
            style: z,
          },
          r.createElement(
            p,
            {
              showCaret: d,
              startIcon: i,
              endIcon: y,
              iconOnly: u,
              ellipsis: c,
              textWrap: S,
            },
            s,
          ),
        )
      }
      a(21593)
    },
    86332: (e, t, a) => {
      'use strict'
      a.d(t, { ControlGroupContext: () => r })
      const r = a(50959).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      })
    },
    38952: (e, t, a) => {
      'use strict'
      function r(e) {
        const { reference: t, ...a } = e
        return { ...a, ref: t }
      }
      a.d(t, { renameRef: () => r })
    },
    21593: (e, t, a) => {
      'use strict'
      a.d(t, { CustomComponentDefaultLink: () => o })
      var r = a(50959),
        n = a(38952)
      function o(e) {
        return r.createElement('a', { ...(0, n.renameRef)(e) })
      }
      r.PureComponent
    },
    17946: (e, t, a) => {
      'use strict'
      a.d(t, { CustomBehaviourContext: () => r })
      const r = (0, a(50959).createContext)({ enableActiveStateStyles: !0 })
      r.displayName = 'CustomBehaviourContext'
    },
    39416: (e, t, a) => {
      'use strict'
      a.d(t, { useFunctionalRefObject: () => o })
      var r = a(50959),
        n = a(43010)
      function o(e) {
        const t = (0, r.useMemo)(
            () =>
              (function (e) {
                const t = (a) => {
                  e(a), (t.current = a)
                }
                return (t.current = null), t
              })((e) => {
                i.current(e)
              }),
            [],
          ),
          a = (0, r.useRef)(null),
          o = (t) => {
            if (null === t) return s(a.current, t), void (a.current = null)
            a.current !== e && ((a.current = e), s(a.current, t))
          },
          i = (0, r.useRef)(o)
        return (
          (i.current = o),
          (0, n.useIsomorphicLayoutEffect)(() => {
            if (null !== t.current)
              return i.current(t.current), () => i.current(null)
          }, [e]),
          t
        )
      }
      function s(e, t) {
        null !== e && ('function' == typeof e ? e(t) : (e.current = t))
      }
    },
    43010: (e, t, a) => {
      'use strict'
      a.d(t, { useIsomorphicLayoutEffect: () => n })
      var r = a(50959)
      function n(e, t) {
        ;('undefined' == typeof window ? r.useEffect : r.useLayoutEffect)(e, t)
      }
    },
    27267: (e, t, a) => {
      'use strict'
      function r(e, t, a, r, n) {
        function o(n) {
          if (e > n.timeStamp) return
          const o = n.target
          void 0 !== a &&
            null !== t &&
            null !== o &&
            o.ownerDocument === r &&
            (t.contains(o) || a(n))
        }
        return (
          n.click && r.addEventListener('click', o, !1),
          n.mouseDown && r.addEventListener('mousedown', o, !1),
          n.touchEnd && r.addEventListener('touchend', o, !1),
          n.touchStart && r.addEventListener('touchstart', o, !1),
          () => {
            r.removeEventListener('click', o, !1),
              r.removeEventListener('mousedown', o, !1),
              r.removeEventListener('touchend', o, !1),
              r.removeEventListener('touchstart', o, !1)
          }
        )
      }
      a.d(t, { addOutsideEventListener: () => r })
    },
    67842: (e, t, a) => {
      'use strict'
      a.d(t, { useResizeObserver: () => i })
      var r = a(50959),
        n = a(59255),
        o = a(43010),
        s = a(39416)
      function i(e, t = []) {
        const { callback: a, ref: i = null } = (function (e) {
            return 'function' == typeof e ? { callback: e } : e
          })(e),
          l = (0, r.useRef)(null),
          u = (0, r.useRef)(a)
        u.current = a
        const c = (0, s.useFunctionalRefObject)(i),
          d = (0, r.useCallback)(
            (e) => {
              c(e),
                null !== l.current &&
                  (l.current.disconnect(), null !== e && l.current.observe(e))
            },
            [c, l],
          )
        return (
          (0, o.useIsomorphicLayoutEffect)(
            () => (
              (l.current = new n.default((e, t) => {
                u.current(e, t)
              })),
              c.current && d(c.current),
              () => {
                var e
                null === (e = l.current) || void 0 === e || e.disconnect()
              }
            ),
            [c, ...t],
          ),
          d
        )
      }
    },
    90186: (e, t, a) => {
      'use strict'
      function r(e) {
        return o(e, s)
      }
      function n(e) {
        return o(e, i)
      }
      function o(e, t) {
        const a = Object.entries(e).filter(t),
          r = {}
        for (const [e, t] of a) r[e] = t
        return r
      }
      function s(e) {
        const [t, a] = e
        return 0 === t.indexOf('data-') && 'string' == typeof a
      }
      function i(e) {
        return 0 === e[0].indexOf('aria-')
      }
      a.d(t, {
        filterAriaProps: () => n,
        filterDataProps: () => r,
        filterProps: () => o,
        isAriaAttribute: () => i,
        isDataAttribute: () => s,
      })
    },
    53017: (e, t, a) => {
      'use strict'
      function r(e) {
        return (t) => {
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t)
          })
        }
      }
      function n(e) {
        return r([e])
      }
      a.d(t, { isomorphicRef: () => n, mergeRefs: () => r })
    },
    24437: (e, t, a) => {
      'use strict'
      a.d(t, { DialogBreakpoints: () => n })
      var r = a(88803)
      const n = {
        SmallHeight: r['small-height-breakpoint'],
        TabletSmall: r['tablet-small-breakpoint'],
        TabletNormal: r['tablet-normal-breakpoint'],
      }
    },
    35057: (e, t, a) => {
      'use strict'
      a.d(t, { AdaptivePopupDialog: () => z })
      var r = a(50959),
        n = a(50151)
      var o = a(97754),
        s = a.n(o),
        i = a(68335),
        l = a(38223),
        u = a(35749),
        c = a(63016),
        d = a(1109),
        h = a(24437),
        m = a(90692),
        p = a(95711)
      var y = a(52092),
        _ = a(76422),
        f = a(9745)
      const v = r.createContext({ setHideClose: () => {} })
      var g = a(7720),
        b = a(69827)
      function S(e) {
        const {
            title: t,
            titleTextWrap: a = !1,
            subtitle: n,
            showCloseIcon: o = !0,
            onClose: i,
            onCloseButtonKeyDown: l,
            renderBefore: u,
            renderAfter: c,
            draggable: d,
            className: h,
            unsetAlign: m,
            closeAriaLabel: p,
            closeButtonReference: y,
          } = e,
          [_, S] = (0, r.useState)(!1)
        return r.createElement(
          v.Provider,
          { value: { setHideClose: S } },
          r.createElement(
            'div',
            { className: s()(b.container, h, (n || m) && b.unsetAlign) },
            u,
            r.createElement(
              'div',
              { 'data-dragg-area': d, className: b.title },
              r.createElement(
                'div',
                { className: s()(a ? b.textWrap : b.ellipsis) },
                t,
              ),
              n &&
                r.createElement(
                  'div',
                  { className: s()(b.ellipsis, b.subtitle) },
                  n,
                ),
            ),
            c,
            o &&
              !_ &&
              r.createElement(
                'button',
                {
                  className: b.close,
                  onClick: i,
                  onKeyDown: l,
                  'data-name': 'close',
                  'aria-label': p,
                  type: 'button',
                  ref: y,
                },
                r.createElement(f.Icon, {
                  className: b.icon,
                  icon: g,
                  'data-name': 'close',
                  'data-role': 'button',
                }),
              ),
          ),
        )
      }
      var D = a(53017),
        k = a(90186),
        M = a(55596)
      const T = { vertical: 20 },
        N = { vertical: 0 }
      class z extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._controller = null),
            (this._reference = null),
            (this._orientationMediaQuery = null),
            (this._renderChildren = (e, t) => (
              (this._controller = e),
              this.props.render({
                requestResize: this._requestResize,
                centerAndFit: this._centerAndFit,
                isSmallWidth: t,
              })
            )),
            (this._handleReference = (e) => (this._reference = e)),
            (this._handleCloseBtnClick = () => {
              this.props.onKeyboardClose && this.props.onKeyboardClose(),
                this._handleClose()
            }),
            (this._handleClose = () => {
              this.props.onClose()
            }),
            (this._handleOpen = () => {
              void 0 !== this.props.onOpen &&
                this.props.isOpened &&
                this.props.onOpen(
                  this.props.fullScreen ||
                    window.matchMedia(h.DialogBreakpoints.TabletSmall).matches,
                )
            }),
            (this._handleKeyDown = (e) => {
              if (!e.defaultPrevented) {
                if (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  27 === (0, i.hashFromEvent)(e))
                ) {
                  if (e.defaultPrevented) return
                  if (
                    this.props.forceCloseOnEsc &&
                    this.props.forceCloseOnEsc()
                  )
                    return (
                      this.props.onKeyboardClose &&
                        this.props.onKeyboardClose(),
                      void this._handleClose()
                    )
                  const { activeElement: a } = document,
                    r = (0, n.ensureNotNull)(this._reference)
                  if (null !== a) {
                    if (
                      (e.preventDefault(),
                      'true' === (t = a).getAttribute('data-haspopup') &&
                        'true' !== t.getAttribute('data-expanded'))
                    )
                      return void this._handleClose()
                    if ((0, u.isTextEditingField)(a)) return void r.focus()
                    if (r.contains(a))
                      return (
                        this.props.onKeyboardClose &&
                          this.props.onKeyboardClose(),
                        void this._handleClose()
                      )
                  }
                }
                var t, a
                ;(function (e) {
                  if ('function' == typeof e) return e()
                  return Boolean(e)
                })(this.props.disableTabNavigationContainment) ||
                  ((a = e),
                  [9, i.Modifiers.Shift + 9].includes(
                    (0, i.hashFromEvent)(a),
                  ) && a.stopPropagation())
              }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds()
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit()
            }),
            (this._calculatePositionWithOffsets = (e, t) => {
              const a = (0, n.ensureDefined)(
                this.props.fullScreenViewOffsets,
              ).value()
              return {
                top: a.top,
                left: (0, l.isRtl)() ? -a.right : a.left,
                width: t.clientWidth - a.left - a.right,
                height: t.clientHeight - a.top - a.bottom,
              }
            })
        }
        componentDidMount() {
          var e, t
          this.props.ignoreClosePopupsAndDialog ||
            _.subscribe(
              y.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
              this._handleClose,
              null,
            ),
            this._handleOpen(),
            void 0 !== this.props.onOpen &&
              ((this._orientationMediaQuery = window.matchMedia(
                '(orientation: portrait)',
              )),
              (e = this._orientationMediaQuery),
              (t = this._handleOpen),
              (null == e ? void 0 : e.addEventListener)
                ? e.addEventListener('change', t)
                : e.addListener(t)),
            this.props.fullScreenViewOffsets &&
              this.props.fullScreen &&
              this.props.fullScreenViewOffsets.subscribe(this._requestResize)
        }
        componentWillUnmount() {
          var e, t
          this.props.ignoreClosePopupsAndDialog ||
            _.unsubscribe(
              y.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
              this._handleClose,
              null,
            ),
            null !== this._orientationMediaQuery &&
              ((e = this._orientationMediaQuery),
              (t = this._handleOpen),
              (null == e ? void 0 : e.removeEventListener)
                ? e.removeEventListener('change', t)
                : e.removeListener(t)),
            this.props.fullScreenViewOffsets &&
              this.props.fullScreen &&
              this.props.fullScreenViewOffsets.unsubscribe(this._requestResize)
        }
        focus() {
          ;(0, n.ensureNotNull)(this._reference).focus()
        }
        getElement() {
          return this._reference
        }
        contains(e) {
          var t, a
          return (
            null !==
              (a =
                null === (t = this._reference) || void 0 === t
                  ? void 0
                  : t.contains(e)) &&
            void 0 !== a &&
            a
          )
        }
        render() {
          const {
              className: e,
              wrapperClassName: t,
              headerClassName: a,
              isOpened: n,
              title: o,
              titleTextWrap: i,
              dataName: l,
              onClickOutside: u,
              additionalElementPos: y,
              additionalHeaderElement: _,
              backdrop: f,
              shouldForceFocus: v = !0,
              shouldReturnFocus: g,
              onForceFocus: b,
              showSeparator: z,
              subtitle: x,
              draggable: C = !0,
              fullScreen: E = !1,
              showCloseIcon: w = !0,
              rounded: L = !0,
              isAnimationEnabled: I,
              growPoint: O,
              dialogTooltip: P,
              unsetHeaderAlign: A,
              onDragStart: W,
              dataDialogName: Y,
              closeAriaLabel: F,
              containerAriaLabel: j,
              reference: H,
              containerTabIndex: U,
              closeButtonReference: B,
              onCloseButtonKeyDown: R,
              shadowed: J,
              fullScreenViewOffsets: K,
            } = this.props,
            Q = 'after' !== y ? _ : void 0,
            G = 'after' === y ? _ : void 0,
            V = 'string' == typeof o ? o : Y || '',
            Z = (0, k.filterDataProps)(this.props),
            $ = (0, D.mergeRefs)([this._handleReference, H])
          return r.createElement(
            m.MatchMedia,
            { rule: h.DialogBreakpoints.SmallHeight },
            (y) =>
              r.createElement(
                m.MatchMedia,
                { rule: h.DialogBreakpoints.TabletSmall },
                (h) =>
                  r.createElement(
                    c.PopupDialog,
                    {
                      rounded: !(h || E) && L,
                      className: s()(M.dialog, E && K && M.bounded, e),
                      isOpened: n,
                      reference: $,
                      onKeyDown: this._handleKeyDown,
                      onClickOutside: u,
                      onClickBackdrop: u,
                      fullscreen: h || E,
                      guard: y ? N : T,
                      boundByScreen: h || E,
                      shouldForceFocus: v,
                      onForceFocus: b,
                      shouldReturnFocus: g,
                      backdrop: f,
                      draggable: C,
                      isAnimationEnabled: I,
                      growPoint: O,
                      name: this.props.dataName,
                      dialogTooltip: P,
                      onDragStart: W,
                      containerAriaLabel: j,
                      containerTabIndex: U,
                      calculateDialogPosition:
                        E && K ? this._calculatePositionWithOffsets : void 0,
                      shadowed: J,
                      ...Z,
                    },
                    r.createElement(
                      'div',
                      {
                        className: s()(M.wrapper, t),
                        'data-name': l,
                        'data-dialog-name': V,
                      },
                      void 0 !== o &&
                        r.createElement(S, {
                          draggable: C && !(h || E),
                          onClose: this._handleCloseBtnClick,
                          renderAfter: G,
                          renderBefore: Q,
                          subtitle: x,
                          title: o,
                          titleTextWrap: i,
                          showCloseIcon: w,
                          className: a,
                          unsetAlign: A,
                          closeAriaLabel: F,
                          closeButtonReference: B,
                          onCloseButtonKeyDown: R,
                        }),
                      z &&
                        r.createElement(d.Separator, {
                          className: M.separator,
                        }),
                      r.createElement(p.PopupContext.Consumer, null, (e) =>
                        this._renderChildren(e, h || E),
                      ),
                    ),
                  ),
              ),
          )
        }
      }
    },
    76068: (e, t, a) => {
      'use strict'
      a.d(t, { CircleLogo: () => o })
      var r = a(50959),
        n = a(58492)
      a(45300)
      function o(e) {
        var t, a
        const o = (0, n.getStyleClasses)(e.size, e.className),
          s =
            null !== (a = null !== (t = e.alt) && void 0 !== t ? t : e.title) &&
            void 0 !== a
              ? a
              : ''
        return (0, n.isCircleLogoWithUrlProps)(e)
          ? r.createElement('img', {
              className: o,
              src: e.logoUrl,
              alt: s,
              title: e.title,
              loading: e.loading,
              'aria-label': e['aria-label'],
              'aria-hidden': e['aria-hidden'],
            })
          : r.createElement(
              'span',
              {
                className: o,
                title: e.title,
                'aria-label': e['aria-label'],
                'aria-hidden': e['aria-hidden'],
              },
              e.placeholderLetter,
            )
      }
    },
    58492: (e, t, a) => {
      'use strict'
      a.d(t, { getStyleClasses: () => n, isCircleLogoWithUrlProps: () => o })
      var r = a(97754)
      function n(e, t) {
        return r('tv-circle-logo', `tv-circle-logo--${e}`, t)
      }
      function o(e) {
        return 'logoUrl' in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
      }
    },
    1109: (e, t, a) => {
      'use strict'
      a.d(t, { Separator: () => s })
      var r = a(50959),
        n = a(97754),
        o = a(45719)
      function s(e) {
        return r.createElement('div', {
          className: n(o.separator, e.className),
        })
      }
    },
    30586: (e) => {
      e.exports = { calendar: 'calendar-PM3TZruR' }
    },
    60207: (e) => {
      e.exports = { row: 'row-Sj9z7O1v', mobileRow: 'mobileRow-Sj9z7O1v' }
    },
    13930: (e) => {
      e.exports = {
        dialogWrapper: 'dialogWrapper-P_IVoUsZ',
        dialogWrapperSmall: 'dialogWrapperSmall-P_IVoUsZ',
        tabs: 'tabs-P_IVoUsZ',
        content: 'content-P_IVoUsZ',
        contentMobile: 'contentMobile-P_IVoUsZ',
        bodyWrapper: 'bodyWrapper-P_IVoUsZ',
      }
    },
    91952: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { showGoToDateDialog: () => ae })
      var r = a(50959),
        n = a(962),
        o = a(50151),
        s = a(82992),
        i = a(23935),
        l = a(51826),
        u = a(41249),
        c = a.n(u)
      const d = r.createContext(null)
      function h(e) {
        const { initialGoToDate: t, children: a } = e,
          [n, o] = (0, r.useState)(t),
          s = n.valueOf() <= (0, i.resetToDayEnd)(new Date()).valueOf(),
          l = (0, r.useMemo)(
            () => ({ date: n, setDate: o, isValid: s }),
            [n, s],
          )
        return r.createElement(d.Provider, { value: l }, a)
      }
      const m = r.createContext(null)
      function p(e) {
        const { initialRanges: t, children: a } = e,
          [n, o] = (0, r.useState)(t.from),
          [s, i] = (0, r.useState)(t.to),
          l = n.valueOf() <= s.valueOf(),
          u = (0, r.useMemo)(
            () => ({
              dateFrom: n,
              dateTo: s,
              setDateFrom: o,
              setDateTo: i,
              isValid: l,
            }),
            [n, s, l],
          )
        return r.createElement(m.Provider, { value: u }, a)
      }
      var y = a(44352),
        _ = a(97754),
        f = a.n(_),
        v = a(76422),
        g = a(56840),
        b = a.n(g),
        S = a(52092),
        D = a(24437),
        k = a(50182),
        M = a(60207)
      function T(e) {
        const { children: t } = e
        return r.createElement(
          'div',
          { className: f()(M.row, R && M.mobileRow) },
          t,
        )
      }
      var N = a(85528),
        z = a(76056)
      const x = r.createContext({ isActive: !1, isFocused: !1 })
      function C(e) {
        const {
            value: t,
            reference: a,
            isActive: n,
            onPick: o,
            onFocus: s,
            isDisabled: i,
            minValue: l,
            maxValue: u,
          } = e,
          [c, d] = (0, r.useState)(!1)
        return r.createElement(
          x.Provider,
          { value: { isActive: n, isFocused: c } },
          r.createElement(
            'div',
            {
              onFocus: function () {
                d(!0), s && s()
              },
              onBlur: function () {
                d(!1)
              },
            },
            r.createElement(N.DatePicker, {
              initial: t,
              minDate: l,
              maxDate: u,
              inputReference: a,
              InputComponent: E,
              withCalendar: !1,
              onPick: function (e) {
                if (!e) return
                o(new Date(e))
              },
              revertInvalidData: !0,
              name: e.name,
              disabled: i,
            }),
          ),
        )
      }
      function E(e) {
        const { isActive: t, isFocused: a } = (0, r.useContext)(x)
        return r.createElement(z.DateInput, { ...e, highlight: t || a })
      }
      var w = a(36565)
      function L(e) {
        const { value: t, isDisabled: a, onPick: n, className: o } = e
        return r.createElement(w.TimeInput, {
          value:
            ((s = t),
            (0, i.twoDigitsFormat)(s.getHours()) +
              ':' +
              (0, i.twoDigitsFormat)(s.getMinutes())),
          onChange: n,
          disabled: a,
          className: o,
        })
        var s
      }
      var I = a(28746),
        O = a(30586)
      function P(e) {
        const { className: t, ...a } = e
        return r.createElement(I.Calendar, {
          ...a,
          className: f()(O.calendar, t),
          popupStyle: !1,
        })
      }
      function A(e, t) {
        const a = new Date(t)
        return (
          a.setFullYear(e.getFullYear()),
          a.setMonth(e.getMonth(), 1),
          a.setDate(e.getDate()),
          a
        )
      }
      function W(e, t) {
        const a = new Date(t)
        return a.setHours(e.getHours()), a.setMinutes(e.getMinutes()), a
      }
      function Y(e) {
        const { dateOnly: t, onCalendarMonthSwitch: a, hideTimePick: n } = e,
          { date: s, setDate: i } = (0, o.ensureNotNull)((0, r.useContext)(d)),
          l = (0, r.useRef)(null),
          u = (0, r.useRef)(null)
        return (
          (0, r.useEffect)(() => {
            R || null === u.current || u.current.focus()
          }, []),
          r.createElement(
            'div',
            { ref: l, tabIndex: -1 },
            r.createElement(
              T,
              null,
              r.createElement(C, {
                reference: function (e) {
                  u.current = e
                },
                value: new Date(s),
                onPick: function (e) {
                  const t = A(e, s)
                  i(t)
                },
                isActive: !R,
              }),
              !n &&
                r.createElement(L, {
                  value: new Date(s),
                  isDisabled: t,
                  onPick: function (e) {
                    var t
                    const [a, r] = e.split(':'),
                      n = new Date()
                    n.setHours(Number(a)), n.setMinutes(Number(r))
                    const o = W(n, s)
                    i(o),
                      R ||
                        null === (t = l.current) ||
                        void 0 === t ||
                        t.focus({ preventScroll: !0 })
                  },
                }),
            ),
            !R &&
              r.createElement(P, {
                key: `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`,
                selectedDate: new Date(s),
                onSelect: function (e) {
                  var t
                  const a = A(e, s)
                  i(a),
                    null === (t = l.current) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 })
                },
                onMonthSwitch: a,
                maxDate: new Date(),
              }),
          )
        )
      }
      function F(e) {
        const {
            dateOnly: t,
            onCalendarMonthSwitch: a,
            onDateInputFocus: n,
          } = e,
          {
            dateFrom: s,
            dateTo: i,
            setDateFrom: l,
            setDateTo: u,
          } = (0, o.ensureNotNull)((0, r.useContext)(m)),
          [c, d] = (0, r.useState)('from'),
          h = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          y = (0, r.useRef)(null),
          _ = (0, r.useMemo)(
            () => ('from' === c ? new Date(s) : new Date(i)),
            [c, i, s],
          )
        return (
          (0, r.useEffect)(() => {
            R || null === p.current || p.current.focus()
          }, []),
          r.createElement(
            'div',
            { ref: h, tabIndex: -1 },
            r.createElement(
              T,
              null,
              r.createElement(C, {
                value: s,
                reference: function (e) {
                  p.current = e
                },
                isActive: !R && 'from' === c,
                onPick: function (e) {
                  const t = A(e, s)
                  l(t)
                },
                onFocus: function () {
                  d('from'), n()
                },
                name: 'start-date-range',
              }),
              r.createElement(L, {
                value: s,
                isDisabled: t,
                onPick: function (e) {
                  f(e, s, l)
                },
              }),
            ),
            r.createElement(
              T,
              null,
              r.createElement(C, {
                value: i,
                reference: function (e) {
                  y.current = e
                },
                isActive: !R && 'to' === c,
                onPick: function (e) {
                  const t = A(e, i)
                  u(t)
                },
                onFocus: function () {
                  d('to'), n()
                },
                name: 'end-date-range',
              }),
              r.createElement(L, {
                value: i,
                isDisabled: t,
                onPick: function (e) {
                  f(e, i, u)
                },
              }),
            ),
            !R &&
              r.createElement(P, {
                key: `${_.getFullYear()}-${_.getMonth()}-${_.getDate()}`,
                selectedDate: new Date(_),
                onSelect: function (e) {
                  const t = A(e, 'from' === c ? s : i)
                  ;({
                    from: () => {
                      var e
                      l(t),
                        null === (e = y.current) ||
                          void 0 === e ||
                          e.focus({ preventScroll: !0 })
                    },
                    to: () => {
                      var e
                      u(t),
                        null === (e = h.current) ||
                          void 0 === e ||
                          e.focus({ preventScroll: !0 })
                    },
                  })[c]()
                },
                onMonthSwitch: a,
                highlightedFrom: new Date(s),
                highlightedTo: new Date(i),
                maxDate: 'from' === c ? new Date(i) : void 0,
                minDate: 'to' === c ? new Date(s) : void 0,
              }),
          )
        )
        function f(e, t, a) {
          var r
          const [n, o] = e.split(':'),
            s = new Date()
          s.setHours(Number(n)), s.setMinutes(Number(o))
          a(W(s, t)),
            R ||
              null === (r = h.current) ||
              void 0 === r ||
              r.focus({ preventScroll: !0 })
        }
      }
      var j = a(64378),
        H = a(90692),
        U = a(32563),
        B = a(13930)
      const R = U.mobiletouch,
        J = () => !0,
        K = [
          {
            label: y.t(null, void 0, a(76912)),
            id: 'Date',
            dataId: 'tab-item-date',
          },
          {
            label: y.t(null, void 0, a(74615)),
            id: 'CustomRange',
            dataId: 'tab-item-customrange',
          },
        ]
      function Q(e) {
        const { dateOnly: t, onClose: n, onGoToDate: s, onGoToRange: i } = e,
          l = (0, r.useRef)(null),
          [u, c] = (0, r.useState)(
            b().getValue('GoToDialog.activeTab', 'Date'),
          ),
          [h, p] = (0, r.useState)(0),
          { date: _, isValid: g } = (0, o.ensureNotNull)((0, r.useContext)(d)),
          {
            dateFrom: M,
            dateTo: T,
            isValid: N,
          } = (0, o.ensureNotNull)((0, r.useContext)(m))
        return (
          (0, r.useEffect)(
            () => (
              v.subscribe(S.CLOSE_POPUPS_AND_DIALOGS_COMMAND, E, null),
              () => {
                v.unsubscribe(S.CLOSE_POPUPS_AND_DIALOGS_COMMAND, E, null)
              }
            ),
            [n],
          ),
          (0, r.useEffect)(() => {
            null !== l.current && l.current()
          }, [h, u, _, M, T]),
          r.createElement(
            H.MatchMedia,
            { rule: D.DialogBreakpoints.TabletSmall },
            (e) =>
              r.createElement(k.AdaptiveConfirmDialog, {
                className: f()(B.dialogWrapper, e && B.dialogWrapperSmall),
                title: y.t(null, void 0, a(369)),
                dataName: 'go-to-date-dialog',
                render: z,
                defaultActionOnClose: 'cancel',
                onClose: E,
                onClickOutside: E,
                onCancel: E,
                onSubmit: C,
                submitButtonDisabled: x(),
                submitButtonText: y.t(null, void 0, a(369)),
                forceCloseOnEsc: J,
                shouldForceFocus: !1,
                fullScreen: e,
                isOpened: !0,
              }),
          )
        )
        function z({ requestResize: e }) {
          return (
            (l.current = e),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                'div',
                { className: B.tabs },
                r.createElement(j.UnderlineButtonTabs, {
                  id: 'go-to-date-tabs',
                  isActive: (e) => e.id === u,
                  items: K,
                  onActivate: w,
                  overflowBehaviour: 'scroll',
                }),
              ),
              r.createElement(
                'div',
                { className: f()(B.content, R && B.contentMobile) },
                r.createElement(
                  'div',
                  { className: B.bodyWrapper },
                  r.createElement(G, {
                    onCalendarMonthSwitch: L,
                    onDateInputFocus: L,
                    activeTab: u,
                    dateOnly: t,
                  }),
                ),
              ),
            )
          )
        }
        function x() {
          return { CustomRange: !N, Date: !g }[u]
        }
        function C() {
          switch (u) {
            case 'Date':
              s(_)
              break
            case 'CustomRange':
              i(M, T)
          }
        }
        function E() {
          n()
        }
        function w(e) {
          c(e.id), b().setValue('GoToDialog.activeTab', e.id)
        }
        function L() {
          p(h + 1)
        }
      }
      function G(e) {
        const {
          activeTab: t,
          dateOnly: a,
          onCalendarMonthSwitch: n,
          onDateInputFocus: o,
        } = e
        switch (t) {
          case 'Date':
            return r.createElement(Y, { dateOnly: a, onCalendarMonthSwitch: n })
          case 'CustomRange':
            return r.createElement(F, {
              dateOnly: a,
              onCalendarMonthSwitch: n,
              onDateInputFocus: o,
            })
        }
      }
      function V(e) {
        const {
          dateOnly: t,
          onClose: a,
          onGoToDate: n,
          onGoToRange: o,
          initialGoToDate: s,
          initialRanges: i,
        } = e
        return r.createElement(
          h,
          { initialGoToDate: s },
          r.createElement(
            p,
            { initialRanges: i },
            r.createElement(Q, {
              dateOnly: t,
              onClose: a,
              onGoToDate: n,
              onGoToRange: o,
            }),
          ),
        )
      }
      var Z = a(94025),
        $ = a(86094)
      const q = new (class {
        constructor() {
          this._hasError = !1
        }
        getItemOrDefault(e, t) {
          return !sessionStorage || this._hasError
            ? t
            : sessionStorage.getItem(e)
        }
        setItem(e, t = 'true') {
          try {
            sessionStorage.setItem(e, t), (this._hasError = !1)
          } catch (e) {
            this._hasError = !0
          }
        }
      })()
      var X = a(27365)
      const ee = 'goTo',
        te = new l.DialogsOpenerManager()
      function ae(e) {
        if (te.isOpened(ee)) return
        if (!e.hasModel()) return
        const t = e.model(),
          a = document.createElement('div'),
          o = r.createElement(V, {
            onClose: l,
            dateOnly: t.model().mainSeries().isDWM(),
            initialGoToDate: re(),
            initialRanges: ne(e),
            onGoToDate: (e) => {
              !(function (e, t) {
                q.setItem('goToDateTabLastPickedDate', String(t.valueOf()))
                if (void 0 === e.model().timeScale().tickMarks().minIndex)
                  return
                const a = (0, i.addLocalTime)(t).valueOf()
                e.model()
                  .gotoTime(a)
                  .then((t) => {
                    const a = e.model().mainSeries()
                    void 0 === t
                      ? a.clearGotoDateResult()
                      : a.setGotoDateResult(t)
                  })
              })(t, e),
                l()
            },
            onGoToRange: (t, a) => {
              !(function (e, t, a) {
                const r = (0, X.getTimezoneName)(e.model())
                if (!r) return
                const n = s.linking.interval.value(),
                  o = n && (0, Z.normalizeIntervalString)(n),
                  l = c().get_timezone(r),
                  d = (e) => (0, u.cal_to_utc)(l, new Date(e)),
                  h = (0, i.addLocalTime)(t).valueOf(),
                  m = (0, i.addLocalTime)(a).valueOf(),
                  p = {
                    val: {
                      type: 'time-range',
                      from: d(h) / 1e3,
                      to: d(m) / 1e3,
                    },
                    res: o,
                  }
                e.chartWidgetCollection().setTimeFrame(p)
              })(e, t, a),
                l()
            },
          })
        function l() {
          n.unmountComponentAtNode(a), te.setAsClosed(ee)
        }
        n.render(o, a), te.setAsOpened(ee)
      }
      function re() {
        const e = q.getItemOrDefault('goToDateTabLastPickedDate', null)
        return null === e
          ? (0, i.resetToDayStart)(new Date())
          : new Date(Number(e))
      }
      function ne(e) {
        const t = (function (e) {
          const t = e.model().timeScale(),
            a = t.visibleBarsStrictRange()
          if (null === a) return
          const r = e.model().mainSeries(),
            n = r.nearestIndex(a.firstBar(), $.PlotRowSearchMode.NearestRight),
            s = r.nearestIndex(a.lastBar(), $.PlotRowSearchMode.NearestLeft)
          if (void 0 === n || void 0 === s) return
          return {
            from: (0, o.ensureNotNull)(t.indexToUserTime(n)),
            to: (0, o.ensureNotNull)(t.indexToUserTime(s)),
          }
        })(e)
        return t
          ? {
              from: (0, i.subtractLocalTime)(t.from),
              to: (0, i.subtractLocalTime)(t.to),
            }
          : {
              from: (0, i.subtractLocalTime)(new Date()),
              to: (0, i.subtractLocalTime)(new Date()),
            }
      }
    },
    2948: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M5.5 6.44a.75.75 0 1 0-1 1.12l1-1.12zM9 10.5l-.5.56c.29.25.71.25 1 0L9 10.5zm4.5-2.94a.75.75 0 0 0-1-1.12l1 1.12zm-9 0l4 3.5 1-1.12-4-3.5-1 1.12zm5 3.5l4-3.5-1-1.12-4 3.5 1 1.12z"/></svg>'
    },
    7720: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
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
    52051: (e) => {
      e.exports = {
        ar: ['الأجندة حاليًا في عام {year}'],
        ca_ES: 'Calendar is currently on year {year}',
        cs: 'Calendar is currently on year {year}',
        de: ['Kalender steht derzeit auf Jahr {year}'],
        el: 'Calendar is currently on year {year}',
        en: 'Calendar is currently on year {year}',
        es: ['En este momento el calendario muestra el año {year}'],
        fa: 'Calendar is currently on year {year}',
        fr: ["Le calendrier est actuellement sur l'année {year}"],
        he_IL: ['לוח השנה הוא כרגע בשנה {year}'],
        hu_HU: 'Calendar is currently on year {year}',
        id_ID: ['Kalender saat ini berada pada tahun {year}'],
        it: ["Il calendario è attualmente all'anno {year}"],
        ja: ['カレンダーは現在{year}年です'],
        ko: ['캘린더는 현재 {year} 년입니다.'],
        ms_MY: ['Kalendar sekarang pada tahun {year}'],
        nl_NL: 'Calendar is currently on year {year}',
        pl: ['Kalendarz jest obecnie na roku {year}'],
        pt: ['O calendário está atualmente no ano de {year}'],
        ro: 'Calendar is currently on year {year}',
        ru: ['Сейчас на календаре {year} год'],
        sv: ['Kalendern är för närvarande inställd på år {year}'],
        th: ['ขณะนี้ปฏิทินอยู่ในปี{year}'],
        tr: ['Takvimde şu anda {year} açık'],
        vi: ['Lịch hiện đang ở năm {year}'],
        zh: ['日历目前在{year}年'],
        zh_TW: ['日曆目前在{year}年'],
      }
    },
    99990: (e) => {
      e.exports = {
        ar: ['الأجندة حاليًا في السنوات من {year_start} إلى {year_end}'],
        ca_ES: 'Calendar is currently on years from {year_start} to {year_end}',
        cs: 'Calendar is currently on years from {year_start} to {year_end}',
        de: [
          'Kalender steht derzeit auf den Jahren von {year_start} bis {year_end}',
        ],
        el: 'Calendar is currently on years from {year_start} to {year_end}',
        en: 'Calendar is currently on years from {year_start} to {year_end}',
        es: [
          'En este momento el calendario comprende los años entre {year_start} y {year_end}',
        ],
        fa: 'Calendar is currently on years from {year_start} to {year_end}',
        fr: [
          'Le calendrier est actuellement sur les années de {year_start} à {year_end}',
        ],
        he_IL: ['היומן פועל כעת על שנים מ-{year_start} עד {year_end}'],
        hu_HU: 'Calendar is currently on years from {year_start} to {year_end}',
        id_ID: [
          'Kalender saat ini berada pada tahun dari {year_start} hingga {year_end}',
        ],
        it: [
          'Il calendario è attualmente sugli anni da {year_start} a {year_end}',
        ],
        ja: ['カレンダーは現在{year_start}年から{year_end}年までです'],
        ko: ['캘린더는 현재 {year_start}부터 {year_end}까지 연도입니다.'],
        ms_MY: ['Kalendar sekarang pada tahun dari {year_start} ke {year_end}'],
        nl_NL: 'Calendar is currently on years from {year_start} to {year_end}',
        pl: ['Kalendarz obejmuje obecnie lata od {year_start} do {year_end}'],
        pt: [
          'O calendário está atualmente entre os anos de {year_start} até {year_end}',
        ],
        ro: 'Calendar is currently on years from {year_start} to {year_end}',
        ru: [
          'Сейчас на календаре выбран период с {year_start} до {year_end} года',
        ],
        sv: [
          'Kalendern är för närvarande inställd på år, från {year_start} till {year_end}',
        ],
        th: ['ขณะนี้ปฏิทินเป็นปีตั้งแต่ {year_start} ถึง {year_end}'],
        tr: [
          'Takvim şu anda {year_start} ile {year_end} arasındaki yılları göstermektedir',
        ],
        vi: ['Lịch hiện tại ở các năm từ {year_start} đến {year_end}'],
        zh: ['日历当前是从{year_start}到{year_end}年'],
        zh_TW: ['日曆當前是從{year_start}年到{year_end}年'],
      }
    },
    92702: (e) => {
      e.exports = {
        ar: ['الأجندة حاليًا في شهر {month}'],
        ca_ES: 'Calendar is currently on {month}',
        cs: 'Calendar is currently on {month}',
        de: ['Kalender steht derzeit auf {month}'],
        el: 'Calendar is currently on {month}',
        en: 'Calendar is currently on {month}',
        es: ['En este momento el calendario muestra el mes de {month}'],
        fa: 'Calendar is currently on {month}',
        fr: ['Le calendrier est actuellement sur {month}'],
        he_IL: ['היומן נמצא כרגע ב-{month}'],
        hu_HU: 'Calendar is currently on {month}',
        id_ID: ['Kalender saat ini berada pada bulan {month}'],
        it: ['Il calendario è attualmente su {month}'],
        ja: ['カレンダーは現在{month}月です'],
        ko: ['캘린더는 현재 {month} 입니다.'],
        ms_MY: ['Kalendar sekarang pada {month}'],
        nl_NL: 'Calendar is currently on {month}',
        pl: ['Kalendarz jest obecnie na {month}'],
        pt: ['O calendário está atualmente em {month}'],
        ro: 'Calendar is currently on {month}',
        ru: ['Сейчас на календаре {month}'],
        sv: ['Kalender är för närvarande på {month}'],
        th: ['ขณะนี้ปฏิทินอยู่ที่{month}'],
        tr: ['Takvimde şu an {month} açık'],
        vi: ['Lịch hiện đang ở tháng {month}'],
        zh: ['日历目前在{month}月'],
        zh_TW: ['日曆目前在{month}月'],
      }
    },
    20036: (e) => {
      e.exports = {
        ar: ['إلغاء'],
        ca_ES: ['Cancel·la'],
        cs: ['Zrušit'],
        de: ['Abbrechen'],
        el: ['Άκυρο'],
        en: 'Cancel',
        es: ['Cancelar'],
        fa: ['لغو'],
        fr: ['Annuler'],
        he_IL: ['ביטול'],
        hu_HU: ['Törlés'],
        id_ID: ['Batal'],
        it: ['Annulla'],
        ja: ['キャンセル'],
        ko: ['취소'],
        ms_MY: ['Batal'],
        nl_NL: ['Annuleren'],
        pl: ['Anuluj'],
        pt: ['Cancelar'],
        ro: 'Cancel',
        ru: ['Отмена'],
        sv: ['Avbryt'],
        th: ['ยกเลิก'],
        tr: ['İptal'],
        vi: ['Hủy bỏ'],
        zh: ['取消'],
        zh_TW: ['取消'],
      }
    },
    74615: (e) => {
      e.exports = {
        ar: ['نطاق مخصّص'],
        ca_ES: ['Rang personalitzat'],
        cs: 'Custom range',
        de: ['Benutzerdefinierter Bereich'],
        el: 'Custom range',
        en: 'Custom range',
        es: ['Rango personalizado'],
        fa: 'Custom range',
        fr: ['Plage personnalisée'],
        he_IL: ['טווח בהתאמה אישית'],
        hu_HU: 'Custom range',
        id_ID: ['Rentang khusus'],
        it: ['Range personalizzato'],
        ja: ['カスタム範囲'],
        ko: ['커스텀 레인지'],
        ms_MY: ['Julat tersuai'],
        nl_NL: 'Custom range',
        pl: ['Zakres niestandardowy'],
        pt: ['Intervalo personalizado'],
        ro: 'Custom range',
        ru: ['Задать диапазон'],
        sv: ['Välj period'],
        th: ['ระยะบาร์แบบกำหนดเอง'],
        tr: ['Özel aralık'],
        vi: ['Phạm vi tùy chỉnh'],
        zh: ['自定义范围'],
        zh_TW: ['自訂範圍'],
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
    369: (e) => {
      e.exports = {
        ar: ['الذهاب إلى'],
        ca_ES: ['Anar a'],
        cs: 'Go to',
        de: ['Gehe zu'],
        el: 'Go to',
        en: 'Go to',
        es: ['Ir a'],
        fa: ['برو به'],
        fr: ['Aller à'],
        he_IL: ['עבור ל'],
        hu_HU: ['Ugrás ide:'],
        id_ID: ['Menuju ke'],
        it: ['Vai a'],
        ja: ['移動'],
        ko: ['가기'],
        ms_MY: ['Pergi ke'],
        nl_NL: 'Go to',
        pl: ['Idź do...'],
        pt: ['Ir para'],
        ro: 'Go to',
        ru: ['Перейти к дате'],
        sv: ['Gå till'],
        th: ['ไปที่'],
        tr: ['Tarihe git'],
        vi: ['Đến'],
        zh: ['前往到'],
        zh_TW: ['前往到'],
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
    68988: (e) => {
      e.exports = {
        ar: ['موافق'],
        ca_ES: ['Acceptar'],
        cs: 'Ok',
        de: 'Ok',
        el: 'Ok',
        en: 'Ok',
        es: ['Aceptar'],
        fa: 'Ok',
        fr: ["D'accord"],
        he_IL: ['אוקיי'],
        hu_HU: ['Oké'],
        id_ID: 'Ok',
        it: 'Ok',
        ja: ['OK'],
        ko: ['확인'],
        ms_MY: 'Ok',
        nl_NL: 'Ok',
        pl: 'Ok',
        pt: 'Ok',
        ro: 'Ok',
        ru: ['Ок'],
        sv: ['OK'],
        th: ['ตกลง'],
        tr: ['Tamam'],
        vi: 'Ok',
        zh: ['确认'],
        zh_TW: ['確認'],
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
    95543: (e) => {
      e.exports = {
        ar: ['الشهور'],
        ca_ES: ['Mesos'],
        cs: 'Months',
        de: ['Monate'],
        el: 'Months',
        en: 'Months',
        es: ['Meses'],
        fa: 'Months',
        fr: ['Mois'],
        he_IL: ['חודשים'],
        hu_HU: ['Hónapok'],
        id_ID: ['Bulan'],
        it: ['Mesi'],
        ja: ['月'],
        ko: ['달'],
        ms_MY: ['Bulan'],
        nl_NL: 'Months',
        pl: ['Miesiące'],
        pt: ['Meses'],
        ro: 'Months',
        ru: ['Месяцы'],
        sv: ['Månader'],
        th: ['เดือน'],
        tr: ['Aylar'],
        vi: ['Tháng'],
        zh: ['个月'],
        zh_TW: ['個月'],
      }
    },
    41610: (e) => {
      e.exports = {
        ar: ['المزيد'],
        ca_ES: ['Més'],
        cs: ['Více'],
        de: ['Mehr'],
        el: 'More',
        en: 'More',
        es: ['Más'],
        fa: ['بیشتر'],
        fr: ['Plus'],
        he_IL: ['עוד'],
        hu_HU: ['Több'],
        id_ID: ['Lebih lanjut'],
        it: ['Altro'],
        ja: ['詳細'],
        ko: ['더보기'],
        ms_MY: ['Lebih'],
        nl_NL: ['Meer'],
        pl: ['Więcej'],
        pt: ['Mais'],
        ro: 'More',
        ru: ['Ещё'],
        sv: ['Mer'],
        th: ['เพิ่มเติม'],
        tr: ['Daha Fazla'],
        vi: ['Thêm nữa'],
        zh: ['更多'],
        zh_TW: ['更多'],
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
    83771: (e) => {
      e.exports = {
        ar: ['العام القادم'],
        ca_ES: ['Pròxim any'],
        cs: 'Next year',
        de: ['Nächstes Jahr'],
        el: 'Next year',
        en: 'Next year',
        es: ['Próximo año'],
        fa: 'Next year',
        fr: ['Année suivante'],
        he_IL: ['שנה הבאה'],
        hu_HU: 'Next year',
        id_ID: ['Tahun depan'],
        it: ['Anno prossimo'],
        ja: ['翌年'],
        ko: ['다음 해'],
        ms_MY: ['Tahun hadapan'],
        nl_NL: 'Next year',
        pl: ['Następny rok'],
        pt: ['Próximo ano'],
        ro: 'Next year',
        ru: ['Следующий год'],
        sv: ['Nästa år'],
        th: ['ปีถัดไป'],
        tr: ['Sonraki yıl'],
        vi: ['Năm sau'],
        zh: ['下一年'],
        zh_TW: ['明年'],
      }
    },
    75385: (e) => {
      e.exports = {
        ar: ['السنوات القادمة'],
        ca_ES: ['Pròxims anys'],
        cs: 'Next years',
        de: ['Nächste Jahre'],
        el: 'Next years',
        en: 'Next years',
        es: ['Próximos años'],
        fa: 'Next years',
        fr: ['Années suivantes'],
        he_IL: ['שנים הבאות'],
        hu_HU: 'Next years',
        id_ID: ['Tahun mendatang'],
        it: ['Anni prossimi'],
        ja: ['次の年'],
        ko: ['다음 해들'],
        ms_MY: ['Tahun-tahun hadapan'],
        nl_NL: 'Next years',
        pl: ['Następne lata'],
        pt: ['Próximos anos'],
        ro: 'Next years',
        ru: ['Следующие годы'],
        sv: ['Kommande år'],
        th: ['ปีถัดไป'],
        tr: ['Sonraki yıllar'],
        vi: ['Năm sau'],
        zh: ['未来几年'],
        zh_TW: ['未來幾年'],
      }
    },
    39752: (e) => {
      e.exports = {
        ar: ['الشهر القادم'],
        ca_ES: ['Pròxim mes'],
        cs: 'Next month',
        de: ['Nächster Monat'],
        el: 'Next month',
        en: 'Next month',
        es: ['Próximo mes'],
        fa: 'Next month',
        fr: ['Mois suivant'],
        he_IL: ['חודש הבא'],
        hu_HU: 'Next month',
        id_ID: ['Bulan depan'],
        it: ['Mese prossimo'],
        ja: ['翌月'],
        ko: ['다음 달'],
        ms_MY: ['Bulan hadapan'],
        nl_NL: 'Next month',
        pl: ['Następny miesiąc'],
        pt: ['Próximo mês'],
        ro: 'Next month',
        ru: ['Следующий месяц'],
        sv: ['Nästa månad'],
        th: ['เดือนถัดไป'],
        tr: ['Sonraki ay'],
        vi: ['Tháng sau'],
        zh: ['下一个月'],
        zh_TW: ['下個月'],
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
    83583: (e) => {
      e.exports = {
        ar: ['قم بالتبديل إلى الأشهر'],
        ca_ES: ['Canvieu a mesos'],
        cs: 'Switch to months',
        de: ['Zu Monaten wechseln'],
        el: 'Switch to months',
        en: 'Switch to months',
        es: ['Cambie a meses'],
        fa: 'Switch to months',
        fr: ['Passer en mois'],
        he_IL: ['עבור לחודשים'],
        hu_HU: 'Switch to months',
        id_ID: ['Beralih ke bulan'],
        it: ['Passa ai mesi'],
        ja: ['月に切り替え'],
        ko: ['달로 바꾸기'],
        ms_MY: ['Tukar ke bulan'],
        nl_NL: 'Switch to months',
        pl: ['Przełącz na miesiące'],
        pt: ['Mudar para meses'],
        ro: 'Switch to months',
        ru: ['Переключиться на месяцы'],
        sv: ['Byt till månader'],
        th: ['เปลี่ยนเป็นเดือน'],
        tr: ['Ay düzenine geç'],
        vi: ['Chuyển sang tháng'],
        zh: ['切换到月'],
        zh_TW: ['切換到月份'],
      }
    },
    6244: (e) => {
      e.exports = {
        ar: ['التبديل إلى التواريخ'],
        ca_ES: ['Canvieu a dates'],
        cs: 'Switch to dates',
        de: ['Zu Daten wechseln'],
        el: 'Switch to dates',
        en: 'Switch to dates',
        es: ['Cambie a fechas'],
        fa: 'Switch to dates',
        fr: ['Passer en dates'],
        he_IL: ['עבור לתאריכים'],
        hu_HU: 'Switch to dates',
        id_ID: ['Beralih ke tanggal'],
        it: ['Passa alle date'],
        ja: ['日に切り替え'],
        ko: ['날짜로 바꾸기'],
        ms_MY: ['Tukar ke tarikh'],
        nl_NL: 'Switch to dates',
        pl: ['Przełącz na daty'],
        pt: ['Mudar para datas'],
        ro: 'Switch to dates',
        ru: ['Переключиться на даты'],
        sv: ['Byt till datum'],
        th: ['เปลี่ยนเป็นวัน'],
        tr: ['Tarih düzenine geç'],
        vi: ['Chuyển sang ngày tháng'],
        zh: ['切换到日期'],
        zh_TW: ['切換到日期'],
      }
    },
    80879: (e) => {
      e.exports = {
        ar: ['التحول إلى السنوات'],
        ca_ES: ['Canvieu a anys'],
        cs: 'Switch to years',
        de: ['Zu Jahren wechseln'],
        el: 'Switch to years',
        en: 'Switch to years',
        es: ['Cambie a años'],
        fa: 'Switch to years',
        fr: ['Passer en années'],
        he_IL: ['עבור לשנים'],
        hu_HU: 'Switch to years',
        id_ID: ['Beralih ke tahun'],
        it: ['Passa agli anni'],
        ja: ['年に切り替え'],
        ko: ['해로 바꾸기'],
        ms_MY: ['Tukar ke tahun'],
        nl_NL: 'Switch to years',
        pl: ['Przełącz na lata'],
        pt: ['Mudar para anos'],
        ro: 'Switch to years',
        ru: ['Переключиться на годы'],
        sv: ['Byt till år'],
        th: ['เปลี่ยนเป็นปี'],
        tr: ['Yıl düzenine geç'],
        vi: ['Chuyển sang năm'],
        zh: ['切换到年'],
        zh_TW: ['切換到年'],
      }
    },
    32457: (e) => {
      e.exports = {
        ar: ['الرجاء إدخال التاريخ بالشكل الصحيح'],
        ca_ES: ['Intoduïu la data correcta'],
        cs: 'Please enter the right date',
        de: ['Bitte geben Sie das richtige Datum ein'],
        el: 'Please enter the right date',
        en: 'Please enter the right date',
        es: ['Introduzca la fecha correcta'],
        fa: 'Please enter the right date',
        fr: ['Veuillez saisir la bonne date'],
        he_IL: ['אנא הזן את התאריך הנכון'],
        hu_HU: 'Please enter the right date',
        id_ID: ['Harap masukkan tanggal yang tepat'],
        it: ['Inserisci la data corretta'],
        ja: ['適切な日付を入力して下さい'],
        ko: ['올바른 날짜를 넣으십시오'],
        ms_MY: ['Sila masukkan tarikh yang betul'],
        nl_NL: 'Please enter the right date',
        pl: ['Wprowadź prawidłową datę'],
        pt: ['Por favor, insira a data correta'],
        ro: 'Please enter the right date',
        ru: ['Введите правильную дату'],
        sv: ['Vänligen ange rätt datum'],
        th: ['กรุณาใส่วันที่ที่ถูกต้อง'],
        tr: ['Lütfen doğru tarihi girin'],
        vi: ['Vui lòng nhập đúng ngày'],
        zh: ['请输入正确的日期'],
        zh_TW: ['請輸入正確的日期'],
      }
    },
    5122: (e) => {
      e.exports = {
        ar: ['الرجاء إدخال التاريخ بالشكل الصحيح يوم- شهر- سنة'],
        ca_ES: ['Escriviu el format de data correcte: aaaa-mm-dd'],
        cs: 'Please enter the right date format yyyy-mm-dd',
        de: ['Bitte geben Sie das korrekte Datumsformat ein yyyy-mm-dd'],
        el: 'Please enter the right date format yyyy-mm-dd',
        en: 'Please enter the right date format yyyy-mm-dd',
        es: ['Escriba el formato de fecha correcto aaaa-mm-dd'],
        fa: 'Please enter the right date format yyyy-mm-dd',
        fr: ['Veuillez entrer le bon format de date aaaa-mm-jj'],
        he_IL: ['נא הזן את פורמט התאריך הנכון yyyy-mm-dd'],
        hu_HU: 'Please enter the right date format yyyy-mm-dd',
        id_ID: ['Harap masukkan format tanggal yang benar yyyy-mm-dd'],
        it: ['Inserisci la data nel formato corretto: aaaa-mm-gg'],
        ja: ['正しい日付の形式 (yyyy-mm-dd) を入力してください'],
        ko: ['올바른 날짜 포맷인 yyyy-mm-dd 으로 넣으십시오'],
        ms_MY: ['Sila masukkan format tarikh yang betul yyyy-mm-dd'],
        nl_NL: 'Please enter the right date format yyyy-mm-dd',
        pl: ['Wprowadź datę w formacie rrrr-mm-dd'],
        pt: ['Por favor, insira o formato de data correto aaaa-mm-dd'],
        ro: 'Please enter the right date format yyyy-mm-dd',
        ru: ['Укажите правильный формат даты — гггг-мм-дд'],
        sv: ['Vänligen ange rätt datumformat yyyy-mm-dd'],
        th: ['กรุณาใส่วันที่ถูกตัองในรูปแบบ ปี-เดือน-วัน'],
        tr: ['Lütfen doğru formatta tarih girin yyyy-aa-gg'],
        vi: ['Vui lòng hãy nhập đúng định dạng ngày tháng năm-tháng-ngày'],
        zh: ['请输入正确的日期格式 yyyy-mm-dd'],
        zh_TW: ['請輸入正確的日期格式 yyyy-mm-dd'],
      }
    },
    2587: (e) => {
      e.exports = {
        ar: ['الشهر السابق'],
        ca_ES: ['Mes anterior'],
        cs: 'Previous month',
        de: ['Vorheriger Monat'],
        el: 'Previous month',
        en: 'Previous month',
        es: ['Mes anterior'],
        fa: 'Previous month',
        fr: ['Mois précédent'],
        he_IL: ['חודש שעבר'],
        hu_HU: 'Previous month',
        id_ID: ['Bulan sebelumnya'],
        it: ['Mese passato'],
        ja: ['前月'],
        ko: ['앞 달'],
        ms_MY: ['Bulan sebelumnya'],
        nl_NL: 'Previous month',
        pl: ['Poprzedni miesiąc'],
        pt: ['Mês anterior'],
        ro: 'Previous month',
        ru: ['Предыдущий месяц'],
        sv: ['Förra månaden'],
        th: ['เดือนก่อนหน้านี้'],
        tr: ['Önceki ay'],
        vi: ['Tháng trước'],
        zh: ['上一个月'],
        zh_TW: ['上個月'],
      }
    },
    39329: (e) => {
      e.exports = {
        ar: ['السنة الماضية'],
        ca_ES: ['Any anterior'],
        cs: 'Previous year',
        de: ['Vorheriges Jahr'],
        el: 'Previous year',
        en: 'Previous year',
        es: ['Año anterior'],
        fa: 'Previous year',
        fr: ['Année précédente'],
        he_IL: ['שנה קודמת'],
        hu_HU: 'Previous year',
        id_ID: ['Tahun sebelumnya'],
        it: ['Anno passato'],
        ja: ['前年'],
        ko: ['앞 해'],
        ms_MY: ['Tahun sebelumnya'],
        nl_NL: 'Previous year',
        pl: ['Poprzedni rok'],
        pt: ['Ano anterior'],
        ro: 'Previous year',
        ru: ['Предыдущий год'],
        sv: ['Förra året'],
        th: ['ปีก่อนหน้า'],
        tr: ['Önceki yıl'],
        vi: ['Năm trước'],
        zh: ['上一年'],
        zh_TW: ['去年'],
      }
    },
    27004: (e) => {
      e.exports = {
        ar: ['السنوات السابقة'],
        ca_ES: ['Anys anteriors'],
        cs: 'Previous years',
        de: ['Frühere Jahre'],
        el: 'Previous years',
        en: 'Previous years',
        es: ['Años anteriores'],
        fa: 'Previous years',
        fr: ['Années précédentes'],
        he_IL: ['שנים קודמות'],
        hu_HU: 'Previous years',
        id_ID: ['Tahun-tahun sebelumnya'],
        it: ['Anni passati'],
        ja: ['前の年'],
        ko: ['앞선 해들'],
        ms_MY: ['Tahun-tahun sebelumnya'],
        nl_NL: 'Previous years',
        pl: ['Poprzedni rok'],
        pt: ['Anos anteriores'],
        ro: 'Previous years',
        ru: ['Предыдущие годы'],
        sv: ['Föregående år'],
        th: ['ปีก่อนหน้านี้'],
        tr: ['Önceki yıllar'],
        vi: ['Năm trước'],
        zh: ['往年'],
        zh_TW: ['昔年'],
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
    69325: (e) => {
      e.exports = {
        ar: ['الأعوام'],
        ca_ES: ['Anys'],
        cs: 'Years',
        de: ['Jahre'],
        el: 'Years',
        en: 'Years',
        es: ['Años'],
        fa: 'Years',
        fr: ['Années'],
        he_IL: ['שנים'],
        hu_HU: 'Years',
        id_ID: ['Tahun'],
        it: ['Anni'],
        ja: ['年'],
        ko: ['해'],
        ms_MY: ['Tahun'],
        nl_NL: 'Years',
        pl: ['Lata'],
        pt: ['Anos'],
        ro: 'Years',
        ru: ['Годы'],
        sv: ['År'],
        th: ['ปี'],
        tr: ['Yıllar'],
        vi: ['Năm'],
        zh: ['年'],
        zh_TW: ['年'],
      }
    },
  },
])
