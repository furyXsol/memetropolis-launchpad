;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5516, 9685],
  {
    26574: (e) => {
      e.exports = {
        switcher: 'switcher-fwE97QDf',
        'thumb-wrapper': 'thumb-wrapper-fwE97QDf',
        'size-small': 'size-small-fwE97QDf',
        'size-medium': 'size-medium-fwE97QDf',
        'size-large': 'size-large-fwE97QDf',
        input: 'input-fwE97QDf',
        'intent-default': 'intent-default-fwE97QDf',
        'disable-active-state-styles': 'disable-active-state-styles-fwE97QDf',
        'intent-select': 'intent-select-fwE97QDf',
        track: 'track-fwE97QDf',
        thumb: 'thumb-fwE97QDf',
      }
    },
    88803: (e) => {
      e.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 430px)',
      }
    },
    17723: (e) => {
      e.exports = { footer: 'footer-dwINHZFL' }
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
    33963: (e) => {
      e.exports = {
        item: 'item-zwyEh4hn',
        label: 'label-zwyEh4hn',
        labelRow: 'labelRow-zwyEh4hn',
        toolbox: 'toolbox-zwyEh4hn',
      }
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
    17946: (e, t, a) => {
      'use strict'
      a.d(t, { CustomBehaviourContext: () => n })
      const n = (0, a(50959).createContext)({ enableActiveStateStyles: !0 })
      n.displayName = 'CustomBehaviourContext'
    },
    76974: (e, t, a) => {
      'use strict'
      a.d(t, { useIsMounted: () => i })
      var n = a(50959)
      const i = () => {
        const e = (0, n.useRef)(!1)
        return (
          (0, n.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1
              }
            ),
            [],
          ),
          e
        )
      }
    },
    24437: (e, t, a) => {
      'use strict'
      a.d(t, { DialogBreakpoints: () => i })
      var n = a(88803)
      const i = {
        SmallHeight: n['small-height-breakpoint'],
        TabletSmall: n['tablet-small-breakpoint'],
        TabletNormal: n['tablet-normal-breakpoint'],
      }
    },
    39362: (e, t, a) => {
      'use strict'
      a.d(t, { SymbolSearchDialogFooter: () => l })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(17723)
      function l(e) {
        const { className: t, children: a } = e
        return n.createElement('div', { className: s()(o.footer, t) }, a)
      }
    },
    36189: (e, t, a) => {
      'use strict'
      a.d(t, { FavoriteButton: () => d })
      var n = a(44352),
        i = a(50959),
        s = a(97754),
        o = a(9745),
        l = a(39146),
        r = a(48010),
        h = a(14877)
      const c = {
        add: n.t(null, void 0, a(44629)),
        remove: n.t(null, void 0, a(72482)),
      }
      function d(e) {
        const { className: t, isFilled: a, isActive: n, onClick: d, ...u } = e
        return i.createElement(o.Icon, {
          ...u,
          className: s(
            h.favorite,
            'apply-common-tooltip',
            a && h.checked,
            n && h.active,
            t,
          ),
          icon: a ? l : r,
          onClick: d,
          title: a ? c.remove : c.add,
        })
      }
    },
    37968: (e, t, a) => {
      'use strict'
      a.d(t, { useForceUpdate: () => i })
      var n = a(50959)
      const i = () => {
        const [, e] = (0, n.useReducer)((e) => e + 1, 0)
        return e
      }
    },
    70412: (e, t, a) => {
      'use strict'
      a.d(t, {
        hoverMouseEventFilter: () => s,
        useAccurateHover: () => o,
        useHover: () => i,
      })
      var n = a(50959)
      function i() {
        const [e, t] = (0, n.useState)(!1)
        return [
          e,
          {
            onMouseOver: function (e) {
              s(e) && t(!0)
            },
            onMouseOut: function (e) {
              s(e) && t(!1)
            },
          },
        ]
      }
      function s(e) {
        return !e.currentTarget.contains(e.relatedTarget)
      }
      function o(e) {
        const [t, a] = (0, n.useState)(!1)
        return (
          (0, n.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return
              const n = e.current.contains(t.target)
              a(n)
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
    81332: (e, t, a) => {
      'use strict'
      a.d(t, { multilineLabelWithIconAndToolboxTheme: () => o })
      var n = a(40173),
        i = a(71986),
        s = a(33963)
      const o = (0, n.mergeThemes)(i, s)
    },
    96040: (e, t, a) => {
      'use strict'
      a.d(t, { RemoveButton: () => h })
      var n = a(44352),
        i = a(50959),
        s = a(97754),
        o = a(9745),
        l = a(33765),
        r = a(27306)
      function h(e) {
        const {
          className: t,
          isActive: h,
          onClick: c,
          onMouseDown: d,
          title: u,
          hidden: v,
          'data-name': m = 'remove-button',
          ...p
        } = e
        return i.createElement(o.Icon, {
          ...p,
          'data-name': m,
          className: s(
            r.button,
            'apply-common-tooltip',
            h && r.active,
            v && r.hidden,
            t,
          ),
          icon: l,
          onClick: c,
          onMouseDown: d,
          title: u || n.t(null, void 0, a(34596)),
        })
      }
    },
    47102: (e) => {
      e.exports = {
        accessible: 'accessible-NQERJsv9',
        active: 'active-NQERJsv9',
      }
    },
    12989: (e) => {
      e.exports = {
        summary: 'summary-ynHBVe1n',
        hovered: 'hovered-ynHBVe1n',
        caret: 'caret-ynHBVe1n',
      }
    },
    90785: (e) => {
      e.exports = { accessible: 'accessible-raQdxQp0' }
    },
    89089: (e) => {
      e.exports = { button: 'button-LkmyTVRc', active: 'active-LkmyTVRc' }
    },
    20461: (e) => {
      e.exports = {
        wrapper: 'wrapper-psOC5oyI',
        labelRow: 'labelRow-psOC5oyI',
        label: 'label-psOC5oyI',
        labelHint: 'labelHint-psOC5oyI',
        labelOn: 'labelOn-psOC5oyI',
      }
    },
    40670: (e) => {
      e.exports = {
        wrapper: 'wrapper-bl9AR3Gv',
        hovered: 'hovered-bl9AR3Gv',
        withIcon: 'withIcon-bl9AR3Gv',
        labelRow: 'labelRow-bl9AR3Gv',
        label: 'label-bl9AR3Gv',
        switchWrap: 'switchWrap-bl9AR3Gv',
        icon: 'icon-bl9AR3Gv',
        labelHint: 'labelHint-bl9AR3Gv',
        labelOn: 'labelOn-bl9AR3Gv',
      }
    },
    90826: (e) => {
      e.exports = { button: 'button-Y1TCZogJ', active: 'active-Y1TCZogJ' }
    },
    38456: (e) => {
      e.exports = {
        button: 'button-ptpAHg8E',
        withText: 'withText-ptpAHg8E',
        withoutText: 'withoutText-ptpAHg8E',
      }
    },
    67972: (e) => {
      e.exports = {
        form: 'form-MgR0zejo',
        input: 'input-MgR0zejo',
        menu: 'menu-MgR0zejo',
        add: 'add-MgR0zejo',
        hovered: 'hovered-MgR0zejo',
        wrap: 'wrap-MgR0zejo',
        accessible: 'accessible-MgR0zejo',
        menuLabel: 'menuLabel-MgR0zejo',
        hover: 'hover-MgR0zejo',
      }
    },
    39357: (e) => {
      e.exports = { spinnerWrap: 'spinnerWrap-cZT0OZe0' }
    },
    52045: (e) => {
      e.exports = {
        button: 'button-neROVfUe',
        first: 'first-neROVfUe',
        last: 'last-neROVfUe',
      }
    },
    97041: (e) => {
      e.exports = { wrap: 'wrap-n5bmFxyX' }
    },
    64618: (e) => {
      e.exports = { hidden: 'hidden-5MVS18J8' }
    },
    18369: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 430px)',
        item: 'item-o5a0MQMm',
        withIcon: 'withIcon-o5a0MQMm',
        shortcut: 'shortcut-o5a0MQMm',
        loading: 'loading-o5a0MQMm',
        icon: 'icon-o5a0MQMm',
      }
    },
    4549: (e) => {
      e.exports = {
        button: 'button-b3Cgff6l',
        group: 'group-b3Cgff6l',
        menu: 'menu-b3Cgff6l',
      }
    },
    27363: (e) => {
      e.exports = {
        customTradingViewStyleButton: 'customTradingViewStyleButton-zigjK1n2',
        withoutIcon: 'withoutIcon-zigjK1n2',
      }
    },
    75352: (e) => {
      e.exports = {
        dropdown: 'dropdown-l0nf43ai',
        label: 'label-l0nf43ai',
        smallWidthTitle: 'smallWidthTitle-l0nf43ai',
        smallWidthMenuItem: 'smallWidthMenuItem-l0nf43ai',
        smallWidthWrapper: 'smallWidthWrapper-l0nf43ai',
      }
    },
    20371: (e) => {
      e.exports = { value: 'value-gwXludjS', selected: 'selected-gwXludjS' }
    },
    867: (e) => {
      e.exports = {
        smallWidthMenuItem: 'smallWidthMenuItem-RmqZNwwp',
        menuItem: 'menuItem-RmqZNwwp',
        remove: 'remove-RmqZNwwp',
      }
    },
    80022: (e) => {
      e.exports = {
        button: 'button-S_1OCXUK',
        first: 'first-S_1OCXUK',
        last: 'last-S_1OCXUK',
        menu: 'menu-S_1OCXUK',
        dropdown: 'dropdown-S_1OCXUK',
        menuContent: 'menuContent-S_1OCXUK',
        section: 'section-S_1OCXUK',
        smallTabletSectionTitle: 'smallTabletSectionTitle-S_1OCXUK',
        addCustomInterval: 'addCustomInterval-S_1OCXUK',
        hovered: 'hovered-S_1OCXUK',
        group: 'group-S_1OCXUK',
      }
    },
    23902: (e) => {
      e.exports = { button: 'button-gn9HMufu' }
    },
    92998: (e) => {
      e.exports = {
        button: 'button-ZuDkGGhF',
        isDisabled: 'isDisabled-ZuDkGGhF',
      }
    },
    70152: (e) => {
      e.exports = {
        saveString: 'saveString-XVd1Kfjg',
        hidden: 'hidden-XVd1Kfjg',
        loader: 'loader-XVd1Kfjg',
      }
    },
    63672: (e) => {
      e.exports = {
        opened: 'opened-yyMUOAN9',
        hover: 'hover-yyMUOAN9',
        autoSaveWrapper: 'autoSaveWrapper-yyMUOAN9',
        sharingWrapper: 'sharingWrapper-yyMUOAN9',
        button: 'button-yyMUOAN9',
        buttonSmallPadding: 'buttonSmallPadding-yyMUOAN9',
        hintPlaceHolder: 'hintPlaceHolder-yyMUOAN9',
        smallHintPlaceHolder: 'smallHintPlaceHolder-yyMUOAN9',
        popupItemRowTabletSmall: 'popupItemRowTabletSmall-yyMUOAN9',
        shortcut: 'shortcut-yyMUOAN9',
        toolTitle: 'toolTitle-yyMUOAN9',
        toolTitleMobile: 'toolTitleMobile-yyMUOAN9',
        layoutItem: 'layoutItem-yyMUOAN9',
        layoutMeta: 'layoutMeta-yyMUOAN9',
        labelRow: 'labelRow-yyMUOAN9',
        layoutTitle: 'layoutTitle-yyMUOAN9',
        layoutItemWrap: 'layoutItemWrap-yyMUOAN9',
        layoutTitleMobile: 'layoutTitleMobile-yyMUOAN9',
        active: 'active-yyMUOAN9',
        textWrap: 'textWrap-yyMUOAN9',
        text: 'text-yyMUOAN9',
        withIcon: 'withIcon-yyMUOAN9',
        sharingLabelWrap: 'sharingLabelWrap-yyMUOAN9',
        infoIcon: 'infoIcon-yyMUOAN9',
        copyLink: 'copyLink-yyMUOAN9',
        copyLinkMobile: 'copyLinkMobile-yyMUOAN9',
      }
    },
    25882: (e) => {
      e.exports = {
        button: 'button-cq__ntSC',
        smallLeftPadding: 'smallLeftPadding-cq__ntSC',
        text: 'text-cq__ntSC',
        uppercase: 'uppercase-cq__ntSC',
      }
    },
    92710: (e) => {
      e.exports = { description: 'description-jgoQcEnP' }
    },
    5145: (e) => {
      e.exports = {
        item: 'item-j7oVl2yI',
        accessible: 'accessible-j7oVl2yI',
        round: 'round-j7oVl2yI',
      }
    },
    85013: (e) => {
      e.exports = {
        wrap: 'wrap-HXSqojvq',
        titleWrap: 'titleWrap-HXSqojvq',
        indicators: 'indicators-HXSqojvq',
        title: 'title-HXSqojvq',
        icon: 'icon-HXSqojvq',
        text: 'text-HXSqojvq',
        titleTabletSmall: 'titleTabletSmall-HXSqojvq',
        labelRow: 'labelRow-HXSqojvq',
        label: 'label-HXSqojvq',
      }
    },
    48261: (e) => {
      e.exports = {
        labelRow: 'labelRow-JeQoCpvi',
        toolbox: 'toolbox-JeQoCpvi',
        description: 'description-JeQoCpvi',
        descriptionTabletSmall: 'descriptionTabletSmall-JeQoCpvi',
        item: 'item-JeQoCpvi',
        titleItem: 'titleItem-JeQoCpvi',
        remove: 'remove-JeQoCpvi',
        titleItemTabletSmall: 'titleItemTabletSmall-JeQoCpvi',
        itemTabletSmall: 'itemTabletSmall-JeQoCpvi',
        itemLabelTabletSmall: 'itemLabelTabletSmall-JeQoCpvi',
        wrap: 'wrap-JeQoCpvi',
        hovered: 'hovered-JeQoCpvi',
      }
    },
    36001: (e) => {
      e.exports = {
        menu: 'menu-hcofKPms',
        menuSmallTablet: 'menuSmallTablet-hcofKPms',
        menuItemHeaderTabletSmall: 'menuItemHeaderTabletSmall-hcofKPms',
        menuItemHeader: 'menuItemHeader-hcofKPms',
      }
    },
    70760: (e) => {
      e.exports = {
        wrap: 'wrap-jiC5bgmi',
        full: 'full-jiC5bgmi',
        first: 'first-jiC5bgmi',
        last: 'last-jiC5bgmi',
        medium: 'medium-jiC5bgmi',
        buttonWithFavorites: 'buttonWithFavorites-jiC5bgmi',
      }
    },
    57778: (e) => {
      e.exports = { icon: 'icon-uMfL97K2' }
    },
    81351: (e, t, a) => {
      'use strict'
      a.d(t, { AccessibleMenuItem: () => d })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(3343),
        l = a(50238),
        r = a(16838),
        h = a(16396),
        c = a(47102)
      function d(e) {
        const { className: t, ...a } = e,
          [i, d] = (0, l.useRovingTabindexElement)(null)
        return n.createElement(h.PopupMenuItem, {
          ...a,
          className: s()(
            r.PLATFORM_ACCESSIBILITY_ENABLED && c.accessible,
            e.isActive && c.active,
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
            const t = (0, o.hashFromEvent)(e)
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
    76197: (e, t, a) => {
      'use strict'
      a.d(t, { CollapsibleSection: () => r })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(10381),
        l = a(12989)
      const r = (0, n.forwardRef)(function (e, t) {
        const {
          open: a,
          summary: i,
          children: r,
          onStateChange: h,
          tabIndex: c,
          className: d,
          ...u
        } = e
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            'div',
            {
              ...u,
              className: s()(d, l.summary),
              onClick: function () {
                h && h(!a)
              },
              'data-open': a,
              ref: t,
              tabIndex: c,
            },
            i,
            n.createElement(o.ToolWidgetCaret, {
              className: l.caret,
              dropped: Boolean(a),
            }),
          ),
          a && r,
        )
      })
    },
    12165: (e, t, a) => {
      'use strict'
      a.d(t, { MenuFavoriteButton: () => c })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(50238),
        l = a(16838),
        r = a(36189),
        h = a(89089)
      function c(e) {
        const { tooltip: t, onClick: a, ...i } = e,
          [c, d] = (0, o.useRovingTabindexElement)(null)
        return l.PLATFORM_ACCESSIBILITY_ENABLED
          ? n.createElement(
              'button',
              {
                ref: c,
                tabIndex: d,
                onClick: a,
                className: s()(h.button, i.isActive && h.active),
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
    69297: (e, t, a) => {
      'use strict'
      a.d(t, {
        DEFAULT_MENU_ITEM_SWITCHER_THEME: () => m,
        MenuItemSwitcher: () => p,
      })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(17946),
        l = a(26574),
        r = a.n(l)
      function h(e) {
        const t = (0, n.useContext)(o.CustomBehaviourContext),
          {
            className: a,
            intent: s = 'default',
            size: l = 'small',
            enableActiveStateStyles: h = t.enableActiveStateStyles,
          } = e
        return i(
          a,
          r().switcher,
          r()[`size-${l}`],
          r()[`intent-${s}`],
          !h && r()['disable-active-state-styles'],
        )
      }
      function c(e) {
        var t
        const {
            reference: a,
            size: i,
            intent: s,
            role: o,
            'aria-checked': l,
            checked: c,
            defaultChecked: d,
            onKeyDown: u,
            ...v
          } = e,
          m = (0, n.useCallback)(
            (e) => {
              13 === e.keyCode && e.target.click(), u && u(e)
            },
            [u],
          )
        return n.createElement(
          'span',
          { className: h(e) },
          n.createElement('input', {
            ...v,
            type: 'checkbox',
            className: r().input,
            ref: a,
            role: null != o ? o : 'switch',
            'aria-checked':
              null !== (t = null != l ? l : c) && void 0 !== t ? t : d,
            checked: c,
            defaultChecked: d,
            onKeyDown: m,
          }),
          n.createElement(
            'span',
            { className: r()['thumb-wrapper'] },
            n.createElement('span', { className: r().track }),
            n.createElement('span', { className: r().thumb }),
          ),
        )
      }
      var d = a(9745),
        u = a(90186),
        v = a(40670)
      const m = v
      function p(e) {
        const {
            className: t,
            checked: a,
            id: i,
            label: o,
            labelDescription: l,
            value: r,
            preventLabelHighlight: h,
            reference: m,
            switchReference: p,
            theme: g = v,
            disabled: b,
            icon: C,
          } = e,
          S = s()(g.label, a && !h && g.labelOn),
          _ = s()(
            t,
            g.wrapper,
            a && g.wrapperWithOnLabel,
            l && g.wrapperWithDescription,
          )
        return n.createElement(
          'label',
          { className: s()(_, C && g.withIcon), htmlFor: i, ref: m },
          void 0 !== C &&
            n.createElement(d.Icon, { className: g.icon, icon: C }),
          n.createElement(
            'div',
            { className: g.labelRow },
            n.createElement('div', { className: S }, o),
            l && n.createElement('div', { className: g.labelHint }, l),
          ),
          n.createElement(
            'div',
            { className: v.switchWrap },
            n.createElement(c, {
              disabled: b,
              className: g.switch,
              reference: p,
              checked: a,
              onChange: function (t) {
                const a = t.target.checked
                void 0 !== e.onChange && e.onChange(a)
              },
              value: r,
              tabIndex: -1,
              id: i,
              role: e.switchRole,
              ...(0, u.filterDataProps)(e),
            }),
          ),
        )
      }
    },
    74628: (e, t, a) => {
      'use strict'
      a.d(t, { MenuRemoveButton: () => c })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(50238),
        l = a(16838),
        r = a(96040),
        h = a(90826)
      function c(e) {
        const { tooltip: t, onClick: a, ...i } = e,
          [c, d] = (0, o.useRovingTabindexElement)(null)
        return l.PLATFORM_ACCESSIBILITY_ENABLED
          ? n.createElement(
              'button',
              {
                ref: c,
                tabIndex: d,
                onClick: a,
                className: s()(h.button, i.isActive && h.active),
                type: 'button',
              },
              n.createElement(r.RemoveButton, {
                'aria-label': t,
                ...i,
                'data-tooltip': t,
              }),
            )
          : n.createElement(r.RemoveButton, { ...e, 'data-tooltip': t })
      }
    },
    65817: (e, t, a) => {
      'use strict'
      a.d(t, { INTERVALS: () => i })
      var n = a(44352)
      const i = [
        { name: '', label: n.t(null, { context: 'interval' }, a(37830)) },
        { name: 'H', label: n.t(null, { context: 'interval' }, a(5285)) },
        { name: 'D', label: n.t(null, { context: 'interval' }, a(6174)) },
        { name: 'W', label: n.t(null, { context: 'interval' }, a(25042)) },
        { name: 'M', label: n.t(null, { context: 'interval' }, a(79410)) },
      ]
    },
    54491: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { getRestrictedToolSet: () => $a })
      var n = a(14483),
        i = a(50959),
        s = a(19036),
        o = a(44352),
        l = a(82992),
        r = a(88732),
        h = a(45876),
        c = a(9745),
        d = a(50298),
        u = a(97754),
        v = a.n(u),
        m = a(97041)
      const p = i.forwardRef((e, t) => {
        const { children: a, className: n, ...s } = e
        return i.createElement(
          'div',
          { className: u(n, m.wrap), ref: t, ...s },
          a,
        )
      })
      var g = a(88066),
        b = a(52045)
      class C extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleClick = () => {
              const { onClick: e, onClickArg: t } = this.props
              e && e(t)
            })
        }
        render() {
          const {
            className: e,
            icon: t,
            hint: a,
            text: n,
            isDisabled: s,
            isActive: o,
            isFirst: l,
            isLast: r,
            onClick: h,
            onClickArg: c,
            ...d
          } = this.props
          return i.createElement(g.ToolbarButton, {
            ...d,
            icon: t,
            text: n,
            tooltip: a,
            isDisabled: s,
            isActive: o,
            isGrouped: !0,
            onClick: this._handleClick,
            className: u(e, b.button, { [b.first]: l, [b.last]: r }),
          })
        }
      }
      var S = a(51613),
        _ = a(90692),
        f = a(24437),
        w = a(81332),
        y = a(5962),
        E = a(16410),
        M = a(42960),
        T = a(47201),
        k = a(3343),
        I = a(16838)
      function x(e) {
        const { orientation: t, onKeyDown: a, ...n } = e,
          s = I.PLATFORM_ACCESSIBILITY_ENABLED
            ? { role: 'radiogroup', 'aria-orientation': t }
            : {}
        return i.createElement('div', {
          ...n,
          ...s,
          onKeyDown: (0, T.createSafeMulticastEventHandler)(function (e) {
            if (!I.PLATFORM_ACCESSIBILITY_ENABLED) return
            if (e.defaultPrevented) return
            if (!(document.activeElement instanceof HTMLElement)) return
            const a = (0, k.hashFromEvent)(e)
            if ('vertical' !== t && 38 !== a && 40 !== a) return
            if ('vertical' === t && 37 !== a && 39 !== a) return
            const n = ((i = e.currentTarget),
            Array.from(
              i.querySelectorAll(
                '[role="radio"]:not([disabled], [aria-disabled])',
              ),
            ).filter((0, I.createScopedVisibleElementFilter)(i))).sort(
              I.navigationOrderComparator,
            )
            var i
            if (0 === n.length) return
            const s = n.indexOf(document.activeElement)
            if (-1 === s) return
            e.preventDefault()
            const o = () => {
                const e = (s + n.length - 1) % n.length
                n[s].dispatchEvent(
                  new CustomEvent('roving-tabindex:secondary-element'),
                ),
                  n[e].dispatchEvent(
                    new CustomEvent('roving-tabindex:main-element'),
                  ),
                  n[e].focus()
              },
              l = () => {
                const e = (s + n.length + 1) % n.length
                n[s].dispatchEvent(
                  new CustomEvent('roving-tabindex:secondary-element'),
                ),
                  n[e].dispatchEvent(
                    new CustomEvent('roving-tabindex:main-element'),
                  ),
                  n[e].focus()
              }
            switch (a) {
              case 38:
                'vertical' !== t && o()
                break
              case 40:
                'vertical' !== t && l()
                break
              case 37:
                'vertical' === t && o()
                break
              case 39:
                'vertical' === t && l()
            }
          }, a),
        })
      }
      var A = a(81351),
        R = a(12165),
        N = a(4549)
      const F = { barsStyle: o.t(null, void 0, a(84232)) },
        O = (0, y.registryContextType)()
      function H(e) {
        var t
        return !(null === (t = l.linking.supportedChartStyles.value()) ||
        void 0 === t
          ? void 0
          : t.includes(e))
      }
      class L extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleChangeStyle = (e) => {
              const {
                favorites: t,
                lastSelectedNotFavorite: a,
                activeStyle: n,
              } = this.state
              this.setState({
                activeStyle: e,
                lastSelectedNotFavorite: t.includes(n) ? a : n,
              })
            }),
            (this._handleSelectStyle = (e) => {
              const { chartWidgetCollection: t } = this.context
              e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e)
            }),
            (this._handleClickFavorite = (e) => {
              this._isStyleFavorited(e)
                ? this._handleRemoveFavorite(e)
                : this._handleAddFavorite(e)
            }),
            (this._boundForceUpdate = () => {
              this.forceUpdate()
            }),
            (this._handleQuickClick = (e) => {
              this._handleSelectStyle(e), this._trackClick()
            }),
            (0, y.validateRegistry)(t, {
              chartWidgetCollection: s.any.isRequired,
              favoriteChartStylesService: s.any.isRequired,
            })
          const { chartWidgetCollection: a, favoriteChartStylesService: n } = t,
            i = a.activeChartStyle.value(),
            o = n.get(),
            l = (0, E.japaneseChartStyles)()
          this.state = {
            activeStyle: i,
            favorites: o,
            styles: (0, E.commonChartStyles)(),
            japaneseStyles: l,
          }
        }
        componentDidMount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } =
            this.context
          e.activeChartStyle.subscribe(this._handleChangeStyle),
            t.getOnChange().subscribe(this, this._handleChangeSettings),
            l.linking.supportedChartStyles.subscribe(this._boundForceUpdate)
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } =
            this.context
          e.activeChartStyle.unsubscribe(this._handleChangeStyle),
            t.getOnChange().unsubscribe(this, this._handleChangeSettings),
            l.linking.supportedChartStyles.unsubscribe(this._boundForceUpdate)
        }
        render() {
          const {
              isShownQuicks: e,
              displayMode: t = 'full',
              id: a,
            } = this.props,
            {
              activeStyle: n,
              favorites: s,
              styles: o,
              japaneseStyles: l,
              lastSelectedNotFavorite: u,
            } = this.state,
            v = 'small' !== t && e && 0 !== s.length,
            m = [...s]
          m.includes(n) ? void 0 !== u && m.push(u) : m.push(n)
          const g = v && m.length > 1
          return i.createElement(
            _.MatchMedia,
            { rule: f.DialogBreakpoints.TabletSmall },
            (e) => {
              const t = o.map((t) => this._renderPopupMenuItem(t, t === n, e)),
                s = l.map((t) => this._renderPopupMenuItem(t, t === n, e))
              return i.createElement(
                p,
                { id: a },
                g &&
                  i.createElement(
                    x,
                    { orientation: 'horizontal', className: N.group },
                    m.map((e, t) =>
                      i.createElement(C, {
                        role: 'radio',
                        className: N.button,
                        icon: h.SERIES_ICONS[e],
                        'aria-checked': v && n === e,
                        isActive: v && n === e,
                        isDisabled: H(e),
                        key: t,
                        hint: (0, M.getTranslatedChartStyleName)(e),
                        isFirst: 0 === t,
                        isLast: t === m.length - 1,
                        onClick: v ? this._handleQuickClick : void 0,
                        onClickArg: e,
                        'data-value': r.STYLE_SHORT_NAMES[e],
                      }),
                    ),
                  ),
                i.createElement(
                  d.ToolbarMenuButton,
                  {
                    arrow: Boolean(g),
                    content: g
                      ? void 0
                      : i.createElement(
                          p,
                          null,
                          i.createElement(c.Icon, { icon: h.SERIES_ICONS[n] }),
                        ),
                    tooltip: g
                      ? F.barsStyle
                      : (0, M.getTranslatedChartStyleName)(n),
                    className: N.menu,
                    isDrawer: e,
                    onClick: this._trackClick,
                  },
                  t,
                  !!s.length && i.createElement(S.PopupMenuSeparator, null),
                  s,
                ),
              )
            },
          )
        }
        _renderPopupMenuItem(e, t, a) {
          const { isFavoritingAllowed: n } = this.props,
            s = this._isStyleFavorited(e)
          return i.createElement(A.AccessibleMenuItem, {
            key: e,
            theme: a ? w.multilineLabelWithIconAndToolboxTheme : void 0,
            icon: h.SERIES_ICONS[e],
            isActive: t,
            isDisabled: H(e),
            label: (0, M.getTranslatedChartStyleName)(e) || '',
            onClick: this._handleSelectStyle,
            onClickArg: e,
            showToolboxOnHover: !s,
            showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
            toolbox:
              n &&
              i.createElement(R.MenuFavoriteButton, {
                isActive: t,
                isFilled: s,
                onClick: () => this._handleClickFavorite(e),
              }),
            'data-value': r.STYLE_SHORT_NAMES[e],
          })
        }
        _handleChangeSettings(e) {
          this.setState({ lastSelectedNotFavorite: void 0, favorites: e })
        }
        _isStyleFavorited(e) {
          return -1 !== this.state.favorites.indexOf(e)
        }
        _handleAddFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: a } = this.context
          a.set([...t, e])
        }
        _handleRemoveFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: a } = this.context
          a.set(t.filter((t) => t !== e))
        }
        _trackClick() {
          0
        }
      }
      L.contextType = O
      var D = a(50238),
        P = a(31409),
        B = a(38456)
      const U = ['medium', 'small'],
        W = (0, i.forwardRef)(function (e, t) {
          const {
              text: a,
              className: n,
              displayMode: s,
              collapseWhen: o = U,
              ...l
            } = e,
            r = !o.includes(s)
          return i.createElement(P.ToolWidgetButton, {
            ...l,
            ref: t,
            text: r ? a : void 0,
            className: u(n, B.button, r ? B.withText : B.withoutText),
          })
        })
      function z(e) {
        const { tooltip: t, ...a } = e,
          [n, s] = (0, D.useRovingTabindexElement)(null)
        return i.createElement(W, {
          'aria-label': I.PLATFORM_ACCESSIBILITY_ENABLED ? t : void 0,
          ...a,
          tag: I.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div',
          tabIndex: s,
          ref: n,
          'data-tooltip': t,
        })
      }
      var V = a(51768),
        Z = a(76460),
        K = a(1393)
      const Q = (0, y.registryContextType)()
      class q extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ isActive: e })
            }),
            (this._handleClick = (e) => {
              var t
              ;(0, V.trackEvent)('GUI', 'Chart Header Toolbar', 'compare'),
                null === (t = this._compareDialogRenderer) ||
                  void 0 === t ||
                  t.show({ shouldReturnFocus: (0, Z.isKeyboardClick)(e) })
            }),
            (0, y.validateRegistry)(t, {
              chartWidgetCollection: s.any.isRequired,
            }),
            (this.state = { isActive: !1 }),
            (this._compareDialogRenderer =
              this.context.chartWidgetCollection.getCompareDialogRenderer())
        }
        componentDidMount() {
          var e
          null === (e = this._compareDialogRenderer) ||
            void 0 === e ||
            e.visible().subscribe(this._updateState)
        }
        componentWillUnmount() {
          var e
          null === (e = this._compareDialogRenderer) ||
            void 0 === e ||
            e.visible().unsubscribe(this._updateState)
        }
        render() {
          const { isActive: e } = this.state
          return i.createElement(z, {
            ...this.props,
            icon: K,
            isOpened: e,
            onClick: this._handleClick,
            collapseWhen: ['full', 'medium', 'small'],
            tooltip: o.t(null, void 0, a(20229)),
          })
        }
      }
      q.contextType = Q
      var j = a(48889),
        G = a(61814),
        Y = a(68335),
        X = a(97268),
        $ = a(57047)
      const J = (0, G.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Shift, !1), 'F'],
          text: '{0} + {1}',
        }),
        ee = (0, y.registryContextType)()
      function te(e) {
        return e.fullscreen().value() ? $ : X
      }
      class ae extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = () => {
              this.setState({ icon: te(this.context.chartWidgetCollection) })
            }),
            (this._handleClick = () => {
              const { chartWidgetCollection: e } = this.context
              e.fullscreen().value() ? e.exitFullscreen() : e.startFullscreen()
            }),
            (0, y.validateRegistry)(t, {
              chartWidgetCollection: s.any.isRequired,
            }),
            (this.state = { icon: te(this.context.chartWidgetCollection) }),
            this._subscribe()
        }
        render() {
          const { className: e, id: t } = this.props,
            { icon: n } = this.state
          return i.createElement(j.ToolbarIconButton, {
            id: t,
            icon: n,
            onClick: this._handleClick,
            className: u(e),
            tooltip: o.t(null, void 0, a(11682)),
            'data-tooltip-hotkey': J,
          })
        }
        componentWillUnmount() {
          this._unsubscribe()
        }
        _subscribe() {
          this.context.chartWidgetCollection
            .fullscreen()
            .subscribe(this._updateState)
        }
        _unsubscribe() {
          this.context.chartWidgetCollection
            .fullscreen()
            .unsubscribe(this._updateState)
        }
      }
      ae.contextType = ee
      var ne = a(50151),
        ie = a(16396),
        se = a(81261)
      const oe = (0, a(59224).getLogger)('FavoritesInfo')
      function le(e, t) {
        if (0 === e.length) return Promise.resolve([])
        oe.logNormal('Requesting favorites info')
        const a = [],
          n = new Map(),
          i = new Map(),
          s = new Map()
        return (
          e.forEach((e) => {
            switch (e.type) {
              case 'java':
                s.set(e.studyId, e)
                break
              case 'pine':
                isPublishedPineId(e.pineId)
                  ? n.set(e.pineId, e)
                  : i.set(e.pineId, e)
                break
              default:
                ;(0, ne.assert)(
                  !1,
                  `unknown favorite type ${JSON.stringify(e)}`,
                )
            }
          }),
          0 !== s.size &&
            a.push(
              t
                .findAllJavaStudies()
                .then((e) => {
                  const t = new Map()
                  for (const a of e)
                    !a.is_hidden_study &&
                      s.has(a.id) &&
                      t.set(a.id, {
                        name: a.description,
                        localizedName: a.description_localized,
                        studyMarketShittyObject: a,
                      })
                  return t
                })
                .then((e) => {
                  const t = (function (e, t) {
                    const a = { items: [], notFoundItems: [] }
                    return (
                      e.forEach((e, n) => {
                        const i = t.get(n)
                        void 0 !== i
                          ? a.items.push({ item: e, info: i })
                          : a.notFoundItems.push(e)
                      }),
                      a
                    )
                  })(s, e)
                  if (0 !== t.notFoundItems.length) {
                    const e = t.notFoundItems.map((e) => e.studyId)
                    oe.logWarn(`Cannot find java scripts: ${JSON.stringify(e)}`)
                  }
                  return t.items
                }),
            ),
          Promise.all(a).then(
            (e) => (
              oe.logNormal('Requesting favorites info finished'),
              e.reduce((e, t) => e.concat(t), [])
            ),
          )
        )
      }
      var re = a(92249),
        he = a(88348),
        ce = a(26996),
        de = a(39357)
      function ue(e) {
        const { className: t } = e
        return i.createElement(
          'div',
          { className: v()(de.spinnerWrap, t) },
          i.createElement(ce.Loader, null),
        )
      }
      var ve = a(82962),
        me = a(76422),
        pe = a(39681),
        ge = a(75352)
      const be = (0, G.hotKeySerialize)({ keys: ['/'], text: '{0}' }),
        Ce = (0, y.registryContextType)()
      class Se extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._promise = null),
            (this._menu = i.createRef()),
            (this._menuItemsContainer = i.createRef()),
            (this._favoriteFundamentalsModel = null),
            (this._setActiveState = (e) => {
              this.setState({ isActive: e })
            }),
            (this._handleClick = (e) => {
              const { studyMarket: t } = this.props
              this.setState({ isActive: !0 }, () => {
                t.visible().value()
                  ? t.hide()
                  : t.show({ shouldReturnFocus: (0, Z.isKeyboardClick)(e) })
              }),
                this._trackClick()
            }),
            (this._handleSelectIndicator = (e) => {
              ;(e = (0, ne.ensureDefined)(e)),
                this._trackFavoriteAction('Favorite indicator from toolbar')
              'java' === e.type ? e.studyId : e.pineId
              ;(() => {
                e = (0, ne.ensureDefined)(e)
                const { chartWidgetCollection: t } = this.context
                if ('java' === e.type) {
                  const t = (0, re.tryFindStudyLineToolNameByStudyId)(e.studyId)
                  if (null !== t) return void he.tool.setValue(t)
                }
                t.activeChartWidget.value().insertStudy(e, [])
              })()
            }),
            (this._handleFavoriteIndicatorsChange = () => {
              const { favoriteScriptsModel: e } = this.context,
                t = [...(0, ne.ensureDefined)(e).favorites()]
              this.setState({ favorites: t }), this._clearCache()
            }),
            (this._handleFavoriteFundamentalsChange = () => {
              var e
              const t = new Set(
                (null === (e = this._favoriteFundamentalsModel) || void 0 === e
                  ? void 0
                  : e.favorites()) || [],
              )
              this.setState({ favoriteFundamentals: t }), this._clearCache()
            }),
            (this._handleMouseEnter = () => {
              this._prefetchFavorites()
            }),
            (this._handleWrapClick = () => {
              this._prefetchFavorites()
            }),
            (this._handleChangeActiveWidget = () => {
              this._clearCache()
            }),
            (this._clearCache = () => {
              ;(this._promise = null), this.setState({ infos: [] })
            }),
            (this._handleScriptRenamed = (e) => {
              const { favoriteScriptsModel: t } = this.context
              void 0 !== t && t.isFav(e.scriptIdPart) && this._clearCache()
            }),
            (this._handleFavoriteMenuClick = () => {
              this._trackClick(),
                this._trackFavoriteAction('Select favorite indicators dropdown')
            }),
            (0, y.validateRegistry)(t, {
              favoriteScriptsModel: s.any,
              chartWidgetCollection: s.any.isRequired,
            })
          const { favoriteScriptsModel: a } = t,
            n = void 0 !== a ? a.favorites() : []
          this.state = {
            isActive: !1,
            isLoading: !1,
            favorites: n,
            favoriteFundamentals: void 0,
            infos: [],
          }
        }
        componentDidMount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: a } = this.context
          e.visible().subscribe(this._setActiveState),
            void 0 !== t &&
              (t
                .favoritesChanged()
                .subscribe(this, this._handleFavoriteIndicatorsChange),
              a.activeChartWidget.subscribe(this._handleChangeActiveWidget)),
            me.on('TVScriptRenamed', this._handleScriptRenamed, null)
        }
        componentWillUnmount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: a } = this.context
          e.visible().unsubscribe(this._setActiveState),
            void 0 !== t &&
              (t
                .favoritesChanged()
                .unsubscribe(this, this._handleFavoriteIndicatorsChange),
              a.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)),
            me.unsubscribe('TVScriptRenamed', this._handleScriptRenamed, null),
            (this._promise = null)
        }
        render() {
          const {
              isActive: e,
              favorites: t,
              favoriteFundamentals: n,
              isLoading: s,
            } = this.state,
            { className: l, displayMode: r, id: h } = this.props,
            { chartWidgetCollection: c } = this.context
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              p,
              {
                id: h,
                onMouseEnter: this._handleMouseEnter,
                onClick: this._handleWrapClick,
              },
              i.createElement(z, {
                displayMode: r,
                className: l,
                icon: pe,
                isOpened: e,
                onClick: this._handleClick,
                text: o.t(null, void 0, a(61142)),
                'data-role': 'button',
                'data-name': 'open-indicators-dialog',
                tooltip: o.t(null, void 0, a(74527)),
                'data-tooltip-hotkey': be,
              }),
              Boolean(t.length > 0 || (null == n ? void 0 : n.size)) &&
                i.createElement(
                  _.MatchMedia,
                  { rule: 'screen and (max-width: 430px)' },
                  (e) =>
                    i.createElement(
                      d.ToolbarMenuButton,
                      {
                        key: c.activeChartWidget.value().id(),
                        arrow: !0,
                        closeOnClickOutside: !0,
                        isDrawer: e,
                        drawerPosition: 'Bottom',
                        ref: this._menu,
                        menuReference: this._menuItemsContainer,
                        onClick: this._handleFavoriteMenuClick,
                        'data-name': 'show-favorite-indicators',
                        tooltip: o.t(null, void 0, a(33959)),
                      },
                      i.createElement(
                        'div',
                        {
                          className: v()(
                            ge.dropdown,
                            e && ge.smallWidthWrapper,
                          ),
                        },
                        i.createElement(
                          ve.ToolWidgetMenuSummary,
                          { className: e && ge.smallWidthTitle },
                          o.t(null, void 0, a(83127)),
                        ),
                        s && i.createElement(ue, null),
                        !s &&
                          i.createElement(
                            i.Fragment,
                            null,
                            this.state.infos.length > 0
                              ? this.state.infos.map((t) =>
                                  i.createElement(A.AccessibleMenuItem, {
                                    className: v()(e && ge.smallWidthMenuItem),
                                    theme: e
                                      ? w.multilineLabelWithIconAndToolboxTheme
                                      : void 0,
                                    key:
                                      'java' === t.item.type
                                        ? t.item.studyId
                                        : t.item.pineId,
                                    onClick: this._handleSelectIndicator,
                                    onClickArg: t.item,
                                    label: i.createElement(
                                      'span',
                                      {
                                        className: v()(
                                          !e && ge.label,
                                          e && ge.smallWidthLabel,
                                          'apply-overflow-tooltip',
                                        ),
                                      },
                                      _e(t),
                                    ),
                                  }),
                                )
                              : null !== this._promise &&
                                  i.createElement(ie.PopupMenuItem, {
                                    isDisabled: !0,
                                    label: o.t(null, void 0, a(23687)),
                                  }),
                          ),
                      ),
                    ),
                ),
            ),
          )
        }
        _prefetchFavorites() {
          const { chartWidgetCollection: e } = this.context
          if (null !== this._promise || !window.is_authenticated) return
          const t = e.activeChartWidget.value()
          if (!t.hasModel()) return
          const a = t.model().model().studyMetaInfoRepository()
          this.setState({ isLoading: !0 })
          const n = (this._promise = Promise.all([
            le(this.state.favorites, a),
            void 0,
          ]).then((e) => {
            if (n !== this._promise) return
            const [t, a] = e
            let i = [...t]
            if (a) {
              const e = a
                .filter((e) => {
                  var t
                  return null === (t = this.state.favoriteFundamentals) ||
                    void 0 === t
                    ? void 0
                    : t.has(e.scriptIdPart)
                })
                .map(this._mapFundamentalToFavoriteItemInfo)
              i.push(...e)
            }
            ;(i = [...i].sort((e, t) => _e(e).localeCompare(_e(t)))),
              this.setState({ infos: i, isLoading: !1 }, () => {
                var e
                null === (e = this._menu.current) || void 0 === e || e.update(),
                  this._menuItemsContainer.current &&
                    document.activeElement ===
                      this._menuItemsContainer.current &&
                    (0, se.focusFirstMenuItem)(this._menuItemsContainer.current)
              })
          }))
        }
        _trackClick() {
          0
        }
        _trackFavoriteAction(e) {
          ;(0, V.trackEvent)('GUI', 'Chart Header Toolbar', e)
        }
        _mapFundamentalToFavoriteItemInfo(e) {
          return {
            item: { type: 'pine', pineId: e.scriptIdPart },
            info: {
              name: e.scriptName,
              localizedName: getLocalizedFundamentalsName(e),
              studyMarketShittyObject: void 0,
            },
          }
        }
      }
      function _e(e) {
        return (
          e.info.localizedName ||
          o.t(e.info.name, { context: 'study' }, a(68716))
        )
      }
      Se.contextType = Ce
      var fe = a(94025),
        we = a(20371)
      function ye(e) {
        return i.createElement(
          'div',
          { className: u(we.value, { [we.selected]: e.isSelected }) },
          e.value,
          e.metric,
        )
      }
      var Ee = a(65817),
        Me = a(67972)
      function Te(e) {
        const { className: t, ...a } = e,
          [n, s] = (0, D.useRovingTabindexElement)(null),
          o = I.PLATFORM_ACCESSIBILITY_ENABLED ? 'button' : 'div'
        return i.createElement(o, {
          ...a,
          ref: n,
          tabIndex: s,
          'data-role': I.PLATFORM_ACCESSIBILITY_ENABLED ? 'menuitem' : void 0,
          className: v()(I.PLATFORM_ACCESSIBILITY_ENABLED && Me.accessible, t),
        })
      }
      function ke(e) {
        const { className: t, ...a } = e,
          [n, s] = (0, D.useRovingTabindexElement)(null)
        return i.createElement('input', {
          ...a,
          ref: n,
          tabIndex: s,
          'data-role': I.PLATFORM_ACCESSIBILITY_ENABLED ? 'menuitem' : void 0,
          className: v()(I.PLATFORM_ACCESSIBILITY_ENABLED && Me.accessible, t),
        })
      }
      class Ie extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._menu = i.createRef()),
            (this._handleChangeInput = (e) => {
              const { value: t } = e.currentTarget
              ;/^[0-9]*$/.test(t) && this.setState({ inputValue: t })
            }),
            (this._handleSelectTime = (e) => {
              var t, a, n, i
              this.setState({ selectedIntervalSuffix: e }),
                null === (a = (t = this.props).onSelect) ||
                  void 0 === a ||
                  a.call(t),
                null === (n = this._menu.current) || void 0 === n || n.close(),
                null === (i = this._menu.current) || void 0 === i || i.focus()
            }),
            (this._handleClickAdd = () => {
              const { inputValue: e, selectedIntervalSuffix: t } = this.state
              this.props.onAdd(e, t)
            }),
            (this.state = {
              inputValue: '1',
              selectedIntervalSuffix: Ee.INTERVALS[0].name,
            })
        }
        render() {
          const {
            inputValue: e,
            menuWidth: t,
            selectedIntervalSuffix: n,
          } = this.state
          return i.createElement(
            'div',
            { className: Me.form },
            i.createElement(ke, {
              className: Me.input,
              maxLength: 7,
              onChange: this._handleChangeInput,
              value: e,
            }),
            i.createElement(
              d.ToolbarMenuButton,
              {
                orientation: 'none',
                minWidth: t,
                'data-role': 'menuitem',
                onClose: this.props.onCloseMenu,
                onOpen: this.props.onOpenMenu,
                className: Me.menu,
                ref: this._menu,
                content: i.createElement(
                  'div',
                  { className: Me.menuLabel },
                  Ee.INTERVALS.find((e) => e.name === n).label,
                ),
              },
              Ee.INTERVALS.map((e) =>
                i.createElement(A.AccessibleMenuItem, {
                  dontClosePopup: !0,
                  key: e.name,
                  label: e.label,
                  onClick: this._handleSelectTime,
                  onClickArg: e.name,
                }),
              ),
            ),
            i.createElement(
              Te,
              { className: Me.add, onClick: this._handleClickAdd },
              o.t(null, void 0, a(54777)),
            ),
          )
        }
      }
      var xe = a(90186),
        Ae = a(70412),
        Re = a(32563),
        Ne = a(74628),
        Fe = a(867)
      function Oe(e) {
        const {
            interval: t,
            hint: a,
            isActive: n,
            isDisabled: s,
            isFavorite: o,
            isSignaling: l,
            onClick: r,
            onClickRemove: h,
            onClickFavorite: c,
            isSmallTablet: d,
          } = e,
          u = (0, xe.filterDataProps)(e),
          [m, p] = (0, Ae.useHover)(),
          g = i.useCallback((e) => h(t, e), [h, t]),
          b = i.useCallback(() => c(t), [c, t]),
          C = (0, i.useRef)(null)
        return (
          (0, i.useEffect)(() => {
            var e
            l &&
              d &&
              (null === (e = C.current) || void 0 === e || e.scrollIntoView())
          }, [l, d]),
          i.createElement(
            'div',
            { ...p, ref: C },
            i.createElement(A.AccessibleMenuItem, {
              ...u,
              className: v()(Fe.menuItem, d && Fe.smallWidthMenuItem),
              theme: d ? w.multilineLabelWithIconAndToolboxTheme : void 0,
              isActive: n,
              isDisabled: s,
              isHovered: l,
              onClick: r,
              onClickArg: t,
              toolbox: (function () {
                const { isRemovable: t, isFavoritingAllowed: a } = e,
                  l = i.createElement(Ne.MenuRemoveButton, {
                    key: 'remove',
                    isActive: n,
                    hidden: !Re.touch && !m,
                    onClick: g,
                    className: Fe.remove,
                  }),
                  r = i.createElement(R.MenuFavoriteButton, {
                    key: 'favorite',
                    isActive: n,
                    isFilled: o,
                    onClick: b,
                  })
                return [t && l, !s && a && r]
              })(),
              showToolboxOnHover: !o,
              showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
              label: a,
            }),
          )
        )
      }
      var He = a(36274)
      const Le = {
        [He.ResolutionKind.Ticks]: o.t(
          null,
          { context: 'interval_group_name' },
          a(30426),
        ),
        [He.ResolutionKind.Seconds]: o.t(
          null,
          { context: 'interval_group_name' },
          a(74973),
        ),
        [He.ResolutionKind.Minutes]: o.t(
          null,
          { context: 'interval_group_name' },
          a(57470),
        ),
        [He.SpecialResolutionKind.Hours]: o.t(
          null,
          { context: 'interval_group_name' },
          a(62346),
        ),
        [He.ResolutionKind.Days]: o.t(
          null,
          { context: 'interval_group_name' },
          a(74787),
        ),
        [He.ResolutionKind.Weeks]: o.t(
          null,
          { context: 'interval_group_name' },
          a(86614),
        ),
        [He.ResolutionKind.Months]: o.t(
          null,
          { context: 'interval_group_name' },
          a(94328),
        ),
        [He.ResolutionKind.Range]: o.t(
          null,
          { context: 'interval_group_name' },
          a(48801),
        ),
        [He.ResolutionKind.Invalid]: '',
      }
      function De(e, t = !1) {
        return { id: e, name: Le[e], items: [], mayOmitSeparator: t }
      }
      var Pe = a(57898),
        Be = a(29197),
        Ue = a(59064),
        We = a(76197),
        ze = a(90785)
      function Ve(e) {
        const { className: t, ...a } = e,
          [n, s] = (0, D.useRovingTabindexElement)(null)
        return i.createElement(We.CollapsibleSection, {
          ...a,
          ref: n,
          tabIndex: s,
          'data-role': I.PLATFORM_ACCESSIBILITY_ENABLED ? 'menuitem' : void 0,
          className: v()(I.PLATFORM_ACCESSIBILITY_ENABLED && ze.accessible, t),
          onKeyDown: function (e) {
            const t = (0, k.hashFromEvent)(e)
            ;(13 !== t && 32 !== t) ||
              (e.preventDefault(),
              n.current instanceof HTMLElement && n.current.click())
          },
        })
      }
      var Ze = a(80022)
      const Ke = {
          openDialog: o.t(null, void 0, a(79353)),
          timeInterval: o.t(null, void 0, a(32916)),
        },
        Qe = (0, G.hotKeySerialize)({
          keys: [','],
          text: o.t(null, void 0, a(14605)),
        }),
        qe = (0, y.registryContextType)(),
        je = new Pe.Delegate(),
        Ge = i.lazy(async () => ({
          default: (
            await Promise.all([
              a.e(1013),
              a.e(5145),
              a.e(855),
              a.e(2191),
              a.e(6221),
              a.e(4215),
              a.e(7194),
              a.e(2676),
              a.e(3016),
              a.e(4403),
              a.e(4013),
            ]).then(a.bind(a, 44762))
          ).ToolWidgetIntervalsAddDialog,
        }))
      class Ye extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._menu = i.createRef()),
            (this._menuItemsContainerRef = i.createRef()),
            (this._renderChildren = (e, t) => [
              ...this._createMenuItems(e, t),
              ...this._createIntervalForm(t),
            ]),
            (this._handleChangeInterval = (e) => {
              const { activeInterval: t, lastNotQuicked: a } = this.state,
                n = this._getQuicks()
              this.setState({
                activeInterval: (0, fe.normalizeIntervalString)(e),
                lastNotQuicked: void 0 === t || n.includes(t) ? a : t,
              })
            }),
            (this._bindedForceUpdate = () => {
              this.forceUpdate()
            }),
            (this._handleCloseMenu = () => {
              this.setState({ isOpenedFormMenu: !1 })
            }),
            (this._handleOpenMenu = () => {
              this.setState({ isOpenedFormMenu: !0 })
            }),
            (this._handleSelectInterval = (e) => {
              void 0 !== e &&
                e !== l.linking.interval.value() &&
                this.context.chartWidgetCollection.setResolution(e),
                e && (0, V.trackEvent)('GUI', 'Time Interval', e)
            }),
            (this._handleClickFavorite = (e) => {
              ;(e = (0, ne.ensureDefined)(e)),
                this._isIntervalFavorite(e)
                  ? this._handleRemoveFavorite(e)
                  : this._handleAddFavorite(e)
            }),
            (this._handleAddFavorite = (e) => {
              const { favorites: t } = this.state
              this.context.favoriteIntervalsService.set([...t, e])
            }),
            (this._handleRemoveFavorite = (e) => {
              const { favorites: t } = this.state
              this.context.favoriteIntervalsService.set(
                t.filter((t) => t !== e),
              )
            }),
            (this._handleAddInterval = (e, t) => {
              const { intervalService: a } = this.context,
                n = a.add(e, t)
              n && this.setState({ lastAddedInterval: n })
            }),
            (this._handleRemoveInterval = (e, t) => {
              var a
              const { intervalService: n } = this.context
              if (e) {
                if (
                  I.PLATFORM_ACCESSIBILITY_ENABLED &&
                  t &&
                  (0, Z.isKeyboardClick)(t) &&
                  this._menuItemsContainerRef.current
                ) {
                  const t = (0, se.queryMenuElements)(
                      this._menuItemsContainerRef.current,
                    ),
                    n = t.findIndex((t) => t.matches(`[data-value="${e}"]`))
                  if (-1 !== n) {
                    const e =
                      null !== (a = t[n + 1]) && void 0 !== a ? a : t[n - 1]
                    e
                      ? e.focus()
                      : (0, se.focusFirstMenuItem)(
                          this._menuItemsContainerRef.current,
                        )
                  }
                }
                n.remove(e), this._handleRemoveFavorite(e)
              }
            }),
            (this._getHandleSectionStateChange = (e) => (t) => {
              const { menuViewState: a } = this.state,
                { intervalsMenuViewStateService: n } = this.context
              n.set({ ...a, [e]: !t })
            }),
            (this._handleOpenAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !0 })
            }),
            (this._handleCloseAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !1 })
            }),
            (this._handleGlobalClose = () => {
              const { isFake: e } = this.props,
                { isAddIntervalDialogOpened: t } = this.state
              e || t || je.fire()
            }),
            (this._handeQuickClick = (e) => {
              this._handleSelectInterval(e), this._trackClick()
            }),
            (this._updateMenuPosition = () => {
              var e
              null === (e = this._menu.current) || void 0 === e || e.update()
            }),
            (0, y.validateRegistry)(t, {
              chartApiInstance: s.any.isRequired,
              favoriteIntervalsService: s.any.isRequired,
              intervalService: s.any.isRequired,
              intervalsMenuViewStateService: s.any.isRequired,
            })
          const {
            chartApiInstance: a,
            favoriteIntervalsService: o,
            intervalService: r,
            intervalsMenuViewStateService: h,
          } = t
          this._customIntervals = n.enabled('custom_resolutions')
          const c = l.linking.interval.value(),
            d = c && (0, fe.normalizeIntervalString)(c),
            u = o.get(),
            v = r.getCustomIntervals(),
            m = h.get()
          ;(this._defaultIntervals = a
            .defaultResolutions()
            .filter(fe.isIntervalEnabled)
            .map(fe.normalizeIntervalString)),
            (this.state = {
              isOpenedFormMenu: !1,
              activeInterval: d,
              favorites: u,
              customs: v,
              menuViewState: m,
              isAddIntervalDialogOpened: !1,
            })
        }
        componentDidMount() {
          const {
            favoriteIntervalsService: e,
            intervalService: t,
            intervalsMenuViewStateService: a,
          } = this.context
          e.getOnChange().subscribe(this, this._handleChangeFavorites),
            a.getOnChange().subscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().subscribe(this, this._handleChangeCustoms),
            l.linking.interval.subscribe(this._handleChangeInterval),
            l.linking.intraday.subscribe(this._bindedForceUpdate),
            l.linking.seconds.subscribe(this._bindedForceUpdate),
            l.linking.ticks.subscribe(this._bindedForceUpdate),
            l.linking.range.subscribe(this._bindedForceUpdate),
            l.linking.supportedResolutions.subscribe(this._bindedForceUpdate),
            l.linking.dataFrequencyResolution.subscribe(
              this._bindedForceUpdate,
            ),
            Ue.globalCloseDelegate.subscribe(this, this._handleGlobalClose)
        }
        componentWillUnmount() {
          const {
            favoriteIntervalsService: e,
            intervalService: t,
            intervalsMenuViewStateService: a,
          } = this.context
          e.getOnChange().unsubscribe(this, this._handleChangeFavorites),
            a.getOnChange().unsubscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().unsubscribe(this, this._handleChangeCustoms),
            l.linking.interval.unsubscribe(this._handleChangeInterval),
            l.linking.intraday.unsubscribe(this._bindedForceUpdate),
            l.linking.seconds.unsubscribe(this._bindedForceUpdate),
            l.linking.ticks.unsubscribe(this._bindedForceUpdate),
            l.linking.range.unsubscribe(this._bindedForceUpdate),
            l.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate),
            l.linking.dataFrequencyResolution.unsubscribe(
              this._bindedForceUpdate,
            ),
            Ue.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose)
        }
        componentDidUpdate(e, t) {
          this.state.lastAddedInterval &&
            setTimeout(() => this.setState({ lastAddedInterval: void 0 }), 400)
        }
        render() {
          const { isShownQuicks: e, id: t } = this.props,
            {
              activeInterval: a,
              customs: n,
              lastNotQuicked: s,
              isAddIntervalDialogOpened: o,
            } = this.state,
            l = this._getQuicks(),
            r = (0, fe.sortResolutions)([...l])
          void 0 !== a && r.includes(a)
            ? void 0 !== s && r.push(s)
            : void 0 !== a && r.push(a)
          const h = (!(!e || 0 === l.length) || void 0) && r.length > 1,
            c = {},
            v = (0, fe.mergeResolutions)(this._defaultIntervals, n)
          ;(void 0 !== a ? v.concat(a) : v)
            .filter(fe.isAvailable)
            .forEach((e) => (c[e] = !0))
          const m =
            void 0 !== a ? (0, fe.getTranslatedResolutionModel)(a) : null
          return i.createElement(
            p,
            { id: t },
            h &&
              i.createElement(
                x,
                { className: Ze.group, orientation: 'horizontal' },
                r.map((e, t) => {
                  const n = (0, fe.getTranslatedResolutionModel)(e)
                  return i.createElement(C, {
                    key: t,
                    role: 'radio',
                    className: u(Ze.button, {
                      [Ze.first]: 0 === t,
                      [Ze.last]: t === r.length - 1,
                    }),
                    text: i.createElement(ye, {
                      value: n.mayOmitMultiplier ? void 0 : n.multiplier,
                      metric: n.shortKind,
                    }),
                    hint: n.hint,
                    'aria-checked': a === e,
                    isActive: a === e,
                    isDisabled: !c[e] && e !== s,
                    onClick: this._handeQuickClick,
                    onClickArg: e,
                    'data-value': e,
                  })
                }),
              ),
            i.createElement(
              _.MatchMedia,
              { rule: f.DialogBreakpoints.TabletSmall },
              (e) =>
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    Be.CloseDelegateContext.Provider,
                    { value: je },
                    i.createElement(
                      d.ToolbarMenuButton,
                      {
                        arrow: Boolean(h),
                        closeOnClickOutside: !0,
                        content:
                          h || null === m
                            ? void 0
                            : i.createElement(
                                p,
                                { className: Ze.menuContent },
                                i.createElement(ye, {
                                  value: m.mayOmitMultiplier
                                    ? void 0
                                    : m.multiplier,
                                  metric: m.shortKind,
                                }),
                              ),
                        hotKey: h ? Qe : void 0,
                        className: Ze.menu,
                        ref: this._menu,
                        isDrawer: e,
                        onClick: this._trackClick,
                        tooltip: h || null === m ? Ke.timeInterval : m.hint,
                        menuReference: this._menuItemsContainerRef,
                      },
                      i.createElement(
                        'div',
                        { className: Ze.dropdown },
                        this._renderChildren(v, e),
                      ),
                    ),
                  ),
                  e &&
                    o &&
                    i.createElement(
                      i.Suspense,
                      { fallback: null },
                      i.createElement(Ge, {
                        onAdd: this._handleAddInterval,
                        onClose: this._handleCloseAddIntervalDialog,
                        onUnmount: this._handleCloseAddIntervalDialog,
                      }),
                    ),
                ),
            ),
          )
        }
        _createMenuItems(e, t) {
          const a = (function (e) {
            const t = De(He.ResolutionKind.Ticks),
              a = De(He.ResolutionKind.Seconds),
              n = De(He.ResolutionKind.Minutes),
              i = De(He.SpecialResolutionKind.Hours),
              s = De(He.ResolutionKind.Days),
              o = De(He.ResolutionKind.Range)
            return (
              e.forEach((e) => {
                const l = He.Interval.parse(e)
                l.isMinuteHours()
                  ? i.items.push(e)
                  : l.isMinutes()
                    ? (0, He.isHour)(Number(l.multiplier()))
                      ? i.items.push(e)
                      : n.items.push(e)
                    : l.isSeconds()
                      ? a.items.push(e)
                      : l.isDWM()
                        ? s.items.push(e)
                        : l.isRange()
                          ? o.items.push(e)
                          : l.isTicks() && t.items.push(e)
              }),
              [t, a, n, i, s, o].filter((e) => 0 !== e.items.length)
            )
          })(e).map((e, a, n) =>
            this._renderResolutionsGroup(e, 1 === n.length, t),
          )
          return (function (e) {
            let t = !1
            return e.filter((e, a, n) => {
              let i = !0
              return (
                e.type === S.PopupMenuSeparator &&
                  ((0 !== a && a !== n.length - 1) || (i = !1), t && (i = !1)),
                (t = e.type === S.PopupMenuSeparator),
                i
              )
            })
          })([].concat(...a))
        }
        _createIntervalForm(e) {
          if (this._customIntervals) {
            const t = e
              ? i.createElement(Xe, {
                  key: 'add-dialog',
                  onClick: this._handleOpenAddIntervalDialog,
                })
              : i.createElement(Ie, {
                  key: 'add-form',
                  onAdd: this._handleAddInterval,
                  onCloseMenu: this._handleCloseMenu,
                  onOpenMenu: this._handleOpenMenu,
                  onSelect: this._updateMenuPosition,
                })
            return [
              i.createElement(S.PopupMenuSeparator, {
                key: 'custom-interval-separator',
              }),
              t,
            ]
          }
          return []
        }
        _renderResolutionsGroup(e, t = !1, a) {
          const n = [],
            s = e.items.map((e) => this._renderPopupMenuItem(e, a))
          if (t) n.push(...s)
          else if (a) {
            const t = i.createElement($e, { key: e.id, title: e.name }, s)
            n.push(t)
          } else {
            const { intervalsMenuViewStateService: t } = this.context,
              { menuViewState: a } = this.state
            if (!t.isAllowed(e.id)) return []
            const o = i.createElement(
              Ve,
              {
                key: e.id,
                className: Ze.section,
                summary: e.name,
                open: !a[e.id],
                onStateChange: this._getHandleSectionStateChange(e.id),
              },
              s,
            )
            n.push(o)
          }
          return (
            (!e.mayOmitSeparator || e.items.length > 1) &&
              (n.unshift(
                i.createElement(S.PopupMenuSeparator, {
                  key: `begin-${e.name}`,
                }),
              ),
              n.push(
                i.createElement(S.PopupMenuSeparator, { key: `end-${e.name}` }),
              )),
            n
          )
        }
        _handleChangeFavorites(e) {
          this.setState({ lastNotQuicked: void 0, favorites: e })
        }
        _handleChangeCustoms(e) {
          this.setState({ customs: e })
        }
        _handleChangeMenuViewState(e) {
          this.setState({ menuViewState: e }, () => {
            this._menu.current && this._menu.current.update()
          })
        }
        _renderPopupMenuItem(e, t) {
          const { isFavoritingAllowed: a } = this.props,
            { activeInterval: n, lastAddedInterval: s } = this.state,
            o = e === n,
            l = (0, fe.isAvailable)(e),
            r = this._isIntervalFavorite(e),
            h = this._isIntervalDefault(e),
            c = (0, fe.getTranslatedResolutionModel)(e)
          return i.createElement(Oe, {
            key: e,
            isSmallTablet: t,
            interval: e,
            hint: c.hint,
            isSignaling: s === e,
            isFavoritingAllowed: a,
            isDisabled: !l,
            isFavorite: r,
            isRemovable: !h,
            isActive: o,
            onClick: this._handleSelectInterval,
            onClickRemove: this._handleRemoveInterval,
            onClickFavorite: this._handleClickFavorite,
            'data-value': e,
          })
        }
        _isIntervalDefault(e) {
          return this._defaultIntervals.includes(e)
        }
        _isIntervalFavorite(e) {
          return this.state.favorites.includes(e)
        }
        _getQuicks(e) {
          return this.props.isShownQuicks && 'small' !== this.props.displayMode
            ? void 0 === e
              ? this.state.favorites
              : e
            : []
        }
        _trackClick() {
          0
        }
      }
      function Xe(e) {
        const { onClick: t, className: n } = e
        return i.createElement(
          'div',
          {
            key: 'add-dialog',
            className: u(Ze.addCustomInterval, n),
            onClick: t,
          },
          o.t(null, void 0, a(95798)) + '…',
        )
      }
      function $e(e) {
        const { children: t, title: a, className: n } = e
        return i.createElement(
          'div',
          { className: n },
          i.createElement('div', { className: Ze.smallTabletSectionTitle }, a),
          t,
        )
      }
      Ye.contextType = qe
      var Je = a(23902),
        et = a(82436)
      const tt = (0, y.registryContextType)()
      class at extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const {
                  chartWidgetCollection: e,
                  windowMessageService: t,
                  isFundamental: a,
                } = this.context,
                n = e.activeChartWidget.value()
              n.withModel(null, () => {
                t.post(parent, 'openChartInPopup', {
                  symbol: n.model().mainSeries().actualSymbol(),
                  interval: n.model().mainSeries().interval(),
                  fundamental: a,
                })
              })
            }),
            (0, y.validateRegistry)(t, {
              isFundamental: s.any,
              chartWidgetCollection: s.any.isRequired,
              windowMessageService: s.any.isRequired,
            })
        }
        render() {
          const { className: e } = this.props
          return i.createElement(j.ToolbarIconButton, {
            className: u(e, Je.button),
            icon: et,
            onClick: this._handleClick,
            tooltip: o.t(null, void 0, a(55520)),
          })
        }
      }
      at.contextType = tt
      var nt = a(48449)
      const it = (0, y.registryContextType)()
      class st extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ isOpened: e })
            }),
            (this._handleClick = (e) => {
              const { chartWidgetCollection: t } = this.context,
                a = t.activeChartWidget.value()
              ;(0, V.trackEvent)(
                'GUI',
                'Chart Header Toolbar',
                'chart properties',
              ),
                a.showGeneralChartProperties(void 0, {
                  shouldReturnFocus: (0, Z.isKeyboardClick)(e),
                })
            }),
            (0, y.validateRegistry)(t, {
              chartWidgetCollection: s.any.isRequired,
            }),
            (this.state = { isOpened: !1 }),
            (this._propertiesDialogRenderer =
              this.context.chartWidgetCollection.getChartPropertiesDialogRenderer())
        }
        componentDidMount() {
          var e
          null === (e = this._propertiesDialogRenderer) ||
            void 0 === e ||
            e.visible().subscribe(this._updateState)
        }
        componentWillUnmount() {
          var e
          null === (e = this._propertiesDialogRenderer) ||
            void 0 === e ||
            e.visible().unsubscribe(this._updateState)
        }
        render() {
          const { isOpened: e } = this.state
          return i.createElement(j.ToolbarIconButton, {
            ...this.props,
            icon: nt,
            isOpened: e,
            onClick: this._handleClick,
            tooltip: o.t(null, void 0, a(74207)),
          })
        }
      }
      st.contextType = it
      var ot = a(4741),
        lt = a(93352),
        rt = a(40173),
        ht = a(69297),
        ct = a(20461)
      ;(0, rt.mergeThemes)(ht.DEFAULT_MENU_ITEM_SWITCHER_THEME, ct)
      var dt = a(53180),
        ut = a(70152)
      function vt(e) {
        const { wasChanges: t, isSaving: n, className: s } = e
        return i.createElement(
          'span',
          { className: u(ut.saveString, !t && !n && ut.hidden, s) },
          n
            ? i.createElement(ce.Loader, {
                className: ut.loader,
                size: 'small',
                staticPosition: !0,
              })
            : o.t(null, void 0, a(85520)),
        )
      }
      var mt = a(36296),
        pt = a(63672),
        gt = a(92998)
      a(40670)
      const bt = n.enabled('widget'),
        Ct = o.t(null, void 0, a(75789)),
        St = (0, rt.mergeThemes)(P.DEFAULT_TOOL_WIDGET_BUTTON_THEME, gt),
        _t = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
          shortcut: pt.shortcut,
          withIcon: pt.withIcon,
        }),
        ft = o.t(null, void 0, a(80959)),
        wt = o.t(null, void 0, a(11680)),
        yt = [],
        Et = (0, G.hotKeySerialize)({
          keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), 'S'],
          text: '{0} + {1}',
        })
      class Mt extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._copyElRef = i.createRef()),
            (this._handleCopyLinkClick = () => Promise.resolve()),
            (this._handleCloneClick = () => {
              var e, t
              null === (t = (e = this.props).onCloneChart) ||
                void 0 === t ||
                t.call(e)
            }),
            (this._handleSaveClick = () => {
              var e, t
              null === (t = (e = this.props).onSaveChart) ||
                void 0 === t ||
                t.call(e),
                this._trackClick()
            }),
            (this._handleSaveAsClick = () => {
              var e, t
              null === (t = (e = this.props).onSaveAsChart) ||
                void 0 === t ||
                t.call(e)
            }),
            (this.state = { isSaving: !1 })
        }
        componentDidUpdate(e, t) {
          e.isProcessing &&
            !this.props.isProcessing &&
            (clearTimeout(this._timeout),
            (this._timeout = void 0),
            this.setState({ isSaving: !1 })),
            !e.isProcessing &&
              this.props.isProcessing &&
              (this._timeout = setTimeout(() => {
                this.setState({ isSaving: !0 })
              }, 1e3))
        }
        componentWillUnmount() {
          this._timeout && clearTimeout(this._timeout)
        }
        render() {
          const {
              id: e,
              isReadOnly: t,
              displayMode: n,
              isProcessing: s,
              title: l,
              wasChanges: r,
              hideMenu: h,
              isTabletSmall: v,
              onOpenMenu: m,
              dataNameSaveMenu: g,
              isSaveDialogOpened: b,
            } = this.props,
            C = !t && !h,
            S = !(r || !l || this.state.isSaving),
            _ = i.createElement(
              'div',
              { className: pt.textWrap },
              i.createElement(
                'span',
                { className: pt.text },
                l || o.t(null, void 0, a(85520)),
              ),
              i.createElement(vt, {
                isSaving: this.state.isSaving,
                wasChanges: r,
              }),
            )
          return i.createElement(
            p,
            null,
            t
              ? i.createElement(
                  p,
                  null,
                  i.createElement(z, {
                    id: e,
                    displayMode: n,
                    icon: i.createElement(c.Icon, { icon: mt }),
                    isDisabled: s,
                    onClick: this._handleCloneClick,
                    text: o.t(null, void 0, a(35216)),
                    collapseWhen: yt,
                    tooltip: ft,
                  }),
                )
              : i.createElement(
                  p,
                  null,
                  i.createElement(z, {
                    id: e,
                    className: u(pt.button, C && pt.buttonSmallPadding),
                    displayMode: n,
                    'aria-disabled': !!S || void 0,
                    isDisabled: s,
                    onClick: S ? void 0 : this._handleSaveClick,
                    text: _,
                    theme: St,
                    collapseWhen: yt,
                    isOpened: b,
                    tooltip: S
                      ? o.t(null, void 0, a(88368))
                      : o.t(null, void 0, a(87409)),
                    'data-tooltip-hotkey': bt || S ? '' : Et,
                  }),
                  C &&
                    i.createElement(
                      d.ToolbarMenuButton,
                      {
                        'data-name': g,
                        arrow: !0,
                        isDrawer: v,
                        drawerPosition: 'Bottom',
                        onClick: this._trackClick,
                        onOpen: m,
                        tooltip: o.t(null, void 0, a(58219)),
                      },
                      this._renderMenuItems(Boolean(v)),
                    ),
                ),
          )
        }
        _renderMenuItems(e) {
          const {
              wasChanges: t,
              isProcessing: n,
              chartId: s,
              onSaveChartFromMenu: l,
              onRenameChart: r,
              onLoadChart: h,
              onNewChart: c,
              isAutoSaveEnabled: d,
              autoSaveId: v,
              sharingId: m,
              onAutoSaveChanged: p,
              isSharingEnabled: g,
              onSharingChanged: b,
              layoutItems: C,
              onExportData: _,
              isAuthenticated: f,
            } = this.props,
            y = e ? w.multilineLabelWithIconAndToolboxTheme : _t,
            E = e ? void 0 : (0, Y.humanReadableHash)(Y.Modifiers.Mod + 83),
            M = e ? void 0 : o.t(null, { context: 'hotkey' }, a(14229)),
            T = []
          return (
            T.push(
              i.createElement(ie.PopupMenuItem, {
                key: 'save',
                isDisabled: Boolean(n || (!t && s)),
                label: wt,
                onClick: l,
                shortcut: E,
                labelRowClassName: u(e && pt.popupItemRowTabletSmall),
                theme: y,
                'data-name': 'save-load-menu-item-save',
              }),
            ),
            void 0 !== s &&
              T.push(
                i.createElement(ie.PopupMenuItem, {
                  key: 'rename',
                  icon: void 0,
                  label: (0, dt.appendEllipsis)(o.t(null, void 0, a(35038))),
                  onClick: r,
                  labelRowClassName: u(e && pt.popupItemRowTabletSmall),
                  theme: y,
                  'data-name': 'save-load-menu-item-rename',
                }),
                i.createElement(ie.PopupMenuItem, {
                  key: 'save-as',
                  icon: void 0,
                  label: (0, dt.appendEllipsis)(ft),
                  onClick: this._handleSaveAsClick,
                  labelRowClassName: u(e && pt.popupItemRowTabletSmall),
                  theme: y,
                  'data-name': 'save-load-menu-item-clone',
                }),
              ),
            T.push(
              i.createElement(S.PopupMenuSeparator, {
                key: 'all-layouts-separator',
              }),
              i.createElement(ie.PopupMenuItem, {
                key: 'all-layouts',
                className: 'js-save-load-menu-item-load-chart',
                label: (0, dt.appendEllipsis)(Ct),
                onClick: h,
                labelRowClassName: u(e && pt.popupItemRowTabletSmall),
                theme: y,
                shortcut: M,
                'data-name': 'save-load-menu-item-load',
              }),
            ),
            T
          )
        }
        _trackClick() {
          0
        }
      }
      const Tt = (0, y.registryContextType)()
      class kt extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._exportDialogPromise = null),
            (this._layoutsAbortController = null),
            (this._requestRecentLayouts = () => {}),
            (this._handleExportData = () => {
              0
            }),
            (this._onSaveDialogVisibleChange = (e) => {
              this.setState({ isSaveDialogOpened: e })
            }),
            (this._syncState = (e) => {
              this.setState(e)
            }),
            (this._onChangeHasChanges = (e) => {
              this.state.wasChanges !== e && this.setState({ wasChanges: e })
            }),
            (this._onChangeAutoSaveEnabled = (e) => {
              0
            }),
            (this._onChangeSharingEnabled = (e) => {
              this.setState({ isSharingEnabled: e })
            }),
            (this._onChangeTitle = (e) => {
              this.setState({ title: e })
            }),
            (this._onChangeId = (e) => {
              this.setState({ id: e })
            }),
            (this._onChartAboutToBeSaved = () => {
              this.setState({ isProcessing: !0 })
            }),
            (this._onChartSaved = () => {
              this.setState({ isProcessing: !1 })
            }),
            (this._handleAutoSaveEnabled = (e) => {
              0
            }),
            (this._handleSharingEnabled = (e) => {
              0
            }),
            (this._handleClickSave = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(),
                this._trackEvent('Save click')
            }),
            (this._handleOpenMenu = () => {
              this._requestRecentLayouts()
            }),
            (this._handleClickSaveFromMenu = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(),
                this._trackEvent('Save From Menu')
            }),
            (this._handleClickClone = () => {
              this.context.saveChartService.cloneChart()
            }),
            (this._handleClickSaveAs = () => {
              this.context.saveChartService.saveChartAs(),
                this._trackEvent('Make a copy')
            }),
            (this._handleClickNew = () => {
              this._trackEvent('New chart layout')
            }),
            (this._handleClickLoad = () => {
              this.context.loadChartService.showLoadDialog()
              this._trackEvent('Load chart layout')
            }),
            (this._handleHotkey = () => {
              this.context.loadChartService.showLoadDialog()
            }),
            (this._handleClickRename = () => {
              this.context.saveChartService.renameChart(),
                this._trackEvent('Rename')
            }),
            (0, y.validateRegistry)(t, {
              chartWidgetCollection: s.any.isRequired,
              chartChangesWatcher: s.any.isRequired,
              saveChartService: s.any.isRequired,
              sharingChartService: s.any,
              loadChartService: s.any.isRequired,
            })
          const {
            chartWidgetCollection: a,
            chartChangesWatcher: n,
            saveChartService: i,
            sharingChartService: o,
          } = t
          this.state = {
            isAuthenticated: window.is_authenticated,
            isProcessing: !1,
            id: a.metaInfo.id.value(),
            title: a.metaInfo.name.value(),
            wasChanges: n.hasChanges(),
            iconHovered: !1,
            isSaveDialogOpened: !1,
          }
        }
        componentDidMount() {
          const { chartSaver: e, isFake: t, stateSyncEmitter: n } = this.props,
            {
              chartWidgetCollection: i,
              chartChangesWatcher: s,
              saveChartService: l,
              sharingChartService: r,
            } = this.context
          t
            ? n.on('change', this._syncState)
            : (s.getOnChange().subscribe(this, this._onChangeHasChanges),
              i.metaInfo.name.subscribe(this._onChangeTitle),
              i.metaInfo.id.subscribe(this._onChangeId),
              (this._hotkeys = (0, ot.createGroup)({ desc: 'Save/Load' })),
              this._hotkeys.add({
                desc: o.t(null, void 0, a(75687)),
                handler: this._handleHotkey,
                hotkey: 190,
              }),
              e.chartSaved().subscribe(this, this._onChartSaved),
              e
                .chartAboutToBeSaved()
                .subscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.subscribe(this, this._onLoginStateChange),
              this.context.saveChartService
                .getCreateController()
                .visible()
                .subscribe(this._onSaveDialogVisibleChange))
        }
        componentDidUpdate(e, t) {
          this.props.isFake ||
            (t !== this.state &&
              this.props.stateSyncEmitter.emit('change', this.state))
        }
        componentWillUnmount() {
          var e
          const { chartSaver: t, isFake: a, stateSyncEmitter: n } = this.props,
            {
              chartWidgetCollection: i,
              chartChangesWatcher: s,
              saveChartService: o,
              sharingChartService: l,
            } = this.context
          a
            ? n.off('change', this._syncState)
            : (s.getOnChange().unsubscribe(this, this._onChangeHasChanges),
              i.metaInfo.name.unsubscribe(this._onChangeTitle),
              i.metaInfo.id.unsubscribe(this._onChangeId),
              (0, ne.ensureDefined)(this._hotkeys).destroy(),
              t.chartSaved().unsubscribe(this, this._onChartSaved),
              t
                .chartAboutToBeSaved()
                .unsubscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.unsubscribe(
                this,
                this._onLoginStateChange,
              ),
              null === (e = this._layoutsAbortController) ||
                void 0 === e ||
                e.abort(),
              this.context.saveChartService
                .getCreateController()
                .visible()
                .unsubscribe(this._onSaveDialogVisibleChange))
        }
        render() {
          const {
              isReadOnly: e,
              displayMode: t,
              id: a,
              isFake: n,
            } = this.props,
            {
              isProcessing: s,
              isAuthenticated: o,
              title: l,
              id: r,
              wasChanges: h,
              isAutoSaveEnabled: c,
              isSharingEnabled: d,
              recentLayouts: u,
              isSaveDialogOpened: v,
            } = this.state,
            m = {
              displayMode: t,
              isReadOnly: e,
              isAuthenticated: o,
              isProcessing: s,
              wasChanges: h,
              title: l,
              id: a,
              isSaveDialogOpened: v,
              chartId: null !== r ? r : void 0,
              dataNameSaveMenu: n ? void 0 : 'save-load-menu',
              onCloneChart: this._handleClickClone,
              onSaveChart: this._handleClickSave,
              onSaveChartFromMenu: this._handleClickSaveFromMenu,
              onRenameChart: this._handleClickRename,
              onSaveAsChart: this._handleClickSaveAs,
              onLoadChart: this._handleClickLoad,
            }
          return i.createElement(
            _.MatchMedia,
            { rule: f.DialogBreakpoints.TabletSmall },
            (e) => i.createElement(Mt, { ...m, isTabletSmall: e }),
          )
        }
        _onLoginStateChange() {
          this.setState({ isAuthenticated: window.is_authenticated })
        }
        _trackEvent(e) {
          0
        }
      }
      kt.contextType = Tt
      var It = a(53166),
        xt = a(34928),
        At = a(79982)
      const Rt = new xt.DateTimeFormatter({
          dateTimeSeparator: '_',
          timeFormat: '%h-%m-%s',
        }),
        Nt = { takeSnapshot: o.t(null, void 0, a(88513)) },
        Ft = (0, y.registryContextType)()
      const Ot = o.t(null, void 0, a(90879))
      function Ht(e, t, a) {
        return (async function (e, t, a) {
          const n = URL.createObjectURL(
            new Blob(
              [
                `<!doctype html><html style="background-color:${getComputedStyle(document.documentElement).backgroundColor}"><head><meta charset="utf-8"><title>${Ot}</title></head><body style="background-color:${getComputedStyle(document.body).backgroundColor}"></body></html>`,
              ],
              { type: 'text/html' },
            ),
          )
          try {
            const i = open(n, t, a)
            if (!i) throw new Error('cound not open a new tab')
            const s = await e.catch(() => {})
            void 0 !== s ? i.location.replace(s) : i.close()
          } finally {
            URL.revokeObjectURL(n)
          }
        })(e, t, a)
      }
      var Lt = a(65446),
        Dt = a(65939),
        Pt = a(64618)
      function Bt(e) {
        const t = u(e.isLoading && Pt.hidden),
          a = u(!e.isLoading && Pt.hidden)
        return i.createElement(
          'div',
          null,
          i.createElement('span', { className: t }, e.children),
          i.createElement(
            'span',
            { className: a },
            i.createElement(ce.Loader, null),
          ),
        )
      }
      var Ut = a(76974),
        Wt = a(84502),
        zt = a(1457),
        Vt = a(23595),
        Zt = a(29414),
        Kt = a(99280),
        Qt = a(18369)
      const qt = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, Qt)
      function jt(e) {
        const { serverSnapshot: t, clientSnapshot: n, hideShortcuts: s } = e,
          [l, r] = (0, i.useState)(!1),
          [h, c] = (0, i.useState)(!1),
          [d, v] = (0, i.useState)(!1),
          [m, p] = (0, i.useState)(!1),
          g = (0, Ut.useIsMounted)(),
          b = (0, i.useCallback)(async () => {
            var e
            const t = n(),
              a = t.then(
                (e) =>
                  new Promise((t) =>
                    e.canvas.toBlob((e) => {
                      null !== e && t(e)
                    }),
                  ),
              )
            try {
              await (0, Lt.writePromiseUsingApi)(a, 'image/png'),
                me.emit('onClientScreenshotCopiedToClipboard')
            } catch (a) {
              const { canvas: n } = await t
              null === (e = window.open()) ||
                void 0 === e ||
                e.document.write(`<img width="100%" src="${n.toDataURL()}"/>`)
            }
          }, [n]),
          C = (0, i.useCallback)(async () => {
            const e = await n(),
              t = await (function (e) {
                return new Promise((t) => {
                  try {
                    e.canvas.toBlob((e) => {
                      if (null === e) throw new Error('Unable to generate blob')
                      t(URL.createObjectURL(e))
                    })
                  } catch (a) {
                    t(e.canvas.toDataURL())
                  }
                })
              })(e)
            t && (0, Dt.downloadFile)(`${e.name}.png`, t)
          }, [n]),
          S = (e) => Ht(e.then((e) => e.imageUrl)),
          _ = (0, i.useCallback)(
            async (e = !1) => {
              const a = t()
              try {
                if (e) await S(a)
                else {
                  const e = a.then(
                    (e) => new Blob([e.imageUrl], { type: 'text/plain' }),
                  )
                  await (0, Lt.writePromiseUsingApi)(e, 'text/plain'),
                    me.emit('onServerScreenshotCopiedToClipboard')
                }
                return !0
              } catch (e) {
                return S(a), !0
              } finally {
                g.current && (c(!1), r(!1), (0, Ue.globalCloseMenu)())
              }
            },
            [t],
          ),
          f =
            ((0, i.useCallback)(async () => {
              const e = t()
              try {
                const t = 720,
                  a = e.then(
                    (e) =>
                      new Blob(
                        [
                          `<img width="${t}" loading="lazy" src="${e.imageUrl}"/><p><a href="https://www.tradingview.com">${e.symbol} chart</a> by TradingView</p>`,
                        ],
                        { type: 'text/plain' },
                      ),
                  )
                return (
                  await (0, Lt.writePromiseUsingApi)(a, 'text/plain'),
                  me.emit('onServerScreenshotEmbedCodeCopiedToClipboard'),
                  !0
                )
              } catch (t) {
                return S(e), !0
              } finally {
                g.current && (v(!1), (0, Ue.globalCloseMenu)())
              }
            }, [t]),
            (0, i.useCallback)(async () => {
              p(!0)
              const [e, n] = await Promise.all([
                a.e(4665).then(a.bind(a, 65692)),
                t(),
              ])
              e.Twitter.shareSnapshotInstantly(n.symbol, n.imageUrl),
                g.current && (p(!1), (0, Ue.globalCloseMenu)())
            }, [t]))
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            ve.ToolWidgetMenuSummary,
            null,
            o.t(null, void 0, a(45888)),
          ),
          i.createElement(ie.PopupMenuItem, {
            'data-name': 'save-chart-image',
            label: o.t(null, void 0, a(39011)),
            icon: Vt,
            onClick: C,
            shortcut: s
              ? void 0
              : (0, Y.humanReadableHash)(
                  Y.Modifiers.Mod + Y.Modifiers.Alt + 83,
                ),
            theme: qt,
          }),
          i.createElement(ie.PopupMenuItem, {
            'data-name': 'copy-chart-image',
            label: o.t(null, void 0, a(43001)),
            icon: zt,
            onClick: b,
            shortcut: s
              ? void 0
              : (0, Y.humanReadableHash)(
                  Y.Modifiers.Mod + Y.Modifiers.Shift + 83,
                ),
            theme: qt,
          }),
          i.createElement(ie.PopupMenuItem, {
            'data-name': 'copy-link-to-the-chart-image',
            label: i.createElement(
              Bt,
              { isLoading: l },
              o.t(null, void 0, a(7367)),
            ),
            icon: Zt,
            onClick: () => {
              r(!0), _(!1)
            },
            dontClosePopup: !0,
            isDisabled: l,
            shortcut: s
              ? void 0
              : (0, Y.humanReadableHash)(Y.Modifiers.Alt + 83),
            className: u(l && Qt.loading),
            theme: qt,
          }),
          !1,
          i.createElement(ie.PopupMenuItem, {
            'data-name': 'open-image-in-new-tab',
            label: i.createElement(
              Bt,
              { isLoading: h },
              o.t(null, void 0, a(38543)),
            ),
            icon: Kt,
            onClick: () => {
              c(!0), _(!0)
            },
            dontClosePopup: !0,
            isDisabled: h,
            className: u(h && Qt.loading),
            theme: qt,
          }),
          i.createElement(ie.PopupMenuItem, {
            'data-name': 'tweet-chart-image',
            label: i.createElement(
              Bt,
              { isLoading: m },
              o.t(null, void 0, a(99746)),
            ),
            icon: Wt,
            onClick: f,
            dontClosePopup: !0,
            isDisabled: m,
            className: u(m && Qt.loading),
            theme: qt,
          }),
        )
      }
      var Gt = a(84015)
      function Yt(e) {
        const [t, a] = (0, i.useState)(!1),
          n = (0, Ut.useIsMounted)(),
          s = (0, i.useCallback)(async () => {
            a(!0), await e.serverSnapshot(), n.current && a(!1)
          }, [e.serverSnapshot])
        return i.createElement(P.ToolWidgetButton, {
          id: e.id,
          className: e.className,
          isDisabled: t,
          onClick: s,
          title: e.tooltip,
          icon: e.icon,
        })
      }
      var Xt = a(72644)
      const $t =
        ((Jt = function (e) {
          return (0, Gt.isOnMobileAppPage)('any')
            ? i.createElement(Yt, { ...e, icon: Xt })
            : i.createElement(
                d.ToolbarMenuButton,
                {
                  content: i.createElement(P.ToolWidgetButton, {
                    tag: 'div',
                    id: e.id,
                    className: e.className,
                    icon: Xt,
                  }),
                  drawerPosition: 'Bottom',
                  drawerBreakpoint: f.DialogBreakpoints.TabletSmall,
                  arrow: !1,
                  onClick: function () {},
                  tooltip: e.tooltip,
                },
                i.createElement(jt, { ...e }),
              )
        }),
        ((ea = class extends i.PureComponent {
          constructor(e, t) {
            super(e, t),
              (this._clientSnapshot = async () => {
                const e = this.context.chartWidgetCollection.activeChartWidget
                  .value()
                  .model()
                  .mainSeries()
                  .actualSymbol()
                return {
                  canvas:
                    await this.context.chartWidgetCollection.clientSnapshot(),
                  name: `${(0, At.shortName)(e)}_${Rt.formatLocal(new Date())}`,
                }
              }),
              (this._serverSnapshot = async () => {
                const e = this.context.chartWidgetCollection.activeChartWidget
                    .value()
                    .model()
                    .mainSeries()
                    .actualSymbol(),
                  t = await this.context.chartWidgetCollection.takeScreenshot(),
                  a =
                    n.enabled('charting_library_base') &&
                    void 0 !== this.context.snapshotUrl
                      ? t
                      : (0, It.convertImageNameToUrl)(t)
                return { symbol: (0, At.shortName)(e), imageUrl: a }
              }),
              (0, y.validateRegistry)(t, {
                chartWidgetCollection: s.any.isRequired,
              })
          }
          render() {
            const { className: e, id: t } = this.props
            return i.createElement(Jt, {
              id: t,
              className: e,
              tooltip: Nt.takeSnapshot,
              serverSnapshot: this._serverSnapshot,
              clientSnapshot: this._clientSnapshot,
            })
          }
        }).contextType = Ft),
        ea)
      var Jt,
        ea,
        ta = a(31330),
        aa = a(39362),
        na = a(13702)
      class ia {
        async show(e) {
          if (null !== ia._provider) {
            const e = await ia._provider.getSymbol()
            return l.linking.symbol.setValue(e.symbol), e
          }
          if (ia._currentShowingInstance)
            throw new DOMException(
              'SymbolSearchUI is already shown',
              'InvalidStateError',
            )
          try {
            ;(ia._currentShowingInstance = this), ia.preload()
            const t = await ia._implementation
            return (
              (0, ne.assert)(null !== t),
              new Promise((a) => {
                t.showDefaultSearchDialog({
                  ...e,
                  onSearchComplete: (e) => {
                    a({ symbol: e })
                  },
                })
              })
            )
          } finally {
            ia._currentShowingInstance = null
          }
        }
        static setProvider(e) {
          this._provider = e
        }
        static preload() {
          null === this._provider &&
            null === this._implementation &&
            (this._implementation = (0, na.loadNewSymbolSearch)())
        }
      }
      ;(ia._currentShowingInstance = null),
        (ia._provider = null),
        (ia._implementation = null)
      var sa = a(29142),
        oa = a(25882)
      const la = (0, rt.mergeThemes)(g.DEFAULT_TOOLBAR_BUTTON_THEME, oa)
      class ra extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._openSymbolSearchDialog = async (e) => {
              if ((0, Y.modifiersFromEvent)(e) !== Y.Modifiers.Alt) {
                if (!this.state.isOpened)
                  try {
                    ;(0, V.trackEvent)('GUI', 'SS', 'main search'),
                      await new ia().show({
                        onClose: () => {
                          this.setState({ isOpened: !1 })
                        },
                        onOpen: () => {
                          this.setState({ isOpened: !0 })
                        },
                        shouldReturnFocus: (0, Z.isKeyboardClick)(e),
                        defaultValue: this._isSpread(this.state.symbol)
                          ? this.state.symbol
                          : this.state.shortName,
                        showSpreadActions:
                          (0, ta.canShowSpreadActions)() &&
                          this.props.isActionsVisible,
                        source: 'searchBar',
                        footer: Re.mobiletouch
                          ? void 0
                          : i.createElement(
                              aa.SymbolSearchDialogFooter,
                              null,
                              o.t(null, void 0, a(20987)),
                            ),
                      })
                  } catch (e) {}
              } else (0, lt.getClipboard)().writeText(this.state.symbol)
            }),
            (this._isSpread = (e) => !1),
            (this._onSymbolChanged = () => {
              const e = l.linking.symbol.value()
              this.setState({ symbol: e, shortName: ha() })
            }),
            (this.state = {
              symbol: l.linking.symbol.value(),
              shortName: ha(),
              isOpened: !1,
            })
        }
        componentDidMount() {
          l.linking.symbol.subscribe(this._onSymbolChanged),
            l.linking.seriesShortSymbol.subscribe(this._onSymbolChanged),
            ia.preload()
        }
        componentWillUnmount() {
          l.linking.symbol.unsubscribe(this._onSymbolChanged),
            l.linking.seriesShortSymbol.unsubscribe(this._onSymbolChanged)
        }
        render() {
          const { id: e, className: t } = this.props
          return i.createElement(g.ToolbarButton, {
            id: e,
            className: v()(
              t,
              n.enabled('uppercase_instrument_names') && oa.uppercase,
              oa.smallLeftPadding,
            ),
            theme: la,
            icon: sa,
            isOpened: this.state.isOpened,
            text: this.state.shortName,
            onClick: this._openSymbolSearchDialog,
            tooltip: o.t(null, void 0, a(75905)),
          })
        }
        async _updateQuotes(e) {}
      }
      function ha() {
        return (
          l.linking.seriesShortSymbol.value() || l.linking.symbol.value() || ''
        )
      }
      var ca = a(5145)
      function da(e) {
        var t
        const { className: a, item: n, onApply: s } = e,
          [o, l] = (0, D.useRovingTabindexElement)(null)
        return I.PLATFORM_ACCESSIBILITY_ENABLED
          ? i.createElement(
              'button',
              {
                type: 'button',
                className: u(a, ca.item, ca.accessible, 'apply-common-tooltip'),
                onClick: r,
                'data-tooltip': n.name,
                'aria-label': n.name,
                tabIndex: l,
                ref: o,
              },
              i.createElement(
                'div',
                { className: ca.round },
                null !==
                  (t = (function (e) {
                    var t
                    const a = Intl.Segmenter
                    if (a) {
                      const n = new a(void 0, { granularity: 'grapheme' }),
                        [{ segment: i } = { segment: null }] = n.segment(e)
                      return null !==
                        (t = null == i ? void 0 : i.toUpperCase()) &&
                        void 0 !== t
                        ? t
                        : null
                    }
                    {
                      const t = e.codePointAt(0)
                      return t ? String.fromCodePoint(t).toUpperCase() : null
                    }
                  })(n.name)) && void 0 !== t
                  ? t
                  : ' ',
              ),
            )
          : i.createElement(
              'div',
              {
                className: u(a, ca.item, 'apply-common-tooltip'),
                onClick: r,
                'data-tooltip': n.name,
              },
              i.createElement(
                'div',
                { className: ca.round },
                n.name.length > 0 ? n.name[0].toUpperCase() : ' ',
              ),
            )
        function r(e) {
          e.stopPropagation(), s(n)
        }
      }
      var ua = a(39344),
        va = a(92710)
      function ma(e) {
        return i.createElement(
          'div',
          { className: u(va.description, e.className) },
          e.children,
        )
      }
      var pa = a(48261)
      const ga = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
          labelRow: pa.labelRow,
          toolbox: pa.toolbox,
          item: pa.titleItem,
        }),
        ba = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
          labelRow: pa.labelRow,
          toolbox: pa.toolbox,
          item: pa.titleItemTabletSmall,
        }),
        Ca = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
          item: pa.item,
        }),
        Sa = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, {
          item: pa.itemTabletSmall,
        })
      function _a(e) {
        const {
            className: t,
            item: a,
            onApply: n,
            onRemove: s,
            onFavor: o,
            favorite: l,
            isFavoritingAllowed: r,
            isTabletSmall: h,
          } = e,
          [c, d] = (0, Ae.useHover)(),
          u = a.meta_info,
          m = u ? (0, ua.descriptionString)(u.indicators) : void 0,
          p = h ? ba : ga,
          g = h ? Sa : Ca,
          b = (0, i.useCallback)(() => n(a), [n, a]),
          C = (0, i.useCallback)((e) => s(a, e), [s, a]),
          S = (0, i.useCallback)(() => {
            o && o(a)
          }, [o, a])
        return i.createElement(
          'div',
          {
            ...d,
            className: v()(t, pa.wrap),
            'data-name': a.name,
            'data-id': a.id,
            'data-is-default': Boolean(a.is_default),
          },
          i.createElement(A.AccessibleMenuItem, {
            theme: p,
            label: a.name,
            labelRowClassName: v()(h && pa.itemLabelTabletSmall),
            isHovered: c,
            showToolboxOnHover: !l && !c,
            showToolboxOnFocus: I.PLATFORM_ACCESSIBILITY_ENABLED,
            onClick: b,
            toolbox: i.createElement(
              i.Fragment,
              null,
              !a.is_default &&
                i.createElement(Ne.MenuRemoveButton, {
                  key: 'remove',
                  hidden: !Re.touch && !c,
                  onClick: C,
                  className: pa.remove,
                }),
              Boolean(o) &&
                r &&
                i.createElement(R.MenuFavoriteButton, {
                  key: 'favorite',
                  isFilled: Boolean(l),
                  onClick: S,
                }),
            ),
          }),
          m &&
            i.createElement(ie.PopupMenuItem, {
              theme: g,
              label: i.createElement(
                ma,
                {
                  className: v()(
                    pa.description,
                    h && pa.descriptionTabletSmall,
                  ),
                },
                m,
              ),
              onClick: b,
              isHovered: c,
            }),
        )
      }
      var fa = a(53707),
        wa = a(85013)
      const ya = (0, rt.mergeThemes)(ie.DEFAULT_POPUP_MENU_ITEM_THEME, wa)
      function Ea(e) {
        const { onClick: t, isTabletSmall: n, className: s } = e
        return i.createElement(A.AccessibleMenuItem, {
          theme: ya,
          className: v()(s, wa.wrap),
          label: i.createElement(
            'div',
            { className: wa.titleWrap },
            i.createElement(
              'div',
              { className: v()(wa.title, n && wa.titleTabletSmall) },
              i.createElement(c.Icon, { className: wa.icon, icon: fa }),
              i.createElement(
                'div',
                { className: wa.text },
                (0, dt.appendEllipsis)(o.t(null, void 0, a(92093))),
              ),
            ),
          ),
          onClick: t,
        })
      }
      var Ma = a(37968),
        Ta = a(64706)
      const ka = i.createContext(null)
      var Ia = a(36001)
      function xa(e) {
        const {
            templates: t,
            favorites: a,
            onTemplateSave: n,
            onTemplateRemove: s,
            onTemplateSelect: o,
            onTemplateFavorite: l,
            isTabletSmall: r,
            isLoading: h,
          } = e,
          c = (0, i.useMemo)(() => t.filter((e) => e.is_default), [t]),
          d = (0, i.useMemo)(() => t.filter((e) => !e.is_default), [t]),
          u = (0, i.useMemo)(() => new Set(a.map((e) => e.name)), [a]),
          m = (0, i.useContext)(ka),
          p = (0, i.useContext)(Ta.MenuContext),
          g = (0, Ma.useForceUpdate)()
        ;(0, i.useEffect)(() => {
          if (null !== m) {
            const e = {}
            return (
              m.getOnChange().subscribe(e, () => {
                g(), p && p.update()
              }),
              () => m.getOnChange().unsubscribeAll(e)
            )
          }
          return () => {}
        }, [])
        const b = (e) =>
          i.createElement(_a, {
            key: e.name,
            item: e,
            isFavoritingAllowed: Boolean(l),
            favorite: u.has(e.name),
            onApply: o,
            onFavor: l,
            onRemove: s,
            isTabletSmall: r,
          })
        return i.createElement(
          'div',
          { className: v()(Ia.menu, r && Ia.menuSmallTablet) },
          i.createElement(Ea, { onClick: n, isTabletSmall: r }),
          h &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(S.PopupMenuSeparator, null),
              i.createElement(ue, null),
            ),
          !h &&
            (r
              ? i.createElement(Aa, { defaults: c, customs: d, render: b })
              : i.createElement(Ra, {
                  defaults: c,
                  customs: d,
                  render: b,
                  state: m,
                })),
        )
      }
      function Aa(e) {
        const { defaults: t, customs: n, render: s } = e
        return i.createElement(
          i.Fragment,
          null,
          n.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(S.PopupMenuSeparator, null),
              i.createElement(
                ve.ToolWidgetMenuSummary,
                { className: Ia.menuItemHeaderTabletSmall },
                o.t(null, void 0, a(38554)),
              ),
              n.map(s),
            ),
          t.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(S.PopupMenuSeparator, null),
              i.createElement(
                ve.ToolWidgetMenuSummary,
                { className: Ia.menuItemHeaderTabletSmall },
                o.t(null, void 0, a(43399)),
              ),
              t.map(s),
            ),
        )
      }
      function Ra(e) {
        const { defaults: t, customs: n, render: s, state: l } = e
        return i.createElement(
          i.Fragment,
          null,
          n.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(S.PopupMenuSeparator, null),
              i.createElement(
                ve.ToolWidgetMenuSummary,
                { className: Ia.menuItemHeader },
                o.t(null, void 0, a(38554)),
              ),
              n.map(s),
            ),
          n.length > 0 &&
            t.length > 0 &&
            l &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(S.PopupMenuSeparator, null),
              i.createElement(
                Ve,
                {
                  summary: o.t(null, void 0, a(43399)),
                  open: !l.get().defaultsCollapsed,
                  onStateChange: (e) => l.set({ defaultsCollapsed: !e }),
                },
                t.map(s),
              ),
            ),
          0 === n.length &&
            t.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(S.PopupMenuSeparator, null),
              i.createElement(
                ve.ToolWidgetMenuSummary,
                { className: Ia.menuItemHeader },
                o.t(null, void 0, a(43399)),
              ),
              t.map(s),
            ),
        )
      }
      var Na = a(97145)
      class Fa {
        constructor(e, t) {
          var a, i
          ;(this._isFavoriteEnabled = n.enabled('items_favoriting')),
            (this.handleFavorTemplate = (e) => {
              if (!this._isFavoriteEnabled) return
              const { name: t } = e
              this._isTemplateFavorite(t)
                ? this._removeFavoriteTemplate(t)
                : this._addFavoriteTemplate(t)
            }),
            (this.handleDropdownOpen = () => {
              this._setState({ isLoading: !0 }),
                this._studyTemplates.invalidate(),
                this._studyTemplates.refreshStudyTemplateList(() =>
                  this._setState({ isLoading: !1 }),
                )
            }),
            (this.handleApplyTemplate = (e) => {
              this._studyTemplates.applyTemplate(e.name)
            }),
            (this.handleRemoveTemplate = (e, t) => {
              this._studyTemplates.deleteStudyTemplate(e.name, t)
            }),
            (this.handleSaveTemplate = () => {
              this._studyTemplates.showSaveAsDialog()
            }),
            (this._studyTemplates = e),
            (this._favoriteStudyTemplatesService = t)
          const s =
              (null === (a = this._favoriteStudyTemplatesService) ||
              void 0 === a
                ? void 0
                : a.get()) || [],
            o = this._studyTemplates.list()
          ;(this._state = new Na.WatchedValue({
            isLoading: !1,
            studyTemplatesList: o,
            favorites: s,
          })),
            this._studyTemplates
              .getOnChange()
              .subscribe(this, this._handleTemplatesChange),
            this._studyTemplates.refreshStudyTemplateList(),
            this._isFavoriteEnabled &&
              (null === (i = this._favoriteStudyTemplatesService) ||
                void 0 === i ||
                i.getOnChange().subscribe(this, this._handleFavoritesChange))
        }
        destroy() {
          var e
          this._studyTemplates
            .getOnChange()
            .unsubscribe(this, this._handleTemplatesChange),
            this._isFavoriteEnabled &&
              (null === (e = this._favoriteStudyTemplatesService) ||
                void 0 === e ||
                e.getOnChange().unsubscribe(this, this._handleFavoritesChange))
        }
        state() {
          return this._state.readonly()
        }
        _setState(e) {
          this._state.setValue({ ...this._state.value(), ...e })
        }
        _handleTemplatesChange() {
          this._setState({ studyTemplatesList: this._studyTemplates.list() })
        }
        _handleFavoritesChange(e) {
          this._isFavoriteEnabled && this._setState({ favorites: e })
        }
        _removeFavoriteTemplate(e) {
          var t
          const { favorites: a } = this._state.value()
          null === (t = this._favoriteStudyTemplatesService) ||
            void 0 === t ||
            t.set(a.filter((t) => t !== e))
        }
        _addFavoriteTemplate(e) {
          var t
          const { favorites: a } = this._state.value()
          null === (t = this._favoriteStudyTemplatesService) ||
            void 0 === t ||
            t.set([...a, e])
        }
        _isTemplateFavorite(e) {
          const { favorites: t } = this._state.value()
          return t.includes(e)
        }
      }
      var Oa = a(21233),
        Ha = a(70760)
      const La = (0, y.registryContextType)()
      class Da extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ ...e, isActive: this.state.isActive })
            }),
            (this._handleApplyTemplate = (e) => {
              this._handleClose(), this._model.handleApplyTemplate(e)
            }),
            (this._handleRemoveTemplate = (e, t) => {
              this._handleClose(), this._model.handleRemoveTemplate(e, t)
            }),
            (this._handleClose = () => {
              this._handleToggleDropdown(!1)
            }),
            (this._handleToggleDropdown = (e) => {
              const { isActive: t } = this.state,
                a = 'boolean' == typeof e ? e : !t
              this.setState({ isActive: a })
            }),
            (0, y.validateRegistry)(t, {
              favoriteStudyTemplatesService: s.any,
              studyTemplates: s.any.isRequired,
              templatesMenuViewStateService: s.any,
            })
          const { favoriteStudyTemplatesService: a, studyTemplates: n } = t
          ;(this._model = new Fa(n, a)),
            (this.state = { ...this._model.state().value(), isActive: !1 })
        }
        componentDidMount() {
          this._model.state().subscribe(this._updateState)
        }
        componentWillUnmount() {
          this._model.state().unsubscribe(this._updateState),
            this._model.destroy()
        }
        render() {
          const { studyTemplatesList: e, favorites: t } = this.state,
            {
              isShownQuicks: a,
              className: n,
              displayMode: s,
              id: o,
            } = this.props
          return i.createElement(
            ka.Provider,
            { value: this.context.templatesMenuViewStateService || null },
            i.createElement(Pa, {
              id: o,
              className: n,
              mode: s,
              templates: e,
              favorites: t,
              onMenuOpen: this._model.handleDropdownOpen,
              onTemplateFavorite: a ? this._model.handleFavorTemplate : void 0,
              onTemplateSelect: this._handleApplyTemplate,
              onTemplateRemove: this._handleRemoveTemplate,
              onTemplateSave: this._model.handleSaveTemplate,
            }),
          )
        }
      }
      function Pa(e) {
        const {
            id: t,
            className: n,
            mode: s,
            favorites: l,
            templates: r,
            isMenuOpen: h,
            onTemplateSelect: c,
            onTemplateSave: u,
            onTemplateFavorite: m,
            onTemplateRemove: g,
          } = e,
          b = (0, i.useRef)(null),
          C = (0, i.useRef)(null),
          S = v()(n, Ha.wrap, {
            [Ha.full]: 'full' === s,
            [Ha.medium]: 'medium' === s,
          }),
          w = r.filter((e) => l.includes(e.name)),
          y = 'small' !== s && m && w.length > 0
        return i.createElement(
          p,
          { id: t, className: S },
          i.createElement(
            _.MatchMedia,
            { rule: f.DialogBreakpoints.TabletSmall },
            (t) =>
              i.createElement(
                d.ToolbarMenuButton,
                {
                  ref: b,
                  menuReference: C,
                  onOpen: e.onMenuOpen,
                  isDrawer: t,
                  drawerPosition: 'Bottom',
                  arrow: !1,
                  content: i.createElement(W, {
                    tag: 'div',
                    className: v()(y && Ha.buttonWithFavorites),
                    displayMode: s,
                    isOpened: h,
                    icon: Oa,
                    forceInteractive: !0,
                    collapseWhen: ['full', 'medium', 'small'],
                  }),
                  onClick: M,
                  tooltip: o.t(null, void 0, a(15812)),
                },
                i.createElement(xa, {
                  onTemplateSave: u,
                  onTemplateSelect: c,
                  onTemplateRemove: E,
                  onTemplateFavorite: m,
                  templates: r,
                  favorites: w,
                  isTabletSmall: t,
                }),
              ),
          ),
          y &&
            i.createElement(Ba, {
              favorites: w,
              onTemplateSelect: function (e) {
                c(e), M()
              },
            }),
        )
        function E(e, t) {
          if (
            I.PLATFORM_ACCESSIBILITY_ENABLED &&
            t &&
            (0, Z.isKeyboardClick)(t) &&
            C.current
          ) {
            const t = (0, se.queryMenuElements)(C.current),
              a = t.findIndex((t) => null !== t.closest(`[data-id="${e.id}"]`))
            g(e, () => {
              var e, n
              if (-1 !== a && C.current) {
                const i = null !== (e = t[a + 1]) && void 0 !== e ? e : t[a - 1]
                i ? i.focus() : (0, se.focusFirstMenuItem)(C.current),
                  null === (n = b.current) || void 0 === n || n.update()
              }
            })
          } else g(e)
        }
        function M() {
          0
        }
      }
      function Ba(e) {
        return i.createElement(
          i.Fragment,
          null,
          e.favorites.map((t, a, n) =>
            i.createElement(da, {
              key: t.name,
              item: t,
              onApply: e.onTemplateSelect,
              className: v()({
                [Ha.first]: 0 === a,
                [Ha.last]: a === n.length - 1,
              }),
            }),
          ),
        )
      }
      Da.contextType = La
      a(42053)
      var Ua = a(77665),
        Wa = a(96052),
        za = a(57778)
      const Va = {
          undoHotKey: (0, G.hotKeySerialize)({
            keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), 'Z'],
            text: '{0} + {1}',
          }),
          redoHotKey: (0, G.hotKeySerialize)({
            keys: [(0, Y.humanReadableModifiers)(Y.Modifiers.Mod, !1), 'Y'],
            text: '{0} + {1}',
          }),
        },
        Za = (0, rt.mergeThemes)(g.DEFAULT_TOOLBAR_BUTTON_THEME, za),
        Ka = (0, y.registryContextType)()
      class Qa extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._batched = null),
            (this._handleClickUndo = () => {
              ;(0, V.trackEvent)('GUI', 'Undo')
              const { chartWidgetCollection: e } = this.context
              e.undoHistory.undo()
            }),
            (this._handleClickRedo = () => {
              ;(0, V.trackEvent)('GUI', 'Redo')
              const { chartWidgetCollection: e } = this.context
              e.undoHistory.redo()
            }),
            (0, y.validateRegistry)(t, {
              chartWidgetCollection: s.any.isRequired,
            }),
            (this.state = this._getStateFromUndoHistory())
        }
        componentDidMount() {
          const { chartWidgetCollection: e } = this.context
          e.undoHistory
            .redoStack()
            .onChange()
            .subscribe(this, this._onChangeStack),
            e.undoHistory
              .undoStack()
              .onChange()
              .subscribe(this, this._onChangeStack)
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e } = this.context
          e.undoHistory
            .redoStack()
            .onChange()
            .unsubscribe(this, this._onChangeStack),
            e.undoHistory
              .undoStack()
              .onChange()
              .unsubscribe(this, this._onChangeStack),
            (this._batched = null)
        }
        render() {
          const { id: e } = this.props,
            {
              isEnabledRedo: t,
              isEnabledUndo: n,
              redoStack: s,
              undoStack: l,
            } = this.state
          return i.createElement(
            p,
            { id: e },
            i.createElement(g.ToolbarButton, {
              icon: Ua,
              isDisabled: !n,
              onClick: this._handleClickUndo,
              theme: Za,
              tooltip: n
                ? o.t(null, { replace: { hint: l } }, a(80323))
                : void 0,
              'data-tooltip-hotkey': n ? Va.undoHotKey : void 0,
            }),
            i.createElement(g.ToolbarButton, {
              icon: Wa,
              isDisabled: !t,
              onClick: this._handleClickRedo,
              theme: Za,
              tooltip: t
                ? o.t(null, { replace: { hint: s } }, a(70728))
                : void 0,
              'data-tooltip-hotkey': t ? Va.redoHotKey : void 0,
            }),
          )
        }
        _onChangeStack() {
          null === this._batched &&
            (this._batched = Promise.resolve().then(() => {
              if (null === this._batched) return
              this._batched = null
              const e = this._getStateFromUndoHistory()
              this.setState(e)
            }))
        }
        _getStateFromUndoHistory() {
          const { chartWidgetCollection: e } = this.context,
            t = e.undoHistory.undoStack(),
            a = e.undoHistory.redoStack(),
            n = a.head(),
            i = t.head()
          return {
            isEnabledRedo: !a.isEmpty(),
            isEnabledUndo: !t.isEmpty(),
            redoStack: n ? n.text().translatedText() : '',
            undoStack: i ? i.text().translatedText() : '',
          }
        }
      }
      Qa.contextType = Ka
      const qa = (e) => {
        if (
          ((e) =>
            'http://www.w3.org/1999/xhtml' ===
            (null == e ? void 0 : e.namespaceURI))(e) &&
          'true' !== e.dataset.internalAllowKeyboardNavigation
        ) {
          ;(e.tabIndex = -1), (e.ariaDisabled = 'true')
          for (let t = 0; t < e.children.length; t++) qa(e.children.item(t))
        }
      }
      class ja extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._wrapperElement = null),
            (this._resizeObserver = null),
            (this._mutationObserver = null),
            (this._update = () => {
              this.forceUpdate()
            }),
            (this._setRef = (e) => {
              this._wrapperElement = e
            }),
            (this._handleMeasure = ([e]) => {
              this.props.width.setValue(e.contentRect.width)
            }),
            (this._handleMutation = ([e]) => {
              I.PLATFORM_ACCESSIBILITY_ENABLED &&
                'childList' === e.type &&
                qa(this.props.element)
            })
        }
        componentDidMount() {
          const { element: e, isFake: t, width: a } = this.props
          !t && this._wrapperElement
            ? ((this._resizeObserver = new ResizeObserver(this._handleMeasure)),
              (this._mutationObserver = new MutationObserver(
                this._handleMutation,
              )),
              this._wrapperElement.appendChild(e),
              this._resizeObserver.observe(this._wrapperElement),
              this._mutationObserver.observe(e, { subtree: !0, childList: !0 }))
            : a.subscribe(this._update)
        }
        componentWillUnmount() {
          const { width: e, isFake: t } = this.props
          t && e.unsubscribe(this._update),
            this._resizeObserver &&
              this._wrapperElement &&
              this._resizeObserver.unobserve(this._wrapperElement),
            this._mutationObserver &&
              (this._mutationObserver.disconnect(),
              (this._mutationObserver = null))
        }
        render() {
          const { isFake: e = !1, width: t } = this.props
          return i.createElement(p, {
            ref: this._setRef,
            style: e ? { width: t.value() } : void 0,
            'data-is-custom-header-element': !0,
          })
        }
      }
      function Ga(e) {
        const { displayMode: t, params: a } = e
        return i.createElement(
          d.ToolbarMenuButton,
          {
            content: i.createElement(W, {
              collapseWhen: void 0 !== a.icon ? void 0 : [],
              displayMode: t,
              icon: a.icon,
              text: a.title,
              'data-name': 'dropdown',
              'data-is-custom-header-element': !0,
            }),
            drawerPosition: 'Bottom',
            drawerBreakpoint: f.DialogBreakpoints.TabletSmall,
            arrow: !1,
            tooltip: a.tooltip,
          },
          a.items.map((e, t) =>
            i.createElement(ie.PopupMenuItem, {
              key: t,
              label: e.title,
              onClick: () => e.onSelect(),
              'data-name': 'dropdown-item',
            }),
          ),
        )
      }
      var Ya = a(27363)
      function Xa(e) {
        const { className: t, title: a, ...n } = e
        return i.createElement(z, {
          ...n,
          className: u(t, Ya.customTradingViewStyleButton, Ya.withoutIcon),
          collapseWhen: [],
          'data-name': 'custom-tradingview-styled-button',
          tooltip: a,
        })
      }
      function $a() {
        return {
          Bars: n.enabled('header_chart_type') ? L : void 0,
          Compare: n.enabled('header_compare') ? q : void 0,
          Custom: ja,
          CustomTradingViewStyledButton: Xa,
          Fullscreen: n.enabled('header_fullscreen_button') ? ae : void 0,
          Indicators: n.enabled('header_indicators') ? Se : void 0,
          Intervals: n.enabled('header_resolutions') ? Ye : void 0,
          OpenPopup: at,
          Properties:
            n.enabled('header_settings') &&
            n.enabled('show_chart_property_page')
              ? st
              : void 0,
          SaveLoad: n.enabled('header_saveload') ? kt : void 0,
          Screenshot: n.enabled('header_screenshot') ? $t : void 0,
          SymbolSearch: n.enabled('header_symbol_search') ? ra : void 0,
          Templates: n.enabled('study_templates') ? Da : void 0,
          Dropdown: Ga,
          UndoRedo: n.enabled('header_undo_redo') ? Qa : void 0,
          Layout: undefined,
        }
      }
    },
    39344: (e, t, a) => {
      'use strict'
      a.d(t, {
        createStudyTemplateMetaInfo: () => s,
        descriptionString: () => o,
      })
      var n = a(28853),
        i = a(37591)
      function s(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter((e) => (0, n.isStudy)(e) && !0)
            .map((e) => ({
              id: e.metaInfo().id,
              description: e.title(
                i.TitleDisplayTarget.StatusLine,
                !0,
                void 0,
                !0,
              ),
            })),
          interval: t,
        }
      }
      function o(e) {
        const t = new Map()
        return (
          e.forEach((e) => {
            const [a, n] = t.get(e.id) || [e.description, 0]
            t.set(e.id, [a, n + 1])
          }),
          Array.from(t.values())
            .map(([e, t]) => `${e}${t > 1 ? ` x ${t}` : ''}`)
            .join(', ')
        )
      }
    },
    45876: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { SERIES_ICONS: () => p })
      var n = a(94670),
        i = a(32162),
        s = a(39956),
        o = a(14083),
        l = a(45504),
        r = a(52867),
        h = a(41473),
        c = a(31246),
        d = a(15726),
        u = a(24464),
        v = a(71705),
        m = a(9450)
      const p = {
        3: n,
        16: i,
        0: s,
        1: o,
        8: l,
        9: r,
        2: h,
        14: c,
        15: d,
        10: u,
        12: v,
        13: m,
      }
    },
    53166: (e, t, a) => {
      'use strict'
      a.d(t, { convertImageNameToUrl: () => s })
      var n = a(14483),
        i = a(76861)
      function s(e) {
        return n.enabled('charting_library_base') || (0, i.isProd)()
          ? 'https://www.tradingview.com/x/' + e + '/'
          : window.location.protocol +
              '//' +
              window.location.host +
              '/x/' +
              e +
              '/'
      }
    },
    65939: (e, t, a) => {
      'use strict'
      function n(e, t) {
        const a = document.createElement('a')
        ;(a.style.display = 'none'), (a.href = t), (a.download = e), a.click()
      }
      a.d(t, { downloadFile: () => n })
    },
    29142: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM8 2a6 6 0 1 0 3.65 10.76l3.58 3.58 1.06-1.06-3.57-3.57A6 6 0 0 0 8 2Z"/></svg>'
    },
    97268: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>'
    },
    57047: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M17 6v2.5a2.5 2.5 0 0 0 2.5 2.5H22v-1h-2.5A1.5 1.5 0 0 1 18 8.5V6h-1zm2.5 11a2.5 2.5 0 0 0-2.5 2.5V22h1v-2.5c0-.83.67-1.5 1.5-1.5H22v-1h-2.5zm-11 1H6v-1h2.5a2.5 2.5 0 0 1 2.5 2.5V22h-1v-2.5c0-.83-.67-1.5-1.5-1.5zM11 8.5V6h-1v2.5c0 .83-.67 1.5-1.5 1.5H6v1h2.5A2.5 2.5 0 0 0 11 8.5z"/></svg>'
    },
    99280: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>'
    },
    21233: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/></svg>'
    },
    94670: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="m25.35 5.35-9.5 9.5-.35.36-.35-.36-4.65-4.64-8.15 8.14-.7-.7 8.5-8.5.35-.36.35.36 4.65 4.64 9.15-9.14.7.7ZM2 21h1v1H2v-1Zm2-1H3v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1Zm1 0v1H4v-1h1Zm1 0H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0H7v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1H8v1H7v1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0H9v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1H9v1h1v1Zm1 0v1h-1v-1h1Zm0-1v-1h-1v1h1Zm0 0v1h1v1h1v-1h-1v-1h-1Zm6 2v-1h1v1h-1Zm2 0v1h-1v-1h1Zm0-1h-1v-1h1v1Zm1 0h-1v1h1v1h1v-1h1v1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h1v1Zm1 0h-1v1h1v-1Zm0-1h1v1h-1v-1Zm0-1h1v-1h-1v1Zm0 0v1h-1v-1h1Zm-4 3v1h-1v-1h1Z"/></svg>'
    },
    39956: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>'
    },
    24464: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m10.49 7.55-.42.7-2.1 3.5.86.5 1.68-2.8 1.8 2.82.84-.54-2.23-3.5-.43-.68Zm12.32 4.72-.84-.54 2.61-4 .84.54-2.61 4Zm-5.3 6.3 1.2-1.84.84.54-1.63 2.5-.43.65-.41-.65-1.6-2.5.85-.54 1.17 1.85ZM4.96 16.75l.86.52-2.4 4-.86-.52 2.4-4ZM3 14v1h1v-1H3Zm2 0h1v1H5v-1Zm2 0v1h1v-1H7Zm2 0h1v1H9v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Z"/></svg>'
    },
    14083: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>'
    },
    53707: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>'
    },
    9450: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z"/></svg>'
    },
    1393: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>'
    },
    45504: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>'
    },
    71705: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>'
    },
    32162: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="M22 3h1v1h-1V3Zm0 2V4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1v1H9v1H8v1H7v1H6v1H5v1H4v1h1v1H4v1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h-1Zm-1 1V5h1v1h-1Zm-1 1V6h1v1h-1Zm-1 1V7h1v1h-1Zm-1 1V8h1v1h-1Zm-1 1V9h1v1h-1Zm-1 1v-1h1v1h-1Zm-1 0v-1h-1V9h-1V8h-1V7h-1V6h-1v1H9v1H8v1H7v1H6v1H5v1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h1v1h1Zm0 0h1v1h-1v-1Zm.84 6.37 7.5-7-.68-.74-7.15 6.67-4.66-4.65-.33-.34-.36.32-5.5 5 .68.74 5.14-4.68 4.67 4.66.34.35.35-.33ZM6 23H5v1h1v-1Zm0-1H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0v1H7v-1h1Zm0-1H7v-1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0v1H9v-1h1Zm0-1H9v-1h1v1Zm1 0h-1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h1v1Zm0 0h1v1h-1v-1Zm2 2v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1Zm0 0v-1h-1v1h1Z"/></svg>'
    },
    52867: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>'
    },
    39681: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>'
    },
    31246: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="m18.43 15.91 6.96-8.6-.78-.62-6.96 8.6a2.49 2.49 0 0 0-2.63.2l-2.21-2.02A2.5 2.5 0 0 0 10.5 10a2.5 2.5 0 1 0 1.73 4.3l2.12 1.92a2.5 2.5 0 1 0 4.08-.31ZM10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/><path d="M8.37 13.8c.17.3.4.54.68.74l-5.67 6.78-.76-.64 5.75-6.88Z"/></svg>'
    },
    41473: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m25.39 7.31-8.83 10.92-6.02-5.47-7.16 8.56-.76-.64 7.82-9.36 6 5.45L24.61 6.7l.78.62Z"/></svg>'
    },
    82436: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>'
    },
    48449: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>'
    },
    96052: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>'
    },
    72644: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>'
    },
    15726: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M19 5h5v1h-4v13h-6v-7h-4v12H5v-1h4V11h6v7h4V5Z"/></svg>'
    },
    77665: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>'
    },
    33765: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
    },
    36296: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
    },
    23595: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>'
    },
    39146: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
    },
    48010: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
    },
    29414: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>'
    },
    84502: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>'
    },
  },
])
