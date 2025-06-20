;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6631],
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
    69789: (e) => {
      e.exports = {
        checkbox: 'checkbox-vyj6oJxw',
        reverse: 'reverse-vyj6oJxw',
        label: 'label-vyj6oJxw',
        baseline: 'baseline-vyj6oJxw',
      }
    },
    83073: (e) => {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        footer: 'footer-PhMf7PhQ',
        submitButton: 'submitButton-PhMf7PhQ',
        buttons: 'buttons-PhMf7PhQ',
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
    45719: (e) => {
      e.exports = { separator: 'separator-Pf4rIzEt' }
    },
    70673: (e, t, a) => {
      'use strict'
      a.d(t, { CheckboxInput: () => d })
      var n = a(50959),
        i = a(97754),
        s = a(90186),
        o = a(9745),
        l = a(65890),
        r = a(70048),
        c = a.n(r)
      function d(e) {
        const t = i(c().box, c()[`intent-${e.intent}`], {
            [c().check]: !Boolean(e.indeterminate),
            [c().dot]: Boolean(e.indeterminate),
            [c().noOutline]: -1 === e.tabIndex,
          }),
          a = i(c().wrapper, e.className)
        return n.createElement(
          'span',
          { className: a, title: e.title, style: e.style },
          n.createElement('input', {
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
          n.createElement(
            'span',
            { className: t },
            n.createElement(o.Icon, { icon: l, className: c().icon }),
          ),
        )
      }
    },
    15294: (e, t, a) => {
      'use strict'
      a.d(t, { Checkbox: () => c })
      var n = a(50959),
        i = a(97754),
        s = a(57733),
        o = a(70673),
        l = a(69789),
        r = a.n(l)
      class c extends n.PureComponent {
        render() {
          const { inputClassName: e, labelClassName: t, ...a } = this.props,
            s = i(this.props.className, r().checkbox, {
              [r().reverse]: Boolean(this.props.labelPositionReverse),
              [r().baseline]: Boolean(this.props.labelAlignBaseline),
            }),
            l = i(r().label, t, { [r().disabled]: this.props.disabled })
          let c = null
          return (
            this.props.label &&
              (c = n.createElement(
                'span',
                { className: l, title: this.props.title },
                this.props.label,
              )),
            n.createElement(
              'label',
              { className: s },
              n.createElement(o.CheckboxInput, { ...a, className: e }),
              c,
            )
          )
        }
      }
      c.defaultProps = { value: 'on' }
      ;(0, s.makeSwitchGroupItem)(c)
    },
    57733: (e, t, a) => {
      'use strict'
      a.d(t, { SwitchGroup: () => o, makeSwitchGroupItem: () => l })
      var n = a(50959)
      const i = function () {},
        s = (0, n.createContext)({
          getName: () => '',
          getValues: () => [],
          getOnChange: () => i,
          subscribe: i,
          unsubscribe: i,
        })
      class o extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._subscriptions = new Set()),
            (this._getName = () => this.props.name),
            (this._getValues = () => this.props.values),
            (this._getOnChange = () => this.props.onChange),
            (this._subscribe = (e) => {
              this._subscriptions.add(e)
            }),
            (this._unsubscribe = (e) => {
              this._subscriptions.delete(e)
            }),
            (this.state = {
              switchGroupContext: {
                getName: this._getName,
                getValues: this._getValues,
                getOnChange: this._getOnChange,
                subscribe: this._subscribe,
                unsubscribe: this._unsubscribe,
              },
            })
        }
        render() {
          return n.createElement(
            s.Provider,
            { value: this.state.switchGroupContext },
            this.props.children,
          )
        }
        componentDidUpdate(e) {
          this._notify(this._getUpdates(this.props.values, e.values))
        }
        _notify(e) {
          this._subscriptions.forEach((t) => t(e))
        }
        _getUpdates(e, t) {
          return [...t, ...e].filter((a) =>
            t.includes(a) ? !e.includes(a) : e.includes(a),
          )
        }
      }
      function l(e) {
        var t
        return (
          (t = class extends n.PureComponent {
            constructor() {
              super(...arguments),
                (this._onChange = (e) => {
                  this.context.getOnChange()(e)
                }),
                (this._onUpdate = (e) => {
                  e.includes(this.props.value) && this.forceUpdate()
                })
            }
            componentDidMount() {
              this.context.subscribe(this._onUpdate)
            }
            render() {
              return n.createElement(e, {
                ...this.props,
                name: this._getName(),
                onChange: this._onChange,
                checked: this._isChecked(),
              })
            }
            componentWillUnmount() {
              this.context.unsubscribe(this._onUpdate)
            }
            _getName() {
              return this.context.getName()
            }
            _isChecked() {
              return this.context.getValues().includes(this.props.value)
            }
          }),
          (t.contextType = s),
          t
        )
      }
    },
    50182: (e, t, a) => {
      'use strict'
      a.d(t, { AdaptiveConfirmDialog: () => m })
      var n = a(50959),
        i = a(97754),
        s = a.n(i),
        o = a(94720),
        l = a(50151),
        r = a(44352),
        c = a(68335),
        d = a(35057),
        u = a(83073)
      class m extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._dialogRef = n.createRef()),
            (this._handleClose = () => {
              const {
                defaultActionOnClose: e,
                onSubmit: t,
                onCancel: a,
                onClose: n,
              } = this.props
              switch (e) {
                case 'submit':
                  t()
                  break
                case 'cancel':
                  a()
              }
              n()
            }),
            (this._handleCancel = () => {
              this.props.onCancel(), this.props.onClose()
            }),
            (this._handleKeyDown = (e) => {
              const {
                onSubmit: t,
                submitButtonDisabled: a,
                submitOnEnterKey: n,
              } = this.props
              13 === (0, c.hashFromEvent)(e) &&
                n &&
                (e.preventDefault(), a || t())
            })
        }
        render() {
          const {
            render: e,
            onClose: t,
            onSubmit: a,
            onCancel: i,
            footerLeftRenderer: s,
            submitButtonText: o,
            submitButtonDisabled: l,
            defaultActionOnClose: r,
            submitOnEnterKey: c,
            ...u
          } = this.props
          return n.createElement(d.AdaptivePopupDialog, {
            ...u,
            ref: this._dialogRef,
            onKeyDown: this._handleKeyDown,
            render: this._renderChildren(),
            onClose: this._handleClose,
          })
        }
        focus() {
          ;(0, l.ensureNotNull)(this._dialogRef.current).focus()
        }
        _renderChildren() {
          return (e) => {
            const {
              render: t,
              footerLeftRenderer: i,
              additionalButtons: l,
              submitButtonText: c,
              submitButtonDisabled: d,
              onSubmit: m,
              cancelButtonText: h,
              showCancelButton: p = !0,
              submitButtonClassName: b,
              cancelButtonClassName: v,
              buttonsWrapperClassName: g,
            } = this.props
            return n.createElement(
              n.Fragment,
              null,
              t(e),
              n.createElement(
                'div',
                { className: u.footer },
                i && i(e.isSmallWidth),
                n.createElement(
                  'div',
                  { className: s()(u.buttons, g) },
                  l,
                  p &&
                    n.createElement(
                      o.Button,
                      {
                        className: v,
                        name: 'cancel',
                        appearance: 'stroke',
                        onClick: this._handleCancel,
                      },
                      null != h ? h : r.t(null, void 0, a(20036)),
                    ),
                  n.createElement(
                    'span',
                    { className: u.submitButton },
                    n.createElement(
                      o.Button,
                      {
                        className: b,
                        disabled: d,
                        name: 'submit',
                        onClick: m,
                        'data-name': 'submit-button',
                      },
                      null != c ? c : r.t(null, void 0, a(68988)),
                    ),
                  ),
                ),
              ),
            )
          }
        }
      }
      m.defaultProps = { defaultActionOnClose: 'submit', submitOnEnterKey: !0 }
    },
    35057: (e, t, a) => {
      'use strict'
      a.d(t, { AdaptivePopupDialog: () => T })
      var n = a(50959),
        i = a(50151)
      var s = a(97754),
        o = a.n(s),
        l = a(68335),
        r = a(38223),
        c = a(35749),
        d = a(63016),
        u = a(1109),
        m = a(24437),
        h = a(90692),
        p = a(95711)
      var b = a(52092),
        v = a(76422),
        g = a(9745)
      const _ = n.createContext({ setHideClose: () => {} })
      var f = a(7720),
        S = a(69827)
      function y(e) {
        const {
            title: t,
            titleTextWrap: a = !1,
            subtitle: i,
            showCloseIcon: s = !0,
            onClose: l,
            onCloseButtonKeyDown: r,
            renderBefore: c,
            renderAfter: d,
            draggable: u,
            className: m,
            unsetAlign: h,
            closeAriaLabel: p,
            closeButtonReference: b,
          } = e,
          [v, y] = (0, n.useState)(!1)
        return n.createElement(
          _.Provider,
          { value: { setHideClose: y } },
          n.createElement(
            'div',
            { className: o()(S.container, m, (i || h) && S.unsetAlign) },
            c,
            n.createElement(
              'div',
              { 'data-dragg-area': u, className: S.title },
              n.createElement(
                'div',
                { className: o()(a ? S.textWrap : S.ellipsis) },
                t,
              ),
              i &&
                n.createElement(
                  'div',
                  { className: o()(S.ellipsis, S.subtitle) },
                  i,
                ),
            ),
            d,
            s &&
              !v &&
              n.createElement(
                'button',
                {
                  className: S.close,
                  onClick: l,
                  onKeyDown: r,
                  'data-name': 'close',
                  'aria-label': p,
                  type: 'button',
                  ref: b,
                },
                n.createElement(g.Icon, {
                  className: S.icon,
                  icon: f,
                  'data-name': 'close',
                  'data-role': 'button',
                }),
              ),
          ),
        )
      }
      var C = a(53017),
        w = a(90186),
        N = a(55596)
      const x = { vertical: 20 },
        k = { vertical: 0 }
      class T extends n.PureComponent {
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
                    window.matchMedia(m.DialogBreakpoints.TabletSmall).matches,
                )
            }),
            (this._handleKeyDown = (e) => {
              if (!e.defaultPrevented) {
                if (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  27 === (0, l.hashFromEvent)(e))
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
                    n = (0, i.ensureNotNull)(this._reference)
                  if (null !== a) {
                    if (
                      (e.preventDefault(),
                      'true' === (t = a).getAttribute('data-haspopup') &&
                        'true' !== t.getAttribute('data-expanded'))
                    )
                      return void this._handleClose()
                    if ((0, c.isTextEditingField)(a)) return void n.focus()
                    if (n.contains(a))
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
                  [9, l.Modifiers.Shift + 9].includes(
                    (0, l.hashFromEvent)(a),
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
              const a = (0, i.ensureDefined)(
                this.props.fullScreenViewOffsets,
              ).value()
              return {
                top: a.top,
                left: (0, r.isRtl)() ? -a.right : a.left,
                width: t.clientWidth - a.left - a.right,
                height: t.clientHeight - a.top - a.bottom,
              }
            })
        }
        componentDidMount() {
          var e, t
          this.props.ignoreClosePopupsAndDialog ||
            v.subscribe(
              b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
              b.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
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
          ;(0, i.ensureNotNull)(this._reference).focus()
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
              isOpened: i,
              title: s,
              titleTextWrap: l,
              dataName: r,
              onClickOutside: c,
              additionalElementPos: b,
              additionalHeaderElement: v,
              backdrop: g,
              shouldForceFocus: _ = !0,
              shouldReturnFocus: f,
              onForceFocus: S,
              showSeparator: T,
              subtitle: E,
              draggable: D = !0,
              fullScreen: I = !1,
              showCloseIcon: B = !0,
              rounded: L = !0,
              isAnimationEnabled: O,
              growPoint: M,
              dialogTooltip: A,
              unsetHeaderAlign: z,
              onDragStart: P,
              dataDialogName: R,
              closeAriaLabel: j,
              containerAriaLabel: K,
              reference: H,
              containerTabIndex: G,
              closeButtonReference: W,
              onCloseButtonKeyDown: F,
              shadowed: U,
              fullScreenViewOffsets: q,
            } = this.props,
            Z = 'after' !== b ? v : void 0,
            V = 'after' === b ? v : void 0,
            Q = 'string' == typeof s ? s : R || '',
            Y = (0, w.filterDataProps)(this.props),
            J = (0, C.mergeRefs)([this._handleReference, H])
          return n.createElement(
            h.MatchMedia,
            { rule: m.DialogBreakpoints.SmallHeight },
            (b) =>
              n.createElement(
                h.MatchMedia,
                { rule: m.DialogBreakpoints.TabletSmall },
                (m) =>
                  n.createElement(
                    d.PopupDialog,
                    {
                      rounded: !(m || I) && L,
                      className: o()(N.dialog, I && q && N.bounded, e),
                      isOpened: i,
                      reference: J,
                      onKeyDown: this._handleKeyDown,
                      onClickOutside: c,
                      onClickBackdrop: c,
                      fullscreen: m || I,
                      guard: b ? k : x,
                      boundByScreen: m || I,
                      shouldForceFocus: _,
                      onForceFocus: S,
                      shouldReturnFocus: f,
                      backdrop: g,
                      draggable: D,
                      isAnimationEnabled: O,
                      growPoint: M,
                      name: this.props.dataName,
                      dialogTooltip: A,
                      onDragStart: P,
                      containerAriaLabel: K,
                      containerTabIndex: G,
                      calculateDialogPosition:
                        I && q ? this._calculatePositionWithOffsets : void 0,
                      shadowed: U,
                      ...Y,
                    },
                    n.createElement(
                      'div',
                      {
                        className: o()(N.wrapper, t),
                        'data-name': r,
                        'data-dialog-name': Q,
                      },
                      void 0 !== s &&
                        n.createElement(y, {
                          draggable: D && !(m || I),
                          onClose: this._handleCloseBtnClick,
                          renderAfter: V,
                          renderBefore: Z,
                          subtitle: E,
                          title: s,
                          titleTextWrap: l,
                          showCloseIcon: B,
                          className: a,
                          unsetAlign: z,
                          closeAriaLabel: j,
                          closeButtonReference: W,
                          onCloseButtonKeyDown: F,
                        }),
                      T &&
                        n.createElement(u.Separator, {
                          className: N.separator,
                        }),
                      n.createElement(p.PopupContext.Consumer, null, (e) =>
                        this._renderChildren(e, m || I),
                      ),
                    ),
                  ),
              ),
          )
        }
      }
    },
    1109: (e, t, a) => {
      'use strict'
      a.d(t, { Separator: () => o })
      var n = a(50959),
        i = a(97754),
        s = a(45719)
      function o(e) {
        return n.createElement('div', {
          className: i(s.separator, e.className),
        })
      }
    },
    92297: (e) => {
      e.exports = { loading: 'loading-BPaLXf0z' }
    },
    15747: (e) => {
      e.exports = {
        container: 'container-CD9TBN7D',
        withSuggestions: 'withSuggestions-CD9TBN7D',
        title: 'title-CD9TBN7D',
        autocomplete: 'autocomplete-CD9TBN7D',
        saveSymbol: 'saveSymbol-CD9TBN7D',
        saveInterval: 'saveInterval-CD9TBN7D',
        indicators: 'indicators-CD9TBN7D',
        hintLabel: 'hintLabel-CD9TBN7D',
        hintMark: 'hintMark-CD9TBN7D',
        hidden: 'hidden-CD9TBN7D',
      }
    },
    13932: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { StudyTemplateSaver: () => j })
      var n = a(50151),
        i = a(44352),
        s = a(50959),
        o = a(962),
        l = (a(42053), a(97754)),
        r = a(15294),
        c = a(21788),
        d = a(9745),
        u = a(50182),
        m = a(60508),
        h = a(26996),
        p = a(92297)
      function b(e) {
        const { isLoading: t } = e
        return s.createElement(
          'span',
          { className: t ? p.loading : void 0 },
          i.t(null, void 0, a(85520)),
          t && s.createElement(h.Loader, { color: 'white' }),
        )
      }
      class v extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._dialogRef = s.createRef()),
            (this._manager = null),
            (this._handleSubmit = () => {
              this.setState({ isLoading: !0 }), this.props.onSubmit(this)
            }),
            (this.state = { isLoading: !1 })
        }
        render() {
          const {
            isOpened: e,
            saveDisabled: t,
            title: a,
            onClose: n,
          } = this.props
          return s.createElement(u.AdaptiveConfirmDialog, {
            ref: this._dialogRef,
            onClose: n,
            onSubmit: this._handleSubmit,
            onCancel: n,
            onClickOutside: n,
            isOpened: e,
            title: a,
            dataName: 'save-rename-dialog',
            render: this._renderDialogBody(),
            defaultActionOnClose: 'none',
            submitButtonText: s.createElement(b, {
              isLoading: this.state.isLoading,
            }),
            submitButtonDisabled: t,
          })
        }
        focus() {
          ;(0, n.ensureNotNull)(this._dialogRef.current).focus()
        }
        manager() {
          return this._manager
        }
        submit() {
          this.props.onSubmit(this)
        }
        close() {
          this.props.onClose()
        }
        dropLoading() {
          this.setState({ isLoading: !1 })
        }
        _renderDialogBody() {
          return () =>
            s.createElement(
              m.SlotContext.Consumer,
              null,
              (e) => ((this._manager = e), this.props.children),
            )
        }
      }
      var g = a(33547),
        _ = a(85508),
        f = a(15747),
        S = a(49483)
      const y = i.t(null, void 0, a(50912)),
        C = i.t(null, void 0, a(40898)),
        w = i.t(null, void 0, a(33455)),
        N = i.t(null, void 0, a(63135)),
        x = [f.hintMark, 'apply-common-tooltip']
      function k(e) {
        const {
            title: t,
            saveSymbolHintText: a,
            saveIntervalHintText: i,
            indicatorsText: o,
            source: u,
            onClose: m,
            onSubmit: h,
          } = e,
          [p, b] = (0, s.useState)(''),
          [S, k] = (0, s.useState)(!1),
          [T, E] = (0, s.useState)(!1),
          [D, I] = (0, s.useState)(!1),
          B = (0, s.useRef)(null),
          L = (0, s.useRef)(null)
        return (
          (0, s.useEffect)(() => {
            ;(0, n.ensureNotNull)(L.current).focus()
          }, []),
          s.createElement(
            v,
            {
              ref: B,
              isOpened: !0,
              saveDisabled: !p,
              title: t,
              onClose: m,
              onSubmit: function (e) {
                h({ title: p, saveSymbol: S, saveInterval: T }, e)
              },
            },
            s.createElement(
              'div',
              { className: l(f.container, D && f.withSuggestions) },
              s.createElement('div', { className: f.title }, y),
              s.createElement(
                'div',
                { className: f.autocomplete },
                s.createElement(c.Autocomplete, {
                  maxLength: 64,
                  value: p,
                  onChange: b,
                  onBlur: function () {
                    ;(0, n.ensureNotNull)(B.current).focus()
                  },
                  source: u,
                  allowUserDefinedValues: !0,
                  preventOnFocusOpen: !0,
                  noEmptyText: !0,
                  preventSearchOnEmptyQuery: !0,
                  filter: g.autocompleteFilter,
                  setupHTMLInput: function (e) {
                    L.current = e
                  },
                  onSuggestionsOpen: function () {
                    I(!0)
                  },
                  onSuggestionsClose: function () {
                    I(!1)
                  },
                }),
              ),
              s.createElement(
                'div',
                { className: f.saveSymbol },
                s.createElement(r.Checkbox, {
                  label: s.createElement(
                    'span',
                    { className: f.hintLabel },
                    w,
                    s.createElement(d.Icon, {
                      icon: _,
                      className: l(x),
                      title: a,
                    }),
                  ),
                  onChange: function () {
                    k(!S), (0, n.ensureNotNull)(B.current).focus()
                  },
                  checked: S,
                }),
              ),
              s.createElement(
                'div',
                { className: f.saveInterval },
                s.createElement(r.Checkbox, {
                  label: s.createElement(
                    'span',
                    { className: f.hintLabel },
                    N,
                    s.createElement(d.Icon, {
                      icon: _,
                      className: l(x),
                      title: i,
                    }),
                  ),
                  onChange: function () {
                    E(!T), (0, n.ensureNotNull)(B.current).focus()
                  },
                  checked: T,
                }),
              ),
              s.createElement('div', { className: f.title }, C),
              s.createElement(
                'div',
                { className: l(f.indicators, D && f.withSuggestions) },
                o,
              ),
            ),
          )
        )
      }
      S.CheckMobile.any() && x.push(f.hidden)
      var T = a(76422),
        E = a(52092)
      class D {
        constructor(e) {
          ;(this._container = document.createElement('div')),
            (this.close = () => {
              this.unmount(), this._onClose && this._onClose()
            }),
            (this.unmount = () => {
              T.unsubscribe(
                E.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
                this.unmount,
                null,
              ),
                o.unmountComponentAtNode(this._container)
            }),
            (this._title = e.title),
            (this._saveSymbolHintText = e.saveSymbolHintText),
            (this._saveIntervalHintText = e.saveIntervalHintText),
            (this._indicatorsText = e.indicatorsText),
            (this._source = e.source),
            (this._onSubmit = e.onSubmit),
            (this._onClose = e.onClose),
            T.subscribe(E.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this.unmount, null)
        }
        mount() {
          o.render(
            s.createElement(k, {
              title: this._title,
              saveSymbolHintText: this._saveSymbolHintText,
              saveIntervalHintText: this._saveIntervalHintText,
              indicatorsText: this._indicatorsText,
              source: this._source,
              onClose: this.close,
              onSubmit: this._onSubmit,
            }),
            this._container,
          )
        }
        destroy() {
          this.unmount()
        }
        show() {
          this.mount()
        }
      }
      var I = a(61595),
        B = a(3615),
        L = a(11321),
        O = a(39344)
      const M = i.t(null, void 0, a(21939)),
        A = i.t(null, void 0, a(61422)),
        z = i.t(null, void 0, a(30858)),
        P = i.t(null, void 0, a(83081))
      function R(e, t, a) {
        const n = () => {
          I.backend.invalidateStudyTemplatesList(),
            I.backend.getStudyTemplatesList().then(t)
        }
        I.backend.saveStudyTemplate(e).then(n)
      }
      class j {
        constructor(e) {
          ;(this._dialog = null),
            (this._onSave = (e) => {
              this._options.onSave(e), this._close()
            }),
            (this._showSaveDialog = async () => {
              const e = this._controller.model().mainSeries().symbol(),
                t = this._controller.model().mainSeries().interval(),
                a = await this._getActualTemplateList()
              await this._showTemplateSaveRenameDialog(a, e, t)
            }),
            (this._close = () => {
              this._dialog && (this._dialog.destroy(), (this._dialog = null))
            }),
            (this._options = e),
            (this._controller = e.controller)
        }
        show() {
          window.runOrSignIn(this._showSaveDialog, {
            source: 'Study templates save as',
            sourceMeta: 'Chart',
          })
        }
        _prepareData(e, t, a) {
          const n = this._controller.model().studyTemplate(t, a)
          return {
            name: e,
            content: JSON.stringify(n),
            meta_info: (0, O.createStudyTemplateMetaInfo)(
              this._controller,
              n.interval,
            ),
          }
        }
        _doSave(e, t, a) {
          const { title: n, saveSymbol: i, saveInterval: s } = t
          if (!n) return
          const o = a.manager() || void 0,
            l = this._prepareData(n, i, s)
          if (e.find((e) => e.name === n)) {
            const e = (e) => {
              e ? R(l, this._onSave) : (a.focus(), a.dropLoading())
            }
            ;(function (e, t) {
              return new Promise((a) =>
                (0, B.showConfirm)(
                  {
                    text: P.format({
                      templateName: e,
                    }),
                    onConfirm: ({ dialogClose: e }) => {
                      a(!0), e()
                    },
                    onClose: () => a(!1),
                  },
                  t,
                ),
              )
            })(n, o).then(e)
          } else {
            R(l, this._onSave)
          }
        }
        _getActualTemplateList() {
          return (
            I.backend.invalidateStudyTemplatesList(),
            I.backend.getStudyTemplatesList()
          )
        }
        _showTemplateSaveRenameDialog(e, t, a) {
          const n = (0, O.createStudyTemplateMetaInfo)(this._controller)
          ;(this._dialog = new D({
            source: e.map((e) => e.name),
            title: M,
            saveSymbolHintText: A.format({ symbol: t }),
            saveIntervalHintText: z.format({
              interval: (0, L.translatedIntervalString)(a),
            }),
            indicatorsText: (0, O.descriptionString)(n.indicators),
            onSubmit: (t, a) => this._doSave(e, t, a),
            onClose: this._close,
          })).show()
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
    33547: (e, t, a) => {
      'use strict'
      function n(e, t) {
        return Boolean(
          '' === e || (e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())),
        )
      }
      a.d(t, { autocompleteFilter: () => n })
    },
    65890: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
    },
    85508: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'
    },
    21939: (e) => {
      e.exports = {
        ar: ['حفظ قالب المؤشر'],
        ca_ES: 'Save Indicator Template',
        cs: 'Save Indicator Template',
        de: ['Indikatorvorlage speichern'],
        el: 'Save Indicator Template',
        en: 'Save Indicator Template',
        es: ['Guardar plantilla de indicadores'],
        fa: 'Save Indicator Template',
        fr: ["Sauver le modèle d'indicateur"],
        he_IL: ['שמור תבנית אינדיקטור'],
        hu_HU: 'Save Indicator Template',
        id_ID: ['Simpan Template Indikator'],
        it: ['Salva modello indicatore'],
        ja: ['インジケーターテンプレートを保存'],
        ko: ['인디케이터 템플릿 세이브'],
        ms_MY: ['Simpan Templat Penunjuk'],
        nl_NL: 'Save Indicator Template',
        pl: ['Zapisz szablon wskaźnika'],
        pt: ['Salvar Conjunto de Indicadores'],
        ro: 'Save Indicator Template',
        ru: ['Сохранить шаблон индикаторов'],
        sv: ['Spara indikatormall'],
        th: ['บันทึกรูปแบบอินดิเคเตอร์'],
        tr: ['Gösterge Şablonu Kaydet'],
        vi: ['Lưu mẫu chỉ báo'],
        zh: ['保存指标模板'],
        zh_TW: ['儲存指標範本為'],
      }
    },
    40898: (e) => {
      e.exports = {
        ar: ['المؤشرات المحفوظة'],
        ca_ES: 'Saved indicators',
        cs: 'Saved indicators',
        de: ['Gespeicherte Indikatoren'],
        el: 'Saved indicators',
        en: 'Saved indicators',
        es: ['Indicadores guardados'],
        fa: 'Saved indicators',
        fr: ['Indicateurs sauvegardés'],
        he_IL: ['אינדיקטורים שמורים'],
        hu_HU: 'Saved indicators',
        id_ID: ['Indikator tersimpan'],
        it: ['Indicatori salvati'],
        ja: ['保存されたインジケーター'],
        ko: ['세이브된 인디케이터'],
        ms_MY: ['Petunjuk yang disimpan'],
        nl_NL: 'Saved indicators',
        pl: ['Zapisane wskaźniki'],
        pt: ['Indicadores salvos'],
        ro: 'Saved indicators',
        ru: ['Сохранённые индикаторы'],
        sv: ['Sparade indikatorer'],
        th: ['อินดิเคเตอร์ที่เซฟไว้'],
        tr: ['Kaydedilmiş göstergeler'],
        vi: ['Chỉ báo đã được lưu'],
        zh: ['已存指标'],
        zh_TW: ['已存指標'],
      }
    },
    30858: (e) => {
      e.exports = {
        ar: [
          'سيؤدي تحديد هذا الخيار إلى تعيين الفاصل الزمني‎{interval} ‎ على الرسم البياني عند تطبيق هذا القالب',
        ],
        ca_ES:
          'Selecting this option will set the {interval} interval on the chart when this template is applied',
        cs: 'Selecting this option will set the {interval} interval on the chart when this template is applied',
        de: [
          'Durch Auswahl dieser Option wird das {interval}-Intervall im Chart festgelegt, wenn diese Vorlage angewendet wird',
        ],
        el: 'Selecting this option will set the {interval} interval on the chart when this template is applied',
        en: 'Selecting this option will set the {interval} interval on the chart when this template is applied',
        es: [
          'Al seleccionar esta opción se establecerá el intervalo {interval} en el gráfico cuando se aplique esta plantilla',
        ],
        fa: 'Selecting this option will set the {interval} interval on the chart when this template is applied',
        fr: [
          "En sélectionnant cette option, l'intervalle {interval} sera placé sur le graphique lorsque ce modèle est appliqué",
        ],
        he_IL: [
          'בחירת אפשרות זו תגדיר את האינטרוול ‎{interval}‎ בגרף כאשר מיושמת תבנית זו',
        ],
        hu_HU:
          'Selecting this option will set the {interval} interval on the chart when this template is applied',
        id_ID: [
          'Memilih opsi ini akan mengatur interval {interval} pada chart saat template ini diterapkan',
        ],
        it: [
          'Selezionando questa opzione, il modello viene applicato cambiando il timeframe in {interval}',
        ],
        ja: [
          'この項目を選択すると、テンプレートが適用された時にチャートの時間足が{interval}に設定されます',
        ],
        ko: [
          '이 옵션을 고르면 이 템플릿이 적용될 때 차트에 {interval} 을 세팅하게 됩니다.',
        ],
        ms_MY: [
          'Memilih pilihan ini akan menetapkan selang masa {interval} pada carta apabila templat ini digunakan',
        ],
        nl_NL:
          'Selecting this option will set the {interval} interval on the chart when this template is applied',
        pl: [
          'Wybór tej opcji spowoduje ustawienie na wykresie interwału {interval} po zastosowaniu tego szablonu',
        ],
        pt: [
          'Selecionar esta opção definirá o intervalo {interval} no gráfico quando este modelo for aplicado',
        ],
        ro: 'Selecting this option will set the {interval} interval on the chart when this template is applied',
        ru: [
          'Включите, чтобы установить на графике интервал {interval}, когда этот шаблон применён',
        ],
        sv: [
          'Om du väljer detta alternativ ställer du in intervallet {interval} i diagrammet när den här mallen används',
        ],
        th: [
          'การเลือกตัวเลือกนี้จะเป็นการกำหนดช่วงเวลา {interval} บนชาร์ต เมื่อเทมเพลตนี้ถูกใช้งาน',
        ],
        tr: [
          'Bu seçeneğin belirlenmesi ile, bu taslak uygulandığında grafikte {interval} aralığı ayarlanır',
        ],
        vi: [
          'Chọn tùy chọn này sẽ đặt khoảng thời gian {interval} trên biểu đồ khi mẫu này được áp dụng',
        ],
        zh: ['套用此模板时，选择此选项将在图表上设置{interval}周期'],
        zh_TW: ['套用此模板時，選擇此選項將在圖表上設置{interval}周期'],
      }
    },
    61422: (e) => {
      e.exports = {
        ar: [
          'سيؤدي تحديد هذا الخيار إلى تعيين الرمز ‎{symbol}‎ على الرسم البياني عند تطبيق هذا القالب',
        ],
        ca_ES:
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        cs: 'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        de: [
          'Wenn Sie diese Option wählen, wird das {symbol}-Symbol auf dem Chart gesetzt, wenn diese Vorlage angewendet wird.',
        ],
        el: 'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        en: 'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        es: [
          'Al seleccionar esta opción se establecerá el símbolo {symbol} en el gráfico cuando se utilice esta plantilla',
        ],
        fa: 'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        fr: [
          'En sélectionnant cette option, le symbole {symbol} sera placé sur le graphique lorsque ce modèle est appliqué',
        ],
        he_IL: [
          'בחירת אפשרות זו תגדיר את הסימול ‎{symbol}‎ בגרף כאשר מיושמת תבנית זו',
        ],
        hu_HU:
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        id_ID: [
          'Memilih opsi ini akan mengatur simbol {symbol} pada chart saat template ini diterapkan',
        ],
        it: [
          'Selezionando questa opzione, quando il modello viene applicato, viene inserito anche il simbolo {symbol}',
        ],
        ja: [
          'この項目を選択すると、テンプレートが適用された時にチャートのシンボルが{symbol}に設定されます',
        ],
        ko: [
          '이 옵션을 고르면 이 템플릿이 적용될 때 차트에 {symbol} 을 세팅하게 됩니다.',
        ],
        ms_MY: [
          'Memilih pilihan ini akan menetapkan simbol {symbol} pada carta apabila templat ini digunakan',
        ],
        nl_NL:
          'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        pl: [
          'Wybór tej opcji spowoduje ustawienie na wykresie symbolu {symbol} po zastosowaniu tego szablonu',
        ],
        pt: [
          'Selecionar esta opção definirá o símbolo {symbol} no gráfico quando este modelo for aplicado',
        ],
        ro: 'Selecting this option will set the {symbol} symbol on the chart when this template is applied',
        ru: [
          'Включите, чтобы установить на графике символ {symbol}, когда этот шаблон применён',
        ],
        sv: [
          'Om du väljer detta alternativ ställer du in symbolen {symbol} i diagrammet när den här mallen används',
        ],
        th: [
          'การเลือกตัวเลือกนี้จะเป็นการกำหนดตัวย่อ {symbol} บนชาร์ต เมื่อเทมเพลตนี้ถูกใช้งาน',
        ],
        tr: [
          'Bu seçeneğin belirlenmesi ile, bu taslak uygulandığında grafikte {symbol} sembolü ayarlanacaktır.',
        ],
        vi: [
          'Chọn lựa chọn này sẽ đặt mã giao dịch {symbol} trên biểu đồ khi mẫu hình được áp dụng',
        ],
        zh: ['套用此模板时，选择此选项将在图表上设置{symbol}商品'],
        zh_TW: ['套用此模板時，選擇此選項將在圖表上設置{symbol}商品'],
      }
    },
    83081: (e) => {
      e.exports = {
        ar: [
          'نموذج الدراسة "‎{templateName}‎" موجود بالفعل، هل تريد حقًا استبداله؟',
        ],
        ca_ES:
          "Study Template '{templateName}' already exists. Do you really want to replace it?",
        cs: "Study Template '{templateName}' already exists. Do you really want to replace it?",
        de: [
          "Studienvorlage '{templateName}' existiert bereits. Möchten Sie diese wirklich ersetzen?",
        ],
        el: "Study Template '{templateName}' already exists. Do you really want to replace it?",
        en: "Study Template '{templateName}' already exists. Do you really want to replace it?",
        es: [
          "La plantilla de estudio '{templateName}' ya existe. ¿Está seguro de que quiere reemplazarla?",
        ],
        fa: "Study Template '{templateName}' already exists. Do you really want to replace it?",
        fr: [
          "Le Modèle d'Etude '{templateName}' existe déjà. Voulez-vous vraiment le remplacer ?",
        ],
        he_IL: [
          'תבנית המחקר ‎{templateName}‎ קיימת כבר. האם אתה באמת רוצה להחליף אותה?',
        ],
        hu_HU: [
          '{templateName} névvel már létezik tanulmánysablon. Biztos, hogy cserélni akarod?',
        ],
        id_ID: [
          "Template Studi '{templateName}' sudah ada. Apakah anda ingin menggantinya?",
        ],
        it: ["Il Modello di studio '{templateName}' esiste già. Sostituirlo?"],
        ja: [
          'テンプレート {templateName} は既に存在します。本当に上書きしますか？',
        ],
        ko: [
          "같은 이름의 스터디 템플릿 '{templateName}' 가 이미 있습니다. 정말로 바꾸시겠습니까?",
        ],
        ms_MY: [
          "Templat Kajian '{templateName}' sudah ada. Adakah anda benar-benar mahu menggantikannya?",
        ],
        nl_NL:
          "Study Template '{templateName}' already exists. Do you really want to replace it?",
        pl: [
          "Szablon analizy '{templateName}' już istnieje. Naprawdę chcesz go zastąpić?",
        ],
        pt: [
          "O modelo de estudo '{templateName}' já existe. Deseja substituí-lo?",
        ],
        ro: "Study Template '{templateName}' already exists. Do you really want to replace it?",
        ru: [
          "Шаблон индикаторов '{templateName}' уже существует. Вы действительно хотите заменить его?",
        ],
        sv: [
          "Studiemall '{templateName}' finns redan. Vill du verkligen ersätta den?",
        ],
        th: [
          "เทมเพลตการศึกษา '{templateName}' มีอยู่แล้ว คุณต้องการที่จะแทนที่มันใช่หรือไม่?",
        ],
        tr: [
          "'{templateName}' Çalışma Şablonu zaten var.Yenisiyle değiştirmek mi istiyorsunuz?",
        ],
        vi: [
          "Mẫu Nghiên cứu '{templateName}' đã tồn tại. Bạn có thực sự muốn thay thế nó?",
        ],
        zh: ['指标模板{templateName}已经存在。确定替换？'],
        zh_TW: ["研究模板'{templateName}'已經存在，確定替換？"],
      }
    },
    63135: (e) => {
      e.exports = {
        ar: ['تذكر الفاصل الزمني'],
        ca_ES: 'Remember Interval',
        cs: 'Remember Interval',
        de: ['Interval merken'],
        el: 'Remember Interval',
        en: 'Remember Interval',
        es: ['Recordar intervalo'],
        fa: 'Remember Interval',
        fr: ["Se souvenir de l'intervalle"],
        he_IL: ['זכור אינטרוול'],
        hu_HU: 'Remember Interval',
        id_ID: ['Ingat Interval'],
        it: ['Ricorda timeframe'],
        ja: ['時間足を記憶'],
        ko: ['인터벌 기억하기'],
        ms_MY: ['Ingat Selang Masa'],
        nl_NL: 'Remember Interval',
        pl: ['Zapamiętaj interwał'],
        pt: ['Lembrar do Intervalo'],
        ro: 'Remember Interval',
        ru: ['Запомнить интервал'],
        sv: ['Kom ihåg intervall'],
        th: ['จำช่วงเวลา'],
        tr: ['Aralığı Hatırla'],
        vi: ['Nhớ Khoảng thời gian'],
        zh: ['记住周期'],
        zh_TW: ['記住周期'],
      }
    },
    33455: (e) => {
      e.exports = {
        ar: ['تذكر الرمز'],
        ca_ES: 'Remember Symbol',
        cs: 'Remember Symbol',
        de: ['Symbol merken'],
        el: 'Remember Symbol',
        en: 'Remember Symbol',
        es: ['Recordar símbolo'],
        fa: 'Remember Symbol',
        fr: ['Se souvenir du symbole'],
        he_IL: ['זכור את הסימול'],
        hu_HU: 'Remember Symbol',
        id_ID: ['Ingat Simbol'],
        it: ['Ricorda simbolo'],
        ja: ['シンボルを記憶'],
        ko: ['심볼 기억하기'],
        ms_MY: ['Ingat Simbol'],
        nl_NL: 'Remember Symbol',
        pl: ['Zapamiętaj symbol'],
        pt: ['Lembrar do Símbolo'],
        ro: 'Remember Symbol',
        ru: ['Запомнить инструмент'],
        sv: ['Kom ihåg symbol'],
        th: ['จำตัวย่อ'],
        tr: ['Sembolü Hatırla'],
        vi: ['Nhớ Mã giao dịch'],
        zh: ['记住商品'],
        zh_TW: ['記住商品'],
      }
    },
    50912: (e) => {
      e.exports = {
        ar: ['أسم القالب'],
        ca_ES: ['Nom de la plantilla'],
        cs: 'Template name',
        de: ['Name der Vorlage'],
        el: 'Template name',
        en: 'Template name',
        es: ['Nombre de la plantilla'],
        fa: 'Template name',
        fr: ['Nom du modèle'],
        he_IL: ['שם תבנית'],
        hu_HU: ['Sablon neve'],
        id_ID: ['Nama template'],
        it: ['Nome modello'],
        ja: ['テンプレート名'],
        ko: ['템플릿이름'],
        ms_MY: ['Nama templat'],
        nl_NL: 'Template name',
        pl: ['Nazwa Szablonu'],
        pt: ['Nome do modelo'],
        ro: 'Template name',
        ru: ['Имя шаблона'],
        sv: ['Mallnamn'],
        th: ['ชื่อเทมเพลต'],
        tr: ['Şablon adı'],
        vi: ['Tên Mẫu'],
        zh: ['模板名称'],
        zh_TW: ['範本名稱'],
      }
    },
  },
])
