;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2704],
  {
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
    40281: (e) => {
      e.exports = {
        container: 'container-qm7Rg5MB',
        inputContainer: 'inputContainer-qm7Rg5MB',
        withCancel: 'withCancel-qm7Rg5MB',
        input: 'input-qm7Rg5MB',
        icon: 'icon-qm7Rg5MB',
        cancel: 'cancel-qm7Rg5MB',
      }
    },
    16734: (e) => {
      e.exports = { scrollWrap: 'scrollWrap-a62DpCum' }
    },
    40211: (e) => {
      e.exports = {
        container: 'container-c8Hkfy8e',
        separator: 'separator-c8Hkfy8e',
        section: 'section-c8Hkfy8e',
      }
    },
    55002: (e) => {
      e.exports = {
        action: 'action-peI7w0K1',
        hovered: 'hovered-peI7w0K1',
        active: 'active-peI7w0K1',
        label: 'label-peI7w0K1',
        description: 'description-peI7w0K1',
        selected: 'selected-peI7w0K1',
        small: 'small-peI7w0K1',
        withDescription: 'withDescription-peI7w0K1',
        action__favoriteIcon: 'action__favoriteIcon-peI7w0K1',
        action__favoriteIcon_active: 'action__favoriteIcon_active-peI7w0K1',
        labelAndDescription: 'labelAndDescription-peI7w0K1',
        icon: 'icon-peI7w0K1',
        fakeIcon: 'fakeIcon-peI7w0K1',
        highlighted: 'highlighted-peI7w0K1',
      }
    },
    5826: (e) => {
      e.exports = {
        menu: 'menu-kJ5smAAE',
        withDescriptions: 'withDescriptions-kJ5smAAE',
        header: 'header-kJ5smAAE',
        title: 'title-kJ5smAAE',
        container: 'container-kJ5smAAE',
        icon: 'icon-kJ5smAAE',
        clear: 'clear-kJ5smAAE',
        input: 'input-kJ5smAAE',
        highlighted: 'highlighted-kJ5smAAE',
        active: 'active-kJ5smAAE',
        section: 'section-kJ5smAAE',
      }
    },
    45300: (e) => {
      e.exports = {}
    },
    14877: (e) => {
      e.exports = {
        favorite: 'favorite-_FRQhM5Y',
        hovered: 'hovered-_FRQhM5Y',
        disabled: 'disabled-_FRQhM5Y',
        active: 'active-_FRQhM5Y',
        checked: 'checked-_FRQhM5Y',
      }
    },
    75623: (e) => {
      e.exports = { highlighted: 'highlighted-cwp8YRo6' }
    },
    45719: (e) => {
      e.exports = { separator: 'separator-Pf4rIzEt' }
    },
    92910: (e) => {
      e.exports = {
        separator: 'separator-QjUlCDId',
        small: 'small-QjUlCDId',
        normal: 'normal-QjUlCDId',
        large: 'large-QjUlCDId',
      }
    },
    34587: (e) => {
      e.exports = { icon: 'icon-WB2y0EnP', dropped: 'dropped-WB2y0EnP' }
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
    90186: (e, t, n) => {
      'use strict'
      function r(e) {
        return i(e, s)
      }
      function o(e) {
        return i(e, a)
      }
      function i(e, t) {
        const n = Object.entries(e).filter(t),
          r = {}
        for (const [e, t] of n) r[e] = t
        return r
      }
      function s(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function a(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, {
        filterAriaProps: () => o,
        filterDataProps: () => r,
        filterProps: () => i,
        isAriaAttribute: () => a,
        isDataAttribute: () => s,
      })
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
    24437: (e, t, n) => {
      'use strict'
      n.d(t, { DialogBreakpoints: () => o })
      var r = n(88803)
      const o = {
        SmallHeight: r['small-height-breakpoint'],
        TabletSmall: r['tablet-small-breakpoint'],
        TabletNormal: r['tablet-normal-breakpoint'],
      }
    },
    35057: (e, t, n) => {
      'use strict'
      n.d(t, { AdaptivePopupDialog: () => A })
      var r = n(50959),
        o = n(50151)
      var i = n(97754),
        s = n.n(i),
        a = n(68335),
        l = n(38223),
        c = n(35749),
        u = n(63016),
        d = n(1109),
        h = n(24437),
        p = n(90692),
        f = n(95711)
      var m = n(52092),
        v = n(76422),
        g = n(9745)
      const C = r.createContext({ setHideClose: () => {} })
      var y = n(7720),
        E = n(69827)
      function b(e) {
        const {
            title: t,
            titleTextWrap: n = !1,
            subtitle: o,
            showCloseIcon: i = !0,
            onClose: a,
            onCloseButtonKeyDown: l,
            renderBefore: c,
            renderAfter: u,
            draggable: d,
            className: h,
            unsetAlign: p,
            closeAriaLabel: f,
            closeButtonReference: m,
          } = e,
          [v, b] = (0, r.useState)(!1)
        return r.createElement(
          C.Provider,
          { value: { setHideClose: b } },
          r.createElement(
            'div',
            { className: s()(E.container, h, (o || p) && E.unsetAlign) },
            c,
            r.createElement(
              'div',
              { 'data-dragg-area': d, className: E.title },
              r.createElement(
                'div',
                { className: s()(n ? E.textWrap : E.ellipsis) },
                t,
              ),
              o &&
                r.createElement(
                  'div',
                  { className: s()(E.ellipsis, E.subtitle) },
                  o,
                ),
            ),
            u,
            i &&
              !v &&
              r.createElement(
                'button',
                {
                  className: E.close,
                  onClick: a,
                  onKeyDown: l,
                  'data-name': 'close',
                  'aria-label': f,
                  type: 'button',
                  ref: m,
                },
                r.createElement(g.Icon, {
                  className: E.icon,
                  icon: y,
                  'data-name': 'close',
                  'data-role': 'button',
                }),
              ),
          ),
        )
      }
      var _ = n(53017),
        w = n(90186),
        S = n(55596)
      const x = { vertical: 20 },
        k = { vertical: 0 }
      class A extends r.PureComponent {
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
                  27 === (0, a.hashFromEvent)(e))
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
                    r = (0, o.ensureNotNull)(this._reference)
                  if (null !== n) {
                    if (
                      (e.preventDefault(),
                      'true' === (t = n).getAttribute('data-haspopup') &&
                        'true' !== t.getAttribute('data-expanded'))
                    )
                      return void this._handleClose()
                    if ((0, c.isTextEditingField)(n)) return void r.focus()
                    if (r.contains(n))
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
                  [9, a.Modifiers.Shift + 9].includes(
                    (0, a.hashFromEvent)(n),
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
              const n = (0, o.ensureDefined)(
                this.props.fullScreenViewOffsets,
              ).value()
              return {
                top: n.top,
                left: (0, l.isRtl)() ? -n.right : n.left,
                width: t.clientWidth - n.left - n.right,
                height: t.clientHeight - n.top - n.bottom,
              }
            })
        }
        componentDidMount() {
          var e, t
          this.props.ignoreClosePopupsAndDialog ||
            v.subscribe(
              m.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
            v.unsubscribe(
              m.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
          ;(0, o.ensureNotNull)(this._reference).focus()
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
              isOpened: o,
              title: i,
              titleTextWrap: a,
              dataName: l,
              onClickOutside: c,
              additionalElementPos: m,
              additionalHeaderElement: v,
              backdrop: g,
              shouldForceFocus: C = !0,
              shouldReturnFocus: y,
              onForceFocus: E,
              showSeparator: A,
              subtitle: N,
              draggable: D = !0,
              fullScreen: R = !1,
              showCloseIcon: I = !0,
              rounded: L = !0,
              isAnimationEnabled: T,
              growPoint: B,
              dialogTooltip: M,
              unsetHeaderAlign: O,
              onDragStart: z,
              dataDialogName: F,
              closeAriaLabel: P,
              containerAriaLabel: U,
              reference: K,
              containerTabIndex: H,
              closeButtonReference: j,
              onCloseButtonKeyDown: W,
              shadowed: $,
              fullScreenViewOffsets: V,
            } = this.props,
            q = 'after' !== m ? v : void 0,
            Q = 'after' === m ? v : void 0,
            J = 'string' == typeof i ? i : F || '',
            Y = (0, w.filterDataProps)(this.props),
            Z = (0, _.mergeRefs)([this._handleReference, K])
          return r.createElement(
            p.MatchMedia,
            { rule: h.DialogBreakpoints.SmallHeight },
            (m) =>
              r.createElement(
                p.MatchMedia,
                { rule: h.DialogBreakpoints.TabletSmall },
                (h) =>
                  r.createElement(
                    u.PopupDialog,
                    {
                      rounded: !(h || R) && L,
                      className: s()(S.dialog, R && V && S.bounded, e),
                      isOpened: o,
                      reference: Z,
                      onKeyDown: this._handleKeyDown,
                      onClickOutside: c,
                      onClickBackdrop: c,
                      fullscreen: h || R,
                      guard: m ? k : x,
                      boundByScreen: h || R,
                      shouldForceFocus: C,
                      onForceFocus: E,
                      shouldReturnFocus: y,
                      backdrop: g,
                      draggable: D,
                      isAnimationEnabled: T,
                      growPoint: B,
                      name: this.props.dataName,
                      dialogTooltip: M,
                      onDragStart: z,
                      containerAriaLabel: U,
                      containerTabIndex: H,
                      calculateDialogPosition:
                        R && V ? this._calculatePositionWithOffsets : void 0,
                      shadowed: $,
                      ...Y,
                    },
                    r.createElement(
                      'div',
                      {
                        className: s()(S.wrapper, t),
                        'data-name': l,
                        'data-dialog-name': J,
                      },
                      void 0 !== i &&
                        r.createElement(b, {
                          draggable: D && !(h || R),
                          onClose: this._handleCloseBtnClick,
                          renderAfter: Q,
                          renderBefore: q,
                          subtitle: N,
                          title: i,
                          titleTextWrap: a,
                          showCloseIcon: I,
                          className: n,
                          unsetAlign: O,
                          closeAriaLabel: P,
                          closeButtonReference: j,
                          onCloseButtonKeyDown: W,
                        }),
                      A &&
                        r.createElement(d.Separator, {
                          className: S.separator,
                        }),
                      r.createElement(f.PopupContext.Consumer, null, (e) =>
                        this._renderChildren(e, h || R),
                      ),
                    ),
                  ),
              ),
          )
        }
      }
    },
    69654: (e, t, n) => {
      'use strict'
      n.d(t, { DialogSearch: () => u })
      var r = n(50959),
        o = n(97754),
        i = n.n(o),
        s = n(44352),
        a = n(9745),
        l = n(69859),
        c = n(40281)
      function u(e) {
        const {
          children: t,
          renderInput: o,
          onCancel: u,
          containerClassName: h,
          inputContainerClassName: p,
          iconClassName: f,
          ...m
        } = e
        return r.createElement(
          'div',
          { className: i()(c.container, h) },
          r.createElement(
            'div',
            { className: i()(c.inputContainer, p, u && c.withCancel) },
            o || r.createElement(d, { ...m }),
          ),
          t,
          r.createElement(a.Icon, { className: i()(c.icon, f), icon: l }),
          u &&
            r.createElement(
              'div',
              { className: c.cancel, onClick: u },
              s.t(null, void 0, n(20036)),
            ),
        )
      }
      function d(e) {
        const {
          className: t,
          reference: n,
          value: o,
          onChange: s,
          onFocus: a,
          onBlur: l,
          onKeyDown: u,
          onSelect: d,
          placeholder: h,
          ...p
        } = e
        return r.createElement('input', {
          ...p,
          ref: n,
          type: 'text',
          className: i()(t, c.input),
          autoComplete: 'off',
          'data-role': 'search',
          placeholder: h,
          value: o,
          onChange: s,
          onFocus: a,
          onBlur: l,
          onSelect: d,
          onKeyDown: u,
        })
      }
    },
    28587: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { UnitConversionRenderer: () => z })
      var r = n(50959),
        o = n(962),
        i = n(79188),
        s = n(90692),
        a = n(19785),
        l = n(68335)
      var c = n(24437),
        u = n(12811),
        d = n(97754),
        h = n.n(d),
        p = n(44352),
        f = n(9745),
        m = n(20520),
        v = n(27317),
        g = n(40173),
        C = n(51613),
        y = n(76197),
        E = n(36189),
        b = n(76068),
        _ = n(24637),
        w = n(55002)
      const S = r.memo(
        function (e) {
          const {
              label: t,
              icon: n,
              rules: o,
              search: i,
              description: s,
              onClick: a,
              onClose: l,
              isActive: c,
              isSmallSize: u,
              isSelected: d,
              selectedRef: p,
              hasDescriptions: f,
              hasIcons: m,
              isFavorite: v,
              onFavoriteClick: g,
            } = e,
            C = (0, r.useCallback)(() => {
              a(), l && l()
            }, [a, l]),
            y = u && w.small
          return r.createElement(
            'div',
            {
              className: h()(
                w.action,
                c && w.active,
                y,
                f && w.withDescription,
                d && w.selected,
              ),
              onClick: C,
              ref: p,
            },
            m &&
              (void 0 !== n
                ? r.createElement(b.CircleLogo, {
                    logoUrl: n,
                    size: f ? 'xsmall' : 'xxxsmall',
                    className: h()(w.icon, y),
                  })
                : r.createElement('span', { className: h()(w.fakeIcon, y) })),
            r.createElement(
              'div',
              { className: h()(w.labelAndDescription, y) },
              r.createElement('span', { className: h()(w.label, y) }, S(t)),
              f && r.createElement('br', null),
              f &&
                r.createElement(
                  'span',
                  { className: h()(w.description, y) },
                  s ? S(s) : '',
                ),
            ),
            void 0 !== v &&
              r.createElement(
                'div',
                {
                  className: h()(
                    w.action__favoriteIcon,
                    v && w.action__favoriteIcon_active,
                  ),
                },
                r.createElement(E.FavoriteButton, {
                  isActive: c,
                  isFilled: v,
                  onClick: function (e) {
                    e.stopPropagation(), null == g || g()
                  },
                }),
              ),
          )
          function S(e) {
            return r.createElement(_.HighlightedText, {
              text: e,
              rules: o,
              queryString: i,
              className: h()(c && w.highlighted, c && w.active),
            })
          }
        },
        (e, t) =>
          Object.keys(t)
            .filter(
              (e) => !['onClick', 'onClose', 'onFavoriteClick'].includes(e),
            )
            .every((n) => t[n] === e[n]),
      )
      var x = n(48471),
        k = n(69311),
        A = n(5826),
        N = n(16734)
      const D = (0, g.mergeThemes)(v.DEFAULT_MENU_THEME, N)
      function R(e) {
        const {
            title: t,
            sections: o,
            onClose: i,
            selectedId: s,
            selectedRef: a,
            search: l,
            setSearch: c,
            items: u,
            rules: d,
            searchRef: v,
            hasDescriptions: g,
            hasIcons: E,
            ...b
          } = e,
          [_, w] = (0, r.useState)(() =>
            o.reduce((e, t, n) => (t.name && (e[t.id] = !0), e), {}),
          )
        function N(e) {
          const { id: t, ...n } = e
          return r.createElement(S, {
            key: t,
            rules: d,
            search: l,
            onClose: i,
            isSmallSize: !0,
            isSelected: t === s,
            selectedRef: t === s ? a : void 0,
            hasDescriptions: g,
            hasIcons: E,
            ...n,
          })
        }
        return r.createElement(
          m.PopupMenu,
          {
            ...b,
            onClose: i,
            className: h()(A.menu, g && A.withDescriptions),
            theme: D,
            maxHeight: g ? 313 : 280,
            noMomentumBasedScroll: !0,
            isOpened: !0,
            onOpen: function () {
              var e
              null === (e = v.current) || void 0 === e || e.focus()
            },
          },
          r.createElement(
            'div',
            { className: A.header },
            r.createElement('div', { className: A.title }, t),
            r.createElement(
              'div',
              { className: A.container },
              r.createElement(f.Icon, { icon: x, className: A.icon }),
              r.createElement('input', {
                size: 1,
                type: 'text',
                className: A.input,
                placeholder: p.t(null, void 0, n(52298)),
                autoComplete: 'off',
                'data-role': 'search',
                onChange: function (e) {
                  c(e.target.value)
                },
                value: l,
                ref: v,
              }),
              Boolean(l) &&
                r.createElement(f.Icon, {
                  icon: k,
                  className: A.clear,
                  onClick: function () {
                    c('')
                  },
                }),
            ),
          ),
          l
            ? u.map(N)
            : o.map((e, t) =>
                r.createElement(
                  r.Fragment,
                  { key: e.id },
                  Boolean(t) && r.createElement(C.PopupMenuSeparator, null),
                  e.name
                    ? r.createElement(
                        y.CollapsibleSection,
                        {
                          summary: e.name,
                          className: A.section,
                          open: _[e.id],
                          onStateChange: (t) => w({ ..._, [e.id]: t }),
                        },
                        e.actions.map(N),
                      )
                    : e.actions.map(N),
                ),
              ),
        )
      }
      var I = n(35057),
        L = n(69654),
        T = n(40211)
      function B(e) {
        const {
          title: t,
          onClose: o,
          sections: i,
          selectedId: s,
          selectedRef: a,
          search: l,
          setSearch: c,
          items: u,
          rules: d,
          searchRef: h,
          hasIcons: f,
          hasDescriptions: m,
        } = e
        return r.createElement(I.AdaptivePopupDialog, {
          title: t,
          onClose: o,
          render: function () {
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(L.DialogSearch, {
                placeholder: p.t(null, void 0, n(52298)),
                onChange: v,
                reference: h,
              }),
              r.createElement(
                'div',
                { className: T.container },
                l
                  ? u.map((e) => {
                      const { id: t, isActive: n, ...i } = e
                      return r.createElement(S, {
                        key: t,
                        isActive: n,
                        onClose: o,
                        rules: d,
                        search: l,
                        isSelected: t === s,
                        selectedRef: t === s ? a : void 0,
                        hasIcons: f,
                        hasDescriptions: m,
                        ...i,
                      })
                    })
                  : i.map((e, t) =>
                      r.createElement(
                        r.Fragment,
                        { key: e.id },
                        e.name &&
                          r.createElement(
                            'div',
                            { className: T.section },
                            e.name,
                          ),
                        e.actions.map((n, c) => {
                          const { id: u, ...h } = n,
                            p = c === e.actions.length - 1,
                            v = t === i.length - 1
                          return r.createElement(
                            r.Fragment,
                            { key: u },
                            r.createElement(S, {
                              rules: d,
                              search: l,
                              onClose: o,
                              isSelected: u === s,
                              selectedRef: u === s ? a : void 0,
                              hasIcons: f,
                              hasDescriptions: m,
                              ...h,
                            }),
                            !v &&
                              p &&
                              r.createElement('div', {
                                className: T.separator,
                              }),
                          )
                        }),
                      ),
                    ),
              ),
            )
          },
          dataName: 'unit-conversion-dialog',
          draggable: !1,
          fullScreen: !0,
          isOpened: !0,
        })
        function v(e) {
          c(e.target.value)
        }
      }
      const M = {
        horizontalAttachEdge: u.HorizontalAttachEdge.Right,
        horizontalDropDirection: u.HorizontalDropDirection.FromRightToLeft,
      }
      function O(e) {
        const { element: t, ...n } = e,
          [o, i] = (0, r.useState)(y()),
          [d, h] = (0, r.useState)(''),
          p = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          m = (0, r.useMemo)(() => (0, a.createRegExpList)(d), [d]),
          { activeIdx: v, setActiveIdx: g } = (function (
            e,
            t,
            n,
            o = 'keydown',
          ) {
            const [i, s] = (0, r.useState)(-1)
            return (
              (0, r.useEffect)(() => {
                if (!e) return
                const n = (e) => {
                  switch ((0, l.hashFromEvent)(e)) {
                    case 40:
                      if (i === t.length - 1) break
                      e.preventDefault(), s(i + 1)
                      break
                    case 38:
                      if (i <= 0) break
                      e.preventDefault(), s(i - 1)
                  }
                }
                return (
                  e.addEventListener('keydown', n),
                  () => {
                    e.removeEventListener('keydown', n)
                  }
                )
              }, [e, i, t]),
              (0, r.useEffect)(() => {
                if (!e || !n) return
                const r = (e) => {
                  var r
                  e.repeat ||
                    (13 === (0, l.hashFromEvent)(e) &&
                      n(null !== (r = t[i]) && void 0 !== r ? r : null, e))
                }
                return (
                  e.addEventListener(o, r),
                  () => {
                    e.removeEventListener(o, r)
                  }
                )
              }, [e, i, t, n, o]),
              { activeIdx: i, setActiveIdx: s }
            )
          })(p.current, o, function (e) {
            e && (e.onClick(), n.onClose())
          })
        !(function (e, t = []) {
          ;(0, r.useEffect)(() => {
            e(-1)
          }, [...t])
        })(g, [o]),
          (function (e, t) {
            ;(0, r.useEffect)(() => {
              var n
              t >= 0 &&
                (null === (n = e.current) ||
                  void 0 === n ||
                  n.scrollIntoView({ block: 'nearest' }))
            }, [t])
          })(f, v),
          (0, r.useEffect)(() => {
            i(
              d
                ? (function (e, t, n) {
                    const r = e.reduce((e, t) => [...e, ...t.actions], [])
                    return (0, a.rankedSearch)({
                      data: r,
                      rules: n,
                      queryString: t,
                      primaryKey: 'label',
                      secondaryKey: 'description',
                    })
                  })(n.sections, d, m)
                : y(),
            )
          }, [d, n.sections, m])
        const C = (0, r.useMemo)(
          () => ({
            selectedId: Boolean(v >= 0 && o[v]) ? o[v].id : '',
            selectedRef: f,
            search: d,
            setSearch: h,
            searchRef: p,
            items: o,
            rules: m,
            hasIcons: o.some((e) => void 0 !== e.icon),
            hasDescriptions: o.some((e) => void 0 !== e.description),
          }),
          [v, f, d, h, p, o, m],
        )
        return r.createElement(
          s.MatchMedia,
          { rule: c.DialogBreakpoints.TabletSmall },
          (e) =>
            e
              ? r.createElement(B, { ...n, ...C })
              : r.createElement(R, {
                  ...n,
                  ...C,
                  position: (0, u.getPopupPositioner)(t, M),
                  doNotCloseOn: t,
                }),
        )
        function y() {
          return n.sections.reduce((e, t) => (e.push(...t.actions), e), [])
        }
      }
      class z {
        constructor(e, t, n, r) {
          ;(this._rootElem = document.createElement('div')),
            (this.close = () => {
              null !== this._rootElem &&
                (o.unmountComponentAtNode(this._rootElem),
                i.favoriteCurrencyUnitConversionService
                  .getOnChange()
                  .unsubscribe(this, this._render),
                (this._rootElem = null),
                this._menuClosedCallback())
            }),
            (this.isOpened = () => null !== this._rootElem),
            (this._title = e),
            (this._element = t),
            (this._sectionsGetter = n),
            (this._menuClosedCallback = r),
            this._render(),
            i.favoriteCurrencyUnitConversionService
              .getOnChange()
              .subscribe(this, this._render)
        }
        _render() {
          const e = {
            title: this._title,
            sections: this._sectionsGetter(),
            element: this._element,
            onClose: this.close,
          }
          o.render(r.createElement(O, { ...e }), this._rootElem)
        }
      }
    },
    76068: (e, t, n) => {
      'use strict'
      n.d(t, { CircleLogo: () => i })
      var r = n(50959),
        o = n(58492)
      n(45300)
      function i(e) {
        var t, n
        const i = (0, o.getStyleClasses)(e.size, e.className),
          s =
            null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) &&
            void 0 !== n
              ? n
              : ''
        return (0, o.isCircleLogoWithUrlProps)(e)
          ? r.createElement('img', {
              className: i,
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
                className: i,
                title: e.title,
                'aria-label': e['aria-label'],
                'aria-hidden': e['aria-hidden'],
              },
              e.placeholderLetter,
            )
      }
    },
    58492: (e, t, n) => {
      'use strict'
      n.d(t, { getStyleClasses: () => o, isCircleLogoWithUrlProps: () => i })
      var r = n(97754)
      function o(e, t) {
        return r('tv-circle-logo', `tv-circle-logo--${e}`, t)
      }
      function i(e) {
        return 'logoUrl' in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
      }
    },
    36189: (e, t, n) => {
      'use strict'
      n.d(t, { FavoriteButton: () => d })
      var r = n(44352),
        o = n(50959),
        i = n(97754),
        s = n(9745),
        a = n(39146),
        l = n(48010),
        c = n(14877)
      const u = {
        add: r.t(null, void 0, n(44629)),
        remove: r.t(null, void 0, n(72482)),
      }
      function d(e) {
        const { className: t, isFilled: n, isActive: r, onClick: d, ...h } = e
        return o.createElement(s.Icon, {
          ...h,
          className: i(
            c.favorite,
            'apply-common-tooltip',
            n && c.checked,
            r && c.active,
            t,
          ),
          icon: n ? a : l,
          onClick: d,
          title: n ? u.remove : u.add,
        })
      }
    },
    19785: (e, t, n) => {
      'use strict'
      n.d(t, {
        createRegExpList: () => i,
        getHighlightedChars: () => s,
        rankedSearch: () => o,
      })
      var r = n(1722)
      function o(e) {
        const {
          data: t,
          rules: n,
          queryString: o,
          isPreventedFromFiltering: i,
          primaryKey: s,
          secondaryKey: a = s,
          optionalPrimaryKey: l,
          tertiaryKey: c,
        } = e
        return t
          .map((e) => {
            const t = l && e[l] ? e[l] : e[s],
              i = e[a],
              u = c && e[c]
            let d,
              h = 0
            return (
              n.forEach((e) => {
                var n, s, a, l, c
                const { re: p, fullMatch: f } = e
                if (
                  ((p.lastIndex = 0),
                  (0, r.isString)(t) &&
                    t &&
                    t.toLowerCase() === o.toLowerCase())
                )
                  return (
                    (h = 4),
                    void (d =
                      null === (n = t.match(f)) || void 0 === n
                        ? void 0
                        : n.index)
                  )
                if ((0, r.isString)(t) && f.test(t))
                  return (
                    (h = 3),
                    void (d =
                      null === (s = t.match(f)) || void 0 === s
                        ? void 0
                        : s.index)
                  )
                if ((0, r.isString)(i) && f.test(i))
                  return (
                    (h = 2),
                    void (d =
                      null === (a = i.match(f)) || void 0 === a
                        ? void 0
                        : a.index)
                  )
                if ((0, r.isString)(i) && p.test(i))
                  return (
                    (h = 2),
                    void (d =
                      null === (l = i.match(p)) || void 0 === l
                        ? void 0
                        : l.index)
                  )
                if (Array.isArray(u))
                  for (const e of u)
                    if (f.test(e))
                      return (
                        (h = 1),
                        void (d =
                          null === (c = e.match(f)) || void 0 === c
                            ? void 0
                            : c.index)
                      )
              }),
              { matchPriority: h, matchIndex: d, item: e }
            )
          })
          .filter((e) => i || e.matchPriority)
          .sort((e, t) => {
            if (e.matchPriority < t.matchPriority) return 1
            if (e.matchPriority > t.matchPriority) return -1
            if (e.matchPriority === t.matchPriority) {
              if (void 0 === e.matchIndex || void 0 === t.matchIndex) return 0
              if (e.matchIndex > t.matchIndex) return 1
              if (e.matchIndex < t.matchIndex) return -1
            }
            return 0
          })
          .map(({ item: e }) => e)
      }
      function i(e, t) {
        const n = [],
          r = e.toLowerCase(),
          o =
            e
              .split('')
              .map((e, t) => `(${0 !== t ? `[/\\s-]${a(e)}` : a(e)})`)
              .join('(.*?)') + '(.*)'
        return (
          n.push({
            fullMatch: new RegExp(`(${a(e)})`, 'i'),
            re: new RegExp(`^${o}`, 'i'),
            reserveRe: new RegExp(o, 'i'),
            fuzzyHighlight: !0,
          }),
          t &&
            t.hasOwnProperty(r) &&
            n.push({ fullMatch: t[r], re: t[r], fuzzyHighlight: !1 }),
          n
        )
      }
      function s(e, t, n) {
        const r = []
        return e && n
          ? (n.forEach((e) => {
              const { fullMatch: n, re: o, reserveRe: i } = e
              ;(n.lastIndex = 0), (o.lastIndex = 0)
              const s = n.exec(t),
                a = s || o.exec(t) || (i && i.exec(t))
              if (((e.fuzzyHighlight = !s), a))
                if (e.fuzzyHighlight) {
                  let e = a.index
                  for (let t = 1; t < a.length; t++) {
                    const n = a[t],
                      o = a[t].length
                    if (t % 2) {
                      const t =
                        n.startsWith(' ') ||
                        n.startsWith('/') ||
                        n.startsWith('-')
                      r[t ? e + 1 : e] = !0
                    }
                    e += o
                  }
                } else for (let e = 0; e < a[0].length; e++) r[a.index + e] = !0
            }),
            r)
          : r
      }
      function a(e) {
        return e.replace(/[!-/[-^{-}?]/g, '\\$&')
      }
    },
    24637: (e, t, n) => {
      'use strict'
      n.d(t, { HighlightedText: () => a })
      var r = n(50959),
        o = n(97754),
        i = n(19785),
        s = n(75623)
      function a(e) {
        const { queryString: t, rules: n, text: a, className: l } = e,
          c = (0, r.useMemo)(
            () => (0, i.getHighlightedChars)(t, a, n),
            [t, n, a],
          )
        return r.createElement(
          r.Fragment,
          null,
          c.length
            ? a
                .split('')
                .map((e, t) =>
                  r.createElement(
                    r.Fragment,
                    { key: t },
                    c[t]
                      ? r.createElement(
                          'span',
                          { className: o(s.highlighted, l) },
                          e,
                        )
                      : r.createElement('span', null, e),
                  ),
                )
            : a,
        )
      }
    },
    1109: (e, t, n) => {
      'use strict'
      n.d(t, { Separator: () => s })
      var r = n(50959),
        o = n(97754),
        i = n(45719)
      function s(e) {
        return r.createElement('div', {
          className: o(i.separator, e.className),
        })
      }
    },
    51613: (e, t, n) => {
      'use strict'
      n.d(t, { PopupMenuSeparator: () => a })
      var r = n(50959),
        o = n(97754),
        i = n.n(o),
        s = n(92910)
      function a(e) {
        const { size: t = 'normal', className: n, ariaHidden: o = !1 } = e
        return r.createElement('div', {
          className: i()(
            s.separator,
            'small' === t && s.small,
            'normal' === t && s.normal,
            'large' === t && s.large,
            n,
          ),
          role: 'separator',
          'aria-hidden': o,
        })
      }
    },
    20520: (e, t, n) => {
      'use strict'
      n.d(t, { PopupMenu: () => h })
      var r = n(50959),
        o = n(962),
        i = n(62942),
        s = n(65718),
        a = n(27317),
        l = n(29197)
      const c = r.createContext(void 0)
      var u = n(36383)
      const d = r.createContext({ setMenuMaxWidth: !1 })
      function h(e) {
        const {
            controller: t,
            children: n,
            isOpened: h,
            closeOnClickOutside: p = !0,
            doNotCloseOn: f,
            onClickOutside: m,
            onClose: v,
            onKeyboardClose: g,
            'data-name': C = 'popup-menu-container',
            ...y
          } = e,
          E = (0, r.useContext)(l.CloseDelegateContext),
          b = r.useContext(d),
          _ = (0, r.useContext)(c),
          w = (0, u.useOutsideEvent)({
            handler: function (e) {
              m && m(e)
              if (!p) return
              const t = (0, i.default)(f) ? f() : null == f ? [] : [f]
              if (t.length > 0 && e.target instanceof Node)
                for (const n of t) {
                  const t = o.findDOMNode(n)
                  if (t instanceof Node && t.contains(e.target)) return
                }
              v()
            },
            mouseDown: !0,
            touchStart: !0,
          })
        return h
          ? r.createElement(
              s.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              r.createElement(
                'span',
                { ref: w, style: { pointerEvents: 'auto' } },
                r.createElement(
                  a.Menu,
                  {
                    ...y,
                    onClose: v,
                    onKeyboardClose: g,
                    onScroll: function (t) {
                      const { onScroll: n } = e
                      n && n(t)
                    },
                    customCloseDelegate: E,
                    customRemeasureDelegate: _,
                    ref: t,
                    'data-name': C,
                    limitMaxWidth: b.setMenuMaxWidth,
                  },
                  n,
                ),
              ),
            )
          : null
      }
    },
    10381: (e, t, n) => {
      'use strict'
      n.d(t, { ToolWidgetCaret: () => l })
      var r = n(50959),
        o = n(97754),
        i = n(9745),
        s = n(34587),
        a = n(578)
      function l(e) {
        const { dropped: t, className: n } = e
        return r.createElement(i.Icon, {
          className: o(n, s.icon, { [s.dropped]: t }),
          icon: a,
        })
      }
    },
    40173: (e, t, n) => {
      'use strict'
      function r(e, t, n = {}) {
        return Object.assign(
          {},
          e,
          (function (e, t, n = {}) {
            const r = Object.assign({}, t)
            for (const o of Object.keys(t)) {
              const i = n[o] || o
              i in e && (r[o] = [e[i], t[o]].join(' '))
            }
            return r
          })(e, t, n),
        )
      }
      n.d(t, { mergeThemes: () => r })
    },
    95257: (e, t) => {
      'use strict'
      var n = Symbol.for('react.element'),
        r = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        i = Symbol.for('react.strict_mode'),
        s = Symbol.for('react.profiler'),
        a = Symbol.for('react.provider'),
        l = Symbol.for('react.context'),
        c = Symbol.for('react.forward_ref'),
        u = Symbol.for('react.suspense'),
        d = Symbol.for('react.memo'),
        h = Symbol.for('react.lazy'),
        p = Symbol.iterator
      var f = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        v = {}
      function g(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || f)
      }
      function C() {}
      function y(e, t, n) {
        ;(this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || f)
      }
      ;(g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
            )
          this.updater.enqueueSetState(this, e, t, 'setState')
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
        }),
        (C.prototype = g.prototype)
      var E = (y.prototype = new C())
      ;(E.constructor = y), m(E, g.prototype), (E.isPureReactComponent = !0)
      var b = Array.isArray,
        _ = Object.prototype.hasOwnProperty,
        w = { current: null },
        S = { key: !0, ref: !0, __self: !0, __source: !0 }
      function x(e, t, r) {
        var o,
          i = {},
          s = null,
          a = null
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = '' + t.key),
          t))
            _.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o])
        var l = arguments.length - 2
        if (1 === l) i.children = r
        else if (1 < l) {
          for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2]
          i.children = c
        }
        if (e && e.defaultProps)
          for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o])
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: a,
          props: i,
          _owner: w.current,
        }
      }
      function k(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === n
      }
      var A = /\/+/g
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
      function D(e, t, o, i, s) {
        var a = typeof e
        ;('undefined' !== a && 'boolean' !== a) || (e = null)
        var l = !1
        if (null === e) l = !0
        else
          switch (a) {
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
            (s = s((l = e))),
            (e = '' === i ? '.' + N(l, 0) : i),
            b(s)
              ? ((o = ''),
                null != e && (o = e.replace(A, '$&/') + '/'),
                D(s, t, o, '', function (e) {
                  return e
                }))
              : null != s &&
                (k(s) &&
                  (s = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    }
                  })(
                    s,
                    o +
                      (!s.key || (l && l.key === s.key)
                        ? ''
                        : ('' + s.key).replace(A, '$&/') + '/') +
                      e,
                  )),
                t.push(s)),
            1
          )
        if (((l = 0), (i = '' === i ? '.' : i + ':'), b(e)))
          for (var c = 0; c < e.length; c++) {
            var u = i + N((a = e[c]), c)
            l += D(a, t, o, u, s)
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
          for (e = u.call(e), c = 0; !(a = e.next()).done; )
            l += D((a = a.value), t, o, (u = i + N(a, c++)), s)
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
        return l
      }
      function R(e, t, n) {
        if (null == e) return e
        var r = [],
          o = 0
        return (
          D(e, r, '', '', function (e) {
            return t.call(n, e, o++)
          }),
          r
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
      var L = { current: null },
        T = { transition: null },
        B = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: w,
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
          if (!k(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            )
          return e
        },
      }),
        (t.Component = g),
        (t.Fragment = o),
        (t.Profiler = s),
        (t.PureComponent = y),
        (t.StrictMode = i),
        (t.Suspense = u),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
        (t.cloneElement = function (e, t, r) {
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
              (void 0 !== t.ref && ((s = t.ref), (a = w.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps
            for (c in t)
              _.call(t, c) &&
                !S.hasOwnProperty(c) &&
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
            key: i,
            ref: s,
            props: o,
            _owner: a,
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
          return { $$typeof: c, render: e }
        }),
        (t.isValidElement = k),
        (t.lazy = function (e) {
          return {
            $$typeof: h,
            _payload: { _status: -1, _result: e },
            _init: I,
          }
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
        }),
        (t.startTransition = function (e) {
          var t = T.transition
          T.transition = {}
          try {
            e()
          } finally {
            T.transition = t
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            'act(...) is not supported in production builds of React.',
          )
        }),
        (t.useCallback = function (e, t) {
          return L.current.useCallback(e, t)
        }),
        (t.useContext = function (e) {
          return L.current.useContext(e)
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return L.current.useDeferredValue(e)
        }),
        (t.useEffect = function (e, t) {
          return L.current.useEffect(e, t)
        }),
        (t.useId = function () {
          return L.current.useId()
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return L.current.useImperativeHandle(e, t, n)
        }),
        (t.useInsertionEffect = function (e, t) {
          return L.current.useInsertionEffect(e, t)
        }),
        (t.useLayoutEffect = function (e, t) {
          return L.current.useLayoutEffect(e, t)
        }),
        (t.useMemo = function (e, t) {
          return L.current.useMemo(e, t)
        }),
        (t.useReducer = function (e, t, n) {
          return L.current.useReducer(e, t, n)
        }),
        (t.useRef = function (e) {
          return L.current.useRef(e)
        }),
        (t.useState = function (e) {
          return L.current.useState(e)
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return L.current.useSyncExternalStore(e, t, n)
        }),
        (t.useTransition = function () {
          return L.current.useTransition()
        }),
        (t.version = '18.2.0')
    },
    50959: (e, t, n) => {
      'use strict'
      e.exports = n(95257)
    },
    12989: (e) => {
      e.exports = {
        summary: 'summary-ynHBVe1n',
        hovered: 'hovered-ynHBVe1n',
        caret: 'caret-ynHBVe1n',
      }
    },
    76197: (e, t, n) => {
      'use strict'
      n.d(t, { CollapsibleSection: () => l })
      var r = n(50959),
        o = n(97754),
        i = n.n(o),
        s = n(10381),
        a = n(12989)
      const l = (0, r.forwardRef)(function (e, t) {
        const {
          open: n,
          summary: o,
          children: l,
          onStateChange: c,
          tabIndex: u,
          className: d,
          ...h
        } = e
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            'div',
            {
              ...h,
              className: i()(d, a.summary),
              onClick: function () {
                c && c(!n)
              },
              'data-open': n,
              ref: t,
              tabIndex: u,
            },
            o,
            r.createElement(s.ToolWidgetCaret, {
              className: a.caret,
              dropped: Boolean(n),
            }),
          ),
          n && l,
        )
      })
    },
    12811: (e, t, n) => {
      'use strict'
      n.d(t, {
        HorizontalAttachEdge: () => o,
        HorizontalDropDirection: () => s,
        VerticalAttachEdge: () => r,
        VerticalDropDirection: () => i,
        getPopupPositioner: () => c,
      })
      var r,
        o,
        i,
        s,
        a = n(50151)
      !(function (e) {
        ;(e[(e.Top = 0)] = 'Top'),
          (e[(e.Bottom = 1)] = 'Bottom'),
          (e[(e.AutoStrict = 2)] = 'AutoStrict')
      })(r || (r = {})),
        (function (e) {
          ;(e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right')
        })(o || (o = {})),
        (function (e) {
          ;(e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'),
            (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop')
        })(i || (i = {})),
        (function (e) {
          ;(e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'),
            (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft')
        })(s || (s = {}))
      const l = {
        verticalAttachEdge: r.Bottom,
        horizontalAttachEdge: o.Left,
        verticalDropDirection: i.FromTopToBottom,
        horizontalDropDirection: s.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      }
      function c(e, t) {
        return (n, c, u, d) => {
          var h, p
          const f = (0, a.ensureNotNull)(e).getBoundingClientRect(),
            {
              horizontalAttachEdge: m = l.horizontalAttachEdge,
              horizontalDropDirection: v = l.horizontalDropDirection,
              horizontalMargin: g = l.horizontalMargin,
              verticalMargin: C = l.verticalMargin,
              matchButtonAndListboxWidths: y = l.matchButtonAndListboxWidths,
            } = t
          let E =
              null !== (h = t.verticalAttachEdge) && void 0 !== h
                ? h
                : l.verticalAttachEdge,
            b =
              null !== (p = t.verticalDropDirection) && void 0 !== p
                ? p
                : l.verticalDropDirection
          E === r.AutoStrict &&
            (d < f.y + f.height + C + c
              ? ((E = r.Top), (b = i.FromBottomToTop))
              : ((E = r.Bottom), (b = i.FromTopToBottom)))
          const _ = E === r.Top ? -1 * C : C,
            w = m === o.Right ? f.right : f.left,
            S = E === r.Top ? f.top : f.bottom,
            x = {
              x: w - (v === s.FromRightToLeft ? n : 0) + g,
              y: S - (b === i.FromBottomToTop ? c : 0) + _,
            }
          return y && (x.overrideWidth = f.width), x
        }
      }
    },
    84298: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { currencyActions: () => a })
      var r = n(50151),
        o = n(44352),
        i = n(89691),
        s = n(79188)
      function a(e, t, a) {
        if (null === t || t.readOnly) return []
        const l = [],
          c = (t) => {
            e.setPriceScaleCurrency(a, t)
          },
          u = t.selectedCurrency,
          d = t.originalCurrencies,
          h = t.baseCurrencies,
          p = t.displayedValues,
          f = s.favoriteCurrencyUnitConversionService.get().currencies,
          m = { id: 'first_section', actions: [] }
        if (d.size > 1) {
          const e = (0, i.createAction)(
            'Mixed',
            o.t(null, void 0, n(95093)),
            void 0,
            void 0,
            null === t.selectedCurrency,
            () => c(null),
          )
          m.actions.push(e)
        }
        const v = e.model().availableCurrencies()
        if (null !== u) {
          const e = (0, r.ensureNotNull)(v.item(u)),
            t = (0, i.createAction)(
              u,
              (0, r.ensureDefined)(p.get(u)),
              e.logoUrl,
              e.description,
              !0,
              () => {},
              f.has(u),
              () =>
                s.favoriteCurrencyUnitConversionService.toggle('currencies', u),
            )
          m.actions.push(t)
        }
        const g = v.filterConvertible(h, (e) => e !== u && d.has(e))
        for (const e of g) {
          const n = (0, r.ensureNotNull)(v.item(e.id))
          m.actions.push(
            (0, i.createAction)(
              e.id,
              e.code,
              n.logoUrl,
              n.description,
              t.selectedCurrency === e.id,
              () => c(e.id),
              f.has(e.id),
              () =>
                s.favoriteCurrencyUnitConversionService.toggle(
                  'currencies',
                  e.id,
                ),
            ),
          )
        }
        m.actions.length > 0 && l.push(m)
        const C = v.filterConvertible(h, (e) => e !== u && !d.has(e)),
          y = [],
          E = []
        for (const e of C) {
          const n = (0, r.ensureNotNull)(v.item(e.id)),
            o = f.has(e.id),
            a = (0, i.createAction)(
              e.id,
              e.code,
              n.logoUrl,
              n.description,
              t.selectedCurrency === e.id,
              () => c(e.id),
              o,
              () =>
                s.favoriteCurrencyUnitConversionService.toggle(
                  'currencies',
                  e.id,
                ),
            )
          o ? y.push(a) : E.push(a)
        }
        return (
          (E.length > 0 || y.length > 0) &&
            l.push({ id: 'second_section', actions: y.concat(E) }),
          l
        )
      }
    },
    79188: (e, t, n) => {
      'use strict'
      n.d(t, { favoriteCurrencyUnitConversionService: () => a })
      var r = n(56840),
        o = n(21097),
        i = n(68456)
      class s extends i.AbstractJsonStoreService {
        constructor(e, t) {
          super(
            e,
            t,
            'FAVORITE_CURRENCY_UNIT_CONVERSION_CHANGED',
            'currencyUnitConversion.favorites',
            { currencies: new Set(), units: new Set() },
          )
        }
        add(e, t) {
          const n = this.get()
          n[e].add(t), this.set(n)
        }
        remove(e, t) {
          const n = this.get()
          n[e].delete(t) && this.set(n)
        }
        toggle(e, t) {
          this.get()[e].has(t) ? this.remove(e, t) : this.add(e, t)
        }
        _serialize(e) {
          return [[...e.currencies], [...e.units]]
        }
        _deserialize(e) {
          return { currencies: new Set(e[0]), units: new Set(e[1]) }
        }
      }
      const a = new s(o.TVXWindowEvents, r)
    },
    14818: (e, t, n) => {
      'use strict'
      n.r(t), n.d(t, { unitActions: () => a })
      var r = n(50151),
        o = n(44352),
        i = n(89691),
        s = n(79188)
      function a(e, t, a) {
        if (null === t || 0 === t.availableGroups.size) return []
        const l = [],
          c = (t) => {
            e.setPriceScaleUnit(a, t)
          },
          u = t.selectedUnit,
          d = t.originalUnits,
          h = t.names,
          p = t.descriptions,
          f = s.favoriteCurrencyUnitConversionService.get().units,
          m = { actions: [], id: 'first_section' }
        if (d.size > 1) {
          const e = (0, i.createAction)(
            'Mixed',
            o.t(null, void 0, n(95093)),
            void 0,
            void 0,
            null === t.selectedUnit,
            () => c(null),
          )
          m.actions.push(e)
        }
        const v = e.model().availableUnits()
        if (null !== u) {
          const e = (0, i.createAction)(
            u,
            (0, r.ensureDefined)(h.get(u)),
            void 0,
            (0, r.ensureDefined)(p.get(u)),
            !0,
            () => {},
            f.has(u),
            () => s.favoriteCurrencyUnitConversionService.toggle('units', u),
          )
          m.actions.push(e)
        }
        const g = v.unitsByGroups(t.availableGroups),
          C = [],
          y = []
        for (const e of g)
          for (const t of e.units) {
            const e = f.has(t.id)
            if (t.id === u || (!e && !d.has(t.id))) continue
            const n = (0, i.createAction)(
              t.id,
              t.name,
              void 0,
              t.description,
              !1,
              () => c(t.id),
              e,
              () =>
                s.favoriteCurrencyUnitConversionService.toggle('units', t.id),
            )
            e ? y.push(n) : C.push(n)
          }
        ;(C.length > 0 || y.length > 0) &&
          m.actions.push(
            ...y.sort((e, t) =>
              e.label.toLowerCase().localeCompare(t.label.toLowerCase()),
            ),
            ...C,
          ),
          m.actions.length > 0 && l.push(m)
        const E = u && v.unitGroupById(u)
        if (null !== E)
          for (const e of g) {
            if (e.name !== E) continue
            const t = []
            for (const n of e.units)
              n.id === u ||
                d.has(n.id) ||
                f.has(n.id) ||
                t.push(
                  (0, i.createAction)(
                    n.id,
                    n.name,
                    void 0,
                    n.description,
                    !1,
                    () => c(n.id),
                    !1,
                    () =>
                      s.favoriteCurrencyUnitConversionService.toggle(
                        'units',
                        n.id,
                      ),
                  ),
                )
            t.length > 0 && l.push({ id: e.name, name: e.name, actions: t })
          }
        for (const e of g) {
          if (e.name === E) continue
          const t = []
          for (const n of e.units)
            n.id === u ||
              d.has(n.id) ||
              f.has(n.id) ||
              t.push(
                (0, i.createAction)(
                  n.id,
                  n.name,
                  void 0,
                  n.description,
                  !1,
                  () => c(n.id),
                  !1,
                  () =>
                    s.favoriteCurrencyUnitConversionService.toggle(
                      'units',
                      n.id,
                    ),
                ),
              )
          t.length > 0 && l.push({ id: e.name, name: e.name, actions: t })
        }
        return l
      }
    },
    89691: (e, t, n) => {
      'use strict'
      function r(e, t, n, r, o, i, s, a) {
        return {
          id: e,
          label: t,
          icon: n,
          description: r,
          isActive: o,
          onClick: i,
          isFavorite: s,
          onFavoriteClick: a,
        }
      }
      n.d(t, { createAction: () => r })
    },
    578: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    },
    7720: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
    },
    69311: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
    },
    48471: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M11.85 11.93A5.48 5.48 0 0 0 8 2.5a5.5 5.5 0 1 0 3.85 9.43zm0 0L16 16"/></svg>'
    },
    69859: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>'
    },
    39146: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
    },
    48010: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
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
    44629: (e) => {
      e.exports = {
        ar: ['اضف إلى القائمة التفضيلات'],
        ca_ES: ['Afegeix a preferits'],
        cs: ['Přidat do oblíbených'],
        de: ['Zu Favoriten hinzufügen'],
        el: ['Προσθήκη στα αγαπημένα'],
        en: 'Add to favorites',
        es: ['Añadir a favoritos'],
        fa: ['افزودن به موارد مورد علاقه'],
        fr: ['Ajouter aux favoris'],
        he_IL: ['הוסף למועדפים'],
        hu_HU: ['Hozzáadás kedvencekhez'],
        id_ID: ['Tambah ke daftar favorit'],
        it: ['Aggiungi ai preferiti'],
        ja: ['お気に入りに追加'],
        ko: ['즐겨찾기에 넣기'],
        ms_MY: ['Tambah kepada kegemaran'],
        nl_NL: ['Voeg toe aan favorieten'],
        pl: ['Dodaj do ulubionych'],
        pt: ['Adicionar aos favoritos'],
        ro: 'Add to favorites',
        ru: ['Добавить в избранное'],
        sv: ['Lägg till som favorit'],
        th: ['เพิ่มลงรายการโปรด'],
        tr: ['Favorilere ekle'],
        vi: ['Thêm vào mục yêu thích'],
        zh: ['添加到收藏'],
        zh_TW: ['加入收藏'],
      }
    },
    52298: (e) => {
      e.exports = {
        ar: ['بحث'],
        ca_ES: ['Cercar'],
        cs: ['Hledat'],
        de: ['Suche'],
        el: ['Αναζήτησή'],
        en: 'Search',
        es: ['Buscar'],
        fa: ['جستجو'],
        fr: ['Chercher'],
        he_IL: ['חפש'],
        hu_HU: ['Keresés'],
        id_ID: ['Cari'],
        it: ['Cerca'],
        ja: ['検索'],
        ko: ['찾기'],
        ms_MY: ['Cari'],
        nl_NL: ['Zoeken'],
        pl: ['Szukaj'],
        pt: ['Pesquisar'],
        ro: 'Search',
        ru: ['Поиск'],
        sv: ['Sök'],
        th: ['ค้นหา'],
        tr: ['Ara'],
        vi: ['Tìm kiếm'],
        zh: ['搜索'],
        zh_TW: ['搜尋'],
      }
    },
    72482: (e) => {
      e.exports = {
        ar: ['حذف من القائمة المفضلة'],
        ca_ES: ['Treure de preferits'],
        cs: ['Odebrat z oblíbených'],
        de: ['Aus Favoriten entfernen'],
        el: ['Διαγραφή απο τα αγαπημένα'],
        en: 'Remove from favorites',
        es: ['Quitar de favoritos'],
        fa: ['حذف از موارد مورد علاقه'],
        fr: ['Retirer des favoris'],
        he_IL: ['הסר ממועדפים'],
        hu_HU: ['Eltávolít kedvencek közül'],
        id_ID: ['Hilangkan dari favorit'],
        it: ['Rimuovi dai preferiti'],
        ja: ['お気に入りから削除'],
        ko: ['즐겨찾기지움'],
        ms_MY: ['Buang dari kegemaran'],
        nl_NL: ['Verwijder van favorieten'],
        pl: ['Usuń z ulubionych'],
        pt: ['Remover dos favoritos'],
        ro: 'Remove from favorites',
        ru: ['Удалить из предпочтений'],
        sv: ['Ta bort från favoriter'],
        th: ['ลบออกจากรายการโปรด'],
        tr: ['Favorilerimden çıkar'],
        vi: ['Loại bỏ khỏi mục yêu thích'],
        zh: ['从收藏中移除'],
        zh_TW: ['從收藏移除'],
      }
    },
  },
])
