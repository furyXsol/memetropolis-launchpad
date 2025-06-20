;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4079],
  {
    1539: (t, e, a) => {
      'use strict'
      a.r(e), a.d(e, { GotoDateView: () => T })
      var i = a(50151),
        l = a(86441),
        r = a(48891),
        s = a(44352),
        n = a(29764),
        o = a(38223),
        d = a(5286),
        u = a(46501),
        h = a(15187),
        c = a(74359)
      const _ = s.t(null, void 0, a(24450)),
        b = (0, r.getHexColorByName)('color-cold-gray-100')
      class m extends h.MediaCoordinatesPaneRenderer {
        constructor() {
          super(...arguments), (this._data = null)
        }
        setData(t) {
          this._data = t
        }
        hitTest() {
          return null
        }
        _drawImpl(t) {
          const e = this._data
          if (null === e) return
          const {
              dateString: a,
              timeString: l,
              eod: r,
              point: s,
              direction: h,
            } = e,
            m = Math.round(4.5),
            T = t.context
          let f,
            g = 0,
            p = 0
          ;(T.font = (0, n.makeFont)(12, u.CHART_FONT_FAMILY)),
            r
              ? (f = T.measureText(_).width)
              : ((g = T.measureText(null != a ? a : '').width),
                (p = T.measureText(null != l ? l : '').width),
                (f = Math.max(g, p)))
          const v = l ? 2 : 1,
            x = (0, d.getThemedColor)('color-goto-label-background')
          ;(T.fillStyle = x), T.translate(s.x, s.y)
          const S = Math.round(-f / 2) - 8,
            N = -9 * h,
            w = N + h * (-17 * v - 8),
            L = Math.round(S + f + 16)
          T.beginPath(),
            T.moveTo(S + 2, w),
            T.lineTo(L - 2, w),
            T.arcTo(L, w, L, w + 2 * h, 2),
            T.lineTo(L, N - 2 * h),
            T.arcTo(L, N, L - 2, N, 2),
            T.lineTo(6, N),
            T.lineTo(0, N + 4 * h),
            T.lineTo(-6, N),
            T.lineTo(S + 2, N),
            T.arcTo(S, N, S, N - 2 * h, 2),
            T.lineTo(S, w + 2 * h),
            T.arcTo(S, w, S + 2, w, 2),
            T.fill(),
            (T.fillStyle = b),
            (T.textBaseline = 'middle'),
            (T.textAlign = (0, o.isRtl)() ? 'right' : 'left')
          const B = Math.min(N, w),
            I = Math.max(N, w)
          if (e.eod) {
            const t = (0, c.calcTextHorizontalShift)(T, f)
            T.fillText(_, S + 8 + t, (B + I) / 2)
          } else {
            const t = S + 8 + (f - g) / 2,
              a = (0, c.calcTextHorizontalShift)(T, g)
            if (
              (T.fillText((0, i.ensureDefined)(e.dateString), t + a, B + m + 8),
              e.timeString)
            ) {
              const t = (0, c.calcTextHorizontalShift)(T, p),
                a = S + 8 + (f - p) / 2
              T.fillText(e.timeString, a + t, B + 17 * v - m)
            }
          }
        }
      }
      class T {
        constructor(t, e, a = !1) {
          ;(this._renderer = new m()),
            (this._invalidated = !0),
            (this._data = null),
            (this._doNotShowLastAvailableBar = !1),
            (this._gotoDateResult = e),
            (this._series = t),
            (this._belowBar = a)
        }
        update() {
          this._invalidated = !0
        }
        doNotShowLastAvailableBar(t) {
          ;(this._doNotShowLastAvailableBar = t), this.update()
        }
        renderer() {
          return (
            this._invalidated && (this._updateImpl(), (this._invalidated = !1)),
            this._data ? this._renderer : null
          )
        }
        _updateImpl() {
          this._data = null
          const t = !!this._gotoDateResult.eod
          if (t && this._doNotShowLastAvailableBar) return
          const e = this._series.model(),
            a = e.timeScale().timePointToIndex(this._gotoDateResult.timestamp)
          if (null === a) return
          const r = this._getTargetBar(a)
          if (null === r) return
          const { bar: s, targetIndex: n } = r,
            o = this._series.firstValue()
          if (null === o) return
          let d, u
          const h = this._series.priceScale().isInverted()
          this._belowBar
            ? ((d = 3), (u = h ? 1 : -1))
            : ((d = 2), (u = h ? -1 : 1))
          const c = this._series.priceScale().priceToCoordinate(s[d], o),
            _ = e.timeScale().indexToCoordinate((0, i.ensureNotNull)(n)),
            b = new l.Point(_, c)
          let m, T
          if (!t) {
            const t = (0, i.ensureNotNull)(
              e.timeScale().indexToUserTime((0, i.ensureNotNull)(n)),
            )
            ;(m = e.dateFormatter().format(t)),
              this._series.isDWM() || (T = e.timeFormatter().format(t))
          }
          ;(this._data = {
            point: b,
            direction: u,
            eod: t,
            dateString: m,
            timeString: T,
          }),
            this._renderer.setData(this._data)
        }
        _getTargetBar(t) {
          const e = this._series.bars(),
            a = e.firstIndex(),
            l = e.lastIndex()
          if (null === a || null === l) return null
          let r,
            s = t
          return (
            t < a && null !== e.first()
              ? ((s = a), (r = (0, i.ensureNotNull)(e.first()).value))
              : t > l && null !== e.last()
                ? ((s = (0, i.ensureNotNull)(e.lastIndex())),
                  (r = (0, i.ensureNotNull)(e.last()).value))
                : (r = (0, i.ensureNotNull)(e.valueAt(t))),
            { bar: r, targetIndex: s }
          )
        }
      }
    },
    24450: (t) => {
      t.exports = {
        ar: ['وقت آخر شريط'],
        ca_ES: ['Última barra disponible'],
        cs: 'Last available bar',
        de: ['Letzter vorhandener Balken'],
        el: 'Last available bar',
        en: 'Last available bar',
        es: ['Última barra disponible'],
        fa: 'Last available bar',
        fr: ['Dernière barre disponible'],
        he_IL: ['הנר זמין אחרון'],
        hu_HU: ['Utolsó elérhető oszlop'],
        id_ID: ['Bar tersedia terakhir'],
        it: ['Ultima barra disponibile'],
        ja: ['ご利用可能な最も古いバー'],
        ko: ['마지막 봉'],
        ms_MY: ['Bar terakhir yang tersedia'],
        nl_NL: 'Last available bar',
        pl: ['Ostatnia dostępna świeczka'],
        pt: ['Última barra disponível'],
        ro: 'Last available bar',
        ru: ['Последний доступный бар'],
        sv: ['Sista tillgängliga stapel'],
        th: ['แท่งราคาสุดท้ายทีมีให้'],
        tr: ['Son bulunan çubuk'],
        vi: ['Thanh có sẵn cuối cùng'],
        zh: ['最后一根可用的K线'],
        zh_TW: ['最後一根可用的K線'],
      }
    },
  },
])
