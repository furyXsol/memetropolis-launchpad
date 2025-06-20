;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4013],
  {
    23428: (e) => {
      e.exports = {
        button: 'button-PYEOTd6i',
        disabled: 'disabled-PYEOTd6i',
        hidden: 'hidden-PYEOTd6i',
        icon: 'icon-PYEOTd6i',
        dropped: 'dropped-PYEOTd6i',
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
    66986: (e) => {
      e.exports = {
        button: 'button-tFul0OhX',
        'button-children': 'button-children-tFul0OhX',
        hiddenArrow: 'hiddenArrow-tFul0OhX',
        invisibleFocusHandler: 'invisibleFocusHandler-tFul0OhX',
      }
    },
    60673: (e) => {
      e.exports = { placeholder: 'placeholder-V6ceS6BN' }
    },
    45719: (e) => {
      e.exports = { separator: 'separator-Pf4rIzEt' }
    },
    86332: (e, t, n) => {
      'use strict'
      n.d(t, { ControlGroupContext: () => o })
      const o = n(50959).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      })
    },
    36104: (e, t, n) => {
      'use strict'
      n.d(t, { useControlDisclosure: () => l })
      var o = n(7953)
      function l(e) {
        const { intent: t, highlight: n, ...l } = e,
          { isFocused: r, ...i } = (0, o.useDisclosure)(l)
        return {
          ...i,
          isFocused: r,
          highlight: null != n ? n : r,
          intent: null != t ? t : r ? 'primary' : 'default',
        }
      }
    },
    53017: (e, t, n) => {
      'use strict'
      function o(e) {
        return (t) => {
          e.forEach((e) => {
            'function' == typeof e ? e(t) : null != e && (e.current = t)
          })
        }
      }
      function l(e) {
        return o([e])
      }
      n.d(t, { isomorphicRef: () => l, mergeRefs: () => o })
    },
    35057: (e, t, n) => {
      'use strict'
      n.d(t, { AdaptivePopupDialog: () => N })
      var o = n(50959),
        l = n(50151)
      var r = n(97754),
        i = n.n(r),
        s = n(68335),
        a = n(38223),
        d = n(35749),
        c = n(63016),
        u = n(1109),
        p = n(24437),
        h = n(90692),
        m = n(95711)
      var f = n(52092),
        b = n(76422),
        v = n(9745)
      const g = o.createContext({ setHideClose: () => {} })
      var C = n(7720),
        _ = n(69827)
      function E(e) {
        const {
            title: t,
            titleTextWrap: n = !1,
            subtitle: l,
            showCloseIcon: r = !0,
            onClose: s,
            onCloseButtonKeyDown: a,
            renderBefore: d,
            renderAfter: c,
            draggable: u,
            className: p,
            unsetAlign: h,
            closeAriaLabel: m,
            closeButtonReference: f,
          } = e,
          [b, E] = (0, o.useState)(!1)
        return o.createElement(
          g.Provider,
          { value: { setHideClose: E } },
          o.createElement(
            'div',
            { className: i()(_.container, p, (l || h) && _.unsetAlign) },
            d,
            o.createElement(
              'div',
              { 'data-dragg-area': u, className: _.title },
              o.createElement(
                'div',
                { className: i()(n ? _.textWrap : _.ellipsis) },
                t,
              ),
              l &&
                o.createElement(
                  'div',
                  { className: i()(_.ellipsis, _.subtitle) },
                  l,
                ),
            ),
            c,
            r &&
              !b &&
              o.createElement(
                'button',
                {
                  className: _.close,
                  onClick: s,
                  onKeyDown: a,
                  'data-name': 'close',
                  'aria-label': m,
                  type: 'button',
                  ref: f,
                },
                o.createElement(v.Icon, {
                  className: _.icon,
                  icon: C,
                  'data-name': 'close',
                  'data-role': 'button',
                }),
              ),
          ),
        )
      }
      var x = n(53017),
        w = n(90186),
        O = n(55596)
      const A = { vertical: 20 },
        y = { vertical: 0 }
      class N extends o.PureComponent {
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
                    window.matchMedia(p.DialogBreakpoints.TabletSmall).matches,
                )
            }),
            (this._handleKeyDown = (e) => {
              if (!e.defaultPrevented) {
                if (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  27 === (0, s.hashFromEvent)(e))
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
                  const { activeElement: n } = document,
                    o = (0, l.ensureNotNull)(this._reference)
                  if (null !== n) {
                    if (
                      (e.preventDefault(),
                      'true' === (t = n).getAttribute('data-haspopup') &&
                        'true' !== t.getAttribute('data-expanded'))
                    )
                      return void this._handleClose()
                    if ((0, d.isTextEditingField)(n)) return void o.focus()
                    if (o.contains(n))
                      return (
                        this.props.onKeyboardClose &&
                          this.props.onKeyboardClose(),
                        void this._handleClose()
                      )
                  }
                }
                var t, n
                ;(function (e) {
                  if ('function' == typeof e) return e()
                  return Boolean(e)
                })(this.props.disableTabNavigationContainment) ||
                  ((n = e),
                  [9, s.Modifiers.Shift + 9].includes(
                    (0, s.hashFromEvent)(n),
                  ) && n.stopPropagation())
              }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds()
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit()
            }),
            (this._calculatePositionWithOffsets = (e, t) => {
              const n = (0, l.ensureDefined)(
                this.props.fullScreenViewOffsets,
              ).value()
              return {
                top: n.top,
                left: (0, a.isRtl)() ? -n.right : n.left,
                width: t.clientWidth - n.left - n.right,
                height: t.clientHeight - n.top - n.bottom,
              }
            })
        }
        componentDidMount() {
          var e, t
          this.props.ignoreClosePopupsAndDialog ||
            b.subscribe(
              f.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
            b.unsubscribe(
              f.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
          ;(0, l.ensureNotNull)(this._reference).focus()
        }
        getElement() {
          return this._reference
        }
        contains(e) {
          var t, n
          return (
            null !==
              (n =
                null === (t = this._reference) || void 0 === t
                  ? void 0
                  : t.contains(e)) &&
            void 0 !== n &&
            n
          )
        }
        render() {
          const {
              className: e,
              wrapperClassName: t,
              headerClassName: n,
              isOpened: l,
              title: r,
              titleTextWrap: s,
              dataName: a,
              onClickOutside: d,
              additionalElementPos: f,
              additionalHeaderElement: b,
              backdrop: v,
              shouldForceFocus: g = !0,
              shouldReturnFocus: C,
              onForceFocus: _,
              showSeparator: N,
              subtitle: T,
              draggable: I = !0,
              fullScreen: k = !1,
              showCloseIcon: S = !0,
              rounded: D = !0,
              isAnimationEnabled: L,
              growPoint: M,
              dialogTooltip: B,
              unsetHeaderAlign: z,
              onDragStart: K,
              dataDialogName: F,
              closeAriaLabel: P,
              containerAriaLabel: R,
              reference: W,
              containerTabIndex: H,
              closeButtonReference: U,
              onCloseButtonKeyDown: V,
              shadowed: G,
              fullScreenViewOffsets: Y,
            } = this.props,
            Z = 'after' !== f ? b : void 0,
            j = 'after' === f ? b : void 0,
            X = 'string' == typeof r ? r : F || '',
            q = (0, w.filterDataProps)(this.props),
            Q = (0, x.mergeRefs)([this._handleReference, W])
          return o.createElement(
            h.MatchMedia,
            { rule: p.DialogBreakpoints.SmallHeight },
            (f) =>
              o.createElement(
                h.MatchMedia,
                { rule: p.DialogBreakpoints.TabletSmall },
                (p) =>
                  o.createElement(
                    c.PopupDialog,
                    {
                      rounded: !(p || k) && D,
                      className: i()(O.dialog, k && Y && O.bounded, e),
                      isOpened: l,
                      reference: Q,
                      onKeyDown: this._handleKeyDown,
                      onClickOutside: d,
                      onClickBackdrop: d,
                      fullscreen: p || k,
                      guard: f ? y : A,
                      boundByScreen: p || k,
                      shouldForceFocus: g,
                      onForceFocus: _,
                      shouldReturnFocus: C,
                      backdrop: v,
                      draggable: I,
                      isAnimationEnabled: L,
                      growPoint: M,
                      name: this.props.dataName,
                      dialogTooltip: B,
                      onDragStart: K,
                      containerAriaLabel: R,
                      containerTabIndex: H,
                      calculateDialogPosition:
                        k && Y ? this._calculatePositionWithOffsets : void 0,
                      shadowed: G,
                      ...q,
                    },
                    o.createElement(
                      'div',
                      {
                        className: i()(O.wrapper, t),
                        'data-name': a,
                        'data-dialog-name': X,
                      },
                      void 0 !== r &&
                        o.createElement(E, {
                          draggable: I && !(p || k),
                          onClose: this._handleCloseBtnClick,
                          renderAfter: j,
                          renderBefore: Z,
                          subtitle: T,
                          title: r,
                          titleTextWrap: s,
                          showCloseIcon: S,
                          className: n,
                          unsetAlign: z,
                          closeAriaLabel: P,
                          closeButtonReference: U,
                          onCloseButtonKeyDown: V,
                        }),
                      N &&
                        o.createElement(u.Separator, {
                          className: O.separator,
                        }),
                      o.createElement(m.PopupContext.Consumer, null, (e) =>
                        this._renderChildren(e, p || k),
                      ),
                    ),
                  ),
              ),
          )
        }
      }
    },
    59054: (e, t, n) => {
      'use strict'
      n.d(t, { ControlDisclosureView: () => b })
      var o = n(50959),
        l = n(97754),
        r = n.n(l),
        i = n(38528),
        s = n(67029),
        a = n(78274),
        d = n(4523),
        c = n(9745),
        u = n(2948),
        p = n(23428)
      function h(e) {
        const { isDropped: t } = e
        return o.createElement(c.Icon, {
          className: r()(p.icon, t && p.dropped),
          icon: u,
        })
      }
      function m(e) {
        const { className: t, disabled: n, isDropped: l } = e
        return o.createElement(
          'span',
          { className: r()(p.button, n && p.disabled, t) },
          o.createElement(h, { isDropped: l }),
        )
      }
      var f = n(66986)
      const b = o.forwardRef((e, t) => {
        const {
            listboxId: n,
            className: l,
            listboxClassName: c,
            listboxTabIndex: u,
            hideArrowButton: p,
            matchButtonAndListboxWidths: h,
            popupPosition: b,
            disabled: v,
            isOpened: g,
            scrollWrapReference: C,
            repositionOnScroll: _,
            closeOnHeaderOverlap: E,
            listboxReference: x,
            size: w = 'small',
            onClose: O,
            onOpen: A,
            onListboxFocus: y,
            onListboxBlur: N,
            onListboxKeyDown: T,
            buttonChildren: I,
            children: k,
            caretClassName: S,
            listboxAria: D,
            ...L
          } = e,
          M = (0, o.useRef)(null),
          B =
            !p &&
            o.createElement(
              a.EndSlot,
              null,
              o.createElement(m, { isDropped: g, disabled: v, className: S }),
            )
        return o.createElement(d.PopupMenuDisclosureView, {
          buttonRef: M,
          listboxId: n,
          listboxClassName: c,
          listboxTabIndex: u,
          isOpened: g,
          onClose: O,
          onOpen: A,
          listboxReference: x,
          scrollWrapReference: C,
          onListboxFocus: y,
          onListboxBlur: N,
          onListboxKeyDown: T,
          listboxAria: D,
          matchButtonAndListboxWidths: h,
          popupPosition: b,
          button: o.createElement(s.ControlSkeleton, {
            ...L,
            'data-role': 'listbox',
            disabled: v,
            className: r()(f.button, l),
            size: w,
            ref: (0, i.useMergedRefs)([M, t]),
            middleSlot: o.createElement(
              a.MiddleSlot,
              null,
              o.createElement(
                'span',
                { className: r()(f['button-children'], p && f.hiddenArrow) },
                I,
              ),
            ),
            endSlot: B,
          }),
          popupChildren: k,
          repositionOnScroll: _,
          closeOnHeaderOverlap: E,
        })
      })
      b.displayName = 'ControlDisclosureView'
    },
    90405: (e, t, n) => {
      'use strict'
      n.d(t, { Select: () => C })
      var o = n(50959),
        l = n(22064),
        r = n(38528),
        i = n(16921),
        s = n(16396),
        a = n(12481),
        d = n(43370)
      var c = n(36762),
        u = n(26597),
        p = n(59054),
        h = n(36104),
        m = n(38223),
        f = n(60673)
      function b(e) {
        return !e.readonly
      }
      function v(e, t) {
        var n
        return null !== (n = null == t ? void 0 : t.id) && void 0 !== n
          ? n
          : (0, l.createDomId)(e, 'item', null == t ? void 0 : t.value)
      }
      function g(e) {
        var t, n
        const { selectedItem: l, placeholder: r } = e
        if (!l) return o.createElement('span', { className: f.placeholder }, r)
        const i =
          null !==
            (n =
              null !== (t = l.selectedContent) && void 0 !== t
                ? t
                : l.content) && void 0 !== n
            ? n
            : l.value
        return o.createElement('span', null, i)
      }
      const C = o.forwardRef((e, t) => {
        const {
          id: n,
          menuClassName: f,
          menuItemClassName: C,
          tabIndex: _,
          disabled: E,
          highlight: x,
          intent: w,
          hideArrowButton: O,
          placeholder: A,
          addPlaceholderToItems: y = !0,
          value: N,
          'aria-labelledby': T,
          onFocus: I,
          onBlur: k,
          onClick: S,
          onChange: D,
          onKeyDown: L,
          repositionOnScroll: M = !0,
          openMenuOnEnter: B = !0,
          'aria-describedby': z,
          'aria-invalid': K,
          ...F
        } = e
        let { items: P } = e
        if (A && y) {
          P = [
            {
              value: void 0,
              content: A,
              id: (0, l.createDomId)(n, 'placeholder'),
            },
            ...P,
          ]
        }
        const {
            listboxId: R,
            isOpened: W,
            isFocused: H,
            buttonTabIndex: U,
            listboxTabIndex: V,
            highlight: G,
            intent: Y,
            open: Z,
            onOpen: j,
            close: X,
            toggle: q,
            buttonFocusBindings: Q,
            onButtonClick: $,
            buttonRef: J,
            listboxRef: ee,
            buttonAria: te,
          } = (0, h.useControlDisclosure)({
            id: n,
            disabled: E,
            buttonTabIndex: _,
            intent: w,
            highlight: x,
            onFocus: I,
            onBlur: k,
            onClick: S,
          }),
          ne = P.filter(b),
          oe = ne.find((e) => e.value === N),
          [le, re, ie] = (0, i.useKeepActiveItemIntoView)({ activeItem: oe }),
          se = (0, l.joinDomIds)(T, n),
          ae = se.length > 0 ? se : void 0,
          de = (0, o.useMemo)(
            () => ({
              role: 'listbox',
              'aria-labelledby': T,
              'aria-activedescendant': v(n, oe),
            }),
            [T, oe],
          ),
          ce = (0, o.useCallback)((e) => e.value === N, [N]),
          ue = (0, o.useCallback)((e) => D && D(e.value), [D]),
          pe = (0, c.useItemsKeyboardNavigation)(m.isRtl, ne, ce, ue, !1, {
            next: [40],
            previous: [38],
          }),
          he = (0, u.useKeyboardToggle)(q, W || B),
          me = (0, u.useKeyboardClose)(W, X),
          fe = (0, u.useKeyboardOpen)(W, Z),
          be = (0, u.useKeyboardEventHandler)([he, me, fe]),
          ve = (0, u.useKeyboardEventHandler)([pe, he, me]),
          ge = (function (e) {
            const t = (0, o.useRef)(''),
              n = (0, o.useMemo)(
                () =>
                  (0, a.default)(() => {
                    t.current = ''
                  }, 500),
                [],
              ),
              l = (0, o.useMemo)(() => (0, d.default)(e, 200), [e])
            return (0, o.useCallback)(
              (e) => {
                e.key.length > 0 &&
                  e.key.length < 3 &&
                  ((t.current += e.key), l(t.current, e), n())
              },
              [n, l],
            )
          })((t, n) => {
            const o = (function (e, t, n) {
              return e.find((e) => {
                var o
                const l = t.toLowerCase()
                return (
                  !e.readonly &&
                  (n
                    ? n(e).toLowerCase().startsWith(l)
                    : !e.readonly &&
                      (('string' == typeof e.content &&
                        e.content.toLowerCase().startsWith(l)) ||
                        ('string' == typeof e.textContent &&
                          e.textContent.toLowerCase().startsWith(l)) ||
                        String(null !== (o = e.value) && void 0 !== o ? o : '')
                          .toLowerCase()
                          .startsWith(l)))
                )
              })
            })(ne, t, e.getSearchKey)
            void 0 !== o && D && (n.stopPropagation(), W || Z(), D(o.value))
          })
        return o.createElement(
          p.ControlDisclosureView,
          {
            ...F,
            ...te,
            ...Q,
            id: n,
            role: 'button',
            tabIndex: U,
            'aria-owns': te['aria-controls'],
            'aria-haspopup': 'listbox',
            'aria-labelledby': ae,
            disabled: E,
            hideArrowButton: O,
            isFocused: H,
            isOpened: W,
            highlight: G,
            intent: Y,
            ref: (0, r.useMergedRefs)([J, t]),
            onClick: $,
            onOpen: function () {
              ie(oe, { duration: 0 }), j()
            },
            onClose: X,
            onKeyDown: function (e) {
              be(e), L && L(e)
              e.defaultPrevented || ge(e)
            },
            listboxId: R,
            listboxTabIndex: V,
            listboxClassName: f,
            listboxAria: de,
            'aria-describedby': z,
            'aria-invalid': K,
            listboxReference: ee,
            scrollWrapReference: le,
            onListboxKeyDown: function (e) {
              ve(e), e.defaultPrevented || ge(e)
            },
            buttonChildren: o.createElement(g, {
              selectedItem: oe,
              placeholder: A,
            }),
            repositionOnScroll: M,
          },
          P.map((e, t) => {
            var l
            if (e.readonly)
              return o.createElement(
                o.Fragment,
                { key: `readonly_item_${t}` },
                e.content,
              )
            const r = v(n, e)
            return o.createElement(s.PopupMenuItem, {
              key: r,
              id: r,
              className: C,
              role: 'option',
              'aria-selected': N === e.value,
              isActive: N === e.value,
              label: null !== (l = e.content) && void 0 !== l ? l : e.value,
              onClick: Ce,
              onClickArg: e.value,
              isDisabled: e.disabled,
              reference: (t) => re(e, t),
            })
          }),
        )
        function Ce(e) {
          D && D(e)
        }
      })
      C.displayName = 'Select'
    },
    1109: (e, t, n) => {
      'use strict'
      n.d(t, { Separator: () => i })
      var o = n(50959),
        l = n(97754),
        r = n(45719)
      function i(e) {
        return o.createElement('div', {
          className: l(r.separator, e.className),
        })
      }
    },
    89872: (e) => {
      e.exports = {
        scrollable: 'scrollable-uT4IUFMG',
        content: 'content-uT4IUFMG',
        row: 'row-uT4IUFMG',
        title: 'title-uT4IUFMG',
        control: 'control-uT4IUFMG',
      }
    },
    44762: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { ToolWidgetIntervalsAddDialog: () => h })
      var o = n(50959),
        l = n(44352),
        r = n(50182),
        i = n(90405),
        s = n(31261),
        a = n(59064),
        d = n(86656),
        c = n(65817),
        u = n(89872)
      const p = c.INTERVALS.map((e) => ({ value: e.name, content: e.label }))
      function h(e) {
        const { onAdd: t, onClose: h, onUnmount: m } = e,
          [f, b] = (0, o.useState)(c.INTERVALS[0].name),
          [v, g] = (0, o.useState)('1')
        return (
          (0, o.useEffect)(
            () => () => {
              m && m()
            },
            [],
          ),
          o.createElement(r.AdaptiveConfirmDialog, {
            dataName: 'add-custom-interval-dialog',
            title: l.t(null, void 0, n(92746)),
            isOpened: !0,
            onSubmit: function () {
              t(v, f), h()
            },
            onCancel: h,
            onClickOutside: h,
            onClose: h,
            render: () =>
              o.createElement(
                d.TouchScrollContainer,
                { className: u.scrollable, onScroll: _ },
                o.createElement(
                  'div',
                  { className: u.content },
                  o.createElement(
                    'div',
                    { className: u.row },
                    o.createElement(
                      'div',
                      { className: u.title },
                      l.t(null, void 0, n(58416)),
                    ),
                    o.createElement(i.Select, {
                      id: 'metric-items',
                      className: u.control,
                      value: f,
                      items: p,
                      onChange: E,
                    }),
                  ),
                  o.createElement(
                    'div',
                    { className: u.row },
                    o.createElement(
                      'div',
                      { className: u.title },
                      l.t(null, void 0, n(69466)),
                    ),
                    o.createElement(s.InputControl, {
                      className: u.control,
                      inputMode: 'numeric',
                      maxLength: 6,
                      value: v,
                      onChange: C,
                    }),
                  ),
                ),
              ),
            defaultActionOnClose: 'none',
            submitButtonText: l.t(null, void 0, n(54777)),
            submitOnEnterKey: !1,
            fullScreen: !0,
          })
        )
        function C(e) {
          const { value: t } = e.currentTarget
          ;/^[0-9]*$/.test(t) && g(t)
        }
        function _() {
          a.globalCloseDelegate.fire()
        }
        function E(e) {
          b(e)
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
    92746: (e) => {
      e.exports = {
        ar: ['إضافة فترة زمنية مخصصة'],
        ca_ES: ['Afegeix interval de temps personalitzat'],
        cs: 'Add custom time interval',
        de: ['Individuelles Zeit Interval hinzufügen'],
        el: 'Add custom time interval',
        en: 'Add custom time interval',
        es: ['Añadir intervalo de tiempo personalizado'],
        fa: 'Add custom time interval',
        fr: ['Ajouter un intervalle de temps personnalisé'],
        he_IL: ['הוסף אינטרוול זמן מותאם אישית'],
        hu_HU: 'Add custom time interval',
        id_ID: ['Tambahkan interval waktu khusus'],
        it: ['Aggiungi timeframe personalizzato'],
        ja: ['カスタム時間足を追加'],
        ko: ['커스텀 타임 인터벌 넣기'],
        ms_MY: ['Tambah selang masa tersuai'],
        nl_NL: 'Add custom time interval',
        pl: ['Dodaj niestandardowy przedział czasowy'],
        pt: ['Adicionar um tempo gráfico personalizado'],
        ro: 'Add custom time interval',
        ru: ['Добавить свой временной интервал'],
        sv: ['Lägg till anpassat tidsintervall'],
        th: ['เพิ่มช่วงเวลาแบบกำหนดเอง'],
        tr: ['Özel zaman aralığı ekle'],
        vi: ['Thêm khoảng thời gian tùy chỉnh'],
        zh: ['添加自定义事件周期'],
        zh_TW: ['增加自訂時間周期'],
      }
    },
    69466: (e) => {
      e.exports = {
        ar: ['الفاصل الزمني'],
        ca_ES: 'Interval',
        cs: 'Interval',
        de: ['Intervall'],
        el: 'Interval',
        en: 'Interval',
        es: ['Intervalo'],
        fa: ['بازه زمانی'],
        fr: ['Intervalle'],
        he_IL: ['אינטרוול'],
        hu_HU: ['Időköz'],
        id_ID: 'Interval',
        it: ['Timeframe'],
        ja: ['時間足'],
        ko: ['인터벌'],
        ms_MY: ['Selang Masa'],
        nl_NL: 'Interval',
        pl: ['Interwał'],
        pt: ['Tempo Gráfico'],
        ro: 'Interval',
        ru: ['Интервал'],
        sv: ['Intervall'],
        th: ['ช่วงเวลา'],
        tr: ['Aralık'],
        vi: ['Khoảng thời gian'],
        zh: ['周期'],
        zh_TW: ['週期'],
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
    58416: (e) => {
      e.exports = {
        ar: ['نوع'],
        ca_ES: ['Tipus'],
        cs: ['Typ'],
        de: ['Typ'],
        el: ['Τύπος'],
        en: 'Type',
        es: ['Tipo'],
        fa: ['نوع'],
        fr: 'Type',
        he_IL: ['סוג'],
        hu_HU: ['Típus'],
        id_ID: ['Tipe'],
        it: ['Tipo'],
        ja: ['タイプ'],
        ko: ['타입'],
        ms_MY: ['Jenis'],
        nl_NL: 'Type',
        pl: ['Typ'],
        pt: ['Tipo'],
        ro: 'Type',
        ru: ['Тип'],
        sv: ['Typ'],
        th: ['ประเภท'],
        tr: ['Tip'],
        vi: ['Loại'],
        zh: ['类型'],
        zh_TW: ['種類'],
      }
    },
  },
])
