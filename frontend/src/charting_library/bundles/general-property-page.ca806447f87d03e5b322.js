;(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3596],
  {
    73023: (e, t, i) => {
      'use strict'
      i.r(t), i.d(t, { ChartPropertyDefinitionsViewModel: () => Yt })
      var o = i(50151),
        r = i(44352),
        n = i(14483),
        l = (i(67980), i(40493), i(97145)),
        a = i(46141),
        s = i(73955),
        c = i(78159),
        d = i(3228),
        u = i(49535),
        h = i(73986),
        p = i(98425),
        v = i(36298),
        g = i(42960),
        y = i(49152),
        P = i(18611),
        f = i(97906)
      const b = new v.TranslatedString(
          'change symbol description visibility',
          r.t(null, void 0, i(26717)),
        ),
        m = new v.TranslatedString(
          'change symbol legend format',
          r.t(null, void 0, i(95071)),
        ),
        w = new v.TranslatedString(
          'change open market status visibility',
          r.t(null, void 0, i(18644)),
        ),
        S = new v.TranslatedString(
          'change OHLC values visibility',
          r.t(null, void 0, i(57889)),
        ),
        _ = new v.TranslatedString(
          'change bar change visibility',
          r.t(null, void 0, i(45110)),
        ),
        D = new v.TranslatedString(
          'change indicator arguments visibility',
          r.t(null, void 0, i(96162)),
        ),
        V = new v.TranslatedString(
          'change indicator titles visibility',
          r.t(null, void 0, i(31325)),
        ),
        T = new v.TranslatedString(
          'change indicator values visibility',
          r.t(null, void 0, i(99774)),
        ),
        C = new v.TranslatedString(
          'change legend background visibility',
          r.t(null, void 0, i(61061)),
        ),
        k = new v.TranslatedString(
          'change legend background transparency',
          r.t(null, void 0, i(97956)),
        ),
        L = new v.TranslatedString(
          'change volume values visibility',
          r.t(null, void 0, i(9455)),
        ),
        W = new v.TranslatedString(
          'change symbol field visibility',
          r.t(null, void 0, i(6091)),
        ),
        x = r.t(null, void 0, i(15474)),
        M = r.t(null, void 0, i(67369)),
        O = r.t(null, void 0, i(99487)),
        R = r.t(null, void 0, i(22519)),
        G = r.t(null, void 0, i(1111)),
        A = r.t(null, void 0, i(31326)),
        H = r.t(null, void 0, i(68791)),
        F = r.t(null, void 0, i(91322)),
        Z = r.t(null, void 0, i(27331)),
        B = r.t(null, void 0, i(75991)),
        N = r.t(null, void 0, i(24248)),
        E = n.enabled('symbol_info_price_source'),
        j =
          n.enabled('show_symbol_logos') &&
          n.enabled('show_symbol_logo_in_legend')
      var z = i(74304),
        U = i(20345),
        I = i(11095),
        q = i(42226),
        J = i(39875)
      const K = n.enabled('show_average_close_price_line_and_label'),
        Q = new v.TranslatedString(
          'change symbol labels visibility',
          r.t(null, void 0, i(9402)),
        ),
        X = new v.TranslatedString(
          'change symbol last value visibility',
          r.t(null, void 0, i(53150)),
        ),
        Y = new v.TranslatedString(
          'change symbol last value mode',
          r.t(null, void 0, i(28741)),
        ),
        $ =
          (new v.TranslatedString(
            'change symbol previous close value visibility',
            r.t(null, void 0, i(12707)),
          ),
          new v.TranslatedString(
            'change bid and ask labels visibility',
            r.t(null, void 0, i(5100)),
          ),
          new v.TranslatedString(
            'change pre/post market price label visibility',
            r.t(null, void 0, i(49889)),
          ),
          new v.TranslatedString(
            'change high and low price labels visibility',
            r.t(null, void 0, i(66805)),
          )),
        ee = new v.TranslatedString(
          'change average close price label visibility',
          r.t(null, void 0, i(39402)),
        ),
        te =
          (new v.TranslatedString(
            'change indicators and financials name labels visibility',
            r.t(null, void 0, i(59820)),
          ),
          new v.TranslatedString(
            'change indicators name labels visibility',
            r.t(null, void 0, i(87027)),
          )),
        ie =
          (new v.TranslatedString(
            'change indicators and financials value labels visibility',
            r.t(null, void 0, i(90512)),
          ),
          new v.TranslatedString(
            'change indicators value labels visibility',
            r.t(null, void 0, i(14922)),
          )),
        oe = new v.TranslatedString(
          'change no overlapping labels',
          r.t(null, void 0, i(83935)),
        ),
        re = new v.TranslatedString(
          'change countdown to bar close visibility',
          r.t(null, void 0, i(58108)),
        ),
        ne = new v.TranslatedString(
          'change currency label visibility',
          r.t(null, void 0, i(84060)),
        ),
        le = new v.TranslatedString(
          'change scale modes buttons visibility',
          r.t(null, void 0, i(47361)),
        ),
        ae = new v.TranslatedString(
          'change unit label visibility',
          r.t(null, void 0, i(7011)),
        ),
        se = new v.TranslatedString(
          'change currency and unit labels visibility',
          r.t(null, void 0, i(88161)),
        ),
        ce = new v.TranslatedString(
          'change plus button visibility',
          r.t(null, void 0, i(50190)),
        ),
        de = new v.TranslatedString(
          'toggle lock scale',
          r.t(null, void 0, i(21203)),
        ),
        ue = new v.TranslatedString(
          'change price to bar ratio',
          r.t(null, void 0, i(69510)),
        ),
        he = new v.TranslatedString(
          'change date format',
          r.t(null, void 0, i(50457)),
        ),
        pe = new v.TranslatedString(
          'change time hours format',
          r.t(null, void 0, i(76991)),
        ),
        ve =
          (new v.TranslatedString(
            'change day of week on labels',
            r.t(null, void 0, i(7104)),
          ),
          r.t(null, void 0, i(35383))),
        ge = r.t(null, void 0, i(27767)),
        ye =
          (r.t(null, void 0, i(40847)),
          r.t(null, void 0, i(25084)),
          r.t(null, void 0, i(9654))),
        Pe = (r.t(null, void 0, i(29687)), r.t(null, void 0, i(34905))),
        fe =
          (r.t(null, void 0, i(47586)),
          r.t(null, void 0, i(74823)),
          r.t(null, void 0, i(95036))),
        be = r.t(null, void 0, i(60971)),
        me = r.t(null, void 0, i(42502)),
        we = r.t(null, void 0, i(78905)),
        Se = r.t(null, void 0, i(94370)),
        _e = r.t(null, void 0, i(50985)),
        De = r.t(null, void 0, i(77534)),
        Ve = r.t(null, void 0, i(17319)),
        Te = r.t(null, void 0, i(47926)),
        Ce = r.t(null, void 0, i(97378)),
        ke = r.t(null, void 0, i(53224)),
        Le = r.t(null, void 0, i(18219)),
        We = r.t(null, void 0, i(64859)),
        xe = r.t(null, void 0, i(25209)),
        Me = r.t(null, void 0, i(97316)),
        Oe = r.t(null, void 0, i(43637)),
        Re =
          (r.t(null, void 0, i(55090)),
          [
            {
              value: z.PriceAxisLastValueMode.LastPriceAndPercentageValue,
              title: r.t(null, void 0, i(76523)),
            },
            {
              value: z.PriceAxisLastValueMode.LastValueAccordingToScale,
              title: r.t(null, void 0, i(80170)),
            },
          ])
      var Ge = i(48686),
        Ae = i(3347),
        He = i(43715)
      const Fe = new v.TranslatedString(
          'change sessions breaks visibility',
          r.t(null, void 0, i(71589)),
        ),
        Ze = new v.TranslatedString(
          'change sessions breaks color',
          r.t(null, void 0, i(1579)),
        ),
        Be = new v.TranslatedString(
          'change sessions breaks width',
          r.t(null, void 0, i(15035)),
        ),
        Ne = new v.TranslatedString(
          'change sessions breaks style',
          r.t(null, void 0, i(21460)),
        ),
        Ee = r.t(null, void 0, i(59827))
      const je = new v.TranslatedString(
          'change chart background color',
          r.t(null, void 0, i(99011)),
        ),
        ze = new v.TranslatedString(
          'change chart background type',
          r.t(null, void 0, i(72458)),
        ),
        Ue = new v.TranslatedString(
          'change vert grid lines color',
          r.t(null, void 0, i(22722)),
        ),
        Ie = new v.TranslatedString(
          'change horz grid lines color',
          r.t(null, void 0, i(88096)),
        ),
        qe = new v.TranslatedString(
          'change grid lines visibility',
          r.t(null, void 0, i(27764)),
        ),
        Je = new v.TranslatedString(
          'change scales text color',
          r.t(null, void 0, i(35065)),
        ),
        Ke = new v.TranslatedString(
          'change scales font size',
          r.t(null, void 0, i(84382)),
        ),
        Qe = new v.TranslatedString(
          'change scales lines color',
          r.t(null, void 0, i(12468)),
        ),
        Xe = new v.TranslatedString(
          'change pane separators color',
          r.t(null, void 0, i(89032)),
        ),
        Ye = new v.TranslatedString(
          'change crosshair color',
          r.t(null, void 0, i(29951)),
        ),
        $e = new v.TranslatedString(
          'change crosshair width',
          r.t(null, void 0, i(37034)),
        ),
        et = new v.TranslatedString(
          'change crosshair style',
          r.t(null, void 0, i(92027)),
        ),
        tt = new v.TranslatedString(
          'change symbol watermark visibility',
          r.t(null, void 0, i(87159)),
        ),
        it = new v.TranslatedString(
          'change symbol watermark color',
          r.t(null, void 0, i(25616)),
        ),
        ot = new v.TranslatedString(
          'change navigation buttons visibility',
          r.t(null, void 0, i(35646)),
        ),
        rt = new v.TranslatedString(
          'change pane buttons visibility',
          r.t(null, void 0, i(37730)),
        ),
        nt = new v.TranslatedString(
          'change top margin',
          r.t(null, void 0, i(98905)),
        ),
        lt = new v.TranslatedString(
          'change bottom margin',
          r.t(null, void 0, i(10349)),
        ),
        at = new v.TranslatedString(
          'change right margin',
          r.t(null, void 0, i(35636)),
        ),
        st = new v.TranslatedString(
          'change right margin percentage',
          r.t(null, void 0, i(66601)),
        ),
        ct = r.t(null, void 0, i(27331)),
        dt = r.t(null, void 0, i(37174)),
        ut = r.t(null, void 0, i(36426)),
        ht = r.t(null, void 0, i(34403)),
        pt = r.t(null, void 0, i(49199)),
        vt = r.t(null, void 0, i(39392)),
        gt = r.t(null, void 0, i(37229)),
        yt = r.t(null, void 0, i(83182)),
        Pt = r.t(null, void 0, i(73908)),
        ft = r.t(null, void 0, i(46720)),
        bt = r.t(null, void 0, i(77705)),
        mt = r.t(null, void 0, i(74343)),
        wt = r.t(null, void 0, i(50446)),
        St = r.t(null, void 0, i(65994)),
        _t = r.t(null, void 0, i(91757)),
        Dt = r.t(null, void 0, i(21141)),
        Vt = r.t(null, void 0, i(36014)),
        Tt = r.t(null, void 0, i(16812)),
        Ct = r.t(null, { context: 'unit' }, i(50831))
      function kt(e, t, o, s, c, d, u, h, p, v) {
        const g = [],
          P = [],
          f = [],
          b = [],
          m = [],
          w = (0, a.createColorPropertyDefinition)(
            {
              color: (0, a.getColorDefinitionProperty)(
                e,
                t.background,
                null,
                je,
              ),
              gradientColor1: (0, a.getColorDefinitionProperty)(
                e,
                t.backgroundGradientStartColor,
                null,
                je,
              ),
              gradientColor2: (0, a.getColorDefinitionProperty)(
                e,
                t.backgroundGradientEndColor,
                null,
                je,
              ),
              type: (0, a.convertToDefinitionProperty)(e, t.backgroundType, ze),
            },
            { id: 'chartBackground', title: ct, noAlpha: !0 },
          ),
          S = t.vertGridProperties.childs(),
          _ = t.horzGridProperties.childs(),
          D = (0, a.createOptionalTwoColorsPropertyDefinition)(
            {
              option: (0, a.convertToDefinitionProperty)(
                e,
                t.gridLinesMode,
                qe,
              ),
              color1: (0, a.getColorDefinitionProperty)(e, S.color, null, Ue),
              color2: (0, a.getColorDefinitionProperty)(e, _.color, null, Ie),
            },
            {
              id: 'gridLines',
              title: vt,
              options: new l.WatchedValue([
                { title: dt, value: 'both' },
                { title: ut, value: 'vert' },
                { title: ht, value: 'horz' },
                { title: pt, value: 'none' },
              ]),
              color1Visible: v.vertLinesVisible,
              color2Visible: v.horzLinesVisible,
            },
          ),
          V = (0, y.createWVFromGetterAndSubscription)(
            () => 1 !== e.model().panes().length,
            e.model().panesCollectionChanged(),
          ),
          T = (0, a.createLinePropertyDefinition)(
            {
              visible: (0, a.convertFromReadonlyWVToDefinitionProperty)(
                V.ownership(),
              ),
              color: (0, a.getColorDefinitionProperty)(
                e,
                t.separatorColor,
                null,
                Xe,
              ),
            },
            { id: 'paneSeparators', title: Pt },
          ),
          C = t.crossHairProperties.childs(),
          k = (0, a.createLinePropertyDefinition)(
            {
              color: (0, a.getColorDefinitionProperty)(
                e,
                C.color,
                C.transparency,
                Ye,
              ),
              width: (0, a.convertToDefinitionProperty)(e, C.width, $e),
              style: (0, a.convertToDefinitionProperty)(e, C.style, et),
            },
            { id: 'crossHair', title: ft },
          )
        g.push(w, D)
        {
          const t = (function (e) {
            const t = e
                .model()
                .sessions()
                .properties()
                .childs()
                .graphics.childs()
                .vertlines.childs()
                .sessBreaks.childs(),
              i = (0, Ge.combineProperty)(
                (e) => !e,
                e.mainSeries().isDWMProperty().weakReference(),
              )
            return (0, He.createLinePropertyDefinition)(
              {
                visible: (0, Ae.makeProxyDefinitionProperty)(i.ownership()),
                checked: (0, a.convertToDefinitionProperty)(e, t.visible, Fe),
                color: (0, a.getColorDefinitionProperty)(e, t.color, null, Ze),
                width: (0, a.convertToDefinitionProperty)(e, t.width, Be),
                style: (0, a.convertToDefinitionProperty)(e, t.style, Ne),
              },
              { id: 'sessionBeaks', title: Ee },
            )
          })(e)
          g.push(t)
        }
        if ((g.push(T, k), null !== o)) {
          const t = (0, a.createColorPropertyDefinition)(
            {
              checked: (0, a.convertToDefinitionProperty)(e, o.visibility, tt),
              color: (0, a.getColorDefinitionProperty)(e, o.color, null, it),
            },
            { id: 'watermark', title: bt },
          )
          g.push(t)
        }
        const L = (0, a.createTextPropertyDefinition)(
            {
              color: (0, a.getColorDefinitionProperty)(
                e,
                s.textColor,
                null,
                Je,
              ),
              size: (0, a.convertToDefinitionProperty)(e, s.fontSize, Ke),
            },
            { id: 'scalesText', title: gt },
          ),
          W = (0, a.createLinePropertyDefinition)(
            {
              color: (0, a.getColorDefinitionProperty)(
                e,
                s.lineColor,
                null,
                Qe,
              ),
            },
            { id: 'scalesLine', title: yt },
          )
        P.push(L, W)
        const x = (0, a.createOptionsPropertyDefinition)(
            { option: (0, a.convertToDefinitionProperty)(e, d.property, ot) },
            {
              id: 'navButtons',
              title: mt,
              options: new l.WatchedValue(d.values),
            },
          ),
          M = (0, a.createOptionsPropertyDefinition)(
            { option: (0, a.convertToDefinitionProperty)(e, u.property, rt) },
            {
              id: 'paneButtons',
              title: wt,
              options: new l.WatchedValue(u.values),
            },
          )
        f.push(x, M)
        const O = (0, a.createNumberPropertyDefinition)(
            {
              value: (0, a.convertToDefinitionProperty)(e, t.topMargin, nt, [
                U.floor,
              ]),
            },
            {
              type: 0,
              id: 'paneTopMargin',
              title: St,
              min: new l.WatchedValue(0),
              max: new l.WatchedValue(25),
              step: new l.WatchedValue(1),
              unit: new l.WatchedValue('%'),
            },
          ),
          R = (0, a.createNumberPropertyDefinition)(
            {
              value: (0, a.convertToDefinitionProperty)(e, t.bottomMargin, lt, [
                U.floor,
              ]),
            },
            {
              type: 0,
              id: 'paneBottomMargin',
              title: _t,
              min: new l.WatchedValue(0),
              max: new l.WatchedValue(25),
              step: new l.WatchedValue(1),
              unit: new l.WatchedValue('%'),
            },
          )
        if (
          (b.push(O, R), n.enabled('chart_property_page_right_margin_editor'))
        ) {
          const t = {
              value: (0, a.convertFromWVToDefinitionProperty)(e, c.value, at, [
                U.floor,
              ]),
            },
            i = {
              type: 0,
              id: 'paneRightMargin',
              title: Dt,
              min: c.min,
              max: c.max,
              step: new l.WatchedValue(1),
              unit: new l.WatchedValue(Ct),
            }
          if (n.enabled('show_percent_option_for_right_margin')) {
            const o = (0, a.createNumberPropertyDefinition)(
                {
                  ...t,
                  checked: (0, a.convertFromWVToDefinitionProperty)(e, p, st, [
                    (e) => !e,
                    (e) => !e,
                  ]),
                },
                { ...i, title: Tt },
              ),
              r = (0, a.createNumberPropertyDefinition)(
                {
                  checked: (0, a.convertFromWVToDefinitionProperty)(e, p, st),
                  value: (0, a.convertFromWVToDefinitionProperty)(e, h, st, [
                    U.floor,
                  ]),
                },
                {
                  type: 0,
                  id: 'paneRightMarginPercentage',
                  title: Vt,
                  min: new l.WatchedValue(0),
                  max: new l.WatchedValue(99),
                  step: new l.WatchedValue(1),
                  unit: new l.WatchedValue('%'),
                },
              )
            m.push(o), m.push(r)
          } else {
            const e = (0, a.createNumberPropertyDefinition)(t, i)
            b.push(e)
          }
        }
        const G = [
          (0, a.createPropertyDefinitionsGeneralGroup)(
            g,
            'chartBasicStylesAppearanceGroup',
            r.t(null, void 0, i(88364)),
          ),
          (0, a.createPropertyDefinitionsGeneralGroup)(
            P,
            'scalesAppearanceGroup',
            r.t(null, void 0, i(43115)),
          ),
          (0, a.createPropertyDefinitionsGeneralGroup)(
            f,
            'buttonsAppearanceGroup',
            r.t(null, void 0, i(87845)),
          ),
          (0, a.createPropertyDefinitionsGeneralGroup)(
            b,
            'marginsAppearanceGroup',
            r.t(null, void 0, i(66653)),
          ),
        ]
        return (
          m.length > 0 &&
            G.push(
              (0, a.createPropertyDefinitionsGeneralGroup)(
                m,
                'rightMarginsAppearanceGroup',
                r.t(null, void 0, i(40187)),
              ),
            ),
          { definitions: G }
        )
      }
      var Lt = i(15879),
        Wt = i(83407),
        xt = i(53741),
        Mt = i(16164),
        Ot = i(38618),
        Rt = i(53078),
        Gt = i(82038),
        At = i(84806),
        Ht = i(87717),
        Ft = i(5666),
        Zt = i(7621),
        Bt = i(8021),
        Nt = i(60339),
        Et = i(75709),
        jt = i(99165),
        zt = i(84504)
      const Ut = {
          symbol: { active: Bt, default: Rt },
          legend: { active: Nt, default: Gt },
          scales: { active: Et, default: At },
          canvas: { active: i(97660), default: Zt },
          events: { active: zt, default: Ft },
          trading: { active: jt, default: Ht },
        },
        It = r.t(null, void 0, i(89053)),
        qt = r.t(null, void 0, i(79194)),
        Jt = r.t(null, void 0, i(43115)),
        Kt = r.t(null, void 0, i(23238)),
        Qt =
          (r.t(null, void 0, i(26897)),
          r.t(null, void 0, i(90801)),
          r.t(null, void 0, i(70500)),
          r.t(null, void 0, i(78621)),
          r.t(null, void 0, i(30973)),
          !1)
      const Xt = [
        {
          id: 'symbol-text-source-description',
          value: 'description',
          title: r.t(null, void 0, i(29601)),
        },
        {
          id: 'symbol-text-source-ticker',
          value: 'ticker',
          title: r.t(null, void 0, i(23097)),
        },
        {
          id: 'symbol-text-source-ticker-and-description',
          value: 'ticker-and-description',
          title: r.t(null, void 0, i(82168)),
        },
      ]
      n.enabled('symbol_info_long_description') &&
        Xt.push({
          id: 'symbol-text-source-long-description',
          value: 'long-description',
          title: r.t(null, void 0, i(96073)),
        })
      class Yt {
        constructor(e, t, i) {
          ;(this._propertyPages = null),
            (this._maxRightOffsetPropertyObject = null),
            (this._defaultRightOffsetPercentageWatchedValue = null),
            (this._useRightOffsetPercentageWatchedValue = null),
            (this._profitLossOptions = null),
            (this._isDestroyed = !1),
            (this._availableDateFormatValues = null),
            (this._undoModel = e),
            (this._model = this._undoModel.model()),
            (this._series = this._model.mainSeries()),
            (this._chartWidgetProperties = t),
            (this._options = i),
            (this._seriesPropertyDefinitionViewModel =
              this._createSeriesViewModel())
          const o = this._chartWidgetProperties
              .childs()
              .paneProperties.childs(),
            r = (0, y.createWVFromProperty)(o.gridLinesMode)
          ;(this._gridColorsVisibilities = {
            gridLinesMode: r,
            vertLinesVisible: (0, f.combine)(
              (e) => 'both' === e || 'vert' === e,
              r.weakReference(),
            ),
            horzLinesVisible: (0, f.combine)(
              (e) => 'both' === e || 'horz' === e,
              r.weakReference(),
            ),
          }),
            (this._legendPropertyPage = this._createLegendPropertyPage()),
            (this._scalesPropertyPage = this._createScalesPropertyPage()),
            (this._appearancePropertyPage =
              this._createAppearancePropertyPage()),
            (this._tradingPropertyPage = this._createTradingPropertyPage()),
            (this._eventsPropertyPage = this._createEventsPropertyPage()),
            this._series
              .onStyleChanged()
              .subscribe(this, this._updateDefinitions),
            this._series
              .priceScaleChanged()
              .subscribe(this, this._updateDefinitions)
        }
        destroy() {
          var e, t
          null !== this._propertyPages &&
            this._propertyPages
              .filter((e, t) => 0 !== t)
              .forEach((e) => {
                ;(0, a.destroyDefinitions)(e.definitions.value())
              }),
            this._seriesPropertyDefinitionViewModel.destroy(),
            null === (e = this._pipValueTypeSubscription) ||
              void 0 === e ||
              e.unsubscribe(),
            null === (t = this._availableDateFormatValues) ||
              void 0 === t ||
              t.destroy(),
            this._series
              .onStyleChanged()
              .unsubscribe(this, this._updateDefinitions),
            this._series
              .priceScaleChanged()
              .unsubscribe(this, this._updateDefinitions)
          ;(0, o.ensureNotNull)(this._model.timeScale())
            .maxRightOffsetChanged()
            .unsubscribeAll(this),
            this._gridColorsVisibilities.vertLinesVisible.destroy(),
            this._gridColorsVisibilities.horzLinesVisible.destroy(),
            this._gridColorsVisibilities.gridLinesMode.destroy(),
            (this._isDestroyed = !0)
        }
        propertyPages() {
          return null === this._propertyPages
            ? this._seriesPropertyDefinitionViewModel
                .propertyPages()
                .then((e) => {
                  if (this._isDestroyed)
                    throw new Error(
                      'ChartPropertyDefinitionsViewModel already destroyed',
                    )
                  return (
                    null === this._propertyPages &&
                      ((this._propertyPages = [...e]),
                      this._propertyPages.push(
                        this._legendPropertyPage,
                        this._scalesPropertyPage,
                        this._appearancePropertyPage,
                      ),
                      null !== this._tradingPropertyPage &&
                        this._propertyPages.push(this._tradingPropertyPage),
                      null !== this._eventsPropertyPage &&
                        this._propertyPages.push(this._eventsPropertyPage)),
                    this._propertyPages
                  )
                })
            : Promise.resolve(this._propertyPages)
        }
        _updatePlDisplayOptions(e) {
          ;(0, o.ensureNotNull)(this._profitLossOptions).setValue([])
        }
        _updateDefinitions() {
          ;(0, a.destroyDefinitions)(
            this._scalesPropertyPage.definitions.value(),
          )
          const e = this._createScalesDefinitions()
          this._scalesPropertyPage.definitions.setValue(e.definitions)
        }
        _createSeriesViewModel() {
          const e = {
            property: this._model.properties().childs().timezone,
            values: Ot.availableTimezones.map((e) => ({
              value: e.id,
              title: e.title,
            })),
          }
          return new h.SeriesPropertyDefinitionsViewModel(
            this._series,
            this._undoModel,
            'symbol',
            It,
            Ut.symbol,
            e,
          )
        }
        _createLegendPropertyPage() {
          const e = this._chartWidgetProperties
              .childs()
              .paneProperties.childs()
              .legendProperties.childs(),
            t = {
              property: this._series
                .properties()
                .childs()
                .statusViewStyle.childs().symbolTextSource,
              values: Xt,
            },
            o = (function (e, t, o, n, s) {
              const c = [],
                d = []
              if (j) {
                const i = (0, a.createCheckablePropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      t.showLogo,
                      w,
                    ),
                  },
                  { id: 'showLogo', title: x },
                )
                d.push(i)
              }
              const u = (0, a.createOptionsPropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    t.showSeriesTitle,
                    b,
                  ),
                  option: (0, a.convertToDefinitionProperty)(e, o.property, m),
                },
                {
                  id: 'symbolTextSource',
                  title: M,
                  options: new l.WatchedValue(o.values),
                },
              )
              if ((d.push(u), null !== n)) {
                const t = (0, f.combineWithFilteredUpdate)(
                    (t, i) =>
                      'market' === t &&
                      !(0, g.isEconomicSymbol)(e.mainSeries().symbolInfo()),
                    (e, t) => null !== e,
                    e.mainSeries().marketStatusModel().status().weakReference(),
                    e.mainSeries().symbolResolvingActive().weakReference(),
                  ),
                  i = (0, a.createCheckablePropertyDefinition)(
                    {
                      checked: (0, a.convertToDefinitionProperty)(e, n, w),
                      visible: (0, a.convertFromReadonlyWVToDefinitionProperty)(
                        t.ownership(),
                      ),
                    },
                    { id: 'showOpenMarketStatus', title: B },
                  )
                d.push(i)
              }
              const h = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    t.showSeriesOHLC,
                    S,
                  ),
                },
                { id: 'ohlcTitle', title: O },
              )
              d.push(h)
              const p = (0, y.combineProperty)(
                  (e) => 12 !== e,
                  e.mainSeries().properties().childs().style.weakReference(),
                ),
                v = (0, a.createCheckablePropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      t.showBarChange,
                      _,
                    ),
                    visible: (0, a.makeProxyDefinitionProperty)(p.ownership()),
                  },
                  { id: 'barChange', title: R },
                )
              if (
                (d.push(v),
                d.push(
                  (0, a.createCheckablePropertyDefinition)(
                    {
                      checked: (0, a.convertToDefinitionProperty)(
                        e,
                        t.showVolume,
                        L,
                      ),
                    },
                    { id: 'barVolume', title: G },
                  ),
                ),
                E)
              ) {
                const i = (0, f.combineWithFilteredUpdate)(
                  () =>
                    e
                      .model()
                      .symbolSources()
                      .some((e) => {
                        var t
                        return (
                          void 0 !==
                          (null === (t = e.symbolInfo()) || void 0 === t
                            ? void 0
                            : t.price_source_id)
                        )
                      }),
                  (e) => !e,
                  e.model().symbolSourceResolvingActive().weakReference(),
                  (0, y.createWVFromGetterAndSubscription)(
                    () => e.model().symbolSources().length,
                    e.model().symbolSourceCollectionChanged(),
                  ).ownership(),
                )
                d.push(
                  (0, a.createCheckablePropertyDefinition)(
                    {
                      disabled: (0,
                      a.convertFromReadonlyWVToDefinitionProperty)(
                        e.model().symbolSourceResolvingActive().weakReference(),
                      ),
                      checked: (0, a.convertToDefinitionProperty)(
                        e,
                        t.showPriceSource,
                        W,
                      ),
                      visible: (0, a.convertFromReadonlyWVToDefinitionProperty)(
                        i.ownership(),
                      ),
                    },
                    { id: 'priceSource', title: N },
                  ),
                )
              }
              c.push(
                (0, a.createPropertyDefinitionsGeneralGroup)(
                  d,
                  'seriesLegendVisibilityGroup',
                  r.t(null, void 0, i(89053)),
                ),
              )
              const z = [],
                U = (0, a.createCheckablePropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      t.showStudyArguments,
                      D,
                    ),
                  },
                  { id: 'studyArguments', title: H },
                ),
                I = (0, a.createCheckableSetPropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      t.showStudyTitles,
                      V,
                    ),
                  },
                  { id: 'studyTitles', title: A },
                  [U],
                ),
                q = (0, a.createCheckablePropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      t.showStudyValues,
                      T,
                    ),
                  },
                  { id: 'studyValues', title: F },
                ),
                J = (0, y.createWVFromGetterAndSubscription)(
                  () =>
                    e
                      .model()
                      .priceDataSources()
                      .some(
                        (e) =>
                          !(0, P.isActingAsSymbolSource)(e) &&
                          e.showInObjectTree(),
                      ),
                  e.model().dataSourceCollectionChanged(),
                )
              z.push(I, q),
                c.push(
                  (0, a.createPropertyDefinitionsGeneralGroup)(
                    z,
                    'studiesLegendVisibilityGroup',
                    r.t(null, void 0, i(61142)),
                    J,
                  ),
                )
              const K = [],
                Q = (0, a.createTransparencyPropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      t.showBackground,
                      C,
                    ),
                    transparency: (0, a.convertToDefinitionProperty)(
                      e,
                      t.backgroundTransparency,
                      k,
                    ),
                  },
                  { id: 'legendBgTransparency', title: Z },
                )
              return (
                K.push(Q),
                c.push(
                  (0, a.createPropertyDefinitionsGeneralGroup)(
                    K,
                    'generalLegendGroup',
                  ),
                ),
                { definitions: c }
              )
            })(
              this._undoModel,
              e,
              t,
              this._options.marketStatusWidgetEnabled
                ? p.showMarketOpenStatusProperty
                : null,
            )
          return (0, s.createPropertyPage)(o, 'legend', qt, Ut.legend)
        }
        _createScalesPropertyPage() {
          const e = this._createScalesDefinitions()
          return (0, s.createPropertyPage)(e, 'scales', Jt, Ut.scales)
        }
        _createScalesDefinitions() {
          const e = this._chartWidgetProperties
              .childs()
              .scalesProperties.childs(),
            t = {
              property: this._model.properties().childs()
                .priceScaleSelectionStrategyName,
              values: (0, u.allPriceScaleSelectionStrategyInfo)().map((e) => ({
                value: e.name,
                title: e.title,
              })),
            }
          null === this._availableDateFormatValues &&
            (this._availableDateFormatValues = new l.WatchedValue(
              (function (e = !1) {
                const t = new Date(Date.UTC(1997, 8, 29))
                return Lt.availableDateFormats.map((i) => ({
                  value: i,
                  title: new xt.DateFormatter(i, e).format(t),
                }))
              })(),
            ).spawn())
          const o = {
              property: Wt.dateFormatProperty,
              values: this._availableDateFormatValues,
            },
            s = {
              property: Mt.timeHoursFormatProperty,
              values: [
                { value: '24-hours', title: r.t(null, void 0, i(55838)) },
                { value: '12-hours', title: r.t(null, void 0, i(19648)) },
              ],
            },
            c = this._model.mainSeriesScaleRatioProperty()
          return (function (e, t, i, o) {
            const r = o.seriesPriceScale.properties().childs(),
              s = [],
              c = [],
              d = [],
              u = []
            if (o.seriesHasClosePrice) {
              const t = (0, a.createCheckablePropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      i.showSymbolLabels,
                      Q,
                    ),
                  },
                  { id: 'symbolNameLabel', title: ve },
                ),
                o = (0, a.createOptionsPropertyDefinition)(
                  {
                    checked: (0, a.convertToDefinitionProperty)(
                      e,
                      i.showSeriesLastValue,
                      X,
                    ),
                    option: (0, a.convertToDefinitionProperty)(
                      e,
                      i.seriesLastValueMode,
                      Y,
                    ),
                  },
                  {
                    id: 'symbolLastValueLabel',
                    title: ge,
                    options: new l.WatchedValue(Re),
                  },
                )
              c.push(t, o)
            }
            const h = t.highLowAvgPrice.childs(),
              p = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    h.highLowPriceLabelsVisible,
                    $,
                  ),
                },
                { id: 'highLowPriceLabels', title: be },
              )
            if ((c.push(p), K)) {
              const t = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    h.averageClosePriceLabelVisible,
                    ee,
                  ),
                },
                { id: 'averageClosePriceLabel', title: fe },
              )
              c.push(t)
            }
            {
              const t = (0, a.createCheckablePropertyDefinition)(
                {
                  visible: (0, a.convertFromReadonlyWVToDefinitionProperty)(
                    (0, y.createWVFromGetterAndSubscription)(
                      () =>
                        e
                          .model()
                          .priceDataSources()
                          .some(
                            (e) =>
                              !(0, P.isActingAsSymbolSource)(e) &&
                              e.showInObjectTree(),
                          ),
                      e.model().dataSourceCollectionChanged(),
                    ).ownership(),
                  ),
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    i.showStudyPlotLabels,
                    te,
                  ),
                },
                { id: 'studyNameLabel', title: ye },
              )
              c.push(t)
            }
            {
              const t = (0, a.createCheckablePropertyDefinition)(
                {
                  visible: (0, a.convertFromReadonlyWVToDefinitionProperty)(
                    (0, y.createWVFromGetterAndSubscription)(
                      () =>
                        e
                          .model()
                          .priceDataSources()
                          .some(
                            (e) =>
                              !(0, P.isActingAsSymbolSource)(e) &&
                              e.showInObjectTree(),
                          ),
                      e.model().dataSourceCollectionChanged(),
                    ).ownership(),
                  ),
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    i.showStudyLastValue,
                    ie,
                  ),
                },
                { id: 'studyLastValueLabel', title: Pe },
              )
              c.push(t)
            }
            const v = (0, a.createCheckablePropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  e,
                  r.alignLabels,
                  oe,
                ),
              },
              { id: 'noOverlappingLabels', title: me },
            )
            if (
              (c.push(v),
              s.push(
                (0, a.createPropertyDefinitionsGeneralGroup)(
                  c,
                  'scalesLabelsGroup',
                  we,
                ),
              ),
              o.countdownEnabled)
            ) {
              const i = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    t.showCountdown,
                    re,
                  ),
                },
                { id: 'countdown', title: Se },
              )
              d.push(i)
            }
            if (e.crossHairSource().isMenuEnabled()) {
              const t = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    e,
                    I.addPlusButtonProperty,
                    ce,
                  ),
                },
                { id: 'addPlusButton', title: Ce, solutionId: void 0 },
              )
              d.push(t)
            }
            if (o.currencyConversionEnabled || o.unitConversionEnabled) {
              const t =
                  o.currencyConversionEnabled && o.unitConversionEnabled
                    ? Ve
                    : o.currencyConversionEnabled
                      ? _e
                      : De,
                i =
                  o.currencyConversionEnabled && o.unitConversionEnabled
                    ? se
                    : o.currencyConversionEnabled
                      ? ne
                      : ae,
                r = (0, a.createOptionsPropertyDefinition)(
                  {
                    option: (0, a.convertToDefinitionProperty)(
                      e,
                      (0, q.currencyUnitVisibilityProperty)(),
                      i,
                    ),
                  },
                  {
                    id: 'scalesCurrencyUnit',
                    title: t,
                    options: new l.WatchedValue(
                      (0, q.currencyUnitVisibilityOptions)(),
                    ),
                  },
                )
              d.push(r)
            }
            const g = (0, a.createOptionsPropertyDefinition)(
                {
                  option: (0, a.convertToDefinitionProperty)(
                    e,
                    (0, J.autoLogButtonsVisibilityProperty)(),
                    le,
                  ),
                },
                {
                  id: 'autoLogButtonsVisibility',
                  title: Te,
                  options: new l.WatchedValue(
                    (0, J.autoLogButtonsVisibilityOptions)(),
                  ),
                },
              ),
              f = (0, a.createNumberPropertyDefinition)(
                {
                  checked: (0, a.getLockPriceScaleDefinitionProperty)(
                    e,
                    r.lockScale,
                    o.seriesPriceScale,
                    de,
                  ),
                  value: (0, a.getScaleRatioDefinitionProperty)(
                    e,
                    o.mainSeriesScaleRatioProperty,
                    ue,
                    [(0, U.limitedPrecision)(7), (e) => e],
                  ),
                },
                {
                  id: 'lockScale',
                  title: Le,
                  min: new l.WatchedValue(
                    o.mainSeriesScaleRatioProperty.getMinValue(),
                  ),
                  max: new l.WatchedValue(
                    o.mainSeriesScaleRatioProperty.getMaxValue(),
                  ),
                  step: new l.WatchedValue(
                    o.mainSeriesScaleRatioProperty.getStepChangeValue(),
                  ),
                },
              ),
              b = (0, a.createOptionsPropertyDefinition)(
                {
                  option: (0,
                  a.getPriceScaleSelectionStrategyDefinitionProperty)(
                    e,
                    o.scalesPlacementPropertyObj.property,
                  ),
                },
                {
                  id: 'scalesPlacement',
                  title: ke,
                  options: new l.WatchedValue(
                    o.scalesPlacementPropertyObj.values,
                  ),
                },
              )
            if (
              (d.push(g, f, b),
              s.push(
                (0, a.createPropertyDefinitionsGeneralGroup)(
                  d,
                  'scalesPriceScaleGroup',
                  We,
                ),
              ),
              n.enabled('scales_date_format'))
            ) {
              const t = (0, a.createOptionsPropertyDefinition)(
                {
                  option: (0, a.convertToDefinitionProperty)(
                    e,
                    o.dateFormatPropertyObj.property,
                    he,
                  ),
                },
                {
                  id: 'dateFormat',
                  title: xe,
                  options: o.dateFormatPropertyObj.values,
                },
              )
              u.push(t)
            }
            if (n.enabled('scales_time_hours_format')) {
              const t = (0, a.createOptionsPropertyDefinition)(
                {
                  option: (0, a.convertToDefinitionProperty)(
                    e,
                    o.timeHoursFormatPropertyObj.property,
                    pe,
                  ),
                },
                {
                  id: 'timeHoursFormat',
                  title: Me,
                  options: new l.WatchedValue(
                    o.timeHoursFormatPropertyObj.values,
                  ),
                },
              )
              u.push(t)
            }
            return (
              u.length > 0 &&
                s.push(
                  (0, a.createPropertyDefinitionsGeneralGroup)(
                    u,
                    'scalesTimeScaleGroup',
                    Oe,
                  ),
                ),
              { definitions: s }
            )
          })(this._undoModel, this._series.properties().childs(), e, {
            disableSeriesPrevCloseValueProperty: this._series.isDWMProperty(),
            seriesHasClosePrice: this._series.hasClosePrice(),
            seriesPriceScale: this._series.priceScale(),
            mainSeriesScaleRatioProperty: c,
            scalesPlacementPropertyObj: t,
            dateFormatPropertyObj: o,
            timeHoursFormatPropertyObj: s,
            currencyConversionEnabled: this._options.currencyConversionEnabled,
            unitConversionEnabled: this._options.unitConversionEnabled,
            countdownEnabled: this._options.countdownEnabled,
            withWeekdayProperty: void 0,
          })
        }
        _createMaxOffsetPropertyObject() {
          const e = (0, o.ensureNotNull)(this._model.timeScale()),
            t = new l.WatchedValue(Math.floor(e.maxRightOffset()))
          e.maxRightOffsetChanged().subscribe(this, (e) => {
            t.setValue(Math.floor(e))
          }),
            (this._maxRightOffsetPropertyObject = {
              value: e.defaultRightOffset(),
              min: new l.WatchedValue(0),
              max: t,
            })
        }
        _createDefaultRightOffsetPercentageWatchedValue() {
          const e = (0, o.ensureNotNull)(this._model.timeScale())
          this._defaultRightOffsetPercentageWatchedValue =
            e.defaultRightOffsetPercentage()
        }
        _createUseRightOffsetPercentageWatchedValue() {
          const e = (0, o.ensureNotNull)(this._model.timeScale())
          this._useRightOffsetPercentageWatchedValue =
            e.usePercentageRightOffset()
        }
        _createAppearancePropertyPage() {
          const e = this._chartWidgetProperties.childs(),
            t = e.paneProperties.childs(),
            i = e.scalesProperties.childs(),
            r = this._model.watermarkSource()
          let n = null
          null !== r && (n = r.properties().childs())
          const l = { property: c.property(), values: c.availableValues() },
            a = { property: d.property(), values: d.availableValues() }
          null === this._maxRightOffsetPropertyObject &&
            this._createMaxOffsetPropertyObject(),
            null === this._defaultRightOffsetPercentageWatchedValue &&
              this._createDefaultRightOffsetPercentageWatchedValue(),
            null === this._useRightOffsetPercentageWatchedValue &&
              this._createUseRightOffsetPercentageWatchedValue()
          const u = (0, o.ensureNotNull)(this._maxRightOffsetPropertyObject),
            h = (0, o.ensureNotNull)(
              this._defaultRightOffsetPercentageWatchedValue,
            ),
            p = (0, o.ensureNotNull)(
              this._useRightOffsetPercentageWatchedValue,
            ),
            v = kt(
              this._undoModel,
              t,
              n,
              i,
              u,
              l,
              a,
              h,
              p,
              this._gridColorsVisibilities,
            )
          return (0, s.createPropertyPage)(v, 'canvas', Kt, Ut.canvas)
        }
        _createTradingPropertyPage() {
          return null
        }
        _createEventsPropertyPage() {
          return null
        }
      }
    },
    84504: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M9.75 3c.41 0 .75.34.75.75V5h7V3.75a.75.75 0 0 1 1.5 0V5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4V3.75c0-.41.34-.75.75-.75zM9 6.5h10A2.5 2.5 0 0 1 21.5 9v1.5h-15V9A2.5 2.5 0 0 1 9 6.5zM6.5 12v7A2.5 2.5 0 0 0 9 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-7h-15z"/></svg>'
    },
    8021: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M12 7h-.75V4h-1.5v3H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h.75v3h1.5v-3H12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM9.5 19.5v-11h2v11h-2Zm8-3v-5h2v5h-2Zm.24-6.5H17a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.75v3h1.5v-3H20a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-.76V7h-1.5v3Z"/></svg>'
    },
    97660: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-width="1.5" d="m7.5 16.5-1 1v4h4l1-1m-4-4 9-9m-9 9 4 4m0 0 9-9m-4-4 .59-.59a2 2 0 0 1 2.82 0L21.1 8.1a2 2 0 0 1 0 2.82l-.59.59m-4-4 2 2 2 2"/></svg>'
    },
    75709: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5 12 8M8.5 4.5 5 8"/></svg>'
    },
    60339: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M7 7.5h14a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1ZM5 8c0-1.1.9-2 2-2h14a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Zm13 5H6v1.5h12V13ZM6 17h12v1.5H6V17Zm12 4H6v1.5h12V21Z"/></svg>'
    },
    99165: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m17.53 15.08.45.33.44-.33 6.65-4.92a2.3 2.3 0 0 0 .42-3.3 2.35 2.35 0 0 0-3.23-.4l-4.28 3.18-4.29-3.18a2.35 2.35 0 0 0-3.22.4 2.3 2.3 0 0 0 .42 3.3l6.64 4.92Zm6.64-6.1-6.2 4.59-6.19-4.6a.83.83 0 0 1-.15-1.18.85.85 0 0 1 1.17-.15l4.73 3.51.45.33.44-.33 4.74-3.5a.85.85 0 0 1 1.16.14c.3.37.23.9-.15 1.19Zm-13.7 3.94-.45-.33-.44.33-6.65 4.92a2.3 2.3 0 0 0-.42 3.3 2.35 2.35 0 0 0 3.23.4l4.28-3.18 4.29 3.18c1 .75 2.44.57 3.22-.4a2.3 2.3 0 0 0-.42-3.3l-6.64-4.92Zm-6.64 6.1 6.2-4.59 6.19 4.6c.38.27.45.81.15 1.18a.85.85 0 0 1-1.17.15l-4.73-3.51-.45-.33-.44.33-4.74 3.5a.85.85 0 0 1-1.16-.14.83.83 0 0 1 .15-1.19Z"/></svg>'
    },
    5666: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M10 5h8V3h1v2h.5A3.5 3.5 0 0 1 23 8.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 5 19.5v-11A3.5 3.5 0 0 1 8.5 5H9V3h1v2Zm12 5V8.5A2.5 2.5 0 0 0 19.5 6h-11A2.5 2.5 0 0 0 6 8.5V10h16ZM6 11v8.5A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5V11H6Z"/></svg>'
    },
    53078: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M11 4h-1v3H8.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H10v3h1v-3h1.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11V4ZM9 8v12h3V8H9Zm10-1h-1v3h-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H18v3h1v-3h1.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H19V7Zm-2 10v-6h3v6h-3Z"/></svg>'
    },
    7621: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M16.73 6.56a2.5 2.5 0 0 1 3.54 0l1.17 1.17a2.5 2.5 0 0 1 0 3.54l-.59.58-9 9-1 1-.14.15H6v-4.7l.15-.15 1-1 9-9 .58-.59Zm2.83.7a1.5 1.5 0 0 0-2.12 0l-.23.24 3.29 3.3.23-.24a1.5 1.5 0 0 0 0-2.12l-1.17-1.17Zm.23 4.24L16.5 8.2l-8.3 8.3 3.3 3.3 8.3-8.3Zm-9 9L7.5 17.2l-.5.5V21h3.3l.5-.5Z"/></svg>'
    },
    84806: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5L12 8M8.5 4.5L5 8"/></svg>'
    },
    82038: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M7 7h14a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2ZM5 8c0-1.1.9-2 2-2h14a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Zm13 5H6v1h12v-1Zm0 4H6v1h12v-1ZM6 21h12v1H6v-1Z"/></svg>'
    },
    87717: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.8441 8.61921C13.232 8.13425 13.9481 8.07567 14.4097 8.49112L18.1651 11.871L18.4996 12.172L18.8341 11.871L22.5896 8.49121C23.0512 8.07582 23.7672 8.13438 24.1551 8.61927C24.5188 9.07382 24.4567 9.73484 24.0147 10.1137L18.4996 14.8409L12.9845 10.1137C12.5425 9.73482 12.4804 9.07379 12.8441 8.61921ZM15.0787 7.74783C14.1896 6.94765 12.8104 7.06048 12.0632 7.99452C11.3628 8.87007 11.4824 10.1432 12.3338 10.8729L18.1742 15.879L18.4996 16.158L18.825 15.879L24.6655 10.8729C25.5168 10.1432 25.6364 8.87006 24.936 7.99454C24.1888 7.06061 22.8097 6.94781 21.9207 7.7479L18.4996 10.8267L15.0787 7.74783ZM15.1551 18.8798C14.7672 19.3647 14.0511 19.4233 13.5895 19.0078L9.83409 15.628L9.49962 15.3269L9.16514 15.6279L5.4096 19.0077C4.94802 19.4231 4.23205 19.3646 3.84411 18.8797C3.48044 18.4251 3.54256 17.7641 3.98455 17.3853L9.49961 12.6581L15.0147 17.3853C15.4567 17.7641 15.5188 18.4252 15.1551 18.8798ZM12.9205 19.7511C13.8096 20.5513 15.1888 20.4385 15.936 19.5044C16.6364 18.6289 16.5168 17.3557 15.6655 16.626L9.82501 11.6199L9.49961 11.341L9.17421 11.6199L3.33376 16.626C2.48244 17.3557 2.3628 18.6289 3.06327 19.5044C3.81047 20.4383 5.1895 20.5512 6.07854 19.7511L9.4996 16.6723L12.9205 19.7511Z"/></svg>'
    },
  },
])
