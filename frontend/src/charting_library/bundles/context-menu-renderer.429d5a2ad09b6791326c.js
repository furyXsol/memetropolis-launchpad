;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1584],
  {
    59142: function (e, t) {
      var o, n, r
      ;(n = [t]),
        (o = function (e) {
          'use strict'
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, o = Array(e.length); t < e.length; t++)
                o[t] = e[t]
              return o
            }
            return Array.from(e)
          }
          Object.defineProperty(e, '__esModule', { value: !0 })
          var o = !1
          if ('undefined' != typeof window) {
            var n = {
              get passive() {
                o = !0
              },
            }
            window.addEventListener('testPassive', null, n),
              window.removeEventListener('testPassive', null, n)
          }
          var r =
              'undefined' != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            i = [],
            s = !1,
            a = -1,
            l = void 0,
            c = void 0,
            d = function (e) {
              return i.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                )
              })
            },
            u = function (e) {
              var t = e || window.event
              return (
                !!d(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              )
            },
            h = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== l &&
                    ((document.body.style.overflow = l), (l = void 0))
              })
            }
          ;(e.disableBodyScroll = function (e, n) {
            if (r) {
              if (!e)
                return void console.error(
                  'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.',
                )
              if (
                e &&
                !i.some(function (t) {
                  return t.targetElement === e
                })
              ) {
                var h = { targetElement: e, options: n || {} }
                ;(i = [].concat(t(i), [h])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (a = e.targetTouches[0].clientY)
                  }),
                  (e.ontouchmove = function (t) {
                    var o, n, r, i
                    1 === t.targetTouches.length &&
                      ((n = e),
                      (i = (o = t).targetTouches[0].clientY - a),
                      !d(o.target) &&
                        ((n && 0 === n.scrollTop && 0 < i) ||
                        ((r = n) &&
                          r.scrollHeight - r.scrollTop <= r.clientHeight &&
                          i < 0)
                          ? u(o)
                          : o.stopPropagation()))
                  }),
                  s ||
                    (document.addEventListener(
                      'touchmove',
                      u,
                      o ? { passive: !1 } : void 0,
                    ),
                    (s = !0))
              }
            } else {
              ;(m = n),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!m && !0 === m.reserveScrollBarGap,
                      t =
                        window.innerWidth - document.documentElement.clientWidth
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + 'px'))
                  }
                  void 0 === l &&
                    ((l = document.body.style.overflow),
                    (document.body.style.overflow = 'hidden'))
                })
              var v = { targetElement: e, options: n || {} }
              i = [].concat(t(i), [v])
            }
            var m
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (i.forEach(function (e) {
                    ;(e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null)
                  }),
                  s &&
                    (document.removeEventListener(
                      'touchmove',
                      u,
                      o ? { passive: !1 } : void 0,
                    ),
                    (s = !1)),
                  (i = []),
                  (a = -1))
                : (h(), (i = []))
            }),
            (e.enableBodyScroll = function (e) {
              if (r) {
                if (!e)
                  return void console.error(
                    'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.',
                  )
                ;(e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (i = i.filter(function (t) {
                    return t.targetElement !== e
                  })),
                  s &&
                    0 === i.length &&
                    (document.removeEventListener(
                      'touchmove',
                      u,
                      o ? { passive: !1 } : void 0,
                    ),
                    (s = !1))
              } else
                1 === i.length && i[0].targetElement === e
                  ? (h(), (i = []))
                  : (i = i.filter(function (t) {
                      return t.targetElement !== e
                    }))
            })
        }),
        void 0 === (r = 'function' == typeof o ? o.apply(t, n) : o) ||
          (e.exports = r)
    },
    66076: (e) => {
      e.exports = {
        'default-drawer-min-top-distance': '100px',
        wrap: 'wrap-_HnK0UIN',
        positionBottom: 'positionBottom-_HnK0UIN',
        backdrop: 'backdrop-_HnK0UIN',
        drawer: 'drawer-_HnK0UIN',
        positionLeft: 'positionLeft-_HnK0UIN',
      }
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
    27267: (e, t, o) => {
      'use strict'
      function n(e, t, o, n, r) {
        function i(r) {
          if (e > r.timeStamp) return
          const i = r.target
          void 0 !== o &&
            null !== t &&
            null !== i &&
            i.ownerDocument === n &&
            (t.contains(i) || o(r))
        }
        return (
          r.click && n.addEventListener('click', i, !1),
          r.mouseDown && n.addEventListener('mousedown', i, !1),
          r.touchEnd && n.addEventListener('touchend', i, !1),
          r.touchStart && n.addEventListener('touchstart', i, !1),
          () => {
            n.removeEventListener('click', i, !1),
              n.removeEventListener('mousedown', i, !1),
              n.removeEventListener('touchend', i, !1),
              n.removeEventListener('touchstart', i, !1)
          }
        )
      }
      o.d(t, { addOutsideEventListener: () => n })
    },
    90186: (e, t, o) => {
      'use strict'
      function n(e) {
        return i(e, s)
      }
      function r(e) {
        return i(e, a)
      }
      function i(e, t) {
        const o = Object.entries(e).filter(t),
          n = {}
        for (const [e, t] of o) n[e] = t
        return n
      }
      function s(e) {
        const [t, o] = e
        return 0 === t.indexOf('data-') && 'string' == typeof o
      }
      function a(e) {
        return 0 === e[0].indexOf('aria-')
      }
      o.d(t, {
        filterAriaProps: () => r,
        filterDataProps: () => n,
        filterProps: () => i,
        isAriaAttribute: () => a,
        isDataAttribute: () => s,
      })
    },
    37558: (e, t, o) => {
      'use strict'
      o.d(t, { DrawerContext: () => s, DrawerManager: () => i })
      var n = o(50959),
        r = o(99054)
      class i extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._isBodyFixed = !1),
            (this._addDrawer = (e) => {
              this.setState((t) => ({ stack: [...t.stack, e] }))
            }),
            (this._removeDrawer = (e) => {
              this.setState((t) => ({ stack: t.stack.filter((t) => t !== e) }))
            }),
            (this.state = { stack: [] })
        }
        componentDidUpdate(e, t) {
          !t.stack.length &&
            this.state.stack.length &&
            ((0, r.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, r.setFixedBodyState)(!1), (this._isBodyFixed = !1))
        }
        componentWillUnmount() {
          this.state.stack.length &&
            this._isBodyFixed &&
            (0, r.setFixedBodyState)(!1)
        }
        render() {
          return n.createElement(
            s.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.stack.length
                  ? this.state.stack[this.state.stack.length - 1]
                  : null,
              },
            },
            this.props.children,
          )
        }
      }
      const s = n.createContext(null)
    },
    41590: (e, t, o) => {
      'use strict'
      o.d(t, { Drawer: () => h })
      var n = o(50959),
        r = o(50151),
        i = o(97754),
        s = o(36174),
        a = o(65718),
        l = o(37558),
        c = o(29197),
        d = o(86656),
        u = o(66076)
      function h(e) {
        const {
            position: t = 'Bottom',
            onClose: o,
            children: d,
            className: h,
            theme: m = u,
          } = e,
          f = (0, r.ensureNotNull)((0, n.useContext)(l.DrawerContext)),
          [p] = (0, n.useState)(() => (0, s.randomHash)()),
          w = (0, n.useRef)(null),
          g = (0, n.useContext)(c.CloseDelegateContext)
        return (
          (0, n.useLayoutEffect)(
            () => (
              (0, r.ensureNotNull)(w.current).focus({ preventScroll: !0 }),
              g.subscribe(f, o),
              f.addDrawer(p),
              () => {
                f.removeDrawer(p), g.unsubscribe(f, o)
              }
            ),
            [],
          ),
          n.createElement(
            a.Portal,
            null,
            n.createElement(
              'div',
              { className: i(u.wrap, u[`position${t}`]) },
              p === f.currentDrawer &&
                n.createElement('div', { className: u.backdrop, onClick: o }),
              n.createElement(
                v,
                {
                  className: i(m.drawer, u[`position${t}`], h),
                  ref: w,
                  'data-name': e['data-name'],
                },
                d,
              ),
            ),
          )
        )
      }
      const v = (0, n.forwardRef)((e, t) => {
        const { className: o, ...r } = e
        return n.createElement(d.TouchScrollContainer, {
          className: i(u.drawer, o),
          tabIndex: -1,
          ref: t,
          ...r,
        })
      })
    },
    36189: (e, t, o) => {
      'use strict'
      o.d(t, { FavoriteButton: () => u })
      var n = o(44352),
        r = o(50959),
        i = o(97754),
        s = o(9745),
        a = o(39146),
        l = o(48010),
        c = o(14877)
      const d = {
        add: n.t(null, void 0, o(44629)),
        remove: n.t(null, void 0, o(72482)),
      }
      function u(e) {
        const { className: t, isFilled: o, isActive: n, onClick: u, ...h } = e
        return r.createElement(s.Icon, {
          ...h,
          className: i(
            c.favorite,
            'apply-common-tooltip',
            o && c.checked,
            n && c.active,
            t,
          ),
          icon: o ? a : l,
          onClick: u,
          title: o ? d.remove : d.add,
        })
      }
    },
    86656: (e, t, o) => {
      'use strict'
      o.d(t, { TouchScrollContainer: () => a })
      var n = o(50959),
        r = o(59142),
        i = o(50151),
        s = o(49483)
      const a = (0, n.forwardRef)((e, t) => {
        const { children: o, ...i } = e,
          a = (0, n.useRef)(null)
        return (
          (0, n.useImperativeHandle)(t, () => a.current),
          (0, n.useLayoutEffect)(() => {
            if (s.CheckMobile.iOS())
              return (
                null !== a.current &&
                  (0, r.disableBodyScroll)(a.current, { allowTouchMove: l(a) }),
                () => {
                  null !== a.current && (0, r.enableBodyScroll)(a.current)
                }
              )
          }, []),
          n.createElement('div', { ref: a, ...i }, o)
        )
      })
      function l(e) {
        return (t) => {
          const o = (0, i.ensureNotNull)(e.current),
            n = document.activeElement
          return (
            !o.contains(t) || (null !== n && o.contains(n) && n.contains(t))
          )
        }
      }
    },
    20323: (e, t, o) => {
      'use strict'
      o.r(t), o.d(t, { ContextMenuRenderer: () => l })
      var n = o(50959),
        r = o(962),
        i = o(29332),
        s = o(38223),
        a = o(60508)
      class l {
        constructor(e, t, o, r) {
          ;(this._root = document.createElement('div')),
            (this._isShown = !1),
            (this._manager = null),
            (this._props = {
              isOpened: !1,
              items: e,
              position: { x: 0, y: 0 },
              menuStatName: t.statName,
              mode: t.mode,
              'data-name': t['data-name'],
            }),
            (this._onDestroy = o),
            (this._onShow = r),
            (this._activeElement = document.activeElement),
            (this._returnFocus = t.returnFocus),
            (this._takeFocus = t.takeFocus),
            (this._menuElementRef = n.createRef()),
            (this._doNotCloseOn = t.doNotCloseOn),
            t.manager && (this._manager = t.manager)
        }
        show(e) {
          this._onShow && this._onShow(),
            (this._isShown = !0),
            this._render({
              ...this._props,
              position: (t, o, n, r) => {
                var i, a, l, c, d, u, h
                let v
                if (void 0 !== e.box) v = e.box
                else {
                  v = {
                    x:
                      null !==
                        (a =
                          null === (i = e.touches) || void 0 === i
                            ? void 0
                            : i[0].clientX) && void 0 !== a
                        ? a
                        : e.clientX,
                    y:
                      null !==
                        (c =
                          null === (l = e.touches) || void 0 === l
                            ? void 0
                            : l[0].clientY) && void 0 !== c
                        ? c
                        : e.clientY,
                    w: 0,
                    h: 0,
                  }
                }
                const m = null !== (d = e.marginX) && void 0 !== d ? d : 0,
                  f = null !== (u = e.marginY) && void 0 !== u ? u : 0
                let p, w
                switch (
                  ((p =
                    void 0 === e.attachToXBy
                      ? (0, s.isRtl)()
                        ? 'right'
                        : 'left'
                      : 'auto' === e.attachToXBy
                        ? (0, s.isRtl)()
                          ? v.x - m - t >= 0
                            ? 'right'
                            : 'left'
                          : v.x + v.w + m + t <= n
                            ? 'left'
                            : 'right'
                        : e.attachToXBy),
                  p)
                ) {
                  case 'left':
                    w = v.x + v.w + m
                    break
                  case 'right':
                    w = v.x - t - m
                }
                let g,
                  _ = null !== (h = e.attachToYBy) && void 0 !== h ? h : 'auto'
                'auto-strict' === _ &&
                  (_ = r < v.y + v.h + f + o ? 'bottom' : 'top')
                let y = v.y
                switch (_) {
                  case 'top':
                    ;(y = v.y + v.h + f), (g = o > r - y ? r - y : void 0)
                    break
                  case 'bottom':
                    ;(y = Math.max(0, v.y - f - o)),
                      (g = 0 === y ? v.y - f : void 0)
                }
                return { x: w, y, overrideHeight: g }
              },
              isOpened: !0,
              onClose: () => {
                this.hide(), this._unmount()
              },
              doNotCloseOn: this._doNotCloseOn,
              takeFocus: this._takeFocus,
              menuElementReference: this._menuElementRef,
            })
        }
        hide() {
          ;(this._isShown = !1), this._render({ ...this._props, isOpened: !1 })
        }
        isShown() {
          return this._isShown
        }
        _unmount() {
          ;(this._isShown = !1),
            r.unmountComponentAtNode(this._root),
            this._onDestroy && this._onDestroy(),
            this._returnFocus &&
              this._activeElement instanceof HTMLElement &&
              this._activeElement.focus({ preventScroll: !0 })
        }
        _render(e) {
          r.render(
            n.createElement(
              a.SlotContext.Provider,
              { value: this._manager },
              n.createElement(i.OverlapContextMenu, { ...e }),
            ),
            this._root,
          )
        }
      }
    },
    14665: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'
    },
    39146: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
    },
    48010: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
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
